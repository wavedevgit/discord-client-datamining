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
    private int f14621d;

    /* renamed from: e  reason: collision with root package name */
    private int f14622e;

    /* renamed from: i  reason: collision with root package name */
    private int f14623i;

    /* renamed from: o  reason: collision with root package name */
    private int f14624o;

    /* renamed from: p  reason: collision with root package name */
    private int f14625p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f14626q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f14627r;

    /* renamed from: s  reason: collision with root package name */
    private List f14628s;

    /* renamed from: t  reason: collision with root package name */
    private final FlexboxHelper f14629t;

    /* renamed from: u  reason: collision with root package name */
    private RecyclerView.Recycler f14630u;

    /* renamed from: v  reason: collision with root package name */
    private RecyclerView.State f14631v;

    /* renamed from: w  reason: collision with root package name */
    private d f14632w;

    /* renamed from: x  reason: collision with root package name */
    private b f14633x;

    /* renamed from: y  reason: collision with root package name */
    private OrientationHelper f14634y;

    /* renamed from: z  reason: collision with root package name */
    private OrientationHelper f14635z;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b {

        /* renamed from: a  reason: collision with root package name */
        private int f14636a;

        /* renamed from: b  reason: collision with root package name */
        private int f14637b;

        /* renamed from: c  reason: collision with root package name */
        private int f14638c;

        /* renamed from: d  reason: collision with root package name */
        private int f14639d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f14640e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f14641f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f14642g;

        private b() {
            this.f14639d = 0;
        }

        static /* synthetic */ int l(b bVar, int i10) {
            int i11 = bVar.f14639d + i10;
            bVar.f14639d = i11;
            return i11;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void r() {
            int m10;
            int width;
            if (!FlexboxLayoutManager.this.isMainAxisDirectionHorizontal() && FlexboxLayoutManager.this.f14626q) {
                if (this.f14640e) {
                    width = FlexboxLayoutManager.this.f14634y.i();
                } else {
                    width = FlexboxLayoutManager.this.getWidth() - FlexboxLayoutManager.this.f14634y.m();
                }
                this.f14638c = width;
                return;
            }
            if (this.f14640e) {
                m10 = FlexboxLayoutManager.this.f14634y.i();
            } else {
                m10 = FlexboxLayoutManager.this.f14634y.m();
            }
            this.f14638c = m10;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void s(View view) {
            OrientationHelper orientationHelper = FlexboxLayoutManager.this.f14622e == 0 ? FlexboxLayoutManager.this.f14635z : FlexboxLayoutManager.this.f14634y;
            if (!FlexboxLayoutManager.this.isMainAxisDirectionHorizontal() && FlexboxLayoutManager.this.f14626q) {
                if (this.f14640e) {
                    this.f14638c = orientationHelper.g(view) + orientationHelper.o();
                } else {
                    this.f14638c = orientationHelper.d(view);
                }
            } else if (this.f14640e) {
                this.f14638c = orientationHelper.d(view) + orientationHelper.o();
            } else {
                this.f14638c = orientationHelper.g(view);
            }
            this.f14636a = FlexboxLayoutManager.this.getPosition(view);
            int i10 = 0;
            this.f14642g = false;
            int[] iArr = FlexboxLayoutManager.this.f14629t.f14604c;
            int i11 = this.f14636a;
            if (i11 == -1) {
                i11 = 0;
            }
            int i12 = iArr[i11];
            if (i12 != -1) {
                i10 = i12;
            }
            this.f14637b = i10;
            if (FlexboxLayoutManager.this.f14628s.size() > this.f14637b) {
                this.f14636a = ((FlexLine) FlexboxLayoutManager.this.f14628s.get(this.f14637b)).f14598o;
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void t() {
            this.f14636a = -1;
            this.f14637b = -1;
            this.f14638c = Integer.MIN_VALUE;
            boolean z10 = false;
            this.f14641f = false;
            this.f14642g = false;
            if (FlexboxLayoutManager.this.isMainAxisDirectionHorizontal()) {
                if (FlexboxLayoutManager.this.f14622e == 0) {
                    if (FlexboxLayoutManager.this.f14621d == 1) {
                        z10 = true;
                    }
                    this.f14640e = z10;
                    return;
                }
                if (FlexboxLayoutManager.this.f14622e == 2) {
                    z10 = true;
                }
                this.f14640e = z10;
            } else if (FlexboxLayoutManager.this.f14622e == 0) {
                if (FlexboxLayoutManager.this.f14621d == 3) {
                    z10 = true;
                }
                this.f14640e = z10;
            } else {
                if (FlexboxLayoutManager.this.f14622e == 2) {
                    z10 = true;
                }
                this.f14640e = z10;
            }
        }

        public String toString() {
            return "AnchorInfo{mPosition=" + this.f14636a + ", mFlexLinePosition=" + this.f14637b + ", mCoordinate=" + this.f14638c + ", mPerpendicularCoordinate=" + this.f14639d + ", mLayoutFromEnd=" + this.f14640e + ", mValid=" + this.f14641f + ", mAssignedFromSavedState=" + this.f14642g + '}';
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        private int f14653a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f14654b;

        /* renamed from: c  reason: collision with root package name */
        private int f14655c;

        /* renamed from: d  reason: collision with root package name */
        private int f14656d;

        /* renamed from: e  reason: collision with root package name */
        private int f14657e;

        /* renamed from: f  reason: collision with root package name */
        private int f14658f;

        /* renamed from: g  reason: collision with root package name */
        private int f14659g;

        /* renamed from: h  reason: collision with root package name */
        private int f14660h;

        /* renamed from: i  reason: collision with root package name */
        private int f14661i;

        /* renamed from: j  reason: collision with root package name */
        private boolean f14662j;

        private d() {
            this.f14660h = 1;
            this.f14661i = 1;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public boolean D(RecyclerView.State state, List list) {
            int i10;
            int i11 = this.f14656d;
            if (i11 >= 0 && i11 < state.b() && (i10 = this.f14655c) >= 0 && i10 < list.size()) {
                return true;
            }
            return false;
        }

        static /* synthetic */ int c(d dVar, int i10) {
            int i11 = dVar.f14657e + i10;
            dVar.f14657e = i11;
            return i11;
        }

        static /* synthetic */ int d(d dVar, int i10) {
            int i11 = dVar.f14657e - i10;
            dVar.f14657e = i11;
            return i11;
        }

        static /* synthetic */ int i(d dVar, int i10) {
            int i11 = dVar.f14653a - i10;
            dVar.f14653a = i11;
            return i11;
        }

        static /* synthetic */ int l(d dVar) {
            int i10 = dVar.f14655c;
            dVar.f14655c = i10 + 1;
            return i10;
        }

        static /* synthetic */ int m(d dVar) {
            int i10 = dVar.f14655c;
            dVar.f14655c = i10 - 1;
            return i10;
        }

        static /* synthetic */ int n(d dVar, int i10) {
            int i11 = dVar.f14655c + i10;
            dVar.f14655c = i11;
            return i11;
        }

        static /* synthetic */ int q(d dVar, int i10) {
            int i11 = dVar.f14658f + i10;
            dVar.f14658f = i11;
            return i11;
        }

        static /* synthetic */ int u(d dVar, int i10) {
            int i11 = dVar.f14656d + i10;
            dVar.f14656d = i11;
            return i11;
        }

        static /* synthetic */ int v(d dVar, int i10) {
            int i11 = dVar.f14656d - i10;
            dVar.f14656d = i11;
            return i11;
        }

        public String toString() {
            return "LayoutState{mAvailable=" + this.f14653a + ", mFlexLinePosition=" + this.f14655c + ", mPosition=" + this.f14656d + ", mOffset=" + this.f14657e + ", mScrollingOffset=" + this.f14658f + ", mLastScrollDelta=" + this.f14659g + ", mItemDirection=" + this.f14660h + ", mLayoutDirection=" + this.f14661i + '}';
        }
    }

    public FlexboxLayoutManager(Context context) {
        this(context, 0, 1);
    }

    private View A(View view, FlexLine flexLine) {
        boolean isMainAxisDirectionHorizontal = isMainAxisDirectionHorizontal();
        int i10 = flexLine.f14591h;
        for (int i11 = 1; i11 < i10; i11++) {
            View childAt = getChildAt(i11);
            if (childAt != null && childAt.getVisibility() != 8) {
                if (this.f14626q && !isMainAxisDirectionHorizontal) {
                    if (this.f14634y.d(view) >= this.f14634y.d(childAt)) {
                    }
                    view = childAt;
                } else {
                    if (this.f14634y.g(view) <= this.f14634y.g(childAt)) {
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
        return C(E, (FlexLine) this.f14628s.get(this.f14629t.f14604c[getPosition(E)]));
    }

    private View C(View view, FlexLine flexLine) {
        boolean isMainAxisDirectionHorizontal = isMainAxisDirectionHorizontal();
        int childCount = (getChildCount() - flexLine.f14591h) - 1;
        for (int childCount2 = getChildCount() - 2; childCount2 > childCount; childCount2--) {
            View childAt = getChildAt(childCount2);
            if (childAt != null && childAt.getVisibility() != 8) {
                if (this.f14626q && !isMainAxisDirectionHorizontal) {
                    if (this.f14634y.g(view) <= this.f14634y.g(childAt)) {
                    }
                    view = childAt;
                } else {
                    if (this.f14634y.d(view) >= this.f14634y.d(childAt)) {
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
        int m10 = this.f14634y.m();
        int i14 = this.f14634y.i();
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
                } else if (this.f14634y.g(childAt) >= m10 && this.f14634y.d(childAt) <= i14) {
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
        if (!isMainAxisDirectionHorizontal() && this.f14626q) {
            int m10 = i10 - this.f14634y.m();
            if (m10 <= 0) {
                return 0;
            }
            i11 = M(m10, recycler, state);
        } else {
            int i13 = this.f14634y.i() - i10;
            if (i13 <= 0) {
                return 0;
            }
            i11 = -M(-i13, recycler, state);
        }
        int i14 = i10 + i11;
        if (z10 && (i12 = this.f14634y.i() - i14) > 0) {
            this.f14634y.r(i12);
            return i12 + i11;
        }
        return i11;
    }

    private int G(int i10, RecyclerView.Recycler recycler, RecyclerView.State state, boolean z10) {
        int i11;
        int m10;
        if (!isMainAxisDirectionHorizontal() && this.f14626q) {
            int i12 = this.f14634y.i() - i10;
            if (i12 <= 0) {
                return 0;
            }
            i11 = M(-i12, recycler, state);
        } else {
            int m11 = i10 - this.f14634y.m();
            if (m11 <= 0) {
                return 0;
            }
            i11 = -M(m11, recycler, state);
        }
        int i13 = i10 + i11;
        if (z10 && (m10 = i13 - this.f14634y.m()) > 0) {
            this.f14634y.r(-m10);
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
        this.f14632w.f14662j = true;
        if (!isMainAxisDirectionHorizontal() && this.f14626q) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10 ? i10 <= 0 : i10 >= 0) {
            i11 = -1;
        }
        int abs = Math.abs(i10);
        g0(i11, abs);
        int y10 = this.f14632w.f14658f + y(recycler, state, this.f14632w);
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
        this.f14634y.r(-i10);
        this.f14632w.f14659g = i10;
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
                    return -Math.min((height2 + this.f14633x.f14639d) - height, abs);
                }
                if (this.f14633x.f14639d + i10 > 0) {
                    return -this.f14633x.f14639d;
                }
            } else if (i10 > 0) {
                return Math.min((height2 - this.f14633x.f14639d) - height, i10);
            } else {
                if (this.f14633x.f14639d + i10 < 0) {
                    return -this.f14633x.f14639d;
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
        if (!dVar.f14662j) {
            return;
        }
        if (dVar.f14661i == -1) {
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
        if (dVar.f14658f < 0 || (childCount = getChildCount()) == 0 || (childAt = getChildAt(childCount - 1)) == null || (i11 = this.f14629t.f14604c[getPosition(childAt)]) == -1) {
            return;
        }
        FlexLine flexLine = (FlexLine) this.f14628s.get(i11);
        int i12 = i10;
        while (true) {
            if (i12 < 0) {
                break;
            }
            View childAt2 = getChildAt(i12);
            if (childAt2 != null) {
                if (!r(childAt2, dVar.f14658f)) {
                    break;
                } else if (flexLine.f14598o != getPosition(childAt2)) {
                    continue;
                } else if (i11 <= 0) {
                    childCount = i12;
                    break;
                } else {
                    i11 += dVar.f14661i;
                    flexLine = (FlexLine) this.f14628s.get(i11);
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
        if (dVar.f14658f >= 0 && (childCount = getChildCount()) != 0 && (childAt = getChildAt(0)) != null) {
            int i10 = this.f14629t.f14604c[getPosition(childAt)];
            int i11 = -1;
            if (i10 == -1) {
                return;
            }
            FlexLine flexLine = (FlexLine) this.f14628s.get(i10);
            int i12 = 0;
            while (true) {
                if (i12 >= childCount) {
                    break;
                }
                View childAt2 = getChildAt(i12);
                if (childAt2 != null) {
                    if (!s(childAt2, dVar.f14658f)) {
                        break;
                    } else if (flexLine.f14599p != getPosition(childAt2)) {
                        continue;
                    } else if (i10 >= this.f14628s.size() - 1) {
                        i11 = i12;
                        break;
                    } else {
                        i10 += dVar.f14661i;
                        flexLine = (FlexLine) this.f14628s.get(i10);
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
        d dVar = this.f14632w;
        if (widthMode != 0 && widthMode != Integer.MIN_VALUE) {
            z10 = false;
        } else {
            z10 = true;
        }
        dVar.f14654b = z10;
    }

    private void X() {
        boolean z10;
        boolean z11;
        boolean z12;
        int layoutDirection = getLayoutDirection();
        int i10 = this.f14621d;
        boolean z13 = false;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        this.f14626q = false;
                        this.f14627r = false;
                        return;
                    }
                    if (layoutDirection == 1) {
                        z13 = true;
                    }
                    this.f14626q = z13;
                    if (this.f14622e == 2) {
                        this.f14626q = !z13;
                    }
                    this.f14627r = true;
                    return;
                }
                if (layoutDirection == 1) {
                    z12 = true;
                } else {
                    z12 = false;
                }
                this.f14626q = z12;
                if (this.f14622e == 2) {
                    this.f14626q = !z12;
                }
                this.f14627r = false;
                return;
            }
            if (layoutDirection != 1) {
                z11 = true;
            } else {
                z11 = false;
            }
            this.f14626q = z11;
            if (this.f14622e == 2) {
                z13 = true;
            }
            this.f14627r = z13;
            return;
        }
        if (layoutDirection == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f14626q = z10;
        if (this.f14622e == 2) {
            z13 = true;
        }
        this.f14627r = z13;
    }

    private boolean b0(RecyclerView.State state, b bVar) {
        View z10;
        int m10;
        if (getChildCount() == 0) {
            return false;
        }
        if (bVar.f14640e) {
            z10 = B(state.b());
        } else {
            z10 = z(state.b());
        }
        if (z10 != null) {
            bVar.s(z10);
            if (!state.e() && supportsPredictiveItemAnimations()) {
                if (this.f14634y.g(z10) >= this.f14634y.i() || this.f14634y.d(z10) < this.f14634y.m()) {
                    if (bVar.f14640e) {
                        m10 = this.f14634y.i();
                    } else {
                        m10 = this.f14634y.m();
                    }
                    bVar.f14638c = m10;
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
                bVar.f14636a = this.B;
                bVar.f14637b = this.f14629t.f14604c[bVar.f14636a];
                e eVar2 = this.A;
                if (eVar2 != null && eVar2.g(state.b())) {
                    bVar.f14638c = this.f14634y.m() + eVar.f14664e;
                    bVar.f14642g = true;
                    bVar.f14637b = -1;
                    return true;
                } else if (this.C == Integer.MIN_VALUE) {
                    View findViewByPosition = findViewByPosition(this.B);
                    if (findViewByPosition != null) {
                        if (this.f14634y.e(findViewByPosition) > this.f14634y.n()) {
                            bVar.r();
                            return true;
                        } else if (this.f14634y.g(findViewByPosition) - this.f14634y.m() < 0) {
                            bVar.f14638c = this.f14634y.m();
                            bVar.f14640e = false;
                            return true;
                        } else if (this.f14634y.i() - this.f14634y.d(findViewByPosition) < 0) {
                            bVar.f14638c = this.f14634y.i();
                            bVar.f14640e = true;
                            return true;
                        } else {
                            if (bVar.f14640e) {
                                g10 = this.f14634y.d(findViewByPosition) + this.f14634y.o();
                            } else {
                                g10 = this.f14634y.g(findViewByPosition);
                            }
                            bVar.f14638c = g10;
                        }
                    } else {
                        if (getChildCount() > 0 && (childAt = getChildAt(0)) != null) {
                            if (this.B < getPosition(childAt)) {
                                z10 = true;
                            }
                            bVar.f14640e = z10;
                        }
                        bVar.r();
                    }
                    return true;
                } else {
                    if (isMainAxisDirectionHorizontal() || !this.f14626q) {
                        bVar.f14638c = this.f14634y.m() + this.C;
                    } else {
                        bVar.f14638c = this.C - this.f14634y.j();
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
            bVar.f14636a = 0;
            bVar.f14637b = 0;
        }
    }

    private void e0(int i10) {
        if (i10 < findLastVisibleItemPosition()) {
            int childCount = getChildCount();
            this.f14629t.t(childCount);
            this.f14629t.u(childCount);
            this.f14629t.s(childCount);
            if (i10 < this.f14629t.f14604c.length) {
                this.J = i10;
                View I = I();
                if (I == null) {
                    return;
                }
                this.B = getPosition(I);
                if (!isMainAxisDirectionHorizontal() && this.f14626q) {
                    this.C = this.f14634y.d(I) + this.f14634y.j();
                } else {
                    this.C = this.f14634y.g(I) - this.f14634y.m();
                }
            }
        }
    }

    private void ensureLayoutState() {
        if (this.f14632w == null) {
            this.f14632w = new d();
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
            i11 = this.f14632w.f14654b ? this.H.getResources().getDisplayMetrics().heightPixels : this.f14632w.f14653a;
        } else {
            int i15 = this.E;
            if (i15 != Integer.MIN_VALUE && i15 != height) {
                z10 = true;
            }
            if (!this.f14632w.f14654b) {
                i11 = this.f14632w.f14653a;
            } else {
                i11 = this.H.getResources().getDisplayMetrics().widthPixels;
            }
        }
        int i16 = i11;
        this.D = width;
        this.E = height;
        int i17 = this.J;
        if (i17 == -1 && (this.B != -1 || z10)) {
            if (this.f14633x.f14640e) {
                return;
            }
            this.f14628s.clear();
            this.K.a();
            if (isMainAxisDirectionHorizontal()) {
                this.f14629t.e(this.K, makeMeasureSpec, makeMeasureSpec2, i16, this.f14633x.f14636a, this.f14628s);
            } else {
                this.f14629t.h(this.K, makeMeasureSpec, makeMeasureSpec2, i16, this.f14633x.f14636a, this.f14628s);
            }
            this.f14628s = this.K.f14607a;
            this.f14629t.p(makeMeasureSpec, makeMeasureSpec2);
            this.f14629t.X();
            b bVar = this.f14633x;
            bVar.f14637b = this.f14629t.f14604c[bVar.f14636a];
            this.f14632w.f14655c = this.f14633x.f14637b;
            return;
        }
        if (i17 == -1) {
            i12 = this.f14633x.f14636a;
        } else {
            i12 = Math.min(i17, this.f14633x.f14636a);
        }
        int i18 = i12;
        this.K.a();
        if (isMainAxisDirectionHorizontal()) {
            if (this.f14628s.size() > 0) {
                this.f14629t.j(this.f14628s, i18);
                this.f14629t.b(this.K, makeMeasureSpec, makeMeasureSpec2, i16, i18, this.f14633x.f14636a, this.f14628s);
                i13 = i18;
                this.f14628s = this.K.f14607a;
                this.f14629t.q(makeMeasureSpec, makeMeasureSpec2, i13);
                this.f14629t.Y(i13);
            }
            i13 = i18;
            this.f14629t.s(i10);
            this.f14629t.d(this.K, makeMeasureSpec, makeMeasureSpec2, i16, 0, this.f14628s);
            this.f14628s = this.K.f14607a;
            this.f14629t.q(makeMeasureSpec, makeMeasureSpec2, i13);
            this.f14629t.Y(i13);
        }
        i13 = i18;
        if (this.f14628s.size() > 0) {
            this.f14629t.j(this.f14628s, i13);
            i18 = i13;
            this.f14629t.b(this.K, makeMeasureSpec2, makeMeasureSpec, i16, i18, this.f14633x.f14636a, this.f14628s);
            makeMeasureSpec2 = makeMeasureSpec2;
            makeMeasureSpec = makeMeasureSpec;
            i13 = i18;
            this.f14628s = this.K.f14607a;
            this.f14629t.q(makeMeasureSpec, makeMeasureSpec2, i13);
            this.f14629t.Y(i13);
        }
        this.f14629t.s(i10);
        this.f14629t.g(this.K, makeMeasureSpec, makeMeasureSpec2, i16, 0, this.f14628s);
        this.f14628s = this.K.f14607a;
        this.f14629t.q(makeMeasureSpec, makeMeasureSpec2, i13);
        this.f14629t.Y(i13);
    }

    private void g0(int i10, int i11) {
        boolean z10;
        int i12;
        this.f14632w.f14661i = i10;
        boolean isMainAxisDirectionHorizontal = isMainAxisDirectionHorizontal();
        int makeMeasureSpec = View.MeasureSpec.makeMeasureSpec(getWidth(), getWidthMode());
        int makeMeasureSpec2 = View.MeasureSpec.makeMeasureSpec(getHeight(), getHeightMode());
        if (!isMainAxisDirectionHorizontal && this.f14626q) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (i10 == 1) {
            View childAt = getChildAt(getChildCount() - 1);
            if (childAt != null) {
                this.f14632w.f14657e = this.f14634y.d(childAt);
                int position = getPosition(childAt);
                View C = C(childAt, (FlexLine) this.f14628s.get(this.f14629t.f14604c[position]));
                this.f14632w.f14660h = 1;
                d dVar = this.f14632w;
                dVar.f14656d = position + dVar.f14660h;
                if (this.f14629t.f14604c.length <= this.f14632w.f14656d) {
                    this.f14632w.f14655c = -1;
                } else {
                    d dVar2 = this.f14632w;
                    dVar2.f14655c = this.f14629t.f14604c[dVar2.f14656d];
                }
                if (z10) {
                    this.f14632w.f14657e = this.f14634y.g(C);
                    this.f14632w.f14658f = (-this.f14634y.g(C)) + this.f14634y.m();
                    d dVar3 = this.f14632w;
                    dVar3.f14658f = Math.max(dVar3.f14658f, 0);
                } else {
                    this.f14632w.f14657e = this.f14634y.d(C);
                    this.f14632w.f14658f = this.f14634y.d(C) - this.f14634y.i();
                }
                if ((this.f14632w.f14655c == -1 || this.f14632w.f14655c > this.f14628s.size() - 1) && this.f14632w.f14656d <= getFlexItemCount()) {
                    int i13 = i11 - this.f14632w.f14658f;
                    this.K.a();
                    if (i13 > 0) {
                        if (isMainAxisDirectionHorizontal) {
                            this.f14629t.d(this.K, makeMeasureSpec, makeMeasureSpec2, i13, this.f14632w.f14656d, this.f14628s);
                        } else {
                            this.f14629t.g(this.K, makeMeasureSpec, makeMeasureSpec2, i13, this.f14632w.f14656d, this.f14628s);
                        }
                        this.f14629t.q(makeMeasureSpec, makeMeasureSpec2, this.f14632w.f14656d);
                        this.f14629t.Y(this.f14632w.f14656d);
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
            this.f14632w.f14657e = this.f14634y.g(childAt2);
            int position2 = getPosition(childAt2);
            View A = A(childAt2, (FlexLine) this.f14628s.get(this.f14629t.f14604c[position2]));
            this.f14632w.f14660h = 1;
            int i14 = this.f14629t.f14604c[position2];
            if (i14 == -1) {
                i14 = 0;
            }
            if (i14 <= 0) {
                this.f14632w.f14656d = -1;
            } else {
                this.f14632w.f14656d = position2 - ((FlexLine) this.f14628s.get(i14 - 1)).b();
            }
            d dVar4 = this.f14632w;
            if (i14 > 0) {
                i12 = i14 - 1;
            } else {
                i12 = 0;
            }
            dVar4.f14655c = i12;
            if (z10) {
                this.f14632w.f14657e = this.f14634y.d(A);
                this.f14632w.f14658f = this.f14634y.d(A) - this.f14634y.i();
                d dVar5 = this.f14632w;
                dVar5.f14658f = Math.max(dVar5.f14658f, 0);
            } else {
                this.f14632w.f14657e = this.f14634y.g(A);
                this.f14632w.f14658f = (-this.f14634y.g(A)) + this.f14634y.m();
            }
        }
        d dVar6 = this.f14632w;
        dVar6.f14653a = i11 - dVar6.f14658f;
    }

    private void h0(b bVar, boolean z10, boolean z11) {
        if (!z11) {
            this.f14632w.f14654b = false;
        } else {
            W();
        }
        if (!isMainAxisDirectionHorizontal() && this.f14626q) {
            this.f14632w.f14653a = bVar.f14638c - getPaddingRight();
        } else {
            this.f14632w.f14653a = this.f14634y.i() - bVar.f14638c;
        }
        this.f14632w.f14656d = bVar.f14636a;
        this.f14632w.f14660h = 1;
        this.f14632w.f14661i = 1;
        this.f14632w.f14657e = bVar.f14638c;
        this.f14632w.f14658f = Integer.MIN_VALUE;
        this.f14632w.f14655c = bVar.f14637b;
        if (z10 && this.f14628s.size() > 1 && bVar.f14637b >= 0 && bVar.f14637b < this.f14628s.size() - 1) {
            d.l(this.f14632w);
            d.u(this.f14632w, ((FlexLine) this.f14628s.get(bVar.f14637b)).b());
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
            this.f14632w.f14654b = false;
        } else {
            W();
        }
        if (!isMainAxisDirectionHorizontal() && this.f14626q) {
            this.f14632w.f14653a = (this.I.getWidth() - bVar.f14638c) - this.f14634y.m();
        } else {
            this.f14632w.f14653a = bVar.f14638c - this.f14634y.m();
        }
        this.f14632w.f14656d = bVar.f14636a;
        this.f14632w.f14660h = 1;
        this.f14632w.f14661i = -1;
        this.f14632w.f14657e = bVar.f14638c;
        this.f14632w.f14658f = Integer.MIN_VALUE;
        this.f14632w.f14655c = bVar.f14637b;
        if (z10 && bVar.f14637b > 0 && this.f14628s.size() > bVar.f14637b) {
            d.m(this.f14632w);
            d.v(this.f14632w, ((FlexLine) this.f14628s.get(bVar.f14637b)).b());
        }
    }

    private boolean r(View view, int i10) {
        if (!isMainAxisDirectionHorizontal() && this.f14626q) {
            if (this.f14634y.d(view) > i10) {
                return false;
            }
            return true;
        } else if (this.f14634y.g(view) < this.f14634y.h() - i10) {
            return false;
        } else {
            return true;
        }
    }

    private boolean s(View view, int i10) {
        if (!isMainAxisDirectionHorizontal() && this.f14626q) {
            if (this.f14634y.h() - this.f14634y.g(view) > i10) {
                return false;
            }
            return true;
        } else if (this.f14634y.d(view) > i10) {
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
        this.f14628s.clear();
        this.f14633x.t();
        this.f14633x.f14639d = 0;
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
        return Math.min(this.f14634y.n(), this.f14634y.d(B) - this.f14634y.g(z10));
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
            int abs = Math.abs(this.f14634y.d(B) - this.f14634y.g(z10));
            int[] iArr = this.f14629t.f14604c;
            int i10 = iArr[position];
            if (i10 != 0 && i10 != -1) {
                return Math.round((i10 * (abs / ((iArr[position2] - i10) + 1))) + (this.f14634y.m() - this.f14634y.g(z10)));
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
        return (int) ((Math.abs(this.f14634y.d(B) - this.f14634y.g(z10)) / ((findLastVisibleItemPosition() - findFirstVisibleItemPosition) + 1)) * state.b());
    }

    private void x() {
        if (this.f14634y != null) {
            return;
        }
        if (isMainAxisDirectionHorizontal()) {
            if (this.f14622e == 0) {
                this.f14634y = OrientationHelper.a(this);
                this.f14635z = OrientationHelper.c(this);
                return;
            }
            this.f14634y = OrientationHelper.c(this);
            this.f14635z = OrientationHelper.a(this);
        } else if (this.f14622e == 0) {
            this.f14634y = OrientationHelper.c(this);
            this.f14635z = OrientationHelper.a(this);
        } else {
            this.f14634y = OrientationHelper.a(this);
            this.f14635z = OrientationHelper.c(this);
        }
    }

    private int y(RecyclerView.Recycler recycler, RecyclerView.State state, d dVar) {
        if (dVar.f14658f != Integer.MIN_VALUE) {
            if (dVar.f14653a < 0) {
                d.q(dVar, dVar.f14653a);
            }
            S(recycler, dVar);
        }
        int i10 = dVar.f14653a;
        int i11 = dVar.f14653a;
        boolean isMainAxisDirectionHorizontal = isMainAxisDirectionHorizontal();
        int i12 = 0;
        while (true) {
            if ((i11 > 0 || this.f14632w.f14654b) && dVar.D(state, this.f14628s)) {
                FlexLine flexLine = (FlexLine) this.f14628s.get(dVar.f14655c);
                dVar.f14656d = flexLine.f14598o;
                i12 += P(flexLine, dVar);
                if (!isMainAxisDirectionHorizontal && this.f14626q) {
                    d.d(dVar, flexLine.a() * dVar.f14661i);
                } else {
                    d.c(dVar, flexLine.a() * dVar.f14661i);
                }
                i11 -= flexLine.a();
            }
        }
        d.i(dVar, i12);
        if (dVar.f14658f != Integer.MIN_VALUE) {
            d.q(dVar, i12);
            if (dVar.f14653a < 0) {
                d.q(dVar, dVar.f14653a);
            }
            S(recycler, dVar);
        }
        return i10 - dVar.f14653a;
    }

    private View z(int i10) {
        View E = E(0, getChildCount(), i10);
        if (E == null) {
            return null;
        }
        int i11 = this.f14629t.f14604c[getPosition(E)];
        if (i11 == -1) {
            return null;
        }
        return A(E, (FlexLine) this.f14628s.get(i11));
    }

    public void Y(int i10) {
        int i11 = this.f14624o;
        if (i11 != i10) {
            if (i11 == 4 || i10 == 4) {
                removeAllViews();
                t();
            }
            this.f14624o = i10;
            requestLayout();
        }
    }

    public void Z(int i10) {
        if (this.f14621d != i10) {
            removeAllViews();
            this.f14621d = i10;
            this.f14634y = null;
            this.f14635z = null;
            t();
            requestLayout();
        }
    }

    public void a0(int i10) {
        if (i10 != 2) {
            int i11 = this.f14622e;
            if (i11 != i10) {
                if (i11 == 0 || i10 == 0) {
                    removeAllViews();
                    t();
                }
                this.f14622e = i10;
                this.f14634y = null;
                this.f14635z = null;
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
        if (this.f14622e == 0) {
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
        if (this.f14622e == 0) {
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
        return this.f14624o;
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
        return this.f14621d;
    }

    @Override // com.google.android.flexbox.a
    public View getFlexItemAt(int i10) {
        View view = (View) this.G.get(i10);
        if (view != null) {
            return view;
        }
        return this.f14630u.o(i10);
    }

    @Override // com.google.android.flexbox.a
    public int getFlexItemCount() {
        return this.f14631v.b();
    }

    @Override // com.google.android.flexbox.a
    public List getFlexLinesInternal() {
        return this.f14628s;
    }

    @Override // com.google.android.flexbox.a
    public int getFlexWrap() {
        return this.f14622e;
    }

    @Override // com.google.android.flexbox.a
    public int getLargestMainSize() {
        if (this.f14628s.size() == 0) {
            return 0;
        }
        int size = this.f14628s.size();
        int i10 = Integer.MIN_VALUE;
        for (int i11 = 0; i11 < size; i11++) {
            i10 = Math.max(i10, ((FlexLine) this.f14628s.get(i11)).f14588e);
        }
        return i10;
    }

    @Override // com.google.android.flexbox.a
    public int getMaxLine() {
        return this.f14625p;
    }

    @Override // com.google.android.flexbox.a
    public View getReorderedFlexItemAt(int i10) {
        return getFlexItemAt(i10);
    }

    @Override // com.google.android.flexbox.a
    public int getSumOfCrossSize() {
        int size = this.f14628s.size();
        int i10 = 0;
        for (int i11 = 0; i11 < size; i11++) {
            i10 += ((FlexLine) this.f14628s.get(i11)).f14590g;
        }
        return i10;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean isAutoMeasureEnabled() {
        return true;
    }

    @Override // com.google.android.flexbox.a
    public boolean isMainAxisDirectionHorizontal() {
        int i10 = this.f14621d;
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
        this.f14630u = recycler;
        this.f14631v = state;
        int b10 = state.b();
        if (b10 != 0 || !state.e()) {
            X();
            x();
            ensureLayoutState();
            this.f14629t.t(b10);
            this.f14629t.u(b10);
            this.f14629t.s(b10);
            this.f14632w.f14662j = false;
            e eVar = this.A;
            if (eVar != null && eVar.g(b10)) {
                this.B = this.A.f14663d;
            }
            if (!this.f14633x.f14641f || this.B != -1 || this.A != null) {
                this.f14633x.t();
                d0(state, this.f14633x);
                this.f14633x.f14641f = true;
            }
            detachAndScrapAttachedViews(recycler);
            if (this.f14633x.f14640e) {
                i0(this.f14633x, false, true);
            } else {
                h0(this.f14633x, false, true);
            }
            f0(b10);
            y(recycler, state, this.f14632w);
            if (this.f14633x.f14640e) {
                i11 = this.f14632w.f14657e;
                h0(this.f14633x, true, false);
                y(recycler, state, this.f14632w);
                i10 = this.f14632w.f14657e;
            } else {
                i10 = this.f14632w.f14657e;
                i0(this.f14633x, true, false);
                y(recycler, state, this.f14632w);
                i11 = this.f14632w.f14657e;
            }
            if (getChildCount() > 0) {
                if (this.f14633x.f14640e) {
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
        this.f14633x.t();
        this.G.clear();
    }

    @Override // com.google.android.flexbox.a
    public void onNewFlexItemAdded(View view, int i10, int i11, FlexLine flexLine) {
        calculateItemDecorationsForChild(view, L);
        if (isMainAxisDirectionHorizontal()) {
            int leftDecorationWidth = getLeftDecorationWidth(view) + getRightDecorationWidth(view);
            flexLine.f14588e += leftDecorationWidth;
            flexLine.f14589f += leftDecorationWidth;
            return;
        }
        int topDecorationHeight = getTopDecorationHeight(view) + getBottomDecorationHeight(view);
        flexLine.f14588e += topDecorationHeight;
        flexLine.f14589f += topDecorationHeight;
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
        eVar.f14663d = getPosition(I);
        eVar.f14664e = this.f14634y.g(I) - this.f14634y.m();
        return eVar;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int scrollHorizontallyBy(int i10, RecyclerView.Recycler recycler, RecyclerView.State state) {
        if (isMainAxisDirectionHorizontal() && this.f14622e != 0) {
            int N = N(i10);
            b.l(this.f14633x, N);
            this.f14635z.r(-N);
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
        if (!isMainAxisDirectionHorizontal() && (this.f14622e != 0 || isMainAxisDirectionHorizontal())) {
            int N = N(i10);
            b.l(this.f14633x, N);
            this.f14635z.r(-N);
            return N;
        }
        int M = M(i10, recycler, state);
        this.G.clear();
        return M;
    }

    @Override // com.google.android.flexbox.a
    public void setFlexLines(List list) {
        this.f14628s = list;
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
        private int f14663d;

        /* renamed from: e  reason: collision with root package name */
        private int f14664e;

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
        public boolean g(int i10) {
            int i11 = this.f14663d;
            if (i11 >= 0 && i11 < i10) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void i() {
            this.f14663d = -1;
        }

        @Override // android.os.Parcelable
        public int describeContents() {
            return 0;
        }

        public String toString() {
            return "SavedState{mAnchorPosition=" + this.f14663d + ", mAnchorOffset=" + this.f14664e + '}';
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeInt(this.f14663d);
            parcel.writeInt(this.f14664e);
        }

        e() {
        }

        private e(Parcel parcel) {
            this.f14663d = parcel.readInt();
            this.f14664e = parcel.readInt();
        }

        private e(e eVar) {
            this.f14663d = eVar.f14663d;
            this.f14664e = eVar.f14664e;
        }
    }

    public FlexboxLayoutManager(Context context, int i10, int i11) {
        this.f14625p = -1;
        this.f14628s = new ArrayList();
        this.f14629t = new FlexboxHelper(this);
        this.f14633x = new b();
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
        private float f14644p;

        /* renamed from: q  reason: collision with root package name */
        private float f14645q;

        /* renamed from: r  reason: collision with root package name */
        private int f14646r;

        /* renamed from: s  reason: collision with root package name */
        private float f14647s;

        /* renamed from: t  reason: collision with root package name */
        private int f14648t;

        /* renamed from: u  reason: collision with root package name */
        private int f14649u;

        /* renamed from: v  reason: collision with root package name */
        private int f14650v;

        /* renamed from: w  reason: collision with root package name */
        private int f14651w;

        /* renamed from: x  reason: collision with root package name */
        private boolean f14652x;

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
            this.f14644p = 0.0f;
            this.f14645q = 1.0f;
            this.f14646r = -1;
            this.f14647s = -1.0f;
            this.f14650v = 16777215;
            this.f14651w = 16777215;
        }

        @Override // com.google.android.flexbox.b
        public float A0() {
            return this.f14644p;
        }

        @Override // com.google.android.flexbox.b
        public void A1(int i10) {
            this.f14648t = i10;
        }

        @Override // com.google.android.flexbox.b
        public int B() {
            return this.f14646r;
        }

        @Override // com.google.android.flexbox.b
        public int B1() {
            return ((ViewGroup.MarginLayoutParams) this).bottomMargin;
        }

        @Override // com.google.android.flexbox.b
        public float E() {
            return this.f14645q;
        }

        @Override // com.google.android.flexbox.b
        public int E1() {
            return ((ViewGroup.MarginLayoutParams) this).leftMargin;
        }

        @Override // com.google.android.flexbox.b
        public float F0() {
            return this.f14647s;
        }

        @Override // com.google.android.flexbox.b
        public int L() {
            return this.f14648t;
        }

        @Override // com.google.android.flexbox.b
        public boolean M0() {
            return this.f14652x;
        }

        @Override // com.google.android.flexbox.b
        public int N() {
            return ((ViewGroup.MarginLayoutParams) this).topMargin;
        }

        @Override // com.google.android.flexbox.b
        public void V(int i10) {
            this.f14649u = i10;
        }

        @Override // com.google.android.flexbox.b
        public int X0() {
            return this.f14650v;
        }

        @Override // com.google.android.flexbox.b
        public int Y1() {
            return ((ViewGroup.MarginLayoutParams) this).rightMargin;
        }

        @Override // com.google.android.flexbox.b
        public int b2() {
            return this.f14649u;
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
            return this.f14651w;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeFloat(this.f14644p);
            parcel.writeFloat(this.f14645q);
            parcel.writeInt(this.f14646r);
            parcel.writeFloat(this.f14647s);
            parcel.writeInt(this.f14648t);
            parcel.writeInt(this.f14649u);
            parcel.writeInt(this.f14650v);
            parcel.writeInt(this.f14651w);
            parcel.writeByte(this.f14652x ? (byte) 1 : (byte) 0);
            parcel.writeInt(((ViewGroup.MarginLayoutParams) this).bottomMargin);
            parcel.writeInt(((ViewGroup.MarginLayoutParams) this).leftMargin);
            parcel.writeInt(((ViewGroup.MarginLayoutParams) this).rightMargin);
            parcel.writeInt(((ViewGroup.MarginLayoutParams) this).topMargin);
            parcel.writeInt(((ViewGroup.MarginLayoutParams) this).height);
            parcel.writeInt(((ViewGroup.MarginLayoutParams) this).width);
        }

        public c(int i10, int i11) {
            super(i10, i11);
            this.f14644p = 0.0f;
            this.f14645q = 1.0f;
            this.f14646r = -1;
            this.f14647s = -1.0f;
            this.f14650v = 16777215;
            this.f14651w = 16777215;
        }

        protected c(Parcel parcel) {
            super(-2, -2);
            this.f14644p = 0.0f;
            this.f14645q = 1.0f;
            this.f14646r = -1;
            this.f14647s = -1.0f;
            this.f14650v = 16777215;
            this.f14651w = 16777215;
            this.f14644p = parcel.readFloat();
            this.f14645q = parcel.readFloat();
            this.f14646r = parcel.readInt();
            this.f14647s = parcel.readFloat();
            this.f14648t = parcel.readInt();
            this.f14649u = parcel.readInt();
            this.f14650v = parcel.readInt();
            this.f14651w = parcel.readInt();
            this.f14652x = parcel.readByte() != 0;
            ((ViewGroup.MarginLayoutParams) this).bottomMargin = parcel.readInt();
            ((ViewGroup.MarginLayoutParams) this).leftMargin = parcel.readInt();
            ((ViewGroup.MarginLayoutParams) this).rightMargin = parcel.readInt();
            ((ViewGroup.MarginLayoutParams) this).topMargin = parcel.readInt();
            ((ViewGroup.MarginLayoutParams) this).height = parcel.readInt();
            ((ViewGroup.MarginLayoutParams) this).width = parcel.readInt();
        }
    }

    public FlexboxLayoutManager(Context context, AttributeSet attributeSet, int i10, int i11) {
        this.f14625p = -1;
        this.f14628s = new ArrayList();
        this.f14629t = new FlexboxHelper(this);
        this.f14633x = new b();
        this.B = -1;
        this.C = Integer.MIN_VALUE;
        this.D = Integer.MIN_VALUE;
        this.E = Integer.MIN_VALUE;
        this.G = new SparseArray();
        this.J = -1;
        this.K = new FlexboxHelper.FlexLinesResult();
        RecyclerView.LayoutManager.Properties properties = RecyclerView.LayoutManager.getProperties(context, attributeSet, i10, i11);
        int i12 = properties.f4802a;
        if (i12 != 0) {
            if (i12 == 1) {
                if (properties.f4804c) {
                    Z(3);
                } else {
                    Z(2);
                }
            }
        } else if (properties.f4804c) {
            Z(1);
        } else {
            Z(0);
        }
        a0(1);
        Y(4);
        this.H = context;
    }
}
