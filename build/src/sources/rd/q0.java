package rd;

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
import rd.p;
import rd.y;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q0 implements p, j.b {

    /* renamed from: d  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.a f46443d;

    /* renamed from: e  reason: collision with root package name */
    private final DataSource.Factory f46444e;

    /* renamed from: i  reason: collision with root package name */
    private final me.c0 f46445i;

    /* renamed from: o  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f46446o;

    /* renamed from: p  reason: collision with root package name */
    private final y.a f46447p;

    /* renamed from: q  reason: collision with root package name */
    private final w0 f46448q;

    /* renamed from: s  reason: collision with root package name */
    private final long f46450s;

    /* renamed from: u  reason: collision with root package name */
    final Format f46452u;

    /* renamed from: v  reason: collision with root package name */
    final boolean f46453v;

    /* renamed from: w  reason: collision with root package name */
    boolean f46454w;

    /* renamed from: x  reason: collision with root package name */
    byte[] f46455x;

    /* renamed from: y  reason: collision with root package name */
    int f46456y;

    /* renamed from: r  reason: collision with root package name */
    private final ArrayList f46449r = new ArrayList();

    /* renamed from: t  reason: collision with root package name */
    final com.google.android.exoplayer2.upstream.j f46451t = new com.google.android.exoplayer2.upstream.j("SingleSampleMediaPeriod");

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class b implements m0 {

        /* renamed from: d  reason: collision with root package name */
        private int f46457d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f46458e;

        private b() {
        }

        private void b() {
            if (!this.f46458e) {
                q0.this.f46447p.h(oe.c0.k(q0.this.f46452u.f12305w), q0.this.f46452u, 0, null, 0L);
                this.f46458e = true;
            }
        }

        @Override // rd.m0
        public void a() {
            q0 q0Var = q0.this;
            if (!q0Var.f46453v) {
                q0Var.f46451t.a();
            }
        }

        @Override // rd.m0
        public int c(mc.x xVar, rc.f fVar, int i10) {
            b();
            q0 q0Var = q0.this;
            boolean z10 = q0Var.f46454w;
            if (z10 && q0Var.f46455x == null) {
                this.f46457d = 2;
            }
            int i11 = this.f46457d;
            if (i11 == 2) {
                fVar.g(4);
                return -4;
            } else if ((i10 & 2) == 0 && i11 != 0) {
                if (!z10) {
                    return -3;
                }
                oe.a.e(q0Var.f46455x);
                fVar.g(1);
                fVar.f46232p = 0L;
                if ((i10 & 4) == 0) {
                    fVar.u(q0.this.f46456y);
                    ByteBuffer byteBuffer = fVar.f46230i;
                    q0 q0Var2 = q0.this;
                    byteBuffer.put(q0Var2.f46455x, 0, q0Var2.f46456y);
                }
                if ((i10 & 1) == 0) {
                    this.f46457d = 2;
                }
                return -4;
            } else {
                xVar.f36283b = q0Var.f46452u;
                this.f46457d = 1;
                return -5;
            }
        }

        public void d() {
            if (this.f46457d == 2) {
                this.f46457d = 1;
            }
        }

        @Override // rd.m0
        public boolean isReady() {
            return q0.this.f46454w;
        }

        @Override // rd.m0
        public int j(long j10) {
            b();
            if (j10 > 0 && this.f46457d != 2) {
                this.f46457d = 2;
                return 1;
            }
            return 0;
        }
    }

    public q0(com.google.android.exoplayer2.upstream.a aVar, DataSource.Factory factory, me.c0 c0Var, Format format, long j10, com.google.android.exoplayer2.upstream.i iVar, y.a aVar2, boolean z10) {
        this.f46443d = aVar;
        this.f46444e = factory;
        this.f46445i = c0Var;
        this.f46452u = format;
        this.f46450s = j10;
        this.f46446o = iVar;
        this.f46447p = aVar2;
        this.f46453v = z10;
        this.f46448q = new w0(new u0(format));
    }

    @Override // rd.p, rd.n0
    public long b() {
        if (!this.f46454w && !this.f46451t.j()) {
            return 0L;
        }
        return Long.MIN_VALUE;
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: c */
    public void i(c cVar, long j10, long j11, boolean z10) {
        me.a0 a0Var = cVar.f46462c;
        LoadEventInfo loadEventInfo = new LoadEventInfo(cVar.f46460a, cVar.f46461b, a0Var.p(), a0Var.q(), j10, j11, a0Var.o());
        this.f46446o.d(cVar.f46460a);
        this.f46447p.k(loadEventInfo, 1, -1, null, 0, null, 0L, this.f46450s);
    }

    @Override // rd.p, rd.n0
    public boolean d() {
        return this.f46451t.j();
    }

    @Override // rd.p, rd.n0
    public boolean f(long j10) {
        if (!this.f46454w && !this.f46451t.j() && !this.f46451t.i()) {
            DataSource createDataSource = this.f46444e.createDataSource();
            me.c0 c0Var = this.f46445i;
            if (c0Var != null) {
                createDataSource.i(c0Var);
            }
            c cVar = new c(this.f46443d, createDataSource);
            this.f46447p.t(new LoadEventInfo(cVar.f46460a, this.f46443d, this.f46451t.n(cVar, this, this.f46446o.b(1))), 1, -1, this.f46452u, 0, null, 0L, this.f46450s);
            return true;
        }
        return false;
    }

    @Override // rd.p, rd.n0
    public long g() {
        if (this.f46454w) {
            return Long.MIN_VALUE;
        }
        return 0L;
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: j */
    public void k(c cVar, long j10, long j11) {
        this.f46456y = (int) cVar.f46462c.o();
        this.f46455x = (byte[]) oe.a.e(cVar.f46463d);
        this.f46454w = true;
        me.a0 a0Var = cVar.f46462c;
        LoadEventInfo loadEventInfo = new LoadEventInfo(cVar.f46460a, cVar.f46461b, a0Var.p(), a0Var.q(), j10, j11, this.f46456y);
        this.f46446o.d(cVar.f46460a);
        this.f46447p.n(loadEventInfo, 1, -1, this.f46452u, 0, null, 0L, this.f46450s);
    }

    @Override // rd.p
    public long l(long j10) {
        for (int i10 = 0; i10 < this.f46449r.size(); i10++) {
            ((b) this.f46449r.get(i10)).d();
        }
        return j10;
    }

    @Override // rd.p
    public long m() {
        return -9223372036854775807L;
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: o */
    public j.c n(c cVar, long j10, long j11, IOException iOException, int i10) {
        boolean z10;
        j.c cVar2;
        me.a0 a0Var = cVar.f46462c;
        LoadEventInfo loadEventInfo = new LoadEventInfo(cVar.f46460a, cVar.f46461b, a0Var.p(), a0Var.q(), j10, j11, a0Var.o());
        long a10 = this.f46446o.a(new i.c(loadEventInfo, new MediaLoadData(1, -1, this.f46452u, 0, null, 0L, oe.w0.p1(this.f46450s)), iOException, i10));
        int i11 = (a10 > (-9223372036854775807L) ? 1 : (a10 == (-9223372036854775807L) ? 0 : -1));
        if (i11 != 0 && i10 < this.f46446o.b(1)) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (this.f46453v && z10) {
            oe.y.j("SingleSampleMediaPeriod", "Loading failed, treating as end-of-stream.", iOException);
            this.f46454w = true;
            cVar2 = com.google.android.exoplayer2.upstream.j.f14146f;
        } else if (i11 != 0) {
            cVar2 = com.google.android.exoplayer2.upstream.j.h(false, a10);
        } else {
            cVar2 = com.google.android.exoplayer2.upstream.j.f14147g;
        }
        j.c cVar3 = cVar2;
        boolean c10 = cVar3.c();
        this.f46447p.p(loadEventInfo, 1, -1, this.f46452u, 0, null, 0L, this.f46450s, iOException, !c10);
        if (!c10) {
            this.f46446o.d(cVar.f46460a);
        }
        return cVar3;
    }

    public void q() {
        this.f46451t.l();
    }

    @Override // rd.p
    public long r(com.google.android.exoplayer2.trackselection.g[] gVarArr, boolean[] zArr, m0[] m0VarArr, boolean[] zArr2, long j10) {
        for (int i10 = 0; i10 < gVarArr.length; i10++) {
            m0 m0Var = m0VarArr[i10];
            if (m0Var != null && (gVarArr[i10] == null || !zArr[i10])) {
                this.f46449r.remove(m0Var);
                m0VarArr[i10] = null;
            }
            if (m0VarArr[i10] == null && gVarArr[i10] != null) {
                b bVar = new b();
                this.f46449r.add(bVar);
                m0VarArr[i10] = bVar;
                zArr2[i10] = true;
            }
        }
        return j10;
    }

    @Override // rd.p
    public w0 s() {
        return this.f46448q;
    }

    @Override // rd.p
    public void u(p.a aVar, long j10) {
        aVar.j(this);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c implements j.e {

        /* renamed from: a  reason: collision with root package name */
        public final long f46460a = LoadEventInfo.a();

        /* renamed from: b  reason: collision with root package name */
        public final com.google.android.exoplayer2.upstream.a f46461b;

        /* renamed from: c  reason: collision with root package name */
        private final me.a0 f46462c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f46463d;

        public c(com.google.android.exoplayer2.upstream.a aVar, DataSource dataSource) {
            this.f46461b = aVar;
            this.f46462c = new me.a0(dataSource);
        }

        @Override // com.google.android.exoplayer2.upstream.j.e
        public void a() {
            this.f46462c.r();
            try {
                this.f46462c.b(this.f46461b);
                int i10 = 0;
                while (i10 != -1) {
                    int o10 = (int) this.f46462c.o();
                    byte[] bArr = this.f46463d;
                    if (bArr == null) {
                        this.f46463d = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];
                    } else if (o10 == bArr.length) {
                        this.f46463d = Arrays.copyOf(bArr, bArr.length * 2);
                    }
                    me.a0 a0Var = this.f46462c;
                    byte[] bArr2 = this.f46463d;
                    i10 = a0Var.read(bArr2, o10, bArr2.length - o10);
                }
                me.o.a(this.f46462c);
            } catch (Throwable th2) {
                me.o.a(this.f46462c);
                throw th2;
            }
        }

        @Override // com.google.android.exoplayer2.upstream.j.e
        public void c() {
        }
    }

    @Override // rd.p
    public void p() {
    }

    @Override // rd.p, rd.n0
    public void h(long j10) {
    }

    @Override // rd.p
    public long e(long j10, mc.t0 t0Var) {
        return j10;
    }

    @Override // rd.p
    public void t(long j10, boolean z10) {
    }
}
