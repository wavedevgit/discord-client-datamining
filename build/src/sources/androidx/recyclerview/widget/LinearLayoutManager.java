package androidx.recyclerview.widget;

import android.annotation.SuppressLint;
import android.content.Context;
import android.graphics.PointF;
import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import android.util.AttributeSet;
import android.util.Log;
import android.view.View;
import android.view.accessibility.AccessibilityEvent;
import androidx.annotation.NonNull;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.recyclerview.widget.RecyclerView;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class LinearLayoutManager extends RecyclerView.LayoutManager implements i, RecyclerView.SmoothScroller.a {
    static final boolean DEBUG = false;
    public static final int HORIZONTAL = 0;
    public static final int INVALID_OFFSET = Integer.MIN_VALUE;
    private static final float MAX_SCROLL_FACTOR = 0.33333334f;
    private static final String TAG = "LinearLayoutManager";
    public static final int VERTICAL = 1;
    final AnchorInfo mAnchorInfo;
    private int mInitialPrefetchItemCount;
    private boolean mLastStackFromEnd;
    private final LayoutChunkResult mLayoutChunkResult;
    private LayoutState mLayoutState;
    int mOrientation;
    OrientationHelper mOrientationHelper;
    SavedState mPendingSavedState;
    int mPendingScrollPosition;
    int mPendingScrollPositionOffset;
    private boolean mRecycleChildrenOnDetach;
    private int[] mReusableIntPair;
    private boolean mReverseLayout;
    boolean mShouldReverseLayout;
    private boolean mSmoothScrollbarEnabled;
    private boolean mStackFromEnd;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class AnchorInfo {

        /* renamed from: a  reason: collision with root package name */
        OrientationHelper f4766a;

        /* renamed from: b  reason: collision with root package name */
        int f4767b;

        /* renamed from: c  reason: collision with root package name */
        int f4768c;

        /* renamed from: d  reason: collision with root package name */
        boolean f4769d;

        /* renamed from: e  reason: collision with root package name */
        boolean f4770e;

        AnchorInfo() {
            e();
        }

        void a() {
            int m10;
            if (this.f4769d) {
                m10 = this.f4766a.i();
            } else {
                m10 = this.f4766a.m();
            }
            this.f4768c = m10;
        }

        public void b(View view, int i10) {
            if (this.f4769d) {
                this.f4768c = this.f4766a.d(view) + this.f4766a.o();
            } else {
                this.f4768c = this.f4766a.g(view);
            }
            this.f4767b = i10;
        }

        public void c(View view, int i10) {
            int o10 = this.f4766a.o();
            if (o10 >= 0) {
                b(view, i10);
                return;
            }
            this.f4767b = i10;
            if (this.f4769d) {
                int i11 = (this.f4766a.i() - o10) - this.f4766a.d(view);
                this.f4768c = this.f4766a.i() - i11;
                if (i11 > 0) {
                    int e10 = this.f4768c - this.f4766a.e(view);
                    int m10 = this.f4766a.m();
                    int min = e10 - (m10 + Math.min(this.f4766a.g(view) - m10, 0));
                    if (min < 0) {
                        this.f4768c += Math.min(i11, -min);
                        return;
                    }
                    return;
                }
                return;
            }
            int g10 = this.f4766a.g(view);
            int m11 = g10 - this.f4766a.m();
            this.f4768c = g10;
            if (m11 > 0) {
                int i12 = (this.f4766a.i() - Math.min(0, (this.f4766a.i() - o10) - this.f4766a.d(view))) - (g10 + this.f4766a.e(view));
                if (i12 < 0) {
                    this.f4768c -= Math.min(m11, -i12);
                }
            }
        }

        boolean d(View view, RecyclerView.State state) {
            RecyclerView.LayoutParams layoutParams = (RecyclerView.LayoutParams) view.getLayoutParams();
            if (!layoutParams.c() && layoutParams.a() >= 0 && layoutParams.a() < state.b()) {
                return true;
            }
            return false;
        }

        void e() {
            this.f4767b = -1;
            this.f4768c = Integer.MIN_VALUE;
            this.f4769d = false;
            this.f4770e = false;
        }

        public String toString() {
            return "AnchorInfo{mPosition=" + this.f4767b + ", mCoordinate=" + this.f4768c + ", mLayoutFromEnd=" + this.f4769d + ", mValid=" + this.f4770e + '}';
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class LayoutChunkResult {

        /* renamed from: a  reason: collision with root package name */
        public int f4771a;

        /* renamed from: b  reason: collision with root package name */
        public boolean f4772b;

        /* renamed from: c  reason: collision with root package name */
        public boolean f4773c;

        /* renamed from: d  reason: collision with root package name */
        public boolean f4774d;

        protected LayoutChunkResult() {
        }

        void a() {
            this.f4771a = 0;
            this.f4772b = false;
            this.f4773c = false;
            this.f4774d = false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class LayoutState {

        /* renamed from: b  reason: collision with root package name */
        int f4776b;

        /* renamed from: c  reason: collision with root package name */
        int f4777c;

        /* renamed from: d  reason: collision with root package name */
        int f4778d;

        /* renamed from: e  reason: collision with root package name */
        int f4779e;

        /* renamed from: f  reason: collision with root package name */
        int f4780f;

        /* renamed from: g  reason: collision with root package name */
        int f4781g;

        /* renamed from: k  reason: collision with root package name */
        int f4785k;

        /* renamed from: m  reason: collision with root package name */
        boolean f4787m;

        /* renamed from: a  reason: collision with root package name */
        boolean f4775a = true;

        /* renamed from: h  reason: collision with root package name */
        int f4782h = 0;

        /* renamed from: i  reason: collision with root package name */
        int f4783i = 0;

        /* renamed from: j  reason: collision with root package name */
        boolean f4784j = false;

        /* renamed from: l  reason: collision with root package name */
        List f4786l = null;

        LayoutState() {
        }

        private View e() {
            int size = this.f4786l.size();
            for (int i10 = 0; i10 < size; i10++) {
                View view = ((RecyclerView.ViewHolder) this.f4786l.get(i10)).itemView;
                RecyclerView.LayoutParams layoutParams = (RecyclerView.LayoutParams) view.getLayoutParams();
                if (!layoutParams.c() && this.f4778d == layoutParams.a()) {
                    b(view);
                    return view;
                }
            }
            return null;
        }

        public void a() {
            b(null);
        }

        public void b(View view) {
            View f10 = f(view);
            if (f10 == null) {
                this.f4778d = -1;
            } else {
                this.f4778d = ((RecyclerView.LayoutParams) f10.getLayoutParams()).a();
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean c(RecyclerView.State state) {
            int i10 = this.f4778d;
            if (i10 >= 0 && i10 < state.b()) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public View d(RecyclerView.Recycler recycler) {
            if (this.f4786l != null) {
                return e();
            }
            View o10 = recycler.o(this.f4778d);
            this.f4778d += this.f4779e;
            return o10;
        }

        public View f(View view) {
            int a10;
            int size = this.f4786l.size();
            View view2 = null;
            int i10 = Integer.MAX_VALUE;
            for (int i11 = 0; i11 < size; i11++) {
                View view3 = ((RecyclerView.ViewHolder) this.f4786l.get(i11)).itemView;
                RecyclerView.LayoutParams layoutParams = (RecyclerView.LayoutParams) view3.getLayoutParams();
                if (view3 != view && !layoutParams.c() && (a10 = (layoutParams.a() - this.f4778d) * this.f4779e) >= 0 && a10 < i10) {
                    if (a10 == 0) {
                        return view3;
                    }
                    view2 = view3;
                    i10 = a10;
                }
            }
            return view2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class SavedState implements Parcelable {
        public static final Parcelable.Creator<SavedState> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        int f4788d;

        /* renamed from: e  reason: collision with root package name */
        int f4789e;

        /* renamed from: i  reason: collision with root package name */
        boolean f4790i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a implements Parcelable.Creator {
            a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public SavedState createFromParcel(Parcel parcel) {
                return new SavedState(parcel);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public SavedState[] newArray(int i10) {
                return new SavedState[i10];
            }
        }

        public SavedState() {
        }

        boolean a() {
            if (this.f4788d >= 0) {
                return true;
            }
            return false;
        }

        void b() {
            this.f4788d = -1;
        }

        @Override // android.os.Parcelable
        public int describeContents() {
            return 0;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeInt(this.f4788d);
            parcel.writeInt(this.f4789e);
            parcel.writeInt(this.f4790i ? 1 : 0);
        }

        SavedState(Parcel parcel) {
            this.f4788d = parcel.readInt();
            this.f4789e = parcel.readInt();
            this.f4790i = parcel.readInt() == 1;
        }

        public SavedState(SavedState savedState) {
            this.f4788d = savedState.f4788d;
            this.f4789e = savedState.f4789e;
            this.f4790i = savedState.f4790i;
        }
    }

    public LinearLayoutManager(Context context) {
        this(context, 1, false);
    }

    private void A(RecyclerView.Recycler recycler, int i10, int i11) {
        if (i10 >= 0) {
            int i12 = i10 - i11;
            int childCount = getChildCount();
            if (this.mShouldReverseLayout) {
                int i13 = childCount - 1;
                for (int i14 = i13; i14 >= 0; i14--) {
                    View childAt = getChildAt(i14);
                    if (this.mOrientationHelper.d(childAt) > i12 || this.mOrientationHelper.p(childAt) > i12) {
                        y(recycler, i13, i14);
                        return;
                    }
                }
                return;
            }
            for (int i15 = 0; i15 < childCount; i15++) {
                View childAt2 = getChildAt(i15);
                if (this.mOrientationHelper.d(childAt2) > i12 || this.mOrientationHelper.p(childAt2) > i12) {
                    y(recycler, 0, i15);
                    return;
                }
            }
        }
    }

    private void B() {
        if (this.mOrientation != 1 && isLayoutRTL()) {
            this.mShouldReverseLayout = !this.mReverseLayout;
        } else {
            this.mShouldReverseLayout = this.mReverseLayout;
        }
    }

    private boolean C(RecyclerView.Recycler recycler, RecyclerView.State state, AnchorInfo anchorInfo) {
        View findReferenceChild;
        boolean z10;
        boolean z11 = false;
        if (getChildCount() == 0) {
            return false;
        }
        View focusedChild = getFocusedChild();
        if (focusedChild != null && anchorInfo.d(focusedChild, state)) {
            anchorInfo.c(focusedChild, getPosition(focusedChild));
            return true;
        }
        boolean z12 = this.mLastStackFromEnd;
        boolean z13 = this.mStackFromEnd;
        if (z12 != z13 || (findReferenceChild = findReferenceChild(recycler, state, anchorInfo.f4769d, z13)) == null) {
            return false;
        }
        anchorInfo.b(findReferenceChild, getPosition(findReferenceChild));
        if (!state.e() && supportsPredictiveItemAnimations()) {
            int g10 = this.mOrientationHelper.g(findReferenceChild);
            int d10 = this.mOrientationHelper.d(findReferenceChild);
            int m10 = this.mOrientationHelper.m();
            int i10 = this.mOrientationHelper.i();
            if (d10 <= m10 && g10 < m10) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (g10 >= i10 && d10 > i10) {
                z11 = true;
            }
            if (z10 || z11) {
                if (anchorInfo.f4769d) {
                    m10 = i10;
                }
                anchorInfo.f4768c = m10;
            }
        }
        return true;
    }

    private boolean D(RecyclerView.State state, AnchorInfo anchorInfo) {
        int i10;
        boolean z10;
        int g10;
        boolean z11 = false;
        if (!state.e() && (i10 = this.mPendingScrollPosition) != -1) {
            if (i10 >= 0 && i10 < state.b()) {
                anchorInfo.f4767b = this.mPendingScrollPosition;
                SavedState savedState = this.mPendingSavedState;
                if (savedState != null && savedState.a()) {
                    boolean z12 = this.mPendingSavedState.f4790i;
                    anchorInfo.f4769d = z12;
                    if (z12) {
                        anchorInfo.f4768c = this.mOrientationHelper.i() - this.mPendingSavedState.f4789e;
                    } else {
                        anchorInfo.f4768c = this.mOrientationHelper.m() + this.mPendingSavedState.f4789e;
                    }
                    return true;
                } else if (this.mPendingScrollPositionOffset == Integer.MIN_VALUE) {
                    View findViewByPosition = findViewByPosition(this.mPendingScrollPosition);
                    if (findViewByPosition != null) {
                        if (this.mOrientationHelper.e(findViewByPosition) > this.mOrientationHelper.n()) {
                            anchorInfo.a();
                            return true;
                        } else if (this.mOrientationHelper.g(findViewByPosition) - this.mOrientationHelper.m() < 0) {
                            anchorInfo.f4768c = this.mOrientationHelper.m();
                            anchorInfo.f4769d = false;
                            return true;
                        } else if (this.mOrientationHelper.i() - this.mOrientationHelper.d(findViewByPosition) < 0) {
                            anchorInfo.f4768c = this.mOrientationHelper.i();
                            anchorInfo.f4769d = true;
                            return true;
                        } else {
                            if (anchorInfo.f4769d) {
                                g10 = this.mOrientationHelper.d(findViewByPosition) + this.mOrientationHelper.o();
                            } else {
                                g10 = this.mOrientationHelper.g(findViewByPosition);
                            }
                            anchorInfo.f4768c = g10;
                        }
                    } else {
                        if (getChildCount() > 0) {
                            if (this.mPendingScrollPosition < getPosition(getChildAt(0))) {
                                z10 = true;
                            } else {
                                z10 = false;
                            }
                            if (z10 == this.mShouldReverseLayout) {
                                z11 = true;
                            }
                            anchorInfo.f4769d = z11;
                        }
                        anchorInfo.a();
                    }
                    return true;
                } else {
                    boolean z13 = this.mShouldReverseLayout;
                    anchorInfo.f4769d = z13;
                    if (z13) {
                        anchorInfo.f4768c = this.mOrientationHelper.i() - this.mPendingScrollPositionOffset;
                    } else {
                        anchorInfo.f4768c = this.mOrientationHelper.m() + this.mPendingScrollPositionOffset;
                    }
                    return true;
                }
            }
            this.mPendingScrollPosition = -1;
            this.mPendingScrollPositionOffset = Integer.MIN_VALUE;
        }
        return false;
    }

    private void E(RecyclerView.Recycler recycler, RecyclerView.State state, AnchorInfo anchorInfo) {
        int i10;
        if (D(state, anchorInfo) || C(recycler, state, anchorInfo)) {
            return;
        }
        anchorInfo.a();
        if (this.mStackFromEnd) {
            i10 = state.b() - 1;
        } else {
            i10 = 0;
        }
        anchorInfo.f4767b = i10;
    }

    private void F(int i10, int i11, boolean z10, RecyclerView.State state) {
        int i12;
        int m10;
        this.mLayoutState.f4787m = resolveIsInfinite();
        this.mLayoutState.f4780f = i10;
        int[] iArr = this.mReusableIntPair;
        boolean z11 = false;
        iArr[0] = 0;
        int i13 = 1;
        iArr[1] = 0;
        calculateExtraLayoutSpace(state, iArr);
        int max = Math.max(0, this.mReusableIntPair[0]);
        int max2 = Math.max(0, this.mReusableIntPair[1]);
        if (i10 == 1) {
            z11 = true;
        }
        LayoutState layoutState = this.mLayoutState;
        if (z11) {
            i12 = max2;
        } else {
            i12 = max;
        }
        layoutState.f4782h = i12;
        if (!z11) {
            max = max2;
        }
        layoutState.f4783i = max;
        if (z11) {
            layoutState.f4782h = i12 + this.mOrientationHelper.j();
            View t10 = t();
            LayoutState layoutState2 = this.mLayoutState;
            if (this.mShouldReverseLayout) {
                i13 = -1;
            }
            layoutState2.f4779e = i13;
            int position = getPosition(t10);
            LayoutState layoutState3 = this.mLayoutState;
            layoutState2.f4778d = position + layoutState3.f4779e;
            layoutState3.f4776b = this.mOrientationHelper.d(t10);
            m10 = this.mOrientationHelper.d(t10) - this.mOrientationHelper.i();
        } else {
            View u10 = u();
            this.mLayoutState.f4782h += this.mOrientationHelper.m();
            LayoutState layoutState4 = this.mLayoutState;
            if (!this.mShouldReverseLayout) {
                i13 = -1;
            }
            layoutState4.f4779e = i13;
            int position2 = getPosition(u10);
            LayoutState layoutState5 = this.mLayoutState;
            layoutState4.f4778d = position2 + layoutState5.f4779e;
            layoutState5.f4776b = this.mOrientationHelper.g(u10);
            m10 = (-this.mOrientationHelper.g(u10)) + this.mOrientationHelper.m();
        }
        LayoutState layoutState6 = this.mLayoutState;
        layoutState6.f4777c = i11;
        if (z10) {
            layoutState6.f4777c = i11 - m10;
        }
        layoutState6.f4781g = m10;
    }

    private void G(int i10, int i11) {
        int i12;
        this.mLayoutState.f4777c = this.mOrientationHelper.i() - i11;
        LayoutState layoutState = this.mLayoutState;
        if (this.mShouldReverseLayout) {
            i12 = -1;
        } else {
            i12 = 1;
        }
        layoutState.f4779e = i12;
        layoutState.f4778d = i10;
        layoutState.f4780f = 1;
        layoutState.f4776b = i11;
        layoutState.f4781g = Integer.MIN_VALUE;
    }

    private void H(AnchorInfo anchorInfo) {
        G(anchorInfo.f4767b, anchorInfo.f4768c);
    }

    private void I(int i10, int i11) {
        int i12;
        this.mLayoutState.f4777c = i11 - this.mOrientationHelper.m();
        LayoutState layoutState = this.mLayoutState;
        layoutState.f4778d = i10;
        if (this.mShouldReverseLayout) {
            i12 = 1;
        } else {
            i12 = -1;
        }
        layoutState.f4779e = i12;
        layoutState.f4780f = -1;
        layoutState.f4776b = i11;
        layoutState.f4781g = Integer.MIN_VALUE;
    }

    private void J(AnchorInfo anchorInfo) {
        I(anchorInfo.f4767b, anchorInfo.f4768c);
    }

    private int k(RecyclerView.State state) {
        if (getChildCount() == 0) {
            return 0;
        }
        ensureLayoutState();
        return p.a(state, this.mOrientationHelper, findFirstVisibleChildClosestToStart(!this.mSmoothScrollbarEnabled, true), findFirstVisibleChildClosestToEnd(!this.mSmoothScrollbarEnabled, true), this, this.mSmoothScrollbarEnabled);
    }

    private int l(RecyclerView.State state) {
        if (getChildCount() == 0) {
            return 0;
        }
        ensureLayoutState();
        return p.b(state, this.mOrientationHelper, findFirstVisibleChildClosestToStart(!this.mSmoothScrollbarEnabled, true), findFirstVisibleChildClosestToEnd(!this.mSmoothScrollbarEnabled, true), this, this.mSmoothScrollbarEnabled, this.mShouldReverseLayout);
    }

    private int m(RecyclerView.State state) {
        if (getChildCount() == 0) {
            return 0;
        }
        ensureLayoutState();
        return p.c(state, this.mOrientationHelper, findFirstVisibleChildClosestToStart(!this.mSmoothScrollbarEnabled, true), findFirstVisibleChildClosestToEnd(!this.mSmoothScrollbarEnabled, true), this, this.mSmoothScrollbarEnabled);
    }

    private View n() {
        return findOnePartiallyOrCompletelyInvisibleChild(0, getChildCount());
    }

    private View o() {
        return findOnePartiallyOrCompletelyInvisibleChild(getChildCount() - 1, -1);
    }

    private View p() {
        if (this.mShouldReverseLayout) {
            return n();
        }
        return o();
    }

    private View q() {
        if (this.mShouldReverseLayout) {
            return o();
        }
        return n();
    }

    private int r(int i10, RecyclerView.Recycler recycler, RecyclerView.State state, boolean z10) {
        int i11;
        int i12 = this.mOrientationHelper.i() - i10;
        if (i12 > 0) {
            int i13 = -scrollBy(-i12, recycler, state);
            int i14 = i10 + i13;
            if (z10 && (i11 = this.mOrientationHelper.i() - i14) > 0) {
                this.mOrientationHelper.r(i11);
                return i11 + i13;
            }
            return i13;
        }
        return 0;
    }

    private int s(int i10, RecyclerView.Recycler recycler, RecyclerView.State state, boolean z10) {
        int m10;
        int m11 = i10 - this.mOrientationHelper.m();
        if (m11 > 0) {
            int i11 = -scrollBy(m11, recycler, state);
            int i12 = i10 + i11;
            if (z10 && (m10 = i12 - this.mOrientationHelper.m()) > 0) {
                this.mOrientationHelper.r(-m10);
                return i11 - m10;
            }
            return i11;
        }
        return 0;
    }

    private View t() {
        int childCount;
        if (this.mShouldReverseLayout) {
            childCount = 0;
        } else {
            childCount = getChildCount() - 1;
        }
        return getChildAt(childCount);
    }

    private View u() {
        int i10;
        if (this.mShouldReverseLayout) {
            i10 = getChildCount() - 1;
        } else {
            i10 = 0;
        }
        return getChildAt(i10);
    }

    private void v(RecyclerView.Recycler recycler, RecyclerView.State state, int i10, int i11) {
        boolean z10;
        if (state.g() && getChildCount() != 0 && !state.e() && supportsPredictiveItemAnimations()) {
            List k10 = recycler.k();
            int size = k10.size();
            int position = getPosition(getChildAt(0));
            int i12 = 0;
            int i13 = 0;
            for (int i14 = 0; i14 < size; i14++) {
                RecyclerView.ViewHolder viewHolder = (RecyclerView.ViewHolder) k10.get(i14);
                if (!viewHolder.isRemoved()) {
                    if (viewHolder.getLayoutPosition() < position) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    if (z10 != this.mShouldReverseLayout) {
                        i12 += this.mOrientationHelper.e(viewHolder.itemView);
                    } else {
                        i13 += this.mOrientationHelper.e(viewHolder.itemView);
                    }
                }
            }
            this.mLayoutState.f4786l = k10;
            if (i12 > 0) {
                I(getPosition(u()), i10);
                LayoutState layoutState = this.mLayoutState;
                layoutState.f4782h = i12;
                layoutState.f4777c = 0;
                layoutState.a();
                fill(recycler, this.mLayoutState, state, false);
            }
            if (i13 > 0) {
                G(getPosition(t()), i11);
                LayoutState layoutState2 = this.mLayoutState;
                layoutState2.f4782h = i13;
                layoutState2.f4777c = 0;
                layoutState2.a();
                fill(recycler, this.mLayoutState, state, false);
            }
            this.mLayoutState.f4786l = null;
        }
    }

    private void w() {
        Log.d(TAG, "internal representation of views on the screen");
        for (int i10 = 0; i10 < getChildCount(); i10++) {
            View childAt = getChildAt(i10);
            Log.d(TAG, "item " + getPosition(childAt) + ", coord:" + this.mOrientationHelper.g(childAt));
        }
        Log.d(TAG, "==============");
    }

    private void x(RecyclerView.Recycler recycler, LayoutState layoutState) {
        if (layoutState.f4775a && !layoutState.f4787m) {
            int i10 = layoutState.f4781g;
            int i11 = layoutState.f4783i;
            if (layoutState.f4780f == -1) {
                z(recycler, i10, i11);
            } else {
                A(recycler, i10, i11);
            }
        }
    }

    private void y(RecyclerView.Recycler recycler, int i10, int i11) {
        if (i10 != i11) {
            if (i11 > i10) {
                for (int i12 = i11 - 1; i12 >= i10; i12--) {
                    removeAndRecycleViewAt(i12, recycler);
                }
                return;
            }
            while (i10 > i11) {
                removeAndRecycleViewAt(i10, recycler);
                i10--;
            }
        }
    }

    private void z(RecyclerView.Recycler recycler, int i10, int i11) {
        int childCount = getChildCount();
        if (i10 >= 0) {
            int h10 = (this.mOrientationHelper.h() - i10) + i11;
            if (this.mShouldReverseLayout) {
                for (int i12 = 0; i12 < childCount; i12++) {
                    View childAt = getChildAt(i12);
                    if (this.mOrientationHelper.g(childAt) < h10 || this.mOrientationHelper.q(childAt) < h10) {
                        y(recycler, 0, i12);
                        return;
                    }
                }
                return;
            }
            int i13 = childCount - 1;
            for (int i14 = i13; i14 >= 0; i14--) {
                View childAt2 = getChildAt(i14);
                if (this.mOrientationHelper.g(childAt2) < h10 || this.mOrientationHelper.q(childAt2) < h10) {
                    y(recycler, i13, i14);
                    return;
                }
            }
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    @SuppressLint({"UnknownNullness"})
    public void assertNotInLayoutOrScroll(String str) {
        if (this.mPendingSavedState == null) {
            super.assertNotInLayoutOrScroll(str);
        }
    }

    protected void calculateExtraLayoutSpace(@NonNull RecyclerView.State state, @NonNull int[] iArr) {
        int i10;
        int extraLayoutSpace = getExtraLayoutSpace(state);
        if (this.mLayoutState.f4780f == -1) {
            i10 = 0;
        } else {
            i10 = extraLayoutSpace;
            extraLayoutSpace = 0;
        }
        iArr[0] = extraLayoutSpace;
        iArr[1] = i10;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean canScrollHorizontally() {
        if (this.mOrientation == 0) {
            return true;
        }
        return false;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean canScrollVertically() {
        if (this.mOrientation == 1) {
            return true;
        }
        return false;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    @SuppressLint({"UnknownNullness"})
    public void collectAdjacentPrefetchPositions(int i10, int i11, RecyclerView.State state, RecyclerView.LayoutManager.LayoutPrefetchRegistry layoutPrefetchRegistry) {
        int i12;
        if (this.mOrientation != 0) {
            i10 = i11;
        }
        if (getChildCount() != 0 && i10 != 0) {
            ensureLayoutState();
            if (i10 > 0) {
                i12 = 1;
            } else {
                i12 = -1;
            }
            F(i12, Math.abs(i10), true, state);
            collectPrefetchPositionsForLayoutState(state, this.mLayoutState, layoutPrefetchRegistry);
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    @SuppressLint({"UnknownNullness"})
    public void collectInitialPrefetchPositions(int i10, RecyclerView.LayoutManager.LayoutPrefetchRegistry layoutPrefetchRegistry) {
        boolean z10;
        int i11;
        SavedState savedState = this.mPendingSavedState;
        int i12 = -1;
        if (savedState != null && savedState.a()) {
            SavedState savedState2 = this.mPendingSavedState;
            z10 = savedState2.f4790i;
            i11 = savedState2.f4788d;
        } else {
            B();
            z10 = this.mShouldReverseLayout;
            i11 = this.mPendingScrollPosition;
            if (i11 == -1) {
                i11 = z10 ? i10 - 1 : 0;
            }
        }
        if (!z10) {
            i12 = 1;
        }
        for (int i13 = 0; i13 < this.mInitialPrefetchItemCount && i11 >= 0 && i11 < i10; i13++) {
            layoutPrefetchRegistry.a(i11, 0);
            i11 += i12;
        }
    }

    void collectPrefetchPositionsForLayoutState(RecyclerView.State state, LayoutState layoutState, RecyclerView.LayoutManager.LayoutPrefetchRegistry layoutPrefetchRegistry) {
        int i10 = layoutState.f4778d;
        if (i10 >= 0 && i10 < state.b()) {
            layoutPrefetchRegistry.a(i10, Math.max(0, layoutState.f4781g));
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    @SuppressLint({"UnknownNullness"})
    public int computeHorizontalScrollExtent(RecyclerView.State state) {
        return k(state);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    @SuppressLint({"UnknownNullness"})
    public int computeHorizontalScrollOffset(RecyclerView.State state) {
        return l(state);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    @SuppressLint({"UnknownNullness"})
    public int computeHorizontalScrollRange(RecyclerView.State state) {
        return m(state);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.SmoothScroller.a
    @SuppressLint({"UnknownNullness"})
    public PointF computeScrollVectorForPosition(int i10) {
        if (getChildCount() == 0) {
            return null;
        }
        boolean z10 = false;
        int i11 = 1;
        if (i10 < getPosition(getChildAt(0))) {
            z10 = true;
        }
        if (z10 != this.mShouldReverseLayout) {
            i11 = -1;
        }
        if (this.mOrientation == 0) {
            return new PointF(i11, 0.0f);
        }
        return new PointF(0.0f, i11);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    @SuppressLint({"UnknownNullness"})
    public int computeVerticalScrollExtent(RecyclerView.State state) {
        return k(state);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    @SuppressLint({"UnknownNullness"})
    public int computeVerticalScrollOffset(RecyclerView.State state) {
        return l(state);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    @SuppressLint({"UnknownNullness"})
    public int computeVerticalScrollRange(RecyclerView.State state) {
        return m(state);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int convertFocusDirectionToLayoutDirection(int i10) {
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 17) {
                    if (i10 != 33) {
                        if (i10 != 66) {
                            if (i10 == 130 && this.mOrientation == 1) {
                                return 1;
                            }
                            return Integer.MIN_VALUE;
                        } else if (this.mOrientation == 0) {
                            return 1;
                        } else {
                            return Integer.MIN_VALUE;
                        }
                    } else if (this.mOrientation == 1) {
                        return -1;
                    } else {
                        return Integer.MIN_VALUE;
                    }
                } else if (this.mOrientation == 0) {
                    return -1;
                } else {
                    return Integer.MIN_VALUE;
                }
            } else if (this.mOrientation != 1 && isLayoutRTL()) {
                return -1;
            } else {
                return 1;
            }
        } else if (this.mOrientation == 1 || !isLayoutRTL()) {
            return -1;
        } else {
            return 1;
        }
    }

    LayoutState createLayoutState() {
        return new LayoutState();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void ensureLayoutState() {
        if (this.mLayoutState == null) {
            this.mLayoutState = createLayoutState();
        }
    }

    int fill(RecyclerView.Recycler recycler, LayoutState layoutState, RecyclerView.State state, boolean z10) {
        int i10 = layoutState.f4777c;
        int i11 = layoutState.f4781g;
        if (i11 != Integer.MIN_VALUE) {
            if (i10 < 0) {
                layoutState.f4781g = i11 + i10;
            }
            x(recycler, layoutState);
        }
        int i12 = layoutState.f4777c + layoutState.f4782h;
        LayoutChunkResult layoutChunkResult = this.mLayoutChunkResult;
        while (true) {
            if ((!layoutState.f4787m && i12 <= 0) || !layoutState.c(state)) {
                break;
            }
            layoutChunkResult.a();
            layoutChunk(recycler, state, layoutState, layoutChunkResult);
            if (!layoutChunkResult.f4772b) {
                layoutState.f4776b += layoutChunkResult.f4771a * layoutState.f4780f;
                if (!layoutChunkResult.f4773c || layoutState.f4786l != null || !state.e()) {
                    int i13 = layoutState.f4777c;
                    int i14 = layoutChunkResult.f4771a;
                    layoutState.f4777c = i13 - i14;
                    i12 -= i14;
                }
                int i15 = layoutState.f4781g;
                if (i15 != Integer.MIN_VALUE) {
                    int i16 = i15 + layoutChunkResult.f4771a;
                    layoutState.f4781g = i16;
                    int i17 = layoutState.f4777c;
                    if (i17 < 0) {
                        layoutState.f4781g = i16 + i17;
                    }
                    x(recycler, layoutState);
                }
                if (z10 && layoutChunkResult.f4774d) {
                    break;
                }
            } else {
                break;
            }
        }
        return i10 - layoutState.f4777c;
    }

    public int findFirstCompletelyVisibleItemPosition() {
        View findOneVisibleChild = findOneVisibleChild(0, getChildCount(), true, false);
        if (findOneVisibleChild == null) {
            return -1;
        }
        return getPosition(findOneVisibleChild);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View findFirstVisibleChildClosestToEnd(boolean z10, boolean z11) {
        if (this.mShouldReverseLayout) {
            return findOneVisibleChild(0, getChildCount(), z10, z11);
        }
        return findOneVisibleChild(getChildCount() - 1, -1, z10, z11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View findFirstVisibleChildClosestToStart(boolean z10, boolean z11) {
        if (this.mShouldReverseLayout) {
            return findOneVisibleChild(getChildCount() - 1, -1, z10, z11);
        }
        return findOneVisibleChild(0, getChildCount(), z10, z11);
    }

    public int findFirstVisibleItemPosition() {
        View findOneVisibleChild = findOneVisibleChild(0, getChildCount(), false, true);
        if (findOneVisibleChild == null) {
            return -1;
        }
        return getPosition(findOneVisibleChild);
    }

    public int findLastCompletelyVisibleItemPosition() {
        View findOneVisibleChild = findOneVisibleChild(getChildCount() - 1, -1, true, false);
        if (findOneVisibleChild == null) {
            return -1;
        }
        return getPosition(findOneVisibleChild);
    }

    public int findLastVisibleItemPosition() {
        View findOneVisibleChild = findOneVisibleChild(getChildCount() - 1, -1, false, true);
        if (findOneVisibleChild == null) {
            return -1;
        }
        return getPosition(findOneVisibleChild);
    }

    View findOnePartiallyOrCompletelyInvisibleChild(int i10, int i11) {
        int i12;
        int i13;
        ensureLayoutState();
        if (i11 > i10 || i11 < i10) {
            if (this.mOrientationHelper.g(getChildAt(i10)) < this.mOrientationHelper.m()) {
                i12 = 16644;
                i13 = 16388;
            } else {
                i12 = 4161;
                i13 = 4097;
            }
            if (this.mOrientation == 0) {
                return this.mHorizontalBoundCheck.a(i10, i11, i12, i13);
            }
            return this.mVerticalBoundCheck.a(i10, i11, i12, i13);
        }
        return getChildAt(i10);
    }

    View findOneVisibleChild(int i10, int i11, boolean z10, boolean z11) {
        int i12;
        ensureLayoutState();
        int i13 = 320;
        if (z10) {
            i12 = 24579;
        } else {
            i12 = 320;
        }
        if (!z11) {
            i13 = 0;
        }
        if (this.mOrientation == 0) {
            return this.mHorizontalBoundCheck.a(i10, i11, i12, i13);
        }
        return this.mVerticalBoundCheck.a(i10, i11, i12, i13);
    }

    View findReferenceChild(RecyclerView.Recycler recycler, RecyclerView.State state, boolean z10, boolean z11) {
        int i10;
        int i11;
        int i12;
        boolean z12;
        boolean z13;
        ensureLayoutState();
        int childCount = getChildCount();
        if (z11) {
            i11 = getChildCount() - 1;
            i10 = -1;
            i12 = -1;
        } else {
            i10 = childCount;
            i11 = 0;
            i12 = 1;
        }
        int b10 = state.b();
        int m10 = this.mOrientationHelper.m();
        int i13 = this.mOrientationHelper.i();
        View view = null;
        View view2 = null;
        View view3 = null;
        while (i11 != i10) {
            View childAt = getChildAt(i11);
            int position = getPosition(childAt);
            int g10 = this.mOrientationHelper.g(childAt);
            int d10 = this.mOrientationHelper.d(childAt);
            if (position >= 0 && position < b10) {
                if (((RecyclerView.LayoutParams) childAt.getLayoutParams()).c()) {
                    if (view3 == null) {
                        view3 = childAt;
                    }
                } else {
                    if (d10 <= m10 && g10 < m10) {
                        z12 = true;
                    } else {
                        z12 = false;
                    }
                    if (g10 >= i13 && d10 > i13) {
                        z13 = true;
                    } else {
                        z13 = false;
                    }
                    if (!z12 && !z13) {
                        return childAt;
                    }
                    if (z10) {
                        if (!z13) {
                            if (view != null) {
                            }
                            view = childAt;
                        }
                        view2 = childAt;
                    } else {
                        if (!z12) {
                            if (view != null) {
                            }
                            view = childAt;
                        }
                        view2 = childAt;
                    }
                }
            }
            i11 += i12;
        }
        if (view != null) {
            return view;
        }
        if (view2 != null) {
            return view2;
        }
        return view3;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    @SuppressLint({"UnknownNullness"})
    public View findViewByPosition(int i10) {
        int childCount = getChildCount();
        if (childCount == 0) {
            return null;
        }
        int position = i10 - getPosition(getChildAt(0));
        if (position >= 0 && position < childCount) {
            View childAt = getChildAt(position);
            if (getPosition(childAt) == i10) {
                return childAt;
            }
        }
        return super.findViewByPosition(i10);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    @SuppressLint({"UnknownNullness"})
    public RecyclerView.LayoutParams generateDefaultLayoutParams() {
        return new RecyclerView.LayoutParams(-2, -2);
    }

    @Deprecated
    protected int getExtraLayoutSpace(RecyclerView.State state) {
        if (state.d()) {
            return this.mOrientationHelper.n();
        }
        return 0;
    }

    public int getInitialPrefetchItemCount() {
        return this.mInitialPrefetchItemCount;
    }

    public int getOrientation() {
        return this.mOrientation;
    }

    public boolean getRecycleChildrenOnDetach() {
        return this.mRecycleChildrenOnDetach;
    }

    public boolean getReverseLayout() {
        return this.mReverseLayout;
    }

    public boolean getStackFromEnd() {
        return this.mStackFromEnd;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean isAutoMeasureEnabled() {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public boolean isLayoutRTL() {
        if (getLayoutDirection() == 1) {
            return true;
        }
        return false;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean isLayoutReversed() {
        return this.mReverseLayout;
    }

    public boolean isSmoothScrollbarEnabled() {
        return this.mSmoothScrollbarEnabled;
    }

    void layoutChunk(RecyclerView.Recycler recycler, RecyclerView.State state, LayoutState layoutState, LayoutChunkResult layoutChunkResult) {
        boolean z10;
        int i10;
        int i11;
        int i12;
        int i13;
        int paddingLeft;
        int f10;
        int i14;
        int i15;
        boolean z11;
        View d10 = layoutState.d(recycler);
        if (d10 == null) {
            layoutChunkResult.f4772b = true;
            return;
        }
        RecyclerView.LayoutParams layoutParams = (RecyclerView.LayoutParams) d10.getLayoutParams();
        if (layoutState.f4786l == null) {
            boolean z12 = this.mShouldReverseLayout;
            if (layoutState.f4780f == -1) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (z12 == z11) {
                addView(d10);
            } else {
                addView(d10, 0);
            }
        } else {
            boolean z13 = this.mShouldReverseLayout;
            if (layoutState.f4780f == -1) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z13 == z10) {
                addDisappearingView(d10);
            } else {
                addDisappearingView(d10, 0);
            }
        }
        measureChildWithMargins(d10, 0, 0);
        layoutChunkResult.f4771a = this.mOrientationHelper.e(d10);
        if (this.mOrientation == 1) {
            if (isLayoutRTL()) {
                f10 = getWidth() - getPaddingRight();
                paddingLeft = f10 - this.mOrientationHelper.f(d10);
            } else {
                paddingLeft = getPaddingLeft();
                f10 = this.mOrientationHelper.f(d10) + paddingLeft;
            }
            if (layoutState.f4780f == -1) {
                i15 = layoutState.f4776b;
                i14 = i15 - layoutChunkResult.f4771a;
            } else {
                i14 = layoutState.f4776b;
                i15 = layoutChunkResult.f4771a + i14;
            }
            int i16 = paddingLeft;
            i13 = i14;
            i12 = i16;
            i11 = i15;
            i10 = f10;
        } else {
            int paddingTop = getPaddingTop();
            int f11 = this.mOrientationHelper.f(d10) + paddingTop;
            if (layoutState.f4780f == -1) {
                int i17 = layoutState.f4776b;
                i12 = i17 - layoutChunkResult.f4771a;
                i10 = i17;
                i11 = f11;
            } else {
                int i18 = layoutState.f4776b;
                i10 = layoutChunkResult.f4771a + i18;
                i11 = f11;
                i12 = i18;
            }
            i13 = paddingTop;
        }
        layoutDecoratedWithMargins(d10, i12, i13, i10, i11);
        if (layoutParams.c() || layoutParams.b()) {
            layoutChunkResult.f4773c = true;
        }
        layoutChunkResult.f4774d = d10.hasFocusable();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void onAnchorReady(RecyclerView.Recycler recycler, RecyclerView.State state, AnchorInfo anchorInfo, int i10) {
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    @SuppressLint({"UnknownNullness"})
    public void onDetachedFromWindow(RecyclerView recyclerView, RecyclerView.Recycler recycler) {
        super.onDetachedFromWindow(recyclerView, recycler);
        if (this.mRecycleChildrenOnDetach) {
            removeAndRecycleAllViews(recycler);
            recycler.c();
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    @SuppressLint({"UnknownNullness"})
    public View onFocusSearchFailed(View view, int i10, RecyclerView.Recycler recycler, RecyclerView.State state) {
        int convertFocusDirectionToLayoutDirection;
        View p10;
        View t10;
        B();
        if (getChildCount() == 0 || (convertFocusDirectionToLayoutDirection = convertFocusDirectionToLayoutDirection(i10)) == Integer.MIN_VALUE) {
            return null;
        }
        ensureLayoutState();
        F(convertFocusDirectionToLayoutDirection, (int) (this.mOrientationHelper.n() * MAX_SCROLL_FACTOR), false, state);
        LayoutState layoutState = this.mLayoutState;
        layoutState.f4781g = Integer.MIN_VALUE;
        layoutState.f4775a = false;
        fill(recycler, layoutState, state, true);
        if (convertFocusDirectionToLayoutDirection == -1) {
            p10 = q();
        } else {
            p10 = p();
        }
        if (convertFocusDirectionToLayoutDirection == -1) {
            t10 = u();
        } else {
            t10 = t();
        }
        if (t10.hasFocusable()) {
            if (p10 == null) {
                return null;
            }
            return t10;
        }
        return p10;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    @SuppressLint({"UnknownNullness"})
    public void onInitializeAccessibilityEvent(AccessibilityEvent accessibilityEvent) {
        super.onInitializeAccessibilityEvent(accessibilityEvent);
        if (getChildCount() > 0) {
            accessibilityEvent.setFromIndex(findFirstVisibleItemPosition());
            accessibilityEvent.setToIndex(findLastVisibleItemPosition());
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onInitializeAccessibilityNodeInfo(@NonNull RecyclerView.Recycler recycler, @NonNull RecyclerView.State state, @NonNull AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
        super.onInitializeAccessibilityNodeInfo(recycler, state, accessibilityNodeInfoCompat);
        RecyclerView.Adapter adapter = this.mRecyclerView.mAdapter;
        if (adapter != null && adapter.getItemCount() > 0) {
            accessibilityNodeInfoCompat.b(AccessibilityNodeInfoCompat.a.B);
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onLayoutChildren(RecyclerView.Recycler recycler, RecyclerView.State state) {
        int i10;
        int i11;
        int i12;
        int i13;
        int i14;
        int r10;
        int i15;
        View findViewByPosition;
        int g10;
        int i16;
        int i17 = -1;
        if ((this.mPendingSavedState != null || this.mPendingScrollPosition != -1) && state.b() == 0) {
            removeAndRecycleAllViews(recycler);
            return;
        }
        SavedState savedState = this.mPendingSavedState;
        if (savedState != null && savedState.a()) {
            this.mPendingScrollPosition = this.mPendingSavedState.f4788d;
        }
        ensureLayoutState();
        this.mLayoutState.f4775a = false;
        B();
        View focusedChild = getFocusedChild();
        AnchorInfo anchorInfo = this.mAnchorInfo;
        if (anchorInfo.f4770e && this.mPendingScrollPosition == -1 && this.mPendingSavedState == null) {
            if (focusedChild != null && (this.mOrientationHelper.g(focusedChild) >= this.mOrientationHelper.i() || this.mOrientationHelper.d(focusedChild) <= this.mOrientationHelper.m())) {
                this.mAnchorInfo.c(focusedChild, getPosition(focusedChild));
            }
        } else {
            anchorInfo.e();
            AnchorInfo anchorInfo2 = this.mAnchorInfo;
            anchorInfo2.f4769d = this.mShouldReverseLayout ^ this.mStackFromEnd;
            E(recycler, state, anchorInfo2);
            this.mAnchorInfo.f4770e = true;
        }
        LayoutState layoutState = this.mLayoutState;
        if (layoutState.f4785k >= 0) {
            i10 = 1;
        } else {
            i10 = -1;
        }
        layoutState.f4780f = i10;
        int[] iArr = this.mReusableIntPair;
        iArr[0] = 0;
        iArr[1] = 0;
        calculateExtraLayoutSpace(state, iArr);
        int max = Math.max(0, this.mReusableIntPair[0]) + this.mOrientationHelper.m();
        int max2 = Math.max(0, this.mReusableIntPair[1]) + this.mOrientationHelper.j();
        if (state.e() && (i15 = this.mPendingScrollPosition) != -1 && this.mPendingScrollPositionOffset != Integer.MIN_VALUE && (findViewByPosition = findViewByPosition(i15)) != null) {
            if (this.mShouldReverseLayout) {
                i16 = this.mOrientationHelper.i() - this.mOrientationHelper.d(findViewByPosition);
                g10 = this.mPendingScrollPositionOffset;
            } else {
                g10 = this.mOrientationHelper.g(findViewByPosition) - this.mOrientationHelper.m();
                i16 = this.mPendingScrollPositionOffset;
            }
            int i18 = i16 - g10;
            if (i18 > 0) {
                max += i18;
            } else {
                max2 -= i18;
            }
        }
        AnchorInfo anchorInfo3 = this.mAnchorInfo;
        if (!anchorInfo3.f4769d ? !this.mShouldReverseLayout : this.mShouldReverseLayout) {
            i17 = 1;
        }
        onAnchorReady(recycler, state, anchorInfo3, i17);
        detachAndScrapAttachedViews(recycler);
        this.mLayoutState.f4787m = resolveIsInfinite();
        this.mLayoutState.f4784j = state.e();
        this.mLayoutState.f4783i = 0;
        AnchorInfo anchorInfo4 = this.mAnchorInfo;
        if (anchorInfo4.f4769d) {
            J(anchorInfo4);
            LayoutState layoutState2 = this.mLayoutState;
            layoutState2.f4782h = max;
            fill(recycler, layoutState2, state, false);
            LayoutState layoutState3 = this.mLayoutState;
            i12 = layoutState3.f4776b;
            int i19 = layoutState3.f4778d;
            int i20 = layoutState3.f4777c;
            if (i20 > 0) {
                max2 += i20;
            }
            H(this.mAnchorInfo);
            LayoutState layoutState4 = this.mLayoutState;
            layoutState4.f4782h = max2;
            layoutState4.f4778d += layoutState4.f4779e;
            fill(recycler, layoutState4, state, false);
            LayoutState layoutState5 = this.mLayoutState;
            i11 = layoutState5.f4776b;
            int i21 = layoutState5.f4777c;
            if (i21 > 0) {
                I(i19, i12);
                LayoutState layoutState6 = this.mLayoutState;
                layoutState6.f4782h = i21;
                fill(recycler, layoutState6, state, false);
                i12 = this.mLayoutState.f4776b;
            }
        } else {
            H(anchorInfo4);
            LayoutState layoutState7 = this.mLayoutState;
            layoutState7.f4782h = max2;
            fill(recycler, layoutState7, state, false);
            LayoutState layoutState8 = this.mLayoutState;
            i11 = layoutState8.f4776b;
            int i22 = layoutState8.f4778d;
            int i23 = layoutState8.f4777c;
            if (i23 > 0) {
                max += i23;
            }
            J(this.mAnchorInfo);
            LayoutState layoutState9 = this.mLayoutState;
            layoutState9.f4782h = max;
            layoutState9.f4778d += layoutState9.f4779e;
            fill(recycler, layoutState9, state, false);
            LayoutState layoutState10 = this.mLayoutState;
            i12 = layoutState10.f4776b;
            int i24 = layoutState10.f4777c;
            if (i24 > 0) {
                G(i22, i11);
                LayoutState layoutState11 = this.mLayoutState;
                layoutState11.f4782h = i24;
                fill(recycler, layoutState11, state, false);
                i11 = this.mLayoutState.f4776b;
            }
        }
        if (getChildCount() > 0) {
            if (this.mShouldReverseLayout ^ this.mStackFromEnd) {
                int r11 = r(i11, recycler, state, true);
                i13 = i12 + r11;
                i14 = i11 + r11;
                r10 = s(i13, recycler, state, false);
            } else {
                int s10 = s(i12, recycler, state, true);
                i13 = i12 + s10;
                i14 = i11 + s10;
                r10 = r(i14, recycler, state, false);
            }
            i12 = i13 + r10;
            i11 = i14 + r10;
        }
        v(recycler, state, i12, i11);
        if (!state.e()) {
            this.mOrientationHelper.s();
        } else {
            this.mAnchorInfo.e();
        }
        this.mLastStackFromEnd = this.mStackFromEnd;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    @SuppressLint({"UnknownNullness"})
    public void onLayoutCompleted(RecyclerView.State state) {
        super.onLayoutCompleted(state);
        this.mPendingSavedState = null;
        this.mPendingScrollPosition = -1;
        this.mPendingScrollPositionOffset = Integer.MIN_VALUE;
        this.mAnchorInfo.e();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    @SuppressLint({"UnknownNullness"})
    public void onRestoreInstanceState(Parcelable parcelable) {
        if (parcelable instanceof SavedState) {
            SavedState savedState = (SavedState) parcelable;
            this.mPendingSavedState = savedState;
            if (this.mPendingScrollPosition != -1) {
                savedState.b();
            }
            requestLayout();
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    @SuppressLint({"UnknownNullness"})
    public Parcelable onSaveInstanceState() {
        if (this.mPendingSavedState != null) {
            return new SavedState(this.mPendingSavedState);
        }
        SavedState savedState = new SavedState();
        if (getChildCount() > 0) {
            ensureLayoutState();
            boolean z10 = this.mLastStackFromEnd ^ this.mShouldReverseLayout;
            savedState.f4790i = z10;
            if (z10) {
                View t10 = t();
                savedState.f4789e = this.mOrientationHelper.i() - this.mOrientationHelper.d(t10);
                savedState.f4788d = getPosition(t10);
                return savedState;
            }
            View u10 = u();
            savedState.f4788d = getPosition(u10);
            savedState.f4789e = this.mOrientationHelper.g(u10) - this.mOrientationHelper.m();
            return savedState;
        }
        savedState.b();
        return savedState;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean performAccessibilityAction(int i10, Bundle bundle) {
        int min;
        if (super.performAccessibilityAction(i10, bundle)) {
            return true;
        }
        if (i10 == 16908343 && bundle != null) {
            if (this.mOrientation == 1) {
                int i11 = bundle.getInt("android.view.accessibility.action.ARGUMENT_ROW_INT", -1);
                if (i11 < 0) {
                    return false;
                }
                RecyclerView recyclerView = this.mRecyclerView;
                min = Math.min(i11, getRowCountForAccessibility(recyclerView.mRecycler, recyclerView.mState) - 1);
            } else {
                int i12 = bundle.getInt("android.view.accessibility.action.ARGUMENT_COLUMN_INT", -1);
                if (i12 < 0) {
                    return false;
                }
                RecyclerView recyclerView2 = this.mRecyclerView;
                min = Math.min(i12, getColumnCountForAccessibility(recyclerView2.mRecycler, recyclerView2.mState) - 1);
            }
            if (min >= 0) {
                scrollToPositionWithOffset(min, 0);
                return true;
            }
        }
        return false;
    }

    @Override // androidx.recyclerview.widget.i
    public void prepareForDrop(@NonNull View view, @NonNull View view2, int i10, int i11) {
        boolean z10;
        assertNotInLayoutOrScroll("Cannot drop a view during a scroll or layout calculation");
        ensureLayoutState();
        B();
        int position = getPosition(view);
        int position2 = getPosition(view2);
        if (position < position2) {
            z10 = true;
        } else {
            z10 = true;
        }
        if (this.mShouldReverseLayout) {
            if (z10) {
                scrollToPositionWithOffset(position2, this.mOrientationHelper.i() - (this.mOrientationHelper.g(view2) + this.mOrientationHelper.e(view)));
            } else {
                scrollToPositionWithOffset(position2, this.mOrientationHelper.i() - this.mOrientationHelper.d(view2));
            }
        } else if (z10) {
            scrollToPositionWithOffset(position2, this.mOrientationHelper.g(view2));
        } else {
            scrollToPositionWithOffset(position2, this.mOrientationHelper.d(view2) - this.mOrientationHelper.e(view));
        }
    }

    boolean resolveIsInfinite() {
        if (this.mOrientationHelper.k() == 0 && this.mOrientationHelper.h() == 0) {
            return true;
        }
        return false;
    }

    int scrollBy(int i10, RecyclerView.Recycler recycler, RecyclerView.State state) {
        int i11;
        if (getChildCount() == 0 || i10 == 0) {
            return 0;
        }
        ensureLayoutState();
        this.mLayoutState.f4775a = true;
        if (i10 > 0) {
            i11 = 1;
        } else {
            i11 = -1;
        }
        int abs = Math.abs(i10);
        F(i11, abs, true, state);
        LayoutState layoutState = this.mLayoutState;
        int fill = layoutState.f4781g + fill(recycler, layoutState, state, false);
        if (fill < 0) {
            return 0;
        }
        if (abs > fill) {
            i10 = i11 * fill;
        }
        this.mOrientationHelper.r(-i10);
        this.mLayoutState.f4785k = i10;
        return i10;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    @SuppressLint({"UnknownNullness"})
    public int scrollHorizontallyBy(int i10, RecyclerView.Recycler recycler, RecyclerView.State state) {
        if (this.mOrientation == 1) {
            return 0;
        }
        return scrollBy(i10, recycler, state);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void scrollToPosition(int i10) {
        this.mPendingScrollPosition = i10;
        this.mPendingScrollPositionOffset = Integer.MIN_VALUE;
        SavedState savedState = this.mPendingSavedState;
        if (savedState != null) {
            savedState.b();
        }
        requestLayout();
    }

    public void scrollToPositionWithOffset(int i10, int i11) {
        this.mPendingScrollPosition = i10;
        this.mPendingScrollPositionOffset = i11;
        SavedState savedState = this.mPendingSavedState;
        if (savedState != null) {
            savedState.b();
        }
        requestLayout();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    @SuppressLint({"UnknownNullness"})
    public int scrollVerticallyBy(int i10, RecyclerView.Recycler recycler, RecyclerView.State state) {
        if (this.mOrientation == 0) {
            return 0;
        }
        return scrollBy(i10, recycler, state);
    }

    public void setInitialPrefetchItemCount(int i10) {
        this.mInitialPrefetchItemCount = i10;
    }

    public void setOrientation(int i10) {
        if (i10 != 0 && i10 != 1) {
            throw new IllegalArgumentException("invalid orientation:" + i10);
        }
        assertNotInLayoutOrScroll(null);
        if (i10 == this.mOrientation && this.mOrientationHelper != null) {
            return;
        }
        OrientationHelper b10 = OrientationHelper.b(this, i10);
        this.mOrientationHelper = b10;
        this.mAnchorInfo.f4766a = b10;
        this.mOrientation = i10;
        requestLayout();
    }

    public void setRecycleChildrenOnDetach(boolean z10) {
        this.mRecycleChildrenOnDetach = z10;
    }

    public void setReverseLayout(boolean z10) {
        assertNotInLayoutOrScroll(null);
        if (z10 == this.mReverseLayout) {
            return;
        }
        this.mReverseLayout = z10;
        requestLayout();
    }

    public void setSmoothScrollbarEnabled(boolean z10) {
        this.mSmoothScrollbarEnabled = z10;
    }

    public void setStackFromEnd(boolean z10) {
        assertNotInLayoutOrScroll(null);
        if (this.mStackFromEnd == z10) {
            return;
        }
        this.mStackFromEnd = z10;
        requestLayout();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    boolean shouldMeasureTwice() {
        if (getHeightMode() != 1073741824 && getWidthMode() != 1073741824 && hasFlexibleChildInBothOrientations()) {
            return true;
        }
        return false;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    @SuppressLint({"UnknownNullness"})
    public void smoothScrollToPosition(RecyclerView recyclerView, RecyclerView.State state, int i10) {
        l lVar = new l(recyclerView.getContext());
        lVar.setTargetPosition(i10);
        startSmoothScroll(lVar);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean supportsPredictiveItemAnimations() {
        if (this.mPendingSavedState == null && this.mLastStackFromEnd == this.mStackFromEnd) {
            return true;
        }
        return false;
    }

    void validateChildOrder() {
        Log.d(TAG, "validating child count " + getChildCount());
        boolean z10 = true;
        if (getChildCount() >= 1) {
            int position = getPosition(getChildAt(0));
            int g10 = this.mOrientationHelper.g(getChildAt(0));
            if (this.mShouldReverseLayout) {
                for (int i10 = 1; i10 < getChildCount(); i10++) {
                    View childAt = getChildAt(i10);
                    int position2 = getPosition(childAt);
                    int g11 = this.mOrientationHelper.g(childAt);
                    if (position2 < position) {
                        w();
                        StringBuilder sb2 = new StringBuilder();
                        sb2.append("detected invalid position. loc invalid? ");
                        if (g11 >= g10) {
                            z10 = false;
                        }
                        sb2.append(z10);
                        throw new RuntimeException(sb2.toString());
                    } else if (g11 > g10) {
                        w();
                        throw new RuntimeException("detected invalid location");
                    }
                }
                return;
            }
            for (int i11 = 1; i11 < getChildCount(); i11++) {
                View childAt2 = getChildAt(i11);
                int position3 = getPosition(childAt2);
                int g12 = this.mOrientationHelper.g(childAt2);
                if (position3 < position) {
                    w();
                    StringBuilder sb3 = new StringBuilder();
                    sb3.append("detected invalid position. loc invalid? ");
                    if (g12 >= g10) {
                        z10 = false;
                    }
                    sb3.append(z10);
                    throw new RuntimeException(sb3.toString());
                } else if (g12 < g10) {
                    w();
                    throw new RuntimeException("detected invalid location");
                }
            }
        }
    }

    public LinearLayoutManager(Context context, int i10, boolean z10) {
        this.mOrientation = 1;
        this.mReverseLayout = false;
        this.mShouldReverseLayout = false;
        this.mStackFromEnd = false;
        this.mSmoothScrollbarEnabled = true;
        this.mPendingScrollPosition = -1;
        this.mPendingScrollPositionOffset = Integer.MIN_VALUE;
        this.mPendingSavedState = null;
        this.mAnchorInfo = new AnchorInfo();
        this.mLayoutChunkResult = new LayoutChunkResult();
        this.mInitialPrefetchItemCount = 2;
        this.mReusableIntPair = new int[2];
        setOrientation(i10);
        setReverseLayout(z10);
    }

    @SuppressLint({"UnknownNullness"})
    public LinearLayoutManager(Context context, AttributeSet attributeSet, int i10, int i11) {
        this.mOrientation = 1;
        this.mReverseLayout = false;
        this.mShouldReverseLayout = false;
        this.mStackFromEnd = false;
        this.mSmoothScrollbarEnabled = true;
        this.mPendingScrollPosition = -1;
        this.mPendingScrollPositionOffset = Integer.MIN_VALUE;
        this.mPendingSavedState = null;
        this.mAnchorInfo = new AnchorInfo();
        this.mLayoutChunkResult = new LayoutChunkResult();
        this.mInitialPrefetchItemCount = 2;
        this.mReusableIntPair = new int[2];
        RecyclerView.LayoutManager.Properties properties = RecyclerView.LayoutManager.getProperties(context, attributeSet, i10, i11);
        setOrientation(properties.f4802a);
        setReverseLayout(properties.f4804c);
        setStackFromEnd(properties.f4805d);
    }
}
