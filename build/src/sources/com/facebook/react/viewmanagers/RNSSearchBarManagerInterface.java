package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.ViewManagerWithGeneratedInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface RNSSearchBarManagerInterface<T extends View> extends ViewManagerWithGeneratedInterface {
    void blur(T t10);

    void cancelSearch(T t10);

    void clearText(T t10);

    void focus(T t10);

    void setAutoCapitalize(T t10, String str);

    void setBarTintColor(T t10, Integer num);

    void setCancelButtonText(T t10, String str);

    void setDisableBackButtonOverride(T t10, boolean z10);

    void setHeaderIconColor(T t10, Integer num);

    void setHideNavigationBar(T t10, boolean z10);

    void setHideWhenScrolling(T t10, boolean z10);

    void setHintTextColor(T t10, Integer num);

    void setInputType(T t10, String str);

    void setObscureBackground(T t10, boolean z10);

    void setPlaceholder(T t10, String str);

    void setPlacement(T t10, String str);

    void setShouldShowHintSearchIcon(T t10, boolean z10);

    void setText(T t10, String str);

    void setTextColor(T t10, Integer num);

    void setTintColor(T t10, Integer num);

    void toggleCancelButton(T t10, boolean z10);
}
