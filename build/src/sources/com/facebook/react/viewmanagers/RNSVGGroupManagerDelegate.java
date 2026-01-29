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
import com.facebook.react.viewmanagers.RNSVGGroupManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSVGGroupManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSVGGroupManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSVGGroupManagerDelegate(BaseViewManager baseViewManager) {
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
            case -1081239615:
                if (str.equals("matrix")) {
                    c10 = 2;
                    break;
                }
                break;
            case -993894751:
                if (str.equals("propList")) {
                    c10 = 3;
                    break;
                }
                break;
            case -933864895:
                if (str.equals("markerEnd")) {
                    c10 = 4;
                    break;
                }
                break;
            case -933857362:
                if (str.equals("markerMid")) {
                    c10 = 5;
                    break;
                }
                break;
            case -891980232:
                if (str.equals("stroke")) {
                    c10 = 6;
                    break;
                }
                break;
            case -734428249:
                if (str.equals(ViewProps.FONT_WEIGHT)) {
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
            case 3143043:
                if (str.equals("fill")) {
                    c10 = '\r';
                    break;
                }
                break;
            case 3148879:
                if (str.equals("font")) {
                    c10 = 14;
                    break;
                }
                break;
            case 3344108:
                if (str.equals("mask")) {
                    c10 = 15;
                    break;
                }
                break;
            case 3373707:
                if (str.equals(StackTraceHelper.NAME_KEY)) {
                    c10 = 16;
                    break;
                }
                break;
            case 78845486:
                if (str.equals("strokeMiterlimit")) {
                    c10 = 17;
                    break;
                }
                break;
            case 94842723:
                if (str.equals(ViewProps.COLOR)) {
                    c10 = 18;
                    break;
                }
                break;
            case 104482996:
                if (str.equals("vectorEffect")) {
                    c10 = 19;
                    break;
                }
                break;
            case 217109576:
                if (str.equals("markerStart")) {
                    c10 = 20;
                    break;
                }
                break;
            case 365601008:
                if (str.equals(ViewProps.FONT_SIZE)) {
                    c10 = 21;
                    break;
                }
                break;
            case 401643183:
                if (str.equals("strokeDasharray")) {
                    c10 = 22;
                    break;
                }
                break;
            case 917656469:
                if (str.equals("clipPath")) {
                    c10 = 23;
                    break;
                }
                break;
            case 917735020:
                if (str.equals("clipRule")) {
                    c10 = 24;
                    break;
                }
                break;
            case 1027575302:
                if (str.equals("strokeLinecap")) {
                    c10 = 25;
                    break;
                }
                break;
            case 1671764162:
                if (str.equals(ViewProps.DISPLAY)) {
                    c10 = 26;
                    break;
                }
                break;
            case 1790285174:
                if (str.equals("strokeLinejoin")) {
                    c10 = 27;
                    break;
                }
                break;
            case 1847674614:
                if (str.equals("responsible")) {
                    c10 = 28;
                    break;
                }
                break;
            case 1924065902:
                if (str.equals("strokeWidth")) {
                    c10 = 29;
                    break;
                }
                break;
        }
        float f10 = 0.0f;
        float f11 = 1.0f;
        String str2 = null;
        switch (c10) {
            case 0:
                RNSVGGroupManagerInterface rNSVGGroupManagerInterface = (RNSVGGroupManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGGroupManagerInterface.setFilter(t10, str2);
                return;
            case 1:
                U u10 = this.mViewManager;
                if (obj != null) {
                    f11 = ((Double) obj).floatValue();
                }
                u10.setOpacity(t10, f11);
                return;
            case 2:
                ((RNSVGGroupManagerInterface) this.mViewManager).setMatrix(t10, (ReadableArray) obj);
                return;
            case 3:
                ((RNSVGGroupManagerInterface) this.mViewManager).setPropList(t10, (ReadableArray) obj);
                return;
            case 4:
                RNSVGGroupManagerInterface rNSVGGroupManagerInterface2 = (RNSVGGroupManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGGroupManagerInterface2.setMarkerEnd(t10, str2);
                return;
            case 5:
                RNSVGGroupManagerInterface rNSVGGroupManagerInterface3 = (RNSVGGroupManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGGroupManagerInterface3.setMarkerMid(t10, str2);
                return;
            case 6:
                ((RNSVGGroupManagerInterface) this.mViewManager).setStroke(t10, new DynamicFromObject(obj));
                return;
            case 7:
                ((RNSVGGroupManagerInterface) this.mViewManager).setFontWeight(t10, new DynamicFromObject(obj));
                return;
            case '\b':
                RNSVGGroupManagerInterface rNSVGGroupManagerInterface4 = (RNSVGGroupManagerInterface) this.mViewManager;
                if (obj != null) {
                    i10 = ((Double) obj).intValue();
                }
                rNSVGGroupManagerInterface4.setFillRule(t10, i10);
                return;
            case '\t':
                RNSVGGroupManagerInterface rNSVGGroupManagerInterface5 = (RNSVGGroupManagerInterface) this.mViewManager;
                if (obj != null) {
                    f11 = ((Double) obj).floatValue();
                }
                rNSVGGroupManagerInterface5.setStrokeOpacity(t10, f11);
                return;
            case '\n':
                RNSVGGroupManagerInterface rNSVGGroupManagerInterface6 = (RNSVGGroupManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGGroupManagerInterface6.setPointerEvents(t10, str2);
                return;
            case 11:
                RNSVGGroupManagerInterface rNSVGGroupManagerInterface7 = (RNSVGGroupManagerInterface) this.mViewManager;
                if (obj != null) {
                    f11 = ((Double) obj).floatValue();
                }
                rNSVGGroupManagerInterface7.setFillOpacity(t10, f11);
                return;
            case '\f':
                RNSVGGroupManagerInterface rNSVGGroupManagerInterface8 = (RNSVGGroupManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSVGGroupManagerInterface8.setStrokeDashoffset(t10, f10);
                return;
            case '\r':
                ((RNSVGGroupManagerInterface) this.mViewManager).setFill(t10, new DynamicFromObject(obj));
                return;
            case 14:
                ((RNSVGGroupManagerInterface) this.mViewManager).setFont(t10, new DynamicFromObject(obj));
                return;
            case 15:
                RNSVGGroupManagerInterface rNSVGGroupManagerInterface9 = (RNSVGGroupManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGGroupManagerInterface9.setMask(t10, str2);
                return;
            case 16:
                RNSVGGroupManagerInterface rNSVGGroupManagerInterface10 = (RNSVGGroupManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGGroupManagerInterface10.setName(t10, str2);
                return;
            case 17:
                RNSVGGroupManagerInterface rNSVGGroupManagerInterface11 = (RNSVGGroupManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSVGGroupManagerInterface11.setStrokeMiterlimit(t10, f10);
                return;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                ((RNSVGGroupManagerInterface) this.mViewManager).setColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                RNSVGGroupManagerInterface rNSVGGroupManagerInterface12 = (RNSVGGroupManagerInterface) this.mViewManager;
                if (obj != null) {
                    i11 = ((Double) obj).intValue();
                }
                rNSVGGroupManagerInterface12.setVectorEffect(t10, i11);
                return;
            case 20:
                RNSVGGroupManagerInterface rNSVGGroupManagerInterface13 = (RNSVGGroupManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGGroupManagerInterface13.setMarkerStart(t10, str2);
                return;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                ((RNSVGGroupManagerInterface) this.mViewManager).setFontSize(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                ((RNSVGGroupManagerInterface) this.mViewManager).setStrokeDasharray(t10, new DynamicFromObject(obj));
                return;
            case 23:
                RNSVGGroupManagerInterface rNSVGGroupManagerInterface14 = (RNSVGGroupManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGGroupManagerInterface14.setClipPath(t10, str2);
                return;
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                RNSVGGroupManagerInterface rNSVGGroupManagerInterface15 = (RNSVGGroupManagerInterface) this.mViewManager;
                if (obj != null) {
                    i14 = ((Double) obj).intValue();
                }
                rNSVGGroupManagerInterface15.setClipRule(t10, i14);
                return;
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                RNSVGGroupManagerInterface rNSVGGroupManagerInterface16 = (RNSVGGroupManagerInterface) this.mViewManager;
                if (obj != null) {
                    i13 = ((Double) obj).intValue();
                }
                rNSVGGroupManagerInterface16.setStrokeLinecap(t10, i13);
                return;
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                RNSVGGroupManagerInterface rNSVGGroupManagerInterface17 = (RNSVGGroupManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGGroupManagerInterface17.setDisplay(t10, str2);
                return;
            case 27:
                RNSVGGroupManagerInterface rNSVGGroupManagerInterface18 = (RNSVGGroupManagerInterface) this.mViewManager;
                if (obj != null) {
                    i12 = ((Double) obj).intValue();
                }
                rNSVGGroupManagerInterface18.setStrokeLinejoin(t10, i12);
                return;
            case 28:
                RNSVGGroupManagerInterface rNSVGGroupManagerInterface19 = (RNSVGGroupManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNSVGGroupManagerInterface19.setResponsible(t10, z10);
                return;
            case 29:
                ((RNSVGGroupManagerInterface) this.mViewManager).setStrokeWidth(t10, new DynamicFromObject(obj));
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
