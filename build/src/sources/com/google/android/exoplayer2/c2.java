package com.google.android.exoplayer2;

import android.content.Context;
import android.net.wifi.WifiManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c2 {

    /* renamed from: a  reason: collision with root package name */
    private final WifiManager f13094a;

    /* renamed from: b  reason: collision with root package name */
    private WifiManager.WifiLock f13095b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f13096c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f13097d;

    public c2(Context context) {
        this.f13094a = (WifiManager) context.getApplicationContext().getSystemService("wifi");
    }

    private void c() {
        WifiManager.WifiLock wifiLock = this.f13095b;
        if (wifiLock == null) {
            return;
        }
        if (this.f13096c && this.f13097d) {
            wifiLock.acquire();
        } else {
            wifiLock.release();
        }
    }

    public void a(boolean z10) {
        if (z10 && this.f13095b == null) {
            WifiManager wifiManager = this.f13094a;
            if (wifiManager == null) {
                ne.y.i("WifiLockManager", "WifiManager is null, therefore not creating the WifiLock.");
                return;
            }
            WifiManager.WifiLock createWifiLock = wifiManager.createWifiLock(3, "ExoPlayer:WifiLockManager");
            this.f13095b = createWifiLock;
            createWifiLock.setReferenceCounted(false);
        }
        this.f13096c = z10;
        c();
    }

    public void b(boolean z10) {
        this.f13097d = z10;
        c();
    }
}
