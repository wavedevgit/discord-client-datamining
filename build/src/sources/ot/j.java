package ot;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Set;
import net.time4j.h0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j implements h {

    /* renamed from: d  reason: collision with root package name */
    private final h f44681d;

    /* renamed from: e  reason: collision with root package name */
    private final mt.p f44682e;

    /* renamed from: i  reason: collision with root package name */
    private final int f44683i;

    /* renamed from: o  reason: collision with root package name */
    private final int f44684o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f44685p;

    /* renamed from: q  reason: collision with root package name */
    private final char f44686q;

    /* renamed from: r  reason: collision with root package name */
    private final nt.g f44687r;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(mt.p pVar, int i10, int i11, boolean z10) {
        this.f44682e = pVar;
        this.f44683i = i10;
        this.f44684o = i11;
        this.f44685p = !z10 && i10 == i11;
        this.f44681d = z10 ? new m(nt.a.f42040o) : null;
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
            this.f44686q = '0';
            this.f44687r = nt.g.SMART;
        } else {
            throw new IllegalArgumentException("Max digits out of range: " + i11);
        }
    }

    private int b(BigDecimal bigDecimal, int i10, int i11) {
        BigDecimal valueOf = BigDecimal.valueOf(i10);
        return bigDecimal.multiply(BigDecimal.valueOf(i11).subtract(valueOf).add(BigDecimal.ONE)).setScale(0, RoundingMode.FLOOR).add(valueOf).intValueExact();
    }

    private boolean c() {
        if (this.f44681d != null) {
            return true;
        }
        return false;
    }

    private static BigDecimal h(Number number) {
        return BigDecimal.valueOf(number.longValue());
    }

    @Override // ot.h
    public int a(mt.o oVar, Appendable appendable, mt.d dVar, Set set, boolean z10) {
        mt.d dVar2;
        char charValue;
        int i10;
        Set set2;
        int i11;
        int i12;
        BigDecimal h10 = h((Number) oVar.o(this.f44682e));
        BigDecimal h11 = h((Number) oVar.v(this.f44682e));
        BigDecimal h12 = h((Number) oVar.u(this.f44682e));
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
            charValue = this.f44686q;
            dVar2 = dVar;
        } else {
            dVar2 = dVar;
            charValue = ((Character) dVar2.b(nt.a.f42038m, '0')).charValue();
        }
        char c10 = charValue;
        if (appendable instanceof CharSequence) {
            i10 = ((CharSequence) appendable).length();
        } else {
            i10 = -1;
        }
        int i13 = 0;
        if (bigDecimal2.scale() == 0) {
            if (this.f44683i > 0) {
                if (c()) {
                    this.f44681d.a(oVar, appendable, dVar2, set, z10);
                    i11 = 1;
                } else {
                    i11 = 0;
                }
                while (true) {
                    i12 = this.f44683i;
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
                this.f44681d.a(oVar, appendable, dVar, set2, z10);
                i13 = 1;
            } else {
                set2 = set;
            }
            String plainString = bigDecimal2.setScale(Math.min(Math.max(bigDecimal2.scale(), this.f44683i), this.f44684o), roundingMode).toPlainString();
            int i14 = c10 - '0';
            int length = plainString.length();
            for (int i15 = 2; i15 < length; i15++) {
                appendable.append((char) (plainString.charAt(i15) + i14));
                i13++;
            }
        }
        if (i10 != -1 && i13 > 1 && set2 != null) {
            set2.add(new g(this.f44682e, i10 + 1, i10 + i13));
        }
        return i13;
    }

    @Override // ot.h
    public h d(c cVar, mt.d dVar, int i10) {
        return new j(this.f44681d, this.f44682e, this.f44683i, this.f44684o, this.f44685p, ((Character) dVar.b(nt.a.f42038m, '0')).charValue(), (nt.g) dVar.b(nt.a.f42031f, nt.g.SMART));
    }

    @Override // ot.h
    public h e(mt.p pVar) {
        if (this.f44682e == pVar) {
            return this;
        }
        return new j(pVar, this.f44683i, this.f44684o, c());
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof j) {
            j jVar = (j) obj;
            if (this.f44682e.equals(jVar.f44682e) && this.f44683i == jVar.f44683i && this.f44684o == jVar.f44684o && c() == jVar.c()) {
                return true;
            }
        }
        return false;
    }

    @Override // ot.h
    public boolean f() {
        return true;
    }

    /* JADX WARN: Removed duplicated region for block: B:48:0x0118  */
    /* JADX WARN: Removed duplicated region for block: B:49:0x0126  */
    @Override // ot.h
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void g(java.lang.CharSequence r20, ot.s r21, mt.d r22, ot.t r23, boolean r24) {
        /*
            Method dump skipped, instructions count: 312
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ot.j.g(java.lang.CharSequence, ot.s, mt.d, ot.t, boolean):void");
    }

    @Override // ot.h
    public mt.p getElement() {
        return this.f44682e;
    }

    public int hashCode() {
        return (this.f44682e.hashCode() * 7) + ((this.f44683i + (this.f44684o * 10)) * 31);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public mt.q i(mt.q qVar, mt.q qVar2) {
        k kVar = k.FRACTION;
        if (!qVar2.q(kVar)) {
            return qVar;
        }
        int b10 = b((BigDecimal) qVar2.o(kVar), ((Integer) qVar.v(this.f44682e)).intValue(), ((Integer) qVar.u(this.f44682e)).intValue());
        qVar2.E(kVar, null);
        qVar2.C(this.f44682e, b10);
        return qVar.C(this.f44682e, b10);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(j.class.getName());
        sb2.append("[element=");
        sb2.append(this.f44682e.name());
        sb2.append(", min-digits=");
        sb2.append(this.f44683i);
        sb2.append(", max-digits=");
        sb2.append(this.f44684o);
        sb2.append(']');
        return sb2.toString();
    }

    private j(h hVar, mt.p pVar, int i10, int i11, boolean z10, char c10, nt.g gVar) {
        this.f44681d = hVar;
        this.f44682e = pVar;
        this.f44683i = i10;
        this.f44684o = i11;
        this.f44685p = z10;
        this.f44686q = c10;
        this.f44687r = gVar;
    }
}
