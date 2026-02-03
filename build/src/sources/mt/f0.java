package mt;

import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f0 implements h {

    /* renamed from: d  reason: collision with root package name */
    private final kt.p f39301d;

    /* renamed from: e  reason: collision with root package name */
    private final int f39302e;

    /* renamed from: i  reason: collision with root package name */
    private final char f39303i;

    /* renamed from: o  reason: collision with root package name */
    private final lt.g f39304o;

    /* renamed from: p  reason: collision with root package name */
    private final int f39305p;

    /* renamed from: q  reason: collision with root package name */
    private final int f39306q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f0(kt.p pVar) {
        if (pVar.name().startsWith("YEAR")) {
            this.f39301d = pVar;
            this.f39302e = 0;
            this.f39303i = '0';
            this.f39304o = lt.g.SMART;
            this.f39305p = 0;
            this.f39306q = 100;
            return;
        }
        throw new IllegalArgumentException("Year element required: " + pVar);
    }

    private int b(boolean z10, kt.d dVar) {
        int intValue;
        if (z10) {
            intValue = this.f39306q;
        } else {
            intValue = ((Integer) dVar.a(lt.a.f37642q, Integer.valueOf(this.f39306q))).intValue();
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

    @Override // mt.h
    public h a(kt.p pVar) {
        if (this.f39301d == pVar) {
            return this;
        }
        return new f0(pVar);
    }

    @Override // mt.h
    public int d(kt.o oVar, Appendable appendable, kt.d dVar, Set set, boolean z10) {
        char charValue;
        int i10;
        int t10 = oVar.t(this.f39301d);
        if (t10 < 0) {
            if (t10 == Integer.MIN_VALUE) {
                throw new IllegalArgumentException("Format context has no year: " + oVar);
            }
            throw new IllegalArgumentException("Negative year cannot be printed as two-digit-year: " + t10);
        }
        if (b(z10, dVar) != 100) {
            t10 = ht.c.c(t10, 100);
        }
        String num = Integer.toString(t10);
        if (z10) {
            charValue = this.f39303i;
        } else {
            charValue = ((Character) dVar.a(lt.a.f37638m, '0')).charValue();
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
        if (t10 < 10) {
            appendable.append(charValue);
            i11 = 1;
        }
        appendable.append(num);
        int length = i11 + num.length();
        if (i10 != -1 && length > 0 && set != null) {
            set.add(new g(this.f39301d, i10, i10 + length));
        }
        return length;
    }

    @Override // mt.h
    public h e(c cVar, kt.d dVar, int i10) {
        return new f0(this.f39301d, i10, ((Character) dVar.a(lt.a.f37638m, '0')).charValue(), (lt.g) dVar.a(lt.a.f37631f, lt.g.SMART), ((Integer) dVar.a(lt.a.f37644s, 0)).intValue(), ((Integer) dVar.a(lt.a.f37642q, Integer.valueOf(cVar.q().c()))).intValue());
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f0) {
            return this.f39301d.equals(((f0) obj).f39301d);
        }
        return false;
    }

    /* JADX WARN: Removed duplicated region for block: B:41:0x00b7  */
    /* JADX WARN: Removed duplicated region for block: B:43:0x00d2  */
    @Override // mt.h
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void f(java.lang.CharSequence r11, mt.s r12, kt.d r13, mt.t r14, boolean r15) {
        /*
            Method dump skipped, instructions count: 229
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: mt.f0.f(java.lang.CharSequence, mt.s, kt.d, mt.t, boolean):void");
    }

    @Override // mt.h
    public boolean g() {
        return true;
    }

    @Override // mt.h
    public kt.p getElement() {
        return this.f39301d;
    }

    public int hashCode() {
        return this.f39301d.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(f0.class.getName());
        sb2.append("[element=");
        sb2.append(this.f39301d.name());
        sb2.append(']');
        return sb2.toString();
    }

    private f0(kt.p pVar, int i10, char c10, lt.g gVar, int i11, int i12) {
        this.f39301d = pVar;
        this.f39302e = i10;
        this.f39303i = c10;
        this.f39304o = gVar;
        this.f39305p = i11;
        this.f39306q = i12;
    }
}
