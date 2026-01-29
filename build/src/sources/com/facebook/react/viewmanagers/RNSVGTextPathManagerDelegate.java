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
import com.facebook.react.viewmanagers.RNSVGTextPathManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSVGTextPathManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSVGTextPathManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSVGTextPathManagerDelegate(BaseViewManager baseViewManager) {
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
            case -2012158909:
                if (str.equals("spacing")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1993948267:
                if (str.equals("startOffset")) {
                    c10 = 1;
                    break;
                }
                break;
            case -1603134955:
                if (str.equals("lengthAdjust")) {
                    c10 = 2;
                    break;
                }
                break;
            case -1274492040:
                if (str.equals(ViewProps.FILTER)) {
                    c10 = 3;
                    break;
                }
                break;
            case -1267206133:
                if (str.equals(ViewProps.OPACITY)) {
                    c10 = 4;
                    break;
                }
                break;
            case -1171891896:
                if (str.equals("alignmentBaseline")) {
                    c10 = 5;
                    break;
                }
                break;
            case -1139902161:
                if (str.equals("verticalAlign")) {
                    c10 = 6;
                    break;
                }
                break;
            case -1081239615:
                if (str.equals("matrix")) {
                    c10 = 7;
                    break;
                }
                break;
            case -1077554975:
                if (str.equals("method")) {
                    c10 = '\b';
                    break;
                }
                break;
            case -993894751:
                if (str.equals("propList")) {
                    c10 = '\t';
                    break;
                }
                break;
            case -933864895:
                if (str.equals("markerEnd")) {
                    c10 = '\n';
                    break;
                }
                break;
            case -933857362:
                if (str.equals("markerMid")) {
                    c10 = 11;
                    break;
                }
                break;
            case -925180581:
                if (str.equals("rotate")) {
                    c10 = '\f';
                    break;
                }
                break;
            case -891980232:
                if (str.equals("stroke")) {
                    c10 = '\r';
                    break;
                }
                break;
            case -734428249:
                if (str.equals(ViewProps.FONT_WEIGHT)) {
                    c10 = 14;
                    break;
                }
                break;
            case -729118945:
                if (str.equals("fillRule")) {
                    c10 = 15;
                    break;
                }
                break;
            case -416535885:
                if (str.equals("strokeOpacity")) {
                    c10 = 16;
                    break;
                }
                break;
            case -293492298:
                if (str.equals(ViewProps.POINTER_EVENTS)) {
                    c10 = 17;
                    break;
                }
                break;
            case -53677816:
                if (str.equals("fillOpacity")) {
                    c10 = 18;
                    break;
                }
                break;
            case -44578051:
                if (str.equals("strokeDashoffset")) {
                    c10 = 19;
                    break;
                }
                break;
            case 120:
                if (str.equals("x")) {
                    c10 = 20;
                    break;
                }
                break;
            case 121:
                if (str.equals("y")) {
                    c10 = 21;
                    break;
                }
                break;
            case 3220:
                if (str.equals("dx")) {
                    c10 = 22;
                    break;
                }
                break;
            case 3221:
                if (str.equals("dy")) {
                    c10 = 23;
                    break;
                }
                break;
            case 3143043:
                if (str.equals("fill")) {
                    c10 = 24;
                    break;
                }
                break;
            case 3148879:
                if (str.equals("font")) {
                    c10 = 25;
                    break;
                }
                break;
            case 3211051:
                if (str.equals("href")) {
                    c10 = 26;
                    break;
                }
                break;
            case 3344108:
                if (str.equals("mask")) {
                    c10 = 27;
                    break;
                }
                break;
            case 3373707:
                if (str.equals(StackTraceHelper.NAME_KEY)) {
                    c10 = 28;
                    break;
                }
                break;
            case 3530071:
                if (str.equals("side")) {
                    c10 = 29;
                    break;
                }
                break;
            case 78845486:
                if (str.equals("strokeMiterlimit")) {
                    c10 = 30;
                    break;
                }
                break;
            case 94842723:
                if (str.equals(ViewProps.COLOR)) {
                    c10 = 31;
                    break;
                }
                break;
            case 104482996:
                if (str.equals("vectorEffect")) {
                    c10 = ' ';
                    break;
                }
                break;
            case 217109576:
                if (str.equals("markerStart")) {
                    c10 = '!';
                    break;
                }
                break;
            case 275888445:
                if (str.equals("baselineShift")) {
                    c10 = '\"';
                    break;
                }
                break;
            case 365601008:
                if (str.equals(ViewProps.FONT_SIZE)) {
                    c10 = '#';
                    break;
                }
                break;
            case 401643183:
                if (str.equals("strokeDasharray")) {
                    c10 = '$';
                    break;
                }
                break;
            case 778043962:
                if (str.equals("inlineSize")) {
                    c10 = '%';
                    break;
                }
                break;
            case 917656469:
                if (str.equals("clipPath")) {
                    c10 = '&';
                    break;
                }
                break;
            case 917735020:
                if (str.equals("clipRule")) {
                    c10 = '\'';
                    break;
                }
                break;
            case 1027575302:
                if (str.equals("strokeLinecap")) {
                    c10 = '(';
                    break;
                }
                break;
            case 1054434908:
                if (str.equals("midLine")) {
                    c10 = ')';
                    break;
                }
                break;
            case 1637488243:
                if (str.equals("textLength")) {
                    c10 = '*';
                    break;
                }
                break;
            case 1671764162:
                if (str.equals(ViewProps.DISPLAY)) {
                    c10 = '+';
                    break;
                }
                break;
            case 1790285174:
                if (str.equals("strokeLinejoin")) {
                    c10 = ',';
                    break;
                }
                break;
            case 1847674614:
                if (str.equals("responsible")) {
                    c10 = '-';
                    break;
                }
                break;
            case 1924065902:
                if (str.equals("strokeWidth")) {
                    c10 = '.';
                    break;
                }
                break;
        }
        float f10 = 0.0f;
        float f11 = 1.0f;
        String str2 = null;
        switch (c10) {
            case 0:
                RNSVGTextPathManagerInterface rNSVGTextPathManagerInterface = (RNSVGTextPathManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGTextPathManagerInterface.setSpacing(t10, str2);
                return;
            case 1:
                ((RNSVGTextPathManagerInterface) this.mViewManager).setStartOffset(t10, new DynamicFromObject(obj));
                return;
            case 2:
                RNSVGTextPathManagerInterface rNSVGTextPathManagerInterface2 = (RNSVGTextPathManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGTextPathManagerInterface2.setLengthAdjust(t10, str2);
                return;
            case 3:
                RNSVGTextPathManagerInterface rNSVGTextPathManagerInterface3 = (RNSVGTextPathManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGTextPathManagerInterface3.setFilter(t10, str2);
                return;
            case 4:
                U u10 = this.mViewManager;
                if (obj != null) {
                    f11 = ((Double) obj).floatValue();
                }
                u10.setOpacity(t10, f11);
                return;
            case 5:
                RNSVGTextPathManagerInterface rNSVGTextPathManagerInterface4 = (RNSVGTextPathManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGTextPathManagerInterface4.setAlignmentBaseline(t10, str2);
                return;
            case 6:
                ((RNSVGTextPathManagerInterface) this.mViewManager).setVerticalAlign(t10, new DynamicFromObject(obj));
                return;
            case 7:
                ((RNSVGTextPathManagerInterface) this.mViewManager).setMatrix(t10, (ReadableArray) obj);
                return;
            case '\b':
                RNSVGTextPathManagerInterface rNSVGTextPathManagerInterface5 = (RNSVGTextPathManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGTextPathManagerInterface5.setMethod(t10, str2);
                return;
            case '\t':
                ((RNSVGTextPathManagerInterface) this.mViewManager).setPropList(t10, (ReadableArray) obj);
                return;
            case '\n':
                RNSVGTextPathManagerInterface rNSVGTextPathManagerInterface6 = (RNSVGTextPathManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGTextPathManagerInterface6.setMarkerEnd(t10, str2);
                return;
            case 11:
                RNSVGTextPathManagerInterface rNSVGTextPathManagerInterface7 = (RNSVGTextPathManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGTextPathManagerInterface7.setMarkerMid(t10, str2);
                return;
            case '\f':
                ((RNSVGTextPathManagerInterface) this.mViewManager).setRotate(t10, new DynamicFromObject(obj));
                return;
            case '\r':
                ((RNSVGTextPathManagerInterface) this.mViewManager).setStroke(t10, new DynamicFromObject(obj));
                return;
            case 14:
                ((RNSVGTextPathManagerInterface) this.mViewManager).setFontWeight(t10, new DynamicFromObject(obj));
                return;
            case 15:
                RNSVGTextPathManagerInterface rNSVGTextPathManagerInterface8 = (RNSVGTextPathManagerInterface) this.mViewManager;
                if (obj != null) {
                    i10 = ((Double) obj).intValue();
                }
                rNSVGTextPathManagerInterface8.setFillRule(t10, i10);
                return;
            case 16:
                RNSVGTextPathManagerInterface rNSVGTextPathManagerInterface9 = (RNSVGTextPathManagerInterface) this.mViewManager;
                if (obj != null) {
                    f11 = ((Double) obj).floatValue();
                }
                rNSVGTextPathManagerInterface9.setStrokeOpacity(t10, f11);
                return;
            case 17:
                RNSVGTextPathManagerInterface rNSVGTextPathManagerInterface10 = (RNSVGTextPathManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGTextPathManagerInterface10.setPointerEvents(t10, str2);
                return;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                RNSVGTextPathManagerInterface rNSVGTextPathManagerInterface11 = (RNSVGTextPathManagerInterface) this.mViewManager;
                if (obj != null) {
                    f11 = ((Double) obj).floatValue();
                }
                rNSVGTextPathManagerInterface11.setFillOpacity(t10, f11);
                return;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                RNSVGTextPathManagerInterface rNSVGTextPathManagerInterface12 = (RNSVGTextPathManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSVGTextPathManagerInterface12.setStrokeDashoffset(t10, f10);
                return;
            case 20:
                ((RNSVGTextPathManagerInterface) this.mViewManager).setX(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                ((RNSVGTextPathManagerInterface) this.mViewManager).setY(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                ((RNSVGTextPathManagerInterface) this.mViewManager).setDx(t10, new DynamicFromObject(obj));
                return;
            case 23:
                ((RNSVGTextPathManagerInterface) this.mViewManager).setDy(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                ((RNSVGTextPathManagerInterface) this.mViewManager).setFill(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                ((RNSVGTextPathManagerInterface) this.mViewManager).setFont(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                RNSVGTextPathManagerInterface rNSVGTextPathManagerInterface13 = (RNSVGTextPathManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGTextPathManagerInterface13.setHref(t10, str2);
                return;
            case 27:
                RNSVGTextPathManagerInterface rNSVGTextPathManagerInterface14 = (RNSVGTextPathManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGTextPathManagerInterface14.setMask(t10, str2);
                return;
            case 28:
                RNSVGTextPathManagerInterface rNSVGTextPathManagerInterface15 = (RNSVGTextPathManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGTextPathManagerInterface15.setName(t10, str2);
                return;
            case 29:
                RNSVGTextPathManagerInterface rNSVGTextPathManagerInterface16 = (RNSVGTextPathManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGTextPathManagerInterface16.setSide(t10, str2);
                return;
            case 30:
                RNSVGTextPathManagerInterface rNSVGTextPathManagerInterface17 = (RNSVGTextPathManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSVGTextPathManagerInterface17.setStrokeMiterlimit(t10, f10);
                return;
            case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                ((RNSVGTextPathManagerInterface) this.mViewManager).setColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case ' ':
                RNSVGTextPathManagerInterface rNSVGTextPathManagerInterface18 = (RNSVGTextPathManagerInterface) this.mViewManager;
                if (obj != null) {
                    i11 = ((Double) obj).intValue();
                }
                rNSVGTextPathManagerInterface18.setVectorEffect(t10, i11);
                return;
            case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                RNSVGTextPathManagerInterface rNSVGTextPathManagerInterface19 = (RNSVGTextPathManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGTextPathManagerInterface19.setMarkerStart(t10, str2);
                return;
            case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                ((RNSVGTextPathManagerInterface) this.mViewManager).setBaselineShift(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                ((RNSVGTextPathManagerInterface) this.mViewManager).setFontSize(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                ((RNSVGTextPathManagerInterface) this.mViewManager).setStrokeDasharray(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                ((RNSVGTextPathManagerInterface) this.mViewManager).setInlineSize(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                RNSVGTextPathManagerInterface rNSVGTextPathManagerInterface20 = (RNSVGTextPathManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGTextPathManagerInterface20.setClipPath(t10, str2);
                return;
            case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                RNSVGTextPathManagerInterface rNSVGTextPathManagerInterface21 = (RNSVGTextPathManagerInterface) this.mViewManager;
                if (obj != null) {
                    i14 = ((Double) obj).intValue();
                }
                rNSVGTextPathManagerInterface21.setClipRule(t10, i14);
                return;
            case '(':
                RNSVGTextPathManagerInterface rNSVGTextPathManagerInterface22 = (RNSVGTextPathManagerInterface) this.mViewManager;
                if (obj != null) {
                    i13 = ((Double) obj).intValue();
                }
                rNSVGTextPathManagerInterface22.setStrokeLinecap(t10, i13);
                return;
            case ')':
                RNSVGTextPathManagerInterface rNSVGTextPathManagerInterface23 = (RNSVGTextPathManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGTextPathManagerInterface23.setMidLine(t10, str2);
                return;
            case '*':
                ((RNSVGTextPathManagerInterface) this.mViewManager).setTextLength(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.FORWARD_HEADER /* 43 */:
                RNSVGTextPathManagerInterface rNSVGTextPathManagerInterface24 = (RNSVGTextPathManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGTextPathManagerInterface24.setDisplay(t10, str2);
                return;
            case ChatViewRecyclerTypes.FORWARD_BREADCRUMB /* 44 */:
                RNSVGTextPathManagerInterface rNSVGTextPathManagerInterface25 = (RNSVGTextPathManagerInterface) this.mViewManager;
                if (obj != null) {
                    i12 = ((Double) obj).intValue();
                }
                rNSVGTextPathManagerInterface25.setStrokeLinejoin(t10, i12);
                return;
            case ChatViewRecyclerTypes.REACTION_BURST_REACTION /* 45 */:
                RNSVGTextPathManagerInterface rNSVGTextPathManagerInterface26 = (RNSVGTextPathManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNSVGTextPathManagerInterface26.setResponsible(t10, z10);
                return;
            case '.':
                ((RNSVGTextPathManagerInterface) this.mViewManager).setStrokeWidth(t10, new DynamicFromObject(obj));
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
