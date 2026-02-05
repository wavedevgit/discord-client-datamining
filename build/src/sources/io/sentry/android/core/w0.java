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
    private static w0 f28292p = new w0();

    /* renamed from: e  reason: collision with root package name */
    private volatile b f28294e;

    /* renamed from: d  reason: collision with root package name */
    private final io.sentry.util.a f28293d = new io.sentry.util.a();

    /* renamed from: i  reason: collision with root package name */
    private a2 f28295i = new a2();

    /* renamed from: o  reason: collision with root package name */
    private volatile Boolean f28296o = null;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        void a();

        void k();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public final class b implements DefaultLifecycleObserver {

        /* renamed from: d  reason: collision with root package name */
        final List f28297d = new a();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class a extends CopyOnWriteArrayList {
            a() {
            }

            @Override // java.util.concurrent.CopyOnWriteArrayList, java.util.List, java.util.Collection
            /* renamed from: b */
            public boolean add(a aVar) {
                boolean add = super.add(aVar);
                if (Boolean.FALSE.equals(w0.this.f28296o)) {
                    aVar.a();
                    return add;
                }
                if (Boolean.TRUE.equals(w0.this.f28296o)) {
                    aVar.k();
                }
                return add;
            }
        }

        public b() {
        }

        @Override // androidx.lifecycle.DefaultLifecycleObserver
        public void onStart(LifecycleOwner lifecycleOwner) {
            w0.this.W(false);
            for (a aVar : this.f28297d) {
                aVar.a();
            }
        }

        @Override // androidx.lifecycle.DefaultLifecycleObserver
        public void onStop(LifecycleOwner lifecycleOwner) {
            w0.this.W(true);
            for (a aVar : this.f28297d) {
                aVar.k();
            }
        }
    }

    private w0() {
    }

    public static w0 E() {
        return f28292p;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void V(b bVar) {
        if (bVar != null) {
            ProcessLifecycleOwner.m().getLifecycle().d(bVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void o(ILogger iLogger) {
        b bVar = this.f28294e;
        if (bVar != null) {
            try {
                ProcessLifecycleOwner.m().getLifecycle().a(bVar);
            } catch (Throwable th2) {
                this.f28294e = null;
                iLogger.b(SentryLevel.ERROR, "AppState failed to get Lifecycle and could not install lifecycle observer.", th2);
            }
        }
    }

    private void y(final ILogger iLogger) {
        if (this.f28294e == null) {
            try {
                ProcessLifecycleOwner.b bVar = ProcessLifecycleOwner.f4557t;
                this.f28294e = new b();
                if (io.sentry.android.core.internal.util.j.e().a()) {
                    o(iLogger);
                } else {
                    this.f28295i.b(new Runnable() { // from class: io.sentry.android.core.u0
                        @Override // java.lang.Runnable
                        public final void run() {
                            w0.this.o(iLogger);
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

    public void C0() {
        if (this.f28294e == null) {
            return;
        }
        io.sentry.a1 a10 = this.f28293d.a();
        try {
            final b bVar = this.f28294e;
            this.f28294e.f28297d.clear();
            this.f28294e = null;
            if (a10 != null) {
                a10.close();
            }
            if (io.sentry.android.core.internal.util.j.e().a()) {
                V(bVar);
            } else {
                this.f28295i.b(new Runnable() { // from class: io.sentry.android.core.v0
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
        return this.f28296o;
    }

    public void L(k7 k7Var) {
        ILogger e10;
        if (this.f28294e == null) {
            io.sentry.a1 a10 = this.f28293d.a();
            try {
                if (k7Var != null) {
                    e10 = k7Var.getLogger();
                } else {
                    e10 = io.sentry.i2.e();
                }
                y(e10);
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
        io.sentry.a1 a10 = this.f28293d.a();
        try {
            if (this.f28294e != null) {
                this.f28294e.f28297d.remove(aVar);
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

    void W(boolean z10) {
        this.f28296o = Boolean.valueOf(z10);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        C0();
    }

    public void m(a aVar) {
        io.sentry.a1 a10 = this.f28293d.a();
        try {
            y(io.sentry.i2.e());
            if (this.f28294e != null) {
                this.f28294e.f28297d.add(aVar);
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
