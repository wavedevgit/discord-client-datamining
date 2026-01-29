package com.facebook.react.viewmanagers;

import android.view.View;
import com.appsflyer.AdRevenueScheme;
import com.facebook.react.bridge.ColorPropConverter;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.RNSSearchBarManagerInterface;
import com.facebook.react.views.textinput.ReactTextInputShadowNode;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSSearchBarManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSSearchBarManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSSearchBarManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void receiveCommand(T t10, String str, ReadableArray readableArray) {
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1833485118:
                if (str.equals("cancelSearch")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1270906598:
                if (str.equals("clearText")) {
                    c10 = 1;
                    break;
                }
                break;
            case -664358976:
                if (str.equals("toggleCancelButton")) {
                    c10 = 2;
                    break;
                }
                break;
            case 3027047:
                if (str.equals("blur")) {
                    c10 = 3;
                    break;
                }
                break;
            case 97604824:
                if (str.equals("focus")) {
                    c10 = 4;
                    break;
                }
                break;
            case 1984984239:
                if (str.equals("setText")) {
                    c10 = 5;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                ((RNSSearchBarManagerInterface) this.mViewManager).cancelSearch(t10);
                return;
            case 1:
                ((RNSSearchBarManagerInterface) this.mViewManager).clearText(t10);
                return;
            case 2:
                ((RNSSearchBarManagerInterface) this.mViewManager).toggleCancelButton(t10, readableArray.getBoolean(0));
                return;
            case 3:
                ((RNSSearchBarManagerInterface) this.mViewManager).blur(t10);
                return;
            case 4:
                ((RNSSearchBarManagerInterface) this.mViewManager).focus(t10);
                return;
            case 5:
                ((RNSSearchBarManagerInterface) this.mViewManager).setText(t10, readableArray.getString(0));
                return;
            default:
                return;
        }
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        str.getClass();
        boolean z10 = true;
        boolean z11 = false;
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1619312835:
                if (str.equals("hideNavigationBar")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1465798051:
                if (str.equals("headerIconColor")) {
                    c10 = 1;
                    break;
                }
                break;
            case -1339545093:
                if (str.equals("autoCapitalize")) {
                    c10 = 2;
                    break;
                }
                break;
            case -1063571914:
                if (str.equals("textColor")) {
                    c10 = 3;
                    break;
                }
                break;
            case -336520619:
                if (str.equals("barTintColor")) {
                    c10 = 4;
                    break;
                }
                break;
            case -256845969:
                if (str.equals("hintTextColor")) {
                    c10 = 5;
                    break;
                }
                break;
            case -186579527:
                if (str.equals("hideWhenScrolling")) {
                    c10 = 6;
                    break;
                }
                break;
            case -146361959:
                if (str.equals("cancelButtonText")) {
                    c10 = 7;
                    break;
                }
                break;
            case -109380883:
                if (str.equals("disableBackButtonOverride")) {
                    c10 = '\b';
                    break;
                }
                break;
            case -39414888:
                if (str.equals("shouldShowHintSearchIcon")) {
                    c10 = '\t';
                    break;
                }
                break;
            case 598246771:
                if (str.equals(ReactTextInputShadowNode.PROP_PLACEHOLDER)) {
                    c10 = '\n';
                    break;
                }
                break;
            case 1327599912:
                if (str.equals("tintColor")) {
                    c10 = 11;
                    break;
                }
                break;
            case 1584806451:
                if (str.equals("obscureBackground")) {
                    c10 = '\f';
                    break;
                }
                break;
            case 1706976804:
                if (str.equals("inputType")) {
                    c10 = '\r';
                    break;
                }
                break;
            case 1792938725:
                if (str.equals(AdRevenueScheme.PLACEMENT)) {
                    c10 = 14;
                    break;
                }
                break;
        }
        String str2 = null;
        switch (c10) {
            case 0:
                RNSSearchBarManagerInterface rNSSearchBarManagerInterface = (RNSSearchBarManagerInterface) this.mViewManager;
                if (obj != null) {
                    z11 = ((Boolean) obj).booleanValue();
                }
                rNSSearchBarManagerInterface.setHideNavigationBar(t10, z11);
                return;
            case 1:
                ((RNSSearchBarManagerInterface) this.mViewManager).setHeaderIconColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 2:
                ((RNSSearchBarManagerInterface) this.mViewManager).setAutoCapitalize(t10, (String) obj);
                return;
            case 3:
                ((RNSSearchBarManagerInterface) this.mViewManager).setTextColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 4:
                ((RNSSearchBarManagerInterface) this.mViewManager).setBarTintColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 5:
                ((RNSSearchBarManagerInterface) this.mViewManager).setHintTextColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 6:
                RNSSearchBarManagerInterface rNSSearchBarManagerInterface2 = (RNSSearchBarManagerInterface) this.mViewManager;
                if (obj != null) {
                    z11 = ((Boolean) obj).booleanValue();
                }
                rNSSearchBarManagerInterface2.setHideWhenScrolling(t10, z11);
                return;
            case 7:
                RNSSearchBarManagerInterface rNSSearchBarManagerInterface3 = (RNSSearchBarManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSSearchBarManagerInterface3.setCancelButtonText(t10, str2);
                return;
            case '\b':
                RNSSearchBarManagerInterface rNSSearchBarManagerInterface4 = (RNSSearchBarManagerInterface) this.mViewManager;
                if (obj != null) {
                    z11 = ((Boolean) obj).booleanValue();
                }
                rNSSearchBarManagerInterface4.setDisableBackButtonOverride(t10, z11);
                return;
            case '\t':
                RNSSearchBarManagerInterface rNSSearchBarManagerInterface5 = (RNSSearchBarManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNSSearchBarManagerInterface5.setShouldShowHintSearchIcon(t10, z10);
                return;
            case '\n':
                RNSSearchBarManagerInterface rNSSearchBarManagerInterface6 = (RNSSearchBarManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSSearchBarManagerInterface6.setPlaceholder(t10, str2);
                return;
            case 11:
                ((RNSSearchBarManagerInterface) this.mViewManager).setTintColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case '\f':
                RNSSearchBarManagerInterface rNSSearchBarManagerInterface7 = (RNSSearchBarManagerInterface) this.mViewManager;
                if (obj != null) {
                    z11 = ((Boolean) obj).booleanValue();
                }
                rNSSearchBarManagerInterface7.setObscureBackground(t10, z11);
                return;
            case '\r':
                RNSSearchBarManagerInterface rNSSearchBarManagerInterface8 = (RNSSearchBarManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSSearchBarManagerInterface8.setInputType(t10, str2);
                return;
            case 14:
                ((RNSSearchBarManagerInterface) this.mViewManager).setPlacement(t10, (String) obj);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
