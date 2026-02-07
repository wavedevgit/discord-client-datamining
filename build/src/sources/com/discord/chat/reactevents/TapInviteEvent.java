package com.discord.chat.reactevents;

import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import ft.m;
import jt.h;
import jt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@m
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0011\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 +2\u00020\u0001:\u0002*+B+\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0007¢\u0006\u0004\b\t\u0010\nBA\b\u0010\u0012\u0006\u0010\u000b\u001a\u00020\u0005\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\t\u0010\u000eJ\t\u0010\u0017\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0018\u001a\u00020\u0005HÆ\u0003J\u0010\u0010\u0019\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\u0010\u0014J\u0010\u0010\u001a\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\u0010\u0014J:\u0010\u001b\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0007HÆ\u0001¢\u0006\u0002\u0010\u001cJ\u0013\u0010\u001d\u001a\u00020\u00072\b\u0010\u001e\u001a\u0004\u0018\u00010\u001fHÖ\u0003J\t\u0010 \u001a\u00020\u0005HÖ\u0001J\t\u0010!\u001a\u00020\u0003HÖ\u0001J%\u0010\"\u001a\u00020#2\u0006\u0010$\u001a\u00020\u00002\u0006\u0010%\u001a\u00020&2\u0006\u0010'\u001a\u00020(H\u0001¢\u0006\u0002\b)R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0012R\u0015\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\n\n\u0002\u0010\u0015\u001a\u0004\b\u0013\u0010\u0014R\u0015\u0010\b\u001a\u0004\u0018\u00010\u0007¢\u0006\n\n\u0002\u0010\u0015\u001a\u0004\b\u0016\u0010\u0014¨\u0006,"}, d2 = {"Lcom/discord/chat/reactevents/TapInviteEvent;", "Lcom/discord/reactevents/ReactEvent;", "messageId", "", "index", "", "primary", "", "secondary", "<init>", "(Ljava/lang/String;ILjava/lang/Boolean;Ljava/lang/Boolean;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;ILjava/lang/Boolean;Ljava/lang/Boolean;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getMessageId", "()Ljava/lang/String;", "getIndex", "()I", "getPrimary", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getSecondary", "component1", "component2", "component3", "component4", "copy", "(Ljava/lang/String;ILjava/lang/Boolean;Ljava/lang/Boolean;)Lcom/discord/chat/reactevents/TapInviteEvent;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TapInviteEvent implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final int index;
    @NotNull
    private final String messageId;
    private final Boolean primary;
    private final Boolean secondary;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/reactevents/TapInviteEvent$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/reactevents/TapInviteEvent;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return TapInviteEvent$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ TapInviteEvent(int i10, String str, int i11, Boolean bool, Boolean bool2, SerializationConstructorMarker serializationConstructorMarker) {
        if (15 != (i10 & 15)) {
            v1.b(i10, 15, TapInviteEvent$$serializer.INSTANCE.getDescriptor());
        }
        this.messageId = str;
        this.index = i11;
        this.primary = bool;
        this.secondary = bool2;
    }

    public static /* synthetic */ TapInviteEvent copy$default(TapInviteEvent tapInviteEvent, String str, int i10, Boolean bool, Boolean bool2, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            str = tapInviteEvent.messageId;
        }
        if ((i11 & 2) != 0) {
            i10 = tapInviteEvent.index;
        }
        if ((i11 & 4) != 0) {
            bool = tapInviteEvent.primary;
        }
        if ((i11 & 8) != 0) {
            bool2 = tapInviteEvent.secondary;
        }
        return tapInviteEvent.copy(str, i10, bool, bool2);
    }

    public static final /* synthetic */ void write$Self$chat_release(TapInviteEvent tapInviteEvent, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.z(serialDescriptor, 0, tapInviteEvent.messageId);
        compositeEncoder.x(serialDescriptor, 1, tapInviteEvent.index);
        h hVar = h.f31053a;
        compositeEncoder.l(serialDescriptor, 2, hVar, tapInviteEvent.primary);
        compositeEncoder.l(serialDescriptor, 3, hVar, tapInviteEvent.secondary);
    }

    @NotNull
    public final String component1() {
        return this.messageId;
    }

    public final int component2() {
        return this.index;
    }

    public final Boolean component3() {
        return this.primary;
    }

    public final Boolean component4() {
        return this.secondary;
    }

    @NotNull
    public final TapInviteEvent copy(@NotNull String messageId, int i10, Boolean bool, Boolean bool2) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        return new TapInviteEvent(messageId, i10, bool, bool2);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof TapInviteEvent) {
            TapInviteEvent tapInviteEvent = (TapInviteEvent) obj;
            return Intrinsics.areEqual(this.messageId, tapInviteEvent.messageId) && this.index == tapInviteEvent.index && Intrinsics.areEqual(this.primary, tapInviteEvent.primary) && Intrinsics.areEqual(this.secondary, tapInviteEvent.secondary);
        }
        return false;
    }

    public final int getIndex() {
        return this.index;
    }

    @NotNull
    public final String getMessageId() {
        return this.messageId;
    }

    public final Boolean getPrimary() {
        return this.primary;
    }

    public final Boolean getSecondary() {
        return this.secondary;
    }

    public int hashCode() {
        int hashCode = ((this.messageId.hashCode() * 31) + Integer.hashCode(this.index)) * 31;
        Boolean bool = this.primary;
        int hashCode2 = (hashCode + (bool == null ? 0 : bool.hashCode())) * 31;
        Boolean bool2 = this.secondary;
        return hashCode2 + (bool2 != null ? bool2.hashCode() : 0);
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return ReactEvent.DefaultImpls.serialize(this);
    }

    @NotNull
    public String toString() {
        String str = this.messageId;
        int i10 = this.index;
        Boolean bool = this.primary;
        Boolean bool2 = this.secondary;
        return "TapInviteEvent(messageId=" + str + ", index=" + i10 + ", primary=" + bool + ", secondary=" + bool2 + ")";
    }

    public TapInviteEvent(@NotNull String messageId, int i10, Boolean bool, Boolean bool2) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.messageId = messageId;
        this.index = i10;
        this.primary = bool;
        this.secondary = bool2;
    }
}
