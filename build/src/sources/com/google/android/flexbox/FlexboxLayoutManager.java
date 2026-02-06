package com.google.android.flexbox;

import android.content.Context;
import android.graphics.PointF;
import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import android.util.AttributeSet;
import android.util.SparseArray;
import android.view.View;
import android.view.ViewGroup;
import androidx.recyclerview.widget.OrientationHelper;
import androidx.recyclerview.widget.RecyclerView;
import androidx.recyclerview.widget.l;
import com.google.android.flexbox.FlexboxHelper;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class FlexboxLayoutManager extends RecyclerView.LayoutManager implements com.google.android.flexbox.a, RecyclerView.SmoothScroller.a {
    private static final Rect L = new Rect();
    private e A;
    private int B;
    private int C;
    private int D;
    private int E;
    private boolean F;
    private SparseArray G;
    private final Context H;
    private View I;
    private int J;
    private FlexboxHelper.FlexLinesResult K;

    /* renamed from: d  reason: collision with root package name */
    private int f13564d;

    /* renamed from: e  reason: collision with root package name */
    private int f13565e;

    /* renamed from: i  reason: collision with root package name */
    private int f13566i;

    /* renamed from: o  reason: collision with root package name */
    private int f13567o;

    /* renamed from: p  reason: collision with root package name */
    private int f13568p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f13569q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f13570r;

    /* renamed from: s  reason: collision with root package name */
    private List f13571s;

    /* renamed from: t  reason: collision with root package name */
    private final FlexboxHelper f13572t;

    /* renamed from: u  reason: collision with root package name */
    private RecyclerView.Recycler f13573u;

    /* renamed from: v  reason: collision with root package name */
    private RecyclerView.State f13574v;

    /* renamed from: w  reason: collision with root package name */
    private d f13575w;

    /* renamed from: x  reason: collision with root package name */
    private b f13576x;

    /* renamed from: y  reason: collision with root package name */
    private OrientationHelper f13577y;

    /* renamed from: z  reason: collision with root package name */
    private OrientationHelper f13578z;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b {

        /* renamed from: a  reason: collision with root package name */
        private int f13579a;

        /* renamed from: b  reason: collision with root package name */
        private int f13580b;

        /* renamed from: c  reason: collision with root package name */
        private int f13581c;

        /* renamed from: d  reason: collision with root package name */
        private int f13582d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f13583e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f13584f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f13585g;

        private b() {
            this.f13582d = 0;
        }

        static /* synthetic */ int l(b bVar, int i10) {
            int i11 = bVar.f13582d + i10;
            bVar.f13582d = i11;
            return i11;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void r() {
            int m10;
            int width;
            if (!FlexboxLayoutManager.this.isMainAxisDirectionHorizontal() && FlexboxLayoutManager.this.f13569q) {
                if (this.f13583e) {
                    width = FlexboxLayoutManager.this.f13577y.i();
                } else {
                    width = FlexboxLayoutManager.this.getWidth() - FlexboxLayoutManager.this.f13577y.m();
                }
                this.f13581c = width;
                return;
            }
            if (this.f13583e) {
                m10 = FlexboxLayoutManager.this.f13577y.i();
            } else {
                m10 = FlexboxLayoutManager.this.f13577y.m();
            }
            this.f13581c = m10;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void s(View view) {
            OrientationHelper orientationHelper = FlexboxLayoutManager.this.f13565e == 0 ? FlexboxLayoutManager.this.f13578z : FlexboxLayoutManager.this.f13577y;
            if (!FlexboxLayoutManager.this.isMainAxisDirectionHorizontal() && FlexboxLayoutManager.this.f13569q) {
                if (this.f13583e) {
                    this.f13581c = orientationHelper.g(view) + orientationHelper.o();
                } else {
                    this.f13581c = orientationHelper.d(view);
                }
            } else if (this.f13583e) {
                this.f13581c = orientationHelper.d(view) + orientationHelper.o();
            } else {
                this.f13581c = orientationHelper.g(view);
            }
            this.f13579a = FlexboxLayoutManager.this.getPosition(view);
            int i10 = 0;
            this.f13585g = false;
            int[] iArr = FlexboxLayoutManager.this.f13572t.f13547c;
            int i11 = this.f13579a;
            if (i11 == -1) {
                i11 = 0;
            }
            int i12 = iArr[i11];
            if (i12 != -1) {
                i10 = i12;
            }
            this.f13580b = i10;
            if (FlexboxLayoutManager.this.f13571s.size() > this.f13580b) {
                this.f13579a = ((FlexLine) FlexboxLayoutManager.this.f13571s.get(this.f13580b)).f13541o;
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void t() {
            this.f13579a = -1;
            this.f13580b = -1;
            this.f13581c = Integer.MIN_VALUE;
            boolean z10 = false;
            this.f13584f = false;
            this.f13585g = false;
            if (FlexboxLayoutManager.this.isMainAxisDirectionHorizontal()) {
                if (FlexboxLayoutManager.this.f13565e == 0) {
                    if (FlexboxLayoutManager.this.f13564d == 1) {
                        z10 = true;
                    }
                    this.f13583e = z10;
                    return;
                }
                if (FlexboxLayoutManager.this.f13565e == 2) {
                    z10 = true;
                }
                this.f13583e = z10;
            } else if (FlexboxLayoutManager.this.f13565e == 0) {
                if (FlexboxLayoutManager.this.f13564d == 3) {
                    z10 = true;
                }
                this.f13583e = z10;
            } else {
                if (FlexboxLayoutManager.this.f13565e == 2) {
                    z10 = true;
                }
                this.f13583e = z10;
            }
        }

        public String toString() {
            return "AnchorInfo{mPosition=" + this.f13579a + ", mFlexLinePosition=" + this.f13580b + ", mCoordinate=" + this.f13581c + ", mPerpendicularCoordinate=" + this.f13582d + ", mLayoutFromEnd=" + this.f13583e + ", mValid=" + this.f13584f + ", mAssignedFromSavedState=" + this.f13585g + '}';
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        private int f13596a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f13597b;

        /* renamed from: c  reason: collision with root package name */
        private int f13598c;

        /* renamed from: d  reason: collision with root package name */
        private int f13599d;

        /* renamed from: e  reason: collision with root package name */
        private int f13600e;

        /* renamed from: f  reason: collision with root package name */
        private int f13601f;

        /* renamed from: g  reason: collision with root package name */
        private int f13602g;

        /* renamed from: h  reason: collision with root package name */
        private int f13603h;

        /* renamed from: i  reason: collision with root package name */
        private int f13604i;

        /* renamed from: j  reason: collision with root package name */
        private boolean f13605j;

        private d() {
            this.f13603h = 1;
            this.f13604i = 1;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public boolean D(RecyclerView.State state, List list) {
            int i10;
            int i11 = this.f13599d;
            if (i11 >= 0 && i11 < state.b() && (i10 = this.f13598c) >= 0 && i10 < list.size()) {
                return true;
            }
            return false;
        }

        static /* synthetic */ int c(d dVar, int i10) {
            int i11 = dVar.f13600e + i10;
            dVar.f13600e = i11;
            return i11;
        }

        static /* synthetic */ int d(d dVar, int i10) {
            int i11 = dVar.f13600e - i10;
            dVar.f13600e = i11;
            return i11;
        }

        static /* synthetic */ int i(d dVar, int i10) {
            int i11 = dVar.f13596a - i10;
            dVar.f13596a = i11;
            return i11;
        }

        static /* synthetic */ int l(d dVar) {
            int i10 = dVar.f13598c;
            dVar.f13598c = i10 + 1;
            return i10;
        }

        static /* synthetic */ int m(d dVar) {
            int i10 = dVar.f13598c;
            dVar.f13598c = i10 - 1;
            return i10;
        }

        static /* synthetic */ int n(d dVar, int i10) {
            int i11 = dVar.f13598c + i10;
            dVar.f13598c = i11;
            return i11;
        }

        static /* synthetic */ int q(d dVar, int i10) {
            int i11 = dVar.f13601f + i10;
            dVar.f13601f = i11;
            return i11;
        }

        static /* synthetic */ int u(d dVar, int i10) {
            int i11 = dVar.f13599d + i10;
            dVar.f13599d = i11;
            return i11;
        }

        static /* synthetic */ int v(d dVar, int i10) {
            int i11 = dVar.f13599d - i10;
            dVar.f13599d = i11;
            return i11;
        }

        public String toString() {
            return "LayoutState{mAvailable=" + this.f13596a + ", mFlexLinePosition=" + this.f13598c + ", mPosition=" + this.f13599d + ", mOffset=" + this.f13600e + ", mScrollingOffset=" + this.f13601f + ", mLastScrollDelta=" + this.f13602g + ", mItemDirection=" + this.f13603h + ", mLayoutDirection=" + this.f13604i + '}';
        }
    }

    public FlexboxLayoutManager(Context context) {
        this(context, 0, 1);
    }

    private View A(View view, FlexLine flexLine) {
        boolean isMainAxisDirectionHorizontal = isMainAxisDirectionHorizontal();
        int i10 = flexLine.f13534h;
        for (int i11 = 1; i11 < i10; i11++) {
            View childAt = getChildAt(i11);
            if (childAt != null && childAt.getVisibility() != 8) {
                if (this.f13569q && !isMainAxisDirectionHorizontal) {
                    if (this.f13577y.d(view) >= this.f13577y.d(childAt)) {
                    }
                    view = childAt;
                } else {
                    if (this.f13577y.g(view) <= this.f13577y.g(childAt)) {
                    }
                    view = childAt;
                }
            }
        }
        return view;
    }

    private View B(int i10) {
        View E = E(getChildCount() - 1, -1, i10);
        if (E == null) {
            return null;
        }
        return C(E, (FlexLine) this.f13571s.get(this.f13572t.f13547c[getPosition(E)]));
    }

    private View C(View view, FlexLine flexLine) {
        boolean isMainAxisDirectionHorizontal = isMainAxisDirectionHorizontal();
        int childCount = (getChildCount() - flexLine.f13534h) - 1;
        for (int childCount2 = getChildCount() - 2; childCount2 > childCount; childCount2--) {
            View childAt = getChildAt(childCount2);
            if (childAt != null && childAt.getVisibility() != 8) {
                if (this.f13569q && !isMainAxisDirectionHorizontal) {
                    if (this.f13577y.g(view) <= this.f13577y.g(childAt)) {
                    }
                    view = childAt;
                } else {
                    if (this.f13577y.d(view) >= this.f13577y.d(childAt)) {
                    }
                    view = childAt;
                }
            }
        }
        return view;
    }

    private View D(int i10, int i11, boolean z10) {
        int i12;
        if (i11 > i10) {
            i12 = 1;
        } else {
            i12 = -1;
        }
        while (i10 != i11) {
            View childAt = getChildAt(i10);
            if (O(childAt, z10)) {
                return childAt;
            }
            i10 += i12;
        }
        return null;
    }

    private View E(int i10, int i11, int i12) {
        int i13;
        int position;
        x();
        ensureLayoutState();
        int m10 = this.f13577y.m();
        int i14 = this.f13577y.i();
        if (i11 > i10) {
            i13 = 1;
        } else {
            i13 = -1;
        }
        View view = null;
        View view2 = null;
        while (i10 != i11) {
            View childAt = getChildAt(i10);
            if (childAt != null && (position = getPosition(childAt)) >= 0 && position < i12) {
                if (((RecyclerView.LayoutParams) childAt.getLayoutParams()).c()) {
                    if (view2 == null) {
                        view2 = childAt;
                    }
                } else if (this.f13577y.g(childAt) >= m10 && this.f13577y.d(childAt) <= i14) {
                    return childAt;
                } else {
                    if (view == null) {
                        view = childAt;
                    }
                }
            }
            i10 += i13;
        }
        if (view != null) {
            return view;
        }
        return view2;
    }

    private int F(int i10, RecyclerView.Recycler recycler, RecyclerView.State state, boolean z10) {
        int i11;
        int i12;
        if (!isMainAxisDirectionHorizontal() && this.f13569q) {
            int m10 = i10 - this.f13577y.m();
            if (m10 <= 0) {
                return 0;
            }
            i11 = M(m10, recycler, state);
        } else {
            int i13 = this.f13577y.i() - i10;
            if (i13 <= 0) {
                return 0;
            }
            i11 = -M(-i13, recycler, state);
        }
        int i14 = i10 + i11;
        if (z10 && (i12 = this.f13577y.i() - i14) > 0) {
            this.f13577y.r(i12);
            return i12 + i11;
        }
        return i11;
    }

    private int G(int i10, RecyclerView.Recycler recycler, RecyclerView.State state, boolean z10) {
        int i11;
        int m10;
        if (!isMainAxisDirectionHorizontal() && this.f13569q) {
            int i12 = this.f13577y.i() - i10;
            if (i12 <= 0) {
                return 0;
            }
            i11 = M(-i12, recycler, state);
        } else {
            int m11 = i10 - this.f13577y.m();
            if (m11 <= 0) {
                return 0;
            }
            i11 = -M(m11, recycler, state);
        }
        int i13 = i10 + i11;
        if (z10 && (m10 = i13 - this.f13577y.m()) > 0) {
            this.f13577y.r(-m10);
            return i11 - m10;
        }
        return i11;
    }

    private int H(View view) {
        return getDecoratedBottom(view) + ((ViewGroup.MarginLayoutParams) ((RecyclerView.LayoutParams) view.getLayoutParams())).bottomMargin;
    }

    private View I() {
        return getChildAt(0);
    }

    private int J(View view) {
        return getDecoratedLeft(view) - ((ViewGroup.MarginLayoutParams) ((RecyclerView.LayoutParams) view.getLayoutParams())).leftMargin;
    }

    private int K(View view) {
        return getDecoratedRight(view) + ((ViewGroup.MarginLayoutParams) ((RecyclerView.LayoutParams) view.getLayoutParams())).rightMargin;
    }

    private int L(View view) {
        return getDecoratedTop(view) - ((ViewGroup.MarginLayoutParams) ((RecyclerView.LayoutParams) view.getLayoutParams())).topMargin;
    }

    private int M(int i10, RecyclerView.Recycler recycler, RecyclerView.State state) {
        boolean z10;
        if (getChildCount() == 0 || i10 == 0) {
            return 0;
        }
        x();
        int i11 = 1;
        this.f13575w.f13605j = true;
        if (!isMainAxisDirectionHorizontal() && this.f13569q) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10 ? i10 <= 0 : i10 >= 0) {
            i11 = -1;
        }
        int abs = Math.abs(i10);
        g0(i11, abs);
        int y10 = this.f13575w.f13601f + y(recycler, state, this.f13575w);
        if (y10 < 0) {
            return 0;
        }
        if (z10) {
            if (abs > y10) {
                i10 = (-i11) * y10;
            }
        } else if (abs > y10) {
            i10 = i11 * y10;
        }
        this.f13577y.r(-i10);
        this.f13575w.f13602g = i10;
        return i10;
    }

    private int N(int i10) {
        int height;
        int height2;
        if (getChildCount() != 0 && i10 != 0) {
            x();
            boolean isMainAxisDirectionHorizontal = isMainAxisDirectionHorizontal();
            View view = this.I;
            if (isMainAxisDirectionHorizontal) {
                height = view.getWidth();
            } else {
                height = view.getHeight();
            }
            if (isMainAxisDirectionHorizontal) {
                height2 = getWidth();
            } else {
                height2 = getHeight();
            }
            if (getLayoutDirection() == 1) {
                int abs = Math.abs(i10);
                if (i10 < 0) {
                    return -Math.min((height2 + this.f13576x.f13582d) - height, abs);
                }
                if (this.f13576x.f13582d + i10 > 0) {
                    return -this.f13576x.f13582d;
                }
            } else if (i10 > 0) {
                return Math.min((height2 - this.f13576x.f13582d) - height, i10);
            } else {
                if (this.f13576x.f13582d + i10 < 0) {
                    return -this.f13576x.f13582d;
                }
            }
            return i10;
        }
        return 0;
    }

    private boolean O(View view, boolean z10) {
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        int paddingLeft = getPaddingLeft();
        int paddingTop = getPaddingTop();
        int width = getWidth() - getPaddingRight();
        int height = getHeight() - getPaddingBottom();
        int J = J(view);
        int L2 = L(view);
        int K = K(view);
        int H = H(view);
        if (paddingLeft <= J && width >= K) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (J < width && K < paddingLeft) {
            z12 = false;
        } else {
            z12 = true;
        }
        if (paddingTop <= L2 && height >= H) {
            z13 = true;
        } else {
            z13 = false;
        }
        if (L2 < height && H < paddingTop) {
            z14 = false;
        } else {
            z14 = true;
        }
        if (z10) {
            if (z11 && z13) {
                return true;
            }
            return false;
        } else if (z12 && z14) {
            return true;
        } else {
            return false;
        }
    }

    private int P(FlexLine flexLine, d dVar) {
        if (isMainAxisDirectionHorizontal()) {
            return Q(flexLine, dVar);
        }
        return R(flexLine, dVar);
    }

    /* JADX WARN: Removed duplicated region for block: B:40:0x00cc  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private int Q(com.google.android.flexbox.FlexLine r18, com.google.android.flexbox.FlexboxLayoutManager.d r19) {
        /*
            Method dump skipped, instructions count: 414
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.flexbox.FlexboxLayoutManager.Q(com.google.android.flexbox.FlexLine, com.google.android.flexbox.FlexboxLayoutManager$d):int");
    }

    /* JADX WARN: Removed duplicated region for block: B:40:0x00d2  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private int R(com.google.android.flexbox.FlexLine r21, com.google.android.flexbox.FlexboxLayoutManager.d r22) {
        /*
            Method dump skipped, instructions count: 511
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.flexbox.FlexboxLayoutManager.R(com.google.android.flexbox.FlexLine, com.google.android.flexbox.FlexboxLayoutManager$d):int");
    }

    private void S(RecyclerView.Recycler recycler, d dVar) {
        if (!dVar.f13605j) {
            return;
        }
        if (dVar.f13604i == -1) {
            U(recycler, dVar);
        } else {
            V(recycler, dVar);
        }
    }

    private void T(RecyclerView.Recycler recycler, int i10, int i11) {
        while (i11 >= i10) {
            removeAndRecycleViewAt(i11, recycler);
            i11--;
        }
    }

    private void U(RecyclerView.Recycler recycler, d dVar) {
        int childCount;
        int i10;
        View childAt;
        int i11;
        if (dVar.f13601f < 0 || (childCount = getChildCount()) == 0 || (childAt = getChildAt(childCount - 1)) == null || (i11 = this.f13572t.f13547c[getPosition(childAt)]) == -1) {
            return;
        }
        FlexLine flexLine = (FlexLine) this.f13571s.get(i11);
        int i12 = i10;
        while (true) {
            if (i12 < 0) {
                break;
            }
            View childAt2 = getChildAt(i12);
            if (childAt2 != null) {
                if (!r(childAt2, dVar.f13601f)) {
                    break;
                } else if (flexLine.f13541o != getPosition(childAt2)) {
                    continue;
                } else if (i11 <= 0) {
                    childCount = i12;
                    break;
                } else {
                    i11 += dVar.f13604i;
                    flexLine = (FlexLine) this.f13571s.get(i11);
                    childCount = i12;
                }
            }
            i12--;
        }
        T(recycler, childCount, i10);
    }

    private void V(RecyclerView.Recycler recycler, d dVar) {
        int childCount;
        View childAt;
        if (dVar.f13601f >= 0 && (childCount = getChildCount()) != 0 && (childAt = getChildAt(0)) != null) {
            int i10 = this.f13572t.f13547c[getPosition(childAt)];
            int i11 = -1;
            if (i10 == -1) {
                return;
            }
            FlexLine flexLine = (FlexLine) this.f13571s.get(i10);
            int i12 = 0;
            while (true) {
                if (i12 >= childCount) {
                    break;
                }
                View childAt2 = getChildAt(i12);
                if (childAt2 != null) {
                    if (!s(childAt2, dVar.f13601f)) {
                        break;
                    } else if (flexLine.f13542p != getPosition(childAt2)) {
                        continue;
                    } else if (i10 >= this.f13571s.size() - 1) {
                        i11 = i12;
                        break;
                    } else {
                        i10 += dVar.f13604i;
                        flexLine = (FlexLine) this.f13571s.get(i10);
                        i11 = i12;
                    }
                }
                i12++;
            }
            T(recycler, 0, i11);
        }
    }

    private void W() {
        int widthMode;
        boolean z10;
        if (isMainAxisDirectionHorizontal()) {
            widthMode = getHeightMode();
        } else {
            widthMode = getWidthMode();
        }
        d dVar = this.f13575w;
        if (widthMode != 0 && widthMode != Integer.MIN_VALUE) {
            z10 = false;
        } else {
            z10 = true;
        }
        dVar.f13597b = z10;
    }

    private void X() {
        boolean z10;
        boolean z11;
        boolean z12;
        int layoutDirection = getLayoutDirection();
        int i10 = this.f13564d;
        boolean z13 = false;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        this.f13569q = false;
                        this.f13570r = false;
                        return;
                    }
                    if (layoutDirection == 1) {
                        z13 = true;
                    }
                    this.f13569q = z13;
                    if (this.f13565e == 2) {
                        this.f13569q = !z13;
                    }
                    this.f13570r = true;
                    return;
                }
                if (layoutDirection == 1) {
                    z12 = true;
                } else {
                    z12 = false;
                }
                this.f13569q = z12;
                if (this.f13565e == 2) {
                    this.f13569q = !z12;
                }
                this.f13570r = false;
                return;
            }
            if (layoutDirection != 1) {
                z11 = true;
            } else {
                z11 = false;
            }
            this.f13569q = z11;
            if (this.f13565e == 2) {
                z13 = true;
            }
            this.f13570r = z13;
            return;
        }
        if (layoutDirection == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f13569q = z10;
        if (this.f13565e == 2) {
            z13 = true;
        }
        this.f13570r = z13;
    }

    private boolean b0(RecyclerView.State state, b bVar) {
        View z10;
        int m10;
        if (getChildCount() == 0) {
            return false;
        }
        if (bVar.f13583e) {
            z10 = B(state.b());
        } else {
            z10 = z(state.b());
        }
        if (z10 != null) {
            bVar.s(z10);
            if (!state.e() && supportsPredictiveItemAnimations()) {
                if (this.f13577y.g(z10) >= this.f13577y.i() || this.f13577y.d(z10) < this.f13577y.m()) {
                    if (bVar.f13583e) {
                        m10 = this.f13577y.i();
                    } else {
                        m10 = this.f13577y.m();
                    }
                    bVar.f13581c = m10;
                    return true;
                }
                return true;
            }
            return true;
        }
        return false;
    }

    private boolean c0(RecyclerView.State state, b bVar, e eVar) {
        int i10;
        View childAt;
        int g10;
        boolean z10 = false;
        if (!state.e() && (i10 = this.B) != -1) {
            if (i10 >= 0 && i10 < state.b()) {
                bVar.f13579a = this.B;
                bVar.f13580b = this.f13572t.f13547c[bVar.f13579a];
                e eVar2 = this.A;
                if (eVar2 != null && eVar2.h(state.b())) {
                    bVar.f13581c = this.f13577y.m() + eVar.f13607e;
                    bVar.f13585g = true;
                    bVar.f13580b = -1;
                    return true;
                } else if (this.C == Integer.MIN_VALUE) {
                    View findViewByPosition = findViewByPosition(this.B);
                    if (findViewByPosition != null) {
                        if (this.f13577y.e(findViewByPosition) > this.f13577y.n()) {
                            bVar.r();
                            return true;
                        } else if (this.f13577y.g(findViewByPosition) - this.f13577y.m() < 0) {
                            bVar.f13581c = this.f13577y.m();
                            bVar.f13583e = false;
                            return true;
                        } else if (this.f13577y.i() - this.f13577y.d(findViewByPosition) < 0) {
                            bVar.f13581c = this.f13577y.i();
                            bVar.f13583e = true;
                            return true;
                        } else {
                            if (bVar.f13583e) {
                                g10 = this.f13577y.d(findViewByPosition) + this.f13577y.o();
                            } else {
                                g10 = this.f13577y.g(findViewByPosition);
                            }
                            bVar.f13581c = g10;
                        }
                    } else {
                        if (getChildCount() > 0 && (childAt = getChildAt(0)) != null) {
                            if (this.B < getPosition(childAt)) {
                                z10 = true;
                            }
                            bVar.f13583e = z10;
                        }
                        bVar.r();
                    }
                    return true;
                } else {
                    if (isMainAxisDirectionHorizontal() || !this.f13569q) {
                        bVar.f13581c = this.f13577y.m() + this.C;
                    } else {
                        bVar.f13581c = this.C - this.f13577y.j();
                    }
                    return true;
                }
            }
            this.B = -1;
            this.C = Integer.MIN_VALUE;
        }
        return false;
    }

    private void d0(RecyclerView.State state, b bVar) {
        if (!c0(state, bVar, this.A) && !b0(state, bVar)) {
            bVar.r();
            bVar.f13579a = 0;
            bVar.f13580b = 0;
        }
    }

    private void e0(int i10) {
        if (i10 < findLastVisibleItemPosition()) {
            int childCount = getChildCount();
            this.f13572t.t(childCount);
            this.f13572t.u(childCount);
            this.f13572t.s(childCount);
            if (i10 < this.f13572t.f13547c.length) {
                this.J = i10;
                View I = I();
                if (I == null) {
                    return;
                }
                this.B = getPosition(I);
                if (!isMainAxisDirectionHorizontal() && this.f13569q) {
                    this.C = this.f13577y.d(I) + this.f13577y.j();
                } else {
                    this.C = this.f13577y.g(I) - this.f13577y.m();
                }
            }
        }
    }

    private void ensureLayoutState() {
        if (this.f13575w == null) {
            this.f13575w = new d();
        }
    }

    private void f0(int i10) {
        int i11;
        int i12;
        int i13;
        int makeMeasureSpec = View.MeasureSpec.makeMeasureSpec(getWidth(), getWidthMode());
        int makeMeasureSpec2 = View.MeasureSpec.makeMeasureSpec(getHeight(), getHeightMode());
        int width = getWidth();
        int height = getHeight();
        boolean z10 = false;
        if (isMainAxisDirectionHorizontal()) {
            int i14 = this.D;
            if (i14 != Integer.MIN_VALUE && i14 != width) {
                z10 = true;
            }
            i11 = this.f13575w.f13597b ? this.H.getResources().getDisplayMetrics().heightPixels : this.f13575w.f13596a;
        } else {
            int i15 = this.E;
            if (i15 != Integer.MIN_VALUE && i15 != height) {
                z10 = true;
            }
            if (!this.f13575w.f13597b) {
                i11 = this.f13575w.f13596a;
            } else {
                i11 = this.H.getResources().getDisplayMetrics().widthPixels;
            }
        }
        int i16 = i11;
        this.D = width;
        this.E = height;
        int i17 = this.J;
        if (i17 == -1 && (this.B != -1 || z10)) {
            if (this.f13576x.f13583e) {
                return;
            }
            this.f13571s.clear();
            this.K.a();
            if (isMainAxisDirectionHorizontal()) {
                this.f13572t.e(this.K, makeMeasureSpec, makeMeasureSpec2, i16, this.f13576x.f13579a, this.f13571s);
            } else {
                this.f13572t.h(this.K, makeMeasureSpec, makeMeasureSpec2, i16, this.f13576x.f13579a, this.f13571s);
            }
            this.f13571s = this.K.f13550a;
            this.f13572t.p(makeMeasureSpec, makeMeasureSpec2);
            this.f13572t.X();
            b bVar = this.f13576x;
            bVar.f13580b = this.f13572t.f13547c[bVar.f13579a];
            this.f13575w.f13598c = this.f13576x.f13580b;
            return;
        }
        if (i17 == -1) {
            i12 = this.f13576x.f13579a;
        } else {
            i12 = Math.min(i17, this.f13576x.f13579a);
        }
        int i18 = i12;
        this.K.a();
        if (isMainAxisDirectionHorizontal()) {
            if (this.f13571s.size() > 0) {
                this.f13572t.j(this.f13571s, i18);
                this.f13572t.b(this.K, makeMeasureSpec, makeMeasureSpec2, i16, i18, this.f13576x.f13579a, this.f13571s);
                i13 = i18;
                this.f13571s = this.K.f13550a;
                this.f13572t.q(makeMeasureSpec, makeMeasureSpec2, i13);
                this.f13572t.Y(i13);
            }
            i13 = i18;
            this.f13572t.s(i10);
            this.f13572t.d(this.K, makeMeasureSpec, makeMeasureSpec2, i16, 0, this.f13571s);
            this.f13571s = this.K.f13550a;
            this.f13572t.q(makeMeasureSpec, makeMeasureSpec2, i13);
            this.f13572t.Y(i13);
        }
        i13 = i18;
        if (this.f13571s.size() > 0) {
            this.f13572t.j(this.f13571s, i13);
            i18 = i13;
            this.f13572t.b(this.K, makeMeasureSpec2, makeMeasureSpec, i16, i18, this.f13576x.f13579a, this.f13571s);
            makeMeasureSpec2 = makeMeasureSpec2;
            makeMeasureSpec = makeMeasureSpec;
            i13 = i18;
            this.f13571s = this.K.f13550a;
            this.f13572t.q(makeMeasureSpec, makeMeasureSpec2, i13);
            this.f13572t.Y(i13);
        }
        this.f13572t.s(i10);
        this.f13572t.g(this.K, makeMeasureSpec, makeMeasureSpec2, i16, 0, this.f13571s);
        this.f13571s = this.K.f13550a;
        this.f13572t.q(makeMeasureSpec, makeMeasureSpec2, i13);
        this.f13572t.Y(i13);
    }

    private void g0(int i10, int i11) {
        boolean z10;
        int i12;
        this.f13575w.f13604i = i10;
        boolean isMainAxisDirectionHorizontal = isMainAxisDirectionHorizontal();
        int makeMeasureSpec = View.MeasureSpec.makeMeasureSpec(getWidth(), getWidthMode());
        int makeMeasureSpec2 = View.MeasureSpec.makeMeasureSpec(getHeight(), getHeightMode());
        if (!isMainAxisDirectionHorizontal && this.f13569q) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (i10 == 1) {
            View childAt = getChildAt(getChildCount() - 1);
            if (childAt != null) {
                this.f13575w.f13600e = this.f13577y.d(childAt);
                int position = getPosition(childAt);
                View C = C(childAt, (FlexLine) this.f13571s.get(this.f13572t.f13547c[position]));
                this.f13575w.f13603h = 1;
                d dVar = this.f13575w;
                dVar.f13599d = position + dVar.f13603h;
                if (this.f13572t.f13547c.length <= this.f13575w.f13599d) {
                    this.f13575w.f13598c = -1;
                } else {
                    d dVar2 = this.f13575w;
                    dVar2.f13598c = this.f13572t.f13547c[dVar2.f13599d];
                }
                if (z10) {
                    this.f13575w.f13600e = this.f13577y.g(C);
                    this.f13575w.f13601f = (-this.f13577y.g(C)) + this.f13577y.m();
                    d dVar3 = this.f13575w;
                    dVar3.f13601f = Math.max(dVar3.f13601f, 0);
                } else {
                    this.f13575w.f13600e = this.f13577y.d(C);
                    this.f13575w.f13601f = this.f13577y.d(C) - this.f13577y.i();
                }
                if ((this.f13575w.f13598c == -1 || this.f13575w.f13598c > this.f13571s.size() - 1) && this.f13575w.f13599d <= getFlexItemCount()) {
                    int i13 = i11 - this.f13575w.f13601f;
                    this.K.a();
                    if (i13 > 0) {
                        if (isMainAxisDirectionHorizontal) {
                            this.f13572t.d(this.K, makeMeasureSpec, makeMeasureSpec2, i13, this.f13575w.f13599d, this.f13571s);
                        } else {
                            this.f13572t.g(this.K, makeMeasureSpec, makeMeasureSpec2, i13, this.f13575w.f13599d, this.f13571s);
                        }
                        this.f13572t.q(makeMeasureSpec, makeMeasureSpec2, this.f13575w.f13599d);
                        this.f13572t.Y(this.f13575w.f13599d);
                    }
                }
            } else {
                return;
            }
        } else {
            View childAt2 = getChildAt(0);
            if (childAt2 == null) {
                return;
            }
            this.f13575w.f13600e = this.f13577y.g(childAt2);
            int position2 = getPosition(childAt2);
            View A = A(childAt2, (FlexLine) this.f13571s.get(this.f13572t.f13547c[position2]));
            this.f13575w.f13603h = 1;
            int i14 = this.f13572t.f13547c[position2];
            if (i14 == -1) {
                i14 = 0;
            }
            if (i14 <= 0) {
                this.f13575w.f13599d = -1;
            } else {
                this.f13575w.f13599d = position2 - ((FlexLine) this.f13571s.get(i14 - 1)).b();
            }
            d dVar4 = this.f13575w;
            if (i14 > 0) {
                i12 = i14 - 1;
            } else {
                i12 = 0;
            }
            dVar4.f13598c = i12;
            if (z10) {
                this.f13575w.f13600e = this.f13577y.d(A);
                this.f13575w.f13601f = this.f13577y.d(A) - this.f13577y.i();
                d dVar5 = this.f13575w;
                dVar5.f13601f = Math.max(dVar5.f13601f, 0);
            } else {
                this.f13575w.f13600e = this.f13577y.g(A);
                this.f13575w.f13601f = (-this.f13577y.g(A)) + this.f13577y.m();
            }
        }
        d dVar6 = this.f13575w;
        dVar6.f13596a = i11 - dVar6.f13601f;
    }

    private void h0(b bVar, boolean z10, boolean z11) {
        if (!z11) {
            this.f13575w.f13597b = false;
        } else {
            W();
        }
        if (!isMainAxisDirectionHorizontal() && this.f13569q) {
            this.f13575w.f13596a = bVar.f13581c - getPaddingRight();
        } else {
            this.f13575w.f13596a = this.f13577y.i() - bVar.f13581c;
        }
        this.f13575w.f13599d = bVar.f13579a;
        this.f13575w.f13603h = 1;
        this.f13575w.f13604i = 1;
        this.f13575w.f13600e = bVar.f13581c;
        this.f13575w.f13601f = Integer.MIN_VALUE;
        this.f13575w.f13598c = bVar.f13580b;
        if (z10 && this.f13571s.size() > 1 && bVar.f13580b >= 0 && bVar.f13580b < this.f13571s.size() - 1) {
            d.l(this.f13575w);
            d.u(this.f13575w, ((FlexLine) this.f13571s.get(bVar.f13580b)).b());
        }
    }

    private static boolean i(int i10, int i11, int i12) {
        int mode = View.MeasureSpec.getMode(i11);
        int size = View.MeasureSpec.getSize(i11);
        if (i12 > 0 && i10 != i12) {
            return false;
        }
        if (mode != Integer.MIN_VALUE) {
            if (mode == 0) {
                return true;
            }
            if (mode != 1073741824 || size != i10) {
                return false;
            }
            return true;
        } else if (size < i10) {
            return false;
        } else {
            return true;
        }
    }

    private void i0(b bVar, boolean z10, boolean z11) {
        if (!z11) {
            this.f13575w.f13597b = false;
        } else {
            W();
        }
        if (!isMainAxisDirectionHorizontal() && this.f13569q) {
            this.f13575w.f13596a = (this.I.getWidth() - bVar.f13581c) - this.f13577y.m();
        } else {
            this.f13575w.f13596a = bVar.f13581c - this.f13577y.m();
        }
        this.f13575w.f13599d = bVar.f13579a;
        this.f13575w.f13603h = 1;
        this.f13575w.f13604i = -1;
        this.f13575w.f13600e = bVar.f13581c;
        this.f13575w.f13601f = Integer.MIN_VALUE;
        this.f13575w.f13598c = bVar.f13580b;
        if (z10 && bVar.f13580b > 0 && this.f13571s.size() > bVar.f13580b) {
            d.m(this.f13575w);
            d.v(this.f13575w, ((FlexLine) this.f13571s.get(bVar.f13580b)).b());
        }
    }

    private boolean r(View view, int i10) {
        if (!isMainAxisDirectionHorizontal() && this.f13569q) {
            if (this.f13577y.d(view) > i10) {
                return false;
            }
            return true;
        } else if (this.f13577y.g(view) < this.f13577y.h() - i10) {
            return false;
        } else {
            return true;
        }
    }

    private boolean s(View view, int i10) {
        if (!isMainAxisDirectionHorizontal() && this.f13569q) {
            if (this.f13577y.h() - this.f13577y.g(view) > i10) {
                return false;
            }
            return true;
        } else if (this.f13577y.d(view) > i10) {
            return false;
        } else {
            return true;
        }
    }

    private boolean shouldMeasureChild(View view, int i10, int i11, RecyclerView.LayoutParams layoutParams) {
        if (!view.isLayoutRequested() && isMeasurementCacheEnabled() && i(view.getWidth(), i10, ((ViewGroup.MarginLayoutParams) layoutParams).width) && i(view.getHeight(), i11, ((ViewGroup.MarginLayoutParams) layoutParams).height)) {
            return false;
        }
        return true;
    }

    private void t() {
        this.f13571s.clear();
        this.f13576x.t();
        this.f13576x.f13582d = 0;
    }

    private int u(RecyclerView.State state) {
        if (getChildCount() == 0) {
            return 0;
        }
        int b10 = state.b();
        x();
        View z10 = z(b10);
        View B = B(b10);
        if (state.b() == 0 || z10 == null || B == null) {
            return 0;
        }
        return Math.min(this.f13577y.n(), this.f13577y.d(B) - this.f13577y.g(z10));
    }

    private int v(RecyclerView.State state) {
        if (getChildCount() == 0) {
            return 0;
        }
        int b10 = state.b();
        View z10 = z(b10);
        View B = B(b10);
        if (state.b() != 0 && z10 != null && B != null) {
            int position = getPosition(z10);
            int position2 = getPosition(B);
            int abs = Math.abs(this.f13577y.d(B) - this.f13577y.g(z10));
            int[] iArr = this.f13572t.f13547c;
            int i10 = iArr[position];
            if (i10 != 0 && i10 != -1) {
                return Math.round((i10 * (abs / ((iArr[position2] - i10) + 1))) + (this.f13577y.m() - this.f13577y.g(z10)));
            }
        }
        return 0;
    }

    private int w(RecyclerView.State state) {
        if (getChildCount() == 0) {
            return 0;
        }
        int b10 = state.b();
        View z10 = z(b10);
        View B = B(b10);
        if (state.b() == 0 || z10 == null || B == null) {
            return 0;
        }
        int findFirstVisibleItemPosition = findFirstVisibleItemPosition();
        return (int) ((Math.abs(this.f13577y.d(B) - this.f13577y.g(z10)) / ((findLastVisibleItemPosition() - findFirstVisibleItemPosition) + 1)) * state.b());
    }

    private void x() {
        if (this.f13577y != null) {
            return;
        }
        if (isMainAxisDirectionHorizontal()) {
            if (this.f13565e == 0) {
                this.f13577y = OrientationHelper.a(this);
                this.f13578z = OrientationHelper.c(this);
                return;
            }
            this.f13577y = OrientationHelper.c(this);
            this.f13578z = OrientationHelper.a(this);
        } else if (this.f13565e == 0) {
            this.f13577y = OrientationHelper.c(this);
            this.f13578z = OrientationHelper.a(this);
        } else {
            this.f13577y = OrientationHelper.a(this);
            this.f13578z = OrientationHelper.c(this);
        }
    }

    private int y(RecyclerView.Recycler recycler, RecyclerView.State state, d dVar) {
        if (dVar.f13601f != Integer.MIN_VALUE) {
            if (dVar.f13596a < 0) {
                d.q(dVar, dVar.f13596a);
            }
            S(recycler, dVar);
        }
        int i10 = dVar.f13596a;
        int i11 = dVar.f13596a;
        boolean isMainAxisDirectionHorizontal = isMainAxisDirectionHorizontal();
        int i12 = 0;
        while (true) {
            if ((i11 > 0 || this.f13575w.f13597b) && dVar.D(state, this.f13571s)) {
                FlexLine flexLine = (FlexLine) this.f13571s.get(dVar.f13598c);
                dVar.f13599d = flexLine.f13541o;
                i12 += P(flexLine, dVar);
                if (!isMainAxisDirectionHorizontal && this.f13569q) {
                    d.d(dVar, flexLine.a() * dVar.f13604i);
                } else {
                    d.c(dVar, flexLine.a() * dVar.f13604i);
                }
                i11 -= flexLine.a();
            }
        }
        d.i(dVar, i12);
        if (dVar.f13601f != Integer.MIN_VALUE) {
            d.q(dVar, i12);
            if (dVar.f13596a < 0) {
                d.q(dVar, dVar.f13596a);
            }
            S(recycler, dVar);
        }
        return i10 - dVar.f13596a;
    }

    private View z(int i10) {
        View E = E(0, getChildCount(), i10);
        if (E == null) {
            return null;
        }
        int i11 = this.f13572t.f13547c[getPosition(E)];
        if (i11 == -1) {
            return null;
        }
        return A(E, (FlexLine) this.f13571s.get(i11));
    }

    public void Y(int i10) {
        int i11 = this.f13567o;
        if (i11 != i10) {
            if (i11 == 4 || i10 == 4) {
                removeAllViews();
                t();
            }
            this.f13567o = i10;
            requestLayout();
        }
    }

    public void Z(int i10) {
        if (this.f13564d != i10) {
            removeAllViews();
            this.f13564d = i10;
            this.f13577y = null;
            this.f13578z = null;
            t();
            requestLayout();
        }
    }

    public void a0(int i10) {
        if (i10 != 2) {
            int i11 = this.f13565e;
            if (i11 != i10) {
                if (i11 == 0 || i10 == 0) {
                    removeAllViews();
                    t();
                }
                this.f13565e = i10;
                this.f13577y = null;
                this.f13578z = null;
                requestLayout();
                return;
            }
            return;
        }
        throw new UnsupportedOperationException("wrap_reverse is not supported in FlexboxLayoutManager");
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean canScrollHorizontally() {
        int i10;
        if (this.f13565e == 0) {
            return isMainAxisDirectionHorizontal();
        }
        if (isMainAxisDirectionHorizontal()) {
            int width = getWidth();
            View view = this.I;
            if (view != null) {
                i10 = view.getWidth();
            } else {
                i10 = 0;
            }
            if (width <= i10) {
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean canScrollVertically() {
        int i10;
        if (this.f13565e == 0) {
            return !isMainAxisDirectionHorizontal();
        }
        if (!isMainAxisDirectionHorizontal()) {
            int height = getHeight();
            View view = this.I;
            if (view != null) {
                i10 = view.getHeight();
            } else {
                i10 = 0;
            }
            if (height <= i10) {
                return false;
            }
        }
        return true;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean checkLayoutParams(RecyclerView.LayoutParams layoutParams) {
        return layoutParams instanceof c;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int computeHorizontalScrollExtent(RecyclerView.State state) {
        return u(state);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int computeHorizontalScrollOffset(RecyclerView.State state) {
        return v(state);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int computeHorizontalScrollRange(RecyclerView.State state) {
        return w(state);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.SmoothScroller.a
    public PointF computeScrollVectorForPosition(int i10) {
        View childAt;
        int i11;
        if (getChildCount() == 0 || (childAt = getChildAt(0)) == null) {
            return null;
        }
        if (i10 < getPosition(childAt)) {
            i11 = -1;
        } else {
            i11 = 1;
        }
        if (isMainAxisDirectionHorizontal()) {
            return new PointF(0.0f, i11);
        }
        return new PointF(i11, 0.0f);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int computeVerticalScrollExtent(RecyclerView.State state) {
        return u(state);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int computeVerticalScrollOffset(RecyclerView.State state) {
        return v(state);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int computeVerticalScrollRange(RecyclerView.State state) {
        return w(state);
    }

    public int findFirstVisibleItemPosition() {
        View D = D(0, getChildCount(), false);
        if (D == null) {
            return -1;
        }
        return getPosition(D);
    }

    public int findLastVisibleItemPosition() {
        View D = D(getChildCount() - 1, -1, false);
        if (D == null) {
            return -1;
        }
        return getPosition(D);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public RecyclerView.LayoutParams generateDefaultLayoutParams() {
        return new c(-2, -2);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public RecyclerView.LayoutParams generateLayoutParams(Context context, AttributeSet attributeSet) {
        return new c(context, attributeSet);
    }

    @Override // com.google.android.flexbox.a
    public int getAlignContent() {
        return 5;
    }

    @Override // com.google.android.flexbox.a
    public int getAlignItems() {
        return this.f13567o;
    }

    @Override // com.google.android.flexbox.a
    public int getChildHeightMeasureSpec(int i10, int i11, int i12) {
        return RecyclerView.LayoutManager.getChildMeasureSpec(getHeight(), getHeightMode(), i11, i12, canScrollVertically());
    }

    @Override // com.google.android.flexbox.a
    public int getChildWidthMeasureSpec(int i10, int i11, int i12) {
        return RecyclerView.LayoutManager.getChildMeasureSpec(getWidth(), getWidthMode(), i11, i12, canScrollHorizontally());
    }

    @Override // com.google.android.flexbox.a
    public int getDecorationLengthCrossAxis(View view) {
        int leftDecorationWidth;
        int rightDecorationWidth;
        if (isMainAxisDirectionHorizontal()) {
            leftDecorationWidth = getTopDecorationHeight(view);
            rightDecorationWidth = getBottomDecorationHeight(view);
        } else {
            leftDecorationWidth = getLeftDecorationWidth(view);
            rightDecorationWidth = getRightDecorationWidth(view);
        }
        return leftDecorationWidth + rightDecorationWidth;
    }

    @Override // com.google.android.flexbox.a
    public int getDecorationLengthMainAxis(View view, int i10, int i11) {
        int topDecorationHeight;
        int bottomDecorationHeight;
        if (isMainAxisDirectionHorizontal()) {
            topDecorationHeight = getLeftDecorationWidth(view);
            bottomDecorationHeight = getRightDecorationWidth(view);
        } else {
            topDecorationHeight = getTopDecorationHeight(view);
            bottomDecorationHeight = getBottomDecorationHeight(view);
        }
        return topDecorationHeight + bottomDecorationHeight;
    }

    @Override // com.google.android.flexbox.a
    public int getFlexDirection() {
        return this.f13564d;
    }

    @Override // com.google.android.flexbox.a
    public View getFlexItemAt(int i10) {
        View view = (View) this.G.get(i10);
        if (view != null) {
            return view;
        }
        return this.f13573u.o(i10);
    }

    @Override // com.google.android.flexbox.a
    public int getFlexItemCount() {
        return this.f13574v.b();
    }

    @Override // com.google.android.flexbox.a
    public List getFlexLinesInternal() {
        return this.f13571s;
    }

    @Override // com.google.android.flexbox.a
    public int getFlexWrap() {
        return this.f13565e;
    }

    @Override // com.google.android.flexbox.a
    public int getLargestMainSize() {
        if (this.f13571s.size() == 0) {
            return 0;
        }
        int size = this.f13571s.size();
        int i10 = Integer.MIN_VALUE;
        for (int i11 = 0; i11 < size; i11++) {
            i10 = Math.max(i10, ((FlexLine) this.f13571s.get(i11)).f13531e);
        }
        return i10;
    }

    @Override // com.google.android.flexbox.a
    public int getMaxLine() {
        return this.f13568p;
    }

    @Override // com.google.android.flexbox.a
    public View getReorderedFlexItemAt(int i10) {
        return getFlexItemAt(i10);
    }

    @Override // com.google.android.flexbox.a
    public int getSumOfCrossSize() {
        int size = this.f13571s.size();
        int i10 = 0;
        for (int i11 = 0; i11 < size; i11++) {
            i10 += ((FlexLine) this.f13571s.get(i11)).f13533g;
        }
        return i10;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean isAutoMeasureEnabled() {
        return true;
    }

    @Override // com.google.android.flexbox.a
    public boolean isMainAxisDirectionHorizontal() {
        int i10 = this.f13564d;
        if (i10 == 0 || i10 == 1) {
            return true;
        }
        return false;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onAdapterChanged(RecyclerView.Adapter adapter, RecyclerView.Adapter adapter2) {
        removeAllViews();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onAttachedToWindow(RecyclerView recyclerView) {
        super.onAttachedToWindow(recyclerView);
        this.I = (View) recyclerView.getParent();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onDetachedFromWindow(RecyclerView recyclerView, RecyclerView.Recycler recycler) {
        super.onDetachedFromWindow(recyclerView, recycler);
        if (this.F) {
            removeAndRecycleAllViews(recycler);
            recycler.c();
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onItemsAdded(RecyclerView recyclerView, int i10, int i11) {
        super.onItemsAdded(recyclerView, i10, i11);
        e0(i10);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onItemsMoved(RecyclerView recyclerView, int i10, int i11, int i12) {
        super.onItemsMoved(recyclerView, i10, i11, i12);
        e0(Math.min(i10, i11));
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onItemsRemoved(RecyclerView recyclerView, int i10, int i11) {
        super.onItemsRemoved(recyclerView, i10, i11);
        e0(i10);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onItemsUpdated(RecyclerView recyclerView, int i10, int i11, Object obj) {
        super.onItemsUpdated(recyclerView, i10, i11, obj);
        e0(i10);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onLayoutChildren(RecyclerView.Recycler recycler, RecyclerView.State state) {
        int i10;
        int i11;
        this.f13573u = recycler;
        this.f13574v = state;
        int b10 = state.b();
        if (b10 != 0 || !state.e()) {
            X();
            x();
            ensureLayoutState();
            this.f13572t.t(b10);
            this.f13572t.u(b10);
            this.f13572t.s(b10);
            this.f13575w.f13605j = false;
            e eVar = this.A;
            if (eVar != null && eVar.h(b10)) {
                this.B = this.A.f13606d;
            }
            if (!this.f13576x.f13584f || this.B != -1 || this.A != null) {
                this.f13576x.t();
                d0(state, this.f13576x);
                this.f13576x.f13584f = true;
            }
            detachAndScrapAttachedViews(recycler);
            if (this.f13576x.f13583e) {
                i0(this.f13576x, false, true);
            } else {
                h0(this.f13576x, false, true);
            }
            f0(b10);
            y(recycler, state, this.f13575w);
            if (this.f13576x.f13583e) {
                i11 = this.f13575w.f13600e;
                h0(this.f13576x, true, false);
                y(recycler, state, this.f13575w);
                i10 = this.f13575w.f13600e;
            } else {
                i10 = this.f13575w.f13600e;
                i0(this.f13576x, true, false);
                y(recycler, state, this.f13575w);
                i11 = this.f13575w.f13600e;
            }
            if (getChildCount() > 0) {
                if (this.f13576x.f13583e) {
                    G(i11 + F(i10, recycler, state, true), recycler, state, false);
                } else {
                    F(i10 + G(i11, recycler, state, true), recycler, state, false);
                }
            }
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onLayoutCompleted(RecyclerView.State state) {
        super.onLayoutCompleted(state);
        this.A = null;
        this.B = -1;
        this.C = Integer.MIN_VALUE;
        this.J = -1;
        this.f13576x.t();
        this.G.clear();
    }

    @Override // com.google.android.flexbox.a
    public void onNewFlexItemAdded(View view, int i10, int i11, FlexLine flexLine) {
        calculateItemDecorationsForChild(view, L);
        if (isMainAxisDirectionHorizontal()) {
            int leftDecorationWidth = getLeftDecorationWidth(view) + getRightDecorationWidth(view);
            flexLine.f13531e += leftDecorationWidth;
            flexLine.f13532f += leftDecorationWidth;
            return;
        }
        int topDecorationHeight = getTopDecorationHeight(view) + getBottomDecorationHeight(view);
        flexLine.f13531e += topDecorationHeight;
        flexLine.f13532f += topDecorationHeight;
    }

    @Override // com.google.android.flexbox.a
    public void onNewFlexLineAdded(FlexLine flexLine) {
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onRestoreInstanceState(Parcelable parcelable) {
        if (parcelable instanceof e) {
            this.A = (e) parcelable;
            requestLayout();
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public Parcelable onSaveInstanceState() {
        if (this.A != null) {
            return new e(this.A);
        }
        e eVar = new e();
        if (getChildCount() <= 0) {
            eVar.i();
            return eVar;
        }
        View I = I();
        eVar.f13606d = getPosition(I);
        eVar.f13607e = this.f13577y.g(I) - this.f13577y.m();
        return eVar;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int scrollHorizontallyBy(int i10, RecyclerView.Recycler recycler, RecyclerView.State state) {
        if (isMainAxisDirectionHorizontal() && this.f13565e != 0) {
            int N = N(i10);
            b.l(this.f13576x, N);
            this.f13578z.r(-N);
            return N;
        }
        int M = M(i10, recycler, state);
        this.G.clear();
        return M;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void scrollToPosition(int i10) {
        this.B = i10;
        this.C = Integer.MIN_VALUE;
        e eVar = this.A;
        if (eVar != null) {
            eVar.i();
        }
        requestLayout();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int scrollVerticallyBy(int i10, RecyclerView.Recycler recycler, RecyclerView.State state) {
        if (!isMainAxisDirectionHorizontal() && (this.f13565e != 0 || isMainAxisDirectionHorizontal())) {
            int N = N(i10);
            b.l(this.f13576x, N);
            this.f13578z.r(-N);
            return N;
        }
        int M = M(i10, recycler, state);
        this.G.clear();
        return M;
    }

    @Override // com.google.android.flexbox.a
    public void setFlexLines(List list) {
        this.f13571s = list;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void smoothScrollToPosition(RecyclerView recyclerView, RecyclerView.State state, int i10) {
        l lVar = new l(recyclerView.getContext());
        lVar.setTargetPosition(i10);
        startSmoothScroll(lVar);
    }

    @Override // com.google.android.flexbox.a
    public void updateViewCache(int i10, View view) {
        this.G.put(i10, view);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class e implements Parcelable {
        public static final Parcelable.Creator<e> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private int f13606d;

        /* renamed from: e  reason: collision with root package name */
        private int f13607e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        class a implements Parcelable.Creator {
            a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public e createFromParcel(Parcel parcel) {
                return new e(parcel);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public e[] newArray(int i10) {
                return new e[i10];
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public boolean h(int i10) {
            int i11 = this.f13606d;
            if (i11 >= 0 && i11 < i10) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void i() {
            this.f13606d = -1;
        }

        @Override // android.os.Parcelable
        public int describeContents() {
            return 0;
        }

        public String toString() {
            return "SavedState{mAnchorPosition=" + this.f13606d + ", mAnchorOffset=" + this.f13607e + '}';
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeInt(this.f13606d);
            parcel.writeInt(this.f13607e);
        }

        e() {
        }

        private e(Parcel parcel) {
            this.f13606d = parcel.readInt();
            this.f13607e = parcel.readInt();
        }

        private e(e eVar) {
            this.f13606d = eVar.f13606d;
            this.f13607e = eVar.f13607e;
        }
    }

    public FlexboxLayoutManager(Context context, int i10, int i11) {
        this.f13568p = -1;
        this.f13571s = new ArrayList();
        this.f13572t = new FlexboxHelper(this);
        this.f13576x = new b();
        this.B = -1;
        this.C = Integer.MIN_VALUE;
        this.D = Integer.MIN_VALUE;
        this.E = Integer.MIN_VALUE;
        this.G = new SparseArray();
        this.J = -1;
        this.K = new FlexboxHelper.FlexLinesResult();
        Z(i10);
        a0(i11);
        Y(4);
        this.H = context;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onItemsUpdated(RecyclerView recyclerView, int i10, int i11) {
        super.onItemsUpdated(recyclerView, i10, i11);
        e0(i10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c extends RecyclerView.LayoutParams implements com.google.android.flexbox.b {
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: p  reason: collision with root package name */
        private float f13587p;

        /* renamed from: q  reason: collision with root package name */
        private float f13588q;

        /* renamed from: r  reason: collision with root package name */
        private int f13589r;

        /* renamed from: s  reason: collision with root package name */
        private float f13590s;

        /* renamed from: t  reason: collision with root package name */
        private int f13591t;

        /* renamed from: u  reason: collision with root package name */
        private int f13592u;

        /* renamed from: v  reason: collision with root package name */
        private int f13593v;

        /* renamed from: w  reason: collision with root package name */
        private int f13594w;

        /* renamed from: x  reason: collision with root package name */
        private boolean f13595x;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        class a implements Parcelable.Creator {
            a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public c createFromParcel(Parcel parcel) {
                return new c(parcel);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public c[] newArray(int i10) {
                return new c[i10];
            }
        }

        public c(Context context, AttributeSet attributeSet) {
            super(context, attributeSet);
            this.f13587p = 0.0f;
            this.f13588q = 1.0f;
            this.f13589r = -1;
            this.f13590s = -1.0f;
            this.f13593v = 16777215;
            this.f13594w = 16777215;
        }

        @Override // com.google.android.flexbox.b
        public int A1() {
            return ((ViewGroup.MarginLayoutParams) this).bottomMargin;
        }

        @Override // com.google.android.flexbox.b
        public int C() {
            return ((ViewGroup.MarginLayoutParams) this).topMargin;
        }

        @Override // com.google.android.flexbox.b
        public int D1() {
            return ((ViewGroup.MarginLayoutParams) this).leftMargin;
        }

        @Override // com.google.android.flexbox.b
        public float F0() {
            return this.f13590s;
        }

        @Override // com.google.android.flexbox.b
        public void I(int i10) {
            this.f13592u = i10;
        }

        @Override // com.google.android.flexbox.b
        public float J() {
            return this.f13587p;
        }

        @Override // com.google.android.flexbox.b
        public boolean K0() {
            return this.f13595x;
        }

        @Override // com.google.android.flexbox.b
        public int V0() {
            return this.f13593v;
        }

        @Override // com.google.android.flexbox.b
        public int X1() {
            return ((ViewGroup.MarginLayoutParams) this).rightMargin;
        }

        @Override // com.google.android.flexbox.b
        public int a2() {
            return this.f13592u;
        }

        @Override // android.os.Parcelable
        public int describeContents() {
            return 0;
        }

        @Override // com.google.android.flexbox.b
        public int getHeight() {
            return ((ViewGroup.MarginLayoutParams) this).height;
        }

        @Override // com.google.android.flexbox.b
        public int getOrder() {
            return 1;
        }

        @Override // com.google.android.flexbox.b
        public int getWidth() {
            return ((ViewGroup.MarginLayoutParams) this).width;
        }

        @Override // com.google.android.flexbox.b
        public int h2() {
            return this.f13594w;
        }

        @Override // com.google.android.flexbox.b
        public int n() {
            return this.f13589r;
        }

        @Override // com.google.android.flexbox.b
        public float s() {
            return this.f13588q;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeFloat(this.f13587p);
            parcel.writeFloat(this.f13588q);
            parcel.writeInt(this.f13589r);
            parcel.writeFloat(this.f13590s);
            parcel.writeInt(this.f13591t);
            parcel.writeInt(this.f13592u);
            parcel.writeInt(this.f13593v);
            parcel.writeInt(this.f13594w);
            parcel.writeByte(this.f13595x ? (byte) 1 : (byte) 0);
            parcel.writeInt(((ViewGroup.MarginLayoutParams) this).bottomMargin);
            parcel.writeInt(((ViewGroup.MarginLayoutParams) this).leftMargin);
            parcel.writeInt(((ViewGroup.MarginLayoutParams) this).rightMargin);
            parcel.writeInt(((ViewGroup.MarginLayoutParams) this).topMargin);
            parcel.writeInt(((ViewGroup.MarginLayoutParams) this).height);
            parcel.writeInt(((ViewGroup.MarginLayoutParams) this).width);
        }

        @Override // com.google.android.flexbox.b
        public int z() {
            return this.f13591t;
        }

        @Override // com.google.android.flexbox.b
        public void z1(int i10) {
            this.f13591t = i10;
        }

        public c(int i10, int i11) {
            super(i10, i11);
            this.f13587p = 0.0f;
            this.f13588q = 1.0f;
            this.f13589r = -1;
            this.f13590s = -1.0f;
            this.f13593v = 16777215;
            this.f13594w = 16777215;
        }

        protected c(Parcel parcel) {
            super(-2, -2);
            this.f13587p = 0.0f;
            this.f13588q = 1.0f;
            this.f13589r = -1;
            this.f13590s = -1.0f;
            this.f13593v = 16777215;
            this.f13594w = 16777215;
            this.f13587p = parcel.readFloat();
            this.f13588q = parcel.readFloat();
            this.f13589r = parcel.readInt();
            this.f13590s = parcel.readFloat();
            this.f13591t = parcel.readInt();
            this.f13592u = parcel.readInt();
            this.f13593v = parcel.readInt();
            this.f13594w = parcel.readInt();
            this.f13595x = parcel.readByte() != 0;
            ((ViewGroup.MarginLayoutParams) this).bottomMargin = parcel.readInt();
            ((ViewGroup.MarginLayoutParams) this).leftMargin = parcel.readInt();
            ((ViewGroup.MarginLayoutParams) this).rightMargin = parcel.readInt();
            ((ViewGroup.MarginLayoutParams) this).topMargin = parcel.readInt();
            ((ViewGroup.MarginLayoutParams) this).height = parcel.readInt();
            ((ViewGroup.MarginLayoutParams) this).width = parcel.readInt();
        }
    }

    public FlexboxLayoutManager(Context context, AttributeSet attributeSet, int i10, int i11) {
        this.f13568p = -1;
        this.f13571s = new ArrayList();
        this.f13572t = new FlexboxHelper(this);
        this.f13576x = new b();
        this.B = -1;
        this.C = Integer.MIN_VALUE;
        this.D = Integer.MIN_VALUE;
        this.E = Integer.MIN_VALUE;
        this.G = new SparseArray();
        this.J = -1;
        this.K = new FlexboxHelper.FlexLinesResult();
        RecyclerView.LayoutManager.Properties properties = RecyclerView.LayoutManager.getProperties(context, attributeSet, i10, i11);
        int i12 = properties.f5256a;
        if (i12 != 0) {
            if (i12 == 1) {
                if (properties.f5258c) {
                    Z(3);
                } else {
                    Z(2);
                }
            }
        } else if (properties.f5258c) {
            Z(1);
        } else {
            Z(0);
        }
        a0(1);
        Y(4);
        this.H = context;
    }
}
