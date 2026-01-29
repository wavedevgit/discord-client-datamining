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
    private Calendar f17712a = null;

    /* renamed from: b  reason: collision with root package name */
    private final bl.a f17713b = new bl.a();

    /* renamed from: c  reason: collision with root package name */
    private final bl.j f17714c = new bl.j();

    /* renamed from: d  reason: collision with root package name */
    private final bl.f f17715d = new bl.f();

    /* renamed from: e  reason: collision with root package name */
    private final bl.l f17716e = new bl.l();

    /* renamed from: f  reason: collision with root package name */
    private final bl.i f17717f = new bl.i();

    /* renamed from: g  reason: collision with root package name */
    private final bl.h f17718g = new bl.h();

    /* renamed from: h  reason: collision with root package name */
    private final bl.g f17719h = new bl.g();

    /* renamed from: i  reason: collision with root package name */
    private final bl.m f17720i = new bl.m();

    /* renamed from: j  reason: collision with root package name */
    private final bl.c f17721j = new bl.c();

    /* renamed from: k  reason: collision with root package name */
    private final bl.e f17722k = new bl.e();

    /* renamed from: l  reason: collision with root package name */
    private final bl.d f17723l = new bl.d();

    /* renamed from: m  reason: collision with root package name */
    private final bl.b f17724m = new bl.b();

    /* renamed from: n  reason: collision with root package name */
    private final HashMap f17725n = new a();

    /* renamed from: o  reason: collision with root package name */
    public d f17726o = new d(this);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends HashMap {
        a() {
            put(InquiryField.DateField.TYPE, n.this.f17713b);
            put("mode", n.this.f17714c);
            put("locale", n.this.f17715d);
            put("textColor", n.this.f17716e);
            put("minuteInterval", n.this.f17717f);
            put("minimumDate", n.this.f17718g);
            put("maximumDate", n.this.f17719h);
            put("timezoneOffsetInMinutes", n.this.f17720i);
            put("height", n.this.f17721j);
            put("is24hourSource", n.this.f17722k);
            put(StackTraceHelper.ID_KEY, n.this.f17723l);
            put("dividerColor", n.this.f17724m);
        }
    }

    private bl.k B(String str) {
        return (bl.k) this.f17725n.get(str);
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
        return (String) this.f17716e.a();
    }

    public TimeZone D() {
        char c10;
        try {
            String str = (String) this.f17720i.a();
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
        this.f17712a = calendar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F(String str, Dynamic dynamic) {
        B(str).b(dynamic);
    }

    public String p() {
        return (String) this.f17724m.a();
    }

    public String q() {
        return (String) this.f17723l.a();
    }

    public al.a r() {
        return (al.a) this.f17722k.a();
    }

    public String s() {
        return (String) this.f17713b.a();
    }

    public Calendar t() {
        return this.f17712a;
    }

    public Locale u() {
        return (Locale) this.f17715d.a();
    }

    public String v() {
        return this.f17715d.f();
    }

    public Calendar w() {
        return m(this.f17719h);
    }

    public Calendar x() {
        return m(this.f17718g);
    }

    public int y() {
        return ((Integer) this.f17717f.a()).intValue();
    }

    public al.b z() {
        return (al.b) this.f17714c.a();
    }
}
