package zt;

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
    private volatile zt.c B;
    private volatile f C;

    /* renamed from: d  reason: collision with root package name */
    private final OkHttpClient f56089d;

    /* renamed from: e  reason: collision with root package name */
    private final Request f56090e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f56091i;

    /* renamed from: o  reason: collision with root package name */
    private final g f56092o;

    /* renamed from: p  reason: collision with root package name */
    private final okhttp3.e f56093p;

    /* renamed from: q  reason: collision with root package name */
    private final c f56094q;

    /* renamed from: r  reason: collision with root package name */
    private final AtomicBoolean f56095r;

    /* renamed from: s  reason: collision with root package name */
    private Object f56096s;

    /* renamed from: t  reason: collision with root package name */
    private d f56097t;

    /* renamed from: u  reason: collision with root package name */
    private f f56098u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f56099v;

    /* renamed from: w  reason: collision with root package name */
    private zt.c f56100w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f56101x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f56102y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f56103z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final ut.b f56104d;

        /* renamed from: e  reason: collision with root package name */
        private volatile AtomicInteger f56105e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ e f56106i;

        public a(e eVar, ut.b responseCallback) {
            Intrinsics.checkNotNullParameter(responseCallback, "responseCallback");
            this.f56106i = eVar;
            this.f56104d = responseCallback;
            this.f56105e = new AtomicInteger(0);
        }

        public final void a(ExecutorService executorService) {
            Intrinsics.checkNotNullParameter(executorService, "executorService");
            Dispatcher s10 = this.f56106i.k().s();
            if (vt.e.f51535h && Thread.holdsLock(s10)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + s10);
            }
            try {
                try {
                    executorService.execute(this);
                } catch (RejectedExecutionException e10) {
                    InterruptedIOException interruptedIOException = new InterruptedIOException("executor rejected");
                    interruptedIOException.initCause(e10);
                    this.f56106i.u(interruptedIOException);
                    this.f56104d.onFailure(this.f56106i, interruptedIOException);
                    this.f56106i.k().s().h(this);
                }
            } catch (Throwable th2) {
                this.f56106i.k().s().h(this);
                throw th2;
            }
        }

        public final e b() {
            return this.f56106i;
        }

        public final AtomicInteger c() {
            return this.f56105e;
        }

        public final String d() {
            return this.f56106i.q().n().i();
        }

        public final void e(a other) {
            Intrinsics.checkNotNullParameter(other, "other");
            this.f56105e = other.f56105e;
        }

        @Override // java.lang.Runnable
        public void run() {
            boolean z10;
            Throwable th2;
            IOException e10;
            OkHttpClient k10;
            e eVar = this.f56106i;
            Thread currentThread = Thread.currentThread();
            String name = currentThread.getName();
            currentThread.setName("OkHttp " + this.f56106i.v());
            try {
                eVar.f56094q.v();
                try {
                    z10 = true;
                    try {
                        this.f56104d.onResponse(eVar, eVar.r());
                        k10 = eVar.k();
                    } catch (IOException e11) {
                        e10 = e11;
                        if (z10) {
                            eu.h.f23247a.g().k("Callback failure for " + eVar.C(), 4, e10);
                        } else {
                            this.f56104d.onFailure(eVar, e10);
                        }
                        k10 = eVar.k();
                        k10.s().h(this);
                    } catch (Throwable th3) {
                        th2 = th3;
                        eVar.cancel();
                        if (!z10) {
                            IOException iOException = new IOException("canceled due to " + th2);
                            jr.e.a(iOException, th2);
                            this.f56104d.onFailure(eVar, iOException);
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
        private final Object f56107a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(e referent, Object obj) {
            super(referent);
            Intrinsics.checkNotNullParameter(referent, "referent");
            this.f56107a = obj;
        }

        public final Object a() {
            return this.f56107a;
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
        this.f56089d = client;
        this.f56090e = originalRequest;
        this.f56091i = z10;
        this.f56092o = client.p().a();
        this.f56093p = client.u().a(this);
        c cVar = new c();
        cVar.g(client.k(), TimeUnit.MILLISECONDS);
        this.f56094q = cVar;
        this.f56095r = new AtomicBoolean();
        this.f56103z = true;
    }

    private final IOException B(IOException iOException) {
        if (this.f56099v || !this.f56094q.w()) {
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
        if (x()) {
            str = "canceled ";
        } else {
            str = "";
        }
        sb2.append(str);
        if (this.f56091i) {
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
        boolean z10 = vt.e.f51535h;
        if (z10 && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        f fVar = this.f56098u;
        if (fVar != null) {
            if (z10 && Thread.holdsLock(fVar)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + fVar);
            }
            synchronized (fVar) {
                w10 = w();
            }
            if (this.f56098u == null) {
                if (w10 != null) {
                    vt.e.n(w10);
                }
                this.f56093p.l(this, fVar);
            } else if (w10 != null) {
                throw new IllegalStateException("Check failed.");
            }
        }
        IOException B = B(iOException);
        if (iOException != null) {
            okhttp3.e eVar = this.f56093p;
            Intrinsics.checkNotNull(B);
            eVar.e(this, B);
            return B;
        }
        this.f56093p.d(this);
        return B;
    }

    private final void e() {
        this.f56096s = eu.h.f23247a.g().i("response.body().close()");
        this.f56093p.f(this);
    }

    private final okhttp3.a g(HttpUrl httpUrl) {
        SSLSocketFactory sSLSocketFactory;
        HostnameVerifier hostnameVerifier;
        ut.c cVar;
        if (httpUrl.j()) {
            sSLSocketFactory = this.f56089d.O();
            hostnameVerifier = this.f56089d.z();
            cVar = this.f56089d.m();
        } else {
            sSLSocketFactory = null;
            hostnameVerifier = null;
            cVar = null;
        }
        return new okhttp3.a(httpUrl.i(), httpUrl.o(), this.f56089d.t(), this.f56089d.N(), sSLSocketFactory, hostnameVerifier, cVar, this.f56089d.I(), this.f56089d.H(), this.f56089d.G(), this.f56089d.q(), this.f56089d.J());
    }

    public final void A() {
        if (!this.f56099v) {
            this.f56099v = true;
            this.f56094q.w();
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    public final void c(f connection) {
        Intrinsics.checkNotNullParameter(connection, "connection");
        if (vt.e.f51535h && !Thread.holdsLock(connection)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + connection);
        } else if (this.f56098u == null) {
            this.f56098u = connection;
            connection.n().add(new b(this, this.f56096s));
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
        zt.c cVar = this.B;
        if (cVar != null) {
            cVar.b();
        }
        f fVar = this.C;
        if (fVar != null) {
            fVar.d();
        }
        this.f56093p.g(this);
    }

    @Override // okhttp3.Call
    public Response execute() {
        if (this.f56095r.compareAndSet(false, true)) {
            this.f56094q.v();
            e();
            try {
                this.f56089d.s().d(this);
                return r();
            } finally {
                this.f56089d.s().i(this);
            }
        }
        throw new IllegalStateException("Already Executed");
    }

    /* renamed from: f */
    public e clone() {
        return new e(this.f56089d, this.f56090e, this.f56091i);
    }

    @Override // okhttp3.Call
    public Request h() {
        return this.f56090e;
    }

    public final void i(Request request, boolean z10) {
        Intrinsics.checkNotNullParameter(request, "request");
        if (this.f56100w == null) {
            synchronized (this) {
                if (!this.f56102y) {
                    if (!this.f56101x) {
                        Unit unit = Unit.f33074a;
                    } else {
                        throw new IllegalStateException("Check failed.");
                    }
                } else {
                    throw new IllegalStateException("cannot make a new request because the previous response is still open: please call response.close()");
                }
            }
            if (z10) {
                this.f56097t = new d(this.f56092o, g(request.n()), this, this.f56093p);
                return;
            }
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    public final void j(boolean z10) {
        zt.c cVar;
        synchronized (this) {
            if (this.f56103z) {
                Unit unit = Unit.f33074a;
            } else {
                throw new IllegalStateException("released");
            }
        }
        if (z10 && (cVar = this.B) != null) {
            cVar.d();
        }
        this.f56100w = null;
    }

    public final OkHttpClient k() {
        return this.f56089d;
    }

    public final f l() {
        return this.f56098u;
    }

    public final okhttp3.e m() {
        return this.f56093p;
    }

    public final boolean o() {
        return this.f56091i;
    }

    public final zt.c p() {
        return this.f56100w;
    }

    public final Request q() {
        return this.f56090e;
    }

    public final Response r() {
        ArrayList arrayList = new ArrayList();
        CollectionsKt.B(arrayList, this.f56089d.A());
        arrayList.add(new au.j(this.f56089d));
        arrayList.add(new au.a(this.f56089d.r()));
        arrayList.add(new xt.a(this.f56089d.j()));
        arrayList.add(zt.a.f56056a);
        if (!this.f56091i) {
            CollectionsKt.B(arrayList, this.f56089d.C());
        }
        arrayList.add(new au.b(this.f56091i));
        boolean z10 = false;
        try {
            try {
                Response a10 = new au.g(this, arrayList, 0, null, this.f56090e, this.f56089d.o(), this.f56089d.K(), this.f56089d.Q()).a(this.f56090e);
                if (!x()) {
                    u(null);
                    return a10;
                }
                vt.e.m(a10);
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

    public final zt.c s(au.g chain) {
        Intrinsics.checkNotNullParameter(chain, "chain");
        synchronized (this) {
            if (this.f56103z) {
                if (!this.f56102y) {
                    if (!this.f56101x) {
                        Unit unit = Unit.f33074a;
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
        d dVar = this.f56097t;
        Intrinsics.checkNotNull(dVar);
        zt.c cVar = new zt.c(this, this.f56093p, dVar, dVar.a(this.f56089d, chain));
        this.f56100w = cVar;
        this.B = cVar;
        synchronized (this) {
            this.f56101x = true;
            this.f56102y = true;
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
    public final java.io.IOException t(zt.c r2, boolean r3, boolean r4, java.io.IOException r5) {
        /*
            r1 = this;
            java.lang.String r0 = "exchange"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r2, r0)
            zt.c r0 = r1.B
            boolean r2 = kotlin.jvm.internal.Intrinsics.areEqual(r2, r0)
            if (r2 != 0) goto Le
            goto L58
        Le:
            monitor-enter(r1)
            r2 = 0
            if (r3 == 0) goto L19
            boolean r0 = r1.f56101x     // Catch: java.lang.Throwable -> L17
            if (r0 != 0) goto L1f
            goto L19
        L17:
            r2 = move-exception
            goto L59
        L19:
            if (r4 == 0) goto L41
            boolean r0 = r1.f56102y     // Catch: java.lang.Throwable -> L17
            if (r0 == 0) goto L41
        L1f:
            if (r3 == 0) goto L23
            r1.f56101x = r2     // Catch: java.lang.Throwable -> L17
        L23:
            if (r4 == 0) goto L27
            r1.f56102y = r2     // Catch: java.lang.Throwable -> L17
        L27:
            boolean r3 = r1.f56101x     // Catch: java.lang.Throwable -> L17
            r4 = 1
            if (r3 != 0) goto L32
            boolean r0 = r1.f56102y     // Catch: java.lang.Throwable -> L17
            if (r0 != 0) goto L32
            r0 = r4
            goto L33
        L32:
            r0 = r2
        L33:
            if (r3 != 0) goto L3e
            boolean r3 = r1.f56102y     // Catch: java.lang.Throwable -> L17
            if (r3 != 0) goto L3e
            boolean r3 = r1.f56103z     // Catch: java.lang.Throwable -> L17
            if (r3 != 0) goto L3e
            r2 = r4
        L3e:
            r3 = r2
            r2 = r0
            goto L42
        L41:
            r3 = r2
        L42:
            kotlin.Unit r4 = kotlin.Unit.f33074a     // Catch: java.lang.Throwable -> L17
            monitor-exit(r1)
            if (r2 == 0) goto L51
            r2 = 0
            r1.B = r2
            zt.f r2 = r1.f56098u
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
        throw new UnsupportedOperationException("Method not decompiled: zt.e.t(zt.c, boolean, boolean, java.io.IOException):java.io.IOException");
    }

    @Override // okhttp3.Call
    public void t0(ut.b responseCallback) {
        Intrinsics.checkNotNullParameter(responseCallback, "responseCallback");
        if (this.f56095r.compareAndSet(false, true)) {
            e();
            this.f56089d.s().c(new a(this, responseCallback));
            return;
        }
        throw new IllegalStateException("Already Executed");
    }

    public final IOException u(IOException iOException) {
        boolean z10;
        synchronized (this) {
            try {
                z10 = false;
                if (this.f56103z) {
                    this.f56103z = false;
                    if (!this.f56101x && !this.f56102y) {
                        z10 = true;
                    }
                }
                Unit unit = Unit.f33074a;
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
        return this.f56090e.n().q();
    }

    public final Socket w() {
        f fVar = this.f56098u;
        Intrinsics.checkNotNull(fVar);
        if (vt.e.f51535h && !Thread.holdsLock(fVar)) {
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
            this.f56098u = null;
            if (n10.isEmpty()) {
                fVar.C(System.nanoTime());
                if (this.f56092o.c(fVar)) {
                    return fVar.E();
                }
            }
            return null;
        }
        throw new IllegalStateException("Check failed.");
    }

    @Override // okhttp3.Call
    public boolean x() {
        return this.A;
    }

    public final boolean y() {
        d dVar = this.f56097t;
        Intrinsics.checkNotNull(dVar);
        return dVar.e();
    }

    public final void z(f fVar) {
        this.C = fVar;
    }
}
