package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.ViewManagerWithGeneratedInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface ActivityIndicatorViewManagerInterface<T extends View> extends ViewManagerWithGeneratedInterface {
    void setAnimating(T t10, boolean z10);

    void setColor(T t10, Integer num);

    void setHidesWhenStopped(T t10, boolean z10);

    void setSize(T t10, String str);
}
