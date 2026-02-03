package st;

import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import nt.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f implements nt.i {

    /* renamed from: b  reason: collision with root package name */
    private static final Locale[] f49647b = new Locale[0];

    /* renamed from: c  reason: collision with root package name */
    public static final Set f49648c;

    /* renamed from: d  reason: collision with root package name */
    public static final f f49649d;

    /* renamed from: e  reason: collision with root package name */
    private static final Map f49650e;

    static {
        j[] values;
        String[] split = e.h("i18n/numbers/symbol", Locale.ROOT).f("locales").split(" ");
        HashSet hashSet = new HashSet();
        Collections.addAll(hashSet, split);
        f49648c = Collections.unmodifiableSet(hashSet);
        f49649d = new f();
        HashMap hashMap = new HashMap();
        for (j jVar : j.values()) {
            hashMap.put(jVar.k(), jVar);
        }
        f49650e = Collections.unmodifiableMap(hashMap);
    }

    private static e g(Locale locale) {
        if (f49648c.contains(d.a(locale))) {
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

    @Override // nt.i
    public Locale[] a() {
        return f49647b;
    }

    @Override // nt.i
    public char b(Locale locale) {
        return h(locale, "separator", nt.i.f42085a.b(locale));
    }

    @Override // nt.i
    public String c(Locale locale) {
        return i(locale, "plus", nt.i.f42085a.c(locale));
    }

    @Override // nt.i
    public j d(Locale locale) {
        String i10 = i(locale, "numsys", j.f42086d.k());
        j jVar = (j) f49650e.get(i10);
        if (jVar != null) {
            return jVar;
        }
        throw new IllegalStateException("Unrecognized number system: " + i10 + " (locale=" + locale + ')');
    }

    @Override // nt.i
    public String e(Locale locale) {
        return i(locale, "minus", nt.i.f42085a.e(locale));
    }

    @Override // nt.i
    public char f(Locale locale) {
        return h(locale, "zero", nt.i.f42085a.f(locale));
    }

    public String toString() {
        return "SymbolProviderSPI";
    }
}
