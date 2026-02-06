package wd;

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
import lc.l0;
import ne.w0;
import ni.v;
import qd.y;
import wd.c;
import wd.f;
import wd.g;
import wd.i;
import wd.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements k, j.b {
    public static final k.a A = new k.a() { // from class: wd.b
        @Override // wd.k.a
        public final k a(vd.g gVar, com.google.android.exoplayer2.upstream.i iVar, j jVar) {
            return new c(gVar, iVar, jVar);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private final vd.g f53535d;

    /* renamed from: e  reason: collision with root package name */
    private final j f53536e;

    /* renamed from: i  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f53537i;

    /* renamed from: o  reason: collision with root package name */
    private final HashMap f53538o;

    /* renamed from: p  reason: collision with root package name */
    private final CopyOnWriteArrayList f53539p;

    /* renamed from: q  reason: collision with root package name */
    private final double f53540q;

    /* renamed from: r  reason: collision with root package name */
    private y.a f53541r;

    /* renamed from: s  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.j f53542s;

    /* renamed from: t  reason: collision with root package name */
    private Handler f53543t;

    /* renamed from: u  reason: collision with root package name */
    private k.e f53544u;

    /* renamed from: v  reason: collision with root package name */
    private g f53545v;

    /* renamed from: w  reason: collision with root package name */
    private Uri f53546w;

    /* renamed from: x  reason: collision with root package name */
    private f f53547x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f53548y;

    /* renamed from: z  reason: collision with root package name */
    private long f53549z;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements k.b {
        private b() {
        }

        @Override // wd.k.b
        public void a() {
            c.this.f53539p.remove(this);
        }

        @Override // wd.k.b
        public boolean c(Uri uri, i.c cVar, boolean z10) {
            C0717c c0717c;
            if (c.this.f53547x == null) {
                long elapsedRealtime = SystemClock.elapsedRealtime();
                List list = ((g) w0.j(c.this.f53545v)).f53610e;
                int i10 = 0;
                for (int i11 = 0; i11 < list.size(); i11++) {
                    C0717c c0717c2 = (C0717c) c.this.f53538o.get(((g.b) list.get(i11)).f53623a);
                    if (c0717c2 != null && elapsedRealtime < c0717c2.f53558s) {
                        i10++;
                    }
                }
                i.b c10 = c.this.f53537i.c(new i.a(1, 0, c.this.f53545v.f53610e.size(), i10), cVar);
                if (c10 != null && c10.f13420a == 2 && (c0717c = (C0717c) c.this.f53538o.get(uri)) != null) {
                    c0717c.h(c10.f13421b);
                }
            }
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: wd.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class C0717c implements j.b {

        /* renamed from: d  reason: collision with root package name */
        private final Uri f53551d;

        /* renamed from: e  reason: collision with root package name */
        private final com.google.android.exoplayer2.upstream.j f53552e = new com.google.android.exoplayer2.upstream.j("DefaultHlsPlaylistTracker:MediaPlaylist");

        /* renamed from: i  reason: collision with root package name */
        private final DataSource f53553i;

        /* renamed from: o  reason: collision with root package name */
        private f f53554o;

        /* renamed from: p  reason: collision with root package name */
        private long f53555p;

        /* renamed from: q  reason: collision with root package name */
        private long f53556q;

        /* renamed from: r  reason: collision with root package name */
        private long f53557r;

        /* renamed from: s  reason: collision with root package name */
        private long f53558s;

        /* renamed from: t  reason: collision with root package name */
        private boolean f53559t;

        /* renamed from: u  reason: collision with root package name */
        private IOException f53560u;

        public C0717c(Uri uri) {
            this.f53551d = uri;
            this.f53553i = c.this.f53535d.a(4);
        }

        public static /* synthetic */ void a(C0717c c0717c, Uri uri) {
            c0717c.f53559t = false;
            c0717c.p(uri);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public boolean h(long j10) {
            this.f53558s = SystemClock.elapsedRealtime() + j10;
            if (this.f53551d.equals(c.this.f53546w) && !c.this.L()) {
                return true;
            }
            return false;
        }

        private Uri k() {
            String str;
            f fVar = this.f53554o;
            if (fVar != null) {
                f.C0718f c0718f = fVar.f53584v;
                if (c0718f.f53603a != -9223372036854775807L || c0718f.f53607e) {
                    Uri.Builder buildUpon = this.f53551d.buildUpon();
                    f fVar2 = this.f53554o;
                    if (fVar2.f53584v.f53607e) {
                        buildUpon.appendQueryParameter("_HLS_msn", String.valueOf(fVar2.f53573k + fVar2.f53580r.size()));
                        f fVar3 = this.f53554o;
                        if (fVar3.f53576n != -9223372036854775807L) {
                            List list = fVar3.f53581s;
                            int size = list.size();
                            if (!list.isEmpty() && ((f.b) v.c(list)).f53586x) {
                                size--;
                            }
                            buildUpon.appendQueryParameter("_HLS_part", String.valueOf(size));
                        }
                    }
                    f.C0718f c0718f2 = this.f53554o.f53584v;
                    if (c0718f2.f53603a != -9223372036854775807L) {
                        if (c0718f2.f53604b) {
                            str = "v2";
                        } else {
                            str = "YES";
                        }
                        buildUpon.appendQueryParameter("_HLS_skip", str);
                    }
                    return buildUpon.build();
                }
            }
            return this.f53551d;
        }

        private void p(Uri uri) {
            com.google.android.exoplayer2.upstream.k kVar = new com.google.android.exoplayer2.upstream.k(this.f53553i, uri, 4, c.this.f53536e.a(c.this.f53545v, this.f53554o));
            c.this.f53541r.s(new LoadEventInfo(kVar.f13446a, kVar.f13447b, this.f53552e.n(kVar, this, c.this.f53537i.b(kVar.f13448c))), kVar.f13448c);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void q(final Uri uri) {
            this.f53558s = 0L;
            if (!this.f53559t && !this.f53552e.j() && !this.f53552e.i()) {
                long elapsedRealtime = SystemClock.elapsedRealtime();
                if (elapsedRealtime < this.f53557r) {
                    this.f53559t = true;
                    c.this.f53543t.postDelayed(new Runnable() { // from class: wd.d
                        @Override // java.lang.Runnable
                        public final void run() {
                            c.C0717c.a(c.C0717c.this, uri);
                        }
                    }, this.f53557r - elapsedRealtime);
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
            f fVar3 = this.f53554o;
            long elapsedRealtime = SystemClock.elapsedRealtime();
            this.f53555p = elapsedRealtime;
            f G = c.this.G(fVar3, fVar);
            this.f53554o = G;
            IOException iOException = null;
            if (G != fVar3) {
                this.f53560u = null;
                this.f53556q = elapsedRealtime;
                c.this.R(this.f53551d, G);
            } else if (!G.f53577o) {
                if (fVar.f53573k + fVar.f53580r.size() < this.f53554o.f53573k) {
                    iOException = new k.c(this.f53551d);
                    z10 = true;
                } else {
                    z10 = false;
                    if (elapsedRealtime - this.f53556q > w0.p1(fVar2.f53575m) * c.this.f53540q) {
                        iOException = new k.d(this.f53551d);
                    }
                }
                if (iOException != null) {
                    this.f53560u = iOException;
                    c.this.N(this.f53551d, new i.c(loadEventInfo, new MediaLoadData(4), iOException, 1), z10);
                }
            }
            f fVar4 = this.f53554o;
            if (!fVar4.f53584v.f53607e) {
                if (fVar4 != fVar3) {
                    j10 = fVar4.f53575m;
                } else {
                    j10 = fVar4.f53575m / 2;
                }
            } else {
                j10 = 0;
            }
            this.f53557r = elapsedRealtime + w0.p1(j10);
            if ((this.f53554o.f53576n != -9223372036854775807L || this.f53551d.equals(c.this.f53546w)) && !this.f53554o.f53577o) {
                q(k());
            }
        }

        public f l() {
            return this.f53554o;
        }

        public boolean m() {
            int i10;
            if (this.f53554o == null) {
                return false;
            }
            long elapsedRealtime = SystemClock.elapsedRealtime();
            long max = Math.max(30000L, w0.p1(this.f53554o.f53583u));
            f fVar = this.f53554o;
            if (!fVar.f53577o && (i10 = fVar.f53566d) != 2 && i10 != 1 && this.f53555p + max <= elapsedRealtime) {
                return false;
            }
            return true;
        }

        public void o() {
            q(this.f53551d);
        }

        public void r() {
            this.f53552e.a();
            IOException iOException = this.f53560u;
            if (iOException == null) {
                return;
            }
            throw iOException;
        }

        @Override // com.google.android.exoplayer2.upstream.j.b
        /* renamed from: s */
        public void i(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11, boolean z10) {
            LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f13446a, kVar.f13447b, kVar.f(), kVar.d(), j10, j11, kVar.a());
            c.this.f53537i.d(kVar.f13446a);
            c.this.f53541r.j(loadEventInfo, 4);
        }

        @Override // com.google.android.exoplayer2.upstream.j.b
        /* renamed from: t */
        public void j(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11) {
            h hVar = (h) kVar.e();
            LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f13446a, kVar.f13447b, kVar.f(), kVar.d(), j10, j11, kVar.a());
            if (hVar instanceof f) {
                v((f) hVar, loadEventInfo);
                c.this.f53541r.m(loadEventInfo, 4);
            } else {
                this.f53560u = l0.c("Loaded playlist has unexpected type.", null);
                c.this.f53541r.q(loadEventInfo, 4, this.f53560u, true);
            }
            c.this.f53537i.d(kVar.f13446a);
        }

        @Override // com.google.android.exoplayer2.upstream.j.b
        /* renamed from: u */
        public j.c n(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11, IOException iOException, int i10) {
            boolean z10;
            int i11;
            j.c cVar;
            LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f13446a, kVar.f13447b, kVar.f(), kVar.d(), j10, j11, kVar.a());
            if (kVar.f().getQueryParameter("_HLS_msn") != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            boolean z11 = iOException instanceof i.a;
            if (z10 || z11) {
                if (iOException instanceof h.f) {
                    i11 = ((h.f) iOException).f13410o;
                } else {
                    i11 = Integer.MAX_VALUE;
                }
                if (z11 || i11 == 400 || i11 == 503) {
                    this.f53557r = SystemClock.elapsedRealtime();
                    o();
                    ((y.a) w0.j(c.this.f53541r)).q(loadEventInfo, kVar.f13448c, iOException, true);
                    return com.google.android.exoplayer2.upstream.j.f13428f;
                }
            }
            i.c cVar2 = new i.c(loadEventInfo, new MediaLoadData(kVar.f13448c), iOException, i10);
            if (c.this.N(this.f53551d, cVar2, false)) {
                long a10 = c.this.f53537i.a(cVar2);
                if (a10 != -9223372036854775807L) {
                    cVar = com.google.android.exoplayer2.upstream.j.h(false, a10);
                } else {
                    cVar = com.google.android.exoplayer2.upstream.j.f13429g;
                }
            } else {
                cVar = com.google.android.exoplayer2.upstream.j.f13428f;
            }
            boolean c10 = cVar.c();
            c.this.f53541r.q(loadEventInfo, kVar.f13448c, iOException, !c10);
            if (!c10) {
                c.this.f53537i.d(kVar.f13446a);
            }
            return cVar;
        }

        public void w() {
            this.f53552e.l();
        }
    }

    public c(vd.g gVar, com.google.android.exoplayer2.upstream.i iVar, j jVar) {
        this(gVar, iVar, jVar, 3.5d);
    }

    private void E(List list) {
        int size = list.size();
        for (int i10 = 0; i10 < size; i10++) {
            Uri uri = (Uri) list.get(i10);
            this.f53538o.put(uri, new C0717c(uri));
        }
    }

    private static f.d F(f fVar, f fVar2) {
        int i10 = (int) (fVar2.f53573k - fVar.f53573k);
        List list = fVar.f53580r;
        if (i10 < list.size()) {
            return (f.d) list.get(i10);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public f G(f fVar, f fVar2) {
        if (!fVar2.f(fVar)) {
            if (fVar2.f53577o) {
                return fVar.d();
            }
            return fVar;
        }
        return fVar2.c(I(fVar, fVar2), H(fVar, fVar2));
    }

    private int H(f fVar, f fVar2) {
        int i10;
        f.d F;
        if (fVar2.f53571i) {
            return fVar2.f53572j;
        }
        f fVar3 = this.f53547x;
        if (fVar3 != null) {
            i10 = fVar3.f53572j;
        } else {
            i10 = 0;
        }
        if (fVar != null && (F = F(fVar, fVar2)) != null) {
            return (fVar.f53572j + F.f53595o) - ((f.d) fVar2.f53580r.get(0)).f53595o;
        }
        return i10;
    }

    private long I(f fVar, f fVar2) {
        long j10;
        if (fVar2.f53578p) {
            return fVar2.f53570h;
        }
        f fVar3 = this.f53547x;
        if (fVar3 != null) {
            j10 = fVar3.f53570h;
        } else {
            j10 = 0;
        }
        if (fVar != null) {
            int size = fVar.f53580r.size();
            f.d F = F(fVar, fVar2);
            if (F != null) {
                return fVar.f53570h + F.f53596p;
            }
            if (size == fVar2.f53573k - fVar.f53573k) {
                return fVar.e();
            }
        }
        return j10;
    }

    private Uri J(Uri uri) {
        f.c cVar;
        f fVar = this.f53547x;
        if (fVar != null && fVar.f53584v.f53607e && (cVar = (f.c) fVar.f53582t.get(uri)) != null) {
            Uri.Builder buildUpon = uri.buildUpon();
            buildUpon.appendQueryParameter("_HLS_msn", String.valueOf(cVar.f53588b));
            int i10 = cVar.f53589c;
            if (i10 != -1) {
                buildUpon.appendQueryParameter("_HLS_part", String.valueOf(i10));
            }
            return buildUpon.build();
        }
        return uri;
    }

    private boolean K(Uri uri) {
        List list = this.f53545v.f53610e;
        for (int i10 = 0; i10 < list.size(); i10++) {
            if (uri.equals(((g.b) list.get(i10)).f53623a)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean L() {
        List list = this.f53545v.f53610e;
        int size = list.size();
        long elapsedRealtime = SystemClock.elapsedRealtime();
        for (int i10 = 0; i10 < size; i10++) {
            C0717c c0717c = (C0717c) ne.a.e((C0717c) this.f53538o.get(((g.b) list.get(i10)).f53623a));
            if (elapsedRealtime > c0717c.f53558s) {
                Uri uri = c0717c.f53551d;
                this.f53546w = uri;
                c0717c.q(J(uri));
                return true;
            }
        }
        return false;
    }

    private void M(Uri uri) {
        if (!uri.equals(this.f53546w) && K(uri)) {
            f fVar = this.f53547x;
            if (fVar == null || !fVar.f53577o) {
                this.f53546w = uri;
                C0717c c0717c = (C0717c) this.f53538o.get(uri);
                f fVar2 = c0717c.f53554o;
                if (fVar2 == null || !fVar2.f53577o) {
                    c0717c.q(J(uri));
                    return;
                }
                this.f53547x = fVar2;
                this.f53544u.b(fVar2);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean N(Uri uri, i.c cVar, boolean z10) {
        Iterator it = this.f53539p.iterator();
        boolean z11 = false;
        while (it.hasNext()) {
            z11 |= !((k.b) it.next()).c(uri, cVar, z10);
        }
        return z11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void R(Uri uri, f fVar) {
        if (uri.equals(this.f53546w)) {
            if (this.f53547x == null) {
                this.f53548y = !fVar.f53577o;
                this.f53549z = fVar.f53570h;
            }
            this.f53547x = fVar;
            this.f53544u.b(fVar);
        }
        Iterator it = this.f53539p.iterator();
        while (it.hasNext()) {
            ((k.b) it.next()).a();
        }
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: O */
    public void i(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11, boolean z10) {
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f13446a, kVar.f13447b, kVar.f(), kVar.d(), j10, j11, kVar.a());
        this.f53537i.d(kVar.f13446a);
        this.f53541r.j(loadEventInfo, 4);
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: P */
    public void j(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11) {
        g gVar;
        h hVar = (h) kVar.e();
        boolean z10 = hVar instanceof f;
        if (z10) {
            gVar = g.e(hVar.f53629a);
        } else {
            gVar = (g) hVar;
        }
        this.f53545v = gVar;
        this.f53546w = ((g.b) gVar.f53610e.get(0)).f53623a;
        this.f53539p.add(new b());
        E(gVar.f53609d);
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f13446a, kVar.f13447b, kVar.f(), kVar.d(), j10, j11, kVar.a());
        C0717c c0717c = (C0717c) this.f53538o.get(this.f53546w);
        if (z10) {
            c0717c.v((f) hVar, loadEventInfo);
        } else {
            c0717c.o();
        }
        this.f53537i.d(kVar.f13446a);
        this.f53541r.m(loadEventInfo, 4);
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: Q */
    public j.c n(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11, IOException iOException, int i10) {
        boolean z10;
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f13446a, kVar.f13447b, kVar.f(), kVar.d(), j10, j11, kVar.a());
        long a10 = this.f53537i.a(new i.c(loadEventInfo, new MediaLoadData(kVar.f13448c), iOException, i10));
        if (a10 == -9223372036854775807L) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f53541r.q(loadEventInfo, kVar.f13448c, iOException, z10);
        if (z10) {
            this.f53537i.d(kVar.f13446a);
        }
        if (z10) {
            return com.google.android.exoplayer2.upstream.j.f13429g;
        }
        return com.google.android.exoplayer2.upstream.j.h(false, a10);
    }

    @Override // wd.k
    public void a(Uri uri, y.a aVar, k.e eVar) {
        boolean z10;
        this.f53543t = w0.w();
        this.f53541r = aVar;
        this.f53544u = eVar;
        com.google.android.exoplayer2.upstream.k kVar = new com.google.android.exoplayer2.upstream.k(this.f53535d.a(4), uri, 4, this.f53536e.b());
        if (this.f53542s == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        com.google.android.exoplayer2.upstream.j jVar = new com.google.android.exoplayer2.upstream.j("DefaultHlsPlaylistTracker:MultivariantPlaylist");
        this.f53542s = jVar;
        aVar.s(new LoadEventInfo(kVar.f13446a, kVar.f13447b, jVar.n(kVar, this, this.f53537i.b(kVar.f13448c))), kVar.f13448c);
    }

    @Override // wd.k
    public void b(Uri uri) {
        ((C0717c) this.f53538o.get(uri)).r();
    }

    @Override // wd.k
    public long c() {
        return this.f53549z;
    }

    @Override // wd.k
    public g d() {
        return this.f53545v;
    }

    @Override // wd.k
    public void e(Uri uri) {
        ((C0717c) this.f53538o.get(uri)).o();
    }

    @Override // wd.k
    public void f(k.b bVar) {
        ne.a.e(bVar);
        this.f53539p.add(bVar);
    }

    @Override // wd.k
    public boolean g(Uri uri) {
        return ((C0717c) this.f53538o.get(uri)).m();
    }

    @Override // wd.k
    public boolean h() {
        return this.f53548y;
    }

    @Override // wd.k
    public boolean k(Uri uri, long j10) {
        C0717c c0717c = (C0717c) this.f53538o.get(uri);
        if (c0717c != null) {
            return !c0717c.h(j10);
        }
        return false;
    }

    @Override // wd.k
    public void l() {
        com.google.android.exoplayer2.upstream.j jVar = this.f53542s;
        if (jVar != null) {
            jVar.a();
        }
        Uri uri = this.f53546w;
        if (uri != null) {
            b(uri);
        }
    }

    @Override // wd.k
    public f m(Uri uri, boolean z10) {
        f l10 = ((C0717c) this.f53538o.get(uri)).l();
        if (l10 != null && z10) {
            M(uri);
        }
        return l10;
    }

    @Override // wd.k
    public void o(k.b bVar) {
        this.f53539p.remove(bVar);
    }

    @Override // wd.k
    public void stop() {
        this.f53546w = null;
        this.f53547x = null;
        this.f53545v = null;
        this.f53549z = -9223372036854775807L;
        this.f53542s.l();
        this.f53542s = null;
        for (C0717c c0717c : this.f53538o.values()) {
            c0717c.w();
        }
        this.f53543t.removeCallbacksAndMessages(null);
        this.f53543t = null;
        this.f53538o.clear();
    }

    public c(vd.g gVar, com.google.android.exoplayer2.upstream.i iVar, j jVar, double d10) {
        this.f53535d = gVar;
        this.f53536e = jVar;
        this.f53537i = iVar;
        this.f53540q = d10;
        this.f53539p = new CopyOnWriteArrayList();
        this.f53538o = new HashMap();
        this.f53549z = -9223372036854775807L;
    }
}
