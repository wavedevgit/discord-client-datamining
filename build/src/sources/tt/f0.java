package tt;

import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f0 implements h {

    /* renamed from: d  reason: collision with root package name */
    private final rt.p f51016d;

    /* renamed from: e  reason: collision with root package name */
    private final int f51017e;

    /* renamed from: i  reason: collision with root package name */
    private final char f51018i;

    /* renamed from: o  reason: collision with root package name */
    private final st.g f51019o;

    /* renamed from: p  reason: collision with root package name */
    private final int f51020p;

    /* renamed from: q  reason: collision with root package name */
    private final int f51021q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f0(rt.p pVar) {
        if (pVar.name().startsWith("YEAR")) {
            this.f51016d = pVar;
            this.f51017e = 0;
            this.f51018i = '0';
            this.f51019o = st.g.SMART;
            this.f51020p = 0;
            this.f51021q = 100;
            return;
        }
        throw new IllegalArgumentException("Year element required: " + pVar);
    }

    private int b(boolean z10, rt.d dVar) {
        int intValue;
        if (z10) {
            intValue = this.f51021q;
        } else {
            intValue = ((Integer) dVar.b(st.a.f50174q, Integer.valueOf(this.f51021q))).intValue();
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
    @Override // tt.h
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void a(java.lang.CharSequence r11, tt.s r12, rt.d r13, tt.t r14, boolean r15) {
        /*
            Method dump skipped, instructions count: 229
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: tt.f0.a(java.lang.CharSequence, tt.s, rt.d, tt.t, boolean):void");
    }

    @Override // tt.h
    public h d(rt.p pVar) {
        if (this.f51016d == pVar) {
            return this;
        }
        return new f0(pVar);
    }

    @Override // tt.h
    public h e(c cVar, rt.d dVar, int i10) {
        return new f0(this.f51016d, i10, ((Character) dVar.b(st.a.f50170m, '0')).charValue(), (st.g) dVar.b(st.a.f50163f, st.g.SMART), ((Integer) dVar.b(st.a.f50176s, 0)).intValue(), ((Integer) dVar.b(st.a.f50174q, Integer.valueOf(cVar.q().g()))).intValue());
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f0) {
            return this.f51016d.equals(((f0) obj).f51016d);
        }
        return false;
    }

    @Override // tt.h
    public int f(rt.o oVar, Appendable appendable, rt.d dVar, Set set, boolean z10) {
        char charValue;
        int i10;
        int q10 = oVar.q(this.f51016d);
        if (q10 < 0) {
            if (q10 == Integer.MIN_VALUE) {
                throw new IllegalArgumentException("Format context has no year: " + oVar);
            }
            throw new IllegalArgumentException("Negative year cannot be printed as two-digit-year: " + q10);
        }
        if (b(z10, dVar) != 100) {
            q10 = pt.c.c(q10, 100);
        }
        String num = Integer.toString(q10);
        if (z10) {
            charValue = this.f51018i;
        } else {
            charValue = ((Character) dVar.b(st.a.f50170m, '0')).charValue();
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
            set.add(new g(this.f51016d, i10, i10 + length));
        }
        return length;
    }

    @Override // tt.h
    public boolean g() {
        return true;
    }

    @Override // tt.h
    public rt.p getElement() {
        return this.f51016d;
    }

    public int hashCode() {
        return this.f51016d.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(f0.class.getName());
        sb2.append("[element=");
        sb2.append(this.f51016d.name());
        sb2.append(']');
        return sb2.toString();
    }

    private f0(rt.p pVar, int i10, char c10, st.g gVar, int i11, int i12) {
        this.f51016d = pVar;
        this.f51017e = i10;
        this.f51018i = c10;
        this.f51019o = gVar;
        this.f51020p = i11;
        this.f51021q = i12;
    }
}
