package com.henninghall.date_picker.pickers;

import android.graphics.Paint;
import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface a {

    /* renamed from: com.henninghall.date_picker.pickers.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0200a {
        void a();

        void b();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {
        void a(a aVar, int i10, int i11);
    }

    void a(int i10, boolean z10);

    void b(int i10);

    boolean c();

    int getValue();

    View getView();

    void setDisplayedValues(String[] strArr);

    void setDividerColor(String str);

    void setMaxValue(int i10);

    void setMinValue(int i10);

    void setOnValueChangeListenerInScrolling(b bVar);

    void setOnValueChangedListener(InterfaceC0200a interfaceC0200a);

    void setTextAlign(Paint.Align align);

    void setTextColor(String str);

    void setValue(int i10);

    void setVisibility(int i10);

    void setWrapSelectorWheel(boolean z10);
}
