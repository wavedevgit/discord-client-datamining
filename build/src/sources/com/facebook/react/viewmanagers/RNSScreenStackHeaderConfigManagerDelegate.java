package com.facebook.react.viewmanagers;

import android.view.View;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.bridge.ColorPropConverter;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSScreenStackHeaderConfigManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSScreenStackHeaderConfigManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSScreenStackHeaderConfigManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        str.getClass();
        boolean z10 = true;
        boolean z11 = false;
        boolean z12 = false;
        boolean z13 = false;
        boolean z14 = false;
        int i10 = 0;
        boolean z15 = false;
        boolean z16 = false;
        int i11 = 0;
        boolean z17 = false;
        int i12 = 0;
        boolean z18 = false;
        boolean z19 = false;
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1822687399:
                if (str.equals("translucent")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1799367701:
                if (str.equals("titleColor")) {
                    c10 = 1;
                    break;
                }
                break;
            case -1795707688:
                if (str.equals("blurEffect")) {
                    c10 = 2;
                    break;
                }
                break;
            case -1774658170:
                if (str.equals("largeTitleColor")) {
                    c10 = 3;
                    break;
                }
                break;
            case -1715368693:
                if (str.equals("titleFontFamily")) {
                    c10 = 4;
                    break;
                }
                break;
            case -1503810304:
                if (str.equals("disableBackButtonMenu")) {
                    c10 = 5;
                    break;
                }
                break;
            case -1225100257:
                if (str.equals("titleFontWeight")) {
                    c10 = 6;
                    break;
                }
                break;
            case -1217487446:
                if (str.equals(ViewProps.HIDDEN)) {
                    c10 = 7;
                    break;
                }
                break;
            case -1094575123:
                if (str.equals("largeTitleFontSize")) {
                    c10 = '\b';
                    break;
                }
                break;
            case -1093089076:
                if (str.equals("backButtonDisplayMode")) {
                    c10 = '\t';
                    break;
                }
                break;
            case -1063138943:
                if (str.equals("backTitleVisible")) {
                    c10 = '\n';
                    break;
                }
                break;
            case -962590849:
                if (str.equals("direction")) {
                    c10 = 11;
                    break;
                }
                break;
            case -389245640:
                if (str.equals("largeTitleBackgroundColor")) {
                    c10 = '\f';
                    break;
                }
                break;
            case -140063148:
                if (str.equals("backButtonInCustomView")) {
                    c10 = '\r';
                    break;
                }
                break;
            case 347216:
                if (str.equals("largeTitleFontFamily")) {
                    c10 = 14;
                    break;
                }
                break;
            case 94842723:
                if (str.equals(ViewProps.COLOR)) {
                    c10 = 15;
                    break;
                }
                break;
            case 110371416:
                if (str.equals("title")) {
                    c10 = 16;
                    break;
                }
                break;
            case 183888321:
                if (str.equals("backTitleFontSize")) {
                    c10 = 17;
                    break;
                }
                break;
            case 243070244:
                if (str.equals("backTitleFontFamily")) {
                    c10 = 18;
                    break;
                }
                break;
            case 339462402:
                if (str.equals("hideShadow")) {
                    c10 = 19;
                    break;
                }
                break;
            case 490615652:
                if (str.equals("largeTitleFontWeight")) {
                    c10 = 20;
                    break;
                }
                break;
            case 1038753243:
                if (str.equals("hideBackButton")) {
                    c10 = 21;
                    break;
                }
                break;
            case 1287124693:
                if (str.equals(ViewProps.BACKGROUND_COLOR)) {
                    c10 = 22;
                    break;
                }
                break;
            case 1324688817:
                if (str.equals("backTitle")) {
                    c10 = 23;
                    break;
                }
                break;
            case 1518161768:
                if (str.equals("titleFontSize")) {
                    c10 = 24;
                    break;
                }
                break;
            case 1564506303:
                if (str.equals("largeTitleHideShadow")) {
                    c10 = 25;
                    break;
                }
                break;
            case 2029798365:
                if (str.equals("largeTitle")) {
                    c10 = 26;
                    break;
                }
                break;
            case 2099541337:
                if (str.equals("topInsetEnabled")) {
                    c10 = 27;
                    break;
                }
                break;
        }
        String str2 = null;
        switch (c10) {
            case 0:
                RNSScreenStackHeaderConfigManagerInterface rNSScreenStackHeaderConfigManagerInterface = (RNSScreenStackHeaderConfigManagerInterface) this.mViewManager;
                if (obj != null) {
                    z11 = ((Boolean) obj).booleanValue();
                }
                rNSScreenStackHeaderConfigManagerInterface.setTranslucent(t10, z11);
                return;
            case 1:
                ((RNSScreenStackHeaderConfigManagerInterface) this.mViewManager).setTitleColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 2:
                ((RNSScreenStackHeaderConfigManagerInterface) this.mViewManager).setBlurEffect(t10, (String) obj);
                return;
            case 3:
                ((RNSScreenStackHeaderConfigManagerInterface) this.mViewManager).setLargeTitleColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 4:
                RNSScreenStackHeaderConfigManagerInterface rNSScreenStackHeaderConfigManagerInterface2 = (RNSScreenStackHeaderConfigManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSScreenStackHeaderConfigManagerInterface2.setTitleFontFamily(t10, str2);
                return;
            case 5:
                RNSScreenStackHeaderConfigManagerInterface rNSScreenStackHeaderConfigManagerInterface3 = (RNSScreenStackHeaderConfigManagerInterface) this.mViewManager;
                if (obj != null) {
                    z19 = ((Boolean) obj).booleanValue();
                }
                rNSScreenStackHeaderConfigManagerInterface3.setDisableBackButtonMenu(t10, z19);
                return;
            case 6:
                RNSScreenStackHeaderConfigManagerInterface rNSScreenStackHeaderConfigManagerInterface4 = (RNSScreenStackHeaderConfigManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSScreenStackHeaderConfigManagerInterface4.setTitleFontWeight(t10, str2);
                return;
            case 7:
                RNSScreenStackHeaderConfigManagerInterface rNSScreenStackHeaderConfigManagerInterface5 = (RNSScreenStackHeaderConfigManagerInterface) this.mViewManager;
                if (obj != null) {
                    z18 = ((Boolean) obj).booleanValue();
                }
                rNSScreenStackHeaderConfigManagerInterface5.setHidden(t10, z18);
                return;
            case '\b':
                RNSScreenStackHeaderConfigManagerInterface rNSScreenStackHeaderConfigManagerInterface6 = (RNSScreenStackHeaderConfigManagerInterface) this.mViewManager;
                if (obj != null) {
                    i12 = ((Double) obj).intValue();
                }
                rNSScreenStackHeaderConfigManagerInterface6.setLargeTitleFontSize(t10, i12);
                return;
            case '\t':
                ((RNSScreenStackHeaderConfigManagerInterface) this.mViewManager).setBackButtonDisplayMode(t10, (String) obj);
                return;
            case '\n':
                RNSScreenStackHeaderConfigManagerInterface rNSScreenStackHeaderConfigManagerInterface7 = (RNSScreenStackHeaderConfigManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNSScreenStackHeaderConfigManagerInterface7.setBackTitleVisible(t10, z10);
                return;
            case 11:
                ((RNSScreenStackHeaderConfigManagerInterface) this.mViewManager).setDirection(t10, (String) obj);
                return;
            case '\f':
                ((RNSScreenStackHeaderConfigManagerInterface) this.mViewManager).setLargeTitleBackgroundColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case '\r':
                RNSScreenStackHeaderConfigManagerInterface rNSScreenStackHeaderConfigManagerInterface8 = (RNSScreenStackHeaderConfigManagerInterface) this.mViewManager;
                if (obj != null) {
                    z17 = ((Boolean) obj).booleanValue();
                }
                rNSScreenStackHeaderConfigManagerInterface8.setBackButtonInCustomView(t10, z17);
                return;
            case 14:
                RNSScreenStackHeaderConfigManagerInterface rNSScreenStackHeaderConfigManagerInterface9 = (RNSScreenStackHeaderConfigManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSScreenStackHeaderConfigManagerInterface9.setLargeTitleFontFamily(t10, str2);
                return;
            case 15:
                ((RNSScreenStackHeaderConfigManagerInterface) this.mViewManager).setColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 16:
                RNSScreenStackHeaderConfigManagerInterface rNSScreenStackHeaderConfigManagerInterface10 = (RNSScreenStackHeaderConfigManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSScreenStackHeaderConfigManagerInterface10.setTitle(t10, str2);
                return;
            case 17:
                RNSScreenStackHeaderConfigManagerInterface rNSScreenStackHeaderConfigManagerInterface11 = (RNSScreenStackHeaderConfigManagerInterface) this.mViewManager;
                if (obj != null) {
                    i11 = ((Double) obj).intValue();
                }
                rNSScreenStackHeaderConfigManagerInterface11.setBackTitleFontSize(t10, i11);
                return;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                RNSScreenStackHeaderConfigManagerInterface rNSScreenStackHeaderConfigManagerInterface12 = (RNSScreenStackHeaderConfigManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSScreenStackHeaderConfigManagerInterface12.setBackTitleFontFamily(t10, str2);
                return;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                RNSScreenStackHeaderConfigManagerInterface rNSScreenStackHeaderConfigManagerInterface13 = (RNSScreenStackHeaderConfigManagerInterface) this.mViewManager;
                if (obj != null) {
                    z16 = ((Boolean) obj).booleanValue();
                }
                rNSScreenStackHeaderConfigManagerInterface13.setHideShadow(t10, z16);
                return;
            case 20:
                RNSScreenStackHeaderConfigManagerInterface rNSScreenStackHeaderConfigManagerInterface14 = (RNSScreenStackHeaderConfigManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSScreenStackHeaderConfigManagerInterface14.setLargeTitleFontWeight(t10, str2);
                return;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                RNSScreenStackHeaderConfigManagerInterface rNSScreenStackHeaderConfigManagerInterface15 = (RNSScreenStackHeaderConfigManagerInterface) this.mViewManager;
                if (obj != null) {
                    z15 = ((Boolean) obj).booleanValue();
                }
                rNSScreenStackHeaderConfigManagerInterface15.setHideBackButton(t10, z15);
                return;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                ((RNSScreenStackHeaderConfigManagerInterface) this.mViewManager).setBackgroundColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 23:
                RNSScreenStackHeaderConfigManagerInterface rNSScreenStackHeaderConfigManagerInterface16 = (RNSScreenStackHeaderConfigManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSScreenStackHeaderConfigManagerInterface16.setBackTitle(t10, str2);
                return;
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                RNSScreenStackHeaderConfigManagerInterface rNSScreenStackHeaderConfigManagerInterface17 = (RNSScreenStackHeaderConfigManagerInterface) this.mViewManager;
                if (obj != null) {
                    i10 = ((Double) obj).intValue();
                }
                rNSScreenStackHeaderConfigManagerInterface17.setTitleFontSize(t10, i10);
                return;
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                RNSScreenStackHeaderConfigManagerInterface rNSScreenStackHeaderConfigManagerInterface18 = (RNSScreenStackHeaderConfigManagerInterface) this.mViewManager;
                if (obj != null) {
                    z14 = ((Boolean) obj).booleanValue();
                }
                rNSScreenStackHeaderConfigManagerInterface18.setLargeTitleHideShadow(t10, z14);
                return;
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                RNSScreenStackHeaderConfigManagerInterface rNSScreenStackHeaderConfigManagerInterface19 = (RNSScreenStackHeaderConfigManagerInterface) this.mViewManager;
                if (obj != null) {
                    z13 = ((Boolean) obj).booleanValue();
                }
                rNSScreenStackHeaderConfigManagerInterface19.setLargeTitle(t10, z13);
                return;
            case 27:
                RNSScreenStackHeaderConfigManagerInterface rNSScreenStackHeaderConfigManagerInterface20 = (RNSScreenStackHeaderConfigManagerInterface) this.mViewManager;
                if (obj != null) {
                    z12 = ((Boolean) obj).booleanValue();
                }
                rNSScreenStackHeaderConfigManagerInterface20.setTopInsetEnabled(t10, z12);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
