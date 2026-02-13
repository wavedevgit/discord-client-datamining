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
    private final com.google.android.exoplayer2.upstream.a f47011d;

    /* renamed from: e  reason: collision with root package name */
    private final DataSource.Factory f47012e;

    /* renamed from: i  reason: collision with root package name */
    private final me.c0 f47013i;

    /* renamed from: o  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f47014o;

    /* renamed from: p  reason: collision with root package name */
    private final y.a f47015p;

    /* renamed from: q  reason: collision with root package name */
    private final w0 f47016q;

    /* renamed from: s  reason: collision with root package name */
    private final long f47018s;

    /* renamed from: u  reason: collision with root package name */
    final Format f47020u;

    /* renamed from: v  reason: collision with root package name */
    final boolean f47021v;

    /* renamed from: w  reason: collision with root package name */
    boolean f47022w;

    /* renamed from: x  reason: collision with root package name */
    byte[] f47023x;

    /* renamed from: y  reason: collision with root package name */
    int f47024y;

    /* renamed from: r  reason: collision with root package name */
    private final ArrayList f47017r = new ArrayList();

    /* renamed from: t  reason: collision with root package name */
    final com.google.android.exoplayer2.upstream.j f47019t = new com.google.android.exoplayer2.upstream.j("SingleSampleMediaPeriod");

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class b implements m0 {

        /* renamed from: d  reason: collision with root package name */
        private int f47025d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f47026e;

        private b() {
        }

        private void b() {
            if (!this.f47026e) {
                q0.this.f47015p.h(oe.c0.k(q0.this.f47020u.f12305w), q0.this.f47020u, 0, null, 0L);
                this.f47026e = true;
            }
        }

        @Override // rd.m0
        public void a() {
            q0 q0Var = q0.this;
            if (!q0Var.f47021v) {
                q0Var.f47019t.a();
            }
        }

        @Override // rd.m0
        public int c(mc.x xVar, rc.f fVar, int i10) {
            b();
            q0 q0Var = q0.this;
            boolean z10 = q0Var.f47022w;
            if (z10 && q0Var.f47023x == null) {
                this.f47025d = 2;
            }
            int i11 = this.f47025d;
            if (i11 == 2) {
                fVar.g(4);
                return -4;
            } else if ((i10 & 2) == 0 && i11 != 0) {
                if (!z10) {
                    return -3;
                }
                oe.a.e(q0Var.f47023x);
                fVar.g(1);
                fVar.f46800p = 0L;
                if ((i10 & 4) == 0) {
                    fVar.u(q0.this.f47024y);
                    ByteBuffer byteBuffer = fVar.f46798i;
                    q0 q0Var2 = q0.this;
                    byteBuffer.put(q0Var2.f47023x, 0, q0Var2.f47024y);
                }
                if ((i10 & 1) == 0) {
                    this.f47025d = 2;
                }
                return -4;
            } else {
                xVar.f36851b = q0Var.f47020u;
                this.f47025d = 1;
                return -5;
            }
        }

        public void d() {
            if (this.f47025d == 2) {
                this.f47025d = 1;
            }
        }

        @Override // rd.m0
        public boolean isReady() {
            return q0.this.f47022w;
        }

        @Override // rd.m0
        public int j(long j10) {
            b();
            if (j10 > 0 && this.f47025d != 2) {
                this.f47025d = 2;
                return 1;
            }
            return 0;
        }
    }

    public q0(com.google.android.exoplayer2.upstream.a aVar, DataSource.Factory factory, me.c0 c0Var, Format format, long j10, com.google.android.exoplayer2.upstream.i iVar, y.a aVar2, boolean z10) {
        this.f47011d = aVar;
        this.f47012e = factory;
        this.f47013i = c0Var;
        this.f47020u = format;
        this.f47018s = j10;
        this.f47014o = iVar;
        this.f47015p = aVar2;
        this.f47021v = z10;
        this.f47016q = new w0(new u0(format));
    }

    @Override // rd.p, rd.n0
    public long b() {
        if (!this.f47022w && !this.f47019t.j()) {
            return 0L;
        }
        return Long.MIN_VALUE;
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: c */
    public void i(c cVar, long j10, long j11, boolean z10) {
        me.a0 a0Var = cVar.f47030c;
        LoadEventInfo loadEventInfo = new LoadEventInfo(cVar.f47028a, cVar.f47029b, a0Var.p(), a0Var.q(), j10, j11, a0Var.o());
        this.f47014o.d(cVar.f47028a);
        this.f47015p.k(loadEventInfo, 1, -1, null, 0, null, 0L, this.f47018s);
    }

    @Override // rd.p, rd.n0
    public boolean d() {
        return this.f47019t.j();
    }

    @Override // rd.p, rd.n0
    public boolean f(long j10) {
        if (!this.f47022w && !this.f47019t.j() && !this.f47019t.i()) {
            DataSource createDataSource = this.f47012e.createDataSource();
            me.c0 c0Var = this.f47013i;
            if (c0Var != null) {
                createDataSource.i(c0Var);
            }
            c cVar = new c(this.f47011d, createDataSource);
            this.f47015p.t(new LoadEventInfo(cVar.f47028a, this.f47011d, this.f47019t.n(cVar, this, this.f47014o.b(1))), 1, -1, this.f47020u, 0, null, 0L, this.f47018s);
            return true;
        }
        return false;
    }

    @Override // rd.p, rd.n0
    public long g() {
        if (this.f47022w) {
            return Long.MIN_VALUE;
        }
        return 0L;
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: j */
    public void k(c cVar, long j10, long j11) {
        this.f47024y = (int) cVar.f47030c.o();
        this.f47023x = (byte[]) oe.a.e(cVar.f47031d);
        this.f47022w = true;
        me.a0 a0Var = cVar.f47030c;
        LoadEventInfo loadEventInfo = new LoadEventInfo(cVar.f47028a, cVar.f47029b, a0Var.p(), a0Var.q(), j10, j11, this.f47024y);
        this.f47014o.d(cVar.f47028a);
        this.f47015p.n(loadEventInfo, 1, -1, this.f47020u, 0, null, 0L, this.f47018s);
    }

    @Override // rd.p
    public long l(long j10) {
        for (int i10 = 0; i10 < this.f47017r.size(); i10++) {
            ((b) this.f47017r.get(i10)).d();
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
        me.a0 a0Var = cVar.f47030c;
        LoadEventInfo loadEventInfo = new LoadEventInfo(cVar.f47028a, cVar.f47029b, a0Var.p(), a0Var.q(), j10, j11, a0Var.o());
        long a10 = this.f47014o.a(new i.c(loadEventInfo, new MediaLoadData(1, -1, this.f47020u, 0, null, 0L, oe.w0.p1(this.f47018s)), iOException, i10));
        int i11 = (a10 > (-9223372036854775807L) ? 1 : (a10 == (-9223372036854775807L) ? 0 : -1));
        if (i11 != 0 && i10 < this.f47014o.b(1)) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (this.f47021v && z10) {
            oe.y.j("SingleSampleMediaPeriod", "Loading failed, treating as end-of-stream.", iOException);
            this.f47022w = true;
            cVar2 = com.google.android.exoplayer2.upstream.j.f14146f;
        } else if (i11 != 0) {
            cVar2 = com.google.android.exoplayer2.upstream.j.h(false, a10);
        } else {
            cVar2 = com.google.android.exoplayer2.upstream.j.f14147g;
        }
        j.c cVar3 = cVar2;
        boolean c10 = cVar3.c();
        this.f47015p.p(loadEventInfo, 1, -1, this.f47020u, 0, null, 0L, this.f47018s, iOException, !c10);
        if (!c10) {
            this.f47014o.d(cVar.f47028a);
        }
        return cVar3;
    }

    public void q() {
        this.f47019t.l();
    }

    @Override // rd.p
    public long r(com.google.android.exoplayer2.trackselection.g[] gVarArr, boolean[] zArr, m0[] m0VarArr, boolean[] zArr2, long j10) {
        for (int i10 = 0; i10 < gVarArr.length; i10++) {
            m0 m0Var = m0VarArr[i10];
            if (m0Var != null && (gVarArr[i10] == null || !zArr[i10])) {
                this.f47017r.remove(m0Var);
                m0VarArr[i10] = null;
            }
            if (m0VarArr[i10] == null && gVarArr[i10] != null) {
                b bVar = new b();
                this.f47017r.add(bVar);
                m0VarArr[i10] = bVar;
                zArr2[i10] = true;
            }
        }
        return j10;
    }

    @Override // rd.p
    public w0 s() {
        return this.f47016q;
    }

    @Override // rd.p
    public void u(p.a aVar, long j10) {
        aVar.j(this);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c implements j.e {

        /* renamed from: a  reason: collision with root package name */
        public final long f47028a = LoadEventInfo.a();

        /* renamed from: b  reason: collision with root package name */
        public final com.google.android.exoplayer2.upstream.a f47029b;

        /* renamed from: c  reason: collision with root package name */
        private final me.a0 f47030c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f47031d;

        public c(com.google.android.exoplayer2.upstream.a aVar, DataSource dataSource) {
            this.f47029b = aVar;
            this.f47030c = new me.a0(dataSource);
        }

        @Override // com.google.android.exoplayer2.upstream.j.e
        public void a() {
            this.f47030c.r();
            try {
                this.f47030c.b(this.f47029b);
                int i10 = 0;
                while (i10 != -1) {
                    int o10 = (int) this.f47030c.o();
                    byte[] bArr = this.f47031d;
                    if (bArr == null) {
                        this.f47031d = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];
                    } else if (o10 == bArr.length) {
                        this.f47031d = Arrays.copyOf(bArr, bArr.length * 2);
                    }
                    me.a0 a0Var = this.f47030c;
                    byte[] bArr2 = this.f47031d;
                    i10 = a0Var.read(bArr2, o10, bArr2.length - o10);
                }
                me.o.a(this.f47030c);
            } catch (Throwable th2) {
                me.o.a(this.f47030c);
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
