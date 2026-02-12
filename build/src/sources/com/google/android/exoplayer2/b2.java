package com.google.android.exoplayer2;

import android.content.Context;
import android.os.PowerManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b2 {

    /* renamed from: a  reason: collision with root package name */
    private final PowerManager f13053a;

    /* renamed from: b  reason: collision with root package name */
    private PowerManager.WakeLock f13054b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f13055c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f13056d;

    public b2(Context context) {
        this.f13053a = (PowerManager) context.getApplicationContext().getSystemService("power");
    }

    private void c() {
        PowerManager.WakeLock wakeLock = this.f13054b;
        if (wakeLock == null) {
            return;
        }
        if (this.f13055c && this.f13056d) {
            wakeLock.acquire();
        } else {
            wakeLock.release();
        }
    }

    public void a(boolean z10) {
        if (z10 && this.f13054b == null) {
            PowerManager powerManager = this.f13053a;
            if (powerManager == null) {
                oe.y.i("WakeLockManager", "PowerManager is null, therefore not creating the WakeLock.");
                return;
            }
            PowerManager.WakeLock newWakeLock = powerManager.newWakeLock(1, "ExoPlayer:WakeLockManager");
            this.f13054b = newWakeLock;
            newWakeLock.setReferenceCounted(false);
        }
        this.f13055c = z10;
        c();
    }

    public void b(boolean z10) {
        this.f13056d = z10;
        c();
    }
}
