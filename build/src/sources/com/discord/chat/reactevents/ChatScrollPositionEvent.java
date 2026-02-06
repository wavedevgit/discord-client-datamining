package com.discord.chat.reactevents;

import androidx.recyclerview.widget.RecyclerView;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import ft.m;
import jt.v1;
import jt.x;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@m
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0007\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0006\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u001d\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0081\b\u0018\u0000 @2\u00020\u0001:\u0002?@Bk\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003\u0012\u0006\u0010\u0007\u001a\u00020\u0003\u0012\u0006\u0010\b\u001a\u00020\u0003\u0012\u0006\u0010\t\u001a\u00020\u0003\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r\u0012\u0006\u0010\u000e\u001a\u00020\u000b\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\r\u0012\u0006\u0010\u0010\u001a\u00020\u000b¢\u0006\u0004\b\u0011\u0010\u0012B\u007f\b\u0010\u0012\u0006\u0010\u0013\u001a\u00020\u000b\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003\u0012\u0006\u0010\u0007\u001a\u00020\u0003\u0012\u0006\u0010\b\u001a\u00020\u0003\u0012\u0006\u0010\t\u001a\u00020\u0003\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r\u0012\u0006\u0010\u000e\u001a\u00020\u000b\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\r\u0012\u0006\u0010\u0010\u001a\u00020\u000b\u0012\b\u0010\u0014\u001a\u0004\u0018\u00010\u0015¢\u0006\u0004\b\u0011\u0010\u0016J\t\u0010#\u001a\u00020\u0003HÆ\u0003J\t\u0010$\u001a\u00020\u0003HÆ\u0003J\t\u0010%\u001a\u00020\u0003HÆ\u0003J\t\u0010&\u001a\u00020\u0003HÆ\u0003J\t\u0010'\u001a\u00020\u0003HÆ\u0003J\t\u0010(\u001a\u00020\u0003HÆ\u0003J\t\u0010)\u001a\u00020\u0003HÆ\u0003J\t\u0010*\u001a\u00020\u000bHÆ\u0003J\u0010\u0010+\u001a\u0004\u0018\u00010\rHÆ\u0003¢\u0006\u0002\u0010\u001eJ\t\u0010,\u001a\u00020\u000bHÆ\u0003J\u0010\u0010-\u001a\u0004\u0018\u00010\rHÆ\u0003¢\u0006\u0002\u0010\u001eJ\t\u0010.\u001a\u00020\u000bHÆ\u0003J\u008a\u0001\u0010/\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u00032\b\b\u0002\u0010\u0007\u001a\u00020\u00032\b\b\u0002\u0010\b\u001a\u00020\u00032\b\b\u0002\u0010\t\u001a\u00020\u00032\b\b\u0002\u0010\n\u001a\u00020\u000b2\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\r2\b\b\u0002\u0010\u000e\u001a\u00020\u000b2\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\r2\b\b\u0002\u0010\u0010\u001a\u00020\u000bHÆ\u0001¢\u0006\u0002\u00100J\u0013\u00101\u001a\u00020\u00032\b\u00102\u001a\u0004\u0018\u000103HÖ\u0003J\t\u00104\u001a\u00020\u000bHÖ\u0001J\t\u00105\u001a\u000206HÖ\u0001J%\u00107\u001a\u0002082\u0006\u00109\u001a\u00020\u00002\u0006\u0010:\u001a\u00020;2\u0006\u0010<\u001a\u00020=H\u0001¢\u0006\u0002\b>R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0002\u0010\u0017R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0004\u0010\u0017R\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0005\u0010\u0017R\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0017R\u0011\u0010\u0007\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u0017R\u0011\u0010\b\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u0017R\u0011\u0010\t\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\u0017R\u0011\u0010\n\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u001cR\u0015\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\n\n\u0002\u0010\u001f\u001a\u0004\b\u001d\u0010\u001eR\u0011\u0010\u000e\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b \u0010\u001cR\u0015\u0010\u000f\u001a\u0004\u0018\u00010\r¢\u0006\n\n\u0002\u0010\u001f\u001a\u0004\b!\u0010\u001eR\u0011\u0010\u0010\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b\"\u0010\u001c¨\u0006A"}, d2 = {"Lcom/discord/chat/reactevents/ChatScrollPositionEvent;", "Lcom/discord/reactevents/ReactEvent;", "isAtBottom", "", "isNearBottom", "isNearTop", "dragging", "decelerating", "shouldShowJumpToPresent", "isFirstMessageVisible", "firstVisibleMessageIndex", "", "firstVisibleMessagePercentVisible", "", "lastVisibleMessageIndex", "lastVisibleMessagePercentVisible", "changesetUpdateId", "<init>", "(ZZZZZZZILjava/lang/Double;ILjava/lang/Double;I)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IZZZZZZZILjava/lang/Double;ILjava/lang/Double;ILkotlinx/serialization/internal/SerializationConstructorMarker;)V", "()Z", "getDragging", "getDecelerating", "getShouldShowJumpToPresent", "getFirstVisibleMessageIndex", "()I", "getFirstVisibleMessagePercentVisible", "()Ljava/lang/Double;", "Ljava/lang/Double;", "getLastVisibleMessageIndex", "getLastVisibleMessagePercentVisible", "getChangesetUpdateId", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "copy", "(ZZZZZZZILjava/lang/Double;ILjava/lang/Double;I)Lcom/discord/chat/reactevents/ChatScrollPositionEvent;", "equals", "other", "", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChatScrollPositionEvent implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final int changesetUpdateId;
    private final boolean decelerating;
    private final boolean dragging;
    private final int firstVisibleMessageIndex;
    private final Double firstVisibleMessagePercentVisible;
    private final boolean isAtBottom;
    private final boolean isFirstMessageVisible;
    private final boolean isNearBottom;
    private final boolean isNearTop;
    private final int lastVisibleMessageIndex;
    private final Double lastVisibleMessagePercentVisible;
    private final boolean shouldShowJumpToPresent;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/reactevents/ChatScrollPositionEvent$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/reactevents/ChatScrollPositionEvent;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ChatScrollPositionEvent$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ ChatScrollPositionEvent(int i10, boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, boolean z16, int i11, Double d10, int i12, Double d11, int i13, SerializationConstructorMarker serializationConstructorMarker) {
        if (4095 != (i10 & 4095)) {
            v1.b(i10, 4095, ChatScrollPositionEvent$$serializer.INSTANCE.getDescriptor());
        }
        this.isAtBottom = z10;
        this.isNearBottom = z11;
        this.isNearTop = z12;
        this.dragging = z13;
        this.decelerating = z14;
        this.shouldShowJumpToPresent = z15;
        this.isFirstMessageVisible = z16;
        this.firstVisibleMessageIndex = i11;
        this.firstVisibleMessagePercentVisible = d10;
        this.lastVisibleMessageIndex = i12;
        this.lastVisibleMessagePercentVisible = d11;
        this.changesetUpdateId = i13;
    }

    public static /* synthetic */ ChatScrollPositionEvent copy$default(ChatScrollPositionEvent chatScrollPositionEvent, boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, boolean z16, int i10, Double d10, int i11, Double d11, int i12, int i13, Object obj) {
        if ((i13 & 1) != 0) {
            z10 = chatScrollPositionEvent.isAtBottom;
        }
        if ((i13 & 2) != 0) {
            z11 = chatScrollPositionEvent.isNearBottom;
        }
        if ((i13 & 4) != 0) {
            z12 = chatScrollPositionEvent.isNearTop;
        }
        if ((i13 & 8) != 0) {
            z13 = chatScrollPositionEvent.dragging;
        }
        if ((i13 & 16) != 0) {
            z14 = chatScrollPositionEvent.decelerating;
        }
        if ((i13 & 32) != 0) {
            z15 = chatScrollPositionEvent.shouldShowJumpToPresent;
        }
        if ((i13 & 64) != 0) {
            z16 = chatScrollPositionEvent.isFirstMessageVisible;
        }
        if ((i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            i10 = chatScrollPositionEvent.firstVisibleMessageIndex;
        }
        if ((i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            d10 = chatScrollPositionEvent.firstVisibleMessagePercentVisible;
        }
        if ((i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            i11 = chatScrollPositionEvent.lastVisibleMessageIndex;
        }
        if ((i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            d11 = chatScrollPositionEvent.lastVisibleMessagePercentVisible;
        }
        if ((i13 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
            i12 = chatScrollPositionEvent.changesetUpdateId;
        }
        Double d12 = d11;
        int i14 = i12;
        Double d13 = d10;
        int i15 = i11;
        boolean z17 = z16;
        int i16 = i10;
        boolean z18 = z14;
        boolean z19 = z15;
        return chatScrollPositionEvent.copy(z10, z11, z12, z13, z18, z19, z17, i16, d13, i15, d12, i14);
    }

    public static final /* synthetic */ void write$Self$chat_release(ChatScrollPositionEvent chatScrollPositionEvent, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.y(serialDescriptor, 0, chatScrollPositionEvent.isAtBottom);
        compositeEncoder.y(serialDescriptor, 1, chatScrollPositionEvent.isNearBottom);
        compositeEncoder.y(serialDescriptor, 2, chatScrollPositionEvent.isNearTop);
        compositeEncoder.y(serialDescriptor, 3, chatScrollPositionEvent.dragging);
        compositeEncoder.y(serialDescriptor, 4, chatScrollPositionEvent.decelerating);
        compositeEncoder.y(serialDescriptor, 5, chatScrollPositionEvent.shouldShowJumpToPresent);
        compositeEncoder.y(serialDescriptor, 6, chatScrollPositionEvent.isFirstMessageVisible);
        compositeEncoder.x(serialDescriptor, 7, chatScrollPositionEvent.firstVisibleMessageIndex);
        x xVar = x.f31095a;
        compositeEncoder.l(serialDescriptor, 8, xVar, chatScrollPositionEvent.firstVisibleMessagePercentVisible);
        compositeEncoder.x(serialDescriptor, 9, chatScrollPositionEvent.lastVisibleMessageIndex);
        compositeEncoder.l(serialDescriptor, 10, xVar, chatScrollPositionEvent.lastVisibleMessagePercentVisible);
        compositeEncoder.x(serialDescriptor, 11, chatScrollPositionEvent.changesetUpdateId);
    }

    public final boolean component1() {
        return this.isAtBottom;
    }

    public final int component10() {
        return this.lastVisibleMessageIndex;
    }

    public final Double component11() {
        return this.lastVisibleMessagePercentVisible;
    }

    public final int component12() {
        return this.changesetUpdateId;
    }

    public final boolean component2() {
        return this.isNearBottom;
    }

    public final boolean component3() {
        return this.isNearTop;
    }

    public final boolean component4() {
        return this.dragging;
    }

    public final boolean component5() {
        return this.decelerating;
    }

    public final boolean component6() {
        return this.shouldShowJumpToPresent;
    }

    public final boolean component7() {
        return this.isFirstMessageVisible;
    }

    public final int component8() {
        return this.firstVisibleMessageIndex;
    }

    public final Double component9() {
        return this.firstVisibleMessagePercentVisible;
    }

    @NotNull
    public final ChatScrollPositionEvent copy(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, boolean z16, int i10, Double d10, int i11, Double d11, int i12) {
        return new ChatScrollPositionEvent(z10, z11, z12, z13, z14, z15, z16, i10, d10, i11, d11, i12);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ChatScrollPositionEvent) {
            ChatScrollPositionEvent chatScrollPositionEvent = (ChatScrollPositionEvent) obj;
            return this.isAtBottom == chatScrollPositionEvent.isAtBottom && this.isNearBottom == chatScrollPositionEvent.isNearBottom && this.isNearTop == chatScrollPositionEvent.isNearTop && this.dragging == chatScrollPositionEvent.dragging && this.decelerating == chatScrollPositionEvent.decelerating && this.shouldShowJumpToPresent == chatScrollPositionEvent.shouldShowJumpToPresent && this.isFirstMessageVisible == chatScrollPositionEvent.isFirstMessageVisible && this.firstVisibleMessageIndex == chatScrollPositionEvent.firstVisibleMessageIndex && Intrinsics.areEqual((Object) this.firstVisibleMessagePercentVisible, (Object) chatScrollPositionEvent.firstVisibleMessagePercentVisible) && this.lastVisibleMessageIndex == chatScrollPositionEvent.lastVisibleMessageIndex && Intrinsics.areEqual((Object) this.lastVisibleMessagePercentVisible, (Object) chatScrollPositionEvent.lastVisibleMessagePercentVisible) && this.changesetUpdateId == chatScrollPositionEvent.changesetUpdateId;
        }
        return false;
    }

    public final int getChangesetUpdateId() {
        return this.changesetUpdateId;
    }

    public final boolean getDecelerating() {
        return this.decelerating;
    }

    public final boolean getDragging() {
        return this.dragging;
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

    public final boolean getShouldShowJumpToPresent() {
        return this.shouldShowJumpToPresent;
    }

    public int hashCode() {
        int hashCode = ((((((((((((((Boolean.hashCode(this.isAtBottom) * 31) + Boolean.hashCode(this.isNearBottom)) * 31) + Boolean.hashCode(this.isNearTop)) * 31) + Boolean.hashCode(this.dragging)) * 31) + Boolean.hashCode(this.decelerating)) * 31) + Boolean.hashCode(this.shouldShowJumpToPresent)) * 31) + Boolean.hashCode(this.isFirstMessageVisible)) * 31) + Integer.hashCode(this.firstVisibleMessageIndex)) * 31;
        Double d10 = this.firstVisibleMessagePercentVisible;
        int hashCode2 = (((hashCode + (d10 == null ? 0 : d10.hashCode())) * 31) + Integer.hashCode(this.lastVisibleMessageIndex)) * 31;
        Double d11 = this.lastVisibleMessagePercentVisible;
        return ((hashCode2 + (d11 != null ? d11.hashCode() : 0)) * 31) + Integer.hashCode(this.changesetUpdateId);
    }

    public final boolean isAtBottom() {
        return this.isAtBottom;
    }

    public final boolean isFirstMessageVisible() {
        return this.isFirstMessageVisible;
    }

    public final boolean isNearBottom() {
        return this.isNearBottom;
    }

    public final boolean isNearTop() {
        return this.isNearTop;
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return ReactEvent.DefaultImpls.serialize(this);
    }

    @NotNull
    public String toString() {
        boolean z10 = this.isAtBottom;
        boolean z11 = this.isNearBottom;
        boolean z12 = this.isNearTop;
        boolean z13 = this.dragging;
        boolean z14 = this.decelerating;
        boolean z15 = this.shouldShowJumpToPresent;
        boolean z16 = this.isFirstMessageVisible;
        int i10 = this.firstVisibleMessageIndex;
        Double d10 = this.firstVisibleMessagePercentVisible;
        int i11 = this.lastVisibleMessageIndex;
        Double d11 = this.lastVisibleMessagePercentVisible;
        int i12 = this.changesetUpdateId;
        return "ChatScrollPositionEvent(isAtBottom=" + z10 + ", isNearBottom=" + z11 + ", isNearTop=" + z12 + ", dragging=" + z13 + ", decelerating=" + z14 + ", shouldShowJumpToPresent=" + z15 + ", isFirstMessageVisible=" + z16 + ", firstVisibleMessageIndex=" + i10 + ", firstVisibleMessagePercentVisible=" + d10 + ", lastVisibleMessageIndex=" + i11 + ", lastVisibleMessagePercentVisible=" + d11 + ", changesetUpdateId=" + i12 + ")";
    }

    public ChatScrollPositionEvent(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, boolean z16, int i10, Double d10, int i11, Double d11, int i12) {
        this.isAtBottom = z10;
        this.isNearBottom = z11;
        this.isNearTop = z12;
        this.dragging = z13;
        this.decelerating = z14;
        this.shouldShowJumpToPresent = z15;
        this.isFirstMessageVisible = z16;
        this.firstVisibleMessageIndex = i10;
        this.firstVisibleMessagePercentVisible = d10;
        this.lastVisibleMessageIndex = i11;
        this.lastVisibleMessagePercentVisible = d11;
        this.changesetUpdateId = i12;
    }
}
