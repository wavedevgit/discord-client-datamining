package com.henninghall.date_picker;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import com.facebook.react.bridge.Dynamic;
import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i extends RelativeLayout {

    /* renamed from: d  reason: collision with root package name */
    private kl.e f17545d;

    /* renamed from: e  reason: collision with root package name */
    private n f17546e;

    /* renamed from: i  reason: collision with root package name */
    private ArrayList f17547i;

    /* renamed from: o  reason: collision with root package name */
    private final Runnable f17548o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            i iVar = i.this;
            iVar.measure(View.MeasureSpec.makeMeasureSpec(iVar.getWidth(), 1073741824), View.MeasureSpec.makeMeasureSpec(i.this.getHeight(), 1073741824));
            i iVar2 = i.this;
            iVar2.layout(iVar2.getLeft(), i.this.getTop(), i.this.getRight(), i.this.getBottom());
        }
    }

    public i(ViewGroup.LayoutParams layoutParams) {
        super(c.f17469a);
        this.f17546e = new n();
        this.f17547i = new ArrayList();
        this.f17548o = new a();
        LinearLayout linearLayout = new LinearLayout(getContext());
        LayoutInflater.from(getContext()).inflate(this.f17546e.f17587o.d(), linearLayout);
        addView(linearLayout, layoutParams);
        this.f17545d = new kl.e(this.f17546e, this);
    }

    private boolean b(String... strArr) {
        for (String str : strArr) {
            if (this.f17547i.contains(str)) {
                return true;
            }
        }
        return false;
    }

    public void a(kl.d dVar) {
        this.f17545d.b(dVar);
    }

    public void c() {
        if (b("textColor")) {
            this.f17545d.j();
        }
        if (b("mode", "is24hourSource")) {
            this.f17545d.l();
        }
        if (b("mode", "locale", "is24hourSource")) {
            this.f17545d.k();
        }
        if (b(InquiryField.DateField.TYPE, "locale", "maximumDate", "minimumDate", "minuteInterval", "mode", "timezoneOffsetInMinutes")) {
            this.f17545d.h();
        }
        if (b("locale")) {
            kl.a.a(this.f17546e.u());
        }
        if (b("dividerColor")) {
            this.f17545d.f(this.f17546e.p());
        }
        this.f17545d.g();
        this.f17547i = new ArrayList();
    }

    public void d(String str, Dynamic dynamic) {
        this.f17546e.F(str, dynamic);
        this.f17547i.add(str);
    }

    public String getDate() {
        return this.f17546e.f17587o.a();
    }

    public String getPickerId() {
        return this.f17546e.q();
    }

    @Override // android.widget.RelativeLayout, android.view.View, android.view.ViewParent
    public void requestLayout() {
        super.requestLayout();
        post(this.f17548o);
    }
}
