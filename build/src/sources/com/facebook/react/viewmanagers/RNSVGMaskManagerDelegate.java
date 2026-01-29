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
import com.facebook.react.viewmanagers.RNSVGMaskManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSVGMaskManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSVGMaskManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSVGMaskManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        str.getClass();
        int i10 = 1;
        int i11 = 0;
        int i12 = 0;
        boolean z10 = false;
        int i13 = 0;
        int i14 = 0;
        int i15 = 0;
        int i16 = 0;
        int i17 = 0;
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
            case -61221917:
                if (str.equals("maskUnits")) {
                    c10 = '\f';
                    break;
                }
                break;
            case -53677816:
                if (str.equals("fillOpacity")) {
                    c10 = '\r';
                    break;
                }
                break;
            case -44578051:
                if (str.equals("strokeDashoffset")) {
                    c10 = 14;
                    break;
                }
                break;
            case 120:
                if (str.equals("x")) {
                    c10 = 15;
                    break;
                }
                break;
            case 121:
                if (str.equals("y")) {
                    c10 = 16;
                    break;
                }
                break;
            case 3143043:
                if (str.equals("fill")) {
                    c10 = 17;
                    break;
                }
                break;
            case 3148879:
                if (str.equals("font")) {
                    c10 = 18;
                    break;
                }
                break;
            case 3344108:
                if (str.equals("mask")) {
                    c10 = 19;
                    break;
                }
                break;
            case 3373707:
                if (str.equals(StackTraceHelper.NAME_KEY)) {
                    c10 = 20;
                    break;
                }
                break;
            case 78845486:
                if (str.equals("strokeMiterlimit")) {
                    c10 = 21;
                    break;
                }
                break;
            case 94842723:
                if (str.equals(ViewProps.COLOR)) {
                    c10 = 22;
                    break;
                }
                break;
            case 104482996:
                if (str.equals("vectorEffect")) {
                    c10 = 23;
                    break;
                }
                break;
            case 113126854:
                if (str.equals("width")) {
                    c10 = 24;
                    break;
                }
                break;
            case 217109576:
                if (str.equals("markerStart")) {
                    c10 = 25;
                    break;
                }
                break;
            case 275100742:
                if (str.equals("maskType")) {
                    c10 = 26;
                    break;
                }
                break;
            case 365601008:
                if (str.equals(ViewProps.FONT_SIZE)) {
                    c10 = 27;
                    break;
                }
                break;
            case 401643183:
                if (str.equals("strokeDasharray")) {
                    c10 = 28;
                    break;
                }
                break;
            case 917656469:
                if (str.equals("clipPath")) {
                    c10 = 29;
                    break;
                }
                break;
            case 917735020:
                if (str.equals("clipRule")) {
                    c10 = 30;
                    break;
                }
                break;
            case 1027575302:
                if (str.equals("strokeLinecap")) {
                    c10 = 31;
                    break;
                }
                break;
            case 1671764162:
                if (str.equals(ViewProps.DISPLAY)) {
                    c10 = ' ';
                    break;
                }
                break;
            case 1790285174:
                if (str.equals("strokeLinejoin")) {
                    c10 = '!';
                    break;
                }
                break;
            case 1847674614:
                if (str.equals("responsible")) {
                    c10 = '\"';
                    break;
                }
                break;
            case 1924065902:
                if (str.equals("strokeWidth")) {
                    c10 = '#';
                    break;
                }
                break;
            case 2037673858:
                if (str.equals("maskContentUnits")) {
                    c10 = '$';
                    break;
                }
                break;
        }
        float f10 = 0.0f;
        float f11 = 1.0f;
        String str2 = null;
        switch (c10) {
            case 0:
                RNSVGMaskManagerInterface rNSVGMaskManagerInterface = (RNSVGMaskManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGMaskManagerInterface.setFilter(t10, str2);
                return;
            case 1:
                U u10 = this.mViewManager;
                if (obj != null) {
                    f11 = ((Double) obj).floatValue();
                }
                u10.setOpacity(t10, f11);
                return;
            case 2:
                ((RNSVGMaskManagerInterface) this.mViewManager).setHeight(t10, new DynamicFromObject(obj));
                return;
            case 3:
                ((RNSVGMaskManagerInterface) this.mViewManager).setMatrix(t10, (ReadableArray) obj);
                return;
            case 4:
                ((RNSVGMaskManagerInterface) this.mViewManager).setPropList(t10, (ReadableArray) obj);
                return;
            case 5:
                RNSVGMaskManagerInterface rNSVGMaskManagerInterface2 = (RNSVGMaskManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGMaskManagerInterface2.setMarkerEnd(t10, str2);
                return;
            case 6:
                RNSVGMaskManagerInterface rNSVGMaskManagerInterface3 = (RNSVGMaskManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGMaskManagerInterface3.setMarkerMid(t10, str2);
                return;
            case 7:
                ((RNSVGMaskManagerInterface) this.mViewManager).setStroke(t10, new DynamicFromObject(obj));
                return;
            case '\b':
                ((RNSVGMaskManagerInterface) this.mViewManager).setFontWeight(t10, new DynamicFromObject(obj));
                return;
            case '\t':
                RNSVGMaskManagerInterface rNSVGMaskManagerInterface4 = (RNSVGMaskManagerInterface) this.mViewManager;
                if (obj != null) {
                    i10 = ((Double) obj).intValue();
                }
                rNSVGMaskManagerInterface4.setFillRule(t10, i10);
                return;
            case '\n':
                RNSVGMaskManagerInterface rNSVGMaskManagerInterface5 = (RNSVGMaskManagerInterface) this.mViewManager;
                if (obj != null) {
                    f11 = ((Double) obj).floatValue();
                }
                rNSVGMaskManagerInterface5.setStrokeOpacity(t10, f11);
                return;
            case 11:
                RNSVGMaskManagerInterface rNSVGMaskManagerInterface6 = (RNSVGMaskManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGMaskManagerInterface6.setPointerEvents(t10, str2);
                return;
            case '\f':
                RNSVGMaskManagerInterface rNSVGMaskManagerInterface7 = (RNSVGMaskManagerInterface) this.mViewManager;
                if (obj != null) {
                    i11 = ((Double) obj).intValue();
                }
                rNSVGMaskManagerInterface7.setMaskUnits(t10, i11);
                return;
            case '\r':
                RNSVGMaskManagerInterface rNSVGMaskManagerInterface8 = (RNSVGMaskManagerInterface) this.mViewManager;
                if (obj != null) {
                    f11 = ((Double) obj).floatValue();
                }
                rNSVGMaskManagerInterface8.setFillOpacity(t10, f11);
                return;
            case 14:
                RNSVGMaskManagerInterface rNSVGMaskManagerInterface9 = (RNSVGMaskManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSVGMaskManagerInterface9.setStrokeDashoffset(t10, f10);
                return;
            case 15:
                ((RNSVGMaskManagerInterface) this.mViewManager).setX(t10, new DynamicFromObject(obj));
                return;
            case 16:
                ((RNSVGMaskManagerInterface) this.mViewManager).setY(t10, new DynamicFromObject(obj));
                return;
            case 17:
                ((RNSVGMaskManagerInterface) this.mViewManager).setFill(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                ((RNSVGMaskManagerInterface) this.mViewManager).setFont(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                RNSVGMaskManagerInterface rNSVGMaskManagerInterface10 = (RNSVGMaskManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGMaskManagerInterface10.setMask(t10, str2);
                return;
            case 20:
                RNSVGMaskManagerInterface rNSVGMaskManagerInterface11 = (RNSVGMaskManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGMaskManagerInterface11.setName(t10, str2);
                return;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                RNSVGMaskManagerInterface rNSVGMaskManagerInterface12 = (RNSVGMaskManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSVGMaskManagerInterface12.setStrokeMiterlimit(t10, f10);
                return;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                ((RNSVGMaskManagerInterface) this.mViewManager).setColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 23:
                RNSVGMaskManagerInterface rNSVGMaskManagerInterface13 = (RNSVGMaskManagerInterface) this.mViewManager;
                if (obj != null) {
                    i17 = ((Double) obj).intValue();
                }
                rNSVGMaskManagerInterface13.setVectorEffect(t10, i17);
                return;
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                ((RNSVGMaskManagerInterface) this.mViewManager).setWidth(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                RNSVGMaskManagerInterface rNSVGMaskManagerInterface14 = (RNSVGMaskManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGMaskManagerInterface14.setMarkerStart(t10, str2);
                return;
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                RNSVGMaskManagerInterface rNSVGMaskManagerInterface15 = (RNSVGMaskManagerInterface) this.mViewManager;
                if (obj != null) {
                    i16 = ((Double) obj).intValue();
                }
                rNSVGMaskManagerInterface15.setMaskType(t10, i16);
                return;
            case 27:
                ((RNSVGMaskManagerInterface) this.mViewManager).setFontSize(t10, new DynamicFromObject(obj));
                return;
            case 28:
                ((RNSVGMaskManagerInterface) this.mViewManager).setStrokeDasharray(t10, new DynamicFromObject(obj));
                return;
            case 29:
                RNSVGMaskManagerInterface rNSVGMaskManagerInterface16 = (RNSVGMaskManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGMaskManagerInterface16.setClipPath(t10, str2);
                return;
            case 30:
                RNSVGMaskManagerInterface rNSVGMaskManagerInterface17 = (RNSVGMaskManagerInterface) this.mViewManager;
                if (obj != null) {
                    i15 = ((Double) obj).intValue();
                }
                rNSVGMaskManagerInterface17.setClipRule(t10, i15);
                return;
            case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                RNSVGMaskManagerInterface rNSVGMaskManagerInterface18 = (RNSVGMaskManagerInterface) this.mViewManager;
                if (obj != null) {
                    i14 = ((Double) obj).intValue();
                }
                rNSVGMaskManagerInterface18.setStrokeLinecap(t10, i14);
                return;
            case ' ':
                RNSVGMaskManagerInterface rNSVGMaskManagerInterface19 = (RNSVGMaskManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGMaskManagerInterface19.setDisplay(t10, str2);
                return;
            case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                RNSVGMaskManagerInterface rNSVGMaskManagerInterface20 = (RNSVGMaskManagerInterface) this.mViewManager;
                if (obj != null) {
                    i13 = ((Double) obj).intValue();
                }
                rNSVGMaskManagerInterface20.setStrokeLinejoin(t10, i13);
                return;
            case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                RNSVGMaskManagerInterface rNSVGMaskManagerInterface21 = (RNSVGMaskManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNSVGMaskManagerInterface21.setResponsible(t10, z10);
                return;
            case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                ((RNSVGMaskManagerInterface) this.mViewManager).setStrokeWidth(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                RNSVGMaskManagerInterface rNSVGMaskManagerInterface22 = (RNSVGMaskManagerInterface) this.mViewManager;
                if (obj != null) {
                    i12 = ((Double) obj).intValue();
                }
                rNSVGMaskManagerInterface22.setMaskContentUnits(t10, i12);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
