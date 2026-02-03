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
    private boolean f10855d;

    /* renamed from: e  reason: collision with root package name */
    private String f10856e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f10857f;

    /* renamed from: g  reason: collision with root package name */
    private String f10858g;

    /* renamed from: h  reason: collision with root package name */
    private Object f10859h;

    /* renamed from: i  reason: collision with root package name */
    private b.g f10860i;

    /* renamed from: j  reason: collision with root package name */
    private b.e f10861j;

    /* renamed from: k  reason: collision with root package name */
    private b.m f10862k;

    /* renamed from: l  reason: collision with root package name */
    private b.d f10863l;

    /* renamed from: m  reason: collision with root package name */
    private b.n f10864m;

    /* renamed from: n  reason: collision with root package name */
    private b.i f10865n;

    /* renamed from: o  reason: collision with root package name */
    private b.c f10866o;

    /* renamed from: p  reason: collision with root package name */
    private b.f f10867p;

    /* renamed from: q  reason: collision with root package name */
    private b.h f10868q;

    /* renamed from: r  reason: collision with root package name */
    private b.j f10869r;

    /* renamed from: s  reason: collision with root package name */
    private b.l f10870s;

    /* renamed from: t  reason: collision with root package name */
    private b.EnumC0158b f10871t;

    /* renamed from: u  reason: collision with root package name */
    private b.k f10872u;

    /* renamed from: b  reason: collision with root package name */
    private da.b f10853b = null;

    /* renamed from: c  reason: collision with root package name */
    private da.b f10854c = null;

    /* renamed from: v  reason: collision with root package name */
    private Object f10873v = null;

    /* renamed from: a  reason: collision with root package name */
    b f10852a = new i();

    @fb.a
    public DateTimeFormat(List<String> list, Map<String, Object> map) {
        String str;
        c(list, map);
        b bVar = this.f10852a;
        da.b bVar2 = this.f10853b;
        if (this.f10855d) {
            str = "";
        } else {
            str = this.f10856e;
        }
        bVar.g(bVar2, str, this.f10857f ? "" : this.f10858g, this.f10861j, this.f10862k, this.f10863l, this.f10864m, this.f10865n, this.f10866o, this.f10867p, this.f10868q, this.f10869r, this.f10870s, this.f10860i, this.f10873v, this.f10871t, this.f10872u, this.f10859h);
    }

    private Object a() {
        return this.f10852a.d(this.f10853b);
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
        da.d.c(q10, "localeMatcher", g.c(b10, "localeMatcher", aVar, da.a.f21289a, "best fit"));
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
        this.f10853b = bVar;
        this.f10854c = bVar.d();
        Object a11 = da.d.a(a10, "ca");
        if (!da.d.j(a11)) {
            this.f10855d = false;
            this.f10856e = da.d.h(a11);
        } else {
            this.f10855d = true;
            this.f10856e = this.f10852a.h(this.f10853b);
        }
        Object a12 = da.d.a(a10, "nu");
        if (!da.d.j(a12)) {
            this.f10857f = false;
            this.f10858g = da.d.h(a12);
        } else {
            this.f10857f = true;
            this.f10858g = this.f10852a.c(this.f10853b);
        }
        Object a13 = da.d.a(a10, "hc");
        Object a14 = da.d.a(b10, "timeZone");
        if (da.d.n(a14)) {
            e10 = a();
        } else {
            e10 = e(a14.toString());
        }
        this.f10873v = e10;
        this.f10861j = (b.e) g.d(b.e.class, da.d.h(g.c(b10, "formatMatcher", aVar, new String[]{"basic", "best fit"}, "best fit")));
        this.f10862k = (b.m) g.d(b.m.class, g.c(b10, "weekday", aVar, new String[]{"long", "short", "narrow"}, da.d.d()));
        this.f10863l = (b.d) g.d(b.d.class, g.c(b10, "era", aVar, new String[]{"long", "short", "narrow"}, da.d.d()));
        this.f10864m = (b.n) g.d(b.n.class, g.c(b10, "year", aVar, new String[]{"numeric", "2-digit"}, da.d.d()));
        this.f10865n = (b.i) g.d(b.i.class, g.c(b10, "month", aVar, new String[]{"numeric", "2-digit", "long", "short", "narrow"}, da.d.d()));
        this.f10866o = (b.c) g.d(b.c.class, g.c(b10, "day", aVar, new String[]{"numeric", "2-digit"}, da.d.d()));
        Object c14 = g.c(b10, "hour", aVar, new String[]{"numeric", "2-digit"}, da.d.d());
        this.f10867p = (b.f) g.d(b.f.class, c14);
        this.f10868q = (b.h) g.d(b.h.class, g.c(b10, "minute", aVar, new String[]{"numeric", "2-digit"}, da.d.d()));
        this.f10869r = (b.j) g.d(b.j.class, g.c(b10, "second", aVar, new String[]{"numeric", "2-digit"}, da.d.d()));
        this.f10870s = (b.l) g.d(b.l.class, g.c(b10, "timeZoneName", aVar, new String[]{"long", "longOffset", "longGeneric", "short", "shortOffset", "shortGeneric"}, da.d.d()));
        this.f10871t = (b.EnumC0158b) g.d(b.EnumC0158b.class, g.c(b10, "dateStyle", aVar, new String[]{"full", "long", "medium", "short"}, da.d.d()));
        Object c15 = g.c(b10, "timeStyle", aVar, new String[]{"full", "long", "medium", "short"}, da.d.d());
        this.f10872u = (b.k) g.d(b.k.class, c15);
        if (da.d.n(c14) && da.d.n(c15)) {
            this.f10860i = b.g.UNDEFINED;
        } else {
            b.g f10 = this.f10852a.f(this.f10853b);
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
            this.f10860i = gVar;
        }
        this.f10859h = c12;
    }

    private boolean d(String str) {
        return da.c.e(str, 0, str.length() - 1);
    }

    @fb.a
    public static List<String> supportedLocalesOf(List<String> list, Map<String, Object> map) {
        String h10 = da.d.h(g.c(map, "localeMatcher", g.a.STRING, da.a.f21289a, "best fit"));
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
        return this.f10852a.b(d10);
    }

    @fb.a
    public List<Map<String, String>> formatToParts(double d10) {
        String str;
        ArrayList arrayList = new ArrayList();
        AttributedCharacterIterator a10 = this.f10852a.a(d10);
        StringBuilder sb2 = new StringBuilder();
        for (char first = a10.first(); first != 65535; first = a10.next()) {
            sb2.append(first);
            if (a10.getIndex() + 1 == a10.getRunLimit()) {
                Iterator<AttributedCharacterIterator.Attribute> it = a10.getAttributes().keySet().iterator();
                if (it.hasNext()) {
                    str = this.f10852a.e(it.next(), sb2.toString());
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
        linkedHashMap.put("locale", this.f10854c.g());
        linkedHashMap.put("numberingSystem", this.f10858g);
        linkedHashMap.put("calendar", this.f10856e);
        linkedHashMap.put("timeZone", this.f10873v);
        b.g gVar = this.f10860i;
        if (gVar != b.g.UNDEFINED) {
            linkedHashMap.put("hourCycle", gVar.toString());
            b.g gVar2 = this.f10860i;
            if (gVar2 != b.g.H11 && gVar2 != b.g.H12) {
                linkedHashMap.put("hour12", Boolean.FALSE);
            } else {
                linkedHashMap.put("hour12", Boolean.TRUE);
            }
        }
        b.m mVar = this.f10862k;
        if (mVar != b.m.UNDEFINED) {
            linkedHashMap.put("weekday", mVar.toString());
        }
        b.d dVar = this.f10863l;
        if (dVar != b.d.UNDEFINED) {
            linkedHashMap.put("era", dVar.toString());
        }
        b.n nVar = this.f10864m;
        if (nVar != b.n.UNDEFINED) {
            linkedHashMap.put("year", nVar.toString());
        }
        b.i iVar = this.f10865n;
        if (iVar != b.i.UNDEFINED) {
            linkedHashMap.put("month", iVar.toString());
        }
        b.c cVar = this.f10866o;
        if (cVar != b.c.UNDEFINED) {
            linkedHashMap.put("day", cVar.toString());
        }
        b.f fVar = this.f10867p;
        if (fVar != b.f.UNDEFINED) {
            linkedHashMap.put("hour", fVar.toString());
        }
        b.h hVar = this.f10868q;
        if (hVar != b.h.UNDEFINED) {
            linkedHashMap.put("minute", hVar.toString());
        }
        b.j jVar = this.f10869r;
        if (jVar != b.j.UNDEFINED) {
            linkedHashMap.put("second", jVar.toString());
        }
        b.l lVar = this.f10870s;
        if (lVar != b.l.UNDEFINED) {
            linkedHashMap.put("timeZoneName", lVar.toString());
        }
        b.EnumC0158b enumC0158b = this.f10871t;
        if (enumC0158b != b.EnumC0158b.UNDEFINED) {
            linkedHashMap.put("dateStyle", enumC0158b.toString());
        }
        b.k kVar = this.f10872u;
        if (kVar != b.k.UNDEFINED) {
            linkedHashMap.put("timeStyle", kVar.toString());
        }
        return linkedHashMap;
    }
}
