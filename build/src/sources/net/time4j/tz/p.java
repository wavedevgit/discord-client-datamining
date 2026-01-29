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
    private static final ConcurrentMap f40901o;

    /* renamed from: p  reason: collision with root package name */
    private static final BigDecimal f40902p;

    /* renamed from: q  reason: collision with root package name */
    private static final BigDecimal f40903q;

    /* renamed from: r  reason: collision with root package name */
    private static final BigDecimal f40904r;

    /* renamed from: s  reason: collision with root package name */
    private static final BigDecimal f40905s;
    private static final long serialVersionUID = -1410512619471503090L;

    /* renamed from: t  reason: collision with root package name */
    private static final BigDecimal f40906t;

    /* renamed from: u  reason: collision with root package name */
    private static final BigDecimal f40907u;

    /* renamed from: v  reason: collision with root package name */
    public static final p f40908v;

    /* renamed from: d  reason: collision with root package name */
    private final transient int f40909d;

    /* renamed from: e  reason: collision with root package name */
    private final transient int f40910e;

    /* renamed from: i  reason: collision with root package name */
    private final transient String f40911i;

    static {
        ConcurrentHashMap concurrentHashMap = new ConcurrentHashMap();
        f40901o = concurrentHashMap;
        f40902p = new BigDecimal(60);
        f40903q = new BigDecimal(3600);
        f40904r = new BigDecimal(-180);
        f40905s = new BigDecimal(180);
        f40906t = new BigDecimal(240);
        f40907u = new BigDecimal(1000000000);
        p pVar = new p(0, 0);
        f40908v = pVar;
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
        this.f40911i = sb2.toString();
        this.f40909d = i10;
        this.f40910e = i11;
    }

    public static p d(BigDecimal bigDecimal) {
        if (bigDecimal.compareTo(f40905s) <= 0 && bigDecimal.compareTo(f40904r) >= 0) {
            BigDecimal multiply = bigDecimal.multiply(f40906t);
            BigDecimal scale = multiply.setScale(0, RoundingMode.DOWN);
            BigDecimal multiply2 = multiply.subtract(scale).setScale(9, RoundingMode.HALF_UP).multiply(f40907u);
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
                            valueOf = valueOf.add(BigDecimal.valueOf(i11).setScale(15, RoundingMode.UNNECESSARY).divide(f40902p, RoundingMode.HALF_UP));
                        }
                        if (d10 != 0.0d) {
                            valueOf = valueOf.add(BigDecimal.valueOf(d10).setScale(15, RoundingMode.FLOOR).divide(f40903q, RoundingMode.HALF_UP));
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
            return f40908v;
        }
        if (i10 % 900 == 0) {
            Integer valueOf = Integer.valueOf(i10);
            ConcurrentMap concurrentMap = f40901o;
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
        if (this.f40909d == 0 && this.f40910e == 0) {
            return "Z";
        }
        return "UTC" + this.f40911i;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof p) {
            p pVar = (p) obj;
            if (this.f40909d == pVar.f40909d && this.f40910e == pVar.f40910e) {
                return true;
            }
        }
        return false;
    }

    @Override // java.lang.Comparable
    /* renamed from: f */
    public int compareTo(p pVar) {
        int i10 = this.f40909d;
        int i11 = pVar.f40909d;
        if (i10 < i11) {
            return -1;
        }
        if (i10 > i11) {
            return 1;
        }
        int i12 = this.f40910e - pVar.f40910e;
        if (i12 < 0) {
            return -1;
        }
        if (i12 != 0) {
            return 1;
        }
        return 0;
    }

    public int h() {
        return Math.abs(this.f40909d) / 3600;
    }

    public int hashCode() {
        return (~this.f40909d) + (this.f40910e % 64000);
    }

    public int i() {
        return (Math.abs(this.f40909d) / 60) % 60;
    }

    public int j() {
        return Math.abs(this.f40909d) % 60;
    }

    public int k() {
        return this.f40910e;
    }

    public int l() {
        return this.f40909d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j o() {
        return j.R(this);
    }

    public f p() {
        if (this.f40909d >= 0 && this.f40910e >= 0) {
            return f.AHEAD_OF_UTC;
        }
        return f.BEHIND_UTC;
    }

    public String q(Locale locale) {
        boolean z10;
        if (this.f40909d == 0 && this.f40910e == 0) {
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
        return this.f40911i;
    }
}
