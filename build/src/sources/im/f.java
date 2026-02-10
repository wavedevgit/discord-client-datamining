package im;

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
    private final a f28002j;

    /* renamed from: k  reason: collision with root package name */
    private Network f28003k;

    /* renamed from: l  reason: collision with root package name */
    private NetworkCapabilities f28004l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private class a extends ConnectivityManager.NetworkCallback {
        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onAvailable(Network network) {
            f.this.f28003k = network;
            f.this.q(h.DEFAULT_SWIPE_ANIMATION_DURATION);
        }

        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onCapabilitiesChanged(Network network, NetworkCapabilities networkCapabilities) {
            f.this.f28003k = network;
            f.this.f28004l = networkCapabilities;
            f.this.s();
        }

        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onLinkPropertiesChanged(Network network, LinkProperties linkProperties) {
            if (f.this.f28003k != null) {
                f.this.f28003k = network;
            }
            f.this.q(h.DEFAULT_SWIPE_ANIMATION_DURATION);
        }

        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onLosing(Network network, int i10) {
            f.this.f28003k = network;
            f.this.s();
        }

        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onLost(Network network) {
            f.this.f28003k = null;
            f.this.f28004l = null;
            f.this.s();
        }

        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onUnavailable() {
            f.this.f28003k = null;
            f.this.f28004l = null;
            f.this.s();
        }

        private a() {
        }
    }

    public f(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
        this.f28003k = null;
        this.f28004l = null;
        this.f28002j = new a();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void q(int i10) {
        new Handler(Looper.getMainLooper()).postDelayed(new Runnable() { // from class: im.e
            @Override // java.lang.Runnable
            public final void run() {
                f.this.r();
            }
        }, i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void r() {
        try {
            this.f28004l = c().getNetworkCapabilities(this.f28003k);
            s();
        } catch (SecurityException unused) {
        }
    }

    @Override // im.b
    public void g() {
        try {
            this.f28003k = c().getActiveNetwork();
            q(0);
            c().registerDefaultNetworkCallback(this.f28002j);
        } catch (SecurityException unused) {
        }
    }

    @Override // im.b
    public void j() {
        try {
            c().unregisterNetworkCallback(this.f28002j);
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
            jm.b r0 = jm.b.UNKNOWN
            android.net.Network r1 = r10.f28003k
            android.net.NetworkCapabilities r2 = r10.f28004l
            r3 = 0
            r4 = 0
            if (r2 == 0) goto L9a
            r5 = 2
            boolean r5 = r2.hasTransport(r5)
            r6 = 4
            r7 = 1
            if (r5 == 0) goto L16
            jm.b r0 = jm.b.BLUETOOTH
            goto L3a
        L16:
            boolean r5 = r2.hasTransport(r4)
            if (r5 == 0) goto L1f
            jm.b r0 = jm.b.CELLULAR
            goto L3a
        L1f:
            r5 = 3
            boolean r5 = r2.hasTransport(r5)
            if (r5 == 0) goto L29
            jm.b r0 = jm.b.ETHERNET
            goto L3a
        L29:
            boolean r5 = r2.hasTransport(r7)
            if (r5 == 0) goto L32
            jm.b r0 = jm.b.WIFI
            goto L3a
        L32:
            boolean r5 = r2.hasTransport(r6)
            if (r5 == 0) goto L3a
            jm.b r0 = jm.b.VPN
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
            jm.b r1 = jm.b.CELLULAR
            if (r0 != r1) goto L9c
            if (r4 == 0) goto L9c
            jm.a r3 = jm.a.d(r5)
            goto L9c
        L9a:
            jm.b r0 = jm.b.NONE
        L9c:
            r10.k(r0, r3, r4)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: im.f.s():void");
    }
}
