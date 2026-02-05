package com.discord.chat.input.events;

import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import dt.m;
import gt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0081\b\u0018\u0000 !2\u00020\u0001:\u0002 !B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006B/\b\u0010\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n¢\u0006\u0004\b\u0005\u0010\u000bJ\t\u0010\u000f\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0010\u001a\u00020\u0003HÆ\u0003J\u001d\u0010\u0011\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0012\u001a\u00020\u00132\b\u0010\u0014\u001a\u0004\u0018\u00010\u0015HÖ\u0003J\t\u0010\u0016\u001a\u00020\bHÖ\u0001J\t\u0010\u0017\u001a\u00020\u0003HÖ\u0001J%\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u00002\u0006\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u001eH\u0001¢\u0006\u0002\b\u001fR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\r¨\u0006\""}, d2 = {"Lcom/discord/chat/input/events/OnTextFlushedEvent;", "Lcom/discord/reactevents/ReactEvent;", "text", "", "requestId", "<init>", "(Ljava/lang/String;Ljava/lang/String;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getText", "()Ljava/lang/String;", "getRequestId", "component1", "component2", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_input_release", "$serializer", "Companion", "chat_input_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class OnTextFlushedEvent implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final String requestId;
    @NotNull
    private final String text;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/input/events/OnTextFlushedEvent$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/input/events/OnTextFlushedEvent;", "chat_input_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return OnTextFlushedEvent$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ OnTextFlushedEvent(int i10, String str, String str2, SerializationConstructorMarker serializationConstructorMarker) {
        if (3 != (i10 & 3)) {
            v1.b(i10, 3, OnTextFlushedEvent$$serializer.INSTANCE.getDescriptor());
        }
        this.text = str;
        this.requestId = str2;
    }

    public static /* synthetic */ OnTextFlushedEvent copy$default(OnTextFlushedEvent onTextFlushedEvent, String str, String str2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = onTextFlushedEvent.text;
        }
        if ((i10 & 2) != 0) {
            str2 = onTextFlushedEvent.requestId;
        }
        return onTextFlushedEvent.copy(str, str2);
    }

    public static final /* synthetic */ void write$Self$chat_input_release(OnTextFlushedEvent onTextFlushedEvent, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.x(serialDescriptor, 0, onTextFlushedEvent.text);
        compositeEncoder.x(serialDescriptor, 1, onTextFlushedEvent.requestId);
    }

    @NotNull
    public final String component1() {
        return this.text;
    }

    @NotNull
    public final String component2() {
        return this.requestId;
    }

    @NotNull
    public final OnTextFlushedEvent copy(@NotNull String text, @NotNull String requestId) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(requestId, "requestId");
        return new OnTextFlushedEvent(text, requestId);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof OnTextFlushedEvent) {
            OnTextFlushedEvent onTextFlushedEvent = (OnTextFlushedEvent) obj;
            return Intrinsics.areEqual(this.text, onTextFlushedEvent.text) && Intrinsics.areEqual(this.requestId, onTextFlushedEvent.requestId);
        }
        return false;
    }

    @NotNull
    public final String getRequestId() {
        return this.requestId;
    }

    @NotNull
    public final String getText() {
        return this.text;
    }

    public int hashCode() {
        return (this.text.hashCode() * 31) + this.requestId.hashCode();
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return ReactEvent.DefaultImpls.serialize(this);
    }

    @NotNull
    public String toString() {
        String str = this.text;
        String str2 = this.requestId;
        return "OnTextFlushedEvent(text=" + str + ", requestId=" + str2 + ")";
    }

    public OnTextFlushedEvent(@NotNull String text, @NotNull String requestId) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(requestId, "requestId");
        this.text = text;
        this.requestId = requestId;
    }
}
