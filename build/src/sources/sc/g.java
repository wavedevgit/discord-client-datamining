package sc;

import android.media.NotProvisionedException;
import android.os.Handler;
import android.os.HandlerThread;
import android.os.Looper;
import android.os.Message;
import android.os.SystemClock;
import android.util.Pair;
import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.source.MediaLoadData;
import com.google.android.exoplayer2.upstream.i;
import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import kotlin.jvm.internal.LongCompanionObject;
import nc.t1;
import oe.w0;
import sc.b0;
import sc.n;
import sc.u;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g implements n {

    /* renamed from: a  reason: collision with root package name */
    public final List f47927a;

    /* renamed from: b  reason: collision with root package name */
    private final b0 f47928b;

    /* renamed from: c  reason: collision with root package name */
    private final a f47929c;

    /* renamed from: d  reason: collision with root package name */
    private final b f47930d;

    /* renamed from: e  reason: collision with root package name */
    private final int f47931e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f47932f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f47933g;

    /* renamed from: h  reason: collision with root package name */
    private final HashMap f47934h;

    /* renamed from: i  reason: collision with root package name */
    private final oe.j f47935i;

    /* renamed from: j  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f47936j;

    /* renamed from: k  reason: collision with root package name */
    private final t1 f47937k;

    /* renamed from: l  reason: collision with root package name */
    private final j0 f47938l;

    /* renamed from: m  reason: collision with root package name */
    private final UUID f47939m;

    /* renamed from: n  reason: collision with root package name */
    private final Looper f47940n;

    /* renamed from: o  reason: collision with root package name */
    private final e f47941o;

    /* renamed from: p  reason: collision with root package name */
    private int f47942p;

    /* renamed from: q  reason: collision with root package name */
    private int f47943q;

    /* renamed from: r  reason: collision with root package name */
    private HandlerThread f47944r;

    /* renamed from: s  reason: collision with root package name */
    private c f47945s;

    /* renamed from: t  reason: collision with root package name */
    private rc.b f47946t;

    /* renamed from: u  reason: collision with root package name */
    private n.a f47947u;

    /* renamed from: v  reason: collision with root package name */
    private byte[] f47948v;

    /* renamed from: w  reason: collision with root package name */
    private byte[] f47949w;

    /* renamed from: x  reason: collision with root package name */
    private b0.a f47950x;

    /* renamed from: y  reason: collision with root package name */
    private b0.d f47951y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void a(g gVar);

        void b(Exception exc, boolean z10);

        void c();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void a(g gVar, int i10);

        void b(g gVar, int i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class c extends Handler {

        /* renamed from: a  reason: collision with root package name */
        private boolean f47952a;

        public c(Looper looper) {
            super(looper);
        }

        private boolean a(Message message, k0 k0Var) {
            IOException fVar;
            d dVar = (d) message.obj;
            if (!dVar.f47955b) {
                return false;
            }
            int i10 = dVar.f47958e + 1;
            dVar.f47958e = i10;
            if (i10 > g.this.f47936j.b(3)) {
                return false;
            }
            LoadEventInfo loadEventInfo = new LoadEventInfo(dVar.f47954a, k0Var.f48014d, k0Var.f48015e, k0Var.f48016i, SystemClock.elapsedRealtime(), SystemClock.elapsedRealtime() - dVar.f47956c, k0Var.f48017o);
            MediaLoadData mediaLoadData = new MediaLoadData(3);
            if (k0Var.getCause() instanceof IOException) {
                fVar = (IOException) k0Var.getCause();
            } else {
                fVar = new f(k0Var.getCause());
            }
            long a10 = g.this.f47936j.a(new i.c(loadEventInfo, mediaLoadData, fVar, dVar.f47958e));
            if (a10 == -9223372036854775807L) {
                return false;
            }
            synchronized (this) {
                try {
                    if (this.f47952a) {
                        return false;
                    }
                    sendMessageDelayed(Message.obtain(message), a10);
                    return true;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        void b(int i10, Object obj, boolean z10) {
            obtainMessage(i10, new d(LoadEventInfo.a(), z10, SystemClock.elapsedRealtime(), obj)).sendToTarget();
        }

        public synchronized void c() {
            removeCallbacksAndMessages(null);
            this.f47952a = true;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r1v0, types: [java.lang.Throwable, java.lang.Exception] */
        @Override // android.os.Handler
        public void handleMessage(Message message) {
            byte[] bArr;
            d dVar = (d) message.obj;
            try {
                int i10 = message.what;
                if (i10 != 0) {
                    if (i10 == 1) {
                        bArr = g.this.f47938l.a(g.this.f47939m, (b0.a) dVar.f47957d);
                    } else {
                        throw new RuntimeException();
                    }
                } else {
                    bArr = g.this.f47938l.b(g.this.f47939m, (b0.d) dVar.f47957d);
                }
            } catch (k0 e10) {
                boolean a10 = a(message, e10);
                bArr = e10;
                if (a10) {
                    return;
                }
            } catch (Exception e11) {
                oe.y.j("DefaultDrmSession", "Key/provisioning request produced an unexpected exception. Not retrying.", e11);
                bArr = e11;
            }
            g.this.f47936j.d(dVar.f47954a);
            synchronized (this) {
                try {
                    if (!this.f47952a) {
                        g.this.f47941o.obtainMessage(message.what, Pair.create(dVar.f47957d, bArr)).sendToTarget();
                    }
                } finally {
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        public final long f47954a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f47955b;

        /* renamed from: c  reason: collision with root package name */
        public final long f47956c;

        /* renamed from: d  reason: collision with root package name */
        public final Object f47957d;

        /* renamed from: e  reason: collision with root package name */
        public int f47958e;

        public d(long j10, boolean z10, long j11, Object obj) {
            this.f47954a = j10;
            this.f47955b = z10;
            this.f47956c = j11;
            this.f47957d = obj;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private class e extends Handler {
        public e(Looper looper) {
            super(looper);
        }

        @Override // android.os.Handler
        public void handleMessage(Message message) {
            Pair pair = (Pair) message.obj;
            Object obj = pair.first;
            Object obj2 = pair.second;
            int i10 = message.what;
            if (i10 == 0) {
                g.this.C(obj, obj2);
            } else if (i10 == 1) {
                g.this.w(obj, obj2);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class f extends IOException {
        public f(Throwable th2) {
            super(th2);
        }
    }

    public g(UUID uuid, b0 b0Var, a aVar, b bVar, List list, int i10, boolean z10, boolean z11, byte[] bArr, HashMap hashMap, j0 j0Var, Looper looper, com.google.android.exoplayer2.upstream.i iVar, t1 t1Var) {
        if (i10 == 1 || i10 == 3) {
            oe.a.e(bArr);
        }
        this.f47939m = uuid;
        this.f47929c = aVar;
        this.f47930d = bVar;
        this.f47928b = b0Var;
        this.f47931e = i10;
        this.f47932f = z10;
        this.f47933g = z11;
        if (bArr != null) {
            this.f47949w = bArr;
            this.f47927a = null;
        } else {
            this.f47927a = Collections.unmodifiableList((List) oe.a.e(list));
        }
        this.f47934h = hashMap;
        this.f47938l = j0Var;
        this.f47935i = new oe.j();
        this.f47936j = iVar;
        this.f47937k = t1Var;
        this.f47942p = 2;
        this.f47940n = looper;
        this.f47941o = new e(looper);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void C(Object obj, Object obj2) {
        if (obj == this.f47951y) {
            if (this.f47942p == 2 || u()) {
                this.f47951y = null;
                if (obj2 instanceof Exception) {
                    this.f47929c.b((Exception) obj2, false);
                    return;
                }
                try {
                    this.f47928b.f((byte[]) obj2);
                    this.f47929c.c();
                } catch (Exception e10) {
                    this.f47929c.b(e10, true);
                }
            }
        }
    }

    private boolean D() {
        if (u()) {
            return true;
        }
        try {
            byte[] c10 = this.f47928b.c();
            this.f47948v = c10;
            this.f47928b.i(c10, this.f47937k);
            this.f47946t = this.f47928b.h(this.f47948v);
            this.f47942p = 3;
            q(new oe.i() { // from class: sc.b
                @Override // oe.i
                public final void accept(Object obj) {
                    ((u.a) obj).k(r1);
                }
            });
            oe.a.e(this.f47948v);
            return true;
        } catch (NotProvisionedException unused) {
            this.f47929c.a(this);
            return false;
        } catch (Exception e10) {
            v(e10, 1);
            return false;
        }
    }

    private void E(byte[] bArr, int i10, boolean z10) {
        try {
            this.f47950x = this.f47928b.m(bArr, this.f47927a, i10, this.f47934h);
            ((c) w0.j(this.f47945s)).b(1, oe.a.e(this.f47950x), z10);
        } catch (Exception e10) {
            x(e10, true);
        }
    }

    private boolean G() {
        try {
            this.f47928b.d(this.f47948v, this.f47949w);
            return true;
        } catch (Exception e10) {
            v(e10, 1);
            return false;
        }
    }

    private void H() {
        if (Thread.currentThread() != this.f47940n.getThread()) {
            oe.y.j("DefaultDrmSession", "DefaultDrmSession accessed on the wrong thread.\nCurrent thread: " + Thread.currentThread().getName() + "\nExpected thread: " + this.f47940n.getThread().getName(), new IllegalStateException());
        }
    }

    private void q(oe.i iVar) {
        for (u.a aVar : this.f47935i.z0()) {
            iVar.accept(aVar);
        }
    }

    private void r(boolean z10) {
        if (!this.f47933g) {
            byte[] bArr = (byte[]) w0.j(this.f47948v);
            int i10 = this.f47931e;
            if (i10 != 0 && i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        oe.a.e(this.f47949w);
                        oe.a.e(this.f47948v);
                        E(this.f47949w, 3, z10);
                    }
                } else if (this.f47949w == null || G()) {
                    E(bArr, 2, z10);
                }
            } else if (this.f47949w == null) {
                E(bArr, 1, z10);
            } else if (this.f47942p != 4 && !G()) {
            } else {
                long s10 = s();
                if (this.f47931e == 0 && s10 <= 60) {
                    oe.y.b("DefaultDrmSession", "Offline license has expired or will expire soon. Remaining seconds: " + s10);
                    E(bArr, 2, z10);
                } else if (s10 <= 0) {
                    v(new i0(), 2);
                } else {
                    this.f47942p = 4;
                    q(new oe.i() { // from class: sc.c
                        @Override // oe.i
                        public final void accept(Object obj) {
                            ((u.a) obj).j();
                        }
                    });
                }
            }
        }
    }

    private long s() {
        if (!mc.d.f36228d.equals(this.f47939m)) {
            return LongCompanionObject.MAX_VALUE;
        }
        Pair pair = (Pair) oe.a.e(m0.b(this));
        return Math.min(((Long) pair.first).longValue(), ((Long) pair.second).longValue());
    }

    private boolean u() {
        int i10 = this.f47942p;
        if (i10 != 3 && i10 != 4) {
            return false;
        }
        return true;
    }

    private void v(final Exception exc, int i10) {
        this.f47947u = new n.a(exc, y.a(exc, i10));
        oe.y.d("DefaultDrmSession", "DRM session error", exc);
        q(new oe.i() { // from class: sc.d
            @Override // oe.i
            public final void accept(Object obj) {
                ((u.a) obj).l(exc);
            }
        });
        if (this.f47942p != 4) {
            this.f47942p = 1;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void w(Object obj, Object obj2) {
        if (obj == this.f47950x && u()) {
            this.f47950x = null;
            if (obj2 instanceof Exception) {
                x((Exception) obj2, false);
                return;
            }
            try {
                byte[] bArr = (byte[]) obj2;
                if (this.f47931e == 3) {
                    this.f47928b.l((byte[]) w0.j(this.f47949w), bArr);
                    q(new oe.i() { // from class: sc.e
                        @Override // oe.i
                        public final void accept(Object obj3) {
                            ((u.a) obj3).i();
                        }
                    });
                    return;
                }
                byte[] l10 = this.f47928b.l(this.f47948v, bArr);
                int i10 = this.f47931e;
                if ((i10 == 2 || (i10 == 0 && this.f47949w != null)) && l10 != null && l10.length != 0) {
                    this.f47949w = l10;
                }
                this.f47942p = 4;
                q(new oe.i() { // from class: sc.f
                    @Override // oe.i
                    public final void accept(Object obj3) {
                        ((u.a) obj3).h();
                    }
                });
            } catch (Exception e10) {
                x(e10, true);
            }
        }
    }

    private void x(Exception exc, boolean z10) {
        int i10;
        if (exc instanceof NotProvisionedException) {
            this.f47929c.a(this);
            return;
        }
        if (z10) {
            i10 = 1;
        } else {
            i10 = 2;
        }
        v(exc, i10);
    }

    private void y() {
        if (this.f47931e == 0 && this.f47942p == 4) {
            w0.j(this.f47948v);
            r(false);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void A() {
        if (D()) {
            r(true);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void B(Exception exc, boolean z10) {
        int i10;
        if (z10) {
            i10 = 1;
        } else {
            i10 = 3;
        }
        v(exc, i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F() {
        this.f47951y = this.f47928b.b();
        ((c) w0.j(this.f47945s)).b(0, oe.a.e(this.f47951y), true);
    }

    @Override // sc.n
    public final UUID a() {
        H();
        return this.f47939m;
    }

    @Override // sc.n
    public boolean b() {
        H();
        return this.f47932f;
    }

    @Override // sc.n
    public void c(u.a aVar) {
        H();
        boolean z10 = false;
        if (this.f47943q < 0) {
            oe.y.c("DefaultDrmSession", "Session reference count less than zero: " + this.f47943q);
            this.f47943q = 0;
        }
        if (aVar != null) {
            this.f47935i.b(aVar);
        }
        int i10 = this.f47943q + 1;
        this.f47943q = i10;
        if (i10 == 1) {
            if (this.f47942p == 2) {
                z10 = true;
            }
            oe.a.g(z10);
            HandlerThread handlerThread = new HandlerThread("ExoPlayer:DrmRequestHandler");
            this.f47944r = handlerThread;
            handlerThread.start();
            this.f47945s = new c(this.f47944r.getLooper());
            if (D()) {
                r(true);
            }
        } else if (aVar != null && u() && this.f47935i.c(aVar) == 1) {
            aVar.k(this.f47942p);
        }
        this.f47930d.a(this, this.f47943q);
    }

    @Override // sc.n
    public void d(u.a aVar) {
        H();
        int i10 = this.f47943q;
        if (i10 <= 0) {
            oe.y.c("DefaultDrmSession", "release() called on a session that's already fully released.");
            return;
        }
        int i11 = i10 - 1;
        this.f47943q = i11;
        if (i11 == 0) {
            this.f47942p = 0;
            ((e) w0.j(this.f47941o)).removeCallbacksAndMessages(null);
            ((c) w0.j(this.f47945s)).c();
            this.f47945s = null;
            ((HandlerThread) w0.j(this.f47944r)).quit();
            this.f47944r = null;
            this.f47946t = null;
            this.f47947u = null;
            this.f47950x = null;
            this.f47951y = null;
            byte[] bArr = this.f47948v;
            if (bArr != null) {
                this.f47928b.k(bArr);
                this.f47948v = null;
            }
        }
        if (aVar != null) {
            this.f47935i.d(aVar);
            if (this.f47935i.c(aVar) == 0) {
                aVar.m();
            }
        }
        this.f47930d.b(this, this.f47943q);
    }

    @Override // sc.n
    public final rc.b e() {
        H();
        return this.f47946t;
    }

    @Override // sc.n
    public Map g() {
        H();
        byte[] bArr = this.f47948v;
        if (bArr == null) {
            return null;
        }
        return this.f47928b.a(bArr);
    }

    @Override // sc.n
    public final n.a getError() {
        H();
        if (this.f47942p == 1) {
            return this.f47947u;
        }
        return null;
    }

    @Override // sc.n
    public final int getState() {
        H();
        return this.f47942p;
    }

    @Override // sc.n
    public boolean h(String str) {
        H();
        return this.f47928b.j((byte[]) oe.a.i(this.f47948v), str);
    }

    public boolean t(byte[] bArr) {
        H();
        return Arrays.equals(this.f47948v, bArr);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void z(int i10) {
        if (i10 != 2) {
            return;
        }
        y();
    }
}
