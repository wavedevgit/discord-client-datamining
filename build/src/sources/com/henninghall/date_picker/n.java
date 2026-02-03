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
    private Calendar f16309a = null;

    /* renamed from: b  reason: collision with root package name */
    private final bl.a f16310b = new bl.a();

    /* renamed from: c  reason: collision with root package name */
    private final bl.j f16311c = new bl.j();

    /* renamed from: d  reason: collision with root package name */
    private final bl.f f16312d = new bl.f();

    /* renamed from: e  reason: collision with root package name */
    private final bl.l f16313e = new bl.l();

    /* renamed from: f  reason: collision with root package name */
    private final bl.i f16314f = new bl.i();

    /* renamed from: g  reason: collision with root package name */
    private final bl.h f16315g = new bl.h();

    /* renamed from: h  reason: collision with root package name */
    private final bl.g f16316h = new bl.g();

    /* renamed from: i  reason: collision with root package name */
    private final bl.m f16317i = new bl.m();

    /* renamed from: j  reason: collision with root package name */
    private final bl.c f16318j = new bl.c();

    /* renamed from: k  reason: collision with root package name */
    private final bl.e f16319k = new bl.e();

    /* renamed from: l  reason: collision with root package name */
    private final bl.d f16320l = new bl.d();

    /* renamed from: m  reason: collision with root package name */
    private final bl.b f16321m = new bl.b();

    /* renamed from: n  reason: collision with root package name */
    private final HashMap f16322n = new a();

    /* renamed from: o  reason: collision with root package name */
    public d f16323o = new d(this);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends HashMap {
        a() {
            put(InquiryField.DateField.TYPE, n.this.f16310b);
            put("mode", n.this.f16311c);
            put("locale", n.this.f16312d);
            put("textColor", n.this.f16313e);
            put("minuteInterval", n.this.f16314f);
            put("minimumDate", n.this.f16315g);
            put("maximumDate", n.this.f16316h);
            put("timezoneOffsetInMinutes", n.this.f16317i);
            put("height", n.this.f16318j);
            put("is24hourSource", n.this.f16319k);
            put(StackTraceHelper.ID_KEY, n.this.f16320l);
            put("dividerColor", n.this.f16321m);
        }
    }

    private bl.k B(String str) {
        return (bl.k) this.f16322n.get(str);
    }

    private Calendar m(bl.k kVar) {
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
        return (String) this.f16313e.a();
    }

    public TimeZone D() {
        char c10;
        try {
            String str = (String) this.f16317i.a();
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
        this.f16309a = calendar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F(String str, Dynamic dynamic) {
        B(str).b(dynamic);
    }

    public String p() {
        return (String) this.f16321m.a();
    }

    public String q() {
        return (String) this.f16320l.a();
    }

    public al.a r() {
        return (al.a) this.f16319k.a();
    }

    public String s() {
        return (String) this.f16310b.a();
    }

    public Calendar t() {
        return this.f16309a;
    }

    public Locale u() {
        return (Locale) this.f16312d.a();
    }

    public String v() {
        return this.f16312d.f();
    }

    public Calendar w() {
        return m(this.f16316h);
    }

    public Calendar x() {
        return m(this.f16315g);
    }

    public int y() {
        return ((Integer) this.f16314f.a()).intValue();
    }

    public al.b z() {
        return (al.b) this.f16311c.a();
    }
}
