package com.google.android.exoplayer2;

import android.content.Context;
import android.os.PowerManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b2 {

    /* renamed from: a  reason: collision with root package name */
    private final PowerManager f13052a;

    /* renamed from: b  reason: collision with root package name */
    private PowerManager.WakeLock f13053b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f13054c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f13055d;

    public b2(Context context) {
        this.f13052a = (PowerManager) context.getApplicationContext().getSystemService("power");
    }

    private void c() {
        PowerManager.WakeLock wakeLock = this.f13053b;
        if (wakeLock == null) {
            return;
        }
        if (this.f13054c && this.f13055d) {
            wakeLock.acquire();
        } else {
            wakeLock.release();
        }
    }

    public void a(boolean z10) {
        if (z10 && this.f13053b == null) {
            PowerManager powerManager = this.f13052a;
            if (powerManager == null) {
                oe.y.i("WakeLockManager", "PowerManager is null, therefore not creating the WakeLock.");
                return;
            }
            PowerManager.WakeLock newWakeLock = powerManager.newWakeLock(1, "ExoPlayer:WakeLockManager");
            this.f13053b = newWakeLock;
            newWakeLock.setReferenceCounted(false);
        }
        this.f13054c = z10;
        c();
    }

    public void b(boolean z10) {
        this.f13055d = z10;
        c();
    }
}
