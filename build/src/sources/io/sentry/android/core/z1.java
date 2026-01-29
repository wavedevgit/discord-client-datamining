package io.sentry.android.core;

import com.facebook.react.modules.appstate.AppStateModule;
import io.sentry.Breadcrumb;
import io.sentry.IScope;
import io.sentry.SentryLevel;
import io.sentry.android.core.w0;
import io.sentry.b4;
import io.sentry.util.r;
import io.sentry.z7;
import java.util.Timer;
import java.util.TimerTask;
import java.util.concurrent.atomic.AtomicLong;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z1 implements w0.a {

    /* renamed from: d  reason: collision with root package name */
    private final AtomicLong f29305d;

    /* renamed from: e  reason: collision with root package name */
    private final long f29306e;

    /* renamed from: i  reason: collision with root package name */
    private TimerTask f29307i;

    /* renamed from: o  reason: collision with root package name */
    private final io.sentry.util.r f29308o;

    /* renamed from: p  reason: collision with root package name */
    private final io.sentry.util.a f29309p;

    /* renamed from: q  reason: collision with root package name */
    private final io.sentry.w0 f29310q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f29311r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f29312s;

    /* renamed from: t  reason: collision with root package name */
    private final io.sentry.transport.p f29313t;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends TimerTask {
        a() {
        }

        @Override // java.util.TimerTask, java.lang.Runnable
        public void run() {
            if (z1.this.f29311r) {
                z1.this.f29310q.l();
            }
            z1.this.f29310q.b().getReplayController().stop();
            z1.this.f29310q.b().getContinuousProfiler().c(false);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z1(io.sentry.w0 w0Var, long j10, boolean z10, boolean z11) {
        this(w0Var, j10, z10, z11, io.sentry.transport.n.b());
    }

    public static /* synthetic */ void b(z1 z1Var, IScope iScope) {
        z7 I;
        if (z1Var.f29305d.get() == 0 && (I = iScope.I()) != null && I.k() != null) {
            z1Var.f29305d.set(I.k().getTime());
        }
    }

    public static /* synthetic */ Timer c() {
        return new Timer(true);
    }

    private void f(String str) {
        if (this.f29312s) {
            Breadcrumb breadcrumb = new Breadcrumb();
            breadcrumb.E("navigation");
            breadcrumb.A("state", str);
            breadcrumb.z("app.lifecycle");
            breadcrumb.B(SentryLevel.INFO);
            this.f29310q.e(breadcrumb);
        }
    }

    private void g() {
        io.sentry.a1 a10 = this.f29309p.a();
        try {
            TimerTask timerTask = this.f29307i;
            if (timerTask != null) {
                timerTask.cancel();
                this.f29307i = null;
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

    private void h() {
        io.sentry.a1 a10 = this.f29309p.a();
        try {
            g();
            this.f29307i = new a();
            ((Timer) this.f29308o.a()).schedule(this.f29307i, this.f29306e);
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

    private void i() {
        g();
        long a10 = this.f29313t.a();
        this.f29310q.o(new b4() { // from class: io.sentry.android.core.y1
            @Override // io.sentry.b4
            public final void a(IScope iScope) {
                z1.b(z1.this, iScope);
            }
        });
        long j10 = this.f29305d.get();
        if (j10 == 0 || j10 + this.f29306e <= a10) {
            if (this.f29311r) {
                this.f29310q.p();
            }
            this.f29310q.b().getReplayController().start();
        }
        this.f29310q.b().getReplayController().i();
        this.f29305d.set(a10);
    }

    @Override // io.sentry.android.core.w0.a
    public void a() {
        i();
        f("foreground");
    }

    @Override // io.sentry.android.core.w0.a
    public void l() {
        this.f29305d.set(this.f29313t.a());
        this.f29310q.b().getReplayController().b();
        h();
        f(AppStateModule.APP_STATE_BACKGROUND);
    }

    z1(io.sentry.w0 w0Var, long j10, boolean z10, boolean z11, io.sentry.transport.p pVar) {
        this.f29305d = new AtomicLong(0L);
        this.f29308o = new io.sentry.util.r(new r.a() { // from class: io.sentry.android.core.x1
            @Override // io.sentry.util.r.a
            public final Object a() {
                return z1.c();
            }
        });
        this.f29309p = new io.sentry.util.a();
        this.f29306e = j10;
        this.f29311r = z10;
        this.f29312s = z11;
        this.f29310q = w0Var;
        this.f29313t = pVar;
    }
}
