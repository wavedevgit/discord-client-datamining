package com.google.android.exoplayer2.source.hls;

import android.os.Looper;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.i;
import java.util.List;
import mc.u;
import me.b;
import me.c0;
import oe.w0;
import rd.p;
import rd.p0;
import rd.r;
import rd.y;
import sc.l;
import sc.v;
import sc.x;
import wd.c;
import wd.g;
import wd.h;
import xd.e;
import xd.f;
import xd.j;
import xd.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class HlsMediaSource extends rd.a implements k.e {
    private final boolean A;
    private final k B;
    private final long C;
    private final MediaItem D;
    private final long E;
    private MediaItem.g F;
    private c0 G;

    /* renamed from: s  reason: collision with root package name */
    private final h f13535s;

    /* renamed from: t  reason: collision with root package name */
    private final MediaItem.h f13536t;

    /* renamed from: u  reason: collision with root package name */
    private final g f13537u;

    /* renamed from: v  reason: collision with root package name */
    private final rd.h f13538v;

    /* renamed from: w  reason: collision with root package name */
    private final v f13539w;

    /* renamed from: x  reason: collision with root package name */
    private final i f13540x;

    /* renamed from: y  reason: collision with root package name */
    private final boolean f13541y;

    /* renamed from: z  reason: collision with root package name */
    private final int f13542z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Factory implements r.a {

        /* renamed from: a  reason: collision with root package name */
        private final g f13543a;

        /* renamed from: b  reason: collision with root package name */
        private h f13544b;

        /* renamed from: c  reason: collision with root package name */
        private j f13545c;

        /* renamed from: d  reason: collision with root package name */
        private k.a f13546d;

        /* renamed from: e  reason: collision with root package name */
        private rd.h f13547e;

        /* renamed from: f  reason: collision with root package name */
        private x f13548f;

        /* renamed from: g  reason: collision with root package name */
        private i f13549g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f13550h;

        /* renamed from: i  reason: collision with root package name */
        private int f13551i;

        /* renamed from: j  reason: collision with root package name */
        private boolean f13552j;

        /* renamed from: k  reason: collision with root package name */
        private long f13553k;

        /* renamed from: l  reason: collision with root package name */
        private long f13554l;

        public Factory(DataSource.Factory factory) {
            this(new c(factory));
        }

        public HlsMediaSource a(MediaItem mediaItem) {
            oe.a.e(mediaItem.f12343e);
            j jVar = this.f13545c;
            List list = mediaItem.f12343e.f12437p;
            if (!list.isEmpty()) {
                jVar = new e(jVar, list);
            }
            g gVar = this.f13543a;
            h hVar = this.f13544b;
            rd.h hVar2 = this.f13547e;
            v a10 = this.f13548f.a(mediaItem);
            i iVar = this.f13549g;
            return new HlsMediaSource(mediaItem, gVar, hVar, hVar2, null, a10, iVar, this.f13546d.a(this.f13543a, iVar, jVar), this.f13553k, this.f13550h, this.f13551i, this.f13552j, this.f13554l);
        }

        public Factory b(i iVar) {
            this.f13549g = (i) oe.a.f(iVar, "MediaSource.Factory#setLoadErrorHandlingPolicy no longer handles null by instantiating a new DefaultLoadErrorHandlingPolicy. Explicitly construct and pass an instance in order to retain the old behavior.");
            return this;
        }

        public Factory(g gVar) {
            this.f13543a = (g) oe.a.e(gVar);
            this.f13548f = new l();
            this.f13545c = new xd.a();
            this.f13546d = xd.c.A;
            this.f13544b = h.f53151a;
            this.f13549g = new com.google.android.exoplayer2.upstream.g();
            this.f13547e = new rd.i();
            this.f13551i = 1;
            this.f13553k = -9223372036854775807L;
            this.f13550h = true;
        }
    }

    static {
        u.a("goog.exo.hls");
    }

    private p0 E(f fVar, long j10, long j11, com.google.android.exoplayer2.source.hls.a aVar) {
        long j12;
        long K;
        boolean z10;
        long c10 = fVar.f55082h - this.B.c();
        if (fVar.f55089o) {
            j12 = c10 + fVar.f55095u;
        } else {
            j12 = -9223372036854775807L;
        }
        long I = I(fVar);
        long j13 = this.F.f12417d;
        if (j13 != -9223372036854775807L) {
            K = w0.K0(j13);
        } else {
            K = K(fVar, I);
        }
        L(fVar, w0.r(K, I, fVar.f55095u + I));
        long J = J(fVar, I);
        if (fVar.f55078d == 2 && fVar.f55080f) {
            z10 = true;
        } else {
            z10 = false;
        }
        return new p0(j10, j11, -9223372036854775807L, j12, fVar.f55095u, c10, J, true, !fVar.f55089o, z10, aVar, this.D, this.F);
    }

    private p0 F(f fVar, long j10, long j11, com.google.android.exoplayer2.source.hls.a aVar) {
        long j12;
        if (fVar.f55079e != -9223372036854775807L && !fVar.f55092r.isEmpty()) {
            if (!fVar.f55081g) {
                long j13 = fVar.f55079e;
                if (j13 != fVar.f55095u) {
                    j12 = H(fVar.f55092r, j13).f55108p;
                }
            }
            j12 = fVar.f55079e;
        } else {
            j12 = 0;
        }
        long j14 = j12;
        long j15 = fVar.f55095u;
        return new p0(j10, j11, -9223372036854775807L, j15, j15, 0L, j14, true, false, true, aVar, this.D, null);
    }

    private static f.b G(List list, long j10) {
        f.b bVar = null;
        for (int i10 = 0; i10 < list.size(); i10++) {
            f.b bVar2 = (f.b) list.get(i10);
            long j11 = bVar2.f55108p;
            if (j11 <= j10 && bVar2.f55097w) {
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

    private long I(f fVar) {
        if (fVar.f55090p) {
            return w0.K0(w0.f0(this.C)) - fVar.e();
        }
        return 0L;
    }

    private long J(f fVar, long j10) {
        long j11 = fVar.f55079e;
        if (j11 == -9223372036854775807L) {
            j11 = (fVar.f55095u + j10) - w0.K0(this.F.f12417d);
        }
        if (fVar.f55081g) {
            return j11;
        }
        f.b G = G(fVar.f55093s, j11);
        if (G != null) {
            return G.f55108p;
        }
        if (fVar.f55092r.isEmpty()) {
            return 0L;
        }
        f.d H = H(fVar.f55092r, j11);
        f.b G2 = G(H.f55103x, j11);
        if (G2 != null) {
            return G2.f55108p;
        }
        return H.f55108p;
    }

    private static long K(f fVar, long j10) {
        long j11;
        f.C0764f c0764f = fVar.f55096v;
        long j12 = fVar.f55079e;
        if (j12 != -9223372036854775807L) {
            j11 = fVar.f55095u - j12;
        } else {
            long j13 = c0764f.f55118d;
            if (j13 != -9223372036854775807L && fVar.f55088n != -9223372036854775807L) {
                j11 = j13;
            } else {
                long j14 = c0764f.f55117c;
                if (j14 != -9223372036854775807L) {
                    j11 = j14;
                } else {
                    j11 = fVar.f55087m * 3;
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
    private void L(xd.f r5, long r6) {
        /*
            r4 = this;
            com.google.android.exoplayer2.MediaItem r0 = r4.D
            com.google.android.exoplayer2.MediaItem$g r0 = r0.f12345o
            float r1 = r0.f12420o
            r2 = -8388609(0xffffffffff7fffff, float:-3.4028235E38)
            int r1 = (r1 > r2 ? 1 : (r1 == r2 ? 0 : -1))
            if (r1 != 0) goto L28
            float r0 = r0.f12421p
            int r0 = (r0 > r2 ? 1 : (r0 == r2 ? 0 : -1))
            if (r0 != 0) goto L28
            xd.f$f r5 = r5.f55096v
            long r0 = r5.f55117c
            r2 = -9223372036854775807(0x8000000000000001, double:-4.9E-324)
            int r0 = (r0 > r2 ? 1 : (r0 == r2 ? 0 : -1))
            if (r0 != 0) goto L28
            long r0 = r5.f55118d
            int r5 = (r0 > r2 ? 1 : (r0 == r2 ? 0 : -1))
            if (r5 != 0) goto L28
            r5 = 1
            goto L29
        L28:
            r5 = 0
        L29:
            com.google.android.exoplayer2.MediaItem$g$a r0 = new com.google.android.exoplayer2.MediaItem$g$a
            r0.<init>()
            long r6 = oe.w0.p1(r6)
            com.google.android.exoplayer2.MediaItem$g$a r6 = r0.k(r6)
            r7 = 1065353216(0x3f800000, float:1.0)
            if (r5 == 0) goto L3c
            r0 = r7
            goto L40
        L3c:
            com.google.android.exoplayer2.MediaItem$g r0 = r4.F
            float r0 = r0.f12420o
        L40:
            com.google.android.exoplayer2.MediaItem$g$a r6 = r6.j(r0)
            if (r5 == 0) goto L47
            goto L4b
        L47:
            com.google.android.exoplayer2.MediaItem$g r5 = r4.F
            float r7 = r5.f12421p
        L4b:
            com.google.android.exoplayer2.MediaItem$g$a r5 = r6.h(r7)
            com.google.android.exoplayer2.MediaItem$g r5 = r5.f()
            r4.F = r5
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.exoplayer2.source.hls.HlsMediaSource.L(xd.f, long):void");
    }

    @Override // rd.a
    protected void B(c0 c0Var) {
        this.G = c0Var;
        this.f13539w.e((Looper) oe.a.e(Looper.myLooper()), z());
        this.f13539w.d();
        this.B.b(this.f13536t.f12433d, w(null), this);
    }

    @Override // rd.a
    protected void D() {
        this.B.stop();
        this.f13539w.release();
    }

    @Override // rd.r
    public void a(p pVar) {
        ((wd.k) pVar).B();
    }

    @Override // xd.k.e
    public void c(f fVar) {
        long j10;
        long j11;
        p0 F;
        if (fVar.f55090p) {
            j10 = w0.p1(fVar.f55082h);
        } else {
            j10 = -9223372036854775807L;
        }
        int i10 = fVar.f55078d;
        if (i10 != 2 && i10 != 1) {
            j11 = -9223372036854775807L;
        } else {
            j11 = j10;
        }
        com.google.android.exoplayer2.source.hls.a aVar = new com.google.android.exoplayer2.source.hls.a((xd.g) oe.a.e(this.B.d()), fVar);
        if (this.B.j()) {
            F = E(fVar, j11, j10, aVar);
        } else {
            F = F(fVar, j11, j10, aVar);
        }
        C(F);
    }

    @Override // rd.r
    public MediaItem d() {
        return this.D;
    }

    @Override // rd.r
    public p f(r.b bVar, b bVar2, long j10) {
        y.a w10 = w(bVar);
        return new wd.k(this.f13535s, this.B, this.f13537u, this.G, null, this.f13539w, u(bVar), this.f13540x, w10, bVar2, this.f13538v, this.f13541y, this.f13542z, this.A, z(), this.E);
    }

    @Override // rd.r
    public void q() {
        this.B.m();
    }

    private HlsMediaSource(MediaItem mediaItem, g gVar, h hVar, rd.h hVar2, me.g gVar2, v vVar, i iVar, k kVar, long j10, boolean z10, int i10, boolean z11, long j11) {
        this.f13536t = (MediaItem.h) oe.a.e(mediaItem.f12343e);
        this.D = mediaItem;
        this.F = mediaItem.f12345o;
        this.f13537u = gVar;
        this.f13535s = hVar;
        this.f13538v = hVar2;
        this.f13539w = vVar;
        this.f13540x = iVar;
        this.B = kVar;
        this.C = j10;
        this.f13541y = z10;
        this.f13542z = i10;
        this.A = z11;
        this.E = j11;
    }
}
