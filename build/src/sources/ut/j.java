package ut;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Set;
import net.time4j.h0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j implements h {

    /* renamed from: d  reason: collision with root package name */
    private final h f51946d;

    /* renamed from: e  reason: collision with root package name */
    private final st.p f51947e;

    /* renamed from: i  reason: collision with root package name */
    private final int f51948i;

    /* renamed from: o  reason: collision with root package name */
    private final int f51949o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f51950p;

    /* renamed from: q  reason: collision with root package name */
    private final char f51951q;

    /* renamed from: r  reason: collision with root package name */
    private final tt.g f51952r;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(st.p pVar, int i10, int i11, boolean z10) {
        this.f51947e = pVar;
        this.f51948i = i10;
        this.f51949o = i11;
        this.f51950p = !z10 && i10 == i11;
        this.f51946d = z10 ? new m(tt.a.f51016o) : null;
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
            this.f51951q = '0';
            this.f51952r = tt.g.SMART;
        } else {
            throw new IllegalArgumentException("Max digits out of range: " + i11);
        }
    }

    private int b(BigDecimal bigDecimal, int i10, int i11) {
        BigDecimal valueOf = BigDecimal.valueOf(i10);
        return bigDecimal.multiply(BigDecimal.valueOf(i11).subtract(valueOf).add(BigDecimal.ONE)).setScale(0, RoundingMode.FLOOR).add(valueOf).intValueExact();
    }

    private boolean c() {
        if (this.f51946d != null) {
            return true;
        }
        return false;
    }

    private static BigDecimal h(Number number) {
        return BigDecimal.valueOf(number.longValue());
    }

    /* JADX WARN: Removed duplicated region for block: B:48:0x0118  */
    /* JADX WARN: Removed duplicated region for block: B:49:0x0126  */
    @Override // ut.h
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void a(java.lang.CharSequence r20, ut.s r21, st.d r22, ut.t r23, boolean r24) {
        /*
            Method dump skipped, instructions count: 312
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ut.j.a(java.lang.CharSequence, ut.s, st.d, ut.t, boolean):void");
    }

    @Override // ut.h
    public h d(c cVar, st.d dVar, int i10) {
        return new j(this.f51946d, this.f51947e, this.f51948i, this.f51949o, this.f51950p, ((Character) dVar.b(tt.a.f51014m, '0')).charValue(), (tt.g) dVar.b(tt.a.f51007f, tt.g.SMART));
    }

    @Override // ut.h
    public h e(st.p pVar) {
        if (this.f51947e == pVar) {
            return this;
        }
        return new j(pVar, this.f51948i, this.f51949o, c());
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof j) {
            j jVar = (j) obj;
            if (this.f51947e.equals(jVar.f51947e) && this.f51948i == jVar.f51948i && this.f51949o == jVar.f51949o && c() == jVar.c()) {
                return true;
            }
        }
        return false;
    }

    @Override // ut.h
    public int f(st.o oVar, Appendable appendable, st.d dVar, Set set, boolean z10) {
        st.d dVar2;
        char charValue;
        int i10;
        Set set2;
        int i11;
        int i12;
        BigDecimal h10 = h((Number) oVar.t(this.f51947e));
        BigDecimal h11 = h((Number) oVar.m(this.f51947e));
        BigDecimal h12 = h((Number) oVar.n(this.f51947e));
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
            charValue = this.f51951q;
            dVar2 = dVar;
        } else {
            dVar2 = dVar;
            charValue = ((Character) dVar2.b(tt.a.f51014m, '0')).charValue();
        }
        char c10 = charValue;
        if (appendable instanceof CharSequence) {
            i10 = ((CharSequence) appendable).length();
        } else {
            i10 = -1;
        }
        int i13 = 0;
        if (bigDecimal2.scale() == 0) {
            if (this.f51948i > 0) {
                if (c()) {
                    this.f51946d.f(oVar, appendable, dVar2, set, z10);
                    i11 = 1;
                } else {
                    i11 = 0;
                }
                while (true) {
                    i12 = this.f51948i;
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
                this.f51946d.f(oVar, appendable, dVar, set2, z10);
                i13 = 1;
            } else {
                set2 = set;
            }
            String plainString = bigDecimal2.setScale(Math.min(Math.max(bigDecimal2.scale(), this.f51948i), this.f51949o), roundingMode).toPlainString();
            int i14 = c10 - '0';
            int length = plainString.length();
            for (int i15 = 2; i15 < length; i15++) {
                appendable.append((char) (plainString.charAt(i15) + i14));
                i13++;
            }
        }
        if (i10 != -1 && i13 > 1 && set2 != null) {
            set2.add(new g(this.f51947e, i10 + 1, i10 + i13));
        }
        return i13;
    }

    @Override // ut.h
    public boolean g() {
        return true;
    }

    @Override // ut.h
    public st.p getElement() {
        return this.f51947e;
    }

    public int hashCode() {
        return (this.f51947e.hashCode() * 7) + ((this.f51948i + (this.f51949o * 10)) * 31);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public st.q i(st.q qVar, st.q qVar2) {
        k kVar = k.FRACTION;
        if (!qVar2.s(kVar)) {
            return qVar;
        }
        int b10 = b((BigDecimal) qVar2.t(kVar), ((Integer) qVar.m(this.f51947e)).intValue(), ((Integer) qVar.n(this.f51947e)).intValue());
        qVar2.E(kVar, null);
        qVar2.C(this.f51947e, b10);
        return qVar.C(this.f51947e, b10);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(j.class.getName());
        sb2.append("[element=");
        sb2.append(this.f51947e.name());
        sb2.append(", min-digits=");
        sb2.append(this.f51948i);
        sb2.append(", max-digits=");
        sb2.append(this.f51949o);
        sb2.append(']');
        return sb2.toString();
    }

    private j(h hVar, st.p pVar, int i10, int i11, boolean z10, char c10, tt.g gVar) {
        this.f51946d = hVar;
        this.f51947e = pVar;
        this.f51948i = i10;
        this.f51949o = i11;
        this.f51950p = z10;
        this.f51951q = c10;
        this.f51952r = gVar;
    }
}
