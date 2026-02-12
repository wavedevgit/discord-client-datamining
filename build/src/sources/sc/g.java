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
    public final List f47928a;

    /* renamed from: b  reason: collision with root package name */
    private final b0 f47929b;

    /* renamed from: c  reason: collision with root package name */
    private final a f47930c;

    /* renamed from: d  reason: collision with root package name */
    private final b f47931d;

    /* renamed from: e  reason: collision with root package name */
    private final int f47932e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f47933f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f47934g;

    /* renamed from: h  reason: collision with root package name */
    private final HashMap f47935h;

    /* renamed from: i  reason: collision with root package name */
    private final oe.j f47936i;

    /* renamed from: j  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f47937j;

    /* renamed from: k  reason: collision with root package name */
    private final t1 f47938k;

    /* renamed from: l  reason: collision with root package name */
    private final j0 f47939l;

    /* renamed from: m  reason: collision with root package name */
    private final UUID f47940m;

    /* renamed from: n  reason: collision with root package name */
    private final Looper f47941n;

    /* renamed from: o  reason: collision with root package name */
    private final e f47942o;

    /* renamed from: p  reason: collision with root package name */
    private int f47943p;

    /* renamed from: q  reason: collision with root package name */
    private int f47944q;

    /* renamed from: r  reason: collision with root package name */
    private HandlerThread f47945r;

    /* renamed from: s  reason: collision with root package name */
    private c f47946s;

    /* renamed from: t  reason: collision with root package name */
    private rc.b f47947t;

    /* renamed from: u  reason: collision with root package name */
    private n.a f47948u;

    /* renamed from: v  reason: collision with root package name */
    private byte[] f47949v;

    /* renamed from: w  reason: collision with root package name */
    private byte[] f47950w;

    /* renamed from: x  reason: collision with root package name */
    private b0.a f47951x;

    /* renamed from: y  reason: collision with root package name */
    private b0.d f47952y;

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
        private boolean f47953a;

        public c(Looper looper) {
            super(looper);
        }

        private boolean a(Message message, k0 k0Var) {
            IOException fVar;
            d dVar = (d) message.obj;
            if (!dVar.f47956b) {
                return false;
            }
            int i10 = dVar.f47959e + 1;
            dVar.f47959e = i10;
            if (i10 > g.this.f47937j.b(3)) {
                return false;
            }
            LoadEventInfo loadEventInfo = new LoadEventInfo(dVar.f47955a, k0Var.f48015d, k0Var.f48016e, k0Var.f48017i, SystemClock.elapsedRealtime(), SystemClock.elapsedRealtime() - dVar.f47957c, k0Var.f48018o);
            MediaLoadData mediaLoadData = new MediaLoadData(3);
            if (k0Var.getCause() instanceof IOException) {
                fVar = (IOException) k0Var.getCause();
            } else {
                fVar = new f(k0Var.getCause());
            }
            long a10 = g.this.f47937j.a(new i.c(loadEventInfo, mediaLoadData, fVar, dVar.f47959e));
            if (a10 == -9223372036854775807L) {
                return false;
            }
            synchronized (this) {
                try {
                    if (this.f47953a) {
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
            this.f47953a = true;
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
                        bArr = g.this.f47939l.a(g.this.f47940m, (b0.a) dVar.f47958d);
                    } else {
                        throw new RuntimeException();
                    }
                } else {
                    bArr = g.this.f47939l.b(g.this.f47940m, (b0.d) dVar.f47958d);
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
            g.this.f47937j.d(dVar.f47955a);
            synchronized (this) {
                try {
                    if (!this.f47953a) {
                        g.this.f47942o.obtainMessage(message.what, Pair.create(dVar.f47958d, bArr)).sendToTarget();
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
        public final long f47955a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f47956b;

        /* renamed from: c  reason: collision with root package name */
        public final long f47957c;

        /* renamed from: d  reason: collision with root package name */
        public final Object f47958d;

        /* renamed from: e  reason: collision with root package name */
        public int f47959e;

        public d(long j10, boolean z10, long j11, Object obj) {
            this.f47955a = j10;
            this.f47956b = z10;
            this.f47957c = j11;
            this.f47958d = obj;
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
        this.f47940m = uuid;
        this.f47930c = aVar;
        this.f47931d = bVar;
        this.f47929b = b0Var;
        this.f47932e = i10;
        this.f47933f = z10;
        this.f47934g = z11;
        if (bArr != null) {
            this.f47950w = bArr;
            this.f47928a = null;
        } else {
            this.f47928a = Collections.unmodifiableList((List) oe.a.e(list));
        }
        this.f47935h = hashMap;
        this.f47939l = j0Var;
        this.f47936i = new oe.j();
        this.f47937j = iVar;
        this.f47938k = t1Var;
        this.f47943p = 2;
        this.f47941n = looper;
        this.f47942o = new e(looper);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void C(Object obj, Object obj2) {
        if (obj == this.f47952y) {
            if (this.f47943p == 2 || u()) {
                this.f47952y = null;
                if (obj2 instanceof Exception) {
                    this.f47930c.b((Exception) obj2, false);
                    return;
                }
                try {
                    this.f47929b.f((byte[]) obj2);
                    this.f47930c.c();
                } catch (Exception e10) {
                    this.f47930c.b(e10, true);
                }
            }
        }
    }

    private boolean D() {
        if (u()) {
            return true;
        }
        try {
            byte[] c10 = this.f47929b.c();
            this.f47949v = c10;
            this.f47929b.i(c10, this.f47938k);
            this.f47947t = this.f47929b.h(this.f47949v);
            this.f47943p = 3;
            q(new oe.i() { // from class: sc.b
                @Override // oe.i
                public final void accept(Object obj) {
                    ((u.a) obj).k(r1);
                }
            });
            oe.a.e(this.f47949v);
            return true;
        } catch (NotProvisionedException unused) {
            this.f47930c.a(this);
            return false;
        } catch (Exception e10) {
            v(e10, 1);
            return false;
        }
    }

    private void E(byte[] bArr, int i10, boolean z10) {
        try {
            this.f47951x = this.f47929b.m(bArr, this.f47928a, i10, this.f47935h);
            ((c) w0.j(this.f47946s)).b(1, oe.a.e(this.f47951x), z10);
        } catch (Exception e10) {
            x(e10, true);
        }
    }

    private boolean G() {
        try {
            this.f47929b.d(this.f47949v, this.f47950w);
            return true;
        } catch (Exception e10) {
            v(e10, 1);
            return false;
        }
    }

    private void H() {
        if (Thread.currentThread() != this.f47941n.getThread()) {
            oe.y.j("DefaultDrmSession", "DefaultDrmSession accessed on the wrong thread.\nCurrent thread: " + Thread.currentThread().getName() + "\nExpected thread: " + this.f47941n.getThread().getName(), new IllegalStateException());
        }
    }

    private void q(oe.i iVar) {
        for (u.a aVar : this.f47936i.z0()) {
            iVar.accept(aVar);
        }
    }

    private void r(boolean z10) {
        if (!this.f47934g) {
            byte[] bArr = (byte[]) w0.j(this.f47949v);
            int i10 = this.f47932e;
            if (i10 != 0 && i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        oe.a.e(this.f47950w);
                        oe.a.e(this.f47949v);
                        E(this.f47950w, 3, z10);
                    }
                } else if (this.f47950w == null || G()) {
                    E(bArr, 2, z10);
                }
            } else if (this.f47950w == null) {
                E(bArr, 1, z10);
            } else if (this.f47943p != 4 && !G()) {
            } else {
                long s10 = s();
                if (this.f47932e == 0 && s10 <= 60) {
                    oe.y.b("DefaultDrmSession", "Offline license has expired or will expire soon. Remaining seconds: " + s10);
                    E(bArr, 2, z10);
                } else if (s10 <= 0) {
                    v(new i0(), 2);
                } else {
                    this.f47943p = 4;
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
        if (!mc.d.f36229d.equals(this.f47940m)) {
            return LongCompanionObject.MAX_VALUE;
        }
        Pair pair = (Pair) oe.a.e(m0.b(this));
        return Math.min(((Long) pair.first).longValue(), ((Long) pair.second).longValue());
    }

    private boolean u() {
        int i10 = this.f47943p;
        if (i10 != 3 && i10 != 4) {
            return false;
        }
        return true;
    }

    private void v(final Exception exc, int i10) {
        this.f47948u = new n.a(exc, y.a(exc, i10));
        oe.y.d("DefaultDrmSession", "DRM session error", exc);
        q(new oe.i() { // from class: sc.d
            @Override // oe.i
            public final void accept(Object obj) {
                ((u.a) obj).l(exc);
            }
        });
        if (this.f47943p != 4) {
            this.f47943p = 1;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void w(Object obj, Object obj2) {
        if (obj == this.f47951x && u()) {
            this.f47951x = null;
            if (obj2 instanceof Exception) {
                x((Exception) obj2, false);
                return;
            }
            try {
                byte[] bArr = (byte[]) obj2;
                if (this.f47932e == 3) {
                    this.f47929b.l((byte[]) w0.j(this.f47950w), bArr);
                    q(new oe.i() { // from class: sc.e
                        @Override // oe.i
                        public final void accept(Object obj3) {
                            ((u.a) obj3).i();
                        }
                    });
                    return;
                }
                byte[] l10 = this.f47929b.l(this.f47949v, bArr);
                int i10 = this.f47932e;
                if ((i10 == 2 || (i10 == 0 && this.f47950w != null)) && l10 != null && l10.length != 0) {
                    this.f47950w = l10;
                }
                this.f47943p = 4;
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
            this.f47930c.a(this);
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
        if (this.f47932e == 0 && this.f47943p == 4) {
            w0.j(this.f47949v);
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
        this.f47952y = this.f47929b.b();
        ((c) w0.j(this.f47946s)).b(0, oe.a.e(this.f47952y), true);
    }

    @Override // sc.n
    public final UUID a() {
        H();
        return this.f47940m;
    }

    @Override // sc.n
    public boolean b() {
        H();
        return this.f47933f;
    }

    @Override // sc.n
    public void c(u.a aVar) {
        H();
        boolean z10 = false;
        if (this.f47944q < 0) {
            oe.y.c("DefaultDrmSession", "Session reference count less than zero: " + this.f47944q);
            this.f47944q = 0;
        }
        if (aVar != null) {
            this.f47936i.b(aVar);
        }
        int i10 = this.f47944q + 1;
        this.f47944q = i10;
        if (i10 == 1) {
            if (this.f47943p == 2) {
                z10 = true;
            }
            oe.a.g(z10);
            HandlerThread handlerThread = new HandlerThread("ExoPlayer:DrmRequestHandler");
            this.f47945r = handlerThread;
            handlerThread.start();
            this.f47946s = new c(this.f47945r.getLooper());
            if (D()) {
                r(true);
            }
        } else if (aVar != null && u() && this.f47936i.c(aVar) == 1) {
            aVar.k(this.f47943p);
        }
        this.f47931d.a(this, this.f47944q);
    }

    @Override // sc.n
    public void d(u.a aVar) {
        H();
        int i10 = this.f47944q;
        if (i10 <= 0) {
            oe.y.c("DefaultDrmSession", "release() called on a session that's already fully released.");
            return;
        }
        int i11 = i10 - 1;
        this.f47944q = i11;
        if (i11 == 0) {
            this.f47943p = 0;
            ((e) w0.j(this.f47942o)).removeCallbacksAndMessages(null);
            ((c) w0.j(this.f47946s)).c();
            this.f47946s = null;
            ((HandlerThread) w0.j(this.f47945r)).quit();
            this.f47945r = null;
            this.f47947t = null;
            this.f47948u = null;
            this.f47951x = null;
            this.f47952y = null;
            byte[] bArr = this.f47949v;
            if (bArr != null) {
                this.f47929b.k(bArr);
                this.f47949v = null;
            }
        }
        if (aVar != null) {
            this.f47936i.d(aVar);
            if (this.f47936i.c(aVar) == 0) {
                aVar.m();
            }
        }
        this.f47931d.b(this, this.f47944q);
    }

    @Override // sc.n
    public final rc.b e() {
        H();
        return this.f47947t;
    }

    @Override // sc.n
    public Map g() {
        H();
        byte[] bArr = this.f47949v;
        if (bArr == null) {
            return null;
        }
        return this.f47929b.a(bArr);
    }

    @Override // sc.n
    public final n.a getError() {
        H();
        if (this.f47943p == 1) {
            return this.f47948u;
        }
        return null;
    }

    @Override // sc.n
    public final int getState() {
        H();
        return this.f47943p;
    }

    @Override // sc.n
    public boolean h(String str) {
        H();
        return this.f47929b.j((byte[]) oe.a.i(this.f47949v), str);
    }

    public boolean t(byte[] bArr) {
        H();
        return Arrays.equals(this.f47949v, bArr);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void z(int i10) {
        if (i10 != 2) {
            return;
        }
        y();
    }
}
