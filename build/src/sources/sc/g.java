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
    public final List f49611a;

    /* renamed from: b  reason: collision with root package name */
    private final b0 f49612b;

    /* renamed from: c  reason: collision with root package name */
    private final a f49613c;

    /* renamed from: d  reason: collision with root package name */
    private final b f49614d;

    /* renamed from: e  reason: collision with root package name */
    private final int f49615e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f49616f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f49617g;

    /* renamed from: h  reason: collision with root package name */
    private final HashMap f49618h;

    /* renamed from: i  reason: collision with root package name */
    private final oe.j f49619i;

    /* renamed from: j  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f49620j;

    /* renamed from: k  reason: collision with root package name */
    private final t1 f49621k;

    /* renamed from: l  reason: collision with root package name */
    private final j0 f49622l;

    /* renamed from: m  reason: collision with root package name */
    private final UUID f49623m;

    /* renamed from: n  reason: collision with root package name */
    private final Looper f49624n;

    /* renamed from: o  reason: collision with root package name */
    private final e f49625o;

    /* renamed from: p  reason: collision with root package name */
    private int f49626p;

    /* renamed from: q  reason: collision with root package name */
    private int f49627q;

    /* renamed from: r  reason: collision with root package name */
    private HandlerThread f49628r;

    /* renamed from: s  reason: collision with root package name */
    private c f49629s;

    /* renamed from: t  reason: collision with root package name */
    private rc.b f49630t;

    /* renamed from: u  reason: collision with root package name */
    private n.a f49631u;

    /* renamed from: v  reason: collision with root package name */
    private byte[] f49632v;

    /* renamed from: w  reason: collision with root package name */
    private byte[] f49633w;

    /* renamed from: x  reason: collision with root package name */
    private b0.a f49634x;

    /* renamed from: y  reason: collision with root package name */
    private b0.d f49635y;

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
        private boolean f49636a;

        public c(Looper looper) {
            super(looper);
        }

        private boolean a(Message message, k0 k0Var) {
            IOException fVar;
            d dVar = (d) message.obj;
            if (!dVar.f49639b) {
                return false;
            }
            int i10 = dVar.f49642e + 1;
            dVar.f49642e = i10;
            if (i10 > g.this.f49620j.b(3)) {
                return false;
            }
            LoadEventInfo loadEventInfo = new LoadEventInfo(dVar.f49638a, k0Var.f49698d, k0Var.f49699e, k0Var.f49700i, SystemClock.elapsedRealtime(), SystemClock.elapsedRealtime() - dVar.f49640c, k0Var.f49701o);
            MediaLoadData mediaLoadData = new MediaLoadData(3);
            if (k0Var.getCause() instanceof IOException) {
                fVar = (IOException) k0Var.getCause();
            } else {
                fVar = new f(k0Var.getCause());
            }
            long a10 = g.this.f49620j.a(new i.c(loadEventInfo, mediaLoadData, fVar, dVar.f49642e));
            if (a10 == -9223372036854775807L) {
                return false;
            }
            synchronized (this) {
                try {
                    if (this.f49636a) {
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
            this.f49636a = true;
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
                        bArr = g.this.f49622l.a(g.this.f49623m, (b0.a) dVar.f49641d);
                    } else {
                        throw new RuntimeException();
                    }
                } else {
                    bArr = g.this.f49622l.b(g.this.f49623m, (b0.d) dVar.f49641d);
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
            g.this.f49620j.d(dVar.f49638a);
            synchronized (this) {
                try {
                    if (!this.f49636a) {
                        g.this.f49625o.obtainMessage(message.what, Pair.create(dVar.f49641d, bArr)).sendToTarget();
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
        public final long f49638a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f49639b;

        /* renamed from: c  reason: collision with root package name */
        public final long f49640c;

        /* renamed from: d  reason: collision with root package name */
        public final Object f49641d;

        /* renamed from: e  reason: collision with root package name */
        public int f49642e;

        public d(long j10, boolean z10, long j11, Object obj) {
            this.f49638a = j10;
            this.f49639b = z10;
            this.f49640c = j11;
            this.f49641d = obj;
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
        this.f49623m = uuid;
        this.f49613c = aVar;
        this.f49614d = bVar;
        this.f49612b = b0Var;
        this.f49615e = i10;
        this.f49616f = z10;
        this.f49617g = z11;
        if (bArr != null) {
            this.f49633w = bArr;
            this.f49611a = null;
        } else {
            this.f49611a = Collections.unmodifiableList((List) oe.a.e(list));
        }
        this.f49618h = hashMap;
        this.f49622l = j0Var;
        this.f49619i = new oe.j();
        this.f49620j = iVar;
        this.f49621k = t1Var;
        this.f49626p = 2;
        this.f49624n = looper;
        this.f49625o = new e(looper);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void C(Object obj, Object obj2) {
        if (obj == this.f49635y) {
            if (this.f49626p == 2 || u()) {
                this.f49635y = null;
                if (obj2 instanceof Exception) {
                    this.f49613c.b((Exception) obj2, false);
                    return;
                }
                try {
                    this.f49612b.f((byte[]) obj2);
                    this.f49613c.c();
                } catch (Exception e10) {
                    this.f49613c.b(e10, true);
                }
            }
        }
    }

    private boolean D() {
        if (u()) {
            return true;
        }
        try {
            byte[] c10 = this.f49612b.c();
            this.f49632v = c10;
            this.f49612b.i(c10, this.f49621k);
            this.f49630t = this.f49612b.h(this.f49632v);
            this.f49626p = 3;
            q(new oe.i() { // from class: sc.b
                @Override // oe.i
                public final void accept(Object obj) {
                    ((u.a) obj).k(r1);
                }
            });
            oe.a.e(this.f49632v);
            return true;
        } catch (NotProvisionedException unused) {
            this.f49613c.a(this);
            return false;
        } catch (Exception e10) {
            v(e10, 1);
            return false;
        }
    }

    private void E(byte[] bArr, int i10, boolean z10) {
        try {
            this.f49634x = this.f49612b.m(bArr, this.f49611a, i10, this.f49618h);
            ((c) w0.j(this.f49629s)).b(1, oe.a.e(this.f49634x), z10);
        } catch (Exception e10) {
            x(e10, true);
        }
    }

    private boolean G() {
        try {
            this.f49612b.d(this.f49632v, this.f49633w);
            return true;
        } catch (Exception e10) {
            v(e10, 1);
            return false;
        }
    }

    private void H() {
        if (Thread.currentThread() != this.f49624n.getThread()) {
            oe.y.j("DefaultDrmSession", "DefaultDrmSession accessed on the wrong thread.\nCurrent thread: " + Thread.currentThread().getName() + "\nExpected thread: " + this.f49624n.getThread().getName(), new IllegalStateException());
        }
    }

    private void q(oe.i iVar) {
        for (u.a aVar : this.f49619i.D0()) {
            iVar.accept(aVar);
        }
    }

    private void r(boolean z10) {
        if (!this.f49617g) {
            byte[] bArr = (byte[]) w0.j(this.f49632v);
            int i10 = this.f49615e;
            if (i10 != 0 && i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        oe.a.e(this.f49633w);
                        oe.a.e(this.f49632v);
                        E(this.f49633w, 3, z10);
                    }
                } else if (this.f49633w == null || G()) {
                    E(bArr, 2, z10);
                }
            } else if (this.f49633w == null) {
                E(bArr, 1, z10);
            } else if (this.f49626p != 4 && !G()) {
            } else {
                long s10 = s();
                if (this.f49615e == 0 && s10 <= 60) {
                    oe.y.b("DefaultDrmSession", "Offline license has expired or will expire soon. Remaining seconds: " + s10);
                    E(bArr, 2, z10);
                } else if (s10 <= 0) {
                    v(new i0(), 2);
                } else {
                    this.f49626p = 4;
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
        if (!mc.d.f36853d.equals(this.f49623m)) {
            return LongCompanionObject.MAX_VALUE;
        }
        Pair pair = (Pair) oe.a.e(m0.b(this));
        return Math.min(((Long) pair.first).longValue(), ((Long) pair.second).longValue());
    }

    private boolean u() {
        int i10 = this.f49626p;
        if (i10 != 3 && i10 != 4) {
            return false;
        }
        return true;
    }

    private void v(final Exception exc, int i10) {
        this.f49631u = new n.a(exc, y.a(exc, i10));
        oe.y.d("DefaultDrmSession", "DRM session error", exc);
        q(new oe.i() { // from class: sc.d
            @Override // oe.i
            public final void accept(Object obj) {
                ((u.a) obj).l(exc);
            }
        });
        if (this.f49626p != 4) {
            this.f49626p = 1;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void w(Object obj, Object obj2) {
        if (obj == this.f49634x && u()) {
            this.f49634x = null;
            if (obj2 instanceof Exception) {
                x((Exception) obj2, false);
                return;
            }
            try {
                byte[] bArr = (byte[]) obj2;
                if (this.f49615e == 3) {
                    this.f49612b.l((byte[]) w0.j(this.f49633w), bArr);
                    q(new oe.i() { // from class: sc.e
                        @Override // oe.i
                        public final void accept(Object obj3) {
                            ((u.a) obj3).i();
                        }
                    });
                    return;
                }
                byte[] l10 = this.f49612b.l(this.f49632v, bArr);
                int i10 = this.f49615e;
                if ((i10 == 2 || (i10 == 0 && this.f49633w != null)) && l10 != null && l10.length != 0) {
                    this.f49633w = l10;
                }
                this.f49626p = 4;
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
            this.f49613c.a(this);
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
        if (this.f49615e == 0 && this.f49626p == 4) {
            w0.j(this.f49632v);
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
        this.f49635y = this.f49612b.b();
        ((c) w0.j(this.f49629s)).b(0, oe.a.e(this.f49635y), true);
    }

    @Override // sc.n
    public final UUID a() {
        H();
        return this.f49623m;
    }

    @Override // sc.n
    public boolean b() {
        H();
        return this.f49616f;
    }

    @Override // sc.n
    public void c(u.a aVar) {
        H();
        boolean z10 = false;
        if (this.f49627q < 0) {
            oe.y.c("DefaultDrmSession", "Session reference count less than zero: " + this.f49627q);
            this.f49627q = 0;
        }
        if (aVar != null) {
            this.f49619i.b(aVar);
        }
        int i10 = this.f49627q + 1;
        this.f49627q = i10;
        if (i10 == 1) {
            if (this.f49626p == 2) {
                z10 = true;
            }
            oe.a.g(z10);
            HandlerThread handlerThread = new HandlerThread("ExoPlayer:DrmRequestHandler");
            this.f49628r = handlerThread;
            handlerThread.start();
            this.f49629s = new c(this.f49628r.getLooper());
            if (D()) {
                r(true);
            }
        } else if (aVar != null && u() && this.f49619i.c(aVar) == 1) {
            aVar.k(this.f49626p);
        }
        this.f49614d.a(this, this.f49627q);
    }

    @Override // sc.n
    public void d(u.a aVar) {
        H();
        int i10 = this.f49627q;
        if (i10 <= 0) {
            oe.y.c("DefaultDrmSession", "release() called on a session that's already fully released.");
            return;
        }
        int i11 = i10 - 1;
        this.f49627q = i11;
        if (i11 == 0) {
            this.f49626p = 0;
            ((e) w0.j(this.f49625o)).removeCallbacksAndMessages(null);
            ((c) w0.j(this.f49629s)).c();
            this.f49629s = null;
            ((HandlerThread) w0.j(this.f49628r)).quit();
            this.f49628r = null;
            this.f49630t = null;
            this.f49631u = null;
            this.f49634x = null;
            this.f49635y = null;
            byte[] bArr = this.f49632v;
            if (bArr != null) {
                this.f49612b.k(bArr);
                this.f49632v = null;
            }
        }
        if (aVar != null) {
            this.f49619i.d(aVar);
            if (this.f49619i.c(aVar) == 0) {
                aVar.m();
            }
        }
        this.f49614d.b(this, this.f49627q);
    }

    @Override // sc.n
    public final rc.b e() {
        H();
        return this.f49630t;
    }

    @Override // sc.n
    public Map g() {
        H();
        byte[] bArr = this.f49632v;
        if (bArr == null) {
            return null;
        }
        return this.f49612b.a(bArr);
    }

    @Override // sc.n
    public final n.a getError() {
        H();
        if (this.f49626p == 1) {
            return this.f49631u;
        }
        return null;
    }

    @Override // sc.n
    public final int getState() {
        H();
        return this.f49626p;
    }

    @Override // sc.n
    public boolean h(String str) {
        H();
        return this.f49612b.j((byte[]) oe.a.i(this.f49632v), str);
    }

    public boolean t(byte[] bArr) {
        H();
        return Arrays.equals(this.f49632v, bArr);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void z(int i10) {
        if (i10 != 2) {
            return;
        }
        y();
    }
}
