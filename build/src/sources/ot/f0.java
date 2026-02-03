package ot;

import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f0 implements h {

    /* renamed from: d  reason: collision with root package name */
    private final mt.p f44656d;

    /* renamed from: e  reason: collision with root package name */
    private final int f44657e;

    /* renamed from: i  reason: collision with root package name */
    private final char f44658i;

    /* renamed from: o  reason: collision with root package name */
    private final nt.g f44659o;

    /* renamed from: p  reason: collision with root package name */
    private final int f44660p;

    /* renamed from: q  reason: collision with root package name */
    private final int f44661q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f0(mt.p pVar) {
        if (pVar.name().startsWith("YEAR")) {
            this.f44656d = pVar;
            this.f44657e = 0;
            this.f44658i = '0';
            this.f44659o = nt.g.SMART;
            this.f44660p = 0;
            this.f44661q = 100;
            return;
        }
        throw new IllegalArgumentException("Year element required: " + pVar);
    }

    private int b(boolean z10, mt.d dVar) {
        int intValue;
        if (z10) {
            intValue = this.f44661q;
        } else {
            intValue = ((Integer) dVar.b(nt.a.f42042q, Integer.valueOf(this.f44661q))).intValue();
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

    @Override // ot.h
    public int a(mt.o oVar, Appendable appendable, mt.d dVar, Set set, boolean z10) {
        char charValue;
        int i10;
        int j10 = oVar.j(this.f44656d);
        if (j10 < 0) {
            if (j10 == Integer.MIN_VALUE) {
                throw new IllegalArgumentException("Format context has no year: " + oVar);
            }
            throw new IllegalArgumentException("Negative year cannot be printed as two-digit-year: " + j10);
        }
        if (b(z10, dVar) != 100) {
            j10 = kt.c.c(j10, 100);
        }
        String num = Integer.toString(j10);
        if (z10) {
            charValue = this.f44658i;
        } else {
            charValue = ((Character) dVar.b(nt.a.f42038m, '0')).charValue();
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
        if (j10 < 10) {
            appendable.append(charValue);
            i11 = 1;
        }
        appendable.append(num);
        int length = i11 + num.length();
        if (i10 != -1 && length > 0 && set != null) {
            set.add(new g(this.f44656d, i10, i10 + length));
        }
        return length;
    }

    @Override // ot.h
    public h d(c cVar, mt.d dVar, int i10) {
        return new f0(this.f44656d, i10, ((Character) dVar.b(nt.a.f42038m, '0')).charValue(), (nt.g) dVar.b(nt.a.f42031f, nt.g.SMART), ((Integer) dVar.b(nt.a.f42044s, 0)).intValue(), ((Integer) dVar.b(nt.a.f42042q, Integer.valueOf(cVar.q().c()))).intValue());
    }

    @Override // ot.h
    public h e(mt.p pVar) {
        if (this.f44656d == pVar) {
            return this;
        }
        return new f0(pVar);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f0) {
            return this.f44656d.equals(((f0) obj).f44656d);
        }
        return false;
    }

    @Override // ot.h
    public boolean f() {
        return true;
    }

    /* JADX WARN: Removed duplicated region for block: B:41:0x00b7  */
    /* JADX WARN: Removed duplicated region for block: B:43:0x00d2  */
    @Override // ot.h
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void g(java.lang.CharSequence r11, ot.s r12, mt.d r13, ot.t r14, boolean r15) {
        /*
            Method dump skipped, instructions count: 229
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ot.f0.g(java.lang.CharSequence, ot.s, mt.d, ot.t, boolean):void");
    }

    @Override // ot.h
    public mt.p getElement() {
        return this.f44656d;
    }

    public int hashCode() {
        return this.f44656d.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(f0.class.getName());
        sb2.append("[element=");
        sb2.append(this.f44656d.name());
        sb2.append(']');
        return sb2.toString();
    }

    private f0(mt.p pVar, int i10, char c10, nt.g gVar, int i11, int i12) {
        this.f44656d = pVar;
        this.f44657e = i10;
        this.f44658i = c10;
        this.f44659o = gVar;
        this.f44660p = i11;
        this.f44661q = i12;
    }
}
