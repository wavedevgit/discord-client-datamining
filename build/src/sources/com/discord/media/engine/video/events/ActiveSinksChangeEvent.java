package com.discord.media.engine.video.events;

import at.v1;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.appstate.AppStateModule;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import xs.m;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0081\b\u0018\u0000 \"2\u00020\u0001:\u0002!\"B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007B-\b\u0010\u0012\u0006\u0010\b\u001a\u00020\t\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\u0006\u0010\fJ\t\u0010\u0011\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0012\u001a\u00020\u0005HÆ\u0003J\u001d\u0010\u0013\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u0014\u001a\u00020\u00052\b\u0010\u0015\u001a\u0004\u0018\u00010\u0016HÖ\u0003J\t\u0010\u0017\u001a\u00020\tHÖ\u0001J\t\u0010\u0018\u001a\u00020\u0003HÖ\u0001J%\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u00002\u0006\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u001fH\u0001¢\u0006\u0002\b R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010¨\u0006#"}, d2 = {"Lcom/discord/media/engine/video/events/ActiveSinksChangeEvent;", "Lcom/discord/reactevents/ReactEvent;", "streamId", "", AppStateModule.APP_STATE_ACTIVE, "", "<init>", "(Ljava/lang/String;Z)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;ZLkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getStreamId", "()Ljava/lang/String;", "getActive", "()Z", "component1", "component2", "copy", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$media_engine_release", "$serializer", "Companion", "media_engine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ActiveSinksChangeEvent implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final boolean active;
    @NotNull
    private final String streamId;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/media/engine/video/events/ActiveSinksChangeEvent$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/media/engine/video/events/ActiveSinksChangeEvent;", "media_engine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ActiveSinksChangeEvent$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ ActiveSinksChangeEvent(int i10, String str, boolean z10, SerializationConstructorMarker serializationConstructorMarker) {
        if (3 != (i10 & 3)) {
            v1.b(i10, 3, ActiveSinksChangeEvent$$serializer.INSTANCE.getDescriptor());
        }
        this.streamId = str;
        this.active = z10;
    }

    public static /* synthetic */ ActiveSinksChangeEvent copy$default(ActiveSinksChangeEvent activeSinksChangeEvent, String str, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = activeSinksChangeEvent.streamId;
        }
        if ((i10 & 2) != 0) {
            z10 = activeSinksChangeEvent.active;
        }
        return activeSinksChangeEvent.copy(str, z10);
    }

    public static final /* synthetic */ void write$Self$media_engine_release(ActiveSinksChangeEvent activeSinksChangeEvent, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.y(serialDescriptor, 0, activeSinksChangeEvent.streamId);
        compositeEncoder.x(serialDescriptor, 1, activeSinksChangeEvent.active);
    }

    @NotNull
    public final String component1() {
        return this.streamId;
    }

    public final boolean component2() {
        return this.active;
    }

    @NotNull
    public final ActiveSinksChangeEvent copy(@NotNull String streamId, boolean z10) {
        Intrinsics.checkNotNullParameter(streamId, "streamId");
        return new ActiveSinksChangeEvent(streamId, z10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ActiveSinksChangeEvent) {
            ActiveSinksChangeEvent activeSinksChangeEvent = (ActiveSinksChangeEvent) obj;
            return Intrinsics.areEqual(this.streamId, activeSinksChangeEvent.streamId) && this.active == activeSinksChangeEvent.active;
        }
        return false;
    }

    public final boolean getActive() {
        return this.active;
    }

    @NotNull
    public final String getStreamId() {
        return this.streamId;
    }

    public int hashCode() {
        return (this.streamId.hashCode() * 31) + Boolean.hashCode(this.active);
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return ReactEvent.DefaultImpls.serialize(this);
    }

    @NotNull
    public String toString() {
        String str = this.streamId;
        boolean z10 = this.active;
        return "ActiveSinksChangeEvent(streamId=" + str + ", active=" + z10 + ")";
    }

    public ActiveSinksChangeEvent(@NotNull String streamId, boolean z10) {
        Intrinsics.checkNotNullParameter(streamId, "streamId");
        this.streamId = streamId;
        this.active = z10;
    }
}
