package gu;

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
    private volatile gu.c B;
    private volatile f C;

    /* renamed from: d  reason: collision with root package name */
    private final OkHttpClient f25632d;

    /* renamed from: e  reason: collision with root package name */
    private final Request f25633e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f25634i;

    /* renamed from: o  reason: collision with root package name */
    private final g f25635o;

    /* renamed from: p  reason: collision with root package name */
    private final okhttp3.e f25636p;

    /* renamed from: q  reason: collision with root package name */
    private final c f25637q;

    /* renamed from: r  reason: collision with root package name */
    private final AtomicBoolean f25638r;

    /* renamed from: s  reason: collision with root package name */
    private Object f25639s;

    /* renamed from: t  reason: collision with root package name */
    private d f25640t;

    /* renamed from: u  reason: collision with root package name */
    private f f25641u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f25642v;

    /* renamed from: w  reason: collision with root package name */
    private gu.c f25643w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f25644x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f25645y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f25646z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final bu.b f25647d;

        /* renamed from: e  reason: collision with root package name */
        private volatile AtomicInteger f25648e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ e f25649i;

        public a(e eVar, bu.b responseCallback) {
            Intrinsics.checkNotNullParameter(responseCallback, "responseCallback");
            this.f25649i = eVar;
            this.f25647d = responseCallback;
            this.f25648e = new AtomicInteger(0);
        }

        public final void a(ExecutorService executorService) {
            Intrinsics.checkNotNullParameter(executorService, "executorService");
            Dispatcher t10 = this.f25649i.k().t();
            if (cu.e.f20042h && Thread.holdsLock(t10)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + t10);
            }
            try {
                try {
                    executorService.execute(this);
                } catch (RejectedExecutionException e10) {
                    InterruptedIOException interruptedIOException = new InterruptedIOException("executor rejected");
                    interruptedIOException.initCause(e10);
                    this.f25649i.v(interruptedIOException);
                    this.f25647d.onFailure(this.f25649i, interruptedIOException);
                    this.f25649i.k().t().h(this);
                }
            } catch (Throwable th2) {
                this.f25649i.k().t().h(this);
                throw th2;
            }
        }

        public final e b() {
            return this.f25649i;
        }

        public final AtomicInteger c() {
            return this.f25648e;
        }

        public final String d() {
            return this.f25649i.q().n().i();
        }

        public final void e(a other) {
            Intrinsics.checkNotNullParameter(other, "other");
            this.f25648e = other.f25648e;
        }

        @Override // java.lang.Runnable
        public void run() {
            boolean z10;
            Throwable th2;
            IOException e10;
            OkHttpClient k10;
            e eVar = this.f25649i;
            Thread currentThread = Thread.currentThread();
            String name = currentThread.getName();
            currentThread.setName("OkHttp " + this.f25649i.w());
            try {
                eVar.f25637q.v();
                try {
                    z10 = true;
                    try {
                        this.f25647d.onResponse(eVar, eVar.r());
                        k10 = eVar.k();
                    } catch (IOException e11) {
                        e10 = e11;
                        if (z10) {
                            lu.h.f36825a.g().k("Callback failure for " + eVar.D(), 4, e10);
                        } else {
                            this.f25647d.onFailure(eVar, e10);
                        }
                        k10 = eVar.k();
                        k10.t().h(this);
                    } catch (Throwable th3) {
                        th2 = th3;
                        eVar.cancel();
                        if (!z10) {
                            IOException iOException = new IOException("canceled due to " + th2);
                            qr.e.a(iOException, th2);
                            this.f25647d.onFailure(eVar, iOException);
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
        private final Object f25650a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(e referent, Object obj) {
            super(referent);
            Intrinsics.checkNotNullParameter(referent, "referent");
            this.f25650a = obj;
        }

        public final Object a() {
            return this.f25650a;
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
        this.f25632d = client;
        this.f25633e = originalRequest;
        this.f25634i = z10;
        this.f25635o = client.o().a();
        this.f25636p = client.v().a(this);
        c cVar = new c();
        cVar.g(client.k(), TimeUnit.MILLISECONDS);
        this.f25637q = cVar;
        this.f25638r = new AtomicBoolean();
        this.f25646z = true;
    }

    private final IOException B(IOException iOException) {
        if (this.f25642v || !this.f25637q.w()) {
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
        if (this.f25634i) {
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
        boolean z10 = cu.e.f20042h;
        if (z10 && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        f fVar = this.f25641u;
        if (fVar != null) {
            if (z10 && Thread.holdsLock(fVar)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + fVar);
            }
            synchronized (fVar) {
                x10 = x();
            }
            if (this.f25641u == null) {
                if (x10 != null) {
                    cu.e.n(x10);
                }
                this.f25636p.l(this, fVar);
            } else if (x10 != null) {
                throw new IllegalStateException("Check failed.");
            }
        }
        IOException B = B(iOException);
        if (iOException != null) {
            okhttp3.e eVar = this.f25636p;
            Intrinsics.checkNotNull(B);
            eVar.e(this, B);
            return B;
        }
        this.f25636p.d(this);
        return B;
    }

    private final void e() {
        this.f25639s = lu.h.f36825a.g().i("response.body().close()");
        this.f25636p.f(this);
    }

    private final okhttp3.a h(HttpUrl httpUrl) {
        SSLSocketFactory sSLSocketFactory;
        HostnameVerifier hostnameVerifier;
        bu.c cVar;
        if (httpUrl.j()) {
            sSLSocketFactory = this.f25632d.O();
            hostnameVerifier = this.f25632d.z();
            cVar = this.f25632d.m();
        } else {
            sSLSocketFactory = null;
            hostnameVerifier = null;
            cVar = null;
        }
        return new okhttp3.a(httpUrl.i(), httpUrl.o(), this.f25632d.u(), this.f25632d.N(), sSLSocketFactory, hostnameVerifier, cVar, this.f25632d.J(), this.f25632d.I(), this.f25632d.H(), this.f25632d.q(), this.f25632d.K());
    }

    public final void A() {
        if (!this.f25642v) {
            this.f25642v = true;
            this.f25637q.w();
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    @Override // okhttp3.Call
    public boolean C() {
        return this.A;
    }

    @Override // okhttp3.Call
    public void J0(bu.b responseCallback) {
        Intrinsics.checkNotNullParameter(responseCallback, "responseCallback");
        if (this.f25638r.compareAndSet(false, true)) {
            e();
            this.f25632d.t().c(new a(this, responseCallback));
            return;
        }
        throw new IllegalStateException("Already Executed");
    }

    public final void c(f connection) {
        Intrinsics.checkNotNullParameter(connection, "connection");
        if (cu.e.f20042h && !Thread.holdsLock(connection)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + connection);
        } else if (this.f25641u == null) {
            this.f25641u = connection;
            connection.n().add(new b(this, this.f25639s));
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
        gu.c cVar = this.B;
        if (cVar != null) {
            cVar.b();
        }
        f fVar = this.C;
        if (fVar != null) {
            fVar.d();
        }
        this.f25636p.g(this);
    }

    @Override // okhttp3.Call
    public Response execute() {
        if (this.f25638r.compareAndSet(false, true)) {
            this.f25637q.v();
            e();
            try {
                this.f25632d.t().d(this);
                return r();
            } finally {
                this.f25632d.t().i(this);
            }
        }
        throw new IllegalStateException("Already Executed");
    }

    /* renamed from: f */
    public e clone() {
        return new e(this.f25632d, this.f25633e, this.f25634i);
    }

    @Override // okhttp3.Call
    public Request g() {
        return this.f25633e;
    }

    public final void i(Request request, boolean z10) {
        Intrinsics.checkNotNullParameter(request, "request");
        if (this.f25643w == null) {
            synchronized (this) {
                if (!this.f25645y) {
                    if (!this.f25644x) {
                        Unit unit = Unit.f32056a;
                    } else {
                        throw new IllegalStateException("Check failed.");
                    }
                } else {
                    throw new IllegalStateException("cannot make a new request because the previous response is still open: please call response.close()");
                }
            }
            if (z10) {
                this.f25640t = new d(this.f25635o, h(request.n()), this, this.f25636p);
                return;
            }
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    public final void j(boolean z10) {
        gu.c cVar;
        synchronized (this) {
            if (this.f25646z) {
                Unit unit = Unit.f32056a;
            } else {
                throw new IllegalStateException("released");
            }
        }
        if (z10 && (cVar = this.B) != null) {
            cVar.d();
        }
        this.f25643w = null;
    }

    public final OkHttpClient k() {
        return this.f25632d;
    }

    public final f l() {
        return this.f25641u;
    }

    public final okhttp3.e m() {
        return this.f25636p;
    }

    public final boolean n() {
        return this.f25634i;
    }

    public final gu.c o() {
        return this.f25643w;
    }

    public final Request q() {
        return this.f25633e;
    }

    public final Response r() {
        ArrayList arrayList = new ArrayList();
        CollectionsKt.B(arrayList, this.f25632d.A());
        arrayList.add(new hu.j(this.f25632d));
        arrayList.add(new hu.a(this.f25632d.r()));
        arrayList.add(new eu.a(this.f25632d.j()));
        arrayList.add(gu.a.f25599a);
        if (!this.f25634i) {
            CollectionsKt.B(arrayList, this.f25632d.D());
        }
        arrayList.add(new hu.b(this.f25634i));
        boolean z10 = false;
        try {
            try {
                Response a10 = new hu.g(this, arrayList, 0, null, this.f25633e, this.f25632d.n(), this.f25632d.L(), this.f25632d.R()).a(this.f25633e);
                if (!C()) {
                    v(null);
                    return a10;
                }
                cu.e.m(a10);
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

    public final gu.c t(hu.g chain) {
        Intrinsics.checkNotNullParameter(chain, "chain");
        synchronized (this) {
            if (this.f25646z) {
                if (!this.f25645y) {
                    if (!this.f25644x) {
                        Unit unit = Unit.f32056a;
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
        d dVar = this.f25640t;
        Intrinsics.checkNotNull(dVar);
        gu.c cVar = new gu.c(this, this.f25636p, dVar, dVar.a(this.f25632d, chain));
        this.f25643w = cVar;
        this.B = cVar;
        synchronized (this) {
            this.f25644x = true;
            this.f25645y = true;
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
    public final java.io.IOException u(gu.c r2, boolean r3, boolean r4, java.io.IOException r5) {
        /*
            r1 = this;
            java.lang.String r0 = "exchange"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r2, r0)
            gu.c r0 = r1.B
            boolean r2 = kotlin.jvm.internal.Intrinsics.areEqual(r2, r0)
            if (r2 != 0) goto Le
            goto L58
        Le:
            monitor-enter(r1)
            r2 = 0
            if (r3 == 0) goto L19
            boolean r0 = r1.f25644x     // Catch: java.lang.Throwable -> L17
            if (r0 != 0) goto L1f
            goto L19
        L17:
            r2 = move-exception
            goto L59
        L19:
            if (r4 == 0) goto L41
            boolean r0 = r1.f25645y     // Catch: java.lang.Throwable -> L17
            if (r0 == 0) goto L41
        L1f:
            if (r3 == 0) goto L23
            r1.f25644x = r2     // Catch: java.lang.Throwable -> L17
        L23:
            if (r4 == 0) goto L27
            r1.f25645y = r2     // Catch: java.lang.Throwable -> L17
        L27:
            boolean r3 = r1.f25644x     // Catch: java.lang.Throwable -> L17
            r4 = 1
            if (r3 != 0) goto L32
            boolean r0 = r1.f25645y     // Catch: java.lang.Throwable -> L17
            if (r0 != 0) goto L32
            r0 = r4
            goto L33
        L32:
            r0 = r2
        L33:
            if (r3 != 0) goto L3e
            boolean r3 = r1.f25645y     // Catch: java.lang.Throwable -> L17
            if (r3 != 0) goto L3e
            boolean r3 = r1.f25646z     // Catch: java.lang.Throwable -> L17
            if (r3 != 0) goto L3e
            r2 = r4
        L3e:
            r3 = r2
            r2 = r0
            goto L42
        L41:
            r3 = r2
        L42:
            kotlin.Unit r4 = kotlin.Unit.f32056a     // Catch: java.lang.Throwable -> L17
            monitor-exit(r1)
            if (r2 == 0) goto L51
            r2 = 0
            r1.B = r2
            gu.f r2 = r1.f25641u
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
        throw new UnsupportedOperationException("Method not decompiled: gu.e.u(gu.c, boolean, boolean, java.io.IOException):java.io.IOException");
    }

    public final IOException v(IOException iOException) {
        boolean z10;
        synchronized (this) {
            try {
                z10 = false;
                if (this.f25646z) {
                    this.f25646z = false;
                    if (!this.f25644x && !this.f25645y) {
                        z10 = true;
                    }
                }
                Unit unit = Unit.f32056a;
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
        return this.f25633e.n().q();
    }

    public final Socket x() {
        f fVar = this.f25641u;
        Intrinsics.checkNotNull(fVar);
        if (cu.e.f20042h && !Thread.holdsLock(fVar)) {
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
            this.f25641u = null;
            if (n10.isEmpty()) {
                fVar.C(System.nanoTime());
                if (this.f25635o.c(fVar)) {
                    return fVar.E();
                }
            }
            return null;
        }
        throw new IllegalStateException("Check failed.");
    }

    public final boolean y() {
        d dVar = this.f25640t;
        Intrinsics.checkNotNull(dVar);
        return dVar.e();
    }

    public final void z(f fVar) {
        this.C = fVar;
    }
}
