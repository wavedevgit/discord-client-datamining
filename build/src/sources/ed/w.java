package ed;

import ed.i0;
import oe.s0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w implements i0 {

    /* renamed from: a  reason: collision with root package name */
    private final m f21576a;

    /* renamed from: b  reason: collision with root package name */
    private final oe.g0 f21577b = new oe.g0(new byte[10]);

    /* renamed from: c  reason: collision with root package name */
    private int f21578c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f21579d;

    /* renamed from: e  reason: collision with root package name */
    private s0 f21580e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f21581f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f21582g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f21583h;

    /* renamed from: i  reason: collision with root package name */
    private int f21584i;

    /* renamed from: j  reason: collision with root package name */
    private int f21585j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f21586k;

    /* renamed from: l  reason: collision with root package name */
    private long f21587l;

    public w(m mVar) {
        this.f21576a = mVar;
    }

    private boolean d(oe.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f21579d);
        if (min <= 0) {
            return true;
        }
        if (bArr == null) {
            h0Var.V(min);
        } else {
            h0Var.l(bArr, this.f21579d, min);
        }
        int i11 = this.f21579d + min;
        this.f21579d = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private boolean e() {
        this.f21577b.p(0);
        int h10 = this.f21577b.h(24);
        if (h10 != 1) {
            oe.y.i("PesReader", "Unexpected start code prefix: " + h10);
            this.f21585j = -1;
            return false;
        }
        this.f21577b.r(8);
        int h11 = this.f21577b.h(16);
        this.f21577b.r(5);
        this.f21586k = this.f21577b.g();
        this.f21577b.r(2);
        this.f21581f = this.f21577b.g();
        this.f21582g = this.f21577b.g();
        this.f21577b.r(6);
        int h12 = this.f21577b.h(8);
        this.f21584i = h12;
        if (h11 == 0) {
            this.f21585j = -1;
        } else {
            int i10 = (h11 - 3) - h12;
            this.f21585j = i10;
            if (i10 < 0) {
                oe.y.i("PesReader", "Found negative packet payload size: " + this.f21585j);
                this.f21585j = -1;
            }
        }
        return true;
    }

    private void f() {
        this.f21577b.p(0);
        this.f21587l = -9223372036854775807L;
        if (this.f21581f) {
            this.f21577b.r(4);
            this.f21577b.r(1);
            this.f21577b.r(1);
            long h10 = (this.f21577b.h(3) << 30) | (this.f21577b.h(15) << 15) | this.f21577b.h(15);
            this.f21577b.r(1);
            if (!this.f21583h && this.f21582g) {
                this.f21577b.r(4);
                this.f21577b.r(1);
                this.f21577b.r(1);
                this.f21577b.r(1);
                this.f21580e.b((this.f21577b.h(3) << 30) | (this.f21577b.h(15) << 15) | this.f21577b.h(15));
                this.f21583h = true;
            }
            this.f21587l = this.f21580e.b(h10);
        }
    }

    private void g(int i10) {
        this.f21578c = i10;
        this.f21579d = 0;
    }

    @Override // ed.i0
    public final void a(oe.h0 h0Var, int i10) {
        oe.a.i(this.f21580e);
        if ((i10 & 1) != 0) {
            int i11 = this.f21578c;
            if (i11 != 0 && i11 != 1) {
                if (i11 != 2) {
                    if (i11 == 3) {
                        if (this.f21585j != -1) {
                            oe.y.i("PesReader", "Unexpected start indicator: expected " + this.f21585j + " more bytes");
                        }
                        this.f21576a.d();
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
            int i12 = this.f21578c;
            if (i12 != 0) {
                int i13 = 0;
                if (i12 != 1) {
                    if (i12 != 2) {
                        if (i12 == 3) {
                            int a10 = h0Var.a();
                            int i14 = this.f21585j;
                            if (i14 != -1) {
                                i13 = a10 - i14;
                            }
                            if (i13 > 0) {
                                a10 -= i13;
                                h0Var.T(h0Var.f() + a10);
                            }
                            this.f21576a.a(h0Var);
                            int i15 = this.f21585j;
                            if (i15 != -1) {
                                int i16 = i15 - a10;
                                this.f21585j = i16;
                                if (i16 == 0) {
                                    this.f21576a.d();
                                    g(1);
                                }
                            }
                        } else {
                            throw new IllegalStateException();
                        }
                    } else {
                        if (d(h0Var, this.f21577b.f40620a, Math.min(10, this.f21584i)) && d(h0Var, null, this.f21584i)) {
                            f();
                            if (this.f21586k) {
                                i13 = 4;
                            }
                            i10 |= i13;
                            this.f21576a.e(this.f21587l, i10);
                            g(3);
                        }
                    }
                } else if (d(h0Var, this.f21577b.f40620a, 9)) {
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
        this.f21578c = 0;
        this.f21579d = 0;
        this.f21583h = false;
        this.f21576a.b();
    }

    @Override // ed.i0
    public void c(s0 s0Var, uc.m mVar, i0.d dVar) {
        this.f21580e = s0Var;
        this.f21576a.c(mVar, dVar);
    }
}
