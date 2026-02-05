package rt;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Set;
import net.time4j.h0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j implements h {

    /* renamed from: d  reason: collision with root package name */
    private final h f49130d;

    /* renamed from: e  reason: collision with root package name */
    private final pt.p f49131e;

    /* renamed from: i  reason: collision with root package name */
    private final int f49132i;

    /* renamed from: o  reason: collision with root package name */
    private final int f49133o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f49134p;

    /* renamed from: q  reason: collision with root package name */
    private final char f49135q;

    /* renamed from: r  reason: collision with root package name */
    private final qt.g f49136r;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(pt.p pVar, int i10, int i11, boolean z10) {
        this.f49131e = pVar;
        this.f49132i = i10;
        this.f49133o = i11;
        this.f49134p = !z10 && i10 == i11;
        this.f49130d = z10 ? new m(qt.a.f48100o) : null;
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
            this.f49135q = '0';
            this.f49136r = qt.g.SMART;
        } else {
            throw new IllegalArgumentException("Max digits out of range: " + i11);
        }
    }

    private int b(BigDecimal bigDecimal, int i10, int i11) {
        BigDecimal valueOf = BigDecimal.valueOf(i10);
        return bigDecimal.multiply(BigDecimal.valueOf(i11).subtract(valueOf).add(BigDecimal.ONE)).setScale(0, RoundingMode.FLOOR).add(valueOf).intValueExact();
    }

    private boolean c() {
        if (this.f49130d != null) {
            return true;
        }
        return false;
    }

    private static BigDecimal h(Number number) {
        return BigDecimal.valueOf(number.longValue());
    }

    @Override // rt.h
    public h a(pt.p pVar) {
        if (this.f49131e == pVar) {
            return this;
        }
        return new j(pVar, this.f49132i, this.f49133o, c());
    }

    /* JADX WARN: Removed duplicated region for block: B:48:0x0118  */
    /* JADX WARN: Removed duplicated region for block: B:49:0x0126  */
    @Override // rt.h
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void d(java.lang.CharSequence r20, rt.s r21, pt.d r22, rt.t r23, boolean r24) {
        /*
            Method dump skipped, instructions count: 312
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: rt.j.d(java.lang.CharSequence, rt.s, pt.d, rt.t, boolean):void");
    }

    @Override // rt.h
    public h e(c cVar, pt.d dVar, int i10) {
        return new j(this.f49130d, this.f49131e, this.f49132i, this.f49133o, this.f49134p, ((Character) dVar.a(qt.a.f48098m, '0')).charValue(), (qt.g) dVar.a(qt.a.f48091f, qt.g.SMART));
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof j) {
            j jVar = (j) obj;
            if (this.f49131e.equals(jVar.f49131e) && this.f49132i == jVar.f49132i && this.f49133o == jVar.f49133o && c() == jVar.c()) {
                return true;
            }
        }
        return false;
    }

    @Override // rt.h
    public int f(pt.o oVar, Appendable appendable, pt.d dVar, Set set, boolean z10) {
        pt.d dVar2;
        char charValue;
        int i10;
        Set set2;
        int i11;
        int i12;
        BigDecimal h10 = h((Number) oVar.v(this.f49131e));
        BigDecimal h11 = h((Number) oVar.s(this.f49131e));
        BigDecimal h12 = h((Number) oVar.n(this.f49131e));
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
            charValue = this.f49135q;
            dVar2 = dVar;
        } else {
            dVar2 = dVar;
            charValue = ((Character) dVar2.a(qt.a.f48098m, '0')).charValue();
        }
        char c10 = charValue;
        if (appendable instanceof CharSequence) {
            i10 = ((CharSequence) appendable).length();
        } else {
            i10 = -1;
        }
        int i13 = 0;
        if (bigDecimal2.scale() == 0) {
            if (this.f49132i > 0) {
                if (c()) {
                    this.f49130d.f(oVar, appendable, dVar2, set, z10);
                    i11 = 1;
                } else {
                    i11 = 0;
                }
                while (true) {
                    i12 = this.f49132i;
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
                this.f49130d.f(oVar, appendable, dVar, set2, z10);
                i13 = 1;
            } else {
                set2 = set;
            }
            String plainString = bigDecimal2.setScale(Math.min(Math.max(bigDecimal2.scale(), this.f49132i), this.f49133o), roundingMode).toPlainString();
            int i14 = c10 - '0';
            int length = plainString.length();
            for (int i15 = 2; i15 < length; i15++) {
                appendable.append((char) (plainString.charAt(i15) + i14));
                i13++;
            }
        }
        if (i10 != -1 && i13 > 1 && set2 != null) {
            set2.add(new g(this.f49131e, i10 + 1, i10 + i13));
        }
        return i13;
    }

    @Override // rt.h
    public boolean g() {
        return true;
    }

    @Override // rt.h
    public pt.p getElement() {
        return this.f49131e;
    }

    public int hashCode() {
        return (this.f49131e.hashCode() * 7) + ((this.f49132i + (this.f49133o * 10)) * 31);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public pt.q i(pt.q qVar, pt.q qVar2) {
        k kVar = k.FRACTION;
        if (!qVar2.m(kVar)) {
            return qVar;
        }
        int b10 = b((BigDecimal) qVar2.v(kVar), ((Integer) qVar.s(this.f49131e)).intValue(), ((Integer) qVar.n(this.f49131e)).intValue());
        qVar2.E(kVar, null);
        qVar2.C(this.f49131e, b10);
        return qVar.C(this.f49131e, b10);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(j.class.getName());
        sb2.append("[element=");
        sb2.append(this.f49131e.name());
        sb2.append(", min-digits=");
        sb2.append(this.f49132i);
        sb2.append(", max-digits=");
        sb2.append(this.f49133o);
        sb2.append(']');
        return sb2.toString();
    }

    private j(h hVar, pt.p pVar, int i10, int i11, boolean z10, char c10, qt.g gVar) {
        this.f49130d = hVar;
        this.f49131e = pVar;
        this.f49132i = i10;
        this.f49133o = i11;
        this.f49134p = z10;
        this.f49135q = c10;
        this.f49136r = gVar;
    }
}
