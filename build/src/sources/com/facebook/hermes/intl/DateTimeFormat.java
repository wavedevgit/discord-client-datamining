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
    private boolean f10107d;

    /* renamed from: e  reason: collision with root package name */
    private String f10108e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f10109f;

    /* renamed from: g  reason: collision with root package name */
    private String f10110g;

    /* renamed from: h  reason: collision with root package name */
    private Object f10111h;

    /* renamed from: i  reason: collision with root package name */
    private b.g f10112i;

    /* renamed from: j  reason: collision with root package name */
    private b.e f10113j;

    /* renamed from: k  reason: collision with root package name */
    private b.m f10114k;

    /* renamed from: l  reason: collision with root package name */
    private b.d f10115l;

    /* renamed from: m  reason: collision with root package name */
    private b.n f10116m;

    /* renamed from: n  reason: collision with root package name */
    private b.i f10117n;

    /* renamed from: o  reason: collision with root package name */
    private b.c f10118o;

    /* renamed from: p  reason: collision with root package name */
    private b.f f10119p;

    /* renamed from: q  reason: collision with root package name */
    private b.h f10120q;

    /* renamed from: r  reason: collision with root package name */
    private b.j f10121r;

    /* renamed from: s  reason: collision with root package name */
    private b.l f10122s;

    /* renamed from: t  reason: collision with root package name */
    private b.EnumC0148b f10123t;

    /* renamed from: u  reason: collision with root package name */
    private b.k f10124u;

    /* renamed from: b  reason: collision with root package name */
    private da.b f10105b = null;

    /* renamed from: c  reason: collision with root package name */
    private da.b f10106c = null;

    /* renamed from: v  reason: collision with root package name */
    private Object f10125v = null;

    /* renamed from: a  reason: collision with root package name */
    b f10104a = new i();

    @fb.a
    public DateTimeFormat(List<String> list, Map<String, Object> map) {
        String str;
        c(list, map);
        b bVar = this.f10104a;
        da.b bVar2 = this.f10105b;
        if (this.f10107d) {
            str = "";
        } else {
            str = this.f10108e;
        }
        bVar.g(bVar2, str, this.f10109f ? "" : this.f10110g, this.f10113j, this.f10114k, this.f10115l, this.f10116m, this.f10117n, this.f10118o, this.f10119p, this.f10120q, this.f10121r, this.f10122s, this.f10112i, this.f10125v, this.f10123t, this.f10124u, this.f10111h);
    }

    private Object a() {
        return this.f10104a.d(this.f10105b);
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
        da.d.c(q10, "localeMatcher", g.c(b10, "localeMatcher", aVar, da.a.f20319a, "best fit"));
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
        this.f10105b = bVar;
        this.f10106c = bVar.d();
        Object a11 = da.d.a(a10, "ca");
        if (!da.d.j(a11)) {
            this.f10107d = false;
            this.f10108e = da.d.h(a11);
        } else {
            this.f10107d = true;
            this.f10108e = this.f10104a.h(this.f10105b);
        }
        Object a12 = da.d.a(a10, "nu");
        if (!da.d.j(a12)) {
            this.f10109f = false;
            this.f10110g = da.d.h(a12);
        } else {
            this.f10109f = true;
            this.f10110g = this.f10104a.c(this.f10105b);
        }
        Object a13 = da.d.a(a10, "hc");
        Object a14 = da.d.a(b10, "timeZone");
        if (da.d.n(a14)) {
            e10 = a();
        } else {
            e10 = e(a14.toString());
        }
        this.f10125v = e10;
        this.f10113j = (b.e) g.d(b.e.class, da.d.h(g.c(b10, "formatMatcher", aVar, new String[]{"basic", "best fit"}, "best fit")));
        this.f10114k = (b.m) g.d(b.m.class, g.c(b10, "weekday", aVar, new String[]{"long", "short", "narrow"}, da.d.d()));
        this.f10115l = (b.d) g.d(b.d.class, g.c(b10, "era", aVar, new String[]{"long", "short", "narrow"}, da.d.d()));
        this.f10116m = (b.n) g.d(b.n.class, g.c(b10, "year", aVar, new String[]{"numeric", "2-digit"}, da.d.d()));
        this.f10117n = (b.i) g.d(b.i.class, g.c(b10, "month", aVar, new String[]{"numeric", "2-digit", "long", "short", "narrow"}, da.d.d()));
        this.f10118o = (b.c) g.d(b.c.class, g.c(b10, "day", aVar, new String[]{"numeric", "2-digit"}, da.d.d()));
        Object c14 = g.c(b10, "hour", aVar, new String[]{"numeric", "2-digit"}, da.d.d());
        this.f10119p = (b.f) g.d(b.f.class, c14);
        this.f10120q = (b.h) g.d(b.h.class, g.c(b10, "minute", aVar, new String[]{"numeric", "2-digit"}, da.d.d()));
        this.f10121r = (b.j) g.d(b.j.class, g.c(b10, "second", aVar, new String[]{"numeric", "2-digit"}, da.d.d()));
        this.f10122s = (b.l) g.d(b.l.class, g.c(b10, "timeZoneName", aVar, new String[]{"long", "longOffset", "longGeneric", "short", "shortOffset", "shortGeneric"}, da.d.d()));
        this.f10123t = (b.EnumC0148b) g.d(b.EnumC0148b.class, g.c(b10, "dateStyle", aVar, new String[]{"full", "long", "medium", "short"}, da.d.d()));
        Object c15 = g.c(b10, "timeStyle", aVar, new String[]{"full", "long", "medium", "short"}, da.d.d());
        this.f10124u = (b.k) g.d(b.k.class, c15);
        if (da.d.n(c14) && da.d.n(c15)) {
            this.f10112i = b.g.UNDEFINED;
        } else {
            b.g f10 = this.f10104a.f(this.f10105b);
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
            this.f10112i = gVar;
        }
        this.f10111h = c12;
    }

    private boolean d(String str) {
        return da.c.e(str, 0, str.length() - 1);
    }

    @fb.a
    public static List<String> supportedLocalesOf(List<String> list, Map<String, Object> map) {
        String h10 = da.d.h(g.c(map, "localeMatcher", g.a.STRING, da.a.f20319a, "best fit"));
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
        return this.f10104a.b(d10);
    }

    @fb.a
    public List<Map<String, String>> formatToParts(double d10) {
        String str;
        ArrayList arrayList = new ArrayList();
        AttributedCharacterIterator a10 = this.f10104a.a(d10);
        StringBuilder sb2 = new StringBuilder();
        for (char first = a10.first(); first != 65535; first = a10.next()) {
            sb2.append(first);
            if (a10.getIndex() + 1 == a10.getRunLimit()) {
                Iterator<AttributedCharacterIterator.Attribute> it = a10.getAttributes().keySet().iterator();
                if (it.hasNext()) {
                    str = this.f10104a.e(it.next(), sb2.toString());
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
        linkedHashMap.put("locale", this.f10106c.g());
        linkedHashMap.put("numberingSystem", this.f10110g);
        linkedHashMap.put("calendar", this.f10108e);
        linkedHashMap.put("timeZone", this.f10125v);
        b.g gVar = this.f10112i;
        if (gVar != b.g.UNDEFINED) {
            linkedHashMap.put("hourCycle", gVar.toString());
            b.g gVar2 = this.f10112i;
            if (gVar2 != b.g.H11 && gVar2 != b.g.H12) {
                linkedHashMap.put("hour12", Boolean.FALSE);
            } else {
                linkedHashMap.put("hour12", Boolean.TRUE);
            }
        }
        b.m mVar = this.f10114k;
        if (mVar != b.m.UNDEFINED) {
            linkedHashMap.put("weekday", mVar.toString());
        }
        b.d dVar = this.f10115l;
        if (dVar != b.d.UNDEFINED) {
            linkedHashMap.put("era", dVar.toString());
        }
        b.n nVar = this.f10116m;
        if (nVar != b.n.UNDEFINED) {
            linkedHashMap.put("year", nVar.toString());
        }
        b.i iVar = this.f10117n;
        if (iVar != b.i.UNDEFINED) {
            linkedHashMap.put("month", iVar.toString());
        }
        b.c cVar = this.f10118o;
        if (cVar != b.c.UNDEFINED) {
            linkedHashMap.put("day", cVar.toString());
        }
        b.f fVar = this.f10119p;
        if (fVar != b.f.UNDEFINED) {
            linkedHashMap.put("hour", fVar.toString());
        }
        b.h hVar = this.f10120q;
        if (hVar != b.h.UNDEFINED) {
            linkedHashMap.put("minute", hVar.toString());
        }
        b.j jVar = this.f10121r;
        if (jVar != b.j.UNDEFINED) {
            linkedHashMap.put("second", jVar.toString());
        }
        b.l lVar = this.f10122s;
        if (lVar != b.l.UNDEFINED) {
            linkedHashMap.put("timeZoneName", lVar.toString());
        }
        b.EnumC0148b enumC0148b = this.f10123t;
        if (enumC0148b != b.EnumC0148b.UNDEFINED) {
            linkedHashMap.put("dateStyle", enumC0148b.toString());
        }
        b.k kVar = this.f10124u;
        if (kVar != b.k.UNDEFINED) {
            linkedHashMap.put("timeStyle", kVar.toString());
        }
        return linkedHashMap;
    }
}
