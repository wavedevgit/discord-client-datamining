package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.ViewManagerWithGeneratedInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface AutoLayoutViewManagerInterface<T extends View> extends ViewManagerWithGeneratedInterface {
    void setDisableAutoLayout(T t10, boolean z10);

    void setEnableInstrumentation(T t10, boolean z10);

    void setHorizontal(T t10, boolean z10);

    void setRenderAheadOffset(T t10, double d10);

    void setScrollOffset(T t10, double d10);

    void setWindowSize(T t10, double d10);
}
