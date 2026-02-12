package ed;

import ed.i0;
import oe.s0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w implements i0 {

    /* renamed from: a  reason: collision with root package name */
    private final m f22744a;

    /* renamed from: b  reason: collision with root package name */
    private final oe.g0 f22745b = new oe.g0(new byte[10]);

    /* renamed from: c  reason: collision with root package name */
    private int f22746c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f22747d;

    /* renamed from: e  reason: collision with root package name */
    private s0 f22748e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f22749f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f22750g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f22751h;

    /* renamed from: i  reason: collision with root package name */
    private int f22752i;

    /* renamed from: j  reason: collision with root package name */
    private int f22753j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f22754k;

    /* renamed from: l  reason: collision with root package name */
    private long f22755l;

    public w(m mVar) {
        this.f22744a = mVar;
    }

    private boolean d(oe.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f22747d);
        if (min <= 0) {
            return true;
        }
        if (bArr == null) {
            h0Var.V(min);
        } else {
            h0Var.l(bArr, this.f22747d, min);
        }
        int i11 = this.f22747d + min;
        this.f22747d = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private boolean e() {
        this.f22745b.p(0);
        int h10 = this.f22745b.h(24);
        if (h10 != 1) {
            oe.y.i("PesReader", "Unexpected start code prefix: " + h10);
            this.f22753j = -1;
            return false;
        }
        this.f22745b.r(8);
        int h11 = this.f22745b.h(16);
        this.f22745b.r(5);
        this.f22754k = this.f22745b.g();
        this.f22745b.r(2);
        this.f22749f = this.f22745b.g();
        this.f22750g = this.f22745b.g();
        this.f22745b.r(6);
        int h12 = this.f22745b.h(8);
        this.f22752i = h12;
        if (h11 == 0) {
            this.f22753j = -1;
        } else {
            int i10 = (h11 - 3) - h12;
            this.f22753j = i10;
            if (i10 < 0) {
                oe.y.i("PesReader", "Found negative packet payload size: " + this.f22753j);
                this.f22753j = -1;
            }
        }
        return true;
    }

    private void f() {
        this.f22745b.p(0);
        this.f22755l = -9223372036854775807L;
        if (this.f22749f) {
            this.f22745b.r(4);
            this.f22745b.r(1);
            this.f22745b.r(1);
            long h10 = (this.f22745b.h(3) << 30) | (this.f22745b.h(15) << 15) | this.f22745b.h(15);
            this.f22745b.r(1);
            if (!this.f22751h && this.f22750g) {
                this.f22745b.r(4);
                this.f22745b.r(1);
                this.f22745b.r(1);
                this.f22745b.r(1);
                this.f22748e.b((this.f22745b.h(3) << 30) | (this.f22745b.h(15) << 15) | this.f22745b.h(15));
                this.f22751h = true;
            }
            this.f22755l = this.f22748e.b(h10);
        }
    }

    private void g(int i10) {
        this.f22746c = i10;
        this.f22747d = 0;
    }

    @Override // ed.i0
    public final void a(oe.h0 h0Var, int i10) {
        oe.a.i(this.f22748e);
        if ((i10 & 1) != 0) {
            int i11 = this.f22746c;
            if (i11 != 0 && i11 != 1) {
                if (i11 != 2) {
                    if (i11 == 3) {
                        if (this.f22753j != -1) {
                            oe.y.i("PesReader", "Unexpected start indicator: expected " + this.f22753j + " more bytes");
                        }
                        this.f22744a.d();
                    } else {
                        throw new IllegalStateException();
                    }
                } else {
                    oe.y.i("PesReader", "Unexpected start indicator reading extended header");
                }
            }
            g(1);
        }
        while (h0Var.a() > 0) {
            int i12 = this.f22746c;
            if (i12 != 0) {
                int i13 = 0;
                if (i12 != 1) {
                    if (i12 != 2) {
                        if (i12 == 3) {
                            int a10 = h0Var.a();
                            int i14 = this.f22753j;
                            if (i14 != -1) {
                                i13 = a10 - i14;
                            }
                            if (i13 > 0) {
                                a10 -= i13;
                                h0Var.T(h0Var.f() + a10);
                            }
                            this.f22744a.a(h0Var);
                            int i15 = this.f22753j;
                            if (i15 != -1) {
                                int i16 = i15 - a10;
                                this.f22753j = i16;
                                if (i16 == 0) {
                                    this.f22744a.d();
                                    g(1);
                                }
                            }
                        } else {
                            throw new IllegalStateException();
                        }
                    } else {
                        if (d(h0Var, this.f22745b.f38947a, Math.min(10, this.f22752i)) && d(h0Var, null, this.f22752i)) {
                            f();
                            if (this.f22754k) {
                                i13 = 4;
                            }
                            i10 |= i13;
                            this.f22744a.e(this.f22755l, i10);
                            g(3);
                        }
                    }
                } else if (d(h0Var, this.f22745b.f38947a, 9)) {
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

    @Override // ed.i0
    public final void b() {
        this.f22746c = 0;
        this.f22747d = 0;
        this.f22751h = false;
        this.f22744a.b();
    }

    @Override // ed.i0
    public void c(s0 s0Var, uc.m mVar, i0.d dVar) {
        this.f22748e = s0Var;
        this.f22744a.c(mVar, dVar);
    }
}
