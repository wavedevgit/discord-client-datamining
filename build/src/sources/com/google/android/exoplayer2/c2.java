package com.google.android.exoplayer2;

import android.content.Context;
import android.net.wifi.WifiManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c2 {

    /* renamed from: a  reason: collision with root package name */
    private final WifiManager f12062a;

    /* renamed from: b  reason: collision with root package name */
    private WifiManager.WifiLock f12063b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f12064c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f12065d;

    public c2(Context context) {
        this.f12062a = (WifiManager) context.getApplicationContext().getSystemService("wifi");
    }

    private void c() {
        WifiManager.WifiLock wifiLock = this.f12063b;
        if (wifiLock == null) {
            return;
        }
        if (this.f12064c && this.f12065d) {
            wifiLock.acquire();
        } else {
            wifiLock.release();
        }
    }

    public void a(boolean z10) {
        if (z10 && this.f12063b == null) {
            WifiManager wifiManager = this.f12062a;
            if (wifiManager == null) {
                ne.y.i("WifiLockManager", "WifiManager is null, therefore not creating the WifiLock.");
                return;
            }
            WifiManager.WifiLock createWifiLock = wifiManager.createWifiLock(3, "ExoPlayer:WifiLockManager");
            this.f12063b = createWifiLock;
            createWifiLock.setReferenceCounted(false);
        }
        this.f12064c = z10;
        c();
    }

    public void b(boolean z10) {
        this.f12065d = z10;
        c();
    }
}
