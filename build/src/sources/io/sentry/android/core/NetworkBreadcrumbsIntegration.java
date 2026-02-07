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
    private final Context f26986d;

    /* renamed from: e  reason: collision with root package name */
    private final x0 f26987e;

    /* renamed from: i  reason: collision with root package name */
    private final io.sentry.util.a f26988i = new io.sentry.util.a();

    /* renamed from: o  reason: collision with root package name */
    private k7 f26989o;

    /* renamed from: p  reason: collision with root package name */
    volatile b f26990p;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        final int f26991a;

        /* renamed from: b  reason: collision with root package name */
        final int f26992b;

        /* renamed from: c  reason: collision with root package name */
        final int f26993c;

        /* renamed from: d  reason: collision with root package name */
        private long f26994d;

        /* renamed from: e  reason: collision with root package name */
        final boolean f26995e;

        /* renamed from: f  reason: collision with root package name */
        final String f26996f;

        a(NetworkCapabilities networkCapabilities, x0 x0Var, long j10) {
            int i10;
            io.sentry.util.y.c(networkCapabilities, "NetworkCapabilities is required");
            io.sentry.util.y.c(x0Var, "BuildInfoProvider is required");
            this.f26991a = networkCapabilities.getLinkDownstreamBandwidthKbps();
            this.f26992b = networkCapabilities.getLinkUpstreamBandwidthKbps();
            if (x0Var.d() >= 29) {
                i10 = networkCapabilities.getSignalStrength();
            } else {
                i10 = 0;
            }
            this.f26993c = i10 > -100 ? i10 : 0;
            this.f26995e = networkCapabilities.hasTransport(4);
            String A1 = io.sentry.android.core.internal.util.e.A1(networkCapabilities);
            this.f26996f = A1 == null ? "" : A1;
            this.f26994d = j10;
        }

        boolean a(a aVar) {
            boolean z10;
            boolean z11;
            boolean z12;
            boolean z13;
            int abs = Math.abs(this.f26993c - aVar.f26993c);
            int abs2 = Math.abs(this.f26991a - aVar.f26991a);
            int abs3 = Math.abs(this.f26992b - aVar.f26992b);
            if (io.sentry.k.l(Math.abs(this.f26994d - aVar.f26994d)) < 5000.0d) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (!z10 && abs > 5) {
                z11 = false;
            } else {
                z11 = true;
            }
            if (!z10 && abs2 > Math.max(1000.0d, Math.abs(this.f26991a) * 0.1d)) {
                z12 = false;
            } else {
                z12 = true;
            }
            if (!z10 && abs3 > Math.max(1000.0d, Math.abs(this.f26992b) * 0.1d)) {
                z13 = false;
            } else {
                z13 = true;
            }
            if (this.f26995e != aVar.f26995e || !this.f26996f.equals(aVar.f26996f) || !z11 || !z12 || !z13) {
                return false;
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends ConnectivityManager.NetworkCallback {

        /* renamed from: a  reason: collision with root package name */
        final io.sentry.w0 f26997a;

        /* renamed from: b  reason: collision with root package name */
        final x0 f26998b;

        /* renamed from: c  reason: collision with root package name */
        NetworkCapabilities f26999c = null;

        /* renamed from: d  reason: collision with root package name */
        long f27000d = 0;

        /* renamed from: e  reason: collision with root package name */
        final k5 f27001e;

        b(io.sentry.w0 w0Var, x0 x0Var, k5 k5Var) {
            this.f26997a = (io.sentry.w0) io.sentry.util.y.c(w0Var, "Scopes are required");
            this.f26998b = (x0) io.sentry.util.y.c(x0Var, "BuildInfoProvider is required");
            this.f27001e = (k5) io.sentry.util.y.c(k5Var, "SentryDateProvider is required");
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
                return new a(networkCapabilities2, this.f26998b, j11);
            }
            a aVar = new a(networkCapabilities, this.f26998b, j10);
            a aVar2 = new a(networkCapabilities2, this.f26998b, j11);
            if (aVar.a(aVar2)) {
                return null;
            }
            return aVar2;
        }

        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onAvailable(Network network) {
            this.f26997a.e(a("NETWORK_AVAILABLE"));
            this.f26999c = null;
        }

        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onCapabilitiesChanged(Network network, NetworkCapabilities networkCapabilities) {
            long h10 = this.f27001e.now().h();
            a b10 = b(this.f26999c, networkCapabilities, this.f27000d, h10);
            if (b10 == null) {
                return;
            }
            this.f26999c = networkCapabilities;
            this.f27000d = h10;
            Breadcrumb a10 = a("NETWORK_CAPABILITIES_CHANGED");
            a10.A("download_bandwidth", Integer.valueOf(b10.f26991a));
            a10.A("upload_bandwidth", Integer.valueOf(b10.f26992b));
            a10.A("vpn_active", Boolean.valueOf(b10.f26995e));
            a10.A("network_type", b10.f26996f);
            int i10 = b10.f26993c;
            if (i10 != 0) {
                a10.A("signal_strength", Integer.valueOf(i10));
            }
            Hint hint = new Hint();
            hint.k("android:networkCapabilities", b10);
            this.f26997a.h(a10, hint);
        }

        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onLost(Network network) {
            this.f26997a.e(a("NETWORK_LOST"));
            this.f26999c = null;
        }
    }

    public NetworkBreadcrumbsIntegration(Context context, x0 x0Var) {
        this.f26986d = (Context) io.sentry.util.y.c(e1.g(context), "Context is required");
        this.f26987e = (x0) io.sentry.util.y.c(x0Var, "BuildInfoProvider is required");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        io.sentry.a1 a10 = this.f26988i.a();
        try {
            b bVar = this.f26990p;
            this.f26990p = null;
            if (a10 != null) {
                a10.close();
            }
            if (bVar != null) {
                io.sentry.android.core.internal.util.e.b2(bVar);
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
        this.f26989o = k7Var;
        ILogger logger = k7Var.getLogger();
        SentryLevel sentryLevel = SentryLevel.DEBUG;
        logger.c(sentryLevel, "NetworkBreadcrumbsIntegration enabled: %s", Boolean.valueOf(sentryAndroidOptions2.isEnableNetworkEventBreadcrumbs()));
        if (sentryAndroidOptions2.isEnableNetworkEventBreadcrumbs()) {
            if (this.f26987e.d() < 24) {
                k7Var.getLogger().c(sentryLevel, "NetworkCallbacks need Android N+.", new Object[0]);
                return;
            }
            io.sentry.a1 a10 = this.f26988i.a();
            try {
                this.f26990p = new b(w0Var, this.f26987e, k7Var.getDateProvider());
                if (io.sentry.android.core.internal.util.e.Y0(this.f26986d, k7Var.getLogger(), this.f26987e, this.f26990p)) {
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
