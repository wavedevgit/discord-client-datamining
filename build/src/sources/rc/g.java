package rc;

import android.media.NotProvisionedException;
import android.os.Handler;
import android.os.HandlerThread;
import android.os.Looper;
import android.os.Message;
import android.os.SystemClock;
import android.util.Pair;
import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.source.MediaLoadData;
import com.google.android.exoplayer2.upstream.h;
import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import kotlin.jvm.internal.LongCompanionObject;
import mc.t1;
import ne.w0;
import rc.b0;
import rc.n;
import rc.u;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g implements n {

    /* renamed from: a  reason: collision with root package name */
    public final List f48644a;

    /* renamed from: b  reason: collision with root package name */
    private final b0 f48645b;

    /* renamed from: c  reason: collision with root package name */
    private final a f48646c;

    /* renamed from: d  reason: collision with root package name */
    private final b f48647d;

    /* renamed from: e  reason: collision with root package name */
    private final int f48648e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f48649f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f48650g;

    /* renamed from: h  reason: collision with root package name */
    private final HashMap f48651h;

    /* renamed from: i  reason: collision with root package name */
    private final ne.j f48652i;

    /* renamed from: j  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.h f48653j;

    /* renamed from: k  reason: collision with root package name */
    private final t1 f48654k;

    /* renamed from: l  reason: collision with root package name */
    private final j0 f48655l;

    /* renamed from: m  reason: collision with root package name */
    private final UUID f48656m;

    /* renamed from: n  reason: collision with root package name */
    private final Looper f48657n;

    /* renamed from: o  reason: collision with root package name */
    private final e f48658o;

    /* renamed from: p  reason: collision with root package name */
    private int f48659p;

    /* renamed from: q  reason: collision with root package name */
    private int f48660q;

    /* renamed from: r  reason: collision with root package name */
    private HandlerThread f48661r;

    /* renamed from: s  reason: collision with root package name */
    private c f48662s;

    /* renamed from: t  reason: collision with root package name */
    private qc.b f48663t;

    /* renamed from: u  reason: collision with root package name */
    private n.a f48664u;

    /* renamed from: v  reason: collision with root package name */
    private byte[] f48665v;

    /* renamed from: w  reason: collision with root package name */
    private byte[] f48666w;

    /* renamed from: x  reason: collision with root package name */
    private b0.a f48667x;

    /* renamed from: y  reason: collision with root package name */
    private b0.d f48668y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void a(Exception exc, boolean z10);

        void b(g gVar);

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
        private boolean f48669a;

        public c(Looper looper) {
            super(looper);
        }

        private boolean a(Message message, k0 k0Var) {
            IOException fVar;
            d dVar = (d) message.obj;
            if (!dVar.f48672b) {
                return false;
            }
            int i10 = dVar.f48675e + 1;
            dVar.f48675e = i10;
            if (i10 > g.this.f48653j.b(3)) {
                return false;
            }
            LoadEventInfo loadEventInfo = new LoadEventInfo(dVar.f48671a, k0Var.f48731d, k0Var.f48732e, k0Var.f48733i, SystemClock.elapsedRealtime(), SystemClock.elapsedRealtime() - dVar.f48673c, k0Var.f48734o);
            MediaLoadData mediaLoadData = new MediaLoadData(3);
            if (k0Var.getCause() instanceof IOException) {
                fVar = (IOException) k0Var.getCause();
            } else {
                fVar = new f(k0Var.getCause());
            }
            long a10 = g.this.f48653j.a(new h.c(loadEventInfo, mediaLoadData, fVar, dVar.f48675e));
            if (a10 == -9223372036854775807L) {
                return false;
            }
            synchronized (this) {
                try {
                    if (this.f48669a) {
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
            this.f48669a = true;
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
                        bArr = g.this.f48655l.a(g.this.f48656m, (b0.a) dVar.f48674d);
                    } else {
                        throw new RuntimeException();
                    }
                } else {
                    bArr = g.this.f48655l.b(g.this.f48656m, (b0.d) dVar.f48674d);
                }
            } catch (k0 e10) {
                boolean a10 = a(message, e10);
                bArr = e10;
                if (a10) {
                    return;
                }
            } catch (Exception e11) {
                ne.y.j("DefaultDrmSession", "Key/provisioning request produced an unexpected exception. Not retrying.", e11);
                bArr = e11;
            }
            g.this.f48653j.d(dVar.f48671a);
            synchronized (this) {
                try {
                    if (!this.f48669a) {
                        g.this.f48658o.obtainMessage(message.what, Pair.create(dVar.f48674d, bArr)).sendToTarget();
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
        public final long f48671a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f48672b;

        /* renamed from: c  reason: collision with root package name */
        public final long f48673c;

        /* renamed from: d  reason: collision with root package name */
        public final Object f48674d;

        /* renamed from: e  reason: collision with root package name */
        public int f48675e;

        public d(long j10, boolean z10, long j11, Object obj) {
            this.f48671a = j10;
            this.f48672b = z10;
            this.f48673c = j11;
            this.f48674d = obj;
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

    public g(UUID uuid, b0 b0Var, a aVar, b bVar, List list, int i10, boolean z10, boolean z11, byte[] bArr, HashMap hashMap, j0 j0Var, Looper looper, com.google.android.exoplayer2.upstream.h hVar, t1 t1Var) {
        if (i10 == 1 || i10 == 3) {
            ne.a.e(bArr);
        }
        this.f48656m = uuid;
        this.f48646c = aVar;
        this.f48647d = bVar;
        this.f48645b = b0Var;
        this.f48648e = i10;
        this.f48649f = z10;
        this.f48650g = z11;
        if (bArr != null) {
            this.f48666w = bArr;
            this.f48644a = null;
        } else {
            this.f48644a = Collections.unmodifiableList((List) ne.a.e(list));
        }
        this.f48651h = hashMap;
        this.f48655l = j0Var;
        this.f48652i = new ne.j();
        this.f48653j = hVar;
        this.f48654k = t1Var;
        this.f48659p = 2;
        this.f48657n = looper;
        this.f48658o = new e(looper);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void C(Object obj, Object obj2) {
        if (obj == this.f48668y) {
            if (this.f48659p == 2 || u()) {
                this.f48668y = null;
                if (obj2 instanceof Exception) {
                    this.f48646c.a((Exception) obj2, false);
                    return;
                }
                try {
                    this.f48645b.e((byte[]) obj2);
                    this.f48646c.c();
                } catch (Exception e10) {
                    this.f48646c.a(e10, true);
                }
            }
        }
    }

    private boolean D() {
        if (u()) {
            return true;
        }
        try {
            byte[] c10 = this.f48645b.c();
            this.f48665v = c10;
            this.f48645b.m(c10, this.f48654k);
            this.f48663t = this.f48645b.h(this.f48665v);
            this.f48659p = 3;
            q(new ne.i() { // from class: rc.b
                @Override // ne.i
                public final void accept(Object obj) {
                    ((u.a) obj).k(r1);
                }
            });
            ne.a.e(this.f48665v);
            return true;
        } catch (NotProvisionedException unused) {
            this.f48646c.b(this);
            return false;
        } catch (Exception e10) {
            v(e10, 1);
            return false;
        }
    }

    private void E(byte[] bArr, int i10, boolean z10) {
        try {
            this.f48667x = this.f48645b.l(bArr, this.f48644a, i10, this.f48651h);
            ((c) w0.j(this.f48662s)).b(1, ne.a.e(this.f48667x), z10);
        } catch (Exception e10) {
            x(e10, true);
        }
    }

    private boolean G() {
        try {
            this.f48645b.d(this.f48665v, this.f48666w);
            return true;
        } catch (Exception e10) {
            v(e10, 1);
            return false;
        }
    }

    private void H() {
        if (Thread.currentThread() != this.f48657n.getThread()) {
            ne.y.j("DefaultDrmSession", "DefaultDrmSession accessed on the wrong thread.\nCurrent thread: " + Thread.currentThread().getName() + "\nExpected thread: " + this.f48657n.getThread().getName(), new IllegalStateException());
        }
    }

    private void q(ne.i iVar) {
        for (u.a aVar : this.f48652i.D0()) {
            iVar.accept(aVar);
        }
    }

    private void r(boolean z10) {
        if (!this.f48650g) {
            byte[] bArr = (byte[]) w0.j(this.f48665v);
            int i10 = this.f48648e;
            if (i10 != 0 && i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        ne.a.e(this.f48666w);
                        ne.a.e(this.f48665v);
                        E(this.f48666w, 3, z10);
                    }
                } else if (this.f48666w == null || G()) {
                    E(bArr, 2, z10);
                }
            } else if (this.f48666w == null) {
                E(bArr, 1, z10);
            } else if (this.f48659p != 4 && !G()) {
            } else {
                long s10 = s();
                if (this.f48648e == 0 && s10 <= 60) {
                    ne.y.b("DefaultDrmSession", "Offline license has expired or will expire soon. Remaining seconds: " + s10);
                    E(bArr, 2, z10);
                } else if (s10 <= 0) {
                    v(new i0(), 2);
                } else {
                    this.f48659p = 4;
                    q(new ne.i() { // from class: rc.c
                        @Override // ne.i
                        public final void accept(Object obj) {
                            ((u.a) obj).j();
                        }
                    });
                }
            }
        }
    }

    private long s() {
        if (!lc.d.f36655d.equals(this.f48656m)) {
            return LongCompanionObject.MAX_VALUE;
        }
        Pair pair = (Pair) ne.a.e(m0.b(this));
        return Math.min(((Long) pair.first).longValue(), ((Long) pair.second).longValue());
    }

    private boolean u() {
        int i10 = this.f48659p;
        if (i10 != 3 && i10 != 4) {
            return false;
        }
        return true;
    }

    private void v(final Exception exc, int i10) {
        this.f48664u = new n.a(exc, y.a(exc, i10));
        ne.y.d("DefaultDrmSession", "DRM session error", exc);
        q(new ne.i() { // from class: rc.d
            @Override // ne.i
            public final void accept(Object obj) {
                ((u.a) obj).l(exc);
            }
        });
        if (this.f48659p != 4) {
            this.f48659p = 1;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void w(Object obj, Object obj2) {
        if (obj == this.f48667x && u()) {
            this.f48667x = null;
            if (obj2 instanceof Exception) {
                x((Exception) obj2, false);
                return;
            }
            try {
                byte[] bArr = (byte[]) obj2;
                if (this.f48648e == 3) {
                    this.f48645b.k((byte[]) w0.j(this.f48666w), bArr);
                    q(new ne.i() { // from class: rc.e
                        @Override // ne.i
                        public final void accept(Object obj3) {
                            ((u.a) obj3).i();
                        }
                    });
                    return;
                }
                byte[] k10 = this.f48645b.k(this.f48665v, bArr);
                int i10 = this.f48648e;
                if ((i10 == 2 || (i10 == 0 && this.f48666w != null)) && k10 != null && k10.length != 0) {
                    this.f48666w = k10;
                }
                this.f48659p = 4;
                q(new ne.i() { // from class: rc.f
                    @Override // ne.i
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
            this.f48646c.b(this);
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
        if (this.f48648e == 0 && this.f48659p == 4) {
            w0.j(this.f48665v);
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
        this.f48668y = this.f48645b.b();
        ((c) w0.j(this.f48662s)).b(0, ne.a.e(this.f48668y), true);
    }

    @Override // rc.n
    public final UUID a() {
        H();
        return this.f48656m;
    }

    @Override // rc.n
    public void b(u.a aVar) {
        H();
        int i10 = this.f48660q;
        if (i10 <= 0) {
            ne.y.c("DefaultDrmSession", "release() called on a session that's already fully released.");
            return;
        }
        int i11 = i10 - 1;
        this.f48660q = i11;
        if (i11 == 0) {
            this.f48659p = 0;
            ((e) w0.j(this.f48658o)).removeCallbacksAndMessages(null);
            ((c) w0.j(this.f48662s)).c();
            this.f48662s = null;
            ((HandlerThread) w0.j(this.f48661r)).quit();
            this.f48661r = null;
            this.f48663t = null;
            this.f48664u = null;
            this.f48667x = null;
            this.f48668y = null;
            byte[] bArr = this.f48665v;
            if (bArr != null) {
                this.f48645b.j(bArr);
                this.f48665v = null;
            }
        }
        if (aVar != null) {
            this.f48652i.d(aVar);
            if (this.f48652i.c(aVar) == 0) {
                aVar.m();
            }
        }
        this.f48647d.b(this, this.f48660q);
    }

    @Override // rc.n
    public boolean c() {
        H();
        return this.f48649f;
    }

    @Override // rc.n
    public final qc.b d() {
        H();
        return this.f48663t;
    }

    @Override // rc.n
    public void e(u.a aVar) {
        H();
        boolean z10 = false;
        if (this.f48660q < 0) {
            ne.y.c("DefaultDrmSession", "Session reference count less than zero: " + this.f48660q);
            this.f48660q = 0;
        }
        if (aVar != null) {
            this.f48652i.b(aVar);
        }
        int i10 = this.f48660q + 1;
        this.f48660q = i10;
        if (i10 == 1) {
            if (this.f48659p == 2) {
                z10 = true;
            }
            ne.a.g(z10);
            HandlerThread handlerThread = new HandlerThread("ExoPlayer:DrmRequestHandler");
            this.f48661r = handlerThread;
            handlerThread.start();
            this.f48662s = new c(this.f48661r.getLooper());
            if (D()) {
                r(true);
            }
        } else if (aVar != null && u() && this.f48652i.c(aVar) == 1) {
            aVar.k(this.f48659p);
        }
        this.f48647d.a(this, this.f48660q);
    }

    @Override // rc.n
    public Map g() {
        H();
        byte[] bArr = this.f48665v;
        if (bArr == null) {
            return null;
        }
        return this.f48645b.a(bArr);
    }

    @Override // rc.n
    public final n.a getError() {
        H();
        if (this.f48659p == 1) {
            return this.f48664u;
        }
        return null;
    }

    @Override // rc.n
    public final int getState() {
        H();
        return this.f48659p;
    }

    @Override // rc.n
    public boolean h(String str) {
        H();
        return this.f48645b.i((byte[]) ne.a.i(this.f48665v), str);
    }

    public boolean t(byte[] bArr) {
        H();
        return Arrays.equals(this.f48665v, bArr);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void z(int i10) {
        if (i10 != 2) {
            return;
        }
        y();
    }
}
