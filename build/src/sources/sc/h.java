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
    private final UUID f48533c;

    /* renamed from: d  reason: collision with root package name */
    private final b0.c f48534d;

    /* renamed from: e  reason: collision with root package name */
    private final j0 f48535e;

    /* renamed from: f  reason: collision with root package name */
    private final HashMap f48536f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f48537g;

    /* renamed from: h  reason: collision with root package name */
    private final int[] f48538h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f48539i;

    /* renamed from: j  reason: collision with root package name */
    private final g f48540j;

    /* renamed from: k  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f48541k;

    /* renamed from: l  reason: collision with root package name */
    private final C0650h f48542l;

    /* renamed from: m  reason: collision with root package name */
    private final long f48543m;

    /* renamed from: n  reason: collision with root package name */
    private final List f48544n;

    /* renamed from: o  reason: collision with root package name */
    private final Set f48545o;

    /* renamed from: p  reason: collision with root package name */
    private final Set f48546p;

    /* renamed from: q  reason: collision with root package name */
    private int f48547q;

    /* renamed from: r  reason: collision with root package name */
    private b0 f48548r;

    /* renamed from: s  reason: collision with root package name */
    private sc.g f48549s;

    /* renamed from: t  reason: collision with root package name */
    private sc.g f48550t;

    /* renamed from: u  reason: collision with root package name */
    private Looper f48551u;

    /* renamed from: v  reason: collision with root package name */
    private Handler f48552v;

    /* renamed from: w  reason: collision with root package name */
    private int f48553w;

    /* renamed from: x  reason: collision with root package name */
    private byte[] f48554x;

    /* renamed from: y  reason: collision with root package name */
    private t1 f48555y;

    /* renamed from: z  reason: collision with root package name */
    volatile d f48556z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: d  reason: collision with root package name */
        private boolean f48560d;

        /* renamed from: f  reason: collision with root package name */
        private boolean f48562f;

        /* renamed from: a  reason: collision with root package name */
        private final HashMap f48557a = new HashMap();

        /* renamed from: b  reason: collision with root package name */
        private UUID f48558b = mc.d.f36797d;

        /* renamed from: c  reason: collision with root package name */
        private b0.c f48559c = g0.f48529d;

        /* renamed from: g  reason: collision with root package name */
        private com.google.android.exoplayer2.upstream.i f48563g = new com.google.android.exoplayer2.upstream.g();

        /* renamed from: e  reason: collision with root package name */
        private int[] f48561e = new int[0];

        /* renamed from: h  reason: collision with root package name */
        private long f48564h = LogThrottleSingleton.RATE_LIMIT_FIVE_MINUTES;

        public h a(j0 j0Var) {
            return new h(this.f48558b, this.f48559c, j0Var, this.f48557a, this.f48560d, this.f48561e, this.f48562f, this.f48563g, this.f48564h);
        }

        public b b(boolean z10) {
            this.f48560d = z10;
            return this;
        }

        public b c(boolean z10) {
            this.f48562f = z10;
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
            this.f48561e = (int[]) iArr.clone();
            return this;
        }

        public b e(UUID uuid, b0.c cVar) {
            this.f48558b = (UUID) oe.a.e(uuid);
            this.f48559c = (b0.c) oe.a.e(cVar);
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private class c implements b0.b {
        private c() {
        }

        @Override // sc.b0.b
        public void a(b0 b0Var, byte[] bArr, int i10, int i11, byte[] bArr2) {
            ((d) oe.a.e(h.this.f48556z)).obtainMessage(i10, bArr).sendToTarget();
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
                for (sc.g gVar : h.this.f48544n) {
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
        private final u.a f48567b;

        /* renamed from: c  reason: collision with root package name */
        private n f48568c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f48569d;

        public f(u.a aVar) {
            this.f48567b = aVar;
        }

        public static /* synthetic */ void b(f fVar, Format format) {
            if (h.this.f48547q != 0 && !fVar.f48569d) {
                h hVar = h.this;
                fVar.f48568c = hVar.t((Looper) oe.a.e(hVar.f48551u), fVar.f48567b, format, false);
                h.this.f48545o.add(fVar);
            }
        }

        public static /* synthetic */ void c(f fVar) {
            if (fVar.f48569d) {
                return;
            }
            n nVar = fVar.f48568c;
            if (nVar != null) {
                nVar.d(fVar.f48567b);
            }
            h.this.f48545o.remove(fVar);
            fVar.f48569d = true;
        }

        public void d(final Format format) {
            ((Handler) oe.a.e(h.this.f48552v)).post(new Runnable() { // from class: sc.i
                @Override // java.lang.Runnable
                public final void run() {
                    h.f.b(h.f.this, format);
                }
            });
        }

        @Override // sc.v.b
        public void release() {
            w0.T0((Handler) oe.a.e(h.this.f48552v), new Runnable() { // from class: sc.j
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
        private final Set f48571a = new HashSet();

        /* renamed from: b  reason: collision with root package name */
        private sc.g f48572b;

        public g() {
        }

        @Override // sc.g.a
        public void a(sc.g gVar) {
            this.f48571a.add(gVar);
            if (this.f48572b != null) {
                return;
            }
            this.f48572b = gVar;
            gVar.F();
        }

        @Override // sc.g.a
        public void b(Exception exc, boolean z10) {
            this.f48572b = null;
            qi.s o10 = qi.s.o(this.f48571a);
            this.f48571a.clear();
            t0 it = o10.iterator();
            while (it.hasNext()) {
                ((sc.g) it.next()).B(exc, z10);
            }
        }

        @Override // sc.g.a
        public void c() {
            this.f48572b = null;
            qi.s o10 = qi.s.o(this.f48571a);
            this.f48571a.clear();
            t0 it = o10.iterator();
            while (it.hasNext()) {
                ((sc.g) it.next()).A();
            }
        }

        public void d(sc.g gVar) {
            this.f48571a.remove(gVar);
            if (this.f48572b == gVar) {
                this.f48572b = null;
                if (!this.f48571a.isEmpty()) {
                    sc.g gVar2 = (sc.g) this.f48571a.iterator().next();
                    this.f48572b = gVar2;
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
            if (h.this.f48543m != -9223372036854775807L) {
                h.this.f48546p.remove(gVar);
                ((Handler) oe.a.e(h.this.f48552v)).removeCallbacksAndMessages(gVar);
            }
        }

        @Override // sc.g.b
        public void b(final sc.g gVar, int i10) {
            if (i10 == 1 && h.this.f48547q > 0 && h.this.f48543m != -9223372036854775807L) {
                h.this.f48546p.add(gVar);
                ((Handler) oe.a.e(h.this.f48552v)).postAtTime(new Runnable() { // from class: sc.k
                    @Override // java.lang.Runnable
                    public final void run() {
                        g.this.d(null);
                    }
                }, gVar, SystemClock.uptimeMillis() + h.this.f48543m);
            } else if (i10 == 0) {
                h.this.f48544n.remove(gVar);
                if (h.this.f48549s == gVar) {
                    h.this.f48549s = null;
                }
                if (h.this.f48550t == gVar) {
                    h.this.f48550t = null;
                }
                h.this.f48540j.d(gVar);
                if (h.this.f48543m != -9223372036854775807L) {
                    ((Handler) oe.a.e(h.this.f48552v)).removeCallbacksAndMessages(gVar);
                    h.this.f48546p.remove(gVar);
                }
            }
            h.this.C();
        }
    }

    private n A(int i10, boolean z10) {
        b0 b0Var = (b0) oe.a.e(this.f48548r);
        if ((b0Var.g() == 2 && c0.f48489d) || w0.I0(this.f48538h, i10) == -1 || b0Var.g() == 1) {
            return null;
        }
        sc.g gVar = this.f48549s;
        if (gVar == null) {
            sc.g x10 = x(qi.s.t(), true, null, z10);
            this.f48544n.add(x10);
            this.f48549s = x10;
        } else {
            gVar.c(null);
        }
        return this.f48549s;
    }

    private void B(Looper looper) {
        if (this.f48556z == null) {
            this.f48556z = new d(looper);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void C() {
        if (this.f48548r != null && this.f48547q == 0 && this.f48544n.isEmpty() && this.f48545o.isEmpty()) {
            ((b0) oe.a.e(this.f48548r)).release();
            this.f48548r = null;
        }
    }

    private void D() {
        t0 s10 = qi.u.o(this.f48546p).s();
        while (s10.hasNext()) {
            ((n) s10.next()).d(null);
        }
    }

    private void E() {
        t0 s10 = qi.u.o(this.f48545o).s();
        while (s10.hasNext()) {
            ((f) s10.next()).release();
        }
    }

    private void G(n nVar, u.a aVar) {
        nVar.d(aVar);
        if (this.f48543m != -9223372036854775807L) {
            nVar.d(null);
        }
    }

    private void H(boolean z10) {
        if (z10 && this.f48551u == null) {
            oe.y.j("DefaultDrmSessionMgr", "DefaultDrmSessionManager accessed before setPlayer(), possibly on the wrong thread.", new IllegalStateException());
        } else if (Thread.currentThread() != ((Looper) oe.a.e(this.f48551u)).getThread()) {
            oe.y.j("DefaultDrmSessionMgr", "DefaultDrmSessionManager accessed on the wrong thread.\nCurrent thread: " + Thread.currentThread().getName() + "\nExpected thread: " + this.f48551u.getThread().getName(), new IllegalStateException());
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
        if (this.f48554x == null) {
            list = y((m) oe.a.e(mVar), this.f48533c, false);
            if (list.isEmpty()) {
                e eVar = new e(this.f48533c);
                oe.y.d("DefaultDrmSessionMgr", "DRM error", eVar);
                if (aVar != null) {
                    aVar.l(eVar);
                }
                return new a0(new n.a(eVar, 6003));
            }
        } else {
            list = null;
        }
        if (!this.f48537g) {
            gVar = this.f48550t;
        } else {
            Iterator it = this.f48544n.iterator();
            while (true) {
                if (!it.hasNext()) {
                    break;
                }
                sc.g gVar2 = (sc.g) it.next();
                if (w0.c(gVar2.f48496a, list)) {
                    gVar = gVar2;
                    break;
                }
            }
        }
        if (gVar == null) {
            sc.g x10 = x(list, false, aVar, z10);
            if (!this.f48537g) {
                this.f48550t = x10;
            }
            this.f48544n.add(x10);
            return x10;
        }
        gVar.c(aVar);
        return gVar;
    }

    private static boolean u(n nVar) {
        if (nVar.getState() == 1) {
            if (w0.f39606a < 19 || (((n.a) oe.a.e(nVar.getError())).getCause() instanceof ResourceBusyException)) {
                return true;
            }
            return false;
        }
        return false;
    }

    private boolean v(m mVar) {
        if (this.f48554x != null) {
            return true;
        }
        if (y(mVar, this.f48533c, true).isEmpty()) {
            if (mVar.f48596o != 1 || !mVar.o(0).d(mc.d.f36795b)) {
                return false;
            }
            oe.y.i("DefaultDrmSessionMgr", "DrmInitData only contains common PSSH SchemeData. Assuming support for: " + this.f48533c);
        }
        String str = mVar.f48595i;
        if (str == null || "cenc".equals(str)) {
            return true;
        }
        if ("cbcs".equals(str)) {
            if (w0.f39606a >= 25) {
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
        oe.a.e(this.f48548r);
        sc.g gVar = new sc.g(this.f48533c, this.f48548r, this.f48540j, this.f48542l, list, this.f48553w, this.f48539i | z10, z10, this.f48554x, this.f48536f, this.f48535e, (Looper) oe.a.e(this.f48551u), this.f48541k, (t1) oe.a.e(this.f48555y));
        gVar.c(aVar);
        if (this.f48543m != -9223372036854775807L) {
            gVar.c(null);
        }
        return gVar;
    }

    private sc.g x(List list, boolean z10, u.a aVar, boolean z11) {
        sc.g w10 = w(list, z10, aVar);
        if (u(w10) && !this.f48546p.isEmpty()) {
            D();
            G(w10, aVar);
            w10 = w(list, z10, aVar);
        }
        if (u(w10) && z11 && !this.f48545o.isEmpty()) {
            E();
            if (!this.f48546p.isEmpty()) {
                D();
            }
            G(w10, aVar);
            return w(list, z10, aVar);
        }
        return w10;
    }

    private static List y(m mVar, UUID uuid, boolean z10) {
        ArrayList arrayList = new ArrayList(mVar.f48596o);
        for (int i10 = 0; i10 < mVar.f48596o; i10++) {
            m.b o10 = mVar.o(i10);
            if ((o10.d(uuid) || (mc.d.f36796c.equals(uuid) && o10.d(mc.d.f36795b))) && (o10.f48601p != null || z10)) {
                arrayList.add(o10);
            }
        }
        return arrayList;
    }

    private synchronized void z(Looper looper) {
        boolean z10;
        try {
            Looper looper2 = this.f48551u;
            if (looper2 == null) {
                this.f48551u = looper;
                this.f48552v = new Handler(looper);
            } else {
                if (looper2 == looper) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                oe.a.g(z10);
                oe.a.e(this.f48552v);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public void F(int i10, byte[] bArr) {
        oe.a.g(this.f48544n.isEmpty());
        if (i10 == 1 || i10 == 3) {
            oe.a.e(bArr);
        }
        this.f48553w = i10;
        this.f48554x = bArr;
    }

    @Override // sc.v
    public int a(Format format) {
        H(false);
        int g10 = ((b0) oe.a.e(this.f48548r)).g();
        m mVar = format.f12308z;
        if (mVar == null) {
            if (w0.I0(this.f48538h, oe.c0.k(format.f12305w)) == -1) {
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
        if (this.f48547q > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        oe.a.i(this.f48551u);
        f fVar = new f(aVar);
        fVar.d(format);
        return fVar;
    }

    @Override // sc.v
    public n c(u.a aVar, Format format) {
        boolean z10 = false;
        H(false);
        if (this.f48547q > 0) {
            z10 = true;
        }
        oe.a.g(z10);
        oe.a.i(this.f48551u);
        return t(this.f48551u, aVar, format, true);
    }

    @Override // sc.v
    public final void d() {
        H(true);
        int i10 = this.f48547q;
        this.f48547q = i10 + 1;
        if (i10 == 0) {
            if (this.f48548r == null) {
                b0 a10 = this.f48534d.a(this.f48533c);
                this.f48548r = a10;
                a10.e(new c());
            } else if (this.f48543m != -9223372036854775807L) {
                for (int i11 = 0; i11 < this.f48544n.size(); i11++) {
                    ((sc.g) this.f48544n.get(i11)).c(null);
                }
            }
        }
    }

    @Override // sc.v
    public void e(Looper looper, t1 t1Var) {
        z(looper);
        this.f48555y = t1Var;
    }

    @Override // sc.v
    public final void release() {
        H(true);
        int i10 = this.f48547q - 1;
        this.f48547q = i10;
        if (i10 != 0) {
            return;
        }
        if (this.f48543m != -9223372036854775807L) {
            ArrayList arrayList = new ArrayList(this.f48544n);
            for (int i11 = 0; i11 < arrayList.size(); i11++) {
                ((sc.g) arrayList.get(i11)).d(null);
            }
        }
        E();
        C();
    }

    private h(UUID uuid, b0.c cVar, j0 j0Var, HashMap hashMap, boolean z10, int[] iArr, boolean z11, com.google.android.exoplayer2.upstream.i iVar, long j10) {
        oe.a.e(uuid);
        oe.a.b(!mc.d.f36795b.equals(uuid), "Use C.CLEARKEY_UUID instead");
        this.f48533c = uuid;
        this.f48534d = cVar;
        this.f48535e = j0Var;
        this.f48536f = hashMap;
        this.f48537g = z10;
        this.f48538h = iArr;
        this.f48539i = z11;
        this.f48541k = iVar;
        this.f48540j = new g();
        this.f48542l = new C0650h();
        this.f48553w = 0;
        this.f48544n = new ArrayList();
        this.f48545o = q0.h();
        this.f48546p = q0.h();
        this.f48543m = j10;
    }
}
