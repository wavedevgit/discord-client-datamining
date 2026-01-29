package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.ColorPropConverter;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.viewmanagers.AndroidProgressBarManagerInterface;
import com.facebook.react.views.progressbar.ReactProgressBarViewManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class AndroidProgressBarManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & AndroidProgressBarManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public AndroidProgressBarManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        double doubleValue;
        String str2;
        str.getClass();
        boolean z10 = true;
        boolean z11 = false;
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1001078227:
                if (str.equals(ReactProgressBarViewManager.PROP_PROGRESS)) {
                    c10 = 0;
                    break;
                }
                break;
            case -877170387:
                if (str.equals(ViewProps.TEST_ID)) {
                    c10 = 1;
                    break;
                }
                break;
            case -676876213:
                if (str.equals(ReactProgressBarViewManager.PROP_ATTR)) {
                    c10 = 2;
                    break;
                }
                break;
            case 94842723:
                if (str.equals(ViewProps.COLOR)) {
                    c10 = 3;
                    break;
                }
                break;
            case 633138363:
                if (str.equals(ReactProgressBarViewManager.PROP_INDETERMINATE)) {
                    c10 = 4;
                    break;
                }
                break;
            case 1118509918:
                if (str.equals(ReactProgressBarViewManager.PROP_ANIMATING)) {
                    c10 = 5;
                    break;
                }
                break;
            case 1804741442:
                if (str.equals(ReactProgressBarViewManager.PROP_STYLE)) {
                    c10 = 6;
                    break;
                }
                break;
        }
        String str3 = null;
        switch (c10) {
            case 0:
                AndroidProgressBarManagerInterface androidProgressBarManagerInterface = (AndroidProgressBarManagerInterface) this.mViewManager;
                if (obj == null) {
                    doubleValue = 0.0d;
                } else {
                    doubleValue = ((Double) obj).doubleValue();
                }
                androidProgressBarManagerInterface.setProgress(t10, doubleValue);
                return;
            case 1:
                AndroidProgressBarManagerInterface androidProgressBarManagerInterface2 = (AndroidProgressBarManagerInterface) this.mViewManager;
                if (obj == null) {
                    str2 = "";
                } else {
                    str2 = (String) obj;
                }
                androidProgressBarManagerInterface2.setTestID(t10, str2);
                return;
            case 2:
                AndroidProgressBarManagerInterface androidProgressBarManagerInterface3 = (AndroidProgressBarManagerInterface) this.mViewManager;
                if (obj != null) {
                    str3 = (String) obj;
                }
                androidProgressBarManagerInterface3.setTypeAttr(t10, str3);
                return;
            case 3:
                ((AndroidProgressBarManagerInterface) this.mViewManager).setColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 4:
                AndroidProgressBarManagerInterface androidProgressBarManagerInterface4 = (AndroidProgressBarManagerInterface) this.mViewManager;
                if (obj != null) {
                    z11 = ((Boolean) obj).booleanValue();
                }
                androidProgressBarManagerInterface4.setIndeterminate(t10, z11);
                return;
            case 5:
                AndroidProgressBarManagerInterface androidProgressBarManagerInterface5 = (AndroidProgressBarManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                androidProgressBarManagerInterface5.setAnimating(t10, z10);
                return;
            case 6:
                AndroidProgressBarManagerInterface androidProgressBarManagerInterface6 = (AndroidProgressBarManagerInterface) this.mViewManager;
                if (obj != null) {
                    str3 = (String) obj;
                }
                androidProgressBarManagerInterface6.setStyleAttr(t10, str3);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
