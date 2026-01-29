package com.google.android.exoplayer2;

import android.content.Context;
import android.os.PowerManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b2 {

    /* renamed from: a  reason: collision with root package name */
    private final PowerManager f13454a;

    /* renamed from: b  reason: collision with root package name */
    private PowerManager.WakeLock f13455b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f13456c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f13457d;

    public b2(Context context) {
        this.f13454a = (PowerManager) context.getApplicationContext().getSystemService("power");
    }

    private void c() {
        PowerManager.WakeLock wakeLock = this.f13455b;
        if (wakeLock == null) {
            return;
        }
        if (this.f13456c && this.f13457d) {
            wakeLock.acquire();
        } else {
            wakeLock.release();
        }
    }

    public void a(boolean z10) {
        if (z10 && this.f13455b == null) {
            PowerManager powerManager = this.f13454a;
            if (powerManager == null) {
                ne.y.i("WakeLockManager", "PowerManager is null, therefore not creating the WakeLock.");
                return;
            }
            PowerManager.WakeLock newWakeLock = powerManager.newWakeLock(1, "ExoPlayer:WakeLockManager");
            this.f13455b = newWakeLock;
            newWakeLock.setReferenceCounted(false);
        }
        this.f13456c = z10;
        c();
    }

    public void b(boolean z10) {
        this.f13457d = z10;
        c();
    }
}
