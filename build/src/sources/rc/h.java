package rc;

import android.media.ResourceBusyException;
import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.os.SystemClock;
import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import com.google.android.exoplayer2.Format;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import ji.q0;
import ji.t0;
import mc.t1;
import ne.w0;
import rc.b0;
import rc.g;
import rc.h;
import rc.m;
import rc.n;
import rc.u;
import rc.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h implements v {

    /* renamed from: c  reason: collision with root package name */
    private final UUID f48157c;

    /* renamed from: d  reason: collision with root package name */
    private final b0.c f48158d;

    /* renamed from: e  reason: collision with root package name */
    private final j0 f48159e;

    /* renamed from: f  reason: collision with root package name */
    private final HashMap f48160f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f48161g;

    /* renamed from: h  reason: collision with root package name */
    private final int[] f48162h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f48163i;

    /* renamed from: j  reason: collision with root package name */
    private final g f48164j;

    /* renamed from: k  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.h f48165k;

    /* renamed from: l  reason: collision with root package name */
    private final C0585h f48166l;

    /* renamed from: m  reason: collision with root package name */
    private final long f48167m;

    /* renamed from: n  reason: collision with root package name */
    private final List f48168n;

    /* renamed from: o  reason: collision with root package name */
    private final Set f48169o;

    /* renamed from: p  reason: collision with root package name */
    private final Set f48170p;

    /* renamed from: q  reason: collision with root package name */
    private int f48171q;

    /* renamed from: r  reason: collision with root package name */
    private b0 f48172r;

    /* renamed from: s  reason: collision with root package name */
    private rc.g f48173s;

    /* renamed from: t  reason: collision with root package name */
    private rc.g f48174t;

    /* renamed from: u  reason: collision with root package name */
    private Looper f48175u;

    /* renamed from: v  reason: collision with root package name */
    private Handler f48176v;

    /* renamed from: w  reason: collision with root package name */
    private int f48177w;

    /* renamed from: x  reason: collision with root package name */
    private byte[] f48178x;

    /* renamed from: y  reason: collision with root package name */
    private t1 f48179y;

    /* renamed from: z  reason: collision with root package name */
    volatile d f48180z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: d  reason: collision with root package name */
        private boolean f48184d;

        /* renamed from: f  reason: collision with root package name */
        private boolean f48186f;

        /* renamed from: a  reason: collision with root package name */
        private final HashMap f48181a = new HashMap();

        /* renamed from: b  reason: collision with root package name */
        private UUID f48182b = lc.d.f37056d;

        /* renamed from: c  reason: collision with root package name */
        private b0.c f48183c = g0.f48153d;

        /* renamed from: g  reason: collision with root package name */
        private com.google.android.exoplayer2.upstream.h f48187g = new com.google.android.exoplayer2.upstream.f();

        /* renamed from: e  reason: collision with root package name */
        private int[] f48185e = new int[0];

        /* renamed from: h  reason: collision with root package name */
        private long f48188h = LogThrottleSingleton.RATE_LIMIT_FIVE_MINUTES;

        public h a(j0 j0Var) {
            return new h(this.f48182b, this.f48183c, j0Var, this.f48181a, this.f48184d, this.f48185e, this.f48186f, this.f48187g, this.f48188h);
        }

        public b b(boolean z10) {
            this.f48184d = z10;
            return this;
        }

        public b c(boolean z10) {
            this.f48186f = z10;
            return this;
        }

        public b d(int... iArr) {
            for (int i10 : iArr) {
                boolean z10 = true;
                if (i10 != 2 && i10 != 1) {
                    z10 = false;
                }
                ne.a.a(z10);
            }
            this.f48185e = (int[]) iArr.clone();
            return this;
        }

        public b e(UUID uuid, b0.c cVar) {
            this.f48182b = (UUID) ne.a.e(uuid);
            this.f48183c = (b0.c) ne.a.e(cVar);
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private class c implements b0.b {
        private c() {
        }

        @Override // rc.b0.b
        public void a(b0 b0Var, byte[] bArr, int i10, int i11, byte[] bArr2) {
            ((d) ne.a.e(h.this.f48180z)).obtainMessage(i10, bArr).sendToTarget();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class d extends Handler {
        public d(Looper looper) {
            super(looper);
        }

        @Override // android.os.Handler
        public void handleMessage(Message message) {
            byte[] bArr = (byte[]) message.obj;
            if (bArr != null) {
                for (rc.g gVar : h.this.f48168n) {
                    if (gVar.t(bArr)) {
                        gVar.z(message.what);
                        return;
                    }
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e extends Exception {
        private e(UUID uuid) {
            super("Media does not support uuid: " + uuid);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class f implements v.b {

        /* renamed from: b  reason: collision with root package name */
        private final u.a f48191b;

        /* renamed from: c  reason: collision with root package name */
        private n f48192c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f48193d;

        public f(u.a aVar) {
            this.f48191b = aVar;
        }

        public static /* synthetic */ void b(f fVar, Format format) {
            if (h.this.f48171q != 0 && !fVar.f48193d) {
                h hVar = h.this;
                fVar.f48192c = hVar.t((Looper) ne.a.e(hVar.f48175u), fVar.f48191b, format, false);
                h.this.f48169o.add(fVar);
            }
        }

        public static /* synthetic */ void c(f fVar) {
            if (fVar.f48193d) {
                return;
            }
            n nVar = fVar.f48192c;
            if (nVar != null) {
                nVar.b(fVar.f48191b);
            }
            h.this.f48169o.remove(fVar);
            fVar.f48193d = true;
        }

        public void d(final Format format) {
            ((Handler) ne.a.e(h.this.f48176v)).post(new Runnable() { // from class: rc.i
                @Override // java.lang.Runnable
                public final void run() {
                    h.f.b(h.f.this, format);
                }
            });
        }

        @Override // rc.v.b
        public void release() {
            w0.T0((Handler) ne.a.e(h.this.f48176v), new Runnable() { // from class: rc.j
                @Override // java.lang.Runnable
                public final void run() {
                    h.f.c(h.f.this);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class g implements g.a {

        /* renamed from: a  reason: collision with root package name */
        private final Set f48195a = new HashSet();

        /* renamed from: b  reason: collision with root package name */
        private rc.g f48196b;

        public g() {
        }

        @Override // rc.g.a
        public void a(Exception exc, boolean z10) {
            this.f48196b = null;
            ji.s m10 = ji.s.m(this.f48195a);
            this.f48195a.clear();
            t0 it = m10.iterator();
            while (it.hasNext()) {
                ((rc.g) it.next()).B(exc, z10);
            }
        }

        @Override // rc.g.a
        public void b(rc.g gVar) {
            this.f48195a.add(gVar);
            if (this.f48196b != null) {
                return;
            }
            this.f48196b = gVar;
            gVar.F();
        }

        @Override // rc.g.a
        public void c() {
            this.f48196b = null;
            ji.s m10 = ji.s.m(this.f48195a);
            this.f48195a.clear();
            t0 it = m10.iterator();
            while (it.hasNext()) {
                ((rc.g) it.next()).A();
            }
        }

        public void d(rc.g gVar) {
            this.f48195a.remove(gVar);
            if (this.f48196b == gVar) {
                this.f48196b = null;
                if (!this.f48195a.isEmpty()) {
                    rc.g gVar2 = (rc.g) this.f48195a.iterator().next();
                    this.f48196b = gVar2;
                    gVar2.F();
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: rc.h$h  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class C0585h implements g.b {
        private C0585h() {
        }

        @Override // rc.g.b
        public void a(rc.g gVar, int i10) {
            if (h.this.f48167m != -9223372036854775807L) {
                h.this.f48170p.remove(gVar);
                ((Handler) ne.a.e(h.this.f48176v)).removeCallbacksAndMessages(gVar);
            }
        }

        @Override // rc.g.b
        public void b(final rc.g gVar, int i10) {
            if (i10 == 1 && h.this.f48171q > 0 && h.this.f48167m != -9223372036854775807L) {
                h.this.f48170p.add(gVar);
                ((Handler) ne.a.e(h.this.f48176v)).postAtTime(new Runnable() { // from class: rc.k
                    @Override // java.lang.Runnable
                    public final void run() {
                        g.this.b(null);
                    }
                }, gVar, SystemClock.uptimeMillis() + h.this.f48167m);
            } else if (i10 == 0) {
                h.this.f48168n.remove(gVar);
                if (h.this.f48173s == gVar) {
                    h.this.f48173s = null;
                }
                if (h.this.f48174t == gVar) {
                    h.this.f48174t = null;
                }
                h.this.f48164j.d(gVar);
                if (h.this.f48167m != -9223372036854775807L) {
                    ((Handler) ne.a.e(h.this.f48176v)).removeCallbacksAndMessages(gVar);
                    h.this.f48170p.remove(gVar);
                }
            }
            h.this.C();
        }
    }

    private n A(int i10, boolean z10) {
        b0 b0Var = (b0) ne.a.e(this.f48172r);
        if ((b0Var.g() == 2 && c0.f48113d) || w0.I0(this.f48162h, i10) == -1 || b0Var.g() == 1) {
            return null;
        }
        rc.g gVar = this.f48173s;
        if (gVar == null) {
            rc.g x10 = x(ji.s.r(), true, null, z10);
            this.f48168n.add(x10);
            this.f48173s = x10;
        } else {
            gVar.e(null);
        }
        return this.f48173s;
    }

    private void B(Looper looper) {
        if (this.f48180z == null) {
            this.f48180z = new d(looper);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void C() {
        if (this.f48172r != null && this.f48171q == 0 && this.f48168n.isEmpty() && this.f48169o.isEmpty()) {
            ((b0) ne.a.e(this.f48172r)).release();
            this.f48172r = null;
        }
    }

    private void D() {
        t0 q10 = ji.u.m(this.f48170p).q();
        while (q10.hasNext()) {
            ((n) q10.next()).b(null);
        }
    }

    private void E() {
        t0 q10 = ji.u.m(this.f48169o).q();
        while (q10.hasNext()) {
            ((f) q10.next()).release();
        }
    }

    private void G(n nVar, u.a aVar) {
        nVar.b(aVar);
        if (this.f48167m != -9223372036854775807L) {
            nVar.b(null);
        }
    }

    private void H(boolean z10) {
        if (z10 && this.f48175u == null) {
            ne.y.j("DefaultDrmSessionMgr", "DefaultDrmSessionManager accessed before setPlayer(), possibly on the wrong thread.", new IllegalStateException());
        } else if (Thread.currentThread() != ((Looper) ne.a.e(this.f48175u)).getThread()) {
            ne.y.j("DefaultDrmSessionMgr", "DefaultDrmSessionManager accessed on the wrong thread.\nCurrent thread: " + Thread.currentThread().getName() + "\nExpected thread: " + this.f48175u.getThread().getName(), new IllegalStateException());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public n t(Looper looper, u.a aVar, Format format, boolean z10) {
        List list;
        B(looper);
        m mVar = format.f12709z;
        if (mVar == null) {
            return A(ne.c0.k(format.f12706w), z10);
        }
        rc.g gVar = null;
        if (this.f48178x == null) {
            list = y((m) ne.a.e(mVar), this.f48157c, false);
            if (list.isEmpty()) {
                e eVar = new e(this.f48157c);
                ne.y.d("DefaultDrmSessionMgr", "DRM error", eVar);
                if (aVar != null) {
                    aVar.l(eVar);
                }
                return new a0(new n.a(eVar, 6003));
            }
        } else {
            list = null;
        }
        if (!this.f48161g) {
            gVar = this.f48174t;
        } else {
            Iterator it = this.f48168n.iterator();
            while (true) {
                if (!it.hasNext()) {
                    break;
                }
                rc.g gVar2 = (rc.g) it.next();
                if (w0.c(gVar2.f48120a, list)) {
                    gVar = gVar2;
                    break;
                }
            }
        }
        if (gVar == null) {
            rc.g x10 = x(list, false, aVar, z10);
            if (!this.f48161g) {
                this.f48174t = x10;
            }
            this.f48168n.add(x10);
            return x10;
        }
        gVar.e(aVar);
        return gVar;
    }

    private static boolean u(n nVar) {
        if (nVar.getState() == 1) {
            if (w0.f40279a < 19 || (((n.a) ne.a.e(nVar.getError())).getCause() instanceof ResourceBusyException)) {
                return true;
            }
            return false;
        }
        return false;
    }

    private boolean v(m mVar) {
        if (this.f48178x != null) {
            return true;
        }
        if (y(mVar, this.f48157c, true).isEmpty()) {
            if (mVar.f48220o != 1 || !mVar.k(0).d(lc.d.f37054b)) {
                return false;
            }
            ne.y.i("DefaultDrmSessionMgr", "DrmInitData only contains common PSSH SchemeData. Assuming support for: " + this.f48157c);
        }
        String str = mVar.f48219i;
        if (str == null || "cenc".equals(str)) {
            return true;
        }
        if ("cbcs".equals(str)) {
            if (w0.f40279a >= 25) {
                return true;
            }
            return false;
        } else if (!"cbc1".equals(str) && !"cens".equals(str)) {
            return true;
        } else {
            return false;
        }
    }

    private rc.g w(List list, boolean z10, u.a aVar) {
        ne.a.e(this.f48172r);
        rc.g gVar = new rc.g(this.f48157c, this.f48172r, this.f48164j, this.f48166l, list, this.f48177w, this.f48163i | z10, z10, this.f48178x, this.f48160f, this.f48159e, (Looper) ne.a.e(this.f48175u), this.f48165k, (t1) ne.a.e(this.f48179y));
        gVar.e(aVar);
        if (this.f48167m != -9223372036854775807L) {
            gVar.e(null);
        }
        return gVar;
    }

    private rc.g x(List list, boolean z10, u.a aVar, boolean z11) {
        rc.g w10 = w(list, z10, aVar);
        if (u(w10) && !this.f48170p.isEmpty()) {
            D();
            G(w10, aVar);
            w10 = w(list, z10, aVar);
        }
        if (u(w10) && z11 && !this.f48169o.isEmpty()) {
            E();
            if (!this.f48170p.isEmpty()) {
                D();
            }
            G(w10, aVar);
            return w(list, z10, aVar);
        }
        return w10;
    }

    private static List y(m mVar, UUID uuid, boolean z10) {
        ArrayList arrayList = new ArrayList(mVar.f48220o);
        for (int i10 = 0; i10 < mVar.f48220o; i10++) {
            m.b k10 = mVar.k(i10);
            if ((k10.d(uuid) || (lc.d.f37055c.equals(uuid) && k10.d(lc.d.f37054b))) && (k10.f48225p != null || z10)) {
                arrayList.add(k10);
            }
        }
        return arrayList;
    }

    private synchronized void z(Looper looper) {
        boolean z10;
        try {
            Looper looper2 = this.f48175u;
            if (looper2 == null) {
                this.f48175u = looper;
                this.f48176v = new Handler(looper);
            } else {
                if (looper2 == looper) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                ne.a.g(z10);
                ne.a.e(this.f48176v);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public void F(int i10, byte[] bArr) {
        ne.a.g(this.f48168n.isEmpty());
        if (i10 == 1 || i10 == 3) {
            ne.a.e(bArr);
        }
        this.f48177w = i10;
        this.f48178x = bArr;
    }

    @Override // rc.v
    public void a(Looper looper, t1 t1Var) {
        z(looper);
        this.f48179y = t1Var;
    }

    @Override // rc.v
    public int b(Format format) {
        H(false);
        int g10 = ((b0) ne.a.e(this.f48172r)).g();
        m mVar = format.f12709z;
        if (mVar == null) {
            if (w0.I0(this.f48162h, ne.c0.k(format.f12706w)) == -1) {
                return 0;
            }
        } else if (!v(mVar)) {
            return 1;
        }
        return g10;
    }

    @Override // rc.v
    public n c(u.a aVar, Format format) {
        boolean z10 = false;
        H(false);
        if (this.f48171q > 0) {
            z10 = true;
        }
        ne.a.g(z10);
        ne.a.i(this.f48175u);
        return t(this.f48175u, aVar, format, true);
    }

    @Override // rc.v
    public final void d() {
        H(true);
        int i10 = this.f48171q;
        this.f48171q = i10 + 1;
        if (i10 == 0) {
            if (this.f48172r == null) {
                b0 a10 = this.f48158d.a(this.f48157c);
                this.f48172r = a10;
                a10.f(new c());
            } else if (this.f48167m != -9223372036854775807L) {
                for (int i11 = 0; i11 < this.f48168n.size(); i11++) {
                    ((rc.g) this.f48168n.get(i11)).e(null);
                }
            }
        }
    }

    @Override // rc.v
    public v.b e(u.a aVar, Format format) {
        boolean z10;
        if (this.f48171q > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        ne.a.i(this.f48175u);
        f fVar = new f(aVar);
        fVar.d(format);
        return fVar;
    }

    @Override // rc.v
    public final void release() {
        H(true);
        int i10 = this.f48171q - 1;
        this.f48171q = i10;
        if (i10 != 0) {
            return;
        }
        if (this.f48167m != -9223372036854775807L) {
            ArrayList arrayList = new ArrayList(this.f48168n);
            for (int i11 = 0; i11 < arrayList.size(); i11++) {
                ((rc.g) arrayList.get(i11)).b(null);
            }
        }
        E();
        C();
    }

    private h(UUID uuid, b0.c cVar, j0 j0Var, HashMap hashMap, boolean z10, int[] iArr, boolean z11, com.google.android.exoplayer2.upstream.h hVar, long j10) {
        ne.a.e(uuid);
        ne.a.b(!lc.d.f37054b.equals(uuid), "Use C.CLEARKEY_UUID instead");
        this.f48157c = uuid;
        this.f48158d = cVar;
        this.f48159e = j0Var;
        this.f48160f = hashMap;
        this.f48161g = z10;
        this.f48162h = iArr;
        this.f48163i = z11;
        this.f48165k = hVar;
        this.f48164j = new g();
        this.f48166l = new C0585h();
        this.f48177w = 0;
        this.f48168n = new ArrayList();
        this.f48169o = q0.h();
        this.f48170p = q0.h();
        this.f48167m = j10;
    }
}
