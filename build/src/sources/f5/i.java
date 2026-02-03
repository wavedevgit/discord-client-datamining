package f5;

import android.net.ConnectivityManager;
import android.net.Network;
import android.net.NetworkCapabilities;
import android.net.NetworkRequest;
import f5.g;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class i implements g {

    /* renamed from: a  reason: collision with root package name */
    private final ConnectivityManager f23192a;

    /* renamed from: b  reason: collision with root package name */
    private final g.a f23193b;

    /* renamed from: c  reason: collision with root package name */
    private final a f23194c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends ConnectivityManager.NetworkCallback {
        a() {
        }

        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onAvailable(Network network) {
            i.this.d(network, true);
        }

        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onLost(Network network) {
            i.this.d(network, false);
        }
    }

    public i(ConnectivityManager connectivityManager, g.a aVar) {
        this.f23192a = connectivityManager;
        this.f23193b = aVar;
        a aVar2 = new a();
        this.f23194c = aVar2;
        connectivityManager.registerNetworkCallback(new NetworkRequest.Builder().addCapability(12).build(), aVar2);
    }

    private final boolean c(Network network) {
        NetworkCapabilities networkCapabilities = this.f23192a.getNetworkCapabilities(network);
        if (networkCapabilities != null && networkCapabilities.hasCapability(12)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void d(Network network, boolean z10) {
        boolean c10;
        Network[] allNetworks = this.f23192a.getAllNetworks();
        int length = allNetworks.length;
        boolean z11 = false;
        int i10 = 0;
        while (true) {
            if (i10 >= length) {
                break;
            }
            Network network2 = allNetworks[i10];
            if (Intrinsics.areEqual(network2, network)) {
                c10 = z10;
            } else {
                c10 = c(network2);
            }
            if (c10) {
                z11 = true;
                break;
            }
            i10++;
        }
        this.f23193b.a(z11);
    }

    @Override // f5.g
    public boolean a() {
        for (Network network : this.f23192a.getAllNetworks()) {
            if (c(network)) {
                return true;
            }
        }
        return false;
    }

    @Override // f5.g
    public void shutdown() {
        this.f23192a.unregisterNetworkCallback(this.f23194c);
    }
}
