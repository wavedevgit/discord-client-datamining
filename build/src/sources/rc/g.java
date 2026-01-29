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
    public final List f48120a;

    /* renamed from: b  reason: collision with root package name */
    private final b0 f48121b;

    /* renamed from: c  reason: collision with root package name */
    private final a f48122c;

    /* renamed from: d  reason: collision with root package name */
    private final b f48123d;

    /* renamed from: e  reason: collision with root package name */
    private final int f48124e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f48125f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f48126g;

    /* renamed from: h  reason: collision with root package name */
    private final HashMap f48127h;

    /* renamed from: i  reason: collision with root package name */
    private final ne.j f48128i;

    /* renamed from: j  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.h f48129j;

    /* renamed from: k  reason: collision with root package name */
    private final t1 f48130k;

    /* renamed from: l  reason: collision with root package name */
    private final j0 f48131l;

    /* renamed from: m  reason: collision with root package name */
    private final UUID f48132m;

    /* renamed from: n  reason: collision with root package name */
    private final Looper f48133n;

    /* renamed from: o  reason: collision with root package name */
    private final e f48134o;

    /* renamed from: p  reason: collision with root package name */
    private int f48135p;

    /* renamed from: q  reason: collision with root package name */
    private int f48136q;

    /* renamed from: r  reason: collision with root package name */
    private HandlerThread f48137r;

    /* renamed from: s  reason: collision with root package name */
    private c f48138s;

    /* renamed from: t  reason: collision with root package name */
    private qc.b f48139t;

    /* renamed from: u  reason: collision with root package name */
    private n.a f48140u;

    /* renamed from: v  reason: collision with root package name */
    private byte[] f48141v;

    /* renamed from: w  reason: collision with root package name */
    private byte[] f48142w;

    /* renamed from: x  reason: collision with root package name */
    private b0.a f48143x;

    /* renamed from: y  reason: collision with root package name */
    private b0.d f48144y;

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
        private boolean f48145a;

        public c(Looper looper) {
            super(looper);
        }

        private boolean a(Message message, k0 k0Var) {
            IOException fVar;
            d dVar = (d) message.obj;
            if (!dVar.f48148b) {
                return false;
            }
            int i10 = dVar.f48151e + 1;
            dVar.f48151e = i10;
            if (i10 > g.this.f48129j.b(3)) {
                return false;
            }
            LoadEventInfo loadEventInfo = new LoadEventInfo(dVar.f48147a, k0Var.f48207d, k0Var.f48208e, k0Var.f48209i, SystemClock.elapsedRealtime(), SystemClock.elapsedRealtime() - dVar.f48149c, k0Var.f48210o);
            MediaLoadData mediaLoadData = new MediaLoadData(3);
            if (k0Var.getCause() instanceof IOException) {
                fVar = (IOException) k0Var.getCause();
            } else {
                fVar = new f(k0Var.getCause());
            }
            long a10 = g.this.f48129j.a(new h.c(loadEventInfo, mediaLoadData, fVar, dVar.f48151e));
            if (a10 == -9223372036854775807L) {
                return false;
            }
            synchronized (this) {
                try {
                    if (this.f48145a) {
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
            this.f48145a = true;
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
                        bArr = g.this.f48131l.a(g.this.f48132m, (b0.a) dVar.f48150d);
                    } else {
                        throw new RuntimeException();
                    }
                } else {
                    bArr = g.this.f48131l.b(g.this.f48132m, (b0.d) dVar.f48150d);
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
            g.this.f48129j.d(dVar.f48147a);
            synchronized (this) {
                try {
                    if (!this.f48145a) {
                        g.this.f48134o.obtainMessage(message.what, Pair.create(dVar.f48150d, bArr)).sendToTarget();
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
        public final long f48147a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f48148b;

        /* renamed from: c  reason: collision with root package name */
        public final long f48149c;

        /* renamed from: d  reason: collision with root package name */
        public final Object f48150d;

        /* renamed from: e  reason: collision with root package name */
        public int f48151e;

        public d(long j10, boolean z10, long j11, Object obj) {
            this.f48147a = j10;
            this.f48148b = z10;
            this.f48149c = j11;
            this.f48150d = obj;
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
        this.f48132m = uuid;
        this.f48122c = aVar;
        this.f48123d = bVar;
        this.f48121b = b0Var;
        this.f48124e = i10;
        this.f48125f = z10;
        this.f48126g = z11;
        if (bArr != null) {
            this.f48142w = bArr;
            this.f48120a = null;
        } else {
            this.f48120a = Collections.unmodifiableList((List) ne.a.e(list));
        }
        this.f48127h = hashMap;
        this.f48131l = j0Var;
        this.f48128i = new ne.j();
        this.f48129j = hVar;
        this.f48130k = t1Var;
        this.f48135p = 2;
        this.f48133n = looper;
        this.f48134o = new e(looper);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void C(Object obj, Object obj2) {
        if (obj == this.f48144y) {
            if (this.f48135p == 2 || u()) {
                this.f48144y = null;
                if (obj2 instanceof Exception) {
                    this.f48122c.a((Exception) obj2, false);
                    return;
                }
                try {
                    this.f48121b.e((byte[]) obj2);
                    this.f48122c.c();
                } catch (Exception e10) {
                    this.f48122c.a(e10, true);
                }
            }
        }
    }

    private boolean D() {
        if (u()) {
            return true;
        }
        try {
            byte[] c10 = this.f48121b.c();
            this.f48141v = c10;
            this.f48121b.m(c10, this.f48130k);
            this.f48139t = this.f48121b.h(this.f48141v);
            this.f48135p = 3;
            q(new ne.i() { // from class: rc.b
                @Override // ne.i
                public final void accept(Object obj) {
                    ((u.a) obj).k(r1);
                }
            });
            ne.a.e(this.f48141v);
            return true;
        } catch (NotProvisionedException unused) {
            this.f48122c.b(this);
            return false;
        } catch (Exception e10) {
            v(e10, 1);
            return false;
        }
    }

    private void E(byte[] bArr, int i10, boolean z10) {
        try {
            this.f48143x = this.f48121b.l(bArr, this.f48120a, i10, this.f48127h);
            ((c) w0.j(this.f48138s)).b(1, ne.a.e(this.f48143x), z10);
        } catch (Exception e10) {
            x(e10, true);
        }
    }

    private boolean G() {
        try {
            this.f48121b.d(this.f48141v, this.f48142w);
            return true;
        } catch (Exception e10) {
            v(e10, 1);
            return false;
        }
    }

    private void H() {
        if (Thread.currentThread() != this.f48133n.getThread()) {
            ne.y.j("DefaultDrmSession", "DefaultDrmSession accessed on the wrong thread.\nCurrent thread: " + Thread.currentThread().getName() + "\nExpected thread: " + this.f48133n.getThread().getName(), new IllegalStateException());
        }
    }

    private void q(ne.i iVar) {
        for (u.a aVar : this.f48128i.E0()) {
            iVar.accept(aVar);
        }
    }

    private void r(boolean z10) {
        if (!this.f48126g) {
            byte[] bArr = (byte[]) w0.j(this.f48141v);
            int i10 = this.f48124e;
            if (i10 != 0 && i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        ne.a.e(this.f48142w);
                        ne.a.e(this.f48141v);
                        E(this.f48142w, 3, z10);
                    }
                } else if (this.f48142w == null || G()) {
                    E(bArr, 2, z10);
                }
            } else if (this.f48142w == null) {
                E(bArr, 1, z10);
            } else if (this.f48135p != 4 && !G()) {
            } else {
                long s10 = s();
                if (this.f48124e == 0 && s10 <= 60) {
                    ne.y.b("DefaultDrmSession", "Offline license has expired or will expire soon. Remaining seconds: " + s10);
                    E(bArr, 2, z10);
                } else if (s10 <= 0) {
                    v(new i0(), 2);
                } else {
                    this.f48135p = 4;
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
        if (!lc.d.f37056d.equals(this.f48132m)) {
            return LongCompanionObject.MAX_VALUE;
        }
        Pair pair = (Pair) ne.a.e(m0.b(this));
        return Math.min(((Long) pair.first).longValue(), ((Long) pair.second).longValue());
    }

    private boolean u() {
        int i10 = this.f48135p;
        if (i10 != 3 && i10 != 4) {
            return false;
        }
        return true;
    }

    private void v(final Exception exc, int i10) {
        this.f48140u = new n.a(exc, y.a(exc, i10));
        ne.y.d("DefaultDrmSession", "DRM session error", exc);
        q(new ne.i() { // from class: rc.d
            @Override // ne.i
            public final void accept(Object obj) {
                ((u.a) obj).l(exc);
            }
        });
        if (this.f48135p != 4) {
            this.f48135p = 1;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void w(Object obj, Object obj2) {
        if (obj == this.f48143x && u()) {
            this.f48143x = null;
            if (obj2 instanceof Exception) {
                x((Exception) obj2, false);
                return;
            }
            try {
                byte[] bArr = (byte[]) obj2;
                if (this.f48124e == 3) {
                    this.f48121b.k((byte[]) w0.j(this.f48142w), bArr);
                    q(new ne.i() { // from class: rc.e
                        @Override // ne.i
                        public final void accept(Object obj3) {
                            ((u.a) obj3).i();
                        }
                    });
                    return;
                }
                byte[] k10 = this.f48121b.k(this.f48141v, bArr);
                int i10 = this.f48124e;
                if ((i10 == 2 || (i10 == 0 && this.f48142w != null)) && k10 != null && k10.length != 0) {
                    this.f48142w = k10;
                }
                this.f48135p = 4;
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
            this.f48122c.b(this);
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
        if (this.f48124e == 0 && this.f48135p == 4) {
            w0.j(this.f48141v);
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
        this.f48144y = this.f48121b.b();
        ((c) w0.j(this.f48138s)).b(0, ne.a.e(this.f48144y), true);
    }

    @Override // rc.n
    public final UUID a() {
        H();
        return this.f48132m;
    }

    @Override // rc.n
    public void b(u.a aVar) {
        H();
        int i10 = this.f48136q;
        if (i10 <= 0) {
            ne.y.c("DefaultDrmSession", "release() called on a session that's already fully released.");
            return;
        }
        int i11 = i10 - 1;
        this.f48136q = i11;
        if (i11 == 0) {
            this.f48135p = 0;
            ((e) w0.j(this.f48134o)).removeCallbacksAndMessages(null);
            ((c) w0.j(this.f48138s)).c();
            this.f48138s = null;
            ((HandlerThread) w0.j(this.f48137r)).quit();
            this.f48137r = null;
            this.f48139t = null;
            this.f48140u = null;
            this.f48143x = null;
            this.f48144y = null;
            byte[] bArr = this.f48141v;
            if (bArr != null) {
                this.f48121b.j(bArr);
                this.f48141v = null;
            }
        }
        if (aVar != null) {
            this.f48128i.d(aVar);
            if (this.f48128i.c(aVar) == 0) {
                aVar.m();
            }
        }
        this.f48123d.b(this, this.f48136q);
    }

    @Override // rc.n
    public boolean c() {
        H();
        return this.f48125f;
    }

    @Override // rc.n
    public final qc.b d() {
        H();
        return this.f48139t;
    }

    @Override // rc.n
    public void e(u.a aVar) {
        H();
        boolean z10 = false;
        if (this.f48136q < 0) {
            ne.y.c("DefaultDrmSession", "Session reference count less than zero: " + this.f48136q);
            this.f48136q = 0;
        }
        if (aVar != null) {
            this.f48128i.b(aVar);
        }
        int i10 = this.f48136q + 1;
        this.f48136q = i10;
        if (i10 == 1) {
            if (this.f48135p == 2) {
                z10 = true;
            }
            ne.a.g(z10);
            HandlerThread handlerThread = new HandlerThread("ExoPlayer:DrmRequestHandler");
            this.f48137r = handlerThread;
            handlerThread.start();
            this.f48138s = new c(this.f48137r.getLooper());
            if (D()) {
                r(true);
            }
        } else if (aVar != null && u() && this.f48128i.c(aVar) == 1) {
            aVar.k(this.f48135p);
        }
        this.f48123d.a(this, this.f48136q);
    }

    @Override // rc.n
    public Map g() {
        H();
        byte[] bArr = this.f48141v;
        if (bArr == null) {
            return null;
        }
        return this.f48121b.a(bArr);
    }

    @Override // rc.n
    public final n.a getError() {
        H();
        if (this.f48135p == 1) {
            return this.f48140u;
        }
        return null;
    }

    @Override // rc.n
    public final int getState() {
        H();
        return this.f48135p;
    }

    @Override // rc.n
    public boolean h(String str) {
        H();
        return this.f48121b.i((byte[]) ne.a.i(this.f48141v), str);
    }

    public boolean t(byte[] bArr) {
        H();
        return Arrays.equals(this.f48141v, bArr);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void z(int i10) {
        if (i10 != 2) {
            return;
        }
        y();
    }
}
