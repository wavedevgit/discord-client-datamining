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
    private final vd.g f53583d;

    /* renamed from: e  reason: collision with root package name */
    private final j f53584e;

    /* renamed from: i  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f53585i;

    /* renamed from: o  reason: collision with root package name */
    private final HashMap f53586o;

    /* renamed from: p  reason: collision with root package name */
    private final CopyOnWriteArrayList f53587p;

    /* renamed from: q  reason: collision with root package name */
    private final double f53588q;

    /* renamed from: r  reason: collision with root package name */
    private y.a f53589r;

    /* renamed from: s  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.j f53590s;

    /* renamed from: t  reason: collision with root package name */
    private Handler f53591t;

    /* renamed from: u  reason: collision with root package name */
    private k.e f53592u;

    /* renamed from: v  reason: collision with root package name */
    private g f53593v;

    /* renamed from: w  reason: collision with root package name */
    private Uri f53594w;

    /* renamed from: x  reason: collision with root package name */
    private f f53595x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f53596y;

    /* renamed from: z  reason: collision with root package name */
    private long f53597z;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements k.b {
        private b() {
        }

        @Override // wd.k.b
        public void a() {
            c.this.f53587p.remove(this);
        }

        @Override // wd.k.b
        public boolean c(Uri uri, i.c cVar, boolean z10) {
            C0717c c0717c;
            if (c.this.f53595x == null) {
                long elapsedRealtime = SystemClock.elapsedRealtime();
                List list = ((g) w0.j(c.this.f53593v)).f53658e;
                int i10 = 0;
                for (int i11 = 0; i11 < list.size(); i11++) {
                    C0717c c0717c2 = (C0717c) c.this.f53586o.get(((g.b) list.get(i11)).f53671a);
                    if (c0717c2 != null && elapsedRealtime < c0717c2.f53606s) {
                        i10++;
                    }
                }
                i.b c10 = c.this.f53585i.c(new i.a(1, 0, c.this.f53593v.f53658e.size(), i10), cVar);
                if (c10 != null && c10.f13420a == 2 && (c0717c = (C0717c) c.this.f53586o.get(uri)) != null) {
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
        private final Uri f53599d;

        /* renamed from: e  reason: collision with root package name */
        private final com.google.android.exoplayer2.upstream.j f53600e = new com.google.android.exoplayer2.upstream.j("DefaultHlsPlaylistTracker:MediaPlaylist");

        /* renamed from: i  reason: collision with root package name */
        private final DataSource f53601i;

        /* renamed from: o  reason: collision with root package name */
        private f f53602o;

        /* renamed from: p  reason: collision with root package name */
        private long f53603p;

        /* renamed from: q  reason: collision with root package name */
        private long f53604q;

        /* renamed from: r  reason: collision with root package name */
        private long f53605r;

        /* renamed from: s  reason: collision with root package name */
        private long f53606s;

        /* renamed from: t  reason: collision with root package name */
        private boolean f53607t;

        /* renamed from: u  reason: collision with root package name */
        private IOException f53608u;

        public C0717c(Uri uri) {
            this.f53599d = uri;
            this.f53601i = c.this.f53583d.a(4);
        }

        public static /* synthetic */ void a(C0717c c0717c, Uri uri) {
            c0717c.f53607t = false;
            c0717c.p(uri);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public boolean h(long j10) {
            this.f53606s = SystemClock.elapsedRealtime() + j10;
            if (this.f53599d.equals(c.this.f53594w) && !c.this.L()) {
                return true;
            }
            return false;
        }

        private Uri k() {
            String str;
            f fVar = this.f53602o;
            if (fVar != null) {
                f.C0718f c0718f = fVar.f53632v;
                if (c0718f.f53651a != -9223372036854775807L || c0718f.f53655e) {
                    Uri.Builder buildUpon = this.f53599d.buildUpon();
                    f fVar2 = this.f53602o;
                    if (fVar2.f53632v.f53655e) {
                        buildUpon.appendQueryParameter("_HLS_msn", String.valueOf(fVar2.f53621k + fVar2.f53628r.size()));
                        f fVar3 = this.f53602o;
                        if (fVar3.f53624n != -9223372036854775807L) {
                            List list = fVar3.f53629s;
                            int size = list.size();
                            if (!list.isEmpty() && ((f.b) v.c(list)).f53634x) {
                                size--;
                            }
                            buildUpon.appendQueryParameter("_HLS_part", String.valueOf(size));
                        }
                    }
                    f.C0718f c0718f2 = this.f53602o.f53632v;
                    if (c0718f2.f53651a != -9223372036854775807L) {
                        if (c0718f2.f53652b) {
                            str = "v2";
                        } else {
                            str = "YES";
                        }
                        buildUpon.appendQueryParameter("_HLS_skip", str);
                    }
                    return buildUpon.build();
                }
            }
            return this.f53599d;
        }

        private void p(Uri uri) {
            com.google.android.exoplayer2.upstream.k kVar = new com.google.android.exoplayer2.upstream.k(this.f53601i, uri, 4, c.this.f53584e.a(c.this.f53593v, this.f53602o));
            c.this.f53589r.s(new LoadEventInfo(kVar.f13446a, kVar.f13447b, this.f53600e.n(kVar, this, c.this.f53585i.b(kVar.f13448c))), kVar.f13448c);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void q(final Uri uri) {
            this.f53606s = 0L;
            if (!this.f53607t && !this.f53600e.j() && !this.f53600e.i()) {
                long elapsedRealtime = SystemClock.elapsedRealtime();
                if (elapsedRealtime < this.f53605r) {
                    this.f53607t = true;
                    c.this.f53591t.postDelayed(new Runnable() { // from class: wd.d
                        @Override // java.lang.Runnable
                        public final void run() {
                            c.C0717c.a(c.C0717c.this, uri);
                        }
                    }, this.f53605r - elapsedRealtime);
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
            f fVar3 = this.f53602o;
            long elapsedRealtime = SystemClock.elapsedRealtime();
            this.f53603p = elapsedRealtime;
            f G = c.this.G(fVar3, fVar);
            this.f53602o = G;
            IOException iOException = null;
            if (G != fVar3) {
                this.f53608u = null;
                this.f53604q = elapsedRealtime;
                c.this.R(this.f53599d, G);
            } else if (!G.f53625o) {
                if (fVar.f53621k + fVar.f53628r.size() < this.f53602o.f53621k) {
                    iOException = new k.c(this.f53599d);
                    z10 = true;
                } else {
                    z10 = false;
                    if (elapsedRealtime - this.f53604q > w0.p1(fVar2.f53623m) * c.this.f53588q) {
                        iOException = new k.d(this.f53599d);
                    }
                }
                if (iOException != null) {
                    this.f53608u = iOException;
                    c.this.N(this.f53599d, new i.c(loadEventInfo, new MediaLoadData(4), iOException, 1), z10);
                }
            }
            f fVar4 = this.f53602o;
            if (!fVar4.f53632v.f53655e) {
                if (fVar4 != fVar3) {
                    j10 = fVar4.f53623m;
                } else {
                    j10 = fVar4.f53623m / 2;
                }
            } else {
                j10 = 0;
            }
            this.f53605r = elapsedRealtime + w0.p1(j10);
            if ((this.f53602o.f53624n != -9223372036854775807L || this.f53599d.equals(c.this.f53594w)) && !this.f53602o.f53625o) {
                q(k());
            }
        }

        public f l() {
            return this.f53602o;
        }

        public boolean m() {
            int i10;
            if (this.f53602o == null) {
                return false;
            }
            long elapsedRealtime = SystemClock.elapsedRealtime();
            long max = Math.max(30000L, w0.p1(this.f53602o.f53631u));
            f fVar = this.f53602o;
            if (!fVar.f53625o && (i10 = fVar.f53614d) != 2 && i10 != 1 && this.f53603p + max <= elapsedRealtime) {
                return false;
            }
            return true;
        }

        public void o() {
            q(this.f53599d);
        }

        public void r() {
            this.f53600e.a();
            IOException iOException = this.f53608u;
            if (iOException == null) {
                return;
            }
            throw iOException;
        }

        @Override // com.google.android.exoplayer2.upstream.j.b
        /* renamed from: s */
        public void i(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11, boolean z10) {
            LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f13446a, kVar.f13447b, kVar.f(), kVar.d(), j10, j11, kVar.a());
            c.this.f53585i.d(kVar.f13446a);
            c.this.f53589r.j(loadEventInfo, 4);
        }

        @Override // com.google.android.exoplayer2.upstream.j.b
        /* renamed from: t */
        public void j(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11) {
            h hVar = (h) kVar.e();
            LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f13446a, kVar.f13447b, kVar.f(), kVar.d(), j10, j11, kVar.a());
            if (hVar instanceof f) {
                v((f) hVar, loadEventInfo);
                c.this.f53589r.m(loadEventInfo, 4);
            } else {
                this.f53608u = l0.c("Loaded playlist has unexpected type.", null);
                c.this.f53589r.q(loadEventInfo, 4, this.f53608u, true);
            }
            c.this.f53585i.d(kVar.f13446a);
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
                    this.f53605r = SystemClock.elapsedRealtime();
                    o();
                    ((y.a) w0.j(c.this.f53589r)).q(loadEventInfo, kVar.f13448c, iOException, true);
                    return com.google.android.exoplayer2.upstream.j.f13428f;
                }
            }
            i.c cVar2 = new i.c(loadEventInfo, new MediaLoadData(kVar.f13448c), iOException, i10);
            if (c.this.N(this.f53599d, cVar2, false)) {
                long a10 = c.this.f53585i.a(cVar2);
                if (a10 != -9223372036854775807L) {
                    cVar = com.google.android.exoplayer2.upstream.j.h(false, a10);
                } else {
                    cVar = com.google.android.exoplayer2.upstream.j.f13429g;
                }
            } else {
                cVar = com.google.android.exoplayer2.upstream.j.f13428f;
            }
            boolean c10 = cVar.c();
            c.this.f53589r.q(loadEventInfo, kVar.f13448c, iOException, !c10);
            if (!c10) {
                c.this.f53585i.d(kVar.f13446a);
            }
            return cVar;
        }

        public void w() {
            this.f53600e.l();
        }
    }

    public c(vd.g gVar, com.google.android.exoplayer2.upstream.i iVar, j jVar) {
        this(gVar, iVar, jVar, 3.5d);
    }

    private void E(List list) {
        int size = list.size();
        for (int i10 = 0; i10 < size; i10++) {
            Uri uri = (Uri) list.get(i10);
            this.f53586o.put(uri, new C0717c(uri));
        }
    }

    private static f.d F(f fVar, f fVar2) {
        int i10 = (int) (fVar2.f53621k - fVar.f53621k);
        List list = fVar.f53628r;
        if (i10 < list.size()) {
            return (f.d) list.get(i10);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public f G(f fVar, f fVar2) {
        if (!fVar2.f(fVar)) {
            if (fVar2.f53625o) {
                return fVar.d();
            }
            return fVar;
        }
        return fVar2.c(I(fVar, fVar2), H(fVar, fVar2));
    }

    private int H(f fVar, f fVar2) {
        int i10;
        f.d F;
        if (fVar2.f53619i) {
            return fVar2.f53620j;
        }
        f fVar3 = this.f53595x;
        if (fVar3 != null) {
            i10 = fVar3.f53620j;
        } else {
            i10 = 0;
        }
        if (fVar != null && (F = F(fVar, fVar2)) != null) {
            return (fVar.f53620j + F.f53643o) - ((f.d) fVar2.f53628r.get(0)).f53643o;
        }
        return i10;
    }

    private long I(f fVar, f fVar2) {
        long j10;
        if (fVar2.f53626p) {
            return fVar2.f53618h;
        }
        f fVar3 = this.f53595x;
        if (fVar3 != null) {
            j10 = fVar3.f53618h;
        } else {
            j10 = 0;
        }
        if (fVar != null) {
            int size = fVar.f53628r.size();
            f.d F = F(fVar, fVar2);
            if (F != null) {
                return fVar.f53618h + F.f53644p;
            }
            if (size == fVar2.f53621k - fVar.f53621k) {
                return fVar.e();
            }
        }
        return j10;
    }

    private Uri J(Uri uri) {
        f.c cVar;
        f fVar = this.f53595x;
        if (fVar != null && fVar.f53632v.f53655e && (cVar = (f.c) fVar.f53630t.get(uri)) != null) {
            Uri.Builder buildUpon = uri.buildUpon();
            buildUpon.appendQueryParameter("_HLS_msn", String.valueOf(cVar.f53636b));
            int i10 = cVar.f53637c;
            if (i10 != -1) {
                buildUpon.appendQueryParameter("_HLS_part", String.valueOf(i10));
            }
            return buildUpon.build();
        }
        return uri;
    }

    private boolean K(Uri uri) {
        List list = this.f53593v.f53658e;
        for (int i10 = 0; i10 < list.size(); i10++) {
            if (uri.equals(((g.b) list.get(i10)).f53671a)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean L() {
        List list = this.f53593v.f53658e;
        int size = list.size();
        long elapsedRealtime = SystemClock.elapsedRealtime();
        for (int i10 = 0; i10 < size; i10++) {
            C0717c c0717c = (C0717c) ne.a.e((C0717c) this.f53586o.get(((g.b) list.get(i10)).f53671a));
            if (elapsedRealtime > c0717c.f53606s) {
                Uri uri = c0717c.f53599d;
                this.f53594w = uri;
                c0717c.q(J(uri));
                return true;
            }
        }
        return false;
    }

    private void M(Uri uri) {
        if (!uri.equals(this.f53594w) && K(uri)) {
            f fVar = this.f53595x;
            if (fVar == null || !fVar.f53625o) {
                this.f53594w = uri;
                C0717c c0717c = (C0717c) this.f53586o.get(uri);
                f fVar2 = c0717c.f53602o;
                if (fVar2 == null || !fVar2.f53625o) {
                    c0717c.q(J(uri));
                    return;
                }
                this.f53595x = fVar2;
                this.f53592u.b(fVar2);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean N(Uri uri, i.c cVar, boolean z10) {
        Iterator it = this.f53587p.iterator();
        boolean z11 = false;
        while (it.hasNext()) {
            z11 |= !((k.b) it.next()).c(uri, cVar, z10);
        }
        return z11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void R(Uri uri, f fVar) {
        if (uri.equals(this.f53594w)) {
            if (this.f53595x == null) {
                this.f53596y = !fVar.f53625o;
                this.f53597z = fVar.f53618h;
            }
            this.f53595x = fVar;
            this.f53592u.b(fVar);
        }
        Iterator it = this.f53587p.iterator();
        while (it.hasNext()) {
            ((k.b) it.next()).a();
        }
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: O */
    public void i(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11, boolean z10) {
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f13446a, kVar.f13447b, kVar.f(), kVar.d(), j10, j11, kVar.a());
        this.f53585i.d(kVar.f13446a);
        this.f53589r.j(loadEventInfo, 4);
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: P */
    public void j(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11) {
        g gVar;
        h hVar = (h) kVar.e();
        boolean z10 = hVar instanceof f;
        if (z10) {
            gVar = g.e(hVar.f53677a);
        } else {
            gVar = (g) hVar;
        }
        this.f53593v = gVar;
        this.f53594w = ((g.b) gVar.f53658e.get(0)).f53671a;
        this.f53587p.add(new b());
        E(gVar.f53657d);
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f13446a, kVar.f13447b, kVar.f(), kVar.d(), j10, j11, kVar.a());
        C0717c c0717c = (C0717c) this.f53586o.get(this.f53594w);
        if (z10) {
            c0717c.v((f) hVar, loadEventInfo);
        } else {
            c0717c.o();
        }
        this.f53585i.d(kVar.f13446a);
        this.f53589r.m(loadEventInfo, 4);
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: Q */
    public j.c n(com.google.android.exoplayer2.upstream.k kVar, long j10, long j11, IOException iOException, int i10) {
        boolean z10;
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f13446a, kVar.f13447b, kVar.f(), kVar.d(), j10, j11, kVar.a());
        long a10 = this.f53585i.a(new i.c(loadEventInfo, new MediaLoadData(kVar.f13448c), iOException, i10));
        if (a10 == -9223372036854775807L) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f53589r.q(loadEventInfo, kVar.f13448c, iOException, z10);
        if (z10) {
            this.f53585i.d(kVar.f13446a);
        }
        if (z10) {
            return com.google.android.exoplayer2.upstream.j.f13429g;
        }
        return com.google.android.exoplayer2.upstream.j.h(false, a10);
    }

    @Override // wd.k
    public void a(Uri uri, y.a aVar, k.e eVar) {
        boolean z10;
        this.f53591t = w0.w();
        this.f53589r = aVar;
        this.f53592u = eVar;
        com.google.android.exoplayer2.upstream.k kVar = new com.google.android.exoplayer2.upstream.k(this.f53583d.a(4), uri, 4, this.f53584e.b());
        if (this.f53590s == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        com.google.android.exoplayer2.upstream.j jVar = new com.google.android.exoplayer2.upstream.j("DefaultHlsPlaylistTracker:MultivariantPlaylist");
        this.f53590s = jVar;
        aVar.s(new LoadEventInfo(kVar.f13446a, kVar.f13447b, jVar.n(kVar, this, this.f53585i.b(kVar.f13448c))), kVar.f13448c);
    }

    @Override // wd.k
    public void b(Uri uri) {
        ((C0717c) this.f53586o.get(uri)).r();
    }

    @Override // wd.k
    public long c() {
        return this.f53597z;
    }

    @Override // wd.k
    public g d() {
        return this.f53593v;
    }

    @Override // wd.k
    public void e(Uri uri) {
        ((C0717c) this.f53586o.get(uri)).o();
    }

    @Override // wd.k
    public void f(k.b bVar) {
        ne.a.e(bVar);
        this.f53587p.add(bVar);
    }

    @Override // wd.k
    public boolean g(Uri uri) {
        return ((C0717c) this.f53586o.get(uri)).m();
    }

    @Override // wd.k
    public boolean h() {
        return this.f53596y;
    }

    @Override // wd.k
    public boolean k(Uri uri, long j10) {
        C0717c c0717c = (C0717c) this.f53586o.get(uri);
        if (c0717c != null) {
            return !c0717c.h(j10);
        }
        return false;
    }

    @Override // wd.k
    public void l() {
        com.google.android.exoplayer2.upstream.j jVar = this.f53590s;
        if (jVar != null) {
            jVar.a();
        }
        Uri uri = this.f53594w;
        if (uri != null) {
            b(uri);
        }
    }

    @Override // wd.k
    public f m(Uri uri, boolean z10) {
        f l10 = ((C0717c) this.f53586o.get(uri)).l();
        if (l10 != null && z10) {
            M(uri);
        }
        return l10;
    }

    @Override // wd.k
    public void o(k.b bVar) {
        this.f53587p.remove(bVar);
    }

    @Override // wd.k
    public void stop() {
        this.f53594w = null;
        this.f53595x = null;
        this.f53593v = null;
        this.f53597z = -9223372036854775807L;
        this.f53590s.l();
        this.f53590s = null;
        for (C0717c c0717c : this.f53586o.values()) {
            c0717c.w();
        }
        this.f53591t.removeCallbacksAndMessages(null);
        this.f53591t = null;
        this.f53586o.clear();
    }

    public c(vd.g gVar, com.google.android.exoplayer2.upstream.i iVar, j jVar, double d10) {
        this.f53583d = gVar;
        this.f53584e = jVar;
        this.f53585i = iVar;
        this.f53588q = d10;
        this.f53587p = new CopyOnWriteArrayList();
        this.f53586o = new HashMap();
        this.f53597z = -9223372036854775807L;
    }
}
