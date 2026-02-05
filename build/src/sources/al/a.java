package al;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a {

    /* renamed from: a  reason: collision with root package name */
    private final jk.b f708a;

    /* renamed from: b  reason: collision with root package name */
    private j f709b;

    /* renamed from: c  reason: collision with root package name */
    private g f710c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f711d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(jk.b bVar) {
        int i10 = bVar.i();
        if (i10 >= 21 && (i10 & 3) == 1) {
            this.f708a = bVar;
            return;
        }
        throw fk.g.a();
    }

    private int a(int i10, int i11, int i12) {
        boolean e10;
        if (this.f711d) {
            e10 = this.f708a.e(i11, i10);
        } else {
            e10 = this.f708a.e(i10, i11);
        }
        if (e10) {
            return (i12 << 1) | 1;
        }
        return i12 << 1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b() {
        int i10 = 0;
        while (i10 < this.f708a.l()) {
            int i11 = i10 + 1;
            for (int i12 = i11; i12 < this.f708a.i(); i12++) {
                if (this.f708a.e(i10, i12) != this.f708a.e(i12, i10)) {
                    this.f708a.d(i12, i10);
                    this.f708a.d(i10, i12);
                }
            }
            i10 = i11;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public byte[] c() {
        int i10;
        g d10 = d();
        j e10 = e();
        c cVar = c.values()[d10.c()];
        int i11 = this.f708a.i();
        cVar.d(this.f708a, i11);
        jk.b a10 = e10.a();
        byte[] bArr = new byte[e10.h()];
        int i12 = i11 - 1;
        boolean z10 = true;
        int i13 = i12;
        int i14 = 0;
        int i15 = 0;
        int i16 = 0;
        while (i13 > 0) {
            if (i13 == 6) {
                i13--;
            }
            for (int i17 = 0; i17 < i11; i17++) {
                if (z10) {
                    i10 = i12 - i17;
                } else {
                    i10 = i17;
                }
                for (int i18 = 0; i18 < 2; i18++) {
                    int i19 = i13 - i18;
                    if (!a10.e(i19, i10)) {
                        i15++;
                        i16 <<= 1;
                        if (this.f708a.e(i19, i10)) {
                            i16 |= 1;
                        }
                        if (i15 == 8) {
                            bArr[i14] = (byte) i16;
                            i14++;
                            i15 = 0;
                            i16 = 0;
                        }
                    }
                }
            }
            z10 = !z10;
            i13 -= 2;
        }
        if (i14 == e10.h()) {
            return bArr;
        }
        throw fk.g.a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g d() {
        g gVar = this.f710c;
        if (gVar != null) {
            return gVar;
        }
        int i10 = 0;
        int i11 = 0;
        for (int i12 = 0; i12 < 6; i12++) {
            i11 = a(i12, 8, i11);
        }
        int a10 = a(8, 7, a(8, 8, a(7, 8, i11)));
        for (int i13 = 5; i13 >= 0; i13--) {
            a10 = a(8, i13, a10);
        }
        int i14 = this.f708a.i();
        int i15 = i14 - 7;
        for (int i16 = i14 - 1; i16 >= i15; i16--) {
            i10 = a(8, i16, i10);
        }
        for (int i17 = i14 - 8; i17 < i14; i17++) {
            i10 = a(i17, 8, i10);
        }
        g a11 = g.a(a10, i10);
        this.f710c = a11;
        if (a11 != null) {
            return a11;
        }
        throw fk.g.a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j e() {
        j jVar = this.f709b;
        if (jVar != null) {
            return jVar;
        }
        int i10 = this.f708a.i();
        int i11 = (i10 - 17) / 4;
        if (i11 <= 6) {
            return j.i(i11);
        }
        int i12 = i10 - 11;
        int i13 = 0;
        int i14 = 0;
        for (int i15 = 5; i15 >= 0; i15--) {
            for (int i16 = i10 - 9; i16 >= i12; i16--) {
                i14 = a(i16, i15, i14);
            }
        }
        j c10 = j.c(i14);
        if (c10 != null && c10.e() == i10) {
            this.f709b = c10;
            return c10;
        }
        for (int i17 = 5; i17 >= 0; i17--) {
            for (int i18 = i10 - 9; i18 >= i12; i18--) {
                i13 = a(i17, i18, i13);
            }
        }
        j c11 = j.c(i13);
        if (c11 != null && c11.e() == i10) {
            this.f709b = c11;
            return c11;
        }
        throw fk.g.a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f() {
        if (this.f710c == null) {
            return;
        }
        c.values()[this.f710c.c()].d(this.f708a, this.f708a.i());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(boolean z10) {
        this.f709b = null;
        this.f710c = null;
        this.f711d = z10;
    }
}
