package dd;

import dd.i0;
import ne.s0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w implements i0 {

    /* renamed from: a  reason: collision with root package name */
    private final m f20516a;

    /* renamed from: b  reason: collision with root package name */
    private final ne.g0 f20517b = new ne.g0(new byte[10]);

    /* renamed from: c  reason: collision with root package name */
    private int f20518c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f20519d;

    /* renamed from: e  reason: collision with root package name */
    private s0 f20520e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f20521f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f20522g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f20523h;

    /* renamed from: i  reason: collision with root package name */
    private int f20524i;

    /* renamed from: j  reason: collision with root package name */
    private int f20525j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f20526k;

    /* renamed from: l  reason: collision with root package name */
    private long f20527l;

    public w(m mVar) {
        this.f20516a = mVar;
    }

    private boolean d(ne.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f20519d);
        if (min <= 0) {
            return true;
        }
        if (bArr == null) {
            h0Var.V(min);
        } else {
            h0Var.l(bArr, this.f20519d, min);
        }
        int i11 = this.f20519d + min;
        this.f20519d = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private boolean e() {
        this.f20517b.p(0);
        int h10 = this.f20517b.h(24);
        if (h10 != 1) {
            ne.y.i("PesReader", "Unexpected start code prefix: " + h10);
            this.f20525j = -1;
            return false;
        }
        this.f20517b.r(8);
        int h11 = this.f20517b.h(16);
        this.f20517b.r(5);
        this.f20526k = this.f20517b.g();
        this.f20517b.r(2);
        this.f20521f = this.f20517b.g();
        this.f20522g = this.f20517b.g();
        this.f20517b.r(6);
        int h12 = this.f20517b.h(8);
        this.f20524i = h12;
        if (h11 == 0) {
            this.f20525j = -1;
        } else {
            int i10 = (h11 - 3) - h12;
            this.f20525j = i10;
            if (i10 < 0) {
                ne.y.i("PesReader", "Found negative packet payload size: " + this.f20525j);
                this.f20525j = -1;
            }
        }
        return true;
    }

    private void f() {
        this.f20517b.p(0);
        this.f20527l = -9223372036854775807L;
        if (this.f20521f) {
            this.f20517b.r(4);
            this.f20517b.r(1);
            this.f20517b.r(1);
            long h10 = (this.f20517b.h(3) << 30) | (this.f20517b.h(15) << 15) | this.f20517b.h(15);
            this.f20517b.r(1);
            if (!this.f20523h && this.f20522g) {
                this.f20517b.r(4);
                this.f20517b.r(1);
                this.f20517b.r(1);
                this.f20517b.r(1);
                this.f20520e.b((this.f20517b.h(3) << 30) | (this.f20517b.h(15) << 15) | this.f20517b.h(15));
                this.f20523h = true;
            }
            this.f20527l = this.f20520e.b(h10);
        }
    }

    private void g(int i10) {
        this.f20518c = i10;
        this.f20519d = 0;
    }

    @Override // dd.i0
    public void a(s0 s0Var, tc.m mVar, i0.d dVar) {
        this.f20520e = s0Var;
        this.f20516a.f(mVar, dVar);
    }

    @Override // dd.i0
    public final void b(ne.h0 h0Var, int i10) {
        ne.a.i(this.f20520e);
        if ((i10 & 1) != 0) {
            int i11 = this.f20518c;
            if (i11 != 0 && i11 != 1) {
                if (i11 != 2) {
                    if (i11 == 3) {
                        if (this.f20525j != -1) {
                            ne.y.i("PesReader", "Unexpected start indicator: expected " + this.f20525j + " more bytes");
                        }
                        this.f20516a.d();
                    } else {
                        throw new IllegalStateException();
                    }
                } else {
                    ne.y.i("PesReader", "Unexpected start indicator reading extended header");
                }
            }
            g(1);
        }
        while (h0Var.a() > 0) {
            int i12 = this.f20518c;
            if (i12 != 0) {
                int i13 = 0;
                if (i12 != 1) {
                    if (i12 != 2) {
                        if (i12 == 3) {
                            int a10 = h0Var.a();
                            int i14 = this.f20525j;
                            if (i14 != -1) {
                                i13 = a10 - i14;
                            }
                            if (i13 > 0) {
                                a10 -= i13;
                                h0Var.T(h0Var.f() + a10);
                            }
                            this.f20516a.b(h0Var);
                            int i15 = this.f20525j;
                            if (i15 != -1) {
                                int i16 = i15 - a10;
                                this.f20525j = i16;
                                if (i16 == 0) {
                                    this.f20516a.d();
                                    g(1);
                                }
                            }
                        } else {
                            throw new IllegalStateException();
                        }
                    } else {
                        if (d(h0Var, this.f20517b.f40106a, Math.min(10, this.f20524i)) && d(h0Var, null, this.f20524i)) {
                            f();
                            if (this.f20526k) {
                                i13 = 4;
                            }
                            i10 |= i13;
                            this.f20516a.e(this.f20527l, i10);
                            g(3);
                        }
                    }
                } else if (d(h0Var, this.f20517b.f40106a, 9)) {
                    if (e()) {
                        i13 = 2;
                    }
                    g(i13);
                }
            } else {
                h0Var.V(h0Var.a());
            }
        }
    }

    @Override // dd.i0
    public final void c() {
        this.f20518c = 0;
        this.f20519d = 0;
        this.f20523h = false;
        this.f20516a.c();
    }
}
