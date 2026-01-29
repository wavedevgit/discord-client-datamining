package com.discord.chat.presentation.list;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0006\n\u0002\b \n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001Bm\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003\u0012\u0006\u0010\u0007\u001a\u00020\u0003\u0012\u0006\u0010\b\u001a\u00020\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n\u0012\u0006\u0010\u000b\u001a\u00020\u0003\u0012\u0006\u0010\f\u001a\u00020\r\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f\u0012\u0006\u0010\u0010\u001a\u00020\r\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u000f¢\u0006\u0004\b\u0012\u0010\u0013J\t\u0010\u001e\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001f\u001a\u00020\u0003HÆ\u0003J\t\u0010 \u001a\u00020\u0003HÆ\u0003J\t\u0010!\u001a\u00020\u0003HÆ\u0003J\t\u0010\"\u001a\u00020\u0003HÆ\u0003J\t\u0010#\u001a\u00020\u0003HÆ\u0003J\u000b\u0010$\u001a\u0004\u0018\u00010\nHÆ\u0003J\t\u0010%\u001a\u00020\u0003HÆ\u0003J\t\u0010&\u001a\u00020\rHÆ\u0003J\u0010\u0010'\u001a\u0004\u0018\u00010\u000fHÆ\u0003¢\u0006\u0002\u0010\u001aJ\t\u0010(\u001a\u00020\rHÆ\u0003J\u0010\u0010)\u001a\u0004\u0018\u00010\u000fHÆ\u0003¢\u0006\u0002\u0010\u001aJ\u008c\u0001\u0010*\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u00032\b\b\u0002\u0010\u0007\u001a\u00020\u00032\b\b\u0002\u0010\b\u001a\u00020\u00032\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\n2\b\b\u0002\u0010\u000b\u001a\u00020\u00032\b\b\u0002\u0010\f\u001a\u00020\r2\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\u000f2\b\b\u0002\u0010\u0010\u001a\u00020\r2\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u000fHÆ\u0001¢\u0006\u0002\u0010+J\u0013\u0010,\u001a\u00020\u00032\b\u0010-\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010.\u001a\u00020\rHÖ\u0001J\t\u0010/\u001a\u000200HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0002\u0010\u0014R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0004\u0010\u0014R\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0005\u0010\u0014R\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0014R\u0011\u0010\u0007\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\u0014R\u0011\u0010\b\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\u0014R\u0013\u0010\t\u001a\u0004\u0018\u00010\n¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0016R\u0011\u0010\u000b\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\u0014R\u0011\u0010\f\u001a\u00020\r¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0018R\u0015\u0010\u000e\u001a\u0004\u0018\u00010\u000f¢\u0006\n\n\u0002\u0010\u001b\u001a\u0004\b\u0019\u0010\u001aR\u0011\u0010\u0010\u001a\u00020\r¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u0018R\u0015\u0010\u0011\u001a\u0004\u0018\u00010\u000f¢\u0006\n\n\u0002\u0010\u001b\u001a\u0004\b\u001d\u0010\u001a¨\u00061"}, d2 = {"Lcom/discord/chat/presentation/list/ScrollState;", "", "isDragging", "", "isSettling", "isNearBottom", "isAtBottom", "isNearTop", "isAtTop", "scrollDirection", "Lcom/discord/chat/presentation/list/ScrollDirection;", "isFirstMessageVisible", "firstVisibleMessageIndex", "", "firstVisibleMessagePercentVisible", "", "lastVisibleMessageIndex", "lastVisibleMessagePercentVisible", "<init>", "(ZZZZZZLcom/discord/chat/presentation/list/ScrollDirection;ZILjava/lang/Double;ILjava/lang/Double;)V", "()Z", "getScrollDirection", "()Lcom/discord/chat/presentation/list/ScrollDirection;", "getFirstVisibleMessageIndex", "()I", "getFirstVisibleMessagePercentVisible", "()Ljava/lang/Double;", "Ljava/lang/Double;", "getLastVisibleMessageIndex", "getLastVisibleMessagePercentVisible", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "copy", "(ZZZZZZLcom/discord/chat/presentation/list/ScrollDirection;ZILjava/lang/Double;ILjava/lang/Double;)Lcom/discord/chat/presentation/list/ScrollState;", "equals", "other", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ScrollState {
    private final int firstVisibleMessageIndex;
    private final Double firstVisibleMessagePercentVisible;
    private final boolean isAtBottom;
    private final boolean isAtTop;
    private final boolean isDragging;
    private final boolean isFirstMessageVisible;
    private final boolean isNearBottom;
    private final boolean isNearTop;
    private final boolean isSettling;
    private final int lastVisibleMessageIndex;
    private final Double lastVisibleMessagePercentVisible;
    private final ScrollDirection scrollDirection;

    public ScrollState(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, ScrollDirection scrollDirection, boolean z16, int i10, Double d10, int i11, Double d11) {
        this.isDragging = z10;
        this.isSettling = z11;
        this.isNearBottom = z12;
        this.isAtBottom = z13;
        this.isNearTop = z14;
        this.isAtTop = z15;
        this.scrollDirection = scrollDirection;
        this.isFirstMessageVisible = z16;
        this.firstVisibleMessageIndex = i10;
        this.firstVisibleMessagePercentVisible = d10;
        this.lastVisibleMessageIndex = i11;
        this.lastVisibleMessagePercentVisible = d11;
    }

    public static /* synthetic */ ScrollState copy$default(ScrollState scrollState, boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, ScrollDirection scrollDirection, boolean z16, int i10, Double d10, int i11, Double d11, int i12, Object obj) {
        if ((i12 & 1) != 0) {
            z10 = scrollState.isDragging;
        }
        if ((i12 & 2) != 0) {
            z11 = scrollState.isSettling;
        }
        if ((i12 & 4) != 0) {
            z12 = scrollState.isNearBottom;
        }
        if ((i12 & 8) != 0) {
            z13 = scrollState.isAtBottom;
        }
        if ((i12 & 16) != 0) {
            z14 = scrollState.isNearTop;
        }
        if ((i12 & 32) != 0) {
            z15 = scrollState.isAtTop;
        }
        if ((i12 & 64) != 0) {
            scrollDirection = scrollState.scrollDirection;
        }
        if ((i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            z16 = scrollState.isFirstMessageVisible;
        }
        if ((i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            i10 = scrollState.firstVisibleMessageIndex;
        }
        if ((i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            d10 = scrollState.firstVisibleMessagePercentVisible;
        }
        if ((i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            i11 = scrollState.lastVisibleMessageIndex;
        }
        if ((i12 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
            d11 = scrollState.lastVisibleMessagePercentVisible;
        }
        int i13 = i11;
        Double d12 = d11;
        int i14 = i10;
        Double d13 = d10;
        ScrollDirection scrollDirection2 = scrollDirection;
        boolean z17 = z16;
        boolean z18 = z14;
        boolean z19 = z15;
        return scrollState.copy(z10, z11, z12, z13, z18, z19, scrollDirection2, z17, i14, d13, i13, d12);
    }

    public final boolean component1() {
        return this.isDragging;
    }

    public final Double component10() {
        return this.firstVisibleMessagePercentVisible;
    }

    public final int component11() {
        return this.lastVisibleMessageIndex;
    }

    public final Double component12() {
        return this.lastVisibleMessagePercentVisible;
    }

    public final boolean component2() {
        return this.isSettling;
    }

    public final boolean component3() {
        return this.isNearBottom;
    }

    public final boolean component4() {
        return this.isAtBottom;
    }

    public final boolean component5() {
        return this.isNearTop;
    }

    public final boolean component6() {
        return this.isAtTop;
    }

    public final ScrollDirection component7() {
        return this.scrollDirection;
    }

    public final boolean component8() {
        return this.isFirstMessageVisible;
    }

    public final int component9() {
        return this.firstVisibleMessageIndex;
    }

    @NotNull
    public final ScrollState copy(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, ScrollDirection scrollDirection, boolean z16, int i10, Double d10, int i11, Double d11) {
        return new ScrollState(z10, z11, z12, z13, z14, z15, scrollDirection, z16, i10, d10, i11, d11);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ScrollState) {
            ScrollState scrollState = (ScrollState) obj;
            return this.isDragging == scrollState.isDragging && this.isSettling == scrollState.isSettling && this.isNearBottom == scrollState.isNearBottom && this.isAtBottom == scrollState.isAtBottom && this.isNearTop == scrollState.isNearTop && this.isAtTop == scrollState.isAtTop && this.scrollDirection == scrollState.scrollDirection && this.isFirstMessageVisible == scrollState.isFirstMessageVisible && this.firstVisibleMessageIndex == scrollState.firstVisibleMessageIndex && Intrinsics.areEqual((Object) this.firstVisibleMessagePercentVisible, (Object) scrollState.firstVisibleMessagePercentVisible) && this.lastVisibleMessageIndex == scrollState.lastVisibleMessageIndex && Intrinsics.areEqual((Object) this.lastVisibleMessagePercentVisible, (Object) scrollState.lastVisibleMessagePercentVisible);
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

    public final ScrollDirection getScrollDirection() {
        return this.scrollDirection;
    }

    public int hashCode() {
        int hashCode = ((((((((((Boolean.hashCode(this.isDragging) * 31) + Boolean.hashCode(this.isSettling)) * 31) + Boolean.hashCode(this.isNearBottom)) * 31) + Boolean.hashCode(this.isAtBottom)) * 31) + Boolean.hashCode(this.isNearTop)) * 31) + Boolean.hashCode(this.isAtTop)) * 31;
        ScrollDirection scrollDirection = this.scrollDirection;
        int hashCode2 = (((((hashCode + (scrollDirection == null ? 0 : scrollDirection.hashCode())) * 31) + Boolean.hashCode(this.isFirstMessageVisible)) * 31) + Integer.hashCode(this.firstVisibleMessageIndex)) * 31;
        Double d10 = this.firstVisibleMessagePercentVisible;
        int hashCode3 = (((hashCode2 + (d10 == null ? 0 : d10.hashCode())) * 31) + Integer.hashCode(this.lastVisibleMessageIndex)) * 31;
        Double d11 = this.lastVisibleMessagePercentVisible;
        return hashCode3 + (d11 != null ? d11.hashCode() : 0);
    }

    public final boolean isAtBottom() {
        return this.isAtBottom;
    }

    public final boolean isAtTop() {
        return this.isAtTop;
    }

    public final boolean isDragging() {
        return this.isDragging;
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

    public final boolean isSettling() {
        return this.isSettling;
    }

    @NotNull
    public String toString() {
        boolean z10 = this.isDragging;
        boolean z11 = this.isSettling;
        boolean z12 = this.isNearBottom;
        boolean z13 = this.isAtBottom;
        boolean z14 = this.isNearTop;
        boolean z15 = this.isAtTop;
        ScrollDirection scrollDirection = this.scrollDirection;
        boolean z16 = this.isFirstMessageVisible;
        int i10 = this.firstVisibleMessageIndex;
        Double d10 = this.firstVisibleMessagePercentVisible;
        int i11 = this.lastVisibleMessageIndex;
        Double d11 = this.lastVisibleMessagePercentVisible;
        return "ScrollState(isDragging=" + z10 + ", isSettling=" + z11 + ", isNearBottom=" + z12 + ", isAtBottom=" + z13 + ", isNearTop=" + z14 + ", isAtTop=" + z15 + ", scrollDirection=" + scrollDirection + ", isFirstMessageVisible=" + z16 + ", firstVisibleMessageIndex=" + i10 + ", firstVisibleMessagePercentVisible=" + d10 + ", lastVisibleMessageIndex=" + i11 + ", lastVisibleMessagePercentVisible=" + d11 + ")";
    }
}
