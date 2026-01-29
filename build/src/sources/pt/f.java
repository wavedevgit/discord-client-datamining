package pt;

import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import kt.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f implements kt.i {

    /* renamed from: b  reason: collision with root package name */
    private static final Locale[] f46212b = new Locale[0];

    /* renamed from: c  reason: collision with root package name */
    public static final Set f46213c;

    /* renamed from: d  reason: collision with root package name */
    public static final f f46214d;

    /* renamed from: e  reason: collision with root package name */
    private static final Map f46215e;

    static {
        j[] values;
        String[] split = e.h("i18n/numbers/symbol", Locale.ROOT).f("locales").split(" ");
        HashSet hashSet = new HashSet();
        Collections.addAll(hashSet, split);
        f46213c = Collections.unmodifiableSet(hashSet);
        f46214d = new f();
        HashMap hashMap = new HashMap();
        for (j jVar : j.values()) {
            hashMap.put(jVar.k(), jVar);
        }
        f46215e = Collections.unmodifiableMap(hashMap);
    }

    private static e g(Locale locale) {
        if (f46213c.contains(d.a(locale))) {
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

    @Override // kt.i
    public Locale[] a() {
        return f46212b;
    }

    @Override // kt.i
    public char b(Locale locale) {
        return h(locale, "separator", kt.i.f36587a.b(locale));
    }

    @Override // kt.i
    public String c(Locale locale) {
        return i(locale, "plus", kt.i.f36587a.c(locale));
    }

    @Override // kt.i
    public j d(Locale locale) {
        String i10 = i(locale, "numsys", j.f36588d.k());
        j jVar = (j) f46215e.get(i10);
        if (jVar != null) {
            return jVar;
        }
        throw new IllegalStateException("Unrecognized number system: " + i10 + " (locale=" + locale + ')');
    }

    @Override // kt.i
    public String e(Locale locale) {
        return i(locale, "minus", kt.i.f36587a.e(locale));
    }

    @Override // kt.i
    public char f(Locale locale) {
        return h(locale, "zero", kt.i.f36587a.f(locale));
    }

    public String toString() {
        return "SymbolProviderSPI";
    }
}
