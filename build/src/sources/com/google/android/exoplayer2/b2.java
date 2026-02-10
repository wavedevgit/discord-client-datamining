package com.google.android.exoplayer2;

import android.content.Context;
import android.os.PowerManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b2 {

    /* renamed from: a  reason: collision with root package name */
    private final PowerManager f12475a;

    /* renamed from: b  reason: collision with root package name */
    private PowerManager.WakeLock f12476b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f12477c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f12478d;

    public b2(Context context) {
        this.f12475a = (PowerManager) context.getApplicationContext().getSystemService("power");
    }

    private void c() {
        PowerManager.WakeLock wakeLock = this.f12476b;
        if (wakeLock == null) {
            return;
        }
        if (this.f12477c && this.f12478d) {
            wakeLock.acquire();
        } else {
            wakeLock.release();
        }
    }

    public void a(boolean z10) {
        if (z10 && this.f12476b == null) {
            PowerManager powerManager = this.f12475a;
            if (powerManager == null) {
                oe.y.i("WakeLockManager", "PowerManager is null, therefore not creating the WakeLock.");
                return;
            }
            PowerManager.WakeLock newWakeLock = powerManager.newWakeLock(1, "ExoPlayer:WakeLockManager");
            this.f12476b = newWakeLock;
            newWakeLock.setReferenceCounted(false);
        }
        this.f12477c = z10;
        c();
    }

    public void b(boolean z10) {
        this.f12478d = z10;
        c();
    }
}
