package rd;

import com.google.android.exoplayer2.Format;
import kotlin.jvm.internal.LongCompanionObject;
import rd.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d implements p, p.a {

    /* renamed from: d  reason: collision with root package name */
    public final p f46841d;

    /* renamed from: e  reason: collision with root package name */
    private p.a f46842e;

    /* renamed from: i  reason: collision with root package name */
    private a[] f46843i = new a[0];

    /* renamed from: o  reason: collision with root package name */
    private long f46844o;

    /* renamed from: p  reason: collision with root package name */
    long f46845p;

    /* renamed from: q  reason: collision with root package name */
    long f46846q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class a implements m0 {

        /* renamed from: d  reason: collision with root package name */
        public final m0 f46847d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f46848e;

        public a(m0 m0Var) {
            this.f46847d = m0Var;
        }

        @Override // rd.m0
        public void a() {
            this.f46847d.a();
        }

        public void b() {
            this.f46848e = false;
        }

        @Override // rd.m0
        public int c(mc.x xVar, rc.f fVar, int i10) {
            if (d.this.n()) {
                return -3;
            }
            if (this.f46848e) {
                fVar.s(4);
                return -4;
            }
            long g10 = d.this.g();
            int c10 = this.f46847d.c(xVar, fVar, i10);
            if (c10 == -5) {
                Format format = (Format) oe.a.e(xVar.f36851b);
                int i11 = format.M;
                if (i11 != 0 || format.N != 0) {
                    d dVar = d.this;
                    int i12 = 0;
                    if (dVar.f46845p != 0) {
                        i11 = 0;
                    }
                    if (dVar.f46846q == Long.MIN_VALUE) {
                        i12 = format.N;
                    }
                    xVar.f36851b = format.b().P(i11).Q(i12).G();
                }
                return -5;
            }
            long j10 = d.this.f46846q;
            if (j10 != Long.MIN_VALUE && ((c10 == -4 && fVar.f46800p >= j10) || (c10 == -3 && g10 == Long.MIN_VALUE && !fVar.f46799o))) {
                fVar.h();
                fVar.s(4);
                this.f46848e = true;
                return -4;
            }
            return c10;
        }

        @Override // rd.m0
        public boolean isReady() {
            if (!d.this.n() && this.f46847d.isReady()) {
                return true;
            }
            return false;
        }

        @Override // rd.m0
        public int j(long j10) {
            if (d.this.n()) {
                return -3;
            }
            return this.f46847d.j(j10);
        }
    }

    public d(p pVar, boolean z10, long j10, long j11) {
        long j12;
        this.f46841d = pVar;
        if (z10) {
            j12 = j10;
        } else {
            j12 = -9223372036854775807L;
        }
        this.f46844o = j12;
        this.f46845p = j10;
        this.f46846q = j11;
    }

    private mc.t0 a(long j10, mc.t0 t0Var) {
        long j11;
        long r10 = oe.w0.r(t0Var.f36845a, 0L, j10 - this.f46845p);
        long j12 = t0Var.f36846b;
        long j13 = this.f46846q;
        if (j13 == Long.MIN_VALUE) {
            j11 = LongCompanionObject.MAX_VALUE;
        } else {
            j11 = j13 - j10;
        }
        long r11 = oe.w0.r(j12, 0L, j11);
        if (r10 == t0Var.f36845a && r11 == t0Var.f36846b) {
            return t0Var;
        }
        return new mc.t0(r10, r11);
    }

    private static boolean q(long j10, com.google.android.exoplayer2.trackselection.g[] gVarArr) {
        if (j10 != 0) {
            for (com.google.android.exoplayer2.trackselection.g gVar : gVarArr) {
                if (gVar != null) {
                    Format q10 = gVar.q();
                    if (!oe.c0.a(q10.f12305w, q10.f12302t)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    @Override // rd.p, rd.n0
    public long b() {
        long b10 = this.f46841d.b();
        if (b10 != Long.MIN_VALUE) {
            long j10 = this.f46846q;
            if (j10 == Long.MIN_VALUE || b10 < j10) {
                return b10;
            }
        }
        return Long.MIN_VALUE;
    }

    @Override // rd.p, rd.n0
    public boolean d() {
        return this.f46841d.d();
    }

    @Override // rd.p
    public long e(long j10, mc.t0 t0Var) {
        long j11 = this.f46845p;
        if (j10 == j11) {
            return j11;
        }
        return this.f46841d.e(j10, a(j10, t0Var));
    }

    @Override // rd.p, rd.n0
    public boolean f(long j10) {
        return this.f46841d.f(j10);
    }

    @Override // rd.p, rd.n0
    public long g() {
        long g10 = this.f46841d.g();
        if (g10 != Long.MIN_VALUE) {
            long j10 = this.f46846q;
            if (j10 == Long.MIN_VALUE || g10 < j10) {
                return g10;
            }
        }
        return Long.MIN_VALUE;
    }

    @Override // rd.p, rd.n0
    public void h(long j10) {
        this.f46841d.h(j10);
    }

    @Override // rd.p.a
    public void j(p pVar) {
        ((p.a) oe.a.e(this.f46842e)).j(this);
    }

    /* JADX WARN: Code restructure failed: missing block: B:15:0x0032, code lost:
        if (r0 > r6) goto L18;
     */
    @Override // rd.p
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public long l(long r6) {
        /*
            r5 = this;
            r0 = -9223372036854775807(0x8000000000000001, double:-4.9E-324)
            r5.f46844o = r0
            rd.d$a[] r0 = r5.f46843i
            int r1 = r0.length
            r2 = 0
            r3 = r2
        Lc:
            if (r3 >= r1) goto L18
            r4 = r0[r3]
            if (r4 == 0) goto L15
            r4.b()
        L15:
            int r3 = r3 + 1
            goto Lc
        L18:
            rd.p r0 = r5.f46841d
            long r0 = r0.l(r6)
            int r6 = (r0 > r6 ? 1 : (r0 == r6 ? 0 : -1))
            if (r6 == 0) goto L34
            long r6 = r5.f46845p
            int r6 = (r0 > r6 ? 1 : (r0 == r6 ? 0 : -1))
            if (r6 < 0) goto L35
            long r6 = r5.f46846q
            r3 = -9223372036854775808
            int r3 = (r6 > r3 ? 1 : (r6 == r3 ? 0 : -1))
            if (r3 == 0) goto L34
            int r6 = (r0 > r6 ? 1 : (r0 == r6 ? 0 : -1))
            if (r6 > 0) goto L35
        L34:
            r2 = 1
        L35:
            oe.a.g(r2)
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: rd.d.l(long):long");
    }

    @Override // rd.p
    public long m() {
        boolean z10;
        if (n()) {
            long j10 = this.f46844o;
            this.f46844o = -9223372036854775807L;
            long m10 = m();
            if (m10 != -9223372036854775807L) {
                return m10;
            }
            return j10;
        }
        long m11 = this.f46841d.m();
        if (m11 == -9223372036854775807L) {
            return -9223372036854775807L;
        }
        boolean z11 = false;
        if (m11 >= this.f46845p) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        long j11 = this.f46846q;
        if (j11 == Long.MIN_VALUE || m11 <= j11) {
            z11 = true;
        }
        oe.a.g(z11);
        return m11;
    }

    boolean n() {
        if (this.f46844o != -9223372036854775807L) {
            return true;
        }
        return false;
    }

    @Override // rd.n0.a
    /* renamed from: o */
    public void i(p pVar) {
        ((p.a) oe.a.e(this.f46842e)).i(this);
    }

    @Override // rd.p
    public void p() {
        this.f46841d.p();
    }

    /* JADX WARN: Code restructure failed: missing block: B:24:0x0058, code lost:
        if (r10 > r13) goto L26;
     */
    /* JADX WARN: Removed duplicated region for block: B:19:0x0048  */
    /* JADX WARN: Removed duplicated region for block: B:31:0x0064  */
    @Override // rd.p
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public long r(com.google.android.exoplayer2.trackselection.g[] r10, boolean[] r11, rd.m0[] r12, boolean[] r13, long r14) {
        /*
            r9 = this;
            int r0 = r12.length
            rd.d$a[] r0 = new rd.d.a[r0]
            r9.f46843i = r0
            int r0 = r12.length
            rd.m0[] r4 = new rd.m0[r0]
            r0 = 0
            r1 = r0
        La:
            int r2 = r12.length
            r8 = 0
            if (r1 >= r2) goto L1f
            rd.d$a[] r2 = r9.f46843i
            r3 = r12[r1]
            rd.d$a r3 = (rd.d.a) r3
            r2[r1] = r3
            if (r3 == 0) goto L1a
            rd.m0 r8 = r3.f46847d
        L1a:
            r4[r1] = r8
            int r1 = r1 + 1
            goto La
        L1f:
            rd.p r1 = r9.f46841d
            r2 = r10
            r3 = r11
            r5 = r13
            r6 = r14
            long r10 = r1.r(r2, r3, r4, r5, r6)
            boolean r13 = r9.n()
            if (r13 == 0) goto L3d
            long r13 = r9.f46845p
            int r15 = (r6 > r13 ? 1 : (r6 == r13 ? 0 : -1))
            if (r15 != 0) goto L3d
            boolean r13 = q(r13, r2)
            if (r13 == 0) goto L3d
            r13 = r10
            goto L42
        L3d:
            r13 = -9223372036854775807(0x8000000000000001, double:-4.9E-324)
        L42:
            r9.f46844o = r13
            int r13 = (r10 > r6 ? 1 : (r10 == r6 ? 0 : -1))
            if (r13 == 0) goto L5d
            long r13 = r9.f46845p
            int r13 = (r10 > r13 ? 1 : (r10 == r13 ? 0 : -1))
            if (r13 < 0) goto L5b
            long r13 = r9.f46846q
            r1 = -9223372036854775808
            int r15 = (r13 > r1 ? 1 : (r13 == r1 ? 0 : -1))
            if (r15 == 0) goto L5d
            int r13 = (r10 > r13 ? 1 : (r10 == r13 ? 0 : -1))
            if (r13 > 0) goto L5b
            goto L5d
        L5b:
            r13 = r0
            goto L5e
        L5d:
            r13 = 1
        L5e:
            oe.a.g(r13)
        L61:
            int r13 = r12.length
            if (r0 >= r13) goto L87
            r13 = r4[r0]
            if (r13 != 0) goto L6d
            rd.d$a[] r13 = r9.f46843i
            r13[r0] = r8
            goto L7e
        L6d:
            rd.d$a[] r14 = r9.f46843i
            r15 = r14[r0]
            if (r15 == 0) goto L77
            rd.m0 r15 = r15.f46847d
            if (r15 == r13) goto L7e
        L77:
            rd.d$a r15 = new rd.d$a
            r15.<init>(r13)
            r14[r0] = r15
        L7e:
            rd.d$a[] r13 = r9.f46843i
            r13 = r13[r0]
            r12[r0] = r13
            int r0 = r0 + 1
            goto L61
        L87:
            return r10
        */
        throw new UnsupportedOperationException("Method not decompiled: rd.d.r(com.google.android.exoplayer2.trackselection.g[], boolean[], rd.m0[], boolean[], long):long");
    }

    @Override // rd.p
    public w0 s() {
        return this.f46841d.s();
    }

    @Override // rd.p
    public void t(long j10, boolean z10) {
        this.f46841d.t(j10, z10);
    }

    @Override // rd.p
    public void u(p.a aVar, long j10) {
        this.f46842e = aVar;
        this.f46841d.u(this, j10);
    }

    public void v(long j10, long j11) {
        this.f46845p = j10;
        this.f46846q = j11;
    }
}
