package androidx.recyclerview.widget;

import android.annotation.SuppressLint;
import android.graphics.Canvas;
import android.view.animation.Interpolator;
import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class h {
    private static final int ABS_HORIZONTAL_DIR_FLAGS = 789516;
    public static final int DEFAULT_DRAG_ANIMATION_DURATION = 200;
    public static final int DEFAULT_SWIPE_ANIMATION_DURATION = 250;
    private static final long DRAG_SCROLL_ACCELERATION_LIMIT_TIME_MS = 2000;
    static final int RELATIVE_DIR_FLAGS = 3158064;
    private static final Interpolator sDragScrollInterpolator = new a();
    private static final Interpolator sDragViewScrollCapInterpolator = new b();
    private int mCachedMaxScrollSpeed = -1;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Interpolator {
        a() {
        }

        @Override // android.animation.TimeInterpolator
        public float getInterpolation(float f10) {
            return f10 * f10 * f10 * f10 * f10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b implements Interpolator {
        b() {
        }

        @Override // android.animation.TimeInterpolator
        public float getInterpolation(float f10) {
            float f11 = f10 - 1.0f;
            return (f11 * f11 * f11 * f11 * f11) + 1.0f;
        }
    }

    private int a(RecyclerView recyclerView) {
        if (this.mCachedMaxScrollSpeed == -1) {
            this.mCachedMaxScrollSpeed = recyclerView.getResources().getDimensionPixelSize(q3.b.f46892d);
        }
        return this.mCachedMaxScrollSpeed;
    }

    public static int convertToRelativeDirection(int i10, int i11) {
        int i12;
        int i13 = i10 & ABS_HORIZONTAL_DIR_FLAGS;
        if (i13 == 0) {
            return i10;
        }
        int i14 = i10 & (~i13);
        if (i11 == 0) {
            i12 = i13 << 2;
        } else {
            int i15 = i13 << 1;
            i14 |= (-789517) & i15;
            i12 = (i15 & ABS_HORIZONTAL_DIR_FLAGS) << 2;
        }
        return i14 | i12;
    }

    @NonNull
    public static ItemTouchUIUtil getDefaultUIUtil() {
        return j.f5020a;
    }

    public static int makeFlag(int i10, int i11) {
        return i11 << (i10 * 8);
    }

    public static int makeMovementFlags(int i10, int i11) {
        int makeFlag = makeFlag(0, i11 | i10);
        return makeFlag(2, i10) | makeFlag(1, i11) | makeFlag;
    }

    public boolean canDropOver(@NonNull RecyclerView recyclerView, @NonNull RecyclerView.ViewHolder viewHolder, @NonNull RecyclerView.ViewHolder viewHolder2) {
        return true;
    }

    @SuppressLint({"UnknownNullness"})
    public RecyclerView.ViewHolder chooseDropTarget(@NonNull RecyclerView.ViewHolder viewHolder, @NonNull List<RecyclerView.ViewHolder> list, int i10, int i11) {
        int bottom;
        int abs;
        int top;
        int abs2;
        int left;
        int abs3;
        int right;
        int abs4;
        int width = viewHolder.itemView.getWidth() + i10;
        int height = i11 + viewHolder.itemView.getHeight();
        int left2 = i10 - viewHolder.itemView.getLeft();
        int top2 = i11 - viewHolder.itemView.getTop();
        int size = list.size();
        RecyclerView.ViewHolder viewHolder2 = null;
        int i12 = -1;
        for (int i13 = 0; i13 < size; i13++) {
            RecyclerView.ViewHolder viewHolder3 = list.get(i13);
            if (left2 > 0 && (right = viewHolder3.itemView.getRight() - width) < 0 && viewHolder3.itemView.getRight() > viewHolder.itemView.getRight() && (abs4 = Math.abs(right)) > i12) {
                viewHolder2 = viewHolder3;
                i12 = abs4;
            }
            if (left2 < 0 && (left = viewHolder3.itemView.getLeft() - i10) > 0 && viewHolder3.itemView.getLeft() < viewHolder.itemView.getLeft() && (abs3 = Math.abs(left)) > i12) {
                viewHolder2 = viewHolder3;
                i12 = abs3;
            }
            if (top2 < 0 && (top = viewHolder3.itemView.getTop() - i11) > 0 && viewHolder3.itemView.getTop() < viewHolder.itemView.getTop() && (abs2 = Math.abs(top)) > i12) {
                viewHolder2 = viewHolder3;
                i12 = abs2;
            }
            if (top2 > 0 && (bottom = viewHolder3.itemView.getBottom() - height) < 0 && viewHolder3.itemView.getBottom() > viewHolder.itemView.getBottom() && (abs = Math.abs(bottom)) > i12) {
                viewHolder2 = viewHolder3;
                i12 = abs;
            }
        }
        return viewHolder2;
    }

    public void clearView(@NonNull RecyclerView recyclerView, @NonNull RecyclerView.ViewHolder viewHolder) {
        j.f5020a.a(viewHolder.itemView);
    }

    public int convertToAbsoluteDirection(int i10, int i11) {
        int i12;
        int i13 = i10 & RELATIVE_DIR_FLAGS;
        if (i13 == 0) {
            return i10;
        }
        int i14 = i10 & (~i13);
        if (i11 == 0) {
            i12 = i13 >> 2;
        } else {
            int i15 = i13 >> 1;
            i14 |= (-3158065) & i15;
            i12 = (i15 & RELATIVE_DIR_FLAGS) >> 2;
        }
        return i14 | i12;
    }

    final int getAbsoluteMovementFlags(RecyclerView recyclerView, RecyclerView.ViewHolder viewHolder) {
        return convertToAbsoluteDirection(getMovementFlags(recyclerView, viewHolder), recyclerView.getLayoutDirection());
    }

    public long getAnimationDuration(@NonNull RecyclerView recyclerView, int i10, float f10, float f11) {
        RecyclerView.ItemAnimator itemAnimator = recyclerView.getItemAnimator();
        if (itemAnimator == null) {
            if (i10 == 8) {
                return 200L;
            }
            return 250L;
        } else if (i10 == 8) {
            return itemAnimator.getMoveDuration();
        } else {
            return itemAnimator.getRemoveDuration();
        }
    }

    public int getBoundingBoxMargin() {
        return 0;
    }

    public float getMoveThreshold(@NonNull RecyclerView.ViewHolder viewHolder) {
        return 0.5f;
    }

    public abstract int getMovementFlags(@NonNull RecyclerView recyclerView, @NonNull RecyclerView.ViewHolder viewHolder);

    public float getSwipeEscapeVelocity(float f10) {
        return f10;
    }

    public float getSwipeThreshold(@NonNull RecyclerView.ViewHolder viewHolder) {
        return 0.5f;
    }

    public float getSwipeVelocityThreshold(float f10) {
        return f10;
    }

    boolean hasSwipeFlag(RecyclerView recyclerView, RecyclerView.ViewHolder viewHolder) {
        if ((getAbsoluteMovementFlags(recyclerView, viewHolder) & 65280) != 0) {
            return true;
        }
        return false;
    }

    public int interpolateOutOfBoundsScroll(@NonNull RecyclerView recyclerView, int i10, int i11, int i12, long j10) {
        float f10 = 1.0f;
        int signum = (int) (((int) Math.signum(i11)) * a(recyclerView) * sDragViewScrollCapInterpolator.getInterpolation(Math.min(1.0f, (Math.abs(i11) * 1.0f) / i10)));
        if (j10 <= DRAG_SCROLL_ACCELERATION_LIMIT_TIME_MS) {
            f10 = ((float) j10) / 2000.0f;
        }
        int interpolation = (int) (signum * sDragScrollInterpolator.getInterpolation(f10));
        if (interpolation == 0) {
            if (i11 > 0) {
                return 1;
            }
            return -1;
        }
        return interpolation;
    }

    public boolean isItemViewSwipeEnabled() {
        return true;
    }

    public boolean isLongPressDragEnabled() {
        return true;
    }

    public void onChildDraw(@NonNull Canvas canvas, @NonNull RecyclerView recyclerView, @NonNull RecyclerView.ViewHolder viewHolder, float f10, float f11, int i10, boolean z10) {
        j.f5020a.c(canvas, recyclerView, viewHolder.itemView, f10, f11, i10, z10);
    }

    public void onChildDrawOver(@NonNull Canvas canvas, @NonNull RecyclerView recyclerView, @SuppressLint({"UnknownNullness"}) RecyclerView.ViewHolder viewHolder, float f10, float f11, int i10, boolean z10) {
        j.f5020a.d(canvas, recyclerView, viewHolder.itemView, f10, f11, i10, z10);
    }

    public abstract boolean onMove(@NonNull RecyclerView recyclerView, @NonNull RecyclerView.ViewHolder viewHolder, @NonNull RecyclerView.ViewHolder viewHolder2);

    public void onMoved(@NonNull RecyclerView recyclerView, @NonNull RecyclerView.ViewHolder viewHolder, int i10, @NonNull RecyclerView.ViewHolder viewHolder2, int i11, int i12, int i13) {
        RecyclerView.LayoutManager layoutManager = recyclerView.getLayoutManager();
        if (layoutManager instanceof i) {
            ((i) layoutManager).prepareForDrop(viewHolder.itemView, viewHolder2.itemView, i12, i13);
            return;
        }
        if (layoutManager.canScrollHorizontally()) {
            if (layoutManager.getDecoratedLeft(viewHolder2.itemView) <= recyclerView.getPaddingLeft()) {
                recyclerView.scrollToPosition(i11);
            }
            if (layoutManager.getDecoratedRight(viewHolder2.itemView) >= recyclerView.getWidth() - recyclerView.getPaddingRight()) {
                recyclerView.scrollToPosition(i11);
            }
        }
        if (layoutManager.canScrollVertically()) {
            if (layoutManager.getDecoratedTop(viewHolder2.itemView) <= recyclerView.getPaddingTop()) {
                recyclerView.scrollToPosition(i11);
            }
            if (layoutManager.getDecoratedBottom(viewHolder2.itemView) >= recyclerView.getHeight() - recyclerView.getPaddingBottom()) {
                recyclerView.scrollToPosition(i11);
            }
        }
    }

    public void onSelectedChanged(RecyclerView.ViewHolder viewHolder, int i10) {
        if (viewHolder != null) {
            j.f5020a.b(viewHolder.itemView);
        }
    }

    public abstract void onSwiped(@NonNull RecyclerView.ViewHolder viewHolder, int i10);
}
