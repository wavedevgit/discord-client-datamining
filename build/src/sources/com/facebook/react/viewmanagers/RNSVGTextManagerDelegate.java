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
import com.facebook.react.viewmanagers.RNSVGTextManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSVGTextManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSVGTextManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSVGTextManagerDelegate(BaseViewManager baseViewManager) {
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
            case -1603134955:
                if (str.equals("lengthAdjust")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1274492040:
                if (str.equals(ViewProps.FILTER)) {
                    c10 = 1;
                    break;
                }
                break;
            case -1267206133:
                if (str.equals(ViewProps.OPACITY)) {
                    c10 = 2;
                    break;
                }
                break;
            case -1171891896:
                if (str.equals("alignmentBaseline")) {
                    c10 = 3;
                    break;
                }
                break;
            case -1139902161:
                if (str.equals("verticalAlign")) {
                    c10 = 4;
                    break;
                }
                break;
            case -1081239615:
                if (str.equals("matrix")) {
                    c10 = 5;
                    break;
                }
                break;
            case -993894751:
                if (str.equals("propList")) {
                    c10 = 6;
                    break;
                }
                break;
            case -933864895:
                if (str.equals("markerEnd")) {
                    c10 = 7;
                    break;
                }
                break;
            case -933857362:
                if (str.equals("markerMid")) {
                    c10 = '\b';
                    break;
                }
                break;
            case -925180581:
                if (str.equals("rotate")) {
                    c10 = '\t';
                    break;
                }
                break;
            case -891980232:
                if (str.equals("stroke")) {
                    c10 = '\n';
                    break;
                }
                break;
            case -734428249:
                if (str.equals(ViewProps.FONT_WEIGHT)) {
                    c10 = 11;
                    break;
                }
                break;
            case -729118945:
                if (str.equals("fillRule")) {
                    c10 = '\f';
                    break;
                }
                break;
            case -416535885:
                if (str.equals("strokeOpacity")) {
                    c10 = '\r';
                    break;
                }
                break;
            case -293492298:
                if (str.equals(ViewProps.POINTER_EVENTS)) {
                    c10 = 14;
                    break;
                }
                break;
            case -53677816:
                if (str.equals("fillOpacity")) {
                    c10 = 15;
                    break;
                }
                break;
            case -44578051:
                if (str.equals("strokeDashoffset")) {
                    c10 = 16;
                    break;
                }
                break;
            case 120:
                if (str.equals("x")) {
                    c10 = 17;
                    break;
                }
                break;
            case 121:
                if (str.equals("y")) {
                    c10 = 18;
                    break;
                }
                break;
            case 3220:
                if (str.equals("dx")) {
                    c10 = 19;
                    break;
                }
                break;
            case 3221:
                if (str.equals("dy")) {
                    c10 = 20;
                    break;
                }
                break;
            case 3143043:
                if (str.equals("fill")) {
                    c10 = 21;
                    break;
                }
                break;
            case 3148879:
                if (str.equals("font")) {
                    c10 = 22;
                    break;
                }
                break;
            case 3344108:
                if (str.equals("mask")) {
                    c10 = 23;
                    break;
                }
                break;
            case 3373707:
                if (str.equals(StackTraceHelper.NAME_KEY)) {
                    c10 = 24;
                    break;
                }
                break;
            case 78845486:
                if (str.equals("strokeMiterlimit")) {
                    c10 = 25;
                    break;
                }
                break;
            case 94842723:
                if (str.equals(ViewProps.COLOR)) {
                    c10 = 26;
                    break;
                }
                break;
            case 104482996:
                if (str.equals("vectorEffect")) {
                    c10 = 27;
                    break;
                }
                break;
            case 217109576:
                if (str.equals("markerStart")) {
                    c10 = 28;
                    break;
                }
                break;
            case 275888445:
                if (str.equals("baselineShift")) {
                    c10 = 29;
                    break;
                }
                break;
            case 365601008:
                if (str.equals(ViewProps.FONT_SIZE)) {
                    c10 = 30;
                    break;
                }
                break;
            case 401643183:
                if (str.equals("strokeDasharray")) {
                    c10 = 31;
                    break;
                }
                break;
            case 778043962:
                if (str.equals("inlineSize")) {
                    c10 = ' ';
                    break;
                }
                break;
            case 917656469:
                if (str.equals("clipPath")) {
                    c10 = '!';
                    break;
                }
                break;
            case 917735020:
                if (str.equals("clipRule")) {
                    c10 = '\"';
                    break;
                }
                break;
            case 1027575302:
                if (str.equals("strokeLinecap")) {
                    c10 = '#';
                    break;
                }
                break;
            case 1637488243:
                if (str.equals("textLength")) {
                    c10 = '$';
                    break;
                }
                break;
            case 1671764162:
                if (str.equals(ViewProps.DISPLAY)) {
                    c10 = '%';
                    break;
                }
                break;
            case 1790285174:
                if (str.equals("strokeLinejoin")) {
                    c10 = '&';
                    break;
                }
                break;
            case 1847674614:
                if (str.equals("responsible")) {
                    c10 = '\'';
                    break;
                }
                break;
            case 1924065902:
                if (str.equals("strokeWidth")) {
                    c10 = '(';
                    break;
                }
                break;
        }
        float f10 = 0.0f;
        float f11 = 1.0f;
        String str2 = null;
        switch (c10) {
            case 0:
                RNSVGTextManagerInterface rNSVGTextManagerInterface = (RNSVGTextManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGTextManagerInterface.setLengthAdjust(t10, str2);
                return;
            case 1:
                RNSVGTextManagerInterface rNSVGTextManagerInterface2 = (RNSVGTextManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGTextManagerInterface2.setFilter(t10, str2);
                return;
            case 2:
                U u10 = this.mViewManager;
                if (obj != null) {
                    f11 = ((Double) obj).floatValue();
                }
                u10.setOpacity(t10, f11);
                return;
            case 3:
                RNSVGTextManagerInterface rNSVGTextManagerInterface3 = (RNSVGTextManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGTextManagerInterface3.setAlignmentBaseline(t10, str2);
                return;
            case 4:
                ((RNSVGTextManagerInterface) this.mViewManager).setVerticalAlign(t10, new DynamicFromObject(obj));
                return;
            case 5:
                ((RNSVGTextManagerInterface) this.mViewManager).setMatrix(t10, (ReadableArray) obj);
                return;
            case 6:
                ((RNSVGTextManagerInterface) this.mViewManager).setPropList(t10, (ReadableArray) obj);
                return;
            case 7:
                RNSVGTextManagerInterface rNSVGTextManagerInterface4 = (RNSVGTextManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGTextManagerInterface4.setMarkerEnd(t10, str2);
                return;
            case '\b':
                RNSVGTextManagerInterface rNSVGTextManagerInterface5 = (RNSVGTextManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGTextManagerInterface5.setMarkerMid(t10, str2);
                return;
            case '\t':
                ((RNSVGTextManagerInterface) this.mViewManager).setRotate(t10, new DynamicFromObject(obj));
                return;
            case '\n':
                ((RNSVGTextManagerInterface) this.mViewManager).setStroke(t10, new DynamicFromObject(obj));
                return;
            case 11:
                ((RNSVGTextManagerInterface) this.mViewManager).setFontWeight(t10, new DynamicFromObject(obj));
                return;
            case '\f':
                RNSVGTextManagerInterface rNSVGTextManagerInterface6 = (RNSVGTextManagerInterface) this.mViewManager;
                if (obj != null) {
                    i10 = ((Double) obj).intValue();
                }
                rNSVGTextManagerInterface6.setFillRule(t10, i10);
                return;
            case '\r':
                RNSVGTextManagerInterface rNSVGTextManagerInterface7 = (RNSVGTextManagerInterface) this.mViewManager;
                if (obj != null) {
                    f11 = ((Double) obj).floatValue();
                }
                rNSVGTextManagerInterface7.setStrokeOpacity(t10, f11);
                return;
            case 14:
                RNSVGTextManagerInterface rNSVGTextManagerInterface8 = (RNSVGTextManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGTextManagerInterface8.setPointerEvents(t10, str2);
                return;
            case 15:
                RNSVGTextManagerInterface rNSVGTextManagerInterface9 = (RNSVGTextManagerInterface) this.mViewManager;
                if (obj != null) {
                    f11 = ((Double) obj).floatValue();
                }
                rNSVGTextManagerInterface9.setFillOpacity(t10, f11);
                return;
            case 16:
                RNSVGTextManagerInterface rNSVGTextManagerInterface10 = (RNSVGTextManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSVGTextManagerInterface10.setStrokeDashoffset(t10, f10);
                return;
            case 17:
                ((RNSVGTextManagerInterface) this.mViewManager).setX(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                ((RNSVGTextManagerInterface) this.mViewManager).setY(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                ((RNSVGTextManagerInterface) this.mViewManager).setDx(t10, new DynamicFromObject(obj));
                return;
            case 20:
                ((RNSVGTextManagerInterface) this.mViewManager).setDy(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                ((RNSVGTextManagerInterface) this.mViewManager).setFill(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                ((RNSVGTextManagerInterface) this.mViewManager).setFont(t10, new DynamicFromObject(obj));
                return;
            case 23:
                RNSVGTextManagerInterface rNSVGTextManagerInterface11 = (RNSVGTextManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGTextManagerInterface11.setMask(t10, str2);
                return;
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                RNSVGTextManagerInterface rNSVGTextManagerInterface12 = (RNSVGTextManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGTextManagerInterface12.setName(t10, str2);
                return;
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                RNSVGTextManagerInterface rNSVGTextManagerInterface13 = (RNSVGTextManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSVGTextManagerInterface13.setStrokeMiterlimit(t10, f10);
                return;
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                ((RNSVGTextManagerInterface) this.mViewManager).setColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 27:
                RNSVGTextManagerInterface rNSVGTextManagerInterface14 = (RNSVGTextManagerInterface) this.mViewManager;
                if (obj != null) {
                    i11 = ((Double) obj).intValue();
                }
                rNSVGTextManagerInterface14.setVectorEffect(t10, i11);
                return;
            case 28:
                RNSVGTextManagerInterface rNSVGTextManagerInterface15 = (RNSVGTextManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGTextManagerInterface15.setMarkerStart(t10, str2);
                return;
            case 29:
                ((RNSVGTextManagerInterface) this.mViewManager).setBaselineShift(t10, new DynamicFromObject(obj));
                return;
            case 30:
                ((RNSVGTextManagerInterface) this.mViewManager).setFontSize(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                ((RNSVGTextManagerInterface) this.mViewManager).setStrokeDasharray(t10, new DynamicFromObject(obj));
                return;
            case ' ':
                ((RNSVGTextManagerInterface) this.mViewManager).setInlineSize(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                RNSVGTextManagerInterface rNSVGTextManagerInterface16 = (RNSVGTextManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGTextManagerInterface16.setClipPath(t10, str2);
                return;
            case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                RNSVGTextManagerInterface rNSVGTextManagerInterface17 = (RNSVGTextManagerInterface) this.mViewManager;
                if (obj != null) {
                    i14 = ((Double) obj).intValue();
                }
                rNSVGTextManagerInterface17.setClipRule(t10, i14);
                return;
            case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                RNSVGTextManagerInterface rNSVGTextManagerInterface18 = (RNSVGTextManagerInterface) this.mViewManager;
                if (obj != null) {
                    i13 = ((Double) obj).intValue();
                }
                rNSVGTextManagerInterface18.setStrokeLinecap(t10, i13);
                return;
            case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                ((RNSVGTextManagerInterface) this.mViewManager).setTextLength(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                RNSVGTextManagerInterface rNSVGTextManagerInterface19 = (RNSVGTextManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGTextManagerInterface19.setDisplay(t10, str2);
                return;
            case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                RNSVGTextManagerInterface rNSVGTextManagerInterface20 = (RNSVGTextManagerInterface) this.mViewManager;
                if (obj != null) {
                    i12 = ((Double) obj).intValue();
                }
                rNSVGTextManagerInterface20.setStrokeLinejoin(t10, i12);
                return;
            case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                RNSVGTextManagerInterface rNSVGTextManagerInterface21 = (RNSVGTextManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNSVGTextManagerInterface21.setResponsible(t10, z10);
                return;
            case '(':
                ((RNSVGTextManagerInterface) this.mViewManager).setStrokeWidth(t10, new DynamicFromObject(obj));
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
