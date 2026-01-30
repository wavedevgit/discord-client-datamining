package j$.time.format;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    public final DateTimeFormatter f31611a;

    /* renamed from: b  reason: collision with root package name */
    public boolean f31612b = true;

    /* renamed from: c  reason: collision with root package name */
    public boolean f31613c = true;

    /* renamed from: d  reason: collision with root package name */
    public final ArrayList f31614d;

    public o(DateTimeFormatter dateTimeFormatter) {
        ArrayList arrayList = new ArrayList();
        this.f31614d = arrayList;
        this.f31611a = dateTimeFormatter;
        arrayList.add(new u());
    }

    public final boolean a(char c10, char c11) {
        if (this.f31612b) {
            return c10 == c11;
        }
        return b(c10, c11);
    }

    public final boolean g(CharSequence charSequence, int i10, CharSequence charSequence2, int i11, int i12) {
        if (i10 + i12 <= charSequence.length() && i11 + i12 <= charSequence2.length()) {
            if (this.f31612b) {
                for (int i13 = 0; i13 < i12; i13++) {
                    if (charSequence.charAt(i10 + i13) == charSequence2.charAt(i11 + i13)) {
                    }
                }
                return true;
            }
            for (int i14 = 0; i14 < i12; i14++) {
                char charAt = charSequence.charAt(i10 + i14);
                char charAt2 = charSequence2.charAt(i11 + i14);
                if (charAt == charAt2 || Character.toUpperCase(charAt) == Character.toUpperCase(charAt2) || Character.toLowerCase(charAt) == Character.toLowerCase(charAt2)) {
                }
            }
            return true;
        }
        return false;
    }

    public static boolean b(char c10, char c11) {
        return c10 == c11 || Character.toUpperCase(c10) == Character.toUpperCase(c11) || Character.toLowerCase(c10) == Character.toLowerCase(c11);
    }

    public final u c() {
        ArrayList arrayList = this.f31614d;
        return (u) arrayList.get(arrayList.size() - 1);
    }

    public final Long d(j$.time.temporal.a aVar) {
        return (Long) ((HashMap) c().f31625a).get(aVar);
    }

    public final int f(j$.time.temporal.n nVar, long j10, int i10, int i11) {
        Objects.requireNonNull(nVar, "field");
        Long l10 = (Long) ((HashMap) c().f31625a).put(nVar, Long.valueOf(j10));
        return (l10 == null || l10.longValue() == j10) ? i11 : ~i10;
    }

    public final void e(j$.time.k kVar) {
        Objects.requireNonNull(kVar, "zone");
        c().f31626b = kVar;
    }

    public final String toString() {
        return c().toString();
    }
}
