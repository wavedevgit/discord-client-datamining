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
    private final vd.g f52313d;

    /* renamed from: e  reason: collision with root package name */
    private final j f52314e;

    /* renamed from: i  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.h f52315i;

    /* renamed from: o  reason: collision with root package name */
    private final HashMap f52316o;

    /* renamed from: p  reason: collision with root package name */
    private final CopyOnWriteArrayList f52317p;

    /* renamed from: q  reason: collision with root package name */
    private final double f52318q;

    /* renamed from: r  reason: collision with root package name */
    private y.a f52319r;

    /* renamed from: s  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.i f52320s;

    /* renamed from: t  reason: collision with root package name */
    private Handler f52321t;

    /* renamed from: u  reason: collision with root package name */
    private k.e f52322u;

    /* renamed from: v  reason: collision with root package name */
    private g f52323v;

    /* renamed from: w  reason: collision with root package name */
    private Uri f52324w;

    /* renamed from: x  reason: collision with root package name */
    private f f52325x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f52326y;

    /* renamed from: z  reason: collision with root package name */
    private long f52327z;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements k.b {
        private b() {
        }

        @Override // wd.k.b
        public void a() {
            c.this.f52317p.remove(this);
        }

        @Override // wd.k.b
        public boolean c(Uri uri, h.c cVar, boolean z10) {
            C0718c c0718c;
            if (c.this.f52325x == null) {
                long elapsedRealtime = SystemClock.elapsedRealtime();
                List list = ((g) w0.j(c.this.f52323v)).f52388e;
                int i10 = 0;
                for (int i11 = 0; i11 < list.size(); i11++) {
                    C0718c c0718c2 = (C0718c) c.this.f52316o.get(((g.b) list.get(i11)).f52401a);
                    if (c0718c2 != null && elapsedRealtime < c0718c2.f52336s) {
                        i10++;
                    }
                }
                h.b c10 = c.this.f52315i.c(new h.a(1, 0, c.this.f52323v.f52388e.size(), i10), cVar);
                if (c10 != null && c10.f14477a == 2 && (c0718c = (C0718c) c.this.f52316o.get(uri)) != null) {
                    c0718c.h(c10.f14478b);
                }
            }
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: wd.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class C0718c implements i.b {

        /* renamed from: d  reason: collision with root package name */
        private final Uri f52329d;

        /* renamed from: e  reason: collision with root package name */
        private final com.google.android.exoplayer2.upstream.i f52330e = new com.google.android.exoplayer2.upstream.i("DefaultHlsPlaylistTracker:MediaPlaylist");

        /* renamed from: i  reason: collision with root package name */
        private final DataSource f52331i;

        /* renamed from: o  reason: collision with root package name */
        private f f52332o;

        /* renamed from: p  reason: collision with root package name */
        private long f52333p;

        /* renamed from: q  reason: collision with root package name */
        private long f52334q;

        /* renamed from: r  reason: collision with root package name */
        private long f52335r;

        /* renamed from: s  reason: collision with root package name */
        private long f52336s;

        /* renamed from: t  reason: collision with root package name */
        private boolean f52337t;

        /* renamed from: u  reason: collision with root package name */
        private IOException f52338u;

        public C0718c(Uri uri) {
            this.f52329d = uri;
            this.f52331i = c.this.f52313d.a(4);
        }

        public static /* synthetic */ void a(C0718c c0718c, Uri uri) {
            c0718c.f52337t = false;
            c0718c.p(uri);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public boolean h(long j10) {
            this.f52336s = SystemClock.elapsedRealtime() + j10;
            if (this.f52329d.equals(c.this.f52324w) && !c.this.L()) {
                return true;
            }
            return false;
        }

        private Uri k() {
            String str;
            f fVar = this.f52332o;
            if (fVar != null) {
                f.C0719f c0719f = fVar.f52362v;
                if (c0719f.f52381a != -9223372036854775807L || c0719f.f52385e) {
                    Uri.Builder buildUpon = this.f52329d.buildUpon();
                    f fVar2 = this.f52332o;
                    if (fVar2.f52362v.f52385e) {
                        buildUpon.appendQueryParameter("_HLS_msn", String.valueOf(fVar2.f52351k + fVar2.f52358r.size()));
                        f fVar3 = this.f52332o;
                        if (fVar3.f52354n != -9223372036854775807L) {
                            List list = fVar3.f52359s;
                            int size = list.size();
                            if (!list.isEmpty() && ((f.b) v.c(list)).f52364x) {
                                size--;
                            }
                            buildUpon.appendQueryParameter("_HLS_part", String.valueOf(size));
                        }
                    }
                    f.C0719f c0719f2 = this.f52332o.f52362v;
                    if (c0719f2.f52381a != -9223372036854775807L) {
                        if (c0719f2.f52382b) {
                            str = "v2";
                        } else {
                            str = "YES";
                        }
                        buildUpon.appendQueryParameter("_HLS_skip", str);
                    }
                    return buildUpon.build();
                }
            }
            return this.f52329d;
        }

        private void p(Uri uri) {
            com.google.android.exoplayer2.upstream.j jVar = new com.google.android.exoplayer2.upstream.j(this.f52331i, uri, 4, c.this.f52314e.a(c.this.f52323v, this.f52332o));
            c.this.f52319r.s(new LoadEventInfo(jVar.f14503a, jVar.f14504b, this.f52330e.n(jVar, this, c.this.f52315i.b(jVar.f14505c))), jVar.f14505c);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void q(final Uri uri) {
            this.f52336s = 0L;
            if (!this.f52337t && !this.f52330e.j() && !this.f52330e.i()) {
                long elapsedRealtime = SystemClock.elapsedRealtime();
                if (elapsedRealtime < this.f52335r) {
                    this.f52337t = true;
                    c.this.f52321t.postDelayed(new Runnable() { // from class: wd.d
                        @Override // java.lang.Runnable
                        public final void run() {
                            c.C0718c.a(c.C0718c.this, uri);
                        }
                    }, this.f52335r - elapsedRealtime);
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
            f fVar3 = this.f52332o;
            long elapsedRealtime = SystemClock.elapsedRealtime();
            this.f52333p = elapsedRealtime;
            f G = c.this.G(fVar3, fVar);
            this.f52332o = G;
            IOException iOException = null;
            if (G != fVar3) {
                this.f52338u = null;
                this.f52334q = elapsedRealtime;
                c.this.R(this.f52329d, G);
            } else if (!G.f52355o) {
                if (fVar.f52351k + fVar.f52358r.size() < this.f52332o.f52351k) {
                    iOException = new k.c(this.f52329d);
                    z10 = true;
                } else {
                    z10 = false;
                    if (elapsedRealtime - this.f52334q > w0.p1(fVar2.f52353m) * c.this.f52318q) {
                        iOException = new k.d(this.f52329d);
                    }
                }
                if (iOException != null) {
                    this.f52338u = iOException;
                    c.this.N(this.f52329d, new h.c(loadEventInfo, new MediaLoadData(4), iOException, 1), z10);
                }
            }
            f fVar4 = this.f52332o;
            if (!fVar4.f52362v.f52385e) {
                if (fVar4 != fVar3) {
                    j10 = fVar4.f52353m;
                } else {
                    j10 = fVar4.f52353m / 2;
                }
            } else {
                j10 = 0;
            }
            this.f52335r = elapsedRealtime + w0.p1(j10);
            if ((this.f52332o.f52354n != -9223372036854775807L || this.f52329d.equals(c.this.f52324w)) && !this.f52332o.f52355o) {
                q(k());
            }
        }

        public f l() {
            return this.f52332o;
        }

        public boolean m() {
            int i10;
            if (this.f52332o == null) {
                return false;
            }
            long elapsedRealtime = SystemClock.elapsedRealtime();
            long max = Math.max(30000L, w0.p1(this.f52332o.f52361u));
            f fVar = this.f52332o;
            if (!fVar.f52355o && (i10 = fVar.f52344d) != 2 && i10 != 1 && this.f52333p + max <= elapsedRealtime) {
                return false;
            }
            return true;
        }

        public void o() {
            q(this.f52329d);
        }

        public void r() {
            this.f52330e.a();
            IOException iOException = this.f52338u;
            if (iOException == null) {
                return;
            }
            throw iOException;
        }

        @Override // com.google.android.exoplayer2.upstream.i.b
        /* renamed from: s */
        public void i(com.google.android.exoplayer2.upstream.j jVar, long j10, long j11, boolean z10) {
            LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f14503a, jVar.f14504b, jVar.f(), jVar.d(), j10, j11, jVar.a());
            c.this.f52315i.d(jVar.f14503a);
            c.this.f52319r.j(loadEventInfo, 4);
        }

        @Override // com.google.android.exoplayer2.upstream.i.b
        /* renamed from: t */
        public void j(com.google.android.exoplayer2.upstream.j jVar, long j10, long j11) {
            h hVar = (h) jVar.e();
            LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f14503a, jVar.f14504b, jVar.f(), jVar.d(), j10, j11, jVar.a());
            if (hVar instanceof f) {
                v((f) hVar, loadEventInfo);
                c.this.f52319r.m(loadEventInfo, 4);
            } else {
                this.f52338u = l0.c("Loaded playlist has unexpected type.", null);
                c.this.f52319r.q(loadEventInfo, 4, this.f52338u, true);
            }
            c.this.f52315i.d(jVar.f14503a);
        }

        @Override // com.google.android.exoplayer2.upstream.i.b
        /* renamed from: u */
        public i.c n(com.google.android.exoplayer2.upstream.j jVar, long j10, long j11, IOException iOException, int i10) {
            boolean z10;
            int i11;
            i.c cVar;
            LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f14503a, jVar.f14504b, jVar.f(), jVar.d(), j10, j11, jVar.a());
            if (jVar.f().getQueryParameter("_HLS_msn") != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            boolean z11 = iOException instanceof i.a;
            if (z10 || z11) {
                if (iOException instanceof g.f) {
                    i11 = ((g.f) iOException).f14467o;
                } else {
                    i11 = Integer.MAX_VALUE;
                }
                if (z11 || i11 == 400 || i11 == 503) {
                    this.f52335r = SystemClock.elapsedRealtime();
                    o();
                    ((y.a) w0.j(c.this.f52319r)).q(loadEventInfo, jVar.f14505c, iOException, true);
                    return com.google.android.exoplayer2.upstream.i.f14485f;
                }
            }
            h.c cVar2 = new h.c(loadEventInfo, new MediaLoadData(jVar.f14505c), iOException, i10);
            if (c.this.N(this.f52329d, cVar2, false)) {
                long a10 = c.this.f52315i.a(cVar2);
                if (a10 != -9223372036854775807L) {
                    cVar = com.google.android.exoplayer2.upstream.i.h(false, a10);
                } else {
                    cVar = com.google.android.exoplayer2.upstream.i.f14486g;
                }
            } else {
                cVar = com.google.android.exoplayer2.upstream.i.f14485f;
            }
            boolean c10 = cVar.c();
            c.this.f52319r.q(loadEventInfo, jVar.f14505c, iOException, !c10);
            if (!c10) {
                c.this.f52315i.d(jVar.f14503a);
            }
            return cVar;
        }

        public void w() {
            this.f52330e.l();
        }
    }

    public c(vd.g gVar, com.google.android.exoplayer2.upstream.h hVar, j jVar) {
        this(gVar, hVar, jVar, 3.5d);
    }

    private void E(List list) {
        int size = list.size();
        for (int i10 = 0; i10 < size; i10++) {
            Uri uri = (Uri) list.get(i10);
            this.f52316o.put(uri, new C0718c(uri));
        }
    }

    private static f.d F(f fVar, f fVar2) {
        int i10 = (int) (fVar2.f52351k - fVar.f52351k);
        List list = fVar.f52358r;
        if (i10 < list.size()) {
            return (f.d) list.get(i10);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public f G(f fVar, f fVar2) {
        if (!fVar2.f(fVar)) {
            if (fVar2.f52355o) {
                return fVar.d();
            }
            return fVar;
        }
        return fVar2.c(I(fVar, fVar2), H(fVar, fVar2));
    }

    private int H(f fVar, f fVar2) {
        int i10;
        f.d F;
        if (fVar2.f52349i) {
            return fVar2.f52350j;
        }
        f fVar3 = this.f52325x;
        if (fVar3 != null) {
            i10 = fVar3.f52350j;
        } else {
            i10 = 0;
        }
        if (fVar != null && (F = F(fVar, fVar2)) != null) {
            return (fVar.f52350j + F.f52373o) - ((f.d) fVar2.f52358r.get(0)).f52373o;
        }
        return i10;
    }

    private long I(f fVar, f fVar2) {
        long j10;
        if (fVar2.f52356p) {
            return fVar2.f52348h;
        }
        f fVar3 = this.f52325x;
        if (fVar3 != null) {
            j10 = fVar3.f52348h;
        } else {
            j10 = 0;
        }
        if (fVar != null) {
            int size = fVar.f52358r.size();
            f.d F = F(fVar, fVar2);
            if (F != null) {
                return fVar.f52348h + F.f52374p;
            }
            if (size == fVar2.f52351k - fVar.f52351k) {
                return fVar.e();
            }
        }
        return j10;
    }

    private Uri J(Uri uri) {
        f.c cVar;
        f fVar = this.f52325x;
        if (fVar != null && fVar.f52362v.f52385e && (cVar = (f.c) fVar.f52360t.get(uri)) != null) {
            Uri.Builder buildUpon = uri.buildUpon();
            buildUpon.appendQueryParameter("_HLS_msn", String.valueOf(cVar.f52366b));
            int i10 = cVar.f52367c;
            if (i10 != -1) {
                buildUpon.appendQueryParameter("_HLS_part", String.valueOf(i10));
            }
            return buildUpon.build();
        }
        return uri;
    }

    private boolean K(Uri uri) {
        List list = this.f52323v.f52388e;
        for (int i10 = 0; i10 < list.size(); i10++) {
            if (uri.equals(((g.b) list.get(i10)).f52401a)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean L() {
        List list = this.f52323v.f52388e;
        int size = list.size();
        long elapsedRealtime = SystemClock.elapsedRealtime();
        for (int i10 = 0; i10 < size; i10++) {
            C0718c c0718c = (C0718c) ne.a.e((C0718c) this.f52316o.get(((g.b) list.get(i10)).f52401a));
            if (elapsedRealtime > c0718c.f52336s) {
                Uri uri = c0718c.f52329d;
                this.f52324w = uri;
                c0718c.q(J(uri));
                return true;
            }
        }
        return false;
    }

    private void M(Uri uri) {
        if (!uri.equals(this.f52324w) && K(uri)) {
            f fVar = this.f52325x;
            if (fVar == null || !fVar.f52355o) {
                this.f52324w = uri;
                C0718c c0718c = (C0718c) this.f52316o.get(uri);
                f fVar2 = c0718c.f52332o;
                if (fVar2 == null || !fVar2.f52355o) {
                    c0718c.q(J(uri));
                    return;
                }
                this.f52325x = fVar2;
                this.f52322u.b(fVar2);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean N(Uri uri, h.c cVar, boolean z10) {
        Iterator it = this.f52317p.iterator();
        boolean z11 = false;
        while (it.hasNext()) {
            z11 |= !((k.b) it.next()).c(uri, cVar, z10);
        }
        return z11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void R(Uri uri, f fVar) {
        if (uri.equals(this.f52324w)) {
            if (this.f52325x == null) {
                this.f52326y = !fVar.f52355o;
                this.f52327z = fVar.f52348h;
            }
            this.f52325x = fVar;
            this.f52322u.b(fVar);
        }
        Iterator it = this.f52317p.iterator();
        while (it.hasNext()) {
            ((k.b) it.next()).a();
        }
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: O */
    public void i(com.google.android.exoplayer2.upstream.j jVar, long j10, long j11, boolean z10) {
        LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f14503a, jVar.f14504b, jVar.f(), jVar.d(), j10, j11, jVar.a());
        this.f52315i.d(jVar.f14503a);
        this.f52319r.j(loadEventInfo, 4);
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: P */
    public void j(com.google.android.exoplayer2.upstream.j jVar, long j10, long j11) {
        g gVar;
        h hVar = (h) jVar.e();
        boolean z10 = hVar instanceof f;
        if (z10) {
            gVar = g.e(hVar.f52407a);
        } else {
            gVar = (g) hVar;
        }
        this.f52323v = gVar;
        this.f52324w = ((g.b) gVar.f52388e.get(0)).f52401a;
        this.f52317p.add(new b());
        E(gVar.f52387d);
        LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f14503a, jVar.f14504b, jVar.f(), jVar.d(), j10, j11, jVar.a());
        C0718c c0718c = (C0718c) this.f52316o.get(this.f52324w);
        if (z10) {
            c0718c.v((f) hVar, loadEventInfo);
        } else {
            c0718c.o();
        }
        this.f52315i.d(jVar.f14503a);
        this.f52319r.m(loadEventInfo, 4);
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: Q */
    public i.c n(com.google.android.exoplayer2.upstream.j jVar, long j10, long j11, IOException iOException, int i10) {
        boolean z10;
        LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f14503a, jVar.f14504b, jVar.f(), jVar.d(), j10, j11, jVar.a());
        long a10 = this.f52315i.a(new h.c(loadEventInfo, new MediaLoadData(jVar.f14505c), iOException, i10));
        if (a10 == -9223372036854775807L) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f52319r.q(loadEventInfo, jVar.f14505c, iOException, z10);
        if (z10) {
            this.f52315i.d(jVar.f14503a);
        }
        if (z10) {
            return com.google.android.exoplayer2.upstream.i.f14486g;
        }
        return com.google.android.exoplayer2.upstream.i.h(false, a10);
    }

    @Override // wd.k
    public void a(Uri uri, y.a aVar, k.e eVar) {
        boolean z10;
        this.f52321t = w0.w();
        this.f52319r = aVar;
        this.f52322u = eVar;
        com.google.android.exoplayer2.upstream.j jVar = new com.google.android.exoplayer2.upstream.j(this.f52313d.a(4), uri, 4, this.f52314e.b());
        if (this.f52320s == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        com.google.android.exoplayer2.upstream.i iVar = new com.google.android.exoplayer2.upstream.i("DefaultHlsPlaylistTracker:MultivariantPlaylist");
        this.f52320s = iVar;
        aVar.s(new LoadEventInfo(jVar.f14503a, jVar.f14504b, iVar.n(jVar, this, this.f52315i.b(jVar.f14505c))), jVar.f14505c);
    }

    @Override // wd.k
    public void b(Uri uri) {
        ((C0718c) this.f52316o.get(uri)).r();
    }

    @Override // wd.k
    public long c() {
        return this.f52327z;
    }

    @Override // wd.k
    public g d() {
        return this.f52323v;
    }

    @Override // wd.k
    public void e(Uri uri) {
        ((C0718c) this.f52316o.get(uri)).o();
    }

    @Override // wd.k
    public void f(k.b bVar) {
        ne.a.e(bVar);
        this.f52317p.add(bVar);
    }

    @Override // wd.k
    public boolean g(Uri uri) {
        return ((C0718c) this.f52316o.get(uri)).m();
    }

    @Override // wd.k
    public boolean h() {
        return this.f52326y;
    }

    @Override // wd.k
    public boolean k(Uri uri, long j10) {
        C0718c c0718c = (C0718c) this.f52316o.get(uri);
        if (c0718c != null) {
            return !c0718c.h(j10);
        }
        return false;
    }

    @Override // wd.k
    public void l() {
        com.google.android.exoplayer2.upstream.i iVar = this.f52320s;
        if (iVar != null) {
            iVar.a();
        }
        Uri uri = this.f52324w;
        if (uri != null) {
            b(uri);
        }
    }

    @Override // wd.k
    public f m(Uri uri, boolean z10) {
        f l10 = ((C0718c) this.f52316o.get(uri)).l();
        if (l10 != null && z10) {
            M(uri);
        }
        return l10;
    }

    @Override // wd.k
    public void o(k.b bVar) {
        this.f52317p.remove(bVar);
    }

    @Override // wd.k
    public void stop() {
        this.f52324w = null;
        this.f52325x = null;
        this.f52323v = null;
        this.f52327z = -9223372036854775807L;
        this.f52320s.l();
        this.f52320s = null;
        for (C0718c c0718c : this.f52316o.values()) {
            c0718c.w();
        }
        this.f52321t.removeCallbacksAndMessages(null);
        this.f52321t = null;
        this.f52316o.clear();
    }

    public c(vd.g gVar, com.google.android.exoplayer2.upstream.h hVar, j jVar, double d10) {
        this.f52313d = gVar;
        this.f52314e = jVar;
        this.f52315i = hVar;
        this.f52318q = d10;
        this.f52317p = new CopyOnWriteArrayList();
        this.f52316o = new HashMap();
        this.f52327z = -9223372036854775807L;
    }
}
