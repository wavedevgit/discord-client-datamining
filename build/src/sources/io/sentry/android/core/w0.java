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
    private static w0 f29234p = new w0();

    /* renamed from: e  reason: collision with root package name */
    private volatile b f29236e;

    /* renamed from: d  reason: collision with root package name */
    private final io.sentry.util.a f29235d = new io.sentry.util.a();

    /* renamed from: i  reason: collision with root package name */
    private a2 f29237i = new a2();

    /* renamed from: o  reason: collision with root package name */
    private volatile Boolean f29238o = null;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        void a();

        void l();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public final class b implements DefaultLifecycleObserver {

        /* renamed from: d  reason: collision with root package name */
        final List f29239d = new a();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class a extends CopyOnWriteArrayList {
            a() {
            }

            @Override // java.util.concurrent.CopyOnWriteArrayList, java.util.List, java.util.Collection
            /* renamed from: b */
            public boolean add(a aVar) {
                boolean add = super.add(aVar);
                if (Boolean.FALSE.equals(w0.this.f29238o)) {
                    aVar.a();
                    return add;
                }
                if (Boolean.TRUE.equals(w0.this.f29238o)) {
                    aVar.l();
                }
                return add;
            }
        }

        public b() {
        }

        @Override // androidx.lifecycle.DefaultLifecycleObserver
        public void onStart(LifecycleOwner lifecycleOwner) {
            w0.this.A0(false);
            for (a aVar : this.f29239d) {
                aVar.a();
            }
        }

        @Override // androidx.lifecycle.DefaultLifecycleObserver
        public void onStop(LifecycleOwner lifecycleOwner) {
            w0.this.A0(true);
            for (a aVar : this.f29239d) {
                aVar.l();
            }
        }
    }

    private w0() {
    }

    private void B(final ILogger iLogger) {
        if (this.f29236e == null) {
            try {
                ProcessLifecycleOwner.b bVar = ProcessLifecycleOwner.f4445t;
                this.f29236e = new b();
                if (io.sentry.android.core.internal.util.j.e().a()) {
                    x(iLogger);
                } else {
                    this.f29237i.b(new Runnable() { // from class: io.sentry.android.core.u0
                        @Override // java.lang.Runnable
                        public final void run() {
                            w0.this.x(iLogger);
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

    public static w0 E() {
        return f29234p;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void V(b bVar) {
        if (bVar != null) {
            ProcessLifecycleOwner.m().getLifecycle().d(bVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void x(ILogger iLogger) {
        b bVar = this.f29236e;
        if (bVar != null) {
            try {
                ProcessLifecycleOwner.m().getLifecycle().a(bVar);
            } catch (Throwable th2) {
                this.f29236e = null;
                iLogger.b(SentryLevel.ERROR, "AppState failed to get Lifecycle and could not install lifecycle observer.", th2);
            }
        }
    }

    void A0(boolean z10) {
        this.f29238o = Boolean.valueOf(z10);
    }

    public void C0() {
        if (this.f29236e == null) {
            return;
        }
        io.sentry.a1 a10 = this.f29235d.a();
        try {
            final b bVar = this.f29236e;
            this.f29236e.f29239d.clear();
            this.f29236e = null;
            if (a10 != null) {
                a10.close();
            }
            if (io.sentry.android.core.internal.util.j.e().a()) {
                V(bVar);
            } else {
                this.f29237i.b(new Runnable() { // from class: io.sentry.android.core.v0
                    @Override // java.lang.Runnable
                    public final void run() {
                        w0.this.V(bVar);
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

    public Boolean F() {
        return this.f29238o;
    }

    public void L(k7 k7Var) {
        ILogger e10;
        if (this.f29236e == null) {
            io.sentry.a1 a10 = this.f29235d.a();
            try {
                if (k7Var != null) {
                    e10 = k7Var.getLogger();
                } else {
                    e10 = io.sentry.i2.e();
                }
                B(e10);
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

    public void N(a aVar) {
        io.sentry.a1 a10 = this.f29235d.a();
        try {
            if (this.f29236e != null) {
                this.f29236e.f29239d.remove(aVar);
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

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        C0();
    }

    public void n(a aVar) {
        io.sentry.a1 a10 = this.f29235d.a();
        try {
            B(io.sentry.i2.e());
            if (this.f29236e != null) {
                this.f29236e.f29239d.add(aVar);
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
}
