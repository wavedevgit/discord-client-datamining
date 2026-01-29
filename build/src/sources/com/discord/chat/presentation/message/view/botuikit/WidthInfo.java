package com.discord.chat.presentation.message.view.botuikit;

import com.discord.media.utils.DiscordVideoMediaSource;
import com.discord.misc.utilities.size.SizeUtilsKt;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u000b\n\u0002\u0010\u000b\n\u0002\b\u000e\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B!\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0005\u001a\u00020\u0003¢\u0006\u0004\b\u0006\u0010\u0007J\t\u0010\u0015\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0016\u001a\u00020\u0003HÆ\u0003J\u000e\u0010\u0017\u001a\u00020\u0003HÀ\u0003¢\u0006\u0002\b\u0018J'\u0010\u0019\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u001a\u001a\u00020\u000f2\b\u0010\u001b\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001c\u001a\u00020\u0003HÖ\u0001J\t\u0010\u001d\u001a\u00020\u001eHÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\tR\u0014\u0010\u0005\u001a\u00020\u0003X\u0080\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\tR\u0011\u0010\f\u001a\u00020\u00038F¢\u0006\u0006\u001a\u0004\b\r\u0010\tR\u0011\u0010\u000e\u001a\u00020\u000f8F¢\u0006\u0006\u001a\u0004\b\u000e\u0010\u0010R\u0011\u0010\u0011\u001a\u00020\u000f8F¢\u0006\u0006\u001a\u0004\b\u0012\u0010\u0010R\u0014\u0010\u0013\u001a\u00020\u00038BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\u0014\u0010\t¨\u0006\u001f"}, d2 = {"Lcom/discord/chat/presentation/message/view/botuikit/WidthInfo;", "", "topLevelAvailableWidth", "", "topLevelMaxWidth", "widthReductions", "<init>", "(III)V", "getTopLevelAvailableWidth", "()I", "getTopLevelMaxWidth", "getWidthReductions$chat_release", "availableWidth", "getAvailableWidth", "isLargeWidthRenderingMode", "", "()Z", "shouldRestrictTopLevelWidth", "getShouldRestrictTopLevelWidth", "topLevelWidth", "getTopLevelWidth", "component1", "component2", "component3", "component3$chat_release", "copy", "equals", "other", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class WidthInfo {
    private final int topLevelAvailableWidth;
    private final int topLevelMaxWidth;
    private final int widthReductions;

    public WidthInfo(int i10, int i11, int i12) {
        this.topLevelAvailableWidth = i10;
        this.topLevelMaxWidth = i11;
        this.widthReductions = i12;
    }

    public static /* synthetic */ WidthInfo copy$default(WidthInfo widthInfo, int i10, int i11, int i12, int i13, Object obj) {
        if ((i13 & 1) != 0) {
            i10 = widthInfo.topLevelAvailableWidth;
        }
        if ((i13 & 2) != 0) {
            i11 = widthInfo.topLevelMaxWidth;
        }
        if ((i13 & 4) != 0) {
            i12 = widthInfo.widthReductions;
        }
        return widthInfo.copy(i10, i11, i12);
    }

    private final int getTopLevelWidth() {
        return Math.min(this.topLevelAvailableWidth, this.topLevelMaxWidth);
    }

    public final int component1() {
        return this.topLevelAvailableWidth;
    }

    public final int component2() {
        return this.topLevelMaxWidth;
    }

    public final int component3$chat_release() {
        return this.widthReductions;
    }

    @NotNull
    public final WidthInfo copy(int i10, int i11, int i12) {
        return new WidthInfo(i10, i11, i12);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof WidthInfo) {
            WidthInfo widthInfo = (WidthInfo) obj;
            return this.topLevelAvailableWidth == widthInfo.topLevelAvailableWidth && this.topLevelMaxWidth == widthInfo.topLevelMaxWidth && this.widthReductions == widthInfo.widthReductions;
        }
        return false;
    }

    public final int getAvailableWidth() {
        return getTopLevelWidth() - this.widthReductions;
    }

    public final boolean getShouldRestrictTopLevelWidth() {
        if (this.topLevelAvailableWidth > this.topLevelMaxWidth) {
            return true;
        }
        return false;
    }

    public final int getTopLevelAvailableWidth() {
        return this.topLevelAvailableWidth;
    }

    public final int getTopLevelMaxWidth() {
        return this.topLevelMaxWidth;
    }

    public final int getWidthReductions$chat_release() {
        return this.widthReductions;
    }

    public int hashCode() {
        return (((Integer.hashCode(this.topLevelAvailableWidth) * 31) + Integer.hashCode(this.topLevelMaxWidth)) * 31) + Integer.hashCode(this.widthReductions);
    }

    public final boolean isLargeWidthRenderingMode() {
        if (getTopLevelWidth() > SizeUtilsKt.getDpToPx((int) DiscordVideoMediaSource.DEFAULT_HEIGHT) && getAvailableWidth() >= SizeUtilsKt.getDpToPx(440)) {
            return true;
        }
        return false;
    }

    @NotNull
    public String toString() {
        int i10 = this.topLevelAvailableWidth;
        int i11 = this.topLevelMaxWidth;
        int i12 = this.widthReductions;
        return "WidthInfo(topLevelAvailableWidth=" + i10 + ", topLevelMaxWidth=" + i11 + ", widthReductions=" + i12 + ")";
    }

    public /* synthetic */ WidthInfo(int i10, int i11, int i12, int i13, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, i11, (i13 & 4) != 0 ? 0 : i12);
    }
}
