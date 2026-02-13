package io.sentry.android.core;

import androidx.lifecycle.DefaultLifecycleObserver;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.ProcessLifecycleOwner;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.k7;
import java.io.Closeable;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w0 implements Closeable {

    /* renamed from: p  reason: collision with root package name */
    private static w0 f29188p = new w0();

    /* renamed from: e  reason: collision with root package name */
    private volatile b f29190e;

    /* renamed from: d  reason: collision with root package name */
    private final io.sentry.util.a f29189d = new io.sentry.util.a();

    /* renamed from: i  reason: collision with root package name */
    private a2 f29191i = new a2();

    /* renamed from: o  reason: collision with root package name */
    private volatile Boolean f29192o = null;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        void a();

        void i();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public final class b implements DefaultLifecycleObserver {

        /* renamed from: d  reason: collision with root package name */
        final List f29193d = new a();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class a extends CopyOnWriteArrayList {
            a() {
            }

            @Override // java.util.concurrent.CopyOnWriteArrayList, java.util.List, java.util.Collection
            /* renamed from: b */
            public boolean add(a aVar) {
                boolean add = super.add(aVar);
                if (Boolean.FALSE.equals(w0.this.f29192o)) {
                    aVar.a();
                    return add;
                }
                if (Boolean.TRUE.equals(w0.this.f29192o)) {
                    aVar.i();
                }
                return add;
            }
        }

        public b() {
        }

        @Override // androidx.lifecycle.DefaultLifecycleObserver
        public void onStart(LifecycleOwner lifecycleOwner) {
            w0.this.J(false);
            for (a aVar : this.f29193d) {
                aVar.a();
            }
        }

        @Override // androidx.lifecycle.DefaultLifecycleObserver
        public void onStop(LifecycleOwner lifecycleOwner) {
            w0.this.J(true);
            for (a aVar : this.f29193d) {
                aVar.i();
            }
        }
    }

    private w0() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void I(b bVar) {
        if (bVar != null) {
            ProcessLifecycleOwner.m().getLifecycle().d(bVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void n(ILogger iLogger) {
        b bVar = this.f29190e;
        if (bVar != null) {
            try {
                ProcessLifecycleOwner.m().getLifecycle().a(bVar);
            } catch (Throwable th2) {
                this.f29190e = null;
                iLogger.b(SentryLevel.ERROR, "AppState failed to get Lifecycle and could not install lifecycle observer.", th2);
            }
        }
    }

    private void p(final ILogger iLogger) {
        if (this.f29190e == null) {
            try {
                ProcessLifecycleOwner.b bVar = ProcessLifecycleOwner.f4593t;
                this.f29190e = new b();
                if (io.sentry.android.core.internal.util.j.e().a()) {
                    n(iLogger);
                } else {
                    this.f29191i.b(new Runnable() { // from class: io.sentry.android.core.u0
                        @Override // java.lang.Runnable
                        public final void run() {
                            w0.this.n(iLogger);
                        }
                    });
                }
            } catch (ClassNotFoundException unused) {
                iLogger.c(SentryLevel.WARNING, "androidx.lifecycle is not available, some features might not be properly working,e.g. Session Tracking, Network and System Events breadcrumbs, etc.", new Object[0]);
            } catch (Throwable th2) {
                iLogger.b(SentryLevel.ERROR, "AppState could not register lifecycle observer", th2);
            }
        }
    }

    public static w0 s() {
        return f29188p;
    }

    public void C(a aVar) {
        io.sentry.a1 a10 = this.f29189d.a();
        try {
            if (this.f29190e != null) {
                this.f29190e.f29193d.remove(aVar);
            }
            if (a10 != null) {
                a10.close();
            }
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    void J(boolean z10) {
        this.f29192o = Boolean.valueOf(z10);
    }

    public void Q() {
        if (this.f29190e == null) {
            return;
        }
        io.sentry.a1 a10 = this.f29189d.a();
        try {
            final b bVar = this.f29190e;
            this.f29190e.f29193d.clear();
            this.f29190e = null;
            if (a10 != null) {
                a10.close();
            }
            if (io.sentry.android.core.internal.util.j.e().a()) {
                I(bVar);
            } else {
                this.f29191i.b(new Runnable() { // from class: io.sentry.android.core.v0
                    @Override // java.lang.Runnable
                    public final void run() {
                        w0.this.I(bVar);
                    }
                });
            }
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        Q();
    }

    public void m(a aVar) {
        io.sentry.a1 a10 = this.f29189d.a();
        try {
            p(io.sentry.i2.e());
            if (this.f29190e != null) {
                this.f29190e.f29193d.add(aVar);
            }
            if (a10 != null) {
                a10.close();
            }
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    public Boolean y() {
        return this.f29192o;
    }

    public void z(k7 k7Var) {
        ILogger e10;
        if (this.f29190e == null) {
            io.sentry.a1 a10 = this.f29189d.a();
            try {
                if (k7Var != null) {
                    e10 = k7Var.getLogger();
                } else {
                    e10 = io.sentry.i2.e();
                }
                p(e10);
                if (a10 != null) {
                    a10.close();
                }
            } catch (Throwable th2) {
                if (a10 != null) {
                    try {
                        a10.close();
                    } catch (Throwable th3) {
                        th2.addSuppressed(th3);
                    }
                }
                throw th2;
            }
        }
    }
}
