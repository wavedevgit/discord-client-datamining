package tt;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Set;
import net.time4j.h0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j implements h {

    /* renamed from: d  reason: collision with root package name */
    private final h f50993d;

    /* renamed from: e  reason: collision with root package name */
    private final rt.p f50994e;

    /* renamed from: i  reason: collision with root package name */
    private final int f50995i;

    /* renamed from: o  reason: collision with root package name */
    private final int f50996o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f50997p;

    /* renamed from: q  reason: collision with root package name */
    private final char f50998q;

    /* renamed from: r  reason: collision with root package name */
    private final st.g f50999r;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(rt.p pVar, int i10, int i11, boolean z10) {
        this.f50994e = pVar;
        this.f50995i = i10;
        this.f50996o = i11;
        this.f50997p = !z10 && i10 == i11;
        this.f50993d = z10 ? new m(st.a.f50124o) : null;
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
            this.f50998q = '0';
            this.f50999r = st.g.SMART;
        } else {
            throw new IllegalArgumentException("Max digits out of range: " + i11);
        }
    }

    private int b(BigDecimal bigDecimal, int i10, int i11) {
        BigDecimal valueOf = BigDecimal.valueOf(i10);
        return bigDecimal.multiply(BigDecimal.valueOf(i11).subtract(valueOf).add(BigDecimal.ONE)).setScale(0, RoundingMode.FLOOR).add(valueOf).intValueExact();
    }

    private boolean c() {
        if (this.f50993d != null) {
            return true;
        }
        return false;
    }

    private static BigDecimal h(Number number) {
        return BigDecimal.valueOf(number.longValue());
    }

    /* JADX WARN: Removed duplicated region for block: B:48:0x0118  */
    /* JADX WARN: Removed duplicated region for block: B:49:0x0126  */
    @Override // tt.h
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void a(java.lang.CharSequence r20, tt.s r21, rt.d r22, tt.t r23, boolean r24) {
        /*
            Method dump skipped, instructions count: 312
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: tt.j.a(java.lang.CharSequence, tt.s, rt.d, tt.t, boolean):void");
    }

    @Override // tt.h
    public h d(rt.p pVar) {
        if (this.f50994e == pVar) {
            return this;
        }
        return new j(pVar, this.f50995i, this.f50996o, c());
    }

    @Override // tt.h
    public h e(c cVar, rt.d dVar, int i10) {
        return new j(this.f50993d, this.f50994e, this.f50995i, this.f50996o, this.f50997p, ((Character) dVar.b(st.a.f50122m, '0')).charValue(), (st.g) dVar.b(st.a.f50115f, st.g.SMART));
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof j) {
            j jVar = (j) obj;
            if (this.f50994e.equals(jVar.f50994e) && this.f50995i == jVar.f50995i && this.f50996o == jVar.f50996o && c() == jVar.c()) {
                return true;
            }
        }
        return false;
    }

    @Override // tt.h
    public int f(rt.o oVar, Appendable appendable, rt.d dVar, Set set, boolean z10) {
        rt.d dVar2;
        char charValue;
        int i10;
        Set set2;
        int i11;
        int i12;
        BigDecimal h10 = h((Number) oVar.s(this.f50994e));
        BigDecimal h11 = h((Number) oVar.v(this.f50994e));
        BigDecimal h12 = h((Number) oVar.t(this.f50994e));
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
            charValue = this.f50998q;
            dVar2 = dVar;
        } else {
            dVar2 = dVar;
            charValue = ((Character) dVar2.b(st.a.f50122m, '0')).charValue();
        }
        char c10 = charValue;
        if (appendable instanceof CharSequence) {
            i10 = ((CharSequence) appendable).length();
        } else {
            i10 = -1;
        }
        int i13 = 0;
        if (bigDecimal2.scale() == 0) {
            if (this.f50995i > 0) {
                if (c()) {
                    this.f50993d.f(oVar, appendable, dVar2, set, z10);
                    i11 = 1;
                } else {
                    i11 = 0;
                }
                while (true) {
                    i12 = this.f50995i;
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
                this.f50993d.f(oVar, appendable, dVar, set2, z10);
                i13 = 1;
            } else {
                set2 = set;
            }
            String plainString = bigDecimal2.setScale(Math.min(Math.max(bigDecimal2.scale(), this.f50995i), this.f50996o), roundingMode).toPlainString();
            int i14 = c10 - '0';
            int length = plainString.length();
            for (int i15 = 2; i15 < length; i15++) {
                appendable.append((char) (plainString.charAt(i15) + i14));
                i13++;
            }
        }
        if (i10 != -1 && i13 > 1 && set2 != null) {
            set2.add(new g(this.f50994e, i10 + 1, i10 + i13));
        }
        return i13;
    }

    @Override // tt.h
    public boolean g() {
        return true;
    }

    @Override // tt.h
    public rt.p getElement() {
        return this.f50994e;
    }

    public int hashCode() {
        return (this.f50994e.hashCode() * 7) + ((this.f50995i + (this.f50996o * 10)) * 31);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public rt.q i(rt.q qVar, rt.q qVar2) {
        k kVar = k.FRACTION;
        if (!qVar2.n(kVar)) {
            return qVar;
        }
        int b10 = b((BigDecimal) qVar2.s(kVar), ((Integer) qVar.v(this.f50994e)).intValue(), ((Integer) qVar.t(this.f50994e)).intValue());
        qVar2.E(kVar, null);
        qVar2.C(this.f50994e, b10);
        return qVar.C(this.f50994e, b10);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(j.class.getName());
        sb2.append("[element=");
        sb2.append(this.f50994e.name());
        sb2.append(", min-digits=");
        sb2.append(this.f50995i);
        sb2.append(", max-digits=");
        sb2.append(this.f50996o);
        sb2.append(']');
        return sb2.toString();
    }

    private j(h hVar, rt.p pVar, int i10, int i11, boolean z10, char c10, st.g gVar) {
        this.f50993d = hVar;
        this.f50994e = pVar;
        this.f50995i = i10;
        this.f50996o = i11;
        this.f50997p = z10;
        this.f50998q = c10;
        this.f50999r = gVar;
    }
}
