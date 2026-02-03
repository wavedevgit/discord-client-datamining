package androidx.recyclerview.widget;

import android.annotation.SuppressLint;
import android.view.View;
import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class q extends RecyclerView.ItemAnimator {
    private static final boolean DEBUG = false;
    private static final String TAG = "SimpleItemAnimator";
    boolean mSupportsChangeAnimations = true;

    public abstract boolean animateAdd(RecyclerView.ViewHolder viewHolder);

    @Override // androidx.recyclerview.widget.RecyclerView.ItemAnimator
    public boolean animateAppearance(@NonNull RecyclerView.ViewHolder viewHolder, RecyclerView.ItemAnimator.ItemHolderInfo itemHolderInfo, @NonNull RecyclerView.ItemAnimator.ItemHolderInfo itemHolderInfo2) {
        int i10;
        int i11;
        if (itemHolderInfo != null && ((i10 = itemHolderInfo.f4811a) != (i11 = itemHolderInfo2.f4811a) || itemHolderInfo.f4812b != itemHolderInfo2.f4812b)) {
            return animateMove(viewHolder, i10, itemHolderInfo.f4812b, i11, itemHolderInfo2.f4812b);
        }
        return animateAdd(viewHolder);
    }

    public abstract boolean animateChange(RecyclerView.ViewHolder viewHolder, RecyclerView.ViewHolder viewHolder2, int i10, int i11, int i12, int i13);

    @Override // androidx.recyclerview.widget.RecyclerView.ItemAnimator
    public boolean animateChange(@NonNull RecyclerView.ViewHolder viewHolder, @NonNull RecyclerView.ViewHolder viewHolder2, @NonNull RecyclerView.ItemAnimator.ItemHolderInfo itemHolderInfo, @NonNull RecyclerView.ItemAnimator.ItemHolderInfo itemHolderInfo2) {
        int i10;
        int i11;
        int i12 = itemHolderInfo.f4811a;
        int i13 = itemHolderInfo.f4812b;
        if (viewHolder2.shouldIgnore()) {
            int i14 = itemHolderInfo.f4811a;
            i11 = itemHolderInfo.f4812b;
            i10 = i14;
        } else {
            i10 = itemHolderInfo2.f4811a;
            i11 = itemHolderInfo2.f4812b;
        }
        return animateChange(viewHolder, viewHolder2, i12, i13, i10, i11);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.ItemAnimator
    public boolean animateDisappearance(@NonNull RecyclerView.ViewHolder viewHolder, @NonNull RecyclerView.ItemAnimator.ItemHolderInfo itemHolderInfo, RecyclerView.ItemAnimator.ItemHolderInfo itemHolderInfo2) {
        int i10;
        int i11;
        int i12 = itemHolderInfo.f4811a;
        int i13 = itemHolderInfo.f4812b;
        View view = viewHolder.itemView;
        if (itemHolderInfo2 == null) {
            i10 = view.getLeft();
        } else {
            i10 = itemHolderInfo2.f4811a;
        }
        int i14 = i10;
        if (itemHolderInfo2 == null) {
            i11 = view.getTop();
        } else {
            i11 = itemHolderInfo2.f4812b;
        }
        int i15 = i11;
        if (!viewHolder.isRemoved() && (i12 != i14 || i13 != i15)) {
            view.layout(i14, i15, view.getWidth() + i14, view.getHeight() + i15);
            return animateMove(viewHolder, i12, i13, i14, i15);
        }
        return animateRemove(viewHolder);
    }

    public abstract boolean animateMove(RecyclerView.ViewHolder viewHolder, int i10, int i11, int i12, int i13);

    @Override // androidx.recyclerview.widget.RecyclerView.ItemAnimator
    public boolean animatePersistence(@NonNull RecyclerView.ViewHolder viewHolder, @NonNull RecyclerView.ItemAnimator.ItemHolderInfo itemHolderInfo, @NonNull RecyclerView.ItemAnimator.ItemHolderInfo itemHolderInfo2) {
        int i10 = itemHolderInfo.f4811a;
        int i11 = itemHolderInfo2.f4811a;
        if (i10 == i11 && itemHolderInfo.f4812b == itemHolderInfo2.f4812b) {
            dispatchMoveFinished(viewHolder);
            return false;
        }
        return animateMove(viewHolder, i10, itemHolderInfo.f4812b, i11, itemHolderInfo2.f4812b);
    }

    public abstract boolean animateRemove(RecyclerView.ViewHolder viewHolder);

    @Override // androidx.recyclerview.widget.RecyclerView.ItemAnimator
    public boolean canReuseUpdatedViewHolder(@NonNull RecyclerView.ViewHolder viewHolder) {
        if (this.mSupportsChangeAnimations && !viewHolder.isInvalid()) {
            return false;
        }
        return true;
    }

    @SuppressLint({"UnknownNullness"})
    public final void dispatchAddFinished(RecyclerView.ViewHolder viewHolder) {
        onAddFinished(viewHolder);
        dispatchAnimationFinished(viewHolder);
    }

    @SuppressLint({"UnknownNullness"})
    public final void dispatchAddStarting(RecyclerView.ViewHolder viewHolder) {
        onAddStarting(viewHolder);
    }

    @SuppressLint({"UnknownNullness"})
    public final void dispatchChangeFinished(RecyclerView.ViewHolder viewHolder, boolean z10) {
        onChangeFinished(viewHolder, z10);
        dispatchAnimationFinished(viewHolder);
    }

    @SuppressLint({"UnknownNullness"})
    public final void dispatchChangeStarting(RecyclerView.ViewHolder viewHolder, boolean z10) {
        onChangeStarting(viewHolder, z10);
    }

    @SuppressLint({"UnknownNullness"})
    public final void dispatchMoveFinished(RecyclerView.ViewHolder viewHolder) {
        onMoveFinished(viewHolder);
        dispatchAnimationFinished(viewHolder);
    }

    @SuppressLint({"UnknownNullness"})
    public final void dispatchMoveStarting(RecyclerView.ViewHolder viewHolder) {
        onMoveStarting(viewHolder);
    }

    @SuppressLint({"UnknownNullness"})
    public final void dispatchRemoveFinished(RecyclerView.ViewHolder viewHolder) {
        onRemoveFinished(viewHolder);
        dispatchAnimationFinished(viewHolder);
    }

    @SuppressLint({"UnknownNullness"})
    public final void dispatchRemoveStarting(RecyclerView.ViewHolder viewHolder) {
        onRemoveStarting(viewHolder);
    }

    public boolean getSupportsChangeAnimations() {
        return this.mSupportsChangeAnimations;
    }

    @SuppressLint({"UnknownNullness"})
    public void onAddFinished(RecyclerView.ViewHolder viewHolder) {
    }

    @SuppressLint({"UnknownNullness"})
    public void onAddStarting(RecyclerView.ViewHolder viewHolder) {
    }

    @SuppressLint({"UnknownNullness"})
    public void onChangeFinished(RecyclerView.ViewHolder viewHolder, boolean z10) {
    }

    @SuppressLint({"UnknownNullness"})
    public void onChangeStarting(RecyclerView.ViewHolder viewHolder, boolean z10) {
    }

    @SuppressLint({"UnknownNullness"})
    public void onMoveFinished(RecyclerView.ViewHolder viewHolder) {
    }

    @SuppressLint({"UnknownNullness"})
    public void onMoveStarting(RecyclerView.ViewHolder viewHolder) {
    }

    @SuppressLint({"UnknownNullness"})
    public void onRemoveFinished(RecyclerView.ViewHolder viewHolder) {
    }

    @SuppressLint({"UnknownNullness"})
    public void onRemoveStarting(RecyclerView.ViewHolder viewHolder) {
    }

    public void setSupportsChangeAnimations(boolean z10) {
        this.mSupportsChangeAnimations = z10;
    }
}
