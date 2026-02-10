package yt;

import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import tt.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f implements tt.i {

    /* renamed from: b  reason: collision with root package name */
    private static final Locale[] f55795b = new Locale[0];

    /* renamed from: c  reason: collision with root package name */
    public static final Set f55796c;

    /* renamed from: d  reason: collision with root package name */
    public static final f f55797d;

    /* renamed from: e  reason: collision with root package name */
    private static final Map f55798e;

    static {
        j[] values;
        String[] split = e.h("i18n/numbers/symbol", Locale.ROOT).f("locales").split(" ");
        HashSet hashSet = new HashSet();
        Collections.addAll(hashSet, split);
        f55796c = Collections.unmodifiableSet(hashSet);
        f55797d = new f();
        HashMap hashMap = new HashMap();
        for (j jVar : j.values()) {
            hashMap.put(jVar.l(), jVar);
        }
        f55798e = Collections.unmodifiableMap(hashMap);
    }

    private static e g(Locale locale) {
        if (f55796c.contains(d.a(locale))) {
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

    @Override // tt.i
    public Locale[] a() {
        return f55795b;
    }

    @Override // tt.i
    public char b(Locale locale) {
        return h(locale, "separator", tt.i.f51061a.b(locale));
    }

    @Override // tt.i
    public String c(Locale locale) {
        return i(locale, "plus", tt.i.f51061a.c(locale));
    }

    @Override // tt.i
    public j d(Locale locale) {
        String i10 = i(locale, "numsys", j.f51062d.l());
        j jVar = (j) f55798e.get(i10);
        if (jVar != null) {
            return jVar;
        }
        throw new IllegalStateException("Unrecognized number system: " + i10 + " (locale=" + locale + ')');
    }

    @Override // tt.i
    public String e(Locale locale) {
        return i(locale, "minus", tt.i.f51061a.e(locale));
    }

    @Override // tt.i
    public char f(Locale locale) {
        return h(locale, "zero", tt.i.f51061a.f(locale));
    }

    public String toString() {
        return "SymbolProviderSPI";
    }
}
