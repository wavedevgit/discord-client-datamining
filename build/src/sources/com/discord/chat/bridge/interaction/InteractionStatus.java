package com.discord.chat.bridge.interaction;

import at.v1;
import com.discord.chat.bridge.interaction.InteractionStatusViewState;
import com.discord.chat.bridge.structurabletext.StructurableText;
import com.discord.chat.bridge.structurabletext.StructurableTextSerializer;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import xs.m;
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0002\b\b\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 %2\u00020\u0001:\u0002$%B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007B/\b\u0010\u0012\u0006\u0010\b\u001a\u00020\t\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\u0006\u0010\fJ\u0006\u0010\u0011\u001a\u00020\u0012J\u0006\u0010\u0013\u001a\u00020\u0012J\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0015\u001a\u00020\u0005HÆ\u0003J\u001d\u0010\u0016\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u0017\u001a\u00020\u00122\b\u0010\u0018\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0019\u001a\u00020\tHÖ\u0001J\t\u0010\u001a\u001a\u00020\u001bHÖ\u0001J%\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u00002\u0006\u0010\u001f\u001a\u00020 2\u0006\u0010!\u001a\u00020\"H\u0001¢\u0006\u0002\b#R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010¨\u0006&"}, d2 = {"Lcom/discord/chat/bridge/interaction/InteractionStatus;", "", "state", "Lcom/discord/chat/bridge/interaction/InteractionStatusViewState;", "text", "Lcom/discord/chat/bridge/structurabletext/StructurableText;", "<init>", "(Lcom/discord/chat/bridge/interaction/InteractionStatusViewState;Lcom/discord/chat/bridge/structurabletext/StructurableText;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILcom/discord/chat/bridge/interaction/InteractionStatusViewState;Lcom/discord/chat/bridge/structurabletext/StructurableText;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getState", "()Lcom/discord/chat/bridge/interaction/InteractionStatusViewState;", "getText", "()Lcom/discord/chat/bridge/structurabletext/StructurableText;", "isLoading", "", "isFailed", "component1", "component2", "copy", "equals", "other", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class InteractionStatus {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final InteractionStatusViewState state;
    @NotNull
    private final StructurableText text;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/interaction/InteractionStatus$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/interaction/InteractionStatus;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return InteractionStatus$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ InteractionStatus(int i10, InteractionStatusViewState interactionStatusViewState, StructurableText structurableText, SerializationConstructorMarker serializationConstructorMarker) {
        if (3 != (i10 & 3)) {
            v1.b(i10, 3, InteractionStatus$$serializer.INSTANCE.getDescriptor());
        }
        this.state = interactionStatusViewState;
        this.text = structurableText;
    }

    public static /* synthetic */ InteractionStatus copy$default(InteractionStatus interactionStatus, InteractionStatusViewState interactionStatusViewState, StructurableText structurableText, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            interactionStatusViewState = interactionStatus.state;
        }
        if ((i10 & 2) != 0) {
            structurableText = interactionStatus.text;
        }
        return interactionStatus.copy(interactionStatusViewState, structurableText);
    }

    public static final /* synthetic */ void write$Self$chat_release(InteractionStatus interactionStatus, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.j(serialDescriptor, 0, InteractionStatusViewState.Serializer.INSTANCE, interactionStatus.state);
        compositeEncoder.j(serialDescriptor, 1, StructurableTextSerializer.INSTANCE, interactionStatus.text);
    }

    @NotNull
    public final InteractionStatusViewState component1() {
        return this.state;
    }

    @NotNull
    public final StructurableText component2() {
        return this.text;
    }

    @NotNull
    public final InteractionStatus copy(@NotNull InteractionStatusViewState state, @NotNull StructurableText text) {
        Intrinsics.checkNotNullParameter(state, "state");
        Intrinsics.checkNotNullParameter(text, "text");
        return new InteractionStatus(state, text);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof InteractionStatus) {
            InteractionStatus interactionStatus = (InteractionStatus) obj;
            return this.state == interactionStatus.state && Intrinsics.areEqual(this.text, interactionStatus.text);
        }
        return false;
    }

    @NotNull
    public final InteractionStatusViewState getState() {
        return this.state;
    }

    @NotNull
    public final StructurableText getText() {
        return this.text;
    }

    public int hashCode() {
        return (this.state.hashCode() * 31) + this.text.hashCode();
    }

    public final boolean isFailed() {
        if (this.state == InteractionStatusViewState.FAILED) {
            return true;
        }
        return false;
    }

    public final boolean isLoading() {
        if (this.state == InteractionStatusViewState.LOADING) {
            return true;
        }
        return false;
    }

    @NotNull
    public String toString() {
        InteractionStatusViewState interactionStatusViewState = this.state;
        StructurableText structurableText = this.text;
        return "InteractionStatus(state=" + interactionStatusViewState + ", text=" + structurableText + ")";
    }

    public InteractionStatus(@NotNull InteractionStatusViewState state, @NotNull StructurableText text) {
        Intrinsics.checkNotNullParameter(state, "state");
        Intrinsics.checkNotNullParameter(text, "text");
        this.state = state;
        this.text = text;
    }
}
