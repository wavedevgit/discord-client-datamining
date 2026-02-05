package kk;

import fk.k;
import fk.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final jk.b f31909a;

    /* renamed from: b  reason: collision with root package name */
    private final int f31910b;

    /* renamed from: c  reason: collision with root package name */
    private final int f31911c;

    /* renamed from: d  reason: collision with root package name */
    private final int f31912d;

    /* renamed from: e  reason: collision with root package name */
    private final int f31913e;

    /* renamed from: f  reason: collision with root package name */
    private final int f31914f;

    /* renamed from: g  reason: collision with root package name */
    private final int f31915g;

    public b(jk.b bVar) {
        this(bVar, 10, bVar.l() / 2, bVar.i() / 2);
    }

    private p[] a(p pVar, p pVar2, p pVar3, p pVar4) {
        float c10 = pVar.c();
        float d10 = pVar.d();
        float c11 = pVar2.c();
        float d11 = pVar2.d();
        float c12 = pVar3.c();
        float d12 = pVar3.d();
        float c13 = pVar4.c();
        float d13 = pVar4.d();
        if (c10 < this.f31911c / 2.0f) {
            return new p[]{new p(c13 - 1.0f, d13 + 1.0f), new p(c11 + 1.0f, d11 + 1.0f), new p(c12 - 1.0f, d12 - 1.0f), new p(c10 + 1.0f, d10 - 1.0f)};
        }
        return new p[]{new p(c13 + 1.0f, d13 + 1.0f), new p(c11 + 1.0f, d11 - 1.0f), new p(c12 - 1.0f, d12 + 1.0f), new p(c10 - 1.0f, d10 - 1.0f)};
    }

    private boolean b(int i10, int i11, int i12, boolean z10) {
        if (z10) {
            while (i10 <= i11) {
                if (this.f31909a.e(i10, i12)) {
                    return true;
                }
                i10++;
            }
            return false;
        }
        while (i10 <= i11) {
            if (this.f31909a.e(i12, i10)) {
                return true;
            }
            i10++;
        }
        return false;
    }

    private p d(float f10, float f11, float f12, float f13) {
        int c10 = a.c(a.a(f10, f11, f12, f13));
        float f14 = c10;
        float f15 = (f12 - f10) / f14;
        float f16 = (f13 - f11) / f14;
        for (int i10 = 0; i10 < c10; i10++) {
            float f17 = i10;
            int c11 = a.c((f17 * f15) + f10);
            int c12 = a.c((f17 * f16) + f11);
            if (this.f31909a.e(c11, c12)) {
                return new p(c11, c12);
            }
        }
        return null;
    }

    public p[] c() {
        int i10 = this.f31912d;
        int i11 = this.f31913e;
        int i12 = this.f31915g;
        int i13 = this.f31914f;
        boolean z10 = false;
        boolean z11 = false;
        boolean z12 = false;
        boolean z13 = false;
        boolean z14 = false;
        boolean z15 = true;
        while (z15) {
            boolean z16 = false;
            boolean z17 = true;
            while (true) {
                if ((z17 || !z11) && i11 < this.f31911c) {
                    z17 = b(i12, i13, i11, false);
                    if (z17) {
                        i11++;
                        z11 = true;
                        z16 = true;
                    } else if (!z11) {
                        i11++;
                    }
                }
            }
            if (i11 < this.f31911c) {
                boolean z18 = true;
                while (true) {
                    if ((z18 || !z12) && i13 < this.f31910b) {
                        z18 = b(i10, i11, i13, true);
                        if (z18) {
                            i13++;
                            z12 = true;
                            z16 = true;
                        } else if (!z12) {
                            i13++;
                        }
                    }
                }
                if (i13 < this.f31910b) {
                    boolean z19 = true;
                    while (true) {
                        if ((z19 || !z13) && i10 >= 0) {
                            z19 = b(i12, i13, i10, false);
                            if (z19) {
                                i10--;
                                z13 = true;
                                z16 = true;
                            } else if (!z13) {
                                i10--;
                            }
                        }
                    }
                    if (i10 >= 0) {
                        z15 = z16;
                        boolean z20 = true;
                        while (true) {
                            if ((z20 || !z14) && i12 >= 0) {
                                z20 = b(i10, i11, i12, true);
                                if (z20) {
                                    i12--;
                                    z15 = true;
                                    z14 = true;
                                } else if (!z14) {
                                    i12--;
                                }
                            }
                        }
                        if (i12 < 0) {
                        }
                    }
                }
            }
            z10 = true;
            break;
        }
        if (!z10) {
            int i14 = i11 - i10;
            p pVar = null;
            p pVar2 = null;
            for (int i15 = 1; pVar2 == null && i15 < i14; i15++) {
                pVar2 = d(i10, i13 - i15, i10 + i15, i13);
            }
            if (pVar2 != null) {
                p pVar3 = null;
                for (int i16 = 1; pVar3 == null && i16 < i14; i16++) {
                    pVar3 = d(i10, i12 + i16, i10 + i16, i12);
                }
                if (pVar3 != null) {
                    p pVar4 = null;
                    for (int i17 = 1; pVar4 == null && i17 < i14; i17++) {
                        pVar4 = d(i11, i12 + i17, i11 - i17, i12);
                    }
                    if (pVar4 != null) {
                        for (int i18 = 1; pVar == null && i18 < i14; i18++) {
                            pVar = d(i11, i13 - i18, i11 - i18, i13);
                        }
                        if (pVar != null) {
                            return a(pVar, pVar2, pVar4, pVar3);
                        }
                        throw k.a();
                    }
                    throw k.a();
                }
                throw k.a();
            }
            throw k.a();
        }
        throw k.a();
    }

    public b(jk.b bVar, int i10, int i11, int i12) {
        this.f31909a = bVar;
        int i13 = bVar.i();
        this.f31910b = i13;
        int l10 = bVar.l();
        this.f31911c = l10;
        int i14 = i10 / 2;
        int i15 = i11 - i14;
        this.f31912d = i15;
        int i16 = i11 + i14;
        this.f31913e = i16;
        int i17 = i12 - i14;
        this.f31915g = i17;
        int i18 = i12 + i14;
        this.f31914f = i18;
        if (i17 < 0 || i15 < 0 || i18 >= i13 || i16 >= l10) {
            throw k.a();
        }
    }
}
