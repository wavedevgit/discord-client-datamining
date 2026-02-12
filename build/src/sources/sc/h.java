package sc;

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
import nc.t1;
import oe.w0;
import qi.q0;
import qi.t0;
import sc.b0;
import sc.g;
import sc.h;
import sc.m;
import sc.n;
import sc.u;
import sc.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h implements v {

    /* renamed from: c  reason: collision with root package name */
    private final UUID f47965c;

    /* renamed from: d  reason: collision with root package name */
    private final b0.c f47966d;

    /* renamed from: e  reason: collision with root package name */
    private final j0 f47967e;

    /* renamed from: f  reason: collision with root package name */
    private final HashMap f47968f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f47969g;

    /* renamed from: h  reason: collision with root package name */
    private final int[] f47970h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f47971i;

    /* renamed from: j  reason: collision with root package name */
    private final g f47972j;

    /* renamed from: k  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f47973k;

    /* renamed from: l  reason: collision with root package name */
    private final C0650h f47974l;

    /* renamed from: m  reason: collision with root package name */
    private final long f47975m;

    /* renamed from: n  reason: collision with root package name */
    private final List f47976n;

    /* renamed from: o  reason: collision with root package name */
    private final Set f47977o;

    /* renamed from: p  reason: collision with root package name */
    private final Set f47978p;

    /* renamed from: q  reason: collision with root package name */
    private int f47979q;

    /* renamed from: r  reason: collision with root package name */
    private b0 f47980r;

    /* renamed from: s  reason: collision with root package name */
    private sc.g f47981s;

    /* renamed from: t  reason: collision with root package name */
    private sc.g f47982t;

    /* renamed from: u  reason: collision with root package name */
    private Looper f47983u;

    /* renamed from: v  reason: collision with root package name */
    private Handler f47984v;

    /* renamed from: w  reason: collision with root package name */
    private int f47985w;

    /* renamed from: x  reason: collision with root package name */
    private byte[] f47986x;

    /* renamed from: y  reason: collision with root package name */
    private t1 f47987y;

    /* renamed from: z  reason: collision with root package name */
    volatile d f47988z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: d  reason: collision with root package name */
        private boolean f47992d;

        /* renamed from: f  reason: collision with root package name */
        private boolean f47994f;

        /* renamed from: a  reason: collision with root package name */
        private final HashMap f47989a = new HashMap();

        /* renamed from: b  reason: collision with root package name */
        private UUID f47990b = mc.d.f36229d;

        /* renamed from: c  reason: collision with root package name */
        private b0.c f47991c = g0.f47961d;

        /* renamed from: g  reason: collision with root package name */
        private com.google.android.exoplayer2.upstream.i f47995g = new com.google.android.exoplayer2.upstream.g();

        /* renamed from: e  reason: collision with root package name */
        private int[] f47993e = new int[0];

        /* renamed from: h  reason: collision with root package name */
        private long f47996h = LogThrottleSingleton.RATE_LIMIT_FIVE_MINUTES;

        public h a(j0 j0Var) {
            return new h(this.f47990b, this.f47991c, j0Var, this.f47989a, this.f47992d, this.f47993e, this.f47994f, this.f47995g, this.f47996h);
        }

        public b b(boolean z10) {
            this.f47992d = z10;
            return this;
        }

        public b c(boolean z10) {
            this.f47994f = z10;
            return this;
        }

        public b d(int... iArr) {
            for (int i10 : iArr) {
                boolean z10 = true;
                if (i10 != 2 && i10 != 1) {
                    z10 = false;
                }
                oe.a.a(z10);
            }
            this.f47993e = (int[]) iArr.clone();
            return this;
        }

        public b e(UUID uuid, b0.c cVar) {
            this.f47990b = (UUID) oe.a.e(uuid);
            this.f47991c = (b0.c) oe.a.e(cVar);
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private class c implements b0.b {
        private c() {
        }

        @Override // sc.b0.b
        public void a(b0 b0Var, byte[] bArr, int i10, int i11, byte[] bArr2) {
            ((d) oe.a.e(h.this.f47988z)).obtainMessage(i10, bArr).sendToTarget();
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
                for (sc.g gVar : h.this.f47976n) {
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
        private final u.a f47999b;

        /* renamed from: c  reason: collision with root package name */
        private n f48000c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f48001d;

        public f(u.a aVar) {
            this.f47999b = aVar;
        }

        public static /* synthetic */ void b(f fVar, Format format) {
            if (h.this.f47979q != 0 && !fVar.f48001d) {
                h hVar = h.this;
                fVar.f48000c = hVar.t((Looper) oe.a.e(hVar.f47983u), fVar.f47999b, format, false);
                h.this.f47977o.add(fVar);
            }
        }

        public static /* synthetic */ void c(f fVar) {
            if (fVar.f48001d) {
                return;
            }
            n nVar = fVar.f48000c;
            if (nVar != null) {
                nVar.d(fVar.f47999b);
            }
            h.this.f47977o.remove(fVar);
            fVar.f48001d = true;
        }

        public void d(final Format format) {
            ((Handler) oe.a.e(h.this.f47984v)).post(new Runnable() { // from class: sc.i
                @Override // java.lang.Runnable
                public final void run() {
                    h.f.b(h.f.this, format);
                }
            });
        }

        @Override // sc.v.b
        public void release() {
            w0.T0((Handler) oe.a.e(h.this.f47984v), new Runnable() { // from class: sc.j
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
        private final Set f48003a = new HashSet();

        /* renamed from: b  reason: collision with root package name */
        private sc.g f48004b;

        public g() {
        }

        @Override // sc.g.a
        public void a(sc.g gVar) {
            this.f48003a.add(gVar);
            if (this.f48004b != null) {
                return;
            }
            this.f48004b = gVar;
            gVar.F();
        }

        @Override // sc.g.a
        public void b(Exception exc, boolean z10) {
            this.f48004b = null;
            qi.s o10 = qi.s.o(this.f48003a);
            this.f48003a.clear();
            t0 it = o10.iterator();
            while (it.hasNext()) {
                ((sc.g) it.next()).B(exc, z10);
            }
        }

        @Override // sc.g.a
        public void c() {
            this.f48004b = null;
            qi.s o10 = qi.s.o(this.f48003a);
            this.f48003a.clear();
            t0 it = o10.iterator();
            while (it.hasNext()) {
                ((sc.g) it.next()).A();
            }
        }

        public void d(sc.g gVar) {
            this.f48003a.remove(gVar);
            if (this.f48004b == gVar) {
                this.f48004b = null;
                if (!this.f48003a.isEmpty()) {
                    sc.g gVar2 = (sc.g) this.f48003a.iterator().next();
                    this.f48004b = gVar2;
                    gVar2.F();
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: sc.h$h  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class C0650h implements g.b {
        private C0650h() {
        }

        @Override // sc.g.b
        public void a(sc.g gVar, int i10) {
            if (h.this.f47975m != -9223372036854775807L) {
                h.this.f47978p.remove(gVar);
                ((Handler) oe.a.e(h.this.f47984v)).removeCallbacksAndMessages(gVar);
            }
        }

        @Override // sc.g.b
        public void b(final sc.g gVar, int i10) {
            if (i10 == 1 && h.this.f47979q > 0 && h.this.f47975m != -9223372036854775807L) {
                h.this.f47978p.add(gVar);
                ((Handler) oe.a.e(h.this.f47984v)).postAtTime(new Runnable() { // from class: sc.k
                    @Override // java.lang.Runnable
                    public final void run() {
                        g.this.d(null);
                    }
                }, gVar, SystemClock.uptimeMillis() + h.this.f47975m);
            } else if (i10 == 0) {
                h.this.f47976n.remove(gVar);
                if (h.this.f47981s == gVar) {
                    h.this.f47981s = null;
                }
                if (h.this.f47982t == gVar) {
                    h.this.f47982t = null;
                }
                h.this.f47972j.d(gVar);
                if (h.this.f47975m != -9223372036854775807L) {
                    ((Handler) oe.a.e(h.this.f47984v)).removeCallbacksAndMessages(gVar);
                    h.this.f47978p.remove(gVar);
                }
            }
            h.this.C();
        }
    }

    private n A(int i10, boolean z10) {
        b0 b0Var = (b0) oe.a.e(this.f47980r);
        if ((b0Var.g() == 2 && c0.f47921d) || w0.I0(this.f47970h, i10) == -1 || b0Var.g() == 1) {
            return null;
        }
        sc.g gVar = this.f47981s;
        if (gVar == null) {
            sc.g x10 = x(qi.s.t(), true, null, z10);
            this.f47976n.add(x10);
            this.f47981s = x10;
        } else {
            gVar.c(null);
        }
        return this.f47981s;
    }

    private void B(Looper looper) {
        if (this.f47988z == null) {
            this.f47988z = new d(looper);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void C() {
        if (this.f47980r != null && this.f47979q == 0 && this.f47976n.isEmpty() && this.f47977o.isEmpty()) {
            ((b0) oe.a.e(this.f47980r)).release();
            this.f47980r = null;
        }
    }

    private void D() {
        t0 s10 = qi.u.o(this.f47978p).s();
        while (s10.hasNext()) {
            ((n) s10.next()).d(null);
        }
    }

    private void E() {
        t0 s10 = qi.u.o(this.f47977o).s();
        while (s10.hasNext()) {
            ((f) s10.next()).release();
        }
    }

    private void G(n nVar, u.a aVar) {
        nVar.d(aVar);
        if (this.f47975m != -9223372036854775807L) {
            nVar.d(null);
        }
    }

    private void H(boolean z10) {
        if (z10 && this.f47983u == null) {
            oe.y.j("DefaultDrmSessionMgr", "DefaultDrmSessionManager accessed before setPlayer(), possibly on the wrong thread.", new IllegalStateException());
        } else if (Thread.currentThread() != ((Looper) oe.a.e(this.f47983u)).getThread()) {
            oe.y.j("DefaultDrmSessionMgr", "DefaultDrmSessionManager accessed on the wrong thread.\nCurrent thread: " + Thread.currentThread().getName() + "\nExpected thread: " + this.f47983u.getThread().getName(), new IllegalStateException());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public n t(Looper looper, u.a aVar, Format format, boolean z10) {
        List list;
        B(looper);
        m mVar = format.f12308z;
        if (mVar == null) {
            return A(oe.c0.k(format.f12305w), z10);
        }
        sc.g gVar = null;
        if (this.f47986x == null) {
            list = y((m) oe.a.e(mVar), this.f47965c, false);
            if (list.isEmpty()) {
                e eVar = new e(this.f47965c);
                oe.y.d("DefaultDrmSessionMgr", "DRM error", eVar);
                if (aVar != null) {
                    aVar.l(eVar);
                }
                return new a0(new n.a(eVar, 6003));
            }
        } else {
            list = null;
        }
        if (!this.f47969g) {
            gVar = this.f47982t;
        } else {
            Iterator it = this.f47976n.iterator();
            while (true) {
                if (!it.hasNext()) {
                    break;
                }
                sc.g gVar2 = (sc.g) it.next();
                if (w0.c(gVar2.f47928a, list)) {
                    gVar = gVar2;
                    break;
                }
            }
        }
        if (gVar == null) {
            sc.g x10 = x(list, false, aVar, z10);
            if (!this.f47969g) {
                this.f47982t = x10;
            }
            this.f47976n.add(x10);
            return x10;
        }
        gVar.c(aVar);
        return gVar;
    }

    private static boolean u(n nVar) {
        if (nVar.getState() == 1) {
            if (w0.f39038a < 19 || (((n.a) oe.a.e(nVar.getError())).getCause() instanceof ResourceBusyException)) {
                return true;
            }
            return false;
        }
        return false;
    }

    private boolean v(m mVar) {
        if (this.f47986x != null) {
            return true;
        }
        if (y(mVar, this.f47965c, true).isEmpty()) {
            if (mVar.f48028o != 1 || !mVar.o(0).d(mc.d.f36227b)) {
                return false;
            }
            oe.y.i("DefaultDrmSessionMgr", "DrmInitData only contains common PSSH SchemeData. Assuming support for: " + this.f47965c);
        }
        String str = mVar.f48027i;
        if (str == null || "cenc".equals(str)) {
            return true;
        }
        if ("cbcs".equals(str)) {
            if (w0.f39038a >= 25) {
                return true;
            }
            return false;
        } else if (!"cbc1".equals(str) && !"cens".equals(str)) {
            return true;
        } else {
            return false;
        }
    }

    private sc.g w(List list, boolean z10, u.a aVar) {
        oe.a.e(this.f47980r);
        sc.g gVar = new sc.g(this.f47965c, this.f47980r, this.f47972j, this.f47974l, list, this.f47985w, this.f47971i | z10, z10, this.f47986x, this.f47968f, this.f47967e, (Looper) oe.a.e(this.f47983u), this.f47973k, (t1) oe.a.e(this.f47987y));
        gVar.c(aVar);
        if (this.f47975m != -9223372036854775807L) {
            gVar.c(null);
        }
        return gVar;
    }

    private sc.g x(List list, boolean z10, u.a aVar, boolean z11) {
        sc.g w10 = w(list, z10, aVar);
        if (u(w10) && !this.f47978p.isEmpty()) {
            D();
            G(w10, aVar);
            w10 = w(list, z10, aVar);
        }
        if (u(w10) && z11 && !this.f47977o.isEmpty()) {
            E();
            if (!this.f47978p.isEmpty()) {
                D();
            }
            G(w10, aVar);
            return w(list, z10, aVar);
        }
        return w10;
    }

    private static List y(m mVar, UUID uuid, boolean z10) {
        ArrayList arrayList = new ArrayList(mVar.f48028o);
        for (int i10 = 0; i10 < mVar.f48028o; i10++) {
            m.b o10 = mVar.o(i10);
            if ((o10.d(uuid) || (mc.d.f36228c.equals(uuid) && o10.d(mc.d.f36227b))) && (o10.f48033p != null || z10)) {
                arrayList.add(o10);
            }
        }
        return arrayList;
    }

    private synchronized void z(Looper looper) {
        boolean z10;
        try {
            Looper looper2 = this.f47983u;
            if (looper2 == null) {
                this.f47983u = looper;
                this.f47984v = new Handler(looper);
            } else {
                if (looper2 == looper) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                oe.a.g(z10);
                oe.a.e(this.f47984v);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public void F(int i10, byte[] bArr) {
        oe.a.g(this.f47976n.isEmpty());
        if (i10 == 1 || i10 == 3) {
            oe.a.e(bArr);
        }
        this.f47985w = i10;
        this.f47986x = bArr;
    }

    @Override // sc.v
    public int a(Format format) {
        H(false);
        int g10 = ((b0) oe.a.e(this.f47980r)).g();
        m mVar = format.f12308z;
        if (mVar == null) {
            if (w0.I0(this.f47970h, oe.c0.k(format.f12305w)) == -1) {
                return 0;
            }
        } else if (!v(mVar)) {
            return 1;
        }
        return g10;
    }

    @Override // sc.v
    public v.b b(u.a aVar, Format format) {
        boolean z10;
        if (this.f47979q > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        oe.a.i(this.f47983u);
        f fVar = new f(aVar);
        fVar.d(format);
        return fVar;
    }

    @Override // sc.v
    public n c(u.a aVar, Format format) {
        boolean z10 = false;
        H(false);
        if (this.f47979q > 0) {
            z10 = true;
        }
        oe.a.g(z10);
        oe.a.i(this.f47983u);
        return t(this.f47983u, aVar, format, true);
    }

    @Override // sc.v
    public final void d() {
        H(true);
        int i10 = this.f47979q;
        this.f47979q = i10 + 1;
        if (i10 == 0) {
            if (this.f47980r == null) {
                b0 a10 = this.f47966d.a(this.f47965c);
                this.f47980r = a10;
                a10.e(new c());
            } else if (this.f47975m != -9223372036854775807L) {
                for (int i11 = 0; i11 < this.f47976n.size(); i11++) {
                    ((sc.g) this.f47976n.get(i11)).c(null);
                }
            }
        }
    }

    @Override // sc.v
    public void e(Looper looper, t1 t1Var) {
        z(looper);
        this.f47987y = t1Var;
    }

    @Override // sc.v
    public final void release() {
        H(true);
        int i10 = this.f47979q - 1;
        this.f47979q = i10;
        if (i10 != 0) {
            return;
        }
        if (this.f47975m != -9223372036854775807L) {
            ArrayList arrayList = new ArrayList(this.f47976n);
            for (int i11 = 0; i11 < arrayList.size(); i11++) {
                ((sc.g) arrayList.get(i11)).d(null);
            }
        }
        E();
        C();
    }

    private h(UUID uuid, b0.c cVar, j0 j0Var, HashMap hashMap, boolean z10, int[] iArr, boolean z11, com.google.android.exoplayer2.upstream.i iVar, long j10) {
        oe.a.e(uuid);
        oe.a.b(!mc.d.f36227b.equals(uuid), "Use C.CLEARKEY_UUID instead");
        this.f47965c = uuid;
        this.f47966d = cVar;
        this.f47967e = j0Var;
        this.f47968f = hashMap;
        this.f47969g = z10;
        this.f47970h = iArr;
        this.f47971i = z11;
        this.f47973k = iVar;
        this.f47972j = new g();
        this.f47974l = new C0650h();
        this.f47985w = 0;
        this.f47976n = new ArrayList();
        this.f47977o = q0.h();
        this.f47978p = q0.h();
        this.f47975m = j10;
    }
}
