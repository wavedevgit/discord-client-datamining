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
    private int f14250d;

    /* renamed from: e  reason: collision with root package name */
    private int f14251e;

    /* renamed from: i  reason: collision with root package name */
    private int f14252i;

    /* renamed from: o  reason: collision with root package name */
    private int f14253o;

    /* renamed from: p  reason: collision with root package name */
    private int f14254p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f14255q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f14256r;

    /* renamed from: s  reason: collision with root package name */
    private List f14257s;

    /* renamed from: t  reason: collision with root package name */
    private final FlexboxHelper f14258t;

    /* renamed from: u  reason: collision with root package name */
    private RecyclerView.Recycler f14259u;

    /* renamed from: v  reason: collision with root package name */
    private RecyclerView.State f14260v;

    /* renamed from: w  reason: collision with root package name */
    private d f14261w;

    /* renamed from: x  reason: collision with root package name */
    private b f14262x;

    /* renamed from: y  reason: collision with root package name */
    private OrientationHelper f14263y;

    /* renamed from: z  reason: collision with root package name */
    private OrientationHelper f14264z;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b {

        /* renamed from: a  reason: collision with root package name */
        private int f14265a;

        /* renamed from: b  reason: collision with root package name */
        private int f14266b;

        /* renamed from: c  reason: collision with root package name */
        private int f14267c;

        /* renamed from: d  reason: collision with root package name */
        private int f14268d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f14269e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f14270f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f14271g;

        private b() {
            this.f14268d = 0;
        }

        static /* synthetic */ int l(b bVar, int i10) {
            int i11 = bVar.f14268d + i10;
            bVar.f14268d = i11;
            return i11;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void r() {
            int m10;
            int width;
            if (!FlexboxLayoutManager.this.isMainAxisDirectionHorizontal() && FlexboxLayoutManager.this.f14255q) {
                if (this.f14269e) {
                    width = FlexboxLayoutManager.this.f14263y.i();
                } else {
                    width = FlexboxLayoutManager.this.getWidth() - FlexboxLayoutManager.this.f14263y.m();
                }
                this.f14267c = width;
                return;
            }
            if (this.f14269e) {
                m10 = FlexboxLayoutManager.this.f14263y.i();
            } else {
                m10 = FlexboxLayoutManager.this.f14263y.m();
            }
            this.f14267c = m10;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void s(View view) {
            OrientationHelper orientationHelper = FlexboxLayoutManager.this.f14251e == 0 ? FlexboxLayoutManager.this.f14264z : FlexboxLayoutManager.this.f14263y;
            if (!FlexboxLayoutManager.this.isMainAxisDirectionHorizontal() && FlexboxLayoutManager.this.f14255q) {
                if (this.f14269e) {
                    this.f14267c = orientationHelper.g(view) + orientationHelper.o();
                } else {
                    this.f14267c = orientationHelper.d(view);
                }
            } else if (this.f14269e) {
                this.f14267c = orientationHelper.d(view) + orientationHelper.o();
            } else {
                this.f14267c = orientationHelper.g(view);
            }
            this.f14265a = FlexboxLayoutManager.this.getPosition(view);
            int i10 = 0;
            this.f14271g = false;
            int[] iArr = FlexboxLayoutManager.this.f14258t.f14233c;
            int i11 = this.f14265a;
            if (i11 == -1) {
                i11 = 0;
            }
            int i12 = iArr[i11];
            if (i12 != -1) {
                i10 = i12;
            }
            this.f14266b = i10;
            if (FlexboxLayoutManager.this.f14257s.size() > this.f14266b) {
                this.f14265a = ((FlexLine) FlexboxLayoutManager.this.f14257s.get(this.f14266b)).f14227o;
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void t() {
            this.f14265a = -1;
            this.f14266b = -1;
            this.f14267c = Integer.MIN_VALUE;
            boolean z10 = false;
            this.f14270f = false;
            this.f14271g = false;
            if (FlexboxLayoutManager.this.isMainAxisDirectionHorizontal()) {
                if (FlexboxLayoutManager.this.f14251e == 0) {
                    if (FlexboxLayoutManager.this.f14250d == 1) {
                        z10 = true;
                    }
                    this.f14269e = z10;
                    return;
                }
                if (FlexboxLayoutManager.this.f14251e == 2) {
                    z10 = true;
                }
                this.f14269e = z10;
            } else if (FlexboxLayoutManager.this.f14251e == 0) {
                if (FlexboxLayoutManager.this.f14250d == 3) {
                    z10 = true;
                }
                this.f14269e = z10;
            } else {
                if (FlexboxLayoutManager.this.f14251e == 2) {
                    z10 = true;
                }
                this.f14269e = z10;
            }
        }

        public String toString() {
            return "AnchorInfo{mPosition=" + this.f14265a + ", mFlexLinePosition=" + this.f14266b + ", mCoordinate=" + this.f14267c + ", mPerpendicularCoordinate=" + this.f14268d + ", mLayoutFromEnd=" + this.f14269e + ", mValid=" + this.f14270f + ", mAssignedFromSavedState=" + this.f14271g + '}';
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        private int f14282a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f14283b;

        /* renamed from: c  reason: collision with root package name */
        private int f14284c;

        /* renamed from: d  reason: collision with root package name */
        private int f14285d;

        /* renamed from: e  reason: collision with root package name */
        private int f14286e;

        /* renamed from: f  reason: collision with root package name */
        private int f14287f;

        /* renamed from: g  reason: collision with root package name */
        private int f14288g;

        /* renamed from: h  reason: collision with root package name */
        private int f14289h;

        /* renamed from: i  reason: collision with root package name */
        private int f14290i;

        /* renamed from: j  reason: collision with root package name */
        private boolean f14291j;

        private d() {
            this.f14289h = 1;
            this.f14290i = 1;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public boolean D(RecyclerView.State state, List list) {
            int i10;
            int i11 = this.f14285d;
            if (i11 >= 0 && i11 < state.b() && (i10 = this.f14284c) >= 0 && i10 < list.size()) {
                return true;
            }
            return false;
        }

        static /* synthetic */ int c(d dVar, int i10) {
            int i11 = dVar.f14286e + i10;
            dVar.f14286e = i11;
            return i11;
        }

        static /* synthetic */ int d(d dVar, int i10) {
            int i11 = dVar.f14286e - i10;
            dVar.f14286e = i11;
            return i11;
        }

        static /* synthetic */ int i(d dVar, int i10) {
            int i11 = dVar.f14282a - i10;
            dVar.f14282a = i11;
            return i11;
        }

        static /* synthetic */ int l(d dVar) {
            int i10 = dVar.f14284c;
            dVar.f14284c = i10 + 1;
            return i10;
        }

        static /* synthetic */ int m(d dVar) {
            int i10 = dVar.f14284c;
            dVar.f14284c = i10 - 1;
            return i10;
        }

        static /* synthetic */ int n(d dVar, int i10) {
            int i11 = dVar.f14284c + i10;
            dVar.f14284c = i11;
            return i11;
        }

        static /* synthetic */ int q(d dVar, int i10) {
            int i11 = dVar.f14287f + i10;
            dVar.f14287f = i11;
            return i11;
        }

        static /* synthetic */ int u(d dVar, int i10) {
            int i11 = dVar.f14285d + i10;
            dVar.f14285d = i11;
            return i11;
        }

        static /* synthetic */ int v(d dVar, int i10) {
            int i11 = dVar.f14285d - i10;
            dVar.f14285d = i11;
            return i11;
        }

        public String toString() {
            return "LayoutState{mAvailable=" + this.f14282a + ", mFlexLinePosition=" + this.f14284c + ", mPosition=" + this.f14285d + ", mOffset=" + this.f14286e + ", mScrollingOffset=" + this.f14287f + ", mLastScrollDelta=" + this.f14288g + ", mItemDirection=" + this.f14289h + ", mLayoutDirection=" + this.f14290i + '}';
        }
    }

    public FlexboxLayoutManager(Context context) {
        this(context, 0, 1);
    }

    private View A(View view, FlexLine flexLine) {
        boolean isMainAxisDirectionHorizontal = isMainAxisDirectionHorizontal();
        int i10 = flexLine.f14220h;
        for (int i11 = 1; i11 < i10; i11++) {
            View childAt = getChildAt(i11);
            if (childAt != null && childAt.getVisibility() != 8) {
                if (this.f14255q && !isMainAxisDirectionHorizontal) {
                    if (this.f14263y.d(view) >= this.f14263y.d(childAt)) {
                    }
                    view = childAt;
                } else {
                    if (this.f14263y.g(view) <= this.f14263y.g(childAt)) {
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
        return C(E, (FlexLine) this.f14257s.get(this.f14258t.f14233c[getPosition(E)]));
    }

    private View C(View view, FlexLine flexLine) {
        boolean isMainAxisDirectionHorizontal = isMainAxisDirectionHorizontal();
        int childCount = (getChildCount() - flexLine.f14220h) - 1;
        for (int childCount2 = getChildCount() - 2; childCount2 > childCount; childCount2--) {
            View childAt = getChildAt(childCount2);
            if (childAt != null && childAt.getVisibility() != 8) {
                if (this.f14255q && !isMainAxisDirectionHorizontal) {
                    if (this.f14263y.g(view) <= this.f14263y.g(childAt)) {
                    }
                    view = childAt;
                } else {
                    if (this.f14263y.d(view) >= this.f14263y.d(childAt)) {
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
        int m10 = this.f14263y.m();
        int i14 = this.f14263y.i();
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
                } else if (this.f14263y.g(childAt) >= m10 && this.f14263y.d(childAt) <= i14) {
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
        if (!isMainAxisDirectionHorizontal() && this.f14255q) {
            int m10 = i10 - this.f14263y.m();
            if (m10 <= 0) {
                return 0;
            }
            i11 = M(m10, recycler, state);
        } else {
            int i13 = this.f14263y.i() - i10;
            if (i13 <= 0) {
                return 0;
            }
            i11 = -M(-i13, recycler, state);
        }
        int i14 = i10 + i11;
        if (z10 && (i12 = this.f14263y.i() - i14) > 0) {
            this.f14263y.r(i12);
            return i12 + i11;
        }
        return i11;
    }

    private int G(int i10, RecyclerView.Recycler recycler, RecyclerView.State state, boolean z10) {
        int i11;
        int m10;
        if (!isMainAxisDirectionHorizontal() && this.f14255q) {
            int i12 = this.f14263y.i() - i10;
            if (i12 <= 0) {
                return 0;
            }
            i11 = M(-i12, recycler, state);
        } else {
            int m11 = i10 - this.f14263y.m();
            if (m11 <= 0) {
                return 0;
            }
            i11 = -M(m11, recycler, state);
        }
        int i13 = i10 + i11;
        if (z10 && (m10 = i13 - this.f14263y.m()) > 0) {
            this.f14263y.r(-m10);
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
        this.f14261w.f14291j = true;
        if (!isMainAxisDirectionHorizontal() && this.f14255q) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10 ? i10 <= 0 : i10 >= 0) {
            i11 = -1;
        }
        int abs = Math.abs(i10);
        g0(i11, abs);
        int y10 = this.f14261w.f14287f + y(recycler, state, this.f14261w);
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
        this.f14263y.r(-i10);
        this.f14261w.f14288g = i10;
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
                    return -Math.min((height2 + this.f14262x.f14268d) - height, abs);
                }
                if (this.f14262x.f14268d + i10 > 0) {
                    return -this.f14262x.f14268d;
                }
            } else if (i10 > 0) {
                return Math.min((height2 - this.f14262x.f14268d) - height, i10);
            } else {
                if (this.f14262x.f14268d + i10 < 0) {
                    return -this.f14262x.f14268d;
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
        if (!dVar.f14291j) {
            return;
        }
        if (dVar.f14290i == -1) {
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
        if (dVar.f14287f < 0 || (childCount = getChildCount()) == 0 || (childAt = getChildAt(childCount - 1)) == null || (i11 = this.f14258t.f14233c[getPosition(childAt)]) == -1) {
            return;
        }
        FlexLine flexLine = (FlexLine) this.f14257s.get(i11);
        int i12 = i10;
        while (true) {
            if (i12 < 0) {
                break;
            }
            View childAt2 = getChildAt(i12);
            if (childAt2 != null) {
                if (!r(childAt2, dVar.f14287f)) {
                    break;
                } else if (flexLine.f14227o != getPosition(childAt2)) {
                    continue;
                } else if (i11 <= 0) {
                    childCount = i12;
                    break;
                } else {
                    i11 += dVar.f14290i;
                    flexLine = (FlexLine) this.f14257s.get(i11);
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
        if (dVar.f14287f >= 0 && (childCount = getChildCount()) != 0 && (childAt = getChildAt(0)) != null) {
            int i10 = this.f14258t.f14233c[getPosition(childAt)];
            int i11 = -1;
            if (i10 == -1) {
                return;
            }
            FlexLine flexLine = (FlexLine) this.f14257s.get(i10);
            int i12 = 0;
            while (true) {
                if (i12 >= childCount) {
                    break;
                }
                View childAt2 = getChildAt(i12);
                if (childAt2 != null) {
                    if (!s(childAt2, dVar.f14287f)) {
                        break;
                    } else if (flexLine.f14228p != getPosition(childAt2)) {
                        continue;
                    } else if (i10 >= this.f14257s.size() - 1) {
                        i11 = i12;
                        break;
                    } else {
                        i10 += dVar.f14290i;
                        flexLine = (FlexLine) this.f14257s.get(i10);
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
        d dVar = this.f14261w;
        if (widthMode != 0 && widthMode != Integer.MIN_VALUE) {
            z10 = false;
        } else {
            z10 = true;
        }
        dVar.f14283b = z10;
    }

    private void X() {
        boolean z10;
        boolean z11;
        boolean z12;
        int layoutDirection = getLayoutDirection();
        int i10 = this.f14250d;
        boolean z13 = false;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        this.f14255q = false;
                        this.f14256r = false;
                        return;
                    }
                    if (layoutDirection == 1) {
                        z13 = true;
                    }
                    this.f14255q = z13;
                    if (this.f14251e == 2) {
                        this.f14255q = !z13;
                    }
                    this.f14256r = true;
                    return;
                }
                if (layoutDirection == 1) {
                    z12 = true;
                } else {
                    z12 = false;
                }
                this.f14255q = z12;
                if (this.f14251e == 2) {
                    this.f14255q = !z12;
                }
                this.f14256r = false;
                return;
            }
            if (layoutDirection != 1) {
                z11 = true;
            } else {
                z11 = false;
            }
            this.f14255q = z11;
            if (this.f14251e == 2) {
                z13 = true;
            }
            this.f14256r = z13;
            return;
        }
        if (layoutDirection == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f14255q = z10;
        if (this.f14251e == 2) {
            z13 = true;
        }
        this.f14256r = z13;
    }

    private boolean b0(RecyclerView.State state, b bVar) {
        View z10;
        int m10;
        if (getChildCount() == 0) {
            return false;
        }
        if (bVar.f14269e) {
            z10 = B(state.b());
        } else {
            z10 = z(state.b());
        }
        if (z10 != null) {
            bVar.s(z10);
            if (!state.e() && supportsPredictiveItemAnimations()) {
                if (this.f14263y.g(z10) >= this.f14263y.i() || this.f14263y.d(z10) < this.f14263y.m()) {
                    if (bVar.f14269e) {
                        m10 = this.f14263y.i();
                    } else {
                        m10 = this.f14263y.m();
                    }
                    bVar.f14267c = m10;
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
                bVar.f14265a = this.B;
                bVar.f14266b = this.f14258t.f14233c[bVar.f14265a];
                e eVar2 = this.A;
                if (eVar2 != null && eVar2.g(state.b())) {
                    bVar.f14267c = this.f14263y.m() + eVar.f14293e;
                    bVar.f14271g = true;
                    bVar.f14266b = -1;
                    return true;
                } else if (this.C == Integer.MIN_VALUE) {
                    View findViewByPosition = findViewByPosition(this.B);
                    if (findViewByPosition != null) {
                        if (this.f14263y.e(findViewByPosition) > this.f14263y.n()) {
                            bVar.r();
                            return true;
                        } else if (this.f14263y.g(findViewByPosition) - this.f14263y.m() < 0) {
                            bVar.f14267c = this.f14263y.m();
                            bVar.f14269e = false;
                            return true;
                        } else if (this.f14263y.i() - this.f14263y.d(findViewByPosition) < 0) {
                            bVar.f14267c = this.f14263y.i();
                            bVar.f14269e = true;
                            return true;
                        } else {
                            if (bVar.f14269e) {
                                g10 = this.f14263y.d(findViewByPosition) + this.f14263y.o();
                            } else {
                                g10 = this.f14263y.g(findViewByPosition);
                            }
                            bVar.f14267c = g10;
                        }
                    } else {
                        if (getChildCount() > 0 && (childAt = getChildAt(0)) != null) {
                            if (this.B < getPosition(childAt)) {
                                z10 = true;
                            }
                            bVar.f14269e = z10;
                        }
                        bVar.r();
                    }
                    return true;
                } else {
                    if (isMainAxisDirectionHorizontal() || !this.f14255q) {
                        bVar.f14267c = this.f14263y.m() + this.C;
                    } else {
                        bVar.f14267c = this.C - this.f14263y.j();
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
            bVar.f14265a = 0;
            bVar.f14266b = 0;
        }
    }

    private void e0(int i10) {
        if (i10 < findLastVisibleItemPosition()) {
            int childCount = getChildCount();
            this.f14258t.t(childCount);
            this.f14258t.u(childCount);
            this.f14258t.s(childCount);
            if (i10 < this.f14258t.f14233c.length) {
                this.J = i10;
                View I = I();
                if (I == null) {
                    return;
                }
                this.B = getPosition(I);
                if (!isMainAxisDirectionHorizontal() && this.f14255q) {
                    this.C = this.f14263y.d(I) + this.f14263y.j();
                } else {
                    this.C = this.f14263y.g(I) - this.f14263y.m();
                }
            }
        }
    }

    private void ensureLayoutState() {
        if (this.f14261w == null) {
            this.f14261w = new d();
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
            i11 = this.f14261w.f14283b ? this.H.getResources().getDisplayMetrics().heightPixels : this.f14261w.f14282a;
        } else {
            int i15 = this.E;
            if (i15 != Integer.MIN_VALUE && i15 != height) {
                z10 = true;
            }
            if (!this.f14261w.f14283b) {
                i11 = this.f14261w.f14282a;
            } else {
                i11 = this.H.getResources().getDisplayMetrics().widthPixels;
            }
        }
        int i16 = i11;
        this.D = width;
        this.E = height;
        int i17 = this.J;
        if (i17 == -1 && (this.B != -1 || z10)) {
            if (this.f14262x.f14269e) {
                return;
            }
            this.f14257s.clear();
            this.K.a();
            if (isMainAxisDirectionHorizontal()) {
                this.f14258t.e(this.K, makeMeasureSpec, makeMeasureSpec2, i16, this.f14262x.f14265a, this.f14257s);
            } else {
                this.f14258t.h(this.K, makeMeasureSpec, makeMeasureSpec2, i16, this.f14262x.f14265a, this.f14257s);
            }
            this.f14257s = this.K.f14236a;
            this.f14258t.p(makeMeasureSpec, makeMeasureSpec2);
            this.f14258t.X();
            b bVar = this.f14262x;
            bVar.f14266b = this.f14258t.f14233c[bVar.f14265a];
            this.f14261w.f14284c = this.f14262x.f14266b;
            return;
        }
        if (i17 == -1) {
            i12 = this.f14262x.f14265a;
        } else {
            i12 = Math.min(i17, this.f14262x.f14265a);
        }
        int i18 = i12;
        this.K.a();
        if (isMainAxisDirectionHorizontal()) {
            if (this.f14257s.size() > 0) {
                this.f14258t.j(this.f14257s, i18);
                this.f14258t.b(this.K, makeMeasureSpec, makeMeasureSpec2, i16, i18, this.f14262x.f14265a, this.f14257s);
                i13 = i18;
                this.f14257s = this.K.f14236a;
                this.f14258t.q(makeMeasureSpec, makeMeasureSpec2, i13);
                this.f14258t.Y(i13);
            }
            i13 = i18;
            this.f14258t.s(i10);
            this.f14258t.d(this.K, makeMeasureSpec, makeMeasureSpec2, i16, 0, this.f14257s);
            this.f14257s = this.K.f14236a;
            this.f14258t.q(makeMeasureSpec, makeMeasureSpec2, i13);
            this.f14258t.Y(i13);
        }
        i13 = i18;
        if (this.f14257s.size() > 0) {
            this.f14258t.j(this.f14257s, i13);
            i18 = i13;
            this.f14258t.b(this.K, makeMeasureSpec2, makeMeasureSpec, i16, i18, this.f14262x.f14265a, this.f14257s);
            makeMeasureSpec2 = makeMeasureSpec2;
            makeMeasureSpec = makeMeasureSpec;
            i13 = i18;
            this.f14257s = this.K.f14236a;
            this.f14258t.q(makeMeasureSpec, makeMeasureSpec2, i13);
            this.f14258t.Y(i13);
        }
        this.f14258t.s(i10);
        this.f14258t.g(this.K, makeMeasureSpec, makeMeasureSpec2, i16, 0, this.f14257s);
        this.f14257s = this.K.f14236a;
        this.f14258t.q(makeMeasureSpec, makeMeasureSpec2, i13);
        this.f14258t.Y(i13);
    }

    private void g0(int i10, int i11) {
        boolean z10;
        int i12;
        this.f14261w.f14290i = i10;
        boolean isMainAxisDirectionHorizontal = isMainAxisDirectionHorizontal();
        int makeMeasureSpec = View.MeasureSpec.makeMeasureSpec(getWidth(), getWidthMode());
        int makeMeasureSpec2 = View.MeasureSpec.makeMeasureSpec(getHeight(), getHeightMode());
        if (!isMainAxisDirectionHorizontal && this.f14255q) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (i10 == 1) {
            View childAt = getChildAt(getChildCount() - 1);
            if (childAt != null) {
                this.f14261w.f14286e = this.f14263y.d(childAt);
                int position = getPosition(childAt);
                View C = C(childAt, (FlexLine) this.f14257s.get(this.f14258t.f14233c[position]));
                this.f14261w.f14289h = 1;
                d dVar = this.f14261w;
                dVar.f14285d = position + dVar.f14289h;
                if (this.f14258t.f14233c.length <= this.f14261w.f14285d) {
                    this.f14261w.f14284c = -1;
                } else {
                    d dVar2 = this.f14261w;
                    dVar2.f14284c = this.f14258t.f14233c[dVar2.f14285d];
                }
                if (z10) {
                    this.f14261w.f14286e = this.f14263y.g(C);
                    this.f14261w.f14287f = (-this.f14263y.g(C)) + this.f14263y.m();
                    d dVar3 = this.f14261w;
                    dVar3.f14287f = Math.max(dVar3.f14287f, 0);
                } else {
                    this.f14261w.f14286e = this.f14263y.d(C);
                    this.f14261w.f14287f = this.f14263y.d(C) - this.f14263y.i();
                }
                if ((this.f14261w.f14284c == -1 || this.f14261w.f14284c > this.f14257s.size() - 1) && this.f14261w.f14285d <= getFlexItemCount()) {
                    int i13 = i11 - this.f14261w.f14287f;
                    this.K.a();
                    if (i13 > 0) {
                        if (isMainAxisDirectionHorizontal) {
                            this.f14258t.d(this.K, makeMeasureSpec, makeMeasureSpec2, i13, this.f14261w.f14285d, this.f14257s);
                        } else {
                            this.f14258t.g(this.K, makeMeasureSpec, makeMeasureSpec2, i13, this.f14261w.f14285d, this.f14257s);
                        }
                        this.f14258t.q(makeMeasureSpec, makeMeasureSpec2, this.f14261w.f14285d);
                        this.f14258t.Y(this.f14261w.f14285d);
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
            this.f14261w.f14286e = this.f14263y.g(childAt2);
            int position2 = getPosition(childAt2);
            View A = A(childAt2, (FlexLine) this.f14257s.get(this.f14258t.f14233c[position2]));
            this.f14261w.f14289h = 1;
            int i14 = this.f14258t.f14233c[position2];
            if (i14 == -1) {
                i14 = 0;
            }
            if (i14 <= 0) {
                this.f14261w.f14285d = -1;
            } else {
                this.f14261w.f14285d = position2 - ((FlexLine) this.f14257s.get(i14 - 1)).b();
            }
            d dVar4 = this.f14261w;
            if (i14 > 0) {
                i12 = i14 - 1;
            } else {
                i12 = 0;
            }
            dVar4.f14284c = i12;
            if (z10) {
                this.f14261w.f14286e = this.f14263y.d(A);
                this.f14261w.f14287f = this.f14263y.d(A) - this.f14263y.i();
                d dVar5 = this.f14261w;
                dVar5.f14287f = Math.max(dVar5.f14287f, 0);
            } else {
                this.f14261w.f14286e = this.f14263y.g(A);
                this.f14261w.f14287f = (-this.f14263y.g(A)) + this.f14263y.m();
            }
        }
        d dVar6 = this.f14261w;
        dVar6.f14282a = i11 - dVar6.f14287f;
    }

    private void h0(b bVar, boolean z10, boolean z11) {
        if (!z11) {
            this.f14261w.f14283b = false;
        } else {
            W();
        }
        if (!isMainAxisDirectionHorizontal() && this.f14255q) {
            this.f14261w.f14282a = bVar.f14267c - getPaddingRight();
        } else {
            this.f14261w.f14282a = this.f14263y.i() - bVar.f14267c;
        }
        this.f14261w.f14285d = bVar.f14265a;
        this.f14261w.f14289h = 1;
        this.f14261w.f14290i = 1;
        this.f14261w.f14286e = bVar.f14267c;
        this.f14261w.f14287f = Integer.MIN_VALUE;
        this.f14261w.f14284c = bVar.f14266b;
        if (z10 && this.f14257s.size() > 1 && bVar.f14266b >= 0 && bVar.f14266b < this.f14257s.size() - 1) {
            d.l(this.f14261w);
            d.u(this.f14261w, ((FlexLine) this.f14257s.get(bVar.f14266b)).b());
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
            this.f14261w.f14283b = false;
        } else {
            W();
        }
        if (!isMainAxisDirectionHorizontal() && this.f14255q) {
            this.f14261w.f14282a = (this.I.getWidth() - bVar.f14267c) - this.f14263y.m();
        } else {
            this.f14261w.f14282a = bVar.f14267c - this.f14263y.m();
        }
        this.f14261w.f14285d = bVar.f14265a;
        this.f14261w.f14289h = 1;
        this.f14261w.f14290i = -1;
        this.f14261w.f14286e = bVar.f14267c;
        this.f14261w.f14287f = Integer.MIN_VALUE;
        this.f14261w.f14284c = bVar.f14266b;
        if (z10 && bVar.f14266b > 0 && this.f14257s.size() > bVar.f14266b) {
            d.m(this.f14261w);
            d.v(this.f14261w, ((FlexLine) this.f14257s.get(bVar.f14266b)).b());
        }
    }

    private boolean r(View view, int i10) {
        if (!isMainAxisDirectionHorizontal() && this.f14255q) {
            if (this.f14263y.d(view) > i10) {
                return false;
            }
            return true;
        } else if (this.f14263y.g(view) < this.f14263y.h() - i10) {
            return false;
        } else {
            return true;
        }
    }

    private boolean s(View view, int i10) {
        if (!isMainAxisDirectionHorizontal() && this.f14255q) {
            if (this.f14263y.h() - this.f14263y.g(view) > i10) {
                return false;
            }
            return true;
        } else if (this.f14263y.d(view) > i10) {
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
        this.f14257s.clear();
        this.f14262x.t();
        this.f14262x.f14268d = 0;
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
        return Math.min(this.f14263y.n(), this.f14263y.d(B) - this.f14263y.g(z10));
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
            int abs = Math.abs(this.f14263y.d(B) - this.f14263y.g(z10));
            int[] iArr = this.f14258t.f14233c;
            int i10 = iArr[position];
            if (i10 != 0 && i10 != -1) {
                return Math.round((i10 * (abs / ((iArr[position2] - i10) + 1))) + (this.f14263y.m() - this.f14263y.g(z10)));
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
        return (int) ((Math.abs(this.f14263y.d(B) - this.f14263y.g(z10)) / ((findLastVisibleItemPosition() - findFirstVisibleItemPosition) + 1)) * state.b());
    }

    private void x() {
        if (this.f14263y != null) {
            return;
        }
        if (isMainAxisDirectionHorizontal()) {
            if (this.f14251e == 0) {
                this.f14263y = OrientationHelper.a(this);
                this.f14264z = OrientationHelper.c(this);
                return;
            }
            this.f14263y = OrientationHelper.c(this);
            this.f14264z = OrientationHelper.a(this);
        } else if (this.f14251e == 0) {
            this.f14263y = OrientationHelper.c(this);
            this.f14264z = OrientationHelper.a(this);
        } else {
            this.f14263y = OrientationHelper.a(this);
            this.f14264z = OrientationHelper.c(this);
        }
    }

    private int y(RecyclerView.Recycler recycler, RecyclerView.State state, d dVar) {
        if (dVar.f14287f != Integer.MIN_VALUE) {
            if (dVar.f14282a < 0) {
                d.q(dVar, dVar.f14282a);
            }
            S(recycler, dVar);
        }
        int i10 = dVar.f14282a;
        int i11 = dVar.f14282a;
        boolean isMainAxisDirectionHorizontal = isMainAxisDirectionHorizontal();
        int i12 = 0;
        while (true) {
            if ((i11 > 0 || this.f14261w.f14283b) && dVar.D(state, this.f14257s)) {
                FlexLine flexLine = (FlexLine) this.f14257s.get(dVar.f14284c);
                dVar.f14285d = flexLine.f14227o;
                i12 += P(flexLine, dVar);
                if (!isMainAxisDirectionHorizontal && this.f14255q) {
                    d.d(dVar, flexLine.a() * dVar.f14290i);
                } else {
                    d.c(dVar, flexLine.a() * dVar.f14290i);
                }
                i11 -= flexLine.a();
            }
        }
        d.i(dVar, i12);
        if (dVar.f14287f != Integer.MIN_VALUE) {
            d.q(dVar, i12);
            if (dVar.f14282a < 0) {
                d.q(dVar, dVar.f14282a);
            }
            S(recycler, dVar);
        }
        return i10 - dVar.f14282a;
    }

    private View z(int i10) {
        View E = E(0, getChildCount(), i10);
        if (E == null) {
            return null;
        }
        int i11 = this.f14258t.f14233c[getPosition(E)];
        if (i11 == -1) {
            return null;
        }
        return A(E, (FlexLine) this.f14257s.get(i11));
    }

    public void Y(int i10) {
        int i11 = this.f14253o;
        if (i11 != i10) {
            if (i11 == 4 || i10 == 4) {
                removeAllViews();
                t();
            }
            this.f14253o = i10;
            requestLayout();
        }
    }

    public void Z(int i10) {
        if (this.f14250d != i10) {
            removeAllViews();
            this.f14250d = i10;
            this.f14263y = null;
            this.f14264z = null;
            t();
            requestLayout();
        }
    }

    public void a0(int i10) {
        if (i10 != 2) {
            int i11 = this.f14251e;
            if (i11 != i10) {
                if (i11 == 0 || i10 == 0) {
                    removeAllViews();
                    t();
                }
                this.f14251e = i10;
                this.f14263y = null;
                this.f14264z = null;
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
        if (this.f14251e == 0) {
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
        if (this.f14251e == 0) {
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
        return this.f14253o;
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
        return this.f14250d;
    }

    @Override // com.google.android.flexbox.a
    public View getFlexItemAt(int i10) {
        View view = (View) this.G.get(i10);
        if (view != null) {
            return view;
        }
        return this.f14259u.o(i10);
    }

    @Override // com.google.android.flexbox.a
    public int getFlexItemCount() {
        return this.f14260v.b();
    }

    @Override // com.google.android.flexbox.a
    public List getFlexLinesInternal() {
        return this.f14257s;
    }

    @Override // com.google.android.flexbox.a
    public int getFlexWrap() {
        return this.f14251e;
    }

    @Override // com.google.android.flexbox.a
    public int getLargestMainSize() {
        if (this.f14257s.size() == 0) {
            return 0;
        }
        int size = this.f14257s.size();
        int i10 = Integer.MIN_VALUE;
        for (int i11 = 0; i11 < size; i11++) {
            i10 = Math.max(i10, ((FlexLine) this.f14257s.get(i11)).f14217e);
        }
        return i10;
    }

    @Override // com.google.android.flexbox.a
    public int getMaxLine() {
        return this.f14254p;
    }

    @Override // com.google.android.flexbox.a
    public View getReorderedFlexItemAt(int i10) {
        return getFlexItemAt(i10);
    }

    @Override // com.google.android.flexbox.a
    public int getSumOfCrossSize() {
        int size = this.f14257s.size();
        int i10 = 0;
        for (int i11 = 0; i11 < size; i11++) {
            i10 += ((FlexLine) this.f14257s.get(i11)).f14219g;
        }
        return i10;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean isAutoMeasureEnabled() {
        return true;
    }

    @Override // com.google.android.flexbox.a
    public boolean isMainAxisDirectionHorizontal() {
        int i10 = this.f14250d;
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
        this.f14259u = recycler;
        this.f14260v = state;
        int b10 = state.b();
        if (b10 != 0 || !state.e()) {
            X();
            x();
            ensureLayoutState();
            this.f14258t.t(b10);
            this.f14258t.u(b10);
            this.f14258t.s(b10);
            this.f14261w.f14291j = false;
            e eVar = this.A;
            if (eVar != null && eVar.g(b10)) {
                this.B = this.A.f14292d;
            }
            if (!this.f14262x.f14270f || this.B != -1 || this.A != null) {
                this.f14262x.t();
                d0(state, this.f14262x);
                this.f14262x.f14270f = true;
            }
            detachAndScrapAttachedViews(recycler);
            if (this.f14262x.f14269e) {
                i0(this.f14262x, false, true);
            } else {
                h0(this.f14262x, false, true);
            }
            f0(b10);
            y(recycler, state, this.f14261w);
            if (this.f14262x.f14269e) {
                i11 = this.f14261w.f14286e;
                h0(this.f14262x, true, false);
                y(recycler, state, this.f14261w);
                i10 = this.f14261w.f14286e;
            } else {
                i10 = this.f14261w.f14286e;
                i0(this.f14262x, true, false);
                y(recycler, state, this.f14261w);
                i11 = this.f14261w.f14286e;
            }
            if (getChildCount() > 0) {
                if (this.f14262x.f14269e) {
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
        this.f14262x.t();
        this.G.clear();
    }

    @Override // com.google.android.flexbox.a
    public void onNewFlexItemAdded(View view, int i10, int i11, FlexLine flexLine) {
        calculateItemDecorationsForChild(view, L);
        if (isMainAxisDirectionHorizontal()) {
            int leftDecorationWidth = getLeftDecorationWidth(view) + getRightDecorationWidth(view);
            flexLine.f14217e += leftDecorationWidth;
            flexLine.f14218f += leftDecorationWidth;
            return;
        }
        int topDecorationHeight = getTopDecorationHeight(view) + getBottomDecorationHeight(view);
        flexLine.f14217e += topDecorationHeight;
        flexLine.f14218f += topDecorationHeight;
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
        eVar.f14292d = getPosition(I);
        eVar.f14293e = this.f14263y.g(I) - this.f14263y.m();
        return eVar;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int scrollHorizontallyBy(int i10, RecyclerView.Recycler recycler, RecyclerView.State state) {
        if (isMainAxisDirectionHorizontal() && this.f14251e != 0) {
            int N = N(i10);
            b.l(this.f14262x, N);
            this.f14264z.r(-N);
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
        if (!isMainAxisDirectionHorizontal() && (this.f14251e != 0 || isMainAxisDirectionHorizontal())) {
            int N = N(i10);
            b.l(this.f14262x, N);
            this.f14264z.r(-N);
            return N;
        }
        int M = M(i10, recycler, state);
        this.G.clear();
        return M;
    }

    @Override // com.google.android.flexbox.a
    public void setFlexLines(List list) {
        this.f14257s = list;
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
        private int f14292d;

        /* renamed from: e  reason: collision with root package name */
        private int f14293e;

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
            int i11 = this.f14292d;
            if (i11 >= 0 && i11 < i10) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void i() {
            this.f14292d = -1;
        }

        @Override // android.os.Parcelable
        public int describeContents() {
            return 0;
        }

        public String toString() {
            return "SavedState{mAnchorPosition=" + this.f14292d + ", mAnchorOffset=" + this.f14293e + '}';
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeInt(this.f14292d);
            parcel.writeInt(this.f14293e);
        }

        e() {
        }

        private e(Parcel parcel) {
            this.f14292d = parcel.readInt();
            this.f14293e = parcel.readInt();
        }

        private e(e eVar) {
            this.f14292d = eVar.f14292d;
            this.f14293e = eVar.f14293e;
        }
    }

    public FlexboxLayoutManager(Context context, int i10, int i11) {
        this.f14254p = -1;
        this.f14257s = new ArrayList();
        this.f14258t = new FlexboxHelper(this);
        this.f14262x = new b();
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
        private float f14273p;

        /* renamed from: q  reason: collision with root package name */
        private float f14274q;

        /* renamed from: r  reason: collision with root package name */
        private int f14275r;

        /* renamed from: s  reason: collision with root package name */
        private float f14276s;

        /* renamed from: t  reason: collision with root package name */
        private int f14277t;

        /* renamed from: u  reason: collision with root package name */
        private int f14278u;

        /* renamed from: v  reason: collision with root package name */
        private int f14279v;

        /* renamed from: w  reason: collision with root package name */
        private int f14280w;

        /* renamed from: x  reason: collision with root package name */
        private boolean f14281x;

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
            this.f14273p = 0.0f;
            this.f14274q = 1.0f;
            this.f14275r = -1;
            this.f14276s = -1.0f;
            this.f14279v = 16777215;
            this.f14280w = 16777215;
        }

        @Override // com.google.android.flexbox.b
        public void A1(int i10) {
            this.f14277t = i10;
        }

        @Override // com.google.android.flexbox.b
        public int B() {
            return this.f14275r;
        }

        @Override // com.google.android.flexbox.b
        public int B1() {
            return ((ViewGroup.MarginLayoutParams) this).bottomMargin;
        }

        @Override // com.google.android.flexbox.b
        public float E() {
            return this.f14274q;
        }

        @Override // com.google.android.flexbox.b
        public int E1() {
            return ((ViewGroup.MarginLayoutParams) this).leftMargin;
        }

        @Override // com.google.android.flexbox.b
        public float G0() {
            return this.f14276s;
        }

        @Override // com.google.android.flexbox.b
        public int L() {
            return this.f14277t;
        }

        @Override // com.google.android.flexbox.b
        public boolean L0() {
            return this.f14281x;
        }

        @Override // com.google.android.flexbox.b
        public int N() {
            return ((ViewGroup.MarginLayoutParams) this).topMargin;
        }

        @Override // com.google.android.flexbox.b
        public void V(int i10) {
            this.f14278u = i10;
        }

        @Override // com.google.android.flexbox.b
        public int Y0() {
            return this.f14279v;
        }

        @Override // com.google.android.flexbox.b
        public int Y1() {
            return ((ViewGroup.MarginLayoutParams) this).rightMargin;
        }

        @Override // com.google.android.flexbox.b
        public int b2() {
            return this.f14278u;
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
            return this.f14280w;
        }

        @Override // com.google.android.flexbox.b
        public float t0() {
            return this.f14273p;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeFloat(this.f14273p);
            parcel.writeFloat(this.f14274q);
            parcel.writeInt(this.f14275r);
            parcel.writeFloat(this.f14276s);
            parcel.writeInt(this.f14277t);
            parcel.writeInt(this.f14278u);
            parcel.writeInt(this.f14279v);
            parcel.writeInt(this.f14280w);
            parcel.writeByte(this.f14281x ? (byte) 1 : (byte) 0);
            parcel.writeInt(((ViewGroup.MarginLayoutParams) this).bottomMargin);
            parcel.writeInt(((ViewGroup.MarginLayoutParams) this).leftMargin);
            parcel.writeInt(((ViewGroup.MarginLayoutParams) this).rightMargin);
            parcel.writeInt(((ViewGroup.MarginLayoutParams) this).topMargin);
            parcel.writeInt(((ViewGroup.MarginLayoutParams) this).height);
            parcel.writeInt(((ViewGroup.MarginLayoutParams) this).width);
        }

        public c(int i10, int i11) {
            super(i10, i11);
            this.f14273p = 0.0f;
            this.f14274q = 1.0f;
            this.f14275r = -1;
            this.f14276s = -1.0f;
            this.f14279v = 16777215;
            this.f14280w = 16777215;
        }

        protected c(Parcel parcel) {
            super(-2, -2);
            this.f14273p = 0.0f;
            this.f14274q = 1.0f;
            this.f14275r = -1;
            this.f14276s = -1.0f;
            this.f14279v = 16777215;
            this.f14280w = 16777215;
            this.f14273p = parcel.readFloat();
            this.f14274q = parcel.readFloat();
            this.f14275r = parcel.readInt();
            this.f14276s = parcel.readFloat();
            this.f14277t = parcel.readInt();
            this.f14278u = parcel.readInt();
            this.f14279v = parcel.readInt();
            this.f14280w = parcel.readInt();
            this.f14281x = parcel.readByte() != 0;
            ((ViewGroup.MarginLayoutParams) this).bottomMargin = parcel.readInt();
            ((ViewGroup.MarginLayoutParams) this).leftMargin = parcel.readInt();
            ((ViewGroup.MarginLayoutParams) this).rightMargin = parcel.readInt();
            ((ViewGroup.MarginLayoutParams) this).topMargin = parcel.readInt();
            ((ViewGroup.MarginLayoutParams) this).height = parcel.readInt();
            ((ViewGroup.MarginLayoutParams) this).width = parcel.readInt();
        }
    }

    public FlexboxLayoutManager(Context context, AttributeSet attributeSet, int i10, int i11) {
        this.f14254p = -1;
        this.f14257s = new ArrayList();
        this.f14258t = new FlexboxHelper(this);
        this.f14262x = new b();
        this.B = -1;
        this.C = Integer.MIN_VALUE;
        this.D = Integer.MIN_VALUE;
        this.E = Integer.MIN_VALUE;
        this.G = new SparseArray();
        this.J = -1;
        this.K = new FlexboxHelper.FlexLinesResult();
        RecyclerView.LayoutManager.Properties properties = RecyclerView.LayoutManager.getProperties(context, attributeSet, i10, i11);
        int i12 = properties.f4846a;
        if (i12 != 0) {
            if (i12 == 1) {
                if (properties.f4848c) {
                    Z(3);
                } else {
                    Z(2);
                }
            }
        } else if (properties.f4848c) {
            Z(1);
        } else {
            Z(0);
        }
        a0(1);
        Y(4);
        this.H = context;
    }
}
