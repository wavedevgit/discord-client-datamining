package com.google.common.util.concurrent;

import com.google.android.gms.internal.fido.n3;
import ii.m;
import ii.q;
import ii.s;
import java.lang.reflect.Field;
import java.security.AccessController;
import java.security.PrivilegedActionException;
import java.security.PrivilegedExceptionAction;
import java.util.Locale;
import java.util.Objects;
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
import sun.misc.Unsafe;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a extends mi.a implements ListenableFuture {

    /* renamed from: o  reason: collision with root package name */
    static final boolean f15859o;

    /* renamed from: p  reason: collision with root package name */
    private static final Logger f15860p;

    /* renamed from: q  reason: collision with root package name */
    private static final b f15861q;

    /* renamed from: r  reason: collision with root package name */
    private static final Object f15862r;

    /* renamed from: d  reason: collision with root package name */
    private volatile Object f15863d;

    /* renamed from: e  reason: collision with root package name */
    private volatile e f15864e;

    /* renamed from: i  reason: collision with root package name */
    private volatile k f15865i;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class b {
        private b() {
        }

        abstract boolean a(a aVar, e eVar, e eVar2);

        abstract boolean b(a aVar, Object obj, Object obj2);

        abstract boolean c(a aVar, k kVar, k kVar2);

        abstract e d(a aVar, e eVar);

        abstract k e(a aVar, k kVar);

        abstract void f(k kVar, k kVar2);

        abstract void g(k kVar, Thread thread);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: c  reason: collision with root package name */
        static final c f15866c;

        /* renamed from: d  reason: collision with root package name */
        static final c f15867d;

        /* renamed from: a  reason: collision with root package name */
        final boolean f15868a;

        /* renamed from: b  reason: collision with root package name */
        final Throwable f15869b;

        static {
            if (a.f15859o) {
                f15867d = null;
                f15866c = null;
                return;
            }
            f15867d = new c(false, null);
            f15866c = new c(true, null);
        }

        c(boolean z10, Throwable th2) {
            this.f15868a = z10;
            this.f15869b = th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d {

        /* renamed from: b  reason: collision with root package name */
        static final d f15870b = new d(new C0177a("Failure occurred while trying to finish a future."));

        /* renamed from: a  reason: collision with root package name */
        final Throwable f15871a;

        /* renamed from: com.google.common.util.concurrent.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class C0177a extends Throwable {
            C0177a(String str) {
                super(str);
            }

            @Override // java.lang.Throwable
            public synchronized Throwable fillInStackTrace() {
                return this;
            }
        }

        d(Throwable th2) {
            this.f15871a = (Throwable) m.j(th2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class f extends b {

        /* renamed from: a  reason: collision with root package name */
        final AtomicReferenceFieldUpdater f15876a;

        /* renamed from: b  reason: collision with root package name */
        final AtomicReferenceFieldUpdater f15877b;

        /* renamed from: c  reason: collision with root package name */
        final AtomicReferenceFieldUpdater f15878c;

        /* renamed from: d  reason: collision with root package name */
        final AtomicReferenceFieldUpdater f15879d;

        /* renamed from: e  reason: collision with root package name */
        final AtomicReferenceFieldUpdater f15880e;

        f(AtomicReferenceFieldUpdater atomicReferenceFieldUpdater, AtomicReferenceFieldUpdater atomicReferenceFieldUpdater2, AtomicReferenceFieldUpdater atomicReferenceFieldUpdater3, AtomicReferenceFieldUpdater atomicReferenceFieldUpdater4, AtomicReferenceFieldUpdater atomicReferenceFieldUpdater5) {
            super();
            this.f15876a = atomicReferenceFieldUpdater;
            this.f15877b = atomicReferenceFieldUpdater2;
            this.f15878c = atomicReferenceFieldUpdater3;
            this.f15879d = atomicReferenceFieldUpdater4;
            this.f15880e = atomicReferenceFieldUpdater5;
        }

        @Override // com.google.common.util.concurrent.a.b
        boolean a(a aVar, e eVar, e eVar2) {
            return androidx.concurrent.futures.b.a(this.f15879d, aVar, eVar, eVar2);
        }

        @Override // com.google.common.util.concurrent.a.b
        boolean b(a aVar, Object obj, Object obj2) {
            return androidx.concurrent.futures.b.a(this.f15880e, aVar, obj, obj2);
        }

        @Override // com.google.common.util.concurrent.a.b
        boolean c(a aVar, k kVar, k kVar2) {
            return androidx.concurrent.futures.b.a(this.f15878c, aVar, kVar, kVar2);
        }

        @Override // com.google.common.util.concurrent.a.b
        e d(a aVar, e eVar) {
            return (e) this.f15879d.getAndSet(aVar, eVar);
        }

        @Override // com.google.common.util.concurrent.a.b
        k e(a aVar, k kVar) {
            return (k) this.f15878c.getAndSet(aVar, kVar);
        }

        @Override // com.google.common.util.concurrent.a.b
        void f(k kVar, k kVar2) {
            this.f15877b.lazySet(kVar, kVar2);
        }

        @Override // com.google.common.util.concurrent.a.b
        void g(k kVar, Thread thread) {
            this.f15876a.lazySet(kVar, thread);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class g extends b {
        private g() {
            super();
        }

        @Override // com.google.common.util.concurrent.a.b
        boolean a(a aVar, e eVar, e eVar2) {
            synchronized (aVar) {
                try {
                    if (aVar.f15864e == eVar) {
                        aVar.f15864e = eVar2;
                        return true;
                    }
                    return false;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // com.google.common.util.concurrent.a.b
        boolean b(a aVar, Object obj, Object obj2) {
            synchronized (aVar) {
                try {
                    if (aVar.f15863d == obj) {
                        aVar.f15863d = obj2;
                        return true;
                    }
                    return false;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // com.google.common.util.concurrent.a.b
        boolean c(a aVar, k kVar, k kVar2) {
            synchronized (aVar) {
                try {
                    if (aVar.f15865i == kVar) {
                        aVar.f15865i = kVar2;
                        return true;
                    }
                    return false;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // com.google.common.util.concurrent.a.b
        e d(a aVar, e eVar) {
            e eVar2;
            synchronized (aVar) {
                try {
                    eVar2 = aVar.f15864e;
                    if (eVar2 != eVar) {
                        aVar.f15864e = eVar;
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            return eVar2;
        }

        @Override // com.google.common.util.concurrent.a.b
        k e(a aVar, k kVar) {
            k kVar2;
            synchronized (aVar) {
                try {
                    kVar2 = aVar.f15865i;
                    if (kVar2 != kVar) {
                        aVar.f15865i = kVar;
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            return kVar2;
        }

        @Override // com.google.common.util.concurrent.a.b
        void f(k kVar, k kVar2) {
            kVar.f15889b = kVar2;
        }

        @Override // com.google.common.util.concurrent.a.b
        void g(k kVar, Thread thread) {
            kVar.f15888a = thread;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    interface h extends ListenableFuture {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class i extends a implements h {
        @Override // com.google.common.util.concurrent.a, com.google.common.util.concurrent.ListenableFuture
        public final void a(Runnable runnable, Executor executor) {
            super.a(runnable, executor);
        }

        @Override // com.google.common.util.concurrent.a, java.util.concurrent.Future
        public final boolean cancel(boolean z10) {
            return super.cancel(z10);
        }

        @Override // com.google.common.util.concurrent.a, java.util.concurrent.Future
        public Object get() {
            return super.get();
        }

        @Override // com.google.common.util.concurrent.a, java.util.concurrent.Future
        public final boolean isCancelled() {
            return super.isCancelled();
        }

        @Override // com.google.common.util.concurrent.a, java.util.concurrent.Future
        public final boolean isDone() {
            return super.isDone();
        }

        @Override // com.google.common.util.concurrent.a, java.util.concurrent.Future
        public final Object get(long j10, TimeUnit timeUnit) {
            return super.get(j10, timeUnit);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class j extends b {

        /* renamed from: a  reason: collision with root package name */
        static final Unsafe f15881a;

        /* renamed from: b  reason: collision with root package name */
        static final long f15882b;

        /* renamed from: c  reason: collision with root package name */
        static final long f15883c;

        /* renamed from: d  reason: collision with root package name */
        static final long f15884d;

        /* renamed from: e  reason: collision with root package name */
        static final long f15885e;

        /* renamed from: f  reason: collision with root package name */
        static final long f15886f;

        /* renamed from: com.google.common.util.concurrent.a$j$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class C0178a implements PrivilegedExceptionAction {
            C0178a() {
            }

            @Override // java.security.PrivilegedExceptionAction
            /* renamed from: a */
            public Unsafe run() {
                Field[] declaredFields;
                for (Field field : Unsafe.class.getDeclaredFields()) {
                    field.setAccessible(true);
                    Object obj = field.get(null);
                    if (Unsafe.class.isInstance(obj)) {
                        return (Unsafe) Unsafe.class.cast(obj);
                    }
                }
                throw new NoSuchFieldError("the Unsafe");
            }
        }

        static {
            Unsafe unsafe;
            try {
                try {
                    unsafe = Unsafe.getUnsafe();
                } catch (PrivilegedActionException e10) {
                    throw new RuntimeException("Could not initialize intrinsics", e10.getCause());
                }
            } catch (SecurityException unused) {
                unsafe = (Unsafe) AccessController.doPrivileged(new C0178a());
            }
            try {
                f15883c = unsafe.objectFieldOffset(a.class.getDeclaredField("i"));
                f15882b = unsafe.objectFieldOffset(a.class.getDeclaredField("e"));
                f15884d = unsafe.objectFieldOffset(a.class.getDeclaredField("d"));
                f15885e = unsafe.objectFieldOffset(k.class.getDeclaredField("a"));
                f15886f = unsafe.objectFieldOffset(k.class.getDeclaredField("b"));
                f15881a = unsafe;
            } catch (Exception e11) {
                s.e(e11);
                throw new RuntimeException(e11);
            }
        }

        private j() {
            super();
        }

        @Override // com.google.common.util.concurrent.a.b
        boolean a(a aVar, e eVar, e eVar2) {
            return n3.a(f15881a, aVar, f15882b, eVar, eVar2);
        }

        @Override // com.google.common.util.concurrent.a.b
        boolean b(a aVar, Object obj, Object obj2) {
            return n3.a(f15881a, aVar, f15884d, obj, obj2);
        }

        @Override // com.google.common.util.concurrent.a.b
        boolean c(a aVar, k kVar, k kVar2) {
            return n3.a(f15881a, aVar, f15883c, kVar, kVar2);
        }

        @Override // com.google.common.util.concurrent.a.b
        e d(a aVar, e eVar) {
            e eVar2;
            do {
                eVar2 = aVar.f15864e;
                if (eVar == eVar2) {
                    break;
                }
            } while (!a(aVar, eVar2, eVar));
            return eVar2;
        }

        @Override // com.google.common.util.concurrent.a.b
        k e(a aVar, k kVar) {
            k kVar2;
            do {
                kVar2 = aVar.f15865i;
                if (kVar == kVar2) {
                    break;
                }
            } while (!c(aVar, kVar2, kVar));
            return kVar2;
        }

        @Override // com.google.common.util.concurrent.a.b
        void f(k kVar, k kVar2) {
            f15881a.putObject(kVar, f15886f, kVar2);
        }

        @Override // com.google.common.util.concurrent.a.b
        void g(k kVar, Thread thread) {
            f15881a.putObject(kVar, f15885e, thread);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k {

        /* renamed from: c  reason: collision with root package name */
        static final k f15887c = new k(false);

        /* renamed from: a  reason: collision with root package name */
        volatile Thread f15888a;

        /* renamed from: b  reason: collision with root package name */
        volatile k f15889b;

        k(boolean z10) {
        }

        void a(k kVar) {
            a.f15861q.f(this, kVar);
        }

        void b() {
            Thread thread = this.f15888a;
            if (thread != null) {
                this.f15888a = null;
                LockSupport.unpark(thread);
            }
        }

        k() {
            a.f15861q.g(this, Thread.currentThread());
        }
    }

    static {
        boolean z10;
        Throwable th2;
        b gVar;
        try {
            z10 = Boolean.parseBoolean(System.getProperty("guava.concurrent.generate_cancellation_cause", "false"));
        } catch (SecurityException unused) {
            z10 = false;
        }
        f15859o = z10;
        f15860p = Logger.getLogger(a.class.getName());
        Throwable th3 = null;
        try {
            gVar = new j();
            th2 = null;
        } catch (Throwable th4) {
            th2 = th4;
            try {
                gVar = new f(AtomicReferenceFieldUpdater.newUpdater(k.class, Thread.class, "a"), AtomicReferenceFieldUpdater.newUpdater(k.class, k.class, "b"), AtomicReferenceFieldUpdater.newUpdater(a.class, k.class, "i"), AtomicReferenceFieldUpdater.newUpdater(a.class, e.class, "e"), AtomicReferenceFieldUpdater.newUpdater(a.class, Object.class, "d"));
            } catch (Throwable th5) {
                th3 = th5;
                gVar = new g();
            }
        }
        f15861q = gVar;
        if (th3 != null) {
            Logger logger = f15860p;
            Level level = Level.SEVERE;
            logger.log(level, "UnsafeAtomicHelper is broken!", th2);
            logger.log(level, "SafeAtomicHelper is broken!", th3);
        }
        f15862r = new Object();
    }

    protected a() {
    }

    private void j(StringBuilder sb2) {
        try {
            Object s10 = s(this);
            sb2.append("SUCCESS, result=[");
            m(sb2, s10);
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

    private void k(StringBuilder sb2) {
        String sb3;
        int length = sb2.length();
        sb2.append("PENDING");
        try {
            sb3 = q.a(u());
        } catch (RuntimeException | StackOverflowError e10) {
            String valueOf = String.valueOf(e10.getClass());
            StringBuilder sb4 = new StringBuilder(valueOf.length() + 38);
            sb4.append("Exception thrown from implementation: ");
            sb4.append(valueOf);
            sb3 = sb4.toString();
        }
        if (sb3 != null) {
            sb2.append(", info=[");
            sb2.append(sb3);
            sb2.append("]");
        }
        if (isDone()) {
            sb2.delete(length, sb2.length());
            j(sb2);
        }
    }

    private void m(StringBuilder sb2, Object obj) {
        if (obj == null) {
            sb2.append("null");
        } else if (obj == this) {
            sb2.append("this future");
        } else {
            sb2.append(obj.getClass().getName());
            sb2.append("@");
            sb2.append(Integer.toHexString(System.identityHashCode(obj)));
        }
    }

    private static CancellationException n(String str, Throwable th2) {
        CancellationException cancellationException = new CancellationException(str);
        cancellationException.initCause(th2);
        return cancellationException;
    }

    private e o(e eVar) {
        e eVar2 = eVar;
        e d10 = f15861q.d(this, e.f15872d);
        while (d10 != null) {
            e eVar3 = d10.f15875c;
            d10.f15875c = eVar2;
            eVar2 = d10;
            d10 = eVar3;
        }
        return eVar2;
    }

    private static void p(a aVar) {
        aVar.v();
        aVar.l();
        e o10 = aVar.o(null);
        while (o10 != null) {
            e eVar = o10.f15875c;
            Runnable runnable = o10.f15873a;
            Objects.requireNonNull(runnable);
            Executor executor = o10.f15874b;
            Objects.requireNonNull(executor);
            q(runnable, executor);
            o10 = eVar;
        }
    }

    private static void q(Runnable runnable, Executor executor) {
        try {
            executor.execute(runnable);
        } catch (RuntimeException e10) {
            Logger logger = f15860p;
            Level level = Level.SEVERE;
            String valueOf = String.valueOf(runnable);
            String valueOf2 = String.valueOf(executor);
            StringBuilder sb2 = new StringBuilder(valueOf.length() + 57 + valueOf2.length());
            sb2.append("RuntimeException while executing runnable ");
            sb2.append(valueOf);
            sb2.append(" with executor ");
            sb2.append(valueOf2);
            logger.log(level, sb2.toString(), (Throwable) e10);
        }
    }

    private Object r(Object obj) {
        if (!(obj instanceof c)) {
            if (!(obj instanceof d)) {
                if (obj == f15862r) {
                    return com.google.common.util.concurrent.e.a();
                }
                return obj;
            }
            throw new ExecutionException(((d) obj).f15871a);
        }
        throw n("Task was cancelled.", ((c) obj).f15869b);
    }

    private static Object s(Future future) {
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

    private void v() {
        for (k e10 = f15861q.e(this, k.f15887c); e10 != null; e10 = e10.f15889b) {
            e10.b();
        }
    }

    private void w(k kVar) {
        kVar.f15888a = null;
        while (true) {
            k kVar2 = this.f15865i;
            if (kVar2 != k.f15887c) {
                k kVar3 = null;
                while (kVar2 != null) {
                    k kVar4 = kVar2.f15889b;
                    if (kVar2.f15888a != null) {
                        kVar3 = kVar2;
                    } else if (kVar3 != null) {
                        kVar3.f15889b = kVar4;
                        if (kVar3.f15888a == null) {
                            break;
                        }
                    } else if (!f15861q.c(this, kVar2, kVar4)) {
                        break;
                    }
                    kVar2 = kVar4;
                }
                return;
            }
            return;
        }
    }

    @Override // com.google.common.util.concurrent.ListenableFuture
    public void a(Runnable runnable, Executor executor) {
        e eVar;
        m.k(runnable, "Runnable was null.");
        m.k(executor, "Executor was null.");
        if (!isDone() && (eVar = this.f15864e) != e.f15872d) {
            e eVar2 = new e(runnable, executor);
            do {
                eVar2.f15875c = eVar;
                if (f15861q.a(this, eVar, eVar2)) {
                    return;
                }
                eVar = this.f15864e;
            } while (eVar != e.f15872d);
            q(runnable, executor);
        }
        q(runnable, executor);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // mi.a
    public final Throwable b() {
        if (this instanceof h) {
            Object obj = this.f15863d;
            if (obj instanceof d) {
                return ((d) obj).f15871a;
            }
            return null;
        }
        return null;
    }

    @Override // java.util.concurrent.Future
    public boolean cancel(boolean z10) {
        boolean z11;
        c cVar;
        Object obj = this.f15863d;
        if (obj == null) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (z11) {
            if (f15859o) {
                cVar = new c(z10, new CancellationException("Future.cancel() was called."));
            } else {
                if (z10) {
                    cVar = c.f15866c;
                } else {
                    cVar = c.f15867d;
                }
                Objects.requireNonNull(cVar);
            }
            if (f15861q.b(this, obj, cVar)) {
                if (z10) {
                    t();
                }
                p(this);
                return true;
            }
        }
        return false;
    }

    @Override // java.util.concurrent.Future
    public Object get(long j10, TimeUnit timeUnit) {
        long nanos = timeUnit.toNanos(j10);
        if (!Thread.interrupted()) {
            Object obj = this.f15863d;
            if (obj != null) {
                return r(obj);
            }
            long nanoTime = nanos > 0 ? System.nanoTime() + nanos : 0L;
            if (nanos >= 1000) {
                k kVar = this.f15865i;
                if (kVar != k.f15887c) {
                    k kVar2 = new k();
                    do {
                        kVar2.a(kVar);
                        if (f15861q.c(this, kVar, kVar2)) {
                            do {
                                com.google.common.util.concurrent.f.a(this, nanos);
                                if (!Thread.interrupted()) {
                                    Object obj2 = this.f15863d;
                                    if (obj2 != null) {
                                        return r(obj2);
                                    }
                                    nanos = nanoTime - System.nanoTime();
                                } else {
                                    w(kVar2);
                                    throw new InterruptedException();
                                }
                            } while (nanos >= 1000);
                            w(kVar2);
                        } else {
                            kVar = this.f15865i;
                        }
                    } while (kVar != k.f15887c);
                    Object obj3 = this.f15863d;
                    Objects.requireNonNull(obj3);
                    return r(obj3);
                }
                Object obj32 = this.f15863d;
                Objects.requireNonNull(obj32);
                return r(obj32);
            }
            while (nanos > 0) {
                Object obj4 = this.f15863d;
                if (obj4 != null) {
                    return r(obj4);
                }
                if (!Thread.interrupted()) {
                    nanos = nanoTime - System.nanoTime();
                } else {
                    throw new InterruptedException();
                }
            }
            String aVar = toString();
            String obj5 = timeUnit.toString();
            Locale locale = Locale.ROOT;
            String lowerCase = obj5.toLowerCase(locale);
            String lowerCase2 = timeUnit.toString().toLowerCase(locale);
            StringBuilder sb2 = new StringBuilder(String.valueOf(lowerCase2).length() + 28);
            sb2.append("Waited ");
            sb2.append(j10);
            sb2.append(" ");
            sb2.append(lowerCase2);
            String sb3 = sb2.toString();
            if (nanos + 1000 < 0) {
                String concat = String.valueOf(sb3).concat(" (plus ");
                long j11 = -nanos;
                long convert = timeUnit.convert(j11, TimeUnit.NANOSECONDS);
                long nanos2 = j11 - timeUnit.toNanos(convert);
                int i10 = (convert > 0L ? 1 : (convert == 0L ? 0 : -1));
                boolean z10 = i10 == 0 || nanos2 > 1000;
                if (i10 > 0) {
                    String valueOf = String.valueOf(concat);
                    StringBuilder sb4 = new StringBuilder(valueOf.length() + 21 + String.valueOf(lowerCase).length());
                    sb4.append(valueOf);
                    sb4.append(convert);
                    sb4.append(" ");
                    sb4.append(lowerCase);
                    String sb5 = sb4.toString();
                    if (z10) {
                        sb5 = String.valueOf(sb5).concat(",");
                    }
                    concat = String.valueOf(sb5).concat(" ");
                }
                if (z10) {
                    String valueOf2 = String.valueOf(concat);
                    StringBuilder sb6 = new StringBuilder(valueOf2.length() + 33);
                    sb6.append(valueOf2);
                    sb6.append(nanos2);
                    sb6.append(" nanoseconds ");
                    concat = sb6.toString();
                }
                sb3 = String.valueOf(concat).concat("delay)");
            }
            if (isDone()) {
                throw new TimeoutException(String.valueOf(sb3).concat(" but future completed as timeout expired"));
            }
            StringBuilder sb7 = new StringBuilder(String.valueOf(sb3).length() + 5 + String.valueOf(aVar).length());
            sb7.append(sb3);
            sb7.append(" for ");
            sb7.append(aVar);
            throw new TimeoutException(sb7.toString());
        }
        throw new InterruptedException();
    }

    @Override // java.util.concurrent.Future
    public boolean isCancelled() {
        return this.f15863d instanceof c;
    }

    @Override // java.util.concurrent.Future
    public boolean isDone() {
        if (this.f15863d != null) {
            return true;
        }
        return false;
    }

    protected void l() {
    }

    protected void t() {
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        if (getClass().getName().startsWith("com.google.common.util.concurrent.")) {
            sb2.append(getClass().getSimpleName());
        } else {
            sb2.append(getClass().getName());
        }
        sb2.append('@');
        sb2.append(Integer.toHexString(System.identityHashCode(this)));
        sb2.append("[status=");
        if (isCancelled()) {
            sb2.append("CANCELLED");
        } else if (isDone()) {
            j(sb2);
        } else {
            k(sb2);
        }
        sb2.append("]");
        return sb2.toString();
    }

    protected String u() {
        if (this instanceof ScheduledFuture) {
            long delay = ((ScheduledFuture) this).getDelay(TimeUnit.MILLISECONDS);
            StringBuilder sb2 = new StringBuilder(41);
            sb2.append("remaining delay=[");
            sb2.append(delay);
            sb2.append(" ms]");
            return sb2.toString();
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public boolean x(Object obj) {
        if (obj == null) {
            obj = f15862r;
        }
        if (f15861q.b(this, null, obj)) {
            p(this);
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public boolean y(Throwable th2) {
        if (f15861q.b(this, null, new d((Throwable) m.j(th2)))) {
            p(this);
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e {

        /* renamed from: d  reason: collision with root package name */
        static final e f15872d = new e();

        /* renamed from: a  reason: collision with root package name */
        final Runnable f15873a;

        /* renamed from: b  reason: collision with root package name */
        final Executor f15874b;

        /* renamed from: c  reason: collision with root package name */
        e f15875c;

        e(Runnable runnable, Executor executor) {
            this.f15873a = runnable;
            this.f15874b = executor;
        }

        e() {
            this.f15873a = null;
            this.f15874b = null;
        }
    }

    @Override // java.util.concurrent.Future
    public Object get() {
        Object obj;
        boolean z10;
        if (!Thread.interrupted()) {
            Object obj2 = this.f15863d;
            if (obj2 != null) {
                return r(obj2);
            }
            k kVar = this.f15865i;
            if (kVar != k.f15887c) {
                k kVar2 = new k();
                do {
                    kVar2.a(kVar);
                    if (f15861q.c(this, kVar, kVar2)) {
                        do {
                            LockSupport.park(this);
                            if (!Thread.interrupted()) {
                                obj = this.f15863d;
                                if (obj != null) {
                                    z10 = true;
                                    continue;
                                } else {
                                    z10 = false;
                                    continue;
                                }
                            } else {
                                w(kVar2);
                                throw new InterruptedException();
                            }
                        } while (!z10);
                        return r(obj);
                    }
                    kVar = this.f15865i;
                } while (kVar != k.f15887c);
                Object obj3 = this.f15863d;
                Objects.requireNonNull(obj3);
                return r(obj3);
            }
            Object obj32 = this.f15863d;
            Objects.requireNonNull(obj32);
            return r(obj32);
        }
        throw new InterruptedException();
    }
}
