package com.google.android.exoplayer2;

import android.content.Context;
import android.os.PowerManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b2 {

    /* renamed from: a  reason: collision with root package name */
    private final PowerManager f12335a;

    /* renamed from: b  reason: collision with root package name */
    private PowerManager.WakeLock f12336b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f12337c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f12338d;

    public b2(Context context) {
        this.f12335a = (PowerManager) context.getApplicationContext().getSystemService("power");
    }

    private void c() {
        PowerManager.WakeLock wakeLock = this.f12336b;
        if (wakeLock == null) {
            return;
        }
        if (this.f12337c && this.f12338d) {
            wakeLock.acquire();
        } else {
            wakeLock.release();
        }
    }

    public void a(boolean z10) {
        if (z10 && this.f12336b == null) {
            PowerManager powerManager = this.f12335a;
            if (powerManager == null) {
                ne.y.i("WakeLockManager", "PowerManager is null, therefore not creating the WakeLock.");
                return;
            }
            PowerManager.WakeLock newWakeLock = powerManager.newWakeLock(1, "ExoPlayer:WakeLockManager");
            this.f12336b = newWakeLock;
            newWakeLock.setReferenceCounted(false);
        }
        this.f12337c = z10;
        c();
    }

    public void b(boolean z10) {
        this.f12338d = z10;
        c();
    }
}
