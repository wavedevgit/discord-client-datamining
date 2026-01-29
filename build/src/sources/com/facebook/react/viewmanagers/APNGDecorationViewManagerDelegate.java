package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.APNGDecorationViewManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class APNGDecorationViewManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & APNGDecorationViewManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public APNGDecorationViewManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void receiveCommand(T t10, String str, ReadableArray readableArray) {
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case 3443508:
                if (str.equals("play")) {
                    c10 = 0;
                    break;
                }
                break;
            case 3526264:
                if (str.equals("seek")) {
                    c10 = 1;
                    break;
                }
                break;
            case 106440182:
                if (str.equals("pause")) {
                    c10 = 2;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                ((APNGDecorationViewManagerInterface) this.mViewManager).play(t10);
                return;
            case 1:
                ((APNGDecorationViewManagerInterface) this.mViewManager).seek(t10, readableArray.getInt(0));
                return;
            case 2:
                ((APNGDecorationViewManagerInterface) this.mViewManager).pause(t10);
                return;
            default:
                return;
        }
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        String str2;
        boolean booleanValue;
        str.getClass();
        if (!str.equals("url")) {
            if (!str.equals("autoplay")) {
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
            }
            APNGDecorationViewManagerInterface aPNGDecorationViewManagerInterface = (APNGDecorationViewManagerInterface) this.mViewManager;
            if (obj == null) {
                booleanValue = false;
            } else {
                booleanValue = ((Boolean) obj).booleanValue();
            }
            aPNGDecorationViewManagerInterface.setAutoplay(t10, booleanValue);
            return;
        }
        APNGDecorationViewManagerInterface aPNGDecorationViewManagerInterface2 = (APNGDecorationViewManagerInterface) this.mViewManager;
        if (obj == null) {
            str2 = null;
        } else {
            str2 = (String) obj;
        }
        aPNGDecorationViewManagerInterface2.setUrl(t10, str2);
    }
}
