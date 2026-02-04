package com.google.android.material.appbar;

import android.animation.TimeInterpolator;
import android.animation.ValueAnimator;
import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.Rect;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.animation.AnimationUtils;
import android.view.animation.Interpolator;
import android.widget.AbsListView;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import androidx.annotation.NonNull;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.core.view.h0;
import androidx.core.view.s;
import androidx.core.view.v;
import java.lang.ref.WeakReference;
import java.util.Iterator;
import java.util.List;
import oh.h;
import yg.j;
import yg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class AppBarLayout extends LinearLayout implements CoordinatorLayout.b {
    private static final int K = j.f54249f;
    private ValueAnimator A;
    private ValueAnimator.AnimatorUpdateListener B;
    private final List C;
    private final long D;
    private final TimeInterpolator E;
    private int[] F;
    private Drawable G;
    private Integer H;
    private final float I;
    private Behavior J;

    /* renamed from: d  reason: collision with root package name */
    private int f14068d;

    /* renamed from: e  reason: collision with root package name */
    private int f14069e;

    /* renamed from: i  reason: collision with root package name */
    private int f14070i;

    /* renamed from: o  reason: collision with root package name */
    private int f14071o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f14072p;

    /* renamed from: q  reason: collision with root package name */
    private int f14073q;

    /* renamed from: r  reason: collision with root package name */
    private WindowInsetsCompat f14074r;

    /* renamed from: s  reason: collision with root package name */
    private List f14075s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f14076t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f14077u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f14078v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f14079w;

    /* renamed from: x  reason: collision with root package name */
    private int f14080x;

    /* renamed from: y  reason: collision with root package name */
    private WeakReference f14081y;

    /* renamed from: z  reason: collision with root package name */
    private final boolean f14082z;

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class BaseBehavior<T extends AppBarLayout> extends com.google.android.material.appbar.c {

        /* renamed from: v  reason: collision with root package name */
        private int f14083v;

        /* renamed from: w  reason: collision with root package name */
        private int f14084w;

        /* renamed from: x  reason: collision with root package name */
        private ValueAnimator f14085x;

        /* renamed from: y  reason: collision with root package name */
        private c f14086y;

        /* renamed from: z  reason: collision with root package name */
        private WeakReference f14087z;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public class a implements ValueAnimator.AnimatorUpdateListener {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ CoordinatorLayout f14088a;

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ AppBarLayout f14089b;

            a(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout) {
                this.f14088a = coordinatorLayout;
                this.f14089b = appBarLayout;
            }

            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public void onAnimationUpdate(ValueAnimator valueAnimator) {
                BaseBehavior.this.T(this.f14088a, this.f14089b, ((Integer) valueAnimator.getAnimatedValue()).intValue());
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public class b extends androidx.core.view.a {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ AppBarLayout f14091a;

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ CoordinatorLayout f14092b;

            b(AppBarLayout appBarLayout, CoordinatorLayout coordinatorLayout) {
                this.f14091a = appBarLayout;
                this.f14092b = coordinatorLayout;
            }

            @Override // androidx.core.view.a
            public void onInitializeAccessibilityNodeInfo(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
                View j02;
                super.onInitializeAccessibilityNodeInfo(view, accessibilityNodeInfoCompat);
                accessibilityNodeInfoCompat.w0(ScrollView.class.getName());
                if (this.f14091a.getTotalScrollRange() != 0 && (j02 = BaseBehavior.this.j0(this.f14092b)) != null && BaseBehavior.this.f0(this.f14091a)) {
                    if (BaseBehavior.this.Q() != (-this.f14091a.getTotalScrollRange())) {
                        accessibilityNodeInfoCompat.b(AccessibilityNodeInfoCompat.a.f3324q);
                        accessibilityNodeInfoCompat.V0(true);
                    }
                    if (BaseBehavior.this.Q() != 0) {
                        if (j02.canScrollVertically(-1)) {
                            if ((-this.f14091a.getDownNestedPreScrollRange()) != 0) {
                                accessibilityNodeInfoCompat.b(AccessibilityNodeInfoCompat.a.f3325r);
                                accessibilityNodeInfoCompat.V0(true);
                                return;
                            }
                            return;
                        }
                        accessibilityNodeInfoCompat.b(AccessibilityNodeInfoCompat.a.f3325r);
                        accessibilityNodeInfoCompat.V0(true);
                    }
                }
            }

            @Override // androidx.core.view.a
            public boolean performAccessibilityAction(View view, int i10, Bundle bundle) {
                if (i10 == 4096) {
                    this.f14091a.setExpanded(false);
                    return true;
                } else if (i10 == 8192) {
                    if (BaseBehavior.this.Q() != 0) {
                        View j02 = BaseBehavior.this.j0(this.f14092b);
                        if (j02.canScrollVertically(-1)) {
                            int i11 = -this.f14091a.getDownNestedPreScrollRange();
                            if (i11 != 0) {
                                BaseBehavior.this.u(this.f14092b, this.f14091a, j02, 0, i11, new int[]{0, 0}, 1);
                                return true;
                            }
                        } else {
                            this.f14091a.setExpanded(true);
                            return true;
                        }
                    }
                    return false;
                } else {
                    return super.performAccessibilityAction(view, i10, bundle);
                }
            }
        }

        public BaseBehavior() {
        }

        private void A0(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout) {
            int topInset = appBarLayout.getTopInset() + appBarLayout.getPaddingTop();
            int Q = Q() - topInset;
            int i02 = i0(appBarLayout, Q);
            if (i02 >= 0) {
                View childAt = appBarLayout.getChildAt(i02);
                d dVar = (d) childAt.getLayoutParams();
                int c10 = dVar.c();
                if ((c10 & 17) == 17) {
                    int i10 = -childAt.getTop();
                    int i11 = -childAt.getBottom();
                    if (i02 == 0 && h0.w(appBarLayout) && h0.w(childAt)) {
                        i10 -= appBarLayout.getTopInset();
                    }
                    if (e0(c10, 2)) {
                        i11 += h0.A(childAt);
                    } else if (e0(c10, 5)) {
                        int A = h0.A(childAt) + i11;
                        if (Q < A) {
                            i10 = A;
                        } else {
                            i11 = A;
                        }
                    }
                    if (e0(c10, 32)) {
                        i10 += ((LinearLayout.LayoutParams) dVar).topMargin;
                        i11 -= ((LinearLayout.LayoutParams) dVar).bottomMargin;
                    }
                    Z(coordinatorLayout, appBarLayout, u1.a.b(b0(Q, i11, i10) + topInset, -appBarLayout.getTotalScrollRange(), 0), 0.0f);
                }
            }
        }

        private void B0(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout, int i10, int i11, boolean z10) {
            View h02 = h0(appBarLayout, i10);
            boolean z11 = false;
            if (h02 != null) {
                int c10 = ((d) h02.getLayoutParams()).c();
                if ((c10 & 1) != 0) {
                    int A = h0.A(h02);
                    if (i11 <= 0 || (c10 & 12) == 0 ? !((c10 & 2) == 0 || (-i10) < (h02.getBottom() - A) - appBarLayout.getTopInset()) : (-i10) >= (h02.getBottom() - A) - appBarLayout.getTopInset()) {
                        z11 = true;
                    }
                }
            }
            if (appBarLayout.o()) {
                z11 = appBarLayout.z(g0(coordinatorLayout));
            }
            boolean w10 = appBarLayout.w(z11);
            if (z10 || (w10 && z0(coordinatorLayout, appBarLayout))) {
                if (appBarLayout.getBackground() != null) {
                    appBarLayout.getBackground().jumpToCurrentState();
                }
                if (appBarLayout.getForeground() != null) {
                    appBarLayout.getForeground().jumpToCurrentState();
                }
                if (appBarLayout.getStateListAnimator() != null) {
                    appBarLayout.getStateListAnimator().jumpToCurrentState();
                }
            }
        }

        private void Y(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout) {
            if (!h0.N(coordinatorLayout)) {
                h0.n0(coordinatorLayout, new b(appBarLayout, coordinatorLayout));
            }
        }

        private void Z(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout, int i10, float f10) {
            int height;
            int abs = Math.abs(Q() - i10);
            float abs2 = Math.abs(f10);
            if (abs2 > 0.0f) {
                height = Math.round((abs / abs2) * 1000.0f) * 3;
            } else {
                height = (int) (((abs / appBarLayout.getHeight()) + 1.0f) * 150.0f);
            }
            a0(coordinatorLayout, appBarLayout, i10, height);
        }

        private void a0(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout, int i10, int i11) {
            int Q = Q();
            if (Q == i10) {
                ValueAnimator valueAnimator = this.f14085x;
                if (valueAnimator != null && valueAnimator.isRunning()) {
                    this.f14085x.cancel();
                    return;
                }
                return;
            }
            ValueAnimator valueAnimator2 = this.f14085x;
            if (valueAnimator2 == null) {
                ValueAnimator valueAnimator3 = new ValueAnimator();
                this.f14085x = valueAnimator3;
                valueAnimator3.setInterpolator(zg.a.f55945e);
                this.f14085x.addUpdateListener(new a(coordinatorLayout, appBarLayout));
            } else {
                valueAnimator2.cancel();
            }
            this.f14085x.setDuration(Math.min(i11, 600));
            this.f14085x.setIntValues(Q, i10);
            this.f14085x.start();
        }

        private int b0(int i10, int i11, int i12) {
            if (i10 < (i11 + i12) / 2) {
                return i11;
            }
            return i12;
        }

        private boolean d0(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout, View view) {
            if (appBarLayout.k() && coordinatorLayout.getHeight() - view.getHeight() <= appBarLayout.getHeight()) {
                return true;
            }
            return false;
        }

        private static boolean e0(int i10, int i11) {
            return (i10 & i11) == i11;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public boolean f0(AppBarLayout appBarLayout) {
            int childCount = appBarLayout.getChildCount();
            for (int i10 = 0; i10 < childCount; i10++) {
                if (((d) appBarLayout.getChildAt(i10).getLayoutParams()).f14102a != 0) {
                    return true;
                }
            }
            return false;
        }

        private View g0(CoordinatorLayout coordinatorLayout) {
            int childCount = coordinatorLayout.getChildCount();
            for (int i10 = 0; i10 < childCount; i10++) {
                View childAt = coordinatorLayout.getChildAt(i10);
                if ((childAt instanceof s) || (childAt instanceof AbsListView) || (childAt instanceof ScrollView)) {
                    return childAt;
                }
            }
            return null;
        }

        private static View h0(AppBarLayout appBarLayout, int i10) {
            int abs = Math.abs(i10);
            int childCount = appBarLayout.getChildCount();
            for (int i11 = 0; i11 < childCount; i11++) {
                View childAt = appBarLayout.getChildAt(i11);
                if (abs >= childAt.getTop() && abs <= childAt.getBottom()) {
                    return childAt;
                }
            }
            return null;
        }

        private int i0(AppBarLayout appBarLayout, int i10) {
            int childCount = appBarLayout.getChildCount();
            for (int i11 = 0; i11 < childCount; i11++) {
                View childAt = appBarLayout.getChildAt(i11);
                int top = childAt.getTop();
                int bottom = childAt.getBottom();
                d dVar = (d) childAt.getLayoutParams();
                if (e0(dVar.c(), 32)) {
                    top -= ((LinearLayout.LayoutParams) dVar).topMargin;
                    bottom += ((LinearLayout.LayoutParams) dVar).bottomMargin;
                }
                int i12 = -i10;
                if (top <= i12 && bottom >= i12) {
                    return i11;
                }
            }
            return -1;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public View j0(CoordinatorLayout coordinatorLayout) {
            int childCount = coordinatorLayout.getChildCount();
            for (int i10 = 0; i10 < childCount; i10++) {
                View childAt = coordinatorLayout.getChildAt(i10);
                if (((CoordinatorLayout.f) childAt.getLayoutParams()).f() instanceof ScrollingViewBehavior) {
                    return childAt;
                }
            }
            return null;
        }

        private int m0(AppBarLayout appBarLayout, int i10) {
            int abs = Math.abs(i10);
            int childCount = appBarLayout.getChildCount();
            int i11 = 0;
            int i12 = 0;
            while (true) {
                if (i12 >= childCount) {
                    break;
                }
                View childAt = appBarLayout.getChildAt(i12);
                d dVar = (d) childAt.getLayoutParams();
                Interpolator d10 = dVar.d();
                if (abs >= childAt.getTop() && abs <= childAt.getBottom()) {
                    if (d10 != null) {
                        int c10 = dVar.c();
                        if ((c10 & 1) != 0) {
                            i11 = childAt.getHeight() + ((LinearLayout.LayoutParams) dVar).topMargin + ((LinearLayout.LayoutParams) dVar).bottomMargin;
                            if ((c10 & 2) != 0) {
                                i11 -= h0.A(childAt);
                            }
                        }
                        if (h0.w(childAt)) {
                            i11 -= appBarLayout.getTopInset();
                        }
                        if (i11 > 0) {
                            float f10 = i11;
                            return Integer.signum(i10) * (childAt.getTop() + Math.round(f10 * d10.getInterpolation((abs - childAt.getTop()) / f10)));
                        }
                    }
                } else {
                    i12++;
                }
            }
            return i10;
        }

        private boolean z0(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout) {
            List n10 = coordinatorLayout.n(appBarLayout);
            int size = n10.size();
            for (int i10 = 0; i10 < size; i10++) {
                CoordinatorLayout.c f10 = ((CoordinatorLayout.f) ((View) n10.get(i10)).getLayoutParams()).f();
                if (f10 instanceof ScrollingViewBehavior) {
                    if (((ScrollingViewBehavior) f10).O() == 0) {
                        return false;
                    }
                    return true;
                }
            }
            return false;
        }

        @Override // com.google.android.material.appbar.c
        int Q() {
            return I() + this.f14083v;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // com.google.android.material.appbar.c
        /* renamed from: c0 */
        public boolean L(AppBarLayout appBarLayout) {
            WeakReference weakReference = this.f14087z;
            if (weakReference == null) {
                return true;
            }
            View view = (View) weakReference.get();
            if (view != null && view.isShown() && !view.canScrollVertically(-1)) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // com.google.android.material.appbar.c
        /* renamed from: k0 */
        public int O(AppBarLayout appBarLayout) {
            return (-appBarLayout.getDownNestedScrollRange()) + appBarLayout.getTopInset();
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // com.google.android.material.appbar.c
        /* renamed from: l0 */
        public int P(AppBarLayout appBarLayout) {
            return appBarLayout.getTotalScrollRange();
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // com.google.android.material.appbar.c
        /* renamed from: n0 */
        public void R(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout) {
            A0(coordinatorLayout, appBarLayout);
            if (appBarLayout.o()) {
                appBarLayout.w(appBarLayout.z(g0(coordinatorLayout)));
            }
        }

        @Override // com.google.android.material.appbar.e, androidx.coordinatorlayout.widget.CoordinatorLayout.c
        /* renamed from: o0 */
        public boolean p(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout, int i10) {
            boolean z10;
            int round;
            boolean p10 = super.p(coordinatorLayout, appBarLayout, i10);
            int pendingAction = appBarLayout.getPendingAction();
            c cVar = this.f14086y;
            if (cVar != null && (pendingAction & 8) == 0) {
                if (cVar.f14094i) {
                    T(coordinatorLayout, appBarLayout, -appBarLayout.getTotalScrollRange());
                } else if (cVar.f14095o) {
                    T(coordinatorLayout, appBarLayout, 0);
                } else {
                    View childAt = appBarLayout.getChildAt(cVar.f14096p);
                    int i11 = -childAt.getBottom();
                    if (this.f14086y.f14098r) {
                        round = h0.A(childAt) + appBarLayout.getTopInset();
                    } else {
                        round = Math.round(childAt.getHeight() * this.f14086y.f14097q);
                    }
                    T(coordinatorLayout, appBarLayout, i11 + round);
                }
            } else if (pendingAction != 0) {
                if ((pendingAction & 4) != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if ((pendingAction & 2) != 0) {
                    int i12 = -appBarLayout.getUpNestedPreScrollRange();
                    if (z10) {
                        Z(coordinatorLayout, appBarLayout, i12, 0.0f);
                    } else {
                        T(coordinatorLayout, appBarLayout, i12);
                    }
                } else if ((pendingAction & 1) != 0) {
                    if (z10) {
                        Z(coordinatorLayout, appBarLayout, 0, 0.0f);
                    } else {
                        T(coordinatorLayout, appBarLayout, 0);
                    }
                }
            }
            appBarLayout.s();
            this.f14086y = null;
            K(u1.a.b(I(), -appBarLayout.getTotalScrollRange(), 0));
            B0(coordinatorLayout, appBarLayout, I(), 0, true);
            appBarLayout.q(I());
            Y(coordinatorLayout, appBarLayout);
            return p10;
        }

        @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
        /* renamed from: p0 */
        public boolean q(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout, int i10, int i11, int i12, int i13) {
            if (((ViewGroup.MarginLayoutParams) ((CoordinatorLayout.f) appBarLayout.getLayoutParams())).height == -2) {
                coordinatorLayout.F(appBarLayout, i10, i11, View.MeasureSpec.makeMeasureSpec(0, 0), i13);
                return true;
            }
            return super.q(coordinatorLayout, appBarLayout, i10, i11, i12, i13);
        }

        /* JADX WARN: Removed duplicated region for block: B:12:0x002d  */
        /* JADX WARN: Removed duplicated region for block: B:14:? A[RETURN, SYNTHETIC] */
        @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
        /* renamed from: q0 */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public void u(androidx.coordinatorlayout.widget.CoordinatorLayout r7, com.google.android.material.appbar.AppBarLayout r8, android.view.View r9, int r10, int r11, int[] r12, int r13) {
            /*
                r6 = this;
                if (r11 == 0) goto L26
                if (r11 >= 0) goto L11
                int r10 = r8.getTotalScrollRange()
                int r10 = -r10
                int r13 = r8.getDownNestedPreScrollRange()
                int r13 = r13 + r10
            Le:
                r4 = r10
                r5 = r13
                goto L18
            L11:
                int r10 = r8.getUpNestedPreScrollRange()
                int r10 = -r10
                r13 = 0
                goto Le
            L18:
                if (r4 == r5) goto L26
                r10 = 1
                r0 = r6
                r1 = r7
                r2 = r8
                r3 = r11
                int r7 = r0.S(r1, r2, r3, r4, r5)
                r12[r10] = r7
                goto L27
            L26:
                r2 = r8
            L27:
                boolean r7 = r2.o()
                if (r7 == 0) goto L34
                boolean r7 = r2.z(r9)
                r2.w(r7)
            L34:
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.appbar.AppBarLayout.BaseBehavior.u(androidx.coordinatorlayout.widget.CoordinatorLayout, com.google.android.material.appbar.AppBarLayout, android.view.View, int, int, int[], int):void");
        }

        @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
        /* renamed from: r0 */
        public void x(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout, View view, int i10, int i11, int i12, int i13, int i14, int[] iArr) {
            CoordinatorLayout coordinatorLayout2;
            AppBarLayout appBarLayout2;
            int i15;
            if (i13 < 0) {
                coordinatorLayout2 = coordinatorLayout;
                appBarLayout2 = appBarLayout;
                i15 = i13;
                iArr[1] = S(coordinatorLayout2, appBarLayout2, i15, -appBarLayout.getDownNestedScrollRange(), 0);
            } else {
                coordinatorLayout2 = coordinatorLayout;
                appBarLayout2 = appBarLayout;
                i15 = i13;
            }
            if (i15 == 0) {
                Y(coordinatorLayout2, appBarLayout2);
            }
        }

        @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
        /* renamed from: s0 */
        public void B(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout, Parcelable parcelable) {
            if (parcelable instanceof c) {
                w0((c) parcelable, true);
                super.B(coordinatorLayout, appBarLayout, this.f14086y.a());
                return;
            }
            super.B(coordinatorLayout, appBarLayout, parcelable);
            this.f14086y = null;
        }

        @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
        /* renamed from: t0 */
        public Parcelable C(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout) {
            Parcelable C = super.C(coordinatorLayout, appBarLayout);
            c x02 = x0(C, appBarLayout);
            if (x02 == null) {
                return C;
            }
            return x02;
        }

        @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
        /* renamed from: u0 */
        public boolean E(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout, View view, View view2, int i10, int i11) {
            boolean z10;
            ValueAnimator valueAnimator;
            if ((i10 & 2) != 0 && (appBarLayout.o() || d0(coordinatorLayout, appBarLayout, view))) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10 && (valueAnimator = this.f14085x) != null) {
                valueAnimator.cancel();
            }
            this.f14087z = null;
            this.f14084w = i11;
            return z10;
        }

        @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
        /* renamed from: v0 */
        public void G(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout, View view, int i10) {
            if (this.f14084w == 0 || i10 == 1) {
                A0(coordinatorLayout, appBarLayout);
                if (appBarLayout.o()) {
                    appBarLayout.w(appBarLayout.z(view));
                }
            }
            this.f14087z = new WeakReference(view);
        }

        void w0(c cVar, boolean z10) {
            if (this.f14086y != null && !z10) {
                return;
            }
            this.f14086y = cVar;
        }

        c x0(Parcelable parcelable, AppBarLayout appBarLayout) {
            boolean z10;
            boolean z11;
            int I = I();
            int childCount = appBarLayout.getChildCount();
            boolean z12 = false;
            for (int i10 = 0; i10 < childCount; i10++) {
                View childAt = appBarLayout.getChildAt(i10);
                int bottom = childAt.getBottom() + I;
                if (childAt.getTop() + I <= 0 && bottom >= 0) {
                    if (parcelable == null) {
                        parcelable = u2.a.f50385e;
                    }
                    c cVar = new c(parcelable);
                    if (I == 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    cVar.f14095o = z10;
                    if (!z10 && (-I) >= appBarLayout.getTotalScrollRange()) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    cVar.f14094i = z11;
                    cVar.f14096p = i10;
                    if (bottom == h0.A(childAt) + appBarLayout.getTopInset()) {
                        z12 = true;
                    }
                    cVar.f14098r = z12;
                    cVar.f14097q = bottom / childAt.getHeight();
                    return cVar;
                }
            }
            return null;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // com.google.android.material.appbar.c
        /* renamed from: y0 */
        public int U(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout, int i10, int i11, int i12) {
            CoordinatorLayout coordinatorLayout2;
            AppBarLayout appBarLayout2;
            int i13;
            int Q = Q();
            int i14 = 0;
            if (i11 != 0 && Q >= i11 && Q <= i12) {
                int b10 = u1.a.b(i10, i11, i12);
                if (Q != b10) {
                    if (appBarLayout.i()) {
                        i13 = m0(appBarLayout, b10);
                    } else {
                        i13 = b10;
                    }
                    boolean K = K(i13);
                    int i15 = Q - b10;
                    this.f14083v = b10 - i13;
                    int i16 = 1;
                    if (K) {
                        while (i14 < appBarLayout.getChildCount()) {
                            d dVar = (d) appBarLayout.getChildAt(i14).getLayoutParams();
                            b b11 = dVar.b();
                            if (b11 != null && (dVar.c() & 1) != 0) {
                                b11.a(appBarLayout, appBarLayout.getChildAt(i14), I());
                            }
                            i14++;
                        }
                    }
                    if (!K && appBarLayout.i()) {
                        coordinatorLayout.g(appBarLayout);
                    }
                    appBarLayout.q(I());
                    if (b10 < Q) {
                        i16 = -1;
                    }
                    coordinatorLayout2 = coordinatorLayout;
                    appBarLayout2 = appBarLayout;
                    B0(coordinatorLayout2, appBarLayout2, b10, i16, false);
                    i14 = i15;
                } else {
                    coordinatorLayout2 = coordinatorLayout;
                    appBarLayout2 = appBarLayout;
                }
            } else {
                coordinatorLayout2 = coordinatorLayout;
                appBarLayout2 = appBarLayout;
                this.f14083v = 0;
            }
            Y(coordinatorLayout2, appBarLayout2);
            return i14;
        }

        public BaseBehavior(Context context, AttributeSet attributeSet) {
            super(context, attributeSet);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static class c extends u2.a {
            public static final Parcelable.Creator<c> CREATOR = new a();

            /* renamed from: i  reason: collision with root package name */
            boolean f14094i;

            /* renamed from: o  reason: collision with root package name */
            boolean f14095o;

            /* renamed from: p  reason: collision with root package name */
            int f14096p;

            /* renamed from: q  reason: collision with root package name */
            float f14097q;

            /* renamed from: r  reason: collision with root package name */
            boolean f14098r;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            class a implements Parcelable.ClassLoaderCreator {
                a() {
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public c createFromParcel(Parcel parcel) {
                    return new c(parcel, null);
                }

                @Override // android.os.Parcelable.ClassLoaderCreator
                /* renamed from: b */
                public c createFromParcel(Parcel parcel, ClassLoader classLoader) {
                    return new c(parcel, classLoader);
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: c */
                public c[] newArray(int i10) {
                    return new c[i10];
                }
            }

            public c(Parcel parcel, ClassLoader classLoader) {
                super(parcel, classLoader);
                this.f14094i = parcel.readByte() != 0;
                this.f14095o = parcel.readByte() != 0;
                this.f14096p = parcel.readInt();
                this.f14097q = parcel.readFloat();
                this.f14098r = parcel.readByte() != 0;
            }

            @Override // u2.a, android.os.Parcelable
            public void writeToParcel(Parcel parcel, int i10) {
                super.writeToParcel(parcel, i10);
                parcel.writeByte(this.f14094i ? (byte) 1 : (byte) 0);
                parcel.writeByte(this.f14095o ? (byte) 1 : (byte) 0);
                parcel.writeInt(this.f14096p);
                parcel.writeFloat(this.f14097q);
                parcel.writeByte(this.f14098r ? (byte) 1 : (byte) 0);
            }

            public c(Parcelable parcelable) {
                super(parcelable);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class Behavior extends BaseBehavior<AppBarLayout> {
        public Behavior() {
        }

        @Override // com.google.android.material.appbar.c, androidx.coordinatorlayout.widget.CoordinatorLayout.c
        public /* bridge */ /* synthetic */ boolean H(CoordinatorLayout coordinatorLayout, View view, MotionEvent motionEvent) {
            return super.H(coordinatorLayout, view, motionEvent);
        }

        @Override // com.google.android.material.appbar.e
        public /* bridge */ /* synthetic */ int I() {
            return super.I();
        }

        @Override // com.google.android.material.appbar.e
        public /* bridge */ /* synthetic */ boolean K(int i10) {
            return super.K(i10);
        }

        @Override // com.google.android.material.appbar.c, androidx.coordinatorlayout.widget.CoordinatorLayout.c
        public /* bridge */ /* synthetic */ boolean o(CoordinatorLayout coordinatorLayout, View view, MotionEvent motionEvent) {
            return super.o(coordinatorLayout, view, motionEvent);
        }

        @Override // com.google.android.material.appbar.AppBarLayout.BaseBehavior
        public /* bridge */ /* synthetic */ boolean o0(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout, int i10) {
            return super.p(coordinatorLayout, appBarLayout, i10);
        }

        @Override // com.google.android.material.appbar.AppBarLayout.BaseBehavior
        public /* bridge */ /* synthetic */ boolean p0(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout, int i10, int i11, int i12, int i13) {
            return super.q(coordinatorLayout, appBarLayout, i10, i11, i12, i13);
        }

        @Override // com.google.android.material.appbar.AppBarLayout.BaseBehavior
        public /* bridge */ /* synthetic */ void q0(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout, View view, int i10, int i11, int[] iArr, int i12) {
            super.u(coordinatorLayout, appBarLayout, view, i10, i11, iArr, i12);
        }

        @Override // com.google.android.material.appbar.AppBarLayout.BaseBehavior
        public /* bridge */ /* synthetic */ void r0(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout, View view, int i10, int i11, int i12, int i13, int i14, int[] iArr) {
            super.x(coordinatorLayout, appBarLayout, view, i10, i11, i12, i13, i14, iArr);
        }

        @Override // com.google.android.material.appbar.AppBarLayout.BaseBehavior
        public /* bridge */ /* synthetic */ void s0(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout, Parcelable parcelable) {
            super.B(coordinatorLayout, appBarLayout, parcelable);
        }

        @Override // com.google.android.material.appbar.AppBarLayout.BaseBehavior
        public /* bridge */ /* synthetic */ Parcelable t0(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout) {
            return super.C(coordinatorLayout, appBarLayout);
        }

        @Override // com.google.android.material.appbar.AppBarLayout.BaseBehavior
        public /* bridge */ /* synthetic */ boolean u0(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout, View view, View view2, int i10, int i11) {
            return super.E(coordinatorLayout, appBarLayout, view, view2, i10, i11);
        }

        @Override // com.google.android.material.appbar.AppBarLayout.BaseBehavior
        public /* bridge */ /* synthetic */ void v0(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout, View view, int i10) {
            super.G(coordinatorLayout, appBarLayout, view, i10);
        }

        public Behavior(Context context, AttributeSet attributeSet) {
            super(context, attributeSet);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class ScrollingViewBehavior extends com.google.android.material.appbar.d {
        public ScrollingViewBehavior() {
        }

        private static int V(AppBarLayout appBarLayout) {
            CoordinatorLayout.c f10 = ((CoordinatorLayout.f) appBarLayout.getLayoutParams()).f();
            if (f10 instanceof BaseBehavior) {
                return ((BaseBehavior) f10).Q();
            }
            return 0;
        }

        private void W(View view, View view2) {
            CoordinatorLayout.c f10 = ((CoordinatorLayout.f) view2.getLayoutParams()).f();
            if (f10 instanceof BaseBehavior) {
                h0.Y(view, (((view2.getBottom() - view.getTop()) + ((BaseBehavior) f10).f14083v) + Q()) - M(view2));
            }
        }

        private void X(View view, View view2) {
            if (view2 instanceof AppBarLayout) {
                AppBarLayout appBarLayout = (AppBarLayout) view2;
                if (appBarLayout.o()) {
                    appBarLayout.w(appBarLayout.z(view));
                }
            }
        }

        @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
        public boolean A(CoordinatorLayout coordinatorLayout, View view, Rect rect, boolean z10) {
            AppBarLayout L = L(coordinatorLayout.m(view));
            if (L != null) {
                Rect rect2 = new Rect(rect);
                rect2.offset(view.getLeft(), view.getTop());
                Rect rect3 = this.f14129o;
                rect3.set(0, 0, coordinatorLayout.getWidth(), coordinatorLayout.getHeight());
                if (!rect3.contains(rect2)) {
                    L.t(false, !z10);
                    return true;
                }
            }
            return false;
        }

        @Override // com.google.android.material.appbar.d
        float N(View view) {
            int i10;
            if (view instanceof AppBarLayout) {
                AppBarLayout appBarLayout = (AppBarLayout) view;
                int totalScrollRange = appBarLayout.getTotalScrollRange();
                int downNestedPreScrollRange = appBarLayout.getDownNestedPreScrollRange();
                int V = V(appBarLayout);
                if ((downNestedPreScrollRange == 0 || totalScrollRange + V > downNestedPreScrollRange) && (i10 = totalScrollRange - downNestedPreScrollRange) != 0) {
                    return (V / i10) + 1.0f;
                }
            }
            return 0.0f;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // com.google.android.material.appbar.d
        public int P(View view) {
            if (view instanceof AppBarLayout) {
                return ((AppBarLayout) view).getTotalScrollRange();
            }
            return super.P(view);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // com.google.android.material.appbar.d
        /* renamed from: U */
        public AppBarLayout L(List list) {
            int size = list.size();
            for (int i10 = 0; i10 < size; i10++) {
                View view = (View) list.get(i10);
                if (view instanceof AppBarLayout) {
                    return (AppBarLayout) view;
                }
            }
            return null;
        }

        @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
        public boolean i(CoordinatorLayout coordinatorLayout, View view, View view2) {
            return view2 instanceof AppBarLayout;
        }

        @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
        public boolean l(CoordinatorLayout coordinatorLayout, View view, View view2) {
            W(view, view2);
            X(view, view2);
            return false;
        }

        @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
        public void m(CoordinatorLayout coordinatorLayout, View view, View view2) {
            if (view2 instanceof AppBarLayout) {
                h0.n0(coordinatorLayout, null);
            }
        }

        @Override // com.google.android.material.appbar.e, androidx.coordinatorlayout.widget.CoordinatorLayout.c
        public /* bridge */ /* synthetic */ boolean p(CoordinatorLayout coordinatorLayout, View view, int i10) {
            return super.p(coordinatorLayout, view, i10);
        }

        @Override // com.google.android.material.appbar.d, androidx.coordinatorlayout.widget.CoordinatorLayout.c
        public /* bridge */ /* synthetic */ boolean q(CoordinatorLayout coordinatorLayout, View view, int i10, int i11, int i12, int i13) {
            return super.q(coordinatorLayout, view, i10, i11, i12, i13);
        }

        public ScrollingViewBehavior(Context context, AttributeSet attributeSet) {
            super(context, attributeSet);
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, k.f54405n5);
            S(obtainStyledAttributes.getDimensionPixelSize(k.f54414o5, 0));
            obtainStyledAttributes.recycle();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements v {
        a() {
        }

        @Override // androidx.core.view.v
        public WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
            return AppBarLayout.this.r(windowInsetsCompat);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class b {
        public abstract void a(AppBarLayout appBarLayout, View view, float f10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c extends b {

        /* renamed from: a  reason: collision with root package name */
        private final Rect f14100a = new Rect();

        /* renamed from: b  reason: collision with root package name */
        private final Rect f14101b = new Rect();

        private static void b(Rect rect, AppBarLayout appBarLayout, View view) {
            view.getDrawingRect(rect);
            appBarLayout.offsetDescendantRectToMyCoords(view, rect);
            rect.offset(0, -appBarLayout.getTopInset());
        }

        @Override // com.google.android.material.appbar.AppBarLayout.b
        public void a(AppBarLayout appBarLayout, View view, float f10) {
            b(this.f14100a, appBarLayout, view);
            float abs = this.f14100a.top - Math.abs(f10);
            if (abs <= 0.0f) {
                float a10 = 1.0f - u1.a.a(Math.abs(abs / this.f14100a.height()), 0.0f, 1.0f);
                float height = (-abs) - ((this.f14100a.height() * 0.3f) * (1.0f - (a10 * a10)));
                view.setTranslationY(height);
                view.getDrawingRect(this.f14101b);
                this.f14101b.offset(0, (int) (-height));
                if (height >= this.f14101b.height()) {
                    view.setVisibility(4);
                } else {
                    view.setVisibility(0);
                }
                h0.u0(view, this.f14101b);
                return;
            }
            h0.u0(view, null);
            view.setTranslationY(0.0f);
            view.setVisibility(0);
        }
    }

    public AppBarLayout(Context context) {
        this(context, null);
    }

    private boolean A() {
        if (getChildCount() > 0) {
            View childAt = getChildAt(0);
            if (childAt.getVisibility() != 8 && !h0.w(childAt)) {
                return true;
            }
        }
        return false;
    }

    private void B(float f10, float f11) {
        ValueAnimator valueAnimator = this.A;
        if (valueAnimator != null) {
            valueAnimator.cancel();
        }
        ValueAnimator ofFloat = ValueAnimator.ofFloat(f10, f11);
        this.A = ofFloat;
        ofFloat.setDuration(this.D);
        this.A.setInterpolator(this.E);
        ValueAnimator.AnimatorUpdateListener animatorUpdateListener = this.B;
        if (animatorUpdateListener != null) {
            this.A.addUpdateListener(animatorUpdateListener);
        }
        this.A.start();
    }

    private void C() {
        setWillNotDraw(!y());
    }

    public static /* synthetic */ void a(AppBarLayout appBarLayout, oh.g gVar, ValueAnimator valueAnimator) {
        appBarLayout.getClass();
        float floatValue = ((Float) valueAnimator.getAnimatedValue()).floatValue();
        gVar.W(floatValue);
        Drawable drawable = appBarLayout.G;
        if (drawable instanceof oh.g) {
            ((oh.g) drawable).W(floatValue);
        }
        Iterator it = appBarLayout.C.iterator();
        if (!it.hasNext()) {
            return;
        }
        android.support.v4.media.session.b.a(it.next());
        gVar.A();
        throw null;
    }

    public static /* synthetic */ void b(AppBarLayout appBarLayout, ColorStateList colorStateList, ColorStateList colorStateList2, oh.g gVar, Integer num, ValueAnimator valueAnimator) {
        Integer num2;
        appBarLayout.getClass();
        int j10 = eh.a.j(colorStateList.getDefaultColor(), colorStateList2.getDefaultColor(), ((Float) valueAnimator.getAnimatedValue()).floatValue());
        gVar.X(ColorStateList.valueOf(j10));
        if (appBarLayout.G != null && (num2 = appBarLayout.H) != null && num2.equals(num)) {
            s1.a.n(appBarLayout.G, j10);
        }
        if (!appBarLayout.C.isEmpty()) {
            for (Object obj : appBarLayout.C) {
                android.support.v4.media.session.b.a(obj);
                if (gVar.x() != null) {
                    throw null;
                }
            }
        }
    }

    private void c() {
        WeakReference weakReference = this.f14081y;
        if (weakReference != null) {
            weakReference.clear();
        }
        this.f14081y = null;
    }

    private Integer d() {
        Drawable drawable = this.G;
        if (drawable instanceof oh.g) {
            return Integer.valueOf(((oh.g) drawable).A());
        }
        ColorStateList g10 = com.google.android.material.drawable.c.g(drawable);
        if (g10 != null) {
            return Integer.valueOf(g10.getDefaultColor());
        }
        return null;
    }

    private View e(View view) {
        int i10;
        View view2;
        if (this.f14081y == null && (i10 = this.f14080x) != -1) {
            if (view != null) {
                view2 = view.findViewById(i10);
            } else {
                view2 = null;
            }
            if (view2 == null && (getParent() instanceof ViewGroup)) {
                view2 = ((ViewGroup) getParent()).findViewById(this.f14080x);
            }
            if (view2 != null) {
                this.f14081y = new WeakReference(view2);
            }
        }
        WeakReference weakReference = this.f14081y;
        if (weakReference == null) {
            return null;
        }
        return (View) weakReference.get();
    }

    private boolean j() {
        int childCount = getChildCount();
        for (int i10 = 0; i10 < childCount; i10++) {
            if (((d) getChildAt(i10).getLayoutParams()).e()) {
                return true;
            }
        }
        return false;
    }

    private void l(final oh.g gVar, final ColorStateList colorStateList, final ColorStateList colorStateList2) {
        final Integer f10 = eh.a.f(getContext(), yg.b.f54100o);
        this.B = new ValueAnimator.AnimatorUpdateListener() { // from class: com.google.android.material.appbar.a
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                AppBarLayout.b(AppBarLayout.this, colorStateList, colorStateList2, gVar, f10, valueAnimator);
            }
        };
        h0.r0(this, gVar);
    }

    private void m(Context context, final oh.g gVar) {
        gVar.N(context);
        this.B = new ValueAnimator.AnimatorUpdateListener() { // from class: com.google.android.material.appbar.b
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                AppBarLayout.a(AppBarLayout.this, gVar, valueAnimator);
            }
        };
        h0.r0(this, gVar);
    }

    private void n() {
        BaseBehavior.c cVar;
        Behavior behavior = this.J;
        if (behavior != null && this.f14069e != -1 && this.f14073q == 0) {
            cVar = behavior.x0(u2.a.f50385e, this);
        } else {
            cVar = null;
        }
        this.f14069e = -1;
        this.f14070i = -1;
        this.f14071o = -1;
        if (cVar != null) {
            this.J.w0(cVar, false);
        }
    }

    private boolean p() {
        return getBackground() instanceof oh.g;
    }

    private void u(boolean z10, boolean z11, boolean z12) {
        int i10;
        int i11;
        if (z10) {
            i10 = 1;
        } else {
            i10 = 2;
        }
        int i12 = 0;
        if (z11) {
            i11 = 4;
        } else {
            i11 = 0;
        }
        int i13 = i10 | i11;
        if (z12) {
            i12 = 8;
        }
        this.f14073q = i13 | i12;
        requestLayout();
    }

    private boolean v(boolean z10) {
        if (this.f14077u != z10) {
            this.f14077u = z10;
            refreshDrawableState();
            return true;
        }
        return false;
    }

    private boolean y() {
        if (this.G != null && getTopInset() > 0) {
            return true;
        }
        return false;
    }

    @Override // android.widget.LinearLayout, android.view.ViewGroup
    protected boolean checkLayoutParams(ViewGroup.LayoutParams layoutParams) {
        return layoutParams instanceof d;
    }

    @Override // android.view.View
    public void draw(Canvas canvas) {
        super.draw(canvas);
        if (y()) {
            int save = canvas.save();
            canvas.translate(0.0f, -this.f14068d);
            this.G.draw(canvas);
            canvas.restoreToCount(save);
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void drawableStateChanged() {
        super.drawableStateChanged();
        int[] drawableState = getDrawableState();
        Drawable drawable = this.G;
        if (drawable != null && drawable.isStateful() && drawable.setState(drawableState)) {
            invalidateDrawable(drawable);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.widget.LinearLayout, android.view.ViewGroup
    /* renamed from: f */
    public d generateDefaultLayoutParams() {
        return new d(-1, -2);
    }

    @Override // android.widget.LinearLayout, android.view.ViewGroup
    /* renamed from: g */
    public d generateLayoutParams(AttributeSet attributeSet) {
        return new d(getContext(), attributeSet);
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.b
    @NonNull
    public CoordinatorLayout.c getBehavior() {
        Behavior behavior = new Behavior();
        this.J = behavior;
        return behavior;
    }

    int getDownNestedPreScrollRange() {
        int i10;
        int A;
        int i11 = this.f14070i;
        if (i11 != -1) {
            return i11;
        }
        int i12 = 0;
        for (int childCount = getChildCount() - 1; childCount >= 0; childCount--) {
            View childAt = getChildAt(childCount);
            if (childAt.getVisibility() != 8) {
                d dVar = (d) childAt.getLayoutParams();
                int measuredHeight = childAt.getMeasuredHeight();
                int i13 = dVar.f14102a;
                if ((i13 & 5) == 5) {
                    int i14 = ((LinearLayout.LayoutParams) dVar).topMargin + ((LinearLayout.LayoutParams) dVar).bottomMargin;
                    if ((i13 & 8) != 0) {
                        A = h0.A(childAt);
                    } else if ((i13 & 2) != 0) {
                        A = measuredHeight - h0.A(childAt);
                    } else {
                        i10 = i14 + measuredHeight;
                        if (childCount == 0 && h0.w(childAt)) {
                            i10 = Math.min(i10, measuredHeight - getTopInset());
                        }
                        i12 += i10;
                    }
                    i10 = i14 + A;
                    if (childCount == 0) {
                        i10 = Math.min(i10, measuredHeight - getTopInset());
                    }
                    i12 += i10;
                } else if (i12 > 0) {
                    break;
                }
            }
        }
        int max = Math.max(0, i12);
        this.f14070i = max;
        return max;
    }

    int getDownNestedScrollRange() {
        int i10 = this.f14071o;
        if (i10 != -1) {
            return i10;
        }
        int childCount = getChildCount();
        int i11 = 0;
        int i12 = 0;
        while (true) {
            if (i11 >= childCount) {
                break;
            }
            View childAt = getChildAt(i11);
            if (childAt.getVisibility() != 8) {
                d dVar = (d) childAt.getLayoutParams();
                int measuredHeight = childAt.getMeasuredHeight() + ((LinearLayout.LayoutParams) dVar).topMargin + ((LinearLayout.LayoutParams) dVar).bottomMargin;
                int i13 = dVar.f14102a;
                if ((i13 & 1) == 0) {
                    break;
                }
                i12 += measuredHeight;
                if ((i13 & 2) != 0) {
                    i12 -= h0.A(childAt);
                    break;
                }
            }
            i11++;
        }
        int max = Math.max(0, i12);
        this.f14071o = max;
        return max;
    }

    public int getLiftOnScrollTargetViewId() {
        return this.f14080x;
    }

    public oh.g getMaterialShapeBackground() {
        Drawable background = getBackground();
        if (background instanceof oh.g) {
            return (oh.g) background;
        }
        return null;
    }

    public final int getMinimumHeightForVisibleOverlappingContent() {
        int topInset = getTopInset();
        int A = h0.A(this);
        if (A == 0) {
            int childCount = getChildCount();
            if (childCount >= 1) {
                A = h0.A(getChildAt(childCount - 1));
            } else {
                A = 0;
            }
            if (A == 0) {
                return getHeight() / 3;
            }
        }
        return (A * 2) + topInset;
    }

    int getPendingAction() {
        return this.f14073q;
    }

    public Drawable getStatusBarForeground() {
        return this.G;
    }

    @Deprecated
    public float getTargetElevation() {
        return 0.0f;
    }

    final int getTopInset() {
        WindowInsetsCompat windowInsetsCompat = this.f14074r;
        if (windowInsetsCompat != null) {
            return windowInsetsCompat.q();
        }
        return 0;
    }

    public final int getTotalScrollRange() {
        int i10 = this.f14069e;
        if (i10 != -1) {
            return i10;
        }
        int childCount = getChildCount();
        int i11 = 0;
        int i12 = 0;
        while (true) {
            if (i11 >= childCount) {
                break;
            }
            View childAt = getChildAt(i11);
            if (childAt.getVisibility() != 8) {
                d dVar = (d) childAt.getLayoutParams();
                int measuredHeight = childAt.getMeasuredHeight();
                int i13 = dVar.f14102a;
                if ((i13 & 1) == 0) {
                    break;
                }
                i12 += measuredHeight + ((LinearLayout.LayoutParams) dVar).topMargin + ((LinearLayout.LayoutParams) dVar).bottomMargin;
                if (i11 == 0 && h0.w(childAt)) {
                    i12 -= getTopInset();
                }
                if ((i13 & 2) != 0) {
                    i12 -= h0.A(childAt);
                    break;
                }
            }
            i11++;
        }
        int max = Math.max(0, i12);
        this.f14069e = max;
        return max;
    }

    int getUpNestedPreScrollRange() {
        return getTotalScrollRange();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.widget.LinearLayout, android.view.ViewGroup
    /* renamed from: h */
    public d generateLayoutParams(ViewGroup.LayoutParams layoutParams) {
        if (layoutParams instanceof LinearLayout.LayoutParams) {
            return new d((LinearLayout.LayoutParams) layoutParams);
        }
        if (layoutParams instanceof ViewGroup.MarginLayoutParams) {
            return new d((ViewGroup.MarginLayoutParams) layoutParams);
        }
        return new d(layoutParams);
    }

    boolean i() {
        return this.f14072p;
    }

    boolean k() {
        if (getTotalScrollRange() != 0) {
            return true;
        }
        return false;
    }

    public boolean o() {
        return this.f14079w;
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        h.e(this);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected int[] onCreateDrawableState(int i10) {
        int i11;
        int i12;
        if (this.F == null) {
            this.F = new int[4];
        }
        int[] iArr = this.F;
        int[] onCreateDrawableState = super.onCreateDrawableState(i10 + iArr.length);
        boolean z10 = this.f14077u;
        int i13 = yg.b.f54083d0;
        if (!z10) {
            i13 = -i13;
        }
        iArr[0] = i13;
        if (z10 && this.f14078v) {
            i11 = yg.b.f54085e0;
        } else {
            i11 = -yg.b.f54085e0;
        }
        iArr[1] = i11;
        int i14 = yg.b.Z;
        if (!z10) {
            i14 = -i14;
        }
        iArr[2] = i14;
        if (z10 && this.f14078v) {
            i12 = yg.b.Y;
        } else {
            i12 = -yg.b.Y;
        }
        iArr[3] = i12;
        return View.mergeDrawableStates(onCreateDrawableState, iArr);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        c();
    }

    @Override // android.widget.LinearLayout, android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        super.onLayout(z10, i10, i11, i12, i13);
        boolean z11 = true;
        if (h0.w(this) && A()) {
            int topInset = getTopInset();
            for (int childCount = getChildCount() - 1; childCount >= 0; childCount--) {
                h0.Y(getChildAt(childCount), topInset);
            }
        }
        n();
        this.f14072p = false;
        int childCount2 = getChildCount();
        int i14 = 0;
        while (true) {
            if (i14 >= childCount2) {
                break;
            } else if (((d) getChildAt(i14).getLayoutParams()).d() != null) {
                this.f14072p = true;
                break;
            } else {
                i14++;
            }
        }
        Drawable drawable = this.G;
        if (drawable != null) {
            drawable.setBounds(0, 0, getWidth(), getTopInset());
        }
        if (!this.f14076t) {
            if (!this.f14079w && !j()) {
                z11 = false;
            }
            v(z11);
        }
    }

    @Override // android.widget.LinearLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        super.onMeasure(i10, i11);
        int mode = View.MeasureSpec.getMode(i11);
        if (mode != 1073741824 && h0.w(this) && A()) {
            int measuredHeight = getMeasuredHeight();
            if (mode != Integer.MIN_VALUE) {
                if (mode == 0) {
                    measuredHeight += getTopInset();
                }
            } else {
                measuredHeight = u1.a.b(getMeasuredHeight() + getTopInset(), 0, View.MeasureSpec.getSize(i11));
            }
            setMeasuredDimension(getMeasuredWidth(), measuredHeight);
        }
        n();
    }

    void q(int i10) {
        this.f14068d = i10;
        if (!willNotDraw()) {
            h0.e0(this);
        }
        List list = this.f14075s;
        if (list != null) {
            int size = list.size();
            for (int i11 = 0; i11 < size; i11++) {
                android.support.v4.media.session.b.a(this.f14075s.get(i11));
            }
        }
    }

    WindowInsetsCompat r(WindowInsetsCompat windowInsetsCompat) {
        WindowInsetsCompat windowInsetsCompat2;
        if (h0.w(this)) {
            windowInsetsCompat2 = windowInsetsCompat;
        } else {
            windowInsetsCompat2 = null;
        }
        if (!b2.b.a(this.f14074r, windowInsetsCompat2)) {
            this.f14074r = windowInsetsCompat2;
            C();
            requestLayout();
        }
        return windowInsetsCompat;
    }

    void s() {
        this.f14073q = 0;
    }

    @Override // android.view.View
    public void setElevation(float f10) {
        super.setElevation(f10);
        h.d(this, f10);
    }

    public void setExpanded(boolean z10) {
        t(z10, h0.S(this));
    }

    public void setLiftOnScroll(boolean z10) {
        this.f14079w = z10;
    }

    public void setLiftOnScrollTargetView(View view) {
        this.f14080x = -1;
        if (view == null) {
            c();
        } else {
            this.f14081y = new WeakReference(view);
        }
    }

    public void setLiftOnScrollTargetViewId(int i10) {
        this.f14080x = i10;
        c();
    }

    public void setLiftableOverrideEnabled(boolean z10) {
        this.f14076t = z10;
    }

    @Override // android.widget.LinearLayout
    public void setOrientation(int i10) {
        if (i10 == 1) {
            super.setOrientation(i10);
            return;
        }
        throw new IllegalArgumentException("AppBarLayout is always vertical and does not support horizontal orientation");
    }

    public void setStatusBarForeground(Drawable drawable) {
        boolean z10;
        Drawable drawable2 = this.G;
        if (drawable2 != drawable) {
            Drawable drawable3 = null;
            if (drawable2 != null) {
                drawable2.setCallback(null);
            }
            if (drawable != null) {
                drawable3 = drawable.mutate();
            }
            this.G = drawable3;
            this.H = d();
            Drawable drawable4 = this.G;
            if (drawable4 != null) {
                if (drawable4.isStateful()) {
                    this.G.setState(getDrawableState());
                }
                s1.a.m(this.G, h0.z(this));
                Drawable drawable5 = this.G;
                if (getVisibility() == 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                drawable5.setVisible(z10, false);
                this.G.setCallback(this);
            }
            C();
            h0.e0(this);
        }
    }

    public void setStatusBarForegroundColor(int i10) {
        setStatusBarForeground(new ColorDrawable(i10));
    }

    public void setStatusBarForegroundResource(int i10) {
        setStatusBarForeground(g.a.b(getContext(), i10));
    }

    @Deprecated
    public void setTargetElevation(float f10) {
        g.b(this, f10);
    }

    @Override // android.view.View
    public void setVisibility(int i10) {
        boolean z10;
        super.setVisibility(i10);
        if (i10 == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        Drawable drawable = this.G;
        if (drawable != null) {
            drawable.setVisible(z10, false);
        }
    }

    public void t(boolean z10, boolean z11) {
        u(z10, z11, true);
    }

    @Override // android.view.View
    protected boolean verifyDrawable(Drawable drawable) {
        if (!super.verifyDrawable(drawable) && drawable != this.G) {
            return false;
        }
        return true;
    }

    boolean w(boolean z10) {
        return x(z10, !this.f14076t);
    }

    boolean x(boolean z10, boolean z11) {
        float f10;
        float f11;
        if (z11 && this.f14078v != z10) {
            this.f14078v = z10;
            refreshDrawableState();
            if (p()) {
                float f12 = 0.0f;
                if (this.f14082z) {
                    if (z10) {
                        f11 = 0.0f;
                    } else {
                        f11 = 1.0f;
                    }
                    if (z10) {
                        f12 = 1.0f;
                    }
                    B(f11, f12);
                    return true;
                } else if (this.f14079w) {
                    if (z10) {
                        f10 = 0.0f;
                    } else {
                        f10 = this.I;
                    }
                    if (z10) {
                        f12 = this.I;
                    }
                    B(f10, f12);
                    return true;
                } else {
                    return true;
                }
            }
            return true;
        }
        return false;
    }

    boolean z(View view) {
        View e10 = e(view);
        if (e10 != null) {
            view = e10;
        }
        if (view != null) {
            if (view.canScrollVertically(-1) || view.getScrollY() > 0) {
                return true;
            }
            return false;
        }
        return false;
    }

    public AppBarLayout(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, yg.b.f54076a);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public AppBarLayout(android.content.Context r10, android.util.AttributeSet r11, int r12) {
        /*
            Method dump skipped, instructions count: 259
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.appbar.AppBarLayout.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class d extends LinearLayout.LayoutParams {

        /* renamed from: a  reason: collision with root package name */
        int f14102a;

        /* renamed from: b  reason: collision with root package name */
        private b f14103b;

        /* renamed from: c  reason: collision with root package name */
        Interpolator f14104c;

        public d(Context context, AttributeSet attributeSet) {
            super(context, attributeSet);
            this.f14102a = 1;
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, k.f54471v);
            this.f14102a = obtainStyledAttributes.getInt(k.f54489x, 0);
            f(obtainStyledAttributes.getInt(k.f54480w, 0));
            if (obtainStyledAttributes.hasValue(k.f54498y)) {
                this.f14104c = AnimationUtils.loadInterpolator(context, obtainStyledAttributes.getResourceId(k.f54498y, 0));
            }
            obtainStyledAttributes.recycle();
        }

        private b a(int i10) {
            if (i10 != 1) {
                return null;
            }
            return new c();
        }

        public b b() {
            return this.f14103b;
        }

        public int c() {
            return this.f14102a;
        }

        public Interpolator d() {
            return this.f14104c;
        }

        boolean e() {
            int i10 = this.f14102a;
            if ((i10 & 1) == 1 && (i10 & 10) != 0) {
                return true;
            }
            return false;
        }

        public void f(int i10) {
            this.f14103b = a(i10);
        }

        public void g(int i10) {
            this.f14102a = i10;
        }

        public d(int i10, int i11) {
            super(i10, i11);
            this.f14102a = 1;
        }

        public d(ViewGroup.LayoutParams layoutParams) {
            super(layoutParams);
            this.f14102a = 1;
        }

        public d(ViewGroup.MarginLayoutParams marginLayoutParams) {
            super(marginLayoutParams);
            this.f14102a = 1;
        }

        public d(LinearLayout.LayoutParams layoutParams) {
            super(layoutParams);
            this.f14102a = 1;
        }
    }
}
