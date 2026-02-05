package com.google.android.exoplayer2;

import android.content.Context;
import android.net.wifi.WifiManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c2 {

    /* renamed from: a  reason: collision with root package name */
    private final WifiManager f12447a;

    /* renamed from: b  reason: collision with root package name */
    private WifiManager.WifiLock f12448b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f12449c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f12450d;

    public c2(Context context) {
        this.f12447a = (WifiManager) context.getApplicationContext().getSystemService("wifi");
    }

    private void c() {
        WifiManager.WifiLock wifiLock = this.f12448b;
        if (wifiLock == null) {
            return;
        }
        if (this.f12449c && this.f12450d) {
            wifiLock.acquire();
        } else {
            wifiLock.release();
        }
    }

    public void a(boolean z10) {
        if (z10 && this.f12448b == null) {
            WifiManager wifiManager = this.f12447a;
            if (wifiManager == null) {
                ne.y.i("WifiLockManager", "WifiManager is null, therefore not creating the WifiLock.");
                return;
            }
            WifiManager.WifiLock createWifiLock = wifiManager.createWifiLock(3, "ExoPlayer:WifiLockManager");
            this.f12448b = createWifiLock;
            createWifiLock.setReferenceCounted(false);
        }
        this.f12449c = z10;
        c();
    }

    public void b(boolean z10) {
        this.f12450d = z10;
        c();
    }
}
