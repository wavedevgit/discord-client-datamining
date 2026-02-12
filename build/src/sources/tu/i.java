package tu;

import java.io.EOFException;
import java.io.IOException;
import java.io.InterruptedIOException;
import java.net.SocketTimeoutException;
import java.util.ArrayDeque;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Headers;
import okio.Buffer;
import okio.BufferedSource;
import okio.Sink;
import okio.Source;
import okio.Timeout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i {

    /* renamed from: o  reason: collision with root package name */
    public static final a f50246o = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final int f50247a;

    /* renamed from: b  reason: collision with root package name */
    private final f f50248b;

    /* renamed from: c  reason: collision with root package name */
    private long f50249c;

    /* renamed from: d  reason: collision with root package name */
    private long f50250d;

    /* renamed from: e  reason: collision with root package name */
    private long f50251e;

    /* renamed from: f  reason: collision with root package name */
    private long f50252f;

    /* renamed from: g  reason: collision with root package name */
    private final ArrayDeque f50253g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f50254h;

    /* renamed from: i  reason: collision with root package name */
    private final c f50255i;

    /* renamed from: j  reason: collision with root package name */
    private final b f50256j;

    /* renamed from: k  reason: collision with root package name */
    private final d f50257k;

    /* renamed from: l  reason: collision with root package name */
    private final d f50258l;

    /* renamed from: m  reason: collision with root package name */
    private tu.b f50259m;

    /* renamed from: n  reason: collision with root package name */
    private IOException f50260n;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class b implements Sink {

        /* renamed from: d  reason: collision with root package name */
        private boolean f50261d;

        /* renamed from: e  reason: collision with root package name */
        private final Buffer f50262e = new Buffer();

        /* renamed from: i  reason: collision with root package name */
        private Headers f50263i;

        /* renamed from: o  reason: collision with root package name */
        private boolean f50264o;

        public b(boolean z10) {
            this.f50261d = z10;
        }

        private final void a(boolean z10) {
            long min;
            boolean z11;
            boolean z12;
            i iVar = i.this;
            synchronized (iVar) {
                try {
                    iVar.s().v();
                    while (iVar.r() >= iVar.q() && !this.f50261d && !this.f50264o && iVar.h() == null) {
                        iVar.D();
                    }
                    iVar.s().C();
                    iVar.c();
                    min = Math.min(iVar.q() - iVar.r(), this.f50262e.size());
                    iVar.B(iVar.r() + min);
                    if (z10 && min == this.f50262e.size()) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    z12 = z11;
                    Unit unit = Unit.f31988a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            i.this.s().v();
            try {
                i.this.g().x2(i.this.j(), z12, this.f50262e, min);
            } finally {
                i.this.s().C();
            }
        }

        @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            boolean z10;
            boolean z11;
            i iVar = i.this;
            if (mu.e.f36664h && Thread.holdsLock(iVar)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + iVar);
            }
            i iVar2 = i.this;
            synchronized (iVar2) {
                if (this.f50264o) {
                    return;
                }
                if (iVar2.h() == null) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                Unit unit = Unit.f31988a;
                if (!i.this.o().f50261d) {
                    if (this.f50262e.size() > 0) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    if (this.f50263i != null) {
                        while (this.f50262e.size() > 0) {
                            a(false);
                        }
                        f g10 = i.this.g();
                        int j10 = i.this.j();
                        Headers headers = this.f50263i;
                        Intrinsics.checkNotNull(headers);
                        g10.y2(j10, z10, mu.e.P(headers));
                    } else if (z11) {
                        while (this.f50262e.size() > 0) {
                            a(true);
                        }
                    } else if (z10) {
                        i.this.g().x2(i.this.j(), true, null, 0L);
                    }
                }
                synchronized (i.this) {
                    this.f50264o = true;
                    Unit unit2 = Unit.f31988a;
                }
                i.this.g().flush();
                i.this.b();
            }
        }

        @Override // okio.Sink, java.io.Flushable
        public void flush() {
            i iVar = i.this;
            if (mu.e.f36664h && Thread.holdsLock(iVar)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + iVar);
            }
            i iVar2 = i.this;
            synchronized (iVar2) {
                iVar2.c();
                Unit unit = Unit.f31988a;
            }
            while (this.f50262e.size() > 0) {
                a(false);
                i.this.g().flush();
            }
        }

        public final boolean h() {
            return this.f50264o;
        }

        public final boolean i() {
            return this.f50261d;
        }

        @Override // okio.Sink
        public Timeout timeout() {
            return i.this.s();
        }

        @Override // okio.Sink
        public void u0(Buffer source, long j10) {
            Intrinsics.checkNotNullParameter(source, "source");
            i iVar = i.this;
            if (mu.e.f36664h && Thread.holdsLock(iVar)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + iVar);
            }
            this.f50262e.u0(source, j10);
            while (this.f50262e.size() >= 16384) {
                a(false);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class c implements Source {

        /* renamed from: d  reason: collision with root package name */
        private final long f50266d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f50267e;

        /* renamed from: i  reason: collision with root package name */
        private final Buffer f50268i = new Buffer();

        /* renamed from: o  reason: collision with root package name */
        private final Buffer f50269o = new Buffer();

        /* renamed from: p  reason: collision with root package name */
        private Headers f50270p;

        /* renamed from: q  reason: collision with root package name */
        private boolean f50271q;

        public c(long j10, boolean z10) {
            this.f50266d = j10;
            this.f50267e = z10;
        }

        private final void p(long j10) {
            i iVar = i.this;
            if (mu.e.f36664h && Thread.holdsLock(iVar)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + iVar);
            }
            i.this.g().w2(j10);
        }

        public final boolean a() {
            return this.f50271q;
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            long size;
            i iVar = i.this;
            synchronized (iVar) {
                this.f50271q = true;
                size = this.f50269o.size();
                this.f50269o.h();
                Intrinsics.checkNotNull(iVar, "null cannot be cast to non-null type java.lang.Object");
                iVar.notifyAll();
                Unit unit = Unit.f31988a;
            }
            if (size > 0) {
                p(size);
            }
            i.this.b();
        }

        public final boolean h() {
            return this.f50267e;
        }

        public final void i(BufferedSource source, long j10) {
            boolean z10;
            boolean z11;
            boolean z12;
            Intrinsics.checkNotNullParameter(source, "source");
            i iVar = i.this;
            if (mu.e.f36664h && Thread.holdsLock(iVar)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + iVar);
            }
            long j11 = j10;
            while (j11 > 0) {
                synchronized (i.this) {
                    z10 = this.f50267e;
                    z11 = false;
                    if (this.f50269o.size() + j11 > this.f50266d) {
                        z12 = true;
                    } else {
                        z12 = false;
                    }
                    Unit unit = Unit.f31988a;
                }
                if (z12) {
                    source.skip(j11);
                    i.this.f(tu.b.FLOW_CONTROL_ERROR);
                    return;
                } else if (z10) {
                    source.skip(j11);
                    return;
                } else {
                    long read = source.read(this.f50268i, j11);
                    if (read != -1) {
                        j11 -= read;
                        i iVar2 = i.this;
                        synchronized (iVar2) {
                            try {
                                if (this.f50271q) {
                                    this.f50268i.h();
                                } else {
                                    if (this.f50269o.size() == 0) {
                                        z11 = true;
                                    }
                                    this.f50269o.A0(this.f50268i);
                                    if (z11) {
                                        Intrinsics.checkNotNull(iVar2, "null cannot be cast to non-null type java.lang.Object");
                                        iVar2.notifyAll();
                                    }
                                }
                            } finally {
                            }
                        }
                    } else {
                        throw new EOFException();
                    }
                }
            }
            p(j10);
        }

        public final void m(boolean z10) {
            this.f50267e = z10;
        }

        public final void n(Headers headers) {
            this.f50270p = headers;
        }

        /* JADX WARN: Code restructure failed: missing block: B:45:0x00c2, code lost:
            throw new java.io.IOException("stream closed");
         */
        @Override // okio.Source
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public long read(okio.Buffer r19, long r20) {
            /*
                r18 = this;
                r1 = r18
                r0 = r19
                r2 = r20
                java.lang.String r4 = "sink"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r0, r4)
                r4 = 0
                int r6 = (r2 > r4 ? 1 : (r2 == r4 ? 0 : -1))
                if (r6 < 0) goto Lcd
            L11:
                tu.i r6 = tu.i.this
                monitor-enter(r6)
                tu.i$d r7 = r6.m()     // Catch: java.lang.Throwable -> Lb9
                r7.v()     // Catch: java.lang.Throwable -> Lb9
                tu.b r7 = r6.h()     // Catch: java.lang.Throwable -> L38
                if (r7 == 0) goto L3b
                boolean r7 = r1.f50267e     // Catch: java.lang.Throwable -> L38
                if (r7 != 0) goto L3b
                java.io.IOException r7 = r6.i()     // Catch: java.lang.Throwable -> L38
                if (r7 != 0) goto L3c
                tu.n r7 = new tu.n     // Catch: java.lang.Throwable -> L38
                tu.b r8 = r6.h()     // Catch: java.lang.Throwable -> L38
                kotlin.jvm.internal.Intrinsics.checkNotNull(r8)     // Catch: java.lang.Throwable -> L38
                r7.<init>(r8)     // Catch: java.lang.Throwable -> L38
                goto L3c
            L38:
                r0 = move-exception
                goto Lc3
            L3b:
                r7 = 0
            L3c:
                boolean r8 = r1.f50271q     // Catch: java.lang.Throwable -> L38
                if (r8 != 0) goto Lbb
                okio.Buffer r8 = r1.f50269o     // Catch: java.lang.Throwable -> L38
                long r8 = r8.size()     // Catch: java.lang.Throwable -> L38
                int r8 = (r8 > r4 ? 1 : (r8 == r4 ? 0 : -1))
                r9 = -1
                r11 = 0
                if (r8 <= 0) goto L95
                okio.Buffer r8 = r1.f50269o     // Catch: java.lang.Throwable -> L38
                long r12 = r8.size()     // Catch: java.lang.Throwable -> L38
                long r12 = java.lang.Math.min(r2, r12)     // Catch: java.lang.Throwable -> L38
                long r12 = r8.read(r0, r12)     // Catch: java.lang.Throwable -> L38
                long r14 = r6.l()     // Catch: java.lang.Throwable -> L38
                long r14 = r14 + r12
                r6.A(r14)     // Catch: java.lang.Throwable -> L38
                long r14 = r6.l()     // Catch: java.lang.Throwable -> L38
                long r16 = r6.k()     // Catch: java.lang.Throwable -> L38
                long r14 = r14 - r16
                if (r7 != 0) goto La0
                tu.f r8 = r6.g()     // Catch: java.lang.Throwable -> L38
                tu.m r8 = r8.Z0()     // Catch: java.lang.Throwable -> L38
                int r8 = r8.c()     // Catch: java.lang.Throwable -> L38
                int r8 = r8 / 2
                long r4 = (long) r8     // Catch: java.lang.Throwable -> L38
                int r4 = (r14 > r4 ? 1 : (r14 == r4 ? 0 : -1))
                if (r4 < 0) goto La0
                tu.f r4 = r6.g()     // Catch: java.lang.Throwable -> L38
                int r5 = r6.j()     // Catch: java.lang.Throwable -> L38
                r4.C2(r5, r14)     // Catch: java.lang.Throwable -> L38
                long r4 = r6.l()     // Catch: java.lang.Throwable -> L38
                r6.z(r4)     // Catch: java.lang.Throwable -> L38
                goto La0
            L95:
                boolean r4 = r1.f50267e     // Catch: java.lang.Throwable -> L38
                if (r4 != 0) goto L9f
                if (r7 != 0) goto L9f
                r6.D()     // Catch: java.lang.Throwable -> L38
                r11 = 1
            L9f:
                r12 = r9
            La0:
                tu.i$d r4 = r6.m()     // Catch: java.lang.Throwable -> Lb9
                r4.C()     // Catch: java.lang.Throwable -> Lb9
                kotlin.Unit r4 = kotlin.Unit.f31988a     // Catch: java.lang.Throwable -> Lb9
                monitor-exit(r6)
                if (r11 == 0) goto Lb0
                r4 = 0
                goto L11
            Lb0:
                int r0 = (r12 > r9 ? 1 : (r12 == r9 ? 0 : -1))
                if (r0 == 0) goto Lb5
                return r12
            Lb5:
                if (r7 != 0) goto Lb8
                return r9
            Lb8:
                throw r7
            Lb9:
                r0 = move-exception
                goto Lcb
            Lbb:
                java.io.IOException r0 = new java.io.IOException     // Catch: java.lang.Throwable -> L38
                java.lang.String r2 = "stream closed"
                r0.<init>(r2)     // Catch: java.lang.Throwable -> L38
                throw r0     // Catch: java.lang.Throwable -> L38
            Lc3:
                tu.i$d r2 = r6.m()     // Catch: java.lang.Throwable -> Lb9
                r2.C()     // Catch: java.lang.Throwable -> Lb9
                throw r0     // Catch: java.lang.Throwable -> Lb9
            Lcb:
                monitor-exit(r6)
                throw r0
            Lcd:
                java.lang.StringBuilder r0 = new java.lang.StringBuilder
                r0.<init>()
                java.lang.String r4 = "byteCount < 0: "
                r0.append(r4)
                r0.append(r2)
                java.lang.String r0 = r0.toString()
                java.lang.IllegalArgumentException r2 = new java.lang.IllegalArgumentException
                java.lang.String r0 = r0.toString()
                r2.<init>(r0)
                throw r2
            */
            throw new UnsupportedOperationException("Method not decompiled: tu.i.c.read(okio.Buffer, long):long");
        }

        @Override // okio.Source
        public Timeout timeout() {
            return i.this.m();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class d extends okio.c {
        public d() {
        }

        @Override // okio.c
        protected void B() {
            i.this.f(tu.b.CANCEL);
            i.this.g().l2();
        }

        public final void C() {
            if (!w()) {
                return;
            }
            throw x(null);
        }

        @Override // okio.c
        protected IOException x(IOException iOException) {
            SocketTimeoutException socketTimeoutException = new SocketTimeoutException("timeout");
            if (iOException != null) {
                socketTimeoutException.initCause(iOException);
            }
            return socketTimeoutException;
        }
    }

    public i(int i10, f connection, boolean z10, boolean z11, Headers headers) {
        Intrinsics.checkNotNullParameter(connection, "connection");
        this.f50247a = i10;
        this.f50248b = connection;
        this.f50252f = connection.a1().c();
        ArrayDeque arrayDeque = new ArrayDeque();
        this.f50253g = arrayDeque;
        this.f50255i = new c(connection.Z0().c(), z11);
        this.f50256j = new b(z10);
        this.f50257k = new d();
        this.f50258l = new d();
        if (headers != null) {
            if (!t()) {
                arrayDeque.add(headers);
                return;
            }
            throw new IllegalStateException("locally-initiated streams shouldn't have headers yet");
        } else if (t()) {
        } else {
            throw new IllegalStateException("remotely-initiated streams should have headers");
        }
    }

    private final boolean e(tu.b bVar, IOException iOException) {
        if (mu.e.f36664h && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        synchronized (this) {
            if (this.f50259m != null) {
                return false;
            }
            this.f50259m = bVar;
            this.f50260n = iOException;
            Intrinsics.checkNotNull(this, "null cannot be cast to non-null type java.lang.Object");
            notifyAll();
            if (this.f50255i.h() && this.f50256j.i()) {
                return false;
            }
            Unit unit = Unit.f31988a;
            this.f50248b.g2(this.f50247a);
            return true;
        }
    }

    public final void A(long j10) {
        this.f50249c = j10;
    }

    public final void B(long j10) {
        this.f50251e = j10;
    }

    public final synchronized Headers C() {
        Object removeFirst;
        this.f50257k.v();
        while (this.f50253g.isEmpty() && this.f50259m == null) {
            D();
        }
        this.f50257k.C();
        if (!this.f50253g.isEmpty()) {
            removeFirst = this.f50253g.removeFirst();
            Intrinsics.checkNotNullExpressionValue(removeFirst, "headersQueue.removeFirst()");
        } else {
            IOException iOException = this.f50260n;
            if (iOException == null) {
                tu.b bVar = this.f50259m;
                Intrinsics.checkNotNull(bVar);
                throw new n(bVar);
            }
            throw iOException;
        }
        return (Headers) removeFirst;
    }

    public final void D() {
        try {
            Intrinsics.checkNotNull(this, "null cannot be cast to non-null type java.lang.Object");
            wait();
        } catch (InterruptedException unused) {
            Thread.currentThread().interrupt();
            throw new InterruptedIOException();
        }
    }

    public final Timeout E() {
        return this.f50258l;
    }

    public final void a(long j10) {
        this.f50252f += j10;
        if (j10 > 0) {
            Intrinsics.checkNotNull(this, "null cannot be cast to non-null type java.lang.Object");
            notifyAll();
        }
    }

    public final void b() {
        boolean z10;
        boolean u10;
        if (mu.e.f36664h && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        synchronized (this) {
            try {
                if (this.f50255i.h() || !this.f50255i.a() || (!this.f50256j.i() && !this.f50256j.h())) {
                    z10 = false;
                    u10 = u();
                    Unit unit = Unit.f31988a;
                }
                z10 = true;
                u10 = u();
                Unit unit2 = Unit.f31988a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        if (z10) {
            d(tu.b.CANCEL, null);
        } else if (!u10) {
            this.f50248b.g2(this.f50247a);
        }
    }

    public final void c() {
        if (!this.f50256j.h()) {
            if (!this.f50256j.i()) {
                if (this.f50259m != null) {
                    IOException iOException = this.f50260n;
                    if (iOException == null) {
                        tu.b bVar = this.f50259m;
                        Intrinsics.checkNotNull(bVar);
                        throw new n(bVar);
                    }
                    throw iOException;
                }
                return;
            }
            throw new IOException("stream finished");
        }
        throw new IOException("stream closed");
    }

    public final void d(tu.b rstStatusCode, IOException iOException) {
        Intrinsics.checkNotNullParameter(rstStatusCode, "rstStatusCode");
        if (!e(rstStatusCode, iOException)) {
            return;
        }
        this.f50248b.A2(this.f50247a, rstStatusCode);
    }

    public final void f(tu.b errorCode) {
        Intrinsics.checkNotNullParameter(errorCode, "errorCode");
        if (!e(errorCode, null)) {
            return;
        }
        this.f50248b.B2(this.f50247a, errorCode);
    }

    public final f g() {
        return this.f50248b;
    }

    public final synchronized tu.b h() {
        return this.f50259m;
    }

    public final IOException i() {
        return this.f50260n;
    }

    public final int j() {
        return this.f50247a;
    }

    public final long k() {
        return this.f50250d;
    }

    public final long l() {
        return this.f50249c;
    }

    public final d m() {
        return this.f50257k;
    }

    public final Sink n() {
        synchronized (this) {
            try {
                if (!this.f50254h && !t()) {
                    throw new IllegalStateException("reply before requesting the sink");
                }
                Unit unit = Unit.f31988a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return this.f50256j;
    }

    public final b o() {
        return this.f50256j;
    }

    public final c p() {
        return this.f50255i;
    }

    public final long q() {
        return this.f50252f;
    }

    public final long r() {
        return this.f50251e;
    }

    public final d s() {
        return this.f50258l;
    }

    public final boolean t() {
        boolean z10;
        if ((this.f50247a & 1) == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (this.f50248b.L0() == z10) {
            return true;
        }
        return false;
    }

    public final synchronized boolean u() {
        try {
            if (this.f50259m != null) {
                return false;
            }
            if (!this.f50255i.h()) {
                if (this.f50255i.a()) {
                }
                return true;
            }
            if (this.f50256j.i() || this.f50256j.h()) {
                if (this.f50254h) {
                    return false;
                }
            }
            return true;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final Timeout v() {
        return this.f50257k;
    }

    public final void w(BufferedSource source, int i10) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (mu.e.f36664h && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        this.f50255i.i(source, i10);
    }

    /* JADX WARN: Removed duplicated region for block: B:19:0x0051 A[Catch: all -> 0x0046, TryCatch #0 {all -> 0x0046, blocks: (B:10:0x0038, B:14:0x0040, B:19:0x0051, B:20:0x0056, B:17:0x0048), top: B:27:0x0038 }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void x(okhttp3.Headers r3, boolean r4) {
        /*
            r2 = this;
            java.lang.String r0 = "headers"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r3, r0)
            boolean r0 = mu.e.f36664h
            if (r0 == 0) goto L37
            boolean r0 = java.lang.Thread.holdsLock(r2)
            if (r0 != 0) goto L10
            goto L37
        L10:
            java.lang.AssertionError r3 = new java.lang.AssertionError
            java.lang.StringBuilder r4 = new java.lang.StringBuilder
            r4.<init>()
            java.lang.String r0 = "Thread "
            r4.append(r0)
            java.lang.Thread r0 = java.lang.Thread.currentThread()
            java.lang.String r0 = r0.getName()
            r4.append(r0)
            java.lang.String r0 = " MUST NOT hold lock on "
            r4.append(r0)
            r4.append(r2)
            java.lang.String r4 = r4.toString()
            r3.<init>(r4)
            throw r3
        L37:
            monitor-enter(r2)
            boolean r0 = r2.f50254h     // Catch: java.lang.Throwable -> L46
            r1 = 1
            if (r0 == 0) goto L48
            if (r4 != 0) goto L40
            goto L48
        L40:
            tu.i$c r0 = r2.f50255i     // Catch: java.lang.Throwable -> L46
            r0.n(r3)     // Catch: java.lang.Throwable -> L46
            goto L4f
        L46:
            r3 = move-exception
            goto L6f
        L48:
            r2.f50254h = r1     // Catch: java.lang.Throwable -> L46
            java.util.ArrayDeque r0 = r2.f50253g     // Catch: java.lang.Throwable -> L46
            r0.add(r3)     // Catch: java.lang.Throwable -> L46
        L4f:
            if (r4 == 0) goto L56
            tu.i$c r3 = r2.f50255i     // Catch: java.lang.Throwable -> L46
            r3.m(r1)     // Catch: java.lang.Throwable -> L46
        L56:
            boolean r3 = r2.u()     // Catch: java.lang.Throwable -> L46
            java.lang.String r4 = "null cannot be cast to non-null type java.lang.Object"
            kotlin.jvm.internal.Intrinsics.checkNotNull(r2, r4)     // Catch: java.lang.Throwable -> L46
            r2.notifyAll()     // Catch: java.lang.Throwable -> L46
            kotlin.Unit r4 = kotlin.Unit.f31988a     // Catch: java.lang.Throwable -> L46
            monitor-exit(r2)
            if (r3 != 0) goto L6e
            tu.f r3 = r2.f50248b
            int r4 = r2.f50247a
            r3.g2(r4)
        L6e:
            return
        L6f:
            monitor-exit(r2)
            throw r3
        */
        throw new UnsupportedOperationException("Method not decompiled: tu.i.x(okhttp3.Headers, boolean):void");
    }

    public final synchronized void y(tu.b errorCode) {
        Intrinsics.checkNotNullParameter(errorCode, "errorCode");
        if (this.f50259m == null) {
            this.f50259m = errorCode;
            Intrinsics.checkNotNull(this, "null cannot be cast to non-null type java.lang.Object");
            notifyAll();
        }
    }

    public final void z(long j10) {
        this.f50250d = j10;
    }
}
