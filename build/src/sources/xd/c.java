package xd;

import android.net.Uri;
import android.os.Handler;
import android.os.SystemClock;
import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.source.MediaLoadData;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.h;
import com.google.android.exoplayer2.upstream.i;
import com.google.android.exoplayer2.upstream.j;
import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import mc.l0;
import oe.w0;
import qi.v;
import rd.y;
import xd.c;
import xd.f;
import xd.g;
import xd.i;
import xd.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements k, j.b {
    public static final k.a A = new k.a() { // from class: xd.b
        @Override // xd.k.a
        public final k a(wd.g gVar, com.google.android.exoplayer2.upstream.i iVar, j jVar) {
            return new c(gVar, iVar, jVar);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private final wd.g f54479d;

    /* renamed from: e  reason: collision with root package name */
    private final j f54480e;

    /* renamed from: i  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f54481i;

    /* renamed from: o  reason: collision with root package name */
    private final HashMap f54482o;

    /* renamed from: p  reason: collision with root package name */
    private final CopyOnWriteArrayList f54483p;

    /* renamed from: q  reason: collision with root package name */
    private final double f54484q;

    /* renamed from: r  reason: collision with root package name */
    private y.a f54485r;

    /* renamed from: s  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.j f54486s;

    /* renamed from: t  reason: collision with root package name */
    private Handler f54487t;

    /* renamed from: u  reason: collision with root package name */
    private k.e f54488u;

    /* renamed from: v  reason: collision with root package name */
    private g f54489v;

    /* renamed from: w  reason: collision with root package name */
    private Uri f54490w;

    /* renamed from: x  reason: collision with root package name */
    private f f54491x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f54492y;

    /* renamed from: z  reason: collision with root package name */
    private long f54493z;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements k.b {
        private b() {
        }

        @Override // xd.k.b
        public void a() {
            c.this.f54483p.remove(this);
        }

        @Override // xd.k.b
        public boolean c(Uri uri, i.c cVar, boolean z10) {
            C0763c c0763c;
            if (c.this.f54491x == null) {
                long elapsedRealtime = SystemClock.elapsedRealtime();
                List list = ((g) w0.j(c.this.f54489v)).f54554e;
                int i10 = 0;
                for (int i11 = 0; i11 < list.size(); i11++) {
                    C0763c c0763c2 = (C0763c) c.this.f54482o.get(((g.b) list.get(i11)).f54567a);
                    if (c0763c2 != null && elapsedRealtime < c0763c2.f54502s) {
                        i10++;
                    }
                }
                i.b c10 = c.this.f54481i.c(new i.a(1, 0, c.this.f54489v.f54554e.size(), i10), cVar);
                if (c10 != null && c10.f14138a == 2 && (c0763c = (C0763c) c.this.f54482o.get(uri)) != null) {
                    c0763c.h(c10.f14139b);
                }
            }
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: xd.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class C0763c implements j.b {

        /* renamed from: d  reason: collision with root package name */
        private final Uri f54495d;

        /* renamed from: e  reason: collision with root package name */
        private final com.google.android.exoplayer2.upstream.j f54496e = new com.google.android.exoplayer2.upstream.j("DefaultHlsPlaylistTracker:MediaPlaylist");

        /* renamed from: i  reason: collision with root package name */
        private final DataSource f54497i;

        /* renamed from: o  reason: collision with root package name */
        private f f54498o;

        /* renamed from: p  reason: collision with root package name */
        private long f54499p;

        /* renamed from: q  reason: collision with root package name */
        private long f54500q;

        /* renamed from: r  reason: collision with root package name */
        private long f54501r;

        /* renamed from: s  reason: collision with root package name */
        private long f54502s;

        /* renamed from: t  reason: collision with root package name */
        private boolean f54503t;

        /* renamed from: u  reason: collision with root package name */
        private IOException f54504u;

        public C0763c(Uri uri) {
            this.f54495d = uri;
            this.f54497i = c.this.f54479d.a(4);
        }

        public static /* synthetic */ void a(C0763c c0763c, Uri uri) {
            c0763c.f54503t = false;
            c0763c.p(uri);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public boolean h(long j10) {
            this.f54502s = SystemClock.elapsedRealtime() + j10;
            if (this.f54495d.equals(c.this.f54490w) && !c.this.L()) {
                return true;
            }
            return false;
        }

        private Uri j() {
            String str;
            f fVar = this.f54498o;
            if (fVar != null) {
                f.C0764f c0764f = fVar.f54528v;
                if (c0764f.f54547a != -9223372036854775807L || c0764f.f54551e) {
                    Uri.Builder buildUpon = this.f54495d.buildUpon();
                    f fVar2 = this.f54498o;
                    if (fVar2.f54528v.f54551e) {
                        buildUpon.appendQueryParameter("_HLS_msn", String.valueOf(fVar2.f54517k + fVar2.f54524r.size()));
                        f fVar3 = this.f54498o;
                        if (fVar3.f54520n != -9223372036854775807L) {
                            List list = fVar3.f54525s;
                            int size = list.size();
                            if (!list.isEmpty() && ((f.b) v.c(list)).f54530x) {
                                size--;
                            }
                            buildUpon.appendQueryParameter("_HLS_part", String.valueOf(size));
                        }
                    }
                    f.C0764f c0764f2 = this.f54498o.f54528v;
                    if (c0764f2.f54547a != -9223372036854775807L) {
                        if (c0764f2.f54548b) {
                            str = "v2";
                        } else {
                            str = "YES";
                        }
                        buildUpon.appendQueryParameter("_HLS_skip", str);
                    }
                    return buildUpon.build();
                }
            }
            return this.f54495d;
        }

        private void p(Uri uri) {
            com.google.android.exoplayer2.upstream.k kVar = new com.google.android.exoplayer2.upstream.k(this.f54497i, uri, 4, c.this.f54480e.a(c.this.f54489v, this.f54498o));
            c.this.f54485r.s(new LoadEventInfo(kVar.f14164a, kVar.f14165b, this.f54496e.n(kVar, this, c.this.f54481i.b(kVar.f14166c))), kVar.f14166c);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void q(final Uri uri) {
            this.f54502s = 0L;
            if (!this.f54503t && !this.f54496e.j() && !this.f54496e.i()) {
                long elapsedRealtime = SystemClock.elapsedRealtime();
                if (elapsedRealtime < this.f54501r) {
                    this.f54503t = true;
                    c.this.f54487t.postDelayed(new Runnable() { // from class: xd.d
                        @Override // java.lang.Runnable
                        public final void run() {
                            c.C0763c.a(c.C0763c.this, uri);
                        }
                    }, this.f54501r - elapsedRealtime);
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
            f fVar3 = this.f54498o;
            long elapsedRealtime = SystemClock.elapsedRealtime();
            this.f54499p = elapsedRealtime;
            f G = c.this.G(fVar3, fVar);
            this.f54498o = G;
            IOException iOException = null;
            if (G != fVar3) {
                this.f54504u = null;
                this.f54500q = elapsedRealtime;
                c.this.R(this.f54495d, G);
            } else if (!G.f54521o) {
                if (fVar.f54517k + fVar.f54524r.size() < this.f54498o.f54517k) {
                    iOException = new k.c(this.f54495d);
                    z10 = true;
                } else {
                    z10 = false;
                    if (elapsedRealtime - this.f54500q > w0.p1(fVar2.f54519m) * c.this.f54484q) {
                        iOException = new k.d(this.f54495d);
                    }
                }
                if (iOException != null) {
                    this.f54504u = iOException;
                    c.this.N(this.f54495d, new i.c(loadEventInfo, new MediaLoadData(4), iOException, 1), z10);
                }
            }
            f fVar4 = this.f54498o;
            if (!fVar4.f54528v.f54551e) {
                if (fVar4 != fVar3) {
                    j10 = fVar4.f54519m;
                } else {
                    j10 = fVar4.f54519m / 2;
                }
            } else {
                j10 = 0;
            }
            this.f54501r = elapsedRealtime + w0.p1(j10);
            if ((this.f54498o.f54520n != -9223372036854775807L || this.f54495d.equals(c.this.f54490w)) && !this.f54498o.f54521o) {
                q(j());
            }
        }

        public f l() {
            return this.f54498o;
        }

        public boolean m() {
            int i10;
            if (this.f54498o == null) {
                return false;
            }
            long elapsedRealtime = SystemClock.elapsedRealtime();
            long max = Math.max(30000L, w0.p1(this.f54498o.f54527u));
            f fVar = this.f54498o;
            if (!fVar.f54521o && (i10 = fVar.f54510d) != 2 && i10 != 1 && this.f54499p + max <= elapsedRealtime) {
                return false;
            }
            return true;
        }

        public void o() {
            q(this.f54495d);
        }

        public void r() {
            this.f54496e.a();
            IOException iOException = this.f54504u;
            if (iOException == null) {
                return;
            }
            throw iOException;
        }

        @Override // com.google.android.exoplayer2.upstream.j.b
        /* renamed from: s */
        public void i(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11, boolean z10) {
            LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f14164a, kVar.f14165b, kVar.f(), kVar.d(), j10, j11, kVar.b());
            c.this.f54481i.d(kVar.f14164a);
            c.this.f54485r.j(loadEventInfo, 4);
        }

        @Override // com.google.android.exoplayer2.upstream.j.b
        /* renamed from: t */
        public void k(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11) {
            h hVar = (h) kVar.e();
            LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f14164a, kVar.f14165b, kVar.f(), kVar.d(), j10, j11, kVar.b());
            if (hVar instanceof f) {
                v((f) hVar, loadEventInfo);
                c.this.f54485r.m(loadEventInfo, 4);
            } else {
                this.f54504u = l0.c("Loaded playlist has unexpected type.", null);
                c.this.f54485r.q(loadEventInfo, 4, this.f54504u, true);
            }
            c.this.f54481i.d(kVar.f14164a);
        }

        @Override // com.google.android.exoplayer2.upstream.j.b
        /* renamed from: u */
        public j.c n(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11, IOException iOException, int i10) {
            boolean z10;
            int i11;
            j.c cVar;
            LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f14164a, kVar.f14165b, kVar.f(), kVar.d(), j10, j11, kVar.b());
            if (kVar.f().getQueryParameter("_HLS_msn") != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            boolean z11 = iOException instanceof i.a;
            if (z10 || z11) {
                if (iOException instanceof h.f) {
                    i11 = ((h.f) iOException).f14128o;
                } else {
                    i11 = Integer.MAX_VALUE;
                }
                if (z11 || i11 == 400 || i11 == 503) {
                    this.f54501r = SystemClock.elapsedRealtime();
                    o();
                    ((y.a) w0.j(c.this.f54485r)).q(loadEventInfo, kVar.f14166c, iOException, true);
                    return com.google.android.exoplayer2.upstream.j.f14146f;
                }
            }
            i.c cVar2 = new i.c(loadEventInfo, new MediaLoadData(kVar.f14166c), iOException, i10);
            if (c.this.N(this.f54495d, cVar2, false)) {
                long a10 = c.this.f54481i.a(cVar2);
                if (a10 != -9223372036854775807L) {
                    cVar = com.google.android.exoplayer2.upstream.j.h(false, a10);
                } else {
                    cVar = com.google.android.exoplayer2.upstream.j.f14147g;
                }
            } else {
                cVar = com.google.android.exoplayer2.upstream.j.f14146f;
            }
            boolean c10 = cVar.c();
            c.this.f54485r.q(loadEventInfo, kVar.f14166c, iOException, !c10);
            if (!c10) {
                c.this.f54481i.d(kVar.f14164a);
            }
            return cVar;
        }

        public void w() {
            this.f54496e.l();
        }
    }

    public c(wd.g gVar, com.google.android.exoplayer2.upstream.i iVar, j jVar) {
        this(gVar, iVar, jVar, 3.5d);
    }

    private void E(List list) {
        int size = list.size();
        for (int i10 = 0; i10 < size; i10++) {
            Uri uri = (Uri) list.get(i10);
            this.f54482o.put(uri, new C0763c(uri));
        }
    }

    private static f.d F(f fVar, f fVar2) {
        int i10 = (int) (fVar2.f54517k - fVar.f54517k);
        List list = fVar.f54524r;
        if (i10 < list.size()) {
            return (f.d) list.get(i10);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public f G(f fVar, f fVar2) {
        if (!fVar2.f(fVar)) {
            if (fVar2.f54521o) {
                return fVar.d();
            }
            return fVar;
        }
        return fVar2.c(I(fVar, fVar2), H(fVar, fVar2));
    }

    private int H(f fVar, f fVar2) {
        int i10;
        f.d F;
        if (fVar2.f54515i) {
            return fVar2.f54516j;
        }
        f fVar3 = this.f54491x;
        if (fVar3 != null) {
            i10 = fVar3.f54516j;
        } else {
            i10 = 0;
        }
        if (fVar != null && (F = F(fVar, fVar2)) != null) {
            return (fVar.f54516j + F.f54539o) - ((f.d) fVar2.f54524r.get(0)).f54539o;
        }
        return i10;
    }

    private long I(f fVar, f fVar2) {
        long j10;
        if (fVar2.f54522p) {
            return fVar2.f54514h;
        }
        f fVar3 = this.f54491x;
        if (fVar3 != null) {
            j10 = fVar3.f54514h;
        } else {
            j10 = 0;
        }
        if (fVar != null) {
            int size = fVar.f54524r.size();
            f.d F = F(fVar, fVar2);
            if (F != null) {
                return fVar.f54514h + F.f54540p;
            }
            if (size == fVar2.f54517k - fVar.f54517k) {
                return fVar.e();
            }
        }
        return j10;
    }

    private Uri J(Uri uri) {
        f.c cVar;
        f fVar = this.f54491x;
        if (fVar != null && fVar.f54528v.f54551e && (cVar = (f.c) fVar.f54526t.get(uri)) != null) {
            Uri.Builder buildUpon = uri.buildUpon();
            buildUpon.appendQueryParameter("_HLS_msn", String.valueOf(cVar.f54532b));
            int i10 = cVar.f54533c;
            if (i10 != -1) {
                buildUpon.appendQueryParameter("_HLS_part", String.valueOf(i10));
            }
            return buildUpon.build();
        }
        return uri;
    }

    private boolean K(Uri uri) {
        List list = this.f54489v.f54554e;
        for (int i10 = 0; i10 < list.size(); i10++) {
            if (uri.equals(((g.b) list.get(i10)).f54567a)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean L() {
        List list = this.f54489v.f54554e;
        int size = list.size();
        long elapsedRealtime = SystemClock.elapsedRealtime();
        for (int i10 = 0; i10 < size; i10++) {
            C0763c c0763c = (C0763c) oe.a.e((C0763c) this.f54482o.get(((g.b) list.get(i10)).f54567a));
            if (elapsedRealtime > c0763c.f54502s) {
                Uri uri = c0763c.f54495d;
                this.f54490w = uri;
                c0763c.q(J(uri));
                return true;
            }
        }
        return false;
    }

    private void M(Uri uri) {
        if (!uri.equals(this.f54490w) && K(uri)) {
            f fVar = this.f54491x;
            if (fVar == null || !fVar.f54521o) {
                this.f54490w = uri;
                C0763c c0763c = (C0763c) this.f54482o.get(uri);
                f fVar2 = c0763c.f54498o;
                if (fVar2 == null || !fVar2.f54521o) {
                    c0763c.q(J(uri));
                    return;
                }
                this.f54491x = fVar2;
                this.f54488u.c(fVar2);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean N(Uri uri, i.c cVar, boolean z10) {
        Iterator it = this.f54483p.iterator();
        boolean z11 = false;
        while (it.hasNext()) {
            z11 |= !((k.b) it.next()).c(uri, cVar, z10);
        }
        return z11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void R(Uri uri, f fVar) {
        if (uri.equals(this.f54490w)) {
            if (this.f54491x == null) {
                this.f54492y = !fVar.f54521o;
                this.f54493z = fVar.f54514h;
            }
            this.f54491x = fVar;
            this.f54488u.c(fVar);
        }
        Iterator it = this.f54483p.iterator();
        while (it.hasNext()) {
            ((k.b) it.next()).a();
        }
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: O */
    public void i(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11, boolean z10) {
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f14164a, kVar.f14165b, kVar.f(), kVar.d(), j10, j11, kVar.b());
        this.f54481i.d(kVar.f14164a);
        this.f54485r.j(loadEventInfo, 4);
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: P */
    public void k(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11) {
        g gVar;
        h hVar = (h) kVar.e();
        boolean z10 = hVar instanceof f;
        if (z10) {
            gVar = g.e(hVar.f54573a);
        } else {
            gVar = (g) hVar;
        }
        this.f54489v = gVar;
        this.f54490w = ((g.b) gVar.f54554e.get(0)).f54567a;
        this.f54483p.add(new b());
        E(gVar.f54553d);
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f14164a, kVar.f14165b, kVar.f(), kVar.d(), j10, j11, kVar.b());
        C0763c c0763c = (C0763c) this.f54482o.get(this.f54490w);
        if (z10) {
            c0763c.v((f) hVar, loadEventInfo);
        } else {
            c0763c.o();
        }
        this.f54481i.d(kVar.f14164a);
        this.f54485r.m(loadEventInfo, 4);
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: Q */
    public j.c n(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11, IOException iOException, int i10) {
        boolean z10;
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f14164a, kVar.f14165b, kVar.f(), kVar.d(), j10, j11, kVar.b());
        long a10 = this.f54481i.a(new i.c(loadEventInfo, new MediaLoadData(kVar.f14166c), iOException, i10));
        if (a10 == -9223372036854775807L) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f54485r.q(loadEventInfo, kVar.f14166c, iOException, z10);
        if (z10) {
            this.f54481i.d(kVar.f14164a);
        }
        if (z10) {
            return com.google.android.exoplayer2.upstream.j.f14147g;
        }
        return com.google.android.exoplayer2.upstream.j.h(false, a10);
    }

    @Override // xd.k
    public void a(Uri uri) {
        ((C0763c) this.f54482o.get(uri)).r();
    }

    @Override // xd.k
    public void b(Uri uri, y.a aVar, k.e eVar) {
        boolean z10;
        this.f54487t = w0.w();
        this.f54485r = aVar;
        this.f54488u = eVar;
        com.google.android.exoplayer2.upstream.k kVar = new com.google.android.exoplayer2.upstream.k(this.f54479d.a(4), uri, 4, this.f54480e.b());
        if (this.f54486s == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        com.google.android.exoplayer2.upstream.j jVar = new com.google.android.exoplayer2.upstream.j("DefaultHlsPlaylistTracker:MultivariantPlaylist");
        this.f54486s = jVar;
        aVar.s(new LoadEventInfo(kVar.f14164a, kVar.f14165b, jVar.n(kVar, this, this.f54481i.b(kVar.f14166c))), kVar.f14166c);
    }

    @Override // xd.k
    public long c() {
        return this.f54493z;
    }

    @Override // xd.k
    public g d() {
        return this.f54489v;
    }

    @Override // xd.k
    public void e(k.b bVar) {
        this.f54483p.remove(bVar);
    }

    @Override // xd.k
    public void f(Uri uri) {
        ((C0763c) this.f54482o.get(uri)).o();
    }

    @Override // xd.k
    public void g(k.b bVar) {
        oe.a.e(bVar);
        this.f54483p.add(bVar);
    }

    @Override // xd.k
    public boolean h(Uri uri) {
        return ((C0763c) this.f54482o.get(uri)).m();
    }

    @Override // xd.k
    public boolean j() {
        return this.f54492y;
    }

    @Override // xd.k
    public boolean l(Uri uri, long j10) {
        C0763c c0763c = (C0763c) this.f54482o.get(uri);
        if (c0763c != null) {
            return !c0763c.h(j10);
        }
        return false;
    }

    @Override // xd.k
    public void m() {
        com.google.android.exoplayer2.upstream.j jVar = this.f54486s;
        if (jVar != null) {
            jVar.a();
        }
        Uri uri = this.f54490w;
        if (uri != null) {
            a(uri);
        }
    }

    @Override // xd.k
    public f o(Uri uri, boolean z10) {
        f l10 = ((C0763c) this.f54482o.get(uri)).l();
        if (l10 != null && z10) {
            M(uri);
        }
        return l10;
    }

    @Override // xd.k
    public void stop() {
        this.f54490w = null;
        this.f54491x = null;
        this.f54489v = null;
        this.f54493z = -9223372036854775807L;
        this.f54486s.l();
        this.f54486s = null;
        for (C0763c c0763c : this.f54482o.values()) {
            c0763c.w();
        }
        this.f54487t.removeCallbacksAndMessages(null);
        this.f54487t = null;
        this.f54482o.clear();
    }

    public c(wd.g gVar, com.google.android.exoplayer2.upstream.i iVar, j jVar, double d10) {
        this.f54479d = gVar;
        this.f54480e = jVar;
        this.f54481i = iVar;
        this.f54484q = d10;
        this.f54483p = new CopyOnWriteArrayList();
        this.f54482o = new HashMap();
        this.f54493z = -9223372036854775807L;
    }
}
