package com.google.android.gms.internal.fido;

import java.util.concurrent.atomic.AtomicReference;
import java.util.concurrent.locks.LockSupport;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a4 extends AtomicReference implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private static final Runnable f14601d = new y3(null);

    /* renamed from: e  reason: collision with root package name */
    private static final Runnable f14602e = new y3(null);

    private final void g(Thread thread) {
        Runnable runnable = (Runnable) get();
        x3 x3Var = null;
        boolean z10 = false;
        int i10 = 0;
        while (true) {
            if (!(runnable instanceof x3)) {
                if (runnable != f14602e) {
                    break;
                }
            } else {
                x3Var = (x3) runnable;
            }
            i10++;
            if (i10 > 1000) {
                Runnable runnable2 = f14602e;
                if (runnable == runnable2 || compareAndSet(runnable, runnable2)) {
                    if (Thread.interrupted() || z10) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    LockSupport.park(x3Var);
                }
            } else {
                Thread.yield();
            }
            runnable = (Runnable) get();
        }
        if (z10) {
            thread.interrupt();
        }
    }

    abstract Object a();

    abstract String b();

    abstract void c(Throwable th2);

    abstract void d(Object obj);

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void e() {
        Runnable runnable = (Runnable) get();
        if (runnable instanceof Thread) {
            x3 x3Var = new x3(this, null);
            super/*java.util.concurrent.locks.AbstractOwnableSynchronizer*/.setExclusiveOwnerThread(Thread.currentThread());
            if (compareAndSet(runnable, x3Var)) {
                try {
                    Thread thread = (Thread) runnable;
                    thread.interrupt();
                    if (((Runnable) getAndSet(f14601d)) == f14602e) {
                        LockSupport.unpark(thread);
                    }
                } catch (Throwable th2) {
                    if (((Runnable) getAndSet(f14601d)) == f14602e) {
                        LockSupport.unpark((Thread) runnable);
                    }
                    throw th2;
                }
            }
        }
    }

    abstract boolean f();

    @Override // java.lang.Runnable
    public final void run() {
        Thread currentThread = Thread.currentThread();
        Object obj = null;
        if (compareAndSet(null, currentThread)) {
            boolean f10 = f();
            if (!f10) {
                try {
                    obj = a();
                } catch (Throwable th2) {
                    try {
                        if (th2 instanceof InterruptedException) {
                            Thread.currentThread().interrupt();
                        }
                        if (!compareAndSet(currentThread, f14601d)) {
                            g(currentThread);
                        }
                        c(th2);
                        return;
                    } catch (Throwable th3) {
                        if (!compareAndSet(currentThread, f14601d)) {
                            g(currentThread);
                        }
                        d(null);
                        throw th3;
                    }
                }
            }
            if (!compareAndSet(currentThread, f14601d)) {
                g(currentThread);
            }
            if (!f10) {
                d(obj);
            }
        }
    }

    @Override // java.util.concurrent.atomic.AtomicReference
    public final String toString() {
        String str;
        Runnable runnable = (Runnable) get();
        if (runnable == f14601d) {
            str = "running=[DONE]";
        } else if (runnable instanceof x3) {
            str = "running=[INTERRUPTED]";
        } else if (runnable instanceof Thread) {
            str = "running=[RUNNING ON " + ((Thread) runnable).getName() + "]";
        } else {
            str = "running=[NOT STARTED YET]";
        }
        return str + ", " + b();
    }
}
