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
    private fl.e f16675d;

    /* renamed from: e  reason: collision with root package name */
    private n f16676e;

    /* renamed from: i  reason: collision with root package name */
    private ArrayList f16677i;

    /* renamed from: o  reason: collision with root package name */
    private final Runnable f16678o;

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
        super(c.f16599a);
        this.f16676e = new n();
        this.f16677i = new ArrayList();
        this.f16678o = new a();
        LinearLayout linearLayout = new LinearLayout(getContext());
        LayoutInflater.from(getContext()).inflate(this.f16676e.f16717o.d(), linearLayout);
        addView(linearLayout, layoutParams);
        this.f16675d = new fl.e(this.f16676e, this);
    }

    private boolean b(String... strArr) {
        for (String str : strArr) {
            if (this.f16677i.contains(str)) {
                return true;
            }
        }
        return false;
    }

    public void a(fl.d dVar) {
        this.f16675d.b(dVar);
    }

    public void c() {
        if (b("textColor")) {
            this.f16675d.j();
        }
        if (b("mode", "is24hourSource")) {
            this.f16675d.l();
        }
        if (b("mode", "locale", "is24hourSource")) {
            this.f16675d.k();
        }
        if (b(InquiryField.DateField.TYPE, "locale", "maximumDate", "minimumDate", "minuteInterval", "mode", "timezoneOffsetInMinutes")) {
            this.f16675d.h();
        }
        if (b("locale")) {
            fl.a.a(this.f16676e.u());
        }
        if (b("dividerColor")) {
            this.f16675d.f(this.f16676e.p());
        }
        this.f16675d.g();
        this.f16677i = new ArrayList();
    }

    public void d(String str, Dynamic dynamic) {
        this.f16676e.F(str, dynamic);
        this.f16677i.add(str);
    }

    public String getDate() {
        return this.f16676e.f16717o.a();
    }

    public String getPickerId() {
        return this.f16676e.q();
    }

    @Override // android.widget.RelativeLayout, android.view.View, android.view.ViewParent
    public void requestLayout() {
        super.requestLayout();
        post(this.f16678o);
    }
}
