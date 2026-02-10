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
    private kl.e f17544d;

    /* renamed from: e  reason: collision with root package name */
    private n f17545e;

    /* renamed from: i  reason: collision with root package name */
    private ArrayList f17546i;

    /* renamed from: o  reason: collision with root package name */
    private final Runnable f17547o;

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
        super(c.f17468a);
        this.f17545e = new n();
        this.f17546i = new ArrayList();
        this.f17547o = new a();
        LinearLayout linearLayout = new LinearLayout(getContext());
        LayoutInflater.from(getContext()).inflate(this.f17545e.f17586o.d(), linearLayout);
        addView(linearLayout, layoutParams);
        this.f17544d = new kl.e(this.f17545e, this);
    }

    private boolean b(String... strArr) {
        for (String str : strArr) {
            if (this.f17546i.contains(str)) {
                return true;
            }
        }
        return false;
    }

    public void a(kl.d dVar) {
        this.f17544d.b(dVar);
    }

    public void c() {
        if (b("textColor")) {
            this.f17544d.j();
        }
        if (b("mode", "is24hourSource")) {
            this.f17544d.l();
        }
        if (b("mode", "locale", "is24hourSource")) {
            this.f17544d.k();
        }
        if (b(InquiryField.DateField.TYPE, "locale", "maximumDate", "minimumDate", "minuteInterval", "mode", "timezoneOffsetInMinutes")) {
            this.f17544d.h();
        }
        if (b("locale")) {
            kl.a.a(this.f17545e.u());
        }
        if (b("dividerColor")) {
            this.f17544d.f(this.f17545e.p());
        }
        this.f17544d.g();
        this.f17546i = new ArrayList();
    }

    public void d(String str, Dynamic dynamic) {
        this.f17545e.F(str, dynamic);
        this.f17546i.add(str);
    }

    public String getDate() {
        return this.f17545e.f17586o.a();
    }

    public String getPickerId() {
        return this.f17545e.q();
    }

    @Override // android.widget.RelativeLayout, android.view.View, android.view.ViewParent
    public void requestLayout() {
        super.requestLayout();
        post(this.f17547o);
    }
}
