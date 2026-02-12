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
@gb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class NumberFormat {

    /* renamed from: v  reason: collision with root package name */
    private static String[] f10844v = {"acre", "bit", "byte", "celsius", "centimeter", "day", "degree", "fahrenheit", "fluid-ounce", "foot", "gallon", "gigabit", "gigabyte", "gram", "hectare", "hour", "inch", "kilobit", "kilobyte", "kilogram", "kilometer", "liter", "megabit", "megabyte", "meter", "mile", "mile-scandinavian", "milliliter", "millimeter", "millisecond", "minute", "month", "ounce", "percent", "petabyte", "pound", "second", "stone", "terabit", "terabyte", "week", "yard", "year"};

    /* renamed from: a  reason: collision with root package name */
    private c.h f10845a;

    /* renamed from: f  reason: collision with root package name */
    private c.i f10850f;

    /* renamed from: m  reason: collision with root package name */
    private c.f f10857m;

    /* renamed from: p  reason: collision with root package name */
    private boolean f10860p;

    /* renamed from: s  reason: collision with root package name */
    private c.b f10863s;

    /* renamed from: b  reason: collision with root package name */
    private String f10846b = null;

    /* renamed from: c  reason: collision with root package name */
    private c.EnumC0153c f10847c = c.EnumC0153c.SYMBOL;

    /* renamed from: d  reason: collision with root package name */
    private c.d f10848d = c.d.STANDARD;

    /* renamed from: e  reason: collision with root package name */
    private String f10849e = null;

    /* renamed from: g  reason: collision with root package name */
    private boolean f10851g = true;

    /* renamed from: h  reason: collision with root package name */
    private int f10852h = -1;

    /* renamed from: i  reason: collision with root package name */
    private int f10853i = -1;

    /* renamed from: j  reason: collision with root package name */
    private int f10854j = -1;

    /* renamed from: k  reason: collision with root package name */
    private int f10855k = -1;

    /* renamed from: l  reason: collision with root package name */
    private int f10856l = -1;

    /* renamed from: n  reason: collision with root package name */
    private c.g f10858n = c.g.AUTO;

    /* renamed from: q  reason: collision with root package name */
    private String f10861q = null;

    /* renamed from: r  reason: collision with root package name */
    private c.e f10862r = null;

    /* renamed from: t  reason: collision with root package name */
    private ea.b f10864t = null;

    /* renamed from: u  reason: collision with root package name */
    private ea.b f10865u = null;

    /* renamed from: o  reason: collision with root package name */
    private c f10859o = new j();

    @gb.a
    public NumberFormat(List<String> list, Map<String, Object> map) {
        String str;
        a(list, map);
        c cVar = this.f10859o;
        ea.b bVar = this.f10864t;
        if (this.f10860p) {
            str = "";
        } else {
            str = this.f10861q;
        }
        cVar.k(bVar, str, this.f10845a, this.f10848d, this.f10862r, this.f10863s).d(this.f10846b, this.f10847c).g(this.f10851g).f(this.f10852h).e(this.f10857m, this.f10855k, this.f10856l).h(this.f10857m, this.f10853i, this.f10854j).j(this.f10858n).i(this.f10849e, this.f10850f);
    }

    private void a(List list, Map map) {
        Object p10;
        Object p11;
        Object q10 = ea.d.q();
        g.a aVar = g.a.STRING;
        ea.d.c(q10, "localeMatcher", g.c(map, "localeMatcher", aVar, ea.a.f22376a, "best fit"));
        Object c10 = g.c(map, "numberingSystem", aVar, ea.d.d(), ea.d.d());
        if (!ea.d.n(c10) && !b(ea.d.h(c10))) {
            throw new ea.f("Invalid numbering system !");
        }
        ea.d.c(q10, "nu", c10);
        HashMap a10 = f.a(list, q10, Collections.singletonList("nu"));
        ea.b bVar = (ea.b) ea.d.g(a10).get("locale");
        this.f10864t = bVar;
        this.f10865u = bVar.d();
        Object a11 = ea.d.a(a10, "nu");
        if (!ea.d.j(a11)) {
            this.f10860p = false;
            this.f10861q = ea.d.h(a11);
        } else {
            this.f10860p = true;
            this.f10861q = this.f10859o.b(this.f10864t);
        }
        h(map);
        if (this.f10845a == c.h.CURRENCY) {
            double n10 = j.n(this.f10846b);
            p10 = ea.d.p(n10);
            p11 = ea.d.p(n10);
        } else {
            p10 = ea.d.p(0.0d);
            if (this.f10845a == c.h.PERCENT) {
                p11 = ea.d.p(0.0d);
            } else {
                p11 = ea.d.p(3.0d);
            }
        }
        this.f10862r = (c.e) g.d(c.e.class, ea.d.h(g.c(map, "notation", aVar, new String[]{"standard", "scientific", "engineering", "compact"}, "standard")));
        g(map, p10, p11);
        Object c11 = g.c(map, "compactDisplay", aVar, new String[]{"short", "long"}, "short");
        if (this.f10862r == c.e.COMPACT) {
            this.f10863s = (c.b) g.d(c.b.class, ea.d.h(c11));
        }
        this.f10851g = ea.d.e(g.c(map, "useGrouping", g.a.BOOLEAN, ea.d.d(), ea.d.o(true)));
        this.f10858n = (c.g) g.d(c.g.class, ea.d.h(g.c(map, "signDisplay", aVar, new String[]{"auto", ReactScrollViewHelper.OVER_SCROLL_NEVER, ReactScrollViewHelper.OVER_SCROLL_ALWAYS, "exceptZero"}, "auto")));
    }

    private boolean b(String str) {
        return ea.c.e(str, 0, str.length() - 1);
    }

    private boolean c(String str) {
        if (Arrays.binarySearch(f10844v, str) >= 0) {
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
        Object b10 = g.b(map, "minimumIntegerDigits", ea.d.p(1.0d), ea.d.p(21.0d), ea.d.p(1.0d));
        Object a10 = ea.d.a(map, "minimumFractionDigits");
        Object a11 = ea.d.a(map, "maximumFractionDigits");
        Object a12 = ea.d.a(map, "minimumSignificantDigits");
        Object a13 = ea.d.a(map, "maximumSignificantDigits");
        this.f10852h = (int) Math.floor(ea.d.f(b10));
        if (ea.d.n(a12) && ea.d.n(a13)) {
            if (ea.d.n(a10) && ea.d.n(a11)) {
                c.e eVar = this.f10862r;
                if (eVar == c.e.COMPACT) {
                    this.f10857m = c.f.COMPACT_ROUNDING;
                    return;
                } else if (eVar == c.e.ENGINEERING) {
                    this.f10857m = c.f.FRACTION_DIGITS;
                    this.f10854j = 5;
                    return;
                } else {
                    this.f10857m = c.f.FRACTION_DIGITS;
                    this.f10853i = (int) Math.floor(ea.d.f(obj));
                    this.f10854j = (int) Math.floor(ea.d.f(obj2));
                    return;
                }
            }
            this.f10857m = c.f.FRACTION_DIGITS;
            Object a14 = g.a("minimumFractionDigits", a10, ea.d.p(0.0d), ea.d.p(20.0d), ea.d.d());
            Object a15 = g.a("maximumFractionDigits", a11, ea.d.p(0.0d), ea.d.p(20.0d), ea.d.d());
            if (ea.d.n(a14)) {
                a14 = ea.d.p(Math.min(ea.d.f(obj), ea.d.f(a15)));
            } else if (ea.d.n(a15)) {
                a15 = ea.d.p(Math.max(ea.d.f(obj2), ea.d.f(a14)));
            } else if (ea.d.f(a14) > ea.d.f(a15)) {
                throw new ea.f("minimumFractionDigits is greater than maximumFractionDigits");
            }
            this.f10853i = (int) Math.floor(ea.d.f(a14));
            this.f10854j = (int) Math.floor(ea.d.f(a15));
            return;
        }
        this.f10857m = c.f.SIGNIFICANT_DIGITS;
        Object a16 = g.a("minimumSignificantDigits", a12, ea.d.p(1.0d), ea.d.p(21.0d), ea.d.p(1.0d));
        Object a17 = g.a("maximumSignificantDigits", a13, a16, ea.d.p(21.0d), ea.d.p(21.0d));
        this.f10855k = (int) Math.floor(ea.d.f(a16));
        this.f10856l = (int) Math.floor(ea.d.f(a17));
    }

    private void h(Map map) {
        g.a aVar = g.a.STRING;
        this.f10845a = (c.h) g.d(c.h.class, ea.d.h(g.c(map, "style", aVar, new String[]{"decimal", "percent", "currency", "unit"}, "decimal")));
        Object c10 = g.c(map, "currency", aVar, ea.d.d(), ea.d.d());
        if (ea.d.n(c10)) {
            if (this.f10845a == c.h.CURRENCY) {
                throw new ea.f("Expected currency style !");
            }
        } else if (!d(ea.d.h(c10))) {
            throw new ea.f("Malformed currency code !");
        }
        Object c11 = g.c(map, "currencyDisplay", aVar, new String[]{"symbol", "narrowSymbol", "code", StackTraceHelper.NAME_KEY}, "symbol");
        Object c12 = g.c(map, "currencySign", aVar, new String[]{"accounting", "standard"}, "standard");
        Object c13 = g.c(map, "unit", aVar, ea.d.d(), ea.d.d());
        if (ea.d.n(c13)) {
            if (this.f10845a == c.h.UNIT) {
                throw new ea.f("Expected unit !");
            }
        } else if (!e(ea.d.h(c13))) {
            throw new ea.f("Malformed unit identifier !");
        }
        Object c14 = g.c(map, "unitDisplay", aVar, new String[]{"long", "short", "narrow"}, "short");
        c.h hVar = this.f10845a;
        if (hVar == c.h.CURRENCY) {
            this.f10846b = f(ea.d.h(c10));
            this.f10847c = (c.EnumC0153c) g.d(c.EnumC0153c.class, ea.d.h(c11));
            this.f10848d = (c.d) g.d(c.d.class, ea.d.h(c12));
        } else if (hVar == c.h.UNIT) {
            this.f10849e = ea.d.h(c13);
            this.f10850f = (c.i) g.d(c.i.class, ea.d.h(c14));
        }
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

    @gb.a
    public String format(double d10) {
        return this.f10859o.c(d10);
    }

    @gb.a
    public List<Map<String, String>> formatToParts(double d10) {
        String str;
        ArrayList arrayList = new ArrayList();
        AttributedCharacterIterator a10 = this.f10859o.a(d10);
        StringBuilder sb2 = new StringBuilder();
        for (char first = a10.first(); first != 65535; first = a10.next()) {
            sb2.append(first);
            if (a10.getIndex() + 1 == a10.getRunLimit()) {
                Iterator<AttributedCharacterIterator.Attribute> it = a10.getAttributes().keySet().iterator();
                if (it.hasNext()) {
                    str = this.f10859o.l(it.next(), d10);
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
        linkedHashMap.put("locale", this.f10865u.g());
        linkedHashMap.put("numberingSystem", this.f10861q);
        linkedHashMap.put("style", this.f10845a.toString());
        c.h hVar = this.f10845a;
        if (hVar == c.h.CURRENCY) {
            linkedHashMap.put("currency", this.f10846b);
            linkedHashMap.put("currencyDisplay", this.f10847c.toString());
            linkedHashMap.put("currencySign", this.f10848d.toString());
        } else if (hVar == c.h.UNIT) {
            linkedHashMap.put("unit", this.f10849e);
            linkedHashMap.put("unitDisplay", this.f10850f.toString());
        }
        int i10 = this.f10852h;
        if (i10 != -1) {
            linkedHashMap.put("minimumIntegerDigits", Integer.valueOf(i10));
        }
        c.f fVar = this.f10857m;
        if (fVar == c.f.SIGNIFICANT_DIGITS) {
            int i11 = this.f10856l;
            if (i11 != -1) {
                linkedHashMap.put("maximumSignificantDigits", Integer.valueOf(i11));
            }
            int i12 = this.f10855k;
            if (i12 != -1) {
                linkedHashMap.put("minimumSignificantDigits", Integer.valueOf(i12));
            }
        } else if (fVar == c.f.FRACTION_DIGITS) {
            int i13 = this.f10853i;
            if (i13 != -1) {
                linkedHashMap.put("minimumFractionDigits", Integer.valueOf(i13));
            }
            int i14 = this.f10854j;
            if (i14 != -1) {
                linkedHashMap.put("maximumFractionDigits", Integer.valueOf(i14));
            }
        }
        linkedHashMap.put("useGrouping", Boolean.valueOf(this.f10851g));
        linkedHashMap.put("notation", this.f10862r.toString());
        if (this.f10862r == c.e.COMPACT) {
            linkedHashMap.put("compactDisplay", this.f10863s.toString());
        }
        linkedHashMap.put("signDisplay", this.f10858n.toString());
        return linkedHashMap;
    }
}
