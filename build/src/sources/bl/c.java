package bl;

import al.j;
import fk.k;
import fk.p;
import java.util.Map;
import jk.g;
import jk.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    private final jk.b f6510a;

    public c(jk.b bVar) {
        this.f6510a = bVar;
    }

    private float b(p pVar, p pVar2) {
        float j10 = j((int) pVar.c(), (int) pVar.d(), (int) pVar2.c(), (int) pVar2.d());
        float j11 = j((int) pVar2.c(), (int) pVar2.d(), (int) pVar.c(), (int) pVar.d());
        if (Float.isNaN(j10)) {
            return j11 / 7.0f;
        }
        if (Float.isNaN(j11)) {
            return j10 / 7.0f;
        }
        return (j10 + j11) / 14.0f;
    }

    private static int c(p pVar, p pVar2, p pVar3, float f10) {
        int c10 = (kk.a.c(p.b(pVar, pVar2) / f10) + kk.a.c(p.b(pVar, pVar3) / f10)) / 2;
        int i10 = c10 + 7;
        int i11 = i10 & 3;
        if (i11 != 0) {
            if (i11 != 2) {
                if (i11 != 3) {
                    return i10;
                }
                throw k.a();
            }
            return c10 + 6;
        }
        return c10 + 8;
    }

    private static m d(p pVar, p pVar2, p pVar3, p pVar4, int i10) {
        float c10;
        float d10;
        float f10;
        float f11 = i10 - 3.5f;
        if (pVar4 != null) {
            c10 = pVar4.c();
            d10 = pVar4.d();
            f10 = f11 - 3.0f;
        } else {
            c10 = (pVar2.c() - pVar.c()) + pVar3.c();
            d10 = (pVar2.d() - pVar.d()) + pVar3.d();
            f10 = f11;
        }
        return m.b(3.5f, 3.5f, f11, 3.5f, f10, f10, 3.5f, f11, pVar.c(), pVar.d(), pVar2.c(), pVar2.d(), c10, d10, pVar3.c(), pVar3.d());
    }

    private static jk.b h(jk.b bVar, m mVar, int i10) {
        return jk.k.b().d(bVar, i10, i10, mVar);
    }

    private float i(int i10, int i11, int i12, int i13) {
        boolean z10;
        int i14;
        int i15;
        int i16;
        int i17;
        int i18;
        int i19;
        int i20;
        int i21;
        boolean z11;
        c cVar;
        int i22;
        boolean z12 = true;
        if (Math.abs(i13 - i11) > Math.abs(i12 - i10)) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            i15 = i10;
            i14 = i11;
            i17 = i12;
            i16 = i13;
        } else {
            i14 = i10;
            i15 = i11;
            i16 = i12;
            i17 = i13;
        }
        int abs = Math.abs(i16 - i14);
        int abs2 = Math.abs(i17 - i15);
        int i23 = 2;
        int i24 = (-abs) / 2;
        int i25 = -1;
        if (i14 < i16) {
            i18 = 1;
        } else {
            i18 = -1;
        }
        if (i15 < i17) {
            i25 = 1;
        }
        int i26 = i16 + i18;
        int i27 = i14;
        int i28 = i15;
        int i29 = 0;
        while (true) {
            if (i27 != i26) {
                if (z10) {
                    i20 = i28;
                } else {
                    i20 = i27;
                }
                if (z10) {
                    i21 = i27;
                } else {
                    i21 = i28;
                }
                boolean z13 = z10;
                if (i29 == z12) {
                    z11 = z12;
                    i22 = abs;
                    cVar = this;
                } else {
                    z11 = false;
                    cVar = this;
                    i22 = abs;
                }
                if (z11 == cVar.f6510a.e(i20, i21)) {
                    if (i29 == 2) {
                        return kk.a.b(i27, i28, i14, i15);
                    }
                    i29++;
                }
                i24 += abs2;
                if (i24 > 0) {
                    if (i28 == i17) {
                        i19 = 2;
                        break;
                    }
                    i28 += i25;
                    i24 -= i22;
                }
                i27 += i18;
                abs = i22;
                z10 = z13;
                z12 = true;
                i23 = 2;
            } else {
                i19 = i23;
                break;
            }
        }
        if (i29 == i19) {
            return kk.a.b(i26, i17, i14, i15);
        }
        return Float.NaN;
    }

    private float j(int i10, int i11, int i12, int i13) {
        float f10;
        float f11;
        float i14 = i(i10, i11, i12, i13);
        int i15 = i10 - (i12 - i10);
        int i16 = 0;
        if (i15 < 0) {
            f10 = i10 / (i10 - i15);
            i15 = 0;
        } else if (i15 >= this.f6510a.l()) {
            f10 = ((this.f6510a.l() - 1) - i10) / (i15 - i10);
            i15 = this.f6510a.l() - 1;
        } else {
            f10 = 1.0f;
        }
        float f12 = i11;
        int i17 = (int) (f12 - ((i13 - i11) * f10));
        if (i17 < 0) {
            f11 = f12 / (i11 - i17);
        } else if (i17 >= this.f6510a.i()) {
            f11 = ((this.f6510a.i() - 1) - i11) / (i17 - i11);
            i16 = this.f6510a.i() - 1;
        } else {
            i16 = i17;
            f11 = 1.0f;
        }
        return (i14 + i(i10, i11, (int) (i10 + ((i15 - i10) * f11)), i16)) - 1.0f;
    }

    protected final float a(p pVar, p pVar2, p pVar3) {
        return (b(pVar, pVar2) + b(pVar, pVar3)) / 2.0f;
    }

    public final g e(Map map) {
        if (map != null) {
            android.support.v4.media.session.b.a(map.get(fk.e.NEED_RESULT_POINT_CALLBACK));
        }
        return g(new e(this.f6510a, null).g(map));
    }

    protected final a f(float f10, int i10, int i11, float f11) {
        int i12 = (int) (f11 * f10);
        int max = Math.max(0, i10 - i12);
        int min = Math.min(this.f6510a.l() - 1, i10 + i12) - max;
        float f12 = 3.0f * f10;
        if (min >= f12) {
            int max2 = Math.max(0, i11 - i12);
            int min2 = Math.min(this.f6510a.i() - 1, i11 + i12) - max2;
            if (min2 >= f12) {
                return new b(this.f6510a, max, max2, min, min2, f10, null).c();
            }
            throw k.a();
        }
        throw k.a();
    }

    protected final g g(f fVar) {
        a aVar;
        d b10 = fVar.b();
        d c10 = fVar.c();
        d a10 = fVar.a();
        float a11 = a(b10, c10, a10);
        if (a11 >= 1.0f) {
            int c11 = c(b10, c10, a10, a11);
            j g10 = j.g(c11);
            int e10 = g10.e() - 7;
            if (g10.d().length > 0) {
                float c12 = (c10.c() - b10.c()) + a10.c();
                float d10 = (c10.d() - b10.d()) + a10.d();
                float f10 = 1.0f - (3.0f / e10);
                int c13 = (int) (b10.c() + ((c12 - b10.c()) * f10));
                int d11 = (int) (b10.d() + (f10 * (d10 - b10.d())));
                for (int i10 = 4; i10 <= 16; i10 <<= 1) {
                    try {
                        aVar = f(a11, c13, d11, i10);
                        break;
                    } catch (k unused) {
                    }
                }
            }
            aVar = null;
            return new g(h(this.f6510a, d(b10, c10, a10, aVar, c11), c11), aVar == null ? new p[]{a10, b10, c10} : new p[]{a10, b10, c10, aVar});
        }
        throw k.a();
    }
}
