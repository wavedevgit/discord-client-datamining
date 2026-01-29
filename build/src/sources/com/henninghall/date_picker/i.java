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
    private cl.e f17684d;

    /* renamed from: e  reason: collision with root package name */
    private n f17685e;

    /* renamed from: i  reason: collision with root package name */
    private ArrayList f17686i;

    /* renamed from: o  reason: collision with root package name */
    private final Runnable f17687o;

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
        super(c.f17608a);
        this.f17685e = new n();
        this.f17686i = new ArrayList();
        this.f17687o = new a();
        LinearLayout linearLayout = new LinearLayout(getContext());
        LayoutInflater.from(getContext()).inflate(this.f17685e.f17726o.d(), linearLayout);
        addView(linearLayout, layoutParams);
        this.f17684d = new cl.e(this.f17685e, this);
    }

    private boolean b(String... strArr) {
        for (String str : strArr) {
            if (this.f17686i.contains(str)) {
                return true;
            }
        }
        return false;
    }

    public void a(cl.d dVar) {
        this.f17684d.b(dVar);
    }

    public void c() {
        if (b("textColor")) {
            this.f17684d.j();
        }
        if (b("mode", "is24hourSource")) {
            this.f17684d.l();
        }
        if (b("mode", "locale", "is24hourSource")) {
            this.f17684d.k();
        }
        if (b(InquiryField.DateField.TYPE, "locale", "maximumDate", "minimumDate", "minuteInterval", "mode", "timezoneOffsetInMinutes")) {
            this.f17684d.h();
        }
        if (b("locale")) {
            cl.a.a(this.f17685e.u());
        }
        if (b("dividerColor")) {
            this.f17684d.f(this.f17685e.p());
        }
        this.f17684d.g();
        this.f17686i = new ArrayList();
    }

    public void d(String str, Dynamic dynamic) {
        this.f17685e.F(str, dynamic);
        this.f17686i.add(str);
    }

    public String getDate() {
        return this.f17685e.f17726o.a();
    }

    public String getPickerId() {
        return this.f17685e.q();
    }

    @Override // android.widget.RelativeLayout, android.view.View, android.view.ViewParent
    public void requestLayout() {
        super.requestLayout();
        post(this.f17687o);
    }
}
