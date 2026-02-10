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
@gb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class Collator {

    /* renamed from: a  reason: collision with root package name */
    private a.d f10812a;

    /* renamed from: b  reason: collision with root package name */
    private a.c f10813b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f10814c;

    /* renamed from: e  reason: collision with root package name */
    private boolean f10816e;

    /* renamed from: f  reason: collision with root package name */
    private a.b f10817f;

    /* renamed from: g  reason: collision with root package name */
    private ea.b f10818g;

    /* renamed from: h  reason: collision with root package name */
    private ea.b f10819h;

    /* renamed from: d  reason: collision with root package name */
    private String f10815d = "default";

    /* renamed from: i  reason: collision with root package name */
    private a f10820i = new h();

    @gb.a
    public Collator(List<String> list, Map<String, Object> map) {
        a(list, map);
        this.f10820i.c(this.f10818g).f(this.f10816e).e(this.f10817f).g(this.f10813b).d(this.f10814c);
    }

    private void a(List list, Map map) {
        g.a aVar = g.a.STRING;
        this.f10812a = (a.d) g.d(a.d.class, ea.d.h(g.c(map, "usage", aVar, ea.a.f22379e, "sort")));
        Object q10 = ea.d.q();
        ea.d.c(q10, "localeMatcher", g.c(map, "localeMatcher", aVar, ea.a.f22375a, "best fit"));
        Object c10 = g.c(map, "numeric", g.a.BOOLEAN, ea.d.d(), ea.d.d());
        if (!ea.d.n(c10)) {
            c10 = ea.d.r(String.valueOf(ea.d.e(c10)));
        }
        ea.d.c(q10, "kn", c10);
        ea.d.c(q10, "kf", g.c(map, "caseFirst", aVar, ea.a.f22378d, ea.d.d()));
        HashMap a10 = f.a(list, q10, Arrays.asList("co", "kf", "kn"));
        ea.b bVar = (ea.b) ea.d.g(a10).get("locale");
        this.f10818g = bVar;
        this.f10819h = bVar.d();
        Object a11 = ea.d.a(a10, "co");
        if (ea.d.j(a11)) {
            a11 = ea.d.r("default");
        }
        this.f10815d = ea.d.h(a11);
        Object a12 = ea.d.a(a10, "kn");
        if (ea.d.j(a12)) {
            this.f10816e = false;
        } else {
            this.f10816e = Boolean.parseBoolean(ea.d.h(a12));
        }
        Object a13 = ea.d.a(a10, "kf");
        if (ea.d.j(a13)) {
            a13 = ea.d.r("false");
        }
        this.f10817f = (a.b) g.d(a.b.class, ea.d.h(a13));
        if (this.f10812a == a.d.SEARCH) {
            ArrayList b10 = this.f10818g.b("collation");
            ArrayList arrayList = new ArrayList();
            Iterator it = b10.iterator();
            while (it.hasNext()) {
                arrayList.add(ea.i.e((String) it.next()));
            }
            arrayList.add(ea.i.e("search"));
            this.f10818g.f("co", arrayList);
        }
        Object c11 = g.c(map, "sensitivity", g.a.STRING, ea.a.f22377c, ea.d.d());
        if (!ea.d.n(c11)) {
            this.f10813b = (a.c) g.d(a.c.class, ea.d.h(c11));
        } else if (this.f10812a == a.d.SORT) {
            this.f10813b = a.c.VARIANT;
        } else {
            this.f10813b = a.c.LOCALE;
        }
        this.f10814c = ea.d.e(g.c(map, "ignorePunctuation", g.a.BOOLEAN, ea.d.d(), Boolean.FALSE));
    }

    @gb.a
    public static List<String> supportedLocalesOf(List<String> list, Map<String, Object> map) {
        if (ea.d.h(g.c(map, "localeMatcher", g.a.STRING, ea.a.f22375a, "best fit")).equals("best fit")) {
            return Arrays.asList(e.d((String[]) list.toArray(new String[list.size()])));
        }
        return Arrays.asList(e.h((String[]) list.toArray(new String[list.size()])));
    }

    @gb.a
    public double compare(String str, String str2) {
        return this.f10820i.a(str, str2);
    }

    @gb.a
    public Map<String, Object> resolvedOptions() {
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        linkedHashMap.put("locale", this.f10819h.g().replace("-kn-true", "-kn"));
        linkedHashMap.put("usage", this.f10812a.toString());
        a.c cVar = this.f10813b;
        if (cVar == a.c.LOCALE) {
            linkedHashMap.put("sensitivity", this.f10820i.b().toString());
        } else {
            linkedHashMap.put("sensitivity", cVar.toString());
        }
        linkedHashMap.put("ignorePunctuation", Boolean.valueOf(this.f10814c));
        linkedHashMap.put("collation", this.f10815d);
        linkedHashMap.put("numeric", Boolean.valueOf(this.f10816e));
        linkedHashMap.put("caseFirst", this.f10817f.toString());
        return linkedHashMap;
    }
}
