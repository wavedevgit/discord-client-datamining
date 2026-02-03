package com.facebook.hermes.intl;

import com.facebook.hermes.intl.a;
import com.facebook.hermes.intl.g;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
@fb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class Collator {

    /* renamed from: a  reason: collision with root package name */
    private a.d f9811a;

    /* renamed from: b  reason: collision with root package name */
    private a.c f9812b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f9813c;

    /* renamed from: e  reason: collision with root package name */
    private boolean f9815e;

    /* renamed from: f  reason: collision with root package name */
    private a.b f9816f;

    /* renamed from: g  reason: collision with root package name */
    private da.b f9817g;

    /* renamed from: h  reason: collision with root package name */
    private da.b f9818h;

    /* renamed from: d  reason: collision with root package name */
    private String f9814d = "default";

    /* renamed from: i  reason: collision with root package name */
    private a f9819i = new h();

    @fb.a
    public Collator(List<String> list, Map<String, Object> map) {
        a(list, map);
        this.f9819i.f(this.f9817g).e(this.f9815e).d(this.f9816f).g(this.f9812b).c(this.f9813c);
    }

    private void a(List list, Map map) {
        g.a aVar = g.a.STRING;
        this.f9811a = (a.d) g.d(a.d.class, da.d.h(g.c(map, "usage", aVar, da.a.f20152e, "sort")));
        Object q10 = da.d.q();
        da.d.c(q10, "localeMatcher", g.c(map, "localeMatcher", aVar, da.a.f20148a, "best fit"));
        Object c10 = g.c(map, "numeric", g.a.BOOLEAN, da.d.d(), da.d.d());
        if (!da.d.n(c10)) {
            c10 = da.d.r(String.valueOf(da.d.e(c10)));
        }
        da.d.c(q10, "kn", c10);
        da.d.c(q10, "kf", g.c(map, "caseFirst", aVar, da.a.f20151d, da.d.d()));
        HashMap a10 = f.a(list, q10, Arrays.asList("co", "kf", "kn"));
        da.b bVar = (da.b) da.d.g(a10).get("locale");
        this.f9817g = bVar;
        this.f9818h = bVar.d();
        Object a11 = da.d.a(a10, "co");
        if (da.d.j(a11)) {
            a11 = da.d.r("default");
        }
        this.f9814d = da.d.h(a11);
        Object a12 = da.d.a(a10, "kn");
        if (da.d.j(a12)) {
            this.f9815e = false;
        } else {
            this.f9815e = Boolean.parseBoolean(da.d.h(a12));
        }
        Object a13 = da.d.a(a10, "kf");
        if (da.d.j(a13)) {
            a13 = da.d.r("false");
        }
        this.f9816f = (a.b) g.d(a.b.class, da.d.h(a13));
        if (this.f9811a == a.d.SEARCH) {
            ArrayList b10 = this.f9817g.b("collation");
            ArrayList arrayList = new ArrayList();
            Iterator it = b10.iterator();
            while (it.hasNext()) {
                arrayList.add(da.i.e((String) it.next()));
            }
            arrayList.add(da.i.e("search"));
            this.f9817g.f("co", arrayList);
        }
        Object c11 = g.c(map, "sensitivity", g.a.STRING, da.a.f20150c, da.d.d());
        if (!da.d.n(c11)) {
            this.f9812b = (a.c) g.d(a.c.class, da.d.h(c11));
        } else if (this.f9811a == a.d.SORT) {
            this.f9812b = a.c.VARIANT;
        } else {
            this.f9812b = a.c.LOCALE;
        }
        this.f9813c = da.d.e(g.c(map, "ignorePunctuation", g.a.BOOLEAN, da.d.d(), Boolean.FALSE));
    }

    @fb.a
    public static List<String> supportedLocalesOf(List<String> list, Map<String, Object> map) {
        if (da.d.h(g.c(map, "localeMatcher", g.a.STRING, da.a.f20148a, "best fit")).equals("best fit")) {
            return Arrays.asList(e.d((String[]) list.toArray(new String[list.size()])));
        }
        return Arrays.asList(e.h((String[]) list.toArray(new String[list.size()])));
    }

    @fb.a
    public double compare(String str, String str2) {
        return this.f9819i.a(str, str2);
    }

    @fb.a
    public Map<String, Object> resolvedOptions() {
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        linkedHashMap.put("locale", this.f9818h.g().replace("-kn-true", "-kn"));
        linkedHashMap.put("usage", this.f9811a.toString());
        a.c cVar = this.f9812b;
        if (cVar == a.c.LOCALE) {
            linkedHashMap.put("sensitivity", this.f9819i.b().toString());
        } else {
            linkedHashMap.put("sensitivity", cVar.toString());
        }
        linkedHashMap.put("ignorePunctuation", Boolean.valueOf(this.f9813c));
        linkedHashMap.put("collation", this.f9814d);
        linkedHashMap.put("numeric", Boolean.valueOf(this.f9815e));
        linkedHashMap.put("caseFirst", this.f9816f.toString());
        return linkedHashMap;
    }
}
