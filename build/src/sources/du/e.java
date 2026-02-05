package du;

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
    public static final b f21257h = new b(null);

    /* renamed from: i  reason: collision with root package name */
    public static final e f21258i = new e(new c(au.e.N(au.e.f6001i + " TaskRunner", true)));

    /* renamed from: j  reason: collision with root package name */
    private static final Logger f21259j;

    /* renamed from: a  reason: collision with root package name */
    private final a f21260a;

    /* renamed from: b  reason: collision with root package name */
    private int f21261b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f21262c;

    /* renamed from: d  reason: collision with root package name */
    private long f21263d;

    /* renamed from: e  reason: collision with root package name */
    private final List f21264e;

    /* renamed from: f  reason: collision with root package name */
    private final List f21265f;

    /* renamed from: g  reason: collision with root package name */
    private final Runnable f21266g;

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
            return e.f21259j;
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements a {

        /* renamed from: a  reason: collision with root package name */
        private final ThreadPoolExecutor f21267a;

        public c(ThreadFactory threadFactory) {
            Intrinsics.checkNotNullParameter(threadFactory, "threadFactory");
            this.f21267a = new ThreadPoolExecutor(0, Integer.MAX_VALUE, 60L, TimeUnit.SECONDS, new SynchronousQueue(), threadFactory);
        }

        @Override // du.e.a
        public void a(e taskRunner) {
            Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
            taskRunner.notify();
        }

        @Override // du.e.a
        public void b(e taskRunner, long j10) {
            Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
            long j11 = j10 / 1000000;
            long j12 = j10 - (1000000 * j11);
            if (j11 <= 0 && j10 <= 0) {
                return;
            }
            taskRunner.wait(j11, (int) j12);
        }

        @Override // du.e.a
        public long c() {
            return System.nanoTime();
        }

        @Override // du.e.a
        public void execute(Runnable runnable) {
            Intrinsics.checkNotNullParameter(runnable, "runnable");
            this.f21267a.execute(runnable);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d implements Runnable {
        d() {
        }

        @Override // java.lang.Runnable
        public void run() {
            du.a d10;
            long j10;
            while (true) {
                e eVar = e.this;
                synchronized (eVar) {
                    d10 = eVar.d();
                }
                if (d10 == null) {
                    return;
                }
                du.d d11 = d10.d();
                Intrinsics.checkNotNull(d11);
                e eVar2 = e.this;
                boolean isLoggable = e.f21257h.a().isLoggable(Level.FINE);
                if (isLoggable) {
                    j10 = d11.h().g().c();
                    du.b.c(d10, d11, "starting");
                } else {
                    j10 = -1;
                }
                try {
                    eVar2.j(d10);
                    Unit unit = Unit.f31988a;
                    if (isLoggable) {
                        long c10 = d11.h().g().c() - j10;
                        du.b.c(d10, d11, "finished run in " + du.b.b(c10));
                    }
                } catch (Throwable th2) {
                    if (isLoggable) {
                        du.b.c(d10, d11, "failed a run in " + du.b.b(d11.h().g().c() - j10));
                    }
                    throw th2;
                }
            }
        }
    }

    static {
        Logger logger = Logger.getLogger(e.class.getName());
        Intrinsics.checkNotNullExpressionValue(logger, "getLogger(TaskRunner::class.java.name)");
        f21259j = logger;
    }

    public e(a backend) {
        Intrinsics.checkNotNullParameter(backend, "backend");
        this.f21260a = backend;
        this.f21261b = 10000;
        this.f21264e = new ArrayList();
        this.f21265f = new ArrayList();
        this.f21266g = new d();
    }

    private final void c(du.a aVar, long j10) {
        if (au.e.f6000h && !Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
        }
        du.d d10 = aVar.d();
        Intrinsics.checkNotNull(d10);
        if (d10.c() == aVar) {
            boolean d11 = d10.d();
            d10.m(false);
            d10.l(null);
            this.f21264e.remove(d10);
            if (j10 != -1 && !d11 && !d10.g()) {
                d10.k(aVar, j10, true);
            }
            if (!d10.e().isEmpty()) {
                this.f21265f.add(d10);
                return;
            }
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    private final void e(du.a aVar) {
        if (au.e.f6000h && !Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
        }
        aVar.g(-1L);
        du.d d10 = aVar.d();
        Intrinsics.checkNotNull(d10);
        d10.e().remove(aVar);
        this.f21265f.remove(d10);
        d10.l(aVar);
        this.f21264e.add(d10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void j(du.a aVar) {
        if (au.e.f6000h && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        Thread currentThread = Thread.currentThread();
        String name = currentThread.getName();
        currentThread.setName(aVar.b());
        try {
            long f10 = aVar.f();
            synchronized (this) {
                c(aVar, f10);
                Unit unit = Unit.f31988a;
            }
            currentThread.setName(name);
        } catch (Throwable th2) {
            synchronized (this) {
                c(aVar, -1L);
                Unit unit2 = Unit.f31988a;
                currentThread.setName(name);
                throw th2;
            }
        }
    }

    public final du.a d() {
        boolean z10;
        if (au.e.f6000h && !Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
        }
        while (!this.f21265f.isEmpty()) {
            long c10 = this.f21260a.c();
            Iterator it = this.f21265f.iterator();
            long j10 = LongCompanionObject.MAX_VALUE;
            du.a aVar = null;
            while (true) {
                if (it.hasNext()) {
                    du.a aVar2 = (du.a) ((du.d) it.next()).e().get(0);
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
                if (z10 || (!this.f21262c && !this.f21265f.isEmpty())) {
                    this.f21260a.execute(this.f21266g);
                }
                return aVar;
            } else if (this.f21262c) {
                if (j10 < this.f21263d - c10) {
                    this.f21260a.a(this);
                }
                return null;
            } else {
                this.f21262c = true;
                this.f21263d = c10 + j10;
                try {
                    try {
                        this.f21260a.b(this, j10);
                    } catch (InterruptedException unused) {
                        f();
                    }
                } finally {
                    this.f21262c = false;
                }
            }
        }
        return null;
    }

    public final void f() {
        int size = this.f21264e.size();
        while (true) {
            size--;
            if (-1 >= size) {
                break;
            }
            ((du.d) this.f21264e.get(size)).b();
        }
        for (int size2 = this.f21265f.size() - 1; -1 < size2; size2--) {
            du.d dVar = (du.d) this.f21265f.get(size2);
            dVar.b();
            if (dVar.e().isEmpty()) {
                this.f21265f.remove(size2);
            }
        }
    }

    public final a g() {
        return this.f21260a;
    }

    public final void h(du.d taskQueue) {
        Intrinsics.checkNotNullParameter(taskQueue, "taskQueue");
        if (au.e.f6000h && !Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
        }
        if (taskQueue.c() == null) {
            if (!taskQueue.e().isEmpty()) {
                au.e.c(this.f21265f, taskQueue);
            } else {
                this.f21265f.remove(taskQueue);
            }
        }
        if (this.f21262c) {
            this.f21260a.a(this);
        } else {
            this.f21260a.execute(this.f21266g);
        }
    }

    public final du.d i() {
        int i10;
        synchronized (this) {
            i10 = this.f21261b;
            this.f21261b = i10 + 1;
        }
        StringBuilder sb2 = new StringBuilder();
        sb2.append('Q');
        sb2.append(i10);
        return new du.d(this, sb2.toString());
    }
}
