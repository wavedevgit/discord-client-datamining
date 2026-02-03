package com.google.android.exoplayer2.source.hls;

import android.os.Looper;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.f;
import java.util.List;
import lc.u;
import le.b;
import le.c0;
import ne.w0;
import qd.i;
import qd.p;
import qd.p0;
import qd.r;
import qd.y;
import rc.l;
import rc.v;
import rc.x;
import vd.c;
import vd.g;
import vd.h;
import wd.e;
import wd.f;
import wd.j;
import wd.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class HlsMediaSource extends qd.a implements k.e {
    private final boolean A;
    private final k B;
    private final long C;
    private final MediaItem D;
    private final long E;
    private MediaItem.g F;
    private c0 G;

    /* renamed from: s  reason: collision with root package name */
    private final h f13503s;

    /* renamed from: t  reason: collision with root package name */
    private final MediaItem.h f13504t;

    /* renamed from: u  reason: collision with root package name */
    private final g f13505u;

    /* renamed from: v  reason: collision with root package name */
    private final qd.h f13506v;

    /* renamed from: w  reason: collision with root package name */
    private final v f13507w;

    /* renamed from: x  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.h f13508x;

    /* renamed from: y  reason: collision with root package name */
    private final boolean f13509y;

    /* renamed from: z  reason: collision with root package name */
    private final int f13510z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Factory implements r.a {

        /* renamed from: a  reason: collision with root package name */
        private final g f13511a;

        /* renamed from: b  reason: collision with root package name */
        private h f13512b;

        /* renamed from: c  reason: collision with root package name */
        private j f13513c;

        /* renamed from: d  reason: collision with root package name */
        private k.a f13514d;

        /* renamed from: e  reason: collision with root package name */
        private qd.h f13515e;

        /* renamed from: f  reason: collision with root package name */
        private x f13516f;

        /* renamed from: g  reason: collision with root package name */
        private com.google.android.exoplayer2.upstream.h f13517g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f13518h;

        /* renamed from: i  reason: collision with root package name */
        private int f13519i;

        /* renamed from: j  reason: collision with root package name */
        private boolean f13520j;

        /* renamed from: k  reason: collision with root package name */
        private long f13521k;

        /* renamed from: l  reason: collision with root package name */
        private long f13522l;

        public Factory(DataSource.Factory factory) {
            this(new c(factory));
        }

        public HlsMediaSource a(MediaItem mediaItem) {
            ne.a.e(mediaItem.f12373e);
            j jVar = this.f13513c;
            List list = mediaItem.f12373e.f12467p;
            if (!list.isEmpty()) {
                jVar = new e(jVar, list);
            }
            g gVar = this.f13511a;
            h hVar = this.f13512b;
            qd.h hVar2 = this.f13515e;
            v a10 = this.f13516f.a(mediaItem);
            com.google.android.exoplayer2.upstream.h hVar3 = this.f13517g;
            return new HlsMediaSource(mediaItem, gVar, hVar, hVar2, null, a10, hVar3, this.f13514d.a(this.f13511a, hVar3, jVar), this.f13521k, this.f13518h, this.f13519i, this.f13520j, this.f13522l);
        }

        public Factory b(com.google.android.exoplayer2.upstream.h hVar) {
            this.f13517g = (com.google.android.exoplayer2.upstream.h) ne.a.f(hVar, "MediaSource.Factory#setLoadErrorHandlingPolicy no longer handles null by instantiating a new DefaultLoadErrorHandlingPolicy. Explicitly construct and pass an instance in order to retain the old behavior.");
            return this;
        }

        public Factory(g gVar) {
            this.f13511a = (g) ne.a.e(gVar);
            this.f13516f = new l();
            this.f13513c = new wd.a();
            this.f13514d = wd.c.A;
            this.f13512b = h.f51099a;
            this.f13517g = new f();
            this.f13515e = new i();
            this.f13519i = 1;
            this.f13521k = -9223372036854775807L;
            this.f13518h = true;
        }
    }

    static {
        u.a("goog.exo.hls");
    }

    private p0 E(wd.f fVar, long j10, long j11, com.google.android.exoplayer2.source.hls.a aVar) {
        long j12;
        long K;
        boolean z10;
        long c10 = fVar.f51915h - this.B.c();
        if (fVar.f51922o) {
            j12 = c10 + fVar.f51928u;
        } else {
            j12 = -9223372036854775807L;
        }
        long I = I(fVar);
        long j13 = this.F.f12447d;
        if (j13 != -9223372036854775807L) {
            K = w0.K0(j13);
        } else {
            K = K(fVar, I);
        }
        L(fVar, w0.r(K, I, fVar.f51928u + I));
        long J = J(fVar, I);
        if (fVar.f51911d == 2 && fVar.f51913f) {
            z10 = true;
        } else {
            z10 = false;
        }
        return new p0(j10, j11, -9223372036854775807L, j12, fVar.f51928u, c10, J, true, !fVar.f51922o, z10, aVar, this.D, this.F);
    }

    private p0 F(wd.f fVar, long j10, long j11, com.google.android.exoplayer2.source.hls.a aVar) {
        long j12;
        if (fVar.f51912e != -9223372036854775807L && !fVar.f51925r.isEmpty()) {
            if (!fVar.f51914g) {
                long j13 = fVar.f51912e;
                if (j13 != fVar.f51928u) {
                    j12 = H(fVar.f51925r, j13).f51941p;
                }
            }
            j12 = fVar.f51912e;
        } else {
            j12 = 0;
        }
        long j14 = j12;
        long j15 = fVar.f51928u;
        return new p0(j10, j11, -9223372036854775807L, j15, j15, 0L, j14, true, false, true, aVar, this.D, null);
    }

    private static f.b G(List list, long j10) {
        f.b bVar = null;
        for (int i10 = 0; i10 < list.size(); i10++) {
            f.b bVar2 = (f.b) list.get(i10);
            long j11 = bVar2.f51941p;
            if (j11 <= j10 && bVar2.f51930w) {
                bVar = bVar2;
            } else if (j11 > j10) {
                break;
            }
        }
        return bVar;
    }

    private static f.d H(List list, long j10) {
        return (f.d) list.get(w0.f(list, Long.valueOf(j10), true, true));
    }

    private long I(wd.f fVar) {
        if (fVar.f51923p) {
            return w0.K0(w0.f0(this.C)) - fVar.e();
        }
        return 0L;
    }

    private long J(wd.f fVar, long j10) {
        long j11 = fVar.f51912e;
        if (j11 == -9223372036854775807L) {
            j11 = (fVar.f51928u + j10) - w0.K0(this.F.f12447d);
        }
        if (fVar.f51914g) {
            return j11;
        }
        f.b G = G(fVar.f51926s, j11);
        if (G != null) {
            return G.f51941p;
        }
        if (fVar.f51925r.isEmpty()) {
            return 0L;
        }
        f.d H = H(fVar.f51925r, j11);
        f.b G2 = G(H.f51936x, j11);
        if (G2 != null) {
            return G2.f51941p;
        }
        return H.f51941p;
    }

    private static long K(wd.f fVar, long j10) {
        long j11;
        f.C0706f c0706f = fVar.f51929v;
        long j12 = fVar.f51912e;
        if (j12 != -9223372036854775807L) {
            j11 = fVar.f51928u - j12;
        } else {
            long j13 = c0706f.f51951d;
            if (j13 != -9223372036854775807L && fVar.f51921n != -9223372036854775807L) {
                j11 = j13;
            } else {
                long j14 = c0706f.f51950c;
                if (j14 != -9223372036854775807L) {
                    j11 = j14;
                } else {
                    j11 = fVar.f51920m * 3;
                }
            }
        }
        return j11 + j10;
    }

    /* JADX WARN: Removed duplicated region for block: B:14:0x003a  */
    /* JADX WARN: Removed duplicated region for block: B:15:0x003c  */
    /* JADX WARN: Removed duplicated region for block: B:19:0x0047  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void L(wd.f r5, long r6) {
        /*
            r4 = this;
            com.google.android.exoplayer2.MediaItem r0 = r4.D
            com.google.android.exoplayer2.MediaItem$g r0 = r0.f12375o
            float r1 = r0.f12450o
            r2 = -8388609(0xffffffffff7fffff, float:-3.4028235E38)
            int r1 = (r1 > r2 ? 1 : (r1 == r2 ? 0 : -1))
            if (r1 != 0) goto L28
            float r0 = r0.f12451p
            int r0 = (r0 > r2 ? 1 : (r0 == r2 ? 0 : -1))
            if (r0 != 0) goto L28
            wd.f$f r5 = r5.f51929v
            long r0 = r5.f51950c
            r2 = -9223372036854775807(0x8000000000000001, double:-4.9E-324)
            int r0 = (r0 > r2 ? 1 : (r0 == r2 ? 0 : -1))
            if (r0 != 0) goto L28
            long r0 = r5.f51951d
            int r5 = (r0 > r2 ? 1 : (r0 == r2 ? 0 : -1))
            if (r5 != 0) goto L28
            r5 = 1
            goto L29
        L28:
            r5 = 0
        L29:
            com.google.android.exoplayer2.MediaItem$g$a r0 = new com.google.android.exoplayer2.MediaItem$g$a
            r0.<init>()
            long r6 = ne.w0.p1(r6)
            com.google.android.exoplayer2.MediaItem$g$a r6 = r0.k(r6)
            r7 = 1065353216(0x3f800000, float:1.0)
            if (r5 == 0) goto L3c
            r0 = r7
            goto L40
        L3c:
            com.google.android.exoplayer2.MediaItem$g r0 = r4.F
            float r0 = r0.f12450o
        L40:
            com.google.android.exoplayer2.MediaItem$g$a r6 = r6.j(r0)
            if (r5 == 0) goto L47
            goto L4b
        L47:
            com.google.android.exoplayer2.MediaItem$g r5 = r4.F
            float r7 = r5.f12451p
        L4b:
            com.google.android.exoplayer2.MediaItem$g$a r5 = r6.h(r7)
            com.google.android.exoplayer2.MediaItem$g r5 = r5.f()
            r4.F = r5
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.exoplayer2.source.hls.HlsMediaSource.L(wd.f, long):void");
    }

    @Override // qd.a
    protected void B(c0 c0Var) {
        this.G = c0Var;
        this.f13507w.a((Looper) ne.a.e(Looper.myLooper()), z());
        this.f13507w.d();
        this.B.a(this.f13504t.f12463d, w(null), this);
    }

    @Override // qd.a
    protected void D() {
        this.B.stop();
        this.f13507w.release();
    }

    @Override // wd.k.e
    public void b(wd.f fVar) {
        long j10;
        long j11;
        p0 F;
        if (fVar.f51923p) {
            j10 = w0.p1(fVar.f51915h);
        } else {
            j10 = -9223372036854775807L;
        }
        int i10 = fVar.f51911d;
        if (i10 != 2 && i10 != 1) {
            j11 = -9223372036854775807L;
        } else {
            j11 = j10;
        }
        com.google.android.exoplayer2.source.hls.a aVar = new com.google.android.exoplayer2.source.hls.a((wd.g) ne.a.e(this.B.d()), fVar);
        if (this.B.h()) {
            F = E(fVar, j11, j10, aVar);
        } else {
            F = F(fVar, j11, j10, aVar);
        }
        C(F);
    }

    @Override // qd.r
    public void c(p pVar) {
        ((vd.k) pVar).B();
    }

    @Override // qd.r
    public MediaItem f() {
        return this.D;
    }

    @Override // qd.r
    public p h(r.b bVar, b bVar2, long j10) {
        y.a w10 = w(bVar);
        return new vd.k(this.f13503s, this.B, this.f13505u, this.G, null, this.f13507w, u(bVar), this.f13508x, w10, bVar2, this.f13506v, this.f13509y, this.f13510z, this.A, z(), this.E);
    }

    @Override // qd.r
    public void o() {
        this.B.l();
    }

    private HlsMediaSource(MediaItem mediaItem, g gVar, h hVar, qd.h hVar2, le.g gVar2, v vVar, com.google.android.exoplayer2.upstream.h hVar3, k kVar, long j10, boolean z10, int i10, boolean z11, long j11) {
        this.f13504t = (MediaItem.h) ne.a.e(mediaItem.f12373e);
        this.D = mediaItem;
        this.F = mediaItem.f12375o;
        this.f13505u = gVar;
        this.f13503s = hVar;
        this.f13506v = hVar2;
        this.f13507w = vVar;
        this.f13508x = hVar3;
        this.B = kVar;
        this.C = j10;
        this.f13509y = z10;
        this.f13510z = i10;
        this.A = z11;
        this.E = j11;
    }
}
