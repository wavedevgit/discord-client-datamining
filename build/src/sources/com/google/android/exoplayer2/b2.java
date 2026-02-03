package com.google.android.exoplayer2;

import android.content.Context;
import android.os.PowerManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b2 {

    /* renamed from: a  reason: collision with root package name */
    private final PowerManager f12051a;

    /* renamed from: b  reason: collision with root package name */
    private PowerManager.WakeLock f12052b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f12053c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f12054d;

    public b2(Context context) {
        this.f12051a = (PowerManager) context.getApplicationContext().getSystemService("power");
    }

    private void c() {
        PowerManager.WakeLock wakeLock = this.f12052b;
        if (wakeLock == null) {
            return;
        }
        if (this.f12053c && this.f12054d) {
            wakeLock.acquire();
        } else {
            wakeLock.release();
        }
    }

    public void a(boolean z10) {
        if (z10 && this.f12052b == null) {
            PowerManager powerManager = this.f12051a;
            if (powerManager == null) {
                ne.y.i("WakeLockManager", "PowerManager is null, therefore not creating the WakeLock.");
                return;
            }
            PowerManager.WakeLock newWakeLock = powerManager.newWakeLock(1, "ExoPlayer:WakeLockManager");
            this.f12052b = newWakeLock;
            newWakeLock.setReferenceCounted(false);
        }
        this.f12053c = z10;
        c();
    }

    public void b(boolean z10) {
        this.f12054d = z10;
        c();
    }
}
