package com.facebook.hermes.intl;

import com.facebook.hermes.intl.c;
import com.facebook.hermes.intl.g;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.views.scroll.ReactScrollViewHelper;
import java.text.AttributedCharacterIterator;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
@fb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class NumberFormat {

    /* renamed from: v  reason: collision with root package name */
    private static String[] f9842v = {"acre", "bit", "byte", "celsius", "centimeter", "day", "degree", "fahrenheit", "fluid-ounce", "foot", "gallon", "gigabit", "gigabyte", "gram", "hectare", "hour", "inch", "kilobit", "kilobyte", "kilogram", "kilometer", "liter", "megabit", "megabyte", "meter", "mile", "mile-scandinavian", "milliliter", "millimeter", "millisecond", "minute", "month", "ounce", "percent", "petabyte", "pound", "second", "stone", "terabit", "terabyte", "week", "yard", "year"};

    /* renamed from: a  reason: collision with root package name */
    private c.h f9843a;

    /* renamed from: f  reason: collision with root package name */
    private c.i f9848f;

    /* renamed from: m  reason: collision with root package name */
    private c.f f9855m;

    /* renamed from: p  reason: collision with root package name */
    private boolean f9858p;

    /* renamed from: s  reason: collision with root package name */
    private c.b f9861s;

    /* renamed from: b  reason: collision with root package name */
    private String f9844b = null;

    /* renamed from: c  reason: collision with root package name */
    private c.EnumC0140c f9845c = c.EnumC0140c.SYMBOL;

    /* renamed from: d  reason: collision with root package name */
    private c.d f9846d = c.d.STANDARD;

    /* renamed from: e  reason: collision with root package name */
    private String f9847e = null;

    /* renamed from: g  reason: collision with root package name */
    private boolean f9849g = true;

    /* renamed from: h  reason: collision with root package name */
    private int f9850h = -1;

    /* renamed from: i  reason: collision with root package name */
    private int f9851i = -1;

    /* renamed from: j  reason: collision with root package name */
    private int f9852j = -1;

    /* renamed from: k  reason: collision with root package name */
    private int f9853k = -1;

    /* renamed from: l  reason: collision with root package name */
    private int f9854l = -1;

    /* renamed from: n  reason: collision with root package name */
    private c.g f9856n = c.g.AUTO;

    /* renamed from: q  reason: collision with root package name */
    private String f9859q = null;

    /* renamed from: r  reason: collision with root package name */
    private c.e f9860r = null;

    /* renamed from: t  reason: collision with root package name */
    private da.b f9862t = null;

    /* renamed from: u  reason: collision with root package name */
    private da.b f9863u = null;

    /* renamed from: o  reason: collision with root package name */
    private c f9857o = new j();

    @fb.a
    public NumberFormat(List<String> list, Map<String, Object> map) {
        String str;
        a(list, map);
        c cVar = this.f9857o;
        da.b bVar = this.f9862t;
        if (this.f9858p) {
            str = "";
        } else {
            str = this.f9859q;
        }
        cVar.k(bVar, str, this.f9843a, this.f9846d, this.f9860r, this.f9861s).d(this.f9844b, this.f9845c).g(this.f9849g).f(this.f9850h).e(this.f9855m, this.f9853k, this.f9854l).h(this.f9855m, this.f9851i, this.f9852j).j(this.f9856n).i(this.f9847e, this.f9848f);
    }

    private void a(List list, Map map) {
        Object p10;
        Object p11;
        Object q10 = da.d.q();
        g.a aVar = g.a.STRING;
        da.d.c(q10, "localeMatcher", g.c(map, "localeMatcher", aVar, da.a.f20148a, "best fit"));
        Object c10 = g.c(map, "numberingSystem", aVar, da.d.d(), da.d.d());
        if (!da.d.n(c10) && !b(da.d.h(c10))) {
            throw new da.f("Invalid numbering system !");
        }
        da.d.c(q10, "nu", c10);
        HashMap a10 = f.a(list, q10, Collections.singletonList("nu"));
        da.b bVar = (da.b) da.d.g(a10).get("locale");
        this.f9862t = bVar;
        this.f9863u = bVar.d();
        Object a11 = da.d.a(a10, "nu");
        if (!da.d.j(a11)) {
            this.f9858p = false;
            this.f9859q = da.d.h(a11);
        } else {
            this.f9858p = true;
            this.f9859q = this.f9857o.c(this.f9862t);
        }
        h(map);
        if (this.f9843a == c.h.CURRENCY) {
            double n10 = j.n(this.f9844b);
            p10 = da.d.p(n10);
            p11 = da.d.p(n10);
        } else {
            p10 = da.d.p(0.0d);
            if (this.f9843a == c.h.PERCENT) {
                p11 = da.d.p(0.0d);
            } else {
                p11 = da.d.p(3.0d);
            }
        }
        this.f9860r = (c.e) g.d(c.e.class, da.d.h(g.c(map, "notation", aVar, new String[]{"standard", "scientific", "engineering", "compact"}, "standard")));
        g(map, p10, p11);
        Object c11 = g.c(map, "compactDisplay", aVar, new String[]{"short", "long"}, "short");
        if (this.f9860r == c.e.COMPACT) {
            this.f9861s = (c.b) g.d(c.b.class, da.d.h(c11));
        }
        this.f9849g = da.d.e(g.c(map, "useGrouping", g.a.BOOLEAN, da.d.d(), da.d.o(true)));
        this.f9856n = (c.g) g.d(c.g.class, da.d.h(g.c(map, "signDisplay", aVar, new String[]{"auto", ReactScrollViewHelper.OVER_SCROLL_NEVER, ReactScrollViewHelper.OVER_SCROLL_ALWAYS, "exceptZero"}, "auto")));
    }

    private boolean b(String str) {
        return da.c.e(str, 0, str.length() - 1);
    }

    private boolean c(String str) {
        if (Arrays.binarySearch(f9842v, str) >= 0) {
            return true;
        }
        return false;
    }

    private boolean d(String str) {
        return f(str).matches("^[A-Z][A-Z][A-Z]$");
    }

    private boolean e(String str) {
        if (c(str)) {
            return true;
        }
        int indexOf = str.indexOf("-per-");
        if (indexOf >= 0 && str.indexOf("-per-", indexOf + 1) < 0 && c(str.substring(0, indexOf)) && c(str.substring(indexOf + 5))) {
            return true;
        }
        return false;
    }

    private String f(String str) {
        StringBuilder sb2 = new StringBuilder(str.length());
        for (int i10 = 0; i10 < str.length(); i10++) {
            char charAt = str.charAt(i10);
            if (charAt >= 'a' && charAt <= 'z') {
                sb2.append((char) (charAt - ' '));
            } else {
                sb2.append(charAt);
            }
        }
        return sb2.toString();
    }

    private void g(Map map, Object obj, Object obj2) {
        Object b10 = g.b(map, "minimumIntegerDigits", da.d.p(1.0d), da.d.p(21.0d), da.d.p(1.0d));
        Object a10 = da.d.a(map, "minimumFractionDigits");
        Object a11 = da.d.a(map, "maximumFractionDigits");
        Object a12 = da.d.a(map, "minimumSignificantDigits");
        Object a13 = da.d.a(map, "maximumSignificantDigits");
        this.f9850h = (int) Math.floor(da.d.f(b10));
        if (da.d.n(a12) && da.d.n(a13)) {
            if (da.d.n(a10) && da.d.n(a11)) {
                c.e eVar = this.f9860r;
                if (eVar == c.e.COMPACT) {
                    this.f9855m = c.f.COMPACT_ROUNDING;
                    return;
                } else if (eVar == c.e.ENGINEERING) {
                    this.f9855m = c.f.FRACTION_DIGITS;
                    this.f9852j = 5;
                    return;
                } else {
                    this.f9855m = c.f.FRACTION_DIGITS;
                    this.f9851i = (int) Math.floor(da.d.f(obj));
                    this.f9852j = (int) Math.floor(da.d.f(obj2));
                    return;
                }
            }
            this.f9855m = c.f.FRACTION_DIGITS;
            Object a14 = g.a("minimumFractionDigits", a10, da.d.p(0.0d), da.d.p(20.0d), da.d.d());
            Object a15 = g.a("maximumFractionDigits", a11, da.d.p(0.0d), da.d.p(20.0d), da.d.d());
            if (da.d.n(a14)) {
                a14 = da.d.p(Math.min(da.d.f(obj), da.d.f(a15)));
            } else if (da.d.n(a15)) {
                a15 = da.d.p(Math.max(da.d.f(obj2), da.d.f(a14)));
            } else if (da.d.f(a14) > da.d.f(a15)) {
                throw new da.f("minimumFractionDigits is greater than maximumFractionDigits");
            }
            this.f9851i = (int) Math.floor(da.d.f(a14));
            this.f9852j = (int) Math.floor(da.d.f(a15));
            return;
        }
        this.f9855m = c.f.SIGNIFICANT_DIGITS;
        Object a16 = g.a("minimumSignificantDigits", a12, da.d.p(1.0d), da.d.p(21.0d), da.d.p(1.0d));
        Object a17 = g.a("maximumSignificantDigits", a13, a16, da.d.p(21.0d), da.d.p(21.0d));
        this.f9853k = (int) Math.floor(da.d.f(a16));
        this.f9854l = (int) Math.floor(da.d.f(a17));
    }

    private void h(Map map) {
        g.a aVar = g.a.STRING;
        this.f9843a = (c.h) g.d(c.h.class, da.d.h(g.c(map, "style", aVar, new String[]{"decimal", "percent", "currency", "unit"}, "decimal")));
        Object c10 = g.c(map, "currency", aVar, da.d.d(), da.d.d());
        if (da.d.n(c10)) {
            if (this.f9843a == c.h.CURRENCY) {
                throw new da.f("Expected currency style !");
            }
        } else if (!d(da.d.h(c10))) {
            throw new da.f("Malformed currency code !");
        }
        Object c11 = g.c(map, "currencyDisplay", aVar, new String[]{"symbol", "narrowSymbol", "code", StackTraceHelper.NAME_KEY}, "symbol");
        Object c12 = g.c(map, "currencySign", aVar, new String[]{"accounting", "standard"}, "standard");
        Object c13 = g.c(map, "unit", aVar, da.d.d(), da.d.d());
        if (da.d.n(c13)) {
            if (this.f9843a == c.h.UNIT) {
                throw new da.f("Expected unit !");
            }
        } else if (!e(da.d.h(c13))) {
            throw new da.f("Malformed unit identifier !");
        }
        Object c14 = g.c(map, "unitDisplay", aVar, new String[]{"long", "short", "narrow"}, "short");
        c.h hVar = this.f9843a;
        if (hVar == c.h.CURRENCY) {
            this.f9844b = f(da.d.h(c10));
            this.f9845c = (c.EnumC0140c) g.d(c.EnumC0140c.class, da.d.h(c11));
            this.f9846d = (c.d) g.d(c.d.class, da.d.h(c12));
        } else if (hVar == c.h.UNIT) {
            this.f9847e = da.d.h(c13);
            this.f9848f = (c.i) g.d(c.i.class, da.d.h(c14));
        }
    }

    @fb.a
    public static List<String> supportedLocalesOf(List<String> list, Map<String, Object> map) {
        String h10 = da.d.h(g.c(map, "localeMatcher", g.a.STRING, da.a.f20148a, "best fit"));
        String[] strArr = new String[list.size()];
        if (h10.equals("best fit")) {
            return Arrays.asList(e.d((String[]) list.toArray(strArr)));
        }
        return Arrays.asList(e.h((String[]) list.toArray(strArr)));
    }

    @fb.a
    public String format(double d10) {
        return this.f9857o.b(d10);
    }

    @fb.a
    public List<Map<String, String>> formatToParts(double d10) {
        String str;
        ArrayList arrayList = new ArrayList();
        AttributedCharacterIterator a10 = this.f9857o.a(d10);
        StringBuilder sb2 = new StringBuilder();
        for (char first = a10.first(); first != 65535; first = a10.next()) {
            sb2.append(first);
            if (a10.getIndex() + 1 == a10.getRunLimit()) {
                Iterator<AttributedCharacterIterator.Attribute> it = a10.getAttributes().keySet().iterator();
                if (it.hasNext()) {
                    str = this.f9857o.l(it.next(), d10);
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
        linkedHashMap.put("locale", this.f9863u.g());
        linkedHashMap.put("numberingSystem", this.f9859q);
        linkedHashMap.put("style", this.f9843a.toString());
        c.h hVar = this.f9843a;
        if (hVar == c.h.CURRENCY) {
            linkedHashMap.put("currency", this.f9844b);
            linkedHashMap.put("currencyDisplay", this.f9845c.toString());
            linkedHashMap.put("currencySign", this.f9846d.toString());
        } else if (hVar == c.h.UNIT) {
            linkedHashMap.put("unit", this.f9847e);
            linkedHashMap.put("unitDisplay", this.f9848f.toString());
        }
        int i10 = this.f9850h;
        if (i10 != -1) {
            linkedHashMap.put("minimumIntegerDigits", Integer.valueOf(i10));
        }
        c.f fVar = this.f9855m;
        if (fVar == c.f.SIGNIFICANT_DIGITS) {
            int i11 = this.f9854l;
            if (i11 != -1) {
                linkedHashMap.put("maximumSignificantDigits", Integer.valueOf(i11));
            }
            int i12 = this.f9853k;
            if (i12 != -1) {
                linkedHashMap.put("minimumSignificantDigits", Integer.valueOf(i12));
            }
        } else if (fVar == c.f.FRACTION_DIGITS) {
            int i13 = this.f9851i;
            if (i13 != -1) {
                linkedHashMap.put("minimumFractionDigits", Integer.valueOf(i13));
            }
            int i14 = this.f9852j;
            if (i14 != -1) {
                linkedHashMap.put("maximumFractionDigits", Integer.valueOf(i14));
            }
        }
        linkedHashMap.put("useGrouping", Boolean.valueOf(this.f9849g));
        linkedHashMap.put("notation", this.f9860r.toString());
        if (this.f9860r == c.e.COMPACT) {
            linkedHashMap.put("compactDisplay", this.f9861s.toString());
        }
        linkedHashMap.put("signDisplay", this.f9856n.toString());
        return linkedHashMap;
    }
}
