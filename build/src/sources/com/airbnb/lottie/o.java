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
import l5.b0;
import l5.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o {

    /* renamed from: e  reason: collision with root package name */
    public static Executor f7889e = Executors.newCachedThreadPool(new x5.e());

    /* renamed from: a  reason: collision with root package name */
    private final Set f7890a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f7891b;

    /* renamed from: c  reason: collision with root package name */
    private final Handler f7892c;

    /* renamed from: d  reason: collision with root package name */
    private volatile b0 f7893d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a extends FutureTask {

        /* renamed from: d  reason: collision with root package name */
        private o f7894d;

        a(o oVar, Callable callable) {
            super(callable);
            this.f7894d = oVar;
        }

        @Override // java.util.concurrent.FutureTask
        protected void done() {
            try {
                if (!isCancelled()) {
                    try {
                        this.f7894d.l((b0) get());
                    } catch (InterruptedException | ExecutionException e10) {
                        this.f7894d.l(new b0(e10));
                    }
                }
            } finally {
                this.f7894d = null;
            }
        }
    }

    public o(Callable callable) {
        this(callable, false);
    }

    private synchronized void f(Throwable th2) {
        ArrayList<x> arrayList = new ArrayList(this.f7891b);
        if (arrayList.isEmpty()) {
            x5.d.d("Lottie encountered an error but no failure listener was added:", th2);
            return;
        }
        for (x xVar : arrayList) {
            xVar.onResult(th2);
        }
    }

    private void g() {
        if (Looper.myLooper() == Looper.getMainLooper()) {
            h();
        } else {
            this.f7892c.post(new Runnable() { // from class: l5.c0
                @Override // java.lang.Runnable
                public final void run() {
                    com.airbnb.lottie.o.this.h();
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void h() {
        b0 b0Var = this.f7893d;
        if (b0Var == null) {
            return;
        }
        if (b0Var.b() != null) {
            i(b0Var.b());
        } else {
            f(b0Var.a());
        }
    }

    private synchronized void i(Object obj) {
        for (x xVar : new ArrayList(this.f7890a)) {
            xVar.onResult(obj);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void l(b0 b0Var) {
        if (this.f7893d == null) {
            this.f7893d = b0Var;
            g();
            return;
        }
        throw new IllegalStateException("A task may only be set once.");
    }

    public synchronized o c(x xVar) {
        try {
            b0 b0Var = this.f7893d;
            if (b0Var != null && b0Var.a() != null) {
                xVar.onResult(b0Var.a());
            }
            this.f7891b.add(xVar);
        } catch (Throwable th2) {
            throw th2;
        }
        return this;
    }

    public synchronized o d(x xVar) {
        try {
            b0 b0Var = this.f7893d;
            if (b0Var != null && b0Var.b() != null) {
                xVar.onResult(b0Var.b());
            }
            this.f7890a.add(xVar);
        } catch (Throwable th2) {
            throw th2;
        }
        return this;
    }

    public b0 e() {
        return this.f7893d;
    }

    public synchronized o j(x xVar) {
        this.f7891b.remove(xVar);
        return this;
    }

    public synchronized o k(x xVar) {
        this.f7890a.remove(xVar);
        return this;
    }

    public o(Object obj) {
        this.f7890a = new LinkedHashSet(1);
        this.f7891b = new LinkedHashSet(1);
        this.f7892c = new Handler(Looper.getMainLooper());
        this.f7893d = null;
        l(new b0(obj));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(Callable callable, boolean z10) {
        this.f7890a = new LinkedHashSet(1);
        this.f7891b = new LinkedHashSet(1);
        this.f7892c = new Handler(Looper.getMainLooper());
        this.f7893d = null;
        if (z10) {
            try {
                l((b0) callable.call());
                return;
            } catch (Throwable th2) {
                l(new b0(th2));
                return;
            }
        }
        f7889e.execute(new a(this, callable));
    }
}
