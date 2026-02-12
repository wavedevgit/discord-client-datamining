package com.airbnb.lottie;

import android.os.Handler;
import android.os.Looper;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;
import java.util.concurrent.FutureTask;
import l5.c0;
import l5.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p {

    /* renamed from: e  reason: collision with root package name */
    public static Executor f8506e = Executors.newCachedThreadPool(new y5.e());

    /* renamed from: a  reason: collision with root package name */
    private final Set f8507a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f8508b;

    /* renamed from: c  reason: collision with root package name */
    private final Handler f8509c;

    /* renamed from: d  reason: collision with root package name */
    private volatile c0 f8510d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a extends FutureTask {

        /* renamed from: d  reason: collision with root package name */
        private p f8511d;

        a(p pVar, Callable callable) {
            super(callable);
            this.f8511d = pVar;
        }

        @Override // java.util.concurrent.FutureTask
        protected void done() {
            try {
                if (!isCancelled()) {
                    try {
                        this.f8511d.l((c0) get());
                    } catch (InterruptedException | ExecutionException e10) {
                        this.f8511d.l(new c0(e10));
                    }
                }
            } finally {
                this.f8511d = null;
            }
        }
    }

    public p(Callable callable) {
        this(callable, false);
    }

    private synchronized void f(Throwable th2) {
        ArrayList<y> arrayList = new ArrayList(this.f8508b);
        if (arrayList.isEmpty()) {
            y5.d.d("Lottie encountered an error but no failure listener was added:", th2);
            return;
        }
        for (y yVar : arrayList) {
            yVar.onResult(th2);
        }
    }

    private void g() {
        if (Looper.myLooper() == Looper.getMainLooper()) {
            h();
        } else {
            this.f8509c.post(new Runnable() { // from class: l5.d0
                @Override // java.lang.Runnable
                public final void run() {
                    com.airbnb.lottie.p.this.h();
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void h() {
        c0 c0Var = this.f8510d;
        if (c0Var == null) {
            return;
        }
        if (c0Var.b() != null) {
            i(c0Var.b());
        } else {
            f(c0Var.a());
        }
    }

    private synchronized void i(Object obj) {
        for (y yVar : new ArrayList(this.f8507a)) {
            yVar.onResult(obj);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void l(c0 c0Var) {
        if (this.f8510d == null) {
            this.f8510d = c0Var;
            g();
            return;
        }
        throw new IllegalStateException("A task may only be set once.");
    }

    public synchronized p c(y yVar) {
        try {
            c0 c0Var = this.f8510d;
            if (c0Var != null && c0Var.a() != null) {
                yVar.onResult(c0Var.a());
            }
            this.f8508b.add(yVar);
        } catch (Throwable th2) {
            throw th2;
        }
        return this;
    }

    public synchronized p d(y yVar) {
        try {
            c0 c0Var = this.f8510d;
            if (c0Var != null && c0Var.b() != null) {
                yVar.onResult(c0Var.b());
            }
            this.f8507a.add(yVar);
        } catch (Throwable th2) {
            throw th2;
        }
        return this;
    }

    public c0 e() {
        return this.f8510d;
    }

    public synchronized p j(y yVar) {
        this.f8508b.remove(yVar);
        return this;
    }

    public synchronized p k(y yVar) {
        this.f8507a.remove(yVar);
        return this;
    }

    public p(Object obj) {
        this.f8507a = new LinkedHashSet(1);
        this.f8508b = new LinkedHashSet(1);
        this.f8509c = new Handler(Looper.getMainLooper());
        this.f8510d = null;
        l(new c0(obj));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(Callable callable, boolean z10) {
        this.f8507a = new LinkedHashSet(1);
        this.f8508b = new LinkedHashSet(1);
        this.f8509c = new Handler(Looper.getMainLooper());
        this.f8510d = null;
        if (z10) {
            try {
                l((c0) callable.call());
                return;
            } catch (Throwable th2) {
                l(new c0(th2));
                return;
            }
        }
        f8506e.execute(new a(this, callable));
    }
}
