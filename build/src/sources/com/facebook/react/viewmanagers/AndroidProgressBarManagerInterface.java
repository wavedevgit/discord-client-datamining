package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.ViewManagerWithGeneratedInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface AndroidProgressBarManagerInterface<T extends View> extends ViewManagerWithGeneratedInterface {
    void setAnimating(T t10, boolean z10);

    void setColor(T t10, Integer num);

    void setIndeterminate(T t10, boolean z10);

    void setProgress(T t10, double d10);

    void setStyleAttr(T t10, String str);

    void setTestID(T t10, String str);

    void setTypeAttr(T t10, String str);
}
