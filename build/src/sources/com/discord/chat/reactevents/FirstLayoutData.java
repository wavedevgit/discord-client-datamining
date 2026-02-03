package com.discord.chat.reactevents;

import at.m;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import dt.v1;
import dt.x;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@m
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0006\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u000f\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0081\b\u0018\u0000 +2\u00020\u0001:\u0002*+B+\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0003\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\b\u0010\tB?\b\u0010\u0012\u0006\u0010\n\u001a\u00020\u0003\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0003\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\u0004\b\b\u0010\rJ\t\u0010\u0015\u001a\u00020\u0003HÆ\u0003J\u0010\u0010\u0016\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010\u0011J\t\u0010\u0017\u001a\u00020\u0003HÆ\u0003J\u0010\u0010\u0018\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010\u0011J:\u0010\u0019\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00032\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0005HÆ\u0001¢\u0006\u0002\u0010\u001aJ\u0013\u0010\u001b\u001a\u00020\u001c2\b\u0010\u001d\u001a\u0004\u0018\u00010\u001eHÖ\u0003J\t\u0010\u001f\u001a\u00020\u0003HÖ\u0001J\t\u0010 \u001a\u00020!HÖ\u0001J%\u0010\"\u001a\u00020#2\u0006\u0010$\u001a\u00020\u00002\u0006\u0010%\u001a\u00020&2\u0006\u0010'\u001a\u00020(H\u0001¢\u0006\u0002\b)R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0015\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\n\n\u0002\u0010\u0012\u001a\u0004\b\u0010\u0010\u0011R\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u000fR\u0015\u0010\u0007\u001a\u0004\u0018\u00010\u0005¢\u0006\n\n\u0002\u0010\u0012\u001a\u0004\b\u0014\u0010\u0011¨\u0006,"}, d2 = {"Lcom/discord/chat/reactevents/FirstLayoutData;", "Lcom/discord/reactevents/ReactEvent;", "firstVisibleMessageIndex", "", "firstVisibleMessagePercentVisible", "", "lastVisibleMessageIndex", "lastVisibleMessagePercentVisible", "<init>", "(ILjava/lang/Double;ILjava/lang/Double;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IILjava/lang/Double;ILjava/lang/Double;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getFirstVisibleMessageIndex", "()I", "getFirstVisibleMessagePercentVisible", "()Ljava/lang/Double;", "Ljava/lang/Double;", "getLastVisibleMessageIndex", "getLastVisibleMessagePercentVisible", "component1", "component2", "component3", "component4", "copy", "(ILjava/lang/Double;ILjava/lang/Double;)Lcom/discord/chat/reactevents/FirstLayoutData;", "equals", "", "other", "", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class FirstLayoutData implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final int firstVisibleMessageIndex;
    private final Double firstVisibleMessagePercentVisible;
    private final int lastVisibleMessageIndex;
    private final Double lastVisibleMessagePercentVisible;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/reactevents/FirstLayoutData$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/reactevents/FirstLayoutData;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return FirstLayoutData$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ FirstLayoutData(int i10, int i11, Double d10, int i12, Double d11, SerializationConstructorMarker serializationConstructorMarker) {
        if (15 != (i10 & 15)) {
            v1.b(i10, 15, FirstLayoutData$$serializer.INSTANCE.getDescriptor());
        }
        this.firstVisibleMessageIndex = i11;
        this.firstVisibleMessagePercentVisible = d10;
        this.lastVisibleMessageIndex = i12;
        this.lastVisibleMessagePercentVisible = d11;
    }

    public static /* synthetic */ FirstLayoutData copy$default(FirstLayoutData firstLayoutData, int i10, Double d10, int i11, Double d11, int i12, Object obj) {
        if ((i12 & 1) != 0) {
            i10 = firstLayoutData.firstVisibleMessageIndex;
        }
        if ((i12 & 2) != 0) {
            d10 = firstLayoutData.firstVisibleMessagePercentVisible;
        }
        if ((i12 & 4) != 0) {
            i11 = firstLayoutData.lastVisibleMessageIndex;
        }
        if ((i12 & 8) != 0) {
            d11 = firstLayoutData.lastVisibleMessagePercentVisible;
        }
        return firstLayoutData.copy(i10, d10, i11, d11);
    }

    public static final /* synthetic */ void write$Self$chat_release(FirstLayoutData firstLayoutData, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.w(serialDescriptor, 0, firstLayoutData.firstVisibleMessageIndex);
        x xVar = x.f21032a;
        compositeEncoder.s(serialDescriptor, 1, xVar, firstLayoutData.firstVisibleMessagePercentVisible);
        compositeEncoder.w(serialDescriptor, 2, firstLayoutData.lastVisibleMessageIndex);
        compositeEncoder.s(serialDescriptor, 3, xVar, firstLayoutData.lastVisibleMessagePercentVisible);
    }

    public final int component1() {
        return this.firstVisibleMessageIndex;
    }

    public final Double component2() {
        return this.firstVisibleMessagePercentVisible;
    }

    public final int component3() {
        return this.lastVisibleMessageIndex;
    }

    public final Double component4() {
        return this.lastVisibleMessagePercentVisible;
    }

    @NotNull
    public final FirstLayoutData copy(int i10, Double d10, int i11, Double d11) {
        return new FirstLayoutData(i10, d10, i11, d11);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof FirstLayoutData) {
            FirstLayoutData firstLayoutData = (FirstLayoutData) obj;
            return this.firstVisibleMessageIndex == firstLayoutData.firstVisibleMessageIndex && Intrinsics.areEqual((Object) this.firstVisibleMessagePercentVisible, (Object) firstLayoutData.firstVisibleMessagePercentVisible) && this.lastVisibleMessageIndex == firstLayoutData.lastVisibleMessageIndex && Intrinsics.areEqual((Object) this.lastVisibleMessagePercentVisible, (Object) firstLayoutData.lastVisibleMessagePercentVisible);
        }
        return false;
    }

    public final int getFirstVisibleMessageIndex() {
        return this.firstVisibleMessageIndex;
    }

    public final Double getFirstVisibleMessagePercentVisible() {
        return this.firstVisibleMessagePercentVisible;
    }

    public final int getLastVisibleMessageIndex() {
        return this.lastVisibleMessageIndex;
    }

    public final Double getLastVisibleMessagePercentVisible() {
        return this.lastVisibleMessagePercentVisible;
    }

    public int hashCode() {
        int hashCode = Integer.hashCode(this.firstVisibleMessageIndex) * 31;
        Double d10 = this.firstVisibleMessagePercentVisible;
        int hashCode2 = (((hashCode + (d10 == null ? 0 : d10.hashCode())) * 31) + Integer.hashCode(this.lastVisibleMessageIndex)) * 31;
        Double d11 = this.lastVisibleMessagePercentVisible;
        return hashCode2 + (d11 != null ? d11.hashCode() : 0);
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return ReactEvent.DefaultImpls.serialize(this);
    }

    @NotNull
    public String toString() {
        int i10 = this.firstVisibleMessageIndex;
        Double d10 = this.firstVisibleMessagePercentVisible;
        int i11 = this.lastVisibleMessageIndex;
        Double d11 = this.lastVisibleMessagePercentVisible;
        return "FirstLayoutData(firstVisibleMessageIndex=" + i10 + ", firstVisibleMessagePercentVisible=" + d10 + ", lastVisibleMessageIndex=" + i11 + ", lastVisibleMessagePercentVisible=" + d11 + ")";
    }

    public FirstLayoutData(int i10, Double d10, int i11, Double d11) {
        this.firstVisibleMessageIndex = i10;
        this.firstVisibleMessagePercentVisible = d10;
        this.lastVisibleMessageIndex = i11;
        this.lastVisibleMessagePercentVisible = d11;
    }
}
