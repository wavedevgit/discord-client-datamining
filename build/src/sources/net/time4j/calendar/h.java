package net.time4j.calendar;

import java.io.Serializable;
import java.io.StreamCorruptedException;
import java.util.Locale;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h implements Comparable, Serializable {

    /* renamed from: d  reason: collision with root package name */
    public static final kt.c f40334d = lt.a.e("LEAP_MONTH_INDICATOR", Character.class);

    /* renamed from: e  reason: collision with root package name */
    public static final kt.c f40335e = lt.a.e("LEAP_MONTH_IS_TRAILING", Boolean.class);

    /* renamed from: i  reason: collision with root package name */
    private static final h[] f40336i;
    private static final long serialVersionUID = 7544059597266533279L;
    private final int index;
    private final boolean leap;

    static {
        h[] hVarArr = new h[24];
        for (int i10 = 0; i10 < 12; i10++) {
            hVarArr[i10] = new h(i10, false);
            hVarArr[i10 + 12] = new h(i10, true);
        }
        f40336i = hVarArr;
    }

    private h(int i10, boolean z10) {
        this.index = i10;
        this.leap = z10;
    }

    public static h f(int i10) {
        if (i10 >= 1 && i10 <= 12) {
            return f40336i[i10 - 1];
        }
        throw new IllegalArgumentException("Out of range: " + i10);
    }

    private Object readResolve() {
        int i10;
        try {
            h[] hVarArr = f40336i;
            int i11 = this.index;
            if (this.leap) {
                i10 = 12;
            } else {
                i10 = 0;
            }
            return hVarArr[i11 + i10];
        } catch (ArrayIndexOutOfBoundsException unused) {
            throw new StreamCorruptedException();
        }
    }

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(h hVar) {
        int i10 = this.index;
        int i11 = hVar.index;
        if (i10 < i11) {
            return -1;
        }
        if (i10 > i11) {
            return 1;
        }
        if (this.leap) {
            return !hVar.leap ? 1 : 0;
        }
        if (hVar.leap) {
            return -1;
        }
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String d(Locale locale, lt.j jVar, kt.d dVar) {
        StringBuilder sb2;
        Map m10 = lt.b.c("generic", locale).m();
        String a10 = nt.b.a(jVar, ((Character) dVar.a(lt.a.f37638m, Character.valueOf(jVar.m().charAt(0)))).charValue(), getNumber());
        if (this.leap) {
            boolean booleanValue = ((Boolean) dVar.a(f40335e, Boolean.valueOf("R".equals(m10.get("leap-alignment"))))).booleanValue();
            char charValue = ((Character) dVar.a(f40334d, Character.valueOf(((String) m10.get("leap-indicator")).charAt(0)))).charValue();
            if (booleanValue) {
                sb2 = new StringBuilder();
                sb2.append(a10);
                sb2.append(charValue);
            } else {
                sb2 = new StringBuilder();
                sb2.append(charValue);
                sb2.append(a10);
            }
            return sb2.toString();
        }
        return a10;
    }

    public boolean e() {
        return this.leap;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof h) {
            h hVar = (h) obj;
            if (this.index == hVar.index && this.leap == hVar.leap) {
                return true;
            }
        }
        return false;
    }

    public h g() {
        return f40336i[this.index + 12];
    }

    public int getNumber() {
        return this.index + 1;
    }

    public int hashCode() {
        int i10;
        int i11 = this.index;
        if (this.leap) {
            i10 = 12;
        } else {
            i10 = 0;
        }
        return i11 + i10;
    }

    public String toString() {
        String valueOf = String.valueOf(this.index + 1);
        if (this.leap) {
            return "*" + valueOf;
        }
        return valueOf;
    }
}
