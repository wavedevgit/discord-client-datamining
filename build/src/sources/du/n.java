package du;

import java.util.Locale;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class n implements h {

    /* renamed from: t  reason: collision with root package name */
    private static final net.time4j.tz.p f22089t = net.time4j.tz.p.t(64800);

    /* renamed from: u  reason: collision with root package name */
    private static final ConcurrentMap f22090u = new ConcurrentHashMap();

    /* renamed from: v  reason: collision with root package name */
    private static final ConcurrentMap f22091v = new ConcurrentHashMap();

    /* renamed from: d  reason: collision with root package name */
    private final boolean f22092d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f22093e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f22094i;

    /* renamed from: o  reason: collision with root package name */
    private final Locale f22095o;

    /* renamed from: p  reason: collision with root package name */
    private final String f22096p;

    /* renamed from: q  reason: collision with root package name */
    private final String f22097q;

    /* renamed from: r  reason: collision with root package name */
    private final char f22098r;

    /* renamed from: s  reason: collision with root package name */
    private final cu.g f22099s;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final String f22100a;

        /* renamed from: b  reason: collision with root package name */
        private final String f22101b;

        /* renamed from: c  reason: collision with root package name */
        private final int f22102c;

        /* renamed from: d  reason: collision with root package name */
        private final int f22103d;

        a(String str, String str2, int i10, int i11) {
            this.f22100a = str;
            this.f22101b = str2;
            this.f22102c = i10;
            this.f22103d = i11;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(boolean z10) {
        this(z10, true, false, Locale.ROOT, "+", "-", '0', cu.g.SMART);
    }

    private static boolean b(char c10, char c11) {
        if (c10 != c11 && Character.toUpperCase(c10) != Character.toUpperCase(c11) && Character.toLowerCase(c10) != Character.toLowerCase(c11)) {
            return false;
        }
        return true;
    }

    private static String c(Locale locale) {
        ConcurrentMap concurrentMap = f22090u;
        String str = (String) concurrentMap.get(locale);
        if (str == null) {
            str = net.time4j.tz.p.f37786v.q(locale);
            String str2 = (String) concurrentMap.putIfAbsent(locale, str);
            if (str2 != null) {
                return str2;
            }
        }
        return str;
    }

    private static net.time4j.tz.p h(bu.o oVar, bu.d dVar) {
        bu.c cVar = cu.a.f21112d;
        if (dVar.a(cVar)) {
            net.time4j.tz.k kVar = (net.time4j.tz.k) dVar.c(cVar);
            if (kVar instanceof net.time4j.tz.p) {
                return (net.time4j.tz.p) kVar;
            }
        }
        throw new IllegalArgumentException("Cannot extract timezone offset from format attributes for: " + oVar);
    }

    private static a i(Locale locale) {
        a aVar = (a) f22091v.get(locale);
        if (aVar == null) {
            String q10 = f22089t.q(locale);
            int length = q10.length();
            for (int i10 = 0; i10 < length; i10++) {
                if (q10.charAt(i10) == 177) {
                    int indexOf = q10.indexOf("hh", i10) + 2;
                    int indexOf2 = q10.indexOf("mm", indexOf);
                    a aVar2 = new a(q10, q10.substring(indexOf, indexOf2), i10, indexOf2 + 2);
                    a aVar3 = (a) f22091v.putIfAbsent(locale, aVar2);
                    if (aVar3 == null) {
                        return aVar2;
                    }
                    return aVar3;
                }
            }
            return aVar;
        }
        return aVar;
    }

    private static int j(CharSequence charSequence, int i10, char c10) {
        int i11 = 0;
        for (int i12 = 0; i12 < 2; i12++) {
            int i13 = i10 + i12;
            if (i13 >= charSequence.length()) {
                if (i12 == 0) {
                    return -1000;
                }
                return ~i11;
            }
            int charAt = charSequence.charAt(i13) - c10;
            if (charAt >= 0 && charAt <= 9) {
                i11 = (i11 * 10) + charAt;
            } else if (i12 == 0) {
                return -1000;
            } else {
                return ~i11;
            }
        }
        return i11;
    }

    private static int k(CharSequence charSequence, int i10, char c10) {
        int charAt;
        int i11 = 0;
        for (int i12 = 0; i12 < 2; i12++) {
            int i13 = i10 + i12;
            if (i13 >= charSequence.length() || (charAt = charSequence.charAt(i13) - c10) < 0 || charAt > 9) {
                return -1000;
            }
            i11 = (i11 * 10) + charAt;
        }
        return i11;
    }

    private static int l(CharSequence charSequence, int i10, int i11, Locale locale, boolean z10) {
        String[] strArr = {"GMT", c(locale), "UTC", "UT"};
        for (int i12 = 0; i12 < 4; i12++) {
            String str = strArr[i12];
            int length = str.length();
            if (i10 - i11 >= length) {
                String charSequence2 = charSequence.subSequence(i11, i11 + length).toString();
                if ((z10 && charSequence2.equalsIgnoreCase(str)) || (!z10 && charSequence2.equals(str))) {
                    return length;
                }
            }
        }
        return 0;
    }

    @Override // du.h
    public h a(c cVar, bu.d dVar, int i10) {
        return new n(this.f22092d, ((Boolean) dVar.b(cu.a.f21117i, Boolean.TRUE)).booleanValue(), ((Boolean) dVar.b(cu.a.f21122n, Boolean.FALSE)).booleanValue(), (Locale) dVar.b(cu.a.f21111c, Locale.ROOT), (String) dVar.b(b.f21936g, "+"), (String) dVar.b(b.f21937h, "-"), ((Character) dVar.b(cu.a.f21121m, '0')).charValue(), (cu.g) dVar.b(cu.a.f21114f, cu.g.SMART));
    }

    @Override // du.h
    public void d(CharSequence charSequence, s sVar, bu.d dVar, t tVar, boolean z10) {
        Locale locale;
        boolean booleanValue;
        boolean booleanValue2;
        char charValue;
        String str;
        String str2;
        String str3;
        String str4;
        char c10;
        net.time4j.tz.f fVar;
        int i10;
        cu.g gVar;
        int i11;
        int i12;
        net.time4j.tz.p s10;
        int m10;
        n nVar = this;
        bu.d dVar2 = dVar;
        int length = charSequence.length();
        int f10 = sVar.f();
        if (f10 >= length) {
            sVar.k(f10, "Missing localized time zone offset.");
            return;
        }
        if (z10) {
            locale = nVar.f22095o;
        } else {
            locale = (Locale) dVar2.b(cu.a.f21111c, Locale.ROOT);
        }
        boolean q10 = cu.b.q(locale);
        if (z10) {
            booleanValue = nVar.f22094i;
        } else {
            booleanValue = ((Boolean) dVar2.b(cu.a.f21122n, Boolean.FALSE)).booleanValue();
        }
        if (z10) {
            booleanValue2 = nVar.f22093e;
        } else {
            booleanValue2 = ((Boolean) dVar2.b(cu.a.f21117i, Boolean.TRUE)).booleanValue();
        }
        if (z10) {
            charValue = nVar.f22098r;
        } else {
            charValue = ((Character) dVar2.b(cu.a.f21121m, '0')).charValue();
        }
        if (z10) {
            str = nVar.f22096p;
        } else {
            str = (String) dVar2.b(b.f21936g, "+");
        }
        if (z10) {
            str2 = nVar.f22097q;
        } else {
            str2 = (String) dVar2.b(b.f21937h, "-");
        }
        a i13 = i(locale);
        int length2 = i13.f22100a.length();
        int i14 = 0;
        boolean z11 = booleanValue;
        net.time4j.tz.p pVar = null;
        int i15 = f10;
        int i16 = 0;
        while (i16 < length2) {
            int i17 = length2;
            char charAt = i13.f22100a.charAt(i16);
            if (i13.f22102c > i16 || i13.f22103d <= i16) {
                str3 = str;
                str4 = str2;
                if (z11) {
                    continue;
                } else {
                    if (i15 < length) {
                        c10 = charSequence.charAt(i15);
                    } else {
                        c10 = 0;
                    }
                    if ((!booleanValue2 && charAt == c10) || (booleanValue2 && b(charAt, c10))) {
                        i15++;
                    } else {
                        int l10 = l(charSequence, length, f10, locale, booleanValue2);
                        if (l10 > 0) {
                            tVar.I(b0.TIMEZONE_OFFSET, net.time4j.tz.p.f37786v);
                            sVar.l(f10 + l10);
                            return;
                        }
                        sVar.k(f10, "Literal mismatched in localized time zone offset.");
                        return;
                    }
                }
            } else {
                int m11 = m.m(charSequence, i15, str, booleanValue2, q10);
                if (m11 == -1) {
                    m11 = m.m(charSequence, i15, str2, booleanValue2, q10);
                    if (m11 == -1) {
                        if (!z11) {
                            i14 = l(charSequence, length, f10, locale, booleanValue2);
                        }
                        if (i14 > 0) {
                            tVar.I(b0.TIMEZONE_OFFSET, net.time4j.tz.p.f37786v);
                            sVar.l(f10 + i14);
                            return;
                        }
                        sVar.k(f10, "Missing sign in localized time zone offset.");
                        return;
                    }
                    fVar = net.time4j.tz.f.BEHIND_UTC;
                } else {
                    fVar = net.time4j.tz.f.AHEAD_OF_UTC;
                }
                net.time4j.tz.f fVar2 = fVar;
                int i18 = i15 + m11;
                int j10 = j(charSequence, i18, charValue);
                str3 = str;
                if (j10 == -1000) {
                    sVar.k(i18, "Missing hour part in localized time zone offset.");
                    return;
                }
                if (j10 < 0) {
                    j10 = ~j10;
                    i10 = i18 + 1;
                } else {
                    i10 = i18 + 2;
                }
                if (i10 >= length) {
                    if (nVar.f22092d) {
                        tVar.I(b0.TIMEZONE_OFFSET, net.time4j.tz.p.r(fVar2, j10));
                        sVar.l(i10);
                        return;
                    }
                    sVar.k(i10, "Missing minute part in localized time zone offset.");
                    return;
                }
                if (z10) {
                    gVar = nVar.f22099s;
                    str4 = str2;
                } else {
                    str4 = str2;
                    gVar = (cu.g) dVar2.b(cu.a.f21114f, cu.g.SMART);
                }
                int m12 = m.m(charSequence, i10, i13.f22101b, booleanValue2, q10);
                if (m12 != -1) {
                    i10 += m12;
                } else if (nVar.f22092d) {
                    tVar.I(b0.TIMEZONE_OFFSET, net.time4j.tz.p.r(fVar2, j10));
                    sVar.l(i10);
                    return;
                } else if (gVar.e()) {
                    sVar.k(i10, "Mismatch of localized time zone offset separator.");
                    return;
                }
                int k10 = k(charSequence, i10, charValue);
                if (k10 == -1000) {
                    sVar.k(i10, "Minute part in localized time zone offset does not match expected pattern mm.");
                    return;
                }
                i15 = i10 + 2;
                if (i15 < length && (m10 = m.m(charSequence, i15, i13.f22101b, booleanValue2, q10)) != -1) {
                    int i19 = i15 + m10;
                    i12 = k(charSequence, i19, charValue);
                    i11 = -1000;
                    if (i12 == -1000) {
                        i15 = i19 - m10;
                    } else {
                        i15 = i19 + 2;
                    }
                } else {
                    i11 = -1000;
                    i12 = 0;
                }
                if (i12 != 0 && i12 != i11) {
                    int i20 = (j10 * 3600) + (k10 * 60) + i12;
                    if (fVar2 == net.time4j.tz.f.BEHIND_UTC) {
                        i20 = -i20;
                    }
                    s10 = net.time4j.tz.p.t(i20);
                } else {
                    s10 = net.time4j.tz.p.s(fVar2, j10, k10);
                }
                i16 = i13.f22103d - 1;
                pVar = s10;
            }
            i16++;
            nVar = this;
            dVar2 = dVar;
            length2 = i17;
            str = str3;
            str2 = str4;
        }
        if (pVar == null) {
            sVar.k(i15, "Unable to determine localized time zone offset.");
            return;
        }
        tVar.I(b0.TIMEZONE_OFFSET, pVar);
        sVar.l(i15);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof n) && this.f22092d == ((n) obj).f22092d) {
            return true;
        }
        return false;
    }

    @Override // du.h
    public boolean f() {
        return false;
    }

    @Override // du.h
    public int g(bu.o oVar, Appendable appendable, bu.d dVar, Set set, boolean z10) {
        int i10;
        net.time4j.tz.k kVar;
        net.time4j.tz.p B;
        Locale locale;
        char charValue;
        String str;
        String str2;
        boolean booleanValue;
        int i11;
        net.time4j.tz.p pVar;
        int length;
        if (appendable instanceof CharSequence) {
            i10 = ((CharSequence) appendable).length();
        } else {
            i10 = -1;
        }
        if (oVar.l()) {
            kVar = oVar.r();
        } else {
            kVar = null;
        }
        if (kVar == null) {
            B = h(oVar, dVar);
        } else if (kVar instanceof net.time4j.tz.p) {
            B = (net.time4j.tz.p) kVar;
        } else if (oVar instanceof zt.f) {
            B = net.time4j.tz.l.N(kVar).B((zt.f) oVar);
        } else {
            throw new IllegalArgumentException("Cannot extract timezone offset from: " + oVar);
        }
        if (z10) {
            locale = this.f22095o;
        } else {
            locale = (Locale) dVar.b(cu.a.f21111c, Locale.ROOT);
        }
        char c10 = '0';
        if (z10) {
            charValue = this.f22098r;
        } else {
            charValue = ((Character) dVar.b(cu.a.f21121m, '0')).charValue();
        }
        if (z10) {
            str = this.f22096p;
        } else {
            str = (String) dVar.b(b.f21936g, "+");
        }
        if (z10) {
            str2 = this.f22097q;
        } else {
            str2 = (String) dVar.b(b.f21937h, "-");
        }
        if (z10) {
            booleanValue = this.f22094i;
        } else {
            booleanValue = ((Boolean) dVar.b(cu.a.f21122n, Boolean.FALSE)).booleanValue();
        }
        int m10 = B.m();
        int l10 = B.l();
        if (!booleanValue && m10 == 0 && l10 == 0) {
            String c11 = c(locale);
            appendable.append(c11);
            i11 = c11.length();
        } else {
            a i12 = i(locale);
            int length2 = i12.f22100a.length();
            int i13 = 0;
            int i14 = 0;
            while (i14 < length2) {
                char c12 = c10;
                char charAt = i12.f22100a.charAt(i14);
                if (i12.f22102c > i14 || i12.f22103d <= i14) {
                    pVar = B;
                    if (!booleanValue) {
                        appendable.append(charAt);
                        i13++;
                    }
                } else {
                    if (B.o() == net.time4j.tz.f.BEHIND_UTC) {
                        appendable.append(str2);
                        length = str2.length();
                    } else {
                        appendable.append(str);
                        length = str.length();
                    }
                    i13 += length;
                    int h10 = B.h();
                    int i15 = B.i();
                    int k10 = B.k();
                    if (h10 < 10 && !this.f22092d) {
                        appendable.append(charValue);
                        i13++;
                    }
                    String valueOf = String.valueOf(h10);
                    pVar = B;
                    for (int i16 = 0; i16 < valueOf.length(); i16++) {
                        appendable.append((char) ((valueOf.charAt(i16) - '0') + charValue));
                        i13++;
                    }
                    if (i15 != 0 || k10 != 0 || !this.f22092d) {
                        appendable.append(i12.f22101b);
                        i13 += i12.f22101b.length();
                        if (i15 < 10) {
                            appendable.append(charValue);
                            i13++;
                        }
                        String valueOf2 = String.valueOf(i15);
                        for (int i17 = 0; i17 < valueOf2.length(); i17++) {
                            appendable.append((char) ((valueOf2.charAt(i17) - '0') + charValue));
                            i13++;
                        }
                        if (k10 != 0) {
                            appendable.append(i12.f22101b);
                            i13 += i12.f22101b.length();
                            if (k10 < 10) {
                                appendable.append(charValue);
                                i13++;
                            }
                            String valueOf3 = String.valueOf(k10);
                            for (int i18 = 0; i18 < valueOf3.length(); i18++) {
                                appendable.append((char) ((valueOf3.charAt(i18) - '0') + charValue));
                                i13++;
                            }
                        }
                    }
                    i14 = i12.f22103d - 1;
                }
                i14++;
                c10 = c12;
                B = pVar;
            }
            i11 = i13;
        }
        if (i10 != -1 && i11 > 0 && set != null) {
            set.add(new g(b0.TIMEZONE_ID, i10, i10 + i11));
        }
        return i11;
    }

    @Override // du.h
    public bu.p getElement() {
        return b0.TIMEZONE_OFFSET;
    }

    public int hashCode() {
        return this.f22092d ? 1 : 0;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(n.class.getName());
        sb2.append("[abbreviated=");
        sb2.append(this.f22092d);
        sb2.append(']');
        return sb2.toString();
    }

    private n(boolean z10, boolean z11, boolean z12, Locale locale, String str, String str2, char c10, cu.g gVar) {
        this.f22092d = z10;
        this.f22093e = z11;
        this.f22094i = z12;
        this.f22095o = locale;
        this.f22096p = str;
        this.f22097q = str2;
        this.f22098r = c10;
        this.f22099s = gVar;
    }

    @Override // du.h
    public h e(bu.p pVar) {
        return this;
    }
}
