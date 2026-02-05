package wd;

import android.net.Uri;
import android.os.Handler;
import android.os.SystemClock;
import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.source.MediaLoadData;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.g;
import com.google.android.exoplayer2.upstream.h;
import com.google.android.exoplayer2.upstream.i;
import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import lc.l0;
import mi.v;
import ne.w0;
import qd.y;
import wd.c;
import wd.f;
import wd.g;
import wd.i;
import wd.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements k, i.b {
    public static final k.a A = new k.a() { // from class: wd.b
        @Override // wd.k.a
        public final k a(vd.g gVar, com.google.android.exoplayer2.upstream.h hVar, j jVar) {
            return new c(gVar, hVar, jVar);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private final vd.g f52756d;

    /* renamed from: e  reason: collision with root package name */
    private final j f52757e;

    /* renamed from: i  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.h f52758i;

    /* renamed from: o  reason: collision with root package name */
    private final HashMap f52759o;

    /* renamed from: p  reason: collision with root package name */
    private final CopyOnWriteArrayList f52760p;

    /* renamed from: q  reason: collision with root package name */
    private final double f52761q;

    /* renamed from: r  reason: collision with root package name */
    private y.a f52762r;

    /* renamed from: s  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.i f52763s;

    /* renamed from: t  reason: collision with root package name */
    private Handler f52764t;

    /* renamed from: u  reason: collision with root package name */
    private k.e f52765u;

    /* renamed from: v  reason: collision with root package name */
    private g f52766v;

    /* renamed from: w  reason: collision with root package name */
    private Uri f52767w;

    /* renamed from: x  reason: collision with root package name */
    private f f52768x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f52769y;

    /* renamed from: z  reason: collision with root package name */
    private long f52770z;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements k.b {
        private b() {
        }

        @Override // wd.k.b
        public void a() {
            c.this.f52760p.remove(this);
        }

        @Override // wd.k.b
        public boolean c(Uri uri, h.c cVar, boolean z10) {
            C0699c c0699c;
            if (c.this.f52768x == null) {
                long elapsedRealtime = SystemClock.elapsedRealtime();
                List list = ((g) w0.j(c.this.f52766v)).f52831e;
                int i10 = 0;
                for (int i11 = 0; i11 < list.size(); i11++) {
                    C0699c c0699c2 = (C0699c) c.this.f52759o.get(((g.b) list.get(i11)).f52844a);
                    if (c0699c2 != null && elapsedRealtime < c0699c2.f52779s) {
                        i10++;
                    }
                }
                h.b c10 = c.this.f52758i.c(new h.a(1, 0, c.this.f52766v.f52831e.size(), i10), cVar);
                if (c10 != null && c10.f13459a == 2 && (c0699c = (C0699c) c.this.f52759o.get(uri)) != null) {
                    c0699c.h(c10.f13460b);
                }
            }
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: wd.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class C0699c implements i.b {

        /* renamed from: d  reason: collision with root package name */
        private final Uri f52772d;

        /* renamed from: e  reason: collision with root package name */
        private final com.google.android.exoplayer2.upstream.i f52773e = new com.google.android.exoplayer2.upstream.i("DefaultHlsPlaylistTracker:MediaPlaylist");

        /* renamed from: i  reason: collision with root package name */
        private final DataSource f52774i;

        /* renamed from: o  reason: collision with root package name */
        private f f52775o;

        /* renamed from: p  reason: collision with root package name */
        private long f52776p;

        /* renamed from: q  reason: collision with root package name */
        private long f52777q;

        /* renamed from: r  reason: collision with root package name */
        private long f52778r;

        /* renamed from: s  reason: collision with root package name */
        private long f52779s;

        /* renamed from: t  reason: collision with root package name */
        private boolean f52780t;

        /* renamed from: u  reason: collision with root package name */
        private IOException f52781u;

        public C0699c(Uri uri) {
            this.f52772d = uri;
            this.f52774i = c.this.f52756d.a(4);
        }

        public static /* synthetic */ void a(C0699c c0699c, Uri uri) {
            c0699c.f52780t = false;
            c0699c.p(uri);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public boolean h(long j10) {
            this.f52779s = SystemClock.elapsedRealtime() + j10;
            if (this.f52772d.equals(c.this.f52767w) && !c.this.L()) {
                return true;
            }
            return false;
        }

        private Uri k() {
            String str;
            f fVar = this.f52775o;
            if (fVar != null) {
                f.C0700f c0700f = fVar.f52805v;
                if (c0700f.f52824a != -9223372036854775807L || c0700f.f52828e) {
                    Uri.Builder buildUpon = this.f52772d.buildUpon();
                    f fVar2 = this.f52775o;
                    if (fVar2.f52805v.f52828e) {
                        buildUpon.appendQueryParameter("_HLS_msn", String.valueOf(fVar2.f52794k + fVar2.f52801r.size()));
                        f fVar3 = this.f52775o;
                        if (fVar3.f52797n != -9223372036854775807L) {
                            List list = fVar3.f52802s;
                            int size = list.size();
                            if (!list.isEmpty() && ((f.b) v.c(list)).f52807x) {
                                size--;
                            }
                            buildUpon.appendQueryParameter("_HLS_part", String.valueOf(size));
                        }
                    }
                    f.C0700f c0700f2 = this.f52775o.f52805v;
                    if (c0700f2.f52824a != -9223372036854775807L) {
                        if (c0700f2.f52825b) {
                            str = "v2";
                        } else {
                            str = "YES";
                        }
                        buildUpon.appendQueryParameter("_HLS_skip", str);
                    }
                    return buildUpon.build();
                }
            }
            return this.f52772d;
        }

        private void p(Uri uri) {
            com.google.android.exoplayer2.upstream.j jVar = new com.google.android.exoplayer2.upstream.j(this.f52774i, uri, 4, c.this.f52757e.a(c.this.f52766v, this.f52775o));
            c.this.f52762r.s(new LoadEventInfo(jVar.f13485a, jVar.f13486b, this.f52773e.n(jVar, this, c.this.f52758i.b(jVar.f13487c))), jVar.f13487c);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void q(final Uri uri) {
            this.f52779s = 0L;
            if (!this.f52780t && !this.f52773e.j() && !this.f52773e.i()) {
                long elapsedRealtime = SystemClock.elapsedRealtime();
                if (elapsedRealtime < this.f52778r) {
                    this.f52780t = true;
                    c.this.f52764t.postDelayed(new Runnable() { // from class: wd.d
                        @Override // java.lang.Runnable
                        public final void run() {
                            c.C0699c.a(c.C0699c.this, uri);
                        }
                    }, this.f52778r - elapsedRealtime);
                    return;
                }
                p(uri);
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void v(f fVar, LoadEventInfo loadEventInfo) {
            f fVar2;
            boolean z10;
            long j10;
            f fVar3 = this.f52775o;
            long elapsedRealtime = SystemClock.elapsedRealtime();
            this.f52776p = elapsedRealtime;
            f G = c.this.G(fVar3, fVar);
            this.f52775o = G;
            IOException iOException = null;
            if (G != fVar3) {
                this.f52781u = null;
                this.f52777q = elapsedRealtime;
                c.this.R(this.f52772d, G);
            } else if (!G.f52798o) {
                if (fVar.f52794k + fVar.f52801r.size() < this.f52775o.f52794k) {
                    iOException = new k.c(this.f52772d);
                    z10 = true;
                } else {
                    z10 = false;
                    if (elapsedRealtime - this.f52777q > w0.p1(fVar2.f52796m) * c.this.f52761q) {
                        iOException = new k.d(this.f52772d);
                    }
                }
                if (iOException != null) {
                    this.f52781u = iOException;
                    c.this.N(this.f52772d, new h.c(loadEventInfo, new MediaLoadData(4), iOException, 1), z10);
                }
            }
            f fVar4 = this.f52775o;
            if (!fVar4.f52805v.f52828e) {
                if (fVar4 != fVar3) {
                    j10 = fVar4.f52796m;
                } else {
                    j10 = fVar4.f52796m / 2;
                }
            } else {
                j10 = 0;
            }
            this.f52778r = elapsedRealtime + w0.p1(j10);
            if ((this.f52775o.f52797n != -9223372036854775807L || this.f52772d.equals(c.this.f52767w)) && !this.f52775o.f52798o) {
                q(k());
            }
        }

        public f l() {
            return this.f52775o;
        }

        public boolean m() {
            int i10;
            if (this.f52775o == null) {
                return false;
            }
            long elapsedRealtime = SystemClock.elapsedRealtime();
            long max = Math.max(30000L, w0.p1(this.f52775o.f52804u));
            f fVar = this.f52775o;
            if (!fVar.f52798o && (i10 = fVar.f52787d) != 2 && i10 != 1 && this.f52776p + max <= elapsedRealtime) {
                return false;
            }
            return true;
        }

        public void o() {
            q(this.f52772d);
        }

        public void r() {
            this.f52773e.a();
            IOException iOException = this.f52781u;
            if (iOException == null) {
                return;
            }
            throw iOException;
        }

        @Override // com.google.android.exoplayer2.upstream.i.b
        /* renamed from: s */
        public void i(com.google.android.exoplayer2.upstream.j jVar, long j10, long j11, boolean z10) {
            LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f13485a, jVar.f13486b, jVar.f(), jVar.d(), j10, j11, jVar.a());
            c.this.f52758i.d(jVar.f13485a);
            c.this.f52762r.j(loadEventInfo, 4);
        }

        @Override // com.google.android.exoplayer2.upstream.i.b
        /* renamed from: t */
        public void j(com.google.android.exoplayer2.upstream.j jVar, long j10, long j11) {
            h hVar = (h) jVar.e();
            LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f13485a, jVar.f13486b, jVar.f(), jVar.d(), j10, j11, jVar.a());
            if (hVar instanceof f) {
                v((f) hVar, loadEventInfo);
                c.this.f52762r.m(loadEventInfo, 4);
            } else {
                this.f52781u = l0.c("Loaded playlist has unexpected type.", null);
                c.this.f52762r.q(loadEventInfo, 4, this.f52781u, true);
            }
            c.this.f52758i.d(jVar.f13485a);
        }

        @Override // com.google.android.exoplayer2.upstream.i.b
        /* renamed from: u */
        public i.c n(com.google.android.exoplayer2.upstream.j jVar, long j10, long j11, IOException iOException, int i10) {
            boolean z10;
            int i11;
            i.c cVar;
            LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f13485a, jVar.f13486b, jVar.f(), jVar.d(), j10, j11, jVar.a());
            if (jVar.f().getQueryParameter("_HLS_msn") != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            boolean z11 = iOException instanceof i.a;
            if (z10 || z11) {
                if (iOException instanceof g.f) {
                    i11 = ((g.f) iOException).f13449o;
                } else {
                    i11 = Integer.MAX_VALUE;
                }
                if (z11 || i11 == 400 || i11 == 503) {
                    this.f52778r = SystemClock.elapsedRealtime();
                    o();
                    ((y.a) w0.j(c.this.f52762r)).q(loadEventInfo, jVar.f13487c, iOException, true);
                    return com.google.android.exoplayer2.upstream.i.f13467f;
                }
            }
            h.c cVar2 = new h.c(loadEventInfo, new MediaLoadData(jVar.f13487c), iOException, i10);
            if (c.this.N(this.f52772d, cVar2, false)) {
                long a10 = c.this.f52758i.a(cVar2);
                if (a10 != -9223372036854775807L) {
                    cVar = com.google.android.exoplayer2.upstream.i.h(false, a10);
                } else {
                    cVar = com.google.android.exoplayer2.upstream.i.f13468g;
                }
            } else {
                cVar = com.google.android.exoplayer2.upstream.i.f13467f;
            }
            boolean c10 = cVar.c();
            c.this.f52762r.q(loadEventInfo, jVar.f13487c, iOException, !c10);
            if (!c10) {
                c.this.f52758i.d(jVar.f13485a);
            }
            return cVar;
        }

        public void w() {
            this.f52773e.l();
        }
    }

    public c(vd.g gVar, com.google.android.exoplayer2.upstream.h hVar, j jVar) {
        this(gVar, hVar, jVar, 3.5d);
    }

    private void E(List list) {
        int size = list.size();
        for (int i10 = 0; i10 < size; i10++) {
            Uri uri = (Uri) list.get(i10);
            this.f52759o.put(uri, new C0699c(uri));
        }
    }

    private static f.d F(f fVar, f fVar2) {
        int i10 = (int) (fVar2.f52794k - fVar.f52794k);
        List list = fVar.f52801r;
        if (i10 < list.size()) {
            return (f.d) list.get(i10);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public f G(f fVar, f fVar2) {
        if (!fVar2.f(fVar)) {
            if (fVar2.f52798o) {
                return fVar.d();
            }
            return fVar;
        }
        return fVar2.c(I(fVar, fVar2), H(fVar, fVar2));
    }

    private int H(f fVar, f fVar2) {
        int i10;
        f.d F;
        if (fVar2.f52792i) {
            return fVar2.f52793j;
        }
        f fVar3 = this.f52768x;
        if (fVar3 != null) {
            i10 = fVar3.f52793j;
        } else {
            i10 = 0;
        }
        if (fVar != null && (F = F(fVar, fVar2)) != null) {
            return (fVar.f52793j + F.f52816o) - ((f.d) fVar2.f52801r.get(0)).f52816o;
        }
        return i10;
    }

    private long I(f fVar, f fVar2) {
        long j10;
        if (fVar2.f52799p) {
            return fVar2.f52791h;
        }
        f fVar3 = this.f52768x;
        if (fVar3 != null) {
            j10 = fVar3.f52791h;
        } else {
            j10 = 0;
        }
        if (fVar != null) {
            int size = fVar.f52801r.size();
            f.d F = F(fVar, fVar2);
            if (F != null) {
                return fVar.f52791h + F.f52817p;
            }
            if (size == fVar2.f52794k - fVar.f52794k) {
                return fVar.e();
            }
        }
        return j10;
    }

    private Uri J(Uri uri) {
        f.c cVar;
        f fVar = this.f52768x;
        if (fVar != null && fVar.f52805v.f52828e && (cVar = (f.c) fVar.f52803t.get(uri)) != null) {
            Uri.Builder buildUpon = uri.buildUpon();
            buildUpon.appendQueryParameter("_HLS_msn", String.valueOf(cVar.f52809b));
            int i10 = cVar.f52810c;
            if (i10 != -1) {
                buildUpon.appendQueryParameter("_HLS_part", String.valueOf(i10));
            }
            return buildUpon.build();
        }
        return uri;
    }

    private boolean K(Uri uri) {
        List list = this.f52766v.f52831e;
        for (int i10 = 0; i10 < list.size(); i10++) {
            if (uri.equals(((g.b) list.get(i10)).f52844a)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean L() {
        List list = this.f52766v.f52831e;
        int size = list.size();
        long elapsedRealtime = SystemClock.elapsedRealtime();
        for (int i10 = 0; i10 < size; i10++) {
            C0699c c0699c = (C0699c) ne.a.e((C0699c) this.f52759o.get(((g.b) list.get(i10)).f52844a));
            if (elapsedRealtime > c0699c.f52779s) {
                Uri uri = c0699c.f52772d;
                this.f52767w = uri;
                c0699c.q(J(uri));
                return true;
            }
        }
        return false;
    }

    private void M(Uri uri) {
        if (!uri.equals(this.f52767w) && K(uri)) {
            f fVar = this.f52768x;
            if (fVar == null || !fVar.f52798o) {
                this.f52767w = uri;
                C0699c c0699c = (C0699c) this.f52759o.get(uri);
                f fVar2 = c0699c.f52775o;
                if (fVar2 == null || !fVar2.f52798o) {
                    c0699c.q(J(uri));
                    return;
                }
                this.f52768x = fVar2;
                this.f52765u.b(fVar2);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean N(Uri uri, h.c cVar, boolean z10) {
        Iterator it = this.f52760p.iterator();
        boolean z11 = false;
        while (it.hasNext()) {
            z11 |= !((k.b) it.next()).c(uri, cVar, z10);
        }
        return z11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void R(Uri uri, f fVar) {
        if (uri.equals(this.f52767w)) {
            if (this.f52768x == null) {
                this.f52769y = !fVar.f52798o;
                this.f52770z = fVar.f52791h;
            }
            this.f52768x = fVar;
            this.f52765u.b(fVar);
        }
        Iterator it = this.f52760p.iterator();
        while (it.hasNext()) {
            ((k.b) it.next()).a();
        }
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: O */
    public void i(com.google.android.exoplayer2.upstream.j jVar, long j10, long j11, boolean z10) {
        LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f13485a, jVar.f13486b, jVar.f(), jVar.d(), j10, j11, jVar.a());
        this.f52758i.d(jVar.f13485a);
        this.f52762r.j(loadEventInfo, 4);
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: P */
    public void j(com.google.android.exoplayer2.upstream.j jVar, long j10, long j11) {
        g gVar;
        h hVar = (h) jVar.e();
        boolean z10 = hVar instanceof f;
        if (z10) {
            gVar = g.e(hVar.f52850a);
        } else {
            gVar = (g) hVar;
        }
        this.f52766v = gVar;
        this.f52767w = ((g.b) gVar.f52831e.get(0)).f52844a;
        this.f52760p.add(new b());
        E(gVar.f52830d);
        LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f13485a, jVar.f13486b, jVar.f(), jVar.d(), j10, j11, jVar.a());
        C0699c c0699c = (C0699c) this.f52759o.get(this.f52767w);
        if (z10) {
            c0699c.v((f) hVar, loadEventInfo);
        } else {
            c0699c.o();
        }
        this.f52758i.d(jVar.f13485a);
        this.f52762r.m(loadEventInfo, 4);
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: Q */
    public i.c n(com.google.android.exoplayer2.upstream.j jVar, long j10, long j11, IOException iOException, int i10) {
        boolean z10;
        LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f13485a, jVar.f13486b, jVar.f(), jVar.d(), j10, j11, jVar.a());
        long a10 = this.f52758i.a(new h.c(loadEventInfo, new MediaLoadData(jVar.f13487c), iOException, i10));
        if (a10 == -9223372036854775807L) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f52762r.q(loadEventInfo, jVar.f13487c, iOException, z10);
        if (z10) {
            this.f52758i.d(jVar.f13485a);
        }
        if (z10) {
            return com.google.android.exoplayer2.upstream.i.f13468g;
        }
        return com.google.android.exoplayer2.upstream.i.h(false, a10);
    }

    @Override // wd.k
    public void a(Uri uri, y.a aVar, k.e eVar) {
        boolean z10;
        this.f52764t = w0.w();
        this.f52762r = aVar;
        this.f52765u = eVar;
        com.google.android.exoplayer2.upstream.j jVar = new com.google.android.exoplayer2.upstream.j(this.f52756d.a(4), uri, 4, this.f52757e.b());
        if (this.f52763s == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        com.google.android.exoplayer2.upstream.i iVar = new com.google.android.exoplayer2.upstream.i("DefaultHlsPlaylistTracker:MultivariantPlaylist");
        this.f52763s = iVar;
        aVar.s(new LoadEventInfo(jVar.f13485a, jVar.f13486b, iVar.n(jVar, this, this.f52758i.b(jVar.f13487c))), jVar.f13487c);
    }

    @Override // wd.k
    public void b(Uri uri) {
        ((C0699c) this.f52759o.get(uri)).r();
    }

    @Override // wd.k
    public long c() {
        return this.f52770z;
    }

    @Override // wd.k
    public g d() {
        return this.f52766v;
    }

    @Override // wd.k
    public void e(Uri uri) {
        ((C0699c) this.f52759o.get(uri)).o();
    }

    @Override // wd.k
    public void f(k.b bVar) {
        ne.a.e(bVar);
        this.f52760p.add(bVar);
    }

    @Override // wd.k
    public boolean g(Uri uri) {
        return ((C0699c) this.f52759o.get(uri)).m();
    }

    @Override // wd.k
    public boolean h() {
        return this.f52769y;
    }

    @Override // wd.k
    public boolean k(Uri uri, long j10) {
        C0699c c0699c = (C0699c) this.f52759o.get(uri);
        if (c0699c != null) {
            return !c0699c.h(j10);
        }
        return false;
    }

    @Override // wd.k
    public void l() {
        com.google.android.exoplayer2.upstream.i iVar = this.f52763s;
        if (iVar != null) {
            iVar.a();
        }
        Uri uri = this.f52767w;
        if (uri != null) {
            b(uri);
        }
    }

    @Override // wd.k
    public f m(Uri uri, boolean z10) {
        f l10 = ((C0699c) this.f52759o.get(uri)).l();
        if (l10 != null && z10) {
            M(uri);
        }
        return l10;
    }

    @Override // wd.k
    public void o(k.b bVar) {
        this.f52760p.remove(bVar);
    }

    @Override // wd.k
    public void stop() {
        this.f52767w = null;
        this.f52768x = null;
        this.f52766v = null;
        this.f52770z = -9223372036854775807L;
        this.f52763s.l();
        this.f52763s = null;
        for (C0699c c0699c : this.f52759o.values()) {
            c0699c.w();
        }
        this.f52764t.removeCallbacksAndMessages(null);
        this.f52764t = null;
        this.f52759o.clear();
    }

    public c(vd.g gVar, com.google.android.exoplayer2.upstream.h hVar, j jVar, double d10) {
        this.f52756d = gVar;
        this.f52757e = jVar;
        this.f52758i = hVar;
        this.f52761q = d10;
        this.f52760p = new CopyOnWriteArrayList();
        this.f52759o = new HashMap();
        this.f52770z = -9223372036854775807L;
    }
}
