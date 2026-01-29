package qd;

import android.net.Uri;
import android.os.Handler;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.metadata.Metadata;
import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.source.MediaLoadData;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.a;
import com.google.android.exoplayer2.upstream.h;
import com.google.android.exoplayer2.upstream.i;
import java.io.IOException;
import java.io.InterruptedIOException;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import kotlin.jvm.internal.LongCompanionObject;
import qd.l0;
import qd.m;
import qd.p;
import qd.y;
import rc.u;
import tc.z;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g0 implements p, tc.m, i.b, i.f, l0.d {
    private static final Map X = L();
    private static final Format Y = new Format.b().U("icy").g0("application/x-icy").G();
    private p.a B;
    private kd.b C;
    private boolean F;
    private boolean G;
    private boolean H;
    private e I;
    private tc.z J;
    private boolean L;
    private boolean N;
    private boolean O;
    private int P;
    private boolean Q;
    private long R;
    private boolean T;
    private int U;
    private boolean V;
    private boolean W;

    /* renamed from: d  reason: collision with root package name */
    private final Uri f47145d;

    /* renamed from: e  reason: collision with root package name */
    private final DataSource f47146e;

    /* renamed from: i  reason: collision with root package name */
    private final rc.v f47147i;

    /* renamed from: o  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.h f47148o;

    /* renamed from: p  reason: collision with root package name */
    private final y.a f47149p;

    /* renamed from: q  reason: collision with root package name */
    private final u.a f47150q;

    /* renamed from: r  reason: collision with root package name */
    private final b f47151r;

    /* renamed from: s  reason: collision with root package name */
    private final le.b f47152s;

    /* renamed from: t  reason: collision with root package name */
    private final String f47153t;

    /* renamed from: u  reason: collision with root package name */
    private final long f47154u;

    /* renamed from: w  reason: collision with root package name */
    private final b0 f47156w;

    /* renamed from: v  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f47155v = new com.google.android.exoplayer2.upstream.i("ProgressiveMediaPeriod");

    /* renamed from: x  reason: collision with root package name */
    private final ne.h f47157x = new ne.h();

    /* renamed from: y  reason: collision with root package name */
    private final Runnable f47158y = new Runnable() { // from class: qd.c0
        @Override // java.lang.Runnable
        public final void run() {
            g0.this.R();
        }
    };

    /* renamed from: z  reason: collision with root package name */
    private final Runnable f47159z = new Runnable() { // from class: qd.d0
        @Override // java.lang.Runnable
        public final void run() {
            g0.x(g0.this);
        }
    };
    private final Handler A = ne.w0.w();
    private d[] E = new d[0];
    private l0[] D = new l0[0];
    private long S = -9223372036854775807L;
    private long K = -9223372036854775807L;
    private int M = 1;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class a implements i.e, m.a {

        /* renamed from: b  reason: collision with root package name */
        private final Uri f47161b;

        /* renamed from: c  reason: collision with root package name */
        private final le.a0 f47162c;

        /* renamed from: d  reason: collision with root package name */
        private final b0 f47163d;

        /* renamed from: e  reason: collision with root package name */
        private final tc.m f47164e;

        /* renamed from: f  reason: collision with root package name */
        private final ne.h f47165f;

        /* renamed from: h  reason: collision with root package name */
        private volatile boolean f47167h;

        /* renamed from: j  reason: collision with root package name */
        private long f47169j;

        /* renamed from: l  reason: collision with root package name */
        private tc.b0 f47171l;

        /* renamed from: m  reason: collision with root package name */
        private boolean f47172m;

        /* renamed from: g  reason: collision with root package name */
        private final tc.y f47166g = new tc.y();

        /* renamed from: i  reason: collision with root package name */
        private boolean f47168i = true;

        /* renamed from: a  reason: collision with root package name */
        private final long f47160a = LoadEventInfo.a();

        /* renamed from: k  reason: collision with root package name */
        private com.google.android.exoplayer2.upstream.a f47170k = i(0);

        public a(Uri uri, DataSource dataSource, b0 b0Var, tc.m mVar, ne.h hVar) {
            this.f47161b = uri;
            this.f47162c = new le.a0(dataSource);
            this.f47163d = b0Var;
            this.f47164e = mVar;
            this.f47165f = hVar;
        }

        private com.google.android.exoplayer2.upstream.a i(long j10) {
            return new a.b().i(this.f47161b).h(j10).f(g0.this.f47153t).b(6).e(g0.X).a();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void j(long j10, long j11) {
            this.f47166g.f49502a = j10;
            this.f47169j = j11;
            this.f47168i = true;
            this.f47172m = false;
        }

        @Override // qd.m.a
        public void a(ne.h0 h0Var) {
            long max;
            if (!this.f47172m) {
                max = this.f47169j;
            } else {
                max = Math.max(g0.this.N(true), this.f47169j);
            }
            long j10 = max;
            int a10 = h0Var.a();
            tc.b0 b0Var = (tc.b0) ne.a.e(this.f47171l);
            b0Var.f(h0Var, a10);
            b0Var.d(j10, 1, a10, 0, null);
            this.f47172m = true;
        }

        @Override // com.google.android.exoplayer2.upstream.i.e
        public void b() {
            int i10 = 0;
            while (i10 == 0 && !this.f47167h) {
                try {
                    long j10 = this.f47166g.f49502a;
                    com.google.android.exoplayer2.upstream.a i11 = i(j10);
                    this.f47170k = i11;
                    long b10 = this.f47162c.b(i11);
                    if (b10 != -1) {
                        b10 += j10;
                        g0.this.W();
                    }
                    long j11 = b10;
                    g0.this.C = kd.b.a(this.f47162c.d());
                    le.j jVar = this.f47162c;
                    if (g0.this.C != null && g0.this.C.f33077q != -1) {
                        jVar = new m(this.f47162c, g0.this.C.f33077q, this);
                        tc.b0 O = g0.this.O();
                        this.f47171l = O;
                        O.b(g0.Y);
                    }
                    this.f47163d.e(jVar, this.f47161b, this.f47162c.d(), j10, j11, this.f47164e);
                    if (g0.this.C != null) {
                        this.f47163d.b();
                    }
                    if (this.f47168i) {
                        this.f47163d.a(j10, this.f47169j);
                        this.f47168i = false;
                    }
                    while (i10 == 0 && !this.f47167h) {
                        try {
                            this.f47165f.a();
                            i10 = this.f47163d.c(this.f47166g);
                            long d10 = this.f47163d.d();
                            if (d10 > g0.this.f47154u + j10) {
                                this.f47165f.c();
                                g0.this.A.post(g0.this.f47159z);
                                j10 = d10;
                            }
                        } catch (InterruptedException unused) {
                            throw new InterruptedIOException();
                        }
                    }
                    if (i10 == 1) {
                        i10 = 0;
                    } else if (this.f47163d.d() != -1) {
                        this.f47166g.f49502a = this.f47163d.d();
                    }
                    le.o.a(this.f47162c);
                } catch (Throwable th2) {
                    if (i10 != 1 && this.f47163d.d() != -1) {
                        this.f47166g.f49502a = this.f47163d.d();
                    }
                    le.o.a(this.f47162c);
                    throw th2;
                }
            }
        }

        @Override // com.google.android.exoplayer2.upstream.i.e
        public void c() {
            this.f47167h = true;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void l(long j10, boolean z10, boolean z11);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class c implements m0 {

        /* renamed from: d  reason: collision with root package name */
        private final int f47174d;

        public c(int i10) {
            this.f47174d = i10;
        }

        @Override // qd.m0
        public void a() {
            g0.this.V(this.f47174d);
        }

        @Override // qd.m0
        public int c(lc.x xVar, qc.f fVar, int i10) {
            return g0.this.b0(this.f47174d, xVar, fVar, i10);
        }

        @Override // qd.m0
        public boolean isReady() {
            return g0.this.Q(this.f47174d);
        }

        @Override // qd.m0
        public int q(long j10) {
            return g0.this.f0(this.f47174d, j10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        public final int f47176a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f47177b;

        public d(int i10, boolean z10) {
            this.f47176a = i10;
            this.f47177b = z10;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && d.class == obj.getClass()) {
                d dVar = (d) obj;
                if (this.f47176a == dVar.f47176a && this.f47177b == dVar.f47177b) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return (this.f47176a * 31) + (this.f47177b ? 1 : 0);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e {

        /* renamed from: a  reason: collision with root package name */
        public final w0 f47178a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean[] f47179b;

        /* renamed from: c  reason: collision with root package name */
        public final boolean[] f47180c;

        /* renamed from: d  reason: collision with root package name */
        public final boolean[] f47181d;

        public e(w0 w0Var, boolean[] zArr) {
            this.f47178a = w0Var;
            this.f47179b = zArr;
            int i10 = w0Var.f47359d;
            this.f47180c = new boolean[i10];
            this.f47181d = new boolean[i10];
        }
    }

    public g0(Uri uri, DataSource dataSource, b0 b0Var, rc.v vVar, u.a aVar, com.google.android.exoplayer2.upstream.h hVar, y.a aVar2, b bVar, le.b bVar2, String str, int i10) {
        this.f47145d = uri;
        this.f47146e = dataSource;
        this.f47147i = vVar;
        this.f47150q = aVar;
        this.f47148o = hVar;
        this.f47149p = aVar2;
        this.f47151r = bVar;
        this.f47152s = bVar2;
        this.f47153t = str;
        this.f47154u = i10;
        this.f47156w = b0Var;
    }

    private void J() {
        ne.a.g(this.G);
        ne.a.e(this.I);
        ne.a.e(this.J);
    }

    private boolean K(a aVar, int i10) {
        tc.z zVar;
        if (!this.Q && ((zVar = this.J) == null || zVar.i() == -9223372036854775807L)) {
            if (this.G && !h0()) {
                this.T = true;
                return false;
            }
            this.O = this.G;
            this.R = 0L;
            this.U = 0;
            for (l0 l0Var : this.D) {
                l0Var.U();
            }
            aVar.j(0L, 0L);
            return true;
        }
        this.U = i10;
        return true;
    }

    private static Map L() {
        HashMap hashMap = new HashMap();
        hashMap.put("Icy-MetaData", "1");
        return Collections.unmodifiableMap(hashMap);
    }

    private int M() {
        int i10 = 0;
        for (l0 l0Var : this.D) {
            i10 += l0Var.G();
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public long N(boolean z10) {
        long j10 = Long.MIN_VALUE;
        for (int i10 = 0; i10 < this.D.length; i10++) {
            if (z10 || ((e) ne.a.e(this.I)).f47180c[i10]) {
                j10 = Math.max(j10, this.D[i10].z());
            }
        }
        return j10;
    }

    private boolean P() {
        if (this.S != -9223372036854775807L) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void R() {
        boolean z10;
        Metadata a10;
        if (!this.W && !this.G && this.F && this.J != null) {
            for (l0 l0Var : this.D) {
                if (l0Var.F() == null) {
                    return;
                }
            }
            this.f47157x.c();
            int length = this.D.length;
            u0[] u0VarArr = new u0[length];
            boolean[] zArr = new boolean[length];
            for (int i10 = 0; i10 < length; i10++) {
                Format format = (Format) ne.a.e(this.D[i10].F());
                String str = format.f12706w;
                boolean o10 = ne.c0.o(str);
                if (!o10 && !ne.c0.s(str)) {
                    z10 = false;
                } else {
                    z10 = true;
                }
                zArr[i10] = z10;
                this.H = z10 | this.H;
                kd.b bVar = this.C;
                if (bVar != null) {
                    if (o10 || this.E[i10].f47177b) {
                        Metadata metadata = format.f12704u;
                        if (metadata == null) {
                            a10 = new Metadata(bVar);
                        } else {
                            a10 = metadata.a(bVar);
                        }
                        format = format.b().Z(a10).G();
                    }
                    if (o10 && format.f12700q == -1 && format.f12701r == -1 && bVar.f33072d != -1) {
                        format = format.b().I(bVar.f33072d).G();
                    }
                }
                u0VarArr[i10] = new u0(Integer.toString(i10), format.c(this.f47147i.b(format)));
            }
            this.I = new e(new w0(u0VarArr), zArr);
            this.G = true;
            ((p.a) ne.a.e(this.B)).j(this);
        }
    }

    private void S(int i10) {
        J();
        e eVar = this.I;
        boolean[] zArr = eVar.f47181d;
        if (!zArr[i10]) {
            Format c10 = eVar.f47178a.b(i10).c(0);
            this.f47149p.h(ne.c0.k(c10.f12706w), c10, 0, null, this.R);
            zArr[i10] = true;
        }
    }

    private void T(int i10) {
        J();
        boolean[] zArr = this.I.f47179b;
        if (this.T && zArr[i10]) {
            if (!this.D[i10].K(false)) {
                this.S = 0L;
                this.T = false;
                this.O = true;
                this.R = 0L;
                this.U = 0;
                for (l0 l0Var : this.D) {
                    l0Var.U();
                }
                ((p.a) ne.a.e(this.B)).i(this);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void W() {
        this.A.post(new Runnable() { // from class: qd.e0
            @Override // java.lang.Runnable
            public final void run() {
                g0.this.Q = true;
            }
        });
    }

    private tc.b0 a0(d dVar) {
        int length = this.D.length;
        for (int i10 = 0; i10 < length; i10++) {
            if (dVar.equals(this.E[i10])) {
                return this.D[i10];
            }
        }
        l0 k10 = l0.k(this.f47152s, this.f47147i, this.f47150q);
        k10.c0(this);
        int i11 = length + 1;
        d[] dVarArr = (d[]) Arrays.copyOf(this.E, i11);
        dVarArr[length] = dVar;
        this.E = (d[]) ne.w0.k(dVarArr);
        l0[] l0VarArr = (l0[]) Arrays.copyOf(this.D, i11);
        l0VarArr[length] = k10;
        this.D = (l0[]) ne.w0.k(l0VarArr);
        return k10;
    }

    private boolean d0(boolean[] zArr, long j10) {
        int length = this.D.length;
        for (int i10 = 0; i10 < length; i10++) {
            if (!this.D[i10].Y(j10, false) && (zArr[i10] || !this.H)) {
                return false;
            }
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void e0(tc.z zVar) {
        tc.z bVar;
        boolean z10;
        if (this.C == null) {
            bVar = zVar;
        } else {
            bVar = new z.b(-9223372036854775807L);
        }
        this.J = bVar;
        this.K = zVar.i();
        int i10 = 1;
        if (!this.Q && zVar.i() == -9223372036854775807L) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.L = z10;
        if (z10) {
            i10 = 7;
        }
        this.M = i10;
        this.f47151r.l(this.K, zVar.h(), this.L);
        if (!this.G) {
            R();
        }
    }

    private void g0() {
        a aVar = new a(this.f47145d, this.f47146e, this.f47156w, this, this.f47157x);
        if (this.G) {
            ne.a.g(P());
            long j10 = this.K;
            if (j10 == -9223372036854775807L || this.S <= j10) {
                aVar.j(((tc.z) ne.a.e(this.J)).e(this.S).f49503a.f49400b, this.S);
                for (l0 l0Var : this.D) {
                    l0Var.a0(this.S);
                }
                this.S = -9223372036854775807L;
            } else {
                this.V = true;
                this.S = -9223372036854775807L;
                return;
            }
        }
        this.U = M();
        this.f47149p.t(new LoadEventInfo(aVar.f47160a, aVar.f47170k, this.f47155v.n(aVar, this, this.f47148o.b(this.M))), 1, -1, null, 0, null, aVar.f47169j, this.K);
    }

    private boolean h0() {
        if (!this.O && !P()) {
            return false;
        }
        return true;
    }

    public static /* synthetic */ void x(g0 g0Var) {
        if (!g0Var.W) {
            ((p.a) ne.a.e(g0Var.B)).i(g0Var);
        }
    }

    tc.b0 O() {
        return a0(new d(0, true));
    }

    boolean Q(int i10) {
        if (!h0() && this.D[i10].K(this.V)) {
            return true;
        }
        return false;
    }

    void U() {
        this.f47155v.k(this.f47148o.b(this.M));
    }

    void V(int i10) {
        this.D[i10].M();
        U();
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: X */
    public void i(a aVar, long j10, long j11, boolean z10) {
        le.a0 a0Var = aVar.f47162c;
        LoadEventInfo loadEventInfo = new LoadEventInfo(aVar.f47160a, aVar.f47170k, a0Var.p(), a0Var.q(), j10, j11, a0Var.o());
        this.f47148o.d(aVar.f47160a);
        this.f47149p.k(loadEventInfo, 1, -1, null, 0, null, aVar.f47169j, this.K);
        if (!z10) {
            for (l0 l0Var : this.D) {
                l0Var.U();
            }
            if (this.P > 0) {
                ((p.a) ne.a.e(this.B)).i(this);
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: Y */
    public void j(a aVar, long j10, long j11) {
        tc.z zVar;
        long j12;
        if (this.K == -9223372036854775807L && (zVar = this.J) != null) {
            boolean h10 = zVar.h();
            long N = N(true);
            if (N == Long.MIN_VALUE) {
                j12 = 0;
            } else {
                j12 = N + 10000;
            }
            this.K = j12;
            this.f47151r.l(j12, h10, this.L);
        }
        le.a0 a0Var = aVar.f47162c;
        LoadEventInfo loadEventInfo = new LoadEventInfo(aVar.f47160a, aVar.f47170k, a0Var.p(), a0Var.q(), j10, j11, a0Var.o());
        this.f47148o.d(aVar.f47160a);
        this.f47149p.n(loadEventInfo, 1, -1, null, 0, null, aVar.f47169j, this.K);
        this.V = true;
        ((p.a) ne.a.e(this.B)).i(this);
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: Z */
    public i.c n(a aVar, long j10, long j11, IOException iOException, int i10) {
        boolean z10;
        a aVar2;
        i.c cVar;
        le.a0 a0Var = aVar.f47162c;
        LoadEventInfo loadEventInfo = new LoadEventInfo(aVar.f47160a, aVar.f47170k, a0Var.p(), a0Var.q(), j10, j11, a0Var.o());
        long a10 = this.f47148o.a(new h.c(loadEventInfo, new MediaLoadData(1, -1, null, 0, null, ne.w0.p1(aVar.f47169j), ne.w0.p1(this.K)), iOException, i10));
        if (a10 == -9223372036854775807L) {
            cVar = com.google.android.exoplayer2.upstream.i.f14486g;
            aVar2 = aVar;
        } else {
            int M = M();
            if (M > this.U) {
                z10 = true;
            } else {
                z10 = false;
            }
            aVar2 = aVar;
            if (K(aVar2, M)) {
                cVar = com.google.android.exoplayer2.upstream.i.h(z10, a10);
            } else {
                cVar = com.google.android.exoplayer2.upstream.i.f14485f;
            }
        }
        boolean c10 = cVar.c();
        this.f47149p.p(loadEventInfo, 1, -1, null, 0, null, aVar2.f47169j, this.K, iOException, !c10);
        if (!c10) {
            this.f47148o.d(aVar2.f47160a);
        }
        return cVar;
    }

    @Override // qd.l0.d
    public void a(Format format) {
        this.A.post(this.f47158y);
    }

    @Override // qd.p, qd.n0
    public long b() {
        return g();
    }

    int b0(int i10, lc.x xVar, qc.f fVar, int i11) {
        if (h0()) {
            return -3;
        }
        S(i10);
        int R = this.D[i10].R(xVar, fVar, i11, this.V);
        if (R == -3) {
            T(i10);
        }
        return R;
    }

    @Override // tc.m
    public tc.b0 c(int i10, int i11) {
        return a0(new d(i10, false));
    }

    public void c0() {
        if (this.G) {
            for (l0 l0Var : this.D) {
                l0Var.Q();
            }
        }
        this.f47155v.m(this);
        this.A.removeCallbacksAndMessages(null);
        this.B = null;
        this.W = true;
    }

    @Override // qd.p, qd.n0
    public boolean d() {
        if (this.f47155v.j() && this.f47157x.d()) {
            return true;
        }
        return false;
    }

    @Override // qd.p
    public long e(long j10, lc.t0 t0Var) {
        J();
        if (!this.J.h()) {
            return 0L;
        }
        z.a e10 = this.J.e(j10);
        return t0Var.a(j10, e10.f49503a.f49399a, e10.f49504b.f49399a);
    }

    @Override // qd.p, qd.n0
    public boolean f(long j10) {
        if (!this.V && !this.f47155v.i() && !this.T) {
            if (!this.G || this.P != 0) {
                boolean e10 = this.f47157x.e();
                if (!this.f47155v.j()) {
                    g0();
                    return true;
                }
                return e10;
            }
            return false;
        }
        return false;
    }

    int f0(int i10, long j10) {
        if (h0()) {
            return 0;
        }
        S(i10);
        l0 l0Var = this.D[i10];
        int E = l0Var.E(j10, this.V);
        l0Var.d0(E);
        if (E == 0) {
            T(i10);
        }
        return E;
    }

    @Override // qd.p, qd.n0
    public long g() {
        long j10;
        J();
        if (this.V || this.P == 0) {
            return Long.MIN_VALUE;
        }
        if (P()) {
            return this.S;
        }
        if (this.H) {
            int length = this.D.length;
            j10 = Long.MAX_VALUE;
            for (int i10 = 0; i10 < length; i10++) {
                e eVar = this.I;
                if (eVar.f47179b[i10] && eVar.f47180c[i10] && !this.D[i10].J()) {
                    j10 = Math.min(j10, this.D[i10].z());
                }
            }
        } else {
            j10 = Long.MAX_VALUE;
        }
        if (j10 == LongCompanionObject.MAX_VALUE) {
            j10 = N(false);
        }
        if (j10 == Long.MIN_VALUE) {
            return this.R;
        }
        return j10;
    }

    @Override // qd.p
    public void k(p.a aVar, long j10) {
        this.B = aVar;
        this.f47157x.e();
        g0();
    }

    @Override // qd.p
    public long l(long j10) {
        J();
        boolean[] zArr = this.I.f47179b;
        if (!this.J.h()) {
            j10 = 0;
        }
        int i10 = 0;
        this.O = false;
        this.R = j10;
        if (P()) {
            this.S = j10;
            return j10;
        }
        if (this.M == 7 || !d0(zArr, j10)) {
            this.T = false;
            this.S = j10;
            this.V = false;
            if (this.f47155v.j()) {
                l0[] l0VarArr = this.D;
                int length = l0VarArr.length;
                while (i10 < length) {
                    l0VarArr[i10].r();
                    i10++;
                }
                this.f47155v.f();
                return j10;
            }
            this.f47155v.g();
            l0[] l0VarArr2 = this.D;
            int length2 = l0VarArr2.length;
            while (i10 < length2) {
                l0VarArr2[i10].U();
                i10++;
            }
        }
        return j10;
    }

    @Override // qd.p
    public long m() {
        if (this.O) {
            if (this.V || M() > this.U) {
                this.O = false;
                return this.R;
            }
            return -9223372036854775807L;
        }
        return -9223372036854775807L;
    }

    @Override // qd.p
    public long o(com.google.android.exoplayer2.trackselection.g[] gVarArr, boolean[] zArr, m0[] m0VarArr, boolean[] zArr2, long j10) {
        boolean z10;
        com.google.android.exoplayer2.trackselection.g gVar;
        boolean z11;
        boolean z12;
        J();
        e eVar = this.I;
        w0 w0Var = eVar.f47178a;
        boolean[] zArr3 = eVar.f47180c;
        int i10 = this.P;
        int i11 = 0;
        for (int i12 = 0; i12 < gVarArr.length; i12++) {
            m0 m0Var = m0VarArr[i12];
            if (m0Var != null && (gVarArr[i12] == null || !zArr[i12])) {
                int i13 = ((c) m0Var).f47174d;
                ne.a.g(zArr3[i13]);
                this.P--;
                zArr3[i13] = false;
                m0VarArr[i12] = null;
            }
        }
        if (!this.N ? j10 != 0 : i10 == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        for (int i14 = 0; i14 < gVarArr.length; i14++) {
            if (m0VarArr[i14] == null && (gVar = gVarArr[i14]) != null) {
                if (gVar.length() == 1) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                ne.a.g(z11);
                if (gVar.e(0) == 0) {
                    z12 = true;
                } else {
                    z12 = false;
                }
                ne.a.g(z12);
                int c10 = w0Var.c(gVar.k());
                ne.a.g(!zArr3[c10]);
                this.P++;
                zArr3[c10] = true;
                m0VarArr[i14] = new c(c10);
                zArr2[i14] = true;
                if (!z10) {
                    l0 l0Var = this.D[c10];
                    if (!l0Var.Y(j10, true) && l0Var.C() != 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                }
            }
        }
        if (this.P == 0) {
            this.T = false;
            this.O = false;
            if (this.f47155v.j()) {
                l0[] l0VarArr = this.D;
                int length = l0VarArr.length;
                while (i11 < length) {
                    l0VarArr[i11].r();
                    i11++;
                }
                this.f47155v.f();
            } else {
                l0[] l0VarArr2 = this.D;
                int length2 = l0VarArr2.length;
                while (i11 < length2) {
                    l0VarArr2[i11].U();
                    i11++;
                }
            }
        } else if (z10) {
            j10 = l(j10);
            while (i11 < m0VarArr.length) {
                if (m0VarArr[i11] != null) {
                    zArr2[i11] = true;
                }
                i11++;
            }
        }
        this.N = true;
        return j10;
    }

    @Override // com.google.android.exoplayer2.upstream.i.f
    public void p() {
        for (l0 l0Var : this.D) {
            l0Var.S();
        }
        this.f47156w.release();
    }

    @Override // tc.m
    public void q(final tc.z zVar) {
        this.A.post(new Runnable() { // from class: qd.f0
            @Override // java.lang.Runnable
            public final void run() {
                g0.this.e0(zVar);
            }
        });
    }

    @Override // qd.p
    public void r() {
        U();
        if (this.V && !this.G) {
            throw lc.l0.a("Loading finished before preparation is complete.", null);
        }
    }

    @Override // tc.m
    public void s() {
        this.F = true;
        this.A.post(this.f47158y);
    }

    @Override // qd.p
    public w0 t() {
        J();
        return this.I.f47178a;
    }

    @Override // qd.p
    public void u(long j10, boolean z10) {
        J();
        if (!P()) {
            boolean[] zArr = this.I.f47180c;
            int length = this.D.length;
            for (int i10 = 0; i10 < length; i10++) {
                this.D[i10].q(j10, z10, zArr[i10]);
            }
        }
    }

    @Override // qd.p, qd.n0
    public void h(long j10) {
    }
}
