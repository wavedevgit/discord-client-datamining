package qu;

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
    private volatile qu.c B;
    private volatile f C;

    /* renamed from: d  reason: collision with root package name */
    private final OkHttpClient f45707d;

    /* renamed from: e  reason: collision with root package name */
    private final Request f45708e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f45709i;

    /* renamed from: o  reason: collision with root package name */
    private final g f45710o;

    /* renamed from: p  reason: collision with root package name */
    private final okhttp3.e f45711p;

    /* renamed from: q  reason: collision with root package name */
    private final c f45712q;

    /* renamed from: r  reason: collision with root package name */
    private final AtomicBoolean f45713r;

    /* renamed from: s  reason: collision with root package name */
    private Object f45714s;

    /* renamed from: t  reason: collision with root package name */
    private d f45715t;

    /* renamed from: u  reason: collision with root package name */
    private f f45716u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f45717v;

    /* renamed from: w  reason: collision with root package name */
    private qu.c f45718w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f45719x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f45720y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f45721z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final lu.b f45722d;

        /* renamed from: e  reason: collision with root package name */
        private volatile AtomicInteger f45723e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ e f45724i;

        public a(e eVar, lu.b responseCallback) {
            Intrinsics.checkNotNullParameter(responseCallback, "responseCallback");
            this.f45724i = eVar;
            this.f45722d = responseCallback;
            this.f45723e = new AtomicInteger(0);
        }

        public final void a(ExecutorService executorService) {
            Intrinsics.checkNotNullParameter(executorService, "executorService");
            Dispatcher t10 = this.f45724i.k().t();
            if (mu.e.f36664h && Thread.holdsLock(t10)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + t10);
            }
            try {
                try {
                    executorService.execute(this);
                } catch (RejectedExecutionException e10) {
                    InterruptedIOException interruptedIOException = new InterruptedIOException("executor rejected");
                    interruptedIOException.initCause(e10);
                    this.f45724i.v(interruptedIOException);
                    this.f45722d.onFailure(this.f45724i, interruptedIOException);
                    this.f45724i.k().t().h(this);
                }
            } catch (Throwable th2) {
                this.f45724i.k().t().h(this);
                throw th2;
            }
        }

        public final e b() {
            return this.f45724i;
        }

        public final AtomicInteger c() {
            return this.f45723e;
        }

        public final String d() {
            return this.f45724i.q().n().i();
        }

        public final void e(a other) {
            Intrinsics.checkNotNullParameter(other, "other");
            this.f45723e = other.f45723e;
        }

        @Override // java.lang.Runnable
        public void run() {
            boolean z10;
            Throwable th2;
            IOException e10;
            OkHttpClient k10;
            e eVar = this.f45724i;
            Thread currentThread = Thread.currentThread();
            String name = currentThread.getName();
            currentThread.setName("OkHttp " + this.f45724i.w());
            try {
                eVar.f45712q.v();
                try {
                    z10 = true;
                    try {
                        this.f45722d.onResponse(eVar, eVar.r());
                        k10 = eVar.k();
                    } catch (IOException e11) {
                        e10 = e11;
                        if (z10) {
                            vu.h.f52016a.g().k("Callback failure for " + eVar.D(), 4, e10);
                        } else {
                            this.f45722d.onFailure(eVar, e10);
                        }
                        k10 = eVar.k();
                        k10.t().h(this);
                    } catch (Throwable th3) {
                        th2 = th3;
                        eVar.cancel();
                        if (!z10) {
                            IOException iOException = new IOException("canceled due to " + th2);
                            as.e.a(iOException, th2);
                            this.f45722d.onFailure(eVar, iOException);
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
                k10.t().h(this);
            } finally {
                currentThread.setName(name);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends WeakReference {

        /* renamed from: a  reason: collision with root package name */
        private final Object f45725a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(e referent, Object obj) {
            super(referent);
            Intrinsics.checkNotNullParameter(referent, "referent");
            this.f45725a = obj;
        }

        public final Object a() {
            return this.f45725a;
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
        this.f45707d = client;
        this.f45708e = originalRequest;
        this.f45709i = z10;
        this.f45710o = client.o().a();
        this.f45711p = client.v().a(this);
        c cVar = new c();
        cVar.g(client.k(), TimeUnit.MILLISECONDS);
        this.f45712q = cVar;
        this.f45713r = new AtomicBoolean();
        this.f45721z = true;
    }

    private final IOException B(IOException iOException) {
        if (this.f45717v || !this.f45712q.w()) {
            return iOException;
        }
        InterruptedIOException interruptedIOException = new InterruptedIOException("timeout");
        if (iOException != null) {
            interruptedIOException.initCause(iOException);
        }
        return interruptedIOException;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final String D() {
        String str;
        String str2;
        StringBuilder sb2 = new StringBuilder();
        if (C()) {
            str = "canceled ";
        } else {
            str = "";
        }
        sb2.append(str);
        if (this.f45709i) {
            str2 = "web socket";
        } else {
            str2 = "call";
        }
        sb2.append(str2);
        sb2.append(" to ");
        sb2.append(w());
        return sb2.toString();
    }

    private final IOException d(IOException iOException) {
        Socket x10;
        boolean z10 = mu.e.f36664h;
        if (z10 && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        f fVar = this.f45716u;
        if (fVar != null) {
            if (z10 && Thread.holdsLock(fVar)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + fVar);
            }
            synchronized (fVar) {
                x10 = x();
            }
            if (this.f45716u == null) {
                if (x10 != null) {
                    mu.e.n(x10);
                }
                this.f45711p.l(this, fVar);
            } else if (x10 != null) {
                throw new IllegalStateException("Check failed.");
            }
        }
        IOException B = B(iOException);
        if (iOException != null) {
            okhttp3.e eVar = this.f45711p;
            Intrinsics.checkNotNull(B);
            eVar.e(this, B);
            return B;
        }
        this.f45711p.d(this);
        return B;
    }

    private final void e() {
        this.f45714s = vu.h.f52016a.g().i("response.body().close()");
        this.f45711p.f(this);
    }

    private final okhttp3.a g(HttpUrl httpUrl) {
        SSLSocketFactory sSLSocketFactory;
        HostnameVerifier hostnameVerifier;
        lu.c cVar;
        if (httpUrl.j()) {
            sSLSocketFactory = this.f45707d.O();
            hostnameVerifier = this.f45707d.z();
            cVar = this.f45707d.m();
        } else {
            sSLSocketFactory = null;
            hostnameVerifier = null;
            cVar = null;
        }
        return new okhttp3.a(httpUrl.i(), httpUrl.o(), this.f45707d.u(), this.f45707d.N(), sSLSocketFactory, hostnameVerifier, cVar, this.f45707d.J(), this.f45707d.I(), this.f45707d.H(), this.f45707d.q(), this.f45707d.K());
    }

    public final void A() {
        if (!this.f45717v) {
            this.f45717v = true;
            this.f45712q.w();
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    @Override // okhttp3.Call
    public boolean C() {
        return this.A;
    }

    @Override // okhttp3.Call
    public void b1(lu.b responseCallback) {
        Intrinsics.checkNotNullParameter(responseCallback, "responseCallback");
        if (this.f45713r.compareAndSet(false, true)) {
            e();
            this.f45707d.t().c(new a(this, responseCallback));
            return;
        }
        throw new IllegalStateException("Already Executed");
    }

    public final void c(f connection) {
        Intrinsics.checkNotNullParameter(connection, "connection");
        if (mu.e.f36664h && !Thread.holdsLock(connection)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + connection);
        } else if (this.f45716u == null) {
            this.f45716u = connection;
            connection.n().add(new b(this, this.f45714s));
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
        qu.c cVar = this.B;
        if (cVar != null) {
            cVar.b();
        }
        f fVar = this.C;
        if (fVar != null) {
            fVar.d();
        }
        this.f45711p.g(this);
    }

    @Override // okhttp3.Call
    public Response execute() {
        if (this.f45713r.compareAndSet(false, true)) {
            this.f45712q.v();
            e();
            try {
                this.f45707d.t().d(this);
                return r();
            } finally {
                this.f45707d.t().i(this);
            }
        }
        throw new IllegalStateException("Already Executed");
    }

    /* renamed from: f */
    public e clone() {
        return new e(this.f45707d, this.f45708e, this.f45709i);
    }

    public final void h(Request request, boolean z10) {
        Intrinsics.checkNotNullParameter(request, "request");
        if (this.f45718w == null) {
            synchronized (this) {
                if (!this.f45720y) {
                    if (!this.f45719x) {
                        Unit unit = Unit.f31988a;
                    } else {
                        throw new IllegalStateException("Check failed.");
                    }
                } else {
                    throw new IllegalStateException("cannot make a new request because the previous response is still open: please call response.close()");
                }
            }
            if (z10) {
                this.f45715t = new d(this.f45710o, g(request.n()), this, this.f45711p);
                return;
            }
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    @Override // okhttp3.Call
    public Request i() {
        return this.f45708e;
    }

    public final void j(boolean z10) {
        qu.c cVar;
        synchronized (this) {
            if (this.f45721z) {
                Unit unit = Unit.f31988a;
            } else {
                throw new IllegalStateException("released");
            }
        }
        if (z10 && (cVar = this.B) != null) {
            cVar.d();
        }
        this.f45718w = null;
    }

    public final OkHttpClient k() {
        return this.f45707d;
    }

    public final f l() {
        return this.f45716u;
    }

    public final okhttp3.e m() {
        return this.f45711p;
    }

    public final boolean n() {
        return this.f45709i;
    }

    public final qu.c o() {
        return this.f45718w;
    }

    public final Request q() {
        return this.f45708e;
    }

    public final Response r() {
        ArrayList arrayList = new ArrayList();
        CollectionsKt.B(arrayList, this.f45707d.A());
        arrayList.add(new ru.j(this.f45707d));
        arrayList.add(new ru.a(this.f45707d.r()));
        arrayList.add(new ou.a(this.f45707d.j()));
        arrayList.add(qu.a.f45674a);
        if (!this.f45709i) {
            CollectionsKt.B(arrayList, this.f45707d.D());
        }
        arrayList.add(new ru.b(this.f45709i));
        boolean z10 = false;
        try {
            try {
                Response a10 = new ru.g(this, arrayList, 0, null, this.f45708e, this.f45707d.n(), this.f45707d.L(), this.f45707d.R()).a(this.f45708e);
                if (!C()) {
                    v(null);
                    return a10;
                }
                mu.e.m(a10);
                throw new IOException("Canceled");
            } catch (IOException e10) {
                z10 = true;
                IOException v10 = v(e10);
                Intrinsics.checkNotNull(v10, "null cannot be cast to non-null type kotlin.Throwable");
                throw v10;
            }
        } catch (Throwable th2) {
            if (!z10) {
                v(null);
            }
            throw th2;
        }
    }

    public final qu.c t(ru.g chain) {
        Intrinsics.checkNotNullParameter(chain, "chain");
        synchronized (this) {
            if (this.f45721z) {
                if (!this.f45720y) {
                    if (!this.f45719x) {
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
        d dVar = this.f45715t;
        Intrinsics.checkNotNull(dVar);
        qu.c cVar = new qu.c(this, this.f45711p, dVar, dVar.a(this.f45707d, chain));
        this.f45718w = cVar;
        this.B = cVar;
        synchronized (this) {
            this.f45719x = true;
            this.f45720y = true;
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
    public final java.io.IOException u(qu.c r2, boolean r3, boolean r4, java.io.IOException r5) {
        /*
            r1 = this;
            java.lang.String r0 = "exchange"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r2, r0)
            qu.c r0 = r1.B
            boolean r2 = kotlin.jvm.internal.Intrinsics.areEqual(r2, r0)
            if (r2 != 0) goto Le
            goto L58
        Le:
            monitor-enter(r1)
            r2 = 0
            if (r3 == 0) goto L19
            boolean r0 = r1.f45719x     // Catch: java.lang.Throwable -> L17
            if (r0 != 0) goto L1f
            goto L19
        L17:
            r2 = move-exception
            goto L59
        L19:
            if (r4 == 0) goto L41
            boolean r0 = r1.f45720y     // Catch: java.lang.Throwable -> L17
            if (r0 == 0) goto L41
        L1f:
            if (r3 == 0) goto L23
            r1.f45719x = r2     // Catch: java.lang.Throwable -> L17
        L23:
            if (r4 == 0) goto L27
            r1.f45720y = r2     // Catch: java.lang.Throwable -> L17
        L27:
            boolean r3 = r1.f45719x     // Catch: java.lang.Throwable -> L17
            r4 = 1
            if (r3 != 0) goto L32
            boolean r0 = r1.f45720y     // Catch: java.lang.Throwable -> L17
            if (r0 != 0) goto L32
            r0 = r4
            goto L33
        L32:
            r0 = r2
        L33:
            if (r3 != 0) goto L3e
            boolean r3 = r1.f45720y     // Catch: java.lang.Throwable -> L17
            if (r3 != 0) goto L3e
            boolean r3 = r1.f45721z     // Catch: java.lang.Throwable -> L17
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
            qu.f r2 = r1.f45716u
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
        throw new UnsupportedOperationException("Method not decompiled: qu.e.u(qu.c, boolean, boolean, java.io.IOException):java.io.IOException");
    }

    public final IOException v(IOException iOException) {
        boolean z10;
        synchronized (this) {
            try {
                z10 = false;
                if (this.f45721z) {
                    this.f45721z = false;
                    if (!this.f45719x && !this.f45720y) {
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

    public final String w() {
        return this.f45708e.n().q();
    }

    public final Socket x() {
        f fVar = this.f45716u;
        Intrinsics.checkNotNull(fVar);
        if (mu.e.f36664h && !Thread.holdsLock(fVar)) {
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
            this.f45716u = null;
            if (n10.isEmpty()) {
                fVar.C(System.nanoTime());
                if (this.f45710o.c(fVar)) {
                    return fVar.E();
                }
            }
            return null;
        }
        throw new IllegalStateException("Check failed.");
    }

    public final boolean y() {
        d dVar = this.f45715t;
        Intrinsics.checkNotNull(dVar);
        return dVar.e();
    }

    public final void z(f fVar) {
        this.C = fVar;
    }
}
