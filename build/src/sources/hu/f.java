package hu;

import cu.j;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f implements cu.i {

    /* renamed from: b  reason: collision with root package name */
    private static final Locale[] f27717b = new Locale[0];

    /* renamed from: c  reason: collision with root package name */
    public static final Set f27718c;

    /* renamed from: d  reason: collision with root package name */
    public static final f f27719d;

    /* renamed from: e  reason: collision with root package name */
    private static final Map f27720e;

    static {
        j[] values;
        String[] split = e.h("i18n/numbers/symbol", Locale.ROOT).f("locales").split(" ");
        HashSet hashSet = new HashSet();
        Collections.addAll(hashSet, split);
        f27718c = Collections.unmodifiableSet(hashSet);
        f27719d = new f();
        HashMap hashMap = new HashMap();
        for (j jVar : j.values()) {
            hashMap.put(jVar.l(), jVar);
        }
        f27720e = Collections.unmodifiableMap(hashMap);
    }

    private static e g(Locale locale) {
        if (f27718c.contains(d.a(locale))) {
            return e.h("i18n/numbers/symbol", locale);
        }
        return null;
    }

    private static char h(Locale locale, String str, char c10) {
        e g10 = g(locale);
        if (g10 != null && g10.b(str)) {
            return g10.f(str).charAt(0);
        }
        return c10;
    }

    private static String i(Locale locale, String str, String str2) {
        e g10 = g(locale);
        if (g10 != null && g10.b(str)) {
            return g10.f(str);
        }
        return str2;
    }

    @Override // cu.i
    public Locale[] a() {
        return f27717b;
    }

    @Override // cu.i
    public char b(Locale locale) {
        return h(locale, "separator", cu.i.f21167a.b(locale));
    }

    @Override // cu.i
    public String c(Locale locale) {
        return i(locale, "plus", cu.i.f21167a.c(locale));
    }

    @Override // cu.i
    public j d(Locale locale) {
        String i10 = i(locale, "numsys", j.f21168d.l());
        j jVar = (j) f27720e.get(i10);
        if (jVar != null) {
            return jVar;
        }
        throw new IllegalStateException("Unrecognized number system: " + i10 + " (locale=" + locale + ')');
    }

    @Override // cu.i
    public String e(Locale locale) {
        return i(locale, "minus", cu.i.f21167a.e(locale));
    }

    @Override // cu.i
    public char f(Locale locale) {
        return h(locale, "zero", cu.i.f21167a.f(locale));
    }

    public String toString() {
        return "SymbolProviderSPI";
    }
}
