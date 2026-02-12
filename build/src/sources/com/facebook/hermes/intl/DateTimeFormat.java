package com.facebook.hermes.intl;

import com.facebook.hermes.intl.b;
import com.facebook.hermes.intl.g;
import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import java.text.AttributedCharacterIterator;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.TimeZone;
@gb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class DateTimeFormat {

    /* renamed from: d  reason: collision with root package name */
    private boolean f10825d;

    /* renamed from: e  reason: collision with root package name */
    private String f10826e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f10827f;

    /* renamed from: g  reason: collision with root package name */
    private String f10828g;

    /* renamed from: h  reason: collision with root package name */
    private Object f10829h;

    /* renamed from: i  reason: collision with root package name */
    private b.g f10830i;

    /* renamed from: j  reason: collision with root package name */
    private b.e f10831j;

    /* renamed from: k  reason: collision with root package name */
    private b.m f10832k;

    /* renamed from: l  reason: collision with root package name */
    private b.d f10833l;

    /* renamed from: m  reason: collision with root package name */
    private b.n f10834m;

    /* renamed from: n  reason: collision with root package name */
    private b.i f10835n;

    /* renamed from: o  reason: collision with root package name */
    private b.c f10836o;

    /* renamed from: p  reason: collision with root package name */
    private b.f f10837p;

    /* renamed from: q  reason: collision with root package name */
    private b.h f10838q;

    /* renamed from: r  reason: collision with root package name */
    private b.j f10839r;

    /* renamed from: s  reason: collision with root package name */
    private b.l f10840s;

    /* renamed from: t  reason: collision with root package name */
    private b.EnumC0152b f10841t;

    /* renamed from: u  reason: collision with root package name */
    private b.k f10842u;

    /* renamed from: b  reason: collision with root package name */
    private ea.b f10823b = null;

    /* renamed from: c  reason: collision with root package name */
    private ea.b f10824c = null;

    /* renamed from: v  reason: collision with root package name */
    private Object f10843v = null;

    /* renamed from: a  reason: collision with root package name */
    b f10822a = new i();

    @gb.a
    public DateTimeFormat(List<String> list, Map<String, Object> map) {
        String str;
        c(list, map);
        b bVar = this.f10822a;
        ea.b bVar2 = this.f10823b;
        if (this.f10825d) {
            str = "";
        } else {
            str = this.f10826e;
        }
        bVar.h(bVar2, str, this.f10827f ? "" : this.f10828g, this.f10831j, this.f10832k, this.f10833l, this.f10834m, this.f10835n, this.f10836o, this.f10837p, this.f10838q, this.f10839r, this.f10840s, this.f10830i, this.f10843v, this.f10841t, this.f10842u, this.f10829h);
    }

    private Object a() {
        return this.f10822a.g(this.f10823b);
    }

    private Object b(Object obj, String str, String str2) {
        if (ea.d.l(obj)) {
            boolean z10 = true;
            if (str.equals(InquiryField.DateField.TYPE) || str.equals("any")) {
                String[] strArr = {"weekday", "year", "month", "day"};
                for (int i10 = 0; i10 < 4; i10++) {
                    if (!ea.d.n(ea.d.a(obj, strArr[i10]))) {
                        z10 = false;
                    }
                }
            }
            if (str.equals("time") || str.equals("any")) {
                String[] strArr2 = {"hour", "minute", "second"};
                for (int i11 = 0; i11 < 3; i11++) {
                    if (!ea.d.n(ea.d.a(obj, strArr2[i11]))) {
                        z10 = false;
                    }
                }
            }
            z10 = (ea.d.n(ea.d.a(obj, "dateStyle")) && ea.d.n(ea.d.a(obj, "timeStyle"))) ? false : false;
            if (z10 && (str2.equals(InquiryField.DateField.TYPE) || str2.equals("all"))) {
                String[] strArr3 = {"year", "month", "day"};
                for (int i12 = 0; i12 < 3; i12++) {
                    ea.d.c(obj, strArr3[i12], "numeric");
                }
            }
            if (z10 && (str2.equals("time") || str2.equals("all"))) {
                String[] strArr4 = {"hour", "minute", "second"};
                for (int i13 = 0; i13 < 3; i13++) {
                    ea.d.c(obj, strArr4[i13], "numeric");
                }
            }
            return obj;
        }
        throw new ea.f("Invalid options object !");
    }

    private void c(List list, Map map) {
        Object e10;
        b.g gVar;
        List asList = Arrays.asList("ca", "nu", "hc");
        Object b10 = b(map, "any", InquiryField.DateField.TYPE);
        Object q10 = ea.d.q();
        g.a aVar = g.a.STRING;
        ea.d.c(q10, "localeMatcher", g.c(b10, "localeMatcher", aVar, ea.a.f22376a, "best fit"));
        Object c10 = g.c(b10, "calendar", aVar, ea.d.d(), ea.d.d());
        if (!ea.d.n(c10) && !d(ea.d.h(c10))) {
            throw new ea.f("Invalid calendar option !");
        }
        ea.d.c(q10, "ca", c10);
        Object c11 = g.c(b10, "numberingSystem", aVar, ea.d.d(), ea.d.d());
        if (!ea.d.n(c11) && !d(ea.d.h(c11))) {
            throw new ea.f("Invalid numbering system !");
        }
        ea.d.c(q10, "nu", c11);
        Object c12 = g.c(b10, "hour12", g.a.BOOLEAN, ea.d.d(), ea.d.d());
        Object c13 = g.c(b10, "hourCycle", aVar, new String[]{"h11", "h12", "h23", "h24"}, ea.d.d());
        if (!ea.d.n(c12)) {
            c13 = ea.d.b();
        }
        ea.d.c(q10, "hc", c13);
        HashMap a10 = f.a(list, q10, asList);
        ea.b bVar = (ea.b) ea.d.g(a10).get("locale");
        this.f10823b = bVar;
        this.f10824c = bVar.d();
        Object a11 = ea.d.a(a10, "ca");
        if (!ea.d.j(a11)) {
            this.f10825d = false;
            this.f10826e = ea.d.h(a11);
        } else {
            this.f10825d = true;
            this.f10826e = this.f10822a.e(this.f10823b);
        }
        Object a12 = ea.d.a(a10, "nu");
        if (!ea.d.j(a12)) {
            this.f10827f = false;
            this.f10828g = ea.d.h(a12);
        } else {
            this.f10827f = true;
            this.f10828g = this.f10822a.b(this.f10823b);
        }
        Object a13 = ea.d.a(a10, "hc");
        Object a14 = ea.d.a(b10, "timeZone");
        if (ea.d.n(a14)) {
            e10 = a();
        } else {
            e10 = e(a14.toString());
        }
        this.f10843v = e10;
        this.f10831j = (b.e) g.d(b.e.class, ea.d.h(g.c(b10, "formatMatcher", aVar, new String[]{"basic", "best fit"}, "best fit")));
        this.f10832k = (b.m) g.d(b.m.class, g.c(b10, "weekday", aVar, new String[]{"long", "short", "narrow"}, ea.d.d()));
        this.f10833l = (b.d) g.d(b.d.class, g.c(b10, "era", aVar, new String[]{"long", "short", "narrow"}, ea.d.d()));
        this.f10834m = (b.n) g.d(b.n.class, g.c(b10, "year", aVar, new String[]{"numeric", "2-digit"}, ea.d.d()));
        this.f10835n = (b.i) g.d(b.i.class, g.c(b10, "month", aVar, new String[]{"numeric", "2-digit", "long", "short", "narrow"}, ea.d.d()));
        this.f10836o = (b.c) g.d(b.c.class, g.c(b10, "day", aVar, new String[]{"numeric", "2-digit"}, ea.d.d()));
        Object c14 = g.c(b10, "hour", aVar, new String[]{"numeric", "2-digit"}, ea.d.d());
        this.f10837p = (b.f) g.d(b.f.class, c14);
        this.f10838q = (b.h) g.d(b.h.class, g.c(b10, "minute", aVar, new String[]{"numeric", "2-digit"}, ea.d.d()));
        this.f10839r = (b.j) g.d(b.j.class, g.c(b10, "second", aVar, new String[]{"numeric", "2-digit"}, ea.d.d()));
        this.f10840s = (b.l) g.d(b.l.class, g.c(b10, "timeZoneName", aVar, new String[]{"long", "longOffset", "longGeneric", "short", "shortOffset", "shortGeneric"}, ea.d.d()));
        this.f10841t = (b.EnumC0152b) g.d(b.EnumC0152b.class, g.c(b10, "dateStyle", aVar, new String[]{"full", "long", "medium", "short"}, ea.d.d()));
        Object c15 = g.c(b10, "timeStyle", aVar, new String[]{"full", "long", "medium", "short"}, ea.d.d());
        this.f10842u = (b.k) g.d(b.k.class, c15);
        if (ea.d.n(c14) && ea.d.n(c15)) {
            this.f10830i = b.g.UNDEFINED;
        } else {
            b.g d10 = this.f10822a.d(this.f10823b);
            if (ea.d.j(a13)) {
                gVar = d10;
            } else {
                gVar = (b.g) g.d(b.g.class, a13);
            }
            if (!ea.d.n(c12)) {
                if (ea.d.e(c12)) {
                    gVar = b.g.H11;
                    if (d10 != gVar && d10 != b.g.H23) {
                        gVar = b.g.H12;
                    }
                } else {
                    gVar = (d10 == b.g.H11 || d10 == b.g.H23) ? b.g.H23 : b.g.H24;
                }
            }
            this.f10830i = gVar;
        }
        this.f10829h = c12;
    }

    private boolean d(String str) {
        return ea.c.e(str, 0, str.length() - 1);
    }

    @gb.a
    public static List<String> supportedLocalesOf(List<String> list, Map<String, Object> map) {
        String h10 = ea.d.h(g.c(map, "localeMatcher", g.a.STRING, ea.a.f22376a, "best fit"));
        String[] strArr = new String[list.size()];
        if (h10.equals("best fit")) {
            return Arrays.asList(e.d((String[]) list.toArray(strArr)));
        }
        return Arrays.asList(e.h((String[]) list.toArray(strArr)));
    }

    public String e(String str) {
        String[] availableIDs;
        for (String str2 : TimeZone.getAvailableIDs()) {
            if (f(str2).equals(f(str))) {
                return str2;
            }
        }
        throw new ea.f("Invalid timezone name!");
    }

    public String f(String str) {
        StringBuilder sb2 = new StringBuilder(str.length());
        for (int i10 = 0; i10 < str.length(); i10++) {
            char charAt = str.charAt(i10);
            if (charAt >= 'A' && charAt <= 'Z') {
                sb2.append((char) (charAt + ' '));
            } else {
                sb2.append(charAt);
            }
        }
        return sb2.toString();
    }

    @gb.a
    public String format(double d10) {
        return this.f10822a.c(d10);
    }

    @gb.a
    public List<Map<String, String>> formatToParts(double d10) {
        String str;
        ArrayList arrayList = new ArrayList();
        AttributedCharacterIterator a10 = this.f10822a.a(d10);
        StringBuilder sb2 = new StringBuilder();
        for (char first = a10.first(); first != 65535; first = a10.next()) {
            sb2.append(first);
            if (a10.getIndex() + 1 == a10.getRunLimit()) {
                Iterator<AttributedCharacterIterator.Attribute> it = a10.getAttributes().keySet().iterator();
                if (it.hasNext()) {
                    str = this.f10822a.f(it.next(), sb2.toString());
                } else {
                    str = "literal";
                }
                String sb3 = sb2.toString();
                sb2.setLength(0);
                HashMap hashMap = new HashMap();
                hashMap.put("type", str);
                hashMap.put("value", sb3);
                arrayList.add(hashMap);
            }
        }
        return arrayList;
    }

    @gb.a
    public Map<String, Object> resolvedOptions() {
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        linkedHashMap.put("locale", this.f10824c.g());
        linkedHashMap.put("numberingSystem", this.f10828g);
        linkedHashMap.put("calendar", this.f10826e);
        linkedHashMap.put("timeZone", this.f10843v);
        b.g gVar = this.f10830i;
        if (gVar != b.g.UNDEFINED) {
            linkedHashMap.put("hourCycle", gVar.toString());
            b.g gVar2 = this.f10830i;
            if (gVar2 != b.g.H11 && gVar2 != b.g.H12) {
                linkedHashMap.put("hour12", Boolean.FALSE);
            } else {
                linkedHashMap.put("hour12", Boolean.TRUE);
            }
        }
        b.m mVar = this.f10832k;
        if (mVar != b.m.UNDEFINED) {
            linkedHashMap.put("weekday", mVar.toString());
        }
        b.d dVar = this.f10833l;
        if (dVar != b.d.UNDEFINED) {
            linkedHashMap.put("era", dVar.toString());
        }
        b.n nVar = this.f10834m;
        if (nVar != b.n.UNDEFINED) {
            linkedHashMap.put("year", nVar.toString());
        }
        b.i iVar = this.f10835n;
        if (iVar != b.i.UNDEFINED) {
            linkedHashMap.put("month", iVar.toString());
        }
        b.c cVar = this.f10836o;
        if (cVar != b.c.UNDEFINED) {
            linkedHashMap.put("day", cVar.toString());
        }
        b.f fVar = this.f10837p;
        if (fVar != b.f.UNDEFINED) {
            linkedHashMap.put("hour", fVar.toString());
        }
        b.h hVar = this.f10838q;
        if (hVar != b.h.UNDEFINED) {
            linkedHashMap.put("minute", hVar.toString());
        }
        b.j jVar = this.f10839r;
        if (jVar != b.j.UNDEFINED) {
            linkedHashMap.put("second", jVar.toString());
        }
        b.l lVar = this.f10840s;
        if (lVar != b.l.UNDEFINED) {
            linkedHashMap.put("timeZoneName", lVar.toString());
        }
        b.EnumC0152b enumC0152b = this.f10841t;
        if (enumC0152b != b.EnumC0152b.UNDEFINED) {
            linkedHashMap.put("dateStyle", enumC0152b.toString());
        }
        b.k kVar = this.f10842u;
        if (kVar != b.k.UNDEFINED) {
            linkedHashMap.put("timeStyle", kVar.toString());
        }
        return linkedHashMap;
    }
}
