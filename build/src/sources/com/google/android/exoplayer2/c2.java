package com.google.android.exoplayer2;

import android.content.Context;
import android.net.wifi.WifiManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c2 {

    /* renamed from: a  reason: collision with root package name */
    private final WifiManager f13064a;

    /* renamed from: b  reason: collision with root package name */
    private WifiManager.WifiLock f13065b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f13066c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f13067d;

    public c2(Context context) {
        this.f13064a = (WifiManager) context.getApplicationContext().getSystemService("wifi");
    }

    private void c() {
        WifiManager.WifiLock wifiLock = this.f13065b;
        if (wifiLock == null) {
            return;
        }
        if (this.f13066c && this.f13067d) {
            wifiLock.acquire();
        } else {
            wifiLock.release();
        }
    }

    public void a(boolean z10) {
        if (z10 && this.f13065b == null) {
            WifiManager wifiManager = this.f13064a;
            if (wifiManager == null) {
                oe.y.i("WifiLockManager", "WifiManager is null, therefore not creating the WifiLock.");
                return;
            }
            WifiManager.WifiLock createWifiLock = wifiManager.createWifiLock(3, "ExoPlayer:WifiLockManager");
            this.f13065b = createWifiLock;
            createWifiLock.setReferenceCounted(false);
        }
        this.f13066c = z10;
        c();
    }

    public void b(boolean z10) {
        this.f13067d = z10;
        c();
    }
}
