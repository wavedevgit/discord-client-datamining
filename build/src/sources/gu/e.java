package gu;

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
    public static final b f24819h = new b(null);

    /* renamed from: i  reason: collision with root package name */
    public static final e f24820i = new e(new c(du.e.N(du.e.f20987i + " TaskRunner", true)));

    /* renamed from: j  reason: collision with root package name */
    private static final Logger f24821j;

    /* renamed from: a  reason: collision with root package name */
    private final a f24822a;

    /* renamed from: b  reason: collision with root package name */
    private int f24823b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f24824c;

    /* renamed from: d  reason: collision with root package name */
    private long f24825d;

    /* renamed from: e  reason: collision with root package name */
    private final List f24826e;

    /* renamed from: f  reason: collision with root package name */
    private final List f24827f;

    /* renamed from: g  reason: collision with root package name */
    private final Runnable f24828g;

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
            return e.f24821j;
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements a {

        /* renamed from: a  reason: collision with root package name */
        private final ThreadPoolExecutor f24829a;

        public c(ThreadFactory threadFactory) {
            Intrinsics.checkNotNullParameter(threadFactory, "threadFactory");
            this.f24829a = new ThreadPoolExecutor(0, Integer.MAX_VALUE, 60L, TimeUnit.SECONDS, new SynchronousQueue(), threadFactory);
        }

        @Override // gu.e.a
        public void a(e taskRunner, long j10) {
            Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
            long j11 = j10 / 1000000;
            long j12 = j10 - (1000000 * j11);
            if (j11 <= 0 && j10 <= 0) {
                return;
            }
            taskRunner.wait(j11, (int) j12);
        }

        @Override // gu.e.a
        public void b(e taskRunner) {
            Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
            taskRunner.notify();
        }

        @Override // gu.e.a
        public long c() {
            return System.nanoTime();
        }

        @Override // gu.e.a
        public void execute(Runnable runnable) {
            Intrinsics.checkNotNullParameter(runnable, "runnable");
            this.f24829a.execute(runnable);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d implements Runnable {
        d() {
        }

        @Override // java.lang.Runnable
        public void run() {
            gu.a d10;
            long j10;
            while (true) {
                e eVar = e.this;
                synchronized (eVar) {
                    d10 = eVar.d();
                }
                if (d10 == null) {
                    return;
                }
                gu.d d11 = d10.d();
                Intrinsics.checkNotNull(d11);
                e eVar2 = e.this;
                boolean isLoggable = e.f24819h.a().isLoggable(Level.FINE);
                if (isLoggable) {
                    j10 = d11.h().g().c();
                    gu.b.c(d10, d11, "starting");
                } else {
                    j10 = -1;
                }
                try {
                    eVar2.j(d10);
                    Unit unit = Unit.f31765a;
                    if (isLoggable) {
                        long c10 = d11.h().g().c() - j10;
                        gu.b.c(d10, d11, "finished run in " + gu.b.b(c10));
                    }
                } catch (Throwable th2) {
                    if (isLoggable) {
                        gu.b.c(d10, d11, "failed a run in " + gu.b.b(d11.h().g().c() - j10));
                    }
                    throw th2;
                }
            }
        }
    }

    static {
        Logger logger = Logger.getLogger(e.class.getName());
        Intrinsics.checkNotNullExpressionValue(logger, "getLogger(TaskRunner::class.java.name)");
        f24821j = logger;
    }

    public e(a backend) {
        Intrinsics.checkNotNullParameter(backend, "backend");
        this.f24822a = backend;
        this.f24823b = 10000;
        this.f24826e = new ArrayList();
        this.f24827f = new ArrayList();
        this.f24828g = new d();
    }

    private final void c(gu.a aVar, long j10) {
        if (du.e.f20986h && !Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
        }
        gu.d d10 = aVar.d();
        Intrinsics.checkNotNull(d10);
        if (d10.c() == aVar) {
            boolean d11 = d10.d();
            d10.m(false);
            d10.l(null);
            this.f24826e.remove(d10);
            if (j10 != -1 && !d11 && !d10.g()) {
                d10.k(aVar, j10, true);
            }
            if (!d10.e().isEmpty()) {
                this.f24827f.add(d10);
                return;
            }
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    private final void e(gu.a aVar) {
        if (du.e.f20986h && !Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
        }
        aVar.g(-1L);
        gu.d d10 = aVar.d();
        Intrinsics.checkNotNull(d10);
        d10.e().remove(aVar);
        this.f24827f.remove(d10);
        d10.l(aVar);
        this.f24826e.add(d10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void j(gu.a aVar) {
        if (du.e.f20986h && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        Thread currentThread = Thread.currentThread();
        String name = currentThread.getName();
        currentThread.setName(aVar.b());
        try {
            long f10 = aVar.f();
            synchronized (this) {
                c(aVar, f10);
                Unit unit = Unit.f31765a;
            }
            currentThread.setName(name);
        } catch (Throwable th2) {
            synchronized (this) {
                c(aVar, -1L);
                Unit unit2 = Unit.f31765a;
                currentThread.setName(name);
                throw th2;
            }
        }
    }

    public final gu.a d() {
        boolean z10;
        if (du.e.f20986h && !Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
        }
        while (!this.f24827f.isEmpty()) {
            long c10 = this.f24822a.c();
            Iterator it = this.f24827f.iterator();
            long j10 = LongCompanionObject.MAX_VALUE;
            gu.a aVar = null;
            while (true) {
                if (it.hasNext()) {
                    gu.a aVar2 = (gu.a) ((gu.d) it.next()).e().get(0);
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
                if (z10 || (!this.f24824c && !this.f24827f.isEmpty())) {
                    this.f24822a.execute(this.f24828g);
                }
                return aVar;
            } else if (this.f24824c) {
                if (j10 < this.f24825d - c10) {
                    this.f24822a.b(this);
                }
                return null;
            } else {
                this.f24824c = true;
                this.f24825d = c10 + j10;
                try {
                    try {
                        this.f24822a.a(this, j10);
                    } catch (InterruptedException unused) {
                        f();
                    }
                } finally {
                    this.f24824c = false;
                }
            }
        }
        return null;
    }

    public final void f() {
        int size = this.f24826e.size();
        while (true) {
            size--;
            if (-1 >= size) {
                break;
            }
            ((gu.d) this.f24826e.get(size)).b();
        }
        for (int size2 = this.f24827f.size() - 1; -1 < size2; size2--) {
            gu.d dVar = (gu.d) this.f24827f.get(size2);
            dVar.b();
            if (dVar.e().isEmpty()) {
                this.f24827f.remove(size2);
            }
        }
    }

    public final a g() {
        return this.f24822a;
    }

    public final void h(gu.d taskQueue) {
        Intrinsics.checkNotNullParameter(taskQueue, "taskQueue");
        if (du.e.f20986h && !Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
        }
        if (taskQueue.c() == null) {
            if (!taskQueue.e().isEmpty()) {
                du.e.c(this.f24827f, taskQueue);
            } else {
                this.f24827f.remove(taskQueue);
            }
        }
        if (this.f24824c) {
            this.f24822a.b(this);
        } else {
            this.f24822a.execute(this.f24828g);
        }
    }

    public final gu.d i() {
        int i10;
        synchronized (this) {
            i10 = this.f24823b;
            this.f24823b = i10 + 1;
        }
        StringBuilder sb2 = new StringBuilder();
        sb2.append('Q');
        sb2.append(i10);
        return new gu.d(this, sb2.toString());
    }
}
