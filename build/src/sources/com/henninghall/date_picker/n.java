package com.henninghall.date_picker;

import com.facebook.react.bridge.Dynamic;
import com.facebook.react.devsupport.StackTraceHelper;
import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import j$.util.DesugarTimeZone;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Locale;
import java.util.TimeZone;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class n {

    /* renamed from: a  reason: collision with root package name */
    private Calendar f16683a = null;

    /* renamed from: b  reason: collision with root package name */
    private final gl.a f16684b = new gl.a();

    /* renamed from: c  reason: collision with root package name */
    private final gl.j f16685c = new gl.j();

    /* renamed from: d  reason: collision with root package name */
    private final gl.f f16686d = new gl.f();

    /* renamed from: e  reason: collision with root package name */
    private final gl.l f16687e = new gl.l();

    /* renamed from: f  reason: collision with root package name */
    private final gl.i f16688f = new gl.i();

    /* renamed from: g  reason: collision with root package name */
    private final gl.h f16689g = new gl.h();

    /* renamed from: h  reason: collision with root package name */
    private final gl.g f16690h = new gl.g();

    /* renamed from: i  reason: collision with root package name */
    private final gl.m f16691i = new gl.m();

    /* renamed from: j  reason: collision with root package name */
    private final gl.c f16692j = new gl.c();

    /* renamed from: k  reason: collision with root package name */
    private final gl.e f16693k = new gl.e();

    /* renamed from: l  reason: collision with root package name */
    private final gl.d f16694l = new gl.d();

    /* renamed from: m  reason: collision with root package name */
    private final gl.b f16695m = new gl.b();

    /* renamed from: n  reason: collision with root package name */
    private final HashMap f16696n = new a();

    /* renamed from: o  reason: collision with root package name */
    public d f16697o = new d(this);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends HashMap {
        a() {
            put(InquiryField.DateField.TYPE, n.this.f16684b);
            put("mode", n.this.f16685c);
            put("locale", n.this.f16686d);
            put("textColor", n.this.f16687e);
            put("minuteInterval", n.this.f16688f);
            put("minimumDate", n.this.f16689g);
            put("maximumDate", n.this.f16690h);
            put("timezoneOffsetInMinutes", n.this.f16691i);
            put("height", n.this.f16692j);
            put("is24hourSource", n.this.f16693k);
            put(StackTraceHelper.ID_KEY, n.this.f16694l);
            put("dividerColor", n.this.f16695m);
        }
    }

    private gl.k B(String str) {
        return (gl.k) this.f16696n.get(str);
    }

    private Calendar m(gl.k kVar) {
        Calendar g10 = o.g((String) kVar.a(), D());
        n(g10);
        return g10;
    }

    private void n(Calendar calendar) {
        if (calendar == null) {
            return;
        }
        calendar.set(13, 0);
        calendar.set(14, 0);
    }

    private Calendar o() {
        return o.g(s(), D());
    }

    public Calendar A() {
        Calendar o10 = o();
        int y10 = y();
        if (y10 <= 1) {
            return o10;
        }
        o10.add(12, -(Integer.parseInt(new SimpleDateFormat("mm", u()).format(o10.getTime())) % y10));
        return (Calendar) o10.clone();
    }

    public String C() {
        return (String) this.f16687e.a();
    }

    public TimeZone D() {
        char c10;
        try {
            String str = (String) this.f16691i.a();
            if (str != null && !str.equals("")) {
                int parseInt = Integer.parseInt(str);
                int abs = Math.abs(parseInt);
                if (parseInt < 0) {
                    c10 = '-';
                } else {
                    c10 = '+';
                }
                int floor = (int) Math.floor(abs / 60.0f);
                return DesugarTimeZone.getTimeZone("GMT" + c10 + floor + ":" + o.k(abs - (floor * 60)));
            }
            return TimeZone.getDefault();
        } catch (Exception e10) {
            e10.printStackTrace();
            return TimeZone.getDefault();
        }
    }

    public void E(Calendar calendar) {
        this.f16683a = calendar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F(String str, Dynamic dynamic) {
        B(str).b(dynamic);
    }

    public String p() {
        return (String) this.f16695m.a();
    }

    public String q() {
        return (String) this.f16694l.a();
    }

    public fl.a r() {
        return (fl.a) this.f16693k.a();
    }

    public String s() {
        return (String) this.f16684b.a();
    }

    public Calendar t() {
        return this.f16683a;
    }

    public Locale u() {
        return (Locale) this.f16686d.a();
    }

    public String v() {
        return this.f16686d.f();
    }

    public Calendar w() {
        return m(this.f16690h);
    }

    public Calendar x() {
        return m(this.f16689g);
    }

    public int y() {
        return ((Integer) this.f16688f.a()).intValue();
    }

    public fl.b z() {
        return (fl.b) this.f16685c.a();
    }
}
