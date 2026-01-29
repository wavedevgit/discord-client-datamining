package com.discord.notifications.renderer;

import kotlin.Metadata;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u000f\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003¢\u0006\u0004\b\u0006\u0010\u0007J\t\u0010\f\u001a\u00020\u0003HÆ\u0003J\t\u0010\r\u001a\u00020\u0003HÆ\u0003J\t\u0010\u000e\u001a\u00020\u0003HÆ\u0003J'\u0010\u000f\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0010\u001a\u00020\u00032\b\u0010\u0011\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0012\u001a\u00020\u0013HÖ\u0001J\t\u0010\u0014\u001a\u00020\u0015HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\tR\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\t¨\u0006\u0016"}, d2 = {"Lcom/discord/notifications/renderer/NotificationBehaviors;", "", "soundsEnabled", "", "vibrationsEnabled", "lightsEnabled", "<init>", "(ZZZ)V", "getSoundsEnabled", "()Z", "getVibrationsEnabled", "getLightsEnabled", "component1", "component2", "component3", "copy", "equals", "other", "hashCode", "", "toString", "", "notification_renderer_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class NotificationBehaviors {
    private final boolean lightsEnabled;
    private final boolean soundsEnabled;
    private final boolean vibrationsEnabled;

    public NotificationBehaviors(boolean z10, boolean z11, boolean z12) {
        this.soundsEnabled = z10;
        this.vibrationsEnabled = z11;
        this.lightsEnabled = z12;
    }

    public static /* synthetic */ NotificationBehaviors copy$default(NotificationBehaviors notificationBehaviors, boolean z10, boolean z11, boolean z12, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = notificationBehaviors.soundsEnabled;
        }
        if ((i10 & 2) != 0) {
            z11 = notificationBehaviors.vibrationsEnabled;
        }
        if ((i10 & 4) != 0) {
            z12 = notificationBehaviors.lightsEnabled;
        }
        return notificationBehaviors.copy(z10, z11, z12);
    }

    public final boolean component1() {
        return this.soundsEnabled;
    }

    public final boolean component2() {
        return this.vibrationsEnabled;
    }

    public final boolean component3() {
        return this.lightsEnabled;
    }

    @NotNull
    public final NotificationBehaviors copy(boolean z10, boolean z11, boolean z12) {
        return new NotificationBehaviors(z10, z11, z12);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof NotificationBehaviors) {
            NotificationBehaviors notificationBehaviors = (NotificationBehaviors) obj;
            return this.soundsEnabled == notificationBehaviors.soundsEnabled && this.vibrationsEnabled == notificationBehaviors.vibrationsEnabled && this.lightsEnabled == notificationBehaviors.lightsEnabled;
        }
        return false;
    }

    public final boolean getLightsEnabled() {
        return this.lightsEnabled;
    }

    public final boolean getSoundsEnabled() {
        return this.soundsEnabled;
    }

    public final boolean getVibrationsEnabled() {
        return this.vibrationsEnabled;
    }

    public int hashCode() {
        return (((Boolean.hashCode(this.soundsEnabled) * 31) + Boolean.hashCode(this.vibrationsEnabled)) * 31) + Boolean.hashCode(this.lightsEnabled);
    }

    @NotNull
    public String toString() {
        boolean z10 = this.soundsEnabled;
        boolean z11 = this.vibrationsEnabled;
        boolean z12 = this.lightsEnabled;
        return "NotificationBehaviors(soundsEnabled=" + z10 + ", vibrationsEnabled=" + z11 + ", lightsEnabled=" + z12 + ")";
    }
}
