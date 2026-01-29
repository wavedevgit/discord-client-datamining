package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.ColorPropConverter;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.AndroidDrawerLayoutManagerInterface;
import com.facebook.react.views.drawer.ReactDrawerLayoutManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class AndroidDrawerLayoutManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & AndroidDrawerLayoutManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public AndroidDrawerLayoutManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void receiveCommand(T t10, String str, ReadableArray readableArray) {
        str.getClass();
        if (!str.equals(ReactDrawerLayoutManager.COMMAND_CLOSE_DRAWER)) {
            if (!str.equals(ReactDrawerLayoutManager.COMMAND_OPEN_DRAWER)) {
                return;
            }
            ((AndroidDrawerLayoutManagerInterface) this.mViewManager).openDrawer(t10);
            return;
        }
        ((AndroidDrawerLayoutManagerInterface) this.mViewManager).closeDrawer(t10);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        Float valueOf;
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case -2082382380:
                if (str.equals("statusBarBackgroundColor")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1233873500:
                if (str.equals("drawerBackgroundColor")) {
                    c10 = 1;
                    break;
                }
                break;
            case -764307226:
                if (str.equals("keyboardDismissMode")) {
                    c10 = 2;
                    break;
                }
                break;
            case 268251989:
                if (str.equals("drawerWidth")) {
                    c10 = 3;
                    break;
                }
                break;
            case 695891258:
                if (str.equals("drawerPosition")) {
                    c10 = 4;
                    break;
                }
                break;
            case 1857208703:
                if (str.equals("drawerLockMode")) {
                    c10 = 5;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                ((AndroidDrawerLayoutManagerInterface) this.mViewManager).setStatusBarBackgroundColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 1:
                ((AndroidDrawerLayoutManagerInterface) this.mViewManager).setDrawerBackgroundColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 2:
                ((AndroidDrawerLayoutManagerInterface) this.mViewManager).setKeyboardDismissMode(t10, (String) obj);
                return;
            case 3:
                AndroidDrawerLayoutManagerInterface androidDrawerLayoutManagerInterface = (AndroidDrawerLayoutManagerInterface) this.mViewManager;
                if (obj == null) {
                    valueOf = null;
                } else {
                    valueOf = Float.valueOf(((Double) obj).floatValue());
                }
                androidDrawerLayoutManagerInterface.setDrawerWidth(t10, valueOf);
                return;
            case 4:
                ((AndroidDrawerLayoutManagerInterface) this.mViewManager).setDrawerPosition(t10, (String) obj);
                return;
            case 5:
                ((AndroidDrawerLayoutManagerInterface) this.mViewManager).setDrawerLockMode(t10, (String) obj);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
