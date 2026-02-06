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
    private hl.e f16655d;

    /* renamed from: e  reason: collision with root package name */
    private n f16656e;

    /* renamed from: i  reason: collision with root package name */
    private ArrayList f16657i;

    /* renamed from: o  reason: collision with root package name */
    private final Runnable f16658o;

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
        super(c.f16579a);
        this.f16656e = new n();
        this.f16657i = new ArrayList();
        this.f16658o = new a();
        LinearLayout linearLayout = new LinearLayout(getContext());
        LayoutInflater.from(getContext()).inflate(this.f16656e.f16697o.d(), linearLayout);
        addView(linearLayout, layoutParams);
        this.f16655d = new hl.e(this.f16656e, this);
    }

    private boolean b(String... strArr) {
        for (String str : strArr) {
            if (this.f16657i.contains(str)) {
                return true;
            }
        }
        return false;
    }

    public void a(hl.d dVar) {
        this.f16655d.b(dVar);
    }

    public void c() {
        if (b("textColor")) {
            this.f16655d.j();
        }
        if (b("mode", "is24hourSource")) {
            this.f16655d.l();
        }
        if (b("mode", "locale", "is24hourSource")) {
            this.f16655d.k();
        }
        if (b(InquiryField.DateField.TYPE, "locale", "maximumDate", "minimumDate", "minuteInterval", "mode", "timezoneOffsetInMinutes")) {
            this.f16655d.h();
        }
        if (b("locale")) {
            hl.a.a(this.f16656e.u());
        }
        if (b("dividerColor")) {
            this.f16655d.f(this.f16656e.p());
        }
        this.f16655d.g();
        this.f16657i = new ArrayList();
    }

    public void d(String str, Dynamic dynamic) {
        this.f16656e.F(str, dynamic);
        this.f16657i.add(str);
    }

    public String getDate() {
        return this.f16656e.f16697o.a();
    }

    public String getPickerId() {
        return this.f16656e.q();
    }

    @Override // android.widget.RelativeLayout, android.view.View, android.view.ViewParent
    public void requestLayout() {
        super.requestLayout();
        post(this.f16658o);
    }
}
