package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.ViewManagerWithGeneratedInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface KeyboardControllerViewManagerInterface<T extends View> extends ViewManagerWithGeneratedInterface {
    void setEnabled(T t10, boolean z10);

    void setNavigationBarTranslucent(T t10, boolean z10);

    void setPreserveEdgeToEdge(T t10, boolean z10);

    void setStatusBarTranslucent(T t10, boolean z10);
}
