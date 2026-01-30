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
    private final com.google.android.exoplayer2.upstream.a f47305d;

    /* renamed from: e  reason: collision with root package name */
    private final DataSource.Factory f47306e;

    /* renamed from: i  reason: collision with root package name */
    private final le.c0 f47307i;

    /* renamed from: o  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.h f47308o;

    /* renamed from: p  reason: collision with root package name */
    private final y.a f47309p;

    /* renamed from: q  reason: collision with root package name */
    private final w0 f47310q;

    /* renamed from: s  reason: collision with root package name */
    private final long f47312s;

    /* renamed from: u  reason: collision with root package name */
    final Format f47314u;

    /* renamed from: v  reason: collision with root package name */
    final boolean f47315v;

    /* renamed from: w  reason: collision with root package name */
    boolean f47316w;

    /* renamed from: x  reason: collision with root package name */
    byte[] f47317x;

    /* renamed from: y  reason: collision with root package name */
    int f47318y;

    /* renamed from: r  reason: collision with root package name */
    private final ArrayList f47311r = new ArrayList();

    /* renamed from: t  reason: collision with root package name */
    final com.google.android.exoplayer2.upstream.i f47313t = new com.google.android.exoplayer2.upstream.i("SingleSampleMediaPeriod");

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class b implements m0 {

        /* renamed from: d  reason: collision with root package name */
        private int f47319d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f47320e;

        private b() {
        }

        private void b() {
            if (!this.f47320e) {
                q0.this.f47309p.h(ne.c0.k(q0.this.f47314u.f12706w), q0.this.f47314u, 0, null, 0L);
                this.f47320e = true;
            }
        }

        @Override // qd.m0
        public void a() {
            q0 q0Var = q0.this;
            if (!q0Var.f47315v) {
                q0Var.f47313t.a();
            }
        }

        @Override // qd.m0
        public int c(lc.x xVar, qc.f fVar, int i10) {
            b();
            q0 q0Var = q0.this;
            boolean z10 = q0Var.f47316w;
            if (z10 && q0Var.f47317x == null) {
                this.f47319d = 2;
            }
            int i11 = this.f47319d;
            if (i11 == 2) {
                fVar.g(4);
                return -4;
            } else if ((i10 & 2) == 0 && i11 != 0) {
                if (!z10) {
                    return -3;
                }
                ne.a.e(q0Var.f47317x);
                fVar.g(1);
                fVar.f47094p = 0L;
                if ((i10 & 4) == 0) {
                    fVar.u(q0.this.f47318y);
                    ByteBuffer byteBuffer = fVar.f47092i;
                    q0 q0Var2 = q0.this;
                    byteBuffer.put(q0Var2.f47317x, 0, q0Var2.f47318y);
                }
                if ((i10 & 1) == 0) {
                    this.f47319d = 2;
                }
                return -4;
            } else {
                xVar.f37126b = q0Var.f47314u;
                this.f47319d = 1;
                return -5;
            }
        }

        public void d() {
            if (this.f47319d == 2) {
                this.f47319d = 1;
            }
        }

        @Override // qd.m0
        public boolean isReady() {
            return q0.this.f47316w;
        }

        @Override // qd.m0
        public int q(long j10) {
            b();
            if (j10 > 0 && this.f47319d != 2) {
                this.f47319d = 2;
                return 1;
            }
            return 0;
        }
    }

    public q0(com.google.android.exoplayer2.upstream.a aVar, DataSource.Factory factory, le.c0 c0Var, Format format, long j10, com.google.android.exoplayer2.upstream.h hVar, y.a aVar2, boolean z10) {
        this.f47305d = aVar;
        this.f47306e = factory;
        this.f47307i = c0Var;
        this.f47314u = format;
        this.f47312s = j10;
        this.f47308o = hVar;
        this.f47309p = aVar2;
        this.f47315v = z10;
        this.f47310q = new w0(new u0(format));
    }

    @Override // qd.p, qd.n0
    public long b() {
        if (!this.f47316w && !this.f47313t.j()) {
            return 0L;
        }
        return Long.MIN_VALUE;
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: c */
    public void i(c cVar, long j10, long j11, boolean z10) {
        le.a0 a0Var = cVar.f47324c;
        LoadEventInfo loadEventInfo = new LoadEventInfo(cVar.f47322a, cVar.f47323b, a0Var.p(), a0Var.q(), j10, j11, a0Var.o());
        this.f47308o.d(cVar.f47322a);
        this.f47309p.k(loadEventInfo, 1, -1, null, 0, null, 0L, this.f47312s);
    }

    @Override // qd.p, qd.n0
    public boolean d() {
        return this.f47313t.j();
    }

    @Override // qd.p, qd.n0
    public boolean f(long j10) {
        if (!this.f47316w && !this.f47313t.j() && !this.f47313t.i()) {
            DataSource createDataSource = this.f47306e.createDataSource();
            le.c0 c0Var = this.f47307i;
            if (c0Var != null) {
                createDataSource.j(c0Var);
            }
            c cVar = new c(this.f47305d, createDataSource);
            this.f47309p.t(new LoadEventInfo(cVar.f47322a, this.f47305d, this.f47313t.n(cVar, this, this.f47308o.b(1))), 1, -1, this.f47314u, 0, null, 0L, this.f47312s);
            return true;
        }
        return false;
    }

    @Override // qd.p, qd.n0
    public long g() {
        if (this.f47316w) {
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
        for (int i10 = 0; i10 < this.f47311r.size(); i10++) {
            ((b) this.f47311r.get(i10)).d();
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
                this.f47311r.remove(m0Var);
                m0VarArr[i10] = null;
            }
            if (m0VarArr[i10] == null && gVarArr[i10] != null) {
                b bVar = new b();
                this.f47311r.add(bVar);
                m0VarArr[i10] = bVar;
                zArr2[i10] = true;
            }
        }
        return j10;
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: p */
    public void j(c cVar, long j10, long j11) {
        this.f47318y = (int) cVar.f47324c.o();
        this.f47317x = (byte[]) ne.a.e(cVar.f47325d);
        this.f47316w = true;
        le.a0 a0Var = cVar.f47324c;
        LoadEventInfo loadEventInfo = new LoadEventInfo(cVar.f47322a, cVar.f47323b, a0Var.p(), a0Var.q(), j10, j11, this.f47318y);
        this.f47308o.d(cVar.f47322a);
        this.f47309p.n(loadEventInfo, 1, -1, this.f47314u, 0, null, 0L, this.f47312s);
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: q */
    public i.c n(c cVar, long j10, long j11, IOException iOException, int i10) {
        boolean z10;
        i.c cVar2;
        le.a0 a0Var = cVar.f47324c;
        LoadEventInfo loadEventInfo = new LoadEventInfo(cVar.f47322a, cVar.f47323b, a0Var.p(), a0Var.q(), j10, j11, a0Var.o());
        long a10 = this.f47308o.a(new h.c(loadEventInfo, new MediaLoadData(1, -1, this.f47314u, 0, null, 0L, ne.w0.p1(this.f47312s)), iOException, i10));
        int i11 = (a10 > (-9223372036854775807L) ? 1 : (a10 == (-9223372036854775807L) ? 0 : -1));
        if (i11 != 0 && i10 < this.f47308o.b(1)) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (this.f47315v && z10) {
            ne.y.j("SingleSampleMediaPeriod", "Loading failed, treating as end-of-stream.", iOException);
            this.f47316w = true;
            cVar2 = com.google.android.exoplayer2.upstream.i.f14485f;
        } else if (i11 != 0) {
            cVar2 = com.google.android.exoplayer2.upstream.i.h(false, a10);
        } else {
            cVar2 = com.google.android.exoplayer2.upstream.i.f14486g;
        }
        i.c cVar3 = cVar2;
        boolean c10 = cVar3.c();
        this.f47309p.p(loadEventInfo, 1, -1, this.f47314u, 0, null, 0L, this.f47312s, iOException, !c10);
        if (!c10) {
            this.f47308o.d(cVar.f47322a);
        }
        return cVar3;
    }

    public void s() {
        this.f47313t.l();
    }

    @Override // qd.p
    public w0 t() {
        return this.f47310q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c implements i.e {

        /* renamed from: a  reason: collision with root package name */
        public final long f47322a = LoadEventInfo.a();

        /* renamed from: b  reason: collision with root package name */
        public final com.google.android.exoplayer2.upstream.a f47323b;

        /* renamed from: c  reason: collision with root package name */
        private final le.a0 f47324c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f47325d;

        public c(com.google.android.exoplayer2.upstream.a aVar, DataSource dataSource) {
            this.f47323b = aVar;
            this.f47324c = new le.a0(dataSource);
        }

        @Override // com.google.android.exoplayer2.upstream.i.e
        public void b() {
            this.f47324c.r();
            try {
                this.f47324c.b(this.f47323b);
                int i10 = 0;
                while (i10 != -1) {
                    int o10 = (int) this.f47324c.o();
                    byte[] bArr = this.f47325d;
                    if (bArr == null) {
                        this.f47325d = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];
                    } else if (o10 == bArr.length) {
                        this.f47325d = Arrays.copyOf(bArr, bArr.length * 2);
                    }
                    le.a0 a0Var = this.f47324c;
                    byte[] bArr2 = this.f47325d;
                    i10 = a0Var.read(bArr2, o10, bArr2.length - o10);
                }
                le.o.a(this.f47324c);
            } catch (Throwable th2) {
                le.o.a(this.f47324c);
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
