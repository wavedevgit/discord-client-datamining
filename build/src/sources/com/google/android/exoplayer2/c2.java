package com.google.android.exoplayer2;

import android.content.Context;
import android.net.wifi.WifiManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c2 {

    /* renamed from: a  reason: collision with root package name */
    private final WifiManager f12486a;

    /* renamed from: b  reason: collision with root package name */
    private WifiManager.WifiLock f12487b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f12488c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f12489d;

    public c2(Context context) {
        this.f12486a = (WifiManager) context.getApplicationContext().getSystemService("wifi");
    }

    private void c() {
        WifiManager.WifiLock wifiLock = this.f12487b;
        if (wifiLock == null) {
            return;
        }
        if (this.f12488c && this.f12489d) {
            wifiLock.acquire();
        } else {
            wifiLock.release();
        }
    }

    public void a(boolean z10) {
        if (z10 && this.f12487b == null) {
            WifiManager wifiManager = this.f12486a;
            if (wifiManager == null) {
                oe.y.i("WifiLockManager", "WifiManager is null, therefore not creating the WifiLock.");
                return;
            }
            WifiManager.WifiLock createWifiLock = wifiManager.createWifiLock(3, "ExoPlayer:WifiLockManager");
            this.f12487b = createWifiLock;
            createWifiLock.setReferenceCounted(false);
        }
        this.f12488c = z10;
        c();
    }

    public void b(boolean z10) {
        this.f12489d = z10;
        c();
    }
}
