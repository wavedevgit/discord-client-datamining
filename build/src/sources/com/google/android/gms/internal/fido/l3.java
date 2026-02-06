package com.google.android.gms.internal.fido;

import java.util.Locale;
import java.util.Objects;
import java.util.concurrent.CancellationException;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.Future;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
import java.util.concurrent.locks.LockSupport;
import java.util.logging.Level;
import java.util.logging.Logger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class l3 extends m4 implements c4 {

    /* renamed from: o  reason: collision with root package name */
    static final boolean f14012o;

    /* renamed from: p  reason: collision with root package name */
    static final b4 f14013p;

    /* renamed from: q  reason: collision with root package name */
    private static final c3 f14014q;

    /* renamed from: r  reason: collision with root package name */
    private static final Object f14015r;

    /* renamed from: d  reason: collision with root package name */
    private volatile Object f14016d;

    /* renamed from: e  reason: collision with root package name */
    private volatile g3 f14017e;

    /* renamed from: i  reason: collision with root package name */
    private volatile k3 f14018i;

    static {
        boolean z10;
        Throwable th2;
        Throwable th3;
        c3 h3Var;
        try {
            z10 = Boolean.parseBoolean(System.getProperty("guava.concurrent.generate_cancellation_cause", "false"));
        } catch (SecurityException unused) {
            z10 = false;
        }
        f14012o = z10;
        f14013p = new b4(l3.class);
        try {
            h3Var = new j3(null);
            th2 = null;
            th3 = null;
        } catch (Error | Exception e10) {
            try {
                h3Var = new d3(null);
                th2 = null;
                th3 = e10;
            } catch (Error | Exception e11) {
                th2 = e11;
                th3 = e10;
                h3Var = new h3(null);
            }
        }
        f14014q = h3Var;
        if (th2 != null) {
            b4 b4Var = f14013p;
            Logger a10 = b4Var.a();
            Level level = Level.SEVERE;
            a10.logp(level, "com.google.common.util.concurrent.AbstractFuture", "<clinit>", "UnsafeAtomicHelper is broken!", th3);
            b4Var.a().logp(level, "com.google.common.util.concurrent.AbstractFuture", "<clinit>", "AtomicReferenceFieldUpdaterAtomicHelper is broken!", th2);
        }
        f14015r = new Object();
    }

    private static Object n(Future future) {
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

    private final void o(StringBuilder sb2) {
        try {
            Object n10 = n(this);
            sb2.append("SUCCESS, result=[");
            if (n10 == null) {
                sb2.append("null");
            } else if (n10 == this) {
                sb2.append("this future");
            } else {
                sb2.append(n10.getClass().getName());
                sb2.append("@");
                sb2.append(Integer.toHexString(System.identityHashCode(n10)));
            }
            sb2.append("]");
        } catch (CancellationException unused) {
            sb2.append("CANCELLED");
        } catch (ExecutionException e10) {
            sb2.append("FAILURE, cause=[");
            sb2.append(e10.getCause());
            sb2.append("]");
        } catch (Exception e11) {
            sb2.append("UNKNOWN, cause=[");
            sb2.append(e11.getClass());
            sb2.append(" thrown from get()]");
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:6:0x0014, code lost:
        if (r1.isEmpty() != false) goto L16;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final void p(java.lang.StringBuilder r5) {
        /*
            r4 = this;
            int r0 = r5.length()
            java.lang.String r1 = "PENDING"
            r5.append(r1)
            java.lang.String r1 = r4.f()     // Catch: java.lang.StackOverflowError -> L18 java.lang.Exception -> L1a
            r2 = 0
            if (r1 == 0) goto L16
            boolean r3 = r1.isEmpty()     // Catch: java.lang.StackOverflowError -> L18 java.lang.Exception -> L1a
            if (r3 == 0) goto L29
        L16:
            r1 = r2
            goto L29
        L18:
            r1 = move-exception
            goto L1b
        L1a:
            r1 = move-exception
        L1b:
            java.lang.Class r1 = r1.getClass()
            java.lang.String r1 = java.lang.String.valueOf(r1)
            java.lang.String r2 = "Exception thrown from implementation: "
            java.lang.String r1 = r2.concat(r1)
        L29:
            if (r1 == 0) goto L38
            java.lang.String r2 = ", info=["
            r5.append(r2)
            r5.append(r1)
            java.lang.String r1 = "]"
            r5.append(r1)
        L38:
            boolean r1 = r4.isDone()
            if (r1 == 0) goto L48
            int r1 = r5.length()
            r5.delete(r0, r1)
            r4.o(r5)
        L48:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.gms.internal.fido.l3.p(java.lang.StringBuilder):void");
    }

    private static void q(l3 l3Var, boolean z10) {
        for (k3 b10 = f14014q.b(l3Var, k3.f13999c); b10 != null; b10 = b10.f14001b) {
            Thread thread = b10.f14000a;
            if (thread != null) {
                b10.f14000a = null;
                LockSupport.unpark(thread);
            }
        }
        l3Var.j();
        g3 a10 = f14014q.a(l3Var, g3.f13967d);
        g3 g3Var = null;
        while (a10 != null) {
            g3 g3Var2 = a10.f13970c;
            a10.f13970c = g3Var;
            g3Var = a10;
            a10 = g3Var2;
        }
        while (g3Var != null) {
            Runnable runnable = g3Var.f13968a;
            g3 g3Var3 = g3Var.f13970c;
            Objects.requireNonNull(runnable);
            Runnable runnable2 = runnable;
            Executor executor = g3Var.f13969b;
            Objects.requireNonNull(executor);
            Executor executor2 = executor;
            try {
                executor2.execute(runnable2);
            } catch (Exception e10) {
                f14013p.a().logp(Level.SEVERE, "com.google.common.util.concurrent.AbstractFuture", "executeListener", "RuntimeException while executing runnable " + String.valueOf(runnable2) + " with executor " + String.valueOf(executor2), (Throwable) e10);
            }
            g3Var = g3Var3;
        }
    }

    private final void r(k3 k3Var) {
        k3Var.f14000a = null;
        while (true) {
            k3 k3Var2 = this.f14018i;
            if (k3Var2 != k3.f13999c) {
                k3 k3Var3 = null;
                while (k3Var2 != null) {
                    k3 k3Var4 = k3Var2.f14001b;
                    if (k3Var2.f14000a != null) {
                        k3Var3 = k3Var2;
                    } else if (k3Var3 != null) {
                        k3Var3.f14001b = k3Var4;
                        if (k3Var3.f14000a == null) {
                            break;
                        }
                    } else if (!f14014q.f(this, k3Var2, k3Var4)) {
                        break;
                    }
                    k3Var2 = k3Var4;
                }
                return;
            }
            return;
        }
    }

    private static final Object s(Object obj) {
        if (!(obj instanceof e3)) {
            if (!(obj instanceof f3)) {
                if (obj == f14015r) {
                    return null;
                }
                return obj;
            }
            throw new ExecutionException(((f3) obj).f13965a);
        }
        Throwable th2 = ((e3) obj).f13954b;
        CancellationException cancellationException = new CancellationException("Task was cancelled.");
        cancellationException.initCause(th2);
        throw cancellationException;
    }

    @Override // java.util.concurrent.Future
    public final boolean cancel(boolean z10) {
        boolean z11;
        e3 e3Var;
        Object obj = this.f14016d;
        if (obj == null) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (z11) {
            if (f14012o) {
                e3Var = new e3(z10, new CancellationException("Future.cancel() was called."));
            } else {
                if (z10) {
                    e3Var = e3.f13951c;
                } else {
                    e3Var = e3.f13952d;
                }
                Objects.requireNonNull(e3Var);
            }
            if (f14014q.e(this, obj, e3Var)) {
                q(this, z10);
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public String f() {
        if (this instanceof ScheduledFuture) {
            long delay = ((ScheduledFuture) this).getDelay(TimeUnit.MILLISECONDS);
            return "remaining delay=[" + delay + " ms]";
        }
        return null;
    }

    @Override // java.util.concurrent.Future
    public final Object get() {
        Object obj;
        boolean z10;
        if (!Thread.interrupted()) {
            Object obj2 = this.f14016d;
            if (obj2 != null) {
                return s(obj2);
            }
            k3 k3Var = this.f14018i;
            if (k3Var != k3.f13999c) {
                k3 k3Var2 = new k3();
                do {
                    c3 c3Var = f14014q;
                    c3Var.c(k3Var2, k3Var);
                    if (c3Var.f(this, k3Var, k3Var2)) {
                        do {
                            LockSupport.park(this);
                            if (!Thread.interrupted()) {
                                obj = this.f14016d;
                                if (obj != null) {
                                    z10 = true;
                                    continue;
                                } else {
                                    z10 = false;
                                    continue;
                                }
                            } else {
                                r(k3Var2);
                                throw new InterruptedException();
                            }
                        } while (!z10);
                        return s(obj);
                    }
                    k3Var = this.f14018i;
                } while (k3Var != k3.f13999c);
                Object obj3 = this.f14016d;
                Objects.requireNonNull(obj3);
                return s(obj3);
            }
            Object obj32 = this.f14016d;
            Objects.requireNonNull(obj32);
            return s(obj32);
        }
        throw new InterruptedException();
    }

    @Override // java.util.concurrent.Future
    public final boolean isCancelled() {
        return this.f14016d instanceof e3;
    }

    @Override // java.util.concurrent.Future
    public final boolean isDone() {
        return this.f14016d != null;
    }

    protected void j() {
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean k(Object obj) {
        if (obj == null) {
            obj = f14015r;
        }
        if (!f14014q.e(this, null, obj)) {
            return false;
        }
        q(this, false);
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean l(Throwable th2) {
        if (!f14014q.e(this, null, new f3(th2))) {
            return false;
        }
        q(this, false);
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean m() {
        Object obj = this.f14016d;
        if ((obj instanceof e3) && ((e3) obj).f13953a) {
            return true;
        }
        return false;
    }

    public final String toString() {
        StringBuilder sb2 = new StringBuilder();
        if (getClass().getName().startsWith("com.google.common.util.concurrent.")) {
            sb2.append(getClass().getSimpleName());
        } else {
            sb2.append(getClass().getName());
        }
        sb2.append('@');
        sb2.append(Integer.toHexString(System.identityHashCode(this)));
        sb2.append("[status=");
        if (this.f14016d instanceof e3) {
            sb2.append("CANCELLED");
        } else if (isDone()) {
            o(sb2);
        } else {
            p(sb2);
        }
        sb2.append("]");
        return sb2.toString();
    }

    @Override // java.util.concurrent.Future
    public final Object get(long j10, TimeUnit timeUnit) {
        long nanos = timeUnit.toNanos(j10);
        if (!Thread.interrupted()) {
            Object obj = this.f14016d;
            boolean z10 = true;
            if (obj != null) {
                return s(obj);
            }
            long nanoTime = nanos > 0 ? System.nanoTime() + nanos : 0L;
            if (nanos >= 1000) {
                k3 k3Var = this.f14018i;
                if (k3Var != k3.f13999c) {
                    k3 k3Var2 = new k3();
                    do {
                        c3 c3Var = f14014q;
                        c3Var.c(k3Var2, k3Var);
                        if (c3Var.f(this, k3Var, k3Var2)) {
                            do {
                                LockSupport.parkNanos(this, Math.min(nanos, 2147483647999999999L));
                                if (!Thread.interrupted()) {
                                    Object obj2 = this.f14016d;
                                    if (obj2 != null) {
                                        return s(obj2);
                                    }
                                    nanos = nanoTime - System.nanoTime();
                                } else {
                                    r(k3Var2);
                                    throw new InterruptedException();
                                }
                            } while (nanos >= 1000);
                            r(k3Var2);
                        } else {
                            k3Var = this.f14018i;
                        }
                    } while (k3Var != k3.f13999c);
                    Object obj3 = this.f14016d;
                    Objects.requireNonNull(obj3);
                    return s(obj3);
                }
                Object obj32 = this.f14016d;
                Objects.requireNonNull(obj32);
                return s(obj32);
            }
            while (nanos > 0) {
                Object obj4 = this.f14016d;
                if (obj4 != null) {
                    return s(obj4);
                }
                if (!Thread.interrupted()) {
                    nanos = nanoTime - System.nanoTime();
                } else {
                    throw new InterruptedException();
                }
            }
            String l3Var = toString();
            String obj5 = timeUnit.toString();
            Locale locale = Locale.ROOT;
            String lowerCase = obj5.toLowerCase(locale);
            String str = "Waited " + j10 + " " + timeUnit.toString().toLowerCase(locale);
            if (nanos + 1000 < 0) {
                String concat = str.concat(" (plus ");
                long j11 = -nanos;
                long convert = timeUnit.convert(j11, TimeUnit.NANOSECONDS);
                long nanos2 = j11 - timeUnit.toNanos(convert);
                int i10 = (convert > 0L ? 1 : (convert == 0L ? 0 : -1));
                if (i10 != 0 && nanos2 <= 1000) {
                    z10 = false;
                }
                if (i10 > 0) {
                    String str2 = concat + convert + " " + lowerCase;
                    if (z10) {
                        str2 = str2.concat(",");
                    }
                    concat = str2.concat(" ");
                }
                if (z10) {
                    concat = concat + nanos2 + " nanoseconds ";
                }
                str = concat.concat("delay)");
            }
            if (isDone()) {
                throw new TimeoutException(str.concat(" but future completed as timeout expired"));
            }
            throw new TimeoutException(str + " for " + l3Var);
        }
        throw new InterruptedException();
    }
}
