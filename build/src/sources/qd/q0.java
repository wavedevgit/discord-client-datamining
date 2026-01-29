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
    private final com.google.android.exoplayer2.upstream.a f47289d;

    /* renamed from: e  reason: collision with root package name */
    private final DataSource.Factory f47290e;

    /* renamed from: i  reason: collision with root package name */
    private final le.c0 f47291i;

    /* renamed from: o  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.h f47292o;

    /* renamed from: p  reason: collision with root package name */
    private final y.a f47293p;

    /* renamed from: q  reason: collision with root package name */
    private final w0 f47294q;

    /* renamed from: s  reason: collision with root package name */
    private final long f47296s;

    /* renamed from: u  reason: collision with root package name */
    final Format f47298u;

    /* renamed from: v  reason: collision with root package name */
    final boolean f47299v;

    /* renamed from: w  reason: collision with root package name */
    boolean f47300w;

    /* renamed from: x  reason: collision with root package name */
    byte[] f47301x;

    /* renamed from: y  reason: collision with root package name */
    int f47302y;

    /* renamed from: r  reason: collision with root package name */
    private final ArrayList f47295r = new ArrayList();

    /* renamed from: t  reason: collision with root package name */
    final com.google.android.exoplayer2.upstream.i f47297t = new com.google.android.exoplayer2.upstream.i("SingleSampleMediaPeriod");

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class b implements m0 {

        /* renamed from: d  reason: collision with root package name */
        private int f47303d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f47304e;

        private b() {
        }

        private void b() {
            if (!this.f47304e) {
                q0.this.f47293p.h(ne.c0.k(q0.this.f47298u.f12706w), q0.this.f47298u, 0, null, 0L);
                this.f47304e = true;
            }
        }

        @Override // qd.m0
        public void a() {
            q0 q0Var = q0.this;
            if (!q0Var.f47299v) {
                q0Var.f47297t.a();
            }
        }

        @Override // qd.m0
        public int c(lc.x xVar, qc.f fVar, int i10) {
            b();
            q0 q0Var = q0.this;
            boolean z10 = q0Var.f47300w;
            if (z10 && q0Var.f47301x == null) {
                this.f47303d = 2;
            }
            int i11 = this.f47303d;
            if (i11 == 2) {
                fVar.g(4);
                return -4;
            } else if ((i10 & 2) == 0 && i11 != 0) {
                if (!z10) {
                    return -3;
                }
                ne.a.e(q0Var.f47301x);
                fVar.g(1);
                fVar.f47078p = 0L;
                if ((i10 & 4) == 0) {
                    fVar.u(q0.this.f47302y);
                    ByteBuffer byteBuffer = fVar.f47076i;
                    q0 q0Var2 = q0.this;
                    byteBuffer.put(q0Var2.f47301x, 0, q0Var2.f47302y);
                }
                if ((i10 & 1) == 0) {
                    this.f47303d = 2;
                }
                return -4;
            } else {
                xVar.f37110b = q0Var.f47298u;
                this.f47303d = 1;
                return -5;
            }
        }

        public void d() {
            if (this.f47303d == 2) {
                this.f47303d = 1;
            }
        }

        @Override // qd.m0
        public boolean isReady() {
            return q0.this.f47300w;
        }

        @Override // qd.m0
        public int q(long j10) {
            b();
            if (j10 > 0 && this.f47303d != 2) {
                this.f47303d = 2;
                return 1;
            }
            return 0;
        }
    }

    public q0(com.google.android.exoplayer2.upstream.a aVar, DataSource.Factory factory, le.c0 c0Var, Format format, long j10, com.google.android.exoplayer2.upstream.h hVar, y.a aVar2, boolean z10) {
        this.f47289d = aVar;
        this.f47290e = factory;
        this.f47291i = c0Var;
        this.f47298u = format;
        this.f47296s = j10;
        this.f47292o = hVar;
        this.f47293p = aVar2;
        this.f47299v = z10;
        this.f47294q = new w0(new u0(format));
    }

    @Override // qd.p, qd.n0
    public long b() {
        if (!this.f47300w && !this.f47297t.j()) {
            return 0L;
        }
        return Long.MIN_VALUE;
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: c */
    public void i(c cVar, long j10, long j11, boolean z10) {
        le.a0 a0Var = cVar.f47308c;
        LoadEventInfo loadEventInfo = new LoadEventInfo(cVar.f47306a, cVar.f47307b, a0Var.p(), a0Var.q(), j10, j11, a0Var.o());
        this.f47292o.d(cVar.f47306a);
        this.f47293p.k(loadEventInfo, 1, -1, null, 0, null, 0L, this.f47296s);
    }

    @Override // qd.p, qd.n0
    public boolean d() {
        return this.f47297t.j();
    }

    @Override // qd.p, qd.n0
    public boolean f(long j10) {
        if (!this.f47300w && !this.f47297t.j() && !this.f47297t.i()) {
            DataSource createDataSource = this.f47290e.createDataSource();
            le.c0 c0Var = this.f47291i;
            if (c0Var != null) {
                createDataSource.j(c0Var);
            }
            c cVar = new c(this.f47289d, createDataSource);
            this.f47293p.t(new LoadEventInfo(cVar.f47306a, this.f47289d, this.f47297t.n(cVar, this, this.f47292o.b(1))), 1, -1, this.f47298u, 0, null, 0L, this.f47296s);
            return true;
        }
        return false;
    }

    @Override // qd.p, qd.n0
    public long g() {
        if (this.f47300w) {
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
        for (int i10 = 0; i10 < this.f47295r.size(); i10++) {
            ((b) this.f47295r.get(i10)).d();
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
                this.f47295r.remove(m0Var);
                m0VarArr[i10] = null;
            }
            if (m0VarArr[i10] == null && gVarArr[i10] != null) {
                b bVar = new b();
                this.f47295r.add(bVar);
                m0VarArr[i10] = bVar;
                zArr2[i10] = true;
            }
        }
        return j10;
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: p */
    public void j(c cVar, long j10, long j11) {
        this.f47302y = (int) cVar.f47308c.o();
        this.f47301x = (byte[]) ne.a.e(cVar.f47309d);
        this.f47300w = true;
        le.a0 a0Var = cVar.f47308c;
        LoadEventInfo loadEventInfo = new LoadEventInfo(cVar.f47306a, cVar.f47307b, a0Var.p(), a0Var.q(), j10, j11, this.f47302y);
        this.f47292o.d(cVar.f47306a);
        this.f47293p.n(loadEventInfo, 1, -1, this.f47298u, 0, null, 0L, this.f47296s);
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: q */
    public i.c n(c cVar, long j10, long j11, IOException iOException, int i10) {
        boolean z10;
        i.c cVar2;
        le.a0 a0Var = cVar.f47308c;
        LoadEventInfo loadEventInfo = new LoadEventInfo(cVar.f47306a, cVar.f47307b, a0Var.p(), a0Var.q(), j10, j11, a0Var.o());
        long a10 = this.f47292o.a(new h.c(loadEventInfo, new MediaLoadData(1, -1, this.f47298u, 0, null, 0L, ne.w0.p1(this.f47296s)), iOException, i10));
        int i11 = (a10 > (-9223372036854775807L) ? 1 : (a10 == (-9223372036854775807L) ? 0 : -1));
        if (i11 != 0 && i10 < this.f47292o.b(1)) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (this.f47299v && z10) {
            ne.y.j("SingleSampleMediaPeriod", "Loading failed, treating as end-of-stream.", iOException);
            this.f47300w = true;
            cVar2 = com.google.android.exoplayer2.upstream.i.f14485f;
        } else if (i11 != 0) {
            cVar2 = com.google.android.exoplayer2.upstream.i.h(false, a10);
        } else {
            cVar2 = com.google.android.exoplayer2.upstream.i.f14486g;
        }
        i.c cVar3 = cVar2;
        boolean c10 = cVar3.c();
        this.f47293p.p(loadEventInfo, 1, -1, this.f47298u, 0, null, 0L, this.f47296s, iOException, !c10);
        if (!c10) {
            this.f47292o.d(cVar.f47306a);
        }
        return cVar3;
    }

    public void s() {
        this.f47297t.l();
    }

    @Override // qd.p
    public w0 t() {
        return this.f47294q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c implements i.e {

        /* renamed from: a  reason: collision with root package name */
        public final long f47306a = LoadEventInfo.a();

        /* renamed from: b  reason: collision with root package name */
        public final com.google.android.exoplayer2.upstream.a f47307b;

        /* renamed from: c  reason: collision with root package name */
        private final le.a0 f47308c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f47309d;

        public c(com.google.android.exoplayer2.upstream.a aVar, DataSource dataSource) {
            this.f47307b = aVar;
            this.f47308c = new le.a0(dataSource);
        }

        @Override // com.google.android.exoplayer2.upstream.i.e
        public void b() {
            this.f47308c.r();
            try {
                this.f47308c.b(this.f47307b);
                int i10 = 0;
                while (i10 != -1) {
                    int o10 = (int) this.f47308c.o();
                    byte[] bArr = this.f47309d;
                    if (bArr == null) {
                        this.f47309d = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];
                    } else if (o10 == bArr.length) {
                        this.f47309d = Arrays.copyOf(bArr, bArr.length * 2);
                    }
                    le.a0 a0Var = this.f47308c;
                    byte[] bArr2 = this.f47309d;
                    i10 = a0Var.read(bArr2, o10, bArr2.length - o10);
                }
                le.o.a(this.f47308c);
            } catch (Throwable th2) {
                le.o.a(this.f47308c);
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
