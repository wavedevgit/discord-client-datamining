package fu;

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
    public static final b f23764h = new b(null);

    /* renamed from: i  reason: collision with root package name */
    public static final e f23765i = new e(new c(cu.e.N(cu.e.f20043i + " TaskRunner", true)));

    /* renamed from: j  reason: collision with root package name */
    private static final Logger f23766j;

    /* renamed from: a  reason: collision with root package name */
    private final a f23767a;

    /* renamed from: b  reason: collision with root package name */
    private int f23768b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f23769c;

    /* renamed from: d  reason: collision with root package name */
    private long f23770d;

    /* renamed from: e  reason: collision with root package name */
    private final List f23771e;

    /* renamed from: f  reason: collision with root package name */
    private final List f23772f;

    /* renamed from: g  reason: collision with root package name */
    private final Runnable f23773g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface a {
        void a(e eVar, long j10);

        void b(e eVar);

        long c();

        void execute(Runnable runnable);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Logger a() {
            return e.f23766j;
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements a {

        /* renamed from: a  reason: collision with root package name */
        private final ThreadPoolExecutor f23774a;

        public c(ThreadFactory threadFactory) {
            Intrinsics.checkNotNullParameter(threadFactory, "threadFactory");
            this.f23774a = new ThreadPoolExecutor(0, Integer.MAX_VALUE, 60L, TimeUnit.SECONDS, new SynchronousQueue(), threadFactory);
        }

        @Override // fu.e.a
        public void a(e taskRunner, long j10) {
            Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
            long j11 = j10 / 1000000;
            long j12 = j10 - (1000000 * j11);
            if (j11 <= 0 && j10 <= 0) {
                return;
            }
            taskRunner.wait(j11, (int) j12);
        }

        @Override // fu.e.a
        public void b(e taskRunner) {
            Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
            taskRunner.notify();
        }

        @Override // fu.e.a
        public long c() {
            return System.nanoTime();
        }

        @Override // fu.e.a
        public void execute(Runnable runnable) {
            Intrinsics.checkNotNullParameter(runnable, "runnable");
            this.f23774a.execute(runnable);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d implements Runnable {
        d() {
        }

        @Override // java.lang.Runnable
        public void run() {
            fu.a d10;
            long j10;
            while (true) {
                e eVar = e.this;
                synchronized (eVar) {
                    d10 = eVar.d();
                }
                if (d10 == null) {
                    return;
                }
                fu.d d11 = d10.d();
                Intrinsics.checkNotNull(d11);
                e eVar2 = e.this;
                boolean isLoggable = e.f23764h.a().isLoggable(Level.FINE);
                if (isLoggable) {
                    j10 = d11.h().g().c();
                    fu.b.c(d10, d11, "starting");
                } else {
                    j10 = -1;
                }
                try {
                    eVar2.j(d10);
                    Unit unit = Unit.f32056a;
                    if (isLoggable) {
                        long c10 = d11.h().g().c() - j10;
                        fu.b.c(d10, d11, "finished run in " + fu.b.b(c10));
                    }
                } catch (Throwable th2) {
                    if (isLoggable) {
                        fu.b.c(d10, d11, "failed a run in " + fu.b.b(d11.h().g().c() - j10));
                    }
                    throw th2;
                }
            }
        }
    }

    static {
        Logger logger = Logger.getLogger(e.class.getName());
        Intrinsics.checkNotNullExpressionValue(logger, "getLogger(TaskRunner::class.java.name)");
        f23766j = logger;
    }

    public e(a backend) {
        Intrinsics.checkNotNullParameter(backend, "backend");
        this.f23767a = backend;
        this.f23768b = 10000;
        this.f23771e = new ArrayList();
        this.f23772f = new ArrayList();
        this.f23773g = new d();
    }

    private final void c(fu.a aVar, long j10) {
        if (cu.e.f20042h && !Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
        }
        fu.d d10 = aVar.d();
        Intrinsics.checkNotNull(d10);
        if (d10.c() == aVar) {
            boolean d11 = d10.d();
            d10.m(false);
            d10.l(null);
            this.f23771e.remove(d10);
            if (j10 != -1 && !d11 && !d10.g()) {
                d10.k(aVar, j10, true);
            }
            if (!d10.e().isEmpty()) {
                this.f23772f.add(d10);
                return;
            }
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    private final void e(fu.a aVar) {
        if (cu.e.f20042h && !Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
        }
        aVar.g(-1L);
        fu.d d10 = aVar.d();
        Intrinsics.checkNotNull(d10);
        d10.e().remove(aVar);
        this.f23772f.remove(d10);
        d10.l(aVar);
        this.f23771e.add(d10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void j(fu.a aVar) {
        if (cu.e.f20042h && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        Thread currentThread = Thread.currentThread();
        String name = currentThread.getName();
        currentThread.setName(aVar.b());
        try {
            long f10 = aVar.f();
            synchronized (this) {
                c(aVar, f10);
                Unit unit = Unit.f32056a;
            }
            currentThread.setName(name);
        } catch (Throwable th2) {
            synchronized (this) {
                c(aVar, -1L);
                Unit unit2 = Unit.f32056a;
                currentThread.setName(name);
                throw th2;
            }
        }
    }

    public final fu.a d() {
        boolean z10;
        if (cu.e.f20042h && !Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
        }
        while (!this.f23772f.isEmpty()) {
            long c10 = this.f23767a.c();
            Iterator it = this.f23772f.iterator();
            long j10 = LongCompanionObject.MAX_VALUE;
            fu.a aVar = null;
            while (true) {
                if (it.hasNext()) {
                    fu.a aVar2 = (fu.a) ((fu.d) it.next()).e().get(0);
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
                if (z10 || (!this.f23769c && !this.f23772f.isEmpty())) {
                    this.f23767a.execute(this.f23773g);
                }
                return aVar;
            } else if (this.f23769c) {
                if (j10 < this.f23770d - c10) {
                    this.f23767a.b(this);
                }
                return null;
            } else {
                this.f23769c = true;
                this.f23770d = c10 + j10;
                try {
                    try {
                        this.f23767a.a(this, j10);
                    } catch (InterruptedException unused) {
                        f();
                    }
                } finally {
                    this.f23769c = false;
                }
            }
        }
        return null;
    }

    public final void f() {
        int size = this.f23771e.size();
        while (true) {
            size--;
            if (-1 >= size) {
                break;
            }
            ((fu.d) this.f23771e.get(size)).b();
        }
        for (int size2 = this.f23772f.size() - 1; -1 < size2; size2--) {
            fu.d dVar = (fu.d) this.f23772f.get(size2);
            dVar.b();
            if (dVar.e().isEmpty()) {
                this.f23772f.remove(size2);
            }
        }
    }

    public final a g() {
        return this.f23767a;
    }

    public final void h(fu.d taskQueue) {
        Intrinsics.checkNotNullParameter(taskQueue, "taskQueue");
        if (cu.e.f20042h && !Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
        }
        if (taskQueue.c() == null) {
            if (!taskQueue.e().isEmpty()) {
                cu.e.c(this.f23772f, taskQueue);
            } else {
                this.f23772f.remove(taskQueue);
            }
        }
        if (this.f23769c) {
            this.f23767a.b(this);
        } else {
            this.f23767a.execute(this.f23773g);
        }
    }

    public final fu.d i() {
        int i10;
        synchronized (this) {
            i10 = this.f23768b;
            this.f23768b = i10 + 1;
        }
        StringBuilder sb2 = new StringBuilder();
        sb2.append('Q');
        sb2.append(i10);
        return new fu.d(this, sb2.toString());
    }
}
