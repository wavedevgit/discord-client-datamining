package ed;

import ed.i0;
import oe.s0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w implements i0 {

    /* renamed from: a  reason: collision with root package name */
    private final m f22743a;

    /* renamed from: b  reason: collision with root package name */
    private final oe.g0 f22744b = new oe.g0(new byte[10]);

    /* renamed from: c  reason: collision with root package name */
    private int f22745c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f22746d;

    /* renamed from: e  reason: collision with root package name */
    private s0 f22747e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f22748f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f22749g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f22750h;

    /* renamed from: i  reason: collision with root package name */
    private int f22751i;

    /* renamed from: j  reason: collision with root package name */
    private int f22752j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f22753k;

    /* renamed from: l  reason: collision with root package name */
    private long f22754l;

    public w(m mVar) {
        this.f22743a = mVar;
    }

    private boolean d(oe.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f22746d);
        if (min <= 0) {
            return true;
        }
        if (bArr == null) {
            h0Var.V(min);
        } else {
            h0Var.l(bArr, this.f22746d, min);
        }
        int i11 = this.f22746d + min;
        this.f22746d = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private boolean e() {
        this.f22744b.p(0);
        int h10 = this.f22744b.h(24);
        if (h10 != 1) {
            oe.y.i("PesReader", "Unexpected start code prefix: " + h10);
            this.f22752j = -1;
            return false;
        }
        this.f22744b.r(8);
        int h11 = this.f22744b.h(16);
        this.f22744b.r(5);
        this.f22753k = this.f22744b.g();
        this.f22744b.r(2);
        this.f22748f = this.f22744b.g();
        this.f22749g = this.f22744b.g();
        this.f22744b.r(6);
        int h12 = this.f22744b.h(8);
        this.f22751i = h12;
        if (h11 == 0) {
            this.f22752j = -1;
        } else {
            int i10 = (h11 - 3) - h12;
            this.f22752j = i10;
            if (i10 < 0) {
                oe.y.i("PesReader", "Found negative packet payload size: " + this.f22752j);
                this.f22752j = -1;
            }
        }
        return true;
    }

    private void f() {
        this.f22744b.p(0);
        this.f22754l = -9223372036854775807L;
        if (this.f22748f) {
            this.f22744b.r(4);
            this.f22744b.r(1);
            this.f22744b.r(1);
            long h10 = (this.f22744b.h(3) << 30) | (this.f22744b.h(15) << 15) | this.f22744b.h(15);
            this.f22744b.r(1);
            if (!this.f22750h && this.f22749g) {
                this.f22744b.r(4);
                this.f22744b.r(1);
                this.f22744b.r(1);
                this.f22744b.r(1);
                this.f22747e.b((this.f22744b.h(3) << 30) | (this.f22744b.h(15) << 15) | this.f22744b.h(15));
                this.f22750h = true;
            }
            this.f22754l = this.f22747e.b(h10);
        }
    }

    private void g(int i10) {
        this.f22745c = i10;
        this.f22746d = 0;
    }

    @Override // ed.i0
    public final void a(oe.h0 h0Var, int i10) {
        oe.a.i(this.f22747e);
        if ((i10 & 1) != 0) {
            int i11 = this.f22745c;
            if (i11 != 0 && i11 != 1) {
                if (i11 != 2) {
                    if (i11 == 3) {
                        if (this.f22752j != -1) {
                            oe.y.i("PesReader", "Unexpected start indicator: expected " + this.f22752j + " more bytes");
                        }
                        this.f22743a.d();
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
            int i12 = this.f22745c;
            if (i12 != 0) {
                int i13 = 0;
                if (i12 != 1) {
                    if (i12 != 2) {
                        if (i12 == 3) {
                            int a10 = h0Var.a();
                            int i14 = this.f22752j;
                            if (i14 != -1) {
                                i13 = a10 - i14;
                            }
                            if (i13 > 0) {
                                a10 -= i13;
                                h0Var.T(h0Var.f() + a10);
                            }
                            this.f22743a.a(h0Var);
                            int i15 = this.f22752j;
                            if (i15 != -1) {
                                int i16 = i15 - a10;
                                this.f22752j = i16;
                                if (i16 == 0) {
                                    this.f22743a.d();
                                    g(1);
                                }
                            }
                        } else {
                            throw new IllegalStateException();
                        }
                    } else {
                        if (d(h0Var, this.f22744b.f38946a, Math.min(10, this.f22751i)) && d(h0Var, null, this.f22751i)) {
                            f();
                            if (this.f22753k) {
                                i13 = 4;
                            }
                            i10 |= i13;
                            this.f22743a.e(this.f22754l, i10);
                            g(3);
                        }
                    }
                } else if (d(h0Var, this.f22744b.f38946a, 9)) {
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
        this.f22745c = 0;
        this.f22746d = 0;
        this.f22750h = false;
        this.f22743a.b();
    }

    @Override // ed.i0
    public void c(s0 s0Var, uc.m mVar, i0.d dVar) {
        this.f22747e = s0Var;
        this.f22743a.c(mVar, dVar);
    }
}
