package okio;

import java.io.IOException;
import java.io.InterruptedIOException;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.ReentrantLock;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import qu.g0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c extends Timeout {

    /* renamed from: i  reason: collision with root package name */
    private static final a f43180i = new a(null);

    /* renamed from: j  reason: collision with root package name */
    private static final ReentrantLock f43181j;

    /* renamed from: k  reason: collision with root package name */
    private static final Condition f43182k;

    /* renamed from: l  reason: collision with root package name */
    private static final long f43183l;

    /* renamed from: m  reason: collision with root package name */
    private static final long f43184m;

    /* renamed from: n  reason: collision with root package name */
    private static c f43185n;

    /* renamed from: f  reason: collision with root package name */
    private int f43186f;

    /* renamed from: g  reason: collision with root package name */
    private c f43187g;

    /* renamed from: h  reason: collision with root package name */
    private long f43188h;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void f(c cVar, long j10, boolean z10) {
            if (c.f43185n == null) {
                c.f43185n = new c();
                new b().start();
            }
            long nanoTime = System.nanoTime();
            int i10 = (j10 > 0L ? 1 : (j10 == 0L ? 0 : -1));
            if (i10 != 0 && z10) {
                cVar.f43188h = Math.min(j10, cVar.c() - nanoTime) + nanoTime;
            } else if (i10 != 0) {
                cVar.f43188h = j10 + nanoTime;
            } else if (z10) {
                cVar.f43188h = cVar.c();
            } else {
                throw new AssertionError();
            }
            long y10 = cVar.y(nanoTime);
            c cVar2 = c.f43185n;
            Intrinsics.checkNotNull(cVar2);
            while (cVar2.f43187g != null) {
                c cVar3 = cVar2.f43187g;
                Intrinsics.checkNotNull(cVar3);
                if (y10 < cVar3.y(nanoTime)) {
                    break;
                }
                cVar2 = cVar2.f43187g;
                Intrinsics.checkNotNull(cVar2);
            }
            cVar.f43187g = cVar2.f43187g;
            cVar2.f43187g = cVar;
            if (cVar2 == c.f43185n) {
                d().signal();
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void g(c cVar) {
            for (c cVar2 = c.f43185n; cVar2 != null; cVar2 = cVar2.f43187g) {
                if (cVar2.f43187g == cVar) {
                    cVar2.f43187g = cVar.f43187g;
                    cVar.f43187g = null;
                    return;
                }
            }
            throw new IllegalStateException("node was not found in the queue");
        }

        public final c c() {
            c cVar = c.f43185n;
            Intrinsics.checkNotNull(cVar);
            c cVar2 = cVar.f43187g;
            if (cVar2 != null) {
                long y10 = cVar2.y(System.nanoTime());
                if (y10 <= 0) {
                    c cVar3 = c.f43185n;
                    Intrinsics.checkNotNull(cVar3);
                    cVar3.f43187g = cVar2.f43187g;
                    cVar2.f43187g = null;
                    cVar2.f43186f = 2;
                    return cVar2;
                }
                d().await(y10, TimeUnit.NANOSECONDS);
                return null;
            }
            long nanoTime = System.nanoTime();
            d().await(c.f43183l, TimeUnit.MILLISECONDS);
            c cVar4 = c.f43185n;
            Intrinsics.checkNotNull(cVar4);
            if (cVar4.f43187g == null && System.nanoTime() - nanoTime >= c.f43184m) {
                return c.f43185n;
            }
            return null;
        }

        public final Condition d() {
            return c.f43182k;
        }

        public final ReentrantLock e() {
            return c.f43181j;
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends Thread {
        public b() {
            super("Okio Watchdog");
            setDaemon(true);
        }

        @Override // java.lang.Thread, java.lang.Runnable
        public void run() {
            ReentrantLock e10;
            c c10;
            while (true) {
                try {
                    e10 = c.f43180i.e();
                    e10.lock();
                    c10 = c.f43180i.c();
                } catch (InterruptedException unused) {
                }
                if (c10 == c.f43185n) {
                    a unused2 = c.f43180i;
                    c.f43185n = null;
                    e10.unlock();
                    return;
                }
                Unit unit = Unit.f32008a;
                e10.unlock();
                if (c10 != null) {
                    c10.B();
                }
            }
        }
    }

    /* renamed from: okio.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0567c implements Sink {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Sink f43190e;

        C0567c(Sink sink) {
            this.f43190e = sink;
        }

        @Override // okio.Sink
        /* renamed from: a */
        public c timeout() {
            return c.this;
        }

        @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            c cVar = c.this;
            Sink sink = this.f43190e;
            cVar.v();
            try {
                sink.close();
                Unit unit = Unit.f32008a;
                if (!cVar.w()) {
                    return;
                }
                throw cVar.p(null);
            } catch (IOException e10) {
                if (!cVar.w()) {
                    throw e10;
                }
                throw cVar.p(e10);
            } finally {
                cVar.w();
            }
        }

        @Override // okio.Sink, java.io.Flushable
        public void flush() {
            c cVar = c.this;
            Sink sink = this.f43190e;
            cVar.v();
            try {
                sink.flush();
                Unit unit = Unit.f32008a;
                if (!cVar.w()) {
                    return;
                }
                throw cVar.p(null);
            } catch (IOException e10) {
                if (!cVar.w()) {
                    throw e10;
                }
                throw cVar.p(e10);
            } finally {
                cVar.w();
            }
        }

        public String toString() {
            return "AsyncTimeout.sink(" + this.f43190e + ')';
        }

        @Override // okio.Sink
        public void w0(Buffer source, long j10) {
            Intrinsics.checkNotNullParameter(source, "source");
            okio.b.b(source.size(), 0L, j10);
            while (true) {
                long j11 = 0;
                if (j10 > 0) {
                    g0 g0Var = source.f43155d;
                    Intrinsics.checkNotNull(g0Var);
                    while (true) {
                        if (j11 >= 65536) {
                            break;
                        }
                        j11 += g0Var.f48226c - g0Var.f48225b;
                        if (j11 >= j10) {
                            j11 = j10;
                            break;
                        } else {
                            g0Var = g0Var.f48229f;
                            Intrinsics.checkNotNull(g0Var);
                        }
                    }
                    c cVar = c.this;
                    Sink sink = this.f43190e;
                    cVar.v();
                    try {
                        try {
                            sink.w0(source, j11);
                            Unit unit = Unit.f32008a;
                            if (!cVar.w()) {
                                j10 -= j11;
                            } else {
                                throw cVar.p(null);
                            }
                        } catch (IOException e10) {
                            if (!cVar.w()) {
                                throw e10;
                            }
                            throw cVar.p(e10);
                        }
                    } catch (Throwable th2) {
                        cVar.w();
                        throw th2;
                    }
                } else {
                    return;
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d implements Source {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Source f43192e;

        d(Source source) {
            this.f43192e = source;
        }

        @Override // okio.Source
        /* renamed from: a */
        public c timeout() {
            return c.this;
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            c cVar = c.this;
            Source source = this.f43192e;
            cVar.v();
            try {
                source.close();
                Unit unit = Unit.f32008a;
                if (!cVar.w()) {
                    return;
                }
                throw cVar.p(null);
            } catch (IOException e10) {
                if (!cVar.w()) {
                    throw e10;
                }
                throw cVar.p(e10);
            } finally {
                cVar.w();
            }
        }

        @Override // okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            c cVar = c.this;
            Source source = this.f43192e;
            cVar.v();
            try {
                long read = source.read(sink, j10);
                if (!cVar.w()) {
                    return read;
                }
                throw cVar.p(null);
            } catch (IOException e10) {
                if (!cVar.w()) {
                    throw e10;
                }
                throw cVar.p(e10);
            } finally {
                cVar.w();
            }
        }

        public String toString() {
            return "AsyncTimeout.source(" + this.f43192e + ')';
        }
    }

    static {
        ReentrantLock reentrantLock = new ReentrantLock();
        f43181j = reentrantLock;
        Condition newCondition = reentrantLock.newCondition();
        Intrinsics.checkNotNullExpressionValue(newCondition, "newCondition(...)");
        f43182k = newCondition;
        long millis = TimeUnit.SECONDS.toMillis(60L);
        f43183l = millis;
        f43184m = TimeUnit.MILLISECONDS.toNanos(millis);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final long y(long j10) {
        return this.f43188h - j10;
    }

    public final Source A(Source source) {
        Intrinsics.checkNotNullParameter(source, "source");
        return new d(source);
    }

    protected void B() {
    }

    public final IOException p(IOException iOException) {
        return x(iOException);
    }

    public final void v() {
        long h10 = h();
        boolean e10 = e();
        if (h10 == 0 && !e10) {
            return;
        }
        ReentrantLock reentrantLock = f43181j;
        reentrantLock.lock();
        try {
            if (this.f43186f == 0) {
                this.f43186f = 1;
                f43180i.f(this, h10, e10);
                Unit unit = Unit.f32008a;
                return;
            }
            throw new IllegalStateException("Unbalanced enter/exit");
        } finally {
            reentrantLock.unlock();
        }
    }

    public final boolean w() {
        ReentrantLock reentrantLock = f43181j;
        reentrantLock.lock();
        try {
            int i10 = this.f43186f;
            boolean z10 = false;
            this.f43186f = 0;
            if (i10 == 1) {
                f43180i.g(this);
                return false;
            }
            if (i10 == 2) {
                z10 = true;
            }
            return z10;
        } finally {
            reentrantLock.unlock();
        }
    }

    protected IOException x(IOException iOException) {
        InterruptedIOException interruptedIOException = new InterruptedIOException("timeout");
        if (iOException != null) {
            interruptedIOException.initCause(iOException);
        }
        return interruptedIOException;
    }

    public final Sink z(Sink sink) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        return new C0567c(sink);
    }
}
