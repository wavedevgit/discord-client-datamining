package xt;

import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import st.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f implements st.i {

    /* renamed from: b  reason: collision with root package name */
    private static final Locale[] f54860b = new Locale[0];

    /* renamed from: c  reason: collision with root package name */
    public static final Set f54861c;

    /* renamed from: d  reason: collision with root package name */
    public static final f f54862d;

    /* renamed from: e  reason: collision with root package name */
    private static final Map f54863e;

    static {
        j[] values;
        String[] split = e.h("i18n/numbers/symbol", Locale.ROOT).f("locales").split(" ");
        HashSet hashSet = new HashSet();
        Collections.addAll(hashSet, split);
        f54861c = Collections.unmodifiableSet(hashSet);
        f54862d = new f();
        HashMap hashMap = new HashMap();
        for (j jVar : j.values()) {
            hashMap.put(jVar.k(), jVar);
        }
        f54863e = Collections.unmodifiableMap(hashMap);
    }

    private static e g(Locale locale) {
        if (f54861c.contains(d.a(locale))) {
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

    @Override // st.i
    public Locale[] a() {
        return f54860b;
    }

    @Override // st.i
    public char b(Locale locale) {
        return h(locale, "separator", st.i.f50217a.b(locale));
    }

    @Override // st.i
    public String c(Locale locale) {
        return i(locale, "plus", st.i.f50217a.c(locale));
    }

    @Override // st.i
    public j d(Locale locale) {
        String i10 = i(locale, "numsys", j.f50218d.k());
        j jVar = (j) f54863e.get(i10);
        if (jVar != null) {
            return jVar;
        }
        throw new IllegalStateException("Unrecognized number system: " + i10 + " (locale=" + locale + ')');
    }

    @Override // st.i
    public String e(Locale locale) {
        return i(locale, "minus", st.i.f50217a.e(locale));
    }

    @Override // st.i
    public char f(Locale locale) {
        return h(locale, "zero", st.i.f50217a.f(locale));
    }

    public String toString() {
        return "SymbolProviderSPI";
    }
}
