package xt;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.SynchronousQueue;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.logging.Level;
import java.util.logging.Logger;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e {

    /* renamed from: h  reason: collision with root package name */
    public static final b f53824h = new b(null);

    /* renamed from: i  reason: collision with root package name */
    public static final e f53825i = new e(new c(ut.e.N(ut.e.f50564i + " TaskRunner", true)));

    /* renamed from: j  reason: collision with root package name */
    private static final Logger f53826j;

    /* renamed from: a  reason: collision with root package name */
    private final a f53827a;

    /* renamed from: b  reason: collision with root package name */
    private int f53828b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f53829c;

    /* renamed from: d  reason: collision with root package name */
    private long f53830d;

    /* renamed from: e  reason: collision with root package name */
    private final List f53831e;

    /* renamed from: f  reason: collision with root package name */
    private final List f53832f;

    /* renamed from: g  reason: collision with root package name */
    private final Runnable f53833g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface a {
        void a(e eVar);

        void b(e eVar, long j10);

        long c();

        void execute(Runnable runnable);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Logger a() {
            return e.f53826j;
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements a {

        /* renamed from: a  reason: collision with root package name */
        private final ThreadPoolExecutor f53834a;

        public c(ThreadFactory threadFactory) {
            Intrinsics.checkNotNullParameter(threadFactory, "threadFactory");
            this.f53834a = new ThreadPoolExecutor(0, Integer.MAX_VALUE, 60L, TimeUnit.SECONDS, new SynchronousQueue(), threadFactory);
        }

        @Override // xt.e.a
        public void a(e taskRunner) {
            Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
            taskRunner.notify();
        }

        @Override // xt.e.a
        public void b(e taskRunner, long j10) {
            Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
            long j11 = j10 / 1000000;
            long j12 = j10 - (1000000 * j11);
            if (j11 <= 0 && j10 <= 0) {
                return;
            }
            taskRunner.wait(j11, (int) j12);
        }

        @Override // xt.e.a
        public long c() {
            return System.nanoTime();
        }

        @Override // xt.e.a
        public void execute(Runnable runnable) {
            Intrinsics.checkNotNullParameter(runnable, "runnable");
            this.f53834a.execute(runnable);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d implements Runnable {
        d() {
        }

        @Override // java.lang.Runnable
        public void run() {
            xt.a d10;
            long j10;
            while (true) {
                e eVar = e.this;
                synchronized (eVar) {
                    d10 = eVar.d();
                }
                if (d10 == null) {
                    return;
                }
                xt.d d11 = d10.d();
                Intrinsics.checkNotNull(d11);
                e eVar2 = e.this;
                boolean isLoggable = e.f53824h.a().isLoggable(Level.FINE);
                if (isLoggable) {
                    j10 = d11.h().g().c();
                    xt.b.c(d10, d11, "starting");
                } else {
                    j10 = -1;
                }
                try {
                    eVar2.j(d10);
                    Unit unit = Unit.f33282a;
                    if (isLoggable) {
                        long c10 = d11.h().g().c() - j10;
                        xt.b.c(d10, d11, "finished run in " + xt.b.b(c10));
                    }
                } catch (Throwable th2) {
                    if (isLoggable) {
                        xt.b.c(d10, d11, "failed a run in " + xt.b.b(d11.h().g().c() - j10));
                    }
                    throw th2;
                }
            }
        }
    }

    static {
        Logger logger = Logger.getLogger(e.class.getName());
        Intrinsics.checkNotNullExpressionValue(logger, "getLogger(TaskRunner::class.java.name)");
        f53826j = logger;
    }

    public e(a backend) {
        Intrinsics.checkNotNullParameter(backend, "backend");
        this.f53827a = backend;
        this.f53828b = 10000;
        this.f53831e = new ArrayList();
        this.f53832f = new ArrayList();
        this.f53833g = new d();
    }

    private final void c(xt.a aVar, long j10) {
        if (ut.e.f50563h && !Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
        }
        xt.d d10 = aVar.d();
        Intrinsics.checkNotNull(d10);
        if (d10.c() == aVar) {
            boolean d11 = d10.d();
            d10.m(false);
            d10.l(null);
            this.f53831e.remove(d10);
            if (j10 != -1 && !d11 && !d10.g()) {
                d10.k(aVar, j10, true);
            }
            if (!d10.e().isEmpty()) {
                this.f53832f.add(d10);
                return;
            }
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    private final void e(xt.a aVar) {
        if (ut.e.f50563h && !Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
        }
        aVar.g(-1L);
        xt.d d10 = aVar.d();
        Intrinsics.checkNotNull(d10);
        d10.e().remove(aVar);
        this.f53832f.remove(d10);
        d10.l(aVar);
        this.f53831e.add(d10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void j(xt.a aVar) {
        if (ut.e.f50563h && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        Thread currentThread = Thread.currentThread();
        String name = currentThread.getName();
        currentThread.setName(aVar.b());
        try {
            long f10 = aVar.f();
            synchronized (this) {
                c(aVar, f10);
                Unit unit = Unit.f33282a;
            }
            currentThread.setName(name);
        } catch (Throwable th2) {
            synchronized (this) {
                c(aVar, -1L);
                Unit unit2 = Unit.f33282a;
                currentThread.setName(name);
                throw th2;
            }
        }
    }

    public final xt.a d() {
        boolean z10;
        if (ut.e.f50563h && !Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
        }
        while (!this.f53832f.isEmpty()) {
            long c10 = this.f53827a.c();
            Iterator it = this.f53832f.iterator();
            long j10 = LongCompanionObject.MAX_VALUE;
            xt.a aVar = null;
            while (true) {
                if (it.hasNext()) {
                    xt.a aVar2 = (xt.a) ((xt.d) it.next()).e().get(0);
                    long max = Math.max(0L, aVar2.c() - c10);
                    if (max > 0) {
                        j10 = Math.min(max, j10);
                    } else if (aVar != null) {
                        z10 = true;
                        break;
                    } else {
                        aVar = aVar2;
                    }
                } else {
                    z10 = false;
                    break;
                }
            }
            if (aVar != null) {
                e(aVar);
                if (z10 || (!this.f53829c && !this.f53832f.isEmpty())) {
                    this.f53827a.execute(this.f53833g);
                }
                return aVar;
            } else if (this.f53829c) {
                if (j10 < this.f53830d - c10) {
                    this.f53827a.a(this);
                }
                return null;
            } else {
                this.f53829c = true;
                this.f53830d = c10 + j10;
                try {
                    try {
                        this.f53827a.b(this, j10);
                    } catch (InterruptedException unused) {
                        f();
                    }
                } finally {
                    this.f53829c = false;
                }
            }
        }
        return null;
    }

    public final void f() {
        int size = this.f53831e.size();
        while (true) {
            size--;
            if (-1 >= size) {
                break;
            }
            ((xt.d) this.f53831e.get(size)).b();
        }
        for (int size2 = this.f53832f.size() - 1; -1 < size2; size2--) {
            xt.d dVar = (xt.d) this.f53832f.get(size2);
            dVar.b();
            if (dVar.e().isEmpty()) {
                this.f53832f.remove(size2);
            }
        }
    }

    public final a g() {
        return this.f53827a;
    }

    public final void h(xt.d taskQueue) {
        Intrinsics.checkNotNullParameter(taskQueue, "taskQueue");
        if (ut.e.f50563h && !Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
        }
        if (taskQueue.c() == null) {
            if (!taskQueue.e().isEmpty()) {
                ut.e.c(this.f53832f, taskQueue);
            } else {
                this.f53832f.remove(taskQueue);
            }
        }
        if (this.f53829c) {
            this.f53827a.a(this);
        } else {
            this.f53827a.execute(this.f53833g);
        }
    }

    public final xt.d i() {
        int i10;
        synchronized (this) {
            i10 = this.f53828b;
            this.f53828b = i10 + 1;
        }
        StringBuilder sb2 = new StringBuilder();
        sb2.append('Q');
        sb2.append(i10);
        return new xt.d(this, sb2.toString());
    }
}
