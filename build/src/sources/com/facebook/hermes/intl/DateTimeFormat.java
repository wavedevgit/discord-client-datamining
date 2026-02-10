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
    private boolean f10247d;

    /* renamed from: e  reason: collision with root package name */
    private String f10248e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f10249f;

    /* renamed from: g  reason: collision with root package name */
    private String f10250g;

    /* renamed from: h  reason: collision with root package name */
    private Object f10251h;

    /* renamed from: i  reason: collision with root package name */
    private b.g f10252i;

    /* renamed from: j  reason: collision with root package name */
    private b.e f10253j;

    /* renamed from: k  reason: collision with root package name */
    private b.m f10254k;

    /* renamed from: l  reason: collision with root package name */
    private b.d f10255l;

    /* renamed from: m  reason: collision with root package name */
    private b.n f10256m;

    /* renamed from: n  reason: collision with root package name */
    private b.i f10257n;

    /* renamed from: o  reason: collision with root package name */
    private b.c f10258o;

    /* renamed from: p  reason: collision with root package name */
    private b.f f10259p;

    /* renamed from: q  reason: collision with root package name */
    private b.h f10260q;

    /* renamed from: r  reason: collision with root package name */
    private b.j f10261r;

    /* renamed from: s  reason: collision with root package name */
    private b.l f10262s;

    /* renamed from: t  reason: collision with root package name */
    private b.EnumC0175b f10263t;

    /* renamed from: u  reason: collision with root package name */
    private b.k f10264u;

    /* renamed from: b  reason: collision with root package name */
    private ea.b f10245b = null;

    /* renamed from: c  reason: collision with root package name */
    private ea.b f10246c = null;

    /* renamed from: v  reason: collision with root package name */
    private Object f10265v = null;

    /* renamed from: a  reason: collision with root package name */
    b f10244a = new i();

    @gb.a
    public DateTimeFormat(List<String> list, Map<String, Object> map) {
        String str;
        c(list, map);
        b bVar = this.f10244a;
        ea.b bVar2 = this.f10245b;
        if (this.f10247d) {
            str = "";
        } else {
            str = this.f10248e;
        }
        bVar.h(bVar2, str, this.f10249f ? "" : this.f10250g, this.f10253j, this.f10254k, this.f10255l, this.f10256m, this.f10257n, this.f10258o, this.f10259p, this.f10260q, this.f10261r, this.f10262s, this.f10252i, this.f10265v, this.f10263t, this.f10264u, this.f10251h);
    }

    private Object a() {
        return this.f10244a.g(this.f10245b);
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
        ea.d.c(q10, "localeMatcher", g.c(b10, "localeMatcher", aVar, ea.a.f21208a, "best fit"));
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
        this.f10245b = bVar;
        this.f10246c = bVar.d();
        Object a11 = ea.d.a(a10, "ca");
        if (!ea.d.j(a11)) {
            this.f10247d = false;
            this.f10248e = ea.d.h(a11);
        } else {
            this.f10247d = true;
            this.f10248e = this.f10244a.e(this.f10245b);
        }
        Object a12 = ea.d.a(a10, "nu");
        if (!ea.d.j(a12)) {
            this.f10249f = false;
            this.f10250g = ea.d.h(a12);
        } else {
            this.f10249f = true;
            this.f10250g = this.f10244a.b(this.f10245b);
        }
        Object a13 = ea.d.a(a10, "hc");
        Object a14 = ea.d.a(b10, "timeZone");
        if (ea.d.n(a14)) {
            e10 = a();
        } else {
            e10 = e(a14.toString());
        }
        this.f10265v = e10;
        this.f10253j = (b.e) g.d(b.e.class, ea.d.h(g.c(b10, "formatMatcher", aVar, new String[]{"basic", "best fit"}, "best fit")));
        this.f10254k = (b.m) g.d(b.m.class, g.c(b10, "weekday", aVar, new String[]{"long", "short", "narrow"}, ea.d.d()));
        this.f10255l = (b.d) g.d(b.d.class, g.c(b10, "era", aVar, new String[]{"long", "short", "narrow"}, ea.d.d()));
        this.f10256m = (b.n) g.d(b.n.class, g.c(b10, "year", aVar, new String[]{"numeric", "2-digit"}, ea.d.d()));
        this.f10257n = (b.i) g.d(b.i.class, g.c(b10, "month", aVar, new String[]{"numeric", "2-digit", "long", "short", "narrow"}, ea.d.d()));
        this.f10258o = (b.c) g.d(b.c.class, g.c(b10, "day", aVar, new String[]{"numeric", "2-digit"}, ea.d.d()));
        Object c14 = g.c(b10, "hour", aVar, new String[]{"numeric", "2-digit"}, ea.d.d());
        this.f10259p = (b.f) g.d(b.f.class, c14);
        this.f10260q = (b.h) g.d(b.h.class, g.c(b10, "minute", aVar, new String[]{"numeric", "2-digit"}, ea.d.d()));
        this.f10261r = (b.j) g.d(b.j.class, g.c(b10, "second", aVar, new String[]{"numeric", "2-digit"}, ea.d.d()));
        this.f10262s = (b.l) g.d(b.l.class, g.c(b10, "timeZoneName", aVar, new String[]{"long", "longOffset", "longGeneric", "short", "shortOffset", "shortGeneric"}, ea.d.d()));
        this.f10263t = (b.EnumC0175b) g.d(b.EnumC0175b.class, g.c(b10, "dateStyle", aVar, new String[]{"full", "long", "medium", "short"}, ea.d.d()));
        Object c15 = g.c(b10, "timeStyle", aVar, new String[]{"full", "long", "medium", "short"}, ea.d.d());
        this.f10264u = (b.k) g.d(b.k.class, c15);
        if (ea.d.n(c14) && ea.d.n(c15)) {
            this.f10252i = b.g.UNDEFINED;
        } else {
            b.g d10 = this.f10244a.d(this.f10245b);
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
            this.f10252i = gVar;
        }
        this.f10251h = c12;
    }

    private boolean d(String str) {
        return ea.c.e(str, 0, str.length() - 1);
    }

    @gb.a
    public static List<String> supportedLocalesOf(List<String> list, Map<String, Object> map) {
        String h10 = ea.d.h(g.c(map, "localeMatcher", g.a.STRING, ea.a.f21208a, "best fit"));
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
        return this.f10244a.c(d10);
    }

    @gb.a
    public List<Map<String, String>> formatToParts(double d10) {
        String str;
        ArrayList arrayList = new ArrayList();
        AttributedCharacterIterator a10 = this.f10244a.a(d10);
        StringBuilder sb2 = new StringBuilder();
        for (char first = a10.first(); first != 65535; first = a10.next()) {
            sb2.append(first);
            if (a10.getIndex() + 1 == a10.getRunLimit()) {
                Iterator<AttributedCharacterIterator.Attribute> it = a10.getAttributes().keySet().iterator();
                if (it.hasNext()) {
                    str = this.f10244a.f(it.next(), sb2.toString());
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
        linkedHashMap.put("locale", this.f10246c.g());
        linkedHashMap.put("numberingSystem", this.f10250g);
        linkedHashMap.put("calendar", this.f10248e);
        linkedHashMap.put("timeZone", this.f10265v);
        b.g gVar = this.f10252i;
        if (gVar != b.g.UNDEFINED) {
            linkedHashMap.put("hourCycle", gVar.toString());
            b.g gVar2 = this.f10252i;
            if (gVar2 != b.g.H11 && gVar2 != b.g.H12) {
                linkedHashMap.put("hour12", Boolean.FALSE);
            } else {
                linkedHashMap.put("hour12", Boolean.TRUE);
            }
        }
        b.m mVar = this.f10254k;
        if (mVar != b.m.UNDEFINED) {
            linkedHashMap.put("weekday", mVar.toString());
        }
        b.d dVar = this.f10255l;
        if (dVar != b.d.UNDEFINED) {
            linkedHashMap.put("era", dVar.toString());
        }
        b.n nVar = this.f10256m;
        if (nVar != b.n.UNDEFINED) {
            linkedHashMap.put("year", nVar.toString());
        }
        b.i iVar = this.f10257n;
        if (iVar != b.i.UNDEFINED) {
            linkedHashMap.put("month", iVar.toString());
        }
        b.c cVar = this.f10258o;
        if (cVar != b.c.UNDEFINED) {
            linkedHashMap.put("day", cVar.toString());
        }
        b.f fVar = this.f10259p;
        if (fVar != b.f.UNDEFINED) {
            linkedHashMap.put("hour", fVar.toString());
        }
        b.h hVar = this.f10260q;
        if (hVar != b.h.UNDEFINED) {
            linkedHashMap.put("minute", hVar.toString());
        }
        b.j jVar = this.f10261r;
        if (jVar != b.j.UNDEFINED) {
            linkedHashMap.put("second", jVar.toString());
        }
        b.l lVar = this.f10262s;
        if (lVar != b.l.UNDEFINED) {
            linkedHashMap.put("timeZoneName", lVar.toString());
        }
        b.EnumC0175b enumC0175b = this.f10263t;
        if (enumC0175b != b.EnumC0175b.UNDEFINED) {
            linkedHashMap.put("dateStyle", enumC0175b.toString());
        }
        b.k kVar = this.f10264u;
        if (kVar != b.k.UNDEFINED) {
            linkedHashMap.put("timeStyle", kVar.toString());
        }
        return linkedHashMap;
    }
}
