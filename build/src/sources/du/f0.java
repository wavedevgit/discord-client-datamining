package du;

import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f0 implements h {

    /* renamed from: d  reason: collision with root package name */
    private final bu.p f22024d;

    /* renamed from: e  reason: collision with root package name */
    private final int f22025e;

    /* renamed from: i  reason: collision with root package name */
    private final char f22026i;

    /* renamed from: o  reason: collision with root package name */
    private final cu.g f22027o;

    /* renamed from: p  reason: collision with root package name */
    private final int f22028p;

    /* renamed from: q  reason: collision with root package name */
    private final int f22029q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f0(bu.p pVar) {
        if (pVar.name().startsWith("YEAR")) {
            this.f22024d = pVar;
            this.f22025e = 0;
            this.f22026i = '0';
            this.f22027o = cu.g.SMART;
            this.f22028p = 0;
            this.f22029q = 100;
            return;
        }
        throw new IllegalArgumentException("Year element required: " + pVar);
    }

    private int b(boolean z10, bu.d dVar) {
        int intValue;
        if (z10) {
            intValue = this.f22029q;
        } else {
            intValue = ((Integer) dVar.b(cu.a.f21125q, Integer.valueOf(this.f22029q))).intValue();
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

    @Override // du.h
    public h a(c cVar, bu.d dVar, int i10) {
        return new f0(this.f22024d, i10, ((Character) dVar.b(cu.a.f21121m, '0')).charValue(), (cu.g) dVar.b(cu.a.f21114f, cu.g.SMART), ((Integer) dVar.b(cu.a.f21127s, 0)).intValue(), ((Integer) dVar.b(cu.a.f21125q, Integer.valueOf(cVar.q().c()))).intValue());
    }

    /* JADX WARN: Removed duplicated region for block: B:41:0x00b7  */
    /* JADX WARN: Removed duplicated region for block: B:43:0x00d2  */
    @Override // du.h
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void d(java.lang.CharSequence r11, du.s r12, bu.d r13, du.t r14, boolean r15) {
        /*
            Method dump skipped, instructions count: 229
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: du.f0.d(java.lang.CharSequence, du.s, bu.d, du.t, boolean):void");
    }

    @Override // du.h
    public h e(bu.p pVar) {
        if (this.f22024d == pVar) {
            return this;
        }
        return new f0(pVar);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f0) {
            return this.f22024d.equals(((f0) obj).f22024d);
        }
        return false;
    }

    @Override // du.h
    public boolean f() {
        return true;
    }

    @Override // du.h
    public int g(bu.o oVar, Appendable appendable, bu.d dVar, Set set, boolean z10) {
        char charValue;
        int i10;
        int m10 = oVar.m(this.f22024d);
        if (m10 < 0) {
            if (m10 == Integer.MIN_VALUE) {
                throw new IllegalArgumentException("Format context has no year: " + oVar);
            }
            throw new IllegalArgumentException("Negative year cannot be printed as two-digit-year: " + m10);
        }
        if (b(z10, dVar) != 100) {
            m10 = zt.c.c(m10, 100);
        }
        String num = Integer.toString(m10);
        if (z10) {
            charValue = this.f22026i;
        } else {
            charValue = ((Character) dVar.b(cu.a.f21121m, '0')).charValue();
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
        if (m10 < 10) {
            appendable.append(charValue);
            i11 = 1;
        }
        appendable.append(num);
        int length = i11 + num.length();
        if (i10 != -1 && length > 0 && set != null) {
            set.add(new g(this.f22024d, i10, i10 + length));
        }
        return length;
    }

    @Override // du.h
    public bu.p getElement() {
        return this.f22024d;
    }

    public int hashCode() {
        return this.f22024d.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(f0.class.getName());
        sb2.append("[element=");
        sb2.append(this.f22024d.name());
        sb2.append(']');
        return sb2.toString();
    }

    private f0(bu.p pVar, int i10, char c10, cu.g gVar, int i11, int i12) {
        this.f22024d = pVar;
        this.f22025e = i10;
        this.f22026i = c10;
        this.f22027o = gVar;
        this.f22028p = i11;
        this.f22029q = i12;
    }
}
