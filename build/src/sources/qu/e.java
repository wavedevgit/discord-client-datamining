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
    private final OkHttpClient f45706d;

    /* renamed from: e  reason: collision with root package name */
    private final Request f45707e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f45708i;

    /* renamed from: o  reason: collision with root package name */
    private final g f45709o;

    /* renamed from: p  reason: collision with root package name */
    private final okhttp3.e f45710p;

    /* renamed from: q  reason: collision with root package name */
    private final c f45711q;

    /* renamed from: r  reason: collision with root package name */
    private final AtomicBoolean f45712r;

    /* renamed from: s  reason: collision with root package name */
    private Object f45713s;

    /* renamed from: t  reason: collision with root package name */
    private d f45714t;

    /* renamed from: u  reason: collision with root package name */
    private f f45715u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f45716v;

    /* renamed from: w  reason: collision with root package name */
    private qu.c f45717w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f45718x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f45719y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f45720z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final lu.b f45721d;

        /* renamed from: e  reason: collision with root package name */
        private volatile AtomicInteger f45722e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ e f45723i;

        public a(e eVar, lu.b responseCallback) {
            Intrinsics.checkNotNullParameter(responseCallback, "responseCallback");
            this.f45723i = eVar;
            this.f45721d = responseCallback;
            this.f45722e = new AtomicInteger(0);
        }

        public final void a(ExecutorService executorService) {
            Intrinsics.checkNotNullParameter(executorService, "executorService");
            Dispatcher t10 = this.f45723i.k().t();
            if (mu.e.f36663h && Thread.holdsLock(t10)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + t10);
            }
            try {
                try {
                    executorService.execute(this);
                } catch (RejectedExecutionException e10) {
                    InterruptedIOException interruptedIOException = new InterruptedIOException("executor rejected");
                    interruptedIOException.initCause(e10);
                    this.f45723i.v(interruptedIOException);
                    this.f45721d.onFailure(this.f45723i, interruptedIOException);
                    this.f45723i.k().t().h(this);
                }
            } catch (Throwable th2) {
                this.f45723i.k().t().h(this);
                throw th2;
            }
        }

        public final e b() {
            return this.f45723i;
        }

        public final AtomicInteger c() {
            return this.f45722e;
        }

        public final String d() {
            return this.f45723i.q().n().i();
        }

        public final void e(a other) {
            Intrinsics.checkNotNullParameter(other, "other");
            this.f45722e = other.f45722e;
        }

        @Override // java.lang.Runnable
        public void run() {
            boolean z10;
            Throwable th2;
            IOException e10;
            OkHttpClient k10;
            e eVar = this.f45723i;
            Thread currentThread = Thread.currentThread();
            String name = currentThread.getName();
            currentThread.setName("OkHttp " + this.f45723i.w());
            try {
                eVar.f45711q.v();
                try {
                    z10 = true;
                    try {
                        this.f45721d.onResponse(eVar, eVar.r());
                        k10 = eVar.k();
                    } catch (IOException e11) {
                        e10 = e11;
                        if (z10) {
                            vu.h.f52015a.g().k("Callback failure for " + eVar.D(), 4, e10);
                        } else {
                            this.f45721d.onFailure(eVar, e10);
                        }
                        k10 = eVar.k();
                        k10.t().h(this);
                    } catch (Throwable th3) {
                        th2 = th3;
                        eVar.cancel();
                        if (!z10) {
                            IOException iOException = new IOException("canceled due to " + th2);
                            as.e.a(iOException, th2);
                            this.f45721d.onFailure(eVar, iOException);
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
        private final Object f45724a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(e referent, Object obj) {
            super(referent);
            Intrinsics.checkNotNullParameter(referent, "referent");
            this.f45724a = obj;
        }

        public final Object a() {
            return this.f45724a;
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
        this.f45706d = client;
        this.f45707e = originalRequest;
        this.f45708i = z10;
        this.f45709o = client.o().a();
        this.f45710p = client.v().a(this);
        c cVar = new c();
        cVar.g(client.k(), TimeUnit.MILLISECONDS);
        this.f45711q = cVar;
        this.f45712r = new AtomicBoolean();
        this.f45720z = true;
    }

    private final IOException B(IOException iOException) {
        if (this.f45716v || !this.f45711q.w()) {
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
        if (this.f45708i) {
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
        boolean z10 = mu.e.f36663h;
        if (z10 && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        f fVar = this.f45715u;
        if (fVar != null) {
            if (z10 && Thread.holdsLock(fVar)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + fVar);
            }
            synchronized (fVar) {
                x10 = x();
            }
            if (this.f45715u == null) {
                if (x10 != null) {
                    mu.e.n(x10);
                }
                this.f45710p.l(this, fVar);
            } else if (x10 != null) {
                throw new IllegalStateException("Check failed.");
            }
        }
        IOException B = B(iOException);
        if (iOException != null) {
            okhttp3.e eVar = this.f45710p;
            Intrinsics.checkNotNull(B);
            eVar.e(this, B);
            return B;
        }
        this.f45710p.d(this);
        return B;
    }

    private final void e() {
        this.f45713s = vu.h.f52015a.g().i("response.body().close()");
        this.f45710p.f(this);
    }

    private final okhttp3.a g(HttpUrl httpUrl) {
        SSLSocketFactory sSLSocketFactory;
        HostnameVerifier hostnameVerifier;
        lu.c cVar;
        if (httpUrl.j()) {
            sSLSocketFactory = this.f45706d.O();
            hostnameVerifier = this.f45706d.z();
            cVar = this.f45706d.m();
        } else {
            sSLSocketFactory = null;
            hostnameVerifier = null;
            cVar = null;
        }
        return new okhttp3.a(httpUrl.i(), httpUrl.o(), this.f45706d.u(), this.f45706d.N(), sSLSocketFactory, hostnameVerifier, cVar, this.f45706d.J(), this.f45706d.I(), this.f45706d.H(), this.f45706d.q(), this.f45706d.K());
    }

    public final void A() {
        if (!this.f45716v) {
            this.f45716v = true;
            this.f45711q.w();
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
        if (this.f45712r.compareAndSet(false, true)) {
            e();
            this.f45706d.t().c(new a(this, responseCallback));
            return;
        }
        throw new IllegalStateException("Already Executed");
    }

    public final void c(f connection) {
        Intrinsics.checkNotNullParameter(connection, "connection");
        if (mu.e.f36663h && !Thread.holdsLock(connection)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + connection);
        } else if (this.f45715u == null) {
            this.f45715u = connection;
            connection.n().add(new b(this, this.f45713s));
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
        this.f45710p.g(this);
    }

    @Override // okhttp3.Call
    public Response execute() {
        if (this.f45712r.compareAndSet(false, true)) {
            this.f45711q.v();
            e();
            try {
                this.f45706d.t().d(this);
                return r();
            } finally {
                this.f45706d.t().i(this);
            }
        }
        throw new IllegalStateException("Already Executed");
    }

    /* renamed from: f */
    public e clone() {
        return new e(this.f45706d, this.f45707e, this.f45708i);
    }

    public final void h(Request request, boolean z10) {
        Intrinsics.checkNotNullParameter(request, "request");
        if (this.f45717w == null) {
            synchronized (this) {
                if (!this.f45719y) {
                    if (!this.f45718x) {
                        Unit unit = Unit.f31987a;
                    } else {
                        throw new IllegalStateException("Check failed.");
                    }
                } else {
                    throw new IllegalStateException("cannot make a new request because the previous response is still open: please call response.close()");
                }
            }
            if (z10) {
                this.f45714t = new d(this.f45709o, g(request.n()), this, this.f45710p);
                return;
            }
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    @Override // okhttp3.Call
    public Request i() {
        return this.f45707e;
    }

    public final void j(boolean z10) {
        qu.c cVar;
        synchronized (this) {
            if (this.f45720z) {
                Unit unit = Unit.f31987a;
            } else {
                throw new IllegalStateException("released");
            }
        }
        if (z10 && (cVar = this.B) != null) {
            cVar.d();
        }
        this.f45717w = null;
    }

    public final OkHttpClient k() {
        return this.f45706d;
    }

    public final f l() {
        return this.f45715u;
    }

    public final okhttp3.e m() {
        return this.f45710p;
    }

    public final boolean n() {
        return this.f45708i;
    }

    public final qu.c o() {
        return this.f45717w;
    }

    public final Request q() {
        return this.f45707e;
    }

    public final Response r() {
        ArrayList arrayList = new ArrayList();
        CollectionsKt.B(arrayList, this.f45706d.A());
        arrayList.add(new ru.j(this.f45706d));
        arrayList.add(new ru.a(this.f45706d.r()));
        arrayList.add(new ou.a(this.f45706d.j()));
        arrayList.add(qu.a.f45673a);
        if (!this.f45708i) {
            CollectionsKt.B(arrayList, this.f45706d.D());
        }
        arrayList.add(new ru.b(this.f45708i));
        boolean z10 = false;
        try {
            try {
                Response a10 = new ru.g(this, arrayList, 0, null, this.f45707e, this.f45706d.n(), this.f45706d.L(), this.f45706d.R()).a(this.f45707e);
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
            if (this.f45720z) {
                if (!this.f45719y) {
                    if (!this.f45718x) {
                        Unit unit = Unit.f31987a;
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
        d dVar = this.f45714t;
        Intrinsics.checkNotNull(dVar);
        qu.c cVar = new qu.c(this, this.f45710p, dVar, dVar.a(this.f45706d, chain));
        this.f45717w = cVar;
        this.B = cVar;
        synchronized (this) {
            this.f45718x = true;
            this.f45719y = true;
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
            boolean r0 = r1.f45718x     // Catch: java.lang.Throwable -> L17
            if (r0 != 0) goto L1f
            goto L19
        L17:
            r2 = move-exception
            goto L59
        L19:
            if (r4 == 0) goto L41
            boolean r0 = r1.f45719y     // Catch: java.lang.Throwable -> L17
            if (r0 == 0) goto L41
        L1f:
            if (r3 == 0) goto L23
            r1.f45718x = r2     // Catch: java.lang.Throwable -> L17
        L23:
            if (r4 == 0) goto L27
            r1.f45719y = r2     // Catch: java.lang.Throwable -> L17
        L27:
            boolean r3 = r1.f45718x     // Catch: java.lang.Throwable -> L17
            r4 = 1
            if (r3 != 0) goto L32
            boolean r0 = r1.f45719y     // Catch: java.lang.Throwable -> L17
            if (r0 != 0) goto L32
            r0 = r4
            goto L33
        L32:
            r0 = r2
        L33:
            if (r3 != 0) goto L3e
            boolean r3 = r1.f45719y     // Catch: java.lang.Throwable -> L17
            if (r3 != 0) goto L3e
            boolean r3 = r1.f45720z     // Catch: java.lang.Throwable -> L17
            if (r3 != 0) goto L3e
            r2 = r4
        L3e:
            r3 = r2
            r2 = r0
            goto L42
        L41:
            r3 = r2
        L42:
            kotlin.Unit r4 = kotlin.Unit.f31987a     // Catch: java.lang.Throwable -> L17
            monitor-exit(r1)
            if (r2 == 0) goto L51
            r2 = 0
            r1.B = r2
            qu.f r2 = r1.f45715u
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
                if (this.f45720z) {
                    this.f45720z = false;
                    if (!this.f45718x && !this.f45719y) {
                        z10 = true;
                    }
                }
                Unit unit = Unit.f31987a;
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
        return this.f45707e.n().q();
    }

    public final Socket x() {
        f fVar = this.f45715u;
        Intrinsics.checkNotNull(fVar);
        if (mu.e.f36663h && !Thread.holdsLock(fVar)) {
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
            this.f45715u = null;
            if (n10.isEmpty()) {
                fVar.C(System.nanoTime());
                if (this.f45709o.c(fVar)) {
                    return fVar.E();
                }
            }
            return null;
        }
        throw new IllegalStateException("Check failed.");
    }

    public final boolean y() {
        d dVar = this.f45714t;
        Intrinsics.checkNotNull(dVar);
        return dVar.e();
    }

    public final void z(f fVar) {
        this.C = fVar;
    }
}
