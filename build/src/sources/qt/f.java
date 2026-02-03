package qt;

import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import lt.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f implements lt.i {

    /* renamed from: b  reason: collision with root package name */
    private static final Locale[] f47885b = new Locale[0];

    /* renamed from: c  reason: collision with root package name */
    public static final Set f47886c;

    /* renamed from: d  reason: collision with root package name */
    public static final f f47887d;

    /* renamed from: e  reason: collision with root package name */
    private static final Map f47888e;

    static {
        j[] values;
        String[] split = e.h("i18n/numbers/symbol", Locale.ROOT).f("locales").split(" ");
        HashSet hashSet = new HashSet();
        Collections.addAll(hashSet, split);
        f47886c = Collections.unmodifiableSet(hashSet);
        f47887d = new f();
        HashMap hashMap = new HashMap();
        for (j jVar : j.values()) {
            hashMap.put(jVar.l(), jVar);
        }
        f47888e = Collections.unmodifiableMap(hashMap);
    }

    private static e g(Locale locale) {
        if (f47886c.contains(d.a(locale))) {
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

    @Override // lt.i
    public Locale[] a() {
        return f47885b;
    }

    @Override // lt.i
    public char b(Locale locale) {
        return h(locale, "separator", lt.i.f37685a.b(locale));
    }

    @Override // lt.i
    public String c(Locale locale) {
        return i(locale, "plus", lt.i.f37685a.c(locale));
    }

    @Override // lt.i
    public j d(Locale locale) {
        String i10 = i(locale, "numsys", j.f37686d.l());
        j jVar = (j) f47888e.get(i10);
        if (jVar != null) {
            return jVar;
        }
        throw new IllegalStateException("Unrecognized number system: " + i10 + " (locale=" + locale + ')');
    }

    @Override // lt.i
    public String e(Locale locale) {
        return i(locale, "minus", lt.i.f37685a.e(locale));
    }

    @Override // lt.i
    public char f(Locale locale) {
        return h(locale, "zero", lt.i.f37685a.f(locale));
    }

    public String toString() {
        return "SymbolProviderSPI";
    }
}
