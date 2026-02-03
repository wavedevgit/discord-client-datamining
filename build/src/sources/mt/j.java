package mt;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Set;
import net.time4j.h0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j implements h {

    /* renamed from: d  reason: collision with root package name */
    private final h f39326d;

    /* renamed from: e  reason: collision with root package name */
    private final kt.p f39327e;

    /* renamed from: i  reason: collision with root package name */
    private final int f39328i;

    /* renamed from: o  reason: collision with root package name */
    private final int f39329o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f39330p;

    /* renamed from: q  reason: collision with root package name */
    private final char f39331q;

    /* renamed from: r  reason: collision with root package name */
    private final lt.g f39332r;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(kt.p pVar, int i10, int i11, boolean z10) {
        this.f39327e = pVar;
        this.f39328i = i10;
        this.f39329o = i11;
        this.f39330p = !z10 && i10 == i11;
        this.f39326d = z10 ? new m(lt.a.f37640o) : null;
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
            this.f39331q = '0';
            this.f39332r = lt.g.SMART;
        } else {
            throw new IllegalArgumentException("Max digits out of range: " + i11);
        }
    }

    private int b(BigDecimal bigDecimal, int i10, int i11) {
        BigDecimal valueOf = BigDecimal.valueOf(i10);
        return bigDecimal.multiply(BigDecimal.valueOf(i11).subtract(valueOf).add(BigDecimal.ONE)).setScale(0, RoundingMode.FLOOR).add(valueOf).intValueExact();
    }

    private boolean c() {
        if (this.f39326d != null) {
            return true;
        }
        return false;
    }

    private static BigDecimal h(Number number) {
        return BigDecimal.valueOf(number.longValue());
    }

    @Override // mt.h
    public h a(kt.p pVar) {
        if (this.f39327e == pVar) {
            return this;
        }
        return new j(pVar, this.f39328i, this.f39329o, c());
    }

    @Override // mt.h
    public int d(kt.o oVar, Appendable appendable, kt.d dVar, Set set, boolean z10) {
        kt.d dVar2;
        char charValue;
        int i10;
        Set set2;
        int i11;
        int i12;
        BigDecimal h10 = h((Number) oVar.v(this.f39327e));
        BigDecimal h11 = h((Number) oVar.k(this.f39327e));
        BigDecimal h12 = h((Number) oVar.p(this.f39327e));
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
            charValue = this.f39331q;
            dVar2 = dVar;
        } else {
            dVar2 = dVar;
            charValue = ((Character) dVar2.a(lt.a.f37638m, '0')).charValue();
        }
        char c10 = charValue;
        if (appendable instanceof CharSequence) {
            i10 = ((CharSequence) appendable).length();
        } else {
            i10 = -1;
        }
        int i13 = 0;
        if (bigDecimal2.scale() == 0) {
            if (this.f39328i > 0) {
                if (c()) {
                    this.f39326d.d(oVar, appendable, dVar2, set, z10);
                    i11 = 1;
                } else {
                    i11 = 0;
                }
                while (true) {
                    i12 = this.f39328i;
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
                this.f39326d.d(oVar, appendable, dVar, set2, z10);
                i13 = 1;
            } else {
                set2 = set;
            }
            String plainString = bigDecimal2.setScale(Math.min(Math.max(bigDecimal2.scale(), this.f39328i), this.f39329o), roundingMode).toPlainString();
            int i14 = c10 - '0';
            int length = plainString.length();
            for (int i15 = 2; i15 < length; i15++) {
                appendable.append((char) (plainString.charAt(i15) + i14));
                i13++;
            }
        }
        if (i10 != -1 && i13 > 1 && set2 != null) {
            set2.add(new g(this.f39327e, i10 + 1, i10 + i13));
        }
        return i13;
    }

    @Override // mt.h
    public h e(c cVar, kt.d dVar, int i10) {
        return new j(this.f39326d, this.f39327e, this.f39328i, this.f39329o, this.f39330p, ((Character) dVar.a(lt.a.f37638m, '0')).charValue(), (lt.g) dVar.a(lt.a.f37631f, lt.g.SMART));
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof j) {
            j jVar = (j) obj;
            if (this.f39327e.equals(jVar.f39327e) && this.f39328i == jVar.f39328i && this.f39329o == jVar.f39329o && c() == jVar.c()) {
                return true;
            }
        }
        return false;
    }

    /* JADX WARN: Removed duplicated region for block: B:48:0x0118  */
    /* JADX WARN: Removed duplicated region for block: B:49:0x0126  */
    @Override // mt.h
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void f(java.lang.CharSequence r20, mt.s r21, kt.d r22, mt.t r23, boolean r24) {
        /*
            Method dump skipped, instructions count: 312
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: mt.j.f(java.lang.CharSequence, mt.s, kt.d, mt.t, boolean):void");
    }

    @Override // mt.h
    public boolean g() {
        return true;
    }

    @Override // mt.h
    public kt.p getElement() {
        return this.f39327e;
    }

    public int hashCode() {
        return (this.f39327e.hashCode() * 7) + ((this.f39328i + (this.f39329o * 10)) * 31);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public kt.q i(kt.q qVar, kt.q qVar2) {
        k kVar = k.FRACTION;
        if (!qVar2.s(kVar)) {
            return qVar;
        }
        int b10 = b((BigDecimal) qVar2.v(kVar), ((Integer) qVar.k(this.f39327e)).intValue(), ((Integer) qVar.p(this.f39327e)).intValue());
        qVar2.E(kVar, null);
        qVar2.C(this.f39327e, b10);
        return qVar.C(this.f39327e, b10);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(j.class.getName());
        sb2.append("[element=");
        sb2.append(this.f39327e.name());
        sb2.append(", min-digits=");
        sb2.append(this.f39328i);
        sb2.append(", max-digits=");
        sb2.append(this.f39329o);
        sb2.append(']');
        return sb2.toString();
    }

    private j(h hVar, kt.p pVar, int i10, int i11, boolean z10, char c10, lt.g gVar) {
        this.f39326d = hVar;
        this.f39327e = pVar;
        this.f39328i = i10;
        this.f39329o = i11;
        this.f39330p = z10;
        this.f39331q = c10;
        this.f39332r = gVar;
    }
}
