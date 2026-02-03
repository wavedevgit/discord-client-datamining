package io.sentry.android.core;

import android.app.Application;
import android.content.Context;
import android.content.pm.ProviderInfo;
import android.net.Uri;
import android.os.Process;
import android.os.SystemClock;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.c5;
import io.sentry.k7;
import io.sentry.q6;
import io.sentry.r8;
import io.sentry.s8;
import io.sentry.util.runtime.a;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStreamReader;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class SentryPerformanceProvider extends n1 {

    /* renamed from: q  reason: collision with root package name */
    private static final long f28765q = SystemClock.uptimeMillis();

    /* renamed from: e  reason: collision with root package name */
    private Application f28766e;

    /* renamed from: i  reason: collision with root package name */
    private final ILogger f28767i;

    /* renamed from: o  reason: collision with root package name */
    private final x0 f28768o;

    /* renamed from: p  reason: collision with root package name */
    private final io.sentry.util.a f28769p = new io.sentry.util.a();

    public SentryPerformanceProvider() {
        z zVar = new z();
        this.f28767i = zVar;
        this.f28768o = new x0(zVar);
    }

    private void b(Context context, c5 c5Var, io.sentry.android.core.performance.h hVar) {
        double d10;
        if (!c5Var.f()) {
            this.f28767i.c(SentryLevel.DEBUG, "App start profiling was not sampled. It will not start.", new Object[0]);
            return;
        }
        v vVar = new v(this.f28768o, new io.sentry.android.core.internal.util.c0(context.getApplicationContext(), this.f28767i, this.f28768o), this.f28767i, c5Var.c(), c5Var.d(), new q6());
        hVar.x(null);
        hVar.w(vVar);
        this.f28767i.c(SentryLevel.DEBUG, "App start continuous profiling started.", new Object[0]);
        k7 empty = k7.empty();
        if (c5Var.f()) {
            d10 = 1.0d;
        } else {
            d10 = 0.0d;
        }
        empty.setProfileSessionSampleRate(Double.valueOf(d10));
        vVar.d(c5Var.a(), new r8(empty));
    }

    private void c(Context context, c5 c5Var, io.sentry.android.core.performance.h hVar) {
        s8 s8Var = new s8(Boolean.valueOf(c5Var.l()), c5Var.e(), Boolean.valueOf(c5Var.i()), c5Var.b());
        hVar.y(s8Var);
        if (s8Var.b().booleanValue() && s8Var.e().booleanValue()) {
            l0 l0Var = new l0(context, this.f28768o, new io.sentry.android.core.internal.util.c0(context, this.f28767i, this.f28768o), this.f28767i, c5Var.c(), c5Var.j(), c5Var.d(), new q6());
            hVar.w(null);
            hVar.x(l0Var);
            this.f28767i.c(SentryLevel.DEBUG, "App start profiling started.", new Object[0]);
            l0Var.start();
            return;
        }
        this.f28767i.c(SentryLevel.DEBUG, "App start profiling was not sampled. It will not start.", new Object[0]);
    }

    private void d(io.sentry.android.core.performance.h hVar) {
        final Context context = getContext();
        if (context == null) {
            this.f28767i.c(SentryLevel.FATAL, "App. Context from ContentProvider is null", new Object[0]);
            return;
        }
        File file = new File((File) new io.sentry.android.core.internal.util.h().a(new a.InterfaceC0407a() { // from class: io.sentry.android.core.n2
            @Override // io.sentry.util.runtime.a.InterfaceC0407a
            public final Object run() {
                File f10;
                f10 = g0.f(context);
                return f10;
            }
        }), "app_start_profiling_config");
        if (file.exists() && file.canRead()) {
            try {
                BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(new FileInputStream(file)));
                c5 c5Var = (c5) new io.sentry.x1(k7.empty()).c(bufferedReader, c5.class);
                if (c5Var == null) {
                    this.f28767i.c(SentryLevel.WARNING, "Unable to deserialize the SentryAppStartProfilingOptions. App start profiling will not start.", new Object[0]);
                } else if (c5Var.g() && c5Var.k()) {
                    b(context, c5Var, hVar);
                } else if (!c5Var.j()) {
                    this.f28767i.c(SentryLevel.INFO, "Profiling is not enabled. App start profiling will not start.", new Object[0]);
                } else if (c5Var.h()) {
                    c(context, c5Var, hVar);
                }
                bufferedReader.close();
            } catch (FileNotFoundException e10) {
                this.f28767i.b(SentryLevel.ERROR, "App start profiling config file not found. ", e10);
            } catch (Throwable th2) {
                this.f28767i.b(SentryLevel.ERROR, "Error reading app start profiling config file. ", th2);
            }
        }
    }

    private void e(Context context, io.sentry.android.core.performance.h hVar) {
        hVar.r().t(f28765q);
        if (this.f28768o.d() >= 24) {
            hVar.l().t(Process.getStartUptimeMillis());
        }
        if (context instanceof Application) {
            this.f28766e = (Application) context;
        }
        Application application = this.f28766e;
        if (application == null) {
            return;
        }
        hVar.v(application);
    }

    @Override // android.content.ContentProvider
    public void attachInfo(Context context, ProviderInfo providerInfo) {
        if (!SentryPerformanceProvider.class.getName().equals(providerInfo.authority)) {
            super.attachInfo(context, providerInfo);
            return;
        }
        throw new IllegalStateException("An applicationId is required to fulfill the manifest placeholder.");
    }

    @Override // android.content.ContentProvider
    public String getType(Uri uri) {
        return null;
    }

    @Override // android.content.ContentProvider
    public boolean onCreate() {
        io.sentry.android.core.performance.h q10 = io.sentry.android.core.performance.h.q();
        e(getContext(), q10);
        d(q10);
        return true;
    }

    @Override // android.content.ContentProvider
    public void shutdown() {
        io.sentry.a1 a10 = io.sentry.android.core.performance.h.B.a();
        try {
            io.sentry.f1 j10 = io.sentry.android.core.performance.h.q().j();
            if (j10 != null) {
                j10.close();
            }
            io.sentry.l0 i10 = io.sentry.android.core.performance.h.q().i();
            if (i10 != null) {
                i10.c(true);
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
