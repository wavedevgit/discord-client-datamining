package com.discord.segmented.control.events;

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
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0081\b\u0018\u0000 \"2\u00020\u0001:\u0002!\"B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007B-\b\u0010\u0012\u0006\u0010\b\u001a\u00020\u0005\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n¢\u0006\u0004\b\u0006\u0010\u000bJ\t\u0010\u0010\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0011\u001a\u00020\u0005HÆ\u0003J\u001d\u0010\u0012\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u0013\u001a\u00020\u00142\b\u0010\u0015\u001a\u0004\u0018\u00010\u0016HÖ\u0003J\t\u0010\u0017\u001a\u00020\u0005HÖ\u0001J\t\u0010\u0018\u001a\u00020\u0003HÖ\u0001J%\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u00002\u0006\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u001fH\u0001¢\u0006\u0002\b R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000f¨\u0006#"}, d2 = {"Lcom/discord/segmented/control/events/ValueChangeEvent;", "Lcom/discord/reactevents/ReactEvent;", "value", "", "selectedSegmentIndex", "", "<init>", "(Ljava/lang/String;I)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;ILkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getValue", "()Ljava/lang/String;", "getSelectedSegmentIndex", "()I", "component1", "component2", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$segmented_control_release", "$serializer", "Companion", "segmented_control_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ValueChangeEvent implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final int selectedSegmentIndex;
    @NotNull
    private final String value;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/segmented/control/events/ValueChangeEvent$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/segmented/control/events/ValueChangeEvent;", "segmented_control_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ValueChangeEvent$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ ValueChangeEvent(int i10, String str, int i11, SerializationConstructorMarker serializationConstructorMarker) {
        if (3 != (i10 & 3)) {
            v1.b(i10, 3, ValueChangeEvent$$serializer.INSTANCE.getDescriptor());
        }
        this.value = str;
        this.selectedSegmentIndex = i11;
    }

    public static /* synthetic */ ValueChangeEvent copy$default(ValueChangeEvent valueChangeEvent, String str, int i10, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            str = valueChangeEvent.value;
        }
        if ((i11 & 2) != 0) {
            i10 = valueChangeEvent.selectedSegmentIndex;
        }
        return valueChangeEvent.copy(str, i10);
    }

    public static final /* synthetic */ void write$Self$segmented_control_release(ValueChangeEvent valueChangeEvent, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.x(serialDescriptor, 0, valueChangeEvent.value);
        compositeEncoder.v(serialDescriptor, 1, valueChangeEvent.selectedSegmentIndex);
    }

    @NotNull
    public final String component1() {
        return this.value;
    }

    public final int component2() {
        return this.selectedSegmentIndex;
    }

    @NotNull
    public final ValueChangeEvent copy(@NotNull String value, int i10) {
        Intrinsics.checkNotNullParameter(value, "value");
        return new ValueChangeEvent(value, i10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ValueChangeEvent) {
            ValueChangeEvent valueChangeEvent = (ValueChangeEvent) obj;
            return Intrinsics.areEqual(this.value, valueChangeEvent.value) && this.selectedSegmentIndex == valueChangeEvent.selectedSegmentIndex;
        }
        return false;
    }

    public final int getSelectedSegmentIndex() {
        return this.selectedSegmentIndex;
    }

    @NotNull
    public final String getValue() {
        return this.value;
    }

    public int hashCode() {
        return (this.value.hashCode() * 31) + Integer.hashCode(this.selectedSegmentIndex);
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return ReactEvent.DefaultImpls.serialize(this);
    }

    @NotNull
    public String toString() {
        String str = this.value;
        int i10 = this.selectedSegmentIndex;
        return "ValueChangeEvent(value=" + str + ", selectedSegmentIndex=" + i10 + ")";
    }

    public ValueChangeEvent(@NotNull String value, int i10) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.value = value;
        this.selectedSegmentIndex = i10;
    }
}
