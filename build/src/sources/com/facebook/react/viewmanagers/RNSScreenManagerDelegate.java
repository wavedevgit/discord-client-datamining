package com.facebook.react.viewmanagers;

import android.view.View;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.bridge.ColorPropConverter;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.RNSScreenManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSScreenManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSScreenManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSScreenManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        char c10;
        String str2;
        int intValue;
        str.getClass();
        int i10 = 24;
        boolean z10 = true;
        boolean z11 = false;
        boolean z12 = false;
        boolean z13 = false;
        boolean z14 = false;
        boolean z15 = false;
        boolean z16 = false;
        boolean z17 = false;
        boolean z18 = false;
        boolean z19 = false;
        int i11 = 0;
        boolean z20 = false;
        boolean z21 = false;
        boolean z22 = false;
        boolean z23 = false;
        int i12 = -1;
        switch (str.hashCode()) {
            case -2035671681:
                if (str.equals("synchronousShadowStateUpdatesEnabled")) {
                    c10 = 0;
                    break;
                }
                c10 = 65535;
                break;
            case -1991728986:
                if (str.equals("bottomScrollEdgeEffect")) {
                    c10 = 1;
                    break;
                }
                c10 = 65535;
                break;
            case -1937389126:
                if (str.equals("homeIndicatorHidden")) {
                    c10 = 2;
                    break;
                }
                c10 = 65535;
                break;
            case -1871891504:
                if (str.equals("topScrollEdgeEffect")) {
                    c10 = 3;
                    break;
                }
                c10 = 65535;
                break;
            case -1853558344:
                if (str.equals("gestureEnabled")) {
                    c10 = 4;
                    break;
                }
                c10 = 65535;
                break;
            case -1791070590:
                if (str.equals("leftScrollEdgeEffect")) {
                    c10 = 5;
                    break;
                }
                c10 = 65535;
                break;
            case -1734097646:
                if (str.equals("hideKeyboardOnSwipe")) {
                    c10 = 6;
                    break;
                }
                c10 = 65535;
                break;
            case -1628518761:
                if (str.equals("rightScrollEdgeEffect")) {
                    c10 = 7;
                    break;
                }
                c10 = 65535;
                break;
            case -1349152186:
                if (str.equals("sheetCornerRadius")) {
                    c10 = '\b';
                    break;
                }
                c10 = 65535;
                break;
            case -1322084375:
                if (str.equals("navigationBarHidden")) {
                    c10 = '\t';
                    break;
                }
                c10 = 65535;
                break;
            case -1156137512:
                if (str.equals("statusBarTranslucent")) {
                    c10 = '\n';
                    break;
                }
                c10 = 65535;
                break;
            case -1150711358:
                if (str.equals("stackPresentation")) {
                    c10 = 11;
                    break;
                }
                c10 = 65535;
                break;
            case -1047235902:
                if (str.equals("activityState")) {
                    c10 = '\f';
                    break;
                }
                c10 = 65535;
                break;
            case -973702878:
                if (str.equals("statusBarColor")) {
                    c10 = '\r';
                    break;
                }
                c10 = 65535;
                break;
            case -958765200:
                if (str.equals("statusBarStyle")) {
                    c10 = 14;
                    break;
                }
                c10 = 65535;
                break;
            case -952227806:
                if (str.equals("fullScreenSwipeShadowEnabled")) {
                    c10 = 15;
                    break;
                }
                c10 = 65535;
                break;
            case -577711652:
                if (str.equals("stackAnimation")) {
                    c10 = 16;
                    break;
                }
                c10 = 65535;
                break;
            case -462720700:
                if (str.equals("navigationBarColor")) {
                    c10 = 17;
                    break;
                }
                c10 = 65535;
                break;
            case -411607385:
                if (str.equals("screenId")) {
                    c10 = 18;
                    break;
                }
                c10 = 65535;
                break;
            case -381571779:
                if (str.equals("sheetInitialDetent")) {
                    c10 = 19;
                    break;
                }
                c10 = 65535;
                break;
            case -274098190:
                if (str.equals("sheetAllowedDetents")) {
                    c10 = 20;
                    break;
                }
                c10 = 65535;
                break;
            case -257141968:
                if (str.equals("replaceAnimation")) {
                    c10 = 21;
                    break;
                }
                c10 = 65535;
                break;
            case -166356101:
                if (str.equals("preventNativeDismiss")) {
                    c10 = 22;
                    break;
                }
                c10 = 65535;
                break;
            case 17337291:
                if (str.equals("statusBarHidden")) {
                    c10 = 23;
                    break;
                }
                c10 = 65535;
                break;
            case 129956386:
                if (str.equals("fullScreenSwipeEnabled")) {
                    c10 = 24;
                    break;
                }
                c10 = 65535;
                break;
            case 187703999:
                if (str.equals("gestureResponseDistance")) {
                    c10 = 25;
                    break;
                }
                c10 = 65535;
                break;
            case 227582404:
                if (str.equals("screenOrientation")) {
                    c10 = 26;
                    break;
                }
                c10 = 65535;
                break;
            case 241896530:
                if (str.equals("sheetLargestUndimmedDetent")) {
                    c10 = 27;
                    break;
                }
                c10 = 65535;
                break;
            case 425064969:
                if (str.equals("transitionDuration")) {
                    c10 = 28;
                    break;
                }
                c10 = 65535;
                break;
            case 658632444:
                if (str.equals("sheetShouldOverflowTopInset")) {
                    c10 = 29;
                    break;
                }
                c10 = 65535;
                break;
            case 1082157413:
                if (str.equals("swipeDirection")) {
                    c10 = 30;
                    break;
                }
                c10 = 65535;
                break;
            case 1110843912:
                if (str.equals("customAnimationOnSwipe")) {
                    c10 = 31;
                    break;
                }
                c10 = 65535;
                break;
            case 1116050554:
                if (str.equals("navigationBarTranslucent")) {
                    c10 = ' ';
                    break;
                }
                c10 = 65535;
                break;
            case 1269009342:
                if (str.equals("sheetElevation")) {
                    c10 = '!';
                    break;
                }
                c10 = 65535;
                break;
            case 1287164531:
                if (str.equals("sheetDefaultResizeAnimationEnabled")) {
                    c10 = '\"';
                    break;
                }
                c10 = 65535;
                break;
            case 1357942638:
                if (str.equals("sheetGrabberVisible")) {
                    c10 = '#';
                    break;
                }
                c10 = 65535;
                break;
            case 1387359683:
                if (str.equals("statusBarAnimation")) {
                    c10 = '$';
                    break;
                }
                c10 = 65535;
                break;
            case 1729091548:
                if (str.equals("nativeBackButtonDismissalEnabled")) {
                    c10 = '%';
                    break;
                }
                c10 = 65535;
                break;
            case 2029667685:
                if (str.equals("androidResetScreenShadowStateOnOrientationChangeEnabled")) {
                    c10 = '&';
                    break;
                }
                c10 = 65535;
                break;
            case 2097450072:
                if (str.equals("sheetExpandsWhenScrolledToEdge")) {
                    c10 = '\'';
                    break;
                }
                c10 = 65535;
                break;
            default:
                c10 = 65535;
                break;
        }
        float f10 = -1.0f;
        String str3 = null;
        switch (c10) {
            case 0:
                RNSScreenManagerInterface rNSScreenManagerInterface = (RNSScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z11 = ((Boolean) obj).booleanValue();
                }
                rNSScreenManagerInterface.setSynchronousShadowStateUpdatesEnabled(t10, z11);
                return;
            case 1:
                ((RNSScreenManagerInterface) this.mViewManager).setBottomScrollEdgeEffect(t10, (String) obj);
                return;
            case 2:
                RNSScreenManagerInterface rNSScreenManagerInterface2 = (RNSScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z23 = ((Boolean) obj).booleanValue();
                }
                rNSScreenManagerInterface2.setHomeIndicatorHidden(t10, z23);
                return;
            case 3:
                ((RNSScreenManagerInterface) this.mViewManager).setTopScrollEdgeEffect(t10, (String) obj);
                return;
            case 4:
                RNSScreenManagerInterface rNSScreenManagerInterface3 = (RNSScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNSScreenManagerInterface3.setGestureEnabled(t10, z10);
                return;
            case 5:
                ((RNSScreenManagerInterface) this.mViewManager).setLeftScrollEdgeEffect(t10, (String) obj);
                return;
            case 6:
                RNSScreenManagerInterface rNSScreenManagerInterface4 = (RNSScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z22 = ((Boolean) obj).booleanValue();
                }
                rNSScreenManagerInterface4.setHideKeyboardOnSwipe(t10, z22);
                return;
            case 7:
                ((RNSScreenManagerInterface) this.mViewManager).setRightScrollEdgeEffect(t10, (String) obj);
                return;
            case '\b':
                RNSScreenManagerInterface rNSScreenManagerInterface5 = (RNSScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSScreenManagerInterface5.setSheetCornerRadius(t10, f10);
                return;
            case '\t':
                RNSScreenManagerInterface rNSScreenManagerInterface6 = (RNSScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z21 = ((Boolean) obj).booleanValue();
                }
                rNSScreenManagerInterface6.setNavigationBarHidden(t10, z21);
                return;
            case '\n':
                RNSScreenManagerInterface rNSScreenManagerInterface7 = (RNSScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z20 = ((Boolean) obj).booleanValue();
                }
                rNSScreenManagerInterface7.setStatusBarTranslucent(t10, z20);
                return;
            case 11:
                ((RNSScreenManagerInterface) this.mViewManager).setStackPresentation(t10, (String) obj);
                return;
            case '\f':
                RNSScreenManagerInterface rNSScreenManagerInterface8 = (RNSScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSScreenManagerInterface8.setActivityState(t10, f10);
                return;
            case '\r':
                ((RNSScreenManagerInterface) this.mViewManager).setStatusBarColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 14:
                RNSScreenManagerInterface rNSScreenManagerInterface9 = (RNSScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    str3 = (String) obj;
                }
                rNSScreenManagerInterface9.setStatusBarStyle(t10, str3);
                return;
            case 15:
                RNSScreenManagerInterface rNSScreenManagerInterface10 = (RNSScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNSScreenManagerInterface10.setFullScreenSwipeShadowEnabled(t10, z10);
                return;
            case 16:
                ((RNSScreenManagerInterface) this.mViewManager).setStackAnimation(t10, (String) obj);
                return;
            case 17:
                ((RNSScreenManagerInterface) this.mViewManager).setNavigationBarColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                RNSScreenManagerInterface rNSScreenManagerInterface11 = (RNSScreenManagerInterface) this.mViewManager;
                if (obj == null) {
                    str2 = "";
                } else {
                    str2 = (String) obj;
                }
                rNSScreenManagerInterface11.setScreenId(t10, str2);
                return;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                RNSScreenManagerInterface rNSScreenManagerInterface12 = (RNSScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    i11 = ((Double) obj).intValue();
                }
                rNSScreenManagerInterface12.setSheetInitialDetent(t10, i11);
                return;
            case 20:
                ((RNSScreenManagerInterface) this.mViewManager).setSheetAllowedDetents(t10, (ReadableArray) obj);
                return;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                ((RNSScreenManagerInterface) this.mViewManager).setReplaceAnimation(t10, (String) obj);
                return;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                RNSScreenManagerInterface rNSScreenManagerInterface13 = (RNSScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z19 = ((Boolean) obj).booleanValue();
                }
                rNSScreenManagerInterface13.setPreventNativeDismiss(t10, z19);
                return;
            case 23:
                RNSScreenManagerInterface rNSScreenManagerInterface14 = (RNSScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z18 = ((Boolean) obj).booleanValue();
                }
                rNSScreenManagerInterface14.setStatusBarHidden(t10, z18);
                return;
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                ((RNSScreenManagerInterface) this.mViewManager).setFullScreenSwipeEnabled(t10, (String) obj);
                return;
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                ((RNSScreenManagerInterface) this.mViewManager).setGestureResponseDistance(t10, (ReadableMap) obj);
                return;
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                RNSScreenManagerInterface rNSScreenManagerInterface15 = (RNSScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    str3 = (String) obj;
                }
                rNSScreenManagerInterface15.setScreenOrientation(t10, str3);
                return;
            case 27:
                RNSScreenManagerInterface rNSScreenManagerInterface16 = (RNSScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    i12 = ((Double) obj).intValue();
                }
                rNSScreenManagerInterface16.setSheetLargestUndimmedDetent(t10, i12);
                return;
            case 28:
                RNSScreenManagerInterface rNSScreenManagerInterface17 = (RNSScreenManagerInterface) this.mViewManager;
                if (obj == null) {
                    intValue = 500;
                } else {
                    intValue = ((Double) obj).intValue();
                }
                rNSScreenManagerInterface17.setTransitionDuration(t10, intValue);
                return;
            case 29:
                RNSScreenManagerInterface rNSScreenManagerInterface18 = (RNSScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z17 = ((Boolean) obj).booleanValue();
                }
                rNSScreenManagerInterface18.setSheetShouldOverflowTopInset(t10, z17);
                return;
            case 30:
                ((RNSScreenManagerInterface) this.mViewManager).setSwipeDirection(t10, (String) obj);
                return;
            case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                RNSScreenManagerInterface rNSScreenManagerInterface19 = (RNSScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z16 = ((Boolean) obj).booleanValue();
                }
                rNSScreenManagerInterface19.setCustomAnimationOnSwipe(t10, z16);
                return;
            case ' ':
                RNSScreenManagerInterface rNSScreenManagerInterface20 = (RNSScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z15 = ((Boolean) obj).booleanValue();
                }
                rNSScreenManagerInterface20.setNavigationBarTranslucent(t10, z15);
                return;
            case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                RNSScreenManagerInterface rNSScreenManagerInterface21 = (RNSScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    i10 = ((Double) obj).intValue();
                }
                rNSScreenManagerInterface21.setSheetElevation(t10, i10);
                return;
            case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                RNSScreenManagerInterface rNSScreenManagerInterface22 = (RNSScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNSScreenManagerInterface22.setSheetDefaultResizeAnimationEnabled(t10, z10);
                return;
            case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                RNSScreenManagerInterface rNSScreenManagerInterface23 = (RNSScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z14 = ((Boolean) obj).booleanValue();
                }
                rNSScreenManagerInterface23.setSheetGrabberVisible(t10, z14);
                return;
            case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                RNSScreenManagerInterface rNSScreenManagerInterface24 = (RNSScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    str3 = (String) obj;
                }
                rNSScreenManagerInterface24.setStatusBarAnimation(t10, str3);
                return;
            case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                RNSScreenManagerInterface rNSScreenManagerInterface25 = (RNSScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z13 = ((Boolean) obj).booleanValue();
                }
                rNSScreenManagerInterface25.setNativeBackButtonDismissalEnabled(t10, z13);
                return;
            case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                RNSScreenManagerInterface rNSScreenManagerInterface26 = (RNSScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNSScreenManagerInterface26.setAndroidResetScreenShadowStateOnOrientationChangeEnabled(t10, z10);
                return;
            case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                RNSScreenManagerInterface rNSScreenManagerInterface27 = (RNSScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z12 = ((Boolean) obj).booleanValue();
                }
                rNSScreenManagerInterface27.setSheetExpandsWhenScrolledToEdge(t10, z12);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
