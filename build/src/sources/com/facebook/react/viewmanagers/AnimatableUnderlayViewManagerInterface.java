package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.ViewManagerWithGeneratedInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface AnimatableUnderlayViewManagerInterface<T extends View> extends ViewManagerWithGeneratedInterface {
    void setAnimatedBackgroundColorRgba(T t10, String str);

    void setAnimatedBorderColorRgba(T t10, String str);

    void setAnimatedBorderWidth(T t10, float f10);

    void setAnimatedBottomLeftRadius(T t10, float f10);

    void setAnimatedBottomRightRadius(T t10, float f10);

    void setAnimatedHeight(T t10, float f10);

    void setAnimatedTopLeftRadius(T t10, float f10);

    void setAnimatedTopRightRadius(T t10, float f10);

    void setAnimatedWidth(T t10, float f10);

    void setClipDirectionX(T t10, String str);

    void setClipDirectionY(T t10, String str);
}
