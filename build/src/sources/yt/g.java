package yt;

import java.lang.ref.Reference;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.TimeUnit;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import yt.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g {

    /* renamed from: f  reason: collision with root package name */
    public static final a f55053f = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final int f55054a;

    /* renamed from: b  reason: collision with root package name */
    private final long f55055b;

    /* renamed from: c  reason: collision with root package name */
    private final xt.d f55056c;

    /* renamed from: d  reason: collision with root package name */
    private final b f55057d;

    /* renamed from: e  reason: collision with root package name */
    private final ConcurrentLinkedQueue f55058e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends xt.a {
        b(String str) {
            super(str, false, 2, null);
        }

        @Override // xt.a
        public long f() {
            return g.this.b(System.nanoTime());
        }
    }

    public g(xt.e taskRunner, int i10, long j10, TimeUnit timeUnit) {
        Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
        Intrinsics.checkNotNullParameter(timeUnit, "timeUnit");
        this.f55054a = i10;
        this.f55055b = timeUnit.toNanos(j10);
        this.f55056c = taskRunner.i();
        this.f55057d = new b(ut.e.f50580i + " ConnectionPool");
        this.f55058e = new ConcurrentLinkedQueue();
        if (j10 > 0) {
            return;
        }
        throw new IllegalArgumentException(("keepAliveDuration <= 0: " + j10).toString());
    }

    private final int d(f fVar, long j10) {
        if (ut.e.f50579h && !Thread.holdsLock(fVar)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + fVar);
        }
        List n10 = fVar.n();
        int i10 = 0;
        while (i10 < n10.size()) {
            Reference reference = (Reference) n10.get(i10);
            if (reference.get() != null) {
                i10++;
            } else {
                Intrinsics.checkNotNull(reference, "null cannot be cast to non-null type okhttp3.internal.connection.RealCall.CallReference");
                du.h.f22444a.g().m("A connection to " + fVar.A().a().l() + " was leaked. Did you forget to close a response body?", ((e.b) reference).a());
                n10.remove(i10);
                fVar.D(true);
                if (n10.isEmpty()) {
                    fVar.C(j10 - this.f55055b);
                    return 0;
                }
            }
        }
        return n10.size();
    }

    public final boolean a(okhttp3.a address, e call, List list, boolean z10) {
        Intrinsics.checkNotNullParameter(address, "address");
        Intrinsics.checkNotNullParameter(call, "call");
        Iterator it = this.f55058e.iterator();
        while (it.hasNext()) {
            f connection = (f) it.next();
            Intrinsics.checkNotNullExpressionValue(connection, "connection");
            synchronized (connection) {
                if (z10) {
                    try {
                        if (connection.v()) {
                        }
                        Unit unit = Unit.f33298a;
                    } catch (Throwable th2) {
                        throw th2;
                    }
                }
                if (connection.t(address, list)) {
                    call.c(connection);
                    return true;
                }
                Unit unit2 = Unit.f33298a;
            }
        }
        return false;
    }

    public final long b(long j10) {
        Iterator it = this.f55058e.iterator();
        int i10 = 0;
        long j11 = Long.MIN_VALUE;
        f fVar = null;
        int i11 = 0;
        while (it.hasNext()) {
            f connection = (f) it.next();
            Intrinsics.checkNotNullExpressionValue(connection, "connection");
            synchronized (connection) {
                if (d(connection, j10) > 0) {
                    i11++;
                } else {
                    i10++;
                    long o10 = j10 - connection.o();
                    if (o10 > j11) {
                        fVar = connection;
                        j11 = o10;
                    }
                    Unit unit = Unit.f33298a;
                }
            }
        }
        long j12 = this.f55055b;
        if (j11 < j12 && i10 <= this.f55054a) {
            if (i10 > 0) {
                return j12 - j11;
            }
            if (i11 > 0) {
                return j12;
            }
            return -1L;
        }
        Intrinsics.checkNotNull(fVar);
        synchronized (fVar) {
            if (!fVar.n().isEmpty()) {
                return 0L;
            }
            if (fVar.o() + j11 != j10) {
                return 0L;
            }
            fVar.D(true);
            this.f55058e.remove(fVar);
            ut.e.n(fVar.E());
            if (this.f55058e.isEmpty()) {
                this.f55056c.a();
            }
            return 0L;
        }
    }

    public final boolean c(f connection) {
        Intrinsics.checkNotNullParameter(connection, "connection");
        if (ut.e.f50579h && !Thread.holdsLock(connection)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + connection);
        } else if (!connection.p() && this.f55054a != 0) {
            xt.d.j(this.f55056c, this.f55057d, 0L, 2, null);
            return false;
        } else {
            connection.D(true);
            this.f55058e.remove(connection);
            if (this.f55058e.isEmpty()) {
                this.f55056c.a();
            }
            return true;
        }
    }

    public final void e(f connection) {
        Intrinsics.checkNotNullParameter(connection, "connection");
        if (ut.e.f50579h && !Thread.holdsLock(connection)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + connection);
        }
        this.f55058e.add(connection);
        xt.d.j(this.f55056c, this.f55057d, 0L, 2, null);
    }
}
