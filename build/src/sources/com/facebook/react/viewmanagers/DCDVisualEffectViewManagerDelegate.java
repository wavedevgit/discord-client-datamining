package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.DCDVisualEffectViewManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class DCDVisualEffectViewManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & DCDVisualEffectViewManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public DCDVisualEffectViewManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        float floatValue;
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1903475809:
                if (str.equals("blurAmount")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1896608177:
                if (str.equals("blurTargetViewNativeId")) {
                    c10 = 1;
                    break;
                }
                break;
            case -115969962:
                if (str.equals("blurTintRgba")) {
                    c10 = 2;
                    break;
                }
                break;
            case 1230373318:
                if (str.equals("blurTintIOSParityCompensationRgba")) {
                    c10 = 3;
                    break;
                }
                break;
        }
        String str2 = null;
        switch (c10) {
            case 0:
                DCDVisualEffectViewManagerInterface dCDVisualEffectViewManagerInterface = (DCDVisualEffectViewManagerInterface) this.mViewManager;
                if (obj == null) {
                    floatValue = Float.NaN;
                } else {
                    floatValue = ((Double) obj).floatValue();
                }
                dCDVisualEffectViewManagerInterface.setBlurAmount(t10, floatValue);
                return;
            case 1:
                DCDVisualEffectViewManagerInterface dCDVisualEffectViewManagerInterface2 = (DCDVisualEffectViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                dCDVisualEffectViewManagerInterface2.setBlurTargetViewNativeId(t10, str2);
                return;
            case 2:
                DCDVisualEffectViewManagerInterface dCDVisualEffectViewManagerInterface3 = (DCDVisualEffectViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                dCDVisualEffectViewManagerInterface3.setBlurTintRgba(t10, str2);
                return;
            case 3:
                DCDVisualEffectViewManagerInterface dCDVisualEffectViewManagerInterface4 = (DCDVisualEffectViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                dCDVisualEffectViewManagerInterface4.setBlurTintIOSParityCompensationRgba(t10, str2);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
