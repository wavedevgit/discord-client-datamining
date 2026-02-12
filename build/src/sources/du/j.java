package du;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Set;
import net.time4j.h0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j implements h {

    /* renamed from: d  reason: collision with root package name */
    private final h f22049d;

    /* renamed from: e  reason: collision with root package name */
    private final bu.p f22050e;

    /* renamed from: i  reason: collision with root package name */
    private final int f22051i;

    /* renamed from: o  reason: collision with root package name */
    private final int f22052o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f22053p;

    /* renamed from: q  reason: collision with root package name */
    private final char f22054q;

    /* renamed from: r  reason: collision with root package name */
    private final cu.g f22055r;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(bu.p pVar, int i10, int i11, boolean z10) {
        this.f22050e = pVar;
        this.f22051i = i10;
        this.f22052o = i11;
        this.f22053p = !z10 && i10 == i11;
        this.f22049d = z10 ? new m(cu.a.f21123o) : null;
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
            this.f22054q = '0';
            this.f22055r = cu.g.SMART;
        } else {
            throw new IllegalArgumentException("Max digits out of range: " + i11);
        }
    }

    private int b(BigDecimal bigDecimal, int i10, int i11) {
        BigDecimal valueOf = BigDecimal.valueOf(i10);
        return bigDecimal.multiply(BigDecimal.valueOf(i11).subtract(valueOf).add(BigDecimal.ONE)).setScale(0, RoundingMode.FLOOR).add(valueOf).intValueExact();
    }

    private boolean c() {
        if (this.f22049d != null) {
            return true;
        }
        return false;
    }

    private static BigDecimal h(Number number) {
        return BigDecimal.valueOf(number.longValue());
    }

    @Override // du.h
    public h a(c cVar, bu.d dVar, int i10) {
        return new j(this.f22049d, this.f22050e, this.f22051i, this.f22052o, this.f22053p, ((Character) dVar.b(cu.a.f21121m, '0')).charValue(), (cu.g) dVar.b(cu.a.f21114f, cu.g.SMART));
    }

    /* JADX WARN: Removed duplicated region for block: B:48:0x0118  */
    /* JADX WARN: Removed duplicated region for block: B:49:0x0126  */
    @Override // du.h
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void d(java.lang.CharSequence r20, du.s r21, bu.d r22, du.t r23, boolean r24) {
        /*
            Method dump skipped, instructions count: 312
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: du.j.d(java.lang.CharSequence, du.s, bu.d, du.t, boolean):void");
    }

    @Override // du.h
    public h e(bu.p pVar) {
        if (this.f22050e == pVar) {
            return this;
        }
        return new j(pVar, this.f22051i, this.f22052o, c());
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof j) {
            j jVar = (j) obj;
            if (this.f22050e.equals(jVar.f22050e) && this.f22051i == jVar.f22051i && this.f22052o == jVar.f22052o && c() == jVar.c()) {
                return true;
            }
        }
        return false;
    }

    @Override // du.h
    public boolean f() {
        return true;
    }

    @Override // du.h
    public int g(bu.o oVar, Appendable appendable, bu.d dVar, Set set, boolean z10) {
        bu.d dVar2;
        char charValue;
        int i10;
        Set set2;
        int i11;
        int i12;
        BigDecimal h10 = h((Number) oVar.k(this.f22050e));
        BigDecimal h11 = h((Number) oVar.t(this.f22050e));
        BigDecimal h12 = h((Number) oVar.v(this.f22050e));
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
            charValue = this.f22054q;
            dVar2 = dVar;
        } else {
            dVar2 = dVar;
            charValue = ((Character) dVar2.b(cu.a.f21121m, '0')).charValue();
        }
        char c10 = charValue;
        if (appendable instanceof CharSequence) {
            i10 = ((CharSequence) appendable).length();
        } else {
            i10 = -1;
        }
        int i13 = 0;
        if (bigDecimal2.scale() == 0) {
            if (this.f22051i > 0) {
                if (c()) {
                    this.f22049d.g(oVar, appendable, dVar2, set, z10);
                    i11 = 1;
                } else {
                    i11 = 0;
                }
                while (true) {
                    i12 = this.f22051i;
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
                this.f22049d.g(oVar, appendable, dVar, set2, z10);
                i13 = 1;
            } else {
                set2 = set;
            }
            String plainString = bigDecimal2.setScale(Math.min(Math.max(bigDecimal2.scale(), this.f22051i), this.f22052o), roundingMode).toPlainString();
            int i14 = c10 - '0';
            int length = plainString.length();
            for (int i15 = 2; i15 < length; i15++) {
                appendable.append((char) (plainString.charAt(i15) + i14));
                i13++;
            }
        }
        if (i10 != -1 && i13 > 1 && set2 != null) {
            set2.add(new g(this.f22050e, i10 + 1, i10 + i13));
        }
        return i13;
    }

    @Override // du.h
    public bu.p getElement() {
        return this.f22050e;
    }

    public int hashCode() {
        return (this.f22050e.hashCode() * 7) + ((this.f22051i + (this.f22052o * 10)) * 31);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public bu.q i(bu.q qVar, bu.q qVar2) {
        k kVar = k.FRACTION;
        if (!qVar2.n(kVar)) {
            return qVar;
        }
        int b10 = b((BigDecimal) qVar2.k(kVar), ((Integer) qVar.t(this.f22050e)).intValue(), ((Integer) qVar.v(this.f22050e)).intValue());
        qVar2.E(kVar, null);
        qVar2.C(this.f22050e, b10);
        return qVar.C(this.f22050e, b10);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(j.class.getName());
        sb2.append("[element=");
        sb2.append(this.f22050e.name());
        sb2.append(", min-digits=");
        sb2.append(this.f22051i);
        sb2.append(", max-digits=");
        sb2.append(this.f22052o);
        sb2.append(']');
        return sb2.toString();
    }

    private j(h hVar, bu.p pVar, int i10, int i11, boolean z10, char c10, cu.g gVar) {
        this.f22049d = hVar;
        this.f22050e = pVar;
        this.f22051i = i10;
        this.f22052o = i11;
        this.f22053p = z10;
        this.f22054q = c10;
        this.f22055r = gVar;
    }
}
