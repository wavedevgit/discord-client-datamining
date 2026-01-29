package com.discord.wakelock;

import android.os.PowerManager;
import kotlin.Metadata;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0003\b\u0000\u0018\u00002\u00020\u0001B!\b\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tB!\b\u0016\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\fJ\u0006\u0010\u000f\u001a\u00020\u0010J\u0006\u0010\u0011\u001a\u00020\u0010J\u000e\u0010\u0012\u001a\b\u0018\u00010\u000eR\u00020\u0003H\u0002R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\r\u001a\b\u0018\u00010\u000eR\u00020\u0003X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u0013"}, d2 = {"Lcom/discord/wakelock/ProximitySensorWakeLock;", "", "powerManager", "Landroid/os/PowerManager;", "timeout", "", "tag", "", "<init>", "(Landroid/os/PowerManager;JLjava/lang/String;)V", "context", "Landroid/content/Context;", "(Landroid/content/Context;JLjava/lang/String;)V", "systemWakeLock", "Landroid/os/PowerManager$WakeLock;", "acquire", "", "release", "createProximityScreenWakeLock", "wakelock_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ProximitySensorWakeLock {
    @NotNull
    private final PowerManager powerManager;
    private PowerManager.WakeLock systemWakeLock;
    @NotNull
    private final String tag;
    private final long timeout;

    private ProximitySensorWakeLock(PowerManager powerManager, long j10, String str) {
        this.powerManager = powerManager;
        this.timeout = j10;
        this.tag = str;
    }

    private final PowerManager.WakeLock createProximityScreenWakeLock() {
        if (!this.powerManager.isWakeLockLevelSupported(32)) {
            return null;
        }
        PowerManager.WakeLock newWakeLock = this.powerManager.newWakeLock(32, this.tag);
        newWakeLock.setReferenceCounted(false);
        return newWakeLock;
    }

    public final void acquire() {
        if (this.systemWakeLock == null) {
            PowerManager.WakeLock createProximityScreenWakeLock = createProximityScreenWakeLock();
            this.systemWakeLock = createProximityScreenWakeLock;
            if (createProximityScreenWakeLock != null) {
                createProximityScreenWakeLock.acquire(this.timeout);
            }
        }
    }

    public final void release() {
        PowerManager.WakeLock wakeLock = this.systemWakeLock;
        if (wakeLock != null) {
            wakeLock.release();
        }
        this.systemWakeLock = null;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public ProximitySensorWakeLock(@org.jetbrains.annotations.NotNull android.content.Context r2, long r3, @org.jetbrains.annotations.NotNull java.lang.String r5) {
        /*
            r1 = this;
            java.lang.String r0 = "context"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r2, r0)
            java.lang.String r0 = "tag"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r5, r0)
            java.lang.Class<android.os.PowerManager> r0 = android.os.PowerManager.class
            java.lang.Object r2 = r2.getSystemService(r0)
            java.lang.String r0 = "getSystemService(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r2, r0)
            android.os.PowerManager r2 = (android.os.PowerManager) r2
            r1.<init>(r2, r3, r5)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.wakelock.ProximitySensorWakeLock.<init>(android.content.Context, long, java.lang.String):void");
    }
}
