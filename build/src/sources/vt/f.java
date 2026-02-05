package vt;

import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import qt.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f implements qt.i {

    /* renamed from: b  reason: collision with root package name */
    private static final Locale[] f52412b = new Locale[0];

    /* renamed from: c  reason: collision with root package name */
    public static final Set f52413c;

    /* renamed from: d  reason: collision with root package name */
    public static final f f52414d;

    /* renamed from: e  reason: collision with root package name */
    private static final Map f52415e;

    static {
        j[] values;
        String[] split = e.h("i18n/numbers/symbol", Locale.ROOT).f("locales").split(" ");
        HashSet hashSet = new HashSet();
        Collections.addAll(hashSet, split);
        f52413c = Collections.unmodifiableSet(hashSet);
        f52414d = new f();
        HashMap hashMap = new HashMap();
        for (j jVar : j.values()) {
            hashMap.put(jVar.l(), jVar);
        }
        f52415e = Collections.unmodifiableMap(hashMap);
    }

    private static e g(Locale locale) {
        if (f52413c.contains(d.a(locale))) {
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

    @Override // qt.i
    public Locale[] a() {
        return f52412b;
    }

    @Override // qt.i
    public char b(Locale locale) {
        return h(locale, "separator", qt.i.f48145a.b(locale));
    }

    @Override // qt.i
    public String c(Locale locale) {
        return i(locale, "plus", qt.i.f48145a.c(locale));
    }

    @Override // qt.i
    public j d(Locale locale) {
        String i10 = i(locale, "numsys", j.f48146d.l());
        j jVar = (j) f52415e.get(i10);
        if (jVar != null) {
            return jVar;
        }
        throw new IllegalStateException("Unrecognized number system: " + i10 + " (locale=" + locale + ')');
    }

    @Override // qt.i
    public String e(Locale locale) {
        return i(locale, "minus", qt.i.f48145a.e(locale));
    }

    @Override // qt.i
    public char f(Locale locale) {
        return h(locale, "zero", qt.i.f48145a.f(locale));
    }

    public String toString() {
        return "SymbolProviderSPI";
    }
}
