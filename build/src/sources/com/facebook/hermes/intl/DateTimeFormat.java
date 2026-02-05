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
@fb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class DateTimeFormat {

    /* renamed from: d  reason: collision with root package name */
    private boolean f10208d;

    /* renamed from: e  reason: collision with root package name */
    private String f10209e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f10210f;

    /* renamed from: g  reason: collision with root package name */
    private String f10211g;

    /* renamed from: h  reason: collision with root package name */
    private Object f10212h;

    /* renamed from: i  reason: collision with root package name */
    private b.g f10213i;

    /* renamed from: j  reason: collision with root package name */
    private b.e f10214j;

    /* renamed from: k  reason: collision with root package name */
    private b.m f10215k;

    /* renamed from: l  reason: collision with root package name */
    private b.d f10216l;

    /* renamed from: m  reason: collision with root package name */
    private b.n f10217m;

    /* renamed from: n  reason: collision with root package name */
    private b.i f10218n;

    /* renamed from: o  reason: collision with root package name */
    private b.c f10219o;

    /* renamed from: p  reason: collision with root package name */
    private b.f f10220p;

    /* renamed from: q  reason: collision with root package name */
    private b.h f10221q;

    /* renamed from: r  reason: collision with root package name */
    private b.j f10222r;

    /* renamed from: s  reason: collision with root package name */
    private b.l f10223s;

    /* renamed from: t  reason: collision with root package name */
    private b.EnumC0155b f10224t;

    /* renamed from: u  reason: collision with root package name */
    private b.k f10225u;

    /* renamed from: b  reason: collision with root package name */
    private da.b f10206b = null;

    /* renamed from: c  reason: collision with root package name */
    private da.b f10207c = null;

    /* renamed from: v  reason: collision with root package name */
    private Object f10226v = null;

    /* renamed from: a  reason: collision with root package name */
    b f10205a = new i();

    @fb.a
    public DateTimeFormat(List<String> list, Map<String, Object> map) {
        String str;
        c(list, map);
        b bVar = this.f10205a;
        da.b bVar2 = this.f10206b;
        if (this.f10208d) {
            str = "";
        } else {
            str = this.f10209e;
        }
        bVar.g(bVar2, str, this.f10210f ? "" : this.f10211g, this.f10214j, this.f10215k, this.f10216l, this.f10217m, this.f10218n, this.f10219o, this.f10220p, this.f10221q, this.f10222r, this.f10223s, this.f10213i, this.f10226v, this.f10224t, this.f10225u, this.f10212h);
    }

    private Object a() {
        return this.f10205a.d(this.f10206b);
    }

    private Object b(Object obj, String str, String str2) {
        if (da.d.l(obj)) {
            boolean z10 = true;
            if (str.equals(InquiryField.DateField.TYPE) || str.equals("any")) {
                String[] strArr = {"weekday", "year", "month", "day"};
                for (int i10 = 0; i10 < 4; i10++) {
                    if (!da.d.n(da.d.a(obj, strArr[i10]))) {
                        z10 = false;
                    }
                }
            }
            if (str.equals("time") || str.equals("any")) {
                String[] strArr2 = {"hour", "minute", "second"};
                for (int i11 = 0; i11 < 3; i11++) {
                    if (!da.d.n(da.d.a(obj, strArr2[i11]))) {
                        z10 = false;
                    }
                }
            }
            z10 = (da.d.n(da.d.a(obj, "dateStyle")) && da.d.n(da.d.a(obj, "timeStyle"))) ? false : false;
            if (z10 && (str2.equals(InquiryField.DateField.TYPE) || str2.equals("all"))) {
                String[] strArr3 = {"year", "month", "day"};
                for (int i12 = 0; i12 < 3; i12++) {
                    da.d.c(obj, strArr3[i12], "numeric");
                }
            }
            if (z10 && (str2.equals("time") || str2.equals("all"))) {
                String[] strArr4 = {"hour", "minute", "second"};
                for (int i13 = 0; i13 < 3; i13++) {
                    da.d.c(obj, strArr4[i13], "numeric");
                }
            }
            return obj;
        }
        throw new da.f("Invalid options object !");
    }

    private void c(List list, Map map) {
        Object e10;
        b.g gVar;
        List asList = Arrays.asList("ca", "nu", "hc");
        Object b10 = b(map, "any", InquiryField.DateField.TYPE);
        Object q10 = da.d.q();
        g.a aVar = g.a.STRING;
        da.d.c(q10, "localeMatcher", g.c(b10, "localeMatcher", aVar, da.a.f20364a, "best fit"));
        Object c10 = g.c(b10, "calendar", aVar, da.d.d(), da.d.d());
        if (!da.d.n(c10) && !d(da.d.h(c10))) {
            throw new da.f("Invalid calendar option !");
        }
        da.d.c(q10, "ca", c10);
        Object c11 = g.c(b10, "numberingSystem", aVar, da.d.d(), da.d.d());
        if (!da.d.n(c11) && !d(da.d.h(c11))) {
            throw new da.f("Invalid numbering system !");
        }
        da.d.c(q10, "nu", c11);
        Object c12 = g.c(b10, "hour12", g.a.BOOLEAN, da.d.d(), da.d.d());
        Object c13 = g.c(b10, "hourCycle", aVar, new String[]{"h11", "h12", "h23", "h24"}, da.d.d());
        if (!da.d.n(c12)) {
            c13 = da.d.b();
        }
        da.d.c(q10, "hc", c13);
        HashMap a10 = f.a(list, q10, asList);
        da.b bVar = (da.b) da.d.g(a10).get("locale");
        this.f10206b = bVar;
        this.f10207c = bVar.d();
        Object a11 = da.d.a(a10, "ca");
        if (!da.d.j(a11)) {
            this.f10208d = false;
            this.f10209e = da.d.h(a11);
        } else {
            this.f10208d = true;
            this.f10209e = this.f10205a.h(this.f10206b);
        }
        Object a12 = da.d.a(a10, "nu");
        if (!da.d.j(a12)) {
            this.f10210f = false;
            this.f10211g = da.d.h(a12);
        } else {
            this.f10210f = true;
            this.f10211g = this.f10205a.c(this.f10206b);
        }
        Object a13 = da.d.a(a10, "hc");
        Object a14 = da.d.a(b10, "timeZone");
        if (da.d.n(a14)) {
            e10 = a();
        } else {
            e10 = e(a14.toString());
        }
        this.f10226v = e10;
        this.f10214j = (b.e) g.d(b.e.class, da.d.h(g.c(b10, "formatMatcher", aVar, new String[]{"basic", "best fit"}, "best fit")));
        this.f10215k = (b.m) g.d(b.m.class, g.c(b10, "weekday", aVar, new String[]{"long", "short", "narrow"}, da.d.d()));
        this.f10216l = (b.d) g.d(b.d.class, g.c(b10, "era", aVar, new String[]{"long", "short", "narrow"}, da.d.d()));
        this.f10217m = (b.n) g.d(b.n.class, g.c(b10, "year", aVar, new String[]{"numeric", "2-digit"}, da.d.d()));
        this.f10218n = (b.i) g.d(b.i.class, g.c(b10, "month", aVar, new String[]{"numeric", "2-digit", "long", "short", "narrow"}, da.d.d()));
        this.f10219o = (b.c) g.d(b.c.class, g.c(b10, "day", aVar, new String[]{"numeric", "2-digit"}, da.d.d()));
        Object c14 = g.c(b10, "hour", aVar, new String[]{"numeric", "2-digit"}, da.d.d());
        this.f10220p = (b.f) g.d(b.f.class, c14);
        this.f10221q = (b.h) g.d(b.h.class, g.c(b10, "minute", aVar, new String[]{"numeric", "2-digit"}, da.d.d()));
        this.f10222r = (b.j) g.d(b.j.class, g.c(b10, "second", aVar, new String[]{"numeric", "2-digit"}, da.d.d()));
        this.f10223s = (b.l) g.d(b.l.class, g.c(b10, "timeZoneName", aVar, new String[]{"long", "longOffset", "longGeneric", "short", "shortOffset", "shortGeneric"}, da.d.d()));
        this.f10224t = (b.EnumC0155b) g.d(b.EnumC0155b.class, g.c(b10, "dateStyle", aVar, new String[]{"full", "long", "medium", "short"}, da.d.d()));
        Object c15 = g.c(b10, "timeStyle", aVar, new String[]{"full", "long", "medium", "short"}, da.d.d());
        this.f10225u = (b.k) g.d(b.k.class, c15);
        if (da.d.n(c14) && da.d.n(c15)) {
            this.f10213i = b.g.UNDEFINED;
        } else {
            b.g f10 = this.f10205a.f(this.f10206b);
            if (da.d.j(a13)) {
                gVar = f10;
            } else {
                gVar = (b.g) g.d(b.g.class, a13);
            }
            if (!da.d.n(c12)) {
                if (da.d.e(c12)) {
                    gVar = b.g.H11;
                    if (f10 != gVar && f10 != b.g.H23) {
                        gVar = b.g.H12;
                    }
                } else {
                    gVar = (f10 == b.g.H11 || f10 == b.g.H23) ? b.g.H23 : b.g.H24;
                }
            }
            this.f10213i = gVar;
        }
        this.f10212h = c12;
    }

    private boolean d(String str) {
        return da.c.e(str, 0, str.length() - 1);
    }

    @fb.a
    public static List<String> supportedLocalesOf(List<String> list, Map<String, Object> map) {
        String h10 = da.d.h(g.c(map, "localeMatcher", g.a.STRING, da.a.f20364a, "best fit"));
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
        throw new da.f("Invalid timezone name!");
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

    @fb.a
    public String format(double d10) {
        return this.f10205a.b(d10);
    }

    @fb.a
    public List<Map<String, String>> formatToParts(double d10) {
        String str;
        ArrayList arrayList = new ArrayList();
        AttributedCharacterIterator a10 = this.f10205a.a(d10);
        StringBuilder sb2 = new StringBuilder();
        for (char first = a10.first(); first != 65535; first = a10.next()) {
            sb2.append(first);
            if (a10.getIndex() + 1 == a10.getRunLimit()) {
                Iterator<AttributedCharacterIterator.Attribute> it = a10.getAttributes().keySet().iterator();
                if (it.hasNext()) {
                    str = this.f10205a.e(it.next(), sb2.toString());
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

    @fb.a
    public Map<String, Object> resolvedOptions() {
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        linkedHashMap.put("locale", this.f10207c.g());
        linkedHashMap.put("numberingSystem", this.f10211g);
        linkedHashMap.put("calendar", this.f10209e);
        linkedHashMap.put("timeZone", this.f10226v);
        b.g gVar = this.f10213i;
        if (gVar != b.g.UNDEFINED) {
            linkedHashMap.put("hourCycle", gVar.toString());
            b.g gVar2 = this.f10213i;
            if (gVar2 != b.g.H11 && gVar2 != b.g.H12) {
                linkedHashMap.put("hour12", Boolean.FALSE);
            } else {
                linkedHashMap.put("hour12", Boolean.TRUE);
            }
        }
        b.m mVar = this.f10215k;
        if (mVar != b.m.UNDEFINED) {
            linkedHashMap.put("weekday", mVar.toString());
        }
        b.d dVar = this.f10216l;
        if (dVar != b.d.UNDEFINED) {
            linkedHashMap.put("era", dVar.toString());
        }
        b.n nVar = this.f10217m;
        if (nVar != b.n.UNDEFINED) {
            linkedHashMap.put("year", nVar.toString());
        }
        b.i iVar = this.f10218n;
        if (iVar != b.i.UNDEFINED) {
            linkedHashMap.put("month", iVar.toString());
        }
        b.c cVar = this.f10219o;
        if (cVar != b.c.UNDEFINED) {
            linkedHashMap.put("day", cVar.toString());
        }
        b.f fVar = this.f10220p;
        if (fVar != b.f.UNDEFINED) {
            linkedHashMap.put("hour", fVar.toString());
        }
        b.h hVar = this.f10221q;
        if (hVar != b.h.UNDEFINED) {
            linkedHashMap.put("minute", hVar.toString());
        }
        b.j jVar = this.f10222r;
        if (jVar != b.j.UNDEFINED) {
            linkedHashMap.put("second", jVar.toString());
        }
        b.l lVar = this.f10223s;
        if (lVar != b.l.UNDEFINED) {
            linkedHashMap.put("timeZoneName", lVar.toString());
        }
        b.EnumC0155b enumC0155b = this.f10224t;
        if (enumC0155b != b.EnumC0155b.UNDEFINED) {
            linkedHashMap.put("dateStyle", enumC0155b.toString());
        }
        b.k kVar = this.f10225u;
        if (kVar != b.k.UNDEFINED) {
            linkedHashMap.put("timeStyle", kVar.toString());
        }
        return linkedHashMap;
    }
}
