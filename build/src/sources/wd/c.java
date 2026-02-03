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
import ji.v;
import lc.l0;
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
    private final vd.g f52102d;

    /* renamed from: e  reason: collision with root package name */
    private final j f52103e;

    /* renamed from: i  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.h f52104i;

    /* renamed from: o  reason: collision with root package name */
    private final HashMap f52105o;

    /* renamed from: p  reason: collision with root package name */
    private final CopyOnWriteArrayList f52106p;

    /* renamed from: q  reason: collision with root package name */
    private final double f52107q;

    /* renamed from: r  reason: collision with root package name */
    private y.a f52108r;

    /* renamed from: s  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.i f52109s;

    /* renamed from: t  reason: collision with root package name */
    private Handler f52110t;

    /* renamed from: u  reason: collision with root package name */
    private k.e f52111u;

    /* renamed from: v  reason: collision with root package name */
    private g f52112v;

    /* renamed from: w  reason: collision with root package name */
    private Uri f52113w;

    /* renamed from: x  reason: collision with root package name */
    private f f52114x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f52115y;

    /* renamed from: z  reason: collision with root package name */
    private long f52116z;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements k.b {
        private b() {
        }

        @Override // wd.k.b
        public void a() {
            c.this.f52106p.remove(this);
        }

        @Override // wd.k.b
        public boolean c(Uri uri, h.c cVar, boolean z10) {
            C0697c c0697c;
            if (c.this.f52114x == null) {
                long elapsedRealtime = SystemClock.elapsedRealtime();
                List list = ((g) w0.j(c.this.f52112v)).f52177e;
                int i10 = 0;
                for (int i11 = 0; i11 < list.size(); i11++) {
                    C0697c c0697c2 = (C0697c) c.this.f52105o.get(((g.b) list.get(i11)).f52190a);
                    if (c0697c2 != null && elapsedRealtime < c0697c2.f52125s) {
                        i10++;
                    }
                }
                h.b c10 = c.this.f52104i.c(new h.a(1, 0, c.this.f52112v.f52177e.size(), i10), cVar);
                if (c10 != null && c10.f13074a == 2 && (c0697c = (C0697c) c.this.f52105o.get(uri)) != null) {
                    c0697c.h(c10.f13075b);
                }
            }
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: wd.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class C0697c implements i.b {

        /* renamed from: d  reason: collision with root package name */
        private final Uri f52118d;

        /* renamed from: e  reason: collision with root package name */
        private final com.google.android.exoplayer2.upstream.i f52119e = new com.google.android.exoplayer2.upstream.i("DefaultHlsPlaylistTracker:MediaPlaylist");

        /* renamed from: i  reason: collision with root package name */
        private final DataSource f52120i;

        /* renamed from: o  reason: collision with root package name */
        private f f52121o;

        /* renamed from: p  reason: collision with root package name */
        private long f52122p;

        /* renamed from: q  reason: collision with root package name */
        private long f52123q;

        /* renamed from: r  reason: collision with root package name */
        private long f52124r;

        /* renamed from: s  reason: collision with root package name */
        private long f52125s;

        /* renamed from: t  reason: collision with root package name */
        private boolean f52126t;

        /* renamed from: u  reason: collision with root package name */
        private IOException f52127u;

        public C0697c(Uri uri) {
            this.f52118d = uri;
            this.f52120i = c.this.f52102d.a(4);
        }

        public static /* synthetic */ void a(C0697c c0697c, Uri uri) {
            c0697c.f52126t = false;
            c0697c.p(uri);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public boolean h(long j10) {
            this.f52125s = SystemClock.elapsedRealtime() + j10;
            if (this.f52118d.equals(c.this.f52113w) && !c.this.L()) {
                return true;
            }
            return false;
        }

        private Uri k() {
            String str;
            f fVar = this.f52121o;
            if (fVar != null) {
                f.C0698f c0698f = fVar.f52151v;
                if (c0698f.f52170a != -9223372036854775807L || c0698f.f52174e) {
                    Uri.Builder buildUpon = this.f52118d.buildUpon();
                    f fVar2 = this.f52121o;
                    if (fVar2.f52151v.f52174e) {
                        buildUpon.appendQueryParameter("_HLS_msn", String.valueOf(fVar2.f52140k + fVar2.f52147r.size()));
                        f fVar3 = this.f52121o;
                        if (fVar3.f52143n != -9223372036854775807L) {
                            List list = fVar3.f52148s;
                            int size = list.size();
                            if (!list.isEmpty() && ((f.b) v.c(list)).f52153x) {
                                size--;
                            }
                            buildUpon.appendQueryParameter("_HLS_part", String.valueOf(size));
                        }
                    }
                    f.C0698f c0698f2 = this.f52121o.f52151v;
                    if (c0698f2.f52170a != -9223372036854775807L) {
                        if (c0698f2.f52171b) {
                            str = "v2";
                        } else {
                            str = "YES";
                        }
                        buildUpon.appendQueryParameter("_HLS_skip", str);
                    }
                    return buildUpon.build();
                }
            }
            return this.f52118d;
        }

        private void p(Uri uri) {
            com.google.android.exoplayer2.upstream.j jVar = new com.google.android.exoplayer2.upstream.j(this.f52120i, uri, 4, c.this.f52103e.a(c.this.f52112v, this.f52121o));
            c.this.f52108r.s(new LoadEventInfo(jVar.f13100a, jVar.f13101b, this.f52119e.n(jVar, this, c.this.f52104i.b(jVar.f13102c))), jVar.f13102c);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void q(final Uri uri) {
            this.f52125s = 0L;
            if (!this.f52126t && !this.f52119e.j() && !this.f52119e.i()) {
                long elapsedRealtime = SystemClock.elapsedRealtime();
                if (elapsedRealtime < this.f52124r) {
                    this.f52126t = true;
                    c.this.f52110t.postDelayed(new Runnable() { // from class: wd.d
                        @Override // java.lang.Runnable
                        public final void run() {
                            c.C0697c.a(c.C0697c.this, uri);
                        }
                    }, this.f52124r - elapsedRealtime);
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
            f fVar3 = this.f52121o;
            long elapsedRealtime = SystemClock.elapsedRealtime();
            this.f52122p = elapsedRealtime;
            f G = c.this.G(fVar3, fVar);
            this.f52121o = G;
            IOException iOException = null;
            if (G != fVar3) {
                this.f52127u = null;
                this.f52123q = elapsedRealtime;
                c.this.R(this.f52118d, G);
            } else if (!G.f52144o) {
                if (fVar.f52140k + fVar.f52147r.size() < this.f52121o.f52140k) {
                    iOException = new k.c(this.f52118d);
                    z10 = true;
                } else {
                    z10 = false;
                    if (elapsedRealtime - this.f52123q > w0.p1(fVar2.f52142m) * c.this.f52107q) {
                        iOException = new k.d(this.f52118d);
                    }
                }
                if (iOException != null) {
                    this.f52127u = iOException;
                    c.this.N(this.f52118d, new h.c(loadEventInfo, new MediaLoadData(4), iOException, 1), z10);
                }
            }
            f fVar4 = this.f52121o;
            if (!fVar4.f52151v.f52174e) {
                if (fVar4 != fVar3) {
                    j10 = fVar4.f52142m;
                } else {
                    j10 = fVar4.f52142m / 2;
                }
            } else {
                j10 = 0;
            }
            this.f52124r = elapsedRealtime + w0.p1(j10);
            if ((this.f52121o.f52143n != -9223372036854775807L || this.f52118d.equals(c.this.f52113w)) && !this.f52121o.f52144o) {
                q(k());
            }
        }

        public f l() {
            return this.f52121o;
        }

        public boolean m() {
            int i10;
            if (this.f52121o == null) {
                return false;
            }
            long elapsedRealtime = SystemClock.elapsedRealtime();
            long max = Math.max(30000L, w0.p1(this.f52121o.f52150u));
            f fVar = this.f52121o;
            if (!fVar.f52144o && (i10 = fVar.f52133d) != 2 && i10 != 1 && this.f52122p + max <= elapsedRealtime) {
                return false;
            }
            return true;
        }

        public void o() {
            q(this.f52118d);
        }

        public void r() {
            this.f52119e.a();
            IOException iOException = this.f52127u;
            if (iOException == null) {
                return;
            }
            throw iOException;
        }

        @Override // com.google.android.exoplayer2.upstream.i.b
        /* renamed from: s */
        public void i(com.google.android.exoplayer2.upstream.j jVar, long j10, long j11, boolean z10) {
            LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f13100a, jVar.f13101b, jVar.f(), jVar.d(), j10, j11, jVar.a());
            c.this.f52104i.d(jVar.f13100a);
            c.this.f52108r.j(loadEventInfo, 4);
        }

        @Override // com.google.android.exoplayer2.upstream.i.b
        /* renamed from: t */
        public void j(com.google.android.exoplayer2.upstream.j jVar, long j10, long j11) {
            h hVar = (h) jVar.e();
            LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f13100a, jVar.f13101b, jVar.f(), jVar.d(), j10, j11, jVar.a());
            if (hVar instanceof f) {
                v((f) hVar, loadEventInfo);
                c.this.f52108r.m(loadEventInfo, 4);
            } else {
                this.f52127u = l0.c("Loaded playlist has unexpected type.", null);
                c.this.f52108r.q(loadEventInfo, 4, this.f52127u, true);
            }
            c.this.f52104i.d(jVar.f13100a);
        }

        @Override // com.google.android.exoplayer2.upstream.i.b
        /* renamed from: u */
        public i.c n(com.google.android.exoplayer2.upstream.j jVar, long j10, long j11, IOException iOException, int i10) {
            boolean z10;
            int i11;
            i.c cVar;
            LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f13100a, jVar.f13101b, jVar.f(), jVar.d(), j10, j11, jVar.a());
            if (jVar.f().getQueryParameter("_HLS_msn") != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            boolean z11 = iOException instanceof i.a;
            if (z10 || z11) {
                if (iOException instanceof g.f) {
                    i11 = ((g.f) iOException).f13064o;
                } else {
                    i11 = Integer.MAX_VALUE;
                }
                if (z11 || i11 == 400 || i11 == 503) {
                    this.f52124r = SystemClock.elapsedRealtime();
                    o();
                    ((y.a) w0.j(c.this.f52108r)).q(loadEventInfo, jVar.f13102c, iOException, true);
                    return com.google.android.exoplayer2.upstream.i.f13082f;
                }
            }
            h.c cVar2 = new h.c(loadEventInfo, new MediaLoadData(jVar.f13102c), iOException, i10);
            if (c.this.N(this.f52118d, cVar2, false)) {
                long a10 = c.this.f52104i.a(cVar2);
                if (a10 != -9223372036854775807L) {
                    cVar = com.google.android.exoplayer2.upstream.i.h(false, a10);
                } else {
                    cVar = com.google.android.exoplayer2.upstream.i.f13083g;
                }
            } else {
                cVar = com.google.android.exoplayer2.upstream.i.f13082f;
            }
            boolean c10 = cVar.c();
            c.this.f52108r.q(loadEventInfo, jVar.f13102c, iOException, !c10);
            if (!c10) {
                c.this.f52104i.d(jVar.f13100a);
            }
            return cVar;
        }

        public void w() {
            this.f52119e.l();
        }
    }

    public c(vd.g gVar, com.google.android.exoplayer2.upstream.h hVar, j jVar) {
        this(gVar, hVar, jVar, 3.5d);
    }

    private void E(List list) {
        int size = list.size();
        for (int i10 = 0; i10 < size; i10++) {
            Uri uri = (Uri) list.get(i10);
            this.f52105o.put(uri, new C0697c(uri));
        }
    }

    private static f.d F(f fVar, f fVar2) {
        int i10 = (int) (fVar2.f52140k - fVar.f52140k);
        List list = fVar.f52147r;
        if (i10 < list.size()) {
            return (f.d) list.get(i10);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public f G(f fVar, f fVar2) {
        if (!fVar2.f(fVar)) {
            if (fVar2.f52144o) {
                return fVar.d();
            }
            return fVar;
        }
        return fVar2.c(I(fVar, fVar2), H(fVar, fVar2));
    }

    private int H(f fVar, f fVar2) {
        int i10;
        f.d F;
        if (fVar2.f52138i) {
            return fVar2.f52139j;
        }
        f fVar3 = this.f52114x;
        if (fVar3 != null) {
            i10 = fVar3.f52139j;
        } else {
            i10 = 0;
        }
        if (fVar != null && (F = F(fVar, fVar2)) != null) {
            return (fVar.f52139j + F.f52162o) - ((f.d) fVar2.f52147r.get(0)).f52162o;
        }
        return i10;
    }

    private long I(f fVar, f fVar2) {
        long j10;
        if (fVar2.f52145p) {
            return fVar2.f52137h;
        }
        f fVar3 = this.f52114x;
        if (fVar3 != null) {
            j10 = fVar3.f52137h;
        } else {
            j10 = 0;
        }
        if (fVar != null) {
            int size = fVar.f52147r.size();
            f.d F = F(fVar, fVar2);
            if (F != null) {
                return fVar.f52137h + F.f52163p;
            }
            if (size == fVar2.f52140k - fVar.f52140k) {
                return fVar.e();
            }
        }
        return j10;
    }

    private Uri J(Uri uri) {
        f.c cVar;
        f fVar = this.f52114x;
        if (fVar != null && fVar.f52151v.f52174e && (cVar = (f.c) fVar.f52149t.get(uri)) != null) {
            Uri.Builder buildUpon = uri.buildUpon();
            buildUpon.appendQueryParameter("_HLS_msn", String.valueOf(cVar.f52155b));
            int i10 = cVar.f52156c;
            if (i10 != -1) {
                buildUpon.appendQueryParameter("_HLS_part", String.valueOf(i10));
            }
            return buildUpon.build();
        }
        return uri;
    }

    private boolean K(Uri uri) {
        List list = this.f52112v.f52177e;
        for (int i10 = 0; i10 < list.size(); i10++) {
            if (uri.equals(((g.b) list.get(i10)).f52190a)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean L() {
        List list = this.f52112v.f52177e;
        int size = list.size();
        long elapsedRealtime = SystemClock.elapsedRealtime();
        for (int i10 = 0; i10 < size; i10++) {
            C0697c c0697c = (C0697c) ne.a.e((C0697c) this.f52105o.get(((g.b) list.get(i10)).f52190a));
            if (elapsedRealtime > c0697c.f52125s) {
                Uri uri = c0697c.f52118d;
                this.f52113w = uri;
                c0697c.q(J(uri));
                return true;
            }
        }
        return false;
    }

    private void M(Uri uri) {
        if (!uri.equals(this.f52113w) && K(uri)) {
            f fVar = this.f52114x;
            if (fVar == null || !fVar.f52144o) {
                this.f52113w = uri;
                C0697c c0697c = (C0697c) this.f52105o.get(uri);
                f fVar2 = c0697c.f52121o;
                if (fVar2 == null || !fVar2.f52144o) {
                    c0697c.q(J(uri));
                    return;
                }
                this.f52114x = fVar2;
                this.f52111u.b(fVar2);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean N(Uri uri, h.c cVar, boolean z10) {
        Iterator it = this.f52106p.iterator();
        boolean z11 = false;
        while (it.hasNext()) {
            z11 |= !((k.b) it.next()).c(uri, cVar, z10);
        }
        return z11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void R(Uri uri, f fVar) {
        if (uri.equals(this.f52113w)) {
            if (this.f52114x == null) {
                this.f52115y = !fVar.f52144o;
                this.f52116z = fVar.f52137h;
            }
            this.f52114x = fVar;
            this.f52111u.b(fVar);
        }
        Iterator it = this.f52106p.iterator();
        while (it.hasNext()) {
            ((k.b) it.next()).a();
        }
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: O */
    public void i(com.google.android.exoplayer2.upstream.j jVar, long j10, long j11, boolean z10) {
        LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f13100a, jVar.f13101b, jVar.f(), jVar.d(), j10, j11, jVar.a());
        this.f52104i.d(jVar.f13100a);
        this.f52108r.j(loadEventInfo, 4);
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: P */
    public void j(com.google.android.exoplayer2.upstream.j jVar, long j10, long j11) {
        g gVar;
        h hVar = (h) jVar.e();
        boolean z10 = hVar instanceof f;
        if (z10) {
            gVar = g.e(hVar.f52196a);
        } else {
            gVar = (g) hVar;
        }
        this.f52112v = gVar;
        this.f52113w = ((g.b) gVar.f52177e.get(0)).f52190a;
        this.f52106p.add(new b());
        E(gVar.f52176d);
        LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f13100a, jVar.f13101b, jVar.f(), jVar.d(), j10, j11, jVar.a());
        C0697c c0697c = (C0697c) this.f52105o.get(this.f52113w);
        if (z10) {
            c0697c.v((f) hVar, loadEventInfo);
        } else {
            c0697c.o();
        }
        this.f52104i.d(jVar.f13100a);
        this.f52108r.m(loadEventInfo, 4);
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: Q */
    public i.c n(com.google.android.exoplayer2.upstream.j jVar, long j10, long j11, IOException iOException, int i10) {
        boolean z10;
        LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f13100a, jVar.f13101b, jVar.f(), jVar.d(), j10, j11, jVar.a());
        long a10 = this.f52104i.a(new h.c(loadEventInfo, new MediaLoadData(jVar.f13102c), iOException, i10));
        if (a10 == -9223372036854775807L) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f52108r.q(loadEventInfo, jVar.f13102c, iOException, z10);
        if (z10) {
            this.f52104i.d(jVar.f13100a);
        }
        if (z10) {
            return com.google.android.exoplayer2.upstream.i.f13083g;
        }
        return com.google.android.exoplayer2.upstream.i.h(false, a10);
    }

    @Override // wd.k
    public void a(Uri uri, y.a aVar, k.e eVar) {
        boolean z10;
        this.f52110t = w0.w();
        this.f52108r = aVar;
        this.f52111u = eVar;
        com.google.android.exoplayer2.upstream.j jVar = new com.google.android.exoplayer2.upstream.j(this.f52102d.a(4), uri, 4, this.f52103e.b());
        if (this.f52109s == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        com.google.android.exoplayer2.upstream.i iVar = new com.google.android.exoplayer2.upstream.i("DefaultHlsPlaylistTracker:MultivariantPlaylist");
        this.f52109s = iVar;
        aVar.s(new LoadEventInfo(jVar.f13100a, jVar.f13101b, iVar.n(jVar, this, this.f52104i.b(jVar.f13102c))), jVar.f13102c);
    }

    @Override // wd.k
    public void b(Uri uri) {
        ((C0697c) this.f52105o.get(uri)).r();
    }

    @Override // wd.k
    public long c() {
        return this.f52116z;
    }

    @Override // wd.k
    public g d() {
        return this.f52112v;
    }

    @Override // wd.k
    public void e(Uri uri) {
        ((C0697c) this.f52105o.get(uri)).o();
    }

    @Override // wd.k
    public void f(k.b bVar) {
        ne.a.e(bVar);
        this.f52106p.add(bVar);
    }

    @Override // wd.k
    public boolean g(Uri uri) {
        return ((C0697c) this.f52105o.get(uri)).m();
    }

    @Override // wd.k
    public boolean h() {
        return this.f52115y;
    }

    @Override // wd.k
    public boolean k(Uri uri, long j10) {
        C0697c c0697c = (C0697c) this.f52105o.get(uri);
        if (c0697c != null) {
            return !c0697c.h(j10);
        }
        return false;
    }

    @Override // wd.k
    public void l() {
        com.google.android.exoplayer2.upstream.i iVar = this.f52109s;
        if (iVar != null) {
            iVar.a();
        }
        Uri uri = this.f52113w;
        if (uri != null) {
            b(uri);
        }
    }

    @Override // wd.k
    public f m(Uri uri, boolean z10) {
        f l10 = ((C0697c) this.f52105o.get(uri)).l();
        if (l10 != null && z10) {
            M(uri);
        }
        return l10;
    }

    @Override // wd.k
    public void o(k.b bVar) {
        this.f52106p.remove(bVar);
    }

    @Override // wd.k
    public void stop() {
        this.f52113w = null;
        this.f52114x = null;
        this.f52112v = null;
        this.f52116z = -9223372036854775807L;
        this.f52109s.l();
        this.f52109s = null;
        for (C0697c c0697c : this.f52105o.values()) {
            c0697c.w();
        }
        this.f52110t.removeCallbacksAndMessages(null);
        this.f52110t = null;
        this.f52105o.clear();
    }

    public c(vd.g gVar, com.google.android.exoplayer2.upstream.h hVar, j jVar, double d10) {
        this.f52102d = gVar;
        this.f52103e = jVar;
        this.f52104i = hVar;
        this.f52107q = d10;
        this.f52106p = new CopyOnWriteArrayList();
        this.f52105o = new HashMap();
        this.f52116z = -9223372036854775807L;
    }
}
