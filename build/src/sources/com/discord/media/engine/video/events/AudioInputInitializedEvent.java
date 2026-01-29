package com.discord.media.engine.video.events;

import com.discord.react.utilities.NativeMapExtensionsKt;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableNativeMap;
import ir.v;
import java.util.Map;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0006\n\u0000\n\u0002\u0010$\n\u0002\u0010\u000e\n\u0002\u0010\u0000\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\u0080\b\u0018\u00002\u00020\u0001B#\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0012\u0010\u0004\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\u0005¢\u0006\u0004\b\b\u0010\tJ\b\u0010\u000e\u001a\u00020\u000fH\u0016J\t\u0010\u0010\u001a\u00020\u0003HÆ\u0003J\u0015\u0010\u0011\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\u0005HÆ\u0003J)\u0010\u0012\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\u0014\b\u0002\u0010\u0004\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\u0005HÆ\u0001J\u0013\u0010\u0013\u001a\u00020\u00142\b\u0010\u0015\u001a\u0004\u0018\u00010\u0007HÖ\u0003J\t\u0010\u0016\u001a\u00020\u0017HÖ\u0001J\t\u0010\u0018\u001a\u00020\u0006HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u001d\u0010\u0004\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\u0005¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\r¨\u0006\u0019"}, d2 = {"Lcom/discord/media/engine/video/events/AudioInputInitializedEvent;", "Lcom/discord/reactevents/ReactEvent;", "timeToInitialized", "", "description", "", "", "", "<init>", "(DLjava/util/Map;)V", "getTimeToInitialized", "()D", "getDescription", "()Ljava/util/Map;", "serialize", "Lcom/facebook/react/bridge/WritableNativeMap;", "component1", "component2", "copy", "equals", "", "other", "hashCode", "", "toString", "media_engine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class AudioInputInitializedEvent implements ReactEvent {
    @NotNull
    private final Map<String, Object> description;
    private final double timeToInitialized;

    public AudioInputInitializedEvent(double d10, @NotNull Map<String, ? extends Object> description) {
        Intrinsics.checkNotNullParameter(description, "description");
        this.timeToInitialized = d10;
        this.description = description;
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ AudioInputInitializedEvent copy$default(AudioInputInitializedEvent audioInputInitializedEvent, double d10, Map map, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            d10 = audioInputInitializedEvent.timeToInitialized;
        }
        if ((i10 & 2) != 0) {
            map = audioInputInitializedEvent.description;
        }
        return audioInputInitializedEvent.copy(d10, map);
    }

    public final double component1() {
        return this.timeToInitialized;
    }

    @NotNull
    public final Map<String, Object> component2() {
        return this.description;
    }

    @NotNull
    public final AudioInputInitializedEvent copy(double d10, @NotNull Map<String, ? extends Object> description) {
        Intrinsics.checkNotNullParameter(description, "description");
        return new AudioInputInitializedEvent(d10, description);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof AudioInputInitializedEvent) {
            AudioInputInitializedEvent audioInputInitializedEvent = (AudioInputInitializedEvent) obj;
            return Double.compare(this.timeToInitialized, audioInputInitializedEvent.timeToInitialized) == 0 && Intrinsics.areEqual(this.description, audioInputInitializedEvent.description);
        }
        return false;
    }

    @NotNull
    public final Map<String, Object> getDescription() {
        return this.description;
    }

    public final double getTimeToInitialized() {
        return this.timeToInitialized;
    }

    public int hashCode() {
        return (Double.hashCode(this.timeToInitialized) * 31) + this.description.hashCode();
    }

    @NotNull
    public String toString() {
        double d10 = this.timeToInitialized;
        Map<String, Object> map = this.description;
        return "AudioInputInitializedEvent(timeToInitialized=" + d10 + ", description=" + map + ")";
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableNativeMap serialize() {
        return NativeMapExtensionsKt.nativeMapOf(v.a("timeToInitialized", Double.valueOf(this.timeToInitialized)), v.a("description", NativeMapExtensionsKt.toNativeMap(this.description)));
    }
}
