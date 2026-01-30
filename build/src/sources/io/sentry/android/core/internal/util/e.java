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
    private static volatile ConnectivityManager f29044y;

    /* renamed from: d  reason: collision with root package name */
    private final Context f29046d;

    /* renamed from: e  reason: collision with root package name */
    private final k7 f29047e;

    /* renamed from: i  reason: collision with root package name */
    private final x0 f29048i;

    /* renamed from: o  reason: collision with root package name */
    private final io.sentry.transport.p f29049o;

    /* renamed from: p  reason: collision with root package name */
    private final List f29050p;

    /* renamed from: q  reason: collision with root package name */
    private final Handler f29051q;

    /* renamed from: r  reason: collision with root package name */
    private final io.sentry.util.a f29052r;

    /* renamed from: s  reason: collision with root package name */
    private volatile ConnectivityManager.NetworkCallback f29053s;

    /* renamed from: t  reason: collision with root package name */
    private volatile NetworkCapabilities f29054t;

    /* renamed from: u  reason: collision with root package name */
    private volatile Network f29055u;

    /* renamed from: v  reason: collision with root package name */
    private volatile long f29056v;

    /* renamed from: w  reason: collision with root package name */
    private final AtomicBoolean f29057w;

    /* renamed from: x  reason: collision with root package name */
    private static final io.sentry.util.a f29043x = new io.sentry.util.a();

    /* renamed from: z  reason: collision with root package name */
    private static final io.sentry.util.a f29045z = new io.sentry.util.a();
    private static final List A = new ArrayList();
    private static final int[] B = {1, 0, 3, 2};
    private static final int[] C = new int[2];

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends ConnectivityManager.NetworkCallback {
        a() {
        }

        private void a() {
            e.this.f29057w.set(false);
            a1 a10 = e.this.f29052r.a();
            try {
                e.this.f29054t = null;
                e.this.f29055u = null;
                e eVar = e.this;
                eVar.f29056v = eVar.f29049o.a();
                e.this.f29047e.getLogger().c(SentryLevel.DEBUG, "Cache cleared - network lost/unavailable", new Object[0]);
                for (k0.b bVar : e.this.f29050p) {
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
            NetworkCapabilities networkCapabilities2 = e.this.f29054t;
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
                a1 a10 = e.this.f29052r.a();
                try {
                    for (k0.b bVar : e.this.f29050p) {
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
            e.this.f29055u = network;
            if (!e.this.f29057w.getAndSet(true)) {
                a1 a10 = e.f29045z.a();
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
            if (network.equals(e.this.f29055u)) {
                e(network, networkCapabilities);
                a1 a10 = e.f29045z.a();
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
            if (network.equals(e.this.f29055u)) {
                a();
                a1 a10 = e.f29045z.a();
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
            a1 a10 = e.f29045z.a();
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
            eVar.f29057w.set(false);
            a10 = f29045z.a();
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
        a10 = eVar.f29052r.a();
        try {
            for (k0.b bVar : eVar.f29050p) {
                bVar.a(y12);
            }
            if (a10 != null) {
                a10.close();
            }
            eVar.d1();
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
        NetworkCapabilities networkCapabilities = this.f29054t;
        if (networkCapabilities != null) {
            return B1(networkCapabilities);
        }
        return A1(this.f29046d, this.f29047e.getLogger(), this.f29048i);
    }

    private static ConnectivityManager U1(Context context, ILogger iLogger) {
        if (f29044y != null) {
            return f29044y;
        }
        a1 a10 = f29043x.a();
        try {
            if (f29044y != null) {
                ConnectivityManager connectivityManager = f29044y;
                if (a10 != null) {
                    a10.close();
                }
                return connectivityManager;
            }
            f29044y = (ConnectivityManager) context.getSystemService("connectivity");
            if (f29044y == null) {
                iLogger.c(SentryLevel.INFO, "ConnectivityManager is null and cannot check network status", new Object[0]);
            }
            ConnectivityManager connectivityManager2 = f29044y;
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
        if (this.f29049o.a() - this.f29056v < 120000) {
            return true;
        }
        return false;
    }

    public static boolean Y0(Context context, ILogger iLogger, x0 x0Var, ConnectivityManager.NetworkCallback networkCallback) {
        if (x0Var.d() < 24) {
            iLogger.c(SentryLevel.DEBUG, "NetworkCallbacks need Android N+.", new Object[0]);
            return false;
        } else if (!s.a(context, "android.permission.ACCESS_NETWORK_STATE")) {
            iLogger.c(SentryLevel.INFO, "No permission (ACCESS_NETWORK_STATE) to check network status.", new Object[0]);
            return false;
        } else {
            a1 a10 = f29045z.a();
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

    private boolean Y1(NetworkCapabilities networkCapabilities) {
        if (networkCapabilities == null) {
            return false;
        }
        boolean hasCapability = networkCapabilities.hasCapability(12);
        if (this.f29048i.d() >= 23) {
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
        a1 a10 = f29045z.a();
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
    public void d1() {
        if (e1.s() && this.f29053s == null) {
            a1 a10 = this.f29052r.a();
            try {
                if (this.f29053s != null) {
                    if (a10 != null) {
                        a10.close();
                        return;
                    }
                    return;
                }
                a aVar = new a();
                if (b2(this.f29046d, this.f29047e.getLogger(), this.f29048i, this.f29051q, aVar)) {
                    this.f29053s = aVar;
                    this.f29047e.getLogger().c(SentryLevel.DEBUG, "Network callback registered successfully", new Object[0]);
                } else {
                    this.f29047e.getLogger().c(SentryLevel.WARNING, "Failed to register network callback", new Object[0]);
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
            this.f29047e.getExecutorService().submit(runnable);
        } catch (Throwable th2) {
            this.f29047e.getLogger().b(SentryLevel.ERROR, "AndroidConnectionStatusProvider submit failed", th2);
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
        a1 a10 = this.f29052r.a();
        if (z10) {
            try {
                this.f29050p.clear();
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
        ConnectivityManager.NetworkCallback networkCallback = this.f29053s;
        this.f29053s = null;
        if (networkCallback != null) {
            h2(this.f29046d, this.f29047e.getLogger(), networkCallback);
        }
        this.f29054t = null;
        this.f29055u = null;
        this.f29056v = 0L;
        if (a10 != null) {
            a10.close();
        }
        this.f29047e.getLogger().c(SentryLevel.DEBUG, "Network callback unregistered", new Object[0]);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void j2(NetworkCapabilities networkCapabilities) {
        NetworkCapabilities networkCapabilities2;
        a1 a10 = this.f29052r.a();
        try {
            if (networkCapabilities != null) {
                this.f29054t = networkCapabilities;
            } else if (!s.a(this.f29046d, "android.permission.ACCESS_NETWORK_STATE")) {
                this.f29047e.getLogger().c(SentryLevel.INFO, "No permission (ACCESS_NETWORK_STATE) to check network status.", new Object[0]);
                this.f29054t = null;
                this.f29056v = this.f29049o.a();
                if (a10 != null) {
                    a10.close();
                    return;
                }
                return;
            } else if (this.f29048i.d() < 23) {
                this.f29054t = null;
                this.f29056v = this.f29049o.a();
                if (a10 != null) {
                    a10.close();
                    return;
                }
                return;
            } else {
                ConnectivityManager U1 = U1(this.f29046d, this.f29047e.getLogger());
                if (U1 != null) {
                    Network activeNetwork = U1.getActiveNetwork();
                    if (activeNetwork != null) {
                        networkCapabilities2 = U1.getNetworkCapabilities(activeNetwork);
                    } else {
                        networkCapabilities2 = null;
                    }
                    this.f29054t = networkCapabilities2;
                } else {
                    this.f29054t = null;
                }
            }
            this.f29056v = this.f29049o.a();
            this.f29047e.getLogger().c(SentryLevel.DEBUG, "Cache updated - Status: " + y1() + ", Type: " + E1(), new Object[0]);
        } catch (Throwable th2) {
            try {
                this.f29047e.getLogger().b(SentryLevel.WARNING, "Failed to update connection status cache", th2);
                this.f29054t = null;
                this.f29056v = this.f29049o.a();
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
        a1 a10 = f29045z.a();
        try {
            A.clear();
            if (a10 != null) {
                a10.close();
            }
            a10 = f29043x.a();
            try {
                f29044y = null;
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
        if (this.f29054t != null) {
            if (Y1(this.f29054t)) {
                return k0.a.CONNECTED;
            }
            return k0.a.DISCONNECTED;
        }
        ConnectivityManager U1 = U1(this.f29046d, this.f29047e.getLogger());
        if (U1 != null) {
            return x1(this.f29046d, U1, this.f29047e.getLogger());
        }
        return k0.a.UNKNOWN;
    }

    @Override // io.sentry.k0
    public boolean M1(k0.b bVar) {
        a1 a10 = this.f29052r.a();
        try {
            this.f29050p.add(bVar);
            if (a10 != null) {
                a10.close();
            }
            d1();
            if (this.f29053s != null) {
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
        a1 a10 = this.f29052r.a();
        try {
            this.f29050p.remove(bVar);
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
        if (this.f29053s != null) {
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
        if (this.f29053s == null) {
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
        this.f29052r = new io.sentry.util.a();
        this.f29056v = 0L;
        this.f29057w = new AtomicBoolean(false);
        this.f29046d = e1.g(context);
        this.f29047e = k7Var;
        this.f29048i = x0Var;
        this.f29049o = pVar;
        this.f29051q = handler;
        this.f29050p = new ArrayList();
        int[] iArr = C;
        iArr[0] = 12;
        if (x0Var.d() >= 23) {
            iArr[1] = 16;
        }
        f2(new Runnable() { // from class: io.sentry.android.core.internal.util.b
            @Override // java.lang.Runnable
            public final void run() {
                e.this.d1();
            }
        });
        w0.E().n(this);
    }
}
