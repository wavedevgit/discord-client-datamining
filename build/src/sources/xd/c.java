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
import oi.v;
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
    private final wd.g f54746d;

    /* renamed from: e  reason: collision with root package name */
    private final j f54747e;

    /* renamed from: i  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f54748i;

    /* renamed from: o  reason: collision with root package name */
    private final HashMap f54749o;

    /* renamed from: p  reason: collision with root package name */
    private final CopyOnWriteArrayList f54750p;

    /* renamed from: q  reason: collision with root package name */
    private final double f54751q;

    /* renamed from: r  reason: collision with root package name */
    private y.a f54752r;

    /* renamed from: s  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.j f54753s;

    /* renamed from: t  reason: collision with root package name */
    private Handler f54754t;

    /* renamed from: u  reason: collision with root package name */
    private k.e f54755u;

    /* renamed from: v  reason: collision with root package name */
    private g f54756v;

    /* renamed from: w  reason: collision with root package name */
    private Uri f54757w;

    /* renamed from: x  reason: collision with root package name */
    private f f54758x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f54759y;

    /* renamed from: z  reason: collision with root package name */
    private long f54760z;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements k.b {
        private b() {
        }

        @Override // xd.k.b
        public void a() {
            c.this.f54750p.remove(this);
        }

        @Override // xd.k.b
        public boolean c(Uri uri, i.c cVar, boolean z10) {
            C0764c c0764c;
            if (c.this.f54758x == null) {
                long elapsedRealtime = SystemClock.elapsedRealtime();
                List list = ((g) w0.j(c.this.f54756v)).f54821e;
                int i10 = 0;
                for (int i11 = 0; i11 < list.size(); i11++) {
                    C0764c c0764c2 = (C0764c) c.this.f54749o.get(((g.b) list.get(i11)).f54834a);
                    if (c0764c2 != null && elapsedRealtime < c0764c2.f54769s) {
                        i10++;
                    }
                }
                i.b c10 = c.this.f54748i.c(new i.a(1, 0, c.this.f54756v.f54821e.size(), i10), cVar);
                if (c10 != null && c10.f13560a == 2 && (c0764c = (C0764c) c.this.f54749o.get(uri)) != null) {
                    c0764c.h(c10.f13561b);
                }
            }
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: xd.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class C0764c implements j.b {

        /* renamed from: d  reason: collision with root package name */
        private final Uri f54762d;

        /* renamed from: e  reason: collision with root package name */
        private final com.google.android.exoplayer2.upstream.j f54763e = new com.google.android.exoplayer2.upstream.j("DefaultHlsPlaylistTracker:MediaPlaylist");

        /* renamed from: i  reason: collision with root package name */
        private final DataSource f54764i;

        /* renamed from: o  reason: collision with root package name */
        private f f54765o;

        /* renamed from: p  reason: collision with root package name */
        private long f54766p;

        /* renamed from: q  reason: collision with root package name */
        private long f54767q;

        /* renamed from: r  reason: collision with root package name */
        private long f54768r;

        /* renamed from: s  reason: collision with root package name */
        private long f54769s;

        /* renamed from: t  reason: collision with root package name */
        private boolean f54770t;

        /* renamed from: u  reason: collision with root package name */
        private IOException f54771u;

        public C0764c(Uri uri) {
            this.f54762d = uri;
            this.f54764i = c.this.f54746d.a(4);
        }

        public static /* synthetic */ void a(C0764c c0764c, Uri uri) {
            c0764c.f54770t = false;
            c0764c.p(uri);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public boolean h(long j10) {
            this.f54769s = SystemClock.elapsedRealtime() + j10;
            if (this.f54762d.equals(c.this.f54757w) && !c.this.L()) {
                return true;
            }
            return false;
        }

        private Uri j() {
            String str;
            f fVar = this.f54765o;
            if (fVar != null) {
                f.C0765f c0765f = fVar.f54795v;
                if (c0765f.f54814a != -9223372036854775807L || c0765f.f54818e) {
                    Uri.Builder buildUpon = this.f54762d.buildUpon();
                    f fVar2 = this.f54765o;
                    if (fVar2.f54795v.f54818e) {
                        buildUpon.appendQueryParameter("_HLS_msn", String.valueOf(fVar2.f54784k + fVar2.f54791r.size()));
                        f fVar3 = this.f54765o;
                        if (fVar3.f54787n != -9223372036854775807L) {
                            List list = fVar3.f54792s;
                            int size = list.size();
                            if (!list.isEmpty() && ((f.b) v.c(list)).f54797x) {
                                size--;
                            }
                            buildUpon.appendQueryParameter("_HLS_part", String.valueOf(size));
                        }
                    }
                    f.C0765f c0765f2 = this.f54765o.f54795v;
                    if (c0765f2.f54814a != -9223372036854775807L) {
                        if (c0765f2.f54815b) {
                            str = "v2";
                        } else {
                            str = "YES";
                        }
                        buildUpon.appendQueryParameter("_HLS_skip", str);
                    }
                    return buildUpon.build();
                }
            }
            return this.f54762d;
        }

        private void p(Uri uri) {
            com.google.android.exoplayer2.upstream.k kVar = new com.google.android.exoplayer2.upstream.k(this.f54764i, uri, 4, c.this.f54747e.a(c.this.f54756v, this.f54765o));
            c.this.f54752r.s(new LoadEventInfo(kVar.f13586a, kVar.f13587b, this.f54763e.n(kVar, this, c.this.f54748i.b(kVar.f13588c))), kVar.f13588c);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void q(final Uri uri) {
            this.f54769s = 0L;
            if (!this.f54770t && !this.f54763e.j() && !this.f54763e.i()) {
                long elapsedRealtime = SystemClock.elapsedRealtime();
                if (elapsedRealtime < this.f54768r) {
                    this.f54770t = true;
                    c.this.f54754t.postDelayed(new Runnable() { // from class: xd.d
                        @Override // java.lang.Runnable
                        public final void run() {
                            c.C0764c.a(c.C0764c.this, uri);
                        }
                    }, this.f54768r - elapsedRealtime);
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
            f fVar3 = this.f54765o;
            long elapsedRealtime = SystemClock.elapsedRealtime();
            this.f54766p = elapsedRealtime;
            f G = c.this.G(fVar3, fVar);
            this.f54765o = G;
            IOException iOException = null;
            if (G != fVar3) {
                this.f54771u = null;
                this.f54767q = elapsedRealtime;
                c.this.R(this.f54762d, G);
            } else if (!G.f54788o) {
                if (fVar.f54784k + fVar.f54791r.size() < this.f54765o.f54784k) {
                    iOException = new k.c(this.f54762d);
                    z10 = true;
                } else {
                    z10 = false;
                    if (elapsedRealtime - this.f54767q > w0.p1(fVar2.f54786m) * c.this.f54751q) {
                        iOException = new k.d(this.f54762d);
                    }
                }
                if (iOException != null) {
                    this.f54771u = iOException;
                    c.this.N(this.f54762d, new i.c(loadEventInfo, new MediaLoadData(4), iOException, 1), z10);
                }
            }
            f fVar4 = this.f54765o;
            if (!fVar4.f54795v.f54818e) {
                if (fVar4 != fVar3) {
                    j10 = fVar4.f54786m;
                } else {
                    j10 = fVar4.f54786m / 2;
                }
            } else {
                j10 = 0;
            }
            this.f54768r = elapsedRealtime + w0.p1(j10);
            if ((this.f54765o.f54787n != -9223372036854775807L || this.f54762d.equals(c.this.f54757w)) && !this.f54765o.f54788o) {
                q(j());
            }
        }

        public f l() {
            return this.f54765o;
        }

        public boolean m() {
            int i10;
            if (this.f54765o == null) {
                return false;
            }
            long elapsedRealtime = SystemClock.elapsedRealtime();
            long max = Math.max(30000L, w0.p1(this.f54765o.f54794u));
            f fVar = this.f54765o;
            if (!fVar.f54788o && (i10 = fVar.f54777d) != 2 && i10 != 1 && this.f54766p + max <= elapsedRealtime) {
                return false;
            }
            return true;
        }

        public void o() {
            q(this.f54762d);
        }

        public void r() {
            this.f54763e.a();
            IOException iOException = this.f54771u;
            if (iOException == null) {
                return;
            }
            throw iOException;
        }

        @Override // com.google.android.exoplayer2.upstream.j.b
        /* renamed from: s */
        public void i(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11, boolean z10) {
            LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f13586a, kVar.f13587b, kVar.f(), kVar.d(), j10, j11, kVar.b());
            c.this.f54748i.d(kVar.f13586a);
            c.this.f54752r.j(loadEventInfo, 4);
        }

        @Override // com.google.android.exoplayer2.upstream.j.b
        /* renamed from: t */
        public void k(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11) {
            h hVar = (h) kVar.e();
            LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f13586a, kVar.f13587b, kVar.f(), kVar.d(), j10, j11, kVar.b());
            if (hVar instanceof f) {
                v((f) hVar, loadEventInfo);
                c.this.f54752r.m(loadEventInfo, 4);
            } else {
                this.f54771u = l0.c("Loaded playlist has unexpected type.", null);
                c.this.f54752r.q(loadEventInfo, 4, this.f54771u, true);
            }
            c.this.f54748i.d(kVar.f13586a);
        }

        @Override // com.google.android.exoplayer2.upstream.j.b
        /* renamed from: u */
        public j.c n(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11, IOException iOException, int i10) {
            boolean z10;
            int i11;
            j.c cVar;
            LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f13586a, kVar.f13587b, kVar.f(), kVar.d(), j10, j11, kVar.b());
            if (kVar.f().getQueryParameter("_HLS_msn") != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            boolean z11 = iOException instanceof i.a;
            if (z10 || z11) {
                if (iOException instanceof h.f) {
                    i11 = ((h.f) iOException).f13550o;
                } else {
                    i11 = Integer.MAX_VALUE;
                }
                if (z11 || i11 == 400 || i11 == 503) {
                    this.f54768r = SystemClock.elapsedRealtime();
                    o();
                    ((y.a) w0.j(c.this.f54752r)).q(loadEventInfo, kVar.f13588c, iOException, true);
                    return com.google.android.exoplayer2.upstream.j.f13568f;
                }
            }
            i.c cVar2 = new i.c(loadEventInfo, new MediaLoadData(kVar.f13588c), iOException, i10);
            if (c.this.N(this.f54762d, cVar2, false)) {
                long a10 = c.this.f54748i.a(cVar2);
                if (a10 != -9223372036854775807L) {
                    cVar = com.google.android.exoplayer2.upstream.j.h(false, a10);
                } else {
                    cVar = com.google.android.exoplayer2.upstream.j.f13569g;
                }
            } else {
                cVar = com.google.android.exoplayer2.upstream.j.f13568f;
            }
            boolean c10 = cVar.c();
            c.this.f54752r.q(loadEventInfo, kVar.f13588c, iOException, !c10);
            if (!c10) {
                c.this.f54748i.d(kVar.f13586a);
            }
            return cVar;
        }

        public void w() {
            this.f54763e.l();
        }
    }

    public c(wd.g gVar, com.google.android.exoplayer2.upstream.i iVar, j jVar) {
        this(gVar, iVar, jVar, 3.5d);
    }

    private void E(List list) {
        int size = list.size();
        for (int i10 = 0; i10 < size; i10++) {
            Uri uri = (Uri) list.get(i10);
            this.f54749o.put(uri, new C0764c(uri));
        }
    }

    private static f.d F(f fVar, f fVar2) {
        int i10 = (int) (fVar2.f54784k - fVar.f54784k);
        List list = fVar.f54791r;
        if (i10 < list.size()) {
            return (f.d) list.get(i10);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public f G(f fVar, f fVar2) {
        if (!fVar2.f(fVar)) {
            if (fVar2.f54788o) {
                return fVar.d();
            }
            return fVar;
        }
        return fVar2.c(I(fVar, fVar2), H(fVar, fVar2));
    }

    private int H(f fVar, f fVar2) {
        int i10;
        f.d F;
        if (fVar2.f54782i) {
            return fVar2.f54783j;
        }
        f fVar3 = this.f54758x;
        if (fVar3 != null) {
            i10 = fVar3.f54783j;
        } else {
            i10 = 0;
        }
        if (fVar != null && (F = F(fVar, fVar2)) != null) {
            return (fVar.f54783j + F.f54806o) - ((f.d) fVar2.f54791r.get(0)).f54806o;
        }
        return i10;
    }

    private long I(f fVar, f fVar2) {
        long j10;
        if (fVar2.f54789p) {
            return fVar2.f54781h;
        }
        f fVar3 = this.f54758x;
        if (fVar3 != null) {
            j10 = fVar3.f54781h;
        } else {
            j10 = 0;
        }
        if (fVar != null) {
            int size = fVar.f54791r.size();
            f.d F = F(fVar, fVar2);
            if (F != null) {
                return fVar.f54781h + F.f54807p;
            }
            if (size == fVar2.f54784k - fVar.f54784k) {
                return fVar.e();
            }
        }
        return j10;
    }

    private Uri J(Uri uri) {
        f.c cVar;
        f fVar = this.f54758x;
        if (fVar != null && fVar.f54795v.f54818e && (cVar = (f.c) fVar.f54793t.get(uri)) != null) {
            Uri.Builder buildUpon = uri.buildUpon();
            buildUpon.appendQueryParameter("_HLS_msn", String.valueOf(cVar.f54799b));
            int i10 = cVar.f54800c;
            if (i10 != -1) {
                buildUpon.appendQueryParameter("_HLS_part", String.valueOf(i10));
            }
            return buildUpon.build();
        }
        return uri;
    }

    private boolean K(Uri uri) {
        List list = this.f54756v.f54821e;
        for (int i10 = 0; i10 < list.size(); i10++) {
            if (uri.equals(((g.b) list.get(i10)).f54834a)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean L() {
        List list = this.f54756v.f54821e;
        int size = list.size();
        long elapsedRealtime = SystemClock.elapsedRealtime();
        for (int i10 = 0; i10 < size; i10++) {
            C0764c c0764c = (C0764c) oe.a.e((C0764c) this.f54749o.get(((g.b) list.get(i10)).f54834a));
            if (elapsedRealtime > c0764c.f54769s) {
                Uri uri = c0764c.f54762d;
                this.f54757w = uri;
                c0764c.q(J(uri));
                return true;
            }
        }
        return false;
    }

    private void M(Uri uri) {
        if (!uri.equals(this.f54757w) && K(uri)) {
            f fVar = this.f54758x;
            if (fVar == null || !fVar.f54788o) {
                this.f54757w = uri;
                C0764c c0764c = (C0764c) this.f54749o.get(uri);
                f fVar2 = c0764c.f54765o;
                if (fVar2 == null || !fVar2.f54788o) {
                    c0764c.q(J(uri));
                    return;
                }
                this.f54758x = fVar2;
                this.f54755u.c(fVar2);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean N(Uri uri, i.c cVar, boolean z10) {
        Iterator it = this.f54750p.iterator();
        boolean z11 = false;
        while (it.hasNext()) {
            z11 |= !((k.b) it.next()).c(uri, cVar, z10);
        }
        return z11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void R(Uri uri, f fVar) {
        if (uri.equals(this.f54757w)) {
            if (this.f54758x == null) {
                this.f54759y = !fVar.f54788o;
                this.f54760z = fVar.f54781h;
            }
            this.f54758x = fVar;
            this.f54755u.c(fVar);
        }
        Iterator it = this.f54750p.iterator();
        while (it.hasNext()) {
            ((k.b) it.next()).a();
        }
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: O */
    public void i(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11, boolean z10) {
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f13586a, kVar.f13587b, kVar.f(), kVar.d(), j10, j11, kVar.b());
        this.f54748i.d(kVar.f13586a);
        this.f54752r.j(loadEventInfo, 4);
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: P */
    public void k(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11) {
        g gVar;
        h hVar = (h) kVar.e();
        boolean z10 = hVar instanceof f;
        if (z10) {
            gVar = g.e(hVar.f54840a);
        } else {
            gVar = (g) hVar;
        }
        this.f54756v = gVar;
        this.f54757w = ((g.b) gVar.f54821e.get(0)).f54834a;
        this.f54750p.add(new b());
        E(gVar.f54820d);
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f13586a, kVar.f13587b, kVar.f(), kVar.d(), j10, j11, kVar.b());
        C0764c c0764c = (C0764c) this.f54749o.get(this.f54757w);
        if (z10) {
            c0764c.v((f) hVar, loadEventInfo);
        } else {
            c0764c.o();
        }
        this.f54748i.d(kVar.f13586a);
        this.f54752r.m(loadEventInfo, 4);
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: Q */
    public j.c n(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11, IOException iOException, int i10) {
        boolean z10;
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f13586a, kVar.f13587b, kVar.f(), kVar.d(), j10, j11, kVar.b());
        long a10 = this.f54748i.a(new i.c(loadEventInfo, new MediaLoadData(kVar.f13588c), iOException, i10));
        if (a10 == -9223372036854775807L) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f54752r.q(loadEventInfo, kVar.f13588c, iOException, z10);
        if (z10) {
            this.f54748i.d(kVar.f13586a);
        }
        if (z10) {
            return com.google.android.exoplayer2.upstream.j.f13569g;
        }
        return com.google.android.exoplayer2.upstream.j.h(false, a10);
    }

    @Override // xd.k
    public void a(Uri uri) {
        ((C0764c) this.f54749o.get(uri)).r();
    }

    @Override // xd.k
    public void b(Uri uri, y.a aVar, k.e eVar) {
        boolean z10;
        this.f54754t = w0.w();
        this.f54752r = aVar;
        this.f54755u = eVar;
        com.google.android.exoplayer2.upstream.k kVar = new com.google.android.exoplayer2.upstream.k(this.f54746d.a(4), uri, 4, this.f54747e.b());
        if (this.f54753s == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        com.google.android.exoplayer2.upstream.j jVar = new com.google.android.exoplayer2.upstream.j("DefaultHlsPlaylistTracker:MultivariantPlaylist");
        this.f54753s = jVar;
        aVar.s(new LoadEventInfo(kVar.f13586a, kVar.f13587b, jVar.n(kVar, this, this.f54748i.b(kVar.f13588c))), kVar.f13588c);
    }

    @Override // xd.k
    public long c() {
        return this.f54760z;
    }

    @Override // xd.k
    public g d() {
        return this.f54756v;
    }

    @Override // xd.k
    public void e(k.b bVar) {
        this.f54750p.remove(bVar);
    }

    @Override // xd.k
    public void f(Uri uri) {
        ((C0764c) this.f54749o.get(uri)).o();
    }

    @Override // xd.k
    public void g(k.b bVar) {
        oe.a.e(bVar);
        this.f54750p.add(bVar);
    }

    @Override // xd.k
    public boolean h(Uri uri) {
        return ((C0764c) this.f54749o.get(uri)).m();
    }

    @Override // xd.k
    public boolean j() {
        return this.f54759y;
    }

    @Override // xd.k
    public boolean l(Uri uri, long j10) {
        C0764c c0764c = (C0764c) this.f54749o.get(uri);
        if (c0764c != null) {
            return !c0764c.h(j10);
        }
        return false;
    }

    @Override // xd.k
    public void m() {
        com.google.android.exoplayer2.upstream.j jVar = this.f54753s;
        if (jVar != null) {
            jVar.a();
        }
        Uri uri = this.f54757w;
        if (uri != null) {
            a(uri);
        }
    }

    @Override // xd.k
    public f o(Uri uri, boolean z10) {
        f l10 = ((C0764c) this.f54749o.get(uri)).l();
        if (l10 != null && z10) {
            M(uri);
        }
        return l10;
    }

    @Override // xd.k
    public void stop() {
        this.f54757w = null;
        this.f54758x = null;
        this.f54756v = null;
        this.f54760z = -9223372036854775807L;
        this.f54753s.l();
        this.f54753s = null;
        for (C0764c c0764c : this.f54749o.values()) {
            c0764c.w();
        }
        this.f54754t.removeCallbacksAndMessages(null);
        this.f54754t = null;
        this.f54749o.clear();
    }

    public c(wd.g gVar, com.google.android.exoplayer2.upstream.i iVar, j jVar, double d10) {
        this.f54746d = gVar;
        this.f54747e = jVar;
        this.f54748i = iVar;
        this.f54751q = d10;
        this.f54750p = new CopyOnWriteArrayList();
        this.f54749o = new HashMap();
        this.f54760z = -9223372036854775807L;
    }
}
