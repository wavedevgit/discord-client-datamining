package ut;

import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f0 implements h {

    /* renamed from: d  reason: collision with root package name */
    private final st.p f51921d;

    /* renamed from: e  reason: collision with root package name */
    private final int f51922e;

    /* renamed from: i  reason: collision with root package name */
    private final char f51923i;

    /* renamed from: o  reason: collision with root package name */
    private final tt.g f51924o;

    /* renamed from: p  reason: collision with root package name */
    private final int f51925p;

    /* renamed from: q  reason: collision with root package name */
    private final int f51926q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f0(st.p pVar) {
        if (pVar.name().startsWith("YEAR")) {
            this.f51921d = pVar;
            this.f51922e = 0;
            this.f51923i = '0';
            this.f51924o = tt.g.SMART;
            this.f51925p = 0;
            this.f51926q = 100;
            return;
        }
        throw new IllegalArgumentException("Year element required: " + pVar);
    }

    private int b(boolean z10, st.d dVar) {
        int intValue;
        if (z10) {
            intValue = this.f51926q;
        } else {
            intValue = ((Integer) dVar.b(tt.a.f51018q, Integer.valueOf(this.f51926q))).intValue();
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

    /* JADX WARN: Removed duplicated region for block: B:41:0x00b7  */
    /* JADX WARN: Removed duplicated region for block: B:43:0x00d2  */
    @Override // ut.h
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void a(java.lang.CharSequence r11, ut.s r12, st.d r13, ut.t r14, boolean r15) {
        /*
            Method dump skipped, instructions count: 229
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ut.f0.a(java.lang.CharSequence, ut.s, st.d, ut.t, boolean):void");
    }

    @Override // ut.h
    public h d(c cVar, st.d dVar, int i10) {
        return new f0(this.f51921d, i10, ((Character) dVar.b(tt.a.f51014m, '0')).charValue(), (tt.g) dVar.b(tt.a.f51007f, tt.g.SMART), ((Integer) dVar.b(tt.a.f51020s, 0)).intValue(), ((Integer) dVar.b(tt.a.f51018q, Integer.valueOf(cVar.q().c()))).intValue());
    }

    @Override // ut.h
    public h e(st.p pVar) {
        if (this.f51921d == pVar) {
            return this;
        }
        return new f0(pVar);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f0) {
            return this.f51921d.equals(((f0) obj).f51921d);
        }
        return false;
    }

    @Override // ut.h
    public int f(st.o oVar, Appendable appendable, st.d dVar, Set set, boolean z10) {
        char charValue;
        int i10;
        int v10 = oVar.v(this.f51921d);
        if (v10 < 0) {
            if (v10 == Integer.MIN_VALUE) {
                throw new IllegalArgumentException("Format context has no year: " + oVar);
            }
            throw new IllegalArgumentException("Negative year cannot be printed as two-digit-year: " + v10);
        }
        if (b(z10, dVar) != 100) {
            v10 = qt.c.c(v10, 100);
        }
        String num = Integer.toString(v10);
        if (z10) {
            charValue = this.f51923i;
        } else {
            charValue = ((Character) dVar.b(tt.a.f51014m, '0')).charValue();
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
        if (v10 < 10) {
            appendable.append(charValue);
            i11 = 1;
        }
        appendable.append(num);
        int length = i11 + num.length();
        if (i10 != -1 && length > 0 && set != null) {
            set.add(new g(this.f51921d, i10, i10 + length));
        }
        return length;
    }

    @Override // ut.h
    public boolean g() {
        return true;
    }

    @Override // ut.h
    public st.p getElement() {
        return this.f51921d;
    }

    public int hashCode() {
        return this.f51921d.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(f0.class.getName());
        sb2.append("[element=");
        sb2.append(this.f51921d.name());
        sb2.append(']');
        return sb2.toString();
    }

    private f0(st.p pVar, int i10, char c10, tt.g gVar, int i11, int i12) {
        this.f51921d = pVar;
        this.f51922e = i10;
        this.f51923i = c10;
        this.f51924o = gVar;
        this.f51925p = i11;
        this.f51926q = i12;
    }
}
