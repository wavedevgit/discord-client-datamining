package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.RNLinearGradientManagerInterface;
import com.rnlineargradient.LinearGradientManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNLinearGradientManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNLinearGradientManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNLinearGradientManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        float floatValue;
        str.getClass();
        boolean z10 = false;
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1587147186:
                if (str.equals(LinearGradientManager.PROP_START_POINT)) {
                    c10 = 0;
                    break;
                }
                break;
            case -1354842768:
                if (str.equals(LinearGradientManager.PROP_COLORS)) {
                    c10 = 1;
                    break;
                }
                break;
            case -1197189282:
                if (str.equals(LinearGradientManager.PROP_LOCATIONS)) {
                    c10 = 2;
                    break;
                }
                break;
            case -310960244:
                if (str.equals(LinearGradientManager.PROP_USE_ANGLE)) {
                    c10 = 3;
                    break;
                }
                break;
            case 92960979:
                if (str.equals(LinearGradientManager.PROP_ANGLE)) {
                    c10 = 4;
                    break;
                }
                break;
            case 736258857:
                if (str.equals(LinearGradientManager.PROP_BORDER_RADII)) {
                    c10 = 5;
                    break;
                }
                break;
            case 866846472:
                if (str.equals(LinearGradientManager.PROP_ANGLE_CENTER)) {
                    c10 = 6;
                    break;
                }
                break;
            case 1711549813:
                if (str.equals(LinearGradientManager.PROP_END_POINT)) {
                    c10 = 7;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                ((RNLinearGradientManagerInterface) this.mViewManager).setStartPoint(t10, (ReadableMap) obj);
                return;
            case 1:
                ((RNLinearGradientManagerInterface) this.mViewManager).setColors(t10, (ReadableArray) obj);
                return;
            case 2:
                ((RNLinearGradientManagerInterface) this.mViewManager).setLocations(t10, (ReadableArray) obj);
                return;
            case 3:
                RNLinearGradientManagerInterface rNLinearGradientManagerInterface = (RNLinearGradientManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNLinearGradientManagerInterface.setUseAngle(t10, z10);
                return;
            case 4:
                RNLinearGradientManagerInterface rNLinearGradientManagerInterface2 = (RNLinearGradientManagerInterface) this.mViewManager;
                if (obj == null) {
                    floatValue = 0.0f;
                } else {
                    floatValue = ((Double) obj).floatValue();
                }
                rNLinearGradientManagerInterface2.setAngle(t10, floatValue);
                return;
            case 5:
                ((RNLinearGradientManagerInterface) this.mViewManager).setBorderRadii(t10, (ReadableArray) obj);
                return;
            case 6:
                ((RNLinearGradientManagerInterface) this.mViewManager).setAngleCenter(t10, (ReadableMap) obj);
                return;
            case 7:
                ((RNLinearGradientManagerInterface) this.mViewManager).setEndPoint(t10, (ReadableMap) obj);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
