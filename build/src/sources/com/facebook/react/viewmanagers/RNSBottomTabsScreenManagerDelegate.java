package com.facebook.react.viewmanagers;

import android.view.View;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.bridge.ColorPropConverter;
import com.facebook.react.bridge.DynamicFromObject;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSBottomTabsScreenManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSBottomTabsScreenManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSBottomTabsScreenManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        str.getClass();
        boolean z10 = false;
        boolean z11 = true;
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1991728986:
                if (str.equals("bottomScrollEdgeEffect")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1871891504:
                if (str.equals("topScrollEdgeEffect")) {
                    c10 = 1;
                    break;
                }
                break;
            case -1829317469:
                if (str.equals("userInterfaceStyle")) {
                    c10 = 2;
                    break;
                }
                break;
            case -1791070590:
                if (str.equals("leftScrollEdgeEffect")) {
                    c10 = 3;
                    break;
                }
                break;
            case -1770963447:
                if (str.equals("specialEffects")) {
                    c10 = 4;
                    break;
                }
                break;
            case -1628518761:
                if (str.equals("rightScrollEdgeEffect")) {
                    c10 = 5;
                    break;
                }
                break;
            case -1559978286:
                if (str.equals("iconResourceName")) {
                    c10 = 6;
                    break;
                }
                break;
            case -1439500848:
                if (str.equals("orientation")) {
                    c10 = 7;
                    break;
                }
                break;
            case -1270820115:
                if (str.equals("isFocused")) {
                    c10 = '\b';
                    break;
                }
                break;
            case -1186468415:
                if (str.equals("overrideScrollViewContentInsetAdjustmentBehavior")) {
                    c10 = '\t';
                    break;
                }
                break;
            case -1167193694:
                if (str.equals("isTitleUndefined")) {
                    c10 = '\n';
                    break;
                }
                break;
            case -881409398:
                if (str.equals("tabKey")) {
                    c10 = 11;
                    break;
                }
                break;
            case -776576227:
                if (str.equals("iconImageSource")) {
                    c10 = '\f';
                    break;
                }
                break;
            case -737911981:
                if (str.equals("iconType")) {
                    c10 = '\r';
                    break;
                }
                break;
            case -558395241:
                if (str.equals("tabBarItemAccessibilityLabel")) {
                    c10 = 14;
                    break;
                }
                break;
            case -270334418:
                if (str.equals("scrollEdgeAppearance")) {
                    c10 = 15;
                    break;
                }
                break;
            case -10721392:
                if (str.equals("drawableIconResourceName")) {
                    c10 = 16;
                    break;
                }
                break;
            case 28389121:
                if (str.equals("standardAppearance")) {
                    c10 = 17;
                    break;
                }
                break;
            case 110371416:
                if (str.equals("title")) {
                    c10 = 18;
                    break;
                }
                break;
            case 642560482:
                if (str.equals("systemItem")) {
                    c10 = 19;
                    break;
                }
                break;
            case 1001537282:
                if (str.equals("selectedIconImageSource")) {
                    c10 = 20;
                    break;
                }
                break;
            case 1072026510:
                if (str.equals("badgeValue")) {
                    c10 = 21;
                    break;
                }
                break;
            case 1519110851:
                if (str.equals("tabBarItemBadgeBackgroundColor")) {
                    c10 = 22;
                    break;
                }
                break;
            case 1577043198:
                if (str.equals("tabBarItemTestID")) {
                    c10 = 23;
                    break;
                }
                break;
            case 1595935908:
                if (str.equals("tabBarItemBadgeTextColor")) {
                    c10 = 24;
                    break;
                }
                break;
            case 2021932941:
                if (str.equals("selectedIconResourceName")) {
                    c10 = 25;
                    break;
                }
                break;
            case 2109188258:
                if (str.equals("imageIconResource")) {
                    c10 = 26;
                    break;
                }
                break;
        }
        String str2 = null;
        switch (c10) {
            case 0:
                ((RNSBottomTabsScreenManagerInterface) this.mViewManager).setBottomScrollEdgeEffect(t10, (String) obj);
                return;
            case 1:
                ((RNSBottomTabsScreenManagerInterface) this.mViewManager).setTopScrollEdgeEffect(t10, (String) obj);
                return;
            case 2:
                ((RNSBottomTabsScreenManagerInterface) this.mViewManager).setUserInterfaceStyle(t10, (String) obj);
                return;
            case 3:
                ((RNSBottomTabsScreenManagerInterface) this.mViewManager).setLeftScrollEdgeEffect(t10, (String) obj);
                return;
            case 4:
                ((RNSBottomTabsScreenManagerInterface) this.mViewManager).setSpecialEffects(t10, (ReadableMap) obj);
                return;
            case 5:
                ((RNSBottomTabsScreenManagerInterface) this.mViewManager).setRightScrollEdgeEffect(t10, (String) obj);
                return;
            case 6:
                RNSBottomTabsScreenManagerInterface rNSBottomTabsScreenManagerInterface = (RNSBottomTabsScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSBottomTabsScreenManagerInterface.setIconResourceName(t10, str2);
                return;
            case 7:
                ((RNSBottomTabsScreenManagerInterface) this.mViewManager).setOrientation(t10, (String) obj);
                return;
            case '\b':
                RNSBottomTabsScreenManagerInterface rNSBottomTabsScreenManagerInterface2 = (RNSBottomTabsScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNSBottomTabsScreenManagerInterface2.setIsFocused(t10, z10);
                return;
            case '\t':
                RNSBottomTabsScreenManagerInterface rNSBottomTabsScreenManagerInterface3 = (RNSBottomTabsScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z11 = ((Boolean) obj).booleanValue();
                }
                rNSBottomTabsScreenManagerInterface3.setOverrideScrollViewContentInsetAdjustmentBehavior(t10, z11);
                return;
            case '\n':
                RNSBottomTabsScreenManagerInterface rNSBottomTabsScreenManagerInterface4 = (RNSBottomTabsScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    z11 = ((Boolean) obj).booleanValue();
                }
                rNSBottomTabsScreenManagerInterface4.setIsTitleUndefined(t10, z11);
                return;
            case 11:
                RNSBottomTabsScreenManagerInterface rNSBottomTabsScreenManagerInterface5 = (RNSBottomTabsScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSBottomTabsScreenManagerInterface5.setTabKey(t10, str2);
                return;
            case '\f':
                ((RNSBottomTabsScreenManagerInterface) this.mViewManager).setIconImageSource(t10, (ReadableMap) obj);
                return;
            case '\r':
                ((RNSBottomTabsScreenManagerInterface) this.mViewManager).setIconType(t10, (String) obj);
                return;
            case 14:
                RNSBottomTabsScreenManagerInterface rNSBottomTabsScreenManagerInterface6 = (RNSBottomTabsScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSBottomTabsScreenManagerInterface6.setTabBarItemAccessibilityLabel(t10, str2);
                return;
            case 15:
                ((RNSBottomTabsScreenManagerInterface) this.mViewManager).setScrollEdgeAppearance(t10, new DynamicFromObject(obj));
                return;
            case 16:
                RNSBottomTabsScreenManagerInterface rNSBottomTabsScreenManagerInterface7 = (RNSBottomTabsScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSBottomTabsScreenManagerInterface7.setDrawableIconResourceName(t10, str2);
                return;
            case 17:
                ((RNSBottomTabsScreenManagerInterface) this.mViewManager).setStandardAppearance(t10, new DynamicFromObject(obj));
                return;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                RNSBottomTabsScreenManagerInterface rNSBottomTabsScreenManagerInterface8 = (RNSBottomTabsScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSBottomTabsScreenManagerInterface8.setTitle(t10, str2);
                return;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                ((RNSBottomTabsScreenManagerInterface) this.mViewManager).setSystemItem(t10, (String) obj);
                return;
            case 20:
                ((RNSBottomTabsScreenManagerInterface) this.mViewManager).setSelectedIconImageSource(t10, (ReadableMap) obj);
                return;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                RNSBottomTabsScreenManagerInterface rNSBottomTabsScreenManagerInterface9 = (RNSBottomTabsScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSBottomTabsScreenManagerInterface9.setBadgeValue(t10, str2);
                return;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                ((RNSBottomTabsScreenManagerInterface) this.mViewManager).setTabBarItemBadgeBackgroundColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 23:
                RNSBottomTabsScreenManagerInterface rNSBottomTabsScreenManagerInterface10 = (RNSBottomTabsScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSBottomTabsScreenManagerInterface10.setTabBarItemTestID(t10, str2);
                return;
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                ((RNSBottomTabsScreenManagerInterface) this.mViewManager).setTabBarItemBadgeTextColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                RNSBottomTabsScreenManagerInterface rNSBottomTabsScreenManagerInterface11 = (RNSBottomTabsScreenManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSBottomTabsScreenManagerInterface11.setSelectedIconResourceName(t10, str2);
                return;
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                ((RNSBottomTabsScreenManagerInterface) this.mViewManager).setImageIconResource(t10, (ReadableMap) obj);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
