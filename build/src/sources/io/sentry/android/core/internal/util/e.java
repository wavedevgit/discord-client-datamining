package io.sentry.android.core.internal.util;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.Network;
import android.net.NetworkCapabilities;
import android.net.NetworkInfo;
import android.os.Handler;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.a1;
import io.sentry.android.core.e1;
import io.sentry.android.core.w0;
import io.sentry.android.core.x0;
import io.sentry.k0;
import io.sentry.k7;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements k0, w0.a {

    /* renamed from: y  reason: collision with root package name */
    private static volatile ConnectivityManager f28971y;

    /* renamed from: d  reason: collision with root package name */
    private final Context f28973d;

    /* renamed from: e  reason: collision with root package name */
    private final k7 f28974e;

    /* renamed from: i  reason: collision with root package name */
    private final x0 f28975i;

    /* renamed from: o  reason: collision with root package name */
    private final io.sentry.transport.p f28976o;

    /* renamed from: p  reason: collision with root package name */
    private final List f28977p;

    /* renamed from: q  reason: collision with root package name */
    private final Handler f28978q;

    /* renamed from: r  reason: collision with root package name */
    private final io.sentry.util.a f28979r;

    /* renamed from: s  reason: collision with root package name */
    private volatile ConnectivityManager.NetworkCallback f28980s;

    /* renamed from: t  reason: collision with root package name */
    private volatile NetworkCapabilities f28981t;

    /* renamed from: u  reason: collision with root package name */
    private volatile Network f28982u;

    /* renamed from: v  reason: collision with root package name */
    private volatile long f28983v;

    /* renamed from: w  reason: collision with root package name */
    private final AtomicBoolean f28984w;

    /* renamed from: x  reason: collision with root package name */
    private static final io.sentry.util.a f28970x = new io.sentry.util.a();

    /* renamed from: z  reason: collision with root package name */
    private static final io.sentry.util.a f28972z = new io.sentry.util.a();
    private static final List A = new ArrayList();
    private static final int[] B = {1, 0, 3, 2};
    private static final int[] C = new int[2];

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends ConnectivityManager.NetworkCallback {
        a() {
        }

        private void a() {
            e.this.f28984w.set(false);
            a1 a10 = e.this.f28979r.a();
            try {
                e.this.f28981t = null;
                e.this.f28982u = null;
                e eVar = e.this;
                eVar.f28983v = eVar.f28976o.a();
                e.this.f28974e.getLogger().c(SentryLevel.DEBUG, "Cache cleared - network lost/unavailable", new Object[0]);
                for (k0.b bVar : e.this.f28977p) {
                    bVar.a(k0.a.DISCONNECTED);
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

        private boolean b(NetworkCapabilities networkCapabilities, NetworkCapabilities networkCapabilities2) {
            int[] iArr;
            for (int i10 : e.C) {
                if (i10 != 0 && networkCapabilities.hasCapability(i10) != networkCapabilities2.hasCapability(i10)) {
                    return true;
                }
            }
            return false;
        }

        private boolean c(NetworkCapabilities networkCapabilities, NetworkCapabilities networkCapabilities2) {
            int[] iArr;
            for (int i10 : e.B) {
                if (networkCapabilities.hasTransport(i10) != networkCapabilities2.hasTransport(i10)) {
                    return true;
                }
            }
            return false;
        }

        private boolean d(NetworkCapabilities networkCapabilities) {
            boolean z10;
            boolean z11;
            NetworkCapabilities networkCapabilities2 = e.this.f28981t;
            if (networkCapabilities2 == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (networkCapabilities == null) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (z10 != z11) {
                return true;
            }
            if (networkCapabilities2 == null && networkCapabilities == null) {
                return false;
            }
            if (!b(networkCapabilities2, networkCapabilities) && !c(networkCapabilities2, networkCapabilities)) {
                return false;
            }
            return true;
        }

        private void e(Network network, NetworkCapabilities networkCapabilities) {
            if (d(networkCapabilities)) {
                e.this.j2(networkCapabilities);
                k0.a y12 = e.this.y1();
                a1 a10 = e.this.f28979r.a();
                try {
                    for (k0.b bVar : e.this.f28977p) {
                        bVar.a(y12);
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

        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onAvailable(Network network) {
            e.this.f28982u = network;
            if (!e.this.f28984w.getAndSet(true)) {
                a1 a10 = e.f28972z.a();
                try {
                    for (ConnectivityManager.NetworkCallback networkCallback : e.A) {
                        networkCallback.onAvailable(network);
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

        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onCapabilitiesChanged(Network network, NetworkCapabilities networkCapabilities) {
            if (network.equals(e.this.f28982u)) {
                e(network, networkCapabilities);
                a1 a10 = e.f28972z.a();
                try {
                    for (ConnectivityManager.NetworkCallback networkCallback : e.A) {
                        networkCallback.onCapabilitiesChanged(network, networkCapabilities);
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

        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onLost(Network network) {
            if (network.equals(e.this.f28982u)) {
                a();
                a1 a10 = e.f28972z.a();
                try {
                    for (ConnectivityManager.NetworkCallback networkCallback : e.A) {
                        networkCallback.onLost(network);
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

        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onUnavailable() {
            a();
            a1 a10 = e.f28972z.a();
            try {
                for (ConnectivityManager.NetworkCallback networkCallback : e.A) {
                    networkCallback.onUnavailable();
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

    public e(Context context, k7 k7Var, x0 x0Var, io.sentry.transport.p pVar) {
        this(context, k7Var, x0Var, pVar, null);
    }

    public static String A1(Context context, ILogger iLogger, x0 x0Var) {
        boolean z10;
        boolean z11;
        ConnectivityManager U1 = U1(context, iLogger);
        if (U1 == null) {
            return null;
        }
        boolean z12 = false;
        if (!s.a(context, "android.permission.ACCESS_NETWORK_STATE")) {
            iLogger.c(SentryLevel.INFO, "No permission (ACCESS_NETWORK_STATE) to check network status.", new Object[0]);
            return null;
        }
        try {
            z10 = true;
            if (x0Var.d() >= 23) {
                Network activeNetwork = U1.getActiveNetwork();
                if (activeNetwork == null) {
                    iLogger.c(SentryLevel.INFO, "Network is null and cannot check network status", new Object[0]);
                    return null;
                }
                NetworkCapabilities networkCapabilities = U1.getNetworkCapabilities(activeNetwork);
                if (networkCapabilities == null) {
                    iLogger.c(SentryLevel.INFO, "NetworkCapabilities is null and cannot check network type", new Object[0]);
                    return null;
                }
                boolean hasTransport = networkCapabilities.hasTransport(3);
                z11 = networkCapabilities.hasTransport(1);
                z10 = networkCapabilities.hasTransport(0);
                z12 = hasTransport;
            } else {
                NetworkInfo activeNetworkInfo = U1.getActiveNetworkInfo();
                if (activeNetworkInfo == null) {
                    iLogger.c(SentryLevel.INFO, "NetworkInfo is null, there's no active network.", new Object[0]);
                    return null;
                }
                int type = activeNetworkInfo.getType();
                if (type != 0) {
                    if (type != 1) {
                        if (type != 9) {
                            z11 = false;
                        } else {
                            z11 = false;
                            z12 = true;
                        }
                        z10 = z11;
                    } else {
                        z11 = true;
                        z10 = false;
                    }
                } else {
                    z11 = false;
                }
            }
        } catch (Throwable th2) {
            iLogger.b(SentryLevel.ERROR, "Failed to retrieve network info", th2);
        }
        if (z12) {
            return "ethernet";
        }
        if (z11) {
            return "wifi";
        }
        if (!z10) {
            return null;
        }
        return "cellular";
    }

    public static /* synthetic */ void B(e eVar) {
        a1 a10;
        eVar.j2(null);
        k0.a y12 = eVar.y1();
        if (y12 == k0.a.DISCONNECTED) {
            eVar.f28984w.set(false);
            a10 = f28972z.a();
            try {
                for (ConnectivityManager.NetworkCallback networkCallback : A) {
                    networkCallback.onLost(null);
                }
                if (a10 != null) {
                    a10.close();
                }
            } finally {
            }
        }
        a10 = eVar.f28979r.a();
        try {
            for (k0.b bVar : eVar.f28977p) {
                bVar.a(y12);
            }
            if (a10 != null) {
                a10.close();
            }
            eVar.e1();
        } finally {
        }
    }

    public static String B1(NetworkCapabilities networkCapabilities) {
        if (networkCapabilities.hasTransport(3)) {
            return "ethernet";
        }
        if (networkCapabilities.hasTransport(1)) {
            return "wifi";
        }
        if (networkCapabilities.hasTransport(0)) {
            return "cellular";
        }
        return null;
    }

    private String E1() {
        NetworkCapabilities networkCapabilities = this.f28981t;
        if (networkCapabilities != null) {
            return B1(networkCapabilities);
        }
        return A1(this.f28973d, this.f28974e.getLogger(), this.f28975i);
    }

    private static ConnectivityManager U1(Context context, ILogger iLogger) {
        if (f28971y != null) {
            return f28971y;
        }
        a1 a10 = f28970x.a();
        try {
            if (f28971y != null) {
                ConnectivityManager connectivityManager = f28971y;
                if (a10 != null) {
                    a10.close();
                }
                return connectivityManager;
            }
            f28971y = (ConnectivityManager) context.getSystemService("connectivity");
            if (f28971y == null) {
                iLogger.c(SentryLevel.INFO, "ConnectivityManager is null and cannot check network status", new Object[0]);
            }
            ConnectivityManager connectivityManager2 = f28971y;
            if (a10 != null) {
                a10.close();
            }
            return connectivityManager2;
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

    private boolean W1() {
        if (this.f28976o.a() - this.f28983v < 120000) {
            return true;
        }
        return false;
    }

    private boolean Y1(NetworkCapabilities networkCapabilities) {
        if (networkCapabilities == null) {
            return false;
        }
        boolean hasCapability = networkCapabilities.hasCapability(12);
        if (this.f28975i.d() >= 23) {
            if (hasCapability && networkCapabilities.hasCapability(16)) {
                hasCapability = true;
            } else {
                hasCapability = false;
            }
        }
        if (!hasCapability) {
            return false;
        }
        for (int i10 : B) {
            if (networkCapabilities.hasTransport(i10)) {
                return true;
            }
        }
        return false;
    }

    public static boolean Z0(Context context, ILogger iLogger, x0 x0Var, ConnectivityManager.NetworkCallback networkCallback) {
        if (x0Var.d() < 24) {
            iLogger.c(SentryLevel.DEBUG, "NetworkCallbacks need Android N+.", new Object[0]);
            return false;
        } else if (!s.a(context, "android.permission.ACCESS_NETWORK_STATE")) {
            iLogger.c(SentryLevel.INFO, "No permission (ACCESS_NETWORK_STATE) to check network status.", new Object[0]);
            return false;
        } else {
            a1 a10 = f28972z.a();
            try {
                A.add(networkCallback);
                if (a10 != null) {
                    a10.close();
                    return true;
                }
                return true;
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

    static boolean b2(Context context, ILogger iLogger, x0 x0Var, Handler handler, ConnectivityManager.NetworkCallback networkCallback) {
        if (x0Var.d() < 24) {
            iLogger.c(SentryLevel.DEBUG, "NetworkCallbacks need Android N+.", new Object[0]);
            return false;
        }
        ConnectivityManager U1 = U1(context, iLogger);
        if (U1 == null) {
            return false;
        }
        if (!s.a(context, "android.permission.ACCESS_NETWORK_STATE")) {
            iLogger.c(SentryLevel.INFO, "No permission (ACCESS_NETWORK_STATE) to check network status.", new Object[0]);
            return false;
        }
        try {
            if (handler != null) {
                U1.registerDefaultNetworkCallback(networkCallback, handler);
                return true;
            }
            U1.registerDefaultNetworkCallback(networkCallback);
            return true;
        } catch (Throwable th2) {
            iLogger.b(SentryLevel.WARNING, "registerDefaultNetworkCallback failed", th2);
            return false;
        }
    }

    public static void c2(ConnectivityManager.NetworkCallback networkCallback) {
        a1 a10 = f28972z.a();
        try {
            A.remove(networkCallback);
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

    /* JADX INFO: Access modifiers changed from: private */
    public void e1() {
        if (e1.s() && this.f28980s == null) {
            a1 a10 = this.f28979r.a();
            try {
                if (this.f28980s != null) {
                    if (a10 != null) {
                        a10.close();
                        return;
                    }
                    return;
                }
                a aVar = new a();
                if (b2(this.f28973d, this.f28974e.getLogger(), this.f28975i, this.f28978q, aVar)) {
                    this.f28980s = aVar;
                    this.f28974e.getLogger().c(SentryLevel.DEBUG, "Network callback registered successfully", new Object[0]);
                } else {
                    this.f28974e.getLogger().c(SentryLevel.WARNING, "Failed to register network callback", new Object[0]);
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

    private void f2(Runnable runnable) {
        try {
            this.f28974e.getExecutorService().submit(runnable);
        } catch (Throwable th2) {
            this.f28974e.getLogger().b(SentryLevel.ERROR, "AndroidConnectionStatusProvider submit failed", th2);
        }
    }

    static void h2(Context context, ILogger iLogger, ConnectivityManager.NetworkCallback networkCallback) {
        ConnectivityManager U1 = U1(context, iLogger);
        if (U1 == null) {
            return;
        }
        try {
            U1.unregisterNetworkCallback(networkCallback);
        } catch (Throwable th2) {
            iLogger.b(SentryLevel.WARNING, "unregisterNetworkCallback failed", th2);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void i2(boolean z10) {
        a1 a10 = this.f28979r.a();
        if (z10) {
            try {
                this.f28977p.clear();
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
        ConnectivityManager.NetworkCallback networkCallback = this.f28980s;
        this.f28980s = null;
        if (networkCallback != null) {
            h2(this.f28973d, this.f28974e.getLogger(), networkCallback);
        }
        this.f28981t = null;
        this.f28982u = null;
        this.f28983v = 0L;
        if (a10 != null) {
            a10.close();
        }
        this.f28974e.getLogger().c(SentryLevel.DEBUG, "Network callback unregistered", new Object[0]);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void j2(NetworkCapabilities networkCapabilities) {
        NetworkCapabilities networkCapabilities2;
        a1 a10 = this.f28979r.a();
        try {
            if (networkCapabilities != null) {
                this.f28981t = networkCapabilities;
            } else if (!s.a(this.f28973d, "android.permission.ACCESS_NETWORK_STATE")) {
                this.f28974e.getLogger().c(SentryLevel.INFO, "No permission (ACCESS_NETWORK_STATE) to check network status.", new Object[0]);
                this.f28981t = null;
                this.f28983v = this.f28976o.a();
                if (a10 != null) {
                    a10.close();
                    return;
                }
                return;
            } else if (this.f28975i.d() < 23) {
                this.f28981t = null;
                this.f28983v = this.f28976o.a();
                if (a10 != null) {
                    a10.close();
                    return;
                }
                return;
            } else {
                ConnectivityManager U1 = U1(this.f28973d, this.f28974e.getLogger());
                if (U1 != null) {
                    Network activeNetwork = U1.getActiveNetwork();
                    if (activeNetwork != null) {
                        networkCapabilities2 = U1.getNetworkCapabilities(activeNetwork);
                    } else {
                        networkCapabilities2 = null;
                    }
                    this.f28981t = networkCapabilities2;
                } else {
                    this.f28981t = null;
                }
            }
            this.f28983v = this.f28976o.a();
            this.f28974e.getLogger().c(SentryLevel.DEBUG, "Cache updated - Status: " + y1() + ", Type: " + E1(), new Object[0]);
        } catch (Throwable th2) {
            try {
                this.f28974e.getLogger().b(SentryLevel.WARNING, "Failed to update connection status cache", th2);
                this.f28981t = null;
                this.f28983v = this.f28976o.a();
            } catch (Throwable th3) {
                if (a10 != null) {
                    try {
                        a10.close();
                    } catch (Throwable th4) {
                        th3.addSuppressed(th4);
                    }
                }
                throw th3;
            }
        }
        if (a10 != null) {
            a10.close();
        }
    }

    public static /* synthetic */ void x(e eVar) {
        eVar.i2(true);
        a1 a10 = f28972z.a();
        try {
            A.clear();
            if (a10 != null) {
                a10.close();
            }
            a10 = f28970x.a();
            try {
                f28971y = null;
                if (a10 != null) {
                    a10.close();
                }
                w0.E().N(eVar);
            } finally {
            }
        } finally {
        }
    }

    private static k0.a x1(Context context, ConnectivityManager connectivityManager, ILogger iLogger) {
        if (!s.a(context, "android.permission.ACCESS_NETWORK_STATE")) {
            iLogger.c(SentryLevel.INFO, "No permission (ACCESS_NETWORK_STATE) to check network status.", new Object[0]);
            return k0.a.NO_PERMISSION;
        }
        try {
            NetworkInfo activeNetworkInfo = connectivityManager.getActiveNetworkInfo();
            if (activeNetworkInfo == null) {
                iLogger.c(SentryLevel.INFO, "NetworkInfo is null, there's no active network.", new Object[0]);
                return k0.a.DISCONNECTED;
            } else if (activeNetworkInfo.isConnected()) {
                return k0.a.CONNECTED;
            } else {
                return k0.a.DISCONNECTED;
            }
        } catch (Throwable th2) {
            iLogger.b(SentryLevel.WARNING, "Could not retrieve Connection Status", th2);
            return k0.a.UNKNOWN;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public k0.a y1() {
        if (this.f28981t != null) {
            if (Y1(this.f28981t)) {
                return k0.a.CONNECTED;
            }
            return k0.a.DISCONNECTED;
        }
        ConnectivityManager U1 = U1(this.f28973d, this.f28974e.getLogger());
        if (U1 != null) {
            return x1(this.f28973d, U1, this.f28974e.getLogger());
        }
        return k0.a.UNKNOWN;
    }

    @Override // io.sentry.k0
    public boolean M1(k0.b bVar) {
        a1 a10 = this.f28979r.a();
        try {
            this.f28977p.add(bVar);
            if (a10 != null) {
                a10.close();
            }
            e1();
            if (this.f28980s != null) {
                return true;
            }
            return false;
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

    @Override // io.sentry.k0
    public String S() {
        if (!W1()) {
            j2(null);
        }
        return E1();
    }

    @Override // io.sentry.k0
    public void Z1(k0.b bVar) {
        a1 a10 = this.f28979r.a();
        try {
            this.f28977p.remove(bVar);
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

    @Override // io.sentry.android.core.w0.a
    public void a() {
        if (this.f28980s != null) {
            return;
        }
        f2(new Runnable() { // from class: io.sentry.android.core.internal.util.d
            @Override // java.lang.Runnable
            public final void run() {
                e.B(e.this);
            }
        });
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        f2(new Runnable() { // from class: io.sentry.android.core.internal.util.a
            @Override // java.lang.Runnable
            public final void run() {
                e.x(e.this);
            }
        });
    }

    @Override // io.sentry.android.core.w0.a
    public void l() {
        if (this.f28980s == null) {
            return;
        }
        f2(new Runnable() { // from class: io.sentry.android.core.internal.util.c
            @Override // java.lang.Runnable
            public final void run() {
                e.this.i2(false);
            }
        });
    }

    @Override // io.sentry.k0
    public k0.a x0() {
        if (!W1()) {
            j2(null);
        }
        return y1();
    }

    public e(Context context, k7 k7Var, x0 x0Var, io.sentry.transport.p pVar, Handler handler) {
        this.f28979r = new io.sentry.util.a();
        this.f28983v = 0L;
        this.f28984w = new AtomicBoolean(false);
        this.f28973d = e1.g(context);
        this.f28974e = k7Var;
        this.f28975i = x0Var;
        this.f28976o = pVar;
        this.f28978q = handler;
        this.f28977p = new ArrayList();
        int[] iArr = C;
        iArr[0] = 12;
        if (x0Var.d() >= 23) {
            iArr[1] = 16;
        }
        f2(new Runnable() { // from class: io.sentry.android.core.internal.util.b
            @Override // java.lang.Runnable
            public final void run() {
                e.this.e1();
            }
        });
        w0.E().n(this);
    }
}
