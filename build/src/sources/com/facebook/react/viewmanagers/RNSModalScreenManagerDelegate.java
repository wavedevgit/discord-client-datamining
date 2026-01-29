package com.facebook.react.viewmanagers;

import android.view.View;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.bridge.ColorPropConverter;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.RNSModalScreenManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSModalScreenManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSModalScreenManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSModalScreenManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        char c10;
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
        int i12 = -1;
        switch (str.hashCode()) {
            case -1937389126:
                if (str.equals("homeIndicatorHidden")) {
                    c10 = 0;
                    break;
                }
                c10 = 65535;
                break;
            case -1853558344:
                if (str.equals("gestureEnabled")) {
                    c10 = 1;
                    break;
                }
                c10 = 65535;
                break;
            case -1734097646:
                if (str.equals("hideKeyboardOnSwipe")) {
                    c10 = 2;
                    break;
                }
                c10 = 65535;
                break;
            case -1349152186:
                if (str.equals("sheetCornerRadius")) {
                    c10 = 3;
                    break;
                }
                c10 = 65535;
                break;
            case -1322084375:
                if (str.equals("navigationBarHidden")) {
                    c10 = 4;
                    break;
                }
                c10 = 65535;
                break;
            case -1156137512:
                if (str.equals("statusBarTranslucent")) {
                    c10 = 5;
                    break;
                }
                c10 = 65535;
                break;
            case -1150711358:
                if (str.equals("stackPresentation")) {
                    c10 = 6;
                    break;
                }
                c10 = 65535;
                break;
            case -1047235902:
                if (str.equals("activityState")) {
                    c10 = 7;
                    break;
                }
                c10 = 65535;
                break;
            case -973702878:
                if (str.equals("statusBarColor")) {
                    c10 = '\b';
                    break;
                }
                c10 = 65535;
                break;
            case -958765200:
                if (str.equals("statusBarStyle")) {
                    c10 = '\t';
                    break;
                }
                c10 = 65535;
                break;
            case -952227806:
                if (str.equals("fullScreenSwipeShadowEnabled")) {
                    c10 = '\n';
                    break;
                }
                c10 = 65535;
                break;
            case -577711652:
                if (str.equals("stackAnimation")) {
                    c10 = 11;
                    break;
                }
                c10 = 65535;
                break;
            case -462720700:
                if (str.equals("navigationBarColor")) {
                    c10 = '\f';
                    break;
                }
                c10 = 65535;
                break;
            case -381571779:
                if (str.equals("sheetInitialDetent")) {
                    c10 = '\r';
                    break;
                }
                c10 = 65535;
                break;
            case -274098190:
                if (str.equals("sheetAllowedDetents")) {
                    c10 = 14;
                    break;
                }
                c10 = 65535;
                break;
            case -257141968:
                if (str.equals("replaceAnimation")) {
                    c10 = 15;
                    break;
                }
                c10 = 65535;
                break;
            case -166356101:
                if (str.equals("preventNativeDismiss")) {
                    c10 = 16;
                    break;
                }
                c10 = 65535;
                break;
            case 17337291:
                if (str.equals("statusBarHidden")) {
                    c10 = 17;
                    break;
                }
                c10 = 65535;
                break;
            case 129956386:
                if (str.equals("fullScreenSwipeEnabled")) {
                    c10 = 18;
                    break;
                }
                c10 = 65535;
                break;
            case 187703999:
                if (str.equals("gestureResponseDistance")) {
                    c10 = 19;
                    break;
                }
                c10 = 65535;
                break;
            case 227582404:
                if (str.equals("screenOrientation")) {
                    c10 = 20;
                    break;
                }
                c10 = 65535;
                break;
            case 241896530:
                if (str.equals("sheetLargestUndimmedDetent")) {
                    c10 = 21;
                    break;
                }
                c10 = 65535;
                break;
            case 425064969:
                if (str.equals("transitionDuration")) {
                    c10 = 22;
                    break;
                }
                c10 = 65535;
                break;
            case 1082157413:
                if (str.equals("swipeDirection")) {
                    c10 = 23;
                    break;
                }
                c10 = 65535;
                break;
            case 1110843912:
                if (str.equals("customAnimationOnSwipe")) {
                    c10 = 24;
                    break;
                }
                c10 = 65535;
                break;
            case 1116050554:
                if (str.equals("navigationBarTranslucent")) {
                    c10 = 25;
                    break;
                }
                c10 = 65535;
                break;
            case 1269009342:
                if (str.equals("sheetElevation")) {
                    c10 = 26;
                    break;
                }
                c10 = 65535;
                break;
            case 1357942638:
                if (str.equals("sheetGrabberVisible")) {
                    c10 = 27;
                    break;
                }
                c10 = 65535;
                break;
            case 1387359683:
                if (str.equals("statusBarAnimation")) {
                    c10 = 28;
                    break;
                }
                c10 = 65535;
                break;
            case 1729091548:
                if (str.equals("nativeBackButtonDismissalEnabled")) {
                    c10 = 29;
                    break;
                }
                c10 = 65535;
                break;
            case 2097450072:
                if (str.equals("sheetExpandsWhenScrolledToEdge")) {
                    c10 = 30;
                    break;
                }
                c10 = 65535;
                break;
            default:
                c10 = 65535;
                break;
        }
        float f10 = -1.0f;
        String str2 = null;
        switch (c10) {
            case 0:
                RNSModalScreenManagerInterface rNSModalScreenManagerInterface = (RNSModalScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z11 = ((Boolean) obj).booleanValue();
                }
                rNSModalScreenManagerInterface.setHomeIndicatorHidden(t10, z11);
                return;
            case 1:
                RNSModalScreenManagerInterface rNSModalScreenManagerInterface2 = (RNSModalScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNSModalScreenManagerInterface2.setGestureEnabled(t10, z10);
                return;
            case 2:
                RNSModalScreenManagerInterface rNSModalScreenManagerInterface3 = (RNSModalScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z22 = ((Boolean) obj).booleanValue();
                }
                rNSModalScreenManagerInterface3.setHideKeyboardOnSwipe(t10, z22);
                return;
            case 3:
                RNSModalScreenManagerInterface rNSModalScreenManagerInterface4 = (RNSModalScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSModalScreenManagerInterface4.setSheetCornerRadius(t10, f10);
                return;
            case 4:
                RNSModalScreenManagerInterface rNSModalScreenManagerInterface5 = (RNSModalScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z21 = ((Boolean) obj).booleanValue();
                }
                rNSModalScreenManagerInterface5.setNavigationBarHidden(t10, z21);
                return;
            case 5:
                RNSModalScreenManagerInterface rNSModalScreenManagerInterface6 = (RNSModalScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z20 = ((Boolean) obj).booleanValue();
                }
                rNSModalScreenManagerInterface6.setStatusBarTranslucent(t10, z20);
                return;
            case 6:
                ((RNSModalScreenManagerInterface) this.mViewManager).setStackPresentation(t10, (String) obj);
                return;
            case 7:
                RNSModalScreenManagerInterface rNSModalScreenManagerInterface7 = (RNSModalScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSModalScreenManagerInterface7.setActivityState(t10, f10);
                return;
            case '\b':
                ((RNSModalScreenManagerInterface) this.mViewManager).setStatusBarColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case '\t':
                RNSModalScreenManagerInterface rNSModalScreenManagerInterface8 = (RNSModalScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSModalScreenManagerInterface8.setStatusBarStyle(t10, str2);
                return;
            case '\n':
                RNSModalScreenManagerInterface rNSModalScreenManagerInterface9 = (RNSModalScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNSModalScreenManagerInterface9.setFullScreenSwipeShadowEnabled(t10, z10);
                return;
            case 11:
                ((RNSModalScreenManagerInterface) this.mViewManager).setStackAnimation(t10, (String) obj);
                return;
            case '\f':
                ((RNSModalScreenManagerInterface) this.mViewManager).setNavigationBarColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case '\r':
                RNSModalScreenManagerInterface rNSModalScreenManagerInterface10 = (RNSModalScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    i11 = ((Double) obj).intValue();
                }
                rNSModalScreenManagerInterface10.setSheetInitialDetent(t10, i11);
                return;
            case 14:
                ((RNSModalScreenManagerInterface) this.mViewManager).setSheetAllowedDetents(t10, (ReadableArray) obj);
                return;
            case 15:
                ((RNSModalScreenManagerInterface) this.mViewManager).setReplaceAnimation(t10, (String) obj);
                return;
            case 16:
                RNSModalScreenManagerInterface rNSModalScreenManagerInterface11 = (RNSModalScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z19 = ((Boolean) obj).booleanValue();
                }
                rNSModalScreenManagerInterface11.setPreventNativeDismiss(t10, z19);
                return;
            case 17:
                RNSModalScreenManagerInterface rNSModalScreenManagerInterface12 = (RNSModalScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z18 = ((Boolean) obj).booleanValue();
                }
                rNSModalScreenManagerInterface12.setStatusBarHidden(t10, z18);
                return;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                RNSModalScreenManagerInterface rNSModalScreenManagerInterface13 = (RNSModalScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z17 = ((Boolean) obj).booleanValue();
                }
                rNSModalScreenManagerInterface13.setFullScreenSwipeEnabled(t10, z17);
                return;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                ((RNSModalScreenManagerInterface) this.mViewManager).setGestureResponseDistance(t10, (ReadableMap) obj);
                return;
            case 20:
                RNSModalScreenManagerInterface rNSModalScreenManagerInterface14 = (RNSModalScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSModalScreenManagerInterface14.setScreenOrientation(t10, str2);
                return;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                RNSModalScreenManagerInterface rNSModalScreenManagerInterface15 = (RNSModalScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    i12 = ((Double) obj).intValue();
                }
                rNSModalScreenManagerInterface15.setSheetLargestUndimmedDetent(t10, i12);
                return;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                RNSModalScreenManagerInterface rNSModalScreenManagerInterface16 = (RNSModalScreenManagerInterface) this.mViewManager;
                if (obj == null) {
                    intValue = 500;
                } else {
                    intValue = ((Double) obj).intValue();
                }
                rNSModalScreenManagerInterface16.setTransitionDuration(t10, intValue);
                return;
            case 23:
                ((RNSModalScreenManagerInterface) this.mViewManager).setSwipeDirection(t10, (String) obj);
                return;
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                RNSModalScreenManagerInterface rNSModalScreenManagerInterface17 = (RNSModalScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z16 = ((Boolean) obj).booleanValue();
                }
                rNSModalScreenManagerInterface17.setCustomAnimationOnSwipe(t10, z16);
                return;
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                RNSModalScreenManagerInterface rNSModalScreenManagerInterface18 = (RNSModalScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z15 = ((Boolean) obj).booleanValue();
                }
                rNSModalScreenManagerInterface18.setNavigationBarTranslucent(t10, z15);
                return;
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                RNSModalScreenManagerInterface rNSModalScreenManagerInterface19 = (RNSModalScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    i10 = ((Double) obj).intValue();
                }
                rNSModalScreenManagerInterface19.setSheetElevation(t10, i10);
                return;
            case 27:
                RNSModalScreenManagerInterface rNSModalScreenManagerInterface20 = (RNSModalScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z14 = ((Boolean) obj).booleanValue();
                }
                rNSModalScreenManagerInterface20.setSheetGrabberVisible(t10, z14);
                return;
            case 28:
                RNSModalScreenManagerInterface rNSModalScreenManagerInterface21 = (RNSModalScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSModalScreenManagerInterface21.setStatusBarAnimation(t10, str2);
                return;
            case 29:
                RNSModalScreenManagerInterface rNSModalScreenManagerInterface22 = (RNSModalScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z13 = ((Boolean) obj).booleanValue();
                }
                rNSModalScreenManagerInterface22.setNativeBackButtonDismissalEnabled(t10, z13);
                return;
            case 30:
                RNSModalScreenManagerInterface rNSModalScreenManagerInterface23 = (RNSModalScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z12 = ((Boolean) obj).booleanValue();
                }
                rNSModalScreenManagerInterface23.setSheetExpandsWhenScrolledToEdge(t10, z12);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
