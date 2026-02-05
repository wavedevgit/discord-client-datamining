package h1;

import h1.d;
import h1.h;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b implements d.a {

    /* renamed from: e  reason: collision with root package name */
    public a f25545e;

    /* renamed from: a  reason: collision with root package name */
    h f25541a = null;

    /* renamed from: b  reason: collision with root package name */
    float f25542b = 0.0f;

    /* renamed from: c  reason: collision with root package name */
    boolean f25543c = false;

    /* renamed from: d  reason: collision with root package name */
    ArrayList f25544d = new ArrayList();

    /* renamed from: f  reason: collision with root package name */
    boolean f25546f = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a(h hVar, float f10);

        void b(h hVar, float f10, boolean z10);

        h c(int i10);

        void clear();

        void d();

        float e(b bVar, boolean z10);

        float f(h hVar, boolean z10);

        boolean g(h hVar);

        int h();

        float i(h hVar);

        float j(int i10);

        void k(float f10);
    }

    public b() {
    }

    private boolean u(h hVar, d dVar) {
        if (hVar.f25601x <= 1) {
            return true;
        }
        return false;
    }

    private h w(boolean[] zArr, h hVar) {
        h.a aVar;
        int h10 = this.f25545e.h();
        h hVar2 = null;
        float f10 = 0.0f;
        for (int i10 = 0; i10 < h10; i10++) {
            float j10 = this.f25545e.j(i10);
            if (j10 < 0.0f) {
                h c10 = this.f25545e.c(i10);
                if ((zArr == null || !zArr[c10.f25591i]) && c10 != hVar && (((aVar = c10.f25598u) == h.a.SLACK || aVar == h.a.ERROR) && j10 < f10)) {
                    f10 = j10;
                    hVar2 = c10;
                }
            }
        }
        return hVar2;
    }

    public void A(d dVar, h hVar, boolean z10) {
        if (hVar != null && hVar.f25595r) {
            this.f25542b += hVar.f25594q * this.f25545e.i(hVar);
            this.f25545e.f(hVar, z10);
            if (z10) {
                hVar.f(this);
            }
            if (d.f25553u && this.f25545e.h() == 0) {
                this.f25546f = true;
                dVar.f25560b = true;
            }
        }
    }

    public void B(d dVar, b bVar, boolean z10) {
        this.f25542b += bVar.f25542b * this.f25545e.e(bVar, z10);
        if (z10) {
            bVar.f25541a.f(this);
        }
        if (d.f25553u && this.f25541a != null && this.f25545e.h() == 0) {
            this.f25546f = true;
            dVar.f25560b = true;
        }
    }

    public void C(d dVar, h hVar, boolean z10) {
        if (hVar != null && hVar.f25602y) {
            float i10 = this.f25545e.i(hVar);
            this.f25542b += hVar.A * i10;
            this.f25545e.f(hVar, z10);
            if (z10) {
                hVar.f(this);
            }
            this.f25545e.b(dVar.f25573o.f25550d[hVar.f25603z], i10, z10);
            if (d.f25553u && this.f25545e.h() == 0) {
                this.f25546f = true;
                dVar.f25560b = true;
            }
        }
    }

    public void D(d dVar) {
        if (dVar.f25566h.length != 0) {
            boolean z10 = false;
            while (!z10) {
                int h10 = this.f25545e.h();
                for (int i10 = 0; i10 < h10; i10++) {
                    h c10 = this.f25545e.c(i10);
                    if (c10.f25592o != -1 || c10.f25595r || c10.f25602y) {
                        this.f25544d.add(c10);
                    }
                }
                int size = this.f25544d.size();
                if (size > 0) {
                    for (int i11 = 0; i11 < size; i11++) {
                        h hVar = (h) this.f25544d.get(i11);
                        if (hVar.f25595r) {
                            A(dVar, hVar, true);
                        } else if (hVar.f25602y) {
                            C(dVar, hVar, true);
                        } else {
                            B(dVar, dVar.f25566h[hVar.f25592o], true);
                        }
                    }
                    this.f25544d.clear();
                } else {
                    z10 = true;
                }
            }
            if (d.f25553u && this.f25541a != null && this.f25545e.h() == 0) {
                this.f25546f = true;
                dVar.f25560b = true;
            }
        }
    }

    @Override // h1.d.a
    public void a(h hVar) {
        int i10 = hVar.f25593p;
        float f10 = 1.0f;
        if (i10 != 1) {
            if (i10 == 2) {
                f10 = 1000.0f;
            } else if (i10 == 3) {
                f10 = 1000000.0f;
            } else if (i10 == 4) {
                f10 = 1.0E9f;
            } else if (i10 == 5) {
                f10 = 1.0E12f;
            }
        }
        this.f25545e.a(hVar, f10);
    }

    @Override // h1.d.a
    public void b(d.a aVar) {
        if (aVar instanceof b) {
            b bVar = (b) aVar;
            this.f25541a = null;
            this.f25545e.clear();
            for (int i10 = 0; i10 < bVar.f25545e.h(); i10++) {
                this.f25545e.b(bVar.f25545e.c(i10), bVar.f25545e.j(i10), true);
            }
        }
    }

    @Override // h1.d.a
    public h c(d dVar, boolean[] zArr) {
        return w(zArr, null);
    }

    @Override // h1.d.a
    public void clear() {
        this.f25545e.clear();
        this.f25541a = null;
        this.f25542b = 0.0f;
    }

    public b d(d dVar, int i10) {
        this.f25545e.a(dVar.o(i10, "ep"), 1.0f);
        this.f25545e.a(dVar.o(i10, "em"), -1.0f);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b e(h hVar, int i10) {
        this.f25545e.a(hVar, i10);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean f(d dVar) {
        boolean z10;
        h g10 = g(dVar);
        if (g10 == null) {
            z10 = true;
        } else {
            x(g10);
            z10 = false;
        }
        if (this.f25545e.h() == 0) {
            this.f25546f = true;
        }
        return z10;
    }

    h g(d dVar) {
        boolean u10;
        boolean u11;
        int h10 = this.f25545e.h();
        h hVar = null;
        float f10 = 0.0f;
        float f11 = 0.0f;
        boolean z10 = false;
        boolean z11 = false;
        h hVar2 = null;
        for (int i10 = 0; i10 < h10; i10++) {
            float j10 = this.f25545e.j(i10);
            h c10 = this.f25545e.c(i10);
            if (c10.f25598u == h.a.UNRESTRICTED) {
                if (hVar == null) {
                    u11 = u(c10, dVar);
                } else if (f10 > j10) {
                    u11 = u(c10, dVar);
                } else if (!z10 && u(c10, dVar)) {
                    f10 = j10;
                    hVar = c10;
                    z10 = true;
                }
                z10 = u11;
                f10 = j10;
                hVar = c10;
            } else if (hVar == null && j10 < 0.0f) {
                if (hVar2 == null) {
                    u10 = u(c10, dVar);
                } else if (f11 > j10) {
                    u10 = u(c10, dVar);
                } else if (!z11 && u(c10, dVar)) {
                    f11 = j10;
                    hVar2 = c10;
                    z11 = true;
                }
                z11 = u10;
                f11 = j10;
                hVar2 = c10;
            }
        }
        if (hVar != null) {
            return hVar;
        }
        return hVar2;
    }

    @Override // h1.d.a
    public h getKey() {
        return this.f25541a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b h(h hVar, h hVar2, int i10, float f10, h hVar3, h hVar4, int i11) {
        if (hVar2 == hVar3) {
            this.f25545e.a(hVar, 1.0f);
            this.f25545e.a(hVar4, 1.0f);
            this.f25545e.a(hVar2, -2.0f);
            return this;
        }
        if (f10 == 0.5f) {
            this.f25545e.a(hVar, 1.0f);
            this.f25545e.a(hVar2, -1.0f);
            this.f25545e.a(hVar3, -1.0f);
            this.f25545e.a(hVar4, 1.0f);
            if (i10 > 0 || i11 > 0) {
                this.f25542b = (-i10) + i11;
                return this;
            }
        } else if (f10 <= 0.0f) {
            this.f25545e.a(hVar, -1.0f);
            this.f25545e.a(hVar2, 1.0f);
            this.f25542b = i10;
            return this;
        } else if (f10 >= 1.0f) {
            this.f25545e.a(hVar4, -1.0f);
            this.f25545e.a(hVar3, 1.0f);
            this.f25542b = -i11;
            return this;
        } else {
            float f11 = 1.0f - f10;
            this.f25545e.a(hVar, f11 * 1.0f);
            this.f25545e.a(hVar2, f11 * (-1.0f));
            this.f25545e.a(hVar3, (-1.0f) * f10);
            this.f25545e.a(hVar4, 1.0f * f10);
            if (i10 > 0 || i11 > 0) {
                this.f25542b = ((-i10) * f11) + (i11 * f10);
                return this;
            }
        }
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b i(h hVar, int i10) {
        this.f25541a = hVar;
        float f10 = i10;
        hVar.f25594q = f10;
        this.f25542b = f10;
        this.f25546f = true;
        return this;
    }

    @Override // h1.d.a
    public boolean isEmpty() {
        if (this.f25541a == null && this.f25542b == 0.0f && this.f25545e.h() == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b j(h hVar, h hVar2, float f10) {
        this.f25545e.a(hVar, -1.0f);
        this.f25545e.a(hVar2, f10);
        return this;
    }

    public b k(h hVar, h hVar2, h hVar3, h hVar4, float f10) {
        this.f25545e.a(hVar, -1.0f);
        this.f25545e.a(hVar2, 1.0f);
        this.f25545e.a(hVar3, f10);
        this.f25545e.a(hVar4, -f10);
        return this;
    }

    public b l(float f10, float f11, float f12, h hVar, h hVar2, h hVar3, h hVar4) {
        this.f25542b = 0.0f;
        if (f11 != 0.0f && f10 != f12) {
            if (f10 == 0.0f) {
                this.f25545e.a(hVar, 1.0f);
                this.f25545e.a(hVar2, -1.0f);
                return this;
            } else if (f12 == 0.0f) {
                this.f25545e.a(hVar3, 1.0f);
                this.f25545e.a(hVar4, -1.0f);
                return this;
            } else {
                float f13 = (f10 / f11) / (f12 / f11);
                this.f25545e.a(hVar, 1.0f);
                this.f25545e.a(hVar2, -1.0f);
                this.f25545e.a(hVar4, f13);
                this.f25545e.a(hVar3, -f13);
                return this;
            }
        }
        this.f25545e.a(hVar, 1.0f);
        this.f25545e.a(hVar2, -1.0f);
        this.f25545e.a(hVar4, 1.0f);
        this.f25545e.a(hVar3, -1.0f);
        return this;
    }

    public b m(h hVar, int i10) {
        if (i10 < 0) {
            this.f25542b = i10 * (-1);
            this.f25545e.a(hVar, 1.0f);
            return this;
        }
        this.f25542b = i10;
        this.f25545e.a(hVar, -1.0f);
        return this;
    }

    public b n(h hVar, h hVar2, int i10) {
        boolean z10 = false;
        if (i10 != 0) {
            if (i10 < 0) {
                i10 *= -1;
                z10 = true;
            }
            this.f25542b = i10;
        }
        if (!z10) {
            this.f25545e.a(hVar, -1.0f);
            this.f25545e.a(hVar2, 1.0f);
            return this;
        }
        this.f25545e.a(hVar, 1.0f);
        this.f25545e.a(hVar2, -1.0f);
        return this;
    }

    public b o(h hVar, h hVar2, h hVar3, int i10) {
        boolean z10 = false;
        if (i10 != 0) {
            if (i10 < 0) {
                i10 *= -1;
                z10 = true;
            }
            this.f25542b = i10;
        }
        if (!z10) {
            this.f25545e.a(hVar, -1.0f);
            this.f25545e.a(hVar2, 1.0f);
            this.f25545e.a(hVar3, 1.0f);
            return this;
        }
        this.f25545e.a(hVar, 1.0f);
        this.f25545e.a(hVar2, -1.0f);
        this.f25545e.a(hVar3, -1.0f);
        return this;
    }

    public b p(h hVar, h hVar2, h hVar3, int i10) {
        boolean z10 = false;
        if (i10 != 0) {
            if (i10 < 0) {
                i10 *= -1;
                z10 = true;
            }
            this.f25542b = i10;
        }
        if (!z10) {
            this.f25545e.a(hVar, -1.0f);
            this.f25545e.a(hVar2, 1.0f);
            this.f25545e.a(hVar3, -1.0f);
            return this;
        }
        this.f25545e.a(hVar, 1.0f);
        this.f25545e.a(hVar2, -1.0f);
        this.f25545e.a(hVar3, 1.0f);
        return this;
    }

    public b q(h hVar, h hVar2, h hVar3, h hVar4, float f10) {
        this.f25545e.a(hVar3, 0.5f);
        this.f25545e.a(hVar4, 0.5f);
        this.f25545e.a(hVar, -0.5f);
        this.f25545e.a(hVar2, -0.5f);
        this.f25542b = -f10;
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r() {
        float f10 = this.f25542b;
        if (f10 < 0.0f) {
            this.f25542b = f10 * (-1.0f);
            this.f25545e.d();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean s() {
        h hVar = this.f25541a;
        if (hVar != null) {
            if (hVar.f25598u == h.a.UNRESTRICTED || this.f25542b >= 0.0f) {
                return true;
            }
            return false;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean t(h hVar) {
        return this.f25545e.g(hVar);
    }

    public String toString() {
        return z();
    }

    public h v(h hVar) {
        return w(null, hVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void x(h hVar) {
        h hVar2 = this.f25541a;
        if (hVar2 != null) {
            this.f25545e.a(hVar2, -1.0f);
            this.f25541a.f25592o = -1;
            this.f25541a = null;
        }
        float f10 = this.f25545e.f(hVar, true) * (-1.0f);
        this.f25541a = hVar;
        if (f10 == 1.0f) {
            return;
        }
        this.f25542b /= f10;
        this.f25545e.k(f10);
    }

    public void y() {
        this.f25541a = null;
        this.f25545e.clear();
        this.f25542b = 0.0f;
        this.f25546f = false;
    }

    /* JADX WARN: Removed duplicated region for block: B:29:0x00c0  */
    /* JADX WARN: Removed duplicated region for block: B:30:0x00d0  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    java.lang.String z() {
        /*
            Method dump skipped, instructions count: 256
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: h1.b.z():java.lang.String");
    }

    public b(c cVar) {
        this.f25545e = new h1.a(this, cVar);
    }
}
