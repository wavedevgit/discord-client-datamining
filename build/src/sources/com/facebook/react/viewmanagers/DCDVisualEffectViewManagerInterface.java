package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.ViewManagerWithGeneratedInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface DCDVisualEffectViewManagerInterface<T extends View> extends ViewManagerWithGeneratedInterface {
    void setBlurAmount(T t10, float f10);

    void setBlurTargetViewNativeId(T t10, String str);

    void setBlurTintIOSParityCompensationRgba(T t10, String str);

    void setBlurTintRgba(T t10, String str);
}
