package androidx.concurrent.futures;

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
    static final boolean f2637o = Boolean.parseBoolean(System.getProperty("guava.concurrent.generate_cancellation_cause", "false"));

    /* renamed from: p  reason: collision with root package name */
    private static final Logger f2638p = Logger.getLogger(a.class.getName());

    /* renamed from: q  reason: collision with root package name */
    static final b f2639q;

    /* renamed from: r  reason: collision with root package name */
    private static final Object f2640r;

    /* renamed from: d  reason: collision with root package name */
    volatile Object f2641d;

    /* renamed from: e  reason: collision with root package name */
    volatile e f2642e;

    /* renamed from: i  reason: collision with root package name */
    volatile h f2643i;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class b {
        private b() {
        }

        abstract boolean a(a aVar, e eVar, e eVar2);

        abstract boolean b(a aVar, Object obj, Object obj2);

        abstract boolean c(a aVar, h hVar, h hVar2);

        abstract void d(h hVar, h hVar2);

        abstract void e(h hVar, Thread thread);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c {

        /* renamed from: c  reason: collision with root package name */
        static final c f2644c;

        /* renamed from: d  reason: collision with root package name */
        static final c f2645d;

        /* renamed from: a  reason: collision with root package name */
        final boolean f2646a;

        /* renamed from: b  reason: collision with root package name */
        final Throwable f2647b;

        static {
            if (a.f2637o) {
                f2645d = null;
                f2644c = null;
                return;
            }
            f2645d = new c(false, null);
            f2644c = new c(true, null);
        }

        c(boolean z10, Throwable th2) {
            this.f2646a = z10;
            this.f2647b = th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d {

        /* renamed from: b  reason: collision with root package name */
        static final d f2648b = new d(new C0026a("Failure occurred while trying to finish a future."));

        /* renamed from: a  reason: collision with root package name */
        final Throwable f2649a;

        /* renamed from: androidx.concurrent.futures.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class C0026a extends Throwable {
            C0026a(String str) {
                super(str);
            }

            @Override // java.lang.Throwable
            public synchronized Throwable fillInStackTrace() {
                return this;
            }
        }

        d(Throwable th2) {
            this.f2649a = (Throwable) a.g(th2);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e {

        /* renamed from: d  reason: collision with root package name */
        static final e f2650d = new e(null, null);

        /* renamed from: a  reason: collision with root package name */
        final Runnable f2651a;

        /* renamed from: b  reason: collision with root package name */
        final Executor f2652b;

        /* renamed from: c  reason: collision with root package name */
        e f2653c;

        e(Runnable runnable, Executor executor) {
            this.f2651a = runnable;
            this.f2652b = executor;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class f extends b {

        /* renamed from: a  reason: collision with root package name */
        final AtomicReferenceFieldUpdater f2654a;

        /* renamed from: b  reason: collision with root package name */
        final AtomicReferenceFieldUpdater f2655b;

        /* renamed from: c  reason: collision with root package name */
        final AtomicReferenceFieldUpdater f2656c;

        /* renamed from: d  reason: collision with root package name */
        final AtomicReferenceFieldUpdater f2657d;

        /* renamed from: e  reason: collision with root package name */
        final AtomicReferenceFieldUpdater f2658e;

        f(AtomicReferenceFieldUpdater atomicReferenceFieldUpdater, AtomicReferenceFieldUpdater atomicReferenceFieldUpdater2, AtomicReferenceFieldUpdater atomicReferenceFieldUpdater3, AtomicReferenceFieldUpdater atomicReferenceFieldUpdater4, AtomicReferenceFieldUpdater atomicReferenceFieldUpdater5) {
            super();
            this.f2654a = atomicReferenceFieldUpdater;
            this.f2655b = atomicReferenceFieldUpdater2;
            this.f2656c = atomicReferenceFieldUpdater3;
            this.f2657d = atomicReferenceFieldUpdater4;
            this.f2658e = atomicReferenceFieldUpdater5;
        }

        @Override // androidx.concurrent.futures.a.b
        boolean a(a aVar, e eVar, e eVar2) {
            return androidx.concurrent.futures.b.a(this.f2657d, aVar, eVar, eVar2);
        }

        @Override // androidx.concurrent.futures.a.b
        boolean b(a aVar, Object obj, Object obj2) {
            return androidx.concurrent.futures.b.a(this.f2658e, aVar, obj, obj2);
        }

        @Override // androidx.concurrent.futures.a.b
        boolean c(a aVar, h hVar, h hVar2) {
            return androidx.concurrent.futures.b.a(this.f2656c, aVar, hVar, hVar2);
        }

        @Override // androidx.concurrent.futures.a.b
        void d(h hVar, h hVar2) {
            this.f2655b.lazySet(hVar, hVar2);
        }

        @Override // androidx.concurrent.futures.a.b
        void e(h hVar, Thread thread) {
            this.f2654a.lazySet(hVar, thread);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class g extends b {
        g() {
            super();
        }

        @Override // androidx.concurrent.futures.a.b
        boolean a(a aVar, e eVar, e eVar2) {
            synchronized (aVar) {
                try {
                    if (aVar.f2642e == eVar) {
                        aVar.f2642e = eVar2;
                        return true;
                    }
                    return false;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // androidx.concurrent.futures.a.b
        boolean b(a aVar, Object obj, Object obj2) {
            synchronized (aVar) {
                try {
                    if (aVar.f2641d == obj) {
                        aVar.f2641d = obj2;
                        return true;
                    }
                    return false;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // androidx.concurrent.futures.a.b
        boolean c(a aVar, h hVar, h hVar2) {
            synchronized (aVar) {
                try {
                    if (aVar.f2643i == hVar) {
                        aVar.f2643i = hVar2;
                        return true;
                    }
                    return false;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // androidx.concurrent.futures.a.b
        void d(h hVar, h hVar2) {
            hVar.f2661b = hVar2;
        }

        @Override // androidx.concurrent.futures.a.b
        void e(h hVar, Thread thread) {
            hVar.f2660a = thread;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class h {

        /* renamed from: c  reason: collision with root package name */
        static final h f2659c = new h(false);

        /* renamed from: a  reason: collision with root package name */
        volatile Thread f2660a;

        /* renamed from: b  reason: collision with root package name */
        volatile h f2661b;

        h(boolean z10) {
        }

        void a(h hVar) {
            a.f2639q.d(this, hVar);
        }

        void b() {
            Thread thread = this.f2660a;
            if (thread != null) {
                this.f2660a = null;
                LockSupport.unpark(thread);
            }
        }

        h() {
            a.f2639q.e(this, Thread.currentThread());
        }
    }

    static {
        b gVar;
        try {
            gVar = new f(AtomicReferenceFieldUpdater.newUpdater(h.class, Thread.class, "a"), AtomicReferenceFieldUpdater.newUpdater(h.class, h.class, "b"), AtomicReferenceFieldUpdater.newUpdater(a.class, h.class, "i"), AtomicReferenceFieldUpdater.newUpdater(a.class, e.class, "e"), AtomicReferenceFieldUpdater.newUpdater(a.class, Object.class, "d"));
            th = null;
        } catch (Throwable th2) {
            th = th2;
            gVar = new g();
        }
        f2639q = gVar;
        if (th != null) {
            f2638p.log(Level.SEVERE, "SafeAtomicHelper is broken!", th);
        }
        f2640r = new Object();
    }

    private void d(StringBuilder sb2) {
        try {
            Object m10 = m(this);
            sb2.append("SUCCESS, result=[");
            sb2.append(u(m10));
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

    private static CancellationException f(String str, Throwable th2) {
        CancellationException cancellationException = new CancellationException(str);
        cancellationException.initCause(th2);
        return cancellationException;
    }

    static Object g(Object obj) {
        obj.getClass();
        return obj;
    }

    private e h(e eVar) {
        e eVar2;
        do {
            eVar2 = this.f2642e;
        } while (!f2639q.a(this, eVar2, e.f2650d));
        e eVar3 = eVar;
        e eVar4 = eVar2;
        while (eVar4 != null) {
            e eVar5 = eVar4.f2653c;
            eVar4.f2653c = eVar3;
            eVar3 = eVar4;
            eVar4 = eVar5;
        }
        return eVar3;
    }

    static void i(a aVar) {
        aVar.q();
        aVar.e();
        e h10 = aVar.h(null);
        while (h10 != null) {
            e eVar = h10.f2653c;
            j(h10.f2651a, h10.f2652b);
            h10 = eVar;
        }
    }

    private static void j(Runnable runnable, Executor executor) {
        try {
            executor.execute(runnable);
        } catch (RuntimeException e10) {
            Logger logger = f2638p;
            Level level = Level.SEVERE;
            logger.log(level, "RuntimeException while executing runnable " + runnable + " with executor " + executor, (Throwable) e10);
        }
    }

    private Object k(Object obj) {
        if (!(obj instanceof c)) {
            if (!(obj instanceof d)) {
                if (obj == f2640r) {
                    return null;
                }
                return obj;
            }
            throw new ExecutionException(((d) obj).f2649a);
        }
        throw f("Task was cancelled.", ((c) obj).f2647b);
    }

    static Object m(Future future) {
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

    private void q() {
        h hVar;
        do {
            hVar = this.f2643i;
        } while (!f2639q.c(this, hVar, h.f2659c));
        while (hVar != null) {
            hVar.b();
            hVar = hVar.f2661b;
        }
    }

    private void r(h hVar) {
        hVar.f2660a = null;
        while (true) {
            h hVar2 = this.f2643i;
            if (hVar2 != h.f2659c) {
                h hVar3 = null;
                while (hVar2 != null) {
                    h hVar4 = hVar2.f2661b;
                    if (hVar2.f2660a != null) {
                        hVar3 = hVar2;
                    } else if (hVar3 != null) {
                        hVar3.f2661b = hVar4;
                        if (hVar3.f2660a == null) {
                            break;
                        }
                    } else if (!f2639q.c(this, hVar2, hVar4)) {
                        break;
                    }
                    hVar2 = hVar4;
                }
                return;
            }
            return;
        }
    }

    private String u(Object obj) {
        if (obj == this) {
            return "this future";
        }
        return String.valueOf(obj);
    }

    @Override // com.google.common.util.concurrent.ListenableFuture
    public final void a(Runnable runnable, Executor executor) {
        g(runnable);
        g(executor);
        e eVar = this.f2642e;
        if (eVar != e.f2650d) {
            e eVar2 = new e(runnable, executor);
            do {
                eVar2.f2653c = eVar;
                if (f2639q.a(this, eVar, eVar2)) {
                    return;
                }
                eVar = this.f2642e;
            } while (eVar != e.f2650d);
            j(runnable, executor);
        }
        j(runnable, executor);
    }

    @Override // java.util.concurrent.Future
    public final boolean cancel(boolean z10) {
        boolean z11;
        c cVar;
        Object obj = this.f2641d;
        if (obj == null) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (z11) {
            if (f2637o) {
                cVar = new c(z10, new CancellationException("Future.cancel() was called."));
            } else if (z10) {
                cVar = c.f2644c;
            } else {
                cVar = c.f2645d;
            }
            if (f2639q.b(this, obj, cVar)) {
                if (z10) {
                    n();
                }
                i(this);
                return true;
            }
        }
        return false;
    }

    protected void e() {
    }

    @Override // java.util.concurrent.Future
    public final Object get(long j10, TimeUnit timeUnit) {
        Locale locale;
        long nanos = timeUnit.toNanos(j10);
        if (!Thread.interrupted()) {
            Object obj = this.f2641d;
            if (obj != null) {
                return k(obj);
            }
            long nanoTime = nanos > 0 ? System.nanoTime() + nanos : 0L;
            if (nanos >= 1000) {
                h hVar = this.f2643i;
                if (hVar != h.f2659c) {
                    h hVar2 = new h();
                    do {
                        hVar2.a(hVar);
                        if (f2639q.c(this, hVar, hVar2)) {
                            do {
                                LockSupport.parkNanos(this, nanos);
                                if (!Thread.interrupted()) {
                                    Object obj2 = this.f2641d;
                                    if (obj2 != null) {
                                        return k(obj2);
                                    }
                                    nanos = nanoTime - System.nanoTime();
                                } else {
                                    r(hVar2);
                                    throw new InterruptedException();
                                }
                            } while (nanos >= 1000);
                            r(hVar2);
                        } else {
                            hVar = this.f2643i;
                        }
                    } while (hVar != h.f2659c);
                    return k(this.f2641d);
                }
                return k(this.f2641d);
            }
            while (nanos > 0) {
                Object obj3 = this.f2641d;
                if (obj3 != null) {
                    return k(obj3);
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
        return this.f2641d instanceof c;
    }

    @Override // java.util.concurrent.Future
    public final boolean isDone() {
        if (this.f2641d != null) {
            return true;
        }
        return false;
    }

    protected void n() {
    }

    protected String o() {
        if (this instanceof ScheduledFuture) {
            return "remaining delay=[" + ((ScheduledFuture) this).getDelay(TimeUnit.MILLISECONDS) + " ms]";
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public boolean s(Object obj) {
        if (obj == null) {
            obj = f2640r;
        }
        if (f2639q.b(this, null, obj)) {
            i(this);
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public boolean t(Throwable th2) {
        if (f2639q.b(this, null, new d((Throwable) g(th2)))) {
            i(this);
            return true;
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
            d(sb2);
        } else {
            try {
                str = o();
            } catch (RuntimeException e10) {
                str = "Exception thrown from implementation: " + e10.getClass();
            }
            if (str != null && !str.isEmpty()) {
                sb2.append("PENDING, info=[");
                sb2.append(str);
                sb2.append("]");
            } else if (isDone()) {
                d(sb2);
            } else {
                sb2.append("PENDING");
            }
        }
        sb2.append("]");
        return sb2.toString();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean v() {
        Object obj = this.f2641d;
        if ((obj instanceof c) && ((c) obj).f2646a) {
            return true;
        }
        return false;
    }

    @Override // java.util.concurrent.Future
    public final Object get() {
        Object obj;
        boolean z10;
        if (!Thread.interrupted()) {
            Object obj2 = this.f2641d;
            if (obj2 != null) {
                return k(obj2);
            }
            h hVar = this.f2643i;
            if (hVar != h.f2659c) {
                h hVar2 = new h();
                do {
                    hVar2.a(hVar);
                    if (f2639q.c(this, hVar, hVar2)) {
                        do {
                            LockSupport.park(this);
                            if (!Thread.interrupted()) {
                                obj = this.f2641d;
                                if (obj != null) {
                                    z10 = true;
                                    continue;
                                } else {
                                    z10 = false;
                                    continue;
                                }
                            } else {
                                r(hVar2);
                                throw new InterruptedException();
                            }
                        } while (!z10);
                        return k(obj);
                    }
                    hVar = this.f2643i;
                } while (hVar != h.f2659c);
                return k(this.f2641d);
            }
            return k(this.f2641d);
        }
        throw new InterruptedException();
    }
}
