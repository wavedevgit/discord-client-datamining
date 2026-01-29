package com.facebook.react.viewmanagers;

import android.view.View;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.bridge.ColorPropConverter;
import com.facebook.react.bridge.DynamicFromObject;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.viewmanagers.RNSVGUseManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSVGUseManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSVGUseManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSVGUseManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        str.getClass();
        int i10 = 1;
        int i11 = 0;
        boolean z10 = false;
        int i12 = 0;
        int i13 = 0;
        int i14 = 0;
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1274492040:
                if (str.equals(ViewProps.FILTER)) {
                    c10 = 0;
                    break;
                }
                break;
            case -1267206133:
                if (str.equals(ViewProps.OPACITY)) {
                    c10 = 1;
                    break;
                }
                break;
            case -1221029593:
                if (str.equals("height")) {
                    c10 = 2;
                    break;
                }
                break;
            case -1081239615:
                if (str.equals("matrix")) {
                    c10 = 3;
                    break;
                }
                break;
            case -993894751:
                if (str.equals("propList")) {
                    c10 = 4;
                    break;
                }
                break;
            case -933864895:
                if (str.equals("markerEnd")) {
                    c10 = 5;
                    break;
                }
                break;
            case -933857362:
                if (str.equals("markerMid")) {
                    c10 = 6;
                    break;
                }
                break;
            case -891980232:
                if (str.equals("stroke")) {
                    c10 = 7;
                    break;
                }
                break;
            case -729118945:
                if (str.equals("fillRule")) {
                    c10 = '\b';
                    break;
                }
                break;
            case -416535885:
                if (str.equals("strokeOpacity")) {
                    c10 = '\t';
                    break;
                }
                break;
            case -293492298:
                if (str.equals(ViewProps.POINTER_EVENTS)) {
                    c10 = '\n';
                    break;
                }
                break;
            case -53677816:
                if (str.equals("fillOpacity")) {
                    c10 = 11;
                    break;
                }
                break;
            case -44578051:
                if (str.equals("strokeDashoffset")) {
                    c10 = '\f';
                    break;
                }
                break;
            case 120:
                if (str.equals("x")) {
                    c10 = '\r';
                    break;
                }
                break;
            case 121:
                if (str.equals("y")) {
                    c10 = 14;
                    break;
                }
                break;
            case 3143043:
                if (str.equals("fill")) {
                    c10 = 15;
                    break;
                }
                break;
            case 3211051:
                if (str.equals("href")) {
                    c10 = 16;
                    break;
                }
                break;
            case 3344108:
                if (str.equals("mask")) {
                    c10 = 17;
                    break;
                }
                break;
            case 3373707:
                if (str.equals(StackTraceHelper.NAME_KEY)) {
                    c10 = 18;
                    break;
                }
                break;
            case 78845486:
                if (str.equals("strokeMiterlimit")) {
                    c10 = 19;
                    break;
                }
                break;
            case 94842723:
                if (str.equals(ViewProps.COLOR)) {
                    c10 = 20;
                    break;
                }
                break;
            case 104482996:
                if (str.equals("vectorEffect")) {
                    c10 = 21;
                    break;
                }
                break;
            case 113126854:
                if (str.equals("width")) {
                    c10 = 22;
                    break;
                }
                break;
            case 217109576:
                if (str.equals("markerStart")) {
                    c10 = 23;
                    break;
                }
                break;
            case 401643183:
                if (str.equals("strokeDasharray")) {
                    c10 = 24;
                    break;
                }
                break;
            case 917656469:
                if (str.equals("clipPath")) {
                    c10 = 25;
                    break;
                }
                break;
            case 917735020:
                if (str.equals("clipRule")) {
                    c10 = 26;
                    break;
                }
                break;
            case 1027575302:
                if (str.equals("strokeLinecap")) {
                    c10 = 27;
                    break;
                }
                break;
            case 1671764162:
                if (str.equals(ViewProps.DISPLAY)) {
                    c10 = 28;
                    break;
                }
                break;
            case 1790285174:
                if (str.equals("strokeLinejoin")) {
                    c10 = 29;
                    break;
                }
                break;
            case 1847674614:
                if (str.equals("responsible")) {
                    c10 = 30;
                    break;
                }
                break;
            case 1924065902:
                if (str.equals("strokeWidth")) {
                    c10 = 31;
                    break;
                }
                break;
        }
        float f10 = 0.0f;
        float f11 = 1.0f;
        String str2 = null;
        switch (c10) {
            case 0:
                RNSVGUseManagerInterface rNSVGUseManagerInterface = (RNSVGUseManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGUseManagerInterface.setFilter(t10, str2);
                return;
            case 1:
                U u10 = this.mViewManager;
                if (obj != null) {
                    f11 = ((Double) obj).floatValue();
                }
                u10.setOpacity(t10, f11);
                return;
            case 2:
                ((RNSVGUseManagerInterface) this.mViewManager).setHeight(t10, new DynamicFromObject(obj));
                return;
            case 3:
                ((RNSVGUseManagerInterface) this.mViewManager).setMatrix(t10, (ReadableArray) obj);
                return;
            case 4:
                ((RNSVGUseManagerInterface) this.mViewManager).setPropList(t10, (ReadableArray) obj);
                return;
            case 5:
                RNSVGUseManagerInterface rNSVGUseManagerInterface2 = (RNSVGUseManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGUseManagerInterface2.setMarkerEnd(t10, str2);
                return;
            case 6:
                RNSVGUseManagerInterface rNSVGUseManagerInterface3 = (RNSVGUseManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGUseManagerInterface3.setMarkerMid(t10, str2);
                return;
            case 7:
                ((RNSVGUseManagerInterface) this.mViewManager).setStroke(t10, new DynamicFromObject(obj));
                return;
            case '\b':
                RNSVGUseManagerInterface rNSVGUseManagerInterface4 = (RNSVGUseManagerInterface) this.mViewManager;
                if (obj != null) {
                    i10 = ((Double) obj).intValue();
                }
                rNSVGUseManagerInterface4.setFillRule(t10, i10);
                return;
            case '\t':
                RNSVGUseManagerInterface rNSVGUseManagerInterface5 = (RNSVGUseManagerInterface) this.mViewManager;
                if (obj != null) {
                    f11 = ((Double) obj).floatValue();
                }
                rNSVGUseManagerInterface5.setStrokeOpacity(t10, f11);
                return;
            case '\n':
                RNSVGUseManagerInterface rNSVGUseManagerInterface6 = (RNSVGUseManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGUseManagerInterface6.setPointerEvents(t10, str2);
                return;
            case 11:
                RNSVGUseManagerInterface rNSVGUseManagerInterface7 = (RNSVGUseManagerInterface) this.mViewManager;
                if (obj != null) {
                    f11 = ((Double) obj).floatValue();
                }
                rNSVGUseManagerInterface7.setFillOpacity(t10, f11);
                return;
            case '\f':
                RNSVGUseManagerInterface rNSVGUseManagerInterface8 = (RNSVGUseManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSVGUseManagerInterface8.setStrokeDashoffset(t10, f10);
                return;
            case '\r':
                ((RNSVGUseManagerInterface) this.mViewManager).setX(t10, new DynamicFromObject(obj));
                return;
            case 14:
                ((RNSVGUseManagerInterface) this.mViewManager).setY(t10, new DynamicFromObject(obj));
                return;
            case 15:
                ((RNSVGUseManagerInterface) this.mViewManager).setFill(t10, new DynamicFromObject(obj));
                return;
            case 16:
                RNSVGUseManagerInterface rNSVGUseManagerInterface9 = (RNSVGUseManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGUseManagerInterface9.setHref(t10, str2);
                return;
            case 17:
                RNSVGUseManagerInterface rNSVGUseManagerInterface10 = (RNSVGUseManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGUseManagerInterface10.setMask(t10, str2);
                return;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                RNSVGUseManagerInterface rNSVGUseManagerInterface11 = (RNSVGUseManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGUseManagerInterface11.setName(t10, str2);
                return;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                RNSVGUseManagerInterface rNSVGUseManagerInterface12 = (RNSVGUseManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSVGUseManagerInterface12.setStrokeMiterlimit(t10, f10);
                return;
            case 20:
                ((RNSVGUseManagerInterface) this.mViewManager).setColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                RNSVGUseManagerInterface rNSVGUseManagerInterface13 = (RNSVGUseManagerInterface) this.mViewManager;
                if (obj != null) {
                    i11 = ((Double) obj).intValue();
                }
                rNSVGUseManagerInterface13.setVectorEffect(t10, i11);
                return;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                ((RNSVGUseManagerInterface) this.mViewManager).setWidth(t10, new DynamicFromObject(obj));
                return;
            case 23:
                RNSVGUseManagerInterface rNSVGUseManagerInterface14 = (RNSVGUseManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGUseManagerInterface14.setMarkerStart(t10, str2);
                return;
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                ((RNSVGUseManagerInterface) this.mViewManager).setStrokeDasharray(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                RNSVGUseManagerInterface rNSVGUseManagerInterface15 = (RNSVGUseManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGUseManagerInterface15.setClipPath(t10, str2);
                return;
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                RNSVGUseManagerInterface rNSVGUseManagerInterface16 = (RNSVGUseManagerInterface) this.mViewManager;
                if (obj != null) {
                    i14 = ((Double) obj).intValue();
                }
                rNSVGUseManagerInterface16.setClipRule(t10, i14);
                return;
            case 27:
                RNSVGUseManagerInterface rNSVGUseManagerInterface17 = (RNSVGUseManagerInterface) this.mViewManager;
                if (obj != null) {
                    i13 = ((Double) obj).intValue();
                }
                rNSVGUseManagerInterface17.setStrokeLinecap(t10, i13);
                return;
            case 28:
                RNSVGUseManagerInterface rNSVGUseManagerInterface18 = (RNSVGUseManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGUseManagerInterface18.setDisplay(t10, str2);
                return;
            case 29:
                RNSVGUseManagerInterface rNSVGUseManagerInterface19 = (RNSVGUseManagerInterface) this.mViewManager;
                if (obj != null) {
                    i12 = ((Double) obj).intValue();
                }
                rNSVGUseManagerInterface19.setStrokeLinejoin(t10, i12);
                return;
            case 30:
                RNSVGUseManagerInterface rNSVGUseManagerInterface20 = (RNSVGUseManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNSVGUseManagerInterface20.setResponsible(t10, z10);
                return;
            case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                ((RNSVGUseManagerInterface) this.mViewManager).setStrokeWidth(t10, new DynamicFromObject(obj));
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
