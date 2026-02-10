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
    private final com.google.android.exoplayer2.upstream.a f46442d;

    /* renamed from: e  reason: collision with root package name */
    private final DataSource.Factory f46443e;

    /* renamed from: i  reason: collision with root package name */
    private final me.c0 f46444i;

    /* renamed from: o  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f46445o;

    /* renamed from: p  reason: collision with root package name */
    private final y.a f46446p;

    /* renamed from: q  reason: collision with root package name */
    private final w0 f46447q;

    /* renamed from: s  reason: collision with root package name */
    private final long f46449s;

    /* renamed from: u  reason: collision with root package name */
    final Format f46451u;

    /* renamed from: v  reason: collision with root package name */
    final boolean f46452v;

    /* renamed from: w  reason: collision with root package name */
    boolean f46453w;

    /* renamed from: x  reason: collision with root package name */
    byte[] f46454x;

    /* renamed from: y  reason: collision with root package name */
    int f46455y;

    /* renamed from: r  reason: collision with root package name */
    private final ArrayList f46448r = new ArrayList();

    /* renamed from: t  reason: collision with root package name */
    final com.google.android.exoplayer2.upstream.j f46450t = new com.google.android.exoplayer2.upstream.j("SingleSampleMediaPeriod");

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class b implements m0 {

        /* renamed from: d  reason: collision with root package name */
        private int f46456d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f46457e;

        private b() {
        }

        private void b() {
            if (!this.f46457e) {
                q0.this.f46446p.h(oe.c0.k(q0.this.f46451u.f12304w), q0.this.f46451u, 0, null, 0L);
                this.f46457e = true;
            }
        }

        @Override // rd.m0
        public void a() {
            q0 q0Var = q0.this;
            if (!q0Var.f46452v) {
                q0Var.f46450t.a();
            }
        }

        @Override // rd.m0
        public int c(mc.x xVar, rc.f fVar, int i10) {
            b();
            q0 q0Var = q0.this;
            boolean z10 = q0Var.f46453w;
            if (z10 && q0Var.f46454x == null) {
                this.f46456d = 2;
            }
            int i11 = this.f46456d;
            if (i11 == 2) {
                fVar.g(4);
                return -4;
            } else if ((i10 & 2) == 0 && i11 != 0) {
                if (!z10) {
                    return -3;
                }
                oe.a.e(q0Var.f46454x);
                fVar.g(1);
                fVar.f46231p = 0L;
                if ((i10 & 4) == 0) {
                    fVar.u(q0.this.f46455y);
                    ByteBuffer byteBuffer = fVar.f46229i;
                    q0 q0Var2 = q0.this;
                    byteBuffer.put(q0Var2.f46454x, 0, q0Var2.f46455y);
                }
                if ((i10 & 1) == 0) {
                    this.f46456d = 2;
                }
                return -4;
            } else {
                xVar.f36282b = q0Var.f46451u;
                this.f46456d = 1;
                return -5;
            }
        }

        public void d() {
            if (this.f46456d == 2) {
                this.f46456d = 1;
            }
        }

        @Override // rd.m0
        public boolean isReady() {
            return q0.this.f46453w;
        }

        @Override // rd.m0
        public int j(long j10) {
            b();
            if (j10 > 0 && this.f46456d != 2) {
                this.f46456d = 2;
                return 1;
            }
            return 0;
        }
    }

    public q0(com.google.android.exoplayer2.upstream.a aVar, DataSource.Factory factory, me.c0 c0Var, Format format, long j10, com.google.android.exoplayer2.upstream.i iVar, y.a aVar2, boolean z10) {
        this.f46442d = aVar;
        this.f46443e = factory;
        this.f46444i = c0Var;
        this.f46451u = format;
        this.f46449s = j10;
        this.f46445o = iVar;
        this.f46446p = aVar2;
        this.f46452v = z10;
        this.f46447q = new w0(new u0(format));
    }

    @Override // rd.p, rd.n0
    public long b() {
        if (!this.f46453w && !this.f46450t.j()) {
            return 0L;
        }
        return Long.MIN_VALUE;
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: c */
    public void i(c cVar, long j10, long j11, boolean z10) {
        me.a0 a0Var = cVar.f46461c;
        LoadEventInfo loadEventInfo = new LoadEventInfo(cVar.f46459a, cVar.f46460b, a0Var.p(), a0Var.q(), j10, j11, a0Var.o());
        this.f46445o.d(cVar.f46459a);
        this.f46446p.k(loadEventInfo, 1, -1, null, 0, null, 0L, this.f46449s);
    }

    @Override // rd.p, rd.n0
    public boolean d() {
        return this.f46450t.j();
    }

    @Override // rd.p, rd.n0
    public boolean f(long j10) {
        if (!this.f46453w && !this.f46450t.j() && !this.f46450t.i()) {
            DataSource createDataSource = this.f46443e.createDataSource();
            me.c0 c0Var = this.f46444i;
            if (c0Var != null) {
                createDataSource.i(c0Var);
            }
            c cVar = new c(this.f46442d, createDataSource);
            this.f46446p.t(new LoadEventInfo(cVar.f46459a, this.f46442d, this.f46450t.n(cVar, this, this.f46445o.b(1))), 1, -1, this.f46451u, 0, null, 0L, this.f46449s);
            return true;
        }
        return false;
    }

    @Override // rd.p, rd.n0
    public long g() {
        if (this.f46453w) {
            return Long.MIN_VALUE;
        }
        return 0L;
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: j */
    public void k(c cVar, long j10, long j11) {
        this.f46455y = (int) cVar.f46461c.o();
        this.f46454x = (byte[]) oe.a.e(cVar.f46462d);
        this.f46453w = true;
        me.a0 a0Var = cVar.f46461c;
        LoadEventInfo loadEventInfo = new LoadEventInfo(cVar.f46459a, cVar.f46460b, a0Var.p(), a0Var.q(), j10, j11, this.f46455y);
        this.f46445o.d(cVar.f46459a);
        this.f46446p.n(loadEventInfo, 1, -1, this.f46451u, 0, null, 0L, this.f46449s);
    }

    @Override // rd.p
    public long l(long j10) {
        for (int i10 = 0; i10 < this.f46448r.size(); i10++) {
            ((b) this.f46448r.get(i10)).d();
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
        me.a0 a0Var = cVar.f46461c;
        LoadEventInfo loadEventInfo = new LoadEventInfo(cVar.f46459a, cVar.f46460b, a0Var.p(), a0Var.q(), j10, j11, a0Var.o());
        long a10 = this.f46445o.a(new i.c(loadEventInfo, new MediaLoadData(1, -1, this.f46451u, 0, null, 0L, oe.w0.p1(this.f46449s)), iOException, i10));
        int i11 = (a10 > (-9223372036854775807L) ? 1 : (a10 == (-9223372036854775807L) ? 0 : -1));
        if (i11 != 0 && i10 < this.f46445o.b(1)) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (this.f46452v && z10) {
            oe.y.j("SingleSampleMediaPeriod", "Loading failed, treating as end-of-stream.", iOException);
            this.f46453w = true;
            cVar2 = com.google.android.exoplayer2.upstream.j.f14145f;
        } else if (i11 != 0) {
            cVar2 = com.google.android.exoplayer2.upstream.j.h(false, a10);
        } else {
            cVar2 = com.google.android.exoplayer2.upstream.j.f14146g;
        }
        j.c cVar3 = cVar2;
        boolean c10 = cVar3.c();
        this.f46446p.p(loadEventInfo, 1, -1, this.f46451u, 0, null, 0L, this.f46449s, iOException, !c10);
        if (!c10) {
            this.f46445o.d(cVar.f46459a);
        }
        return cVar3;
    }

    public void q() {
        this.f46450t.l();
    }

    @Override // rd.p
    public long r(com.google.android.exoplayer2.trackselection.g[] gVarArr, boolean[] zArr, m0[] m0VarArr, boolean[] zArr2, long j10) {
        for (int i10 = 0; i10 < gVarArr.length; i10++) {
            m0 m0Var = m0VarArr[i10];
            if (m0Var != null && (gVarArr[i10] == null || !zArr[i10])) {
                this.f46448r.remove(m0Var);
                m0VarArr[i10] = null;
            }
            if (m0VarArr[i10] == null && gVarArr[i10] != null) {
                b bVar = new b();
                this.f46448r.add(bVar);
                m0VarArr[i10] = bVar;
                zArr2[i10] = true;
            }
        }
        return j10;
    }

    @Override // rd.p
    public w0 s() {
        return this.f46447q;
    }

    @Override // rd.p
    public void u(p.a aVar, long j10) {
        aVar.j(this);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c implements j.e {

        /* renamed from: a  reason: collision with root package name */
        public final long f46459a = LoadEventInfo.a();

        /* renamed from: b  reason: collision with root package name */
        public final com.google.android.exoplayer2.upstream.a f46460b;

        /* renamed from: c  reason: collision with root package name */
        private final me.a0 f46461c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f46462d;

        public c(com.google.android.exoplayer2.upstream.a aVar, DataSource dataSource) {
            this.f46460b = aVar;
            this.f46461c = new me.a0(dataSource);
        }

        @Override // com.google.android.exoplayer2.upstream.j.e
        public void a() {
            this.f46461c.r();
            try {
                this.f46461c.b(this.f46460b);
                int i10 = 0;
                while (i10 != -1) {
                    int o10 = (int) this.f46461c.o();
                    byte[] bArr = this.f46462d;
                    if (bArr == null) {
                        this.f46462d = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];
                    } else if (o10 == bArr.length) {
                        this.f46462d = Arrays.copyOf(bArr, bArr.length * 2);
                    }
                    me.a0 a0Var = this.f46461c;
                    byte[] bArr2 = this.f46462d;
                    i10 = a0Var.read(bArr2, o10, bArr2.length - o10);
                }
                me.o.a(this.f46461c);
            } catch (Throwable th2) {
                me.o.a(this.f46461c);
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
