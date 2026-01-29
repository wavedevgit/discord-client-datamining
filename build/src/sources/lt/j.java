package lt;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Set;
import net.time4j.h0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j implements h {

    /* renamed from: d  reason: collision with root package name */
    private final h f37610d;

    /* renamed from: e  reason: collision with root package name */
    private final jt.p f37611e;

    /* renamed from: i  reason: collision with root package name */
    private final int f37612i;

    /* renamed from: o  reason: collision with root package name */
    private final int f37613o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f37614p;

    /* renamed from: q  reason: collision with root package name */
    private final char f37615q;

    /* renamed from: r  reason: collision with root package name */
    private final kt.g f37616r;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(jt.p pVar, int i10, int i11, boolean z10) {
        this.f37611e = pVar;
        this.f37612i = i10;
        this.f37613o = i11;
        this.f37614p = !z10 && i10 == i11;
        this.f37610d = z10 ? new m(kt.a.f36542o) : null;
        if (pVar == null) {
            throw new NullPointerException("Missing element.");
        }
        if (i10 < 0) {
            throw new IllegalArgumentException("Negative min digits: " + i10);
        } else if (i10 > i11) {
            throw new IllegalArgumentException("Max smaller than min: " + i11 + " < " + i10);
        } else if (i10 > 9) {
            throw new IllegalArgumentException("Min digits out of range: " + i10);
        } else if (i11 <= 9) {
            this.f37615q = '0';
            this.f37616r = kt.g.SMART;
        } else {
            throw new IllegalArgumentException("Max digits out of range: " + i11);
        }
    }

    private int b(BigDecimal bigDecimal, int i10, int i11) {
        BigDecimal valueOf = BigDecimal.valueOf(i10);
        return bigDecimal.multiply(BigDecimal.valueOf(i11).subtract(valueOf).add(BigDecimal.ONE)).setScale(0, RoundingMode.FLOOR).add(valueOf).intValueExact();
    }

    private boolean c() {
        if (this.f37610d != null) {
            return true;
        }
        return false;
    }

    private static BigDecimal h(Number number) {
        return BigDecimal.valueOf(number.longValue());
    }

    @Override // lt.h
    public h a(c cVar, jt.d dVar, int i10) {
        return new j(this.f37610d, this.f37611e, this.f37612i, this.f37613o, this.f37614p, ((Character) dVar.b(kt.a.f36540m, '0')).charValue(), (kt.g) dVar.b(kt.a.f36533f, kt.g.SMART));
    }

    @Override // lt.h
    public int d(jt.o oVar, Appendable appendable, jt.d dVar, Set set, boolean z10) {
        jt.d dVar2;
        char charValue;
        int i10;
        Set set2;
        int i11;
        int i12;
        BigDecimal h10 = h((Number) oVar.p(this.f37611e));
        BigDecimal h11 = h((Number) oVar.t(this.f37611e));
        BigDecimal h12 = h((Number) oVar.i(this.f37611e));
        if (h10.compareTo(h12) > 0) {
            h10 = h12;
        }
        BigDecimal subtract = h10.subtract(h11);
        BigDecimal add = h12.subtract(h11).add(BigDecimal.ONE);
        RoundingMode roundingMode = RoundingMode.FLOOR;
        BigDecimal divide = subtract.divide(add, 9, roundingMode);
        BigDecimal bigDecimal = BigDecimal.ZERO;
        if (divide.compareTo(bigDecimal) != 0) {
            bigDecimal = h0.a(divide);
        }
        BigDecimal bigDecimal2 = bigDecimal;
        if (z10) {
            charValue = this.f37615q;
            dVar2 = dVar;
        } else {
            dVar2 = dVar;
            charValue = ((Character) dVar2.b(kt.a.f36540m, '0')).charValue();
        }
        char c10 = charValue;
        if (appendable instanceof CharSequence) {
            i10 = ((CharSequence) appendable).length();
        } else {
            i10 = -1;
        }
        int i13 = 0;
        if (bigDecimal2.scale() == 0) {
            if (this.f37612i > 0) {
                if (c()) {
                    this.f37610d.d(oVar, appendable, dVar2, set, z10);
                    i11 = 1;
                } else {
                    i11 = 0;
                }
                while (true) {
                    i12 = this.f37612i;
                    if (i13 >= i12) {
                        break;
                    }
                    appendable.append(c10);
                    i13++;
                }
                i13 = i11 + i12;
            }
            set2 = set;
        } else {
            if (c()) {
                set2 = set;
                this.f37610d.d(oVar, appendable, dVar, set2, z10);
                i13 = 1;
            } else {
                set2 = set;
            }
            String plainString = bigDecimal2.setScale(Math.min(Math.max(bigDecimal2.scale(), this.f37612i), this.f37613o), roundingMode).toPlainString();
            int i14 = c10 - '0';
            int length = plainString.length();
            for (int i15 = 2; i15 < length; i15++) {
                appendable.append((char) (plainString.charAt(i15) + i14));
                i13++;
            }
        }
        if (i10 != -1 && i13 > 1 && set2 != null) {
            set2.add(new g(this.f37611e, i10 + 1, i10 + i13));
        }
        return i13;
    }

    /* JADX WARN: Removed duplicated region for block: B:48:0x0118  */
    /* JADX WARN: Removed duplicated region for block: B:49:0x0126  */
    @Override // lt.h
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void e(java.lang.CharSequence r20, lt.s r21, jt.d r22, lt.t r23, boolean r24) {
        /*
            Method dump skipped, instructions count: 312
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: lt.j.e(java.lang.CharSequence, lt.s, jt.d, lt.t, boolean):void");
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof j) {
            j jVar = (j) obj;
            if (this.f37611e.equals(jVar.f37611e) && this.f37612i == jVar.f37612i && this.f37613o == jVar.f37613o && c() == jVar.c()) {
                return true;
            }
        }
        return false;
    }

    @Override // lt.h
    public boolean f() {
        return true;
    }

    @Override // lt.h
    public h g(jt.p pVar) {
        if (this.f37611e == pVar) {
            return this;
        }
        return new j(pVar, this.f37612i, this.f37613o, c());
    }

    @Override // lt.h
    public jt.p getElement() {
        return this.f37611e;
    }

    public int hashCode() {
        return (this.f37611e.hashCode() * 7) + ((this.f37612i + (this.f37613o * 10)) * 31);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public jt.q i(jt.q qVar, jt.q qVar2) {
        k kVar = k.FRACTION;
        if (!qVar2.o(kVar)) {
            return qVar;
        }
        int b10 = b((BigDecimal) qVar2.p(kVar), ((Integer) qVar.t(this.f37611e)).intValue(), ((Integer) qVar.i(this.f37611e)).intValue());
        qVar2.E(kVar, null);
        qVar2.C(this.f37611e, b10);
        return qVar.C(this.f37611e, b10);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(j.class.getName());
        sb2.append("[element=");
        sb2.append(this.f37611e.name());
        sb2.append(", min-digits=");
        sb2.append(this.f37612i);
        sb2.append(", max-digits=");
        sb2.append(this.f37613o);
        sb2.append(']');
        return sb2.toString();
    }

    private j(h hVar, jt.p pVar, int i10, int i11, boolean z10, char c10, kt.g gVar) {
        this.f37610d = hVar;
        this.f37611e = pVar;
        this.f37612i = i10;
        this.f37613o = i11;
        this.f37614p = z10;
        this.f37615q = c10;
        this.f37616r = gVar;
    }
}
