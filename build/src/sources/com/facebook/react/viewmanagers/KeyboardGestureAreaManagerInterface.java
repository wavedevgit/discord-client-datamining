package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.ViewManagerWithGeneratedInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface KeyboardGestureAreaManagerInterface<T extends View> extends ViewManagerWithGeneratedInterface {
    void setEnableSwipeToDismiss(T t10, boolean z10);

    void setInterpolator(T t10, String str);

    void setOffset(T t10, double d10);

    void setShowOnSwipeUp(T t10, boolean z10);

    void setTextInputNativeID(T t10, String str);
}
