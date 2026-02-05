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
    private Calendar f16703a = null;

    /* renamed from: b  reason: collision with root package name */
    private final el.a f16704b = new el.a();

    /* renamed from: c  reason: collision with root package name */
    private final el.j f16705c = new el.j();

    /* renamed from: d  reason: collision with root package name */
    private final el.f f16706d = new el.f();

    /* renamed from: e  reason: collision with root package name */
    private final el.l f16707e = new el.l();

    /* renamed from: f  reason: collision with root package name */
    private final el.i f16708f = new el.i();

    /* renamed from: g  reason: collision with root package name */
    private final el.h f16709g = new el.h();

    /* renamed from: h  reason: collision with root package name */
    private final el.g f16710h = new el.g();

    /* renamed from: i  reason: collision with root package name */
    private final el.m f16711i = new el.m();

    /* renamed from: j  reason: collision with root package name */
    private final el.c f16712j = new el.c();

    /* renamed from: k  reason: collision with root package name */
    private final el.e f16713k = new el.e();

    /* renamed from: l  reason: collision with root package name */
    private final el.d f16714l = new el.d();

    /* renamed from: m  reason: collision with root package name */
    private final el.b f16715m = new el.b();

    /* renamed from: n  reason: collision with root package name */
    private final HashMap f16716n = new a();

    /* renamed from: o  reason: collision with root package name */
    public d f16717o = new d(this);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends HashMap {
        a() {
            put(InquiryField.DateField.TYPE, n.this.f16704b);
            put("mode", n.this.f16705c);
            put("locale", n.this.f16706d);
            put("textColor", n.this.f16707e);
            put("minuteInterval", n.this.f16708f);
            put("minimumDate", n.this.f16709g);
            put("maximumDate", n.this.f16710h);
            put("timezoneOffsetInMinutes", n.this.f16711i);
            put("height", n.this.f16712j);
            put("is24hourSource", n.this.f16713k);
            put(StackTraceHelper.ID_KEY, n.this.f16714l);
            put("dividerColor", n.this.f16715m);
        }
    }

    private el.k B(String str) {
        return (el.k) this.f16716n.get(str);
    }

    private Calendar m(el.k kVar) {
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
        return (String) this.f16707e.a();
    }

    public TimeZone D() {
        char c10;
        try {
            String str = (String) this.f16711i.a();
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
        this.f16703a = calendar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F(String str, Dynamic dynamic) {
        B(str).b(dynamic);
    }

    public String p() {
        return (String) this.f16715m.a();
    }

    public String q() {
        return (String) this.f16714l.a();
    }

    public dl.a r() {
        return (dl.a) this.f16713k.a();
    }

    public String s() {
        return (String) this.f16704b.a();
    }

    public Calendar t() {
        return this.f16703a;
    }

    public Locale u() {
        return (Locale) this.f16706d.a();
    }

    public String v() {
        return this.f16706d.f();
    }

    public Calendar w() {
        return m(this.f16710h);
    }

    public Calendar x() {
        return m(this.f16709g);
    }

    public int y() {
        return ((Integer) this.f16708f.a()).intValue();
    }

    public dl.b z() {
        return (dl.b) this.f16705c.a();
    }
}
