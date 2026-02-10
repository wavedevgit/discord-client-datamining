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
    private final wd.g f54478d;

    /* renamed from: e  reason: collision with root package name */
    private final j f54479e;

    /* renamed from: i  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f54480i;

    /* renamed from: o  reason: collision with root package name */
    private final HashMap f54481o;

    /* renamed from: p  reason: collision with root package name */
    private final CopyOnWriteArrayList f54482p;

    /* renamed from: q  reason: collision with root package name */
    private final double f54483q;

    /* renamed from: r  reason: collision with root package name */
    private y.a f54484r;

    /* renamed from: s  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.j f54485s;

    /* renamed from: t  reason: collision with root package name */
    private Handler f54486t;

    /* renamed from: u  reason: collision with root package name */
    private k.e f54487u;

    /* renamed from: v  reason: collision with root package name */
    private g f54488v;

    /* renamed from: w  reason: collision with root package name */
    private Uri f54489w;

    /* renamed from: x  reason: collision with root package name */
    private f f54490x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f54491y;

    /* renamed from: z  reason: collision with root package name */
    private long f54492z;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements k.b {
        private b() {
        }

        @Override // xd.k.b
        public void a() {
            c.this.f54482p.remove(this);
        }

        @Override // xd.k.b
        public boolean c(Uri uri, i.c cVar, boolean z10) {
            C0763c c0763c;
            if (c.this.f54490x == null) {
                long elapsedRealtime = SystemClock.elapsedRealtime();
                List list = ((g) w0.j(c.this.f54488v)).f54553e;
                int i10 = 0;
                for (int i11 = 0; i11 < list.size(); i11++) {
                    C0763c c0763c2 = (C0763c) c.this.f54481o.get(((g.b) list.get(i11)).f54566a);
                    if (c0763c2 != null && elapsedRealtime < c0763c2.f54501s) {
                        i10++;
                    }
                }
                i.b c10 = c.this.f54480i.c(new i.a(1, 0, c.this.f54488v.f54553e.size(), i10), cVar);
                if (c10 != null && c10.f14137a == 2 && (c0763c = (C0763c) c.this.f54481o.get(uri)) != null) {
                    c0763c.h(c10.f14138b);
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
        private final Uri f54494d;

        /* renamed from: e  reason: collision with root package name */
        private final com.google.android.exoplayer2.upstream.j f54495e = new com.google.android.exoplayer2.upstream.j("DefaultHlsPlaylistTracker:MediaPlaylist");

        /* renamed from: i  reason: collision with root package name */
        private final DataSource f54496i;

        /* renamed from: o  reason: collision with root package name */
        private f f54497o;

        /* renamed from: p  reason: collision with root package name */
        private long f54498p;

        /* renamed from: q  reason: collision with root package name */
        private long f54499q;

        /* renamed from: r  reason: collision with root package name */
        private long f54500r;

        /* renamed from: s  reason: collision with root package name */
        private long f54501s;

        /* renamed from: t  reason: collision with root package name */
        private boolean f54502t;

        /* renamed from: u  reason: collision with root package name */
        private IOException f54503u;

        public C0763c(Uri uri) {
            this.f54494d = uri;
            this.f54496i = c.this.f54478d.a(4);
        }

        public static /* synthetic */ void a(C0763c c0763c, Uri uri) {
            c0763c.f54502t = false;
            c0763c.p(uri);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public boolean h(long j10) {
            this.f54501s = SystemClock.elapsedRealtime() + j10;
            if (this.f54494d.equals(c.this.f54489w) && !c.this.L()) {
                return true;
            }
            return false;
        }

        private Uri j() {
            String str;
            f fVar = this.f54497o;
            if (fVar != null) {
                f.C0764f c0764f = fVar.f54527v;
                if (c0764f.f54546a != -9223372036854775807L || c0764f.f54550e) {
                    Uri.Builder buildUpon = this.f54494d.buildUpon();
                    f fVar2 = this.f54497o;
                    if (fVar2.f54527v.f54550e) {
                        buildUpon.appendQueryParameter("_HLS_msn", String.valueOf(fVar2.f54516k + fVar2.f54523r.size()));
                        f fVar3 = this.f54497o;
                        if (fVar3.f54519n != -9223372036854775807L) {
                            List list = fVar3.f54524s;
                            int size = list.size();
                            if (!list.isEmpty() && ((f.b) v.c(list)).f54529x) {
                                size--;
                            }
                            buildUpon.appendQueryParameter("_HLS_part", String.valueOf(size));
                        }
                    }
                    f.C0764f c0764f2 = this.f54497o.f54527v;
                    if (c0764f2.f54546a != -9223372036854775807L) {
                        if (c0764f2.f54547b) {
                            str = "v2";
                        } else {
                            str = "YES";
                        }
                        buildUpon.appendQueryParameter("_HLS_skip", str);
                    }
                    return buildUpon.build();
                }
            }
            return this.f54494d;
        }

        private void p(Uri uri) {
            com.google.android.exoplayer2.upstream.k kVar = new com.google.android.exoplayer2.upstream.k(this.f54496i, uri, 4, c.this.f54479e.a(c.this.f54488v, this.f54497o));
            c.this.f54484r.s(new LoadEventInfo(kVar.f14163a, kVar.f14164b, this.f54495e.n(kVar, this, c.this.f54480i.b(kVar.f14165c))), kVar.f14165c);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void q(final Uri uri) {
            this.f54501s = 0L;
            if (!this.f54502t && !this.f54495e.j() && !this.f54495e.i()) {
                long elapsedRealtime = SystemClock.elapsedRealtime();
                if (elapsedRealtime < this.f54500r) {
                    this.f54502t = true;
                    c.this.f54486t.postDelayed(new Runnable() { // from class: xd.d
                        @Override // java.lang.Runnable
                        public final void run() {
                            c.C0763c.a(c.C0763c.this, uri);
                        }
                    }, this.f54500r - elapsedRealtime);
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
            f fVar3 = this.f54497o;
            long elapsedRealtime = SystemClock.elapsedRealtime();
            this.f54498p = elapsedRealtime;
            f G = c.this.G(fVar3, fVar);
            this.f54497o = G;
            IOException iOException = null;
            if (G != fVar3) {
                this.f54503u = null;
                this.f54499q = elapsedRealtime;
                c.this.R(this.f54494d, G);
            } else if (!G.f54520o) {
                if (fVar.f54516k + fVar.f54523r.size() < this.f54497o.f54516k) {
                    iOException = new k.c(this.f54494d);
                    z10 = true;
                } else {
                    z10 = false;
                    if (elapsedRealtime - this.f54499q > w0.p1(fVar2.f54518m) * c.this.f54483q) {
                        iOException = new k.d(this.f54494d);
                    }
                }
                if (iOException != null) {
                    this.f54503u = iOException;
                    c.this.N(this.f54494d, new i.c(loadEventInfo, new MediaLoadData(4), iOException, 1), z10);
                }
            }
            f fVar4 = this.f54497o;
            if (!fVar4.f54527v.f54550e) {
                if (fVar4 != fVar3) {
                    j10 = fVar4.f54518m;
                } else {
                    j10 = fVar4.f54518m / 2;
                }
            } else {
                j10 = 0;
            }
            this.f54500r = elapsedRealtime + w0.p1(j10);
            if ((this.f54497o.f54519n != -9223372036854775807L || this.f54494d.equals(c.this.f54489w)) && !this.f54497o.f54520o) {
                q(j());
            }
        }

        public f l() {
            return this.f54497o;
        }

        public boolean m() {
            int i10;
            if (this.f54497o == null) {
                return false;
            }
            long elapsedRealtime = SystemClock.elapsedRealtime();
            long max = Math.max(30000L, w0.p1(this.f54497o.f54526u));
            f fVar = this.f54497o;
            if (!fVar.f54520o && (i10 = fVar.f54509d) != 2 && i10 != 1 && this.f54498p + max <= elapsedRealtime) {
                return false;
            }
            return true;
        }

        public void o() {
            q(this.f54494d);
        }

        public void r() {
            this.f54495e.a();
            IOException iOException = this.f54503u;
            if (iOException == null) {
                return;
            }
            throw iOException;
        }

        @Override // com.google.android.exoplayer2.upstream.j.b
        /* renamed from: s */
        public void i(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11, boolean z10) {
            LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f14163a, kVar.f14164b, kVar.f(), kVar.d(), j10, j11, kVar.b());
            c.this.f54480i.d(kVar.f14163a);
            c.this.f54484r.j(loadEventInfo, 4);
        }

        @Override // com.google.android.exoplayer2.upstream.j.b
        /* renamed from: t */
        public void k(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11) {
            h hVar = (h) kVar.e();
            LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f14163a, kVar.f14164b, kVar.f(), kVar.d(), j10, j11, kVar.b());
            if (hVar instanceof f) {
                v((f) hVar, loadEventInfo);
                c.this.f54484r.m(loadEventInfo, 4);
            } else {
                this.f54503u = l0.c("Loaded playlist has unexpected type.", null);
                c.this.f54484r.q(loadEventInfo, 4, this.f54503u, true);
            }
            c.this.f54480i.d(kVar.f14163a);
        }

        @Override // com.google.android.exoplayer2.upstream.j.b
        /* renamed from: u */
        public j.c n(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11, IOException iOException, int i10) {
            boolean z10;
            int i11;
            j.c cVar;
            LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f14163a, kVar.f14164b, kVar.f(), kVar.d(), j10, j11, kVar.b());
            if (kVar.f().getQueryParameter("_HLS_msn") != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            boolean z11 = iOException instanceof i.a;
            if (z10 || z11) {
                if (iOException instanceof h.f) {
                    i11 = ((h.f) iOException).f14127o;
                } else {
                    i11 = Integer.MAX_VALUE;
                }
                if (z11 || i11 == 400 || i11 == 503) {
                    this.f54500r = SystemClock.elapsedRealtime();
                    o();
                    ((y.a) w0.j(c.this.f54484r)).q(loadEventInfo, kVar.f14165c, iOException, true);
                    return com.google.android.exoplayer2.upstream.j.f14145f;
                }
            }
            i.c cVar2 = new i.c(loadEventInfo, new MediaLoadData(kVar.f14165c), iOException, i10);
            if (c.this.N(this.f54494d, cVar2, false)) {
                long a10 = c.this.f54480i.a(cVar2);
                if (a10 != -9223372036854775807L) {
                    cVar = com.google.android.exoplayer2.upstream.j.h(false, a10);
                } else {
                    cVar = com.google.android.exoplayer2.upstream.j.f14146g;
                }
            } else {
                cVar = com.google.android.exoplayer2.upstream.j.f14145f;
            }
            boolean c10 = cVar.c();
            c.this.f54484r.q(loadEventInfo, kVar.f14165c, iOException, !c10);
            if (!c10) {
                c.this.f54480i.d(kVar.f14163a);
            }
            return cVar;
        }

        public void w() {
            this.f54495e.l();
        }
    }

    public c(wd.g gVar, com.google.android.exoplayer2.upstream.i iVar, j jVar) {
        this(gVar, iVar, jVar, 3.5d);
    }

    private void E(List list) {
        int size = list.size();
        for (int i10 = 0; i10 < size; i10++) {
            Uri uri = (Uri) list.get(i10);
            this.f54481o.put(uri, new C0763c(uri));
        }
    }

    private static f.d F(f fVar, f fVar2) {
        int i10 = (int) (fVar2.f54516k - fVar.f54516k);
        List list = fVar.f54523r;
        if (i10 < list.size()) {
            return (f.d) list.get(i10);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public f G(f fVar, f fVar2) {
        if (!fVar2.f(fVar)) {
            if (fVar2.f54520o) {
                return fVar.d();
            }
            return fVar;
        }
        return fVar2.c(I(fVar, fVar2), H(fVar, fVar2));
    }

    private int H(f fVar, f fVar2) {
        int i10;
        f.d F;
        if (fVar2.f54514i) {
            return fVar2.f54515j;
        }
        f fVar3 = this.f54490x;
        if (fVar3 != null) {
            i10 = fVar3.f54515j;
        } else {
            i10 = 0;
        }
        if (fVar != null && (F = F(fVar, fVar2)) != null) {
            return (fVar.f54515j + F.f54538o) - ((f.d) fVar2.f54523r.get(0)).f54538o;
        }
        return i10;
    }

    private long I(f fVar, f fVar2) {
        long j10;
        if (fVar2.f54521p) {
            return fVar2.f54513h;
        }
        f fVar3 = this.f54490x;
        if (fVar3 != null) {
            j10 = fVar3.f54513h;
        } else {
            j10 = 0;
        }
        if (fVar != null) {
            int size = fVar.f54523r.size();
            f.d F = F(fVar, fVar2);
            if (F != null) {
                return fVar.f54513h + F.f54539p;
            }
            if (size == fVar2.f54516k - fVar.f54516k) {
                return fVar.e();
            }
        }
        return j10;
    }

    private Uri J(Uri uri) {
        f.c cVar;
        f fVar = this.f54490x;
        if (fVar != null && fVar.f54527v.f54550e && (cVar = (f.c) fVar.f54525t.get(uri)) != null) {
            Uri.Builder buildUpon = uri.buildUpon();
            buildUpon.appendQueryParameter("_HLS_msn", String.valueOf(cVar.f54531b));
            int i10 = cVar.f54532c;
            if (i10 != -1) {
                buildUpon.appendQueryParameter("_HLS_part", String.valueOf(i10));
            }
            return buildUpon.build();
        }
        return uri;
    }

    private boolean K(Uri uri) {
        List list = this.f54488v.f54553e;
        for (int i10 = 0; i10 < list.size(); i10++) {
            if (uri.equals(((g.b) list.get(i10)).f54566a)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean L() {
        List list = this.f54488v.f54553e;
        int size = list.size();
        long elapsedRealtime = SystemClock.elapsedRealtime();
        for (int i10 = 0; i10 < size; i10++) {
            C0763c c0763c = (C0763c) oe.a.e((C0763c) this.f54481o.get(((g.b) list.get(i10)).f54566a));
            if (elapsedRealtime > c0763c.f54501s) {
                Uri uri = c0763c.f54494d;
                this.f54489w = uri;
                c0763c.q(J(uri));
                return true;
            }
        }
        return false;
    }

    private void M(Uri uri) {
        if (!uri.equals(this.f54489w) && K(uri)) {
            f fVar = this.f54490x;
            if (fVar == null || !fVar.f54520o) {
                this.f54489w = uri;
                C0763c c0763c = (C0763c) this.f54481o.get(uri);
                f fVar2 = c0763c.f54497o;
                if (fVar2 == null || !fVar2.f54520o) {
                    c0763c.q(J(uri));
                    return;
                }
                this.f54490x = fVar2;
                this.f54487u.c(fVar2);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean N(Uri uri, i.c cVar, boolean z10) {
        Iterator it = this.f54482p.iterator();
        boolean z11 = false;
        while (it.hasNext()) {
            z11 |= !((k.b) it.next()).c(uri, cVar, z10);
        }
        return z11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void R(Uri uri, f fVar) {
        if (uri.equals(this.f54489w)) {
            if (this.f54490x == null) {
                this.f54491y = !fVar.f54520o;
                this.f54492z = fVar.f54513h;
            }
            this.f54490x = fVar;
            this.f54487u.c(fVar);
        }
        Iterator it = this.f54482p.iterator();
        while (it.hasNext()) {
            ((k.b) it.next()).a();
        }
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: O */
    public void i(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11, boolean z10) {
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f14163a, kVar.f14164b, kVar.f(), kVar.d(), j10, j11, kVar.b());
        this.f54480i.d(kVar.f14163a);
        this.f54484r.j(loadEventInfo, 4);
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: P */
    public void k(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11) {
        g gVar;
        h hVar = (h) kVar.e();
        boolean z10 = hVar instanceof f;
        if (z10) {
            gVar = g.e(hVar.f54572a);
        } else {
            gVar = (g) hVar;
        }
        this.f54488v = gVar;
        this.f54489w = ((g.b) gVar.f54553e.get(0)).f54566a;
        this.f54482p.add(new b());
        E(gVar.f54552d);
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f14163a, kVar.f14164b, kVar.f(), kVar.d(), j10, j11, kVar.b());
        C0763c c0763c = (C0763c) this.f54481o.get(this.f54489w);
        if (z10) {
            c0763c.v((f) hVar, loadEventInfo);
        } else {
            c0763c.o();
        }
        this.f54480i.d(kVar.f14163a);
        this.f54484r.m(loadEventInfo, 4);
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: Q */
    public j.c n(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11, IOException iOException, int i10) {
        boolean z10;
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f14163a, kVar.f14164b, kVar.f(), kVar.d(), j10, j11, kVar.b());
        long a10 = this.f54480i.a(new i.c(loadEventInfo, new MediaLoadData(kVar.f14165c), iOException, i10));
        if (a10 == -9223372036854775807L) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f54484r.q(loadEventInfo, kVar.f14165c, iOException, z10);
        if (z10) {
            this.f54480i.d(kVar.f14163a);
        }
        if (z10) {
            return com.google.android.exoplayer2.upstream.j.f14146g;
        }
        return com.google.android.exoplayer2.upstream.j.h(false, a10);
    }

    @Override // xd.k
    public void a(Uri uri) {
        ((C0763c) this.f54481o.get(uri)).r();
    }

    @Override // xd.k
    public void b(Uri uri, y.a aVar, k.e eVar) {
        boolean z10;
        this.f54486t = w0.w();
        this.f54484r = aVar;
        this.f54487u = eVar;
        com.google.android.exoplayer2.upstream.k kVar = new com.google.android.exoplayer2.upstream.k(this.f54478d.a(4), uri, 4, this.f54479e.b());
        if (this.f54485s == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        com.google.android.exoplayer2.upstream.j jVar = new com.google.android.exoplayer2.upstream.j("DefaultHlsPlaylistTracker:MultivariantPlaylist");
        this.f54485s = jVar;
        aVar.s(new LoadEventInfo(kVar.f14163a, kVar.f14164b, jVar.n(kVar, this, this.f54480i.b(kVar.f14165c))), kVar.f14165c);
    }

    @Override // xd.k
    public long c() {
        return this.f54492z;
    }

    @Override // xd.k
    public g d() {
        return this.f54488v;
    }

    @Override // xd.k
    public void e(k.b bVar) {
        this.f54482p.remove(bVar);
    }

    @Override // xd.k
    public void f(Uri uri) {
        ((C0763c) this.f54481o.get(uri)).o();
    }

    @Override // xd.k
    public void g(k.b bVar) {
        oe.a.e(bVar);
        this.f54482p.add(bVar);
    }

    @Override // xd.k
    public boolean h(Uri uri) {
        return ((C0763c) this.f54481o.get(uri)).m();
    }

    @Override // xd.k
    public boolean j() {
        return this.f54491y;
    }

    @Override // xd.k
    public boolean l(Uri uri, long j10) {
        C0763c c0763c = (C0763c) this.f54481o.get(uri);
        if (c0763c != null) {
            return !c0763c.h(j10);
        }
        return false;
    }

    @Override // xd.k
    public void m() {
        com.google.android.exoplayer2.upstream.j jVar = this.f54485s;
        if (jVar != null) {
            jVar.a();
        }
        Uri uri = this.f54489w;
        if (uri != null) {
            a(uri);
        }
    }

    @Override // xd.k
    public f o(Uri uri, boolean z10) {
        f l10 = ((C0763c) this.f54481o.get(uri)).l();
        if (l10 != null && z10) {
            M(uri);
        }
        return l10;
    }

    @Override // xd.k
    public void stop() {
        this.f54489w = null;
        this.f54490x = null;
        this.f54488v = null;
        this.f54492z = -9223372036854775807L;
        this.f54485s.l();
        this.f54485s = null;
        for (C0763c c0763c : this.f54481o.values()) {
            c0763c.w();
        }
        this.f54486t.removeCallbacksAndMessages(null);
        this.f54486t = null;
        this.f54481o.clear();
    }

    public c(wd.g gVar, com.google.android.exoplayer2.upstream.i iVar, j jVar, double d10) {
        this.f54478d = gVar;
        this.f54479e = jVar;
        this.f54480i = iVar;
        this.f54483q = d10;
        this.f54482p = new CopyOnWriteArrayList();
        this.f54481o = new HashMap();
        this.f54492z = -9223372036854775807L;
    }
}
