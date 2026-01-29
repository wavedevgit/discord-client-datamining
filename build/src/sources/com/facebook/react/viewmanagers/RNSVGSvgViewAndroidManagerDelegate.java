package com.facebook.react.viewmanagers;

import android.view.View;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.bridge.ColorPropConverter;
import com.facebook.react.bridge.DynamicFromObject;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.ReactClippingViewGroupHelper;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.viewmanagers.RNSVGSvgViewAndroidManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSVGSvgViewAndroidManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSVGSvgViewAndroidManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSVGSvgViewAndroidManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        str.getClass();
        boolean z10 = false;
        int i10 = 0;
        int i11 = 0;
        boolean z11 = false;
        boolean z12 = false;
        int i12 = 0;
        int i13 = 0;
        boolean z13 = false;
        int i14 = 0;
        int i15 = 0;
        boolean z14 = false;
        char c10 = 65535;
        switch (str.hashCode()) {
            case -2064426617:
                if (str.equals("bbHeight")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1989576717:
                if (str.equals(ViewProps.BORDER_RIGHT_COLOR)) {
                    c10 = 1;
                    break;
                }
                break;
            case -1697814026:
                if (str.equals("backfaceVisibility")) {
                    c10 = 2;
                    break;
                }
                break;
            case -1567958285:
                if (str.equals("vbHeight")) {
                    c10 = 3;
                    break;
                }
                break;
            case -1470826662:
                if (str.equals(ViewProps.BORDER_TOP_COLOR)) {
                    c10 = 4;
                    break;
                }
                break;
            case -1308858324:
                if (str.equals(ViewProps.BORDER_BOTTOM_COLOR)) {
                    c10 = 5;
                    break;
                }
                break;
            case -1228066334:
                if (str.equals("borderTopLeftRadius")) {
                    c10 = 6;
                    break;
                }
                break;
            case -1141400650:
                if (str.equals("accessible")) {
                    c10 = 7;
                    break;
                }
                break;
            case -1122140597:
                if (str.equals(ViewProps.BORDER_TOP_START_RADIUS)) {
                    c10 = '\b';
                    break;
                }
                break;
            case -867333731:
                if (str.equals(ViewProps.BORDER_BOTTOM_START_RADIUS)) {
                    c10 = '\t';
                    break;
                }
                break;
            case -679581037:
                if (str.equals("hasTVPreferredFocus")) {
                    c10 = '\n';
                    break;
                }
                break;
            case -631506969:
                if (str.equals("nextFocusDown")) {
                    c10 = 11;
                    break;
                }
                break;
            case -631278772:
                if (str.equals("nextFocusLeft")) {
                    c10 = '\f';
                    break;
                }
                break;
            case -483490364:
                if (str.equals(ViewProps.BORDER_TOP_END_RADIUS)) {
                    c10 = '\r';
                    break;
                }
                break;
            case -329721498:
                if (str.equals("bbWidth")) {
                    c10 = 14;
                    break;
                }
                break;
            case -293492298:
                if (str.equals(ViewProps.POINTER_EVENTS)) {
                    c10 = 15;
                    break;
                }
                break;
            case -252105751:
                if (str.equals(ReactClippingViewGroupHelper.PROP_REMOVE_CLIPPED_SUBVIEWS)) {
                    c10 = 16;
                    break;
                }
                break;
            case -242276144:
                if (str.equals(ViewProps.BORDER_LEFT_COLOR)) {
                    c10 = 17;
                    break;
                }
                break;
            case -223134121:
                if (str.equals(ViewProps.BORDER_START_END_RADIUS)) {
                    c10 = 18;
                    break;
                }
                break;
            case -148030058:
                if (str.equals(ViewProps.BORDER_BOTTOM_END_RADIUS)) {
                    c10 = 19;
                    break;
                }
                break;
            case -109689771:
                if (str.equals("nativeForegroundAndroid")) {
                    c10 = 20;
                    break;
                }
                break;
            case -27894242:
                if (str.equals(ViewProps.BORDER_START_START_RADIUS)) {
                    c10 = 21;
                    break;
                }
                break;
            case 3351622:
                if (str.equals("minX")) {
                    c10 = 22;
                    break;
                }
                break;
            case 3351623:
                if (str.equals("minY")) {
                    c10 = 23;
                    break;
                }
                break;
            case 92903173:
                if (str.equals("align")) {
                    c10 = 24;
                    break;
                }
                break;
            case 94842723:
                if (str.equals(ViewProps.COLOR)) {
                    c10 = 25;
                    break;
                }
                break;
            case 240482938:
                if (str.equals("vbWidth")) {
                    c10 = 26;
                    break;
                }
                break;
            case 306963138:
                if (str.equals(ViewProps.BORDER_BLOCK_START_COLOR)) {
                    c10 = 27;
                    break;
                }
                break;
            case 333432965:
                if (str.equals("borderTopRightRadius")) {
                    c10 = 28;
                    break;
                }
                break;
            case 503397728:
                if (str.equals("nextFocusForward")) {
                    c10 = 29;
                    break;
                }
                break;
            case 581268560:
                if (str.equals("borderBottomLeftRadius")) {
                    c10 = 30;
                    break;
                }
                break;
            case 588239831:
                if (str.equals("borderBottomRightRadius")) {
                    c10 = 31;
                    break;
                }
                break;
            case 660795168:
                if (str.equals("nextFocusUp")) {
                    c10 = ' ';
                    break;
                }
                break;
            case 684610594:
                if (str.equals(ViewProps.BORDER_BLOCK_COLOR)) {
                    c10 = '!';
                    break;
                }
                break;
            case 722830999:
                if (str.equals(ViewProps.BORDER_COLOR)) {
                    c10 = '\"';
                    break;
                }
                break;
            case 737768677:
                if (str.equals("borderStyle")) {
                    c10 = '#';
                    break;
                }
                break;
            case 762983977:
                if (str.equals(ViewProps.BORDER_BLOCK_END_COLOR)) {
                    c10 = '$';
                    break;
                }
                break;
            case 910681861:
                if (str.equals(ViewProps.BORDER_END_START_RADIUS)) {
                    c10 = '%';
                    break;
                }
                break;
            case 926871597:
                if (str.equals("hitSlop")) {
                    c10 = '&';
                    break;
                }
                break;
            case 1220735892:
                if (str.equals(ViewProps.BORDER_END_COLOR)) {
                    c10 = '\'';
                    break;
                }
                break;
            case 1349188574:
                if (str.equals("borderRadius")) {
                    c10 = '(';
                    break;
                }
                break;
            case 1629011506:
                if (str.equals("focusable")) {
                    c10 = ')';
                    break;
                }
                break;
            case 1667773924:
                if (str.equals(ViewProps.NEEDS_OFFSCREEN_ALPHA_COMPOSITING)) {
                    c10 = '*';
                    break;
                }
                break;
            case 1735382270:
                if (str.equals(ViewProps.BORDER_END_END_RADIUS)) {
                    c10 = '+';
                    break;
                }
                break;
            case 1747724810:
                if (str.equals("nativeBackgroundAndroid")) {
                    c10 = ',';
                    break;
                }
                break;
            case 1908075304:
                if (str.equals("meetOrSlice")) {
                    c10 = '-';
                    break;
                }
                break;
            case 1910855543:
                if (str.equals("nextFocusRight")) {
                    c10 = '.';
                    break;
                }
                break;
            case 2119889261:
                if (str.equals(ViewProps.BORDER_START_COLOR)) {
                    c10 = '/';
                    break;
                }
                break;
        }
        float f10 = 0.0f;
        String str2 = null;
        switch (c10) {
            case 0:
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setBbHeight(t10, new DynamicFromObject(obj));
                return;
            case 1:
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setBorderRightColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 2:
                RNSVGSvgViewAndroidManagerInterface rNSVGSvgViewAndroidManagerInterface = (RNSVGSvgViewAndroidManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGSvgViewAndroidManagerInterface.setBackfaceVisibility(t10, str2);
                return;
            case 3:
                RNSVGSvgViewAndroidManagerInterface rNSVGSvgViewAndroidManagerInterface2 = (RNSVGSvgViewAndroidManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSVGSvgViewAndroidManagerInterface2.setVbHeight(t10, f10);
                return;
            case 4:
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setBorderTopColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 5:
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setBorderBottomColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 6:
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setBorderTopLeftRadius(t10, new DynamicFromObject(obj));
                return;
            case 7:
                RNSVGSvgViewAndroidManagerInterface rNSVGSvgViewAndroidManagerInterface3 = (RNSVGSvgViewAndroidManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNSVGSvgViewAndroidManagerInterface3.setAccessible(t10, z10);
                return;
            case '\b':
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setBorderTopStartRadius(t10, new DynamicFromObject(obj));
                return;
            case '\t':
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setBorderBottomStartRadius(t10, new DynamicFromObject(obj));
                return;
            case '\n':
                RNSVGSvgViewAndroidManagerInterface rNSVGSvgViewAndroidManagerInterface4 = (RNSVGSvgViewAndroidManagerInterface) this.mViewManager;
                if (obj != null) {
                    z14 = ((Boolean) obj).booleanValue();
                }
                rNSVGSvgViewAndroidManagerInterface4.setHasTVPreferredFocus(t10, z14);
                return;
            case 11:
                RNSVGSvgViewAndroidManagerInterface rNSVGSvgViewAndroidManagerInterface5 = (RNSVGSvgViewAndroidManagerInterface) this.mViewManager;
                if (obj != null) {
                    i15 = ((Double) obj).intValue();
                }
                rNSVGSvgViewAndroidManagerInterface5.setNextFocusDown(t10, i15);
                return;
            case '\f':
                RNSVGSvgViewAndroidManagerInterface rNSVGSvgViewAndroidManagerInterface6 = (RNSVGSvgViewAndroidManagerInterface) this.mViewManager;
                if (obj != null) {
                    i14 = ((Double) obj).intValue();
                }
                rNSVGSvgViewAndroidManagerInterface6.setNextFocusLeft(t10, i14);
                return;
            case '\r':
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setBorderTopEndRadius(t10, new DynamicFromObject(obj));
                return;
            case 14:
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setBbWidth(t10, new DynamicFromObject(obj));
                return;
            case 15:
                RNSVGSvgViewAndroidManagerInterface rNSVGSvgViewAndroidManagerInterface7 = (RNSVGSvgViewAndroidManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGSvgViewAndroidManagerInterface7.setPointerEvents(t10, str2);
                return;
            case 16:
                RNSVGSvgViewAndroidManagerInterface rNSVGSvgViewAndroidManagerInterface8 = (RNSVGSvgViewAndroidManagerInterface) this.mViewManager;
                if (obj != null) {
                    z13 = ((Boolean) obj).booleanValue();
                }
                rNSVGSvgViewAndroidManagerInterface8.setRemoveClippedSubviews(t10, z13);
                return;
            case 17:
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setBorderLeftColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setBorderStartEndRadius(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setBorderBottomEndRadius(t10, new DynamicFromObject(obj));
                return;
            case 20:
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setNativeForegroundAndroid(t10, (ReadableMap) obj);
                return;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setBorderStartStartRadius(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                RNSVGSvgViewAndroidManagerInterface rNSVGSvgViewAndroidManagerInterface9 = (RNSVGSvgViewAndroidManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSVGSvgViewAndroidManagerInterface9.setMinX(t10, f10);
                return;
            case 23:
                RNSVGSvgViewAndroidManagerInterface rNSVGSvgViewAndroidManagerInterface10 = (RNSVGSvgViewAndroidManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSVGSvgViewAndroidManagerInterface10.setMinY(t10, f10);
                return;
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                RNSVGSvgViewAndroidManagerInterface rNSVGSvgViewAndroidManagerInterface11 = (RNSVGSvgViewAndroidManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGSvgViewAndroidManagerInterface11.setAlign(t10, str2);
                return;
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                RNSVGSvgViewAndroidManagerInterface rNSVGSvgViewAndroidManagerInterface12 = (RNSVGSvgViewAndroidManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSVGSvgViewAndroidManagerInterface12.setVbWidth(t10, f10);
                return;
            case 27:
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setBorderBlockStartColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 28:
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setBorderTopRightRadius(t10, new DynamicFromObject(obj));
                return;
            case 29:
                RNSVGSvgViewAndroidManagerInterface rNSVGSvgViewAndroidManagerInterface13 = (RNSVGSvgViewAndroidManagerInterface) this.mViewManager;
                if (obj != null) {
                    i13 = ((Double) obj).intValue();
                }
                rNSVGSvgViewAndroidManagerInterface13.setNextFocusForward(t10, i13);
                return;
            case 30:
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setBorderBottomLeftRadius(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setBorderBottomRightRadius(t10, new DynamicFromObject(obj));
                return;
            case ' ':
                RNSVGSvgViewAndroidManagerInterface rNSVGSvgViewAndroidManagerInterface14 = (RNSVGSvgViewAndroidManagerInterface) this.mViewManager;
                if (obj != null) {
                    i12 = ((Double) obj).intValue();
                }
                rNSVGSvgViewAndroidManagerInterface14.setNextFocusUp(t10, i12);
                return;
            case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setBorderBlockColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setBorderColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                RNSVGSvgViewAndroidManagerInterface rNSVGSvgViewAndroidManagerInterface15 = (RNSVGSvgViewAndroidManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGSvgViewAndroidManagerInterface15.setBorderStyle(t10, str2);
                return;
            case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setBorderBlockEndColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setBorderEndStartRadius(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setHitSlop(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setBorderEndColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case '(':
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setBorderRadius(t10, new DynamicFromObject(obj));
                return;
            case ')':
                RNSVGSvgViewAndroidManagerInterface rNSVGSvgViewAndroidManagerInterface16 = (RNSVGSvgViewAndroidManagerInterface) this.mViewManager;
                if (obj != null) {
                    z12 = ((Boolean) obj).booleanValue();
                }
                rNSVGSvgViewAndroidManagerInterface16.setFocusable(t10, z12);
                return;
            case '*':
                RNSVGSvgViewAndroidManagerInterface rNSVGSvgViewAndroidManagerInterface17 = (RNSVGSvgViewAndroidManagerInterface) this.mViewManager;
                if (obj != null) {
                    z11 = ((Boolean) obj).booleanValue();
                }
                rNSVGSvgViewAndroidManagerInterface17.setNeedsOffscreenAlphaCompositing(t10, z11);
                return;
            case ChatViewRecyclerTypes.FORWARD_HEADER /* 43 */:
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setBorderEndEndRadius(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.FORWARD_BREADCRUMB /* 44 */:
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setNativeBackgroundAndroid(t10, (ReadableMap) obj);
                return;
            case ChatViewRecyclerTypes.REACTION_BURST_REACTION /* 45 */:
                RNSVGSvgViewAndroidManagerInterface rNSVGSvgViewAndroidManagerInterface18 = (RNSVGSvgViewAndroidManagerInterface) this.mViewManager;
                if (obj != null) {
                    i11 = ((Double) obj).intValue();
                }
                rNSVGSvgViewAndroidManagerInterface18.setMeetOrSlice(t10, i11);
                return;
            case '.':
                RNSVGSvgViewAndroidManagerInterface rNSVGSvgViewAndroidManagerInterface19 = (RNSVGSvgViewAndroidManagerInterface) this.mViewManager;
                if (obj != null) {
                    i10 = ((Double) obj).intValue();
                }
                rNSVGSvgViewAndroidManagerInterface19.setNextFocusRight(t10, i10);
                return;
            case ChatViewRecyclerTypes.REACTION_ADD_REACTION /* 47 */:
                ((RNSVGSvgViewAndroidManagerInterface) this.mViewManager).setBorderStartColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
