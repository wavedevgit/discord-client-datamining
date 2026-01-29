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
import com.facebook.react.viewmanagers.RNSVGForeignObjectManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSVGForeignObjectManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSVGForeignObjectManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSVGForeignObjectManagerDelegate(BaseViewManager baseViewManager) {
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
            case -734428249:
                if (str.equals(ViewProps.FONT_WEIGHT)) {
                    c10 = '\b';
                    break;
                }
                break;
            case -729118945:
                if (str.equals("fillRule")) {
                    c10 = '\t';
                    break;
                }
                break;
            case -416535885:
                if (str.equals("strokeOpacity")) {
                    c10 = '\n';
                    break;
                }
                break;
            case -293492298:
                if (str.equals(ViewProps.POINTER_EVENTS)) {
                    c10 = 11;
                    break;
                }
                break;
            case -53677816:
                if (str.equals("fillOpacity")) {
                    c10 = '\f';
                    break;
                }
                break;
            case -44578051:
                if (str.equals("strokeDashoffset")) {
                    c10 = '\r';
                    break;
                }
                break;
            case 120:
                if (str.equals("x")) {
                    c10 = 14;
                    break;
                }
                break;
            case 121:
                if (str.equals("y")) {
                    c10 = 15;
                    break;
                }
                break;
            case 3143043:
                if (str.equals("fill")) {
                    c10 = 16;
                    break;
                }
                break;
            case 3148879:
                if (str.equals("font")) {
                    c10 = 17;
                    break;
                }
                break;
            case 3344108:
                if (str.equals("mask")) {
                    c10 = 18;
                    break;
                }
                break;
            case 3373707:
                if (str.equals(StackTraceHelper.NAME_KEY)) {
                    c10 = 19;
                    break;
                }
                break;
            case 78845486:
                if (str.equals("strokeMiterlimit")) {
                    c10 = 20;
                    break;
                }
                break;
            case 94842723:
                if (str.equals(ViewProps.COLOR)) {
                    c10 = 21;
                    break;
                }
                break;
            case 104482996:
                if (str.equals("vectorEffect")) {
                    c10 = 22;
                    break;
                }
                break;
            case 113126854:
                if (str.equals("width")) {
                    c10 = 23;
                    break;
                }
                break;
            case 217109576:
                if (str.equals("markerStart")) {
                    c10 = 24;
                    break;
                }
                break;
            case 365601008:
                if (str.equals(ViewProps.FONT_SIZE)) {
                    c10 = 25;
                    break;
                }
                break;
            case 401643183:
                if (str.equals("strokeDasharray")) {
                    c10 = 26;
                    break;
                }
                break;
            case 917656469:
                if (str.equals("clipPath")) {
                    c10 = 27;
                    break;
                }
                break;
            case 917735020:
                if (str.equals("clipRule")) {
                    c10 = 28;
                    break;
                }
                break;
            case 1027575302:
                if (str.equals("strokeLinecap")) {
                    c10 = 29;
                    break;
                }
                break;
            case 1671764162:
                if (str.equals(ViewProps.DISPLAY)) {
                    c10 = 30;
                    break;
                }
                break;
            case 1790285174:
                if (str.equals("strokeLinejoin")) {
                    c10 = 31;
                    break;
                }
                break;
            case 1847674614:
                if (str.equals("responsible")) {
                    c10 = ' ';
                    break;
                }
                break;
            case 1924065902:
                if (str.equals("strokeWidth")) {
                    c10 = '!';
                    break;
                }
                break;
        }
        float f10 = 0.0f;
        float f11 = 1.0f;
        String str2 = null;
        switch (c10) {
            case 0:
                RNSVGForeignObjectManagerInterface rNSVGForeignObjectManagerInterface = (RNSVGForeignObjectManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGForeignObjectManagerInterface.setFilter(t10, str2);
                return;
            case 1:
                U u10 = this.mViewManager;
                if (obj != null) {
                    f11 = ((Double) obj).floatValue();
                }
                u10.setOpacity(t10, f11);
                return;
            case 2:
                ((RNSVGForeignObjectManagerInterface) this.mViewManager).setHeight(t10, new DynamicFromObject(obj));
                return;
            case 3:
                ((RNSVGForeignObjectManagerInterface) this.mViewManager).setMatrix(t10, (ReadableArray) obj);
                return;
            case 4:
                ((RNSVGForeignObjectManagerInterface) this.mViewManager).setPropList(t10, (ReadableArray) obj);
                return;
            case 5:
                RNSVGForeignObjectManagerInterface rNSVGForeignObjectManagerInterface2 = (RNSVGForeignObjectManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGForeignObjectManagerInterface2.setMarkerEnd(t10, str2);
                return;
            case 6:
                RNSVGForeignObjectManagerInterface rNSVGForeignObjectManagerInterface3 = (RNSVGForeignObjectManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGForeignObjectManagerInterface3.setMarkerMid(t10, str2);
                return;
            case 7:
                ((RNSVGForeignObjectManagerInterface) this.mViewManager).setStroke(t10, new DynamicFromObject(obj));
                return;
            case '\b':
                ((RNSVGForeignObjectManagerInterface) this.mViewManager).setFontWeight(t10, new DynamicFromObject(obj));
                return;
            case '\t':
                RNSVGForeignObjectManagerInterface rNSVGForeignObjectManagerInterface4 = (RNSVGForeignObjectManagerInterface) this.mViewManager;
                if (obj != null) {
                    i10 = ((Double) obj).intValue();
                }
                rNSVGForeignObjectManagerInterface4.setFillRule(t10, i10);
                return;
            case '\n':
                RNSVGForeignObjectManagerInterface rNSVGForeignObjectManagerInterface5 = (RNSVGForeignObjectManagerInterface) this.mViewManager;
                if (obj != null) {
                    f11 = ((Double) obj).floatValue();
                }
                rNSVGForeignObjectManagerInterface5.setStrokeOpacity(t10, f11);
                return;
            case 11:
                RNSVGForeignObjectManagerInterface rNSVGForeignObjectManagerInterface6 = (RNSVGForeignObjectManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGForeignObjectManagerInterface6.setPointerEvents(t10, str2);
                return;
            case '\f':
                RNSVGForeignObjectManagerInterface rNSVGForeignObjectManagerInterface7 = (RNSVGForeignObjectManagerInterface) this.mViewManager;
                if (obj != null) {
                    f11 = ((Double) obj).floatValue();
                }
                rNSVGForeignObjectManagerInterface7.setFillOpacity(t10, f11);
                return;
            case '\r':
                RNSVGForeignObjectManagerInterface rNSVGForeignObjectManagerInterface8 = (RNSVGForeignObjectManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSVGForeignObjectManagerInterface8.setStrokeDashoffset(t10, f10);
                return;
            case 14:
                ((RNSVGForeignObjectManagerInterface) this.mViewManager).setX(t10, new DynamicFromObject(obj));
                return;
            case 15:
                ((RNSVGForeignObjectManagerInterface) this.mViewManager).setY(t10, new DynamicFromObject(obj));
                return;
            case 16:
                ((RNSVGForeignObjectManagerInterface) this.mViewManager).setFill(t10, new DynamicFromObject(obj));
                return;
            case 17:
                ((RNSVGForeignObjectManagerInterface) this.mViewManager).setFont(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                RNSVGForeignObjectManagerInterface rNSVGForeignObjectManagerInterface9 = (RNSVGForeignObjectManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGForeignObjectManagerInterface9.setMask(t10, str2);
                return;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                RNSVGForeignObjectManagerInterface rNSVGForeignObjectManagerInterface10 = (RNSVGForeignObjectManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGForeignObjectManagerInterface10.setName(t10, str2);
                return;
            case 20:
                RNSVGForeignObjectManagerInterface rNSVGForeignObjectManagerInterface11 = (RNSVGForeignObjectManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSVGForeignObjectManagerInterface11.setStrokeMiterlimit(t10, f10);
                return;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                ((RNSVGForeignObjectManagerInterface) this.mViewManager).setColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                RNSVGForeignObjectManagerInterface rNSVGForeignObjectManagerInterface12 = (RNSVGForeignObjectManagerInterface) this.mViewManager;
                if (obj != null) {
                    i11 = ((Double) obj).intValue();
                }
                rNSVGForeignObjectManagerInterface12.setVectorEffect(t10, i11);
                return;
            case 23:
                ((RNSVGForeignObjectManagerInterface) this.mViewManager).setWidth(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                RNSVGForeignObjectManagerInterface rNSVGForeignObjectManagerInterface13 = (RNSVGForeignObjectManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGForeignObjectManagerInterface13.setMarkerStart(t10, str2);
                return;
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                ((RNSVGForeignObjectManagerInterface) this.mViewManager).setFontSize(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                ((RNSVGForeignObjectManagerInterface) this.mViewManager).setStrokeDasharray(t10, new DynamicFromObject(obj));
                return;
            case 27:
                RNSVGForeignObjectManagerInterface rNSVGForeignObjectManagerInterface14 = (RNSVGForeignObjectManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGForeignObjectManagerInterface14.setClipPath(t10, str2);
                return;
            case 28:
                RNSVGForeignObjectManagerInterface rNSVGForeignObjectManagerInterface15 = (RNSVGForeignObjectManagerInterface) this.mViewManager;
                if (obj != null) {
                    i14 = ((Double) obj).intValue();
                }
                rNSVGForeignObjectManagerInterface15.setClipRule(t10, i14);
                return;
            case 29:
                RNSVGForeignObjectManagerInterface rNSVGForeignObjectManagerInterface16 = (RNSVGForeignObjectManagerInterface) this.mViewManager;
                if (obj != null) {
                    i13 = ((Double) obj).intValue();
                }
                rNSVGForeignObjectManagerInterface16.setStrokeLinecap(t10, i13);
                return;
            case 30:
                RNSVGForeignObjectManagerInterface rNSVGForeignObjectManagerInterface17 = (RNSVGForeignObjectManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGForeignObjectManagerInterface17.setDisplay(t10, str2);
                return;
            case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                RNSVGForeignObjectManagerInterface rNSVGForeignObjectManagerInterface18 = (RNSVGForeignObjectManagerInterface) this.mViewManager;
                if (obj != null) {
                    i12 = ((Double) obj).intValue();
                }
                rNSVGForeignObjectManagerInterface18.setStrokeLinejoin(t10, i12);
                return;
            case ' ':
                RNSVGForeignObjectManagerInterface rNSVGForeignObjectManagerInterface19 = (RNSVGForeignObjectManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNSVGForeignObjectManagerInterface19.setResponsible(t10, z10);
                return;
            case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                ((RNSVGForeignObjectManagerInterface) this.mViewManager).setStrokeWidth(t10, new DynamicFromObject(obj));
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
