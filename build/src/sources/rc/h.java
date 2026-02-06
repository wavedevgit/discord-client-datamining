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
import mc.t1;
import ne.w0;
import ni.q0;
import ni.t0;
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
    private final UUID f48775c;

    /* renamed from: d  reason: collision with root package name */
    private final b0.c f48776d;

    /* renamed from: e  reason: collision with root package name */
    private final j0 f48777e;

    /* renamed from: f  reason: collision with root package name */
    private final HashMap f48778f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f48779g;

    /* renamed from: h  reason: collision with root package name */
    private final int[] f48780h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f48781i;

    /* renamed from: j  reason: collision with root package name */
    private final g f48782j;

    /* renamed from: k  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f48783k;

    /* renamed from: l  reason: collision with root package name */
    private final C0619h f48784l;

    /* renamed from: m  reason: collision with root package name */
    private final long f48785m;

    /* renamed from: n  reason: collision with root package name */
    private final List f48786n;

    /* renamed from: o  reason: collision with root package name */
    private final Set f48787o;

    /* renamed from: p  reason: collision with root package name */
    private final Set f48788p;

    /* renamed from: q  reason: collision with root package name */
    private int f48789q;

    /* renamed from: r  reason: collision with root package name */
    private b0 f48790r;

    /* renamed from: s  reason: collision with root package name */
    private rc.g f48791s;

    /* renamed from: t  reason: collision with root package name */
    private rc.g f48792t;

    /* renamed from: u  reason: collision with root package name */
    private Looper f48793u;

    /* renamed from: v  reason: collision with root package name */
    private Handler f48794v;

    /* renamed from: w  reason: collision with root package name */
    private int f48795w;

    /* renamed from: x  reason: collision with root package name */
    private byte[] f48796x;

    /* renamed from: y  reason: collision with root package name */
    private t1 f48797y;

    /* renamed from: z  reason: collision with root package name */
    volatile d f48798z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: d  reason: collision with root package name */
        private boolean f48802d;

        /* renamed from: f  reason: collision with root package name */
        private boolean f48804f;

        /* renamed from: a  reason: collision with root package name */
        private final HashMap f48799a = new HashMap();

        /* renamed from: b  reason: collision with root package name */
        private UUID f48800b = lc.d.f35975d;

        /* renamed from: c  reason: collision with root package name */
        private b0.c f48801c = g0.f48771d;

        /* renamed from: g  reason: collision with root package name */
        private com.google.android.exoplayer2.upstream.i f48805g = new com.google.android.exoplayer2.upstream.g();

        /* renamed from: e  reason: collision with root package name */
        private int[] f48803e = new int[0];

        /* renamed from: h  reason: collision with root package name */
        private long f48806h = LogThrottleSingleton.RATE_LIMIT_FIVE_MINUTES;

        public h a(j0 j0Var) {
            return new h(this.f48800b, this.f48801c, j0Var, this.f48799a, this.f48802d, this.f48803e, this.f48804f, this.f48805g, this.f48806h);
        }

        public b b(boolean z10) {
            this.f48802d = z10;
            return this;
        }

        public b c(boolean z10) {
            this.f48804f = z10;
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
            this.f48803e = (int[]) iArr.clone();
            return this;
        }

        public b e(UUID uuid, b0.c cVar) {
            this.f48800b = (UUID) ne.a.e(uuid);
            this.f48801c = (b0.c) ne.a.e(cVar);
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private class c implements b0.b {
        private c() {
        }

        @Override // rc.b0.b
        public void a(b0 b0Var, byte[] bArr, int i10, int i11, byte[] bArr2) {
            ((d) ne.a.e(h.this.f48798z)).obtainMessage(i10, bArr).sendToTarget();
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
                for (rc.g gVar : h.this.f48786n) {
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
        private final u.a f48809b;

        /* renamed from: c  reason: collision with root package name */
        private n f48810c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f48811d;

        public f(u.a aVar) {
            this.f48809b = aVar;
        }

        public static /* synthetic */ void b(f fVar, Format format) {
            if (h.this.f48789q != 0 && !fVar.f48811d) {
                h hVar = h.this;
                fVar.f48810c = hVar.t((Looper) ne.a.e(hVar.f48793u), fVar.f48809b, format, false);
                h.this.f48787o.add(fVar);
            }
        }

        public static /* synthetic */ void c(f fVar) {
            if (fVar.f48811d) {
                return;
            }
            n nVar = fVar.f48810c;
            if (nVar != null) {
                nVar.b(fVar.f48809b);
            }
            h.this.f48787o.remove(fVar);
            fVar.f48811d = true;
        }

        public void d(final Format format) {
            ((Handler) ne.a.e(h.this.f48794v)).post(new Runnable() { // from class: rc.i
                @Override // java.lang.Runnable
                public final void run() {
                    h.f.b(h.f.this, format);
                }
            });
        }

        @Override // rc.v.b
        public void release() {
            w0.T0((Handler) ne.a.e(h.this.f48794v), new Runnable() { // from class: rc.j
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
        private final Set f48813a = new HashSet();

        /* renamed from: b  reason: collision with root package name */
        private rc.g f48814b;

        public g() {
        }

        @Override // rc.g.a
        public void a(Exception exc, boolean z10) {
            this.f48814b = null;
            ni.s o10 = ni.s.o(this.f48813a);
            this.f48813a.clear();
            t0 it = o10.iterator();
            while (it.hasNext()) {
                ((rc.g) it.next()).B(exc, z10);
            }
        }

        @Override // rc.g.a
        public void b(rc.g gVar) {
            this.f48813a.add(gVar);
            if (this.f48814b != null) {
                return;
            }
            this.f48814b = gVar;
            gVar.F();
        }

        @Override // rc.g.a
        public void c() {
            this.f48814b = null;
            ni.s o10 = ni.s.o(this.f48813a);
            this.f48813a.clear();
            t0 it = o10.iterator();
            while (it.hasNext()) {
                ((rc.g) it.next()).A();
            }
        }

        public void d(rc.g gVar) {
            this.f48813a.remove(gVar);
            if (this.f48814b == gVar) {
                this.f48814b = null;
                if (!this.f48813a.isEmpty()) {
                    rc.g gVar2 = (rc.g) this.f48813a.iterator().next();
                    this.f48814b = gVar2;
                    gVar2.F();
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: rc.h$h  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class C0619h implements g.b {
        private C0619h() {
        }

        @Override // rc.g.b
        public void a(rc.g gVar, int i10) {
            if (h.this.f48785m != -9223372036854775807L) {
                h.this.f48788p.remove(gVar);
                ((Handler) ne.a.e(h.this.f48794v)).removeCallbacksAndMessages(gVar);
            }
        }

        @Override // rc.g.b
        public void b(final rc.g gVar, int i10) {
            if (i10 == 1 && h.this.f48789q > 0 && h.this.f48785m != -9223372036854775807L) {
                h.this.f48788p.add(gVar);
                ((Handler) ne.a.e(h.this.f48794v)).postAtTime(new Runnable() { // from class: rc.k
                    @Override // java.lang.Runnable
                    public final void run() {
                        g.this.b(null);
                    }
                }, gVar, SystemClock.uptimeMillis() + h.this.f48785m);
            } else if (i10 == 0) {
                h.this.f48786n.remove(gVar);
                if (h.this.f48791s == gVar) {
                    h.this.f48791s = null;
                }
                if (h.this.f48792t == gVar) {
                    h.this.f48792t = null;
                }
                h.this.f48782j.d(gVar);
                if (h.this.f48785m != -9223372036854775807L) {
                    ((Handler) ne.a.e(h.this.f48794v)).removeCallbacksAndMessages(gVar);
                    h.this.f48788p.remove(gVar);
                }
            }
            h.this.C();
        }
    }

    private n A(int i10, boolean z10) {
        b0 b0Var = (b0) ne.a.e(this.f48790r);
        if ((b0Var.g() == 2 && c0.f48731d) || w0.I0(this.f48780h, i10) == -1 || b0Var.g() == 1) {
            return null;
        }
        rc.g gVar = this.f48791s;
        if (gVar == null) {
            rc.g x10 = x(ni.s.t(), true, null, z10);
            this.f48786n.add(x10);
            this.f48791s = x10;
        } else {
            gVar.e(null);
        }
        return this.f48791s;
    }

    private void B(Looper looper) {
        if (this.f48798z == null) {
            this.f48798z = new d(looper);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void C() {
        if (this.f48790r != null && this.f48789q == 0 && this.f48786n.isEmpty() && this.f48787o.isEmpty()) {
            ((b0) ne.a.e(this.f48790r)).release();
            this.f48790r = null;
        }
    }

    private void D() {
        t0 s10 = ni.u.o(this.f48788p).s();
        while (s10.hasNext()) {
            ((n) s10.next()).b(null);
        }
    }

    private void E() {
        t0 s10 = ni.u.o(this.f48787o).s();
        while (s10.hasNext()) {
            ((f) s10.next()).release();
        }
    }

    private void G(n nVar, u.a aVar) {
        nVar.b(aVar);
        if (this.f48785m != -9223372036854775807L) {
            nVar.b(null);
        }
    }

    private void H(boolean z10) {
        if (z10 && this.f48793u == null) {
            ne.y.j("DefaultDrmSessionMgr", "DefaultDrmSessionManager accessed before setPlayer(), possibly on the wrong thread.", new IllegalStateException());
        } else if (Thread.currentThread() != ((Looper) ne.a.e(this.f48793u)).getThread()) {
            ne.y.j("DefaultDrmSessionMgr", "DefaultDrmSessionManager accessed on the wrong thread.\nCurrent thread: " + Thread.currentThread().getName() + "\nExpected thread: " + this.f48793u.getThread().getName(), new IllegalStateException());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public n t(Looper looper, u.a aVar, Format format, boolean z10) {
        List list;
        B(looper);
        m mVar = format.f11590z;
        if (mVar == null) {
            return A(ne.c0.k(format.f11587w), z10);
        }
        rc.g gVar = null;
        if (this.f48796x == null) {
            list = y((m) ne.a.e(mVar), this.f48775c, false);
            if (list.isEmpty()) {
                e eVar = new e(this.f48775c);
                ne.y.d("DefaultDrmSessionMgr", "DRM error", eVar);
                if (aVar != null) {
                    aVar.l(eVar);
                }
                return new a0(new n.a(eVar, 6003));
            }
        } else {
            list = null;
        }
        if (!this.f48779g) {
            gVar = this.f48792t;
        } else {
            Iterator it = this.f48786n.iterator();
            while (true) {
                if (!it.hasNext()) {
                    break;
                }
                rc.g gVar2 = (rc.g) it.next();
                if (w0.c(gVar2.f48738a, list)) {
                    gVar = gVar2;
                    break;
                }
            }
        }
        if (gVar == null) {
            rc.g x10 = x(list, false, aVar, z10);
            if (!this.f48779g) {
                this.f48792t = x10;
            }
            this.f48786n.add(x10);
            return x10;
        }
        gVar.e(aVar);
        return gVar;
    }

    private static boolean u(n nVar) {
        if (nVar.getState() == 1) {
            if (w0.f39012a < 19 || (((n.a) ne.a.e(nVar.getError())).getCause() instanceof ResourceBusyException)) {
                return true;
            }
            return false;
        }
        return false;
    }

    private boolean v(m mVar) {
        if (this.f48796x != null) {
            return true;
        }
        if (y(mVar, this.f48775c, true).isEmpty()) {
            if (mVar.f48838o != 1 || !mVar.o(0).d(lc.d.f35973b)) {
                return false;
            }
            ne.y.i("DefaultDrmSessionMgr", "DrmInitData only contains common PSSH SchemeData. Assuming support for: " + this.f48775c);
        }
        String str = mVar.f48837i;
        if (str == null || "cenc".equals(str)) {
            return true;
        }
        if ("cbcs".equals(str)) {
            if (w0.f39012a >= 25) {
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
        ne.a.e(this.f48790r);
        rc.g gVar = new rc.g(this.f48775c, this.f48790r, this.f48782j, this.f48784l, list, this.f48795w, this.f48781i | z10, z10, this.f48796x, this.f48778f, this.f48777e, (Looper) ne.a.e(this.f48793u), this.f48783k, (t1) ne.a.e(this.f48797y));
        gVar.e(aVar);
        if (this.f48785m != -9223372036854775807L) {
            gVar.e(null);
        }
        return gVar;
    }

    private rc.g x(List list, boolean z10, u.a aVar, boolean z11) {
        rc.g w10 = w(list, z10, aVar);
        if (u(w10) && !this.f48788p.isEmpty()) {
            D();
            G(w10, aVar);
            w10 = w(list, z10, aVar);
        }
        if (u(w10) && z11 && !this.f48787o.isEmpty()) {
            E();
            if (!this.f48788p.isEmpty()) {
                D();
            }
            G(w10, aVar);
            return w(list, z10, aVar);
        }
        return w10;
    }

    private static List y(m mVar, UUID uuid, boolean z10) {
        ArrayList arrayList = new ArrayList(mVar.f48838o);
        for (int i10 = 0; i10 < mVar.f48838o; i10++) {
            m.b o10 = mVar.o(i10);
            if ((o10.d(uuid) || (lc.d.f35974c.equals(uuid) && o10.d(lc.d.f35973b))) && (o10.f48843p != null || z10)) {
                arrayList.add(o10);
            }
        }
        return arrayList;
    }

    private synchronized void z(Looper looper) {
        boolean z10;
        try {
            Looper looper2 = this.f48793u;
            if (looper2 == null) {
                this.f48793u = looper;
                this.f48794v = new Handler(looper);
            } else {
                if (looper2 == looper) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                ne.a.g(z10);
                ne.a.e(this.f48794v);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public void F(int i10, byte[] bArr) {
        ne.a.g(this.f48786n.isEmpty());
        if (i10 == 1 || i10 == 3) {
            ne.a.e(bArr);
        }
        this.f48795w = i10;
        this.f48796x = bArr;
    }

    @Override // rc.v
    public void a(Looper looper, t1 t1Var) {
        z(looper);
        this.f48797y = t1Var;
    }

    @Override // rc.v
    public int b(Format format) {
        H(false);
        int g10 = ((b0) ne.a.e(this.f48790r)).g();
        m mVar = format.f11590z;
        if (mVar == null) {
            if (w0.I0(this.f48780h, ne.c0.k(format.f11587w)) == -1) {
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
        if (this.f48789q > 0) {
            z10 = true;
        }
        ne.a.g(z10);
        ne.a.i(this.f48793u);
        return t(this.f48793u, aVar, format, true);
    }

    @Override // rc.v
    public final void d() {
        H(true);
        int i10 = this.f48789q;
        this.f48789q = i10 + 1;
        if (i10 == 0) {
            if (this.f48790r == null) {
                b0 a10 = this.f48776d.a(this.f48775c);
                this.f48790r = a10;
                a10.f(new c());
            } else if (this.f48785m != -9223372036854775807L) {
                for (int i11 = 0; i11 < this.f48786n.size(); i11++) {
                    ((rc.g) this.f48786n.get(i11)).e(null);
                }
            }
        }
    }

    @Override // rc.v
    public v.b e(u.a aVar, Format format) {
        boolean z10;
        if (this.f48789q > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        ne.a.i(this.f48793u);
        f fVar = new f(aVar);
        fVar.d(format);
        return fVar;
    }

    @Override // rc.v
    public final void release() {
        H(true);
        int i10 = this.f48789q - 1;
        this.f48789q = i10;
        if (i10 != 0) {
            return;
        }
        if (this.f48785m != -9223372036854775807L) {
            ArrayList arrayList = new ArrayList(this.f48786n);
            for (int i11 = 0; i11 < arrayList.size(); i11++) {
                ((rc.g) arrayList.get(i11)).b(null);
            }
        }
        E();
        C();
    }

    private h(UUID uuid, b0.c cVar, j0 j0Var, HashMap hashMap, boolean z10, int[] iArr, boolean z11, com.google.android.exoplayer2.upstream.i iVar, long j10) {
        ne.a.e(uuid);
        ne.a.b(!lc.d.f35973b.equals(uuid), "Use C.CLEARKEY_UUID instead");
        this.f48775c = uuid;
        this.f48776d = cVar;
        this.f48777e = j0Var;
        this.f48778f = hashMap;
        this.f48779g = z10;
        this.f48780h = iArr;
        this.f48781i = z11;
        this.f48783k = iVar;
        this.f48782j = new g();
        this.f48784l = new C0619h();
        this.f48795w = 0;
        this.f48786n = new ArrayList();
        this.f48787o = q0.h();
        this.f48788p = q0.h();
        this.f48785m = j10;
    }
}
