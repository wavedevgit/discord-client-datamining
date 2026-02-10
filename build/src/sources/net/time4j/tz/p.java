package net.time4j.tz;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.io.Serializable;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Locale;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class p implements Comparable, k, Serializable {

    /* renamed from: o  reason: collision with root package name */
    private static final ConcurrentMap f38774o;

    /* renamed from: p  reason: collision with root package name */
    private static final BigDecimal f38775p;

    /* renamed from: q  reason: collision with root package name */
    private static final BigDecimal f38776q;

    /* renamed from: r  reason: collision with root package name */
    private static final BigDecimal f38777r;

    /* renamed from: s  reason: collision with root package name */
    private static final BigDecimal f38778s;
    private static final long serialVersionUID = -1410512619471503090L;

    /* renamed from: t  reason: collision with root package name */
    private static final BigDecimal f38779t;

    /* renamed from: u  reason: collision with root package name */
    private static final BigDecimal f38780u;

    /* renamed from: v  reason: collision with root package name */
    public static final p f38781v;

    /* renamed from: d  reason: collision with root package name */
    private final transient int f38782d;

    /* renamed from: e  reason: collision with root package name */
    private final transient int f38783e;

    /* renamed from: i  reason: collision with root package name */
    private final transient String f38784i;

    static {
        ConcurrentHashMap concurrentHashMap = new ConcurrentHashMap();
        f38774o = concurrentHashMap;
        f38775p = new BigDecimal(60);
        f38776q = new BigDecimal(3600);
        f38777r = new BigDecimal(-180);
        f38778s = new BigDecimal(180);
        f38779t = new BigDecimal(240);
        f38780u = new BigDecimal(1000000000);
        p pVar = new p(0, 0);
        f38781v = pVar;
        concurrentHashMap.put(0, pVar);
    }

    private p(int i10, int i11) {
        boolean z10;
        char c10;
        if (i11 == 0) {
            if (i10 < -64800 || i10 > 64800) {
                throw new IllegalArgumentException("Total seconds out of range: " + i10);
            }
        } else if (Math.abs(i11) <= 999999999) {
            if (i10 >= -39600 && i10 <= 39600) {
                if ((i10 < 0 && i11 > 0) || (i10 > 0 && i11 < 0)) {
                    throw new IllegalArgumentException("Different signs: offset=" + i10 + ", fraction=" + i11);
                }
            } else {
                throw new IllegalArgumentException("Total seconds out of range while fraction is non-zero: " + i10);
            }
        } else {
            throw new IllegalArgumentException("Fraction out of range: " + i11);
        }
        if (i10 >= 0 && i11 >= 0) {
            z10 = false;
        } else {
            z10 = true;
        }
        StringBuilder sb2 = new StringBuilder();
        if (z10) {
            c10 = '-';
        } else {
            c10 = '+';
        }
        sb2.append(c10);
        int abs = Math.abs(i10);
        int i12 = abs / 3600;
        int i13 = (abs / 60) % 60;
        int i14 = abs % 60;
        if (i12 < 10) {
            sb2.append('0');
        }
        sb2.append(i12);
        sb2.append(':');
        if (i13 < 10) {
            sb2.append('0');
        }
        sb2.append(i13);
        if (i14 != 0 || i11 != 0) {
            sb2.append(':');
            if (i14 < 10) {
                sb2.append('0');
            }
            sb2.append(i14);
            if (i11 != 0) {
                sb2.append('.');
                String valueOf = String.valueOf(Math.abs(i11));
                int length = 9 - valueOf.length();
                for (int i15 = 0; i15 < length; i15++) {
                    sb2.append('0');
                }
                sb2.append(valueOf);
            }
        }
        this.f38784i = sb2.toString();
        this.f38782d = i10;
        this.f38783e = i11;
    }

    public static p d(BigDecimal bigDecimal) {
        if (bigDecimal.compareTo(f38778s) <= 0 && bigDecimal.compareTo(f38777r) >= 0) {
            BigDecimal multiply = bigDecimal.multiply(f38779t);
            BigDecimal scale = multiply.setScale(0, RoundingMode.DOWN);
            BigDecimal multiply2 = multiply.subtract(scale).setScale(9, RoundingMode.HALF_UP).multiply(f38780u);
            int intValueExact = scale.intValueExact();
            int intValueExact2 = multiply2.intValueExact();
            if (intValueExact2 == 0) {
                return t(intValueExact);
            }
            if (intValueExact2 == 1000000000) {
                return t(intValueExact + 1);
            }
            if (intValueExact2 == -1000000000) {
                return t(intValueExact - 1);
            }
            return new p(intValueExact, intValueExact2);
        }
        throw new IllegalArgumentException("Out of range: " + bigDecimal);
    }

    public static p e(f fVar, int i10, int i11, double d10) {
        if (fVar != null) {
            if (i10 >= 0 && i10 <= 180) {
                if (i11 >= 0 && i11 <= 59) {
                    if (Double.compare(d10, 0.0d) >= 0 && Double.compare(d10, 60.0d) < 0) {
                        BigDecimal valueOf = BigDecimal.valueOf(i10);
                        if (i11 != 0) {
                            valueOf = valueOf.add(BigDecimal.valueOf(i11).setScale(15, RoundingMode.UNNECESSARY).divide(f38775p, RoundingMode.HALF_UP));
                        }
                        if (d10 != 0.0d) {
                            valueOf = valueOf.add(BigDecimal.valueOf(d10).setScale(15, RoundingMode.FLOOR).divide(f38776q, RoundingMode.HALF_UP));
                        }
                        if (fVar == f.BEHIND_UTC) {
                            valueOf = valueOf.negate();
                        }
                        return d(valueOf);
                    }
                    throw new IllegalArgumentException("Arc second out of range (0.0 <= arcSeconds < 60.0).");
                }
                throw new IllegalArgumentException("Arc minute out of range (0 <= arcMinutes <= 59).");
            }
            throw new IllegalArgumentException("Degrees of longitude out of range (0 <= degrees <= 180).");
        }
        throw new NullPointerException("Missing sign.");
    }

    private static String g(int i10, int i11) {
        return "[hours=" + i10 + ",minutes=" + i11 + ']';
    }

    public static p r(f fVar, int i10) {
        return s(fVar, i10, 0);
    }

    private void readObject(ObjectInputStream objectInputStream) {
        throw new InvalidObjectException("Serialization proxy required.");
    }

    public static p s(f fVar, int i10, int i11) {
        if (fVar != null) {
            if (i10 >= 0 && i10 <= 18) {
                if (i11 >= 0 && i11 <= 59) {
                    if (i10 == 18 && i11 != 0) {
                        throw new IllegalArgumentException("Time zone offset out of range (-18:00:00 <= offset <= 18:00:00) in: " + g(i10, i11));
                    }
                    int i12 = (i10 * 3600) + (i11 * 60);
                    if (fVar == f.BEHIND_UTC) {
                        i12 = -i12;
                    }
                    return t(i12);
                }
                throw new IllegalArgumentException("Minute part out of range (0 <= minutes <= 59) in: " + g(i10, i11));
            }
            throw new IllegalArgumentException("Hour part out of range (0 <= hours <= 18) in: " + g(i10, i11));
        }
        throw new NullPointerException("Missing sign.");
    }

    public static p t(int i10) {
        return u(i10, 0);
    }

    public static p u(int i10, int i11) {
        if (i11 != 0) {
            return new p(i10, i11);
        }
        if (i10 == 0) {
            return f38781v;
        }
        if (i10 % 900 == 0) {
            Integer valueOf = Integer.valueOf(i10);
            ConcurrentMap concurrentMap = f38774o;
            p pVar = (p) concurrentMap.get(valueOf);
            if (pVar == null) {
                concurrentMap.putIfAbsent(valueOf, new p(i10, 0));
                return (p) concurrentMap.get(valueOf);
            }
            return pVar;
        }
        return new p(i10, 0);
    }

    private static int v(String str, int i10, int i11) {
        int min = Math.min(str.length() - i10, i11);
        int i12 = -1;
        for (int i13 = 0; i13 < min; i13++) {
            char charAt = str.charAt(i10 + i13);
            if (charAt < '0' || charAt > '9') {
                break;
            }
            i12 = i12 == -1 ? charAt - '0' : (i12 * 10) + (charAt - '0');
        }
        return i12;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Removed duplicated region for block: B:20:0x0048  */
    /* JADX WARN: Removed duplicated region for block: B:66:0x00d3 A[RETURN] */
    /* JADX WARN: Removed duplicated region for block: B:67:0x00d4  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static net.time4j.tz.p w(java.lang.String r11, boolean r12) {
        /*
            Method dump skipped, instructions count: 235
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: net.time4j.tz.p.w(java.lang.String, boolean):net.time4j.tz.p");
    }

    private Object writeReplace() {
        return new SPX(this, 15);
    }

    @Override // net.time4j.tz.k
    public String a() {
        if (this.f38782d == 0 && this.f38783e == 0) {
            return "Z";
        }
        return "UTC" + this.f38784i;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof p) {
            p pVar = (p) obj;
            if (this.f38782d == pVar.f38782d && this.f38783e == pVar.f38783e) {
                return true;
            }
        }
        return false;
    }

    @Override // java.lang.Comparable
    /* renamed from: f */
    public int compareTo(p pVar) {
        int i10 = this.f38782d;
        int i11 = pVar.f38782d;
        if (i10 < i11) {
            return -1;
        }
        if (i10 > i11) {
            return 1;
        }
        int i12 = this.f38783e - pVar.f38783e;
        if (i12 < 0) {
            return -1;
        }
        if (i12 != 0) {
            return 1;
        }
        return 0;
    }

    public int h() {
        return Math.abs(this.f38782d) / 3600;
    }

    public int hashCode() {
        return (~this.f38782d) + (this.f38783e % 64000);
    }

    public int i() {
        return (Math.abs(this.f38782d) / 60) % 60;
    }

    public int k() {
        return Math.abs(this.f38782d) % 60;
    }

    public int l() {
        return this.f38783e;
    }

    public int m() {
        return this.f38782d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j n() {
        return j.R(this);
    }

    public f o() {
        if (this.f38782d >= 0 && this.f38783e >= 0) {
            return f.AHEAD_OF_UTC;
        }
        return f.BEHIND_UTC;
    }

    public String q(Locale locale) {
        boolean z10;
        if (this.f38782d == 0 && this.f38783e == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        try {
            return l.E.d(z10, locale);
        } catch (Throwable unused) {
            if (z10) {
                return "GMT";
            }
            return "GMT±hh:mm";
        }
    }

    public String toString() {
        return this.f38784i;
    }
}
