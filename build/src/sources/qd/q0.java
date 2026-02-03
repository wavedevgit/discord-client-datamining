package qd;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.source.MediaLoadData;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.h;
import com.google.android.exoplayer2.upstream.i;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.util.ArrayList;
import java.util.Arrays;
import qd.p;
import qd.y;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q0 implements p, i.b {

    /* renamed from: d  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.a f47710d;

    /* renamed from: e  reason: collision with root package name */
    private final DataSource.Factory f47711e;

    /* renamed from: i  reason: collision with root package name */
    private final le.c0 f47712i;

    /* renamed from: o  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.h f47713o;

    /* renamed from: p  reason: collision with root package name */
    private final y.a f47714p;

    /* renamed from: q  reason: collision with root package name */
    private final w0 f47715q;

    /* renamed from: s  reason: collision with root package name */
    private final long f47717s;

    /* renamed from: u  reason: collision with root package name */
    final Format f47719u;

    /* renamed from: v  reason: collision with root package name */
    final boolean f47720v;

    /* renamed from: w  reason: collision with root package name */
    boolean f47721w;

    /* renamed from: x  reason: collision with root package name */
    byte[] f47722x;

    /* renamed from: y  reason: collision with root package name */
    int f47723y;

    /* renamed from: r  reason: collision with root package name */
    private final ArrayList f47716r = new ArrayList();

    /* renamed from: t  reason: collision with root package name */
    final com.google.android.exoplayer2.upstream.i f47718t = new com.google.android.exoplayer2.upstream.i("SingleSampleMediaPeriod");

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class b implements m0 {

        /* renamed from: d  reason: collision with root package name */
        private int f47724d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f47725e;

        private b() {
        }

        private void b() {
            if (!this.f47725e) {
                q0.this.f47714p.h(ne.c0.k(q0.this.f47719u.f11303w), q0.this.f47719u, 0, null, 0L);
                this.f47725e = true;
            }
        }

        @Override // qd.m0
        public void a() {
            q0 q0Var = q0.this;
            if (!q0Var.f47720v) {
                q0Var.f47718t.a();
            }
        }

        @Override // qd.m0
        public int c(lc.x xVar, qc.f fVar, int i10) {
            b();
            q0 q0Var = q0.this;
            boolean z10 = q0Var.f47721w;
            if (z10 && q0Var.f47722x == null) {
                this.f47724d = 2;
            }
            int i11 = this.f47724d;
            if (i11 == 2) {
                fVar.g(4);
                return -4;
            } else if ((i10 & 2) == 0 && i11 != 0) {
                if (!z10) {
                    return -3;
                }
                ne.a.e(q0Var.f47722x);
                fVar.g(1);
                fVar.f47499p = 0L;
                if ((i10 & 4) == 0) {
                    fVar.u(q0.this.f47723y);
                    ByteBuffer byteBuffer = fVar.f47497i;
                    q0 q0Var2 = q0.this;
                    byteBuffer.put(q0Var2.f47722x, 0, q0Var2.f47723y);
                }
                if ((i10 & 1) == 0) {
                    this.f47724d = 2;
                }
                return -4;
            } else {
                xVar.f36709b = q0Var.f47719u;
                this.f47724d = 1;
                return -5;
            }
        }

        public void d() {
            if (this.f47724d == 2) {
                this.f47724d = 1;
            }
        }

        @Override // qd.m0
        public boolean isReady() {
            return q0.this.f47721w;
        }

        @Override // qd.m0
        public int q(long j10) {
            b();
            if (j10 > 0 && this.f47724d != 2) {
                this.f47724d = 2;
                return 1;
            }
            return 0;
        }
    }

    public q0(com.google.android.exoplayer2.upstream.a aVar, DataSource.Factory factory, le.c0 c0Var, Format format, long j10, com.google.android.exoplayer2.upstream.h hVar, y.a aVar2, boolean z10) {
        this.f47710d = aVar;
        this.f47711e = factory;
        this.f47712i = c0Var;
        this.f47719u = format;
        this.f47717s = j10;
        this.f47713o = hVar;
        this.f47714p = aVar2;
        this.f47720v = z10;
        this.f47715q = new w0(new u0(format));
    }

    @Override // qd.p, qd.n0
    public long b() {
        if (!this.f47721w && !this.f47718t.j()) {
            return 0L;
        }
        return Long.MIN_VALUE;
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: c */
    public void i(c cVar, long j10, long j11, boolean z10) {
        le.a0 a0Var = cVar.f47729c;
        LoadEventInfo loadEventInfo = new LoadEventInfo(cVar.f47727a, cVar.f47728b, a0Var.p(), a0Var.q(), j10, j11, a0Var.o());
        this.f47713o.d(cVar.f47727a);
        this.f47714p.k(loadEventInfo, 1, -1, null, 0, null, 0L, this.f47717s);
    }

    @Override // qd.p, qd.n0
    public boolean d() {
        return this.f47718t.j();
    }

    @Override // qd.p, qd.n0
    public boolean f(long j10) {
        if (!this.f47721w && !this.f47718t.j() && !this.f47718t.i()) {
            DataSource createDataSource = this.f47711e.createDataSource();
            le.c0 c0Var = this.f47712i;
            if (c0Var != null) {
                createDataSource.j(c0Var);
            }
            c cVar = new c(this.f47710d, createDataSource);
            this.f47714p.t(new LoadEventInfo(cVar.f47727a, this.f47710d, this.f47718t.n(cVar, this, this.f47713o.b(1))), 1, -1, this.f47719u, 0, null, 0L, this.f47717s);
            return true;
        }
        return false;
    }

    @Override // qd.p, qd.n0
    public long g() {
        if (this.f47721w) {
            return Long.MIN_VALUE;
        }
        return 0L;
    }

    @Override // qd.p
    public void k(p.a aVar, long j10) {
        aVar.j(this);
    }

    @Override // qd.p
    public long l(long j10) {
        for (int i10 = 0; i10 < this.f47716r.size(); i10++) {
            ((b) this.f47716r.get(i10)).d();
        }
        return j10;
    }

    @Override // qd.p
    public long m() {
        return -9223372036854775807L;
    }

    @Override // qd.p
    public long o(com.google.android.exoplayer2.trackselection.g[] gVarArr, boolean[] zArr, m0[] m0VarArr, boolean[] zArr2, long j10) {
        for (int i10 = 0; i10 < gVarArr.length; i10++) {
            m0 m0Var = m0VarArr[i10];
            if (m0Var != null && (gVarArr[i10] == null || !zArr[i10])) {
                this.f47716r.remove(m0Var);
                m0VarArr[i10] = null;
            }
            if (m0VarArr[i10] == null && gVarArr[i10] != null) {
                b bVar = new b();
                this.f47716r.add(bVar);
                m0VarArr[i10] = bVar;
                zArr2[i10] = true;
            }
        }
        return j10;
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: p */
    public void j(c cVar, long j10, long j11) {
        this.f47723y = (int) cVar.f47729c.o();
        this.f47722x = (byte[]) ne.a.e(cVar.f47730d);
        this.f47721w = true;
        le.a0 a0Var = cVar.f47729c;
        LoadEventInfo loadEventInfo = new LoadEventInfo(cVar.f47727a, cVar.f47728b, a0Var.p(), a0Var.q(), j10, j11, this.f47723y);
        this.f47713o.d(cVar.f47727a);
        this.f47714p.n(loadEventInfo, 1, -1, this.f47719u, 0, null, 0L, this.f47717s);
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: q */
    public i.c n(c cVar, long j10, long j11, IOException iOException, int i10) {
        boolean z10;
        i.c cVar2;
        le.a0 a0Var = cVar.f47729c;
        LoadEventInfo loadEventInfo = new LoadEventInfo(cVar.f47727a, cVar.f47728b, a0Var.p(), a0Var.q(), j10, j11, a0Var.o());
        long a10 = this.f47713o.a(new h.c(loadEventInfo, new MediaLoadData(1, -1, this.f47719u, 0, null, 0L, ne.w0.p1(this.f47717s)), iOException, i10));
        int i11 = (a10 > (-9223372036854775807L) ? 1 : (a10 == (-9223372036854775807L) ? 0 : -1));
        if (i11 != 0 && i10 < this.f47713o.b(1)) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (this.f47720v && z10) {
            ne.y.j("SingleSampleMediaPeriod", "Loading failed, treating as end-of-stream.", iOException);
            this.f47721w = true;
            cVar2 = com.google.android.exoplayer2.upstream.i.f13082f;
        } else if (i11 != 0) {
            cVar2 = com.google.android.exoplayer2.upstream.i.h(false, a10);
        } else {
            cVar2 = com.google.android.exoplayer2.upstream.i.f13083g;
        }
        i.c cVar3 = cVar2;
        boolean c10 = cVar3.c();
        this.f47714p.p(loadEventInfo, 1, -1, this.f47719u, 0, null, 0L, this.f47717s, iOException, !c10);
        if (!c10) {
            this.f47713o.d(cVar.f47727a);
        }
        return cVar3;
    }

    public void s() {
        this.f47718t.l();
    }

    @Override // qd.p
    public w0 t() {
        return this.f47715q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c implements i.e {

        /* renamed from: a  reason: collision with root package name */
        public final long f47727a = LoadEventInfo.a();

        /* renamed from: b  reason: collision with root package name */
        public final com.google.android.exoplayer2.upstream.a f47728b;

        /* renamed from: c  reason: collision with root package name */
        private final le.a0 f47729c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f47730d;

        public c(com.google.android.exoplayer2.upstream.a aVar, DataSource dataSource) {
            this.f47728b = aVar;
            this.f47729c = new le.a0(dataSource);
        }

        @Override // com.google.android.exoplayer2.upstream.i.e
        public void b() {
            this.f47729c.r();
            try {
                this.f47729c.b(this.f47728b);
                int i10 = 0;
                while (i10 != -1) {
                    int o10 = (int) this.f47729c.o();
                    byte[] bArr = this.f47730d;
                    if (bArr == null) {
                        this.f47730d = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];
                    } else if (o10 == bArr.length) {
                        this.f47730d = Arrays.copyOf(bArr, bArr.length * 2);
                    }
                    le.a0 a0Var = this.f47729c;
                    byte[] bArr2 = this.f47730d;
                    i10 = a0Var.read(bArr2, o10, bArr2.length - o10);
                }
                le.o.a(this.f47729c);
            } catch (Throwable th2) {
                le.o.a(this.f47729c);
                throw th2;
            }
        }

        @Override // com.google.android.exoplayer2.upstream.i.e
        public void c() {
        }
    }

    @Override // qd.p
    public void r() {
    }

    @Override // qd.p, qd.n0
    public void h(long j10) {
    }

    @Override // qd.p
    public long e(long j10, lc.t0 t0Var) {
        return j10;
    }

    @Override // qd.p
    public void u(long j10, boolean z10) {
    }
}
