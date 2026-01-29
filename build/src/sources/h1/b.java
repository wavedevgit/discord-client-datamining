package h1;

import h1.d;
import h1.h;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b implements d.a {

    /* renamed from: e  reason: collision with root package name */
    public a f27230e;

    /* renamed from: a  reason: collision with root package name */
    h f27226a = null;

    /* renamed from: b  reason: collision with root package name */
    float f27227b = 0.0f;

    /* renamed from: c  reason: collision with root package name */
    boolean f27228c = false;

    /* renamed from: d  reason: collision with root package name */
    ArrayList f27229d = new ArrayList();

    /* renamed from: f  reason: collision with root package name */
    boolean f27231f = false;

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
        if (hVar.f27286x <= 1) {
            return true;
        }
        return false;
    }

    private h w(boolean[] zArr, h hVar) {
        h.a aVar;
        int h10 = this.f27230e.h();
        h hVar2 = null;
        float f10 = 0.0f;
        for (int i10 = 0; i10 < h10; i10++) {
            float j10 = this.f27230e.j(i10);
            if (j10 < 0.0f) {
                h c10 = this.f27230e.c(i10);
                if ((zArr == null || !zArr[c10.f27276i]) && c10 != hVar && (((aVar = c10.f27283u) == h.a.SLACK || aVar == h.a.ERROR) && j10 < f10)) {
                    f10 = j10;
                    hVar2 = c10;
                }
            }
        }
        return hVar2;
    }

    public void A(d dVar, h hVar, boolean z10) {
        if (hVar != null && hVar.f27280r) {
            this.f27227b += hVar.f27279q * this.f27230e.i(hVar);
            this.f27230e.f(hVar, z10);
            if (z10) {
                hVar.f(this);
            }
            if (d.f27238u && this.f27230e.h() == 0) {
                this.f27231f = true;
                dVar.f27245b = true;
            }
        }
    }

    public void B(d dVar, b bVar, boolean z10) {
        this.f27227b += bVar.f27227b * this.f27230e.e(bVar, z10);
        if (z10) {
            bVar.f27226a.f(this);
        }
        if (d.f27238u && this.f27226a != null && this.f27230e.h() == 0) {
            this.f27231f = true;
            dVar.f27245b = true;
        }
    }

    public void C(d dVar, h hVar, boolean z10) {
        if (hVar != null && hVar.f27287y) {
            float i10 = this.f27230e.i(hVar);
            this.f27227b += hVar.A * i10;
            this.f27230e.f(hVar, z10);
            if (z10) {
                hVar.f(this);
            }
            this.f27230e.b(dVar.f27258o.f27235d[hVar.f27288z], i10, z10);
            if (d.f27238u && this.f27230e.h() == 0) {
                this.f27231f = true;
                dVar.f27245b = true;
            }
        }
    }

    public void D(d dVar) {
        if (dVar.f27251h.length != 0) {
            boolean z10 = false;
            while (!z10) {
                int h10 = this.f27230e.h();
                for (int i10 = 0; i10 < h10; i10++) {
                    h c10 = this.f27230e.c(i10);
                    if (c10.f27277o != -1 || c10.f27280r || c10.f27287y) {
                        this.f27229d.add(c10);
                    }
                }
                int size = this.f27229d.size();
                if (size > 0) {
                    for (int i11 = 0; i11 < size; i11++) {
                        h hVar = (h) this.f27229d.get(i11);
                        if (hVar.f27280r) {
                            A(dVar, hVar, true);
                        } else if (hVar.f27287y) {
                            C(dVar, hVar, true);
                        } else {
                            B(dVar, dVar.f27251h[hVar.f27277o], true);
                        }
                    }
                    this.f27229d.clear();
                } else {
                    z10 = true;
                }
            }
            if (d.f27238u && this.f27226a != null && this.f27230e.h() == 0) {
                this.f27231f = true;
                dVar.f27245b = true;
            }
        }
    }

    @Override // h1.d.a
    public void a(h hVar) {
        int i10 = hVar.f27278p;
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
        this.f27230e.a(hVar, f10);
    }

    @Override // h1.d.a
    public void b(d.a aVar) {
        if (aVar instanceof b) {
            b bVar = (b) aVar;
            this.f27226a = null;
            this.f27230e.clear();
            for (int i10 = 0; i10 < bVar.f27230e.h(); i10++) {
                this.f27230e.b(bVar.f27230e.c(i10), bVar.f27230e.j(i10), true);
            }
        }
    }

    @Override // h1.d.a
    public h c(d dVar, boolean[] zArr) {
        return w(zArr, null);
    }

    @Override // h1.d.a
    public void clear() {
        this.f27230e.clear();
        this.f27226a = null;
        this.f27227b = 0.0f;
    }

    public b d(d dVar, int i10) {
        this.f27230e.a(dVar.o(i10, "ep"), 1.0f);
        this.f27230e.a(dVar.o(i10, "em"), -1.0f);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b e(h hVar, int i10) {
        this.f27230e.a(hVar, i10);
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
        if (this.f27230e.h() == 0) {
            this.f27231f = true;
        }
        return z10;
    }

    h g(d dVar) {
        boolean u10;
        boolean u11;
        int h10 = this.f27230e.h();
        h hVar = null;
        float f10 = 0.0f;
        float f11 = 0.0f;
        boolean z10 = false;
        boolean z11 = false;
        h hVar2 = null;
        for (int i10 = 0; i10 < h10; i10++) {
            float j10 = this.f27230e.j(i10);
            h c10 = this.f27230e.c(i10);
            if (c10.f27283u == h.a.UNRESTRICTED) {
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
        return this.f27226a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b h(h hVar, h hVar2, int i10, float f10, h hVar3, h hVar4, int i11) {
        if (hVar2 == hVar3) {
            this.f27230e.a(hVar, 1.0f);
            this.f27230e.a(hVar4, 1.0f);
            this.f27230e.a(hVar2, -2.0f);
            return this;
        }
        if (f10 == 0.5f) {
            this.f27230e.a(hVar, 1.0f);
            this.f27230e.a(hVar2, -1.0f);
            this.f27230e.a(hVar3, -1.0f);
            this.f27230e.a(hVar4, 1.0f);
            if (i10 > 0 || i11 > 0) {
                this.f27227b = (-i10) + i11;
                return this;
            }
        } else if (f10 <= 0.0f) {
            this.f27230e.a(hVar, -1.0f);
            this.f27230e.a(hVar2, 1.0f);
            this.f27227b = i10;
            return this;
        } else if (f10 >= 1.0f) {
            this.f27230e.a(hVar4, -1.0f);
            this.f27230e.a(hVar3, 1.0f);
            this.f27227b = -i11;
            return this;
        } else {
            float f11 = 1.0f - f10;
            this.f27230e.a(hVar, f11 * 1.0f);
            this.f27230e.a(hVar2, f11 * (-1.0f));
            this.f27230e.a(hVar3, (-1.0f) * f10);
            this.f27230e.a(hVar4, 1.0f * f10);
            if (i10 > 0 || i11 > 0) {
                this.f27227b = ((-i10) * f11) + (i11 * f10);
                return this;
            }
        }
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b i(h hVar, int i10) {
        this.f27226a = hVar;
        float f10 = i10;
        hVar.f27279q = f10;
        this.f27227b = f10;
        this.f27231f = true;
        return this;
    }

    @Override // h1.d.a
    public boolean isEmpty() {
        if (this.f27226a == null && this.f27227b == 0.0f && this.f27230e.h() == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b j(h hVar, h hVar2, float f10) {
        this.f27230e.a(hVar, -1.0f);
        this.f27230e.a(hVar2, f10);
        return this;
    }

    public b k(h hVar, h hVar2, h hVar3, h hVar4, float f10) {
        this.f27230e.a(hVar, -1.0f);
        this.f27230e.a(hVar2, 1.0f);
        this.f27230e.a(hVar3, f10);
        this.f27230e.a(hVar4, -f10);
        return this;
    }

    public b l(float f10, float f11, float f12, h hVar, h hVar2, h hVar3, h hVar4) {
        this.f27227b = 0.0f;
        if (f11 != 0.0f && f10 != f12) {
            if (f10 == 0.0f) {
                this.f27230e.a(hVar, 1.0f);
                this.f27230e.a(hVar2, -1.0f);
                return this;
            } else if (f12 == 0.0f) {
                this.f27230e.a(hVar3, 1.0f);
                this.f27230e.a(hVar4, -1.0f);
                return this;
            } else {
                float f13 = (f10 / f11) / (f12 / f11);
                this.f27230e.a(hVar, 1.0f);
                this.f27230e.a(hVar2, -1.0f);
                this.f27230e.a(hVar4, f13);
                this.f27230e.a(hVar3, -f13);
                return this;
            }
        }
        this.f27230e.a(hVar, 1.0f);
        this.f27230e.a(hVar2, -1.0f);
        this.f27230e.a(hVar4, 1.0f);
        this.f27230e.a(hVar3, -1.0f);
        return this;
    }

    public b m(h hVar, int i10) {
        if (i10 < 0) {
            this.f27227b = i10 * (-1);
            this.f27230e.a(hVar, 1.0f);
            return this;
        }
        this.f27227b = i10;
        this.f27230e.a(hVar, -1.0f);
        return this;
    }

    public b n(h hVar, h hVar2, int i10) {
        boolean z10 = false;
        if (i10 != 0) {
            if (i10 < 0) {
                i10 *= -1;
                z10 = true;
            }
            this.f27227b = i10;
        }
        if (!z10) {
            this.f27230e.a(hVar, -1.0f);
            this.f27230e.a(hVar2, 1.0f);
            return this;
        }
        this.f27230e.a(hVar, 1.0f);
        this.f27230e.a(hVar2, -1.0f);
        return this;
    }

    public b o(h hVar, h hVar2, h hVar3, int i10) {
        boolean z10 = false;
        if (i10 != 0) {
            if (i10 < 0) {
                i10 *= -1;
                z10 = true;
            }
            this.f27227b = i10;
        }
        if (!z10) {
            this.f27230e.a(hVar, -1.0f);
            this.f27230e.a(hVar2, 1.0f);
            this.f27230e.a(hVar3, 1.0f);
            return this;
        }
        this.f27230e.a(hVar, 1.0f);
        this.f27230e.a(hVar2, -1.0f);
        this.f27230e.a(hVar3, -1.0f);
        return this;
    }

    public b p(h hVar, h hVar2, h hVar3, int i10) {
        boolean z10 = false;
        if (i10 != 0) {
            if (i10 < 0) {
                i10 *= -1;
                z10 = true;
            }
            this.f27227b = i10;
        }
        if (!z10) {
            this.f27230e.a(hVar, -1.0f);
            this.f27230e.a(hVar2, 1.0f);
            this.f27230e.a(hVar3, -1.0f);
            return this;
        }
        this.f27230e.a(hVar, 1.0f);
        this.f27230e.a(hVar2, -1.0f);
        this.f27230e.a(hVar3, 1.0f);
        return this;
    }

    public b q(h hVar, h hVar2, h hVar3, h hVar4, float f10) {
        this.f27230e.a(hVar3, 0.5f);
        this.f27230e.a(hVar4, 0.5f);
        this.f27230e.a(hVar, -0.5f);
        this.f27230e.a(hVar2, -0.5f);
        this.f27227b = -f10;
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r() {
        float f10 = this.f27227b;
        if (f10 < 0.0f) {
            this.f27227b = f10 * (-1.0f);
            this.f27230e.d();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean s() {
        h hVar = this.f27226a;
        if (hVar != null) {
            if (hVar.f27283u == h.a.UNRESTRICTED || this.f27227b >= 0.0f) {
                return true;
            }
            return false;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean t(h hVar) {
        return this.f27230e.g(hVar);
    }

    public String toString() {
        return z();
    }

    public h v(h hVar) {
        return w(null, hVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void x(h hVar) {
        h hVar2 = this.f27226a;
        if (hVar2 != null) {
            this.f27230e.a(hVar2, -1.0f);
            this.f27226a.f27277o = -1;
            this.f27226a = null;
        }
        float f10 = this.f27230e.f(hVar, true) * (-1.0f);
        this.f27226a = hVar;
        if (f10 == 1.0f) {
            return;
        }
        this.f27227b /= f10;
        this.f27230e.k(f10);
    }

    public void y() {
        this.f27226a = null;
        this.f27230e.clear();
        this.f27227b = 0.0f;
        this.f27231f = false;
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
        this.f27230e = new h1.a(this, cVar);
    }
}
