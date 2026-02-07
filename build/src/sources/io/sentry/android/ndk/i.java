package io.sentry.android.ndk;

import io.sentry.Breadcrumb;
import io.sentry.IScope;
import io.sentry.SentryLevel;
import io.sentry.c4;
import io.sentry.e8;
import io.sentry.k7;
import io.sentry.ndk.NativeScope;
import io.sentry.protocol.h0;
import io.sentry.util.y;
import java.util.Locale;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i extends c4 {

    /* renamed from: a  reason: collision with root package name */
    private final k7 f27527a;

    /* renamed from: b  reason: collision with root package name */
    private final io.sentry.ndk.a f27528b;

    public i(k7 k7Var) {
        this(k7Var, new NativeScope());
    }

    public static /* synthetic */ void n(i iVar, h0 h0Var) {
        if (h0Var == null) {
            iVar.f27528b.e();
        } else {
            iVar.f27528b.g(h0Var.i(), h0Var.h(), h0Var.j(), h0Var.k());
        }
    }

    public static /* synthetic */ void r(i iVar, Breadcrumb breadcrumb) {
        String str;
        iVar.getClass();
        String str2 = null;
        if (breadcrumb.q() != null) {
            str = breadcrumb.q().name().toLowerCase(Locale.ROOT);
        } else {
            str = null;
        }
        String h10 = io.sentry.k.h(breadcrumb.t());
        try {
            Map o10 = breadcrumb.o();
            if (!o10.isEmpty()) {
                str2 = iVar.f27527a.getSerializer().f(o10);
            }
        } catch (Throwable th2) {
            iVar.f27527a.getLogger().a(SentryLevel.ERROR, th2, "Breadcrumb data is not serializable.", new Object[0]);
        }
        iVar.f27528b.c(str, breadcrumb.r(), breadcrumb.m(), breadcrumb.u(), h10, str2);
    }

    @Override // io.sentry.c4, io.sentry.v0
    public void a(final String str, final String str2) {
        try {
            this.f27527a.getExecutorService().submit(new Runnable() { // from class: io.sentry.android.ndk.e
                @Override // java.lang.Runnable
                public final void run() {
                    i.this.f27528b.a(str, str2);
                }
            });
        } catch (Throwable th2) {
            this.f27527a.getLogger().a(SentryLevel.ERROR, th2, "Scope sync setTag(%s) has an error.", str);
        }
    }

    @Override // io.sentry.c4, io.sentry.v0
    public void b(final String str) {
        try {
            this.f27527a.getExecutorService().submit(new Runnable() { // from class: io.sentry.android.ndk.f
                @Override // java.lang.Runnable
                public final void run() {
                    i.this.f27528b.b(str);
                }
            });
        } catch (Throwable th2) {
            this.f27527a.getLogger().a(SentryLevel.ERROR, th2, "Scope sync removeExtra(%s) has an error.", str);
        }
    }

    @Override // io.sentry.c4, io.sentry.v0
    public void d(final String str) {
        try {
            this.f27527a.getExecutorService().submit(new Runnable() { // from class: io.sentry.android.ndk.d
                @Override // java.lang.Runnable
                public final void run() {
                    i.this.f27528b.d(str);
                }
            });
        } catch (Throwable th2) {
            this.f27527a.getLogger().a(SentryLevel.ERROR, th2, "Scope sync removeTag(%s) has an error.", str);
        }
    }

    @Override // io.sentry.v0
    public void e(final Breadcrumb breadcrumb) {
        try {
            this.f27527a.getExecutorService().submit(new Runnable() { // from class: io.sentry.android.ndk.b
                @Override // java.lang.Runnable
                public final void run() {
                    i.r(i.this, breadcrumb);
                }
            });
        } catch (Throwable th2) {
            this.f27527a.getLogger().a(SentryLevel.ERROR, th2, "Scope sync addBreadcrumb has an error.", new Object[0]);
        }
    }

    @Override // io.sentry.c4, io.sentry.v0
    public void f(final String str, final String str2) {
        try {
            this.f27527a.getExecutorService().submit(new Runnable() { // from class: io.sentry.android.ndk.c
                @Override // java.lang.Runnable
                public final void run() {
                    i.this.f27528b.f(str, str2);
                }
            });
        } catch (Throwable th2) {
            this.f27527a.getLogger().a(SentryLevel.ERROR, th2, "Scope sync setExtra(%s) has an error.", str);
        }
    }

    @Override // io.sentry.v0
    public void i(final e8 e8Var, IScope iScope) {
        if (e8Var == null) {
            return;
        }
        try {
            this.f27527a.getExecutorService().submit(new Runnable() { // from class: io.sentry.android.ndk.h
                @Override // java.lang.Runnable
                public final void run() {
                    i.this.f27528b.h(r1.p().toString(), e8Var.m().toString());
                }
            });
        } catch (Throwable th2) {
            this.f27527a.getLogger().a(SentryLevel.ERROR, th2, "Scope sync setTrace failed.", new Object[0]);
        }
    }

    @Override // io.sentry.v0
    public void k(final h0 h0Var) {
        try {
            this.f27527a.getExecutorService().submit(new Runnable() { // from class: io.sentry.android.ndk.g
                @Override // java.lang.Runnable
                public final void run() {
                    i.n(i.this, h0Var);
                }
            });
        } catch (Throwable th2) {
            this.f27527a.getLogger().a(SentryLevel.ERROR, th2, "Scope sync setUser has an error.", new Object[0]);
        }
    }

    i(k7 k7Var, io.sentry.ndk.a aVar) {
        this.f27527a = (k7) y.c(k7Var, "The SentryOptions object is required.");
        this.f27528b = (io.sentry.ndk.a) y.c(aVar, "The NativeScope object is required.");
    }
}
