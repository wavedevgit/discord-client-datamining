package rt;

import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f0 implements h {

    /* renamed from: d  reason: collision with root package name */
    private final pt.p f49105d;

    /* renamed from: e  reason: collision with root package name */
    private final int f49106e;

    /* renamed from: i  reason: collision with root package name */
    private final char f49107i;

    /* renamed from: o  reason: collision with root package name */
    private final qt.g f49108o;

    /* renamed from: p  reason: collision with root package name */
    private final int f49109p;

    /* renamed from: q  reason: collision with root package name */
    private final int f49110q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f0(pt.p pVar) {
        if (pVar.name().startsWith("YEAR")) {
            this.f49105d = pVar;
            this.f49106e = 0;
            this.f49107i = '0';
            this.f49108o = qt.g.SMART;
            this.f49109p = 0;
            this.f49110q = 100;
            return;
        }
        throw new IllegalArgumentException("Year element required: " + pVar);
    }

    private int b(boolean z10, pt.d dVar) {
        int intValue;
        if (z10) {
            intValue = this.f49110q;
        } else {
            intValue = ((Integer) dVar.a(qt.a.f48102q, Integer.valueOf(this.f49110q))).intValue();
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

    @Override // rt.h
    public h a(pt.p pVar) {
        if (this.f49105d == pVar) {
            return this;
        }
        return new f0(pVar);
    }

    /* JADX WARN: Removed duplicated region for block: B:41:0x00b7  */
    /* JADX WARN: Removed duplicated region for block: B:43:0x00d2  */
    @Override // rt.h
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void d(java.lang.CharSequence r11, rt.s r12, pt.d r13, rt.t r14, boolean r15) {
        /*
            Method dump skipped, instructions count: 229
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: rt.f0.d(java.lang.CharSequence, rt.s, pt.d, rt.t, boolean):void");
    }

    @Override // rt.h
    public h e(c cVar, pt.d dVar, int i10) {
        return new f0(this.f49105d, i10, ((Character) dVar.a(qt.a.f48098m, '0')).charValue(), (qt.g) dVar.a(qt.a.f48091f, qt.g.SMART), ((Integer) dVar.a(qt.a.f48104s, 0)).intValue(), ((Integer) dVar.a(qt.a.f48102q, Integer.valueOf(cVar.q().j()))).intValue());
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f0) {
            return this.f49105d.equals(((f0) obj).f49105d);
        }
        return false;
    }

    @Override // rt.h
    public int f(pt.o oVar, Appendable appendable, pt.d dVar, Set set, boolean z10) {
        char charValue;
        int i10;
        int r10 = oVar.r(this.f49105d);
        if (r10 < 0) {
            if (r10 == Integer.MIN_VALUE) {
                throw new IllegalArgumentException("Format context has no year: " + oVar);
            }
            throw new IllegalArgumentException("Negative year cannot be printed as two-digit-year: " + r10);
        }
        if (b(z10, dVar) != 100) {
            r10 = nt.c.c(r10, 100);
        }
        String num = Integer.toString(r10);
        if (z10) {
            charValue = this.f49107i;
        } else {
            charValue = ((Character) dVar.a(qt.a.f48098m, '0')).charValue();
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
        if (r10 < 10) {
            appendable.append(charValue);
            i11 = 1;
        }
        appendable.append(num);
        int length = i11 + num.length();
        if (i10 != -1 && length > 0 && set != null) {
            set.add(new g(this.f49105d, i10, i10 + length));
        }
        return length;
    }

    @Override // rt.h
    public boolean g() {
        return true;
    }

    @Override // rt.h
    public pt.p getElement() {
        return this.f49105d;
    }

    public int hashCode() {
        return this.f49105d.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(f0.class.getName());
        sb2.append("[element=");
        sb2.append(this.f49105d.name());
        sb2.append(']');
        return sb2.toString();
    }

    private f0(pt.p pVar, int i10, char c10, qt.g gVar, int i11, int i12) {
        this.f49105d = pVar;
        this.f49106e = i10;
        this.f49107i = c10;
        this.f49108o = gVar;
        this.f49109p = i11;
        this.f49110q = i12;
    }
}
