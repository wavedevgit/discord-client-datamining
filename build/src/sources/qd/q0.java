package qd;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.source.MediaLoadData;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.i;
import com.google.android.exoplayer2.upstream.j;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.util.ArrayList;
import java.util.Arrays;
import qd.p;
import qd.y;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q0 implements p, j.b {

    /* renamed from: d  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.a f46870d;

    /* renamed from: e  reason: collision with root package name */
    private final DataSource.Factory f46871e;

    /* renamed from: i  reason: collision with root package name */
    private final le.c0 f46872i;

    /* renamed from: o  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f46873o;

    /* renamed from: p  reason: collision with root package name */
    private final y.a f46874p;

    /* renamed from: q  reason: collision with root package name */
    private final w0 f46875q;

    /* renamed from: s  reason: collision with root package name */
    private final long f46877s;

    /* renamed from: u  reason: collision with root package name */
    final Format f46879u;

    /* renamed from: v  reason: collision with root package name */
    final boolean f46880v;

    /* renamed from: w  reason: collision with root package name */
    boolean f46881w;

    /* renamed from: x  reason: collision with root package name */
    byte[] f46882x;

    /* renamed from: y  reason: collision with root package name */
    int f46883y;

    /* renamed from: r  reason: collision with root package name */
    private final ArrayList f46876r = new ArrayList();

    /* renamed from: t  reason: collision with root package name */
    final com.google.android.exoplayer2.upstream.j f46878t = new com.google.android.exoplayer2.upstream.j("SingleSampleMediaPeriod");

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class b implements m0 {

        /* renamed from: d  reason: collision with root package name */
        private int f46884d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f46885e;

        private b() {
        }

        private void b() {
            if (!this.f46885e) {
                q0.this.f46874p.h(ne.c0.k(q0.this.f46879u.f11587w), q0.this.f46879u, 0, null, 0L);
                this.f46885e = true;
            }
        }

        @Override // qd.m0
        public void a() {
            q0 q0Var = q0.this;
            if (!q0Var.f46880v) {
                q0Var.f46878t.a();
            }
        }

        @Override // qd.m0
        public int c(lc.x xVar, qc.f fVar, int i10) {
            b();
            q0 q0Var = q0.this;
            boolean z10 = q0Var.f46881w;
            if (z10 && q0Var.f46882x == null) {
                this.f46884d = 2;
            }
            int i11 = this.f46884d;
            if (i11 == 2) {
                fVar.g(4);
                return -4;
            } else if ((i10 & 2) == 0 && i11 != 0) {
                if (!z10) {
                    return -3;
                }
                ne.a.e(q0Var.f46882x);
                fVar.g(1);
                fVar.f46659p = 0L;
                if ((i10 & 4) == 0) {
                    fVar.u(q0.this.f46883y);
                    ByteBuffer byteBuffer = fVar.f46657i;
                    q0 q0Var2 = q0.this;
                    byteBuffer.put(q0Var2.f46882x, 0, q0Var2.f46883y);
                }
                if ((i10 & 1) == 0) {
                    this.f46884d = 2;
                }
                return -4;
            } else {
                xVar.f36077b = q0Var.f46879u;
                this.f46884d = 1;
                return -5;
            }
        }

        public void d() {
            if (this.f46884d == 2) {
                this.f46884d = 1;
            }
        }

        @Override // qd.m0
        public boolean isReady() {
            return q0.this.f46881w;
        }

        @Override // qd.m0
        public int q(long j10) {
            b();
            if (j10 > 0 && this.f46884d != 2) {
                this.f46884d = 2;
                return 1;
            }
            return 0;
        }
    }

    public q0(com.google.android.exoplayer2.upstream.a aVar, DataSource.Factory factory, le.c0 c0Var, Format format, long j10, com.google.android.exoplayer2.upstream.i iVar, y.a aVar2, boolean z10) {
        this.f46870d = aVar;
        this.f46871e = factory;
        this.f46872i = c0Var;
        this.f46879u = format;
        this.f46877s = j10;
        this.f46873o = iVar;
        this.f46874p = aVar2;
        this.f46880v = z10;
        this.f46875q = new w0(new u0(format));
    }

    @Override // qd.p, qd.n0
    public long b() {
        if (!this.f46881w && !this.f46878t.j()) {
            return 0L;
        }
        return Long.MIN_VALUE;
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: c */
    public void i(c cVar, long j10, long j11, boolean z10) {
        le.a0 a0Var = cVar.f46889c;
        LoadEventInfo loadEventInfo = new LoadEventInfo(cVar.f46887a, cVar.f46888b, a0Var.p(), a0Var.q(), j10, j11, a0Var.o());
        this.f46873o.d(cVar.f46887a);
        this.f46874p.k(loadEventInfo, 1, -1, null, 0, null, 0L, this.f46877s);
    }

    @Override // qd.p, qd.n0
    public boolean d() {
        return this.f46878t.j();
    }

    @Override // qd.p, qd.n0
    public boolean f(long j10) {
        if (!this.f46881w && !this.f46878t.j() && !this.f46878t.i()) {
            DataSource createDataSource = this.f46871e.createDataSource();
            le.c0 c0Var = this.f46872i;
            if (c0Var != null) {
                createDataSource.j(c0Var);
            }
            c cVar = new c(this.f46870d, createDataSource);
            this.f46874p.t(new LoadEventInfo(cVar.f46887a, this.f46870d, this.f46878t.n(cVar, this, this.f46873o.b(1))), 1, -1, this.f46879u, 0, null, 0L, this.f46877s);
            return true;
        }
        return false;
    }

    @Override // qd.p, qd.n0
    public long g() {
        if (this.f46881w) {
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
        for (int i10 = 0; i10 < this.f46876r.size(); i10++) {
            ((b) this.f46876r.get(i10)).d();
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
                this.f46876r.remove(m0Var);
                m0VarArr[i10] = null;
            }
            if (m0VarArr[i10] == null && gVarArr[i10] != null) {
                b bVar = new b();
                this.f46876r.add(bVar);
                m0VarArr[i10] = bVar;
                zArr2[i10] = true;
            }
        }
        return j10;
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: p */
    public void j(c cVar, long j10, long j11) {
        this.f46883y = (int) cVar.f46889c.o();
        this.f46882x = (byte[]) ne.a.e(cVar.f46890d);
        this.f46881w = true;
        le.a0 a0Var = cVar.f46889c;
        LoadEventInfo loadEventInfo = new LoadEventInfo(cVar.f46887a, cVar.f46888b, a0Var.p(), a0Var.q(), j10, j11, this.f46883y);
        this.f46873o.d(cVar.f46887a);
        this.f46874p.n(loadEventInfo, 1, -1, this.f46879u, 0, null, 0L, this.f46877s);
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: q */
    public j.c n(c cVar, long j10, long j11, IOException iOException, int i10) {
        boolean z10;
        j.c cVar2;
        le.a0 a0Var = cVar.f46889c;
        LoadEventInfo loadEventInfo = new LoadEventInfo(cVar.f46887a, cVar.f46888b, a0Var.p(), a0Var.q(), j10, j11, a0Var.o());
        long a10 = this.f46873o.a(new i.c(loadEventInfo, new MediaLoadData(1, -1, this.f46879u, 0, null, 0L, ne.w0.p1(this.f46877s)), iOException, i10));
        int i11 = (a10 > (-9223372036854775807L) ? 1 : (a10 == (-9223372036854775807L) ? 0 : -1));
        if (i11 != 0 && i10 < this.f46873o.b(1)) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (this.f46880v && z10) {
            ne.y.j("SingleSampleMediaPeriod", "Loading failed, treating as end-of-stream.", iOException);
            this.f46881w = true;
            cVar2 = com.google.android.exoplayer2.upstream.j.f13428f;
        } else if (i11 != 0) {
            cVar2 = com.google.android.exoplayer2.upstream.j.h(false, a10);
        } else {
            cVar2 = com.google.android.exoplayer2.upstream.j.f13429g;
        }
        j.c cVar3 = cVar2;
        boolean c10 = cVar3.c();
        this.f46874p.p(loadEventInfo, 1, -1, this.f46879u, 0, null, 0L, this.f46877s, iOException, !c10);
        if (!c10) {
            this.f46873o.d(cVar.f46887a);
        }
        return cVar3;
    }

    public void s() {
        this.f46878t.l();
    }

    @Override // qd.p
    public w0 t() {
        return this.f46875q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c implements j.e {

        /* renamed from: a  reason: collision with root package name */
        public final long f46887a = LoadEventInfo.a();

        /* renamed from: b  reason: collision with root package name */
        public final com.google.android.exoplayer2.upstream.a f46888b;

        /* renamed from: c  reason: collision with root package name */
        private final le.a0 f46889c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f46890d;

        public c(com.google.android.exoplayer2.upstream.a aVar, DataSource dataSource) {
            this.f46888b = aVar;
            this.f46889c = new le.a0(dataSource);
        }

        @Override // com.google.android.exoplayer2.upstream.j.e
        public void b() {
            this.f46889c.r();
            try {
                this.f46889c.b(this.f46888b);
                int i10 = 0;
                while (i10 != -1) {
                    int o10 = (int) this.f46889c.o();
                    byte[] bArr = this.f46890d;
                    if (bArr == null) {
                        this.f46890d = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];
                    } else if (o10 == bArr.length) {
                        this.f46890d = Arrays.copyOf(bArr, bArr.length * 2);
                    }
                    le.a0 a0Var = this.f46889c;
                    byte[] bArr2 = this.f46890d;
                    i10 = a0Var.read(bArr2, o10, bArr2.length - o10);
                }
                le.o.a(this.f46889c);
            } catch (Throwable th2) {
                le.o.a(this.f46889c);
                throw th2;
            }
        }

        @Override // com.google.android.exoplayer2.upstream.j.e
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
