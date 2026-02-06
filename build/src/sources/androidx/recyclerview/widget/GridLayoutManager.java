package androidx.recyclerview.widget;

import android.content.Context;
import android.graphics.Rect;
import android.os.Bundle;
import android.util.AttributeSet;
import android.util.Log;
import android.util.SparseIntArray;
import android.view.View;
import android.view.ViewGroup;
import android.widget.GridView;
import androidx.annotation.NonNull;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import java.util.TreeMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class GridLayoutManager extends LinearLayoutManager {
    private static final boolean DEBUG = false;
    public static final int DEFAULT_SPAN_COUNT = -1;
    private static final int INVALID_POSITION = -1;
    private static final String TAG = "GridLayoutManager";
    private static final Set<Integer> sSupportedDirectionsForActionScrollInDirection = Collections.unmodifiableSet(new HashSet(Arrays.asList(17, 66, 33, 130)));
    int[] mCachedBorders;
    int mColumnWithAccessibilityFocus;
    final Rect mDecorInsets;
    boolean mPendingSpanCountChange;
    private int mPositionTargetedByScrollInDirection;
    final SparseIntArray mPreLayoutSpanIndexCache;
    final SparseIntArray mPreLayoutSpanSizeCache;
    int mRowWithAccessibilityFocus;
    View[] mSet;
    int mSpanCount;
    SpanSizeLookup mSpanSizeLookup;
    private boolean mUsingSpansToEstimateScrollBarDimensions;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class SpanSizeLookup {
        final SparseIntArray mSpanIndexCache = new SparseIntArray();
        final SparseIntArray mSpanGroupIndexCache = new SparseIntArray();
        private boolean mCacheSpanIndices = false;
        private boolean mCacheSpanGroupIndices = false;

        static int findFirstKeyLessThan(SparseIntArray sparseIntArray, int i10) {
            int size = sparseIntArray.size() - 1;
            int i11 = 0;
            while (i11 <= size) {
                int i12 = (i11 + size) >>> 1;
                if (sparseIntArray.keyAt(i12) < i10) {
                    i11 = i12 + 1;
                } else {
                    size = i12 - 1;
                }
            }
            int i13 = i11 - 1;
            if (i13 >= 0 && i13 < sparseIntArray.size()) {
                return sparseIntArray.keyAt(i13);
            }
            return -1;
        }

        int getCachedSpanGroupIndex(int i10, int i11) {
            if (!this.mCacheSpanGroupIndices) {
                return getSpanGroupIndex(i10, i11);
            }
            int i12 = this.mSpanGroupIndexCache.get(i10, -1);
            if (i12 != -1) {
                return i12;
            }
            int spanGroupIndex = getSpanGroupIndex(i10, i11);
            this.mSpanGroupIndexCache.put(i10, spanGroupIndex);
            return spanGroupIndex;
        }

        int getCachedSpanIndex(int i10, int i11) {
            if (!this.mCacheSpanIndices) {
                return getSpanIndex(i10, i11);
            }
            int i12 = this.mSpanIndexCache.get(i10, -1);
            if (i12 != -1) {
                return i12;
            }
            int spanIndex = getSpanIndex(i10, i11);
            this.mSpanIndexCache.put(i10, spanIndex);
            return spanIndex;
        }

        public int getSpanGroupIndex(int i10, int i11) {
            int i12;
            int i13;
            int i14;
            int findFirstKeyLessThan;
            if (this.mCacheSpanGroupIndices && (findFirstKeyLessThan = findFirstKeyLessThan(this.mSpanGroupIndexCache, i10)) != -1) {
                i12 = this.mSpanGroupIndexCache.get(findFirstKeyLessThan);
                i13 = findFirstKeyLessThan + 1;
                i14 = getCachedSpanIndex(findFirstKeyLessThan, i11) + getSpanSize(findFirstKeyLessThan);
                if (i14 == i11) {
                    i12++;
                    i14 = 0;
                }
            } else {
                i12 = 0;
                i13 = 0;
                i14 = 0;
            }
            int spanSize = getSpanSize(i10);
            while (i13 < i10) {
                int spanSize2 = getSpanSize(i13);
                i14 += spanSize2;
                if (i14 == i11) {
                    i12++;
                    i14 = 0;
                } else if (i14 > i11) {
                    i12++;
                    i14 = spanSize2;
                }
                i13++;
            }
            if (i14 + spanSize > i11) {
                return i12 + 1;
            }
            return i12;
        }

        /* JADX WARN: Removed duplicated region for block: B:12:0x0024  */
        /* JADX WARN: Removed duplicated region for block: B:18:0x0033  */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:14:0x002b -> B:17:0x0030). Please submit an issue!!! */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:15:0x002d -> B:17:0x0030). Please submit an issue!!! */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:16:0x002f -> B:17:0x0030). Please submit an issue!!! */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public int getSpanIndex(int r6, int r7) {
            /*
                r5 = this;
                int r0 = r5.getSpanSize(r6)
                r1 = 0
                if (r0 != r7) goto L8
                return r1
            L8:
                boolean r2 = r5.mCacheSpanIndices
                if (r2 == 0) goto L20
                android.util.SparseIntArray r2 = r5.mSpanIndexCache
                int r2 = findFirstKeyLessThan(r2, r6)
                if (r2 < 0) goto L20
                android.util.SparseIntArray r3 = r5.mSpanIndexCache
                int r3 = r3.get(r2)
                int r4 = r5.getSpanSize(r2)
                int r3 = r3 + r4
                goto L30
            L20:
                r2 = r1
                r3 = r2
            L22:
                if (r2 >= r6) goto L33
                int r4 = r5.getSpanSize(r2)
                int r3 = r3 + r4
                if (r3 != r7) goto L2d
                r3 = r1
                goto L30
            L2d:
                if (r3 <= r7) goto L30
                r3 = r4
            L30:
                int r2 = r2 + 1
                goto L22
            L33:
                int r0 = r0 + r3
                if (r0 > r7) goto L37
                return r3
            L37:
                return r1
            */
            throw new UnsupportedOperationException("Method not decompiled: androidx.recyclerview.widget.GridLayoutManager.SpanSizeLookup.getSpanIndex(int, int):int");
        }

        public abstract int getSpanSize(int i10);

        public void invalidateSpanGroupIndexCache() {
            this.mSpanGroupIndexCache.clear();
        }

        public void invalidateSpanIndexCache() {
            this.mSpanIndexCache.clear();
        }

        public boolean isSpanGroupIndexCacheEnabled() {
            return this.mCacheSpanGroupIndices;
        }

        public boolean isSpanIndexCacheEnabled() {
            return this.mCacheSpanIndices;
        }

        public void setSpanGroupIndexCacheEnabled(boolean z10) {
            if (!z10) {
                this.mSpanGroupIndexCache.clear();
            }
            this.mCacheSpanGroupIndices = z10;
        }

        public void setSpanIndexCacheEnabled(boolean z10) {
            if (!z10) {
                this.mSpanGroupIndexCache.clear();
            }
            this.mCacheSpanIndices = z10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {
        static boolean a(View view) {
            return view.isAccessibilityFocused();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends SpanSizeLookup {
        @Override // androidx.recyclerview.widget.GridLayoutManager.SpanSizeLookup
        public int getSpanIndex(int i10, int i11) {
            return i10 % i11;
        }

        @Override // androidx.recyclerview.widget.GridLayoutManager.SpanSizeLookup
        public int getSpanSize(int i10) {
            return 1;
        }
    }

    public GridLayoutManager(Context context, AttributeSet attributeSet, int i10, int i11) {
        super(context, attributeSet, i10, i11);
        this.mPendingSpanCountChange = false;
        this.mSpanCount = -1;
        this.mPreLayoutSpanSizeCache = new SparseIntArray();
        this.mPreLayoutSpanIndexCache = new SparseIntArray();
        this.mSpanSizeLookup = new b();
        this.mDecorInsets = new Rect();
        this.mPositionTargetedByScrollInDirection = -1;
        this.mRowWithAccessibilityFocus = -1;
        this.mColumnWithAccessibilityFocus = -1;
        setSpanCount(RecyclerView.LayoutManager.getProperties(context, attributeSet, i10, i11).f5257b);
    }

    private void K(RecyclerView.Recycler recycler, RecyclerView.State state, int i10, boolean z10) {
        int i11;
        int i12;
        int i13;
        int i14 = 0;
        if (z10) {
            i13 = 1;
            i12 = i10;
            i11 = 0;
        } else {
            i11 = i10 - 1;
            i12 = -1;
            i13 = -1;
        }
        while (i11 != i12) {
            View view = this.mSet[i11];
            c cVar = (c) view.getLayoutParams();
            int e02 = e0(recycler, state, getPosition(view));
            cVar.f5219q = e02;
            cVar.f5218p = i14;
            i14 += e02;
            i11 += i13;
        }
    }

    private void L() {
        int childCount = getChildCount();
        for (int i10 = 0; i10 < childCount; i10++) {
            c cVar = (c) getChildAt(i10).getLayoutParams();
            int a10 = cVar.a();
            this.mPreLayoutSpanSizeCache.put(a10, cVar.f());
            this.mPreLayoutSpanIndexCache.put(a10, cVar.e());
        }
    }

    private void M(int i10) {
        this.mCachedBorders = calculateItemBorders(this.mCachedBorders, this.mSpanCount, i10);
    }

    private void N() {
        this.mPreLayoutSpanSizeCache.clear();
        this.mPreLayoutSpanIndexCache.clear();
    }

    private int O(RecyclerView.State state) {
        int max;
        if (getChildCount() != 0 && state.b() != 0) {
            ensureLayoutState();
            boolean isSmoothScrollbarEnabled = isSmoothScrollbarEnabled();
            View findFirstVisibleChildClosestToStart = findFirstVisibleChildClosestToStart(!isSmoothScrollbarEnabled, true);
            View findFirstVisibleChildClosestToEnd = findFirstVisibleChildClosestToEnd(!isSmoothScrollbarEnabled, true);
            if (findFirstVisibleChildClosestToStart != null && findFirstVisibleChildClosestToEnd != null) {
                int cachedSpanGroupIndex = this.mSpanSizeLookup.getCachedSpanGroupIndex(getPosition(findFirstVisibleChildClosestToStart), this.mSpanCount);
                int cachedSpanGroupIndex2 = this.mSpanSizeLookup.getCachedSpanGroupIndex(getPosition(findFirstVisibleChildClosestToEnd), this.mSpanCount);
                int min = Math.min(cachedSpanGroupIndex, cachedSpanGroupIndex2);
                int max2 = Math.max(cachedSpanGroupIndex, cachedSpanGroupIndex2);
                int cachedSpanGroupIndex3 = this.mSpanSizeLookup.getCachedSpanGroupIndex(state.b() - 1, this.mSpanCount) + 1;
                if (this.mShouldReverseLayout) {
                    max = Math.max(0, (cachedSpanGroupIndex3 - max2) - 1);
                } else {
                    max = Math.max(0, min);
                }
                if (!isSmoothScrollbarEnabled) {
                    return max;
                }
                return Math.round((max * (Math.abs(this.mOrientationHelper.d(findFirstVisibleChildClosestToEnd) - this.mOrientationHelper.g(findFirstVisibleChildClosestToStart)) / ((this.mSpanSizeLookup.getCachedSpanGroupIndex(getPosition(findFirstVisibleChildClosestToEnd), this.mSpanCount) - this.mSpanSizeLookup.getCachedSpanGroupIndex(getPosition(findFirstVisibleChildClosestToStart), this.mSpanCount)) + 1))) + (this.mOrientationHelper.m() - this.mOrientationHelper.g(findFirstVisibleChildClosestToStart)));
            }
        }
        return 0;
    }

    private int P(RecyclerView.State state) {
        if (getChildCount() != 0 && state.b() != 0) {
            ensureLayoutState();
            View findFirstVisibleChildClosestToStart = findFirstVisibleChildClosestToStart(!isSmoothScrollbarEnabled(), true);
            View findFirstVisibleChildClosestToEnd = findFirstVisibleChildClosestToEnd(!isSmoothScrollbarEnabled(), true);
            if (findFirstVisibleChildClosestToStart != null && findFirstVisibleChildClosestToEnd != null) {
                if (!isSmoothScrollbarEnabled()) {
                    return this.mSpanSizeLookup.getCachedSpanGroupIndex(state.b() - 1, this.mSpanCount) + 1;
                }
                int d10 = this.mOrientationHelper.d(findFirstVisibleChildClosestToEnd) - this.mOrientationHelper.g(findFirstVisibleChildClosestToStart);
                int cachedSpanGroupIndex = this.mSpanSizeLookup.getCachedSpanGroupIndex(getPosition(findFirstVisibleChildClosestToStart), this.mSpanCount);
                return (int) ((d10 / ((this.mSpanSizeLookup.getCachedSpanGroupIndex(getPosition(findFirstVisibleChildClosestToEnd), this.mSpanCount) - cachedSpanGroupIndex) + 1)) * (this.mSpanSizeLookup.getCachedSpanGroupIndex(state.b() - 1, this.mSpanCount) + 1));
            }
        }
        return 0;
    }

    private void Q(RecyclerView.Recycler recycler, RecyclerView.State state, LinearLayoutManager.AnchorInfo anchorInfo, int i10) {
        boolean z10;
        if (i10 == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        int d02 = d0(recycler, state, anchorInfo.f5221b);
        if (z10) {
            while (d02 > 0) {
                int i11 = anchorInfo.f5221b;
                if (i11 > 0) {
                    int i12 = i11 - 1;
                    anchorInfo.f5221b = i12;
                    d02 = d0(recycler, state, i12);
                } else {
                    return;
                }
            }
            return;
        }
        int b10 = state.b() - 1;
        int i13 = anchorInfo.f5221b;
        while (i13 < b10) {
            int i14 = i13 + 1;
            int d03 = d0(recycler, state, i14);
            if (d03 <= d02) {
                break;
            }
            i13 = i14;
            d02 = d03;
        }
        anchorInfo.f5221b = i13;
    }

    private void R() {
        View[] viewArr = this.mSet;
        if (viewArr != null && viewArr.length == this.mSpanCount) {
            return;
        }
        this.mSet = new View[this.mSpanCount];
    }

    private View S() {
        for (int i10 = 0; i10 < getChildCount(); i10++) {
            View childAt = getChildAt(i10);
            Objects.requireNonNull(childAt);
            if (a.a(childAt)) {
                return getChildAt(i10);
            }
        }
        return null;
    }

    private int T(int i10, int i11, int i12) {
        for (int i13 = i12 - 1; i13 >= 0; i13--) {
            int Z = Z(i13);
            int X = X(i13);
            if (Z < 0 || X < 0) {
                break;
            }
            if (this.mOrientation == 1) {
                if (Z < i10 && Y(i13).contains(Integer.valueOf(i11))) {
                    this.mRowWithAccessibilityFocus = Z;
                    return i13;
                }
            } else if (Z < i10 && X == i11) {
                this.mRowWithAccessibilityFocus = ((Integer) Collections.max(a0(i13))).intValue();
                return i13;
            }
        }
        return -1;
    }

    private int U(int i10, int i11, int i12) {
        for (int i13 = i12 + 1; i13 < getItemCount(); i13++) {
            int Z = Z(i13);
            int X = X(i13);
            if (Z < 0 || X < 0) {
                break;
            }
            if (this.mOrientation == 1) {
                if (Z > i10 && (X == i11 || Y(i13).contains(Integer.valueOf(i11)))) {
                    this.mRowWithAccessibilityFocus = Z;
                    return i13;
                }
            } else if (Z > i10 && X == i11) {
                this.mRowWithAccessibilityFocus = Z(i13);
                return i13;
            }
        }
        return -1;
    }

    private int V(int i10, int i11, int i12) {
        for (int i13 = i12 - 1; i13 >= 0; i13--) {
            int Z = Z(i13);
            int X = X(i13);
            if (Z < 0 || X < 0) {
                break;
            }
            if (this.mOrientation == 1) {
                if ((Z == i10 && X < i11) || Z < i10) {
                    this.mRowWithAccessibilityFocus = Z;
                    this.mColumnWithAccessibilityFocus = X;
                    return i13;
                }
            } else if (a0(i13).contains(Integer.valueOf(i10)) && X < i11) {
                this.mColumnWithAccessibilityFocus = X;
                return i13;
            }
        }
        return -1;
    }

    private int W(int i10, int i11, int i12) {
        for (int i13 = i12 + 1; i13 < getItemCount(); i13++) {
            int Z = Z(i13);
            int X = X(i13);
            if (Z < 0 || X < 0) {
                break;
            }
            if (this.mOrientation == 1) {
                if ((Z == i10 && X > i11) || Z > i10) {
                    this.mRowWithAccessibilityFocus = Z;
                    this.mColumnWithAccessibilityFocus = X;
                    return i13;
                }
            } else if (X > i11 && a0(i13).contains(Integer.valueOf(i10))) {
                this.mColumnWithAccessibilityFocus = X;
                return i13;
            }
        }
        return -1;
    }

    private int X(int i10) {
        if (this.mOrientation == 0) {
            RecyclerView recyclerView = this.mRecyclerView;
            return c0(recyclerView.mRecycler, recyclerView.mState, i10);
        }
        RecyclerView recyclerView2 = this.mRecyclerView;
        return d0(recyclerView2.mRecycler, recyclerView2.mState, i10);
    }

    private Set Y(int i10) {
        return b0(X(i10), i10);
    }

    private int Z(int i10) {
        if (this.mOrientation == 1) {
            RecyclerView recyclerView = this.mRecyclerView;
            return c0(recyclerView.mRecycler, recyclerView.mState, i10);
        }
        RecyclerView recyclerView2 = this.mRecyclerView;
        return d0(recyclerView2.mRecycler, recyclerView2.mState, i10);
    }

    private Set a0(int i10) {
        return b0(Z(i10), i10);
    }

    private Set b0(int i10, int i11) {
        HashSet hashSet = new HashSet();
        RecyclerView recyclerView = this.mRecyclerView;
        int e02 = e0(recyclerView.mRecycler, recyclerView.mState, i11);
        for (int i12 = i10; i12 < i10 + e02; i12++) {
            hashSet.add(Integer.valueOf(i12));
        }
        return hashSet;
    }

    private int c0(RecyclerView.Recycler recycler, RecyclerView.State state, int i10) {
        if (!state.e()) {
            return this.mSpanSizeLookup.getCachedSpanGroupIndex(i10, this.mSpanCount);
        }
        int f10 = recycler.f(i10);
        if (f10 == -1) {
            Log.w(TAG, "Cannot find span size for pre layout position. " + i10);
            return 0;
        }
        return this.mSpanSizeLookup.getCachedSpanGroupIndex(f10, this.mSpanCount);
    }

    static int[] calculateItemBorders(int[] iArr, int i10, int i11) {
        int i12;
        if (iArr == null || iArr.length != i10 + 1 || iArr[iArr.length - 1] != i11) {
            iArr = new int[i10 + 1];
        }
        int i13 = 0;
        iArr[0] = 0;
        int i14 = i11 / i10;
        int i15 = i11 % i10;
        int i16 = 0;
        for (int i17 = 1; i17 <= i10; i17++) {
            i13 += i15;
            if (i13 > 0 && i10 - i13 < i15) {
                i12 = i14 + 1;
                i13 -= i10;
            } else {
                i12 = i14;
            }
            i16 += i12;
            iArr[i17] = i16;
        }
        return iArr;
    }

    private int d0(RecyclerView.Recycler recycler, RecyclerView.State state, int i10) {
        if (!state.e()) {
            return this.mSpanSizeLookup.getCachedSpanIndex(i10, this.mSpanCount);
        }
        int i11 = this.mPreLayoutSpanIndexCache.get(i10, -1);
        if (i11 != -1) {
            return i11;
        }
        int f10 = recycler.f(i10);
        if (f10 == -1) {
            Log.w(TAG, "Cannot find span size for pre layout position. It is not cached, not in the adapter. Pos:" + i10);
            return 0;
        }
        return this.mSpanSizeLookup.getCachedSpanIndex(f10, this.mSpanCount);
    }

    private int e0(RecyclerView.Recycler recycler, RecyclerView.State state, int i10) {
        if (!state.e()) {
            return this.mSpanSizeLookup.getSpanSize(i10);
        }
        int i11 = this.mPreLayoutSpanSizeCache.get(i10, -1);
        if (i11 != -1) {
            return i11;
        }
        int f10 = recycler.f(i10);
        if (f10 == -1) {
            Log.w(TAG, "Cannot find span size for pre layout position. It is not cached, not in the adapter. Pos:" + i10);
            return 1;
        }
        return this.mSpanSizeLookup.getSpanSize(f10);
    }

    private void f0(float f10, int i10) {
        M(Math.max(Math.round(f10 * this.mSpanCount), i10));
    }

    private boolean g0(int i10) {
        if (a0(i10).contains(Integer.valueOf(this.mRowWithAccessibilityFocus)) && Y(i10).contains(Integer.valueOf(this.mColumnWithAccessibilityFocus))) {
            return false;
        }
        return true;
    }

    private void h0(View view, int i10, boolean z10) {
        int i11;
        int i12;
        c cVar = (c) view.getLayoutParams();
        Rect rect = cVar.f5263e;
        int i13 = rect.top + rect.bottom + ((ViewGroup.MarginLayoutParams) cVar).topMargin + ((ViewGroup.MarginLayoutParams) cVar).bottomMargin;
        int i14 = rect.left + rect.right + ((ViewGroup.MarginLayoutParams) cVar).leftMargin + ((ViewGroup.MarginLayoutParams) cVar).rightMargin;
        int spaceForSpanRange = getSpaceForSpanRange(cVar.f5218p, cVar.f5219q);
        if (this.mOrientation == 1) {
            i12 = RecyclerView.LayoutManager.getChildMeasureSpec(spaceForSpanRange, i10, i14, ((ViewGroup.MarginLayoutParams) cVar).width, false);
            i11 = RecyclerView.LayoutManager.getChildMeasureSpec(this.mOrientationHelper.n(), getHeightMode(), i13, ((ViewGroup.MarginLayoutParams) cVar).height, true);
        } else {
            int childMeasureSpec = RecyclerView.LayoutManager.getChildMeasureSpec(spaceForSpanRange, i10, i13, ((ViewGroup.MarginLayoutParams) cVar).height, false);
            int childMeasureSpec2 = RecyclerView.LayoutManager.getChildMeasureSpec(this.mOrientationHelper.n(), getWidthMode(), i14, ((ViewGroup.MarginLayoutParams) cVar).width, true);
            i11 = childMeasureSpec;
            i12 = childMeasureSpec2;
        }
        i0(view, i12, i11, z10);
    }

    private void i0(View view, int i10, int i11, boolean z10) {
        boolean shouldMeasureChild;
        RecyclerView.LayoutParams layoutParams = (RecyclerView.LayoutParams) view.getLayoutParams();
        if (z10) {
            shouldMeasureChild = shouldReMeasureChild(view, i10, i11, layoutParams);
        } else {
            shouldMeasureChild = shouldMeasureChild(view, i10, i11, layoutParams);
        }
        if (shouldMeasureChild) {
            view.measure(i10, i11);
        }
    }

    private void j0() {
        int height;
        int paddingTop;
        if (getOrientation() == 1) {
            height = getWidth() - getPaddingRight();
            paddingTop = getPaddingLeft();
        } else {
            height = getHeight() - getPaddingBottom();
            paddingTop = getPaddingTop();
        }
        M(height - paddingTop);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean checkLayoutParams(RecyclerView.LayoutParams layoutParams) {
        return layoutParams instanceof c;
    }

    @Override // androidx.recyclerview.widget.LinearLayoutManager
    void collectPrefetchPositionsForLayoutState(RecyclerView.State state, LinearLayoutManager.LayoutState layoutState, RecyclerView.LayoutManager.LayoutPrefetchRegistry layoutPrefetchRegistry) {
        int i10 = this.mSpanCount;
        for (int i11 = 0; i11 < this.mSpanCount && layoutState.c(state) && i10 > 0; i11++) {
            int i12 = layoutState.f5232d;
            layoutPrefetchRegistry.a(i12, Math.max(0, layoutState.f5235g));
            i10 -= this.mSpanSizeLookup.getSpanSize(i12);
            layoutState.f5232d += layoutState.f5233e;
        }
    }

    @Override // androidx.recyclerview.widget.LinearLayoutManager, androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int computeHorizontalScrollOffset(RecyclerView.State state) {
        if (this.mUsingSpansToEstimateScrollBarDimensions) {
            return O(state);
        }
        return super.computeHorizontalScrollOffset(state);
    }

    @Override // androidx.recyclerview.widget.LinearLayoutManager, androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int computeHorizontalScrollRange(RecyclerView.State state) {
        if (this.mUsingSpansToEstimateScrollBarDimensions) {
            return P(state);
        }
        return super.computeHorizontalScrollRange(state);
    }

    @Override // androidx.recyclerview.widget.LinearLayoutManager, androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int computeVerticalScrollOffset(RecyclerView.State state) {
        if (this.mUsingSpansToEstimateScrollBarDimensions) {
            return O(state);
        }
        return super.computeVerticalScrollOffset(state);
    }

    @Override // androidx.recyclerview.widget.LinearLayoutManager, androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int computeVerticalScrollRange(RecyclerView.State state) {
        if (this.mUsingSpansToEstimateScrollBarDimensions) {
            return P(state);
        }
        return super.computeVerticalScrollRange(state);
    }

    int findPositionOfFirstItemOnARowBelowForHorizontalGrid(int i10) {
        if (i10 < 0 || this.mOrientation == 1) {
            return -1;
        }
        TreeMap treeMap = new TreeMap();
        for (int i11 = 0; i11 < getItemCount(); i11++) {
            for (Integer num : a0(i11)) {
                if (num.intValue() < 0) {
                    return -1;
                }
                if (!treeMap.containsKey(num)) {
                    treeMap.put(num, Integer.valueOf(i11));
                }
            }
        }
        for (Integer num2 : treeMap.keySet()) {
            int intValue = num2.intValue();
            if (intValue > i10) {
                int intValue2 = ((Integer) treeMap.get(num2)).intValue();
                this.mRowWithAccessibilityFocus = intValue;
                this.mColumnWithAccessibilityFocus = 0;
                return intValue2;
            }
        }
        return -1;
    }

    int findPositionOfLastItemOnARowAboveForHorizontalGrid(int i10) {
        if (i10 < 0 || this.mOrientation == 1) {
            return -1;
        }
        TreeMap treeMap = new TreeMap(Collections.reverseOrder());
        for (int i11 = 0; i11 < getItemCount(); i11++) {
            for (Integer num : a0(i11)) {
                if (num.intValue() < 0) {
                    return -1;
                }
                treeMap.put(num, Integer.valueOf(i11));
            }
        }
        for (Integer num2 : treeMap.keySet()) {
            int intValue = num2.intValue();
            if (intValue < i10) {
                int intValue2 = ((Integer) treeMap.get(num2)).intValue();
                this.mRowWithAccessibilityFocus = intValue;
                this.mColumnWithAccessibilityFocus = X(intValue2);
                return intValue2;
            }
        }
        return -1;
    }

    @Override // androidx.recyclerview.widget.LinearLayoutManager
    View findReferenceChild(RecyclerView.Recycler recycler, RecyclerView.State state, boolean z10, boolean z11) {
        int i10;
        int i11;
        int childCount = getChildCount();
        int i12 = 1;
        if (z11) {
            i11 = getChildCount() - 1;
            i10 = -1;
            i12 = -1;
        } else {
            i10 = childCount;
            i11 = 0;
        }
        int b10 = state.b();
        ensureLayoutState();
        int m10 = this.mOrientationHelper.m();
        int i13 = this.mOrientationHelper.i();
        View view = null;
        View view2 = null;
        while (i11 != i10) {
            View childAt = getChildAt(i11);
            int position = getPosition(childAt);
            if (position >= 0 && position < b10 && d0(recycler, state, position) == 0) {
                if (((RecyclerView.LayoutParams) childAt.getLayoutParams()).c()) {
                    if (view2 == null) {
                        view2 = childAt;
                    }
                } else if (this.mOrientationHelper.g(childAt) < i13 && this.mOrientationHelper.d(childAt) >= m10) {
                    return childAt;
                } else {
                    if (view == null) {
                        view = childAt;
                    }
                }
            }
            i11 += i12;
        }
        if (view != null) {
            return view;
        }
        return view2;
    }

    @Override // androidx.recyclerview.widget.LinearLayoutManager, androidx.recyclerview.widget.RecyclerView.LayoutManager
    public RecyclerView.LayoutParams generateDefaultLayoutParams() {
        if (this.mOrientation == 0) {
            return new c(-2, -1);
        }
        return new c(-1, -2);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public RecyclerView.LayoutParams generateLayoutParams(Context context, AttributeSet attributeSet) {
        return new c(context, attributeSet);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int getColumnCountForAccessibility(RecyclerView.Recycler recycler, RecyclerView.State state) {
        if (this.mOrientation == 1) {
            return Math.min(this.mSpanCount, getItemCount());
        }
        if (state.b() < 1) {
            return 0;
        }
        return c0(recycler, state, state.b() - 1) + 1;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int getRowCountForAccessibility(RecyclerView.Recycler recycler, RecyclerView.State state) {
        if (this.mOrientation == 0) {
            return Math.min(this.mSpanCount, getItemCount());
        }
        if (state.b() < 1) {
            return 0;
        }
        return c0(recycler, state, state.b() - 1) + 1;
    }

    int getSpaceForSpanRange(int i10, int i11) {
        if (this.mOrientation == 1 && isLayoutRTL()) {
            int[] iArr = this.mCachedBorders;
            int i12 = this.mSpanCount;
            return iArr[i12 - i10] - iArr[(i12 - i10) - i11];
        }
        int[] iArr2 = this.mCachedBorders;
        return iArr2[i11 + i10] - iArr2[i10];
    }

    public int getSpanCount() {
        return this.mSpanCount;
    }

    public SpanSizeLookup getSpanSizeLookup() {
        return this.mSpanSizeLookup;
    }

    public boolean isUsingSpansToEstimateScrollbarDimensions() {
        return this.mUsingSpansToEstimateScrollBarDimensions;
    }

    /* JADX WARN: Code restructure failed: missing block: B:37:0x009f, code lost:
        r21.f5226b = true;
     */
    /* JADX WARN: Code restructure failed: missing block: B:38:0x00a1, code lost:
        return;
     */
    @Override // androidx.recyclerview.widget.LinearLayoutManager
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    void layoutChunk(androidx.recyclerview.widget.RecyclerView.Recycler r18, androidx.recyclerview.widget.RecyclerView.State r19, androidx.recyclerview.widget.LinearLayoutManager.LayoutState r20, androidx.recyclerview.widget.LinearLayoutManager.LayoutChunkResult r21) {
        /*
            Method dump skipped, instructions count: 553
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.recyclerview.widget.GridLayoutManager.layoutChunk(androidx.recyclerview.widget.RecyclerView$Recycler, androidx.recyclerview.widget.RecyclerView$State, androidx.recyclerview.widget.LinearLayoutManager$LayoutState, androidx.recyclerview.widget.LinearLayoutManager$LayoutChunkResult):void");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.recyclerview.widget.LinearLayoutManager
    public void onAnchorReady(RecyclerView.Recycler recycler, RecyclerView.State state, LinearLayoutManager.AnchorInfo anchorInfo, int i10) {
        super.onAnchorReady(recycler, state, anchorInfo, i10);
        j0();
        if (state.b() > 0 && !state.e()) {
            Q(recycler, state, anchorInfo, i10);
        }
        R();
    }

    /* JADX WARN: Code restructure failed: missing block: B:56:0x00d3, code lost:
        if (r13 == r4) goto L49;
     */
    /* JADX WARN: Code restructure failed: missing block: B:69:0x00f3, code lost:
        if (r13 == r8) goto L50;
     */
    /* JADX WARN: Removed duplicated region for block: B:72:0x00fb  */
    /* JADX WARN: Removed duplicated region for block: B:73:0x0111  */
    @Override // androidx.recyclerview.widget.LinearLayoutManager, androidx.recyclerview.widget.RecyclerView.LayoutManager
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public android.view.View onFocusSearchFailed(android.view.View r24, int r25, androidx.recyclerview.widget.RecyclerView.Recycler r26, androidx.recyclerview.widget.RecyclerView.State r27) {
        /*
            Method dump skipped, instructions count: 316
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.recyclerview.widget.GridLayoutManager.onFocusSearchFailed(android.view.View, int, androidx.recyclerview.widget.RecyclerView$Recycler, androidx.recyclerview.widget.RecyclerView$State):android.view.View");
    }

    @Override // androidx.recyclerview.widget.LinearLayoutManager, androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onInitializeAccessibilityNodeInfo(@NonNull RecyclerView.Recycler recycler, @NonNull RecyclerView.State state, @NonNull AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
        super.onInitializeAccessibilityNodeInfo(recycler, state, accessibilityNodeInfoCompat);
        accessibilityNodeInfoCompat.w0(GridView.class.getName());
        RecyclerView.Adapter adapter = this.mRecyclerView.mAdapter;
        if (adapter != null && adapter.getItemCount() > 1) {
            accessibilityNodeInfoCompat.b(AccessibilityNodeInfoCompat.a.V);
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onInitializeAccessibilityNodeInfoForItem(RecyclerView.Recycler recycler, RecyclerView.State state, View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
        ViewGroup.LayoutParams layoutParams = view.getLayoutParams();
        if (!(layoutParams instanceof c)) {
            super.onInitializeAccessibilityNodeInfoForItem(view, accessibilityNodeInfoCompat);
            return;
        }
        c cVar = (c) layoutParams;
        int c02 = c0(recycler, state, cVar.a());
        if (this.mOrientation == 0) {
            accessibilityNodeInfoCompat.z0(AccessibilityNodeInfoCompat.g.b(cVar.e(), cVar.f(), c02, 1, false, false));
        } else {
            accessibilityNodeInfoCompat.z0(AccessibilityNodeInfoCompat.g.b(c02, 1, cVar.e(), cVar.f(), false, false));
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onItemsAdded(RecyclerView recyclerView, int i10, int i11) {
        this.mSpanSizeLookup.invalidateSpanIndexCache();
        this.mSpanSizeLookup.invalidateSpanGroupIndexCache();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onItemsChanged(RecyclerView recyclerView) {
        this.mSpanSizeLookup.invalidateSpanIndexCache();
        this.mSpanSizeLookup.invalidateSpanGroupIndexCache();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onItemsMoved(RecyclerView recyclerView, int i10, int i11, int i12) {
        this.mSpanSizeLookup.invalidateSpanIndexCache();
        this.mSpanSizeLookup.invalidateSpanGroupIndexCache();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onItemsRemoved(RecyclerView recyclerView, int i10, int i11) {
        this.mSpanSizeLookup.invalidateSpanIndexCache();
        this.mSpanSizeLookup.invalidateSpanGroupIndexCache();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onItemsUpdated(RecyclerView recyclerView, int i10, int i11, Object obj) {
        this.mSpanSizeLookup.invalidateSpanIndexCache();
        this.mSpanSizeLookup.invalidateSpanGroupIndexCache();
    }

    @Override // androidx.recyclerview.widget.LinearLayoutManager, androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onLayoutChildren(RecyclerView.Recycler recycler, RecyclerView.State state) {
        if (state.e()) {
            L();
        }
        super.onLayoutChildren(recycler, state);
        N();
    }

    @Override // androidx.recyclerview.widget.LinearLayoutManager, androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onLayoutCompleted(RecyclerView.State state) {
        View findViewByPosition;
        super.onLayoutCompleted(state);
        this.mPendingSpanCountChange = false;
        int i10 = this.mPositionTargetedByScrollInDirection;
        if (i10 != -1 && (findViewByPosition = findViewByPosition(i10)) != null) {
            findViewByPosition.sendAccessibilityEvent(67108864);
            this.mPositionTargetedByScrollInDirection = -1;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.recyclerview.widget.LinearLayoutManager, androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean performAccessibilityAction(int i10, Bundle bundle) {
        RecyclerView.ViewHolder childViewHolder;
        int V;
        if (i10 == AccessibilityNodeInfoCompat.a.V.b() && i10 != -1) {
            View S = S();
            if (S == null || bundle == null) {
                return false;
            }
            int i11 = bundle.getInt("android.view.accessibility.action.ARGUMENT_DIRECTION_INT", -1);
            if (!sSupportedDirectionsForActionScrollInDirection.contains(Integer.valueOf(i11)) || (childViewHolder = this.mRecyclerView.getChildViewHolder(S)) == null) {
                return false;
            }
            int absoluteAdapterPosition = childViewHolder.getAbsoluteAdapterPosition();
            int Z = Z(absoluteAdapterPosition);
            int X = X(absoluteAdapterPosition);
            if (Z >= 0 && X >= 0) {
                if (g0(absoluteAdapterPosition)) {
                    this.mRowWithAccessibilityFocus = Z;
                    this.mColumnWithAccessibilityFocus = X;
                }
                int i12 = this.mRowWithAccessibilityFocus;
                if (i12 == -1) {
                    i12 = Z;
                }
                int i13 = this.mColumnWithAccessibilityFocus;
                if (i13 != -1) {
                    X = i13;
                }
                if (i11 != 17) {
                    if (i11 != 33) {
                        if (i11 != 66) {
                            if (i11 != 130) {
                                return false;
                            }
                            V = U(i12, X, absoluteAdapterPosition);
                        } else {
                            V = W(i12, X, absoluteAdapterPosition);
                        }
                    } else {
                        V = T(i12, X, absoluteAdapterPosition);
                    }
                } else {
                    V = V(i12, X, absoluteAdapterPosition);
                }
                if (V == -1 && this.mOrientation == 0) {
                    if (i11 == 17) {
                        V = findPositionOfLastItemOnARowAboveForHorizontalGrid(Z);
                    } else if (i11 == 66) {
                        V = findPositionOfFirstItemOnARowBelowForHorizontalGrid(Z);
                    }
                }
                if (V != -1) {
                    scrollToPosition(V);
                    this.mPositionTargetedByScrollInDirection = V;
                    return true;
                }
            }
            return false;
        } else if (i10 == 16908343 && bundle != null) {
            int i14 = bundle.getInt("android.view.accessibility.action.ARGUMENT_ROW_INT", -1);
            int i15 = bundle.getInt("android.view.accessibility.action.ARGUMENT_COLUMN_INT", -1);
            if (i14 != -1 && i15 != -1) {
                int itemCount = this.mRecyclerView.mAdapter.getItemCount();
                int i16 = 0;
                while (true) {
                    if (i16 < itemCount) {
                        RecyclerView recyclerView = this.mRecyclerView;
                        int d02 = d0(recyclerView.mRecycler, recyclerView.mState, i16);
                        RecyclerView recyclerView2 = this.mRecyclerView;
                        int c02 = c0(recyclerView2.mRecycler, recyclerView2.mState, i16);
                        if (this.mOrientation == 1) {
                            if (d02 == i15 && c02 == i14) {
                                break;
                            }
                            i16++;
                        } else {
                            if (d02 == i14 && c02 == i15) {
                                break;
                            }
                            i16++;
                        }
                    } else {
                        i16 = -1;
                        break;
                    }
                }
                if (i16 > -1) {
                    scrollToPositionWithOffset(i16, 0);
                    return true;
                }
            }
            return false;
        } else {
            return super.performAccessibilityAction(i10, bundle);
        }
    }

    @Override // androidx.recyclerview.widget.LinearLayoutManager, androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int scrollHorizontallyBy(int i10, RecyclerView.Recycler recycler, RecyclerView.State state) {
        j0();
        R();
        return super.scrollHorizontallyBy(i10, recycler, state);
    }

    @Override // androidx.recyclerview.widget.LinearLayoutManager, androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int scrollVerticallyBy(int i10, RecyclerView.Recycler recycler, RecyclerView.State state) {
        j0();
        R();
        return super.scrollVerticallyBy(i10, recycler, state);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void setMeasuredDimension(Rect rect, int i10, int i11) {
        int chooseSize;
        int chooseSize2;
        if (this.mCachedBorders == null) {
            super.setMeasuredDimension(rect, i10, i11);
        }
        int paddingLeft = getPaddingLeft() + getPaddingRight();
        int paddingTop = getPaddingTop() + getPaddingBottom();
        if (this.mOrientation == 1) {
            chooseSize2 = RecyclerView.LayoutManager.chooseSize(i11, rect.height() + paddingTop, getMinimumHeight());
            int[] iArr = this.mCachedBorders;
            chooseSize = RecyclerView.LayoutManager.chooseSize(i10, iArr[iArr.length - 1] + paddingLeft, getMinimumWidth());
        } else {
            chooseSize = RecyclerView.LayoutManager.chooseSize(i10, rect.width() + paddingLeft, getMinimumWidth());
            int[] iArr2 = this.mCachedBorders;
            chooseSize2 = RecyclerView.LayoutManager.chooseSize(i11, iArr2[iArr2.length - 1] + paddingTop, getMinimumHeight());
        }
        setMeasuredDimension(chooseSize, chooseSize2);
    }

    public void setSpanCount(int i10) {
        if (i10 == this.mSpanCount) {
            return;
        }
        this.mPendingSpanCountChange = true;
        if (i10 >= 1) {
            this.mSpanCount = i10;
            this.mSpanSizeLookup.invalidateSpanIndexCache();
            requestLayout();
            return;
        }
        throw new IllegalArgumentException("Span count should be at least 1. Provided " + i10);
    }

    public void setSpanSizeLookup(SpanSizeLookup spanSizeLookup) {
        this.mSpanSizeLookup = spanSizeLookup;
    }

    @Override // androidx.recyclerview.widget.LinearLayoutManager
    public void setStackFromEnd(boolean z10) {
        if (!z10) {
            super.setStackFromEnd(false);
            return;
        }
        throw new UnsupportedOperationException("GridLayoutManager does not support stack from end. Consider using reverse layout");
    }

    public void setUsingSpansToEstimateScrollbarDimensions(boolean z10) {
        this.mUsingSpansToEstimateScrollBarDimensions = z10;
    }

    @Override // androidx.recyclerview.widget.LinearLayoutManager, androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean supportsPredictiveItemAnimations() {
        if (this.mPendingSavedState == null && !this.mPendingSpanCountChange) {
            return true;
        }
        return false;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public RecyclerView.LayoutParams generateLayoutParams(ViewGroup.LayoutParams layoutParams) {
        if (layoutParams instanceof ViewGroup.MarginLayoutParams) {
            return new c((ViewGroup.MarginLayoutParams) layoutParams);
        }
        return new c(layoutParams);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c extends RecyclerView.LayoutParams {

        /* renamed from: p  reason: collision with root package name */
        int f5218p;

        /* renamed from: q  reason: collision with root package name */
        int f5219q;

        public c(Context context, AttributeSet attributeSet) {
            super(context, attributeSet);
            this.f5218p = -1;
            this.f5219q = 0;
        }

        public int e() {
            return this.f5218p;
        }

        public int f() {
            return this.f5219q;
        }

        public c(int i10, int i11) {
            super(i10, i11);
            this.f5218p = -1;
            this.f5219q = 0;
        }

        public c(ViewGroup.MarginLayoutParams marginLayoutParams) {
            super(marginLayoutParams);
            this.f5218p = -1;
            this.f5219q = 0;
        }

        public c(ViewGroup.LayoutParams layoutParams) {
            super(layoutParams);
            this.f5218p = -1;
            this.f5219q = 0;
        }
    }

    public GridLayoutManager(Context context, int i10) {
        super(context);
        this.mPendingSpanCountChange = false;
        this.mSpanCount = -1;
        this.mPreLayoutSpanSizeCache = new SparseIntArray();
        this.mPreLayoutSpanIndexCache = new SparseIntArray();
        this.mSpanSizeLookup = new b();
        this.mDecorInsets = new Rect();
        this.mPositionTargetedByScrollInDirection = -1;
        this.mRowWithAccessibilityFocus = -1;
        this.mColumnWithAccessibilityFocus = -1;
        setSpanCount(i10);
    }

    public GridLayoutManager(Context context, int i10, int i11, boolean z10) {
        super(context, i11, z10);
        this.mPendingSpanCountChange = false;
        this.mSpanCount = -1;
        this.mPreLayoutSpanSizeCache = new SparseIntArray();
        this.mPreLayoutSpanIndexCache = new SparseIntArray();
        this.mSpanSizeLookup = new b();
        this.mDecorInsets = new Rect();
        this.mPositionTargetedByScrollInDirection = -1;
        this.mRowWithAccessibilityFocus = -1;
        this.mColumnWithAccessibilityFocus = -1;
        setSpanCount(i10);
    }
}
