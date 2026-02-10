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
    private Calendar f16823a = null;

    /* renamed from: b  reason: collision with root package name */
    private final hl.a f16824b = new hl.a();

    /* renamed from: c  reason: collision with root package name */
    private final hl.j f16825c = new hl.j();

    /* renamed from: d  reason: collision with root package name */
    private final hl.f f16826d = new hl.f();

    /* renamed from: e  reason: collision with root package name */
    private final hl.l f16827e = new hl.l();

    /* renamed from: f  reason: collision with root package name */
    private final hl.i f16828f = new hl.i();

    /* renamed from: g  reason: collision with root package name */
    private final hl.h f16829g = new hl.h();

    /* renamed from: h  reason: collision with root package name */
    private final hl.g f16830h = new hl.g();

    /* renamed from: i  reason: collision with root package name */
    private final hl.m f16831i = new hl.m();

    /* renamed from: j  reason: collision with root package name */
    private final hl.c f16832j = new hl.c();

    /* renamed from: k  reason: collision with root package name */
    private final hl.e f16833k = new hl.e();

    /* renamed from: l  reason: collision with root package name */
    private final hl.d f16834l = new hl.d();

    /* renamed from: m  reason: collision with root package name */
    private final hl.b f16835m = new hl.b();

    /* renamed from: n  reason: collision with root package name */
    private final HashMap f16836n = new a();

    /* renamed from: o  reason: collision with root package name */
    public d f16837o = new d(this);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends HashMap {
        a() {
            put(InquiryField.DateField.TYPE, n.this.f16824b);
            put("mode", n.this.f16825c);
            put("locale", n.this.f16826d);
            put("textColor", n.this.f16827e);
            put("minuteInterval", n.this.f16828f);
            put("minimumDate", n.this.f16829g);
            put("maximumDate", n.this.f16830h);
            put("timezoneOffsetInMinutes", n.this.f16831i);
            put("height", n.this.f16832j);
            put("is24hourSource", n.this.f16833k);
            put(StackTraceHelper.ID_KEY, n.this.f16834l);
            put("dividerColor", n.this.f16835m);
        }
    }

    private hl.k B(String str) {
        return (hl.k) this.f16836n.get(str);
    }

    private Calendar m(hl.k kVar) {
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
        return (String) this.f16827e.a();
    }

    public TimeZone D() {
        char c10;
        try {
            String str = (String) this.f16831i.a();
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
        this.f16823a = calendar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F(String str, Dynamic dynamic) {
        B(str).b(dynamic);
    }

    public String p() {
        return (String) this.f16835m.a();
    }

    public String q() {
        return (String) this.f16834l.a();
    }

    public gl.a r() {
        return (gl.a) this.f16833k.a();
    }

    public String s() {
        return (String) this.f16824b.a();
    }

    public Calendar t() {
        return this.f16823a;
    }

    public Locale u() {
        return (Locale) this.f16826d.a();
    }

    public String v() {
        return this.f16826d.f();
    }

    public Calendar w() {
        return m(this.f16830h);
    }

    public Calendar x() {
        return m(this.f16829g);
    }

    public int y() {
        return ((Integer) this.f16828f.a()).intValue();
    }

    public gl.b z() {
        return (gl.b) this.f16825c.a();
    }
}
