package qd;

import com.google.android.exoplayer2.Format;
import kotlin.jvm.internal.LongCompanionObject;
import qd.l0;
import rc.n;
import rc.u;
import rc.v;
import tc.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class l0 implements tc.b0 {
    private Format A;
    private Format B;
    private long C;
    private boolean D;
    private boolean E;
    private long F;
    private boolean G;

    /* renamed from: a  reason: collision with root package name */
    private final j0 f47706a;

    /* renamed from: d  reason: collision with root package name */
    private final rc.v f47709d;

    /* renamed from: e  reason: collision with root package name */
    private final u.a f47710e;

    /* renamed from: f  reason: collision with root package name */
    private d f47711f;

    /* renamed from: g  reason: collision with root package name */
    private Format f47712g;

    /* renamed from: h  reason: collision with root package name */
    private rc.n f47713h;

    /* renamed from: p  reason: collision with root package name */
    private int f47721p;

    /* renamed from: q  reason: collision with root package name */
    private int f47722q;

    /* renamed from: r  reason: collision with root package name */
    private int f47723r;

    /* renamed from: s  reason: collision with root package name */
    private int f47724s;

    /* renamed from: w  reason: collision with root package name */
    private boolean f47728w;

    /* renamed from: z  reason: collision with root package name */
    private boolean f47731z;

    /* renamed from: b  reason: collision with root package name */
    private final b f47707b = new b();

    /* renamed from: i  reason: collision with root package name */
    private int f47714i = 1000;

    /* renamed from: j  reason: collision with root package name */
    private long[] f47715j = new long[1000];

    /* renamed from: k  reason: collision with root package name */
    private long[] f47716k = new long[1000];

    /* renamed from: n  reason: collision with root package name */
    private long[] f47719n = new long[1000];

    /* renamed from: m  reason: collision with root package name */
    private int[] f47718m = new int[1000];

    /* renamed from: l  reason: collision with root package name */
    private int[] f47717l = new int[1000];

    /* renamed from: o  reason: collision with root package name */
    private b0.a[] f47720o = new b0.a[1000];

    /* renamed from: c  reason: collision with root package name */
    private final s0 f47708c = new s0(new ne.i() { // from class: qd.k0
        @Override // ne.i
        public final void accept(Object obj) {
            ((l0.c) obj).f47736b.release();
        }
    });

    /* renamed from: t  reason: collision with root package name */
    private long f47725t = Long.MIN_VALUE;

    /* renamed from: u  reason: collision with root package name */
    private long f47726u = Long.MIN_VALUE;

    /* renamed from: v  reason: collision with root package name */
    private long f47727v = Long.MIN_VALUE;

    /* renamed from: y  reason: collision with root package name */
    private boolean f47730y = true;

    /* renamed from: x  reason: collision with root package name */
    private boolean f47729x = true;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public int f47732a;

        /* renamed from: b  reason: collision with root package name */
        public long f47733b;

        /* renamed from: c  reason: collision with root package name */
        public b0.a f47734c;

        b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final Format f47735a;

        /* renamed from: b  reason: collision with root package name */
        public final v.b f47736b;

        private c(Format format, v.b bVar) {
            this.f47735a = format;
            this.f47736b = bVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface d {
        void a(Format format);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public l0(le.b bVar, rc.v vVar, u.a aVar) {
        this.f47709d = vVar;
        this.f47710e = aVar;
        this.f47706a = new j0(bVar);
    }

    private long B(int i10) {
        long j10 = Long.MIN_VALUE;
        if (i10 == 0) {
            return Long.MIN_VALUE;
        }
        int D = D(i10 - 1);
        for (int i11 = 0; i11 < i10; i11++) {
            j10 = Math.max(j10, this.f47719n[D]);
            if ((this.f47718m[D] & 1) != 0) {
                return j10;
            }
            D--;
            if (D == -1) {
                D = this.f47714i - 1;
            }
        }
        return j10;
    }

    private int D(int i10) {
        int i11 = this.f47723r + i10;
        int i12 = this.f47714i;
        if (i11 < i12) {
            return i11;
        }
        return i11 - i12;
    }

    private boolean H() {
        if (this.f47724s != this.f47721p) {
            return true;
        }
        return false;
    }

    private boolean L(int i10) {
        rc.n nVar = this.f47713h;
        if (nVar != null && nVar.getState() != 4) {
            if ((this.f47718m[i10] & 1073741824) != 0 || !this.f47713h.c()) {
                return false;
            }
            return true;
        }
        return true;
    }

    private void N(Format format, lc.x xVar) {
        boolean z10;
        rc.m mVar;
        Format format2;
        Format format3 = this.f47712g;
        if (format3 == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            mVar = null;
        } else {
            mVar = format3.f11691z;
        }
        this.f47712g = format;
        rc.m mVar2 = format.f11691z;
        rc.v vVar = this.f47709d;
        if (vVar != null) {
            format2 = format.c(vVar.b(format));
        } else {
            format2 = format;
        }
        xVar.f36636b = format2;
        xVar.f36635a = this.f47713h;
        if (this.f47709d != null) {
            if (z10 || !ne.w0.c(mVar, mVar2)) {
                rc.n nVar = this.f47713h;
                rc.n c10 = this.f47709d.c(this.f47710e, format);
                this.f47713h = c10;
                xVar.f36635a = c10;
                if (nVar != null) {
                    nVar.b(this.f47710e);
                }
            }
        }
    }

    private synchronized int O(lc.x xVar, qc.f fVar, boolean z10, boolean z11, b bVar) {
        try {
            fVar.f47562o = false;
            if (!H()) {
                if (!z11 && !this.f47728w) {
                    Format format = this.B;
                    if (format == null || (!z10 && format == this.f47712g)) {
                        return -3;
                    }
                    N((Format) ne.a.e(format), xVar);
                    return -5;
                }
                fVar.s(4);
                return -4;
            }
            Format format2 = ((c) this.f47708c.e(C())).f47735a;
            if (!z10 && format2 == this.f47712g) {
                int D = D(this.f47724s);
                if (!L(D)) {
                    fVar.f47562o = true;
                    return -3;
                }
                fVar.s(this.f47718m[D]);
                if (this.f47724s == this.f47721p - 1 && (z11 || this.f47728w)) {
                    fVar.g(536870912);
                }
                long j10 = this.f47719n[D];
                fVar.f47563p = j10;
                if (j10 < this.f47725t) {
                    fVar.g(Integer.MIN_VALUE);
                }
                bVar.f47732a = this.f47717l[D];
                bVar.f47733b = this.f47716k[D];
                bVar.f47734c = this.f47720o[D];
                return -4;
            }
            N(format2, xVar);
            return -5;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    private void T() {
        rc.n nVar = this.f47713h;
        if (nVar != null) {
            nVar.b(this.f47710e);
            this.f47713h = null;
            this.f47712g = null;
        }
    }

    private synchronized void W() {
        this.f47724s = 0;
        this.f47706a.o();
    }

    private synchronized boolean b0(Format format) {
        try {
            this.f47730y = false;
            if (ne.w0.c(format, this.B)) {
                return false;
            }
            if (!this.f47708c.g() && ((c) this.f47708c.f()).f47735a.equals(format)) {
                this.B = ((c) this.f47708c.f()).f47735a;
            } else {
                this.B = format;
            }
            Format format2 = this.B;
            this.D = ne.c0.a(format2.f11688w, format2.f11685t);
            this.E = false;
            return true;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    private synchronized boolean h(long j10) {
        boolean z10 = false;
        if (this.f47721p == 0) {
            if (j10 > this.f47726u) {
                z10 = true;
            }
            return z10;
        } else if (A() >= j10) {
            return false;
        } else {
            t(this.f47722q + j(j10));
            return true;
        }
    }

    private synchronized void i(long j10, int i10, long j11, int i11, b0.a aVar) {
        boolean z10;
        v.b bVar;
        int D;
        boolean z11;
        try {
            int i12 = this.f47721p;
            if (i12 > 0) {
                if (this.f47716k[D(i12 - 1)] + this.f47717l[D] <= j11) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                ne.a.a(z11);
            }
            if ((536870912 & i10) != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f47728w = z10;
            this.f47727v = Math.max(this.f47727v, j10);
            int D2 = D(this.f47721p);
            this.f47719n[D2] = j10;
            this.f47716k[D2] = j11;
            this.f47717l[D2] = i11;
            this.f47718m[D2] = i10;
            this.f47720o[D2] = aVar;
            this.f47715j[D2] = this.C;
            if (this.f47708c.g() || !((c) this.f47708c.f()).f47735a.equals(this.B)) {
                rc.v vVar = this.f47709d;
                if (vVar != null) {
                    bVar = vVar.e(this.f47710e, this.B);
                } else {
                    bVar = v.b.f48782a;
                }
                this.f47708c.a(G(), new c((Format) ne.a.e(this.B), bVar));
            }
            int i13 = this.f47721p + 1;
            this.f47721p = i13;
            int i14 = this.f47714i;
            if (i13 == i14) {
                int i15 = i14 + 1000;
                long[] jArr = new long[i15];
                long[] jArr2 = new long[i15];
                long[] jArr3 = new long[i15];
                int[] iArr = new int[i15];
                int[] iArr2 = new int[i15];
                b0.a[] aVarArr = new b0.a[i15];
                int i16 = this.f47723r;
                int i17 = i14 - i16;
                System.arraycopy(this.f47716k, i16, jArr2, 0, i17);
                System.arraycopy(this.f47719n, this.f47723r, jArr3, 0, i17);
                System.arraycopy(this.f47718m, this.f47723r, iArr, 0, i17);
                System.arraycopy(this.f47717l, this.f47723r, iArr2, 0, i17);
                System.arraycopy(this.f47720o, this.f47723r, aVarArr, 0, i17);
                System.arraycopy(this.f47715j, this.f47723r, jArr, 0, i17);
                int i18 = this.f47723r;
                System.arraycopy(this.f47716k, 0, jArr2, i17, i18);
                System.arraycopy(this.f47719n, 0, jArr3, i17, i18);
                System.arraycopy(this.f47718m, 0, iArr, i17, i18);
                System.arraycopy(this.f47717l, 0, iArr2, i17, i18);
                System.arraycopy(this.f47720o, 0, aVarArr, i17, i18);
                System.arraycopy(this.f47715j, 0, jArr, i17, i18);
                this.f47716k = jArr2;
                this.f47719n = jArr3;
                this.f47718m = iArr;
                this.f47717l = iArr2;
                this.f47720o = aVarArr;
                this.f47715j = jArr;
                this.f47723r = 0;
                this.f47714i = i15;
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    private int j(long j10) {
        int i10 = this.f47721p;
        int D = D(i10 - 1);
        while (i10 > this.f47724s && this.f47719n[D] >= j10) {
            i10--;
            D--;
            if (D == -1) {
                D = this.f47714i - 1;
            }
        }
        return i10;
    }

    public static l0 k(le.b bVar, rc.v vVar, u.a aVar) {
        return new l0(bVar, (rc.v) ne.a.e(vVar), (u.a) ne.a.e(aVar));
    }

    public static l0 l(le.b bVar) {
        return new l0(bVar, null, null);
    }

    private synchronized long m(long j10, boolean z10, boolean z11) {
        Throwable th2;
        try {
            try {
                int i10 = this.f47721p;
                if (i10 != 0) {
                    long[] jArr = this.f47719n;
                    int i11 = this.f47723r;
                    if (j10 >= jArr[i11]) {
                        if (z11) {
                            try {
                                int i12 = this.f47724s;
                                if (i12 != i10) {
                                    i10 = i12 + 1;
                                }
                            } catch (Throwable th3) {
                                th2 = th3;
                                throw th2;
                            }
                        }
                        int v10 = v(i11, i10, j10, z10);
                        if (v10 == -1) {
                            return -1L;
                        }
                        return p(v10);
                    }
                }
                return -1L;
            } catch (Throwable th4) {
                th = th4;
                th2 = th;
                throw th2;
            }
        } catch (Throwable th5) {
            th = th5;
            th2 = th;
            throw th2;
        }
    }

    private synchronized long n() {
        int i10 = this.f47721p;
        if (i10 == 0) {
            return -1L;
        }
        return p(i10);
    }

    private long p(int i10) {
        int i11;
        this.f47726u = Math.max(this.f47726u, B(i10));
        this.f47721p -= i10;
        int i12 = this.f47722q + i10;
        this.f47722q = i12;
        int i13 = this.f47723r + i10;
        this.f47723r = i13;
        int i14 = this.f47714i;
        if (i13 >= i14) {
            this.f47723r = i13 - i14;
        }
        int i15 = this.f47724s - i10;
        this.f47724s = i15;
        if (i15 < 0) {
            this.f47724s = 0;
        }
        this.f47708c.d(i12);
        if (this.f47721p == 0) {
            int i16 = this.f47723r;
            if (i16 == 0) {
                i16 = this.f47714i;
            }
            return this.f47716k[i16 - 1] + this.f47717l[i11];
        }
        return this.f47716k[this.f47723r];
    }

    private long t(int i10) {
        boolean z10;
        int D;
        int G = G() - i10;
        boolean z11 = false;
        if (G >= 0 && G <= this.f47721p - this.f47724s) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        int i11 = this.f47721p - G;
        this.f47721p = i11;
        this.f47727v = Math.max(this.f47726u, B(i11));
        if (G == 0 && this.f47728w) {
            z11 = true;
        }
        this.f47728w = z11;
        this.f47708c.c(i10);
        int i12 = this.f47721p;
        if (i12 != 0) {
            return this.f47716k[D(i12 - 1)] + this.f47717l[D];
        }
        return 0L;
    }

    private int v(int i10, int i11, long j10, boolean z10) {
        int i12 = -1;
        for (int i13 = 0; i13 < i11; i13++) {
            long j11 = this.f47719n[i10];
            if (j11 > j10) {
                break;
            }
            if (!z10 || (this.f47718m[i10] & 1) != 0) {
                if (j11 == j10) {
                    return i13;
                }
                i12 = i13;
            }
            i10++;
            if (i10 == this.f47714i) {
                i10 = 0;
            }
        }
        return i12;
    }

    public final synchronized long A() {
        return Math.max(this.f47726u, B(this.f47724s));
    }

    public final int C() {
        return this.f47722q + this.f47724s;
    }

    public final synchronized int E(long j10, boolean z10) {
        Throwable th2;
        try {
            try {
                int D = D(this.f47724s);
                if (!H() || j10 < this.f47719n[D]) {
                    return 0;
                }
                if (j10 > this.f47727v && z10) {
                    try {
                        return this.f47721p - this.f47724s;
                    } catch (Throwable th3) {
                        th2 = th3;
                        throw th2;
                    }
                }
                int v10 = v(D, this.f47721p - this.f47724s, j10, true);
                if (v10 == -1) {
                    return 0;
                }
                return v10;
            } catch (Throwable th4) {
                th = th4;
                th2 = th;
                throw th2;
            }
        } catch (Throwable th5) {
            th = th5;
        }
    }

    public final synchronized Format F() {
        Format format;
        if (this.f47730y) {
            format = null;
        } else {
            format = this.B;
        }
        return format;
    }

    public final int G() {
        return this.f47722q + this.f47721p;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void I() {
        this.f47731z = true;
    }

    public final synchronized boolean J() {
        return this.f47728w;
    }

    public synchronized boolean K(boolean z10) {
        Format format;
        boolean z11 = true;
        if (!H()) {
            if (!z10 && !this.f47728w && ((format = this.B) == null || format == this.f47712g)) {
                z11 = false;
            }
            return z11;
        } else if (((c) this.f47708c.e(C())).f47735a != this.f47712g) {
            return true;
        } else {
            return L(D(this.f47724s));
        }
    }

    public void M() {
        rc.n nVar = this.f47713h;
        if (nVar != null && nVar.getState() == 1) {
            throw ((n.a) ne.a.e(this.f47713h.getError()));
        }
    }

    public final synchronized long P() {
        long j10;
        try {
            int D = D(this.f47724s);
            if (H()) {
                j10 = this.f47715j[D];
            } else {
                j10 = this.C;
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return j10;
    }

    public void Q() {
        r();
        T();
    }

    public int R(lc.x xVar, qc.f fVar, int i10, boolean z10) {
        boolean z11;
        boolean z12 = false;
        if ((i10 & 2) != 0) {
            z11 = true;
        } else {
            z11 = false;
        }
        int O = O(xVar, fVar, z11, z10, this.f47707b);
        if (O == -4 && !fVar.n()) {
            if ((i10 & 1) != 0) {
                z12 = true;
            }
            if ((i10 & 4) == 0) {
                if (z12) {
                    this.f47706a.f(fVar, this.f47707b);
                } else {
                    this.f47706a.m(fVar, this.f47707b);
                }
            }
            if (!z12) {
                this.f47724s++;
            }
        }
        return O;
    }

    public void S() {
        V(true);
        T();
    }

    public final void U() {
        V(false);
    }

    public void V(boolean z10) {
        this.f47706a.n();
        this.f47721p = 0;
        this.f47722q = 0;
        this.f47723r = 0;
        this.f47724s = 0;
        this.f47729x = true;
        this.f47725t = Long.MIN_VALUE;
        this.f47726u = Long.MIN_VALUE;
        this.f47727v = Long.MIN_VALUE;
        this.f47728w = false;
        this.f47708c.b();
        if (z10) {
            this.A = null;
            this.B = null;
            this.f47730y = true;
        }
    }

    public final synchronized boolean X(int i10) {
        W();
        int i11 = this.f47722q;
        if (i10 >= i11 && i10 <= this.f47721p + i11) {
            this.f47725t = Long.MIN_VALUE;
            this.f47724s = i10 - i11;
            return true;
        }
        return false;
    }

    public final synchronized boolean Y(long j10, boolean z10) {
        try {
            try {
                W();
                int D = D(this.f47724s);
                if (!H() || j10 < this.f47719n[D] || (j10 > this.f47727v && !z10)) {
                    return false;
                }
                int v10 = v(D, this.f47721p - this.f47724s, j10, true);
                if (v10 == -1) {
                    return false;
                }
                this.f47725t = j10;
                this.f47724s += v10;
                return true;
            } catch (Throwable th2) {
                th = th2;
                throw th;
            }
        } catch (Throwable th3) {
            th = th3;
        }
    }

    public final void Z(long j10) {
        if (this.F != j10) {
            this.F = j10;
            I();
        }
    }

    public final void a0(long j10) {
        this.f47725t = j10;
    }

    @Override // tc.b0
    public final void b(Format format) {
        Format w10 = w(format);
        this.f47731z = false;
        this.A = format;
        boolean b02 = b0(w10);
        d dVar = this.f47711f;
        if (dVar != null && b02) {
            dVar.a(w10);
        }
    }

    @Override // tc.b0
    public final int c(le.j jVar, int i10, boolean z10, int i11) {
        return this.f47706a.p(jVar, i10, z10);
    }

    public final void c0(d dVar) {
        this.f47711f = dVar;
    }

    /* JADX WARN: Removed duplicated region for block: B:27:0x0058  */
    @Override // tc.b0
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void d(long r12, int r14, int r15, int r16, tc.b0.a r17) {
        /*
            r11 = this;
            boolean r1 = r11.f47731z
            if (r1 == 0) goto Lf
            com.google.android.exoplayer2.Format r1 = r11.A
            java.lang.Object r1 = ne.a.i(r1)
            com.google.android.exoplayer2.Format r1 = (com.google.android.exoplayer2.Format) r1
            r11.b(r1)
        Lf:
            r1 = r14 & 1
            r2 = 0
            r3 = 1
            if (r1 == 0) goto L17
            r4 = r3
            goto L18
        L17:
            r4 = r2
        L18:
            boolean r5 = r11.f47729x
            if (r5 == 0) goto L21
            if (r4 != 0) goto L1f
            goto L64
        L1f:
            r11.f47729x = r2
        L21:
            long r5 = r11.F
            long r5 = r5 + r12
            boolean r7 = r11.D
            if (r7 == 0) goto L53
            long r7 = r11.f47725t
            int r7 = (r5 > r7 ? 1 : (r5 == r7 ? 0 : -1))
            if (r7 >= 0) goto L2f
            goto L64
        L2f:
            if (r1 != 0) goto L53
            boolean r1 = r11.E
            if (r1 != 0) goto L4f
            java.lang.StringBuilder r1 = new java.lang.StringBuilder
            r1.<init>()
            java.lang.String r7 = "Overriding unexpected non-sync sample for format: "
            r1.append(r7)
            com.google.android.exoplayer2.Format r7 = r11.B
            r1.append(r7)
            java.lang.String r1 = r1.toString()
            java.lang.String r7 = "SampleQueue"
            ne.y.i(r7, r1)
            r11.E = r3
        L4f:
            r1 = r14 | 1
            r3 = r1
            goto L54
        L53:
            r3 = r14
        L54:
            boolean r1 = r11.G
            if (r1 == 0) goto L65
            if (r4 == 0) goto L64
            boolean r1 = r11.h(r5)
            if (r1 != 0) goto L61
            goto L64
        L61:
            r11.G = r2
            goto L65
        L64:
            return
        L65:
            qd.j0 r1 = r11.f47706a
            long r1 = r1.e()
            long r7 = (long) r15
            long r1 = r1 - r7
            r7 = r16
            long r7 = (long) r7
            long r1 = r1 - r7
            r9 = r5
            r4 = r1
            r1 = r9
            r0 = r11
            r6 = r15
            r7 = r17
            r0.i(r1, r3, r4, r6, r7)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: qd.l0.d(long, int, int, int, tc.b0$a):void");
    }

    public final synchronized void d0(int i10) {
        boolean z10;
        if (i10 >= 0) {
            try {
                if (this.f47724s + i10 <= this.f47721p) {
                    z10 = true;
                    ne.a.a(z10);
                    this.f47724s += i10;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        z10 = false;
        ne.a.a(z10);
        this.f47724s += i10;
    }

    @Override // tc.b0
    public final void e(ne.h0 h0Var, int i10, int i11) {
        this.f47706a.q(h0Var, i10);
    }

    public final void e0(long j10) {
        this.C = j10;
    }

    public final void f0() {
        this.G = true;
    }

    public synchronized long o() {
        int i10 = this.f47724s;
        if (i10 == 0) {
            return -1L;
        }
        return p(i10);
    }

    public final void q(long j10, boolean z10, boolean z11) {
        this.f47706a.b(m(j10, z10, z11));
    }

    public final void r() {
        this.f47706a.b(n());
    }

    public final void s() {
        this.f47706a.b(o());
    }

    public final void u(int i10) {
        this.f47706a.c(t(i10));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public Format w(Format format) {
        if (this.F != 0 && format.A != LongCompanionObject.MAX_VALUE) {
            return format.b().k0(format.A + this.F).G();
        }
        return format;
    }

    public final int x() {
        return this.f47722q;
    }

    public final synchronized long y() {
        long j10;
        if (this.f47721p == 0) {
            j10 = Long.MIN_VALUE;
        } else {
            j10 = this.f47719n[this.f47723r];
        }
        return j10;
    }

    public final synchronized long z() {
        return this.f47727v;
    }
}
