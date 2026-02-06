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
    private static String[] f10126v = {"acre", "bit", "byte", "celsius", "centimeter", "day", "degree", "fahrenheit", "fluid-ounce", "foot", "gallon", "gigabit", "gigabyte", "gram", "hectare", "hour", "inch", "kilobit", "kilobyte", "kilogram", "kilometer", "liter", "megabit", "megabyte", "meter", "mile", "mile-scandinavian", "milliliter", "millimeter", "millisecond", "minute", "month", "ounce", "percent", "petabyte", "pound", "second", "stone", "terabit", "terabyte", "week", "yard", "year"};

    /* renamed from: a  reason: collision with root package name */
    private c.h f10127a;

    /* renamed from: f  reason: collision with root package name */
    private c.i f10132f;

    /* renamed from: m  reason: collision with root package name */
    private c.f f10139m;

    /* renamed from: p  reason: collision with root package name */
    private boolean f10142p;

    /* renamed from: s  reason: collision with root package name */
    private c.b f10145s;

    /* renamed from: b  reason: collision with root package name */
    private String f10128b = null;

    /* renamed from: c  reason: collision with root package name */
    private c.EnumC0149c f10129c = c.EnumC0149c.SYMBOL;

    /* renamed from: d  reason: collision with root package name */
    private c.d f10130d = c.d.STANDARD;

    /* renamed from: e  reason: collision with root package name */
    private String f10131e = null;

    /* renamed from: g  reason: collision with root package name */
    private boolean f10133g = true;

    /* renamed from: h  reason: collision with root package name */
    private int f10134h = -1;

    /* renamed from: i  reason: collision with root package name */
    private int f10135i = -1;

    /* renamed from: j  reason: collision with root package name */
    private int f10136j = -1;

    /* renamed from: k  reason: collision with root package name */
    private int f10137k = -1;

    /* renamed from: l  reason: collision with root package name */
    private int f10138l = -1;

    /* renamed from: n  reason: collision with root package name */
    private c.g f10140n = c.g.AUTO;

    /* renamed from: q  reason: collision with root package name */
    private String f10143q = null;

    /* renamed from: r  reason: collision with root package name */
    private c.e f10144r = null;

    /* renamed from: t  reason: collision with root package name */
    private da.b f10146t = null;

    /* renamed from: u  reason: collision with root package name */
    private da.b f10147u = null;

    /* renamed from: o  reason: collision with root package name */
    private c f10141o = new j();

    @fb.a
    public NumberFormat(List<String> list, Map<String, Object> map) {
        String str;
        a(list, map);
        c cVar = this.f10141o;
        da.b bVar = this.f10146t;
        if (this.f10142p) {
            str = "";
        } else {
            str = this.f10143q;
        }
        cVar.k(bVar, str, this.f10127a, this.f10130d, this.f10144r, this.f10145s).d(this.f10128b, this.f10129c).g(this.f10133g).f(this.f10134h).e(this.f10139m, this.f10137k, this.f10138l).h(this.f10139m, this.f10135i, this.f10136j).j(this.f10140n).i(this.f10131e, this.f10132f);
    }

    private void a(List list, Map map) {
        Object p10;
        Object p11;
        Object q10 = da.d.q();
        g.a aVar = g.a.STRING;
        da.d.c(q10, "localeMatcher", g.c(map, "localeMatcher", aVar, da.a.f20319a, "best fit"));
        Object c10 = g.c(map, "numberingSystem", aVar, da.d.d(), da.d.d());
        if (!da.d.n(c10) && !b(da.d.h(c10))) {
            throw new da.f("Invalid numbering system !");
        }
        da.d.c(q10, "nu", c10);
        HashMap a10 = f.a(list, q10, Collections.singletonList("nu"));
        da.b bVar = (da.b) da.d.g(a10).get("locale");
        this.f10146t = bVar;
        this.f10147u = bVar.d();
        Object a11 = da.d.a(a10, "nu");
        if (!da.d.j(a11)) {
            this.f10142p = false;
            this.f10143q = da.d.h(a11);
        } else {
            this.f10142p = true;
            this.f10143q = this.f10141o.c(this.f10146t);
        }
        h(map);
        if (this.f10127a == c.h.CURRENCY) {
            double n10 = j.n(this.f10128b);
            p10 = da.d.p(n10);
            p11 = da.d.p(n10);
        } else {
            p10 = da.d.p(0.0d);
            if (this.f10127a == c.h.PERCENT) {
                p11 = da.d.p(0.0d);
            } else {
                p11 = da.d.p(3.0d);
            }
        }
        this.f10144r = (c.e) g.d(c.e.class, da.d.h(g.c(map, "notation", aVar, new String[]{"standard", "scientific", "engineering", "compact"}, "standard")));
        g(map, p10, p11);
        Object c11 = g.c(map, "compactDisplay", aVar, new String[]{"short", "long"}, "short");
        if (this.f10144r == c.e.COMPACT) {
            this.f10145s = (c.b) g.d(c.b.class, da.d.h(c11));
        }
        this.f10133g = da.d.e(g.c(map, "useGrouping", g.a.BOOLEAN, da.d.d(), da.d.o(true)));
        this.f10140n = (c.g) g.d(c.g.class, da.d.h(g.c(map, "signDisplay", aVar, new String[]{"auto", ReactScrollViewHelper.OVER_SCROLL_NEVER, ReactScrollViewHelper.OVER_SCROLL_ALWAYS, "exceptZero"}, "auto")));
    }

    private boolean b(String str) {
        return da.c.e(str, 0, str.length() - 1);
    }

    private boolean c(String str) {
        if (Arrays.binarySearch(f10126v, str) >= 0) {
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
        this.f10134h = (int) Math.floor(da.d.f(b10));
        if (da.d.n(a12) && da.d.n(a13)) {
            if (da.d.n(a10) && da.d.n(a11)) {
                c.e eVar = this.f10144r;
                if (eVar == c.e.COMPACT) {
                    this.f10139m = c.f.COMPACT_ROUNDING;
                    return;
                } else if (eVar == c.e.ENGINEERING) {
                    this.f10139m = c.f.FRACTION_DIGITS;
                    this.f10136j = 5;
                    return;
                } else {
                    this.f10139m = c.f.FRACTION_DIGITS;
                    this.f10135i = (int) Math.floor(da.d.f(obj));
                    this.f10136j = (int) Math.floor(da.d.f(obj2));
                    return;
                }
            }
            this.f10139m = c.f.FRACTION_DIGITS;
            Object a14 = g.a("minimumFractionDigits", a10, da.d.p(0.0d), da.d.p(20.0d), da.d.d());
            Object a15 = g.a("maximumFractionDigits", a11, da.d.p(0.0d), da.d.p(20.0d), da.d.d());
            if (da.d.n(a14)) {
                a14 = da.d.p(Math.min(da.d.f(obj), da.d.f(a15)));
            } else if (da.d.n(a15)) {
                a15 = da.d.p(Math.max(da.d.f(obj2), da.d.f(a14)));
            } else if (da.d.f(a14) > da.d.f(a15)) {
                throw new da.f("minimumFractionDigits is greater than maximumFractionDigits");
            }
            this.f10135i = (int) Math.floor(da.d.f(a14));
            this.f10136j = (int) Math.floor(da.d.f(a15));
            return;
        }
        this.f10139m = c.f.SIGNIFICANT_DIGITS;
        Object a16 = g.a("minimumSignificantDigits", a12, da.d.p(1.0d), da.d.p(21.0d), da.d.p(1.0d));
        Object a17 = g.a("maximumSignificantDigits", a13, a16, da.d.p(21.0d), da.d.p(21.0d));
        this.f10137k = (int) Math.floor(da.d.f(a16));
        this.f10138l = (int) Math.floor(da.d.f(a17));
    }

    private void h(Map map) {
        g.a aVar = g.a.STRING;
        this.f10127a = (c.h) g.d(c.h.class, da.d.h(g.c(map, "style", aVar, new String[]{"decimal", "percent", "currency", "unit"}, "decimal")));
        Object c10 = g.c(map, "currency", aVar, da.d.d(), da.d.d());
        if (da.d.n(c10)) {
            if (this.f10127a == c.h.CURRENCY) {
                throw new da.f("Expected currency style !");
            }
        } else if (!d(da.d.h(c10))) {
            throw new da.f("Malformed currency code !");
        }
        Object c11 = g.c(map, "currencyDisplay", aVar, new String[]{"symbol", "narrowSymbol", "code", StackTraceHelper.NAME_KEY}, "symbol");
        Object c12 = g.c(map, "currencySign", aVar, new String[]{"accounting", "standard"}, "standard");
        Object c13 = g.c(map, "unit", aVar, da.d.d(), da.d.d());
        if (da.d.n(c13)) {
            if (this.f10127a == c.h.UNIT) {
                throw new da.f("Expected unit !");
            }
        } else if (!e(da.d.h(c13))) {
            throw new da.f("Malformed unit identifier !");
        }
        Object c14 = g.c(map, "unitDisplay", aVar, new String[]{"long", "short", "narrow"}, "short");
        c.h hVar = this.f10127a;
        if (hVar == c.h.CURRENCY) {
            this.f10128b = f(da.d.h(c10));
            this.f10129c = (c.EnumC0149c) g.d(c.EnumC0149c.class, da.d.h(c11));
            this.f10130d = (c.d) g.d(c.d.class, da.d.h(c12));
        } else if (hVar == c.h.UNIT) {
            this.f10131e = da.d.h(c13);
            this.f10132f = (c.i) g.d(c.i.class, da.d.h(c14));
        }
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

    @fb.a
    public String format(double d10) {
        return this.f10141o.b(d10);
    }

    @fb.a
    public List<Map<String, String>> formatToParts(double d10) {
        String str;
        ArrayList arrayList = new ArrayList();
        AttributedCharacterIterator a10 = this.f10141o.a(d10);
        StringBuilder sb2 = new StringBuilder();
        for (char first = a10.first(); first != 65535; first = a10.next()) {
            sb2.append(first);
            if (a10.getIndex() + 1 == a10.getRunLimit()) {
                Iterator<AttributedCharacterIterator.Attribute> it = a10.getAttributes().keySet().iterator();
                if (it.hasNext()) {
                    str = this.f10141o.l(it.next(), d10);
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
        linkedHashMap.put("locale", this.f10147u.g());
        linkedHashMap.put("numberingSystem", this.f10143q);
        linkedHashMap.put("style", this.f10127a.toString());
        c.h hVar = this.f10127a;
        if (hVar == c.h.CURRENCY) {
            linkedHashMap.put("currency", this.f10128b);
            linkedHashMap.put("currencyDisplay", this.f10129c.toString());
            linkedHashMap.put("currencySign", this.f10130d.toString());
        } else if (hVar == c.h.UNIT) {
            linkedHashMap.put("unit", this.f10131e);
            linkedHashMap.put("unitDisplay", this.f10132f.toString());
        }
        int i10 = this.f10134h;
        if (i10 != -1) {
            linkedHashMap.put("minimumIntegerDigits", Integer.valueOf(i10));
        }
        c.f fVar = this.f10139m;
        if (fVar == c.f.SIGNIFICANT_DIGITS) {
            int i11 = this.f10138l;
            if (i11 != -1) {
                linkedHashMap.put("maximumSignificantDigits", Integer.valueOf(i11));
            }
            int i12 = this.f10137k;
            if (i12 != -1) {
                linkedHashMap.put("minimumSignificantDigits", Integer.valueOf(i12));
            }
        } else if (fVar == c.f.FRACTION_DIGITS) {
            int i13 = this.f10135i;
            if (i13 != -1) {
                linkedHashMap.put("minimumFractionDigits", Integer.valueOf(i13));
            }
            int i14 = this.f10136j;
            if (i14 != -1) {
                linkedHashMap.put("maximumFractionDigits", Integer.valueOf(i14));
            }
        }
        linkedHashMap.put("useGrouping", Boolean.valueOf(this.f10133g));
        linkedHashMap.put("notation", this.f10144r.toString());
        if (this.f10144r == c.e.COMPACT) {
            linkedHashMap.put("compactDisplay", this.f10145s.toString());
        }
        linkedHashMap.put("signDisplay", this.f10140n.toString());
        return linkedHashMap;
    }
}
