// modules/media_viewer/native/useMediaViewerSyncer.tsx
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
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.THUMBNAIL_MARGIN;
    var _closure1_slot5 = var6;
    var6 = var3.THUMBNAIL_HEIGHT;
    var _closure1_slot6 = var6;
    var6 = var3.THUMBNAIL_MAX_WIDTH;
    var _closure1_slot7 = var6;
    var6 = var3.THUMBNAIL_MIN_WIDTH;
    var _closure1_slot8 = var6;
    var3 = var3.THUMBNAIL_WIDTH_MARGIN;
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = "function useMediaViewerSyncerTsx1(){const{thumbnailsScrolling,SCROLLING_DRAG,swipeSource}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()|SCROLLING_DRAG);swipeSource.set('thumbnails');}";
    var3.code = var6;
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = 'function useMediaViewerSyncerTsx2(){const{thumbnailsScrolling,SCROLLING_DRAG}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()&~SCROLLING_DRAG);}';
    var3.code = var6;
    var _closure1_slot11 = var3;
    var3 = {};
    var6 = "function useMediaViewerSyncerTsx3(event){const{variableWidthThumbnailsEnabled,thumbnailScrollPositions,thumbnailSize,swipeSource,maxIndex,thumbnailsIndex,thumbnailsAnimateTo,selectedIndex,viewerScrolling,thumbnailsScrolling,runOnJS,onSelectedIndexChange}=this.__closure;let thumbnails=0;if(variableWidthThumbnailsEnabled){if(event.contentOffset.x<0){thumbnails=0;}else if(event.contentOffset.x>=thumbnailScrollPositions[thumbnailScrollPositions.length-1].end){thumbnails=thumbnailScrollPositions.length-1;}else{for(let i=0;i<thumbnailScrollPositions.length;i++){const startPos=thumbnailScrollPositions[i].scrollStart;let endPos=i<thumbnailScrollPositions.length-1?thumbnailScrollPositions[i+1].scrollStart:startPos;if(i===thumbnailScrollPositions.length-1){endPos=thumbnailScrollPositions[i].end;}if(event.contentOffset.x>=startPos&&event.contentOffset.x<endPos){thumbnails=i+(event.contentOffset.x-startPos)/(endPos-startPos);break;}}}}else{thumbnails=event.contentOffset.x/thumbnailSize;}if(swipeSource.get()==='thumbnails'||Math.abs(Math.round(thumbnails)-thumbnails)<0.01){const index=Math.max(0,Math.min(Math.round(thumbnails),maxIndex));thumbnailsIndex.set(index);}if(thumbnailsAnimateTo.get()>=0){if(thumbnailsIndex.get()===thumbnailsAnimateTo.get()){thumbnailsAnimateTo.set(-1);selectedIndex.set(thumbnailsIndex.get());}return;}const wasTouched=viewerScrolling.get()!==0||thumbnailsScrolling.get()!==0;if(wasTouched&&thumbnailsIndex.get()!==selectedIndex.get()){selectedIndex.set(thumbnailsIndex.get());runOnJS(onSelectedIndexChange)();}}";
    var3.code = var6;
    var _closure1_slot12 = var3;
    var3 = {};
    var6 = "function useMediaViewerSyncerTsx4(){const{thumbnailsScrolling,SCROLLING_MOMENTUM,swipeSource}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()|SCROLLING_MOMENTUM);swipeSource.set('thumbnails');}";
    var3.code = var6;
    var _closure1_slot13 = var3;
    var3 = {};
    var6 = 'function useMediaViewerSyncerTsx5(){const{thumbnailsScrolling,SCROLLING_MOMENTUM}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()&~SCROLLING_MOMENTUM);}';
    var3.code = var6;
    var _closure1_slot14 = var3;
    var3 = {};
    var6 = 'function useMediaViewerSyncerTsx6(){const{thumbnailsAnimateTo,variableWidthThumbnailsEnabled,runOnJS,scrollVarWidthThumbnails,scrollTo,ref,thumbnailSize}=this.__closure;if(thumbnailsAnimateTo.get()<0)return;if(variableWidthThumbnailsEnabled){runOnJS(scrollVarWidthThumbnails)(thumbnailsAnimateTo.get());}else{scrollTo(ref,thumbnailsAnimateTo.get()*thumbnailSize,0,true);}}';
    var3.code = var6;
    var _closure1_slot15 = var3;
    var3 = {};
    var6 = 'function useMediaViewerSyncerTsx7(){const{viewerScrolling,thumbnailsIndex,viewerPos,variableWidthThumbnailsEnabled,runOnJS,lerpScrollVarWidthThumbnails,scrollTo,ref,thumbnailSize}=this.__closure;if(viewerScrolling.get()===0)return;else if(thumbnailsIndex.get()!==viewerPos.get()){if(variableWidthThumbnailsEnabled){runOnJS(lerpScrollVarWidthThumbnails)(viewerPos.get());}else{scrollTo(ref,viewerPos.get()*thumbnailSize,0,false);}}}';
    var3.code = var6;
    var _closure1_slot16 = var3;
    var3 = {};
    var6 = "function useMediaViewerSyncerTsx8(){const{thumbnailsScrolling,interpolate,viewerPos,interpolateInput,interpolateOutput}=this.__closure;return thumbnailsScrolling.get()>0?0:-interpolate(viewerPos.get(),interpolateInput,interpolateOutput,'clamp');}";
    var3.code = var6;
    var _closure1_slot17 = var3;
    var3 = {};
    var6 = 'function useMediaViewerSyncerTsx9(){const{viewerScrolling,headerBufferSize,margin,withSpring}=this.__closure;return{width:viewerScrolling.get()>0?headerBufferSize+margin.get():withSpring(headerBufferSize+margin.get(),{overshootClamping:true})};}';
    var3.code = var6;
    var _closure1_slot18 = var3;
    var3 = {};
    var6 = 'function useMediaViewerSyncerTsx10(){const{viewerScrolling,footerBufferSize,margin,withSpring}=this.__closure;return{width:viewerScrolling.get()>0?footerBufferSize+margin.get():withSpring(footerBufferSize+margin.get(),{overshootClamping:true})};}';
    var3.code = var6;
    var _closure1_slot19 = var3;
    var3 = {};
    var6 = "function useMediaViewerSyncerTsx11(){const{interpolate,viewerPos,index}=this.__closure;return interpolate(viewerPos.get(),[index-1,index,index+1],[0.4,1,0.4],'clamp');}";
    var3.code = var6;
    var _closure1_slot20 = var3;
    var3 = {};
    var6 = "function useMediaViewerSyncerTsx13(){const{thumbnailsScrolling,THUMBNAIL_MIN_WIDTH,interpolate,viewerPos,index,sourceWidth}=this.__closure;return thumbnailsScrolling.get()>0?THUMBNAIL_MIN_WIDTH:interpolate(viewerPos.get(),[index-1,index,index+1],[THUMBNAIL_MIN_WIDTH,sourceWidth,THUMBNAIL_MIN_WIDTH],'clamp');}";
    var3.code = var6;
    var _closure1_slot21 = var3;
    var3 = {};
    var6 = 'function useMediaViewerSyncerTsx14(){const{viewerScrolling,_width,withSpring,THUMBNAIL_HEIGHT,opacity}=this.__closure;return{width:viewerScrolling.get()>0?_width.get():withSpring(_width.get(),{overshootClamping:true}),height:THUMBNAIL_HEIGHT,opacity:opacity.get()};}';
    var3.code = var6;
    var _closure1_slot22 = var3;
    var3 = {};
    var6 = 'function useMediaViewerSyncerTsx15(){const{zoomed}=this.__closure;return!zoomed.get();}';
    var3.code = var6;
    var _closure1_slot23 = var3;
    var3 = {};
    var6 = 'function useMediaViewerSyncerTsx16(){const{thumbnailsAnimateTo,scrollTo,ref,screenWidth}=this.__closure;if(thumbnailsAnimateTo.get()===-1)return;scrollTo(ref,thumbnailsAnimateTo.get()*screenWidth,0,false);}';
    var3.code = var6;
    var _closure1_slot24 = var3;
    var3 = {};
    var6 = 'function useMediaViewerSyncerTsx17(){const{thumbnailsScrolling,viewerScrolling,thumbnailsAnimateTo,scrollTo,ref,thumbnailsIndex,screenWidth}=this.__closure;if(thumbnailsScrolling.get()===0||viewerScrolling.get()>0||thumbnailsAnimateTo.get()!==-1)return;scrollTo(ref,thumbnailsIndex.get()*screenWidth,0,false);}';
    var3.code = var6;
    var _closure1_slot25 = var3;
    var3 = {};
    var6 = "function useMediaViewerSyncerTsx18(){const{viewerScrolling,SCROLLING_DRAG,swipeSource}=this.__closure;viewerScrolling.set(viewerScrolling.get()|SCROLLING_DRAG);swipeSource.set('viewer');}";
    var3.code = var6;
    var _closure1_slot26 = var3;
    var3 = {};
    var6 = 'function useMediaViewerSyncerTsx19(){const{viewerScrolling,SCROLLING_DRAG}=this.__closure;viewerScrolling.set(viewerScrolling.get()&~SCROLLING_DRAG);}';
    var3.code = var6;
    var _closure1_slot27 = var3;
    var3 = {};
    var6 = 'function useMediaViewerSyncerTsx20(pos){const{viewerPos}=this.__closure;viewerPos.set(pos);}';
    var3.code = var6;
    var _closure1_slot28 = var3;
    var3 = {};
    var6 = "function useMediaViewerSyncerTsx21(){const{viewerScrolling,SCROLLING_MOMENTUM,swipeSource}=this.__closure;viewerScrolling.set(viewerScrolling.get()|SCROLLING_MOMENTUM);swipeSource.set('viewer');}";
    var3.code = var6;
    var _closure1_slot29 = var3;
    var3 = {};
    var6 = 'function useMediaViewerSyncerTsx22(){const{viewerScrolling,SCROLLING_MOMENTUM}=this.__closure;viewerScrolling.set(viewerScrolling.get()&~SCROLLING_MOMENTUM);}';
    var3.code = var6;
    var _closure1_slot30 = var3;
    var3 = {};
    var6 = 'function useMediaViewerSyncerTsx23(event){const{viewerScrolling,thumbnailsScrolling,thumbnailsAnimateTo,onScrollWorklets,screenWidth}=this.__closure;if(viewerScrolling.get()===0&&thumbnailsScrolling.get()===0&&thumbnailsAnimateTo.get()===-1)return;onScrollWorklets.onScroll(event.contentOffset.x/screenWidth);}';
    var3.code = var6;
    var _closure1_slot31 = var3;
    var3 = {};
    var6 = 'function useMediaViewerSyncerTsx24(){const{index,selectedIndex}=this.__closure;return index===selectedIndex.get();}';
    var3.code = var6;
    var _closure1_slot32 = var3;
    var3 = {};
    var6 = 'function useMediaViewerSyncerTsx25(result,previous){const{runOnJS,setVisible}=this.__closure;if(previous==null||previous===result)return;runOnJS(setVisible)(result);}';
    var3.code = var6;
    var _closure1_slot33 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_viewer/native/useMediaViewerSyncer.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var2 = arg0;
        var7 = var2.sources;
        var _closure2_slot0 = var7;
        var1 = var2.initialIndex;
        var _closure2_slot1 = var1;
        var5 = var2.onEndReached;
        var _closure2_slot2 = var5;
        var4 = var2.onEndReachedThreshold;
        var _closure2_slot3 = var4;
        var3 = _closure1_slot4;
        var6 = var3.useMemo;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var8 = _closure2_slot1;
            var0 = {};
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 3;
            var5 = var4[var1];
            var3 = undefined;
            var6 = var2.bind(var3)(var5);
            var5 = var6.makeMutable;
            var5 = var5.bind(var6)(var8);
            var0.selectedIndex = var5;
            var5 = var4[var1];
            var6 = var2.bind(var3)(var5);
            var5 = var6.makeMutable;
            var5 = var5.bind(var6)(var8);
            var0.thumbnailsIndex = var5;
            var5 = var4[var1];
            var6 = var2.bind(var3)(var5);
            var5 = var6.makeMutable;
            var7 = 0;
            var5 = var5.bind(var6)(var7);
            var0.thumbnailsScrolling = var5;
            var5 = var4[var1];
            var9 = var2.bind(var3)(var5);
            var6 = var9.makeMutable;
            var5 = -1;
            var5 = var6.bind(var9)(var5);
            var0.thumbnailsAnimateTo = var5;
            var5 = var4[var1];
            var6 = var2.bind(var3)(var5);
            var5 = var6.makeMutable;
            var5 = var5.bind(var6)(var8);
            var0.viewerPos = var5;
            var5 = var4[var1];
            var6 = var2.bind(var3)(var5);
            var5 = var6.makeMutable;
            var5 = var5.bind(var6)(var7);
            var0.viewerScrolling = var5;
            var5 = var4[var1];
            var7 = var2.bind(var3)(var5);
            var6 = var7.makeMutable;
            var5 = false;
            var5 = var6.bind(var7)(var5);
            var0.zoomed = var5;
            var1 = var4[var1];
            var2 = var2.bind(var3)(var1);
            var1 = var2.makeMutable;
            var1 = var1.bind(var2)(var3);
            var0.swipeSource = var1;
            return var0;
        };
        var6 = var6.bind(var3)(var1, var2);
        var _closure2_slot4 = var6;
        var2 = var3.useMemo;
        var1 = new Array(4);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var5;
        var1[3] = var4;
        var0 = function() { // Environment: var0
            _fun70507: for (var _fun70507_ip = 0;;) switch (_fun70507_ip) {
                case 0:
                    var4 = _closure2_slot0;
                    var3 = new Array(0);
                    var1 = var4.length;
                    var16 = 0;
                    var1 = var16 < var1;
                    var2 = undefined;
                    var15 = global;
                    var14 = 2;
                    var12 = 8;
                    var11 = null;
                    var10 = 0;
                    var9 = 0;
                    var8 = undefined;
                    var7 = undefined;
                    var6 = undefined;
                    var5 = undefined;
                    if (!var1) {
                        _fun70507_ip = 323;
                        continue _fun70507
                    }
                case 55:
                    var17 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var12];
                    var18 = var17.bind(var2)(var1);
                    var17 = var18.flattenSource;
                    var1 = var4[var9];
                    var1 = var17.bind(var18)(var1);
                    if (!(var11 == var1)) {
                        _fun70507_ip = 124;
                        continue _fun70507
                    }
                case 91:
                    var18 = var3.push;
                    var17 = {};
                    var17.start = var10;
                    var17.end = var10;
                    var17.scrollStart = var10;
                    var17 = var18.bind(var3)(var17);
                    var17 = var10;
                    _fun70507_ip = 305;
                    continue _fun70507;
                case 124:
                    var20 = var15.Math;
                    var19 = var20.max;
                    var22 = var15.Math;
                    var21 = var22.min;
                    var18 = var1.width;
                    var23 = _closure1_slot6;
                    var1 = var1.height;
                    var1 = var23 / var1;
                    var18 = var18 * var1;
                    var1 = _closure1_slot7;
                    var18 = var21.bind(var22)(var18, var1);
                    var1 = _closure1_slot8;
                    var18 = var19.bind(var20)(var18, var1);
                    var1 = _closure1_slot5;
                    var1 = var14 * var1;
                    var19 = var18 + var1;
                    var18 = var10 + var19;
                    var1 = var18 - var10;
                    var22 = 0;
                    if (!(var22 !== var9)) {
                        _fun70507_ip = 265;
                        continue _fun70507
                    }
                case 214:
                    var23 = var15.Math;
                    var21 = var23.floor;
                    var20 = var3[var16];
                    var24 = var20.end;
                    var20 = var3[var16];
                    var20 = var20.start;
                    var20 = var24 - var20;
                    var20 = var1 - var20;
                    var20 = var20 / var14;
                    var20 = var10 + var20;
                    var22 = var21.bind(var23)(var20);
                case 265:
                    var21 = var3.push;
                    var20 = {};
                    var20.start = var10;
                    var20.end = var18;
                    var20.scrollStart = var22;
                    var20 = var21.bind(var3)(var20);
                    var17 = var18;
                    var8 = var19;
                    var7 = var10;
                    var6 = var17;
                    var5 = var1;
                case 305:
                    var9 = var9 + 1;
                    var1 = var4.length;
                    var10 = var17;
                    if (var9 < var1) {
                        _fun70507_ip = 55;
                        continue _fun70507
                    }
                case 323:
                    var1 = {};
                    var1.sources = var4;
                    var4 = _closure2_slot4;
                    var1.animProps = var4;
                    var1.thumbnailScrollPositions = var3;
                    var3 = _closure2_slot2;
                    var1.onEndReached = var3;
                    var0 = _closure2_slot3;
                    var1.onEndReachedThreshold = var0;
                    var0 = function arg0() {
                        _fun70508: for (var _fun70508_ip = 0;;) switch (_fun70508_ip) {
                            case 0:
                                var1 = arg0;
                                var6 = var1.sources;
                                var _closure4_slot0 = var6;
                                var0 = var1.animProps;
                                var4 = var1.thumbnailScrollPositions;
                                var _closure4_slot1 = var4;
                                var2 = var1.onEndReached;
                                var1 = var1.onEndReachedThreshold;
                                var7 = var0.selectedIndex;
                                var _closure4_slot2 = var7;
                                var5 = var0.thumbnailsIndex;
                                var _closure4_slot3 = var5;
                                var5 = var0.thumbnailsScrolling;
                                var _closure4_slot4 = var5;
                                var5 = var0.thumbnailsAnimateTo;
                                var _closure4_slot5 = var5;
                                var5 = var0.viewerPos;
                                var _closure4_slot6 = var5;
                                var5 = var0.viewerScrolling;
                                var _closure4_slot7 = var5;
                                var5 = var0.zoomed;
                                var _closure4_slot8 = var5;
                                var0 = var0.swipeSource;
                                var _closure4_slot9 = var0;
                                var8 = var4.length;
                                var0 = 0;
                                if (!(var8 > var0)) {
                                    _fun70508_ip = 152;
                                    continue _fun70508
                                }
                            case 134:
                                var8 = var4[var0];
                                var8 = var8.end;
                                var0 = var4[var0];
                                var0 = var0.start;
                            case 152:
                                var0 = {};
                                var0.index = var7;
                                var0.sources = var6;
                                var0.zoomed = var5;
                                var0.thumbnailScrollPositions = var4;
                                var4 = false;
                                var0.variableWidthThumbnailsEnabled = var4;
                                var4 = function arg0, arg1() {
                                    var8 = arg0;
                                    var22 = arg1;
                                    var _closure5_slot0 = var8;
                                    var _closure5_slot1 = var22;
                                    var13 = _closure1_slot0;
                                    var15 = _closure1_slot2;
                                    var0 = 3;
                                    var2 = var15[var0];
                                    var7 = undefined;
                                    var3 = var13.bind(var7)(var2);
                                    var2 = var3.useAnimatedRef;
                                    var12 = var2.bind(var3)();
                                    var _closure5_slot2 = var12;
                                    var5 = _closure1_slot1;
                                    var19 = 4;
                                    var2 = var15[var19];
                                    var2 = var5.bind(var7)(var2);
                                    var2 = var2.bind(var7)();
                                    var3 = var2.width;
                                    var2 = var2.height;
                                    var4 = 5;
                                    var4 = var15[var4];
                                    var4 = var5.bind(var7)(var4);
                                    var4 = var4.bind(var7)();
                                    var21 = function() {
                                        _fun70510: for (var _fun70510_ip = 0;;) switch (_fun70510_ip) {
                                            case 0:
                                                var2 = _closure4_slot9;
                                                var1 = var2.get;
                                                var2 = var1.bind(var2)();
                                                var1 = 'thumbnails';
                                                if (!(var1 !== var2)) {
                                                    _fun70510_ip = 117;
                                                    continue _fun70510
                                                }
                                            case 26:
                                                var1 = _closure4_slot9;
                                                var0 = var1.get;
                                                var1 = var0.bind(var1)();
                                                var0 = 'viewer';
                                                if (!(var0 === var1)) {
                                                    _fun70510_ip = 180;
                                                    continue _fun70510
                                                }
                                            case 52:
                                                var4 = _closure1_slot0;
                                                var5 = _closure1_slot2;
                                                var0 = 6;
                                                var1 = var5[var0];
                                                var3 = undefined;
                                                var1 = var4.bind(var3)(var1);
                                                var2 = var1.MediaViewerAnalytics;
                                                var1 = var2.markActionPerformed;
                                                var0 = var5[var0];
                                                var0 = var4.bind(var3)(var0);
                                                var0 = var0.IncrementableMediaViewerActions;
                                                var0 = var0.VIEWER_SWIPE;
                                                var0 = var1.bind(var2)(var0);
                                                _fun70510_ip = 180;
                                                continue _fun70510;
                                            case 117:
                                                var4 = _closure1_slot0;
                                                var5 = _closure1_slot2;
                                                var0 = 6;
                                                var1 = var5[var0];
                                                var3 = undefined;
                                                var1 = var4.bind(var3)(var1);
                                                var2 = var1.MediaViewerAnalytics;
                                                var1 = var2.markActionPerformed;
                                                var0 = var5[var0];
                                                var0 = var4.bind(var3)(var0);
                                                var0 = var0.IncrementableMediaViewerActions;
                                                var0 = var0.THUMBNAIL_SWIPE;
                                                var0 = var1.bind(var2)(var0);
                                            case 180:
                                                var4 = _closure1_slot0;
                                                var5 = _closure1_slot2;
                                                var1 = 6;
                                                var2 = var5[var1];
                                                var0 = undefined;
                                                var2 = var4.bind(var0)(var2);
                                                var3 = var2.MediaViewerAnalytics;
                                                var2 = var3.markActionPerformed;
                                                var1 = var5[var1];
                                                var1 = var4.bind(var0)(var1);
                                                var1 = var1.IncrementableMediaViewerActions;
                                                var1 = var1.SELECTED_ITEM_CHANGE;
                                                var1 = var2.bind(var3)(var1);
                                                return var0;
                                        }
                                    };
                                    var _closure5_slot3 = var21;
                                    var5 = var15[var0];
                                    var10 = var13.bind(var7)(var5);
                                    var6 = var10.useAnimatedScrollHandler;
                                    var5 = {};
                                    var11 = function() {
                                        var3 = _closure4_slot4;
                                        var2 = var3.set;
                                        var1 = var3.get;
                                        var4 = var1.bind(var3)();
                                        var1 = 2;
                                        var1 = var1 | var4;
                                        var1 = var2.bind(var3)(var1);
                                        var2 = _closure4_slot9;
                                        var1 = var2.set;
                                        var0 = 'thumbnails';
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var17 = {};
                                    var25 = _closure4_slot4;
                                    var17.thumbnailsScrolling = var25;
                                    var9 = 2;
                                    var17.SCROLLING_DRAG = var9;
                                    var20 = _closure4_slot9;
                                    var17.swipeSource = var20;
                                    var11.__closure = var17;
                                    var17 = 16224520186325.0;
                                    var11.__workletHash = var17;
                                    var17 = _closure1_slot10;
                                    var11.__initData = var17;
                                    var5.onBeginDrag = var11;
                                    var11 = function() {
                                        var2 = _closure4_slot4;
                                        var1 = var2.set;
                                        var0 = var2.get;
                                        var3 = var0.bind(var2)();
                                        var0 = -3;
                                        var0 = var0 & var3;
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var17 = {};
                                    var17.thumbnailsScrolling = var25;
                                    var17.SCROLLING_DRAG = var9;
                                    var11.__closure = var17;
                                    var17 = 5779899826871.0;
                                    var11.__workletHash = var17;
                                    var17 = _closure1_slot11;
                                    var11.__initData = var17;
                                    var5.onEndDrag = var11;
                                    var11 = function arg0() {
                                        _fun70513: for (var _fun70513_ip = 0;;) switch (_fun70513_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var0 = var0.contentOffset;
                                                var2 = var0.x;
                                                var0 = _closure5_slot0;
                                                var8 = var2 / var0;
                                                var3 = _closure4_slot9;
                                                var2 = var3.get;
                                                var3 = var2.bind(var3)();
                                                var2 = 'thumbnails';
                                                if (!(var2 !== var3)) {
                                                    _fun70513_ip = 104;
                                                    continue _fun70513
                                                }
                                            case 51:
                                                var2 = global;
                                                var4 = var2.Math;
                                                var3 = var4.abs;
                                                var5 = var2.Math;
                                                var2 = var5.round;
                                                var2 = var2.bind(var5)(var8);
                                                var2 = var2 - var8;
                                                var3 = var3.bind(var4)(var2);
                                                var2 = 0.01;
                                                if (!(var3 < var2)) {
                                                    _fun70513_ip = 176;
                                                    continue _fun70513
                                                }
                                            case 104:
                                                var2 = global;
                                                var5 = var2.Math;
                                                var4 = var5.max;
                                                var7 = var2.Math;
                                                var6 = var7.min;
                                                var3 = var2.Math;
                                                var2 = var3.round;
                                                var3 = var2.bind(var3)(var8);
                                                var2 = _closure5_slot1;
                                                var3 = var6.bind(var7)(var3, var2);
                                                var2 = 0;
                                                var4 = var4.bind(var5)(var2, var3);
                                                var3 = _closure4_slot3;
                                                var2 = var3.set;
                                                var2 = var2.bind(var3)(var4);
                                            case 176:
                                                var3 = _closure4_slot5;
                                                var2 = var3.get;
                                                var2 = var2.bind(var3)();
                                                var4 = 0;
                                                if (!(!(var2 >= var4))) {
                                                    _fun70513_ip = 346;
                                                    continue _fun70513
                                                }
                                            case 198:
                                                var3 = _closure4_slot7;
                                                var2 = var3.get;
                                                var2 = var2.bind(var3)();
                                                var2 = var4 !== var2;
                                                if (var2) {
                                                    _fun70513_ip = 235;
                                                    continue _fun70513
                                                }
                                            case 218:
                                                var5 = _closure4_slot4;
                                                var3 = var5.get;
                                                var3 = var3.bind(var5)();
                                                var2 = var4 !== var3;
                                            case 235:
                                                if (!var2) {
                                                    _fun70513_ip = 268;
                                                    continue _fun70513
                                                }
                                            case 238:
                                                var4 = _closure4_slot3;
                                                var3 = var4.get;
                                                var4 = var3.bind(var4)();
                                                var5 = _closure4_slot2;
                                                var3 = var5.get;
                                                var3 = var3.bind(var5)();
                                                var2 = var4 !== var3;
                                            case 268:
                                                if (!var2) {
                                                    _fun70513_ip = 423;
                                                    continue _fun70513
                                                }
                                            case 274:
                                                var4 = _closure4_slot2;
                                                var3 = var4.set;
                                                var5 = _closure4_slot3;
                                                var2 = var5.get;
                                                var2 = var2.bind(var5)();
                                                var2 = var3.bind(var4)(var2);
                                                var4 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var2 = 3;
                                                var3 = var3[var2];
                                                var2 = undefined;
                                                var4 = var4.bind(var2)(var3);
                                                var3 = var4.runOnJS;
                                                var1 = _closure5_slot3;
                                                var1 = var3.bind(var4)(var1);
                                                var1 = var1.bind(var2)();
                                                _fun70513_ip = 423;
                                                continue _fun70513;
                                            case 346:
                                                var2 = _closure4_slot3;
                                                var1 = var2.get;
                                                var2 = var1.bind(var2)();
                                                var3 = _closure4_slot5;
                                                var1 = var3.get;
                                                var1 = var1.bind(var3)();
                                                if (!(var2 === var1)) {
                                                    _fun70513_ip = 423;
                                                    continue _fun70513
                                                }
                                            case 376:
                                                var3 = _closure4_slot5;
                                                var2 = var3.set;
                                                var1 = -1;
                                                var1 = var2.bind(var3)(var1);
                                                var2 = _closure4_slot2;
                                                var1 = var2.set;
                                                var3 = _closure4_slot3;
                                                var0 = var3.get;
                                                var0 = var0.bind(var3)();
                                                var0 = var1.bind(var2)(var0);
                                            case 423:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var17 = {};
                                    var23 = false;
                                    var17.variableWidthThumbnailsEnabled = var23;
                                    var18 = _closure4_slot1;
                                    var17.thumbnailScrollPositions = var18;
                                    var17.thumbnailSize = var8;
                                    var17.swipeSource = var20;
                                    var17.maxIndex = var22;
                                    var24 = _closure4_slot3;
                                    var17.thumbnailsIndex = var24;
                                    var26 = _closure4_slot5;
                                    var17.thumbnailsAnimateTo = var26;
                                    var22 = _closure4_slot2;
                                    var17.selectedIndex = var22;
                                    var22 = _closure4_slot7;
                                    var17.viewerScrolling = var22;
                                    var17.thumbnailsScrolling = var25;
                                    var27 = var15[var0];
                                    var27 = var13.bind(var7)(var27);
                                    var27 = var27.runOnJS;
                                    var17.runOnJS = var27;
                                    var17.onSelectedIndexChange = var21;
                                    var11.__closure = var17;
                                    var17 = 10605529664479.0;
                                    var11.__workletHash = var17;
                                    var17 = _closure1_slot12;
                                    var11.__initData = var17;
                                    var5.onScroll = var11;
                                    var11 = function() {
                                        var3 = _closure4_slot4;
                                        var2 = var3.set;
                                        var1 = var3.get;
                                        var4 = var1.bind(var3)();
                                        var1 = 4;
                                        var1 = var1 | var4;
                                        var1 = var2.bind(var3)(var1);
                                        var2 = _closure4_slot9;
                                        var1 = var2.set;
                                        var0 = 'thumbnails';
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var17 = {};
                                    var17.thumbnailsScrolling = var25;
                                    var17.SCROLLING_MOMENTUM = var19;
                                    var17.swipeSource = var20;
                                    var11.__closure = var17;
                                    var17 = 4138169755088.0;
                                    var11.__workletHash = var17;
                                    var17 = _closure1_slot13;
                                    var11.__initData = var17;
                                    var5.onMomentumBegin = var11;
                                    var11 = function() {
                                        var2 = _closure4_slot4;
                                        var1 = var2.set;
                                        var0 = var2.get;
                                        var3 = var0.bind(var2)();
                                        var0 = -5;
                                        var0 = var0 & var3;
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var17 = {};
                                    var17.thumbnailsScrolling = var25;
                                    var17.SCROLLING_MOMENTUM = var19;
                                    var11.__closure = var17;
                                    var17 = 1471443652144.0;
                                    var11.__workletHash = var17;
                                    var17 = _closure1_slot14;
                                    var11.__initData = var17;
                                    var5.onMomentumEnd = var11;
                                    var6 = var6.bind(var10)(var5);
                                    var19 = _closure1_slot4;
                                    var11 = var19.useCallback;
                                    var10 = function(arg0) { // Environment: var1
                                        _fun70516: for (var _fun70516_ip = 0;;) switch (_fun70516_ip) {
                                            case 0:
                                                var2 = _closure4_slot8;
                                                var1 = var2.get;
                                                var1 = var1.bind(var2)();
                                                if (var1) {
                                                    _fun70516_ip = 56;
                                                    continue _fun70516
                                                }
                                            case 19:
                                                var3 = _closure4_slot5;
                                                var2 = var3.set;
                                                var1 = arg0;
                                                var1 = var2.bind(var3)(var1);
                                                var2 = _closure4_slot9;
                                                var1 = var2.set;
                                                var0 = 'thumbnails';
                                                var0 = var1.bind(var2)(var0);
                                            case 56:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var5 = new Array(0);
                                    var5 = var11.bind(var19)(var10, var5);
                                    var17 = var19.useCallback;
                                    var11 = new Array(1);
                                    var11[0] = var12;
                                    var10 = function(arg0) { // Environment: var1
                                        var1 = _closure4_slot1;
                                        var0 = arg0;
                                        var0 = var1[var0];
                                        var9 = var0.scrollStart;
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 3;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var5 = var2.bind(var0)(var1);
                                        var4 = var5.scrollTo;
                                        var10 = _closure5_slot2;
                                        var8 = 0;
                                        var7 = true;
                                        var11 = var5;
                                        var1 = var11[var4](var10, var9, var8, var7, var6);
                                        return var0;
                                    };
                                    var21 = var17.bind(var19)(var10, var11);
                                    var10 = var15[var0];
                                    var17 = var13.bind(var7)(var10);
                                    var11 = var17.useDerivedValue;
                                    var10 = function() {
                                        _fun70518: for (var _fun70518_ip = 0;;) switch (_fun70518_ip) {
                                            case 0:
                                                var2 = _closure4_slot5;
                                                var0 = var2.get;
                                                var0 = var0.bind(var2)();
                                                var5 = 0;
                                                if (!(!(var0 < var5))) {
                                                    _fun70518_ip = 92;
                                                    continue _fun70518
                                                }
                                            case 22:
                                                var3 = _closure1_slot0;
                                                var2 = _closure1_slot2;
                                                var0 = 3;
                                                var2 = var2[var0];
                                                var0 = undefined;
                                                var4 = var3.bind(var0)(var2);
                                                var3 = var4.scrollTo;
                                                var10 = _closure5_slot2;
                                                var6 = _closure4_slot5;
                                                var1 = var6.get;
                                                var1 = var1.bind(var6)();
                                                var0 = _closure5_slot0;
                                                var9 = var1 * var0;
                                                var7 = true;
                                                var11 = var4;
                                                var8 = 0;
                                                var0 = var11[var3](var10, var9, var8, var7, var6);
                                            case 92:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var20 = {};
                                    var20.thumbnailsAnimateTo = var26;
                                    var20.variableWidthThumbnailsEnabled = var23;
                                    var26 = var15[var0];
                                    var26 = var13.bind(var7)(var26);
                                    var26 = var26.runOnJS;
                                    var20.runOnJS = var26;
                                    var20.scrollVarWidthThumbnails = var21;
                                    var21 = var15[var0];
                                    var21 = var13.bind(var7)(var21);
                                    var21 = var21.scrollTo;
                                    var20.scrollTo = var21;
                                    var20.ref = var12;
                                    var20.thumbnailSize = var8;
                                    var10.__closure = var20;
                                    var20 = 1697086875584.0;
                                    var10.__workletHash = var20;
                                    var20 = _closure1_slot15;
                                    var10.__initData = var20;
                                    var10 = var11.bind(var17)(var10);
                                    var17 = var19.useCallback;
                                    var11 = new Array(1);
                                    var11[0] = var12;
                                    var10 = function(arg0) { // Environment: var1
                                        var2 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var0 = 7;
                                        var1 = var3[var0];
                                        var0 = undefined;
                                        var6 = var2.bind(var0)(var1);
                                        var5 = var6.lerpVarWidthThumbnailScrollBounds;
                                        var4 = _closure4_slot1;
                                        var1 = arg0;
                                        var9 = var5.bind(var6)(var4, var1);
                                        var1 = 3;
                                        var1 = var3[var1];
                                        var5 = var2.bind(var0)(var1);
                                        var4 = var5.scrollTo;
                                        var10 = _closure5_slot2;
                                        var8 = 0;
                                        var7 = false;
                                        var11 = var5;
                                        var1 = var11[var4](var10, var9, var8, var7, var6);
                                        return var0;
                                    };
                                    var21 = var17.bind(var19)(var10, var11);
                                    var10 = var15[var0];
                                    var17 = var13.bind(var7)(var10);
                                    var11 = var17.useDerivedValue;
                                    var10 = function() {
                                        _fun70520: for (var _fun70520_ip = 0;;) switch (_fun70520_ip) {
                                            case 0:
                                                var2 = _closure4_slot7;
                                                var0 = var2.get;
                                                var0 = var0.bind(var2)();
                                                var5 = 0;
                                                var0 = var5 !== var0;
                                                if (!var0) {
                                                    _fun70520_ip = 55;
                                                    continue _fun70520
                                                }
                                            case 25:
                                                var3 = _closure4_slot3;
                                                var2 = var3.get;
                                                var3 = var2.bind(var3)();
                                                var4 = _closure4_slot6;
                                                var2 = var4.get;
                                                var2 = var2.bind(var4)();
                                                var0 = var3 !== var2;
                                            case 55:
                                                if (!var0) {
                                                    _fun70520_ip = 128;
                                                    continue _fun70520
                                                }
                                            case 58:
                                                var3 = _closure1_slot0;
                                                var2 = _closure1_slot2;
                                                var0 = 3;
                                                var2 = var2[var0];
                                                var0 = undefined;
                                                var4 = var3.bind(var0)(var2);
                                                var3 = var4.scrollTo;
                                                var10 = _closure5_slot2;
                                                var6 = _closure4_slot6;
                                                var1 = var6.get;
                                                var1 = var1.bind(var6)();
                                                var0 = _closure5_slot0;
                                                var9 = var1 * var0;
                                                var7 = false;
                                                var11 = var4;
                                                var8 = 0;
                                                var0 = var11[var3](var10, var9, var8, var7, var6);
                                            case 128:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var20 = {};
                                    var20.viewerScrolling = var22;
                                    var20.thumbnailsIndex = var24;
                                    var24 = _closure4_slot6;
                                    var20.viewerPos = var24;
                                    var20.variableWidthThumbnailsEnabled = var23;
                                    var23 = var15[var0];
                                    var23 = var13.bind(var7)(var23);
                                    var23 = var23.runOnJS;
                                    var20.runOnJS = var23;
                                    var20.lerpScrollVarWidthThumbnails = var21;
                                    var21 = var15[var0];
                                    var21 = var13.bind(var7)(var21);
                                    var21 = var21.scrollTo;
                                    var20.scrollTo = var21;
                                    var20.ref = var12;
                                    var20.thumbnailSize = var8;
                                    var10.__closure = var20;
                                    var20 = 10477949154269.0;
                                    var10.__workletHash = var20;
                                    var20 = _closure1_slot16;
                                    var10.__initData = var20;
                                    var10 = var11.bind(var17)(var10);
                                    var17 = _closure4_slot0;
                                    var11 = var17.map;
                                    var10 = function(arg0, arg1) { // Environment: var1
                                        var0 = arg1;
                                        return var0;
                                    };
                                    var23 = var11.bind(var17)(var10);
                                    var _closure5_slot4 = var23;
                                    var11 = var17.map;
                                    var10 = function(arg0) { // Environment: var1
                                        _fun70522: for (var _fun70522_ip = 0;;) switch (_fun70522_ip) {
                                            case 0:
                                                var3 = _closure1_slot0;
                                                var1 = _closure1_slot2;
                                                var0 = 8;
                                                var1 = var1[var0];
                                                var0 = undefined;
                                                var3 = var3.bind(var0)(var1);
                                                var1 = var3.flattenSource;
                                                var0 = arg0;
                                                var1 = var1.bind(var3)(var0);
                                                var0 = null;
                                                var3 = var0 == var1;
                                                var0 = 0;
                                                if (var3) {
                                                    _fun70522_ip = 127;
                                                    continue _fun70522
                                                }
                                            case 50:
                                                var5 = global;
                                                var4 = var5.Math;
                                                var3 = var4.max;
                                                var7 = var5.Math;
                                                var6 = var7.min;
                                                var5 = var1.width;
                                                var8 = _closure1_slot6;
                                                var1 = var1.height;
                                                var1 = var8 / var1;
                                                var5 = var5 * var1;
                                                var1 = _closure1_slot7;
                                                var1 = var6.bind(var7)(var5, var1);
                                                var2 = _closure1_slot8;
                                                var1 = var3.bind(var4)(var1, var2);
                                                var2 = var1 - var2;
                                                var1 = 2;
                                                var0 = var2 / var1;
                                            case 127:
                                                return var0;
                                        }
                                    };
                                    var21 = var11.bind(var17)(var10);
                                    var _closure5_slot5 = var21;
                                    var10 = var15[var0];
                                    var17 = var13.bind(var7)(var10);
                                    var11 = var17.useDerivedValue;
                                    var10 = function() {
                                        _fun70523: for (var _fun70523_ip = 0;;) switch (_fun70523_ip) {
                                            case 0:
                                                var2 = _closure4_slot4;
                                                var0 = var2.get;
                                                var2 = var0.bind(var2)();
                                                var0 = 0;
                                                var2 = var2 > var0;
                                                if (var2) {
                                                    _fun70523_ip = 94;
                                                    continue _fun70523
                                                }
                                            case 25:
                                                var4 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var2 = 3;
                                                var3 = var3[var2];
                                                var2 = undefined;
                                                var6 = var4.bind(var2)(var3);
                                                var5 = var6.interpolate;
                                                var2 = _closure4_slot6;
                                                var1 = var2.get;
                                                var10 = var1.bind(var2)();
                                                var9 = _closure5_slot4;
                                                var8 = _closure5_slot5;
                                                var7 = 'clamp';
                                                var11 = var6;
                                                var1 = var11[var5](var10, var9, var8, var7, var6);
                                                var0 = -var1;
                                            case 94:
                                                return var0;
                                        }
                                    };
                                    var20 = {};
                                    var20.thumbnailsScrolling = var25;
                                    var25 = var15[var0];
                                    var25 = var13.bind(var7)(var25);
                                    var25 = var25.interpolate;
                                    var20.interpolate = var25;
                                    var20.viewerPos = var24;
                                    var20.interpolateInput = var23;
                                    var20.interpolateOutput = var21;
                                    var10.__closure = var20;
                                    var20 = 10097839523885.0;
                                    var10.__workletHash = var20;
                                    var20 = _closure1_slot17;
                                    var10.__initData = var20;
                                    var21 = var11.bind(var17)(var10);
                                    var _closure5_slot6 = var21;
                                    var10 = var3 - var8;
                                    var11 = var10 / var9;
                                    var10 = var4.left;
                                    var10 = var11 - var10;
                                    var _closure5_slot7 = var10;
                                    var11 = var15[var0];
                                    var23 = var13.bind(var7)(var11);
                                    var17 = var23.useAnimatedStyle;
                                    var11 = function() {
                                        _fun70524: for (var _fun70524_ip = 0;;) switch (_fun70524_ip) {
                                            case 0:
                                                var0 = {};
                                                var2 = _closure4_slot7;
                                                var1 = var2.get;
                                                var2 = var1.bind(var2)();
                                                var1 = 0;
                                                if (!(!(var2 > var1))) {
                                                    _fun70524_ip = 95;
                                                    continue _fun70524
                                                }
                                            case 24:
                                                var3 = _closure1_slot0;
                                                var2 = _closure1_slot2;
                                                var1 = 9;
                                                var2 = var2[var1];
                                                var1 = undefined;
                                                var4 = var3.bind(var1)(var2);
                                                var3 = var4.withSpring;
                                                var2 = _closure5_slot7;
                                                var5 = _closure5_slot6;
                                                var1 = var5.get;
                                                var1 = var1.bind(var5)();
                                                var2 = var2 + var1;
                                                var1 = {};
                                                var5 = true;
                                                var1.overshootClamping = var5;
                                                var1 = var3.bind(var4)(var2, var1);
                                                _fun70524_ip = 119;
                                                continue _fun70524;
                                            case 95:
                                                var3 = _closure5_slot7;
                                                var4 = _closure5_slot6;
                                                var2 = var4.get;
                                                var2 = var2.bind(var4)();
                                                var1 = var3 + var2;
                                            case 119:
                                                var0.width = var1;
                                                return var0;
                                        }
                                    };
                                    var24 = {};
                                    var24.viewerScrolling = var22;
                                    var24.headerBufferSize = var10;
                                    var24.margin = var21;
                                    var20 = 9;
                                    var25 = var15[var20];
                                    var25 = var13.bind(var7)(var25);
                                    var25 = var25.withSpring;
                                    var24.withSpring = var25;
                                    var11.__closure = var24;
                                    var24 = 11328769587377.0;
                                    var11.__workletHash = var24;
                                    var24 = _closure1_slot18;
                                    var11.__initData = var24;
                                    var11 = var17.bind(var23)(var11);
                                    var23 = var18.length;
                                    var17 = 1;
                                    var17 = var23 - var17;
                                    var17 = var18[var17];
                                    var8 = var3 - var8;
                                    var8 = var8 / var9;
                                    var4 = var4.right;
                                    var8 = var8 - var4;
                                    var _closure5_slot8 = var8;
                                    var4 = var15[var0];
                                    var17 = var13.bind(var7)(var4);
                                    var9 = var17.useAnimatedStyle;
                                    var4 = function() {
                                        _fun70525: for (var _fun70525_ip = 0;;) switch (_fun70525_ip) {
                                            case 0:
                                                var0 = {};
                                                var2 = _closure4_slot7;
                                                var1 = var2.get;
                                                var2 = var1.bind(var2)();
                                                var1 = 0;
                                                if (!(!(var2 > var1))) {
                                                    _fun70525_ip = 95;
                                                    continue _fun70525
                                                }
                                            case 24:
                                                var3 = _closure1_slot0;
                                                var2 = _closure1_slot2;
                                                var1 = 9;
                                                var2 = var2[var1];
                                                var1 = undefined;
                                                var4 = var3.bind(var1)(var2);
                                                var3 = var4.withSpring;
                                                var2 = _closure5_slot8;
                                                var5 = _closure5_slot6;
                                                var1 = var5.get;
                                                var1 = var1.bind(var5)();
                                                var2 = var2 + var1;
                                                var1 = {};
                                                var5 = true;
                                                var1.overshootClamping = var5;
                                                var1 = var3.bind(var4)(var2, var1);
                                                _fun70525_ip = 119;
                                                continue _fun70525;
                                            case 95:
                                                var3 = _closure5_slot8;
                                                var4 = _closure5_slot6;
                                                var2 = var4.get;
                                                var2 = var2.bind(var4)();
                                                var1 = var3 + var2;
                                            case 119:
                                                var0.width = var1;
                                                return var0;
                                        }
                                    };
                                    var18 = {};
                                    var18.viewerScrolling = var22;
                                    var18.footerBufferSize = var8;
                                    var18.margin = var21;
                                    var20 = var15[var20];
                                    var20 = var13.bind(var7)(var20);
                                    var20 = var20.withSpring;
                                    var18.withSpring = var20;
                                    var4.__closure = var18;
                                    var18 = 10532164558483.0;
                                    var4.__workletHash = var18;
                                    var18 = _closure1_slot19;
                                    var4.__initData = var18;
                                    var9 = var9.bind(var17)(var4);
                                    var18 = var19.useCallback;
                                    var17 = function(arg0, arg1) { // Environment: var1
                                        var2 = arg0;
                                        var14 = arg1;
                                        var _closure6_slot0 = var14;
                                        var9 = _closure1_slot0;
                                        var10 = _closure1_slot2;
                                        var1 = 3;
                                        var4 = var10[var1];
                                        var8 = undefined;
                                        var6 = var9.bind(var8)(var4);
                                        var5 = var6.useDerivedValue;
                                        var4 = function() {
                                            var2 = _closure1_slot0;
                                            var1 = _closure1_slot2;
                                            var0 = 3;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var5 = var2.bind(var0)(var1);
                                            var4 = var5.interpolate;
                                            var1 = _closure4_slot6;
                                            var0 = var1.get;
                                            var10 = var0.bind(var1)();
                                            var1 = _closure6_slot0;
                                            var0 = 1;
                                            var6 = var1 - var0;
                                            var2 = new Array(3);
                                            var2[0] = var6;
                                            var2[1] = var1;
                                            var0 = var1 + var0;
                                            var2[2] = var0;
                                            var8 = [0.4, 1, 0.4];
                                            var7 = 'clamp';
                                            var11 = var5;
                                            var9 = var2;
                                            var0 = var11[var4](var10, var9, var8, var7, var6);
                                            return var0;
                                        };
                                        var7 = {};
                                        var11 = var10[var1];
                                        var11 = var9.bind(var8)(var11);
                                        var11 = var11.interpolate;
                                        var7.interpolate = var11;
                                        var15 = _closure4_slot6;
                                        var7.viewerPos = var15;
                                        var7.index = var14;
                                        var4.__closure = var7;
                                        var7 = 5784737783661.0;
                                        var4.__workletHash = var7;
                                        var7 = _closure1_slot20;
                                        var4.__initData = var7;
                                        var5 = var5.bind(var6)(var4);
                                        var _closure6_slot1 = var5;
                                        var6 = global;
                                        var7 = var6.Math;
                                        var4 = var7.max;
                                        var16 = var6.Math;
                                        var13 = var16.min;
                                        var12 = var2.width;
                                        var6 = _closure1_slot6;
                                        var2 = var2.height;
                                        var2 = var6 / var2;
                                        var12 = var12 * var2;
                                        var2 = _closure1_slot7;
                                        var2 = var13.bind(var16)(var12, var2);
                                        var16 = _closure1_slot8;
                                        var13 = var4.bind(var7)(var2, var16);
                                        var _closure6_slot2 = var13;
                                        var2 = var10[var1];
                                        var7 = var9.bind(var8)(var2);
                                        var4 = var7.useDerivedValue;
                                        var2 = function() {
                                            _fun70528: for (var _fun70528_ip = 0;;) switch (_fun70528_ip) {
                                                case 0:
                                                    var2 = _closure4_slot4;
                                                    var0 = var2.get;
                                                    var2 = var0.bind(var2)();
                                                    var0 = 0;
                                                    if (!(!(var2 > var0))) {
                                                        _fun70528_ip = 146;
                                                        continue _fun70528
                                                    }
                                                case 25:
                                                    var4 = _closure1_slot0;
                                                    var3 = _closure1_slot2;
                                                    var2 = 3;
                                                    var3 = var3[var2];
                                                    var2 = undefined;
                                                    var5 = var4.bind(var2)(var3);
                                                    var4 = var5.interpolate;
                                                    var2 = _closure4_slot6;
                                                    var1 = var2.get;
                                                    var12 = var1.bind(var2)();
                                                    var7 = _closure6_slot0;
                                                    var1 = 1;
                                                    var8 = var7 - var1;
                                                    var2 = new Array(3);
                                                    var2[0] = var8;
                                                    var2[1] = var7;
                                                    var1 = var7 + var1;
                                                    var2[2] = var1;
                                                    var0 = _closure1_slot8;
                                                    var1 = new Array(3);
                                                    var1[0] = var0;
                                                    var6 = _closure6_slot2;
                                                    var1[1] = var6;
                                                    var1[2] = var0;
                                                    var9 = 'clamp';
                                                    var13 = var5;
                                                    var11 = var2;
                                                    var10 = var1;
                                                    var0 = var13[var4](var12, var11, var10, var9, var8);
                                                    _fun70528_ip = 153;
                                                    continue _fun70528;
                                                case 146:
                                                    var0 = _closure1_slot8;
                                                case 153:
                                                    return var0;
                                            }
                                        };
                                        var12 = {};
                                        var17 = _closure4_slot4;
                                        var12.thumbnailsScrolling = var17;
                                        var12.THUMBNAIL_MIN_WIDTH = var16;
                                        var16 = var10[var1];
                                        var16 = var9.bind(var8)(var16);
                                        var16 = var16.interpolate;
                                        var12.interpolate = var16;
                                        var12.viewerPos = var15;
                                        var12.index = var14;
                                        var12.sourceWidth = var13;
                                        var2.__closure = var12;
                                        var12 = 12440745987072.0;
                                        var2.__workletHash = var12;
                                        var12 = _closure1_slot21;
                                        var2.__initData = var12;
                                        var7 = var4.bind(var7)(var2);
                                        var _closure6_slot3 = var7;
                                        var1 = var10[var1];
                                        var2 = var9.bind(var8)(var1);
                                        var1 = var2.useAnimatedStyle;
                                        var0 = function() {
                                            _fun70529: for (var _fun70529_ip = 0;;) switch (_fun70529_ip) {
                                                case 0:
                                                    var0 = {};
                                                    var2 = _closure4_slot7;
                                                    var1 = var2.get;
                                                    var2 = var1.bind(var2)();
                                                    var1 = 0;
                                                    if (!(!(var2 > var1))) {
                                                        _fun70529_ip = 87;
                                                        continue _fun70529
                                                    }
                                                case 24:
                                                    var3 = _closure1_slot0;
                                                    var2 = _closure1_slot2;
                                                    var1 = 9;
                                                    var2 = var2[var1];
                                                    var1 = undefined;
                                                    var4 = var3.bind(var1)(var2);
                                                    var3 = var4.withSpring;
                                                    var2 = _closure6_slot3;
                                                    var1 = var2.get;
                                                    var2 = var1.bind(var2)();
                                                    var1 = {};
                                                    var5 = true;
                                                    var1.overshootClamping = var5;
                                                    var1 = var3.bind(var4)(var2, var1);
                                                    _fun70529_ip = 103;
                                                    continue _fun70529;
                                                case 87:
                                                    var3 = _closure6_slot3;
                                                    var2 = var3.get;
                                                    var1 = var2.bind(var3)();
                                                case 103:
                                                    var0.width = var1;
                                                    var1 = _closure1_slot6;
                                                    var0.height = var1;
                                                    var2 = _closure6_slot1;
                                                    var1 = var2.get;
                                                    var1 = var1.bind(var2)();
                                                    var0.opacity = var1;
                                                    return var0;
                                            }
                                        };
                                        var4 = {};
                                        var11 = _closure4_slot7;
                                        var4.viewerScrolling = var11;
                                        var4._width = var7;
                                        var7 = 9;
                                        var7 = var10[var7];
                                        var7 = var9.bind(var8)(var7);
                                        var7 = var7.withSpring;
                                        var4.withSpring = var7;
                                        var4.THUMBNAIL_HEIGHT = var6;
                                        var4.opacity = var5;
                                        var0.__closure = var4;
                                        var4 = 513826663139.0;
                                        var0.__workletHash = var4;
                                        var3 = _closure1_slot22;
                                        var0.__initData = var3;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var4 = new Array(0);
                                    var4 = var18.bind(var19)(var17, var4);
                                    var0 = var15[var0];
                                    var13 = var13.bind(var7)(var0);
                                    var7 = var13.useDerivedValue;
                                    var0 = function() {
                                        var1 = _closure4_slot8;
                                        var0 = var1.get;
                                        var0 = var0.bind(var1)();
                                        var0 = !var0;
                                        return var0;
                                    };
                                    var15 = {};
                                    var16 = _closure4_slot8;
                                    var15.zoomed = var16;
                                    var0.__closure = var15;
                                    var15 = 7667674289153.0;
                                    var0.__workletHash = var15;
                                    var14 = _closure1_slot23;
                                    var0.__initData = var14;
                                    var7 = var7.bind(var13)(var0);
                                    var0 = {};
                                    var0.ref = var12;
                                    var0.headerBufferStyle = var11;
                                    var0.headerBufferSize = var10;
                                    var0.footerBufferStyle = var9;
                                    var0.footerBufferSize = var8;
                                    var0.scrollEnabled = var7;
                                    var0.onScroll = var6;
                                    var0.onSelect = var5;
                                    var0.useThumbnailStyle = var4;
                                    var0.screenWidth = var3;
                                    var0.screenHeight = var2;
                                    var1 = function arg0, arg1() {
                                        var0 = _closure1_slot9;
                                        return var0;
                                    };
                                    var0.itemSize = var1;
                                    return var0;
                                };
                                var0.useThumbnailsProps = var4;
                                var3 = function() {
                                    var9 = _closure1_slot0;
                                    var10 = _closure1_slot2;
                                    var2 = 3;
                                    var1 = var10[var2];
                                    var7 = undefined;
                                    var3 = var9.bind(var7)(var1);
                                    var1 = var3.useAnimatedRef;
                                    var4 = var1.bind(var3)();
                                    var _closure5_slot0 = var4;
                                    var3 = _closure1_slot1;
                                    var1 = 4;
                                    var1 = var10[var1];
                                    var1 = var3.bind(var7)(var1);
                                    var1 = var1.bind(var7)();
                                    var8 = var1.width;
                                    var _closure5_slot1 = var8;
                                    var1 = var1.height;
                                    var _closure5_slot2 = var1;
                                    var3 = var10[var2];
                                    var6 = var9.bind(var7)(var3);
                                    var5 = var6.useDerivedValue;
                                    var3 = function() {
                                        _fun70533: for (var _fun70533_ip = 0;;) switch (_fun70533_ip) {
                                            case 0:
                                                var2 = _closure4_slot5;
                                                var0 = var2.get;
                                                var2 = var0.bind(var2)();
                                                var0 = -1;
                                                if (!(var0 !== var2)) {
                                                    _fun70533_ip = 96;
                                                    continue _fun70533
                                                }
                                            case 26:
                                                var3 = _closure1_slot0;
                                                var2 = _closure1_slot2;
                                                var0 = 3;
                                                var2 = var2[var0];
                                                var0 = undefined;
                                                var5 = var3.bind(var0)(var2);
                                                var4 = var5.scrollTo;
                                                var9 = _closure5_slot0;
                                                var2 = _closure4_slot5;
                                                var1 = var2.get;
                                                var1 = var1.bind(var2)();
                                                var0 = _closure5_slot1;
                                                var8 = var1 * var0;
                                                var7 = 0;
                                                var6 = false;
                                                var10 = var5;
                                                var0 = var10[var4](var9, var8, var7, var6, var5);
                                            case 96:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var11 = {};
                                    var15 = _closure4_slot5;
                                    var11.thumbnailsAnimateTo = var15;
                                    var14 = var10[var2];
                                    var14 = var9.bind(var7)(var14);
                                    var14 = var14.scrollTo;
                                    var11.scrollTo = var14;
                                    var11.ref = var4;
                                    var11.screenWidth = var8;
                                    var3.__closure = var11;
                                    var11 = 11860326453239.0;
                                    var3.__workletHash = var11;
                                    var11 = _closure1_slot24;
                                    var3.__initData = var11;
                                    var3 = var5.bind(var6)(var3);
                                    var3 = var10[var2];
                                    var6 = var9.bind(var7)(var3);
                                    var5 = var6.useDerivedValue;
                                    var3 = function() {
                                        _fun70534: for (var _fun70534_ip = 0;;) switch (_fun70534_ip) {
                                            case 0:
                                                var2 = _closure4_slot4;
                                                var0 = var2.get;
                                                var0 = var0.bind(var2)();
                                                var5 = 0;
                                                var0 = var5 === var0;
                                                if (var0) {
                                                    _fun70534_ip = 42;
                                                    continue _fun70534
                                                }
                                            case 25:
                                                var3 = _closure4_slot7;
                                                var2 = var3.get;
                                                var2 = var2.bind(var3)();
                                                var0 = var2 > var5;
                                            case 42:
                                                if (var0) {
                                                    _fun70534_ip = 68;
                                                    continue _fun70534
                                                }
                                            case 45:
                                                var3 = _closure4_slot5;
                                                var2 = var3.get;
                                                var3 = var2.bind(var3)();
                                                var2 = -1;
                                                var0 = var2 !== var3;
                                            case 68:
                                                if (var0) {
                                                    _fun70534_ip = 141;
                                                    continue _fun70534
                                                }
                                            case 71:
                                                var3 = _closure1_slot0;
                                                var2 = _closure1_slot2;
                                                var0 = 3;
                                                var2 = var2[var0];
                                                var0 = undefined;
                                                var4 = var3.bind(var0)(var2);
                                                var3 = var4.scrollTo;
                                                var10 = _closure5_slot0;
                                                var6 = _closure4_slot3;
                                                var1 = var6.get;
                                                var1 = var1.bind(var6)();
                                                var0 = _closure5_slot1;
                                                var9 = var1 * var0;
                                                var7 = false;
                                                var11 = var4;
                                                var8 = 0;
                                                var0 = var11[var3](var10, var9, var8, var7, var6);
                                            case 141:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var11 = {};
                                    var16 = _closure4_slot4;
                                    var11.thumbnailsScrolling = var16;
                                    var17 = _closure4_slot7;
                                    var11.viewerScrolling = var17;
                                    var11.thumbnailsAnimateTo = var15;
                                    var14 = var10[var2];
                                    var14 = var9.bind(var7)(var14);
                                    var14 = var14.scrollTo;
                                    var11.scrollTo = var14;
                                    var11.ref = var4;
                                    var12 = _closure4_slot3;
                                    var11.thumbnailsIndex = var12;
                                    var11.screenWidth = var8;
                                    var3.__closure = var11;
                                    var11 = 16855593341498.0;
                                    var3.__workletHash = var11;
                                    var11 = _closure1_slot25;
                                    var3.__initData = var11;
                                    var3 = var5.bind(var6)(var3);
                                    var6 = _closure1_slot4;
                                    var11 = var6.useMemo;
                                    var5 = function() { // Environment: var0
                                        var0 = {};
                                        var3 = function() {
                                            var3 = _closure4_slot7;
                                            var2 = var3.set;
                                            var1 = var3.get;
                                            var4 = var1.bind(var3)();
                                            var1 = 2;
                                            var1 = var1 | var4;
                                            var1 = var2.bind(var3)(var1);
                                            var2 = _closure4_slot9;
                                            var1 = var2.set;
                                            var0 = 'viewer';
                                            var0 = var1.bind(var2)(var0);
                                            var0 = undefined;
                                            return var0;
                                        };
                                        var2 = {};
                                        var5 = _closure4_slot7;
                                        var2.viewerScrolling = var5;
                                        var8 = 2;
                                        var2.SCROLLING_DRAG = var8;
                                        var7 = _closure4_slot9;
                                        var2.swipeSource = var7;
                                        var3.__closure = var2;
                                        var2 = 1082965969005.0;
                                        var3.__workletHash = var2;
                                        var4 = _closure1_slot26;
                                        var3.__initData = var4;
                                        var0.onBeginDrag = var3;
                                        var3 = function() {
                                            var2 = _closure4_slot7;
                                            var1 = var2.set;
                                            var0 = var2.get;
                                            var3 = var0.bind(var2)();
                                            var0 = -3;
                                            var0 = var0 & var3;
                                            var0 = var1.bind(var2)(var0);
                                            var0 = undefined;
                                            return var0;
                                        };
                                        var4 = {};
                                        var4.viewerScrolling = var5;
                                        var4.SCROLLING_DRAG = var8;
                                        var3.__closure = var4;
                                        var4 = 1722948238280.0;
                                        var3.__workletHash = var4;
                                        var4 = _closure1_slot27;
                                        var3.__initData = var4;
                                        var0.onEndDrag = var3;
                                        var3 = function arg0() {
                                            var2 = _closure4_slot6;
                                            var1 = var2.set;
                                            var0 = arg0;
                                            var0 = var1.bind(var2)(var0);
                                            var0 = undefined;
                                            return var0;
                                        };
                                        var4 = {};
                                        var6 = _closure4_slot6;
                                        var4.viewerPos = var6;
                                        var3.__closure = var4;
                                        var4 = 3817181878424.0;
                                        var3.__workletHash = var4;
                                        var4 = _closure1_slot28;
                                        var3.__initData = var4;
                                        var0.onScroll = var3;
                                        var3 = function() {
                                            var3 = _closure4_slot7;
                                            var2 = var3.set;
                                            var1 = var3.get;
                                            var4 = var1.bind(var3)();
                                            var1 = 4;
                                            var1 = var1 | var4;
                                            var1 = var2.bind(var3)(var1);
                                            var2 = _closure4_slot9;
                                            var1 = var2.set;
                                            var0 = 'viewer';
                                            var0 = var1.bind(var2)(var0);
                                            var0 = undefined;
                                            return var0;
                                        };
                                        var6 = {};
                                        var6.viewerScrolling = var5;
                                        var4 = 4;
                                        var6.SCROLLING_MOMENTUM = var4;
                                        var6.swipeSource = var7;
                                        var3.__closure = var6;
                                        var6 = 16635271467463.0;
                                        var3.__workletHash = var6;
                                        var6 = _closure1_slot29;
                                        var3.__initData = var6;
                                        var0.onMomentumBegin = var3;
                                        var1 = function() {
                                            var2 = _closure4_slot7;
                                            var1 = var2.set;
                                            var0 = var2.get;
                                            var3 = var0.bind(var2)();
                                            var0 = -5;
                                            var0 = var0 & var3;
                                            var0 = var1.bind(var2)(var0);
                                            var0 = undefined;
                                            return var0;
                                        };
                                        var3 = {};
                                        var3.viewerScrolling = var5;
                                        var3.SCROLLING_MOMENTUM = var4;
                                        var1.__closure = var3;
                                        var3 = 8806989101472.0;
                                        var1.__workletHash = var3;
                                        var2 = _closure1_slot30;
                                        var1.__initData = var2;
                                        var0.onMomentumEnd = var1;
                                        return var0;
                                    };
                                    var3 = new Array(0);
                                    var11 = var11.bind(var6)(var5, var3);
                                    var _closure5_slot3 = var11;
                                    var2 = var10[var2];
                                    var5 = var9.bind(var7)(var2);
                                    var3 = var5.useAnimatedScrollHandler;
                                    var2 = {};
                                    var12 = var11.onBeginDrag;
                                    var2.onBeginDrag = var12;
                                    var12 = var11.onEndDrag;
                                    var2.onEndDrag = var12;
                                    var12 = function arg0() {
                                        _fun70541: for (var _fun70541_ip = 0;;) switch (_fun70541_ip) {
                                            case 0:
                                                var2 = _closure4_slot7;
                                                var0 = var2.get;
                                                var0 = var0.bind(var2)();
                                                var3 = 0;
                                                var0 = var3 === var0;
                                                if (!var0) {
                                                    _fun70541_ip = 42;
                                                    continue _fun70541
                                                }
                                            case 25:
                                                var4 = _closure4_slot4;
                                                var2 = var4.get;
                                                var2 = var2.bind(var4)();
                                                var0 = var3 === var2;
                                            case 42:
                                                if (!var0) {
                                                    _fun70541_ip = 68;
                                                    continue _fun70541
                                                }
                                            case 45:
                                                var2 = _closure4_slot5;
                                                var1 = var2.get;
                                                var2 = var1.bind(var2)();
                                                var1 = -1;
                                                var0 = var1 === var2;
                                            case 68:
                                                if (var0) {
                                                    _fun70541_ip = 111;
                                                    continue _fun70541
                                                }
                                            case 71:
                                                var2 = _closure5_slot3;
                                                var1 = var2.onScroll;
                                                var3 = arg0;
                                                var3 = var3.contentOffset;
                                                var3 = var3.x;
                                                var0 = _closure5_slot1;
                                                var0 = var3 / var0;
                                                var0 = var1.bind(var2)(var0);
                                            case 111:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var14 = {};
                                    var14.viewerScrolling = var17;
                                    var14.thumbnailsScrolling = var16;
                                    var14.thumbnailsAnimateTo = var15;
                                    var14.onScrollWorklets = var11;
                                    var14.screenWidth = var8;
                                    var12.__closure = var14;
                                    var14 = 12274724242305.0;
                                    var12.__workletHash = var14;
                                    var13 = _closure1_slot31;
                                    var12.__initData = var13;
                                    var2.onScroll = var12;
                                    var12 = var11.onMomentumBegin;
                                    var2.onMomentumBegin = var12;
                                    var11 = var11.onMomentumEnd;
                                    var2.onMomentumEnd = var11;
                                    var3 = var3.bind(var5)(var2);
                                    var2 = 10;
                                    var5 = var10[var2];
                                    var11 = var9.bind(var7)(var5);
                                    var5 = var11.useOrientation;
                                    var5 = var5.bind(var11)();
                                    var2 = var10[var2];
                                    var2 = var9.bind(var7)(var2);
                                    var2 = var2.OrientationType;
                                    var2 = var2.LANDSCAPE;
                                    var2 = var5 === var2;
                                    var _closure5_slot4 = var2;
                                    var7 = var6.useCallback;
                                    var5 = new Array(4);
                                    var5[0] = var4;
                                    var5[1] = var2;
                                    var5[2] = var8;
                                    var5[3] = var1;
                                    var2 = function() { // Environment: var0
                                        _fun70542: for (var _fun70542_ip = 0;;) switch (_fun70542_ip) {
                                            case 0:
                                                var1 = _closure5_slot4;
                                                var2 = global;
                                                var5 = var2.Math;
                                                if (var1) {
                                                    _fun70542_ip = 39;
                                                    continue _fun70542
                                                }
                                            case 18:
                                                var3 = var5.min;
                                                var2 = _closure5_slot1;
                                                var1 = _closure5_slot2;
                                                var2 = var3.bind(var5)(var2, var1);
                                                _fun70542_ip = 58;
                                                continue _fun70542;
                                            case 39:
                                                var4 = var5.max;
                                                var3 = _closure5_slot1;
                                                var1 = _closure5_slot2;
                                                var2 = var4.bind(var5)(var3, var1);
                                            case 58:
                                                var3 = _closure4_slot2;
                                                var1 = var3.get;
                                                var1 = var1.bind(var3)();
                                                var3 = var1 * var2;
                                                var0 = _closure5_slot0;
                                                var2 = var0.current;
                                                var0 = null;
                                                if (!(var0 != var2)) {
                                                    _fun70542_ip = 107;
                                                    continue _fun70542
                                                }
                                            case 93:
                                                var1 = var2.scrollTo;
                                                var0 = false;
                                                var0 = var1.bind(var2)(var3, var0);
                                            case 107:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var2 = var7.bind(var6)(var2, var5);
                                    var7 = var6.useEffect;
                                    var5 = new Array(3);
                                    var5[0] = var8;
                                    var5[1] = var1;
                                    var5[2] = var4;
                                    var1 = function() { // Environment: var0
                                        _fun70543: for (var _fun70543_ip = 0;;) switch (_fun70543_ip) {
                                            case 0:
                                                var0 = _closure5_slot0;
                                                var1 = var0.current;
                                                var0 = null;
                                                if (!(var0 != var1)) {
                                                    _fun70543_ip = 28;
                                                    continue _fun70543
                                                }
                                            case 18:
                                                var0 = var1.reset;
                                                var0 = var0.bind(var1)();
                                            case 28:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var1 = var7.bind(var6)(var1, var5);
                                    var5 = var6.useCallback;
                                    var1 = function(arg0) { // Environment: var0
                                        var13 = arg0;
                                        var _closure6_slot0 = var13;
                                        var3 = _closure1_slot4;
                                        var2 = var3.useState;
                                        var12 = _closure4_slot2;
                                        var0 = var12.get;
                                        var0 = var0.bind(var12)();
                                        var0 = var13 === var0;
                                        var3 = var2.bind(var3)(var0);
                                        var2 = _closure1_slot3;
                                        var10 = undefined;
                                        var0 = 2;
                                        var3 = var2.bind(var10)(var3, var0);
                                        var0 = 0;
                                        var0 = var3[var0];
                                        var2 = 1;
                                        var7 = var3[var2];
                                        var _closure6_slot1 = var7;
                                        var9 = _closure1_slot0;
                                        var11 = _closure1_slot2;
                                        var8 = 3;
                                        var2 = var11[var8];
                                        var4 = var9.bind(var10)(var2);
                                        var3 = var4.useAnimatedReaction;
                                        var2 = function() {
                                            var1 = _closure6_slot0;
                                            var2 = _closure4_slot2;
                                            var0 = var2.get;
                                            var0 = var0.bind(var2)();
                                            var0 = var1 === var0;
                                            return var0;
                                        };
                                        var6 = {};
                                        var6.index = var13;
                                        var6.selectedIndex = var12;
                                        var2.__closure = var6;
                                        var6 = 16337538404179.0;
                                        var2.__workletHash = var6;
                                        var6 = _closure1_slot32;
                                        var2.__initData = var6;
                                        var1 = function arg0, arg1() {
                                            _fun70546: for (var _fun70546_ip = 0;;) switch (_fun70546_ip) {
                                                case 0:
                                                    var2 = arg0;
                                                    var1 = arg1;
                                                    var0 = null;
                                                    var0 = var0 != var1;
                                                    if (!var0) {
                                                        _fun70546_ip = 19;
                                                        continue _fun70546
                                                    }
                                                case 15:
                                                    var0 = var1 !== var2;
                                                case 19:
                                                    if (!var0) {
                                                        _fun70546_ip = 69;
                                                        continue _fun70546
                                                    }
                                                case 22:
                                                    var3 = _closure1_slot0;
                                                    var1 = _closure1_slot2;
                                                    var0 = 3;
                                                    var0 = var1[var0];
                                                    var1 = undefined;
                                                    var4 = var3.bind(var1)(var0);
                                                    var3 = var4.runOnJS;
                                                    var0 = _closure6_slot1;
                                                    var0 = var3.bind(var4)(var0);
                                                    var0 = var0.bind(var1)(var2);
                                                case 69:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var6 = {};
                                        var8 = var11[var8];
                                        var8 = var9.bind(var10)(var8);
                                        var8 = var8.runOnJS;
                                        var6.runOnJS = var8;
                                        var6.setVisible = var7;
                                        var1.__closure = var6;
                                        var6 = 17035713313425.0;
                                        var1.__workletHash = var6;
                                        var5 = _closure1_slot33;
                                        var1.__initData = var5;
                                        var1 = var3.bind(var4)(var2, var1);
                                        return var0;
                                    };
                                    var0 = new Array(0);
                                    var1 = var5.bind(var6)(var1, var0);
                                    var0 = {};
                                    var0.ref = var4;
                                    var0.onScroll = var3;
                                    var0.onContentSizeChange = var2;
                                    var0.useItemVisible = var1;
                                    return var0;
                                };
                                var0.useViewerProps = var3;
                                var0.onEndReached = var2;
                                var0.onEndReachedThreshold = var1;
                                return var0;
                        }
                    };
                    var0 = var0.bind(var2)(var1);
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useMediaViewerSyncer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 8850, 3711, 1464, 1568, 8838, 8851, 8837, 4072, 7812, 2]);