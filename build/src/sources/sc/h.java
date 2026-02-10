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
import oi.q0;
import oi.t0;
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
    private final UUID f49648c;

    /* renamed from: d  reason: collision with root package name */
    private final b0.c f49649d;

    /* renamed from: e  reason: collision with root package name */
    private final j0 f49650e;

    /* renamed from: f  reason: collision with root package name */
    private final HashMap f49651f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f49652g;

    /* renamed from: h  reason: collision with root package name */
    private final int[] f49653h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f49654i;

    /* renamed from: j  reason: collision with root package name */
    private final g f49655j;

    /* renamed from: k  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f49656k;

    /* renamed from: l  reason: collision with root package name */
    private final C0665h f49657l;

    /* renamed from: m  reason: collision with root package name */
    private final long f49658m;

    /* renamed from: n  reason: collision with root package name */
    private final List f49659n;

    /* renamed from: o  reason: collision with root package name */
    private final Set f49660o;

    /* renamed from: p  reason: collision with root package name */
    private final Set f49661p;

    /* renamed from: q  reason: collision with root package name */
    private int f49662q;

    /* renamed from: r  reason: collision with root package name */
    private b0 f49663r;

    /* renamed from: s  reason: collision with root package name */
    private sc.g f49664s;

    /* renamed from: t  reason: collision with root package name */
    private sc.g f49665t;

    /* renamed from: u  reason: collision with root package name */
    private Looper f49666u;

    /* renamed from: v  reason: collision with root package name */
    private Handler f49667v;

    /* renamed from: w  reason: collision with root package name */
    private int f49668w;

    /* renamed from: x  reason: collision with root package name */
    private byte[] f49669x;

    /* renamed from: y  reason: collision with root package name */
    private t1 f49670y;

    /* renamed from: z  reason: collision with root package name */
    volatile d f49671z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: d  reason: collision with root package name */
        private boolean f49675d;

        /* renamed from: f  reason: collision with root package name */
        private boolean f49677f;

        /* renamed from: a  reason: collision with root package name */
        private final HashMap f49672a = new HashMap();

        /* renamed from: b  reason: collision with root package name */
        private UUID f49673b = mc.d.f36853d;

        /* renamed from: c  reason: collision with root package name */
        private b0.c f49674c = g0.f49644d;

        /* renamed from: g  reason: collision with root package name */
        private com.google.android.exoplayer2.upstream.i f49678g = new com.google.android.exoplayer2.upstream.g();

        /* renamed from: e  reason: collision with root package name */
        private int[] f49676e = new int[0];

        /* renamed from: h  reason: collision with root package name */
        private long f49679h = LogThrottleSingleton.RATE_LIMIT_FIVE_MINUTES;

        public h a(j0 j0Var) {
            return new h(this.f49673b, this.f49674c, j0Var, this.f49672a, this.f49675d, this.f49676e, this.f49677f, this.f49678g, this.f49679h);
        }

        public b b(boolean z10) {
            this.f49675d = z10;
            return this;
        }

        public b c(boolean z10) {
            this.f49677f = z10;
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
            this.f49676e = (int[]) iArr.clone();
            return this;
        }

        public b e(UUID uuid, b0.c cVar) {
            this.f49673b = (UUID) oe.a.e(uuid);
            this.f49674c = (b0.c) oe.a.e(cVar);
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private class c implements b0.b {
        private c() {
        }

        @Override // sc.b0.b
        public void a(b0 b0Var, byte[] bArr, int i10, int i11, byte[] bArr2) {
            ((d) oe.a.e(h.this.f49671z)).obtainMessage(i10, bArr).sendToTarget();
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
                for (sc.g gVar : h.this.f49659n) {
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
        private final u.a f49682b;

        /* renamed from: c  reason: collision with root package name */
        private n f49683c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f49684d;

        public f(u.a aVar) {
            this.f49682b = aVar;
        }

        public static /* synthetic */ void b(f fVar, Format format) {
            if (h.this.f49662q != 0 && !fVar.f49684d) {
                h hVar = h.this;
                fVar.f49683c = hVar.t((Looper) oe.a.e(hVar.f49666u), fVar.f49682b, format, false);
                h.this.f49660o.add(fVar);
            }
        }

        public static /* synthetic */ void c(f fVar) {
            if (fVar.f49684d) {
                return;
            }
            n nVar = fVar.f49683c;
            if (nVar != null) {
                nVar.d(fVar.f49682b);
            }
            h.this.f49660o.remove(fVar);
            fVar.f49684d = true;
        }

        public void d(final Format format) {
            ((Handler) oe.a.e(h.this.f49667v)).post(new Runnable() { // from class: sc.i
                @Override // java.lang.Runnable
                public final void run() {
                    h.f.b(h.f.this, format);
                }
            });
        }

        @Override // sc.v.b
        public void release() {
            w0.T0((Handler) oe.a.e(h.this.f49667v), new Runnable() { // from class: sc.j
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
        private final Set f49686a = new HashSet();

        /* renamed from: b  reason: collision with root package name */
        private sc.g f49687b;

        public g() {
        }

        @Override // sc.g.a
        public void a(sc.g gVar) {
            this.f49686a.add(gVar);
            if (this.f49687b != null) {
                return;
            }
            this.f49687b = gVar;
            gVar.F();
        }

        @Override // sc.g.a
        public void b(Exception exc, boolean z10) {
            this.f49687b = null;
            oi.s o10 = oi.s.o(this.f49686a);
            this.f49686a.clear();
            t0 it = o10.iterator();
            while (it.hasNext()) {
                ((sc.g) it.next()).B(exc, z10);
            }
        }

        @Override // sc.g.a
        public void c() {
            this.f49687b = null;
            oi.s o10 = oi.s.o(this.f49686a);
            this.f49686a.clear();
            t0 it = o10.iterator();
            while (it.hasNext()) {
                ((sc.g) it.next()).A();
            }
        }

        public void d(sc.g gVar) {
            this.f49686a.remove(gVar);
            if (this.f49687b == gVar) {
                this.f49687b = null;
                if (!this.f49686a.isEmpty()) {
                    sc.g gVar2 = (sc.g) this.f49686a.iterator().next();
                    this.f49687b = gVar2;
                    gVar2.F();
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: sc.h$h  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class C0665h implements g.b {
        private C0665h() {
        }

        @Override // sc.g.b
        public void a(sc.g gVar, int i10) {
            if (h.this.f49658m != -9223372036854775807L) {
                h.this.f49661p.remove(gVar);
                ((Handler) oe.a.e(h.this.f49667v)).removeCallbacksAndMessages(gVar);
            }
        }

        @Override // sc.g.b
        public void b(final sc.g gVar, int i10) {
            if (i10 == 1 && h.this.f49662q > 0 && h.this.f49658m != -9223372036854775807L) {
                h.this.f49661p.add(gVar);
                ((Handler) oe.a.e(h.this.f49667v)).postAtTime(new Runnable() { // from class: sc.k
                    @Override // java.lang.Runnable
                    public final void run() {
                        g.this.d(null);
                    }
                }, gVar, SystemClock.uptimeMillis() + h.this.f49658m);
            } else if (i10 == 0) {
                h.this.f49659n.remove(gVar);
                if (h.this.f49664s == gVar) {
                    h.this.f49664s = null;
                }
                if (h.this.f49665t == gVar) {
                    h.this.f49665t = null;
                }
                h.this.f49655j.d(gVar);
                if (h.this.f49658m != -9223372036854775807L) {
                    ((Handler) oe.a.e(h.this.f49667v)).removeCallbacksAndMessages(gVar);
                    h.this.f49661p.remove(gVar);
                }
            }
            h.this.C();
        }
    }

    private n A(int i10, boolean z10) {
        b0 b0Var = (b0) oe.a.e(this.f49663r);
        if ((b0Var.g() == 2 && c0.f49604d) || w0.I0(this.f49653h, i10) == -1 || b0Var.g() == 1) {
            return null;
        }
        sc.g gVar = this.f49664s;
        if (gVar == null) {
            sc.g x10 = x(oi.s.t(), true, null, z10);
            this.f49659n.add(x10);
            this.f49664s = x10;
        } else {
            gVar.c(null);
        }
        return this.f49664s;
    }

    private void B(Looper looper) {
        if (this.f49671z == null) {
            this.f49671z = new d(looper);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void C() {
        if (this.f49663r != null && this.f49662q == 0 && this.f49659n.isEmpty() && this.f49660o.isEmpty()) {
            ((b0) oe.a.e(this.f49663r)).release();
            this.f49663r = null;
        }
    }

    private void D() {
        t0 s10 = oi.u.o(this.f49661p).s();
        while (s10.hasNext()) {
            ((n) s10.next()).d(null);
        }
    }

    private void E() {
        t0 s10 = oi.u.o(this.f49660o).s();
        while (s10.hasNext()) {
            ((f) s10.next()).release();
        }
    }

    private void G(n nVar, u.a aVar) {
        nVar.d(aVar);
        if (this.f49658m != -9223372036854775807L) {
            nVar.d(null);
        }
    }

    private void H(boolean z10) {
        if (z10 && this.f49666u == null) {
            oe.y.j("DefaultDrmSessionMgr", "DefaultDrmSessionManager accessed before setPlayer(), possibly on the wrong thread.", new IllegalStateException());
        } else if (Thread.currentThread() != ((Looper) oe.a.e(this.f49666u)).getThread()) {
            oe.y.j("DefaultDrmSessionMgr", "DefaultDrmSessionManager accessed on the wrong thread.\nCurrent thread: " + Thread.currentThread().getName() + "\nExpected thread: " + this.f49666u.getThread().getName(), new IllegalStateException());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public n t(Looper looper, u.a aVar, Format format, boolean z10) {
        List list;
        B(looper);
        m mVar = format.f11730z;
        if (mVar == null) {
            return A(oe.c0.k(format.f11727w), z10);
        }
        sc.g gVar = null;
        if (this.f49669x == null) {
            list = y((m) oe.a.e(mVar), this.f49648c, false);
            if (list.isEmpty()) {
                e eVar = new e(this.f49648c);
                oe.y.d("DefaultDrmSessionMgr", "DRM error", eVar);
                if (aVar != null) {
                    aVar.l(eVar);
                }
                return new a0(new n.a(eVar, 6003));
            }
        } else {
            list = null;
        }
        if (!this.f49652g) {
            gVar = this.f49665t;
        } else {
            Iterator it = this.f49659n.iterator();
            while (true) {
                if (!it.hasNext()) {
                    break;
                }
                sc.g gVar2 = (sc.g) it.next();
                if (w0.c(gVar2.f49611a, list)) {
                    gVar = gVar2;
                    break;
                }
            }
        }
        if (gVar == null) {
            sc.g x10 = x(list, false, aVar, z10);
            if (!this.f49652g) {
                this.f49665t = x10;
            }
            this.f49659n.add(x10);
            return x10;
        }
        gVar.c(aVar);
        return gVar;
    }

    private static boolean u(n nVar) {
        if (nVar.getState() == 1) {
            if (w0.f40711a < 19 || (((n.a) oe.a.e(nVar.getError())).getCause() instanceof ResourceBusyException)) {
                return true;
            }
            return false;
        }
        return false;
    }

    private boolean v(m mVar) {
        if (this.f49669x != null) {
            return true;
        }
        if (y(mVar, this.f49648c, true).isEmpty()) {
            if (mVar.f49711o != 1 || !mVar.i(0).d(mc.d.f36851b)) {
                return false;
            }
            oe.y.i("DefaultDrmSessionMgr", "DrmInitData only contains common PSSH SchemeData. Assuming support for: " + this.f49648c);
        }
        String str = mVar.f49710i;
        if (str == null || "cenc".equals(str)) {
            return true;
        }
        if ("cbcs".equals(str)) {
            if (w0.f40711a >= 25) {
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
        oe.a.e(this.f49663r);
        sc.g gVar = new sc.g(this.f49648c, this.f49663r, this.f49655j, this.f49657l, list, this.f49668w, this.f49654i | z10, z10, this.f49669x, this.f49651f, this.f49650e, (Looper) oe.a.e(this.f49666u), this.f49656k, (t1) oe.a.e(this.f49670y));
        gVar.c(aVar);
        if (this.f49658m != -9223372036854775807L) {
            gVar.c(null);
        }
        return gVar;
    }

    private sc.g x(List list, boolean z10, u.a aVar, boolean z11) {
        sc.g w10 = w(list, z10, aVar);
        if (u(w10) && !this.f49661p.isEmpty()) {
            D();
            G(w10, aVar);
            w10 = w(list, z10, aVar);
        }
        if (u(w10) && z11 && !this.f49660o.isEmpty()) {
            E();
            if (!this.f49661p.isEmpty()) {
                D();
            }
            G(w10, aVar);
            return w(list, z10, aVar);
        }
        return w10;
    }

    private static List y(m mVar, UUID uuid, boolean z10) {
        ArrayList arrayList = new ArrayList(mVar.f49711o);
        for (int i10 = 0; i10 < mVar.f49711o; i10++) {
            m.b i11 = mVar.i(i10);
            if ((i11.d(uuid) || (mc.d.f36852c.equals(uuid) && i11.d(mc.d.f36851b))) && (i11.f49716p != null || z10)) {
                arrayList.add(i11);
            }
        }
        return arrayList;
    }

    private synchronized void z(Looper looper) {
        boolean z10;
        try {
            Looper looper2 = this.f49666u;
            if (looper2 == null) {
                this.f49666u = looper;
                this.f49667v = new Handler(looper);
            } else {
                if (looper2 == looper) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                oe.a.g(z10);
                oe.a.e(this.f49667v);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public void F(int i10, byte[] bArr) {
        oe.a.g(this.f49659n.isEmpty());
        if (i10 == 1 || i10 == 3) {
            oe.a.e(bArr);
        }
        this.f49668w = i10;
        this.f49669x = bArr;
    }

    @Override // sc.v
    public int a(Format format) {
        H(false);
        int g10 = ((b0) oe.a.e(this.f49663r)).g();
        m mVar = format.f11730z;
        if (mVar == null) {
            if (w0.I0(this.f49653h, oe.c0.k(format.f11727w)) == -1) {
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
        if (this.f49662q > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        oe.a.i(this.f49666u);
        f fVar = new f(aVar);
        fVar.d(format);
        return fVar;
    }

    @Override // sc.v
    public n c(u.a aVar, Format format) {
        boolean z10 = false;
        H(false);
        if (this.f49662q > 0) {
            z10 = true;
        }
        oe.a.g(z10);
        oe.a.i(this.f49666u);
        return t(this.f49666u, aVar, format, true);
    }

    @Override // sc.v
    public final void d() {
        H(true);
        int i10 = this.f49662q;
        this.f49662q = i10 + 1;
        if (i10 == 0) {
            if (this.f49663r == null) {
                b0 a10 = this.f49649d.a(this.f49648c);
                this.f49663r = a10;
                a10.e(new c());
            } else if (this.f49658m != -9223372036854775807L) {
                for (int i11 = 0; i11 < this.f49659n.size(); i11++) {
                    ((sc.g) this.f49659n.get(i11)).c(null);
                }
            }
        }
    }

    @Override // sc.v
    public void e(Looper looper, t1 t1Var) {
        z(looper);
        this.f49670y = t1Var;
    }

    @Override // sc.v
    public final void release() {
        H(true);
        int i10 = this.f49662q - 1;
        this.f49662q = i10;
        if (i10 != 0) {
            return;
        }
        if (this.f49658m != -9223372036854775807L) {
            ArrayList arrayList = new ArrayList(this.f49659n);
            for (int i11 = 0; i11 < arrayList.size(); i11++) {
                ((sc.g) arrayList.get(i11)).d(null);
            }
        }
        E();
        C();
    }

    private h(UUID uuid, b0.c cVar, j0 j0Var, HashMap hashMap, boolean z10, int[] iArr, boolean z11, com.google.android.exoplayer2.upstream.i iVar, long j10) {
        oe.a.e(uuid);
        oe.a.b(!mc.d.f36851b.equals(uuid), "Use C.CLEARKEY_UUID instead");
        this.f49648c = uuid;
        this.f49649d = cVar;
        this.f49650e = j0Var;
        this.f49651f = hashMap;
        this.f49652g = z10;
        this.f49653h = iArr;
        this.f49654i = z11;
        this.f49656k = iVar;
        this.f49655j = new g();
        this.f49657l = new C0665h();
        this.f49668w = 0;
        this.f49659n = new ArrayList();
        this.f49660o = q0.h();
        this.f49661p = q0.h();
        this.f49658m = j10;
    }
}
