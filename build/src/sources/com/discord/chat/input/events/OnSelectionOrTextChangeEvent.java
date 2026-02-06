package com.discord.chat.input.events;

import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.ViewProps;
import ft.m;
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
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0081\b\u0018\u0000 (2\u00020\u0001:\u0002'(B'\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\u0006\u0010\u0007\u001a\u00020\u0006¢\u0006\u0004\b\b\u0010\tB?\b\u0010\u0012\u0006\u0010\n\u001a\u00020\u0003\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\u0004\b\b\u0010\rJ\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0015\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0016\u001a\u00020\u0006HÆ\u0003J\t\u0010\u0017\u001a\u00020\u0006HÆ\u0003J1\u0010\u0018\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00062\b\b\u0002\u0010\u0007\u001a\u00020\u0006HÆ\u0001J\u0013\u0010\u0019\u001a\u00020\u001a2\b\u0010\u001b\u001a\u0004\u0018\u00010\u001cHÖ\u0003J\t\u0010\u001d\u001a\u00020\u0003HÖ\u0001J\t\u0010\u001e\u001a\u00020\u0006HÖ\u0001J%\u0010\u001f\u001a\u00020 2\u0006\u0010!\u001a\u00020\u00002\u0006\u0010\"\u001a\u00020#2\u0006\u0010$\u001a\u00020%H\u0001¢\u0006\u0002\b&R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000fR\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0012R\u0011\u0010\u0007\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0012¨\u0006)"}, d2 = {"Lcom/discord/chat/input/events/OnSelectionOrTextChangeEvent;", "Lcom/discord/reactevents/ReactEvent;", ViewProps.START, "", ViewProps.END, "text", "", "editId", "<init>", "(IILjava/lang/String;Ljava/lang/String;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IIILjava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getStart", "()I", "getEnd", "getText", "()Ljava/lang/String;", "getEditId", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_input_release", "$serializer", "Companion", "chat_input_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class OnSelectionOrTextChangeEvent implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final String editId;
    private final int end;
    private final int start;
    @NotNull
    private final String text;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/input/events/OnSelectionOrTextChangeEvent$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/input/events/OnSelectionOrTextChangeEvent;", "chat_input_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return OnSelectionOrTextChangeEvent$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ OnSelectionOrTextChangeEvent(int i10, int i11, int i12, String str, String str2, SerializationConstructorMarker serializationConstructorMarker) {
        if (15 != (i10 & 15)) {
            v1.b(i10, 15, OnSelectionOrTextChangeEvent$$serializer.INSTANCE.getDescriptor());
        }
        this.start = i11;
        this.end = i12;
        this.text = str;
        this.editId = str2;
    }

    public static /* synthetic */ OnSelectionOrTextChangeEvent copy$default(OnSelectionOrTextChangeEvent onSelectionOrTextChangeEvent, int i10, int i11, String str, String str2, int i12, Object obj) {
        if ((i12 & 1) != 0) {
            i10 = onSelectionOrTextChangeEvent.start;
        }
        if ((i12 & 2) != 0) {
            i11 = onSelectionOrTextChangeEvent.end;
        }
        if ((i12 & 4) != 0) {
            str = onSelectionOrTextChangeEvent.text;
        }
        if ((i12 & 8) != 0) {
            str2 = onSelectionOrTextChangeEvent.editId;
        }
        return onSelectionOrTextChangeEvent.copy(i10, i11, str, str2);
    }

    public static final /* synthetic */ void write$Self$chat_input_release(OnSelectionOrTextChangeEvent onSelectionOrTextChangeEvent, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.x(serialDescriptor, 0, onSelectionOrTextChangeEvent.start);
        compositeEncoder.x(serialDescriptor, 1, onSelectionOrTextChangeEvent.end);
        compositeEncoder.z(serialDescriptor, 2, onSelectionOrTextChangeEvent.text);
        compositeEncoder.z(serialDescriptor, 3, onSelectionOrTextChangeEvent.editId);
    }

    public final int component1() {
        return this.start;
    }

    public final int component2() {
        return this.end;
    }

    @NotNull
    public final String component3() {
        return this.text;
    }

    @NotNull
    public final String component4() {
        return this.editId;
    }

    @NotNull
    public final OnSelectionOrTextChangeEvent copy(int i10, int i11, @NotNull String text, @NotNull String editId) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(editId, "editId");
        return new OnSelectionOrTextChangeEvent(i10, i11, text, editId);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof OnSelectionOrTextChangeEvent) {
            OnSelectionOrTextChangeEvent onSelectionOrTextChangeEvent = (OnSelectionOrTextChangeEvent) obj;
            return this.start == onSelectionOrTextChangeEvent.start && this.end == onSelectionOrTextChangeEvent.end && Intrinsics.areEqual(this.text, onSelectionOrTextChangeEvent.text) && Intrinsics.areEqual(this.editId, onSelectionOrTextChangeEvent.editId);
        }
        return false;
    }

    @NotNull
    public final String getEditId() {
        return this.editId;
    }

    public final int getEnd() {
        return this.end;
    }

    public final int getStart() {
        return this.start;
    }

    @NotNull
    public final String getText() {
        return this.text;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.start) * 31) + Integer.hashCode(this.end)) * 31) + this.text.hashCode()) * 31) + this.editId.hashCode();
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return ReactEvent.DefaultImpls.serialize(this);
    }

    @NotNull
    public String toString() {
        int i10 = this.start;
        int i11 = this.end;
        String str = this.text;
        String str2 = this.editId;
        return "OnSelectionOrTextChangeEvent(start=" + i10 + ", end=" + i11 + ", text=" + str + ", editId=" + str2 + ")";
    }

    public OnSelectionOrTextChangeEvent(int i10, int i11, @NotNull String text, @NotNull String editId) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(editId, "editId");
        this.start = i10;
        this.end = i11;
        this.text = text;
        this.editId = editId;
    }
}
