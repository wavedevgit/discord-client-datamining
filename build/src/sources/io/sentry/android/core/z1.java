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
    private final AtomicLong f28306d;

    /* renamed from: e  reason: collision with root package name */
    private final long f28307e;

    /* renamed from: i  reason: collision with root package name */
    private TimerTask f28308i;

    /* renamed from: o  reason: collision with root package name */
    private final io.sentry.util.r f28309o;

    /* renamed from: p  reason: collision with root package name */
    private final io.sentry.util.a f28310p;

    /* renamed from: q  reason: collision with root package name */
    private final io.sentry.w0 f28311q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f28312r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f28313s;

    /* renamed from: t  reason: collision with root package name */
    private final io.sentry.transport.p f28314t;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends TimerTask {
        a() {
        }

        @Override // java.util.TimerTask, java.lang.Runnable
        public void run() {
            if (z1.this.f28312r) {
                z1.this.f28311q.n();
            }
            z1.this.f28311q.b().getReplayController().stop();
            z1.this.f28311q.b().getContinuousProfiler().c(false);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z1(io.sentry.w0 w0Var, long j10, boolean z10, boolean z11) {
        this(w0Var, j10, z10, z11, io.sentry.transport.n.b());
    }

    public static /* synthetic */ void b(z1 z1Var, IScope iScope) {
        z7 K;
        if (z1Var.f28306d.get() == 0 && (K = iScope.K()) != null && K.k() != null) {
            z1Var.f28306d.set(K.k().getTime());
        }
    }

    public static /* synthetic */ Timer c() {
        return new Timer(true);
    }

    private void f(String str) {
        if (this.f28313s) {
            Breadcrumb breadcrumb = new Breadcrumb();
            breadcrumb.E("navigation");
            breadcrumb.A("state", str);
            breadcrumb.z("app.lifecycle");
            breadcrumb.B(SentryLevel.INFO);
            this.f28311q.e(breadcrumb);
        }
    }

    private void g() {
        io.sentry.a1 a10 = this.f28310p.a();
        try {
            TimerTask timerTask = this.f28308i;
            if (timerTask != null) {
                timerTask.cancel();
                this.f28308i = null;
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
        io.sentry.a1 a10 = this.f28310p.a();
        try {
            g();
            this.f28308i = new a();
            ((Timer) this.f28309o.a()).schedule(this.f28308i, this.f28307e);
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
        long a10 = this.f28314t.a();
        this.f28311q.p(new b4() { // from class: io.sentry.android.core.y1
            @Override // io.sentry.b4
            public final void a(IScope iScope) {
                z1.b(z1.this, iScope);
            }
        });
        long j10 = this.f28306d.get();
        if (j10 == 0 || j10 + this.f28307e <= a10) {
            if (this.f28312r) {
                this.f28311q.r();
            }
            this.f28311q.b().getReplayController().start();
        }
        this.f28311q.b().getReplayController().i();
        this.f28306d.set(a10);
    }

    @Override // io.sentry.android.core.w0.a
    public void a() {
        i();
        f("foreground");
    }

    @Override // io.sentry.android.core.w0.a
    public void k() {
        this.f28306d.set(this.f28314t.a());
        this.f28311q.b().getReplayController().b();
        h();
        f(AppStateModule.APP_STATE_BACKGROUND);
    }

    z1(io.sentry.w0 w0Var, long j10, boolean z10, boolean z11, io.sentry.transport.p pVar) {
        this.f28306d = new AtomicLong(0L);
        this.f28309o = new io.sentry.util.r(new r.a() { // from class: io.sentry.android.core.x1
            @Override // io.sentry.util.r.a
            public final Object a() {
                return z1.c();
            }
        });
        this.f28310p = new io.sentry.util.a();
        this.f28307e = j10;
        this.f28312r = z10;
        this.f28313s = z11;
        this.f28311q = w0Var;
        this.f28314t = pVar;
    }
}
