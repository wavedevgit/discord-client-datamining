package dd;

import dd.i0;
import ne.s0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w implements i0 {

    /* renamed from: a  reason: collision with root package name */
    private final m f21657a;

    /* renamed from: b  reason: collision with root package name */
    private final ne.g0 f21658b = new ne.g0(new byte[10]);

    /* renamed from: c  reason: collision with root package name */
    private int f21659c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f21660d;

    /* renamed from: e  reason: collision with root package name */
    private s0 f21661e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f21662f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f21663g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f21664h;

    /* renamed from: i  reason: collision with root package name */
    private int f21665i;

    /* renamed from: j  reason: collision with root package name */
    private int f21666j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f21667k;

    /* renamed from: l  reason: collision with root package name */
    private long f21668l;

    public w(m mVar) {
        this.f21657a = mVar;
    }

    private boolean d(ne.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f21660d);
        if (min <= 0) {
            return true;
        }
        if (bArr == null) {
            h0Var.V(min);
        } else {
            h0Var.l(bArr, this.f21660d, min);
        }
        int i11 = this.f21660d + min;
        this.f21660d = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private boolean e() {
        this.f21658b.p(0);
        int h10 = this.f21658b.h(24);
        if (h10 != 1) {
            ne.y.i("PesReader", "Unexpected start code prefix: " + h10);
            this.f21666j = -1;
            return false;
        }
        this.f21658b.r(8);
        int h11 = this.f21658b.h(16);
        this.f21658b.r(5);
        this.f21667k = this.f21658b.g();
        this.f21658b.r(2);
        this.f21662f = this.f21658b.g();
        this.f21663g = this.f21658b.g();
        this.f21658b.r(6);
        int h12 = this.f21658b.h(8);
        this.f21665i = h12;
        if (h11 == 0) {
            this.f21666j = -1;
        } else {
            int i10 = (h11 - 3) - h12;
            this.f21666j = i10;
            if (i10 < 0) {
                ne.y.i("PesReader", "Found negative packet payload size: " + this.f21666j);
                this.f21666j = -1;
            }
        }
        return true;
    }

    private void f() {
        this.f21658b.p(0);
        this.f21668l = -9223372036854775807L;
        if (this.f21662f) {
            this.f21658b.r(4);
            this.f21658b.r(1);
            this.f21658b.r(1);
            long h10 = (this.f21658b.h(3) << 30) | (this.f21658b.h(15) << 15) | this.f21658b.h(15);
            this.f21658b.r(1);
            if (!this.f21664h && this.f21663g) {
                this.f21658b.r(4);
                this.f21658b.r(1);
                this.f21658b.r(1);
                this.f21658b.r(1);
                this.f21661e.b((this.f21658b.h(3) << 30) | (this.f21658b.h(15) << 15) | this.f21658b.h(15));
                this.f21664h = true;
            }
            this.f21668l = this.f21661e.b(h10);
        }
    }

    private void g(int i10) {
        this.f21659c = i10;
        this.f21660d = 0;
    }

    @Override // dd.i0
    public void a(s0 s0Var, tc.m mVar, i0.d dVar) {
        this.f21661e = s0Var;
        this.f21657a.f(mVar, dVar);
    }

    @Override // dd.i0
    public final void b(ne.h0 h0Var, int i10) {
        ne.a.i(this.f21661e);
        if ((i10 & 1) != 0) {
            int i11 = this.f21659c;
            if (i11 != 0 && i11 != 1) {
                if (i11 != 2) {
                    if (i11 == 3) {
                        if (this.f21666j != -1) {
                            ne.y.i("PesReader", "Unexpected start indicator: expected " + this.f21666j + " more bytes");
                        }
                        this.f21657a.d();
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
            int i12 = this.f21659c;
            if (i12 != 0) {
                int i13 = 0;
                if (i12 != 1) {
                    if (i12 != 2) {
                        if (i12 == 3) {
                            int a10 = h0Var.a();
                            int i14 = this.f21666j;
                            if (i14 != -1) {
                                i13 = a10 - i14;
                            }
                            if (i13 > 0) {
                                a10 -= i13;
                                h0Var.T(h0Var.f() + a10);
                            }
                            this.f21657a.b(h0Var);
                            int i15 = this.f21666j;
                            if (i15 != -1) {
                                int i16 = i15 - a10;
                                this.f21666j = i16;
                                if (i16 == 0) {
                                    this.f21657a.d();
                                    g(1);
                                }
                            }
                        } else {
                            throw new IllegalStateException();
                        }
                    } else {
                        if (d(h0Var, this.f21658b.f40067a, Math.min(10, this.f21665i)) && d(h0Var, null, this.f21665i)) {
                            f();
                            if (this.f21667k) {
                                i13 = 4;
                            }
                            i10 |= i13;
                            this.f21657a.e(this.f21668l, i10);
                            g(3);
                        }
                    }
                } else if (d(h0Var, this.f21658b.f40067a, 9)) {
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
        this.f21659c = 0;
        this.f21660d = 0;
        this.f21664h = false;
        this.f21657a.c();
    }
}
