package io.sentry.android.core;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.Network;
import android.net.NetworkCapabilities;
import io.sentry.Breadcrumb;
import io.sentry.Hint;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.k5;
import io.sentry.k7;
import java.io.Closeable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NetworkBreadcrumbsIntegration implements io.sentry.k1, Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final Context f27186d;

    /* renamed from: e  reason: collision with root package name */
    private final x0 f27187e;

    /* renamed from: i  reason: collision with root package name */
    private final io.sentry.util.a f27188i = new io.sentry.util.a();

    /* renamed from: o  reason: collision with root package name */
    private k7 f27189o;

    /* renamed from: p  reason: collision with root package name */
    volatile b f27190p;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        final int f27191a;

        /* renamed from: b  reason: collision with root package name */
        final int f27192b;

        /* renamed from: c  reason: collision with root package name */
        final int f27193c;

        /* renamed from: d  reason: collision with root package name */
        private long f27194d;

        /* renamed from: e  reason: collision with root package name */
        final boolean f27195e;

        /* renamed from: f  reason: collision with root package name */
        final String f27196f;

        a(NetworkCapabilities networkCapabilities, x0 x0Var, long j10) {
            int i10;
            io.sentry.util.y.c(networkCapabilities, "NetworkCapabilities is required");
            io.sentry.util.y.c(x0Var, "BuildInfoProvider is required");
            this.f27191a = networkCapabilities.getLinkDownstreamBandwidthKbps();
            this.f27192b = networkCapabilities.getLinkUpstreamBandwidthKbps();
            if (x0Var.d() >= 29) {
                i10 = networkCapabilities.getSignalStrength();
            } else {
                i10 = 0;
            }
            this.f27193c = i10 > -100 ? i10 : 0;
            this.f27195e = networkCapabilities.hasTransport(4);
            String w12 = io.sentry.android.core.internal.util.e.w1(networkCapabilities);
            this.f27196f = w12 == null ? "" : w12;
            this.f27194d = j10;
        }

        boolean a(a aVar) {
            boolean z10;
            boolean z11;
            boolean z12;
            boolean z13;
            int abs = Math.abs(this.f27193c - aVar.f27193c);
            int abs2 = Math.abs(this.f27191a - aVar.f27191a);
            int abs3 = Math.abs(this.f27192b - aVar.f27192b);
            if (io.sentry.k.l(Math.abs(this.f27194d - aVar.f27194d)) < 5000.0d) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (!z10 && abs > 5) {
                z11 = false;
            } else {
                z11 = true;
            }
            if (!z10 && abs2 > Math.max(1000.0d, Math.abs(this.f27191a) * 0.1d)) {
                z12 = false;
            } else {
                z12 = true;
            }
            if (!z10 && abs3 > Math.max(1000.0d, Math.abs(this.f27192b) * 0.1d)) {
                z13 = false;
            } else {
                z13 = true;
            }
            if (this.f27195e != aVar.f27195e || !this.f27196f.equals(aVar.f27196f) || !z11 || !z12 || !z13) {
                return false;
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends ConnectivityManager.NetworkCallback {

        /* renamed from: a  reason: collision with root package name */
        final io.sentry.w0 f27197a;

        /* renamed from: b  reason: collision with root package name */
        final x0 f27198b;

        /* renamed from: c  reason: collision with root package name */
        NetworkCapabilities f27199c = null;

        /* renamed from: d  reason: collision with root package name */
        long f27200d = 0;

        /* renamed from: e  reason: collision with root package name */
        final k5 f27201e;

        b(io.sentry.w0 w0Var, x0 x0Var, k5 k5Var) {
            this.f27197a = (io.sentry.w0) io.sentry.util.y.c(w0Var, "Scopes are required");
            this.f27198b = (x0) io.sentry.util.y.c(x0Var, "BuildInfoProvider is required");
            this.f27201e = (k5) io.sentry.util.y.c(k5Var, "SentryDateProvider is required");
        }

        private Breadcrumb a(String str) {
            Breadcrumb breadcrumb = new Breadcrumb();
            breadcrumb.E("system");
            breadcrumb.z("network.event");
            breadcrumb.A("action", str);
            breadcrumb.B(SentryLevel.INFO);
            return breadcrumb;
        }

        private a b(NetworkCapabilities networkCapabilities, NetworkCapabilities networkCapabilities2, long j10, long j11) {
            if (networkCapabilities == null) {
                return new a(networkCapabilities2, this.f27198b, j11);
            }
            a aVar = new a(networkCapabilities, this.f27198b, j10);
            a aVar2 = new a(networkCapabilities2, this.f27198b, j11);
            if (aVar.a(aVar2)) {
                return null;
            }
            return aVar2;
        }

        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onAvailable(Network network) {
            this.f27197a.e(a("NETWORK_AVAILABLE"));
            this.f27199c = null;
        }

        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onCapabilitiesChanged(Network network, NetworkCapabilities networkCapabilities) {
            long h10 = this.f27201e.now().h();
            a b10 = b(this.f27199c, networkCapabilities, this.f27200d, h10);
            if (b10 == null) {
                return;
            }
            this.f27199c = networkCapabilities;
            this.f27200d = h10;
            Breadcrumb a10 = a("NETWORK_CAPABILITIES_CHANGED");
            a10.A("download_bandwidth", Integer.valueOf(b10.f27191a));
            a10.A("upload_bandwidth", Integer.valueOf(b10.f27192b));
            a10.A("vpn_active", Boolean.valueOf(b10.f27195e));
            a10.A("network_type", b10.f27196f);
            int i10 = b10.f27193c;
            if (i10 != 0) {
                a10.A("signal_strength", Integer.valueOf(i10));
            }
            Hint hint = new Hint();
            hint.k("android:networkCapabilities", b10);
            this.f27197a.h(a10, hint);
        }

        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onLost(Network network) {
            this.f27197a.e(a("NETWORK_LOST"));
            this.f27199c = null;
        }
    }

    public NetworkBreadcrumbsIntegration(Context context, x0 x0Var) {
        this.f27186d = (Context) io.sentry.util.y.c(e1.g(context), "Context is required");
        this.f27187e = (x0) io.sentry.util.y.c(x0Var, "BuildInfoProvider is required");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        io.sentry.a1 a10 = this.f27188i.a();
        try {
            b bVar = this.f27190p;
            this.f27190p = null;
            if (a10 != null) {
                a10.close();
            }
            if (bVar != null) {
                io.sentry.android.core.internal.util.e.a2(bVar);
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

    @Override // io.sentry.k1
    public void g(io.sentry.w0 w0Var, k7 k7Var) {
        SentryAndroidOptions sentryAndroidOptions;
        io.sentry.util.y.c(w0Var, "Scopes are required");
        if (k7Var instanceof SentryAndroidOptions) {
            sentryAndroidOptions = (SentryAndroidOptions) k7Var;
        } else {
            sentryAndroidOptions = null;
        }
        SentryAndroidOptions sentryAndroidOptions2 = (SentryAndroidOptions) io.sentry.util.y.c(sentryAndroidOptions, "SentryAndroidOptions is required");
        this.f27189o = k7Var;
        ILogger logger = k7Var.getLogger();
        SentryLevel sentryLevel = SentryLevel.DEBUG;
        logger.c(sentryLevel, "NetworkBreadcrumbsIntegration enabled: %s", Boolean.valueOf(sentryAndroidOptions2.isEnableNetworkEventBreadcrumbs()));
        if (sentryAndroidOptions2.isEnableNetworkEventBreadcrumbs()) {
            if (this.f27187e.d() < 24) {
                k7Var.getLogger().c(sentryLevel, "NetworkCallbacks need Android N+.", new Object[0]);
                return;
            }
            io.sentry.a1 a10 = this.f27188i.a();
            try {
                this.f27190p = new b(w0Var, this.f27187e, k7Var.getDateProvider());
                if (io.sentry.android.core.internal.util.e.W0(this.f27186d, k7Var.getLogger(), this.f27187e, this.f27190p)) {
                    k7Var.getLogger().c(sentryLevel, "NetworkBreadcrumbsIntegration installed.", new Object[0]);
                    io.sentry.util.p.a("NetworkBreadcrumbs");
                } else {
                    k7Var.getLogger().c(sentryLevel, "NetworkBreadcrumbsIntegration not installed.", new Object[0]);
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
}
