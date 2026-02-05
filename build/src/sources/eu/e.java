package eu;

import java.io.IOException;
import java.io.InterruptedIOException;
import java.lang.ref.Reference;
import java.lang.ref.WeakReference;
import java.net.Socket;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicInteger;
import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.SSLSocketFactory;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Call;
import okhttp3.Dispatcher;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e implements Call {
    private volatile boolean A;
    private volatile eu.c B;
    private volatile f C;

    /* renamed from: d  reason: collision with root package name */
    private final OkHttpClient f21829d;

    /* renamed from: e  reason: collision with root package name */
    private final Request f21830e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f21831i;

    /* renamed from: o  reason: collision with root package name */
    private final g f21832o;

    /* renamed from: p  reason: collision with root package name */
    private final okhttp3.e f21833p;

    /* renamed from: q  reason: collision with root package name */
    private final c f21834q;

    /* renamed from: r  reason: collision with root package name */
    private final AtomicBoolean f21835r;

    /* renamed from: s  reason: collision with root package name */
    private Object f21836s;

    /* renamed from: t  reason: collision with root package name */
    private d f21837t;

    /* renamed from: u  reason: collision with root package name */
    private f f21838u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f21839v;

    /* renamed from: w  reason: collision with root package name */
    private eu.c f21840w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f21841x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f21842y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f21843z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final zt.b f21844d;

        /* renamed from: e  reason: collision with root package name */
        private volatile AtomicInteger f21845e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ e f21846i;

        public a(e eVar, zt.b responseCallback) {
            Intrinsics.checkNotNullParameter(responseCallback, "responseCallback");
            this.f21846i = eVar;
            this.f21844d = responseCallback;
            this.f21845e = new AtomicInteger(0);
        }

        public final void a(ExecutorService executorService) {
            Intrinsics.checkNotNullParameter(executorService, "executorService");
            Dispatcher s10 = this.f21846i.k().s();
            if (au.e.f6000h && Thread.holdsLock(s10)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + s10);
            }
            try {
                try {
                    executorService.execute(this);
                } catch (RejectedExecutionException e10) {
                    InterruptedIOException interruptedIOException = new InterruptedIOException("executor rejected");
                    interruptedIOException.initCause(e10);
                    this.f21846i.u(interruptedIOException);
                    this.f21844d.onFailure(this.f21846i, interruptedIOException);
                    this.f21846i.k().s().h(this);
                }
            } catch (Throwable th2) {
                this.f21846i.k().s().h(this);
                throw th2;
            }
        }

        public final e b() {
            return this.f21846i;
        }

        public final AtomicInteger c() {
            return this.f21845e;
        }

        public final String d() {
            return this.f21846i.q().n().i();
        }

        public final void e(a other) {
            Intrinsics.checkNotNullParameter(other, "other");
            this.f21845e = other.f21845e;
        }

        @Override // java.lang.Runnable
        public void run() {
            boolean z10;
            Throwable th2;
            IOException e10;
            OkHttpClient k10;
            e eVar = this.f21846i;
            Thread currentThread = Thread.currentThread();
            String name = currentThread.getName();
            currentThread.setName("OkHttp " + this.f21846i.v());
            try {
                eVar.f21834q.v();
                try {
                    z10 = true;
                    try {
                        this.f21844d.onResponse(eVar, eVar.r());
                        k10 = eVar.k();
                    } catch (IOException e11) {
                        e10 = e11;
                        if (z10) {
                            ju.h.f31441a.g().k("Callback failure for " + eVar.C(), 4, e10);
                        } else {
                            this.f21844d.onFailure(eVar, e10);
                        }
                        k10 = eVar.k();
                        k10.s().h(this);
                    } catch (Throwable th3) {
                        th2 = th3;
                        eVar.cancel();
                        if (!z10) {
                            IOException iOException = new IOException("canceled due to " + th2);
                            or.e.a(iOException, th2);
                            this.f21844d.onFailure(eVar, iOException);
                        }
                        throw th2;
                    }
                } catch (IOException e12) {
                    z10 = false;
                    e10 = e12;
                } catch (Throwable th4) {
                    z10 = false;
                    th2 = th4;
                }
                k10.s().h(this);
            } finally {
                currentThread.setName(name);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends WeakReference {

        /* renamed from: a  reason: collision with root package name */
        private final Object f21847a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(e referent, Object obj) {
            super(referent);
            Intrinsics.checkNotNullParameter(referent, "referent");
            this.f21847a = obj;
        }

        public final Object a() {
            return this.f21847a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends okio.c {
        c() {
        }

        @Override // okio.c
        protected void B() {
            e.this.cancel();
        }
    }

    public e(OkHttpClient client, Request originalRequest, boolean z10) {
        Intrinsics.checkNotNullParameter(client, "client");
        Intrinsics.checkNotNullParameter(originalRequest, "originalRequest");
        this.f21829d = client;
        this.f21830e = originalRequest;
        this.f21831i = z10;
        this.f21832o = client.p().a();
        this.f21833p = client.u().a(this);
        c cVar = new c();
        cVar.g(client.k(), TimeUnit.MILLISECONDS);
        this.f21834q = cVar;
        this.f21835r = new AtomicBoolean();
        this.f21843z = true;
    }

    private final IOException B(IOException iOException) {
        if (this.f21839v || !this.f21834q.w()) {
            return iOException;
        }
        InterruptedIOException interruptedIOException = new InterruptedIOException("timeout");
        if (iOException != null) {
            interruptedIOException.initCause(iOException);
        }
        return interruptedIOException;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final String C() {
        String str;
        String str2;
        StringBuilder sb2 = new StringBuilder();
        if (y()) {
            str = "canceled ";
        } else {
            str = "";
        }
        sb2.append(str);
        if (this.f21831i) {
            str2 = "web socket";
        } else {
            str2 = "call";
        }
        sb2.append(str2);
        sb2.append(" to ");
        sb2.append(v());
        return sb2.toString();
    }

    private final IOException d(IOException iOException) {
        Socket w10;
        boolean z10 = au.e.f6000h;
        if (z10 && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        f fVar = this.f21838u;
        if (fVar != null) {
            if (z10 && Thread.holdsLock(fVar)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + fVar);
            }
            synchronized (fVar) {
                w10 = w();
            }
            if (this.f21838u == null) {
                if (w10 != null) {
                    au.e.n(w10);
                }
                this.f21833p.l(this, fVar);
            } else if (w10 != null) {
                throw new IllegalStateException("Check failed.");
            }
        }
        IOException B = B(iOException);
        if (iOException != null) {
            okhttp3.e eVar = this.f21833p;
            Intrinsics.checkNotNull(B);
            eVar.e(this, B);
            return B;
        }
        this.f21833p.d(this);
        return B;
    }

    private final void e() {
        this.f21836s = ju.h.f31441a.g().i("response.body().close()");
        this.f21833p.f(this);
    }

    private final okhttp3.a g(HttpUrl httpUrl) {
        SSLSocketFactory sSLSocketFactory;
        HostnameVerifier hostnameVerifier;
        zt.c cVar;
        if (httpUrl.j()) {
            sSLSocketFactory = this.f21829d.O();
            hostnameVerifier = this.f21829d.z();
            cVar = this.f21829d.m();
        } else {
            sSLSocketFactory = null;
            hostnameVerifier = null;
            cVar = null;
        }
        return new okhttp3.a(httpUrl.i(), httpUrl.o(), this.f21829d.t(), this.f21829d.N(), sSLSocketFactory, hostnameVerifier, cVar, this.f21829d.I(), this.f21829d.H(), this.f21829d.G(), this.f21829d.q(), this.f21829d.J());
    }

    public final void A() {
        if (!this.f21839v) {
            this.f21839v = true;
            this.f21834q.w();
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    @Override // okhttp3.Call
    public void V(zt.b responseCallback) {
        Intrinsics.checkNotNullParameter(responseCallback, "responseCallback");
        if (this.f21835r.compareAndSet(false, true)) {
            e();
            this.f21829d.s().c(new a(this, responseCallback));
            return;
        }
        throw new IllegalStateException("Already Executed");
    }

    public final void c(f connection) {
        Intrinsics.checkNotNullParameter(connection, "connection");
        if (au.e.f6000h && !Thread.holdsLock(connection)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + connection);
        } else if (this.f21838u == null) {
            this.f21838u = connection;
            connection.n().add(new b(this, this.f21836s));
        } else {
            throw new IllegalStateException("Check failed.");
        }
    }

    @Override // okhttp3.Call
    public void cancel() {
        if (this.A) {
            return;
        }
        this.A = true;
        eu.c cVar = this.B;
        if (cVar != null) {
            cVar.b();
        }
        f fVar = this.C;
        if (fVar != null) {
            fVar.d();
        }
        this.f21833p.g(this);
    }

    @Override // okhttp3.Call
    public Response execute() {
        if (this.f21835r.compareAndSet(false, true)) {
            this.f21834q.v();
            e();
            try {
                this.f21829d.s().d(this);
                return r();
            } finally {
                this.f21829d.s().i(this);
            }
        }
        throw new IllegalStateException("Already Executed");
    }

    /* renamed from: f */
    public e clone() {
        return new e(this.f21829d, this.f21830e, this.f21831i);
    }

    @Override // okhttp3.Call
    public Request h() {
        return this.f21830e;
    }

    public final void i(Request request, boolean z10) {
        Intrinsics.checkNotNullParameter(request, "request");
        if (this.f21840w == null) {
            synchronized (this) {
                if (!this.f21842y) {
                    if (!this.f21841x) {
                        Unit unit = Unit.f31988a;
                    } else {
                        throw new IllegalStateException("Check failed.");
                    }
                } else {
                    throw new IllegalStateException("cannot make a new request because the previous response is still open: please call response.close()");
                }
            }
            if (z10) {
                this.f21837t = new d(this.f21832o, g(request.n()), this, this.f21833p);
                return;
            }
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    public final void j(boolean z10) {
        eu.c cVar;
        synchronized (this) {
            if (this.f21843z) {
                Unit unit = Unit.f31988a;
            } else {
                throw new IllegalStateException("released");
            }
        }
        if (z10 && (cVar = this.B) != null) {
            cVar.d();
        }
        this.f21840w = null;
    }

    public final OkHttpClient k() {
        return this.f21829d;
    }

    public final f l() {
        return this.f21838u;
    }

    public final okhttp3.e m() {
        return this.f21833p;
    }

    public final boolean n() {
        return this.f21831i;
    }

    public final eu.c p() {
        return this.f21840w;
    }

    public final Request q() {
        return this.f21830e;
    }

    public final Response r() {
        ArrayList arrayList = new ArrayList();
        CollectionsKt.B(arrayList, this.f21829d.A());
        arrayList.add(new fu.j(this.f21829d));
        arrayList.add(new fu.a(this.f21829d.r()));
        arrayList.add(new cu.a(this.f21829d.j()));
        arrayList.add(eu.a.f21796a);
        if (!this.f21831i) {
            CollectionsKt.B(arrayList, this.f21829d.C());
        }
        arrayList.add(new fu.b(this.f21831i));
        boolean z10 = false;
        try {
            try {
                Response a10 = new fu.g(this, arrayList, 0, null, this.f21830e, this.f21829d.n(), this.f21829d.K(), this.f21829d.Q()).a(this.f21830e);
                if (!y()) {
                    u(null);
                    return a10;
                }
                au.e.m(a10);
                throw new IOException("Canceled");
            } catch (IOException e10) {
                z10 = true;
                IOException u10 = u(e10);
                Intrinsics.checkNotNull(u10, "null cannot be cast to non-null type kotlin.Throwable");
                throw u10;
            }
        } catch (Throwable th2) {
            if (!z10) {
                u(null);
            }
            throw th2;
        }
    }

    public final eu.c s(fu.g chain) {
        Intrinsics.checkNotNullParameter(chain, "chain");
        synchronized (this) {
            if (this.f21843z) {
                if (!this.f21842y) {
                    if (!this.f21841x) {
                        Unit unit = Unit.f31988a;
                    } else {
                        throw new IllegalStateException("Check failed.");
                    }
                } else {
                    throw new IllegalStateException("Check failed.");
                }
            } else {
                throw new IllegalStateException("released");
            }
        }
        d dVar = this.f21837t;
        Intrinsics.checkNotNull(dVar);
        eu.c cVar = new eu.c(this, this.f21833p, dVar, dVar.a(this.f21829d, chain));
        this.f21840w = cVar;
        this.B = cVar;
        synchronized (this) {
            this.f21841x = true;
            this.f21842y = true;
        }
        if (!this.A) {
            return cVar;
        }
        throw new IOException("Canceled");
    }

    /* JADX WARN: Removed duplicated region for block: B:17:0x0021 A[Catch: all -> 0x0017, TryCatch #0 {all -> 0x0017, blocks: (B:8:0x0012, B:17:0x0021, B:19:0x0025, B:20:0x0027, B:22:0x002c, B:27:0x0035, B:29:0x0039, B:34:0x0042, B:14:0x001b), top: B:46:0x0012 }] */
    /* JADX WARN: Removed duplicated region for block: B:19:0x0025 A[Catch: all -> 0x0017, TryCatch #0 {all -> 0x0017, blocks: (B:8:0x0012, B:17:0x0021, B:19:0x0025, B:20:0x0027, B:22:0x002c, B:27:0x0035, B:29:0x0039, B:34:0x0042, B:14:0x001b), top: B:46:0x0012 }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.io.IOException t(eu.c r2, boolean r3, boolean r4, java.io.IOException r5) {
        /*
            r1 = this;
            java.lang.String r0 = "exchange"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r2, r0)
            eu.c r0 = r1.B
            boolean r2 = kotlin.jvm.internal.Intrinsics.areEqual(r2, r0)
            if (r2 != 0) goto Le
            goto L58
        Le:
            monitor-enter(r1)
            r2 = 0
            if (r3 == 0) goto L19
            boolean r0 = r1.f21841x     // Catch: java.lang.Throwable -> L17
            if (r0 != 0) goto L1f
            goto L19
        L17:
            r2 = move-exception
            goto L59
        L19:
            if (r4 == 0) goto L41
            boolean r0 = r1.f21842y     // Catch: java.lang.Throwable -> L17
            if (r0 == 0) goto L41
        L1f:
            if (r3 == 0) goto L23
            r1.f21841x = r2     // Catch: java.lang.Throwable -> L17
        L23:
            if (r4 == 0) goto L27
            r1.f21842y = r2     // Catch: java.lang.Throwable -> L17
        L27:
            boolean r3 = r1.f21841x     // Catch: java.lang.Throwable -> L17
            r4 = 1
            if (r3 != 0) goto L32
            boolean r0 = r1.f21842y     // Catch: java.lang.Throwable -> L17
            if (r0 != 0) goto L32
            r0 = r4
            goto L33
        L32:
            r0 = r2
        L33:
            if (r3 != 0) goto L3e
            boolean r3 = r1.f21842y     // Catch: java.lang.Throwable -> L17
            if (r3 != 0) goto L3e
            boolean r3 = r1.f21843z     // Catch: java.lang.Throwable -> L17
            if (r3 != 0) goto L3e
            r2 = r4
        L3e:
            r3 = r2
            r2 = r0
            goto L42
        L41:
            r3 = r2
        L42:
            kotlin.Unit r4 = kotlin.Unit.f31988a     // Catch: java.lang.Throwable -> L17
            monitor-exit(r1)
            if (r2 == 0) goto L51
            r2 = 0
            r1.B = r2
            eu.f r2 = r1.f21838u
            if (r2 == 0) goto L51
            r2.s()
        L51:
            if (r3 == 0) goto L58
            java.io.IOException r2 = r1.d(r5)
            return r2
        L58:
            return r5
        L59:
            monitor-exit(r1)
            throw r2
        */
        throw new UnsupportedOperationException("Method not decompiled: eu.e.t(eu.c, boolean, boolean, java.io.IOException):java.io.IOException");
    }

    public final IOException u(IOException iOException) {
        boolean z10;
        synchronized (this) {
            try {
                z10 = false;
                if (this.f21843z) {
                    this.f21843z = false;
                    if (!this.f21841x && !this.f21842y) {
                        z10 = true;
                    }
                }
                Unit unit = Unit.f31988a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        if (z10) {
            return d(iOException);
        }
        return iOException;
    }

    public final String v() {
        return this.f21830e.n().q();
    }

    public final Socket w() {
        f fVar = this.f21838u;
        Intrinsics.checkNotNull(fVar);
        if (au.e.f6000h && !Thread.holdsLock(fVar)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + fVar);
        }
        List n10 = fVar.n();
        Iterator it = n10.iterator();
        int i10 = 0;
        while (true) {
            if (it.hasNext()) {
                if (Intrinsics.areEqual(((Reference) it.next()).get(), this)) {
                    break;
                }
                i10++;
            } else {
                i10 = -1;
                break;
            }
        }
        if (i10 != -1) {
            n10.remove(i10);
            this.f21838u = null;
            if (n10.isEmpty()) {
                fVar.C(System.nanoTime());
                if (this.f21832o.c(fVar)) {
                    return fVar.E();
                }
            }
            return null;
        }
        throw new IllegalStateException("Check failed.");
    }

    public final boolean x() {
        d dVar = this.f21837t;
        Intrinsics.checkNotNull(dVar);
        return dVar.e();
    }

    @Override // okhttp3.Call
    public boolean y() {
        return this.A;
    }

    public final void z(f fVar) {
        this.C = fVar;
    }
}
