package dd;

import dd.i0;
import ne.s0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w implements i0 {

    /* renamed from: a  reason: collision with root package name */
    private final m f22081a;

    /* renamed from: b  reason: collision with root package name */
    private final ne.g0 f22082b = new ne.g0(new byte[10]);

    /* renamed from: c  reason: collision with root package name */
    private int f22083c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f22084d;

    /* renamed from: e  reason: collision with root package name */
    private s0 f22085e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f22086f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f22087g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f22088h;

    /* renamed from: i  reason: collision with root package name */
    private int f22089i;

    /* renamed from: j  reason: collision with root package name */
    private int f22090j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f22091k;

    /* renamed from: l  reason: collision with root package name */
    private long f22092l;

    public w(m mVar) {
        this.f22081a = mVar;
    }

    private boolean d(ne.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f22084d);
        if (min <= 0) {
            return true;
        }
        if (bArr == null) {
            h0Var.V(min);
        } else {
            h0Var.l(bArr, this.f22084d, min);
        }
        int i11 = this.f22084d + min;
        this.f22084d = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private boolean e() {
        this.f22082b.p(0);
        int h10 = this.f22082b.h(24);
        if (h10 != 1) {
            ne.y.i("PesReader", "Unexpected start code prefix: " + h10);
            this.f22090j = -1;
            return false;
        }
        this.f22082b.r(8);
        int h11 = this.f22082b.h(16);
        this.f22082b.r(5);
        this.f22091k = this.f22082b.g();
        this.f22082b.r(2);
        this.f22086f = this.f22082b.g();
        this.f22087g = this.f22082b.g();
        this.f22082b.r(6);
        int h12 = this.f22082b.h(8);
        this.f22089i = h12;
        if (h11 == 0) {
            this.f22090j = -1;
        } else {
            int i10 = (h11 - 3) - h12;
            this.f22090j = i10;
            if (i10 < 0) {
                ne.y.i("PesReader", "Found negative packet payload size: " + this.f22090j);
                this.f22090j = -1;
            }
        }
        return true;
    }

    private void f() {
        this.f22082b.p(0);
        this.f22092l = -9223372036854775807L;
        if (this.f22086f) {
            this.f22082b.r(4);
            this.f22082b.r(1);
            this.f22082b.r(1);
            long h10 = (this.f22082b.h(3) << 30) | (this.f22082b.h(15) << 15) | this.f22082b.h(15);
            this.f22082b.r(1);
            if (!this.f22088h && this.f22087g) {
                this.f22082b.r(4);
                this.f22082b.r(1);
                this.f22082b.r(1);
                this.f22082b.r(1);
                this.f22085e.b((this.f22082b.h(3) << 30) | (this.f22082b.h(15) << 15) | this.f22082b.h(15));
                this.f22088h = true;
            }
            this.f22092l = this.f22085e.b(h10);
        }
    }

    private void g(int i10) {
        this.f22083c = i10;
        this.f22084d = 0;
    }

    @Override // dd.i0
    public void a(s0 s0Var, tc.m mVar, i0.d dVar) {
        this.f22085e = s0Var;
        this.f22081a.f(mVar, dVar);
    }

    @Override // dd.i0
    public final void b(ne.h0 h0Var, int i10) {
        ne.a.i(this.f22085e);
        if ((i10 & 1) != 0) {
            int i11 = this.f22083c;
            if (i11 != 0 && i11 != 1) {
                if (i11 != 2) {
                    if (i11 == 3) {
                        if (this.f22090j != -1) {
                            ne.y.i("PesReader", "Unexpected start indicator: expected " + this.f22090j + " more bytes");
                        }
                        this.f22081a.d();
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
            int i12 = this.f22083c;
            if (i12 != 0) {
                int i13 = 0;
                if (i12 != 1) {
                    if (i12 != 2) {
                        if (i12 == 3) {
                            int a10 = h0Var.a();
                            int i14 = this.f22090j;
                            if (i14 != -1) {
                                i13 = a10 - i14;
                            }
                            if (i13 > 0) {
                                a10 -= i13;
                                h0Var.T(h0Var.f() + a10);
                            }
                            this.f22081a.b(h0Var);
                            int i15 = this.f22090j;
                            if (i15 != -1) {
                                int i16 = i15 - a10;
                                this.f22090j = i16;
                                if (i16 == 0) {
                                    this.f22081a.d();
                                    g(1);
                                }
                            }
                        } else {
                            throw new IllegalStateException();
                        }
                    } else {
                        if (d(h0Var, this.f22082b.f40188a, Math.min(10, this.f22089i)) && d(h0Var, null, this.f22089i)) {
                            f();
                            if (this.f22091k) {
                                i13 = 4;
                            }
                            i10 |= i13;
                            this.f22081a.e(this.f22092l, i10);
                            g(3);
                        }
                    }
                } else if (d(h0Var, this.f22082b.f40188a, 9)) {
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
        this.f22083c = 0;
        this.f22084d = 0;
        this.f22088h = false;
        this.f22081a.c();
    }
}
