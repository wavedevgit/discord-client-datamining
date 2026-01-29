package com.discord.chat.presentation.message.view;

import android.content.Context;
import android.util.AttributeSet;
import com.discord.chat.presentation.media.MediaContainingViewResizer;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0005\u0018\u00002\u00020\u0001:\u0001\u0014B\u001d\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007J&\u0010\f\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00102\u0006\u0010\u0012\u001a\u00020\u00102\u0006\u0010\u0013\u001a\u00020\u0010R\u001a\u0010\b\u001a\u00020\tX\u0086.¢\u0006\u000e\n\u0000\u001a\u0004\b\n\u0010\u000b\"\u0004\b\f\u0010\r¨\u0006\u0015"}, d2 = {"Lcom/discord/chat/presentation/message/view/EmbedViewResizingMediaView;", "Lcom/discord/chat/presentation/message/view/MediaView;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "target", "Lcom/discord/chat/presentation/message/view/EmbedViewResizingMediaView$Target;", "getTarget", "()Lcom/discord/chat/presentation/message/view/EmbedViewResizingMediaView$Target;", "setTarget", "(Lcom/discord/chat/presentation/message/view/EmbedViewResizingMediaView$Target;)V", "", "width", "", "height", "maxHeightPx", "maxWidthPx", "Target", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class EmbedViewResizingMediaView extends MediaView {
    public Target target;

    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0010\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B'\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003¢\u0006\u0004\b\u0007\u0010\bJ\t\u0010\u000e\u001a\u00020\u0003HÆ\u0003J\t\u0010\u000f\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0010\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0011\u001a\u00020\u0003HÆ\u0003J1\u0010\u0012\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0013\u001a\u00020\u00142\b\u0010\u0015\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0016\u001a\u00020\u0003HÖ\u0001J\t\u0010\u0017\u001a\u00020\u0018HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\nR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\nR\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\nR\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\n¨\u0006\u0019"}, d2 = {"Lcom/discord/chat/presentation/message/view/EmbedViewResizingMediaView$Target;", "", "width", "", "height", "maxHeightPx", "maxWidthPx", "<init>", "(IIII)V", "getWidth", "()I", "getHeight", "getMaxHeightPx", "getMaxWidthPx", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Target {
        private final int height;
        private final int maxHeightPx;
        private final int maxWidthPx;
        private final int width;

        public Target(int i10, int i11, int i12, int i13) {
            this.width = i10;
            this.height = i11;
            this.maxHeightPx = i12;
            this.maxWidthPx = i13;
        }

        public static /* synthetic */ Target copy$default(Target target, int i10, int i11, int i12, int i13, int i14, Object obj) {
            if ((i14 & 1) != 0) {
                i10 = target.width;
            }
            if ((i14 & 2) != 0) {
                i11 = target.height;
            }
            if ((i14 & 4) != 0) {
                i12 = target.maxHeightPx;
            }
            if ((i14 & 8) != 0) {
                i13 = target.maxWidthPx;
            }
            return target.copy(i10, i11, i12, i13);
        }

        public final int component1() {
            return this.width;
        }

        public final int component2() {
            return this.height;
        }

        public final int component3() {
            return this.maxHeightPx;
        }

        public final int component4() {
            return this.maxWidthPx;
        }

        @NotNull
        public final Target copy(int i10, int i11, int i12, int i13) {
            return new Target(i10, i11, i12, i13);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Target) {
                Target target = (Target) obj;
                return this.width == target.width && this.height == target.height && this.maxHeightPx == target.maxHeightPx && this.maxWidthPx == target.maxWidthPx;
            }
            return false;
        }

        public final int getHeight() {
            return this.height;
        }

        public final int getMaxHeightPx() {
            return this.maxHeightPx;
        }

        public final int getMaxWidthPx() {
            return this.maxWidthPx;
        }

        public final int getWidth() {
            return this.width;
        }

        public int hashCode() {
            return (((((Integer.hashCode(this.width) * 31) + Integer.hashCode(this.height)) * 31) + Integer.hashCode(this.maxHeightPx)) * 31) + Integer.hashCode(this.maxWidthPx);
        }

        @NotNull
        public String toString() {
            int i10 = this.width;
            int i11 = this.height;
            int i12 = this.maxHeightPx;
            int i13 = this.maxWidthPx;
            return "Target(width=" + i10 + ", height=" + i11 + ", maxHeightPx=" + i12 + ", maxWidthPx=" + i13 + ")";
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public EmbedViewResizingMediaView(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    @NotNull
    public final Target getTarget() {
        Target target = this.target;
        if (target != null) {
            return target;
        }
        Intrinsics.throwUninitializedPropertyAccessException("target");
        return null;
    }

    public final void setTarget(@NotNull Target target) {
        Intrinsics.checkNotNullParameter(target, "<set-?>");
        this.target = target;
    }

    public /* synthetic */ EmbedViewResizingMediaView(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    public final void setTarget(int i10, int i11, int i12, int i13) {
        Target target = new Target(i10, i11, i12, i13);
        if (this.target == null || !Intrinsics.areEqual(getTarget(), target)) {
            setTarget(target);
        }
        MediaContainingViewResizer.resizeLayoutParams$default(MediaContainingViewResizer.INSTANCE, this, getTarget().getWidth(), getTarget().getHeight(), i13, i12, null, 16, null);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public EmbedViewResizingMediaView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }
}
