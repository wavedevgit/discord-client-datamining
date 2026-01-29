package androidx.work.impl.utils.futures;

import com.google.common.util.concurrent.ListenableFuture;
import java.util.Locale;
import java.util.concurrent.CancellationException;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.Future;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
import java.util.concurrent.locks.LockSupport;
import java.util.logging.Level;
import java.util.logging.Logger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a implements ListenableFuture {

    /* renamed from: o  reason: collision with root package name */
    static final boolean f5728o = Boolean.parseBoolean(System.getProperty("guava.concurrent.generate_cancellation_cause", "false"));

    /* renamed from: p  reason: collision with root package name */
    private static final Logger f5729p = Logger.getLogger(a.class.getName());

    /* renamed from: q  reason: collision with root package name */
    static final b f5730q;

    /* renamed from: r  reason: collision with root package name */
    private static final Object f5731r;

    /* renamed from: d  reason: collision with root package name */
    volatile Object f5732d;

    /* renamed from: e  reason: collision with root package name */
    volatile e f5733e;

    /* renamed from: i  reason: collision with root package name */
    volatile i f5734i;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class b {
        private b() {
        }

        abstract boolean a(a aVar, e eVar, e eVar2);

        abstract boolean b(a aVar, Object obj, Object obj2);

        abstract boolean c(a aVar, i iVar, i iVar2);

        abstract void d(i iVar, i iVar2);

        abstract void e(i iVar, Thread thread);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c {

        /* renamed from: c  reason: collision with root package name */
        static final c f5735c;

        /* renamed from: d  reason: collision with root package name */
        static final c f5736d;

        /* renamed from: a  reason: collision with root package name */
        final boolean f5737a;

        /* renamed from: b  reason: collision with root package name */
        final Throwable f5738b;

        static {
            if (a.f5728o) {
                f5736d = null;
                f5735c = null;
                return;
            }
            f5736d = new c(false, null);
            f5735c = new c(true, null);
        }

        c(boolean z10, Throwable th2) {
            this.f5737a = z10;
            this.f5738b = th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d {

        /* renamed from: b  reason: collision with root package name */
        static final d f5739b = new d(new C0080a("Failure occurred while trying to finish a future."));

        /* renamed from: a  reason: collision with root package name */
        final Throwable f5740a;

        /* renamed from: androidx.work.impl.utils.futures.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class C0080a extends Throwable {
            C0080a(String str) {
                super(str);
            }

            @Override // java.lang.Throwable
            public synchronized Throwable fillInStackTrace() {
                return this;
            }
        }

        d(Throwable th2) {
            this.f5740a = (Throwable) a.e(th2);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e {

        /* renamed from: d  reason: collision with root package name */
        static final e f5741d = new e(null, null);

        /* renamed from: a  reason: collision with root package name */
        final Runnable f5742a;

        /* renamed from: b  reason: collision with root package name */
        final Executor f5743b;

        /* renamed from: c  reason: collision with root package name */
        e f5744c;

        e(Runnable runnable, Executor executor) {
            this.f5742a = runnable;
            this.f5743b = executor;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class f extends b {

        /* renamed from: a  reason: collision with root package name */
        final AtomicReferenceFieldUpdater f5745a;

        /* renamed from: b  reason: collision with root package name */
        final AtomicReferenceFieldUpdater f5746b;

        /* renamed from: c  reason: collision with root package name */
        final AtomicReferenceFieldUpdater f5747c;

        /* renamed from: d  reason: collision with root package name */
        final AtomicReferenceFieldUpdater f5748d;

        /* renamed from: e  reason: collision with root package name */
        final AtomicReferenceFieldUpdater f5749e;

        f(AtomicReferenceFieldUpdater atomicReferenceFieldUpdater, AtomicReferenceFieldUpdater atomicReferenceFieldUpdater2, AtomicReferenceFieldUpdater atomicReferenceFieldUpdater3, AtomicReferenceFieldUpdater atomicReferenceFieldUpdater4, AtomicReferenceFieldUpdater atomicReferenceFieldUpdater5) {
            super();
            this.f5745a = atomicReferenceFieldUpdater;
            this.f5746b = atomicReferenceFieldUpdater2;
            this.f5747c = atomicReferenceFieldUpdater3;
            this.f5748d = atomicReferenceFieldUpdater4;
            this.f5749e = atomicReferenceFieldUpdater5;
        }

        @Override // androidx.work.impl.utils.futures.a.b
        boolean a(a aVar, e eVar, e eVar2) {
            return androidx.concurrent.futures.b.a(this.f5748d, aVar, eVar, eVar2);
        }

        @Override // androidx.work.impl.utils.futures.a.b
        boolean b(a aVar, Object obj, Object obj2) {
            return androidx.concurrent.futures.b.a(this.f5749e, aVar, obj, obj2);
        }

        @Override // androidx.work.impl.utils.futures.a.b
        boolean c(a aVar, i iVar, i iVar2) {
            return androidx.concurrent.futures.b.a(this.f5747c, aVar, iVar, iVar2);
        }

        @Override // androidx.work.impl.utils.futures.a.b
        void d(i iVar, i iVar2) {
            this.f5746b.lazySet(iVar, iVar2);
        }

        @Override // androidx.work.impl.utils.futures.a.b
        void e(i iVar, Thread thread) {
            this.f5745a.lazySet(iVar, thread);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class g implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final a f5750d;

        /* renamed from: e  reason: collision with root package name */
        final ListenableFuture f5751e;

        g(a aVar, ListenableFuture listenableFuture) {
            this.f5750d = aVar;
            this.f5751e = listenableFuture;
        }

        @Override // java.lang.Runnable
        public void run() {
            if (this.f5750d.f5732d == this) {
                if (a.f5730q.b(this.f5750d, this, a.j(this.f5751e))) {
                    a.g(this.f5750d);
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class h extends b {
        h() {
            super();
        }

        @Override // androidx.work.impl.utils.futures.a.b
        boolean a(a aVar, e eVar, e eVar2) {
            synchronized (aVar) {
                try {
                    if (aVar.f5733e == eVar) {
                        aVar.f5733e = eVar2;
                        return true;
                    }
                    return false;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // androidx.work.impl.utils.futures.a.b
        boolean b(a aVar, Object obj, Object obj2) {
            synchronized (aVar) {
                try {
                    if (aVar.f5732d == obj) {
                        aVar.f5732d = obj2;
                        return true;
                    }
                    return false;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // androidx.work.impl.utils.futures.a.b
        boolean c(a aVar, i iVar, i iVar2) {
            synchronized (aVar) {
                try {
                    if (aVar.f5734i == iVar) {
                        aVar.f5734i = iVar2;
                        return true;
                    }
                    return false;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // androidx.work.impl.utils.futures.a.b
        void d(i iVar, i iVar2) {
            iVar.f5754b = iVar2;
        }

        @Override // androidx.work.impl.utils.futures.a.b
        void e(i iVar, Thread thread) {
            iVar.f5753a = thread;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class i {

        /* renamed from: c  reason: collision with root package name */
        static final i f5752c = new i(false);

        /* renamed from: a  reason: collision with root package name */
        volatile Thread f5753a;

        /* renamed from: b  reason: collision with root package name */
        volatile i f5754b;

        i(boolean z10) {
        }

        void a(i iVar) {
            a.f5730q.d(this, iVar);
        }

        void b() {
            Thread thread = this.f5753a;
            if (thread != null) {
                this.f5753a = null;
                LockSupport.unpark(thread);
            }
        }

        i() {
            a.f5730q.e(this, Thread.currentThread());
        }
    }

    static {
        b hVar;
        try {
            hVar = new f(AtomicReferenceFieldUpdater.newUpdater(i.class, Thread.class, "a"), AtomicReferenceFieldUpdater.newUpdater(i.class, i.class, "b"), AtomicReferenceFieldUpdater.newUpdater(a.class, i.class, "i"), AtomicReferenceFieldUpdater.newUpdater(a.class, e.class, "e"), AtomicReferenceFieldUpdater.newUpdater(a.class, Object.class, "d"));
            th = null;
        } catch (Throwable th2) {
            th = th2;
            hVar = new h();
        }
        f5730q = hVar;
        if (th != null) {
            f5729p.log(Level.SEVERE, "SafeAtomicHelper is broken!", th);
        }
        f5731r = new Object();
    }

    private void b(StringBuilder sb2) {
        try {
            Object k10 = k(this);
            sb2.append("SUCCESS, result=[");
            sb2.append(s(k10));
            sb2.append("]");
        } catch (CancellationException unused) {
            sb2.append("CANCELLED");
        } catch (RuntimeException e10) {
            sb2.append("UNKNOWN, cause=[");
            sb2.append(e10.getClass());
            sb2.append(" thrown from get()]");
        } catch (ExecutionException e11) {
            sb2.append("FAILURE, cause=[");
            sb2.append(e11.getCause());
            sb2.append("]");
        }
    }

    private static CancellationException d(String str, Throwable th2) {
        CancellationException cancellationException = new CancellationException(str);
        cancellationException.initCause(th2);
        return cancellationException;
    }

    static Object e(Object obj) {
        obj.getClass();
        return obj;
    }

    private e f(e eVar) {
        e eVar2;
        do {
            eVar2 = this.f5733e;
        } while (!f5730q.a(this, eVar2, e.f5741d));
        e eVar3 = eVar;
        e eVar4 = eVar2;
        while (eVar4 != null) {
            e eVar5 = eVar4.f5744c;
            eVar4.f5744c = eVar3;
            eVar3 = eVar4;
            eVar4 = eVar5;
        }
        return eVar3;
    }

    static void g(a aVar) {
        e eVar = null;
        while (true) {
            aVar.n();
            aVar.c();
            e f10 = aVar.f(eVar);
            while (f10 != null) {
                eVar = f10.f5744c;
                Runnable runnable = f10.f5742a;
                if (runnable instanceof g) {
                    g gVar = (g) runnable;
                    aVar = gVar.f5750d;
                    if (aVar.f5732d == gVar) {
                        if (f5730q.b(aVar, gVar, j(gVar.f5751e))) {
                            break;
                        }
                    } else {
                        continue;
                    }
                } else {
                    h(runnable, f10.f5743b);
                }
                f10 = eVar;
            }
            return;
        }
    }

    private static void h(Runnable runnable, Executor executor) {
        try {
            executor.execute(runnable);
        } catch (RuntimeException e10) {
            Logger logger = f5729p;
            Level level = Level.SEVERE;
            logger.log(level, "RuntimeException while executing runnable " + runnable + " with executor " + executor, (Throwable) e10);
        }
    }

    private Object i(Object obj) {
        if (!(obj instanceof c)) {
            if (!(obj instanceof d)) {
                if (obj == f5731r) {
                    return null;
                }
                return obj;
            }
            throw new ExecutionException(((d) obj).f5740a);
        }
        throw d("Task was cancelled.", ((c) obj).f5738b);
    }

    static Object j(ListenableFuture listenableFuture) {
        if (listenableFuture instanceof a) {
            Object obj = ((a) listenableFuture).f5732d;
            if (obj instanceof c) {
                c cVar = (c) obj;
                if (cVar.f5737a) {
                    if (cVar.f5738b != null) {
                        return new c(false, cVar.f5738b);
                    }
                    return c.f5736d;
                }
                return obj;
            }
            return obj;
        }
        boolean isCancelled = listenableFuture.isCancelled();
        if ((!f5728o) & isCancelled) {
            return c.f5736d;
        }
        try {
            Object k10 = k(listenableFuture);
            if (k10 == null) {
                return f5731r;
            }
            return k10;
        } catch (CancellationException e10) {
            if (!isCancelled) {
                return new d(new IllegalArgumentException("get() threw CancellationException, despite reporting isCancelled() == false: " + listenableFuture, e10));
            }
            return new c(false, e10);
        } catch (ExecutionException e11) {
            return new d(e11.getCause());
        } catch (Throwable th2) {
            return new d(th2);
        }
    }

    private static Object k(Future future) {
        Object obj;
        boolean z10 = false;
        while (true) {
            try {
                obj = future.get();
                break;
            } catch (InterruptedException unused) {
                z10 = true;
            } catch (Throwable th2) {
                if (z10) {
                    Thread.currentThread().interrupt();
                }
                throw th2;
            }
        }
        if (z10) {
            Thread.currentThread().interrupt();
        }
        return obj;
    }

    private void n() {
        i iVar;
        do {
            iVar = this.f5734i;
        } while (!f5730q.c(this, iVar, i.f5752c));
        while (iVar != null) {
            iVar.b();
            iVar = iVar.f5754b;
        }
    }

    private void o(i iVar) {
        iVar.f5753a = null;
        while (true) {
            i iVar2 = this.f5734i;
            if (iVar2 != i.f5752c) {
                i iVar3 = null;
                while (iVar2 != null) {
                    i iVar4 = iVar2.f5754b;
                    if (iVar2.f5753a != null) {
                        iVar3 = iVar2;
                    } else if (iVar3 != null) {
                        iVar3.f5754b = iVar4;
                        if (iVar3.f5753a == null) {
                            break;
                        }
                    } else if (!f5730q.c(this, iVar2, iVar4)) {
                        break;
                    }
                    iVar2 = iVar4;
                }
                return;
            }
            return;
        }
    }

    private String s(Object obj) {
        if (obj == this) {
            return "this future";
        }
        return String.valueOf(obj);
    }

    @Override // com.google.common.util.concurrent.ListenableFuture
    public final void a(Runnable runnable, Executor executor) {
        e(runnable);
        e(executor);
        e eVar = this.f5733e;
        if (eVar != e.f5741d) {
            e eVar2 = new e(runnable, executor);
            do {
                eVar2.f5744c = eVar;
                if (f5730q.a(this, eVar, eVar2)) {
                    return;
                }
                eVar = this.f5733e;
            } while (eVar != e.f5741d);
            h(runnable, executor);
        }
        h(runnable, executor);
    }

    protected void c() {
    }

    /* JADX WARN: Code restructure failed: missing block: B:31:0x0058, code lost:
        return true;
     */
    @Override // java.util.concurrent.Future
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final boolean cancel(boolean r8) {
        /*
            r7 = this;
            java.lang.Object r0 = r7.f5732d
            r1 = 1
            r2 = 0
            if (r0 != 0) goto L8
            r3 = r1
            goto L9
        L8:
            r3 = r2
        L9:
            boolean r4 = r0 instanceof androidx.work.impl.utils.futures.a.g
            r3 = r3 | r4
            if (r3 == 0) goto L60
            boolean r3 = androidx.work.impl.utils.futures.a.f5728o
            if (r3 == 0) goto L1f
            androidx.work.impl.utils.futures.a$c r3 = new androidx.work.impl.utils.futures.a$c
            java.util.concurrent.CancellationException r4 = new java.util.concurrent.CancellationException
            java.lang.String r5 = "Future.cancel() was called."
            r4.<init>(r5)
            r3.<init>(r8, r4)
            goto L26
        L1f:
            if (r8 == 0) goto L24
            androidx.work.impl.utils.futures.a$c r3 = androidx.work.impl.utils.futures.a.c.f5735c
            goto L26
        L24:
            androidx.work.impl.utils.futures.a$c r3 = androidx.work.impl.utils.futures.a.c.f5736d
        L26:
            r4 = r7
            r5 = r2
        L28:
            androidx.work.impl.utils.futures.a$b r6 = androidx.work.impl.utils.futures.a.f5730q
            boolean r6 = r6.b(r4, r0, r3)
            if (r6 == 0) goto L59
            if (r8 == 0) goto L35
            r4.l()
        L35:
            g(r4)
            boolean r4 = r0 instanceof androidx.work.impl.utils.futures.a.g
            if (r4 == 0) goto L58
            androidx.work.impl.utils.futures.a$g r0 = (androidx.work.impl.utils.futures.a.g) r0
            com.google.common.util.concurrent.ListenableFuture r0 = r0.f5751e
            boolean r4 = r0 instanceof androidx.work.impl.utils.futures.a
            if (r4 == 0) goto L55
            r4 = r0
            androidx.work.impl.utils.futures.a r4 = (androidx.work.impl.utils.futures.a) r4
            java.lang.Object r0 = r4.f5732d
            if (r0 != 0) goto L4d
            r5 = r1
            goto L4e
        L4d:
            r5 = r2
        L4e:
            boolean r6 = r0 instanceof androidx.work.impl.utils.futures.a.g
            r5 = r5 | r6
            if (r5 == 0) goto L58
            r5 = r1
            goto L28
        L55:
            r0.cancel(r8)
        L58:
            return r1
        L59:
            java.lang.Object r0 = r4.f5732d
            boolean r6 = r0 instanceof androidx.work.impl.utils.futures.a.g
            if (r6 != 0) goto L28
            return r5
        L60:
            return r2
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.work.impl.utils.futures.a.cancel(boolean):boolean");
    }

    @Override // java.util.concurrent.Future
    public final Object get(long j10, TimeUnit timeUnit) {
        Locale locale;
        long nanos = timeUnit.toNanos(j10);
        if (!Thread.interrupted()) {
            Object obj = this.f5732d;
            if ((obj != null) & (!(obj instanceof g))) {
                return i(obj);
            }
            long nanoTime = nanos > 0 ? System.nanoTime() + nanos : 0L;
            if (nanos >= 1000) {
                i iVar = this.f5734i;
                if (iVar != i.f5752c) {
                    i iVar2 = new i();
                    do {
                        iVar2.a(iVar);
                        if (f5730q.c(this, iVar, iVar2)) {
                            do {
                                LockSupport.parkNanos(this, nanos);
                                if (!Thread.interrupted()) {
                                    Object obj2 = this.f5732d;
                                    if ((obj2 != null) & (!(obj2 instanceof g))) {
                                        return i(obj2);
                                    }
                                    nanos = nanoTime - System.nanoTime();
                                } else {
                                    o(iVar2);
                                    throw new InterruptedException();
                                }
                            } while (nanos >= 1000);
                            o(iVar2);
                        } else {
                            iVar = this.f5734i;
                        }
                    } while (iVar != i.f5752c);
                    return i(this.f5732d);
                }
                return i(this.f5732d);
            }
            while (nanos > 0) {
                Object obj3 = this.f5732d;
                if ((obj3 != null) & (!(obj3 instanceof g))) {
                    return i(obj3);
                }
                if (!Thread.interrupted()) {
                    nanos = nanoTime - System.nanoTime();
                } else {
                    throw new InterruptedException();
                }
            }
            String aVar = toString();
            String lowerCase = timeUnit.toString().toLowerCase(Locale.ROOT);
            String str = "Waited " + j10 + " " + timeUnit.toString().toLowerCase(locale);
            if (nanos + 1000 < 0) {
                String str2 = str + " (plus ";
                long j11 = -nanos;
                long convert = timeUnit.convert(j11, TimeUnit.NANOSECONDS);
                long nanos2 = j11 - timeUnit.toNanos(convert);
                int i10 = (convert > 0L ? 1 : (convert == 0L ? 0 : -1));
                boolean z10 = i10 == 0 || nanos2 > 1000;
                if (i10 > 0) {
                    String str3 = str2 + convert + " " + lowerCase;
                    if (z10) {
                        str3 = str3 + ",";
                    }
                    str2 = str3 + " ";
                }
                if (z10) {
                    str2 = str2 + nanos2 + " nanoseconds ";
                }
                str = str2 + "delay)";
            }
            if (isDone()) {
                throw new TimeoutException(str + " but future completed as timeout expired");
            }
            throw new TimeoutException(str + " for " + aVar);
        }
        throw new InterruptedException();
    }

    @Override // java.util.concurrent.Future
    public final boolean isCancelled() {
        return this.f5732d instanceof c;
    }

    @Override // java.util.concurrent.Future
    public final boolean isDone() {
        Object obj;
        boolean z10;
        if (this.f5732d != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        return (!(obj instanceof g)) & z10;
    }

    protected void l() {
    }

    protected String m() {
        Object obj = this.f5732d;
        if (obj instanceof g) {
            return "setFuture=[" + s(((g) obj).f5751e) + "]";
        } else if (this instanceof ScheduledFuture) {
            return "remaining delay=[" + ((ScheduledFuture) this).getDelay(TimeUnit.MILLISECONDS) + " ms]";
        } else {
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public boolean p(Object obj) {
        if (obj == null) {
            obj = f5731r;
        }
        if (f5730q.b(this, null, obj)) {
            g(this);
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public boolean q(Throwable th2) {
        if (f5730q.b(this, null, new d((Throwable) e(th2)))) {
            g(this);
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public boolean r(ListenableFuture listenableFuture) {
        d dVar;
        e(listenableFuture);
        Object obj = this.f5732d;
        if (obj == null) {
            if (listenableFuture.isDone()) {
                if (!f5730q.b(this, null, j(listenableFuture))) {
                    return false;
                }
                g(this);
                return true;
            }
            g gVar = new g(this, listenableFuture);
            if (f5730q.b(this, null, gVar)) {
                try {
                    listenableFuture.a(gVar, androidx.work.impl.utils.futures.b.INSTANCE);
                } catch (Throwable th2) {
                    try {
                        dVar = new d(th2);
                    } catch (Throwable unused) {
                        dVar = d.f5739b;
                    }
                    f5730q.b(this, gVar, dVar);
                }
                return true;
            }
            obj = this.f5732d;
        }
        if (obj instanceof c) {
            listenableFuture.cancel(((c) obj).f5737a);
        }
        return false;
    }

    public String toString() {
        String str;
        StringBuilder sb2 = new StringBuilder();
        sb2.append(super.toString());
        sb2.append("[status=");
        if (isCancelled()) {
            sb2.append("CANCELLED");
        } else if (isDone()) {
            b(sb2);
        } else {
            try {
                str = m();
            } catch (RuntimeException e10) {
                str = "Exception thrown from implementation: " + e10.getClass();
            }
            if (str != null && !str.isEmpty()) {
                sb2.append("PENDING, info=[");
                sb2.append(str);
                sb2.append("]");
            } else if (isDone()) {
                b(sb2);
            } else {
                sb2.append("PENDING");
            }
        }
        sb2.append("]");
        return sb2.toString();
    }

    @Override // java.util.concurrent.Future
    public final Object get() {
        Object obj;
        if (!Thread.interrupted()) {
            Object obj2 = this.f5732d;
            if ((obj2 != null) & (!(obj2 instanceof g))) {
                return i(obj2);
            }
            i iVar = this.f5734i;
            if (iVar != i.f5752c) {
                i iVar2 = new i();
                do {
                    iVar2.a(iVar);
                    if (f5730q.c(this, iVar, iVar2)) {
                        do {
                            LockSupport.park(this);
                            if (!Thread.interrupted()) {
                                obj = this.f5732d;
                            } else {
                                o(iVar2);
                                throw new InterruptedException();
                            }
                        } while (!((obj != null) & (!(obj instanceof g))));
                        return i(obj);
                    }
                    iVar = this.f5734i;
                } while (iVar != i.f5752c);
                return i(this.f5732d);
            }
            return i(this.f5732d);
        }
        throw new InterruptedException();
    }
}
