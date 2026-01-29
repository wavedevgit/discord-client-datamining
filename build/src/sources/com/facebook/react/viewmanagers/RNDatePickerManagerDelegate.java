package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.RNDatePickerManagerInterface;
import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNDatePickerManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNDatePickerManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNDatePickerManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        double doubleValue;
        str.getClass();
        int i10 = 0;
        boolean z10 = false;
        boolean z11 = false;
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1785411759:
                if (str.equals("buttonColor")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1411282677:
                if (str.equals("is24hourSource")) {
                    c10 = 1;
                    break;
                }
                break;
            case -1339516167:
                if (str.equals("minuteInterval")) {
                    c10 = 2;
                    break;
                }
                break;
            case -1235930166:
                if (str.equals("dividerColor")) {
                    c10 = 3;
                    break;
                }
                break;
            case -1097462182:
                if (str.equals("locale")) {
                    c10 = 4;
                    break;
                }
                break;
            case -1063571914:
                if (str.equals("textColor")) {
                    c10 = 5;
                    break;
                }
                break;
            case -292758706:
                if (str.equals("timeZoneOffsetInMinutes")) {
                    c10 = 6;
                    break;
                }
                break;
            case 3076014:
                if (str.equals(InquiryField.DateField.TYPE)) {
                    c10 = 7;
                    break;
                }
                break;
            case 3357091:
                if (str.equals("mode")) {
                    c10 = '\b';
                    break;
                }
                break;
            case 3417674:
                if (str.equals("open")) {
                    c10 = '\t';
                    break;
                }
                break;
            case 104069805:
                if (str.equals("modal")) {
                    c10 = '\n';
                    break;
                }
                break;
            case 110327241:
                if (str.equals("theme")) {
                    c10 = 11;
                    break;
                }
                break;
            case 110371416:
                if (str.equals("title")) {
                    c10 = '\f';
                    break;
                }
                break;
            case 344408077:
                if (str.equals("confirmText")) {
                    c10 = '\r';
                    break;
                }
                break;
            case 1007762652:
                if (str.equals("minimumDate")) {
                    c10 = 14;
                    break;
                }
                break;
            case 1685195246:
                if (str.equals("maximumDate")) {
                    c10 = 15;
                    break;
                }
                break;
            case 1888623303:
                if (str.equals("cancelText")) {
                    c10 = 16;
                    break;
                }
                break;
        }
        double d10 = 0.0d;
        String str2 = null;
        switch (c10) {
            case 0:
                RNDatePickerManagerInterface rNDatePickerManagerInterface = (RNDatePickerManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNDatePickerManagerInterface.setButtonColor(t10, str2);
                return;
            case 1:
                ((RNDatePickerManagerInterface) this.mViewManager).setIs24hourSource(t10, (String) obj);
                return;
            case 2:
                RNDatePickerManagerInterface rNDatePickerManagerInterface2 = (RNDatePickerManagerInterface) this.mViewManager;
                if (obj != null) {
                    i10 = ((Double) obj).intValue();
                }
                rNDatePickerManagerInterface2.setMinuteInterval(t10, i10);
                return;
            case 3:
                RNDatePickerManagerInterface rNDatePickerManagerInterface3 = (RNDatePickerManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNDatePickerManagerInterface3.setDividerColor(t10, str2);
                return;
            case 4:
                RNDatePickerManagerInterface rNDatePickerManagerInterface4 = (RNDatePickerManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNDatePickerManagerInterface4.setLocale(t10, str2);
                return;
            case 5:
                RNDatePickerManagerInterface rNDatePickerManagerInterface5 = (RNDatePickerManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNDatePickerManagerInterface5.setTextColor(t10, str2);
                return;
            case 6:
                RNDatePickerManagerInterface rNDatePickerManagerInterface6 = (RNDatePickerManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNDatePickerManagerInterface6.setTimeZoneOffsetInMinutes(t10, str2);
                return;
            case 7:
                RNDatePickerManagerInterface rNDatePickerManagerInterface7 = (RNDatePickerManagerInterface) this.mViewManager;
                if (obj == null) {
                    doubleValue = Double.NaN;
                } else {
                    doubleValue = ((Double) obj).doubleValue();
                }
                rNDatePickerManagerInterface7.setDate(t10, doubleValue);
                return;
            case '\b':
                ((RNDatePickerManagerInterface) this.mViewManager).setMode(t10, (String) obj);
                return;
            case '\t':
                RNDatePickerManagerInterface rNDatePickerManagerInterface8 = (RNDatePickerManagerInterface) this.mViewManager;
                if (obj != null) {
                    z11 = ((Boolean) obj).booleanValue();
                }
                rNDatePickerManagerInterface8.setOpen(t10, z11);
                return;
            case '\n':
                RNDatePickerManagerInterface rNDatePickerManagerInterface9 = (RNDatePickerManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNDatePickerManagerInterface9.setModal(t10, z10);
                return;
            case 11:
                ((RNDatePickerManagerInterface) this.mViewManager).setTheme(t10, (String) obj);
                return;
            case '\f':
                RNDatePickerManagerInterface rNDatePickerManagerInterface10 = (RNDatePickerManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNDatePickerManagerInterface10.setTitle(t10, str2);
                return;
            case '\r':
                RNDatePickerManagerInterface rNDatePickerManagerInterface11 = (RNDatePickerManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNDatePickerManagerInterface11.setConfirmText(t10, str2);
                return;
            case 14:
                RNDatePickerManagerInterface rNDatePickerManagerInterface12 = (RNDatePickerManagerInterface) this.mViewManager;
                if (obj != null) {
                    d10 = ((Double) obj).doubleValue();
                }
                rNDatePickerManagerInterface12.setMinimumDate(t10, d10);
                return;
            case 15:
                RNDatePickerManagerInterface rNDatePickerManagerInterface13 = (RNDatePickerManagerInterface) this.mViewManager;
                if (obj != null) {
                    d10 = ((Double) obj).doubleValue();
                }
                rNDatePickerManagerInterface13.setMaximumDate(t10, d10);
                return;
            case 16:
                RNDatePickerManagerInterface rNDatePickerManagerInterface14 = (RNDatePickerManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNDatePickerManagerInterface14.setCancelText(t10, str2);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
