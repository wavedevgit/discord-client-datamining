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
    private final com.google.android.exoplayer2.upstream.a f46822d;

    /* renamed from: e  reason: collision with root package name */
    private final DataSource.Factory f46823e;

    /* renamed from: i  reason: collision with root package name */
    private final le.c0 f46824i;

    /* renamed from: o  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f46825o;

    /* renamed from: p  reason: collision with root package name */
    private final y.a f46826p;

    /* renamed from: q  reason: collision with root package name */
    private final w0 f46827q;

    /* renamed from: s  reason: collision with root package name */
    private final long f46829s;

    /* renamed from: u  reason: collision with root package name */
    final Format f46831u;

    /* renamed from: v  reason: collision with root package name */
    final boolean f46832v;

    /* renamed from: w  reason: collision with root package name */
    boolean f46833w;

    /* renamed from: x  reason: collision with root package name */
    byte[] f46834x;

    /* renamed from: y  reason: collision with root package name */
    int f46835y;

    /* renamed from: r  reason: collision with root package name */
    private final ArrayList f46828r = new ArrayList();

    /* renamed from: t  reason: collision with root package name */
    final com.google.android.exoplayer2.upstream.j f46830t = new com.google.android.exoplayer2.upstream.j("SingleSampleMediaPeriod");

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class b implements m0 {

        /* renamed from: d  reason: collision with root package name */
        private int f46836d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f46837e;

        private b() {
        }

        private void b() {
            if (!this.f46837e) {
                q0.this.f46826p.h(ne.c0.k(q0.this.f46831u.f11587w), q0.this.f46831u, 0, null, 0L);
                this.f46837e = true;
            }
        }

        @Override // qd.m0
        public void a() {
            q0 q0Var = q0.this;
            if (!q0Var.f46832v) {
                q0Var.f46830t.a();
            }
        }

        @Override // qd.m0
        public int c(lc.x xVar, qc.f fVar, int i10) {
            b();
            q0 q0Var = q0.this;
            boolean z10 = q0Var.f46833w;
            if (z10 && q0Var.f46834x == null) {
                this.f46836d = 2;
            }
            int i11 = this.f46836d;
            if (i11 == 2) {
                fVar.g(4);
                return -4;
            } else if ((i10 & 2) == 0 && i11 != 0) {
                if (!z10) {
                    return -3;
                }
                ne.a.e(q0Var.f46834x);
                fVar.g(1);
                fVar.f46611p = 0L;
                if ((i10 & 4) == 0) {
                    fVar.u(q0.this.f46835y);
                    ByteBuffer byteBuffer = fVar.f46609i;
                    q0 q0Var2 = q0.this;
                    byteBuffer.put(q0Var2.f46834x, 0, q0Var2.f46835y);
                }
                if ((i10 & 1) == 0) {
                    this.f46836d = 2;
                }
                return -4;
            } else {
                xVar.f36029b = q0Var.f46831u;
                this.f46836d = 1;
                return -5;
            }
        }

        public void d() {
            if (this.f46836d == 2) {
                this.f46836d = 1;
            }
        }

        @Override // qd.m0
        public boolean isReady() {
            return q0.this.f46833w;
        }

        @Override // qd.m0
        public int q(long j10) {
            b();
            if (j10 > 0 && this.f46836d != 2) {
                this.f46836d = 2;
                return 1;
            }
            return 0;
        }
    }

    public q0(com.google.android.exoplayer2.upstream.a aVar, DataSource.Factory factory, le.c0 c0Var, Format format, long j10, com.google.android.exoplayer2.upstream.i iVar, y.a aVar2, boolean z10) {
        this.f46822d = aVar;
        this.f46823e = factory;
        this.f46824i = c0Var;
        this.f46831u = format;
        this.f46829s = j10;
        this.f46825o = iVar;
        this.f46826p = aVar2;
        this.f46832v = z10;
        this.f46827q = new w0(new u0(format));
    }

    @Override // qd.p, qd.n0
    public long b() {
        if (!this.f46833w && !this.f46830t.j()) {
            return 0L;
        }
        return Long.MIN_VALUE;
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: c */
    public void i(c cVar, long j10, long j11, boolean z10) {
        le.a0 a0Var = cVar.f46841c;
        LoadEventInfo loadEventInfo = new LoadEventInfo(cVar.f46839a, cVar.f46840b, a0Var.p(), a0Var.q(), j10, j11, a0Var.o());
        this.f46825o.d(cVar.f46839a);
        this.f46826p.k(loadEventInfo, 1, -1, null, 0, null, 0L, this.f46829s);
    }

    @Override // qd.p, qd.n0
    public boolean d() {
        return this.f46830t.j();
    }

    @Override // qd.p, qd.n0
    public boolean f(long j10) {
        if (!this.f46833w && !this.f46830t.j() && !this.f46830t.i()) {
            DataSource createDataSource = this.f46823e.createDataSource();
            le.c0 c0Var = this.f46824i;
            if (c0Var != null) {
                createDataSource.j(c0Var);
            }
            c cVar = new c(this.f46822d, createDataSource);
            this.f46826p.t(new LoadEventInfo(cVar.f46839a, this.f46822d, this.f46830t.n(cVar, this, this.f46825o.b(1))), 1, -1, this.f46831u, 0, null, 0L, this.f46829s);
            return true;
        }
        return false;
    }

    @Override // qd.p, qd.n0
    public long g() {
        if (this.f46833w) {
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
        for (int i10 = 0; i10 < this.f46828r.size(); i10++) {
            ((b) this.f46828r.get(i10)).d();
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
                this.f46828r.remove(m0Var);
                m0VarArr[i10] = null;
            }
            if (m0VarArr[i10] == null && gVarArr[i10] != null) {
                b bVar = new b();
                this.f46828r.add(bVar);
                m0VarArr[i10] = bVar;
                zArr2[i10] = true;
            }
        }
        return j10;
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: p */
    public void j(c cVar, long j10, long j11) {
        this.f46835y = (int) cVar.f46841c.o();
        this.f46834x = (byte[]) ne.a.e(cVar.f46842d);
        this.f46833w = true;
        le.a0 a0Var = cVar.f46841c;
        LoadEventInfo loadEventInfo = new LoadEventInfo(cVar.f46839a, cVar.f46840b, a0Var.p(), a0Var.q(), j10, j11, this.f46835y);
        this.f46825o.d(cVar.f46839a);
        this.f46826p.n(loadEventInfo, 1, -1, this.f46831u, 0, null, 0L, this.f46829s);
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: q */
    public j.c n(c cVar, long j10, long j11, IOException iOException, int i10) {
        boolean z10;
        j.c cVar2;
        le.a0 a0Var = cVar.f46841c;
        LoadEventInfo loadEventInfo = new LoadEventInfo(cVar.f46839a, cVar.f46840b, a0Var.p(), a0Var.q(), j10, j11, a0Var.o());
        long a10 = this.f46825o.a(new i.c(loadEventInfo, new MediaLoadData(1, -1, this.f46831u, 0, null, 0L, ne.w0.p1(this.f46829s)), iOException, i10));
        int i11 = (a10 > (-9223372036854775807L) ? 1 : (a10 == (-9223372036854775807L) ? 0 : -1));
        if (i11 != 0 && i10 < this.f46825o.b(1)) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (this.f46832v && z10) {
            ne.y.j("SingleSampleMediaPeriod", "Loading failed, treating as end-of-stream.", iOException);
            this.f46833w = true;
            cVar2 = com.google.android.exoplayer2.upstream.j.f13428f;
        } else if (i11 != 0) {
            cVar2 = com.google.android.exoplayer2.upstream.j.h(false, a10);
        } else {
            cVar2 = com.google.android.exoplayer2.upstream.j.f13429g;
        }
        j.c cVar3 = cVar2;
        boolean c10 = cVar3.c();
        this.f46826p.p(loadEventInfo, 1, -1, this.f46831u, 0, null, 0L, this.f46829s, iOException, !c10);
        if (!c10) {
            this.f46825o.d(cVar.f46839a);
        }
        return cVar3;
    }

    public void s() {
        this.f46830t.l();
    }

    @Override // qd.p
    public w0 t() {
        return this.f46827q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c implements j.e {

        /* renamed from: a  reason: collision with root package name */
        public final long f46839a = LoadEventInfo.a();

        /* renamed from: b  reason: collision with root package name */
        public final com.google.android.exoplayer2.upstream.a f46840b;

        /* renamed from: c  reason: collision with root package name */
        private final le.a0 f46841c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f46842d;

        public c(com.google.android.exoplayer2.upstream.a aVar, DataSource dataSource) {
            this.f46840b = aVar;
            this.f46841c = new le.a0(dataSource);
        }

        @Override // com.google.android.exoplayer2.upstream.j.e
        public void b() {
            this.f46841c.r();
            try {
                this.f46841c.b(this.f46840b);
                int i10 = 0;
                while (i10 != -1) {
                    int o10 = (int) this.f46841c.o();
                    byte[] bArr = this.f46842d;
                    if (bArr == null) {
                        this.f46842d = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];
                    } else if (o10 == bArr.length) {
                        this.f46842d = Arrays.copyOf(bArr, bArr.length * 2);
                    }
                    le.a0 a0Var = this.f46841c;
                    byte[] bArr2 = this.f46842d;
                    i10 = a0Var.read(bArr2, o10, bArr2.length - o10);
                }
                le.o.a(this.f46841c);
            } catch (Throwable th2) {
                le.o.a(this.f46841c);
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
