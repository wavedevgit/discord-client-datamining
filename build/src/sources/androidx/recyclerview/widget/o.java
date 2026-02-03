package androidx.recyclerview.widget;

import android.content.Context;
import android.graphics.PointF;
import android.util.DisplayMetrics;
import android.view.View;
import androidx.recyclerview.widget.RecyclerView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o extends r {

    /* renamed from: d  reason: collision with root package name */
    private OrientationHelper f5075d;

    /* renamed from: e  reason: collision with root package name */
    private OrientationHelper f5076e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends l {
        a(Context context) {
            super(context);
        }

        @Override // androidx.recyclerview.widget.l
        protected float calculateSpeedPerPixel(DisplayMetrics displayMetrics) {
            return 100.0f / displayMetrics.densityDpi;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // androidx.recyclerview.widget.l
        public int calculateTimeForScrolling(int i10) {
            return Math.min(100, super.calculateTimeForScrolling(i10));
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // androidx.recyclerview.widget.l, androidx.recyclerview.widget.RecyclerView.SmoothScroller
        public void onTargetFound(View view, RecyclerView.State state, RecyclerView.SmoothScroller.Action action) {
            o oVar = o.this;
            int[] b10 = oVar.b(oVar.f5078a.getLayoutManager(), view);
            int i10 = b10[0];
            int i11 = b10[1];
            int calculateTimeForDeceleration = calculateTimeForDeceleration(Math.max(Math.abs(i10), Math.abs(i11)));
            if (calculateTimeForDeceleration > 0) {
                action.d(i10, i11, calculateTimeForDeceleration, this.mDecelerateInterpolator);
            }
        }
    }

    private int j(View view, OrientationHelper orientationHelper) {
        return (orientationHelper.g(view) + (orientationHelper.e(view) / 2)) - (orientationHelper.m() + (orientationHelper.n() / 2));
    }

    private View k(RecyclerView.LayoutManager layoutManager, OrientationHelper orientationHelper) {
        int childCount = layoutManager.getChildCount();
        View view = null;
        if (childCount == 0) {
            return null;
        }
        int m10 = orientationHelper.m() + (orientationHelper.n() / 2);
        int i10 = Integer.MAX_VALUE;
        for (int i11 = 0; i11 < childCount; i11++) {
            View childAt = layoutManager.getChildAt(i11);
            int abs = Math.abs((orientationHelper.g(childAt) + (orientationHelper.e(childAt) / 2)) - m10);
            if (abs < i10) {
                view = childAt;
                i10 = abs;
            }
        }
        return view;
    }

    private OrientationHelper l(RecyclerView.LayoutManager layoutManager) {
        OrientationHelper orientationHelper = this.f5076e;
        if (orientationHelper == null || orientationHelper.f4835a != layoutManager) {
            this.f5076e = OrientationHelper.a(layoutManager);
        }
        return this.f5076e;
    }

    private OrientationHelper m(RecyclerView.LayoutManager layoutManager) {
        if (layoutManager.canScrollVertically()) {
            return n(layoutManager);
        }
        if (layoutManager.canScrollHorizontally()) {
            return l(layoutManager);
        }
        return null;
    }

    private OrientationHelper n(RecyclerView.LayoutManager layoutManager) {
        OrientationHelper orientationHelper = this.f5075d;
        if (orientationHelper == null || orientationHelper.f4835a != layoutManager) {
            this.f5075d = OrientationHelper.c(layoutManager);
        }
        return this.f5075d;
    }

    private boolean o(RecyclerView.LayoutManager layoutManager, int i10, int i11) {
        if (layoutManager.canScrollHorizontally()) {
            if (i10 <= 0) {
                return false;
            }
            return true;
        } else if (i11 <= 0) {
            return false;
        } else {
            return true;
        }
    }

    private boolean p(RecyclerView.LayoutManager layoutManager) {
        PointF computeScrollVectorForPosition;
        int itemCount = layoutManager.getItemCount();
        if (!(layoutManager instanceof RecyclerView.SmoothScroller.a) || (computeScrollVectorForPosition = ((RecyclerView.SmoothScroller.a) layoutManager).computeScrollVectorForPosition(itemCount - 1)) == null) {
            return false;
        }
        if (computeScrollVectorForPosition.x >= 0.0f && computeScrollVectorForPosition.y >= 0.0f) {
            return false;
        }
        return true;
    }

    @Override // androidx.recyclerview.widget.r
    public int[] b(RecyclerView.LayoutManager layoutManager, View view) {
        int[] iArr = new int[2];
        if (layoutManager.canScrollHorizontally()) {
            iArr[0] = j(view, l(layoutManager));
        } else {
            iArr[0] = 0;
        }
        if (layoutManager.canScrollVertically()) {
            iArr[1] = j(view, n(layoutManager));
            return iArr;
        }
        iArr[1] = 0;
        return iArr;
    }

    @Override // androidx.recyclerview.widget.r
    protected RecyclerView.SmoothScroller c(RecyclerView.LayoutManager layoutManager) {
        if (!(layoutManager instanceof RecyclerView.SmoothScroller.a)) {
            return null;
        }
        return new a(this.f5078a.getContext());
    }

    @Override // androidx.recyclerview.widget.r
    public View e(RecyclerView.LayoutManager layoutManager) {
        if (layoutManager.canScrollVertically()) {
            return k(layoutManager, n(layoutManager));
        }
        if (layoutManager.canScrollHorizontally()) {
            return k(layoutManager, l(layoutManager));
        }
        return null;
    }

    @Override // androidx.recyclerview.widget.r
    public int f(RecyclerView.LayoutManager layoutManager, int i10, int i11) {
        OrientationHelper m10;
        int i12;
        int itemCount = layoutManager.getItemCount();
        if (itemCount == 0 || (m10 = m(layoutManager)) == null) {
            return -1;
        }
        int childCount = layoutManager.getChildCount();
        View view = null;
        int i13 = Integer.MAX_VALUE;
        int i14 = Integer.MIN_VALUE;
        View view2 = null;
        for (int i15 = 0; i15 < childCount; i15++) {
            View childAt = layoutManager.getChildAt(i15);
            if (childAt != null) {
                int j10 = j(childAt, m10);
                if (j10 <= 0 && j10 > i14) {
                    view2 = childAt;
                    i14 = j10;
                }
                if (j10 >= 0 && j10 < i13) {
                    view = childAt;
                    i13 = j10;
                }
            }
        }
        boolean o10 = o(layoutManager, i10, i11);
        if (o10 && view != null) {
            return layoutManager.getPosition(view);
        }
        if (!o10 && view2 != null) {
            return layoutManager.getPosition(view2);
        }
        if (o10) {
            view = view2;
        }
        if (view == null) {
            return -1;
        }
        int position = layoutManager.getPosition(view);
        if (p(layoutManager) == o10) {
            i12 = -1;
        } else {
            i12 = 1;
        }
        int i16 = position + i12;
        if (i16 < 0 || i16 >= itemCount) {
            return -1;
        }
        return i16;
    }
}
