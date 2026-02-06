package com.google.android.exoplayer2;

import android.content.Context;
import android.net.wifi.WifiManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c2 {

    /* renamed from: a  reason: collision with root package name */
    private final WifiManager f12346a;

    /* renamed from: b  reason: collision with root package name */
    private WifiManager.WifiLock f12347b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f12348c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f12349d;

    public c2(Context context) {
        this.f12346a = (WifiManager) context.getApplicationContext().getSystemService("wifi");
    }

    private void c() {
        WifiManager.WifiLock wifiLock = this.f12347b;
        if (wifiLock == null) {
            return;
        }
        if (this.f12348c && this.f12349d) {
            wifiLock.acquire();
        } else {
            wifiLock.release();
        }
    }

    public void a(boolean z10) {
        if (z10 && this.f12347b == null) {
            WifiManager wifiManager = this.f12346a;
            if (wifiManager == null) {
                ne.y.i("WifiLockManager", "WifiManager is null, therefore not creating the WifiLock.");
                return;
            }
            WifiManager.WifiLock createWifiLock = wifiManager.createWifiLock(3, "ExoPlayer:WifiLockManager");
            this.f12347b = createWifiLock;
            createWifiLock.setReferenceCounted(false);
        }
        this.f12348c = z10;
        c();
    }

    public void b(boolean z10) {
        this.f12349d = z10;
        c();
    }
}
