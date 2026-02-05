package com.horcrux.svg;

import android.view.View;
import com.discord.jank_stats.JankStatsAggregatorKt;
import com.discord.span.utilities.spannable.BulletSpan;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.JavaOnlyMap;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.RNSVGCircleManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGCircleManagerInterface;
import com.facebook.react.viewmanagers.RNSVGClipPathManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface;
import com.facebook.react.viewmanagers.RNSVGDefsManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGDefsManagerInterface;
import com.facebook.react.viewmanagers.RNSVGEllipseManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface;
import com.facebook.react.viewmanagers.RNSVGFeBlendManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGFeBlendManagerInterface;
import com.facebook.react.viewmanagers.RNSVGFeColorMatrixManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGFeColorMatrixManagerInterface;
import com.facebook.react.viewmanagers.RNSVGFeCompositeManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGFeCompositeManagerInterface;
import com.facebook.react.viewmanagers.RNSVGFeFloodManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGFeFloodManagerInterface;
import com.facebook.react.viewmanagers.RNSVGFeGaussianBlurManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGFeGaussianBlurManagerInterface;
import com.facebook.react.viewmanagers.RNSVGFeMergeManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGFeMergeManagerInterface;
import com.facebook.react.viewmanagers.RNSVGFeOffsetManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGFeOffsetManagerInterface;
import com.facebook.react.viewmanagers.RNSVGFilterManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGFilterManagerInterface;
import com.facebook.react.viewmanagers.RNSVGForeignObjectManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface;
import com.facebook.react.viewmanagers.RNSVGGroupManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGGroupManagerInterface;
import com.facebook.react.viewmanagers.RNSVGImageManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGImageManagerInterface;
import com.facebook.react.viewmanagers.RNSVGLineManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGLineManagerInterface;
import com.facebook.react.viewmanagers.RNSVGLinearGradientManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGLinearGradientManagerInterface;
import com.facebook.react.viewmanagers.RNSVGMarkerManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface;
import com.facebook.react.viewmanagers.RNSVGMaskManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGMaskManagerInterface;
import com.facebook.react.viewmanagers.RNSVGPathManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGPathManagerInterface;
import com.facebook.react.viewmanagers.RNSVGPatternManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGPatternManagerInterface;
import com.facebook.react.viewmanagers.RNSVGRadialGradientManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGRadialGradientManagerInterface;
import com.facebook.react.viewmanagers.RNSVGRectManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGRectManagerInterface;
import com.facebook.react.viewmanagers.RNSVGSymbolManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface;
import com.facebook.react.viewmanagers.RNSVGTSpanManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface;
import com.facebook.react.viewmanagers.RNSVGTextManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGTextManagerInterface;
import com.facebook.react.viewmanagers.RNSVGTextPathManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface;
import com.facebook.react.viewmanagers.RNSVGUseManagerDelegate;
import com.facebook.react.viewmanagers.RNSVGUseManagerInterface;
import com.horcrux.svg.RenderableView;
import com.horcrux.svg.VirtualViewManager;
import com.horcrux.svg.events.SvgLoadEvent;
import com.horcrux.svg.events.SvgOnLayoutEvent;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class RenderableViewManager<T extends RenderableView> extends VirtualViewManager<T> {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class CircleViewManager extends RenderableViewManager<b> implements RNSVGCircleManagerInterface<b> {
        public static final String REACT_CLASS = "RNSVGCircle";

        /* JADX INFO: Access modifiers changed from: package-private */
        public CircleViewManager() {
            super(VirtualViewManager.SVGClass.RNSVGCircle);
            ((VirtualViewManager) this).mDelegate = new RNSVGCircleManagerDelegate(this);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(name = "clipPath")
        public /* bridge */ /* synthetic */ void setClipPath(b bVar, String str) {
            super.setClipPath((CircleViewManager) bVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(name = "clipRule")
        public /* bridge */ /* synthetic */ void setClipRule(b bVar, int i10) {
            super.setClipRule((CircleViewManager) bVar, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(customType = "Color", name = ViewProps.COLOR)
        public /* bridge */ /* synthetic */ void setColor(b bVar, Integer num) {
            super.setColor((CircleViewManager) bVar, num);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(name = ViewProps.DISPLAY)
        public /* bridge */ /* synthetic */ void setDisplay(b bVar, String str) {
            super.setDisplay((CircleViewManager) bVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(name = "fill")
        public /* bridge */ /* synthetic */ void setFill(b bVar, Dynamic dynamic) {
            super.setFill((CircleViewManager) bVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "fillOpacity")
        public /* bridge */ /* synthetic */ void setFillOpacity(b bVar, float f10) {
            super.setFillOpacity((CircleViewManager) bVar, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(defaultInt = 1, name = "fillRule")
        public /* bridge */ /* synthetic */ void setFillRule(b bVar, int i10) {
            super.setFillRule((CircleViewManager) bVar, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(name = ViewProps.FILTER)
        public /* bridge */ /* synthetic */ void setFilter(b bVar, String str) {
            super.setFilter((CircleViewManager) bVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(name = "markerEnd")
        public /* bridge */ /* synthetic */ void setMarkerEnd(b bVar, String str) {
            super.setMarkerEnd((CircleViewManager) bVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(name = "markerMid")
        public /* bridge */ /* synthetic */ void setMarkerMid(b bVar, String str) {
            super.setMarkerMid((CircleViewManager) bVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(name = "markerStart")
        public /* bridge */ /* synthetic */ void setMarkerStart(b bVar, String str) {
            super.setMarkerStart((CircleViewManager) bVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(name = "mask")
        public /* bridge */ /* synthetic */ void setMask(b bVar, String str) {
            super.setMask((CircleViewManager) bVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        public /* bridge */ /* synthetic */ void setMatrix(b bVar, ReadableArray readableArray) {
            super.setMatrix((CircleViewManager) bVar, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(name = StackTraceHelper.NAME_KEY)
        public /* bridge */ /* synthetic */ void setName(b bVar, String str) {
            super.setName((CircleViewManager) bVar, str);
        }

        @Override // com.facebook.react.uimanager.BaseViewManager
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = ViewProps.OPACITY)
        public /* bridge */ /* synthetic */ void setOpacity(View view, float f10) {
            super.setOpacity((CircleViewManager) ((VirtualView) view), f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(name = ViewProps.POINTER_EVENTS)
        public /* bridge */ /* synthetic */ void setPointerEvents(b bVar, String str) {
            super.setPointerEvents((CircleViewManager) bVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(name = "propList")
        public /* bridge */ /* synthetic */ void setPropList(b bVar, ReadableArray readableArray) {
            super.setPropList((CircleViewManager) bVar, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(name = "responsible")
        public /* bridge */ /* synthetic */ void setResponsible(b bVar, boolean z10) {
            super.setResponsible((CircleViewManager) bVar, z10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(name = "stroke")
        public /* bridge */ /* synthetic */ void setStroke(b bVar, Dynamic dynamic) {
            super.setStroke((CircleViewManager) bVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(name = "strokeDasharray")
        public /* bridge */ /* synthetic */ void setStrokeDasharray(b bVar, Dynamic dynamic) {
            super.setStrokeDasharray((CircleViewManager) bVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(name = "strokeDashoffset")
        public /* bridge */ /* synthetic */ void setStrokeDashoffset(b bVar, float f10) {
            super.setStrokeDashoffset((CircleViewManager) bVar, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinecap")
        public /* bridge */ /* synthetic */ void setStrokeLinecap(b bVar, int i10) {
            super.setStrokeLinecap((CircleViewManager) bVar, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinejoin")
        public /* bridge */ /* synthetic */ void setStrokeLinejoin(b bVar, int i10) {
            super.setStrokeLinejoin((CircleViewManager) bVar, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(defaultFloat = BulletSpan.STANDARD_STROKE_WIDTH_PX, name = "strokeMiterlimit")
        public /* bridge */ /* synthetic */ void setStrokeMiterlimit(b bVar, float f10) {
            super.setStrokeMiterlimit((CircleViewManager) bVar, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "strokeOpacity")
        public /* bridge */ /* synthetic */ void setStrokeOpacity(b bVar, float f10) {
            super.setStrokeOpacity((CircleViewManager) bVar, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(name = "strokeWidth")
        public /* bridge */ /* synthetic */ void setStrokeWidth(b bVar, Dynamic dynamic) {
            super.setStrokeWidth((CircleViewManager) bVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(name = "vectorEffect")
        public /* bridge */ /* synthetic */ void setVectorEffect(b bVar, int i10) {
            super.setVectorEffect((CircleViewManager) bVar, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(name = "cx")
        public void setCx(b bVar, Dynamic dynamic) {
            bVar.c(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(name = "cy")
        public void setCy(b bVar, Dynamic dynamic) {
            bVar.d(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGCircleManagerInterface
        @ReactProp(name = "r")
        public void setR(b bVar, Dynamic dynamic) {
            bVar.e(dynamic);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class ClipPathViewManager extends GroupViewManagerAbstract<c> implements RNSVGClipPathManagerInterface<c> {
        public static final String REACT_CLASS = "RNSVGClipPath";

        /* JADX INFO: Access modifiers changed from: package-private */
        public ClipPathViewManager() {
            super(VirtualViewManager.SVGClass.RNSVGClipPath);
            ((VirtualViewManager) this).mDelegate = new RNSVGClipPathManagerDelegate(this);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(name = "clipPath")
        public /* bridge */ /* synthetic */ void setClipPath(c cVar, String str) {
            super.setClipPath((ClipPathViewManager) cVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(name = "clipRule")
        public /* bridge */ /* synthetic */ void setClipRule(c cVar, int i10) {
            super.setClipRule((ClipPathViewManager) cVar, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(customType = "Color", name = ViewProps.COLOR)
        public /* bridge */ /* synthetic */ void setColor(c cVar, Integer num) {
            super.setColor((ClipPathViewManager) cVar, num);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(name = ViewProps.DISPLAY)
        public /* bridge */ /* synthetic */ void setDisplay(c cVar, String str) {
            super.setDisplay((ClipPathViewManager) cVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(name = "fill")
        public /* bridge */ /* synthetic */ void setFill(c cVar, Dynamic dynamic) {
            super.setFill((ClipPathViewManager) cVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "fillOpacity")
        public /* bridge */ /* synthetic */ void setFillOpacity(c cVar, float f10) {
            super.setFillOpacity((ClipPathViewManager) cVar, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(defaultInt = 1, name = "fillRule")
        public /* bridge */ /* synthetic */ void setFillRule(c cVar, int i10) {
            super.setFillRule((ClipPathViewManager) cVar, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(name = ViewProps.FILTER)
        public /* bridge */ /* synthetic */ void setFilter(c cVar, String str) {
            super.setFilter((ClipPathViewManager) cVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(name = "font")
        public /* bridge */ /* synthetic */ void setFont(c cVar, Dynamic dynamic) {
            super.setFont((ClipPathViewManager) cVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(name = ViewProps.FONT_SIZE)
        public /* bridge */ /* synthetic */ void setFontSize(c cVar, Dynamic dynamic) {
            super.setFontSize((ClipPathViewManager) cVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(name = ViewProps.FONT_WEIGHT)
        public /* bridge */ /* synthetic */ void setFontWeight(c cVar, Dynamic dynamic) {
            super.setFontWeight((ClipPathViewManager) cVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(name = "markerEnd")
        public /* bridge */ /* synthetic */ void setMarkerEnd(c cVar, String str) {
            super.setMarkerEnd((ClipPathViewManager) cVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(name = "markerMid")
        public /* bridge */ /* synthetic */ void setMarkerMid(c cVar, String str) {
            super.setMarkerMid((ClipPathViewManager) cVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(name = "markerStart")
        public /* bridge */ /* synthetic */ void setMarkerStart(c cVar, String str) {
            super.setMarkerStart((ClipPathViewManager) cVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(name = "mask")
        public /* bridge */ /* synthetic */ void setMask(c cVar, String str) {
            super.setMask((ClipPathViewManager) cVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        public /* bridge */ /* synthetic */ void setMatrix(c cVar, ReadableArray readableArray) {
            super.setMatrix((ClipPathViewManager) cVar, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(name = StackTraceHelper.NAME_KEY)
        public /* bridge */ /* synthetic */ void setName(c cVar, String str) {
            super.setName((ClipPathViewManager) cVar, str);
        }

        @Override // com.facebook.react.uimanager.BaseViewManager
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = ViewProps.OPACITY)
        public /* bridge */ /* synthetic */ void setOpacity(View view, float f10) {
            super.setOpacity((ClipPathViewManager) ((VirtualView) view), f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(name = ViewProps.POINTER_EVENTS)
        public /* bridge */ /* synthetic */ void setPointerEvents(c cVar, String str) {
            super.setPointerEvents((ClipPathViewManager) cVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(name = "propList")
        public /* bridge */ /* synthetic */ void setPropList(c cVar, ReadableArray readableArray) {
            super.setPropList((ClipPathViewManager) cVar, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(name = "responsible")
        public /* bridge */ /* synthetic */ void setResponsible(c cVar, boolean z10) {
            super.setResponsible((ClipPathViewManager) cVar, z10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(name = "stroke")
        public /* bridge */ /* synthetic */ void setStroke(c cVar, Dynamic dynamic) {
            super.setStroke((ClipPathViewManager) cVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(name = "strokeDasharray")
        public /* bridge */ /* synthetic */ void setStrokeDasharray(c cVar, Dynamic dynamic) {
            super.setStrokeDasharray((ClipPathViewManager) cVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(name = "strokeDashoffset")
        public /* bridge */ /* synthetic */ void setStrokeDashoffset(c cVar, float f10) {
            super.setStrokeDashoffset((ClipPathViewManager) cVar, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinecap")
        public /* bridge */ /* synthetic */ void setStrokeLinecap(c cVar, int i10) {
            super.setStrokeLinecap((ClipPathViewManager) cVar, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinejoin")
        public /* bridge */ /* synthetic */ void setStrokeLinejoin(c cVar, int i10) {
            super.setStrokeLinejoin((ClipPathViewManager) cVar, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(defaultFloat = BulletSpan.STANDARD_STROKE_WIDTH_PX, name = "strokeMiterlimit")
        public /* bridge */ /* synthetic */ void setStrokeMiterlimit(c cVar, float f10) {
            super.setStrokeMiterlimit((ClipPathViewManager) cVar, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "strokeOpacity")
        public /* bridge */ /* synthetic */ void setStrokeOpacity(c cVar, float f10) {
            super.setStrokeOpacity((ClipPathViewManager) cVar, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(name = "strokeWidth")
        public /* bridge */ /* synthetic */ void setStrokeWidth(c cVar, Dynamic dynamic) {
            super.setStrokeWidth((ClipPathViewManager) cVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGClipPathManagerInterface
        @ReactProp(name = "vectorEffect")
        public /* bridge */ /* synthetic */ void setVectorEffect(c cVar, int i10) {
            super.setVectorEffect((ClipPathViewManager) cVar, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class DefsViewManager extends VirtualViewManager<f> implements RNSVGDefsManagerInterface<f> {
        public static final String REACT_CLASS = "RNSVGDefs";

        /* JADX INFO: Access modifiers changed from: package-private */
        public DefsViewManager() {
            super(VirtualViewManager.SVGClass.RNSVGDefs);
            ((VirtualViewManager) this).mDelegate = new RNSVGDefsManagerDelegate(this);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGDefsManagerInterface
        @ReactProp(name = "clipPath")
        public /* bridge */ /* synthetic */ void setClipPath(f fVar, String str) {
            super.setClipPath((DefsViewManager) fVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGDefsManagerInterface
        @ReactProp(name = "clipRule")
        public /* bridge */ /* synthetic */ void setClipRule(f fVar, int i10) {
            super.setClipRule((DefsViewManager) fVar, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGDefsManagerInterface
        @ReactProp(name = ViewProps.DISPLAY)
        public /* bridge */ /* synthetic */ void setDisplay(f fVar, String str) {
            super.setDisplay((DefsViewManager) fVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGDefsManagerInterface
        @ReactProp(name = "markerEnd")
        public /* bridge */ /* synthetic */ void setMarkerEnd(f fVar, String str) {
            super.setMarkerEnd((DefsViewManager) fVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGDefsManagerInterface
        @ReactProp(name = "markerMid")
        public /* bridge */ /* synthetic */ void setMarkerMid(f fVar, String str) {
            super.setMarkerMid((DefsViewManager) fVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGDefsManagerInterface
        @ReactProp(name = "markerStart")
        public /* bridge */ /* synthetic */ void setMarkerStart(f fVar, String str) {
            super.setMarkerStart((DefsViewManager) fVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGDefsManagerInterface
        @ReactProp(name = "mask")
        public /* bridge */ /* synthetic */ void setMask(f fVar, String str) {
            super.setMask((DefsViewManager) fVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGDefsManagerInterface
        public /* bridge */ /* synthetic */ void setMatrix(f fVar, ReadableArray readableArray) {
            super.setMatrix((DefsViewManager) fVar, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGDefsManagerInterface
        @ReactProp(name = StackTraceHelper.NAME_KEY)
        public /* bridge */ /* synthetic */ void setName(f fVar, String str) {
            super.setName((DefsViewManager) fVar, str);
        }

        @Override // com.facebook.react.uimanager.BaseViewManager
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = ViewProps.OPACITY)
        public /* bridge */ /* synthetic */ void setOpacity(View view, float f10) {
            super.setOpacity((DefsViewManager) ((VirtualView) view), f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGDefsManagerInterface
        @ReactProp(name = ViewProps.POINTER_EVENTS)
        public /* bridge */ /* synthetic */ void setPointerEvents(f fVar, String str) {
            super.setPointerEvents((DefsViewManager) fVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGDefsManagerInterface
        @ReactProp(name = "responsible")
        public /* bridge */ /* synthetic */ void setResponsible(f fVar, boolean z10) {
            super.setResponsible((DefsViewManager) fVar, z10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class EllipseViewManager extends RenderableViewManager<h> implements RNSVGEllipseManagerInterface<h> {
        public static final String REACT_CLASS = "RNSVGEllipse";

        /* JADX INFO: Access modifiers changed from: package-private */
        public EllipseViewManager() {
            super(VirtualViewManager.SVGClass.RNSVGEllipse);
            ((VirtualViewManager) this).mDelegate = new RNSVGEllipseManagerDelegate(this);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(name = "clipPath")
        public /* bridge */ /* synthetic */ void setClipPath(h hVar, String str) {
            super.setClipPath((EllipseViewManager) hVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(name = "clipRule")
        public /* bridge */ /* synthetic */ void setClipRule(h hVar, int i10) {
            super.setClipRule((EllipseViewManager) hVar, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(customType = "Color", name = ViewProps.COLOR)
        public /* bridge */ /* synthetic */ void setColor(h hVar, Integer num) {
            super.setColor((EllipseViewManager) hVar, num);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(name = ViewProps.DISPLAY)
        public /* bridge */ /* synthetic */ void setDisplay(h hVar, String str) {
            super.setDisplay((EllipseViewManager) hVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(name = "fill")
        public /* bridge */ /* synthetic */ void setFill(h hVar, Dynamic dynamic) {
            super.setFill((EllipseViewManager) hVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "fillOpacity")
        public /* bridge */ /* synthetic */ void setFillOpacity(h hVar, float f10) {
            super.setFillOpacity((EllipseViewManager) hVar, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(defaultInt = 1, name = "fillRule")
        public /* bridge */ /* synthetic */ void setFillRule(h hVar, int i10) {
            super.setFillRule((EllipseViewManager) hVar, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(name = ViewProps.FILTER)
        public /* bridge */ /* synthetic */ void setFilter(h hVar, String str) {
            super.setFilter((EllipseViewManager) hVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(name = "markerEnd")
        public /* bridge */ /* synthetic */ void setMarkerEnd(h hVar, String str) {
            super.setMarkerEnd((EllipseViewManager) hVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(name = "markerMid")
        public /* bridge */ /* synthetic */ void setMarkerMid(h hVar, String str) {
            super.setMarkerMid((EllipseViewManager) hVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(name = "markerStart")
        public /* bridge */ /* synthetic */ void setMarkerStart(h hVar, String str) {
            super.setMarkerStart((EllipseViewManager) hVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(name = "mask")
        public /* bridge */ /* synthetic */ void setMask(h hVar, String str) {
            super.setMask((EllipseViewManager) hVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        public /* bridge */ /* synthetic */ void setMatrix(h hVar, ReadableArray readableArray) {
            super.setMatrix((EllipseViewManager) hVar, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(name = StackTraceHelper.NAME_KEY)
        public /* bridge */ /* synthetic */ void setName(h hVar, String str) {
            super.setName((EllipseViewManager) hVar, str);
        }

        @Override // com.facebook.react.uimanager.BaseViewManager
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = ViewProps.OPACITY)
        public /* bridge */ /* synthetic */ void setOpacity(View view, float f10) {
            super.setOpacity((EllipseViewManager) ((VirtualView) view), f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(name = ViewProps.POINTER_EVENTS)
        public /* bridge */ /* synthetic */ void setPointerEvents(h hVar, String str) {
            super.setPointerEvents((EllipseViewManager) hVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(name = "propList")
        public /* bridge */ /* synthetic */ void setPropList(h hVar, ReadableArray readableArray) {
            super.setPropList((EllipseViewManager) hVar, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(name = "responsible")
        public /* bridge */ /* synthetic */ void setResponsible(h hVar, boolean z10) {
            super.setResponsible((EllipseViewManager) hVar, z10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(name = "stroke")
        public /* bridge */ /* synthetic */ void setStroke(h hVar, Dynamic dynamic) {
            super.setStroke((EllipseViewManager) hVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(name = "strokeDasharray")
        public /* bridge */ /* synthetic */ void setStrokeDasharray(h hVar, Dynamic dynamic) {
            super.setStrokeDasharray((EllipseViewManager) hVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(name = "strokeDashoffset")
        public /* bridge */ /* synthetic */ void setStrokeDashoffset(h hVar, float f10) {
            super.setStrokeDashoffset((EllipseViewManager) hVar, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinecap")
        public /* bridge */ /* synthetic */ void setStrokeLinecap(h hVar, int i10) {
            super.setStrokeLinecap((EllipseViewManager) hVar, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinejoin")
        public /* bridge */ /* synthetic */ void setStrokeLinejoin(h hVar, int i10) {
            super.setStrokeLinejoin((EllipseViewManager) hVar, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(defaultFloat = BulletSpan.STANDARD_STROKE_WIDTH_PX, name = "strokeMiterlimit")
        public /* bridge */ /* synthetic */ void setStrokeMiterlimit(h hVar, float f10) {
            super.setStrokeMiterlimit((EllipseViewManager) hVar, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "strokeOpacity")
        public /* bridge */ /* synthetic */ void setStrokeOpacity(h hVar, float f10) {
            super.setStrokeOpacity((EllipseViewManager) hVar, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(name = "strokeWidth")
        public /* bridge */ /* synthetic */ void setStrokeWidth(h hVar, Dynamic dynamic) {
            super.setStrokeWidth((EllipseViewManager) hVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(name = "vectorEffect")
        public /* bridge */ /* synthetic */ void setVectorEffect(h hVar, int i10) {
            super.setVectorEffect((EllipseViewManager) hVar, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(name = "cx")
        public void setCx(h hVar, Dynamic dynamic) {
            hVar.c(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(name = "cy")
        public void setCy(h hVar, Dynamic dynamic) {
            hVar.d(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(name = "rx")
        public void setRx(h hVar, Dynamic dynamic) {
            hVar.e(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGEllipseManagerInterface
        @ReactProp(name = "ry")
        public void setRy(h hVar, Dynamic dynamic) {
            hVar.f(dynamic);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class FeBlendManager extends FilterPrimitiveManager<j> implements RNSVGFeBlendManagerInterface<j> {
        public static final String REACT_CLASS = "RNSVGFeBlend";

        /* JADX INFO: Access modifiers changed from: package-private */
        public FeBlendManager() {
            super(VirtualViewManager.SVGClass.RNSVGFeBlend);
            ((VirtualViewManager) this).mDelegate = new RNSVGFeBlendManagerDelegate(this);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeBlendManagerInterface
        @ReactProp(name = "height")
        public /* bridge */ /* synthetic */ void setHeight(j jVar, Dynamic dynamic) {
            super.setHeight((FeBlendManager) jVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeBlendManagerInterface
        @ReactProp(name = "result")
        public /* bridge */ /* synthetic */ void setResult(j jVar, String str) {
            super.setResult((FeBlendManager) jVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeBlendManagerInterface
        @ReactProp(name = "width")
        public /* bridge */ /* synthetic */ void setWidth(j jVar, Dynamic dynamic) {
            super.setWidth((FeBlendManager) jVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeBlendManagerInterface
        @ReactProp(name = "x")
        public /* bridge */ /* synthetic */ void setX(j jVar, Dynamic dynamic) {
            super.setX((FeBlendManager) jVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeBlendManagerInterface
        @ReactProp(name = "y")
        public /* bridge */ /* synthetic */ void setY(j jVar, Dynamic dynamic) {
            super.setY((FeBlendManager) jVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeBlendManagerInterface
        @ReactProp(name = "in1")
        public void setIn1(j jVar, String str) {
            jVar.l(str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeBlendManagerInterface
        @ReactProp(name = "in2")
        public void setIn2(j jVar, String str) {
            jVar.m(str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeBlendManagerInterface
        @ReactProp(name = "mode")
        public void setMode(j jVar, String str) {
            jVar.n(str);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class FeColorMatrixManager extends FilterPrimitiveManager<k> implements RNSVGFeColorMatrixManagerInterface<k> {
        public static final String REACT_CLASS = "RNSVGFeColorMatrix";

        /* JADX INFO: Access modifiers changed from: package-private */
        public FeColorMatrixManager() {
            super(VirtualViewManager.SVGClass.RNSVGFeColorMatrix);
            ((VirtualViewManager) this).mDelegate = new RNSVGFeColorMatrixManagerDelegate(this);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeColorMatrixManagerInterface
        @ReactProp(name = "height")
        public /* bridge */ /* synthetic */ void setHeight(k kVar, Dynamic dynamic) {
            super.setHeight((FeColorMatrixManager) kVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeColorMatrixManagerInterface
        @ReactProp(name = "result")
        public /* bridge */ /* synthetic */ void setResult(k kVar, String str) {
            super.setResult((FeColorMatrixManager) kVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeColorMatrixManagerInterface
        @ReactProp(name = "width")
        public /* bridge */ /* synthetic */ void setWidth(k kVar, Dynamic dynamic) {
            super.setWidth((FeColorMatrixManager) kVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeColorMatrixManagerInterface
        @ReactProp(name = "x")
        public /* bridge */ /* synthetic */ void setX(k kVar, Dynamic dynamic) {
            super.setX((FeColorMatrixManager) kVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeColorMatrixManagerInterface
        @ReactProp(name = "y")
        public /* bridge */ /* synthetic */ void setY(k kVar, Dynamic dynamic) {
            super.setY((FeColorMatrixManager) kVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeColorMatrixManagerInterface
        @ReactProp(name = "in1")
        public void setIn1(k kVar, String str) {
            kVar.k(str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeColorMatrixManagerInterface
        @ReactProp(name = "type")
        public void setType(k kVar, String str) {
            kVar.l(str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeColorMatrixManagerInterface
        @ReactProp(name = "values")
        public void setValues(k kVar, ReadableArray readableArray) {
            kVar.m(readableArray);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class FeCompositeManager extends FilterPrimitiveManager<l> implements RNSVGFeCompositeManagerInterface<l> {
        public static final String REACT_CLASS = "RNSVGFeComposite";

        /* JADX INFO: Access modifiers changed from: package-private */
        public FeCompositeManager() {
            super(VirtualViewManager.SVGClass.RNSVGFeComposite);
            ((VirtualViewManager) this).mDelegate = new RNSVGFeCompositeManagerDelegate(this);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeCompositeManagerInterface
        @ReactProp(name = "height")
        public /* bridge */ /* synthetic */ void setHeight(l lVar, Dynamic dynamic) {
            super.setHeight((FeCompositeManager) lVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeCompositeManagerInterface
        @ReactProp(name = "result")
        public /* bridge */ /* synthetic */ void setResult(l lVar, String str) {
            super.setResult((FeCompositeManager) lVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeCompositeManagerInterface
        @ReactProp(name = "width")
        public /* bridge */ /* synthetic */ void setWidth(l lVar, Dynamic dynamic) {
            super.setWidth((FeCompositeManager) lVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeCompositeManagerInterface
        @ReactProp(name = "x")
        public /* bridge */ /* synthetic */ void setX(l lVar, Dynamic dynamic) {
            super.setX((FeCompositeManager) lVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeCompositeManagerInterface
        @ReactProp(name = "y")
        public /* bridge */ /* synthetic */ void setY(l lVar, Dynamic dynamic) {
            super.setY((FeCompositeManager) lVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeCompositeManagerInterface
        @ReactProp(name = "in1")
        public void setIn1(l lVar, String str) {
            lVar.k(str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeCompositeManagerInterface
        @ReactProp(name = "in2")
        public void setIn2(l lVar, String str) {
            lVar.l(str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeCompositeManagerInterface
        @ReactProp(name = "k1")
        public void setK1(l lVar, float f10) {
            lVar.m(Float.valueOf(f10));
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeCompositeManagerInterface
        @ReactProp(name = "k2")
        public void setK2(l lVar, float f10) {
            lVar.n(Float.valueOf(f10));
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeCompositeManagerInterface
        @ReactProp(name = "k3")
        public void setK3(l lVar, float f10) {
            lVar.o(Float.valueOf(f10));
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeCompositeManagerInterface
        @ReactProp(name = "k4")
        public void setK4(l lVar, float f10) {
            lVar.p(Float.valueOf(f10));
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeCompositeManagerInterface
        @ReactProp(name = "operator1")
        public void setOperator1(l lVar, String str) {
            lVar.q(str);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class FeFloodManager extends FilterPrimitiveManager<m> implements RNSVGFeFloodManagerInterface<m> {
        public static final String REACT_CLASS = "RNSVGFeFlood";

        /* JADX INFO: Access modifiers changed from: package-private */
        public FeFloodManager() {
            super(VirtualViewManager.SVGClass.RNSVGFeFlood);
            ((VirtualViewManager) this).mDelegate = new RNSVGFeFloodManagerDelegate(this);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeFloodManagerInterface
        @ReactProp(name = "height")
        public /* bridge */ /* synthetic */ void setHeight(m mVar, Dynamic dynamic) {
            super.setHeight((FeFloodManager) mVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeFloodManagerInterface
        @ReactProp(name = "result")
        public /* bridge */ /* synthetic */ void setResult(m mVar, String str) {
            super.setResult((FeFloodManager) mVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeFloodManagerInterface
        @ReactProp(name = "width")
        public /* bridge */ /* synthetic */ void setWidth(m mVar, Dynamic dynamic) {
            super.setWidth((FeFloodManager) mVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeFloodManagerInterface
        @ReactProp(name = "x")
        public /* bridge */ /* synthetic */ void setX(m mVar, Dynamic dynamic) {
            super.setX((FeFloodManager) mVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeFloodManagerInterface
        @ReactProp(name = "y")
        public /* bridge */ /* synthetic */ void setY(m mVar, Dynamic dynamic) {
            super.setY((FeFloodManager) mVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeFloodManagerInterface
        @ReactProp(name = "floodColor")
        public void setFloodColor(m mVar, Dynamic dynamic) {
            mVar.k(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeFloodManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "floodOpacity")
        public void setFloodOpacity(m mVar, float f10) {
            mVar.m(f10);
        }

        public void setFloodColor(m mVar, ReadableMap readableMap) {
            mVar.l(readableMap);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class FeGaussianBlurManager extends FilterPrimitiveManager<n> implements RNSVGFeGaussianBlurManagerInterface<n> {
        public static final String REACT_CLASS = "RNSVGFeGaussianBlur";

        /* JADX INFO: Access modifiers changed from: package-private */
        public FeGaussianBlurManager() {
            super(VirtualViewManager.SVGClass.RNSVGFeGaussianBlur);
            ((VirtualViewManager) this).mDelegate = new RNSVGFeGaussianBlurManagerDelegate(this);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeGaussianBlurManagerInterface
        @ReactProp(name = "height")
        public /* bridge */ /* synthetic */ void setHeight(n nVar, Dynamic dynamic) {
            super.setHeight((FeGaussianBlurManager) nVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeGaussianBlurManagerInterface
        @ReactProp(name = "result")
        public /* bridge */ /* synthetic */ void setResult(n nVar, String str) {
            super.setResult((FeGaussianBlurManager) nVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeGaussianBlurManagerInterface
        @ReactProp(name = "width")
        public /* bridge */ /* synthetic */ void setWidth(n nVar, Dynamic dynamic) {
            super.setWidth((FeGaussianBlurManager) nVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeGaussianBlurManagerInterface
        @ReactProp(name = "x")
        public /* bridge */ /* synthetic */ void setX(n nVar, Dynamic dynamic) {
            super.setX((FeGaussianBlurManager) nVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeGaussianBlurManagerInterface
        @ReactProp(name = "y")
        public /* bridge */ /* synthetic */ void setY(n nVar, Dynamic dynamic) {
            super.setY((FeGaussianBlurManager) nVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeGaussianBlurManagerInterface
        @ReactProp(name = "values")
        public void setEdgeMode(n nVar, String str) {
            nVar.l(str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeGaussianBlurManagerInterface
        @ReactProp(name = "in1")
        public void setIn1(n nVar, String str) {
            nVar.m(str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeGaussianBlurManagerInterface
        @ReactProp(name = "stdDeviationX")
        public void setStdDeviationX(n nVar, float f10) {
            nVar.n(f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeGaussianBlurManagerInterface
        @ReactProp(name = "stdDeviationY")
        public void setStdDeviationY(n nVar, float f10) {
            nVar.o(f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class FeMergeManager extends FilterPrimitiveManager<o> implements RNSVGFeMergeManagerInterface<o> {
        public static final String REACT_CLASS = "RNSVGFeMerge";

        /* JADX INFO: Access modifiers changed from: package-private */
        public FeMergeManager() {
            super(VirtualViewManager.SVGClass.RNSVGFeMerge);
            ((VirtualViewManager) this).mDelegate = new RNSVGFeMergeManagerDelegate(this);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeMergeManagerInterface
        @ReactProp(name = "height")
        public /* bridge */ /* synthetic */ void setHeight(o oVar, Dynamic dynamic) {
            super.setHeight((FeMergeManager) oVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeMergeManagerInterface
        @ReactProp(name = "result")
        public /* bridge */ /* synthetic */ void setResult(o oVar, String str) {
            super.setResult((FeMergeManager) oVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeMergeManagerInterface
        @ReactProp(name = "width")
        public /* bridge */ /* synthetic */ void setWidth(o oVar, Dynamic dynamic) {
            super.setWidth((FeMergeManager) oVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeMergeManagerInterface
        @ReactProp(name = "x")
        public /* bridge */ /* synthetic */ void setX(o oVar, Dynamic dynamic) {
            super.setX((FeMergeManager) oVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeMergeManagerInterface
        @ReactProp(name = "y")
        public /* bridge */ /* synthetic */ void setY(o oVar, Dynamic dynamic) {
            super.setY((FeMergeManager) oVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeMergeManagerInterface
        @ReactProp(name = "nodes")
        public void setNodes(o oVar, ReadableArray readableArray) {
            oVar.k(readableArray);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class FeOffsetManager extends FilterPrimitiveManager<p> implements RNSVGFeOffsetManagerInterface<p> {
        public static final String REACT_CLASS = "RNSVGFeOffset";

        /* JADX INFO: Access modifiers changed from: package-private */
        public FeOffsetManager() {
            super(VirtualViewManager.SVGClass.RNSVGFeOffset);
            ((VirtualViewManager) this).mDelegate = new RNSVGFeOffsetManagerDelegate(this);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeOffsetManagerInterface
        @ReactProp(name = "height")
        public /* bridge */ /* synthetic */ void setHeight(p pVar, Dynamic dynamic) {
            super.setHeight((FeOffsetManager) pVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeOffsetManagerInterface
        @ReactProp(name = "result")
        public /* bridge */ /* synthetic */ void setResult(p pVar, String str) {
            super.setResult((FeOffsetManager) pVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeOffsetManagerInterface
        @ReactProp(name = "width")
        public /* bridge */ /* synthetic */ void setWidth(p pVar, Dynamic dynamic) {
            super.setWidth((FeOffsetManager) pVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeOffsetManagerInterface
        @ReactProp(name = "x")
        public /* bridge */ /* synthetic */ void setX(p pVar, Dynamic dynamic) {
            super.setX((FeOffsetManager) pVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeOffsetManagerInterface
        @ReactProp(name = "y")
        public /* bridge */ /* synthetic */ void setY(p pVar, Dynamic dynamic) {
            super.setY((FeOffsetManager) pVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeOffsetManagerInterface
        @ReactProp(name = "dx")
        public void setDx(p pVar, Dynamic dynamic) {
            pVar.k(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeOffsetManagerInterface
        @ReactProp(name = "dy")
        public void setDy(p pVar, Dynamic dynamic) {
            pVar.l(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFeOffsetManagerInterface
        @ReactProp(name = "in1")
        public void setIn1(p pVar, String str) {
            pVar.m(str);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class FilterManager extends VirtualViewManager<x> implements RNSVGFilterManagerInterface<x> {
        public static final String REACT_CLASS = "RNSVGFilter";

        /* JADX INFO: Access modifiers changed from: package-private */
        public FilterManager() {
            super(VirtualViewManager.SVGClass.RNSVGFilter);
            ((VirtualViewManager) this).mDelegate = new RNSVGFilterManagerDelegate(this);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFilterManagerInterface
        @ReactProp(name = StackTraceHelper.NAME_KEY)
        public /* bridge */ /* synthetic */ void setName(x xVar, String str) {
            super.setName((FilterManager) xVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFilterManagerInterface
        @ReactProp(name = "filterUnits")
        public void setFilterUnits(x xVar, String str) {
            xVar.d(str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFilterManagerInterface
        @ReactProp(name = "height")
        public void setHeight(x xVar, Dynamic dynamic) {
            xVar.e(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFilterManagerInterface
        @ReactProp(name = "primitiveUnits")
        public void setPrimitiveUnits(x xVar, String str) {
            xVar.f(str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFilterManagerInterface
        @ReactProp(name = "width")
        public void setWidth(x xVar, Dynamic dynamic) {
            xVar.g(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFilterManagerInterface
        @ReactProp(name = "x")
        public void setX(x xVar, Dynamic dynamic) {
            xVar.h(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGFilterManagerInterface
        @ReactProp(name = "y")
        public void setY(x xVar, Dynamic dynamic) {
            xVar.i(dynamic);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class FilterPrimitiveManager<T extends q> extends VirtualViewManager<T> {
        protected FilterPrimitiveManager(VirtualViewManager.SVGClass sVGClass) {
            super(sVGClass);
        }

        @ReactProp(name = "height")
        public void setHeight(T t10, Dynamic dynamic) {
            t10.f(dynamic);
        }

        @ReactProp(name = "result")
        public void setResult(T t10, String str) {
            t10.g(str);
        }

        @ReactProp(name = "width")
        public void setWidth(T t10, Dynamic dynamic) {
            t10.h(dynamic);
        }

        @ReactProp(name = "x")
        public void setX(T t10, Dynamic dynamic) {
            t10.i(dynamic);
        }

        @ReactProp(name = "y")
        public void setY(T t10, Dynamic dynamic) {
            t10.j(dynamic);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class ForeignObjectManager extends GroupViewManagerAbstract<z> implements RNSVGForeignObjectManagerInterface<z> {
        public static final String REACT_CLASS = "RNSVGForeignObject";

        /* JADX INFO: Access modifiers changed from: package-private */
        public ForeignObjectManager() {
            super(VirtualViewManager.SVGClass.RNSVGForeignObject);
            ((VirtualViewManager) this).mDelegate = new RNSVGForeignObjectManagerDelegate(this);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(name = "clipPath")
        public /* bridge */ /* synthetic */ void setClipPath(z zVar, String str) {
            super.setClipPath((ForeignObjectManager) zVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(name = "clipRule")
        public /* bridge */ /* synthetic */ void setClipRule(z zVar, int i10) {
            super.setClipRule((ForeignObjectManager) zVar, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(customType = "Color", name = ViewProps.COLOR)
        public /* bridge */ /* synthetic */ void setColor(z zVar, Integer num) {
            super.setColor((ForeignObjectManager) zVar, num);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(name = ViewProps.DISPLAY)
        public /* bridge */ /* synthetic */ void setDisplay(z zVar, String str) {
            super.setDisplay((ForeignObjectManager) zVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(name = "fill")
        public /* bridge */ /* synthetic */ void setFill(z zVar, Dynamic dynamic) {
            super.setFill((ForeignObjectManager) zVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "fillOpacity")
        public /* bridge */ /* synthetic */ void setFillOpacity(z zVar, float f10) {
            super.setFillOpacity((ForeignObjectManager) zVar, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(defaultInt = 1, name = "fillRule")
        public /* bridge */ /* synthetic */ void setFillRule(z zVar, int i10) {
            super.setFillRule((ForeignObjectManager) zVar, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(name = ViewProps.FILTER)
        public /* bridge */ /* synthetic */ void setFilter(z zVar, String str) {
            super.setFilter((ForeignObjectManager) zVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(name = "font")
        public /* bridge */ /* synthetic */ void setFont(z zVar, Dynamic dynamic) {
            super.setFont((ForeignObjectManager) zVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(name = ViewProps.FONT_SIZE)
        public /* bridge */ /* synthetic */ void setFontSize(z zVar, Dynamic dynamic) {
            super.setFontSize((ForeignObjectManager) zVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(name = ViewProps.FONT_WEIGHT)
        public /* bridge */ /* synthetic */ void setFontWeight(z zVar, Dynamic dynamic) {
            super.setFontWeight((ForeignObjectManager) zVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(name = "markerEnd")
        public /* bridge */ /* synthetic */ void setMarkerEnd(z zVar, String str) {
            super.setMarkerEnd((ForeignObjectManager) zVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(name = "markerMid")
        public /* bridge */ /* synthetic */ void setMarkerMid(z zVar, String str) {
            super.setMarkerMid((ForeignObjectManager) zVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(name = "markerStart")
        public /* bridge */ /* synthetic */ void setMarkerStart(z zVar, String str) {
            super.setMarkerStart((ForeignObjectManager) zVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(name = "mask")
        public /* bridge */ /* synthetic */ void setMask(z zVar, String str) {
            super.setMask((ForeignObjectManager) zVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        public /* bridge */ /* synthetic */ void setMatrix(z zVar, ReadableArray readableArray) {
            super.setMatrix((ForeignObjectManager) zVar, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(name = StackTraceHelper.NAME_KEY)
        public /* bridge */ /* synthetic */ void setName(z zVar, String str) {
            super.setName((ForeignObjectManager) zVar, str);
        }

        @Override // com.facebook.react.uimanager.BaseViewManager
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = ViewProps.OPACITY)
        public /* bridge */ /* synthetic */ void setOpacity(View view, float f10) {
            super.setOpacity((ForeignObjectManager) ((VirtualView) view), f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(name = ViewProps.POINTER_EVENTS)
        public /* bridge */ /* synthetic */ void setPointerEvents(z zVar, String str) {
            super.setPointerEvents((ForeignObjectManager) zVar, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(name = "propList")
        public /* bridge */ /* synthetic */ void setPropList(z zVar, ReadableArray readableArray) {
            super.setPropList((ForeignObjectManager) zVar, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(name = "responsible")
        public /* bridge */ /* synthetic */ void setResponsible(z zVar, boolean z10) {
            super.setResponsible((ForeignObjectManager) zVar, z10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(name = "stroke")
        public /* bridge */ /* synthetic */ void setStroke(z zVar, Dynamic dynamic) {
            super.setStroke((ForeignObjectManager) zVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(name = "strokeDasharray")
        public /* bridge */ /* synthetic */ void setStrokeDasharray(z zVar, Dynamic dynamic) {
            super.setStrokeDasharray((ForeignObjectManager) zVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(name = "strokeDashoffset")
        public /* bridge */ /* synthetic */ void setStrokeDashoffset(z zVar, float f10) {
            super.setStrokeDashoffset((ForeignObjectManager) zVar, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinecap")
        public /* bridge */ /* synthetic */ void setStrokeLinecap(z zVar, int i10) {
            super.setStrokeLinecap((ForeignObjectManager) zVar, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinejoin")
        public /* bridge */ /* synthetic */ void setStrokeLinejoin(z zVar, int i10) {
            super.setStrokeLinejoin((ForeignObjectManager) zVar, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(defaultFloat = BulletSpan.STANDARD_STROKE_WIDTH_PX, name = "strokeMiterlimit")
        public /* bridge */ /* synthetic */ void setStrokeMiterlimit(z zVar, float f10) {
            super.setStrokeMiterlimit((ForeignObjectManager) zVar, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "strokeOpacity")
        public /* bridge */ /* synthetic */ void setStrokeOpacity(z zVar, float f10) {
            super.setStrokeOpacity((ForeignObjectManager) zVar, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(name = "strokeWidth")
        public /* bridge */ /* synthetic */ void setStrokeWidth(z zVar, Dynamic dynamic) {
            super.setStrokeWidth((ForeignObjectManager) zVar, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(name = "vectorEffect")
        public /* bridge */ /* synthetic */ void setVectorEffect(z zVar, int i10) {
            super.setVectorEffect((ForeignObjectManager) zVar, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(name = "height")
        public void setHeight(z zVar, Dynamic dynamic) {
            zVar.n(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(name = "width")
        public void setWidth(z zVar, Dynamic dynamic) {
            zVar.o(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(name = "x")
        public void setX(z zVar, Dynamic dynamic) {
            zVar.p(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface
        @ReactProp(name = "y")
        public void setY(z zVar, Dynamic dynamic) {
            zVar.q(dynamic);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class GroupViewManager extends GroupViewManagerAbstract<c0> implements RNSVGGroupManagerInterface<c0> {
        public static final String REACT_CLASS = "RNSVGGroup";

        /* JADX INFO: Access modifiers changed from: package-private */
        public GroupViewManager() {
            super(VirtualViewManager.SVGClass.RNSVGGroup);
            ((VirtualViewManager) this).mDelegate = new RNSVGGroupManagerDelegate(this);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(name = "clipPath")
        public /* bridge */ /* synthetic */ void setClipPath(c0 c0Var, String str) {
            super.setClipPath((GroupViewManager) c0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(name = "clipRule")
        public /* bridge */ /* synthetic */ void setClipRule(c0 c0Var, int i10) {
            super.setClipRule((GroupViewManager) c0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(customType = "Color", name = ViewProps.COLOR)
        public /* bridge */ /* synthetic */ void setColor(c0 c0Var, Integer num) {
            super.setColor((GroupViewManager) c0Var, num);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(name = ViewProps.DISPLAY)
        public /* bridge */ /* synthetic */ void setDisplay(c0 c0Var, String str) {
            super.setDisplay((GroupViewManager) c0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(name = "fill")
        public /* bridge */ /* synthetic */ void setFill(c0 c0Var, Dynamic dynamic) {
            super.setFill((GroupViewManager) c0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "fillOpacity")
        public /* bridge */ /* synthetic */ void setFillOpacity(c0 c0Var, float f10) {
            super.setFillOpacity((GroupViewManager) c0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(defaultInt = 1, name = "fillRule")
        public /* bridge */ /* synthetic */ void setFillRule(c0 c0Var, int i10) {
            super.setFillRule((GroupViewManager) c0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(name = ViewProps.FILTER)
        public /* bridge */ /* synthetic */ void setFilter(c0 c0Var, String str) {
            super.setFilter((GroupViewManager) c0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(name = "font")
        public /* bridge */ /* synthetic */ void setFont(c0 c0Var, Dynamic dynamic) {
            super.setFont((GroupViewManager) c0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(name = ViewProps.FONT_SIZE)
        public /* bridge */ /* synthetic */ void setFontSize(c0 c0Var, Dynamic dynamic) {
            super.setFontSize((GroupViewManager) c0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(name = ViewProps.FONT_WEIGHT)
        public /* bridge */ /* synthetic */ void setFontWeight(c0 c0Var, Dynamic dynamic) {
            super.setFontWeight((GroupViewManager) c0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(name = "markerEnd")
        public /* bridge */ /* synthetic */ void setMarkerEnd(c0 c0Var, String str) {
            super.setMarkerEnd((GroupViewManager) c0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(name = "markerMid")
        public /* bridge */ /* synthetic */ void setMarkerMid(c0 c0Var, String str) {
            super.setMarkerMid((GroupViewManager) c0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(name = "markerStart")
        public /* bridge */ /* synthetic */ void setMarkerStart(c0 c0Var, String str) {
            super.setMarkerStart((GroupViewManager) c0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(name = "mask")
        public /* bridge */ /* synthetic */ void setMask(c0 c0Var, String str) {
            super.setMask((GroupViewManager) c0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        public /* bridge */ /* synthetic */ void setMatrix(c0 c0Var, ReadableArray readableArray) {
            super.setMatrix((GroupViewManager) c0Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(name = StackTraceHelper.NAME_KEY)
        public /* bridge */ /* synthetic */ void setName(c0 c0Var, String str) {
            super.setName((GroupViewManager) c0Var, str);
        }

        @Override // com.facebook.react.uimanager.BaseViewManager
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = ViewProps.OPACITY)
        public /* bridge */ /* synthetic */ void setOpacity(View view, float f10) {
            super.setOpacity((GroupViewManager) ((VirtualView) view), f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(name = ViewProps.POINTER_EVENTS)
        public /* bridge */ /* synthetic */ void setPointerEvents(c0 c0Var, String str) {
            super.setPointerEvents((GroupViewManager) c0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(name = "propList")
        public /* bridge */ /* synthetic */ void setPropList(c0 c0Var, ReadableArray readableArray) {
            super.setPropList((GroupViewManager) c0Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(name = "responsible")
        public /* bridge */ /* synthetic */ void setResponsible(c0 c0Var, boolean z10) {
            super.setResponsible((GroupViewManager) c0Var, z10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(name = "stroke")
        public /* bridge */ /* synthetic */ void setStroke(c0 c0Var, Dynamic dynamic) {
            super.setStroke((GroupViewManager) c0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(name = "strokeDasharray")
        public /* bridge */ /* synthetic */ void setStrokeDasharray(c0 c0Var, Dynamic dynamic) {
            super.setStrokeDasharray((GroupViewManager) c0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(name = "strokeDashoffset")
        public /* bridge */ /* synthetic */ void setStrokeDashoffset(c0 c0Var, float f10) {
            super.setStrokeDashoffset((GroupViewManager) c0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinecap")
        public /* bridge */ /* synthetic */ void setStrokeLinecap(c0 c0Var, int i10) {
            super.setStrokeLinecap((GroupViewManager) c0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinejoin")
        public /* bridge */ /* synthetic */ void setStrokeLinejoin(c0 c0Var, int i10) {
            super.setStrokeLinejoin((GroupViewManager) c0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(defaultFloat = BulletSpan.STANDARD_STROKE_WIDTH_PX, name = "strokeMiterlimit")
        public /* bridge */ /* synthetic */ void setStrokeMiterlimit(c0 c0Var, float f10) {
            super.setStrokeMiterlimit((GroupViewManager) c0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "strokeOpacity")
        public /* bridge */ /* synthetic */ void setStrokeOpacity(c0 c0Var, float f10) {
            super.setStrokeOpacity((GroupViewManager) c0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(name = "strokeWidth")
        public /* bridge */ /* synthetic */ void setStrokeWidth(c0 c0Var, Dynamic dynamic) {
            super.setStrokeWidth((GroupViewManager) c0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGGroupManagerInterface
        @ReactProp(name = "vectorEffect")
        public /* bridge */ /* synthetic */ void setVectorEffect(c0 c0Var, int i10) {
            super.setVectorEffect((GroupViewManager) c0Var, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class GroupViewManagerAbstract<U extends c0> extends RenderableViewManager<U> {
        GroupViewManagerAbstract(VirtualViewManager.SVGClass sVGClass) {
            super(sVGClass);
        }

        @ReactProp(name = "font")
        public void setFont(U u10, Dynamic dynamic) {
            u10.k(dynamic);
        }

        @ReactProp(name = ViewProps.FONT_SIZE)
        public void setFontSize(U u10, Dynamic dynamic) {
            JavaOnlyMap javaOnlyMap = new JavaOnlyMap();
            int i10 = a.f16733a[dynamic.getType().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    return;
                }
                javaOnlyMap.putString(ViewProps.FONT_SIZE, dynamic.asString());
            } else {
                javaOnlyMap.putDouble(ViewProps.FONT_SIZE, dynamic.asDouble());
            }
            u10.l(javaOnlyMap);
        }

        @ReactProp(name = ViewProps.FONT_WEIGHT)
        public void setFontWeight(U u10, Dynamic dynamic) {
            JavaOnlyMap javaOnlyMap = new JavaOnlyMap();
            int i10 = a.f16733a[dynamic.getType().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    return;
                }
                javaOnlyMap.putString(ViewProps.FONT_WEIGHT, dynamic.asString());
            } else {
                javaOnlyMap.putDouble(ViewProps.FONT_WEIGHT, dynamic.asDouble());
            }
            u10.l(javaOnlyMap);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class ImageViewManager extends RenderableViewManager<d0> implements RNSVGImageManagerInterface<d0> {
        public static final String REACT_CLASS = "RNSVGImage";

        /* JADX INFO: Access modifiers changed from: package-private */
        public ImageViewManager() {
            super(VirtualViewManager.SVGClass.RNSVGImage);
            ((VirtualViewManager) this).mDelegate = new RNSVGImageManagerDelegate(this);
        }

        @Override // com.horcrux.svg.RenderableViewManager, com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
        public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
            HashMap hashMap = new HashMap();
            hashMap.put(SvgLoadEvent.EVENT_NAME, MapBuilder.of("registrationName", "onLoad"));
            return hashMap;
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(name = "clipPath")
        public /* bridge */ /* synthetic */ void setClipPath(d0 d0Var, String str) {
            super.setClipPath((ImageViewManager) d0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(name = "clipRule")
        public /* bridge */ /* synthetic */ void setClipRule(d0 d0Var, int i10) {
            super.setClipRule((ImageViewManager) d0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(customType = "Color", name = ViewProps.COLOR)
        public /* bridge */ /* synthetic */ void setColor(d0 d0Var, Integer num) {
            super.setColor((ImageViewManager) d0Var, num);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(name = ViewProps.DISPLAY)
        public /* bridge */ /* synthetic */ void setDisplay(d0 d0Var, String str) {
            super.setDisplay((ImageViewManager) d0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(name = "fill")
        public /* bridge */ /* synthetic */ void setFill(d0 d0Var, Dynamic dynamic) {
            super.setFill((ImageViewManager) d0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "fillOpacity")
        public /* bridge */ /* synthetic */ void setFillOpacity(d0 d0Var, float f10) {
            super.setFillOpacity((ImageViewManager) d0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(defaultInt = 1, name = "fillRule")
        public /* bridge */ /* synthetic */ void setFillRule(d0 d0Var, int i10) {
            super.setFillRule((ImageViewManager) d0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(name = ViewProps.FILTER)
        public /* bridge */ /* synthetic */ void setFilter(d0 d0Var, String str) {
            super.setFilter((ImageViewManager) d0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(name = "markerEnd")
        public /* bridge */ /* synthetic */ void setMarkerEnd(d0 d0Var, String str) {
            super.setMarkerEnd((ImageViewManager) d0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(name = "markerMid")
        public /* bridge */ /* synthetic */ void setMarkerMid(d0 d0Var, String str) {
            super.setMarkerMid((ImageViewManager) d0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(name = "markerStart")
        public /* bridge */ /* synthetic */ void setMarkerStart(d0 d0Var, String str) {
            super.setMarkerStart((ImageViewManager) d0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(name = "mask")
        public /* bridge */ /* synthetic */ void setMask(d0 d0Var, String str) {
            super.setMask((ImageViewManager) d0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        public /* bridge */ /* synthetic */ void setMatrix(d0 d0Var, ReadableArray readableArray) {
            super.setMatrix((ImageViewManager) d0Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(name = StackTraceHelper.NAME_KEY)
        public /* bridge */ /* synthetic */ void setName(d0 d0Var, String str) {
            super.setName((ImageViewManager) d0Var, str);
        }

        @Override // com.facebook.react.uimanager.BaseViewManager
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = ViewProps.OPACITY)
        public /* bridge */ /* synthetic */ void setOpacity(View view, float f10) {
            super.setOpacity((ImageViewManager) ((VirtualView) view), f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(name = ViewProps.POINTER_EVENTS)
        public /* bridge */ /* synthetic */ void setPointerEvents(d0 d0Var, String str) {
            super.setPointerEvents((ImageViewManager) d0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(name = "propList")
        public /* bridge */ /* synthetic */ void setPropList(d0 d0Var, ReadableArray readableArray) {
            super.setPropList((ImageViewManager) d0Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(name = "responsible")
        public /* bridge */ /* synthetic */ void setResponsible(d0 d0Var, boolean z10) {
            super.setResponsible((ImageViewManager) d0Var, z10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(name = "stroke")
        public /* bridge */ /* synthetic */ void setStroke(d0 d0Var, Dynamic dynamic) {
            super.setStroke((ImageViewManager) d0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(name = "strokeDasharray")
        public /* bridge */ /* synthetic */ void setStrokeDasharray(d0 d0Var, Dynamic dynamic) {
            super.setStrokeDasharray((ImageViewManager) d0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(name = "strokeDashoffset")
        public /* bridge */ /* synthetic */ void setStrokeDashoffset(d0 d0Var, float f10) {
            super.setStrokeDashoffset((ImageViewManager) d0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinecap")
        public /* bridge */ /* synthetic */ void setStrokeLinecap(d0 d0Var, int i10) {
            super.setStrokeLinecap((ImageViewManager) d0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinejoin")
        public /* bridge */ /* synthetic */ void setStrokeLinejoin(d0 d0Var, int i10) {
            super.setStrokeLinejoin((ImageViewManager) d0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(defaultFloat = BulletSpan.STANDARD_STROKE_WIDTH_PX, name = "strokeMiterlimit")
        public /* bridge */ /* synthetic */ void setStrokeMiterlimit(d0 d0Var, float f10) {
            super.setStrokeMiterlimit((ImageViewManager) d0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "strokeOpacity")
        public /* bridge */ /* synthetic */ void setStrokeOpacity(d0 d0Var, float f10) {
            super.setStrokeOpacity((ImageViewManager) d0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(name = "strokeWidth")
        public /* bridge */ /* synthetic */ void setStrokeWidth(d0 d0Var, Dynamic dynamic) {
            super.setStrokeWidth((ImageViewManager) d0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(name = "vectorEffect")
        public /* bridge */ /* synthetic */ void setVectorEffect(d0 d0Var, int i10) {
            super.setVectorEffect((ImageViewManager) d0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(name = "align")
        public void setAlign(d0 d0Var, String str) {
            d0Var.setAlign(str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(name = "height")
        public void setHeight(d0 d0Var, Dynamic dynamic) {
            d0Var.h(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(name = "meetOrSlice")
        public void setMeetOrSlice(d0 d0Var, int i10) {
            d0Var.setMeetOrSlice(i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(customType = "ImageSource", name = "src")
        public void setSrc(d0 d0Var, ReadableMap readableMap) {
            d0Var.i(readableMap);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(name = "width")
        public void setWidth(d0 d0Var, Dynamic dynamic) {
            d0Var.j(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(name = "x")
        public void setX(d0 d0Var, Dynamic dynamic) {
            d0Var.k(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGImageManagerInterface
        @ReactProp(name = "y")
        public void setY(d0 d0Var, Dynamic dynamic) {
            d0Var.l(dynamic);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class LineViewManager extends RenderableViewManager<e0> implements RNSVGLineManagerInterface<e0> {
        public static final String REACT_CLASS = "RNSVGLine";

        /* JADX INFO: Access modifiers changed from: package-private */
        public LineViewManager() {
            super(VirtualViewManager.SVGClass.RNSVGLine);
            ((VirtualViewManager) this).mDelegate = new RNSVGLineManagerDelegate(this);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(name = "clipPath")
        public /* bridge */ /* synthetic */ void setClipPath(e0 e0Var, String str) {
            super.setClipPath((LineViewManager) e0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(name = "clipRule")
        public /* bridge */ /* synthetic */ void setClipRule(e0 e0Var, int i10) {
            super.setClipRule((LineViewManager) e0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(customType = "Color", name = ViewProps.COLOR)
        public /* bridge */ /* synthetic */ void setColor(e0 e0Var, Integer num) {
            super.setColor((LineViewManager) e0Var, num);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(name = ViewProps.DISPLAY)
        public /* bridge */ /* synthetic */ void setDisplay(e0 e0Var, String str) {
            super.setDisplay((LineViewManager) e0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(name = "fill")
        public /* bridge */ /* synthetic */ void setFill(e0 e0Var, Dynamic dynamic) {
            super.setFill((LineViewManager) e0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "fillOpacity")
        public /* bridge */ /* synthetic */ void setFillOpacity(e0 e0Var, float f10) {
            super.setFillOpacity((LineViewManager) e0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(defaultInt = 1, name = "fillRule")
        public /* bridge */ /* synthetic */ void setFillRule(e0 e0Var, int i10) {
            super.setFillRule((LineViewManager) e0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(name = ViewProps.FILTER)
        public /* bridge */ /* synthetic */ void setFilter(e0 e0Var, String str) {
            super.setFilter((LineViewManager) e0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(name = "markerEnd")
        public /* bridge */ /* synthetic */ void setMarkerEnd(e0 e0Var, String str) {
            super.setMarkerEnd((LineViewManager) e0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(name = "markerMid")
        public /* bridge */ /* synthetic */ void setMarkerMid(e0 e0Var, String str) {
            super.setMarkerMid((LineViewManager) e0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(name = "markerStart")
        public /* bridge */ /* synthetic */ void setMarkerStart(e0 e0Var, String str) {
            super.setMarkerStart((LineViewManager) e0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(name = "mask")
        public /* bridge */ /* synthetic */ void setMask(e0 e0Var, String str) {
            super.setMask((LineViewManager) e0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        public /* bridge */ /* synthetic */ void setMatrix(e0 e0Var, ReadableArray readableArray) {
            super.setMatrix((LineViewManager) e0Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(name = StackTraceHelper.NAME_KEY)
        public /* bridge */ /* synthetic */ void setName(e0 e0Var, String str) {
            super.setName((LineViewManager) e0Var, str);
        }

        @Override // com.facebook.react.uimanager.BaseViewManager
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = ViewProps.OPACITY)
        public /* bridge */ /* synthetic */ void setOpacity(View view, float f10) {
            super.setOpacity((LineViewManager) ((VirtualView) view), f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(name = ViewProps.POINTER_EVENTS)
        public /* bridge */ /* synthetic */ void setPointerEvents(e0 e0Var, String str) {
            super.setPointerEvents((LineViewManager) e0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(name = "propList")
        public /* bridge */ /* synthetic */ void setPropList(e0 e0Var, ReadableArray readableArray) {
            super.setPropList((LineViewManager) e0Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(name = "responsible")
        public /* bridge */ /* synthetic */ void setResponsible(e0 e0Var, boolean z10) {
            super.setResponsible((LineViewManager) e0Var, z10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(name = "stroke")
        public /* bridge */ /* synthetic */ void setStroke(e0 e0Var, Dynamic dynamic) {
            super.setStroke((LineViewManager) e0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(name = "strokeDasharray")
        public /* bridge */ /* synthetic */ void setStrokeDasharray(e0 e0Var, Dynamic dynamic) {
            super.setStrokeDasharray((LineViewManager) e0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(name = "strokeDashoffset")
        public /* bridge */ /* synthetic */ void setStrokeDashoffset(e0 e0Var, float f10) {
            super.setStrokeDashoffset((LineViewManager) e0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinecap")
        public /* bridge */ /* synthetic */ void setStrokeLinecap(e0 e0Var, int i10) {
            super.setStrokeLinecap((LineViewManager) e0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinejoin")
        public /* bridge */ /* synthetic */ void setStrokeLinejoin(e0 e0Var, int i10) {
            super.setStrokeLinejoin((LineViewManager) e0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(defaultFloat = BulletSpan.STANDARD_STROKE_WIDTH_PX, name = "strokeMiterlimit")
        public /* bridge */ /* synthetic */ void setStrokeMiterlimit(e0 e0Var, float f10) {
            super.setStrokeMiterlimit((LineViewManager) e0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "strokeOpacity")
        public /* bridge */ /* synthetic */ void setStrokeOpacity(e0 e0Var, float f10) {
            super.setStrokeOpacity((LineViewManager) e0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(name = "strokeWidth")
        public /* bridge */ /* synthetic */ void setStrokeWidth(e0 e0Var, Dynamic dynamic) {
            super.setStrokeWidth((LineViewManager) e0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(name = "vectorEffect")
        public /* bridge */ /* synthetic */ void setVectorEffect(e0 e0Var, int i10) {
            super.setVectorEffect((LineViewManager) e0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(name = "x1")
        public void setX1(e0 e0Var, Dynamic dynamic) {
            e0Var.c(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(name = "x2")
        public void setX2(e0 e0Var, Dynamic dynamic) {
            e0Var.d(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(name = "y1")
        public void setY1(e0 e0Var, Dynamic dynamic) {
            e0Var.e(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLineManagerInterface
        @ReactProp(name = "y2")
        public void setY2(e0 e0Var, Dynamic dynamic) {
            e0Var.f(dynamic);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class LinearGradientManager extends VirtualViewManager<f0> implements RNSVGLinearGradientManagerInterface<f0> {
        public static final String REACT_CLASS = "RNSVGLinearGradient";

        /* JADX INFO: Access modifiers changed from: package-private */
        public LinearGradientManager() {
            super(VirtualViewManager.SVGClass.RNSVGLinearGradient);
            ((VirtualViewManager) this).mDelegate = new RNSVGLinearGradientManagerDelegate(this);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLinearGradientManagerInterface
        @ReactProp(name = "clipPath")
        public /* bridge */ /* synthetic */ void setClipPath(f0 f0Var, String str) {
            super.setClipPath((LinearGradientManager) f0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLinearGradientManagerInterface
        @ReactProp(name = "clipRule")
        public /* bridge */ /* synthetic */ void setClipRule(f0 f0Var, int i10) {
            super.setClipRule((LinearGradientManager) f0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLinearGradientManagerInterface
        @ReactProp(name = ViewProps.DISPLAY)
        public /* bridge */ /* synthetic */ void setDisplay(f0 f0Var, String str) {
            super.setDisplay((LinearGradientManager) f0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLinearGradientManagerInterface
        @ReactProp(name = "markerEnd")
        public /* bridge */ /* synthetic */ void setMarkerEnd(f0 f0Var, String str) {
            super.setMarkerEnd((LinearGradientManager) f0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLinearGradientManagerInterface
        @ReactProp(name = "markerMid")
        public /* bridge */ /* synthetic */ void setMarkerMid(f0 f0Var, String str) {
            super.setMarkerMid((LinearGradientManager) f0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLinearGradientManagerInterface
        @ReactProp(name = "markerStart")
        public /* bridge */ /* synthetic */ void setMarkerStart(f0 f0Var, String str) {
            super.setMarkerStart((LinearGradientManager) f0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLinearGradientManagerInterface
        @ReactProp(name = "mask")
        public /* bridge */ /* synthetic */ void setMask(f0 f0Var, String str) {
            super.setMask((LinearGradientManager) f0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLinearGradientManagerInterface
        public /* bridge */ /* synthetic */ void setMatrix(f0 f0Var, ReadableArray readableArray) {
            super.setMatrix((LinearGradientManager) f0Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLinearGradientManagerInterface
        @ReactProp(name = StackTraceHelper.NAME_KEY)
        public /* bridge */ /* synthetic */ void setName(f0 f0Var, String str) {
            super.setName((LinearGradientManager) f0Var, str);
        }

        @Override // com.facebook.react.uimanager.BaseViewManager
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = ViewProps.OPACITY)
        public /* bridge */ /* synthetic */ void setOpacity(View view, float f10) {
            super.setOpacity((LinearGradientManager) ((VirtualView) view), f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLinearGradientManagerInterface
        @ReactProp(name = ViewProps.POINTER_EVENTS)
        public /* bridge */ /* synthetic */ void setPointerEvents(f0 f0Var, String str) {
            super.setPointerEvents((LinearGradientManager) f0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLinearGradientManagerInterface
        @ReactProp(name = "responsible")
        public /* bridge */ /* synthetic */ void setResponsible(f0 f0Var, boolean z10) {
            super.setResponsible((LinearGradientManager) f0Var, z10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLinearGradientManagerInterface
        @ReactProp(name = "gradient")
        public void setGradient(f0 f0Var, ReadableArray readableArray) {
            f0Var.c(readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLinearGradientManagerInterface
        @ReactProp(name = "gradientTransform")
        public void setGradientTransform(f0 f0Var, ReadableArray readableArray) {
            f0Var.d(readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLinearGradientManagerInterface
        @ReactProp(name = "gradientUnits")
        public void setGradientUnits(f0 f0Var, int i10) {
            f0Var.e(i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLinearGradientManagerInterface
        @ReactProp(name = "x1")
        public void setX1(f0 f0Var, Dynamic dynamic) {
            f0Var.f(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLinearGradientManagerInterface
        @ReactProp(name = "x2")
        public void setX2(f0 f0Var, Dynamic dynamic) {
            f0Var.g(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLinearGradientManagerInterface
        @ReactProp(name = "y1")
        public void setY1(f0 f0Var, Dynamic dynamic) {
            f0Var.h(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGLinearGradientManagerInterface
        @ReactProp(name = "y2")
        public void setY2(f0 f0Var, Dynamic dynamic) {
            f0Var.i(dynamic);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class MarkerManager extends GroupViewManagerAbstract<g0> implements RNSVGMarkerManagerInterface<g0> {
        public static final String REACT_CLASS = "RNSVGMarker";

        /* JADX INFO: Access modifiers changed from: package-private */
        public MarkerManager() {
            super(VirtualViewManager.SVGClass.RNSVGMarker);
            ((VirtualViewManager) this).mDelegate = new RNSVGMarkerManagerDelegate(this);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = "clipPath")
        public /* bridge */ /* synthetic */ void setClipPath(g0 g0Var, String str) {
            super.setClipPath((MarkerManager) g0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = "clipRule")
        public /* bridge */ /* synthetic */ void setClipRule(g0 g0Var, int i10) {
            super.setClipRule((MarkerManager) g0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(customType = "Color", name = ViewProps.COLOR)
        public /* bridge */ /* synthetic */ void setColor(g0 g0Var, Integer num) {
            super.setColor((MarkerManager) g0Var, num);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = ViewProps.DISPLAY)
        public /* bridge */ /* synthetic */ void setDisplay(g0 g0Var, String str) {
            super.setDisplay((MarkerManager) g0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = "fill")
        public /* bridge */ /* synthetic */ void setFill(g0 g0Var, Dynamic dynamic) {
            super.setFill((MarkerManager) g0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "fillOpacity")
        public /* bridge */ /* synthetic */ void setFillOpacity(g0 g0Var, float f10) {
            super.setFillOpacity((MarkerManager) g0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(defaultInt = 1, name = "fillRule")
        public /* bridge */ /* synthetic */ void setFillRule(g0 g0Var, int i10) {
            super.setFillRule((MarkerManager) g0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = ViewProps.FILTER)
        public /* bridge */ /* synthetic */ void setFilter(g0 g0Var, String str) {
            super.setFilter((MarkerManager) g0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = "font")
        public /* bridge */ /* synthetic */ void setFont(g0 g0Var, Dynamic dynamic) {
            super.setFont((MarkerManager) g0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = ViewProps.FONT_SIZE)
        public /* bridge */ /* synthetic */ void setFontSize(g0 g0Var, Dynamic dynamic) {
            super.setFontSize((MarkerManager) g0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = ViewProps.FONT_WEIGHT)
        public /* bridge */ /* synthetic */ void setFontWeight(g0 g0Var, Dynamic dynamic) {
            super.setFontWeight((MarkerManager) g0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = "markerEnd")
        public /* bridge */ /* synthetic */ void setMarkerEnd(g0 g0Var, String str) {
            super.setMarkerEnd((MarkerManager) g0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = "markerMid")
        public /* bridge */ /* synthetic */ void setMarkerMid(g0 g0Var, String str) {
            super.setMarkerMid((MarkerManager) g0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = "markerStart")
        public /* bridge */ /* synthetic */ void setMarkerStart(g0 g0Var, String str) {
            super.setMarkerStart((MarkerManager) g0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = "mask")
        public /* bridge */ /* synthetic */ void setMask(g0 g0Var, String str) {
            super.setMask((MarkerManager) g0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        public /* bridge */ /* synthetic */ void setMatrix(g0 g0Var, ReadableArray readableArray) {
            super.setMatrix((MarkerManager) g0Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = StackTraceHelper.NAME_KEY)
        public /* bridge */ /* synthetic */ void setName(g0 g0Var, String str) {
            super.setName((MarkerManager) g0Var, str);
        }

        @Override // com.facebook.react.uimanager.BaseViewManager
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = ViewProps.OPACITY)
        public /* bridge */ /* synthetic */ void setOpacity(View view, float f10) {
            super.setOpacity((MarkerManager) ((VirtualView) view), f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = ViewProps.POINTER_EVENTS)
        public /* bridge */ /* synthetic */ void setPointerEvents(g0 g0Var, String str) {
            super.setPointerEvents((MarkerManager) g0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = "propList")
        public /* bridge */ /* synthetic */ void setPropList(g0 g0Var, ReadableArray readableArray) {
            super.setPropList((MarkerManager) g0Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = "responsible")
        public /* bridge */ /* synthetic */ void setResponsible(g0 g0Var, boolean z10) {
            super.setResponsible((MarkerManager) g0Var, z10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = "stroke")
        public /* bridge */ /* synthetic */ void setStroke(g0 g0Var, Dynamic dynamic) {
            super.setStroke((MarkerManager) g0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = "strokeDasharray")
        public /* bridge */ /* synthetic */ void setStrokeDasharray(g0 g0Var, Dynamic dynamic) {
            super.setStrokeDasharray((MarkerManager) g0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = "strokeDashoffset")
        public /* bridge */ /* synthetic */ void setStrokeDashoffset(g0 g0Var, float f10) {
            super.setStrokeDashoffset((MarkerManager) g0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinecap")
        public /* bridge */ /* synthetic */ void setStrokeLinecap(g0 g0Var, int i10) {
            super.setStrokeLinecap((MarkerManager) g0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinejoin")
        public /* bridge */ /* synthetic */ void setStrokeLinejoin(g0 g0Var, int i10) {
            super.setStrokeLinejoin((MarkerManager) g0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(defaultFloat = BulletSpan.STANDARD_STROKE_WIDTH_PX, name = "strokeMiterlimit")
        public /* bridge */ /* synthetic */ void setStrokeMiterlimit(g0 g0Var, float f10) {
            super.setStrokeMiterlimit((MarkerManager) g0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "strokeOpacity")
        public /* bridge */ /* synthetic */ void setStrokeOpacity(g0 g0Var, float f10) {
            super.setStrokeOpacity((MarkerManager) g0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = "strokeWidth")
        public /* bridge */ /* synthetic */ void setStrokeWidth(g0 g0Var, Dynamic dynamic) {
            super.setStrokeWidth((MarkerManager) g0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = "vectorEffect")
        public /* bridge */ /* synthetic */ void setVectorEffect(g0 g0Var, int i10) {
            super.setVectorEffect((MarkerManager) g0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = "align")
        public void setAlign(g0 g0Var, String str) {
            g0Var.setAlign(str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = "markerHeight")
        public void setMarkerHeight(g0 g0Var, Dynamic dynamic) {
            g0Var.o(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = "markerUnits")
        public void setMarkerUnits(g0 g0Var, String str) {
            g0Var.p(str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = "markerWidth")
        public void setMarkerWidth(g0 g0Var, Dynamic dynamic) {
            g0Var.q(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = "meetOrSlice")
        public void setMeetOrSlice(g0 g0Var, int i10) {
            g0Var.setMeetOrSlice(i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = "minX")
        public void setMinX(g0 g0Var, float f10) {
            g0Var.setMinX(f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = "minY")
        public void setMinY(g0 g0Var, float f10) {
            g0Var.setMinY(f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = "orient")
        public void setOrient(g0 g0Var, String str) {
            g0Var.r(str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = "refX")
        public void setRefX(g0 g0Var, Dynamic dynamic) {
            g0Var.s(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = "refY")
        public void setRefY(g0 g0Var, Dynamic dynamic) {
            g0Var.t(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = "vbHeight")
        public void setVbHeight(g0 g0Var, float f10) {
            g0Var.setVbHeight(f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMarkerManagerInterface
        @ReactProp(name = "vbWidth")
        public void setVbWidth(g0 g0Var, float f10) {
            g0Var.setVbWidth(f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class MaskManager extends GroupViewManagerAbstract<h0> implements RNSVGMaskManagerInterface<h0> {
        public static final String REACT_CLASS = "RNSVGMask";

        /* JADX INFO: Access modifiers changed from: package-private */
        public MaskManager() {
            super(VirtualViewManager.SVGClass.RNSVGMask);
            ((VirtualViewManager) this).mDelegate = new RNSVGMaskManagerDelegate(this);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = "clipPath")
        public /* bridge */ /* synthetic */ void setClipPath(h0 h0Var, String str) {
            super.setClipPath((MaskManager) h0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = "clipRule")
        public /* bridge */ /* synthetic */ void setClipRule(h0 h0Var, int i10) {
            super.setClipRule((MaskManager) h0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(customType = "Color", name = ViewProps.COLOR)
        public /* bridge */ /* synthetic */ void setColor(h0 h0Var, Integer num) {
            super.setColor((MaskManager) h0Var, num);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = ViewProps.DISPLAY)
        public /* bridge */ /* synthetic */ void setDisplay(h0 h0Var, String str) {
            super.setDisplay((MaskManager) h0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = "fill")
        public /* bridge */ /* synthetic */ void setFill(h0 h0Var, Dynamic dynamic) {
            super.setFill((MaskManager) h0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "fillOpacity")
        public /* bridge */ /* synthetic */ void setFillOpacity(h0 h0Var, float f10) {
            super.setFillOpacity((MaskManager) h0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(defaultInt = 1, name = "fillRule")
        public /* bridge */ /* synthetic */ void setFillRule(h0 h0Var, int i10) {
            super.setFillRule((MaskManager) h0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = ViewProps.FILTER)
        public /* bridge */ /* synthetic */ void setFilter(h0 h0Var, String str) {
            super.setFilter((MaskManager) h0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = "font")
        public /* bridge */ /* synthetic */ void setFont(h0 h0Var, Dynamic dynamic) {
            super.setFont((MaskManager) h0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = ViewProps.FONT_SIZE)
        public /* bridge */ /* synthetic */ void setFontSize(h0 h0Var, Dynamic dynamic) {
            super.setFontSize((MaskManager) h0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = ViewProps.FONT_WEIGHT)
        public /* bridge */ /* synthetic */ void setFontWeight(h0 h0Var, Dynamic dynamic) {
            super.setFontWeight((MaskManager) h0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = "markerEnd")
        public /* bridge */ /* synthetic */ void setMarkerEnd(h0 h0Var, String str) {
            super.setMarkerEnd((MaskManager) h0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = "markerMid")
        public /* bridge */ /* synthetic */ void setMarkerMid(h0 h0Var, String str) {
            super.setMarkerMid((MaskManager) h0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = "markerStart")
        public /* bridge */ /* synthetic */ void setMarkerStart(h0 h0Var, String str) {
            super.setMarkerStart((MaskManager) h0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = "mask")
        public /* bridge */ /* synthetic */ void setMask(h0 h0Var, String str) {
            super.setMask((MaskManager) h0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        public /* bridge */ /* synthetic */ void setMatrix(h0 h0Var, ReadableArray readableArray) {
            super.setMatrix((MaskManager) h0Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = StackTraceHelper.NAME_KEY)
        public /* bridge */ /* synthetic */ void setName(h0 h0Var, String str) {
            super.setName((MaskManager) h0Var, str);
        }

        @Override // com.facebook.react.uimanager.BaseViewManager
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = ViewProps.OPACITY)
        public /* bridge */ /* synthetic */ void setOpacity(View view, float f10) {
            super.setOpacity((MaskManager) ((VirtualView) view), f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = ViewProps.POINTER_EVENTS)
        public /* bridge */ /* synthetic */ void setPointerEvents(h0 h0Var, String str) {
            super.setPointerEvents((MaskManager) h0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = "propList")
        public /* bridge */ /* synthetic */ void setPropList(h0 h0Var, ReadableArray readableArray) {
            super.setPropList((MaskManager) h0Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = "responsible")
        public /* bridge */ /* synthetic */ void setResponsible(h0 h0Var, boolean z10) {
            super.setResponsible((MaskManager) h0Var, z10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = "stroke")
        public /* bridge */ /* synthetic */ void setStroke(h0 h0Var, Dynamic dynamic) {
            super.setStroke((MaskManager) h0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = "strokeDasharray")
        public /* bridge */ /* synthetic */ void setStrokeDasharray(h0 h0Var, Dynamic dynamic) {
            super.setStrokeDasharray((MaskManager) h0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = "strokeDashoffset")
        public /* bridge */ /* synthetic */ void setStrokeDashoffset(h0 h0Var, float f10) {
            super.setStrokeDashoffset((MaskManager) h0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinecap")
        public /* bridge */ /* synthetic */ void setStrokeLinecap(h0 h0Var, int i10) {
            super.setStrokeLinecap((MaskManager) h0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinejoin")
        public /* bridge */ /* synthetic */ void setStrokeLinejoin(h0 h0Var, int i10) {
            super.setStrokeLinejoin((MaskManager) h0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(defaultFloat = BulletSpan.STANDARD_STROKE_WIDTH_PX, name = "strokeMiterlimit")
        public /* bridge */ /* synthetic */ void setStrokeMiterlimit(h0 h0Var, float f10) {
            super.setStrokeMiterlimit((MaskManager) h0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "strokeOpacity")
        public /* bridge */ /* synthetic */ void setStrokeOpacity(h0 h0Var, float f10) {
            super.setStrokeOpacity((MaskManager) h0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = "strokeWidth")
        public /* bridge */ /* synthetic */ void setStrokeWidth(h0 h0Var, Dynamic dynamic) {
            super.setStrokeWidth((MaskManager) h0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = "vectorEffect")
        public /* bridge */ /* synthetic */ void setVectorEffect(h0 h0Var, int i10) {
            super.setVectorEffect((MaskManager) h0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = "height")
        public void setHeight(h0 h0Var, Dynamic dynamic) {
            h0Var.p(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = "maskContentUnits")
        public void setMaskContentUnits(h0 h0Var, int i10) {
            h0Var.q(i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = "maskType")
        public void setMaskType(h0 h0Var, int i10) {
            h0Var.r(i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = "maskUnits")
        public void setMaskUnits(h0 h0Var, int i10) {
            h0Var.s(i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = "width")
        public void setWidth(h0 h0Var, Dynamic dynamic) {
            h0Var.t(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = "x")
        public void setX(h0 h0Var, Dynamic dynamic) {
            h0Var.u(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGMaskManagerInterface
        @ReactProp(name = "y")
        public void setY(h0 h0Var, Dynamic dynamic) {
            h0Var.v(dynamic);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class PathViewManager extends RenderableViewManager<k0> implements RNSVGPathManagerInterface<k0> {
        public static final String REACT_CLASS = "RNSVGPath";

        /* JADX INFO: Access modifiers changed from: package-private */
        public PathViewManager() {
            super(VirtualViewManager.SVGClass.RNSVGPath);
            ((VirtualViewManager) this).mDelegate = new RNSVGPathManagerDelegate(this);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPathManagerInterface
        @ReactProp(name = "clipPath")
        public /* bridge */ /* synthetic */ void setClipPath(k0 k0Var, String str) {
            super.setClipPath((PathViewManager) k0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPathManagerInterface
        @ReactProp(name = "clipRule")
        public /* bridge */ /* synthetic */ void setClipRule(k0 k0Var, int i10) {
            super.setClipRule((PathViewManager) k0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPathManagerInterface
        @ReactProp(customType = "Color", name = ViewProps.COLOR)
        public /* bridge */ /* synthetic */ void setColor(k0 k0Var, Integer num) {
            super.setColor((PathViewManager) k0Var, num);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPathManagerInterface
        @ReactProp(name = ViewProps.DISPLAY)
        public /* bridge */ /* synthetic */ void setDisplay(k0 k0Var, String str) {
            super.setDisplay((PathViewManager) k0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPathManagerInterface
        @ReactProp(name = "fill")
        public /* bridge */ /* synthetic */ void setFill(k0 k0Var, Dynamic dynamic) {
            super.setFill((PathViewManager) k0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPathManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "fillOpacity")
        public /* bridge */ /* synthetic */ void setFillOpacity(k0 k0Var, float f10) {
            super.setFillOpacity((PathViewManager) k0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPathManagerInterface
        @ReactProp(defaultInt = 1, name = "fillRule")
        public /* bridge */ /* synthetic */ void setFillRule(k0 k0Var, int i10) {
            super.setFillRule((PathViewManager) k0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPathManagerInterface
        @ReactProp(name = ViewProps.FILTER)
        public /* bridge */ /* synthetic */ void setFilter(k0 k0Var, String str) {
            super.setFilter((PathViewManager) k0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPathManagerInterface
        @ReactProp(name = "markerEnd")
        public /* bridge */ /* synthetic */ void setMarkerEnd(k0 k0Var, String str) {
            super.setMarkerEnd((PathViewManager) k0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPathManagerInterface
        @ReactProp(name = "markerMid")
        public /* bridge */ /* synthetic */ void setMarkerMid(k0 k0Var, String str) {
            super.setMarkerMid((PathViewManager) k0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPathManagerInterface
        @ReactProp(name = "markerStart")
        public /* bridge */ /* synthetic */ void setMarkerStart(k0 k0Var, String str) {
            super.setMarkerStart((PathViewManager) k0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPathManagerInterface
        @ReactProp(name = "mask")
        public /* bridge */ /* synthetic */ void setMask(k0 k0Var, String str) {
            super.setMask((PathViewManager) k0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPathManagerInterface
        public /* bridge */ /* synthetic */ void setMatrix(k0 k0Var, ReadableArray readableArray) {
            super.setMatrix((PathViewManager) k0Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPathManagerInterface
        @ReactProp(name = StackTraceHelper.NAME_KEY)
        public /* bridge */ /* synthetic */ void setName(k0 k0Var, String str) {
            super.setName((PathViewManager) k0Var, str);
        }

        @Override // com.facebook.react.uimanager.BaseViewManager
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = ViewProps.OPACITY)
        public /* bridge */ /* synthetic */ void setOpacity(View view, float f10) {
            super.setOpacity((PathViewManager) ((VirtualView) view), f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPathManagerInterface
        @ReactProp(name = ViewProps.POINTER_EVENTS)
        public /* bridge */ /* synthetic */ void setPointerEvents(k0 k0Var, String str) {
            super.setPointerEvents((PathViewManager) k0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPathManagerInterface
        @ReactProp(name = "propList")
        public /* bridge */ /* synthetic */ void setPropList(k0 k0Var, ReadableArray readableArray) {
            super.setPropList((PathViewManager) k0Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPathManagerInterface
        @ReactProp(name = "responsible")
        public /* bridge */ /* synthetic */ void setResponsible(k0 k0Var, boolean z10) {
            super.setResponsible((PathViewManager) k0Var, z10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPathManagerInterface
        @ReactProp(name = "stroke")
        public /* bridge */ /* synthetic */ void setStroke(k0 k0Var, Dynamic dynamic) {
            super.setStroke((PathViewManager) k0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPathManagerInterface
        @ReactProp(name = "strokeDasharray")
        public /* bridge */ /* synthetic */ void setStrokeDasharray(k0 k0Var, Dynamic dynamic) {
            super.setStrokeDasharray((PathViewManager) k0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPathManagerInterface
        @ReactProp(name = "strokeDashoffset")
        public /* bridge */ /* synthetic */ void setStrokeDashoffset(k0 k0Var, float f10) {
            super.setStrokeDashoffset((PathViewManager) k0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPathManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinecap")
        public /* bridge */ /* synthetic */ void setStrokeLinecap(k0 k0Var, int i10) {
            super.setStrokeLinecap((PathViewManager) k0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPathManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinejoin")
        public /* bridge */ /* synthetic */ void setStrokeLinejoin(k0 k0Var, int i10) {
            super.setStrokeLinejoin((PathViewManager) k0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPathManagerInterface
        @ReactProp(defaultFloat = BulletSpan.STANDARD_STROKE_WIDTH_PX, name = "strokeMiterlimit")
        public /* bridge */ /* synthetic */ void setStrokeMiterlimit(k0 k0Var, float f10) {
            super.setStrokeMiterlimit((PathViewManager) k0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPathManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "strokeOpacity")
        public /* bridge */ /* synthetic */ void setStrokeOpacity(k0 k0Var, float f10) {
            super.setStrokeOpacity((PathViewManager) k0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPathManagerInterface
        @ReactProp(name = "strokeWidth")
        public /* bridge */ /* synthetic */ void setStrokeWidth(k0 k0Var, Dynamic dynamic) {
            super.setStrokeWidth((PathViewManager) k0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPathManagerInterface
        @ReactProp(name = "vectorEffect")
        public /* bridge */ /* synthetic */ void setVectorEffect(k0 k0Var, int i10) {
            super.setVectorEffect((PathViewManager) k0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPathManagerInterface
        @ReactProp(name = "d")
        public void setD(k0 k0Var, String str) {
            k0Var.c(str);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class PatternManager extends GroupViewManagerAbstract<l0> implements RNSVGPatternManagerInterface<l0> {
        public static final String REACT_CLASS = "RNSVGPattern";

        /* JADX INFO: Access modifiers changed from: package-private */
        public PatternManager() {
            super(VirtualViewManager.SVGClass.RNSVGPattern);
            ((VirtualViewManager) this).mDelegate = new RNSVGPatternManagerDelegate(this);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "clipPath")
        public /* bridge */ /* synthetic */ void setClipPath(l0 l0Var, String str) {
            super.setClipPath((PatternManager) l0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "clipRule")
        public /* bridge */ /* synthetic */ void setClipRule(l0 l0Var, int i10) {
            super.setClipRule((PatternManager) l0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(customType = "Color", name = ViewProps.COLOR)
        public /* bridge */ /* synthetic */ void setColor(l0 l0Var, Integer num) {
            super.setColor((PatternManager) l0Var, num);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = ViewProps.DISPLAY)
        public /* bridge */ /* synthetic */ void setDisplay(l0 l0Var, String str) {
            super.setDisplay((PatternManager) l0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "fill")
        public /* bridge */ /* synthetic */ void setFill(l0 l0Var, Dynamic dynamic) {
            super.setFill((PatternManager) l0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "fillOpacity")
        public /* bridge */ /* synthetic */ void setFillOpacity(l0 l0Var, float f10) {
            super.setFillOpacity((PatternManager) l0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(defaultInt = 1, name = "fillRule")
        public /* bridge */ /* synthetic */ void setFillRule(l0 l0Var, int i10) {
            super.setFillRule((PatternManager) l0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = ViewProps.FILTER)
        public /* bridge */ /* synthetic */ void setFilter(l0 l0Var, String str) {
            super.setFilter((PatternManager) l0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "font")
        public /* bridge */ /* synthetic */ void setFont(l0 l0Var, Dynamic dynamic) {
            super.setFont((PatternManager) l0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = ViewProps.FONT_SIZE)
        public /* bridge */ /* synthetic */ void setFontSize(l0 l0Var, Dynamic dynamic) {
            super.setFontSize((PatternManager) l0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = ViewProps.FONT_WEIGHT)
        public /* bridge */ /* synthetic */ void setFontWeight(l0 l0Var, Dynamic dynamic) {
            super.setFontWeight((PatternManager) l0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "markerEnd")
        public /* bridge */ /* synthetic */ void setMarkerEnd(l0 l0Var, String str) {
            super.setMarkerEnd((PatternManager) l0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "markerMid")
        public /* bridge */ /* synthetic */ void setMarkerMid(l0 l0Var, String str) {
            super.setMarkerMid((PatternManager) l0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "markerStart")
        public /* bridge */ /* synthetic */ void setMarkerStart(l0 l0Var, String str) {
            super.setMarkerStart((PatternManager) l0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "mask")
        public /* bridge */ /* synthetic */ void setMask(l0 l0Var, String str) {
            super.setMask((PatternManager) l0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        public /* bridge */ /* synthetic */ void setMatrix(l0 l0Var, ReadableArray readableArray) {
            super.setMatrix((PatternManager) l0Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = StackTraceHelper.NAME_KEY)
        public /* bridge */ /* synthetic */ void setName(l0 l0Var, String str) {
            super.setName((PatternManager) l0Var, str);
        }

        @Override // com.facebook.react.uimanager.BaseViewManager
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = ViewProps.OPACITY)
        public /* bridge */ /* synthetic */ void setOpacity(View view, float f10) {
            super.setOpacity((PatternManager) ((VirtualView) view), f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = ViewProps.POINTER_EVENTS)
        public /* bridge */ /* synthetic */ void setPointerEvents(l0 l0Var, String str) {
            super.setPointerEvents((PatternManager) l0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "propList")
        public /* bridge */ /* synthetic */ void setPropList(l0 l0Var, ReadableArray readableArray) {
            super.setPropList((PatternManager) l0Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "responsible")
        public /* bridge */ /* synthetic */ void setResponsible(l0 l0Var, boolean z10) {
            super.setResponsible((PatternManager) l0Var, z10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "stroke")
        public /* bridge */ /* synthetic */ void setStroke(l0 l0Var, Dynamic dynamic) {
            super.setStroke((PatternManager) l0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "strokeDasharray")
        public /* bridge */ /* synthetic */ void setStrokeDasharray(l0 l0Var, Dynamic dynamic) {
            super.setStrokeDasharray((PatternManager) l0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "strokeDashoffset")
        public /* bridge */ /* synthetic */ void setStrokeDashoffset(l0 l0Var, float f10) {
            super.setStrokeDashoffset((PatternManager) l0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinecap")
        public /* bridge */ /* synthetic */ void setStrokeLinecap(l0 l0Var, int i10) {
            super.setStrokeLinecap((PatternManager) l0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinejoin")
        public /* bridge */ /* synthetic */ void setStrokeLinejoin(l0 l0Var, int i10) {
            super.setStrokeLinejoin((PatternManager) l0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(defaultFloat = BulletSpan.STANDARD_STROKE_WIDTH_PX, name = "strokeMiterlimit")
        public /* bridge */ /* synthetic */ void setStrokeMiterlimit(l0 l0Var, float f10) {
            super.setStrokeMiterlimit((PatternManager) l0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "strokeOpacity")
        public /* bridge */ /* synthetic */ void setStrokeOpacity(l0 l0Var, float f10) {
            super.setStrokeOpacity((PatternManager) l0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "strokeWidth")
        public /* bridge */ /* synthetic */ void setStrokeWidth(l0 l0Var, Dynamic dynamic) {
            super.setStrokeWidth((PatternManager) l0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "vectorEffect")
        public /* bridge */ /* synthetic */ void setVectorEffect(l0 l0Var, int i10) {
            super.setVectorEffect((PatternManager) l0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "align")
        public void setAlign(l0 l0Var, String str) {
            l0Var.setAlign(str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "height")
        public void setHeight(l0 l0Var, Dynamic dynamic) {
            l0Var.n(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "meetOrSlice")
        public void setMeetOrSlice(l0 l0Var, int i10) {
            l0Var.setMeetOrSlice(i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "minX")
        public void setMinX(l0 l0Var, float f10) {
            l0Var.setMinX(f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "minY")
        public void setMinY(l0 l0Var, float f10) {
            l0Var.setMinY(f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "patternContentUnits")
        public void setPatternContentUnits(l0 l0Var, int i10) {
            l0Var.o(i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "patternTransform")
        public void setPatternTransform(l0 l0Var, ReadableArray readableArray) {
            l0Var.p(readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "patternUnits")
        public void setPatternUnits(l0 l0Var, int i10) {
            l0Var.q(i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "vbHeight")
        public void setVbHeight(l0 l0Var, float f10) {
            l0Var.setVbHeight(f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "vbWidth")
        public void setVbWidth(l0 l0Var, float f10) {
            l0Var.setVbWidth(f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "width")
        public void setWidth(l0 l0Var, Dynamic dynamic) {
            l0Var.r(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "x")
        public void setX(l0 l0Var, Dynamic dynamic) {
            l0Var.s(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGPatternManagerInterface
        @ReactProp(name = "y")
        public void setY(l0 l0Var, Dynamic dynamic) {
            l0Var.t(dynamic);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class RadialGradientManager extends VirtualViewManager<q0> implements RNSVGRadialGradientManagerInterface<q0> {
        public static final String REACT_CLASS = "RNSVGRadialGradient";

        /* JADX INFO: Access modifiers changed from: package-private */
        public RadialGradientManager() {
            super(VirtualViewManager.SVGClass.RNSVGRadialGradient);
            ((VirtualViewManager) this).mDelegate = new RNSVGRadialGradientManagerDelegate(this);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRadialGradientManagerInterface
        @ReactProp(name = "clipPath")
        public /* bridge */ /* synthetic */ void setClipPath(q0 q0Var, String str) {
            super.setClipPath((RadialGradientManager) q0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRadialGradientManagerInterface
        @ReactProp(name = "clipRule")
        public /* bridge */ /* synthetic */ void setClipRule(q0 q0Var, int i10) {
            super.setClipRule((RadialGradientManager) q0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRadialGradientManagerInterface
        @ReactProp(name = ViewProps.DISPLAY)
        public /* bridge */ /* synthetic */ void setDisplay(q0 q0Var, String str) {
            super.setDisplay((RadialGradientManager) q0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRadialGradientManagerInterface
        @ReactProp(name = "markerEnd")
        public /* bridge */ /* synthetic */ void setMarkerEnd(q0 q0Var, String str) {
            super.setMarkerEnd((RadialGradientManager) q0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRadialGradientManagerInterface
        @ReactProp(name = "markerMid")
        public /* bridge */ /* synthetic */ void setMarkerMid(q0 q0Var, String str) {
            super.setMarkerMid((RadialGradientManager) q0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRadialGradientManagerInterface
        @ReactProp(name = "markerStart")
        public /* bridge */ /* synthetic */ void setMarkerStart(q0 q0Var, String str) {
            super.setMarkerStart((RadialGradientManager) q0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRadialGradientManagerInterface
        @ReactProp(name = "mask")
        public /* bridge */ /* synthetic */ void setMask(q0 q0Var, String str) {
            super.setMask((RadialGradientManager) q0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRadialGradientManagerInterface
        public /* bridge */ /* synthetic */ void setMatrix(q0 q0Var, ReadableArray readableArray) {
            super.setMatrix((RadialGradientManager) q0Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRadialGradientManagerInterface
        @ReactProp(name = StackTraceHelper.NAME_KEY)
        public /* bridge */ /* synthetic */ void setName(q0 q0Var, String str) {
            super.setName((RadialGradientManager) q0Var, str);
        }

        @Override // com.facebook.react.uimanager.BaseViewManager
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = ViewProps.OPACITY)
        public /* bridge */ /* synthetic */ void setOpacity(View view, float f10) {
            super.setOpacity((RadialGradientManager) ((VirtualView) view), f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRadialGradientManagerInterface
        @ReactProp(name = ViewProps.POINTER_EVENTS)
        public /* bridge */ /* synthetic */ void setPointerEvents(q0 q0Var, String str) {
            super.setPointerEvents((RadialGradientManager) q0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRadialGradientManagerInterface
        @ReactProp(name = "responsible")
        public /* bridge */ /* synthetic */ void setResponsible(q0 q0Var, boolean z10) {
            super.setResponsible((RadialGradientManager) q0Var, z10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRadialGradientManagerInterface
        @ReactProp(name = "cx")
        public void setCx(q0 q0Var, Dynamic dynamic) {
            q0Var.c(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRadialGradientManagerInterface
        @ReactProp(name = "cy")
        public void setCy(q0 q0Var, Dynamic dynamic) {
            q0Var.d(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRadialGradientManagerInterface
        @ReactProp(name = "fx")
        public void setFx(q0 q0Var, Dynamic dynamic) {
            q0Var.e(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRadialGradientManagerInterface
        @ReactProp(name = "fy")
        public void setFy(q0 q0Var, Dynamic dynamic) {
            q0Var.f(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRadialGradientManagerInterface
        @ReactProp(name = "gradient")
        public void setGradient(q0 q0Var, ReadableArray readableArray) {
            q0Var.g(readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRadialGradientManagerInterface
        @ReactProp(name = "gradientTransform")
        public void setGradientTransform(q0 q0Var, ReadableArray readableArray) {
            q0Var.h(readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRadialGradientManagerInterface
        @ReactProp(name = "gradientUnits")
        public void setGradientUnits(q0 q0Var, int i10) {
            q0Var.i(i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRadialGradientManagerInterface
        @ReactProp(name = "rx")
        public void setRx(q0 q0Var, Dynamic dynamic) {
            q0Var.j(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRadialGradientManagerInterface
        @ReactProp(name = "ry")
        public void setRy(q0 q0Var, Dynamic dynamic) {
            q0Var.k(dynamic);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class RectViewManager extends RenderableViewManager<r0> implements RNSVGRectManagerInterface<r0> {
        public static final String REACT_CLASS = "RNSVGRect";

        /* JADX INFO: Access modifiers changed from: package-private */
        public RectViewManager() {
            super(VirtualViewManager.SVGClass.RNSVGRect);
            ((VirtualViewManager) this).mDelegate = new RNSVGRectManagerDelegate(this);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(name = "clipPath")
        public /* bridge */ /* synthetic */ void setClipPath(r0 r0Var, String str) {
            super.setClipPath((RectViewManager) r0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(name = "clipRule")
        public /* bridge */ /* synthetic */ void setClipRule(r0 r0Var, int i10) {
            super.setClipRule((RectViewManager) r0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(customType = "Color", name = ViewProps.COLOR)
        public /* bridge */ /* synthetic */ void setColor(r0 r0Var, Integer num) {
            super.setColor((RectViewManager) r0Var, num);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(name = ViewProps.DISPLAY)
        public /* bridge */ /* synthetic */ void setDisplay(r0 r0Var, String str) {
            super.setDisplay((RectViewManager) r0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(name = "fill")
        public /* bridge */ /* synthetic */ void setFill(r0 r0Var, Dynamic dynamic) {
            super.setFill((RectViewManager) r0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "fillOpacity")
        public /* bridge */ /* synthetic */ void setFillOpacity(r0 r0Var, float f10) {
            super.setFillOpacity((RectViewManager) r0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(defaultInt = 1, name = "fillRule")
        public /* bridge */ /* synthetic */ void setFillRule(r0 r0Var, int i10) {
            super.setFillRule((RectViewManager) r0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(name = ViewProps.FILTER)
        public /* bridge */ /* synthetic */ void setFilter(r0 r0Var, String str) {
            super.setFilter((RectViewManager) r0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(name = "markerEnd")
        public /* bridge */ /* synthetic */ void setMarkerEnd(r0 r0Var, String str) {
            super.setMarkerEnd((RectViewManager) r0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(name = "markerMid")
        public /* bridge */ /* synthetic */ void setMarkerMid(r0 r0Var, String str) {
            super.setMarkerMid((RectViewManager) r0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(name = "markerStart")
        public /* bridge */ /* synthetic */ void setMarkerStart(r0 r0Var, String str) {
            super.setMarkerStart((RectViewManager) r0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(name = "mask")
        public /* bridge */ /* synthetic */ void setMask(r0 r0Var, String str) {
            super.setMask((RectViewManager) r0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        public /* bridge */ /* synthetic */ void setMatrix(r0 r0Var, ReadableArray readableArray) {
            super.setMatrix((RectViewManager) r0Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(name = StackTraceHelper.NAME_KEY)
        public /* bridge */ /* synthetic */ void setName(r0 r0Var, String str) {
            super.setName((RectViewManager) r0Var, str);
        }

        @Override // com.facebook.react.uimanager.BaseViewManager
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = ViewProps.OPACITY)
        public /* bridge */ /* synthetic */ void setOpacity(View view, float f10) {
            super.setOpacity((RectViewManager) ((VirtualView) view), f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(name = ViewProps.POINTER_EVENTS)
        public /* bridge */ /* synthetic */ void setPointerEvents(r0 r0Var, String str) {
            super.setPointerEvents((RectViewManager) r0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(name = "propList")
        public /* bridge */ /* synthetic */ void setPropList(r0 r0Var, ReadableArray readableArray) {
            super.setPropList((RectViewManager) r0Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(name = "responsible")
        public /* bridge */ /* synthetic */ void setResponsible(r0 r0Var, boolean z10) {
            super.setResponsible((RectViewManager) r0Var, z10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(name = "stroke")
        public /* bridge */ /* synthetic */ void setStroke(r0 r0Var, Dynamic dynamic) {
            super.setStroke((RectViewManager) r0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(name = "strokeDasharray")
        public /* bridge */ /* synthetic */ void setStrokeDasharray(r0 r0Var, Dynamic dynamic) {
            super.setStrokeDasharray((RectViewManager) r0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(name = "strokeDashoffset")
        public /* bridge */ /* synthetic */ void setStrokeDashoffset(r0 r0Var, float f10) {
            super.setStrokeDashoffset((RectViewManager) r0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinecap")
        public /* bridge */ /* synthetic */ void setStrokeLinecap(r0 r0Var, int i10) {
            super.setStrokeLinecap((RectViewManager) r0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinejoin")
        public /* bridge */ /* synthetic */ void setStrokeLinejoin(r0 r0Var, int i10) {
            super.setStrokeLinejoin((RectViewManager) r0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(defaultFloat = BulletSpan.STANDARD_STROKE_WIDTH_PX, name = "strokeMiterlimit")
        public /* bridge */ /* synthetic */ void setStrokeMiterlimit(r0 r0Var, float f10) {
            super.setStrokeMiterlimit((RectViewManager) r0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "strokeOpacity")
        public /* bridge */ /* synthetic */ void setStrokeOpacity(r0 r0Var, float f10) {
            super.setStrokeOpacity((RectViewManager) r0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(name = "strokeWidth")
        public /* bridge */ /* synthetic */ void setStrokeWidth(r0 r0Var, Dynamic dynamic) {
            super.setStrokeWidth((RectViewManager) r0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(name = "vectorEffect")
        public /* bridge */ /* synthetic */ void setVectorEffect(r0 r0Var, int i10) {
            super.setVectorEffect((RectViewManager) r0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(name = "height")
        public void setHeight(r0 r0Var, Dynamic dynamic) {
            r0Var.c(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(name = "rx")
        public void setRx(r0 r0Var, Dynamic dynamic) {
            r0Var.d(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(name = "ry")
        public void setRy(r0 r0Var, Dynamic dynamic) {
            r0Var.e(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(name = "width")
        public void setWidth(r0 r0Var, Dynamic dynamic) {
            r0Var.f(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(name = "x")
        public void setX(r0 r0Var, Dynamic dynamic) {
            r0Var.g(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGRectManagerInterface
        @ReactProp(name = "y")
        public void setY(r0 r0Var, Dynamic dynamic) {
            r0Var.h(dynamic);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class SymbolManager extends GroupViewManagerAbstract<t0> implements RNSVGSymbolManagerInterface<t0> {
        public static final String REACT_CLASS = "RNSVGSymbol";

        /* JADX INFO: Access modifiers changed from: package-private */
        public SymbolManager() {
            super(VirtualViewManager.SVGClass.RNSVGSymbol);
            ((VirtualViewManager) this).mDelegate = new RNSVGSymbolManagerDelegate(this);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(name = "clipPath")
        public /* bridge */ /* synthetic */ void setClipPath(t0 t0Var, String str) {
            super.setClipPath((SymbolManager) t0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(name = "clipRule")
        public /* bridge */ /* synthetic */ void setClipRule(t0 t0Var, int i10) {
            super.setClipRule((SymbolManager) t0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(customType = "Color", name = ViewProps.COLOR)
        public /* bridge */ /* synthetic */ void setColor(t0 t0Var, Integer num) {
            super.setColor((SymbolManager) t0Var, num);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(name = ViewProps.DISPLAY)
        public /* bridge */ /* synthetic */ void setDisplay(t0 t0Var, String str) {
            super.setDisplay((SymbolManager) t0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(name = "fill")
        public /* bridge */ /* synthetic */ void setFill(t0 t0Var, Dynamic dynamic) {
            super.setFill((SymbolManager) t0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "fillOpacity")
        public /* bridge */ /* synthetic */ void setFillOpacity(t0 t0Var, float f10) {
            super.setFillOpacity((SymbolManager) t0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(defaultInt = 1, name = "fillRule")
        public /* bridge */ /* synthetic */ void setFillRule(t0 t0Var, int i10) {
            super.setFillRule((SymbolManager) t0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(name = ViewProps.FILTER)
        public /* bridge */ /* synthetic */ void setFilter(t0 t0Var, String str) {
            super.setFilter((SymbolManager) t0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(name = "font")
        public /* bridge */ /* synthetic */ void setFont(t0 t0Var, Dynamic dynamic) {
            super.setFont((SymbolManager) t0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(name = ViewProps.FONT_SIZE)
        public /* bridge */ /* synthetic */ void setFontSize(t0 t0Var, Dynamic dynamic) {
            super.setFontSize((SymbolManager) t0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(name = ViewProps.FONT_WEIGHT)
        public /* bridge */ /* synthetic */ void setFontWeight(t0 t0Var, Dynamic dynamic) {
            super.setFontWeight((SymbolManager) t0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(name = "markerEnd")
        public /* bridge */ /* synthetic */ void setMarkerEnd(t0 t0Var, String str) {
            super.setMarkerEnd((SymbolManager) t0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(name = "markerMid")
        public /* bridge */ /* synthetic */ void setMarkerMid(t0 t0Var, String str) {
            super.setMarkerMid((SymbolManager) t0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(name = "markerStart")
        public /* bridge */ /* synthetic */ void setMarkerStart(t0 t0Var, String str) {
            super.setMarkerStart((SymbolManager) t0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(name = "mask")
        public /* bridge */ /* synthetic */ void setMask(t0 t0Var, String str) {
            super.setMask((SymbolManager) t0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        public /* bridge */ /* synthetic */ void setMatrix(t0 t0Var, ReadableArray readableArray) {
            super.setMatrix((SymbolManager) t0Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(name = StackTraceHelper.NAME_KEY)
        public /* bridge */ /* synthetic */ void setName(t0 t0Var, String str) {
            super.setName((SymbolManager) t0Var, str);
        }

        @Override // com.facebook.react.uimanager.BaseViewManager
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = ViewProps.OPACITY)
        public /* bridge */ /* synthetic */ void setOpacity(View view, float f10) {
            super.setOpacity((SymbolManager) ((VirtualView) view), f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(name = ViewProps.POINTER_EVENTS)
        public /* bridge */ /* synthetic */ void setPointerEvents(t0 t0Var, String str) {
            super.setPointerEvents((SymbolManager) t0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(name = "propList")
        public /* bridge */ /* synthetic */ void setPropList(t0 t0Var, ReadableArray readableArray) {
            super.setPropList((SymbolManager) t0Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(name = "responsible")
        public /* bridge */ /* synthetic */ void setResponsible(t0 t0Var, boolean z10) {
            super.setResponsible((SymbolManager) t0Var, z10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(name = "stroke")
        public /* bridge */ /* synthetic */ void setStroke(t0 t0Var, Dynamic dynamic) {
            super.setStroke((SymbolManager) t0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(name = "strokeDasharray")
        public /* bridge */ /* synthetic */ void setStrokeDasharray(t0 t0Var, Dynamic dynamic) {
            super.setStrokeDasharray((SymbolManager) t0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(name = "strokeDashoffset")
        public /* bridge */ /* synthetic */ void setStrokeDashoffset(t0 t0Var, float f10) {
            super.setStrokeDashoffset((SymbolManager) t0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinecap")
        public /* bridge */ /* synthetic */ void setStrokeLinecap(t0 t0Var, int i10) {
            super.setStrokeLinecap((SymbolManager) t0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinejoin")
        public /* bridge */ /* synthetic */ void setStrokeLinejoin(t0 t0Var, int i10) {
            super.setStrokeLinejoin((SymbolManager) t0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(defaultFloat = BulletSpan.STANDARD_STROKE_WIDTH_PX, name = "strokeMiterlimit")
        public /* bridge */ /* synthetic */ void setStrokeMiterlimit(t0 t0Var, float f10) {
            super.setStrokeMiterlimit((SymbolManager) t0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "strokeOpacity")
        public /* bridge */ /* synthetic */ void setStrokeOpacity(t0 t0Var, float f10) {
            super.setStrokeOpacity((SymbolManager) t0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(name = "strokeWidth")
        public /* bridge */ /* synthetic */ void setStrokeWidth(t0 t0Var, Dynamic dynamic) {
            super.setStrokeWidth((SymbolManager) t0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(name = "vectorEffect")
        public /* bridge */ /* synthetic */ void setVectorEffect(t0 t0Var, int i10) {
            super.setVectorEffect((SymbolManager) t0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(name = "align")
        public void setAlign(t0 t0Var, String str) {
            t0Var.setAlign(str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(name = "meetOrSlice")
        public void setMeetOrSlice(t0 t0Var, int i10) {
            t0Var.setMeetOrSlice(i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(name = "minX")
        public void setMinX(t0 t0Var, float f10) {
            t0Var.setMinX(f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(name = "minY")
        public void setMinY(t0 t0Var, float f10) {
            t0Var.setMinY(f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(name = "vbHeight")
        public void setVbHeight(t0 t0Var, float f10) {
            t0Var.setVbHeight(f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGSymbolManagerInterface
        @ReactProp(name = "vbWidth")
        public void setVbWidth(t0 t0Var, float f10) {
            t0Var.setVbWidth(f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class TSpanViewManager extends TextViewManagerAbstract<w0> implements RNSVGTSpanManagerInterface<w0> {
        public static final String REACT_CLASS = "RNSVGTSpan";

        /* JADX INFO: Access modifiers changed from: package-private */
        public TSpanViewManager() {
            super(VirtualViewManager.SVGClass.RNSVGTSpan);
            ((VirtualViewManager) this).mDelegate = new RNSVGTSpanManagerDelegate(this);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        public /* bridge */ /* synthetic */ void setAlignmentBaseline(w0 w0Var, String str) {
            super.setAlignmentBaseline((TSpanViewManager) w0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = "baselineShift")
        public /* bridge */ /* synthetic */ void setBaselineShift(w0 w0Var, Dynamic dynamic) {
            super.setBaselineShift((TSpanViewManager) w0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = "clipPath")
        public /* bridge */ /* synthetic */ void setClipPath(w0 w0Var, String str) {
            super.setClipPath((TSpanViewManager) w0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = "clipRule")
        public /* bridge */ /* synthetic */ void setClipRule(w0 w0Var, int i10) {
            super.setClipRule((TSpanViewManager) w0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(customType = "Color", name = ViewProps.COLOR)
        public /* bridge */ /* synthetic */ void setColor(w0 w0Var, Integer num) {
            super.setColor((TSpanViewManager) w0Var, num);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = ViewProps.DISPLAY)
        public /* bridge */ /* synthetic */ void setDisplay(w0 w0Var, String str) {
            super.setDisplay((TSpanViewManager) w0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = "dx")
        public /* bridge */ /* synthetic */ void setDx(w0 w0Var, Dynamic dynamic) {
            super.setDx((TSpanViewManager) w0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = "dy")
        public /* bridge */ /* synthetic */ void setDy(w0 w0Var, Dynamic dynamic) {
            super.setDy((TSpanViewManager) w0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = "fill")
        public /* bridge */ /* synthetic */ void setFill(w0 w0Var, Dynamic dynamic) {
            super.setFill((TSpanViewManager) w0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "fillOpacity")
        public /* bridge */ /* synthetic */ void setFillOpacity(w0 w0Var, float f10) {
            super.setFillOpacity((TSpanViewManager) w0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(defaultInt = 1, name = "fillRule")
        public /* bridge */ /* synthetic */ void setFillRule(w0 w0Var, int i10) {
            super.setFillRule((TSpanViewManager) w0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = ViewProps.FILTER)
        public /* bridge */ /* synthetic */ void setFilter(w0 w0Var, String str) {
            super.setFilter((TSpanViewManager) w0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = "font")
        public /* bridge */ /* synthetic */ void setFont(w0 w0Var, Dynamic dynamic) {
            super.setFont((TSpanViewManager) w0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = ViewProps.FONT_SIZE)
        public /* bridge */ /* synthetic */ void setFontSize(w0 w0Var, Dynamic dynamic) {
            super.setFontSize((TSpanViewManager) w0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = ViewProps.FONT_WEIGHT)
        public /* bridge */ /* synthetic */ void setFontWeight(w0 w0Var, Dynamic dynamic) {
            super.setFontWeight((TSpanViewManager) w0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = "inlineSize")
        public /* bridge */ /* synthetic */ void setInlineSize(w0 w0Var, Dynamic dynamic) {
            super.setInlineSize((TSpanViewManager) w0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = "lengthAdjust")
        public /* bridge */ /* synthetic */ void setLengthAdjust(w0 w0Var, String str) {
            super.setLengthAdjust((TSpanViewManager) w0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = "markerEnd")
        public /* bridge */ /* synthetic */ void setMarkerEnd(w0 w0Var, String str) {
            super.setMarkerEnd((TSpanViewManager) w0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = "markerMid")
        public /* bridge */ /* synthetic */ void setMarkerMid(w0 w0Var, String str) {
            super.setMarkerMid((TSpanViewManager) w0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = "markerStart")
        public /* bridge */ /* synthetic */ void setMarkerStart(w0 w0Var, String str) {
            super.setMarkerStart((TSpanViewManager) w0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = "mask")
        public /* bridge */ /* synthetic */ void setMask(w0 w0Var, String str) {
            super.setMask((TSpanViewManager) w0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        public /* bridge */ /* synthetic */ void setMatrix(w0 w0Var, ReadableArray readableArray) {
            super.setMatrix((TSpanViewManager) w0Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = StackTraceHelper.NAME_KEY)
        public /* bridge */ /* synthetic */ void setName(w0 w0Var, String str) {
            super.setName((TSpanViewManager) w0Var, str);
        }

        @Override // com.facebook.react.uimanager.BaseViewManager
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = ViewProps.OPACITY)
        public /* bridge */ /* synthetic */ void setOpacity(View view, float f10) {
            super.setOpacity((TSpanViewManager) ((VirtualView) view), f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = ViewProps.POINTER_EVENTS)
        public /* bridge */ /* synthetic */ void setPointerEvents(w0 w0Var, String str) {
            super.setPointerEvents((TSpanViewManager) w0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = "propList")
        public /* bridge */ /* synthetic */ void setPropList(w0 w0Var, ReadableArray readableArray) {
            super.setPropList((TSpanViewManager) w0Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = "responsible")
        public /* bridge */ /* synthetic */ void setResponsible(w0 w0Var, boolean z10) {
            super.setResponsible((TSpanViewManager) w0Var, z10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = "rotate")
        public /* bridge */ /* synthetic */ void setRotate(w0 w0Var, Dynamic dynamic) {
            super.setRotate((TSpanViewManager) w0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = "stroke")
        public /* bridge */ /* synthetic */ void setStroke(w0 w0Var, Dynamic dynamic) {
            super.setStroke((TSpanViewManager) w0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = "strokeDasharray")
        public /* bridge */ /* synthetic */ void setStrokeDasharray(w0 w0Var, Dynamic dynamic) {
            super.setStrokeDasharray((TSpanViewManager) w0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = "strokeDashoffset")
        public /* bridge */ /* synthetic */ void setStrokeDashoffset(w0 w0Var, float f10) {
            super.setStrokeDashoffset((TSpanViewManager) w0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinecap")
        public /* bridge */ /* synthetic */ void setStrokeLinecap(w0 w0Var, int i10) {
            super.setStrokeLinecap((TSpanViewManager) w0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinejoin")
        public /* bridge */ /* synthetic */ void setStrokeLinejoin(w0 w0Var, int i10) {
            super.setStrokeLinejoin((TSpanViewManager) w0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(defaultFloat = BulletSpan.STANDARD_STROKE_WIDTH_PX, name = "strokeMiterlimit")
        public /* bridge */ /* synthetic */ void setStrokeMiterlimit(w0 w0Var, float f10) {
            super.setStrokeMiterlimit((TSpanViewManager) w0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "strokeOpacity")
        public /* bridge */ /* synthetic */ void setStrokeOpacity(w0 w0Var, float f10) {
            super.setStrokeOpacity((TSpanViewManager) w0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = "strokeWidth")
        public /* bridge */ /* synthetic */ void setStrokeWidth(w0 w0Var, Dynamic dynamic) {
            super.setStrokeWidth((TSpanViewManager) w0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = "textLength")
        public /* bridge */ /* synthetic */ void setTextLength(w0 w0Var, Dynamic dynamic) {
            super.setTextLength((TSpanViewManager) w0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = "vectorEffect")
        public /* bridge */ /* synthetic */ void setVectorEffect(w0 w0Var, int i10) {
            super.setVectorEffect((TSpanViewManager) w0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = "verticalAlign")
        public /* bridge */ /* synthetic */ void setVerticalAlign(w0 w0Var, Dynamic dynamic) {
            super.setVerticalAlign((TSpanViewManager) w0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = "x")
        public /* bridge */ /* synthetic */ void setX(w0 w0Var, Dynamic dynamic) {
            super.setX((TSpanViewManager) w0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = "y")
        public /* bridge */ /* synthetic */ void setY(w0 w0Var, Dynamic dynamic) {
            super.setY((TSpanViewManager) w0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTSpanManagerInterface
        @ReactProp(name = "content")
        public void setContent(w0 w0Var, String str) {
            w0Var.L(str);
        }

        TSpanViewManager(VirtualViewManager.SVGClass sVGClass) {
            super(sVGClass);
            ((VirtualViewManager) this).mDelegate = new RNSVGTSpanManagerDelegate(this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class TextPathViewManager extends TextViewManagerAbstract<x0> implements RNSVGTextPathManagerInterface<x0> {
        public static final String REACT_CLASS = "RNSVGTextPath";

        /* JADX INFO: Access modifiers changed from: package-private */
        public TextPathViewManager() {
            super(VirtualViewManager.SVGClass.RNSVGTextPath);
            ((VirtualViewManager) this).mDelegate = new RNSVGTextPathManagerDelegate(this);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        public /* bridge */ /* synthetic */ void setAlignmentBaseline(x0 x0Var, String str) {
            super.setAlignmentBaseline((TextPathViewManager) x0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "baselineShift")
        public /* bridge */ /* synthetic */ void setBaselineShift(x0 x0Var, Dynamic dynamic) {
            super.setBaselineShift((TextPathViewManager) x0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "clipPath")
        public /* bridge */ /* synthetic */ void setClipPath(x0 x0Var, String str) {
            super.setClipPath((TextPathViewManager) x0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "clipRule")
        public /* bridge */ /* synthetic */ void setClipRule(x0 x0Var, int i10) {
            super.setClipRule((TextPathViewManager) x0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(customType = "Color", name = ViewProps.COLOR)
        public /* bridge */ /* synthetic */ void setColor(x0 x0Var, Integer num) {
            super.setColor((TextPathViewManager) x0Var, num);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = ViewProps.DISPLAY)
        public /* bridge */ /* synthetic */ void setDisplay(x0 x0Var, String str) {
            super.setDisplay((TextPathViewManager) x0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "dx")
        public /* bridge */ /* synthetic */ void setDx(x0 x0Var, Dynamic dynamic) {
            super.setDx((TextPathViewManager) x0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "dy")
        public /* bridge */ /* synthetic */ void setDy(x0 x0Var, Dynamic dynamic) {
            super.setDy((TextPathViewManager) x0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "fill")
        public /* bridge */ /* synthetic */ void setFill(x0 x0Var, Dynamic dynamic) {
            super.setFill((TextPathViewManager) x0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "fillOpacity")
        public /* bridge */ /* synthetic */ void setFillOpacity(x0 x0Var, float f10) {
            super.setFillOpacity((TextPathViewManager) x0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(defaultInt = 1, name = "fillRule")
        public /* bridge */ /* synthetic */ void setFillRule(x0 x0Var, int i10) {
            super.setFillRule((TextPathViewManager) x0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = ViewProps.FILTER)
        public /* bridge */ /* synthetic */ void setFilter(x0 x0Var, String str) {
            super.setFilter((TextPathViewManager) x0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "font")
        public /* bridge */ /* synthetic */ void setFont(x0 x0Var, Dynamic dynamic) {
            super.setFont((TextPathViewManager) x0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = ViewProps.FONT_SIZE)
        public /* bridge */ /* synthetic */ void setFontSize(x0 x0Var, Dynamic dynamic) {
            super.setFontSize((TextPathViewManager) x0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = ViewProps.FONT_WEIGHT)
        public /* bridge */ /* synthetic */ void setFontWeight(x0 x0Var, Dynamic dynamic) {
            super.setFontWeight((TextPathViewManager) x0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "inlineSize")
        public /* bridge */ /* synthetic */ void setInlineSize(x0 x0Var, Dynamic dynamic) {
            super.setInlineSize((TextPathViewManager) x0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "lengthAdjust")
        public /* bridge */ /* synthetic */ void setLengthAdjust(x0 x0Var, String str) {
            super.setLengthAdjust((TextPathViewManager) x0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "markerEnd")
        public /* bridge */ /* synthetic */ void setMarkerEnd(x0 x0Var, String str) {
            super.setMarkerEnd((TextPathViewManager) x0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "markerMid")
        public /* bridge */ /* synthetic */ void setMarkerMid(x0 x0Var, String str) {
            super.setMarkerMid((TextPathViewManager) x0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "markerStart")
        public /* bridge */ /* synthetic */ void setMarkerStart(x0 x0Var, String str) {
            super.setMarkerStart((TextPathViewManager) x0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "mask")
        public /* bridge */ /* synthetic */ void setMask(x0 x0Var, String str) {
            super.setMask((TextPathViewManager) x0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        public /* bridge */ /* synthetic */ void setMatrix(x0 x0Var, ReadableArray readableArray) {
            super.setMatrix((TextPathViewManager) x0Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = StackTraceHelper.NAME_KEY)
        public /* bridge */ /* synthetic */ void setName(x0 x0Var, String str) {
            super.setName((TextPathViewManager) x0Var, str);
        }

        @Override // com.facebook.react.uimanager.BaseViewManager
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = ViewProps.OPACITY)
        public /* bridge */ /* synthetic */ void setOpacity(View view, float f10) {
            super.setOpacity((TextPathViewManager) ((VirtualView) view), f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = ViewProps.POINTER_EVENTS)
        public /* bridge */ /* synthetic */ void setPointerEvents(x0 x0Var, String str) {
            super.setPointerEvents((TextPathViewManager) x0Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "propList")
        public /* bridge */ /* synthetic */ void setPropList(x0 x0Var, ReadableArray readableArray) {
            super.setPropList((TextPathViewManager) x0Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "responsible")
        public /* bridge */ /* synthetic */ void setResponsible(x0 x0Var, boolean z10) {
            super.setResponsible((TextPathViewManager) x0Var, z10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "rotate")
        public /* bridge */ /* synthetic */ void setRotate(x0 x0Var, Dynamic dynamic) {
            super.setRotate((TextPathViewManager) x0Var, dynamic);
        }

        @ReactProp(name = "midLine")
        public void setSharp(x0 x0Var, String str) {
            x0Var.J(str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "stroke")
        public /* bridge */ /* synthetic */ void setStroke(x0 x0Var, Dynamic dynamic) {
            super.setStroke((TextPathViewManager) x0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "strokeDasharray")
        public /* bridge */ /* synthetic */ void setStrokeDasharray(x0 x0Var, Dynamic dynamic) {
            super.setStrokeDasharray((TextPathViewManager) x0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "strokeDashoffset")
        public /* bridge */ /* synthetic */ void setStrokeDashoffset(x0 x0Var, float f10) {
            super.setStrokeDashoffset((TextPathViewManager) x0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinecap")
        public /* bridge */ /* synthetic */ void setStrokeLinecap(x0 x0Var, int i10) {
            super.setStrokeLinecap((TextPathViewManager) x0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinejoin")
        public /* bridge */ /* synthetic */ void setStrokeLinejoin(x0 x0Var, int i10) {
            super.setStrokeLinejoin((TextPathViewManager) x0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(defaultFloat = BulletSpan.STANDARD_STROKE_WIDTH_PX, name = "strokeMiterlimit")
        public /* bridge */ /* synthetic */ void setStrokeMiterlimit(x0 x0Var, float f10) {
            super.setStrokeMiterlimit((TextPathViewManager) x0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "strokeOpacity")
        public /* bridge */ /* synthetic */ void setStrokeOpacity(x0 x0Var, float f10) {
            super.setStrokeOpacity((TextPathViewManager) x0Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "strokeWidth")
        public /* bridge */ /* synthetic */ void setStrokeWidth(x0 x0Var, Dynamic dynamic) {
            super.setStrokeWidth((TextPathViewManager) x0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "textLength")
        public /* bridge */ /* synthetic */ void setTextLength(x0 x0Var, Dynamic dynamic) {
            super.setTextLength((TextPathViewManager) x0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "vectorEffect")
        public /* bridge */ /* synthetic */ void setVectorEffect(x0 x0Var, int i10) {
            super.setVectorEffect((TextPathViewManager) x0Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "verticalAlign")
        public /* bridge */ /* synthetic */ void setVerticalAlign(x0 x0Var, Dynamic dynamic) {
            super.setVerticalAlign((TextPathViewManager) x0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "x")
        public /* bridge */ /* synthetic */ void setX(x0 x0Var, Dynamic dynamic) {
            super.setX((TextPathViewManager) x0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "y")
        public /* bridge */ /* synthetic */ void setY(x0 x0Var, Dynamic dynamic) {
            super.setY((TextPathViewManager) x0Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "href")
        public void setHref(x0 x0Var, String str) {
            x0Var.I(str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        public void setMidLine(x0 x0Var, String str) {
            x0Var.J(str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "side")
        public void setSide(x0 x0Var, String str) {
            x0Var.K(str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "spacing")
        public void setSpacing(x0 x0Var, String str) {
            x0Var.L(str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface
        @ReactProp(name = "startOffset")
        public void setStartOffset(x0 x0Var, Dynamic dynamic) {
            x0Var.M(dynamic);
        }

        TextPathViewManager(VirtualViewManager.SVGClass sVGClass) {
            super(sVGClass);
            ((VirtualViewManager) this).mDelegate = new RNSVGTextPathManagerDelegate(this);
        }

        @Override // com.horcrux.svg.RenderableViewManager.TextViewManagerAbstract
        @ReactProp(name = "method")
        public void setMethod(x0 x0Var, String str) {
            x0Var.y(str);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class TextViewManagerAbstract<K extends j1> extends GroupViewManagerAbstract<K> {
        TextViewManagerAbstract(VirtualViewManager.SVGClass sVGClass) {
            super(sVGClass);
        }

        public void setAlignmentBaseline(K k10, String str) {
            k10.y(str);
        }

        @ReactProp(name = "baselineShift")
        public void setBaselineShift(K k10, Dynamic dynamic) {
            k10.t(dynamic);
        }

        @ReactProp(name = "dx")
        public void setDx(K k10, Dynamic dynamic) {
            k10.u(dynamic);
        }

        @ReactProp(name = "dy")
        public void setDy(K k10, Dynamic dynamic) {
            k10.v(dynamic);
        }

        /* JADX WARN: Multi-variable type inference failed */
        @Override // com.horcrux.svg.RenderableViewManager.GroupViewManagerAbstract
        @ReactProp(name = "font")
        public /* bridge */ /* synthetic */ void setFont(c0 c0Var, Dynamic dynamic) {
            setFont((TextViewManagerAbstract<K>) ((j1) c0Var), dynamic);
        }

        @ReactProp(name = "inlineSize")
        public void setInlineSize(K k10, Dynamic dynamic) {
            k10.w(dynamic);
        }

        @ReactProp(name = "lengthAdjust")
        public void setLengthAdjust(K k10, String str) {
            k10.x(str);
        }

        @ReactProp(name = "alignmentBaseline")
        public void setMethod(K k10, String str) {
            k10.y(str);
        }

        @ReactProp(name = "rotate")
        public void setRotate(K k10, Dynamic dynamic) {
            k10.B(dynamic);
        }

        @ReactProp(name = "textLength")
        public void setTextLength(K k10, Dynamic dynamic) {
            k10.C(dynamic);
        }

        @ReactProp(name = "verticalAlign")
        public void setVerticalAlign(K k10, Dynamic dynamic) {
            k10.D(dynamic);
        }

        @ReactProp(name = "x")
        public void setX(K k10, Dynamic dynamic) {
            k10.z(dynamic);
        }

        @ReactProp(name = "y")
        public void setY(K k10, Dynamic dynamic) {
            k10.A(dynamic);
        }

        @ReactProp(name = "font")
        public void setFont(K k10, Dynamic dynamic) {
            k10.k(dynamic);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class UseViewManager extends RenderableViewManager<k1> implements RNSVGUseManagerInterface<k1> {
        public static final String REACT_CLASS = "RNSVGUse";

        /* JADX INFO: Access modifiers changed from: package-private */
        public UseViewManager() {
            super(VirtualViewManager.SVGClass.RNSVGUse);
            ((VirtualViewManager) this).mDelegate = new RNSVGUseManagerDelegate(this);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(name = "clipPath")
        public /* bridge */ /* synthetic */ void setClipPath(k1 k1Var, String str) {
            super.setClipPath((UseViewManager) k1Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(name = "clipRule")
        public /* bridge */ /* synthetic */ void setClipRule(k1 k1Var, int i10) {
            super.setClipRule((UseViewManager) k1Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(customType = "Color", name = ViewProps.COLOR)
        public /* bridge */ /* synthetic */ void setColor(k1 k1Var, Integer num) {
            super.setColor((UseViewManager) k1Var, num);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(name = ViewProps.DISPLAY)
        public /* bridge */ /* synthetic */ void setDisplay(k1 k1Var, String str) {
            super.setDisplay((UseViewManager) k1Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(name = "fill")
        public /* bridge */ /* synthetic */ void setFill(k1 k1Var, Dynamic dynamic) {
            super.setFill((UseViewManager) k1Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "fillOpacity")
        public /* bridge */ /* synthetic */ void setFillOpacity(k1 k1Var, float f10) {
            super.setFillOpacity((UseViewManager) k1Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(defaultInt = 1, name = "fillRule")
        public /* bridge */ /* synthetic */ void setFillRule(k1 k1Var, int i10) {
            super.setFillRule((UseViewManager) k1Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(name = ViewProps.FILTER)
        public /* bridge */ /* synthetic */ void setFilter(k1 k1Var, String str) {
            super.setFilter((UseViewManager) k1Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(name = "markerEnd")
        public /* bridge */ /* synthetic */ void setMarkerEnd(k1 k1Var, String str) {
            super.setMarkerEnd((UseViewManager) k1Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(name = "markerMid")
        public /* bridge */ /* synthetic */ void setMarkerMid(k1 k1Var, String str) {
            super.setMarkerMid((UseViewManager) k1Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(name = "markerStart")
        public /* bridge */ /* synthetic */ void setMarkerStart(k1 k1Var, String str) {
            super.setMarkerStart((UseViewManager) k1Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(name = "mask")
        public /* bridge */ /* synthetic */ void setMask(k1 k1Var, String str) {
            super.setMask((UseViewManager) k1Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        public /* bridge */ /* synthetic */ void setMatrix(k1 k1Var, ReadableArray readableArray) {
            super.setMatrix((UseViewManager) k1Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(name = StackTraceHelper.NAME_KEY)
        public /* bridge */ /* synthetic */ void setName(k1 k1Var, String str) {
            super.setName((UseViewManager) k1Var, str);
        }

        @Override // com.facebook.react.uimanager.BaseViewManager
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = ViewProps.OPACITY)
        public /* bridge */ /* synthetic */ void setOpacity(View view, float f10) {
            super.setOpacity((UseViewManager) ((VirtualView) view), f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(name = ViewProps.POINTER_EVENTS)
        public /* bridge */ /* synthetic */ void setPointerEvents(k1 k1Var, String str) {
            super.setPointerEvents((UseViewManager) k1Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(name = "propList")
        public /* bridge */ /* synthetic */ void setPropList(k1 k1Var, ReadableArray readableArray) {
            super.setPropList((UseViewManager) k1Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(name = "responsible")
        public /* bridge */ /* synthetic */ void setResponsible(k1 k1Var, boolean z10) {
            super.setResponsible((UseViewManager) k1Var, z10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(name = "stroke")
        public /* bridge */ /* synthetic */ void setStroke(k1 k1Var, Dynamic dynamic) {
            super.setStroke((UseViewManager) k1Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(name = "strokeDasharray")
        public /* bridge */ /* synthetic */ void setStrokeDasharray(k1 k1Var, Dynamic dynamic) {
            super.setStrokeDasharray((UseViewManager) k1Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(name = "strokeDashoffset")
        public /* bridge */ /* synthetic */ void setStrokeDashoffset(k1 k1Var, float f10) {
            super.setStrokeDashoffset((UseViewManager) k1Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinecap")
        public /* bridge */ /* synthetic */ void setStrokeLinecap(k1 k1Var, int i10) {
            super.setStrokeLinecap((UseViewManager) k1Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinejoin")
        public /* bridge */ /* synthetic */ void setStrokeLinejoin(k1 k1Var, int i10) {
            super.setStrokeLinejoin((UseViewManager) k1Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(defaultFloat = BulletSpan.STANDARD_STROKE_WIDTH_PX, name = "strokeMiterlimit")
        public /* bridge */ /* synthetic */ void setStrokeMiterlimit(k1 k1Var, float f10) {
            super.setStrokeMiterlimit((UseViewManager) k1Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "strokeOpacity")
        public /* bridge */ /* synthetic */ void setStrokeOpacity(k1 k1Var, float f10) {
            super.setStrokeOpacity((UseViewManager) k1Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(name = "strokeWidth")
        public /* bridge */ /* synthetic */ void setStrokeWidth(k1 k1Var, Dynamic dynamic) {
            super.setStrokeWidth((UseViewManager) k1Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(name = "vectorEffect")
        public /* bridge */ /* synthetic */ void setVectorEffect(k1 k1Var, int i10) {
            super.setVectorEffect((UseViewManager) k1Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(name = "height")
        public void setHeight(k1 k1Var, Dynamic dynamic) {
            k1Var.c(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(name = "href")
        public void setHref(k1 k1Var, String str) {
            k1Var.d(str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(name = "width")
        public void setWidth(k1 k1Var, Dynamic dynamic) {
            k1Var.e(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(name = "x")
        public void setX(k1 k1Var, Dynamic dynamic) {
            k1Var.f(dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGUseManagerInterface
        @ReactProp(name = "y")
        public void setY(k1 k1Var, Dynamic dynamic) {
            k1Var.g(dynamic);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f16733a;

        static {
            int[] iArr = new int[ReadableType.values().length];
            f16733a = iArr;
            try {
                iArr[ReadableType.Number.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f16733a[ReadableType.String.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    RenderableViewManager(VirtualViewManager.SVGClass sVGClass) {
        super(sVGClass);
    }

    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
        HashMap hashMap = new HashMap();
        hashMap.put(SvgOnLayoutEvent.EVENT_NAME, MapBuilder.of("registrationName", "onSvgLayout"));
        return hashMap;
    }

    @ReactProp(customType = "Color", name = ViewProps.COLOR)
    public void setColor(T t10, Integer num) {
        t10.setCurrentColor(num);
    }

    @ReactProp(name = "fill")
    public void setFill(T t10, Dynamic dynamic) {
        t10.setFill(dynamic);
    }

    @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "fillOpacity")
    public void setFillOpacity(T t10, float f10) {
        t10.setFillOpacity(f10);
    }

    @ReactProp(defaultInt = 1, name = "fillRule")
    public void setFillRule(T t10, int i10) {
        t10.setFillRule(i10);
    }

    @ReactProp(name = ViewProps.FILTER)
    public void setFilter(T t10, String str) {
        t10.setFilter(str);
    }

    @ReactProp(name = "propList")
    public void setPropList(T t10, ReadableArray readableArray) {
        t10.setPropList(readableArray);
    }

    @ReactProp(name = "stroke")
    public void setStroke(T t10, Dynamic dynamic) {
        t10.setStroke(dynamic);
    }

    @ReactProp(name = "strokeDasharray")
    public void setStrokeDasharray(T t10, Dynamic dynamic) {
        t10.setStrokeDasharray(dynamic);
    }

    @ReactProp(name = "strokeDashoffset")
    public void setStrokeDashoffset(T t10, float f10) {
        t10.setStrokeDashoffset(f10);
    }

    @ReactProp(defaultInt = 1, name = "strokeLinecap")
    public void setStrokeLinecap(T t10, int i10) {
        t10.setStrokeLinecap(i10);
    }

    @ReactProp(defaultInt = 1, name = "strokeLinejoin")
    public void setStrokeLinejoin(T t10, int i10) {
        t10.setStrokeLinejoin(i10);
    }

    @ReactProp(defaultFloat = BulletSpan.STANDARD_STROKE_WIDTH_PX, name = "strokeMiterlimit")
    public void setStrokeMiterlimit(T t10, float f10) {
        t10.setStrokeMiterlimit(f10);
    }

    @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "strokeOpacity")
    public void setStrokeOpacity(T t10, float f10) {
        t10.setStrokeOpacity(f10);
    }

    @ReactProp(name = "strokeWidth")
    public void setStrokeWidth(T t10, Dynamic dynamic) {
        t10.setStrokeWidth(dynamic);
    }

    @ReactProp(name = "vectorEffect")
    public void setVectorEffect(T t10, int i10) {
        t10.setVectorEffect(i10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class TextViewManager extends TextViewManagerAbstract<j1> implements RNSVGTextManagerInterface<j1> {
        public static final String REACT_CLASS = "RNSVGText";

        /* JADX INFO: Access modifiers changed from: package-private */
        public TextViewManager() {
            super(VirtualViewManager.SVGClass.RNSVGText);
            ((VirtualViewManager) this).mDelegate = new RNSVGTextManagerDelegate(this);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        public /* bridge */ /* synthetic */ void setAlignmentBaseline(j1 j1Var, String str) {
            super.setAlignmentBaseline((TextViewManager) j1Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = "baselineShift")
        public /* bridge */ /* synthetic */ void setBaselineShift(j1 j1Var, Dynamic dynamic) {
            super.setBaselineShift((TextViewManager) j1Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = "clipPath")
        public /* bridge */ /* synthetic */ void setClipPath(j1 j1Var, String str) {
            super.setClipPath((TextViewManager) j1Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = "clipRule")
        public /* bridge */ /* synthetic */ void setClipRule(j1 j1Var, int i10) {
            super.setClipRule((TextViewManager) j1Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(customType = "Color", name = ViewProps.COLOR)
        public /* bridge */ /* synthetic */ void setColor(j1 j1Var, Integer num) {
            super.setColor((TextViewManager) j1Var, num);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = ViewProps.DISPLAY)
        public /* bridge */ /* synthetic */ void setDisplay(j1 j1Var, String str) {
            super.setDisplay((TextViewManager) j1Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = "dx")
        public /* bridge */ /* synthetic */ void setDx(j1 j1Var, Dynamic dynamic) {
            super.setDx((TextViewManager) j1Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = "dy")
        public /* bridge */ /* synthetic */ void setDy(j1 j1Var, Dynamic dynamic) {
            super.setDy((TextViewManager) j1Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = "fill")
        public /* bridge */ /* synthetic */ void setFill(j1 j1Var, Dynamic dynamic) {
            super.setFill((TextViewManager) j1Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "fillOpacity")
        public /* bridge */ /* synthetic */ void setFillOpacity(j1 j1Var, float f10) {
            super.setFillOpacity((TextViewManager) j1Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(defaultInt = 1, name = "fillRule")
        public /* bridge */ /* synthetic */ void setFillRule(j1 j1Var, int i10) {
            super.setFillRule((TextViewManager) j1Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = ViewProps.FILTER)
        public /* bridge */ /* synthetic */ void setFilter(j1 j1Var, String str) {
            super.setFilter((TextViewManager) j1Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = "font")
        public /* bridge */ /* synthetic */ void setFont(j1 j1Var, Dynamic dynamic) {
            super.setFont((TextViewManager) j1Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = ViewProps.FONT_SIZE)
        public /* bridge */ /* synthetic */ void setFontSize(j1 j1Var, Dynamic dynamic) {
            super.setFontSize((TextViewManager) j1Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = ViewProps.FONT_WEIGHT)
        public /* bridge */ /* synthetic */ void setFontWeight(j1 j1Var, Dynamic dynamic) {
            super.setFontWeight((TextViewManager) j1Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = "inlineSize")
        public /* bridge */ /* synthetic */ void setInlineSize(j1 j1Var, Dynamic dynamic) {
            super.setInlineSize((TextViewManager) j1Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = "lengthAdjust")
        public /* bridge */ /* synthetic */ void setLengthAdjust(j1 j1Var, String str) {
            super.setLengthAdjust((TextViewManager) j1Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = "markerEnd")
        public /* bridge */ /* synthetic */ void setMarkerEnd(j1 j1Var, String str) {
            super.setMarkerEnd((TextViewManager) j1Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = "markerMid")
        public /* bridge */ /* synthetic */ void setMarkerMid(j1 j1Var, String str) {
            super.setMarkerMid((TextViewManager) j1Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = "markerStart")
        public /* bridge */ /* synthetic */ void setMarkerStart(j1 j1Var, String str) {
            super.setMarkerStart((TextViewManager) j1Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = "mask")
        public /* bridge */ /* synthetic */ void setMask(j1 j1Var, String str) {
            super.setMask((TextViewManager) j1Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        public /* bridge */ /* synthetic */ void setMatrix(j1 j1Var, ReadableArray readableArray) {
            super.setMatrix((TextViewManager) j1Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = StackTraceHelper.NAME_KEY)
        public /* bridge */ /* synthetic */ void setName(j1 j1Var, String str) {
            super.setName((TextViewManager) j1Var, str);
        }

        @Override // com.facebook.react.uimanager.BaseViewManager
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = ViewProps.OPACITY)
        public /* bridge */ /* synthetic */ void setOpacity(View view, float f10) {
            super.setOpacity((TextViewManager) ((VirtualView) view), f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = ViewProps.POINTER_EVENTS)
        public /* bridge */ /* synthetic */ void setPointerEvents(j1 j1Var, String str) {
            super.setPointerEvents((TextViewManager) j1Var, str);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = "propList")
        public /* bridge */ /* synthetic */ void setPropList(j1 j1Var, ReadableArray readableArray) {
            super.setPropList((TextViewManager) j1Var, readableArray);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = "responsible")
        public /* bridge */ /* synthetic */ void setResponsible(j1 j1Var, boolean z10) {
            super.setResponsible((TextViewManager) j1Var, z10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = "rotate")
        public /* bridge */ /* synthetic */ void setRotate(j1 j1Var, Dynamic dynamic) {
            super.setRotate((TextViewManager) j1Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = "stroke")
        public /* bridge */ /* synthetic */ void setStroke(j1 j1Var, Dynamic dynamic) {
            super.setStroke((TextViewManager) j1Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = "strokeDasharray")
        public /* bridge */ /* synthetic */ void setStrokeDasharray(j1 j1Var, Dynamic dynamic) {
            super.setStrokeDasharray((TextViewManager) j1Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = "strokeDashoffset")
        public /* bridge */ /* synthetic */ void setStrokeDashoffset(j1 j1Var, float f10) {
            super.setStrokeDashoffset((TextViewManager) j1Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinecap")
        public /* bridge */ /* synthetic */ void setStrokeLinecap(j1 j1Var, int i10) {
            super.setStrokeLinecap((TextViewManager) j1Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(defaultInt = 1, name = "strokeLinejoin")
        public /* bridge */ /* synthetic */ void setStrokeLinejoin(j1 j1Var, int i10) {
            super.setStrokeLinejoin((TextViewManager) j1Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(defaultFloat = BulletSpan.STANDARD_STROKE_WIDTH_PX, name = "strokeMiterlimit")
        public /* bridge */ /* synthetic */ void setStrokeMiterlimit(j1 j1Var, float f10) {
            super.setStrokeMiterlimit((TextViewManager) j1Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = "strokeOpacity")
        public /* bridge */ /* synthetic */ void setStrokeOpacity(j1 j1Var, float f10) {
            super.setStrokeOpacity((TextViewManager) j1Var, f10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = "strokeWidth")
        public /* bridge */ /* synthetic */ void setStrokeWidth(j1 j1Var, Dynamic dynamic) {
            super.setStrokeWidth((TextViewManager) j1Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = "textLength")
        public /* bridge */ /* synthetic */ void setTextLength(j1 j1Var, Dynamic dynamic) {
            super.setTextLength((TextViewManager) j1Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = "vectorEffect")
        public /* bridge */ /* synthetic */ void setVectorEffect(j1 j1Var, int i10) {
            super.setVectorEffect((TextViewManager) j1Var, i10);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = "verticalAlign")
        public /* bridge */ /* synthetic */ void setVerticalAlign(j1 j1Var, Dynamic dynamic) {
            super.setVerticalAlign((TextViewManager) j1Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = "x")
        public /* bridge */ /* synthetic */ void setX(j1 j1Var, Dynamic dynamic) {
            super.setX((TextViewManager) j1Var, dynamic);
        }

        @Override // com.facebook.react.viewmanagers.RNSVGTextManagerInterface
        @ReactProp(name = "y")
        public /* bridge */ /* synthetic */ void setY(j1 j1Var, Dynamic dynamic) {
            super.setY((TextViewManager) j1Var, dynamic);
        }

        TextViewManager(VirtualViewManager.SVGClass sVGClass) {
            super(sVGClass);
            ((VirtualViewManager) this).mDelegate = new RNSVGTextManagerDelegate(this);
        }
    }

    public void setFill(T t10, ReadableMap readableMap) {
        t10.setFill(readableMap);
    }

    public void setStroke(T t10, ReadableMap readableMap) {
        t10.setStroke(readableMap);
    }
}
