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
    private final Context f28121d;

    /* renamed from: e  reason: collision with root package name */
    private final x0 f28122e;

    /* renamed from: i  reason: collision with root package name */
    private final io.sentry.util.a f28123i = new io.sentry.util.a();

    /* renamed from: o  reason: collision with root package name */
    private k7 f28124o;

    /* renamed from: p  reason: collision with root package name */
    volatile b f28125p;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        final int f28126a;

        /* renamed from: b  reason: collision with root package name */
        final int f28127b;

        /* renamed from: c  reason: collision with root package name */
        final int f28128c;

        /* renamed from: d  reason: collision with root package name */
        private long f28129d;

        /* renamed from: e  reason: collision with root package name */
        final boolean f28130e;

        /* renamed from: f  reason: collision with root package name */
        final String f28131f;

        a(NetworkCapabilities networkCapabilities, x0 x0Var, long j10) {
            int i10;
            io.sentry.util.y.c(networkCapabilities, "NetworkCapabilities is required");
            io.sentry.util.y.c(x0Var, "BuildInfoProvider is required");
            this.f28126a = networkCapabilities.getLinkDownstreamBandwidthKbps();
            this.f28127b = networkCapabilities.getLinkUpstreamBandwidthKbps();
            if (x0Var.d() >= 29) {
                i10 = networkCapabilities.getSignalStrength();
            } else {
                i10 = 0;
            }
            this.f28128c = i10 > -100 ? i10 : 0;
            this.f28130e = networkCapabilities.hasTransport(4);
            String b12 = io.sentry.android.core.internal.util.e.b1(networkCapabilities);
            this.f28131f = b12 == null ? "" : b12;
            this.f28129d = j10;
        }

        boolean a(a aVar) {
            boolean z10;
            boolean z11;
            boolean z12;
            boolean z13;
            int abs = Math.abs(this.f28128c - aVar.f28128c);
            int abs2 = Math.abs(this.f28126a - aVar.f28126a);
            int abs3 = Math.abs(this.f28127b - aVar.f28127b);
            if (io.sentry.k.l(Math.abs(this.f28129d - aVar.f28129d)) < 5000.0d) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (!z10 && abs > 5) {
                z11 = false;
            } else {
                z11 = true;
            }
            if (!z10 && abs2 > Math.max(1000.0d, Math.abs(this.f28126a) * 0.1d)) {
                z12 = false;
            } else {
                z12 = true;
            }
            if (!z10 && abs3 > Math.max(1000.0d, Math.abs(this.f28127b) * 0.1d)) {
                z13 = false;
            } else {
                z13 = true;
            }
            if (this.f28130e != aVar.f28130e || !this.f28131f.equals(aVar.f28131f) || !z11 || !z12 || !z13) {
                return false;
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends ConnectivityManager.NetworkCallback {

        /* renamed from: a  reason: collision with root package name */
        final io.sentry.w0 f28132a;

        /* renamed from: b  reason: collision with root package name */
        final x0 f28133b;

        /* renamed from: c  reason: collision with root package name */
        NetworkCapabilities f28134c = null;

        /* renamed from: d  reason: collision with root package name */
        long f28135d = 0;

        /* renamed from: e  reason: collision with root package name */
        final k5 f28136e;

        b(io.sentry.w0 w0Var, x0 x0Var, k5 k5Var) {
            this.f28132a = (io.sentry.w0) io.sentry.util.y.c(w0Var, "Scopes are required");
            this.f28133b = (x0) io.sentry.util.y.c(x0Var, "BuildInfoProvider is required");
            this.f28136e = (k5) io.sentry.util.y.c(k5Var, "SentryDateProvider is required");
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
                return new a(networkCapabilities2, this.f28133b, j11);
            }
            a aVar = new a(networkCapabilities, this.f28133b, j10);
            a aVar2 = new a(networkCapabilities2, this.f28133b, j11);
            if (aVar.a(aVar2)) {
                return null;
            }
            return aVar2;
        }

        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onAvailable(Network network) {
            this.f28132a.e(a("NETWORK_AVAILABLE"));
            this.f28134c = null;
        }

        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onCapabilitiesChanged(Network network, NetworkCapabilities networkCapabilities) {
            long h10 = this.f28136e.now().h();
            a b10 = b(this.f28134c, networkCapabilities, this.f28135d, h10);
            if (b10 == null) {
                return;
            }
            this.f28134c = networkCapabilities;
            this.f28135d = h10;
            Breadcrumb a10 = a("NETWORK_CAPABILITIES_CHANGED");
            a10.A("download_bandwidth", Integer.valueOf(b10.f28126a));
            a10.A("upload_bandwidth", Integer.valueOf(b10.f28127b));
            a10.A("vpn_active", Boolean.valueOf(b10.f28130e));
            a10.A("network_type", b10.f28131f);
            int i10 = b10.f28128c;
            if (i10 != 0) {
                a10.A("signal_strength", Integer.valueOf(i10));
            }
            Hint hint = new Hint();
            hint.k("android:networkCapabilities", b10);
            this.f28132a.i(a10, hint);
        }

        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onLost(Network network) {
            this.f28132a.e(a("NETWORK_LOST"));
            this.f28134c = null;
        }
    }

    public NetworkBreadcrumbsIntegration(Context context, x0 x0Var) {
        this.f28121d = (Context) io.sentry.util.y.c(e1.g(context), "Context is required");
        this.f28122e = (x0) io.sentry.util.y.c(x0Var, "BuildInfoProvider is required");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        io.sentry.a1 a10 = this.f28123i.a();
        try {
            b bVar = this.f28125p;
            this.f28125p = null;
            if (a10 != null) {
                a10.close();
            }
            if (bVar != null) {
                io.sentry.android.core.internal.util.e.E1(bVar);
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
    public void h(io.sentry.w0 w0Var, k7 k7Var) {
        SentryAndroidOptions sentryAndroidOptions;
        io.sentry.util.y.c(w0Var, "Scopes are required");
        if (k7Var instanceof SentryAndroidOptions) {
            sentryAndroidOptions = (SentryAndroidOptions) k7Var;
        } else {
            sentryAndroidOptions = null;
        }
        SentryAndroidOptions sentryAndroidOptions2 = (SentryAndroidOptions) io.sentry.util.y.c(sentryAndroidOptions, "SentryAndroidOptions is required");
        this.f28124o = k7Var;
        ILogger logger = k7Var.getLogger();
        SentryLevel sentryLevel = SentryLevel.DEBUG;
        logger.c(sentryLevel, "NetworkBreadcrumbsIntegration enabled: %s", Boolean.valueOf(sentryAndroidOptions2.isEnableNetworkEventBreadcrumbs()));
        if (sentryAndroidOptions2.isEnableNetworkEventBreadcrumbs()) {
            if (this.f28122e.d() < 24) {
                k7Var.getLogger().c(sentryLevel, "NetworkCallbacks need Android N+.", new Object[0]);
                return;
            }
            io.sentry.a1 a10 = this.f28123i.a();
            try {
                this.f28125p = new b(w0Var, this.f28122e, k7Var.getDateProvider());
                if (io.sentry.android.core.internal.util.e.O0(this.f28121d, k7Var.getLogger(), this.f28122e, this.f28125p)) {
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
