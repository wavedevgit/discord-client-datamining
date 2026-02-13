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
    private final wd.g f55047d;

    /* renamed from: e  reason: collision with root package name */
    private final j f55048e;

    /* renamed from: i  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f55049i;

    /* renamed from: o  reason: collision with root package name */
    private final HashMap f55050o;

    /* renamed from: p  reason: collision with root package name */
    private final CopyOnWriteArrayList f55051p;

    /* renamed from: q  reason: collision with root package name */
    private final double f55052q;

    /* renamed from: r  reason: collision with root package name */
    private y.a f55053r;

    /* renamed from: s  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.j f55054s;

    /* renamed from: t  reason: collision with root package name */
    private Handler f55055t;

    /* renamed from: u  reason: collision with root package name */
    private k.e f55056u;

    /* renamed from: v  reason: collision with root package name */
    private g f55057v;

    /* renamed from: w  reason: collision with root package name */
    private Uri f55058w;

    /* renamed from: x  reason: collision with root package name */
    private f f55059x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f55060y;

    /* renamed from: z  reason: collision with root package name */
    private long f55061z;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements k.b {
        private b() {
        }

        @Override // xd.k.b
        public void a() {
            c.this.f55051p.remove(this);
        }

        @Override // xd.k.b
        public boolean c(Uri uri, i.c cVar, boolean z10) {
            C0763c c0763c;
            if (c.this.f55059x == null) {
                long elapsedRealtime = SystemClock.elapsedRealtime();
                List list = ((g) w0.j(c.this.f55057v)).f55122e;
                int i10 = 0;
                for (int i11 = 0; i11 < list.size(); i11++) {
                    C0763c c0763c2 = (C0763c) c.this.f55050o.get(((g.b) list.get(i11)).f55135a);
                    if (c0763c2 != null && elapsedRealtime < c0763c2.f55070s) {
                        i10++;
                    }
                }
                i.b c10 = c.this.f55049i.c(new i.a(1, 0, c.this.f55057v.f55122e.size(), i10), cVar);
                if (c10 != null && c10.f14138a == 2 && (c0763c = (C0763c) c.this.f55050o.get(uri)) != null) {
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
        private final Uri f55063d;

        /* renamed from: e  reason: collision with root package name */
        private final com.google.android.exoplayer2.upstream.j f55064e = new com.google.android.exoplayer2.upstream.j("DefaultHlsPlaylistTracker:MediaPlaylist");

        /* renamed from: i  reason: collision with root package name */
        private final DataSource f55065i;

        /* renamed from: o  reason: collision with root package name */
        private f f55066o;

        /* renamed from: p  reason: collision with root package name */
        private long f55067p;

        /* renamed from: q  reason: collision with root package name */
        private long f55068q;

        /* renamed from: r  reason: collision with root package name */
        private long f55069r;

        /* renamed from: s  reason: collision with root package name */
        private long f55070s;

        /* renamed from: t  reason: collision with root package name */
        private boolean f55071t;

        /* renamed from: u  reason: collision with root package name */
        private IOException f55072u;

        public C0763c(Uri uri) {
            this.f55063d = uri;
            this.f55065i = c.this.f55047d.a(4);
        }

        public static /* synthetic */ void a(C0763c c0763c, Uri uri) {
            c0763c.f55071t = false;
            c0763c.p(uri);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public boolean h(long j10) {
            this.f55070s = SystemClock.elapsedRealtime() + j10;
            if (this.f55063d.equals(c.this.f55058w) && !c.this.L()) {
                return true;
            }
            return false;
        }

        private Uri j() {
            String str;
            f fVar = this.f55066o;
            if (fVar != null) {
                f.C0764f c0764f = fVar.f55096v;
                if (c0764f.f55115a != -9223372036854775807L || c0764f.f55119e) {
                    Uri.Builder buildUpon = this.f55063d.buildUpon();
                    f fVar2 = this.f55066o;
                    if (fVar2.f55096v.f55119e) {
                        buildUpon.appendQueryParameter("_HLS_msn", String.valueOf(fVar2.f55085k + fVar2.f55092r.size()));
                        f fVar3 = this.f55066o;
                        if (fVar3.f55088n != -9223372036854775807L) {
                            List list = fVar3.f55093s;
                            int size = list.size();
                            if (!list.isEmpty() && ((f.b) v.c(list)).f55098x) {
                                size--;
                            }
                            buildUpon.appendQueryParameter("_HLS_part", String.valueOf(size));
                        }
                    }
                    f.C0764f c0764f2 = this.f55066o.f55096v;
                    if (c0764f2.f55115a != -9223372036854775807L) {
                        if (c0764f2.f55116b) {
                            str = "v2";
                        } else {
                            str = "YES";
                        }
                        buildUpon.appendQueryParameter("_HLS_skip", str);
                    }
                    return buildUpon.build();
                }
            }
            return this.f55063d;
        }

        private void p(Uri uri) {
            com.google.android.exoplayer2.upstream.k kVar = new com.google.android.exoplayer2.upstream.k(this.f55065i, uri, 4, c.this.f55048e.a(c.this.f55057v, this.f55066o));
            c.this.f55053r.s(new LoadEventInfo(kVar.f14164a, kVar.f14165b, this.f55064e.n(kVar, this, c.this.f55049i.b(kVar.f14166c))), kVar.f14166c);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void q(final Uri uri) {
            this.f55070s = 0L;
            if (!this.f55071t && !this.f55064e.j() && !this.f55064e.i()) {
                long elapsedRealtime = SystemClock.elapsedRealtime();
                if (elapsedRealtime < this.f55069r) {
                    this.f55071t = true;
                    c.this.f55055t.postDelayed(new Runnable() { // from class: xd.d
                        @Override // java.lang.Runnable
                        public final void run() {
                            c.C0763c.a(c.C0763c.this, uri);
                        }
                    }, this.f55069r - elapsedRealtime);
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
            f fVar3 = this.f55066o;
            long elapsedRealtime = SystemClock.elapsedRealtime();
            this.f55067p = elapsedRealtime;
            f G = c.this.G(fVar3, fVar);
            this.f55066o = G;
            IOException iOException = null;
            if (G != fVar3) {
                this.f55072u = null;
                this.f55068q = elapsedRealtime;
                c.this.R(this.f55063d, G);
            } else if (!G.f55089o) {
                if (fVar.f55085k + fVar.f55092r.size() < this.f55066o.f55085k) {
                    iOException = new k.c(this.f55063d);
                    z10 = true;
                } else {
                    z10 = false;
                    if (elapsedRealtime - this.f55068q > w0.p1(fVar2.f55087m) * c.this.f55052q) {
                        iOException = new k.d(this.f55063d);
                    }
                }
                if (iOException != null) {
                    this.f55072u = iOException;
                    c.this.N(this.f55063d, new i.c(loadEventInfo, new MediaLoadData(4), iOException, 1), z10);
                }
            }
            f fVar4 = this.f55066o;
            if (!fVar4.f55096v.f55119e) {
                if (fVar4 != fVar3) {
                    j10 = fVar4.f55087m;
                } else {
                    j10 = fVar4.f55087m / 2;
                }
            } else {
                j10 = 0;
            }
            this.f55069r = elapsedRealtime + w0.p1(j10);
            if ((this.f55066o.f55088n != -9223372036854775807L || this.f55063d.equals(c.this.f55058w)) && !this.f55066o.f55089o) {
                q(j());
            }
        }

        public f l() {
            return this.f55066o;
        }

        public boolean m() {
            int i10;
            if (this.f55066o == null) {
                return false;
            }
            long elapsedRealtime = SystemClock.elapsedRealtime();
            long max = Math.max(30000L, w0.p1(this.f55066o.f55095u));
            f fVar = this.f55066o;
            if (!fVar.f55089o && (i10 = fVar.f55078d) != 2 && i10 != 1 && this.f55067p + max <= elapsedRealtime) {
                return false;
            }
            return true;
        }

        public void o() {
            q(this.f55063d);
        }

        public void r() {
            this.f55064e.a();
            IOException iOException = this.f55072u;
            if (iOException == null) {
                return;
            }
            throw iOException;
        }

        @Override // com.google.android.exoplayer2.upstream.j.b
        /* renamed from: s */
        public void i(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11, boolean z10) {
            LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f14164a, kVar.f14165b, kVar.f(), kVar.d(), j10, j11, kVar.b());
            c.this.f55049i.d(kVar.f14164a);
            c.this.f55053r.j(loadEventInfo, 4);
        }

        @Override // com.google.android.exoplayer2.upstream.j.b
        /* renamed from: t */
        public void k(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11) {
            h hVar = (h) kVar.e();
            LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f14164a, kVar.f14165b, kVar.f(), kVar.d(), j10, j11, kVar.b());
            if (hVar instanceof f) {
                v((f) hVar, loadEventInfo);
                c.this.f55053r.m(loadEventInfo, 4);
            } else {
                this.f55072u = l0.c("Loaded playlist has unexpected type.", null);
                c.this.f55053r.q(loadEventInfo, 4, this.f55072u, true);
            }
            c.this.f55049i.d(kVar.f14164a);
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
                    this.f55069r = SystemClock.elapsedRealtime();
                    o();
                    ((y.a) w0.j(c.this.f55053r)).q(loadEventInfo, kVar.f14166c, iOException, true);
                    return com.google.android.exoplayer2.upstream.j.f14146f;
                }
            }
            i.c cVar2 = new i.c(loadEventInfo, new MediaLoadData(kVar.f14166c), iOException, i10);
            if (c.this.N(this.f55063d, cVar2, false)) {
                long a10 = c.this.f55049i.a(cVar2);
                if (a10 != -9223372036854775807L) {
                    cVar = com.google.android.exoplayer2.upstream.j.h(false, a10);
                } else {
                    cVar = com.google.android.exoplayer2.upstream.j.f14147g;
                }
            } else {
                cVar = com.google.android.exoplayer2.upstream.j.f14146f;
            }
            boolean c10 = cVar.c();
            c.this.f55053r.q(loadEventInfo, kVar.f14166c, iOException, !c10);
            if (!c10) {
                c.this.f55049i.d(kVar.f14164a);
            }
            return cVar;
        }

        public void w() {
            this.f55064e.l();
        }
    }

    public c(wd.g gVar, com.google.android.exoplayer2.upstream.i iVar, j jVar) {
        this(gVar, iVar, jVar, 3.5d);
    }

    private void E(List list) {
        int size = list.size();
        for (int i10 = 0; i10 < size; i10++) {
            Uri uri = (Uri) list.get(i10);
            this.f55050o.put(uri, new C0763c(uri));
        }
    }

    private static f.d F(f fVar, f fVar2) {
        int i10 = (int) (fVar2.f55085k - fVar.f55085k);
        List list = fVar.f55092r;
        if (i10 < list.size()) {
            return (f.d) list.get(i10);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public f G(f fVar, f fVar2) {
        if (!fVar2.f(fVar)) {
            if (fVar2.f55089o) {
                return fVar.d();
            }
            return fVar;
        }
        return fVar2.c(I(fVar, fVar2), H(fVar, fVar2));
    }

    private int H(f fVar, f fVar2) {
        int i10;
        f.d F;
        if (fVar2.f55083i) {
            return fVar2.f55084j;
        }
        f fVar3 = this.f55059x;
        if (fVar3 != null) {
            i10 = fVar3.f55084j;
        } else {
            i10 = 0;
        }
        if (fVar != null && (F = F(fVar, fVar2)) != null) {
            return (fVar.f55084j + F.f55107o) - ((f.d) fVar2.f55092r.get(0)).f55107o;
        }
        return i10;
    }

    private long I(f fVar, f fVar2) {
        long j10;
        if (fVar2.f55090p) {
            return fVar2.f55082h;
        }
        f fVar3 = this.f55059x;
        if (fVar3 != null) {
            j10 = fVar3.f55082h;
        } else {
            j10 = 0;
        }
        if (fVar != null) {
            int size = fVar.f55092r.size();
            f.d F = F(fVar, fVar2);
            if (F != null) {
                return fVar.f55082h + F.f55108p;
            }
            if (size == fVar2.f55085k - fVar.f55085k) {
                return fVar.e();
            }
        }
        return j10;
    }

    private Uri J(Uri uri) {
        f.c cVar;
        f fVar = this.f55059x;
        if (fVar != null && fVar.f55096v.f55119e && (cVar = (f.c) fVar.f55094t.get(uri)) != null) {
            Uri.Builder buildUpon = uri.buildUpon();
            buildUpon.appendQueryParameter("_HLS_msn", String.valueOf(cVar.f55100b));
            int i10 = cVar.f55101c;
            if (i10 != -1) {
                buildUpon.appendQueryParameter("_HLS_part", String.valueOf(i10));
            }
            return buildUpon.build();
        }
        return uri;
    }

    private boolean K(Uri uri) {
        List list = this.f55057v.f55122e;
        for (int i10 = 0; i10 < list.size(); i10++) {
            if (uri.equals(((g.b) list.get(i10)).f55135a)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean L() {
        List list = this.f55057v.f55122e;
        int size = list.size();
        long elapsedRealtime = SystemClock.elapsedRealtime();
        for (int i10 = 0; i10 < size; i10++) {
            C0763c c0763c = (C0763c) oe.a.e((C0763c) this.f55050o.get(((g.b) list.get(i10)).f55135a));
            if (elapsedRealtime > c0763c.f55070s) {
                Uri uri = c0763c.f55063d;
                this.f55058w = uri;
                c0763c.q(J(uri));
                return true;
            }
        }
        return false;
    }

    private void M(Uri uri) {
        if (!uri.equals(this.f55058w) && K(uri)) {
            f fVar = this.f55059x;
            if (fVar == null || !fVar.f55089o) {
                this.f55058w = uri;
                C0763c c0763c = (C0763c) this.f55050o.get(uri);
                f fVar2 = c0763c.f55066o;
                if (fVar2 == null || !fVar2.f55089o) {
                    c0763c.q(J(uri));
                    return;
                }
                this.f55059x = fVar2;
                this.f55056u.c(fVar2);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean N(Uri uri, i.c cVar, boolean z10) {
        Iterator it = this.f55051p.iterator();
        boolean z11 = false;
        while (it.hasNext()) {
            z11 |= !((k.b) it.next()).c(uri, cVar, z10);
        }
        return z11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void R(Uri uri, f fVar) {
        if (uri.equals(this.f55058w)) {
            if (this.f55059x == null) {
                this.f55060y = !fVar.f55089o;
                this.f55061z = fVar.f55082h;
            }
            this.f55059x = fVar;
            this.f55056u.c(fVar);
        }
        Iterator it = this.f55051p.iterator();
        while (it.hasNext()) {
            ((k.b) it.next()).a();
        }
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: O */
    public void i(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11, boolean z10) {
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f14164a, kVar.f14165b, kVar.f(), kVar.d(), j10, j11, kVar.b());
        this.f55049i.d(kVar.f14164a);
        this.f55053r.j(loadEventInfo, 4);
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: P */
    public void k(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11) {
        g gVar;
        h hVar = (h) kVar.e();
        boolean z10 = hVar instanceof f;
        if (z10) {
            gVar = g.e(hVar.f55141a);
        } else {
            gVar = (g) hVar;
        }
        this.f55057v = gVar;
        this.f55058w = ((g.b) gVar.f55122e.get(0)).f55135a;
        this.f55051p.add(new b());
        E(gVar.f55121d);
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f14164a, kVar.f14165b, kVar.f(), kVar.d(), j10, j11, kVar.b());
        C0763c c0763c = (C0763c) this.f55050o.get(this.f55058w);
        if (z10) {
            c0763c.v((f) hVar, loadEventInfo);
        } else {
            c0763c.o();
        }
        this.f55049i.d(kVar.f14164a);
        this.f55053r.m(loadEventInfo, 4);
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: Q */
    public j.c n(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11, IOException iOException, int i10) {
        boolean z10;
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f14164a, kVar.f14165b, kVar.f(), kVar.d(), j10, j11, kVar.b());
        long a10 = this.f55049i.a(new i.c(loadEventInfo, new MediaLoadData(kVar.f14166c), iOException, i10));
        if (a10 == -9223372036854775807L) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f55053r.q(loadEventInfo, kVar.f14166c, iOException, z10);
        if (z10) {
            this.f55049i.d(kVar.f14164a);
        }
        if (z10) {
            return com.google.android.exoplayer2.upstream.j.f14147g;
        }
        return com.google.android.exoplayer2.upstream.j.h(false, a10);
    }

    @Override // xd.k
    public void a(Uri uri) {
        ((C0763c) this.f55050o.get(uri)).r();
    }

    @Override // xd.k
    public void b(Uri uri, y.a aVar, k.e eVar) {
        boolean z10;
        this.f55055t = w0.w();
        this.f55053r = aVar;
        this.f55056u = eVar;
        com.google.android.exoplayer2.upstream.k kVar = new com.google.android.exoplayer2.upstream.k(this.f55047d.a(4), uri, 4, this.f55048e.b());
        if (this.f55054s == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        com.google.android.exoplayer2.upstream.j jVar = new com.google.android.exoplayer2.upstream.j("DefaultHlsPlaylistTracker:MultivariantPlaylist");
        this.f55054s = jVar;
        aVar.s(new LoadEventInfo(kVar.f14164a, kVar.f14165b, jVar.n(kVar, this, this.f55049i.b(kVar.f14166c))), kVar.f14166c);
    }

    @Override // xd.k
    public long c() {
        return this.f55061z;
    }

    @Override // xd.k
    public g d() {
        return this.f55057v;
    }

    @Override // xd.k
    public void e(k.b bVar) {
        this.f55051p.remove(bVar);
    }

    @Override // xd.k
    public void f(Uri uri) {
        ((C0763c) this.f55050o.get(uri)).o();
    }

    @Override // xd.k
    public void g(k.b bVar) {
        oe.a.e(bVar);
        this.f55051p.add(bVar);
    }

    @Override // xd.k
    public boolean h(Uri uri) {
        return ((C0763c) this.f55050o.get(uri)).m();
    }

    @Override // xd.k
    public boolean j() {
        return this.f55060y;
    }

    @Override // xd.k
    public boolean l(Uri uri, long j10) {
        C0763c c0763c = (C0763c) this.f55050o.get(uri);
        if (c0763c != null) {
            return !c0763c.h(j10);
        }
        return false;
    }

    @Override // xd.k
    public void m() {
        com.google.android.exoplayer2.upstream.j jVar = this.f55054s;
        if (jVar != null) {
            jVar.a();
        }
        Uri uri = this.f55058w;
        if (uri != null) {
            a(uri);
        }
    }

    @Override // xd.k
    public f o(Uri uri, boolean z10) {
        f l10 = ((C0763c) this.f55050o.get(uri)).l();
        if (l10 != null && z10) {
            M(uri);
        }
        return l10;
    }

    @Override // xd.k
    public void stop() {
        this.f55058w = null;
        this.f55059x = null;
        this.f55057v = null;
        this.f55061z = -9223372036854775807L;
        this.f55054s.l();
        this.f55054s = null;
        for (C0763c c0763c : this.f55050o.values()) {
            c0763c.w();
        }
        this.f55055t.removeCallbacksAndMessages(null);
        this.f55055t = null;
        this.f55050o.clear();
    }

    public c(wd.g gVar, com.google.android.exoplayer2.upstream.i iVar, j jVar, double d10) {
        this.f55047d = gVar;
        this.f55048e = jVar;
        this.f55049i = iVar;
        this.f55052q = d10;
        this.f55051p = new CopyOnWriteArrayList();
        this.f55050o = new HashMap();
        this.f55061z = -9223372036854775807L;
    }
}
