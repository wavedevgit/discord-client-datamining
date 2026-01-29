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
    private a.d f11214a;

    /* renamed from: b  reason: collision with root package name */
    private a.c f11215b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f11216c;

    /* renamed from: e  reason: collision with root package name */
    private boolean f11218e;

    /* renamed from: f  reason: collision with root package name */
    private a.b f11219f;

    /* renamed from: g  reason: collision with root package name */
    private da.b f11220g;

    /* renamed from: h  reason: collision with root package name */
    private da.b f11221h;

    /* renamed from: d  reason: collision with root package name */
    private String f11217d = "default";

    /* renamed from: i  reason: collision with root package name */
    private a f11222i = new h();

    @fb.a
    public Collator(List<String> list, Map<String, Object> map) {
        a(list, map);
        this.f11222i.f(this.f11220g).e(this.f11218e).d(this.f11219f).g(this.f11215b).c(this.f11216c);
    }

    private void a(List list, Map map) {
        g.a aVar = g.a.STRING;
        this.f11214a = (a.d) g.d(a.d.class, da.d.h(g.c(map, "usage", aVar, da.a.f21717e, "sort")));
        Object q10 = da.d.q();
        da.d.c(q10, "localeMatcher", g.c(map, "localeMatcher", aVar, da.a.f21713a, "best fit"));
        Object c10 = g.c(map, "numeric", g.a.BOOLEAN, da.d.d(), da.d.d());
        if (!da.d.n(c10)) {
            c10 = da.d.r(String.valueOf(da.d.e(c10)));
        }
        da.d.c(q10, "kn", c10);
        da.d.c(q10, "kf", g.c(map, "caseFirst", aVar, da.a.f21716d, da.d.d()));
        HashMap a10 = f.a(list, q10, Arrays.asList("co", "kf", "kn"));
        da.b bVar = (da.b) da.d.g(a10).get("locale");
        this.f11220g = bVar;
        this.f11221h = bVar.d();
        Object a11 = da.d.a(a10, "co");
        if (da.d.j(a11)) {
            a11 = da.d.r("default");
        }
        this.f11217d = da.d.h(a11);
        Object a12 = da.d.a(a10, "kn");
        if (da.d.j(a12)) {
            this.f11218e = false;
        } else {
            this.f11218e = Boolean.parseBoolean(da.d.h(a12));
        }
        Object a13 = da.d.a(a10, "kf");
        if (da.d.j(a13)) {
            a13 = da.d.r("false");
        }
        this.f11219f = (a.b) g.d(a.b.class, da.d.h(a13));
        if (this.f11214a == a.d.SEARCH) {
            ArrayList b10 = this.f11220g.b("collation");
            ArrayList arrayList = new ArrayList();
            Iterator it = b10.iterator();
            while (it.hasNext()) {
                arrayList.add(da.i.e((String) it.next()));
            }
            arrayList.add(da.i.e("search"));
            this.f11220g.f("co", arrayList);
        }
        Object c11 = g.c(map, "sensitivity", g.a.STRING, da.a.f21715c, da.d.d());
        if (!da.d.n(c11)) {
            this.f11215b = (a.c) g.d(a.c.class, da.d.h(c11));
        } else if (this.f11214a == a.d.SORT) {
            this.f11215b = a.c.VARIANT;
        } else {
            this.f11215b = a.c.LOCALE;
        }
        this.f11216c = da.d.e(g.c(map, "ignorePunctuation", g.a.BOOLEAN, da.d.d(), Boolean.FALSE));
    }

    @fb.a
    public static List<String> supportedLocalesOf(List<String> list, Map<String, Object> map) {
        if (da.d.h(g.c(map, "localeMatcher", g.a.STRING, da.a.f21713a, "best fit")).equals("best fit")) {
            return Arrays.asList(e.d((String[]) list.toArray(new String[list.size()])));
        }
        return Arrays.asList(e.h((String[]) list.toArray(new String[list.size()])));
    }

    @fb.a
    public double compare(String str, String str2) {
        return this.f11222i.a(str, str2);
    }

    @fb.a
    public Map<String, Object> resolvedOptions() {
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        linkedHashMap.put("locale", this.f11221h.g().replace("-kn-true", "-kn"));
        linkedHashMap.put("usage", this.f11214a.toString());
        a.c cVar = this.f11215b;
        if (cVar == a.c.LOCALE) {
            linkedHashMap.put("sensitivity", this.f11222i.b().toString());
        } else {
            linkedHashMap.put("sensitivity", cVar.toString());
        }
        linkedHashMap.put("ignorePunctuation", Boolean.valueOf(this.f11216c));
        linkedHashMap.put("collation", this.f11217d);
        linkedHashMap.put("numeric", Boolean.valueOf(this.f11218e));
        linkedHashMap.put("caseFirst", this.f11219f.toString());
        return linkedHashMap;
    }
}
