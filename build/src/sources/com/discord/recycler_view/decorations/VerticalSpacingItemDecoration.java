package com.discord.recycler_view.decorations;

import android.graphics.Rect;
import android.view.View;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000@\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0006\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\u0018\u00002\u00020\u0001:\u0001\u001cB-\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0005\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJ(\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u0016H\u0016J\f\u0010\u0017\u001a\u00020\u0007*\u00020\u0018H\u0002J\f\u0010\u0019\u001a\u00020\u0007*\u00020\u0018H\u0002J\u0014\u0010\u001a\u001a\u00020\u0007*\u00020\u00182\u0006\u0010\u001b\u001a\u00020\u0003H\u0002R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0004\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0005\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u001a\u0010\u0006\u001a\u00020\u0007X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0006\u0010\n\"\u0004\b\u000b\u0010\f¨\u0006\u001d"}, d2 = {"Lcom/discord/recycler_view/decorations/VerticalSpacingItemDecoration;", "Landroidx/recyclerview/widget/RecyclerView$ItemDecoration;", "spacingPx", "", "firstItemSpacingPx", "endItemSpacingPx", "isRecyclerLayoutReversed", "", "<init>", "(IIIZ)V", "()Z", "setRecyclerLayoutReversed", "(Z)V", "getItemOffsets", "", "outRect", "Landroid/graphics/Rect;", "view", "Landroid/view/View;", "parent", "Landroidx/recyclerview/widget/RecyclerView;", "state", "Landroidx/recyclerview/widget/RecyclerView$State;", "isOrWasAtLastItemPosition", "Landroidx/recyclerview/widget/RecyclerView$ViewHolder;", "isOrWasAtFirstItemPosition", "validateItemPosition", ViewProps.POSITION, "SpacingProviderView", "recycler_view_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class VerticalSpacingItemDecoration extends RecyclerView.ItemDecoration {
    private final int endItemSpacingPx;
    private final int firstItemSpacingPx;
    private boolean isRecyclerLayoutReversed;
    private final int spacingPx;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\bf\u0018\u00002\u00020\u0001J\u000f\u0010\u0002\u001a\u0004\u0018\u00010\u0003H&¢\u0006\u0002\u0010\u0004¨\u0006\u0005"}, d2 = {"Lcom/discord/recycler_view/decorations/VerticalSpacingItemDecoration$SpacingProviderView;", "", "spacingPxOverride", "", "()Ljava/lang/Integer;", "recycler_view_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface SpacingProviderView {
        Integer spacingPxOverride();
    }

    public /* synthetic */ VerticalSpacingItemDecoration(int i10, int i11, int i12, boolean z10, int i13, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, (i13 & 2) != 0 ? 0 : i11, (i13 & 4) != 0 ? 0 : i12, (i13 & 8) != 0 ? false : z10);
    }

    private final boolean isOrWasAtFirstItemPosition(RecyclerView.ViewHolder viewHolder) {
        int i10;
        if (this.isRecyclerLayoutReversed) {
            RecyclerView.Adapter bindingAdapter = viewHolder.getBindingAdapter();
            Intrinsics.checkNotNull(bindingAdapter);
            i10 = bindingAdapter.getItemCount() - 1;
        } else {
            i10 = 0;
        }
        return validateItemPosition(viewHolder, i10);
    }

    private final boolean isOrWasAtLastItemPosition(RecyclerView.ViewHolder viewHolder) {
        int itemCount;
        if (this.isRecyclerLayoutReversed) {
            itemCount = 0;
        } else {
            RecyclerView.Adapter bindingAdapter = viewHolder.getBindingAdapter();
            Intrinsics.checkNotNull(bindingAdapter);
            itemCount = bindingAdapter.getItemCount() - 1;
        }
        return validateItemPosition(viewHolder, itemCount);
    }

    private final boolean validateItemPosition(RecyclerView.ViewHolder viewHolder, int i10) {
        if (viewHolder.getBindingAdapterPosition() != i10) {
            if (viewHolder.getBindingAdapterPosition() != -1 || viewHolder.getOldPosition() != i10) {
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.ItemDecoration
    public void getItemOffsets(@NotNull Rect outRect, @NotNull View view, @NotNull RecyclerView parent, @NotNull RecyclerView.State state) {
        SpacingProviderView spacingProviderView;
        int i10;
        Integer spacingPxOverride;
        Intrinsics.checkNotNullParameter(outRect, "outRect");
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(parent, "parent");
        Intrinsics.checkNotNullParameter(state, "state");
        RecyclerView.ViewHolder childViewHolder = parent.getChildViewHolder(view);
        Intrinsics.checkNotNull(childViewHolder);
        boolean isOrWasAtLastItemPosition = isOrWasAtLastItemPosition(childViewHolder);
        boolean isOrWasAtFirstItemPosition = isOrWasAtFirstItemPosition(childViewHolder);
        if (view instanceof SpacingProviderView) {
            spacingProviderView = (SpacingProviderView) view;
        } else {
            spacingProviderView = null;
        }
        if (spacingProviderView != null && (spacingPxOverride = spacingProviderView.spacingPxOverride()) != null) {
            i10 = spacingPxOverride.intValue();
        } else {
            i10 = this.spacingPx;
        }
        if (isOrWasAtLastItemPosition) {
            i10 = this.endItemSpacingPx;
        }
        outRect.bottom = i10;
        if (isOrWasAtFirstItemPosition) {
            outRect.top = this.firstItemSpacingPx;
        }
    }

    public final boolean isRecyclerLayoutReversed() {
        return this.isRecyclerLayoutReversed;
    }

    public final void setRecyclerLayoutReversed(boolean z10) {
        this.isRecyclerLayoutReversed = z10;
    }

    public VerticalSpacingItemDecoration(int i10, int i11, int i12, boolean z10) {
        this.spacingPx = i10;
        this.firstItemSpacingPx = i11;
        this.endItemSpacingPx = i12;
        this.isRecyclerLayoutReversed = z10;
    }
}
