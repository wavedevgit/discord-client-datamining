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
    private Calendar f17572a = null;

    /* renamed from: b  reason: collision with root package name */
    private final jl.a f17573b = new jl.a();

    /* renamed from: c  reason: collision with root package name */
    private final jl.j f17574c = new jl.j();

    /* renamed from: d  reason: collision with root package name */
    private final jl.f f17575d = new jl.f();

    /* renamed from: e  reason: collision with root package name */
    private final jl.l f17576e = new jl.l();

    /* renamed from: f  reason: collision with root package name */
    private final jl.i f17577f = new jl.i();

    /* renamed from: g  reason: collision with root package name */
    private final jl.h f17578g = new jl.h();

    /* renamed from: h  reason: collision with root package name */
    private final jl.g f17579h = new jl.g();

    /* renamed from: i  reason: collision with root package name */
    private final jl.m f17580i = new jl.m();

    /* renamed from: j  reason: collision with root package name */
    private final jl.c f17581j = new jl.c();

    /* renamed from: k  reason: collision with root package name */
    private final jl.e f17582k = new jl.e();

    /* renamed from: l  reason: collision with root package name */
    private final jl.d f17583l = new jl.d();

    /* renamed from: m  reason: collision with root package name */
    private final jl.b f17584m = new jl.b();

    /* renamed from: n  reason: collision with root package name */
    private final HashMap f17585n = new a();

    /* renamed from: o  reason: collision with root package name */
    public d f17586o = new d(this);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends HashMap {
        a() {
            put(InquiryField.DateField.TYPE, n.this.f17573b);
            put("mode", n.this.f17574c);
            put("locale", n.this.f17575d);
            put("textColor", n.this.f17576e);
            put("minuteInterval", n.this.f17577f);
            put("minimumDate", n.this.f17578g);
            put("maximumDate", n.this.f17579h);
            put("timezoneOffsetInMinutes", n.this.f17580i);
            put("height", n.this.f17581j);
            put("is24hourSource", n.this.f17582k);
            put(StackTraceHelper.ID_KEY, n.this.f17583l);
            put("dividerColor", n.this.f17584m);
        }
    }

    private jl.k B(String str) {
        return (jl.k) this.f17585n.get(str);
    }

    private Calendar m(jl.k kVar) {
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
        return (String) this.f17576e.a();
    }

    public TimeZone D() {
        char c10;
        try {
            String str = (String) this.f17580i.a();
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
        this.f17572a = calendar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F(String str, Dynamic dynamic) {
        B(str).b(dynamic);
    }

    public String p() {
        return (String) this.f17584m.a();
    }

    public String q() {
        return (String) this.f17583l.a();
    }

    public il.a r() {
        return (il.a) this.f17582k.a();
    }

    public String s() {
        return (String) this.f17573b.a();
    }

    public Calendar t() {
        return this.f17572a;
    }

    public Locale u() {
        return (Locale) this.f17575d.a();
    }

    public String v() {
        return this.f17575d.f();
    }

    public Calendar w() {
        return m(this.f17579h);
    }

    public Calendar x() {
        return m(this.f17578g);
    }

    public int y() {
        return ((Integer) this.f17577f.a()).intValue();
    }

    public il.b z() {
        return (il.b) this.f17574c.a();
    }
}
