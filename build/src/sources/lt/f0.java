package lt;

import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f0 implements h {

    /* renamed from: d  reason: collision with root package name */
    private final jt.p f37601d;

    /* renamed from: e  reason: collision with root package name */
    private final int f37602e;

    /* renamed from: i  reason: collision with root package name */
    private final char f37603i;

    /* renamed from: o  reason: collision with root package name */
    private final kt.g f37604o;

    /* renamed from: p  reason: collision with root package name */
    private final int f37605p;

    /* renamed from: q  reason: collision with root package name */
    private final int f37606q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f0(jt.p pVar) {
        if (pVar.name().startsWith("YEAR")) {
            this.f37601d = pVar;
            this.f37602e = 0;
            this.f37603i = '0';
            this.f37604o = kt.g.SMART;
            this.f37605p = 0;
            this.f37606q = 100;
            return;
        }
        throw new IllegalArgumentException("Year element required: " + pVar);
    }

    private int b(boolean z10, jt.d dVar) {
        int intValue;
        if (z10) {
            intValue = this.f37606q;
        } else {
            intValue = ((Integer) dVar.b(kt.a.f36560q, Integer.valueOf(this.f37606q))).intValue();
        }
        if (intValue >= 100) {
            return intValue;
        }
        throw new IllegalArgumentException("Pivot year must not be smaller than 100: " + intValue);
    }

    private static int c(int i10, int i11) {
        int i12;
        if (i10 >= i11 % 100) {
            i12 = (i11 / 100) - 1;
        } else {
            i12 = i11 / 100;
        }
        return (i12 * 100) + i10;
    }

    @Override // lt.h
    public h a(c cVar, jt.d dVar, int i10) {
        return new f0(this.f37601d, i10, ((Character) dVar.b(kt.a.f36556m, '0')).charValue(), (kt.g) dVar.b(kt.a.f36549f, kt.g.SMART), ((Integer) dVar.b(kt.a.f36562s, 0)).intValue(), ((Integer) dVar.b(kt.a.f36560q, Integer.valueOf(cVar.q().h()))).intValue());
    }

    @Override // lt.h
    public int d(jt.o oVar, Appendable appendable, jt.d dVar, Set set, boolean z10) {
        char charValue;
        int i10;
        int q10 = oVar.q(this.f37601d);
        if (q10 < 0) {
            if (q10 == Integer.MIN_VALUE) {
                throw new IllegalArgumentException("Format context has no year: " + oVar);
            }
            throw new IllegalArgumentException("Negative year cannot be printed as two-digit-year: " + q10);
        }
        if (b(z10, dVar) != 100) {
            q10 = gt.c.c(q10, 100);
        }
        String num = Integer.toString(q10);
        if (z10) {
            charValue = this.f37603i;
        } else {
            charValue = ((Character) dVar.b(kt.a.f36556m, '0')).charValue();
        }
        int i11 = 0;
        if (charValue != '0') {
            int i12 = charValue - '0';
            char[] charArray = num.toCharArray();
            for (int i13 = 0; i13 < charArray.length; i13++) {
                charArray[i13] = (char) (charArray[i13] + i12);
            }
            num = new String(charArray);
        }
        if (appendable instanceof CharSequence) {
            i10 = ((CharSequence) appendable).length();
        } else {
            i10 = -1;
        }
        if (q10 < 10) {
            appendable.append(charValue);
            i11 = 1;
        }
        appendable.append(num);
        int length = i11 + num.length();
        if (i10 != -1 && length > 0 && set != null) {
            set.add(new g(this.f37601d, i10, i10 + length));
        }
        return length;
    }

    /* JADX WARN: Removed duplicated region for block: B:41:0x00b7  */
    /* JADX WARN: Removed duplicated region for block: B:43:0x00d2  */
    @Override // lt.h
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void e(java.lang.CharSequence r11, lt.s r12, jt.d r13, lt.t r14, boolean r15) {
        /*
            Method dump skipped, instructions count: 229
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: lt.f0.e(java.lang.CharSequence, lt.s, jt.d, lt.t, boolean):void");
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f0) {
            return this.f37601d.equals(((f0) obj).f37601d);
        }
        return false;
    }

    @Override // lt.h
    public boolean f() {
        return true;
    }

    @Override // lt.h
    public h g(jt.p pVar) {
        if (this.f37601d == pVar) {
            return this;
        }
        return new f0(pVar);
    }

    @Override // lt.h
    public jt.p getElement() {
        return this.f37601d;
    }

    public int hashCode() {
        return this.f37601d.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(f0.class.getName());
        sb2.append("[element=");
        sb2.append(this.f37601d.name());
        sb2.append(']');
        return sb2.toString();
    }

    private f0(jt.p pVar, int i10, char c10, kt.g gVar, int i11, int i12) {
        this.f37601d = pVar;
        this.f37602e = i10;
        this.f37603i = c10;
        this.f37604o = gVar;
        this.f37605p = i11;
        this.f37606q = i12;
    }
}
