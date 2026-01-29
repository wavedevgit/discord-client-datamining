package bu;

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
    public static final a f7976o = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final int f7977a;

    /* renamed from: b  reason: collision with root package name */
    private final f f7978b;

    /* renamed from: c  reason: collision with root package name */
    private long f7979c;

    /* renamed from: d  reason: collision with root package name */
    private long f7980d;

    /* renamed from: e  reason: collision with root package name */
    private long f7981e;

    /* renamed from: f  reason: collision with root package name */
    private long f7982f;

    /* renamed from: g  reason: collision with root package name */
    private final ArrayDeque f7983g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f7984h;

    /* renamed from: i  reason: collision with root package name */
    private final c f7985i;

    /* renamed from: j  reason: collision with root package name */
    private final b f7986j;

    /* renamed from: k  reason: collision with root package name */
    private final d f7987k;

    /* renamed from: l  reason: collision with root package name */
    private final d f7988l;

    /* renamed from: m  reason: collision with root package name */
    private bu.b f7989m;

    /* renamed from: n  reason: collision with root package name */
    private IOException f7990n;

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
        private boolean f7991d;

        /* renamed from: e  reason: collision with root package name */
        private final Buffer f7992e = new Buffer();

        /* renamed from: i  reason: collision with root package name */
        private Headers f7993i;

        /* renamed from: o  reason: collision with root package name */
        private boolean f7994o;

        public b(boolean z10) {
            this.f7991d = z10;
        }

        private final void a(boolean z10) {
            long min;
            boolean z11;
            boolean z12;
            i iVar = i.this;
            synchronized (iVar) {
                try {
                    iVar.s().v();
                    while (iVar.r() >= iVar.q() && !this.f7991d && !this.f7994o && iVar.h() == null) {
                        iVar.D();
                    }
                    iVar.s().C();
                    iVar.c();
                    min = Math.min(iVar.q() - iVar.r(), this.f7992e.size());
                    iVar.B(iVar.r() + min);
                    if (z10 && min == this.f7992e.size()) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    z12 = z11;
                    Unit unit = Unit.f33282a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            i.this.s().v();
            try {
                i.this.g().x2(i.this.j(), z12, this.f7992e, min);
            } finally {
                i.this.s().C();
            }
        }

        @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            boolean z10;
            boolean z11;
            i iVar = i.this;
            if (ut.e.f50563h && Thread.holdsLock(iVar)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + iVar);
            }
            i iVar2 = i.this;
            synchronized (iVar2) {
                if (this.f7994o) {
                    return;
                }
                if (iVar2.h() == null) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                Unit unit = Unit.f33282a;
                if (!i.this.o().f7991d) {
                    if (this.f7992e.size() > 0) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    if (this.f7993i != null) {
                        while (this.f7992e.size() > 0) {
                            a(false);
                        }
                        f g10 = i.this.g();
                        int j10 = i.this.j();
                        Headers headers = this.f7993i;
                        Intrinsics.checkNotNull(headers);
                        g10.y2(j10, z10, ut.e.P(headers));
                    } else if (z11) {
                        while (this.f7992e.size() > 0) {
                            a(true);
                        }
                    } else if (z10) {
                        i.this.g().x2(i.this.j(), true, null, 0L);
                    }
                }
                synchronized (i.this) {
                    this.f7994o = true;
                    Unit unit2 = Unit.f33282a;
                }
                i.this.g().flush();
                i.this.b();
            }
        }

        @Override // okio.Sink, java.io.Flushable
        public void flush() {
            i iVar = i.this;
            if (ut.e.f50563h && Thread.holdsLock(iVar)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + iVar);
            }
            i iVar2 = i.this;
            synchronized (iVar2) {
                iVar2.c();
                Unit unit = Unit.f33282a;
            }
            while (this.f7992e.size() > 0) {
                a(false);
                i.this.g().flush();
            }
        }

        public final boolean h() {
            return this.f7994o;
        }

        public final boolean l() {
            return this.f7991d;
        }

        @Override // okio.Sink
        public void t0(Buffer source, long j10) {
            Intrinsics.checkNotNullParameter(source, "source");
            i iVar = i.this;
            if (ut.e.f50563h && Thread.holdsLock(iVar)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + iVar);
            }
            this.f7992e.t0(source, j10);
            while (this.f7992e.size() >= 16384) {
                a(false);
            }
        }

        @Override // okio.Sink
        public Timeout timeout() {
            return i.this.s();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class c implements Source {

        /* renamed from: d  reason: collision with root package name */
        private final long f7996d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f7997e;

        /* renamed from: i  reason: collision with root package name */
        private final Buffer f7998i = new Buffer();

        /* renamed from: o  reason: collision with root package name */
        private final Buffer f7999o = new Buffer();

        /* renamed from: p  reason: collision with root package name */
        private Headers f8000p;

        /* renamed from: q  reason: collision with root package name */
        private boolean f8001q;

        public c(long j10, boolean z10) {
            this.f7996d = j10;
            this.f7997e = z10;
        }

        private final void B(long j10) {
            i iVar = i.this;
            if (ut.e.f50563h && Thread.holdsLock(iVar)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + iVar);
            }
            i.this.g().w2(j10);
        }

        public final boolean a() {
            return this.f8001q;
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            long size;
            i iVar = i.this;
            synchronized (iVar) {
                this.f8001q = true;
                size = this.f7999o.size();
                this.f7999o.l();
                Intrinsics.checkNotNull(iVar, "null cannot be cast to non-null type java.lang.Object");
                iVar.notifyAll();
                Unit unit = Unit.f33282a;
            }
            if (size > 0) {
                B(size);
            }
            i.this.b();
        }

        public final boolean h() {
            return this.f7997e;
        }

        public final void l(BufferedSource source, long j10) {
            boolean z10;
            boolean z11;
            boolean z12;
            Intrinsics.checkNotNullParameter(source, "source");
            i iVar = i.this;
            if (ut.e.f50563h && Thread.holdsLock(iVar)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + iVar);
            }
            long j11 = j10;
            while (j11 > 0) {
                synchronized (i.this) {
                    z10 = this.f7997e;
                    z11 = false;
                    if (this.f7999o.size() + j11 > this.f7996d) {
                        z12 = true;
                    } else {
                        z12 = false;
                    }
                    Unit unit = Unit.f33282a;
                }
                if (z12) {
                    source.skip(j11);
                    i.this.f(bu.b.FLOW_CONTROL_ERROR);
                    return;
                } else if (z10) {
                    source.skip(j11);
                    return;
                } else {
                    long read = source.read(this.f7998i, j11);
                    if (read != -1) {
                        j11 -= read;
                        i iVar2 = i.this;
                        synchronized (iVar2) {
                            try {
                                if (this.f8001q) {
                                    this.f7998i.l();
                                } else {
                                    if (this.f7999o.size() == 0) {
                                        z11 = true;
                                    }
                                    this.f7999o.y0(this.f7998i);
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
            B(j10);
        }

        public final void n(boolean z10) {
            this.f7997e = z10;
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
                bu.i r6 = bu.i.this
                monitor-enter(r6)
                bu.i$d r7 = r6.m()     // Catch: java.lang.Throwable -> Lb9
                r7.v()     // Catch: java.lang.Throwable -> Lb9
                bu.b r7 = r6.h()     // Catch: java.lang.Throwable -> L38
                if (r7 == 0) goto L3b
                boolean r7 = r1.f7997e     // Catch: java.lang.Throwable -> L38
                if (r7 != 0) goto L3b
                java.io.IOException r7 = r6.i()     // Catch: java.lang.Throwable -> L38
                if (r7 != 0) goto L3c
                bu.n r7 = new bu.n     // Catch: java.lang.Throwable -> L38
                bu.b r8 = r6.h()     // Catch: java.lang.Throwable -> L38
                kotlin.jvm.internal.Intrinsics.checkNotNull(r8)     // Catch: java.lang.Throwable -> L38
                r7.<init>(r8)     // Catch: java.lang.Throwable -> L38
                goto L3c
            L38:
                r0 = move-exception
                goto Lc3
            L3b:
                r7 = 0
            L3c:
                boolean r8 = r1.f8001q     // Catch: java.lang.Throwable -> L38
                if (r8 != 0) goto Lbb
                okio.Buffer r8 = r1.f7999o     // Catch: java.lang.Throwable -> L38
                long r8 = r8.size()     // Catch: java.lang.Throwable -> L38
                int r8 = (r8 > r4 ? 1 : (r8 == r4 ? 0 : -1))
                r9 = -1
                r11 = 0
                if (r8 <= 0) goto L95
                okio.Buffer r8 = r1.f7999o     // Catch: java.lang.Throwable -> L38
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
                bu.f r8 = r6.g()     // Catch: java.lang.Throwable -> L38
                bu.m r8 = r8.y1()     // Catch: java.lang.Throwable -> L38
                int r8 = r8.c()     // Catch: java.lang.Throwable -> L38
                int r8 = r8 / 2
                long r4 = (long) r8     // Catch: java.lang.Throwable -> L38
                int r4 = (r14 > r4 ? 1 : (r14 == r4 ? 0 : -1))
                if (r4 < 0) goto La0
                bu.f r4 = r6.g()     // Catch: java.lang.Throwable -> L38
                int r5 = r6.j()     // Catch: java.lang.Throwable -> L38
                r4.C2(r5, r14)     // Catch: java.lang.Throwable -> L38
                long r4 = r6.l()     // Catch: java.lang.Throwable -> L38
                r6.z(r4)     // Catch: java.lang.Throwable -> L38
                goto La0
            L95:
                boolean r4 = r1.f7997e     // Catch: java.lang.Throwable -> L38
                if (r4 != 0) goto L9f
                if (r7 != 0) goto L9f
                r6.D()     // Catch: java.lang.Throwable -> L38
                r11 = 1
            L9f:
                r12 = r9
            La0:
                bu.i$d r4 = r6.m()     // Catch: java.lang.Throwable -> Lb9
                r4.C()     // Catch: java.lang.Throwable -> Lb9
                kotlin.Unit r4 = kotlin.Unit.f33282a     // Catch: java.lang.Throwable -> Lb9
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
                bu.i$d r2 = r6.m()     // Catch: java.lang.Throwable -> Lb9
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
            throw new UnsupportedOperationException("Method not decompiled: bu.i.c.read(okio.Buffer, long):long");
        }

        @Override // okio.Source
        public Timeout timeout() {
            return i.this.m();
        }

        public final void x(Headers headers) {
            this.f8000p = headers;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class d extends okio.c {
        public d() {
        }

        @Override // okio.c
        protected void B() {
            i.this.f(bu.b.CANCEL);
            i.this.g().q2();
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
        this.f7977a = i10;
        this.f7978b = connection;
        this.f7982f = connection.A1().c();
        ArrayDeque arrayDeque = new ArrayDeque();
        this.f7983g = arrayDeque;
        this.f7985i = new c(connection.y1().c(), z11);
        this.f7986j = new b(z10);
        this.f7987k = new d();
        this.f7988l = new d();
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

    private final boolean e(bu.b bVar, IOException iOException) {
        if (ut.e.f50563h && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        synchronized (this) {
            if (this.f7989m != null) {
                return false;
            }
            this.f7989m = bVar;
            this.f7990n = iOException;
            Intrinsics.checkNotNull(this, "null cannot be cast to non-null type java.lang.Object");
            notifyAll();
            if (this.f7985i.h() && this.f7986j.l()) {
                return false;
            }
            Unit unit = Unit.f33282a;
            this.f7978b.p2(this.f7977a);
            return true;
        }
    }

    public final void A(long j10) {
        this.f7979c = j10;
    }

    public final void B(long j10) {
        this.f7981e = j10;
    }

    public final synchronized Headers C() {
        Object removeFirst;
        this.f7987k.v();
        while (this.f7983g.isEmpty() && this.f7989m == null) {
            D();
        }
        this.f7987k.C();
        if (!this.f7983g.isEmpty()) {
            removeFirst = this.f7983g.removeFirst();
            Intrinsics.checkNotNullExpressionValue(removeFirst, "headersQueue.removeFirst()");
        } else {
            IOException iOException = this.f7990n;
            if (iOException == null) {
                bu.b bVar = this.f7989m;
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
        return this.f7988l;
    }

    public final void a(long j10) {
        this.f7982f += j10;
        if (j10 > 0) {
            Intrinsics.checkNotNull(this, "null cannot be cast to non-null type java.lang.Object");
            notifyAll();
        }
    }

    public final void b() {
        boolean z10;
        boolean u10;
        if (ut.e.f50563h && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        synchronized (this) {
            try {
                if (this.f7985i.h() || !this.f7985i.a() || (!this.f7986j.l() && !this.f7986j.h())) {
                    z10 = false;
                    u10 = u();
                    Unit unit = Unit.f33282a;
                }
                z10 = true;
                u10 = u();
                Unit unit2 = Unit.f33282a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        if (z10) {
            d(bu.b.CANCEL, null);
        } else if (!u10) {
            this.f7978b.p2(this.f7977a);
        }
    }

    public final void c() {
        if (!this.f7986j.h()) {
            if (!this.f7986j.l()) {
                if (this.f7989m != null) {
                    IOException iOException = this.f7990n;
                    if (iOException == null) {
                        bu.b bVar = this.f7989m;
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

    public final void d(bu.b rstStatusCode, IOException iOException) {
        Intrinsics.checkNotNullParameter(rstStatusCode, "rstStatusCode");
        if (!e(rstStatusCode, iOException)) {
            return;
        }
        this.f7978b.A2(this.f7977a, rstStatusCode);
    }

    public final void f(bu.b errorCode) {
        Intrinsics.checkNotNullParameter(errorCode, "errorCode");
        if (!e(errorCode, null)) {
            return;
        }
        this.f7978b.B2(this.f7977a, errorCode);
    }

    public final f g() {
        return this.f7978b;
    }

    public final synchronized bu.b h() {
        return this.f7989m;
    }

    public final IOException i() {
        return this.f7990n;
    }

    public final int j() {
        return this.f7977a;
    }

    public final long k() {
        return this.f7980d;
    }

    public final long l() {
        return this.f7979c;
    }

    public final d m() {
        return this.f7987k;
    }

    public final Sink n() {
        synchronized (this) {
            try {
                if (!this.f7984h && !t()) {
                    throw new IllegalStateException("reply before requesting the sink");
                }
                Unit unit = Unit.f33282a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return this.f7986j;
    }

    public final b o() {
        return this.f7986j;
    }

    public final c p() {
        return this.f7985i;
    }

    public final long q() {
        return this.f7982f;
    }

    public final long r() {
        return this.f7981e;
    }

    public final d s() {
        return this.f7988l;
    }

    public final boolean t() {
        boolean z10;
        if ((this.f7977a & 1) == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (this.f7978b.U0() == z10) {
            return true;
        }
        return false;
    }

    public final synchronized boolean u() {
        try {
            if (this.f7989m != null) {
                return false;
            }
            if (!this.f7985i.h()) {
                if (this.f7985i.a()) {
                }
                return true;
            }
            if (this.f7986j.l() || this.f7986j.h()) {
                if (this.f7984h) {
                    return false;
                }
            }
            return true;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final Timeout v() {
        return this.f7987k;
    }

    public final void w(BufferedSource source, int i10) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (ut.e.f50563h && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        this.f7985i.l(source, i10);
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
            boolean r0 = ut.e.f50563h
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
            boolean r0 = r2.f7984h     // Catch: java.lang.Throwable -> L46
            r1 = 1
            if (r0 == 0) goto L48
            if (r4 != 0) goto L40
            goto L48
        L40:
            bu.i$c r0 = r2.f7985i     // Catch: java.lang.Throwable -> L46
            r0.x(r3)     // Catch: java.lang.Throwable -> L46
            goto L4f
        L46:
            r3 = move-exception
            goto L6f
        L48:
            r2.f7984h = r1     // Catch: java.lang.Throwable -> L46
            java.util.ArrayDeque r0 = r2.f7983g     // Catch: java.lang.Throwable -> L46
            r0.add(r3)     // Catch: java.lang.Throwable -> L46
        L4f:
            if (r4 == 0) goto L56
            bu.i$c r3 = r2.f7985i     // Catch: java.lang.Throwable -> L46
            r3.n(r1)     // Catch: java.lang.Throwable -> L46
        L56:
            boolean r3 = r2.u()     // Catch: java.lang.Throwable -> L46
            java.lang.String r4 = "null cannot be cast to non-null type java.lang.Object"
            kotlin.jvm.internal.Intrinsics.checkNotNull(r2, r4)     // Catch: java.lang.Throwable -> L46
            r2.notifyAll()     // Catch: java.lang.Throwable -> L46
            kotlin.Unit r4 = kotlin.Unit.f33282a     // Catch: java.lang.Throwable -> L46
            monitor-exit(r2)
            if (r3 != 0) goto L6e
            bu.f r3 = r2.f7978b
            int r4 = r2.f7977a
            r3.p2(r4)
        L6e:
            return
        L6f:
            monitor-exit(r2)
            throw r3
        */
        throw new UnsupportedOperationException("Method not decompiled: bu.i.x(okhttp3.Headers, boolean):void");
    }

    public final synchronized void y(bu.b errorCode) {
        Intrinsics.checkNotNullParameter(errorCode, "errorCode");
        if (this.f7989m == null) {
            this.f7989m = errorCode;
            Intrinsics.checkNotNull(this, "null cannot be cast to non-null type java.lang.Object");
            notifyAll();
        }
    }

    public final void z(long j10) {
        this.f7980d = j10;
    }
}
