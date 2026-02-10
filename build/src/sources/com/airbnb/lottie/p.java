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
    public static Executor f7928e = Executors.newCachedThreadPool(new y5.e());

    /* renamed from: a  reason: collision with root package name */
    private final Set f7929a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f7930b;

    /* renamed from: c  reason: collision with root package name */
    private final Handler f7931c;

    /* renamed from: d  reason: collision with root package name */
    private volatile c0 f7932d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a extends FutureTask {

        /* renamed from: d  reason: collision with root package name */
        private p f7933d;

        a(p pVar, Callable callable) {
            super(callable);
            this.f7933d = pVar;
        }

        @Override // java.util.concurrent.FutureTask
        protected void done() {
            try {
                if (!isCancelled()) {
                    try {
                        this.f7933d.l((c0) get());
                    } catch (InterruptedException | ExecutionException e10) {
                        this.f7933d.l(new c0(e10));
                    }
                }
            } finally {
                this.f7933d = null;
            }
        }
    }

    public p(Callable callable) {
        this(callable, false);
    }

    private synchronized void f(Throwable th2) {
        ArrayList<y> arrayList = new ArrayList(this.f7930b);
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
            this.f7931c.post(new Runnable() { // from class: l5.d0
                @Override // java.lang.Runnable
                public final void run() {
                    com.airbnb.lottie.p.this.h();
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void h() {
        c0 c0Var = this.f7932d;
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
        for (y yVar : new ArrayList(this.f7929a)) {
            yVar.onResult(obj);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void l(c0 c0Var) {
        if (this.f7932d == null) {
            this.f7932d = c0Var;
            g();
            return;
        }
        throw new IllegalStateException("A task may only be set once.");
    }

    public synchronized p c(y yVar) {
        try {
            c0 c0Var = this.f7932d;
            if (c0Var != null && c0Var.a() != null) {
                yVar.onResult(c0Var.a());
            }
            this.f7930b.add(yVar);
        } catch (Throwable th2) {
            throw th2;
        }
        return this;
    }

    public synchronized p d(y yVar) {
        try {
            c0 c0Var = this.f7932d;
            if (c0Var != null && c0Var.b() != null) {
                yVar.onResult(c0Var.b());
            }
            this.f7929a.add(yVar);
        } catch (Throwable th2) {
            throw th2;
        }
        return this;
    }

    public c0 e() {
        return this.f7932d;
    }

    public synchronized p j(y yVar) {
        this.f7930b.remove(yVar);
        return this;
    }

    public synchronized p k(y yVar) {
        this.f7929a.remove(yVar);
        return this;
    }

    public p(Object obj) {
        this.f7929a = new LinkedHashSet(1);
        this.f7930b = new LinkedHashSet(1);
        this.f7931c = new Handler(Looper.getMainLooper());
        this.f7932d = null;
        l(new c0(obj));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(Callable callable, boolean z10) {
        this.f7929a = new LinkedHashSet(1);
        this.f7930b = new LinkedHashSet(1);
        this.f7931c = new Handler(Looper.getMainLooper());
        this.f7932d = null;
        if (z10) {
            try {
                l((c0) callable.call());
                return;
            } catch (Throwable th2) {
                l(new c0(th2));
                return;
            }
        }
        f7928e.execute(new a(this, callable));
    }
}
