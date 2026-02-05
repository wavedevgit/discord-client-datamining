package androidx.core.os;

import android.os.LocaleList;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class LocaleListCompat {

    /* renamed from: b  reason: collision with root package name */
    private static final LocaleListCompat f3290b = a(new Locale[0]);

    /* renamed from: a  reason: collision with root package name */
    private final androidx.core.os.a f3291a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a {

        /* renamed from: a  reason: collision with root package name */
        private static final Locale[] f3292a = {new Locale("en", "XA"), new Locale("ar", "XB")};

        static Locale a(String str) {
            return Locale.forLanguageTag(str);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {
        static LocaleList a(Locale... localeArr) {
            return new LocaleList(localeArr);
        }
    }

    private LocaleListCompat(androidx.core.os.a aVar) {
        this.f3291a = aVar;
    }

    public static LocaleListCompat a(Locale... localeArr) {
        return h(b.a(localeArr));
    }

    public static LocaleListCompat b(String str) {
        if (str != null && !str.isEmpty()) {
            String[] split = str.split(",", -1);
            int length = split.length;
            Locale[] localeArr = new Locale[length];
            for (int i10 = 0; i10 < length; i10++) {
                localeArr[i10] = a.a(split[i10]);
            }
            return a(localeArr);
        }
        return d();
    }

    public static LocaleListCompat d() {
        return f3290b;
    }

    public static LocaleListCompat h(LocaleList localeList) {
        return new LocaleListCompat(new androidx.core.os.b(localeList));
    }

    public Locale c(int i10) {
        return this.f3291a.get(i10);
    }

    public boolean e() {
        return this.f3291a.isEmpty();
    }

    public boolean equals(Object obj) {
        if ((obj instanceof LocaleListCompat) && this.f3291a.equals(((LocaleListCompat) obj).f3291a)) {
            return true;
        }
        return false;
    }

    public int f() {
        return this.f3291a.size();
    }

    public String g() {
        return this.f3291a.a();
    }

    public int hashCode() {
        return this.f3291a.hashCode();
    }

    public String toString() {
        return this.f3291a.toString();
    }
}
