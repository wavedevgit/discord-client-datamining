package zl;

import android.net.ConnectivityManager;
import android.net.LinkProperties;
import android.net.Network;
import android.net.NetworkCapabilities;
import android.os.Handler;
import android.os.Looper;
import androidx.recyclerview.widget.h;
import com.facebook.react.bridge.ReactApplicationContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f extends b {

    /* renamed from: j  reason: collision with root package name */
    private final a f55804j;

    /* renamed from: k  reason: collision with root package name */
    private Network f55805k;

    /* renamed from: l  reason: collision with root package name */
    private NetworkCapabilities f55806l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private class a extends ConnectivityManager.NetworkCallback {
        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onAvailable(Network network) {
            f.this.f55805k = network;
            f.this.q(h.DEFAULT_SWIPE_ANIMATION_DURATION);
        }

        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onCapabilitiesChanged(Network network, NetworkCapabilities networkCapabilities) {
            f.this.f55805k = network;
            f.this.f55806l = networkCapabilities;
            f.this.s();
        }

        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onLinkPropertiesChanged(Network network, LinkProperties linkProperties) {
            if (f.this.f55805k != null) {
                f.this.f55805k = network;
            }
            f.this.q(h.DEFAULT_SWIPE_ANIMATION_DURATION);
        }

        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onLosing(Network network, int i10) {
            f.this.f55805k = network;
            f.this.s();
        }

        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onLost(Network network) {
            f.this.f55805k = null;
            f.this.f55806l = null;
            f.this.s();
        }

        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onUnavailable() {
            f.this.f55805k = null;
            f.this.f55806l = null;
            f.this.s();
        }

        private a() {
        }
    }

    public f(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
        this.f55805k = null;
        this.f55806l = null;
        this.f55804j = new a();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void q(int i10) {
        new Handler(Looper.getMainLooper()).postDelayed(new Runnable() { // from class: zl.e
            @Override // java.lang.Runnable
            public final void run() {
                f.this.r();
            }
        }, i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void r() {
        try {
            this.f55806l = c().getNetworkCapabilities(this.f55805k);
            s();
        } catch (SecurityException unused) {
        }
    }

    @Override // zl.b
    public void g() {
        try {
            this.f55805k = c().getActiveNetwork();
            q(0);
            c().registerDefaultNetworkCallback(this.f55804j);
        } catch (SecurityException unused) {
        }
    }

    @Override // zl.b
    public void j() {
        try {
            c().unregisterNetworkCallback(this.f55804j);
        } catch (IllegalArgumentException | SecurityException unused) {
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:25:0x004c  */
    /* JADX WARN: Removed duplicated region for block: B:26:0x0054  */
    /* JADX WARN: Removed duplicated region for block: B:41:0x0082  */
    /* JADX WARN: Removed duplicated region for block: B:45:0x008c  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    void s() {
        /*
            r10 = this;
            am.b r0 = am.b.UNKNOWN
            android.net.Network r1 = r10.f55805k
            android.net.NetworkCapabilities r2 = r10.f55806l
            r3 = 0
            r4 = 0
            if (r2 == 0) goto L9a
            r5 = 2
            boolean r5 = r2.hasTransport(r5)
            r6 = 4
            r7 = 1
            if (r5 == 0) goto L16
            am.b r0 = am.b.BLUETOOTH
            goto L3a
        L16:
            boolean r5 = r2.hasTransport(r4)
            if (r5 == 0) goto L1f
            am.b r0 = am.b.CELLULAR
            goto L3a
        L1f:
            r5 = 3
            boolean r5 = r2.hasTransport(r5)
            if (r5 == 0) goto L29
            am.b r0 = am.b.ETHERNET
            goto L3a
        L29:
            boolean r5 = r2.hasTransport(r7)
            if (r5 == 0) goto L32
            am.b r0 = am.b.WIFI
            goto L3a
        L32:
            boolean r5 = r2.hasTransport(r6)
            if (r5 == 0) goto L3a
            am.b r0 = am.b.VPN
        L3a:
            if (r1 == 0) goto L45
            android.net.ConnectivityManager r5 = r10.c()     // Catch: java.lang.SecurityException -> L45
            android.net.NetworkInfo r5 = r5.getNetworkInfo(r1)     // Catch: java.lang.SecurityException -> L45
            goto L46
        L45:
            r5 = r3
        L46:
            int r8 = android.os.Build.VERSION.SDK_INT
            r9 = 28
            if (r8 < r9) goto L54
            r8 = 21
            boolean r8 = r2.hasCapability(r8)
            r8 = r8 ^ r7
            goto L67
        L54:
            if (r1 == 0) goto L66
            if (r5 == 0) goto L66
            android.net.NetworkInfo$DetailedState r8 = r5.getDetailedState()
            android.net.NetworkInfo$DetailedState r9 = android.net.NetworkInfo.DetailedState.CONNECTED
            boolean r8 = r8.equals(r9)
            if (r8 != 0) goto L66
            r8 = r7
            goto L67
        L66:
            r8 = r4
        L67:
            r9 = 12
            boolean r9 = r2.hasCapability(r9)
            if (r9 == 0) goto L7b
            r9 = 16
            boolean r9 = r2.hasCapability(r9)
            if (r9 == 0) goto L7b
            if (r8 != 0) goto L7b
            r8 = r7
            goto L7c
        L7b:
            r8 = r4
        L7c:
            boolean r6 = r2.hasTransport(r6)
            if (r6 == 0) goto L8c
            if (r8 == 0) goto L8d
            int r2 = r2.getLinkDownstreamBandwidthKbps()
            if (r2 == 0) goto L8d
            r4 = r7
            goto L8d
        L8c:
            r4 = r8
        L8d:
            if (r1 == 0) goto L9c
            am.b r1 = am.b.CELLULAR
            if (r0 != r1) goto L9c
            if (r4 == 0) goto L9c
            am.a r3 = am.a.d(r5)
            goto L9c
        L9a:
            am.b r0 = am.b.NONE
        L9c:
            r10.k(r0, r3, r4)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: zl.f.s():void");
    }
}
