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
    private final vd.g f51880d;

    /* renamed from: e  reason: collision with root package name */
    private final j f51881e;

    /* renamed from: i  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.h f51882i;

    /* renamed from: o  reason: collision with root package name */
    private final HashMap f51883o;

    /* renamed from: p  reason: collision with root package name */
    private final CopyOnWriteArrayList f51884p;

    /* renamed from: q  reason: collision with root package name */
    private final double f51885q;

    /* renamed from: r  reason: collision with root package name */
    private y.a f51886r;

    /* renamed from: s  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.i f51887s;

    /* renamed from: t  reason: collision with root package name */
    private Handler f51888t;

    /* renamed from: u  reason: collision with root package name */
    private k.e f51889u;

    /* renamed from: v  reason: collision with root package name */
    private g f51890v;

    /* renamed from: w  reason: collision with root package name */
    private Uri f51891w;

    /* renamed from: x  reason: collision with root package name */
    private f f51892x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f51893y;

    /* renamed from: z  reason: collision with root package name */
    private long f51894z;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements k.b {
        private b() {
        }

        @Override // wd.k.b
        public void a() {
            c.this.f51884p.remove(this);
        }

        @Override // wd.k.b
        public boolean c(Uri uri, h.c cVar, boolean z10) {
            C0705c c0705c;
            if (c.this.f51892x == null) {
                long elapsedRealtime = SystemClock.elapsedRealtime();
                List list = ((g) w0.j(c.this.f51890v)).f51955e;
                int i10 = 0;
                for (int i11 = 0; i11 < list.size(); i11++) {
                    C0705c c0705c2 = (C0705c) c.this.f51883o.get(((g.b) list.get(i11)).f51968a);
                    if (c0705c2 != null && elapsedRealtime < c0705c2.f51903s) {
                        i10++;
                    }
                }
                h.b c10 = c.this.f51882i.c(new h.a(1, 0, c.this.f51890v.f51955e.size(), i10), cVar);
                if (c10 != null && c10.f14106a == 2 && (c0705c = (C0705c) c.this.f51883o.get(uri)) != null) {
                    c0705c.h(c10.f14107b);
                }
            }
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: wd.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class C0705c implements i.b {

        /* renamed from: d  reason: collision with root package name */
        private final Uri f51896d;

        /* renamed from: e  reason: collision with root package name */
        private final com.google.android.exoplayer2.upstream.i f51897e = new com.google.android.exoplayer2.upstream.i("DefaultHlsPlaylistTracker:MediaPlaylist");

        /* renamed from: i  reason: collision with root package name */
        private final DataSource f51898i;

        /* renamed from: o  reason: collision with root package name */
        private f f51899o;

        /* renamed from: p  reason: collision with root package name */
        private long f51900p;

        /* renamed from: q  reason: collision with root package name */
        private long f51901q;

        /* renamed from: r  reason: collision with root package name */
        private long f51902r;

        /* renamed from: s  reason: collision with root package name */
        private long f51903s;

        /* renamed from: t  reason: collision with root package name */
        private boolean f51904t;

        /* renamed from: u  reason: collision with root package name */
        private IOException f51905u;

        public C0705c(Uri uri) {
            this.f51896d = uri;
            this.f51898i = c.this.f51880d.a(4);
        }

        public static /* synthetic */ void a(C0705c c0705c, Uri uri) {
            c0705c.f51904t = false;
            c0705c.p(uri);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public boolean h(long j10) {
            this.f51903s = SystemClock.elapsedRealtime() + j10;
            if (this.f51896d.equals(c.this.f51891w) && !c.this.L()) {
                return true;
            }
            return false;
        }

        private Uri k() {
            String str;
            f fVar = this.f51899o;
            if (fVar != null) {
                f.C0706f c0706f = fVar.f51929v;
                if (c0706f.f51948a != -9223372036854775807L || c0706f.f51952e) {
                    Uri.Builder buildUpon = this.f51896d.buildUpon();
                    f fVar2 = this.f51899o;
                    if (fVar2.f51929v.f51952e) {
                        buildUpon.appendQueryParameter("_HLS_msn", String.valueOf(fVar2.f51918k + fVar2.f51925r.size()));
                        f fVar3 = this.f51899o;
                        if (fVar3.f51921n != -9223372036854775807L) {
                            List list = fVar3.f51926s;
                            int size = list.size();
                            if (!list.isEmpty() && ((f.b) v.c(list)).f51931x) {
                                size--;
                            }
                            buildUpon.appendQueryParameter("_HLS_part", String.valueOf(size));
                        }
                    }
                    f.C0706f c0706f2 = this.f51899o.f51929v;
                    if (c0706f2.f51948a != -9223372036854775807L) {
                        if (c0706f2.f51949b) {
                            str = "v2";
                        } else {
                            str = "YES";
                        }
                        buildUpon.appendQueryParameter("_HLS_skip", str);
                    }
                    return buildUpon.build();
                }
            }
            return this.f51896d;
        }

        private void p(Uri uri) {
            com.google.android.exoplayer2.upstream.j jVar = new com.google.android.exoplayer2.upstream.j(this.f51898i, uri, 4, c.this.f51881e.a(c.this.f51890v, this.f51899o));
            c.this.f51886r.s(new LoadEventInfo(jVar.f14132a, jVar.f14133b, this.f51897e.n(jVar, this, c.this.f51882i.b(jVar.f14134c))), jVar.f14134c);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void q(final Uri uri) {
            this.f51903s = 0L;
            if (!this.f51904t && !this.f51897e.j() && !this.f51897e.i()) {
                long elapsedRealtime = SystemClock.elapsedRealtime();
                if (elapsedRealtime < this.f51902r) {
                    this.f51904t = true;
                    c.this.f51888t.postDelayed(new Runnable() { // from class: wd.d
                        @Override // java.lang.Runnable
                        public final void run() {
                            c.C0705c.a(c.C0705c.this, uri);
                        }
                    }, this.f51902r - elapsedRealtime);
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
            f fVar3 = this.f51899o;
            long elapsedRealtime = SystemClock.elapsedRealtime();
            this.f51900p = elapsedRealtime;
            f G = c.this.G(fVar3, fVar);
            this.f51899o = G;
            IOException iOException = null;
            if (G != fVar3) {
                this.f51905u = null;
                this.f51901q = elapsedRealtime;
                c.this.R(this.f51896d, G);
            } else if (!G.f51922o) {
                if (fVar.f51918k + fVar.f51925r.size() < this.f51899o.f51918k) {
                    iOException = new k.c(this.f51896d);
                    z10 = true;
                } else {
                    z10 = false;
                    if (elapsedRealtime - this.f51901q > w0.p1(fVar2.f51920m) * c.this.f51885q) {
                        iOException = new k.d(this.f51896d);
                    }
                }
                if (iOException != null) {
                    this.f51905u = iOException;
                    c.this.N(this.f51896d, new h.c(loadEventInfo, new MediaLoadData(4), iOException, 1), z10);
                }
            }
            f fVar4 = this.f51899o;
            if (!fVar4.f51929v.f51952e) {
                if (fVar4 != fVar3) {
                    j10 = fVar4.f51920m;
                } else {
                    j10 = fVar4.f51920m / 2;
                }
            } else {
                j10 = 0;
            }
            this.f51902r = elapsedRealtime + w0.p1(j10);
            if ((this.f51899o.f51921n != -9223372036854775807L || this.f51896d.equals(c.this.f51891w)) && !this.f51899o.f51922o) {
                q(k());
            }
        }

        public f l() {
            return this.f51899o;
        }

        public boolean m() {
            int i10;
            if (this.f51899o == null) {
                return false;
            }
            long elapsedRealtime = SystemClock.elapsedRealtime();
            long max = Math.max(30000L, w0.p1(this.f51899o.f51928u));
            f fVar = this.f51899o;
            if (!fVar.f51922o && (i10 = fVar.f51911d) != 2 && i10 != 1 && this.f51900p + max <= elapsedRealtime) {
                return false;
            }
            return true;
        }

        public void o() {
            q(this.f51896d);
        }

        public void r() {
            this.f51897e.a();
            IOException iOException = this.f51905u;
            if (iOException == null) {
                return;
            }
            throw iOException;
        }

        @Override // com.google.android.exoplayer2.upstream.i.b
        /* renamed from: s */
        public void i(com.google.android.exoplayer2.upstream.j jVar, long j10, long j11, boolean z10) {
            LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f14132a, jVar.f14133b, jVar.f(), jVar.d(), j10, j11, jVar.a());
            c.this.f51882i.d(jVar.f14132a);
            c.this.f51886r.j(loadEventInfo, 4);
        }

        @Override // com.google.android.exoplayer2.upstream.i.b
        /* renamed from: t */
        public void j(com.google.android.exoplayer2.upstream.j jVar, long j10, long j11) {
            h hVar = (h) jVar.e();
            LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f14132a, jVar.f14133b, jVar.f(), jVar.d(), j10, j11, jVar.a());
            if (hVar instanceof f) {
                v((f) hVar, loadEventInfo);
                c.this.f51886r.m(loadEventInfo, 4);
            } else {
                this.f51905u = l0.c("Loaded playlist has unexpected type.", null);
                c.this.f51886r.q(loadEventInfo, 4, this.f51905u, true);
            }
            c.this.f51882i.d(jVar.f14132a);
        }

        @Override // com.google.android.exoplayer2.upstream.i.b
        /* renamed from: u */
        public i.c n(com.google.android.exoplayer2.upstream.j jVar, long j10, long j11, IOException iOException, int i10) {
            boolean z10;
            int i11;
            i.c cVar;
            LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f14132a, jVar.f14133b, jVar.f(), jVar.d(), j10, j11, jVar.a());
            if (jVar.f().getQueryParameter("_HLS_msn") != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            boolean z11 = iOException instanceof i.a;
            if (z10 || z11) {
                if (iOException instanceof g.f) {
                    i11 = ((g.f) iOException).f14096o;
                } else {
                    i11 = Integer.MAX_VALUE;
                }
                if (z11 || i11 == 400 || i11 == 503) {
                    this.f51902r = SystemClock.elapsedRealtime();
                    o();
                    ((y.a) w0.j(c.this.f51886r)).q(loadEventInfo, jVar.f14134c, iOException, true);
                    return com.google.android.exoplayer2.upstream.i.f14114f;
                }
            }
            h.c cVar2 = new h.c(loadEventInfo, new MediaLoadData(jVar.f14134c), iOException, i10);
            if (c.this.N(this.f51896d, cVar2, false)) {
                long a10 = c.this.f51882i.a(cVar2);
                if (a10 != -9223372036854775807L) {
                    cVar = com.google.android.exoplayer2.upstream.i.h(false, a10);
                } else {
                    cVar = com.google.android.exoplayer2.upstream.i.f14115g;
                }
            } else {
                cVar = com.google.android.exoplayer2.upstream.i.f14114f;
            }
            boolean c10 = cVar.c();
            c.this.f51886r.q(loadEventInfo, jVar.f14134c, iOException, !c10);
            if (!c10) {
                c.this.f51882i.d(jVar.f14132a);
            }
            return cVar;
        }

        public void w() {
            this.f51897e.l();
        }
    }

    public c(vd.g gVar, com.google.android.exoplayer2.upstream.h hVar, j jVar) {
        this(gVar, hVar, jVar, 3.5d);
    }

    private void E(List list) {
        int size = list.size();
        for (int i10 = 0; i10 < size; i10++) {
            Uri uri = (Uri) list.get(i10);
            this.f51883o.put(uri, new C0705c(uri));
        }
    }

    private static f.d F(f fVar, f fVar2) {
        int i10 = (int) (fVar2.f51918k - fVar.f51918k);
        List list = fVar.f51925r;
        if (i10 < list.size()) {
            return (f.d) list.get(i10);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public f G(f fVar, f fVar2) {
        if (!fVar2.f(fVar)) {
            if (fVar2.f51922o) {
                return fVar.d();
            }
            return fVar;
        }
        return fVar2.c(I(fVar, fVar2), H(fVar, fVar2));
    }

    private int H(f fVar, f fVar2) {
        int i10;
        f.d F;
        if (fVar2.f51916i) {
            return fVar2.f51917j;
        }
        f fVar3 = this.f51892x;
        if (fVar3 != null) {
            i10 = fVar3.f51917j;
        } else {
            i10 = 0;
        }
        if (fVar != null && (F = F(fVar, fVar2)) != null) {
            return (fVar.f51917j + F.f51940o) - ((f.d) fVar2.f51925r.get(0)).f51940o;
        }
        return i10;
    }

    private long I(f fVar, f fVar2) {
        long j10;
        if (fVar2.f51923p) {
            return fVar2.f51915h;
        }
        f fVar3 = this.f51892x;
        if (fVar3 != null) {
            j10 = fVar3.f51915h;
        } else {
            j10 = 0;
        }
        if (fVar != null) {
            int size = fVar.f51925r.size();
            f.d F = F(fVar, fVar2);
            if (F != null) {
                return fVar.f51915h + F.f51941p;
            }
            if (size == fVar2.f51918k - fVar.f51918k) {
                return fVar.e();
            }
        }
        return j10;
    }

    private Uri J(Uri uri) {
        f.c cVar;
        f fVar = this.f51892x;
        if (fVar != null && fVar.f51929v.f51952e && (cVar = (f.c) fVar.f51927t.get(uri)) != null) {
            Uri.Builder buildUpon = uri.buildUpon();
            buildUpon.appendQueryParameter("_HLS_msn", String.valueOf(cVar.f51933b));
            int i10 = cVar.f51934c;
            if (i10 != -1) {
                buildUpon.appendQueryParameter("_HLS_part", String.valueOf(i10));
            }
            return buildUpon.build();
        }
        return uri;
    }

    private boolean K(Uri uri) {
        List list = this.f51890v.f51955e;
        for (int i10 = 0; i10 < list.size(); i10++) {
            if (uri.equals(((g.b) list.get(i10)).f51968a)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean L() {
        List list = this.f51890v.f51955e;
        int size = list.size();
        long elapsedRealtime = SystemClock.elapsedRealtime();
        for (int i10 = 0; i10 < size; i10++) {
            C0705c c0705c = (C0705c) ne.a.e((C0705c) this.f51883o.get(((g.b) list.get(i10)).f51968a));
            if (elapsedRealtime > c0705c.f51903s) {
                Uri uri = c0705c.f51896d;
                this.f51891w = uri;
                c0705c.q(J(uri));
                return true;
            }
        }
        return false;
    }

    private void M(Uri uri) {
        if (!uri.equals(this.f51891w) && K(uri)) {
            f fVar = this.f51892x;
            if (fVar == null || !fVar.f51922o) {
                this.f51891w = uri;
                C0705c c0705c = (C0705c) this.f51883o.get(uri);
                f fVar2 = c0705c.f51899o;
                if (fVar2 == null || !fVar2.f51922o) {
                    c0705c.q(J(uri));
                    return;
                }
                this.f51892x = fVar2;
                this.f51889u.b(fVar2);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean N(Uri uri, h.c cVar, boolean z10) {
        Iterator it = this.f51884p.iterator();
        boolean z11 = false;
        while (it.hasNext()) {
            z11 |= !((k.b) it.next()).c(uri, cVar, z10);
        }
        return z11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void R(Uri uri, f fVar) {
        if (uri.equals(this.f51891w)) {
            if (this.f51892x == null) {
                this.f51893y = !fVar.f51922o;
                this.f51894z = fVar.f51915h;
            }
            this.f51892x = fVar;
            this.f51889u.b(fVar);
        }
        Iterator it = this.f51884p.iterator();
        while (it.hasNext()) {
            ((k.b) it.next()).a();
        }
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: O */
    public void i(com.google.android.exoplayer2.upstream.j jVar, long j10, long j11, boolean z10) {
        LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f14132a, jVar.f14133b, jVar.f(), jVar.d(), j10, j11, jVar.a());
        this.f51882i.d(jVar.f14132a);
        this.f51886r.j(loadEventInfo, 4);
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: P */
    public void j(com.google.android.exoplayer2.upstream.j jVar, long j10, long j11) {
        g gVar;
        h hVar = (h) jVar.e();
        boolean z10 = hVar instanceof f;
        if (z10) {
            gVar = g.e(hVar.f51974a);
        } else {
            gVar = (g) hVar;
        }
        this.f51890v = gVar;
        this.f51891w = ((g.b) gVar.f51955e.get(0)).f51968a;
        this.f51884p.add(new b());
        E(gVar.f51954d);
        LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f14132a, jVar.f14133b, jVar.f(), jVar.d(), j10, j11, jVar.a());
        C0705c c0705c = (C0705c) this.f51883o.get(this.f51891w);
        if (z10) {
            c0705c.v((f) hVar, loadEventInfo);
        } else {
            c0705c.o();
        }
        this.f51882i.d(jVar.f14132a);
        this.f51886r.m(loadEventInfo, 4);
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: Q */
    public i.c n(com.google.android.exoplayer2.upstream.j jVar, long j10, long j11, IOException iOException, int i10) {
        boolean z10;
        LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f14132a, jVar.f14133b, jVar.f(), jVar.d(), j10, j11, jVar.a());
        long a10 = this.f51882i.a(new h.c(loadEventInfo, new MediaLoadData(jVar.f14134c), iOException, i10));
        if (a10 == -9223372036854775807L) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f51886r.q(loadEventInfo, jVar.f14134c, iOException, z10);
        if (z10) {
            this.f51882i.d(jVar.f14132a);
        }
        if (z10) {
            return com.google.android.exoplayer2.upstream.i.f14115g;
        }
        return com.google.android.exoplayer2.upstream.i.h(false, a10);
    }

    @Override // wd.k
    public void a(Uri uri, y.a aVar, k.e eVar) {
        boolean z10;
        this.f51888t = w0.w();
        this.f51886r = aVar;
        this.f51889u = eVar;
        com.google.android.exoplayer2.upstream.j jVar = new com.google.android.exoplayer2.upstream.j(this.f51880d.a(4), uri, 4, this.f51881e.b());
        if (this.f51887s == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        com.google.android.exoplayer2.upstream.i iVar = new com.google.android.exoplayer2.upstream.i("DefaultHlsPlaylistTracker:MultivariantPlaylist");
        this.f51887s = iVar;
        aVar.s(new LoadEventInfo(jVar.f14132a, jVar.f14133b, iVar.n(jVar, this, this.f51882i.b(jVar.f14134c))), jVar.f14134c);
    }

    @Override // wd.k
    public void b(Uri uri) {
        ((C0705c) this.f51883o.get(uri)).r();
    }

    @Override // wd.k
    public long c() {
        return this.f51894z;
    }

    @Override // wd.k
    public g d() {
        return this.f51890v;
    }

    @Override // wd.k
    public void e(Uri uri) {
        ((C0705c) this.f51883o.get(uri)).o();
    }

    @Override // wd.k
    public void f(k.b bVar) {
        ne.a.e(bVar);
        this.f51884p.add(bVar);
    }

    @Override // wd.k
    public boolean g(Uri uri) {
        return ((C0705c) this.f51883o.get(uri)).m();
    }

    @Override // wd.k
    public boolean h() {
        return this.f51893y;
    }

    @Override // wd.k
    public boolean k(Uri uri, long j10) {
        C0705c c0705c = (C0705c) this.f51883o.get(uri);
        if (c0705c != null) {
            return !c0705c.h(j10);
        }
        return false;
    }

    @Override // wd.k
    public void l() {
        com.google.android.exoplayer2.upstream.i iVar = this.f51887s;
        if (iVar != null) {
            iVar.a();
        }
        Uri uri = this.f51891w;
        if (uri != null) {
            b(uri);
        }
    }

    @Override // wd.k
    public f m(Uri uri, boolean z10) {
        f l10 = ((C0705c) this.f51883o.get(uri)).l();
        if (l10 != null && z10) {
            M(uri);
        }
        return l10;
    }

    @Override // wd.k
    public void o(k.b bVar) {
        this.f51884p.remove(bVar);
    }

    @Override // wd.k
    public void stop() {
        this.f51891w = null;
        this.f51892x = null;
        this.f51890v = null;
        this.f51894z = -9223372036854775807L;
        this.f51887s.l();
        this.f51887s = null;
        for (C0705c c0705c : this.f51883o.values()) {
            c0705c.w();
        }
        this.f51888t.removeCallbacksAndMessages(null);
        this.f51888t = null;
        this.f51883o.clear();
    }

    public c(vd.g gVar, com.google.android.exoplayer2.upstream.h hVar, j jVar, double d10) {
        this.f51880d = gVar;
        this.f51881e = jVar;
        this.f51882i = hVar;
        this.f51885q = d10;
        this.f51884p = new CopyOnWriteArrayList();
        this.f51883o = new HashMap();
        this.f51894z = -9223372036854775807L;
    }
}
