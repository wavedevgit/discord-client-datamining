package com.google.android.material.bottomsheet;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ValueAnimator;
import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.os.Build;
import android.os.Parcel;
import android.os.Parcelable;
import android.util.AttributeSet;
import android.util.Log;
import android.util.SparseIntArray;
import android.util.TypedValue;
import android.view.MotionEvent;
import android.view.RoundedCorner;
import android.view.VelocityTracker;
import android.view.View;
import android.view.ViewConfiguration;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.view.WindowInsets;
import androidx.activity.BackEventCompat;
import androidx.annotation.NonNull;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.core.view.accessibility.AccessibilityViewCommand;
import androidx.core.view.h0;
import androidx.customview.widget.ViewDragHelper;
import com.google.android.material.internal.o;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import oh.k;
import yg.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class BottomSheetBehavior<V extends View> extends CoordinatorLayout.c implements jh.b {

    /* renamed from: t0  reason: collision with root package name */
    private static final int f14182t0 = j.f54250g;
    private boolean A;
    private boolean B;
    private boolean C;
    private boolean D;
    private boolean E;
    private boolean F;
    private boolean G;
    private int H;
    private int I;
    private boolean J;
    private k K;
    private boolean L;
    private final i M;
    private ValueAnimator N;
    int O;
    int P;
    int Q;
    float R;
    int S;
    float T;
    boolean U;
    private boolean V;
    private boolean W;
    int X;
    int Y;
    ViewDragHelper Z;

    /* renamed from: a0  reason: collision with root package name */
    private boolean f14183a0;

    /* renamed from: b0  reason: collision with root package name */
    private int f14184b0;

    /* renamed from: c0  reason: collision with root package name */
    private boolean f14185c0;

    /* renamed from: d  reason: collision with root package name */
    private int f14186d;

    /* renamed from: d0  reason: collision with root package name */
    private float f14187d0;

    /* renamed from: e  reason: collision with root package name */
    private boolean f14188e;

    /* renamed from: e0  reason: collision with root package name */
    private int f14189e0;

    /* renamed from: f0  reason: collision with root package name */
    int f14190f0;

    /* renamed from: g0  reason: collision with root package name */
    int f14191g0;

    /* renamed from: h0  reason: collision with root package name */
    WeakReference f14192h0;

    /* renamed from: i  reason: collision with root package name */
    private boolean f14193i;

    /* renamed from: i0  reason: collision with root package name */
    WeakReference f14194i0;

    /* renamed from: j0  reason: collision with root package name */
    WeakReference f14195j0;

    /* renamed from: k0  reason: collision with root package name */
    private final ArrayList f14196k0;

    /* renamed from: l0  reason: collision with root package name */
    private VelocityTracker f14197l0;

    /* renamed from: m0  reason: collision with root package name */
    jh.e f14198m0;

    /* renamed from: n0  reason: collision with root package name */
    int f14199n0;

    /* renamed from: o  reason: collision with root package name */
    private float f14200o;

    /* renamed from: o0  reason: collision with root package name */
    private int f14201o0;

    /* renamed from: p  reason: collision with root package name */
    private int f14202p;

    /* renamed from: p0  reason: collision with root package name */
    boolean f14203p0;

    /* renamed from: q  reason: collision with root package name */
    private int f14204q;

    /* renamed from: q0  reason: collision with root package name */
    private Map f14205q0;

    /* renamed from: r  reason: collision with root package name */
    private boolean f14206r;

    /* renamed from: r0  reason: collision with root package name */
    final SparseIntArray f14207r0;

    /* renamed from: s  reason: collision with root package name */
    private int f14208s;

    /* renamed from: s0  reason: collision with root package name */
    private final ViewDragHelper.c f14209s0;

    /* renamed from: t  reason: collision with root package name */
    private int f14210t;

    /* renamed from: u  reason: collision with root package name */
    private oh.g f14211u;

    /* renamed from: v  reason: collision with root package name */
    private ColorStateList f14212v;

    /* renamed from: w  reason: collision with root package name */
    private int f14213w;

    /* renamed from: x  reason: collision with root package name */
    private int f14214x;

    /* renamed from: y  reason: collision with root package name */
    private int f14215y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f14216z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ View f14217d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f14218e;

        a(View view, int i10) {
            this.f14217d = view;
            this.f14218e = i10;
        }

        @Override // java.lang.Runnable
        public void run() {
            BottomSheetBehavior.this.h1(this.f14217d, this.f14218e, false);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class b extends AnimatorListenerAdapter {
        b() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            BottomSheetBehavior.this.Z0(5);
            WeakReference weakReference = BottomSheetBehavior.this.f14192h0;
            if (weakReference != null && weakReference.get() != null) {
                ((View) BottomSheetBehavior.this.f14192h0.get()).requestLayout();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c implements ValueAnimator.AnimatorUpdateListener {
        c() {
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            float floatValue = ((Float) valueAnimator.getAnimatedValue()).floatValue();
            if (BottomSheetBehavior.this.f14211u != null) {
                BottomSheetBehavior.this.f14211u.Y(floatValue);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d implements o.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f14222a;

        d(boolean z10) {
            this.f14222a = z10;
        }

        /* JADX WARN: Removed duplicated region for block: B:25:0x0089  */
        /* JADX WARN: Removed duplicated region for block: B:30:0x009a  */
        /* JADX WARN: Removed duplicated region for block: B:35:0x00a6  */
        /* JADX WARN: Removed duplicated region for block: B:38:0x00b4  */
        /* JADX WARN: Removed duplicated region for block: B:41:0x00c3  */
        @Override // com.google.android.material.internal.o.c
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public androidx.core.view.WindowInsetsCompat a(android.view.View r11, androidx.core.view.WindowInsetsCompat r12, com.google.android.material.internal.o.d r13) {
            /*
                r10 = this;
                int r0 = androidx.core.view.WindowInsetsCompat.p.h()
                androidx.core.graphics.Insets r0 = r12.f(r0)
                int r1 = androidx.core.view.WindowInsetsCompat.p.e()
                androidx.core.graphics.Insets r1 = r12.f(r1)
                com.google.android.material.bottomsheet.BottomSheetBehavior r2 = com.google.android.material.bottomsheet.BottomSheetBehavior.this
                int r3 = r0.f3164b
                com.google.android.material.bottomsheet.BottomSheetBehavior.T(r2, r3)
                boolean r2 = com.google.android.material.internal.o.h(r11)
                int r3 = r11.getPaddingBottom()
                int r4 = r11.getPaddingLeft()
                int r5 = r11.getPaddingRight()
                com.google.android.material.bottomsheet.BottomSheetBehavior r6 = com.google.android.material.bottomsheet.BottomSheetBehavior.this
                boolean r6 = com.google.android.material.bottomsheet.BottomSheetBehavior.U(r6)
                if (r6 == 0) goto L41
                com.google.android.material.bottomsheet.BottomSheetBehavior r3 = com.google.android.material.bottomsheet.BottomSheetBehavior.this
                int r6 = r12.n()
                com.google.android.material.bottomsheet.BottomSheetBehavior.W(r3, r6)
                int r3 = r13.f14812d
                com.google.android.material.bottomsheet.BottomSheetBehavior r6 = com.google.android.material.bottomsheet.BottomSheetBehavior.this
                int r6 = com.google.android.material.bottomsheet.BottomSheetBehavior.V(r6)
                int r3 = r3 + r6
            L41:
                com.google.android.material.bottomsheet.BottomSheetBehavior r6 = com.google.android.material.bottomsheet.BottomSheetBehavior.this
                boolean r6 = com.google.android.material.bottomsheet.BottomSheetBehavior.X(r6)
                if (r6 == 0) goto L53
                if (r2 == 0) goto L4e
                int r4 = r13.f14811c
                goto L50
            L4e:
                int r4 = r13.f14809a
            L50:
                int r6 = r0.f3163a
                int r4 = r4 + r6
            L53:
                com.google.android.material.bottomsheet.BottomSheetBehavior r6 = com.google.android.material.bottomsheet.BottomSheetBehavior.this
                boolean r6 = com.google.android.material.bottomsheet.BottomSheetBehavior.Y(r6)
                if (r6 == 0) goto L66
                if (r2 == 0) goto L60
                int r13 = r13.f14809a
                goto L62
            L60:
                int r13 = r13.f14811c
            L62:
                int r2 = r0.f3165c
                int r5 = r13 + r2
            L66:
                android.view.ViewGroup$LayoutParams r13 = r11.getLayoutParams()
                android.view.ViewGroup$MarginLayoutParams r13 = (android.view.ViewGroup.MarginLayoutParams) r13
                com.google.android.material.bottomsheet.BottomSheetBehavior r2 = com.google.android.material.bottomsheet.BottomSheetBehavior.this
                boolean r2 = com.google.android.material.bottomsheet.BottomSheetBehavior.Z(r2)
                r6 = 0
                r7 = 1
                if (r2 == 0) goto L80
                int r2 = r13.leftMargin
                int r8 = r0.f3163a
                if (r2 == r8) goto L80
                r13.leftMargin = r8
                r2 = r7
                goto L81
            L80:
                r2 = r6
            L81:
                com.google.android.material.bottomsheet.BottomSheetBehavior r8 = com.google.android.material.bottomsheet.BottomSheetBehavior.this
                boolean r8 = com.google.android.material.bottomsheet.BottomSheetBehavior.a0(r8)
                if (r8 == 0) goto L92
                int r8 = r13.rightMargin
                int r9 = r0.f3165c
                if (r8 == r9) goto L92
                r13.rightMargin = r9
                r2 = r7
            L92:
                com.google.android.material.bottomsheet.BottomSheetBehavior r8 = com.google.android.material.bottomsheet.BottomSheetBehavior.this
                boolean r8 = com.google.android.material.bottomsheet.BottomSheetBehavior.J(r8)
                if (r8 == 0) goto La3
                int r8 = r13.topMargin
                int r0 = r0.f3164b
                if (r8 == r0) goto La3
                r13.topMargin = r0
                goto La4
            La3:
                r7 = r2
            La4:
                if (r7 == 0) goto La9
                r11.setLayoutParams(r13)
            La9:
                int r13 = r11.getPaddingTop()
                r11.setPadding(r4, r13, r5, r3)
                boolean r11 = r10.f14222a
                if (r11 == 0) goto Lbb
                com.google.android.material.bottomsheet.BottomSheetBehavior r11 = com.google.android.material.bottomsheet.BottomSheetBehavior.this
                int r13 = r1.f3166d
                com.google.android.material.bottomsheet.BottomSheetBehavior.K(r11, r13)
            Lbb:
                com.google.android.material.bottomsheet.BottomSheetBehavior r11 = com.google.android.material.bottomsheet.BottomSheetBehavior.this
                boolean r11 = com.google.android.material.bottomsheet.BottomSheetBehavior.U(r11)
                if (r11 != 0) goto Lc9
                boolean r11 = r10.f14222a
                if (r11 == 0) goto Lc8
                goto Lc9
            Lc8:
                return r12
            Lc9:
                com.google.android.material.bottomsheet.BottomSheetBehavior r11 = com.google.android.material.bottomsheet.BottomSheetBehavior.this
                com.google.android.material.bottomsheet.BottomSheetBehavior.L(r11, r6)
                return r12
            */
            throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.bottomsheet.BottomSheetBehavior.d.a(android.view.View, androidx.core.view.WindowInsetsCompat, com.google.android.material.internal.o$d):androidx.core.view.WindowInsetsCompat");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class e extends ViewDragHelper.c {

        /* renamed from: a  reason: collision with root package name */
        private long f14224a;

        e() {
        }

        private boolean n(View view) {
            int top = view.getTop();
            BottomSheetBehavior bottomSheetBehavior = BottomSheetBehavior.this;
            if (top > (bottomSheetBehavior.f14191g0 + bottomSheetBehavior.s0()) / 2) {
                return true;
            }
            return false;
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public int a(View view, int i10, int i11) {
            return view.getLeft();
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public int b(View view, int i10, int i11) {
            return u1.a.b(i10, BottomSheetBehavior.this.s0(), e(view));
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public int e(View view) {
            if (BottomSheetBehavior.this.j0()) {
                return BottomSheetBehavior.this.f14191g0;
            }
            return BottomSheetBehavior.this.S;
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public void j(int i10) {
            if (i10 == 1 && BottomSheetBehavior.this.W) {
                BottomSheetBehavior.this.Z0(1);
            }
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public void k(View view, int i10, int i11, int i12, int i13) {
            BottomSheetBehavior.this.o0(i11);
        }

        /* JADX WARN: Code restructure failed: missing block: B:10:0x0034, code lost:
            if (r7.f14225b.c1(r0, (r9 * 100.0f) / r10.f14191g0) != false) goto L5;
         */
        /* JADX WARN: Code restructure failed: missing block: B:13:0x003b, code lost:
            if (r9 > r7.f14225b.Q) goto L6;
         */
        /* JADX WARN: Code restructure failed: missing block: B:30:0x0090, code lost:
            if (java.lang.Math.abs(r8.getTop() - r7.f14225b.s0()) < java.lang.Math.abs(r8.getTop() - r7.f14225b.Q)) goto L5;
         */
        /* JADX WARN: Code restructure failed: missing block: B:43:0x00cf, code lost:
            if (r7.f14225b.f1() == false) goto L6;
         */
        /* JADX WARN: Code restructure failed: missing block: B:48:0x00f1, code lost:
            if (java.lang.Math.abs(r9 - r7.f14225b.P) < java.lang.Math.abs(r9 - r7.f14225b.S)) goto L5;
         */
        /* JADX WARN: Code restructure failed: missing block: B:56:0x010d, code lost:
            if (r7.f14225b.f1() != false) goto L13;
         */
        /* JADX WARN: Code restructure failed: missing block: B:61:0x0127, code lost:
            if (r7.f14225b.f1() == false) goto L6;
         */
        @Override // androidx.customview.widget.ViewDragHelper.c
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public void l(android.view.View r8, float r9, float r10) {
            /*
                Method dump skipped, instructions count: 308
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.bottomsheet.BottomSheetBehavior.e.l(android.view.View, float, float):void");
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public boolean m(View view, int i10) {
            View view2;
            BottomSheetBehavior bottomSheetBehavior = BottomSheetBehavior.this;
            int i11 = bottomSheetBehavior.X;
            if (i11 == 1 || bottomSheetBehavior.f14203p0) {
                return false;
            }
            if (i11 == 3 && bottomSheetBehavior.f14199n0 == i10) {
                WeakReference weakReference = bottomSheetBehavior.f14195j0;
                if (weakReference != null) {
                    view2 = (View) weakReference.get();
                } else {
                    view2 = null;
                }
                if (view2 != null && view2.canScrollVertically(-1)) {
                    return false;
                }
            }
            this.f14224a = System.currentTimeMillis();
            WeakReference weakReference2 = BottomSheetBehavior.this.f14192h0;
            if (weakReference2 == null || weakReference2.get() != view) {
                return false;
            }
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class f implements AccessibilityViewCommand {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f14226a;

        f(int i10) {
            this.f14226a = i10;
        }

        @Override // androidx.core.view.accessibility.AccessibilityViewCommand
        public boolean a(View view, AccessibilityViewCommand.a aVar) {
            BottomSheetBehavior.this.Y0(this.f14226a);
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class g {
        void a(View view) {
        }

        public abstract void b(View view, float f10);

        public abstract void c(View view, int i10);
    }

    public BottomSheetBehavior() {
        this.f14186d = 0;
        this.f14188e = true;
        this.f14193i = false;
        this.f14213w = -1;
        this.f14214x = -1;
        this.M = new i(this, null);
        this.R = 0.5f;
        this.T = -1.0f;
        this.W = true;
        this.X = 4;
        this.Y = 4;
        this.f14187d0 = 0.1f;
        this.f14196k0 = new ArrayList();
        this.f14201o0 = -1;
        this.f14207r0 = new SparseIntArray();
        this.f14209s0 = new e();
    }

    private boolean A0() {
        if (this.X == 3) {
            if (this.J || z0()) {
                return true;
            }
            return false;
        }
        return false;
    }

    private boolean E0(View view) {
        ViewParent parent = view.getParent();
        if (parent != null && parent.isLayoutRequested() && h0.R(view)) {
            return true;
        }
        return false;
    }

    private void H0(View view, AccessibilityNodeInfoCompat.a aVar, int i10) {
        h0.j0(view, aVar, null, l0(i10));
    }

    private void I0() {
        this.f14199n0 = -1;
        this.f14201o0 = -1;
        VelocityTracker velocityTracker = this.f14197l0;
        if (velocityTracker != null) {
            velocityTracker.recycle();
            this.f14197l0 = null;
        }
    }

    private void J0(h hVar) {
        int i10 = this.f14186d;
        if (i10 != 0) {
            if (i10 == -1 || (i10 & 1) == 1) {
                this.f14204q = hVar.f14229o;
            }
            if (i10 == -1 || (i10 & 2) == 2) {
                this.f14188e = hVar.f14230p;
            }
            if (i10 == -1 || (i10 & 4) == 4) {
                this.U = hVar.f14231q;
            }
            if (i10 != -1 && (i10 & 8) != 8) {
                return;
            }
            this.V = hVar.f14232r;
        }
    }

    private void K0(View view, Runnable runnable) {
        if (E0(view)) {
            view.post(runnable);
        } else {
            runnable.run();
        }
    }

    private int b0(View view, int i10, int i11) {
        return h0.c(view, view.getResources().getString(i10), l0(i11));
    }

    private void b1(View view) {
        boolean z10;
        if (Build.VERSION.SDK_INT >= 29 && !B0() && !this.f14206r) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!this.A && !this.B && !this.C && !this.E && !this.F && !this.G && !z10) {
            return;
        }
        o.c(view, new d(z10));
    }

    private void d0() {
        int h02 = h0();
        if (this.f14188e) {
            this.S = Math.max(this.f14191g0 - h02, this.P);
        } else {
            this.S = this.f14191g0 - h02;
        }
    }

    private boolean d1() {
        if (this.Z != null) {
            if (this.W || this.X == 1) {
                return true;
            }
            return false;
        }
        return false;
    }

    private float e0(float f10, RoundedCorner roundedCorner) {
        if (roundedCorner != null) {
            float radius = roundedCorner.getRadius();
            if (radius > 0.0f && f10 > 0.0f) {
                return radius / f10;
            }
        }
        return 0.0f;
    }

    private void f0() {
        this.Q = (int) (this.f14191g0 * (1.0f - this.R));
    }

    private float g0() {
        WeakReference weakReference;
        WindowInsets rootWindowInsets;
        if (this.f14211u != null && (weakReference = this.f14192h0) != null && weakReference.get() != null && Build.VERSION.SDK_INT >= 31) {
            View view = (View) this.f14192h0.get();
            if (z0() && (rootWindowInsets = view.getRootWindowInsets()) != null) {
                return Math.max(e0(this.f14211u.G(), rootWindowInsets.getRoundedCorner(0)), e0(this.f14211u.H(), rootWindowInsets.getRoundedCorner(1)));
            }
            return 0.0f;
        }
        return 0.0f;
    }

    private int h0() {
        int i10;
        if (this.f14206r) {
            return Math.min(Math.max(this.f14208s, this.f14191g0 - ((this.f14190f0 * 9) / 16)), this.f14189e0) + this.H;
        }
        if (!this.f14216z && !this.A && (i10 = this.f14215y) > 0) {
            return Math.max(this.f14204q, i10 + this.f14210t);
        }
        return this.f14204q + this.H;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void h1(View view, int i10, boolean z10) {
        int x02 = x0(i10);
        ViewDragHelper viewDragHelper = this.Z;
        if (viewDragHelper != null && (!z10 ? viewDragHelper.Q(view, view.getLeft(), x02) : viewDragHelper.O(view.getLeft(), x02))) {
            Z0(2);
            k1(i10, true);
            this.M.c(i10);
            return;
        }
        Z0(i10);
    }

    private float i0(int i10) {
        float f10;
        float f11;
        int i11 = this.S;
        if (i10 <= i11 && i11 != s0()) {
            int i12 = this.S;
            f10 = i12 - i10;
            f11 = i12 - s0();
        } else {
            int i13 = this.S;
            f10 = i13 - i10;
            f11 = this.f14191g0 - i13;
        }
        return f10 / f11;
    }

    private void i1() {
        WeakReference weakReference = this.f14192h0;
        if (weakReference != null) {
            j1((View) weakReference.get(), 0);
        }
        WeakReference weakReference2 = this.f14194i0;
        if (weakReference2 != null) {
            j1((View) weakReference2.get(), 1);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean j0() {
        if (C0() && D0()) {
            return true;
        }
        return false;
    }

    private void j1(View view, int i10) {
        if (view != null) {
            k0(view, i10);
            int i11 = 6;
            if (!this.f14188e && this.X != 6) {
                this.f14207r0.put(i10, b0(view, yg.i.f54221a, 6));
            }
            if (this.U && D0() && this.X != 5) {
                H0(view, AccessibilityNodeInfoCompat.a.f3332y, 5);
            }
            int i12 = this.X;
            if (i12 != 3) {
                if (i12 != 4) {
                    if (i12 != 6) {
                        return;
                    }
                    H0(view, AccessibilityNodeInfoCompat.a.f3331x, 4);
                    H0(view, AccessibilityNodeInfoCompat.a.f3330w, 3);
                    return;
                }
                if (this.f14188e) {
                    i11 = 3;
                }
                H0(view, AccessibilityNodeInfoCompat.a.f3330w, i11);
                return;
            }
            if (this.f14188e) {
                i11 = 4;
            }
            H0(view, AccessibilityNodeInfoCompat.a.f3331x, i11);
        }
    }

    private void k0(View view, int i10) {
        if (view != null) {
            h0.h0(view, 524288);
            h0.h0(view, 262144);
            h0.h0(view, 1048576);
            int i11 = this.f14207r0.get(i10, -1);
            if (i11 != -1) {
                h0.h0(view, i11);
                this.f14207r0.delete(i10);
            }
        }
    }

    private void k1(int i10, boolean z10) {
        boolean A0;
        ValueAnimator valueAnimator;
        if (i10 != 2 && this.L != (A0 = A0()) && this.f14211u != null) {
            this.L = A0;
            float f10 = 1.0f;
            if (z10 && (valueAnimator = this.N) != null) {
                if (valueAnimator.isRunning()) {
                    this.N.reverse();
                    return;
                }
                float y10 = this.f14211u.y();
                if (A0) {
                    f10 = g0();
                }
                this.N.setFloatValues(y10, f10);
                this.N.start();
                return;
            }
            ValueAnimator valueAnimator2 = this.N;
            if (valueAnimator2 != null && valueAnimator2.isRunning()) {
                this.N.cancel();
            }
            oh.g gVar = this.f14211u;
            if (this.L) {
                f10 = g0();
            }
            gVar.Y(f10);
        }
    }

    private AccessibilityViewCommand l0(int i10) {
        return new f(i10);
    }

    private void l1(boolean z10) {
        Map map;
        WeakReference weakReference = this.f14192h0;
        if (weakReference != null) {
            ViewParent parent = ((View) weakReference.get()).getParent();
            if (parent instanceof CoordinatorLayout) {
                CoordinatorLayout coordinatorLayout = (CoordinatorLayout) parent;
                int childCount = coordinatorLayout.getChildCount();
                if (z10) {
                    if (this.f14205q0 == null) {
                        this.f14205q0 = new HashMap(childCount);
                    } else {
                        return;
                    }
                }
                for (int i10 = 0; i10 < childCount; i10++) {
                    View childAt = coordinatorLayout.getChildAt(i10);
                    if (childAt != this.f14192h0.get()) {
                        if (z10) {
                            this.f14205q0.put(childAt, Integer.valueOf(childAt.getImportantForAccessibility()));
                            if (this.f14193i) {
                                h0.x0(childAt, 4);
                            }
                        } else if (this.f14193i && (map = this.f14205q0) != null && map.containsKey(childAt)) {
                            h0.x0(childAt, ((Integer) this.f14205q0.get(childAt)).intValue());
                        }
                    }
                }
                if (!z10) {
                    this.f14205q0 = null;
                } else if (this.f14193i) {
                    ((View) this.f14192h0.get()).sendAccessibilityEvent(8);
                }
            }
        }
    }

    private void m0(Context context) {
        if (this.K == null) {
            return;
        }
        oh.g gVar = new oh.g(this.K);
        this.f14211u = gVar;
        gVar.N(context);
        ColorStateList colorStateList = this.f14212v;
        if (colorStateList != null) {
            this.f14211u.X(colorStateList);
            return;
        }
        TypedValue typedValue = new TypedValue();
        context.getTheme().resolveAttribute(16842801, typedValue, true);
        this.f14211u.setTint(typedValue.data);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void m1(boolean z10) {
        View view;
        if (this.f14192h0 != null) {
            d0();
            if (this.X == 4 && (view = (View) this.f14192h0.get()) != null) {
                if (z10) {
                    Y0(4);
                } else {
                    view.requestLayout();
                }
            }
        }
    }

    private void n0() {
        ValueAnimator ofFloat = ValueAnimator.ofFloat(g0(), 1.0f);
        this.N = ofFloat;
        ofFloat.setDuration(500L);
        this.N.addUpdateListener(new c());
    }

    public static BottomSheetBehavior q0(View view) {
        ViewGroup.LayoutParams layoutParams = view.getLayoutParams();
        if (layoutParams instanceof CoordinatorLayout.f) {
            CoordinatorLayout.c f10 = ((CoordinatorLayout.f) layoutParams).f();
            if (f10 instanceof BottomSheetBehavior) {
                return (BottomSheetBehavior) f10;
            }
            throw new IllegalArgumentException("The view is not associated with BottomSheetBehavior");
        }
        throw new IllegalArgumentException("The view is not a child of CoordinatorLayout");
    }

    private int r0(int i10, int i11, int i12, int i13) {
        int childMeasureSpec = ViewGroup.getChildMeasureSpec(i10, i11, i13);
        if (i12 == -1) {
            return childMeasureSpec;
        }
        int mode = View.MeasureSpec.getMode(childMeasureSpec);
        int size = View.MeasureSpec.getSize(childMeasureSpec);
        if (mode != 1073741824) {
            if (size != 0) {
                i12 = Math.min(size, i12);
            }
            return View.MeasureSpec.makeMeasureSpec(i12, Integer.MIN_VALUE);
        }
        return View.MeasureSpec.makeMeasureSpec(Math.min(size, i12), 1073741824);
    }

    private int x0(int i10) {
        if (i10 != 3) {
            if (i10 != 4) {
                if (i10 != 5) {
                    if (i10 == 6) {
                        return this.Q;
                    }
                    throw new IllegalArgumentException("Invalid state to get top offset: " + i10);
                }
                return this.f14191g0;
            }
            return this.S;
        }
        return s0();
    }

    private float y0() {
        VelocityTracker velocityTracker = this.f14197l0;
        if (velocityTracker == null) {
            return 0.0f;
        }
        velocityTracker.computeCurrentVelocity(1000, this.f14200o);
        return this.f14197l0.getYVelocity(this.f14199n0);
    }

    private boolean z0() {
        WeakReference weakReference = this.f14192h0;
        if (weakReference != null && weakReference.get() != null) {
            int[] iArr = new int[2];
            ((View) this.f14192h0.get()).getLocationOnScreen(iArr);
            if (iArr[1] == 0) {
                return true;
            }
        }
        return false;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public void B(CoordinatorLayout coordinatorLayout, View view, Parcelable parcelable) {
        h hVar = (h) parcelable;
        super.B(coordinatorLayout, view, hVar.a());
        J0(hVar);
        int i10 = hVar.f14228i;
        if (i10 != 1 && i10 != 2) {
            this.X = i10;
            this.Y = i10;
            return;
        }
        this.X = 4;
        this.Y = 4;
    }

    public boolean B0() {
        return this.f14216z;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public Parcelable C(CoordinatorLayout coordinatorLayout, View view) {
        return new h(super.C(coordinatorLayout, view), this);
    }

    public boolean C0() {
        return this.U;
    }

    public boolean D0() {
        return true;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean E(CoordinatorLayout coordinatorLayout, View view, View view2, View view3, int i10, int i11) {
        this.f14184b0 = 0;
        this.f14185c0 = false;
        if ((i10 & 2) == 0) {
            return false;
        }
        return true;
    }

    public boolean F0() {
        return true;
    }

    /* JADX WARN: Code restructure failed: missing block: B:21:0x0035, code lost:
        if (r4.getTop() <= r2.Q) goto L24;
     */
    /* JADX WARN: Code restructure failed: missing block: B:33:0x0065, code lost:
        if (java.lang.Math.abs(r3 - r2.P) < java.lang.Math.abs(r3 - r2.S)) goto L24;
     */
    /* JADX WARN: Code restructure failed: missing block: B:41:0x007b, code lost:
        if (f1() != false) goto L37;
     */
    /* JADX WARN: Code restructure failed: missing block: B:44:0x008b, code lost:
        if (java.lang.Math.abs(r3 - r1) < java.lang.Math.abs(r3 - r2.S)) goto L23;
     */
    /* JADX WARN: Code restructure failed: missing block: B:50:0x00a7, code lost:
        if (java.lang.Math.abs(r3 - r2.Q) < java.lang.Math.abs(r3 - r2.S)) goto L23;
     */
    /* JADX WARN: Code restructure failed: missing block: B:51:0x00a9, code lost:
        r0 = 6;
     */
    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void G(androidx.coordinatorlayout.widget.CoordinatorLayout r3, android.view.View r4, android.view.View r5, int r6) {
        /*
            r2 = this;
            int r3 = r4.getTop()
            int r6 = r2.s0()
            r0 = 3
            if (r3 != r6) goto Lf
            r2.Z0(r0)
            return
        Lf:
            boolean r3 = r2.F0()
            if (r3 == 0) goto L24
            java.lang.ref.WeakReference r3 = r2.f14195j0
            if (r3 == 0) goto L23
            java.lang.Object r3 = r3.get()
            if (r5 != r3) goto L23
            boolean r3 = r2.f14185c0
            if (r3 != 0) goto L24
        L23:
            return
        L24:
            int r3 = r2.f14184b0
            r5 = 6
            if (r3 <= 0) goto L39
            boolean r3 = r2.f14188e
            if (r3 == 0) goto L2f
            goto Laa
        L2f:
            int r3 = r4.getTop()
            int r6 = r2.Q
            if (r3 <= r6) goto Laa
            goto La9
        L39:
            boolean r3 = r2.U
            if (r3 == 0) goto L49
            float r3 = r2.y0()
            boolean r3 = r2.e1(r4, r3)
            if (r3 == 0) goto L49
            r0 = 5
            goto Laa
        L49:
            int r3 = r2.f14184b0
            r6 = 4
            if (r3 != 0) goto L8e
            int r3 = r4.getTop()
            boolean r1 = r2.f14188e
            if (r1 == 0) goto L68
            int r5 = r2.P
            int r5 = r3 - r5
            int r5 = java.lang.Math.abs(r5)
            int r1 = r2.S
            int r3 = r3 - r1
            int r3 = java.lang.Math.abs(r3)
            if (r5 >= r3) goto L92
            goto Laa
        L68:
            int r1 = r2.Q
            if (r3 >= r1) goto L7e
            int r1 = r2.S
            int r1 = r3 - r1
            int r1 = java.lang.Math.abs(r1)
            if (r3 >= r1) goto L77
            goto Laa
        L77:
            boolean r3 = r2.f1()
            if (r3 == 0) goto La9
            goto L92
        L7e:
            int r0 = r3 - r1
            int r0 = java.lang.Math.abs(r0)
            int r1 = r2.S
            int r3 = r3 - r1
            int r3 = java.lang.Math.abs(r3)
            if (r0 >= r3) goto L92
            goto La9
        L8e:
            boolean r3 = r2.f14188e
            if (r3 == 0) goto L94
        L92:
            r0 = r6
            goto Laa
        L94:
            int r3 = r4.getTop()
            int r0 = r2.Q
            int r0 = r3 - r0
            int r0 = java.lang.Math.abs(r0)
            int r1 = r2.S
            int r3 = r3 - r1
            int r3 = java.lang.Math.abs(r3)
            if (r0 >= r3) goto L92
        La9:
            r0 = r5
        Laa:
            r3 = 0
            r2.h1(r4, r0, r3)
            r2.f14185c0 = r3
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.bottomsheet.BottomSheetBehavior.G(androidx.coordinatorlayout.widget.CoordinatorLayout, android.view.View, android.view.View, int):void");
    }

    public void G0(g gVar) {
        this.f14196k0.remove(gVar);
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean H(CoordinatorLayout coordinatorLayout, View view, MotionEvent motionEvent) {
        if (!view.isShown()) {
            return false;
        }
        int actionMasked = motionEvent.getActionMasked();
        if (this.X == 1 && actionMasked == 0) {
            return true;
        }
        if (d1()) {
            this.Z.F(motionEvent);
        }
        if (actionMasked == 0) {
            I0();
        }
        if (this.f14197l0 == null) {
            this.f14197l0 = VelocityTracker.obtain();
        }
        this.f14197l0.addMovement(motionEvent);
        if (d1() && actionMasked == 2 && !this.f14183a0 && Math.abs(this.f14201o0 - motionEvent.getY()) > this.Z.z()) {
            this.Z.b(view, motionEvent.getPointerId(motionEvent.getActionIndex()));
        }
        return !this.f14183a0;
    }

    public void L0(boolean z10) {
        this.W = z10;
    }

    public void M0(int i10) {
        if (i10 >= 0) {
            this.O = i10;
            k1(this.X, true);
            return;
        }
        throw new IllegalArgumentException("offset must be greater than or equal to 0");
    }

    public void N0(boolean z10) {
        int i10;
        if (this.f14188e == z10) {
            return;
        }
        this.f14188e = z10;
        if (this.f14192h0 != null) {
            d0();
        }
        if (this.f14188e && this.X == 6) {
            i10 = 3;
        } else {
            i10 = this.X;
        }
        Z0(i10);
        k1(this.X, true);
        i1();
    }

    public void O0(boolean z10) {
        this.f14216z = z10;
    }

    public void P0(float f10) {
        if (f10 > 0.0f && f10 < 1.0f) {
            this.R = f10;
            if (this.f14192h0 != null) {
                f0();
                return;
            }
            return;
        }
        throw new IllegalArgumentException("ratio must be a float value between 0 and 1");
    }

    public void Q0(boolean z10) {
        if (this.U != z10) {
            this.U = z10;
            if (!z10 && this.X == 5) {
                Y0(4);
            }
            i1();
        }
    }

    public void R0(int i10) {
        this.f14214x = i10;
    }

    public void S0(int i10) {
        this.f14213w = i10;
    }

    public void T0(int i10) {
        U0(i10, false);
    }

    public final void U0(int i10, boolean z10) {
        if (i10 == -1) {
            if (!this.f14206r) {
                this.f14206r = true;
            } else {
                return;
            }
        } else if (!this.f14206r && this.f14204q == i10) {
            return;
        } else {
            this.f14206r = false;
            this.f14204q = Math.max(0, i10);
        }
        m1(z10);
    }

    public void V0(int i10) {
        this.f14186d = i10;
    }

    public void W0(int i10) {
        this.f14202p = i10;
    }

    public void X0(boolean z10) {
        this.V = z10;
    }

    public void Y0(int i10) {
        String str;
        int i11;
        if (i10 != 1 && i10 != 2) {
            if (!this.U && i10 == 5) {
                Log.w("BottomSheetBehavior", "Cannot set state: " + i10);
                return;
            }
            if (i10 == 6 && this.f14188e && x0(i10) <= this.P) {
                i11 = 3;
            } else {
                i11 = i10;
            }
            WeakReference weakReference = this.f14192h0;
            if (weakReference != null && weakReference.get() != null) {
                View view = (View) this.f14192h0.get();
                K0(view, new a(view, i11));
                return;
            }
            Z0(i10);
            return;
        }
        StringBuilder sb2 = new StringBuilder();
        sb2.append("STATE_");
        if (i10 == 1) {
            str = "DRAGGING";
        } else {
            str = "SETTLING";
        }
        sb2.append(str);
        sb2.append(" should not be set externally.");
        throw new IllegalArgumentException(sb2.toString());
    }

    void Z0(int i10) {
        View view;
        if (this.X != i10) {
            this.X = i10;
            if (i10 == 4 || i10 == 3 || i10 == 6 || (this.U && i10 == 5)) {
                this.Y = i10;
            }
            WeakReference weakReference = this.f14192h0;
            if (weakReference == null || (view = (View) weakReference.get()) == null) {
                return;
            }
            if (i10 == 3) {
                l1(true);
            } else if (i10 == 6 || i10 == 5 || i10 == 4) {
                l1(false);
            }
            k1(i10, true);
            for (int i11 = 0; i11 < this.f14196k0.size(); i11++) {
                ((g) this.f14196k0.get(i11)).c(view, i10);
            }
            i1();
        }
    }

    @Override // jh.b
    public void a() {
        jh.e eVar = this.f14198m0;
        if (eVar == null) {
            return;
        }
        eVar.f();
    }

    public void a1(boolean z10) {
        this.f14193i = z10;
    }

    @Override // jh.b
    public void b(BackEventCompat backEventCompat) {
        jh.e eVar = this.f14198m0;
        if (eVar == null) {
            return;
        }
        eVar.j(backEventCompat);
    }

    @Override // jh.b
    public void c(BackEventCompat backEventCompat) {
        jh.e eVar = this.f14198m0;
        if (eVar == null) {
            return;
        }
        eVar.l(backEventCompat);
    }

    public void c0(g gVar) {
        if (!this.f14196k0.contains(gVar)) {
            this.f14196k0.add(gVar);
        }
    }

    public boolean c1(long j10, float f10) {
        return false;
    }

    @Override // jh.b
    public void d() {
        jh.e eVar = this.f14198m0;
        if (eVar == null) {
            return;
        }
        BackEventCompat c10 = eVar.c();
        int i10 = 4;
        if (c10 != null && Build.VERSION.SDK_INT >= 34) {
            if (this.U) {
                this.f14198m0.h(c10, new b());
                return;
            }
            this.f14198m0.i(c10, null);
            Y0(4);
            return;
        }
        if (this.U) {
            i10 = 5;
        }
        Y0(i10);
    }

    boolean e1(View view, float f10) {
        if (this.V) {
            return true;
        }
        if (!D0() || view.getTop() < this.S) {
            return false;
        }
        if (Math.abs((view.getTop() + (f10 * this.f14187d0)) - this.S) / h0() > 0.5f) {
            return true;
        }
        return false;
    }

    public boolean f1() {
        return false;
    }

    public boolean g1() {
        return true;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public void k(CoordinatorLayout.f fVar) {
        super.k(fVar);
        this.f14192h0 = null;
        this.Z = null;
        this.f14198m0 = null;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public void n() {
        super.n();
        this.f14192h0 = null;
        this.Z = null;
        this.f14198m0 = null;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean o(CoordinatorLayout coordinatorLayout, View view, MotionEvent motionEvent) {
        boolean z10;
        View view2;
        int i10;
        ViewDragHelper viewDragHelper;
        if (view.isShown() && this.W) {
            int actionMasked = motionEvent.getActionMasked();
            if (actionMasked == 0) {
                I0();
            }
            if (this.f14197l0 == null) {
                this.f14197l0 = VelocityTracker.obtain();
            }
            this.f14197l0.addMovement(motionEvent);
            View view3 = null;
            if (actionMasked != 0) {
                if (actionMasked == 1 || actionMasked == 3) {
                    this.f14203p0 = false;
                    this.f14199n0 = -1;
                    if (this.f14183a0) {
                        this.f14183a0 = false;
                        return false;
                    }
                }
            } else {
                int x10 = (int) motionEvent.getX();
                this.f14201o0 = (int) motionEvent.getY();
                if (this.X != 2) {
                    WeakReference weakReference = this.f14195j0;
                    if (weakReference != null) {
                        view2 = (View) weakReference.get();
                    } else {
                        view2 = null;
                    }
                    if (view2 != null && coordinatorLayout.w(view2, x10, this.f14201o0)) {
                        this.f14199n0 = motionEvent.getPointerId(motionEvent.getActionIndex());
                        this.f14203p0 = true;
                    }
                }
                if (this.f14199n0 == -1 && !coordinatorLayout.w(view, x10, this.f14201o0)) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f14183a0 = z10;
            }
            if (!this.f14183a0 && (viewDragHelper = this.Z) != null && viewDragHelper.P(motionEvent)) {
                return true;
            }
            WeakReference weakReference2 = this.f14195j0;
            if (weakReference2 != null) {
                view3 = (View) weakReference2.get();
            }
            if (actionMasked != 2 || view3 == null || this.f14183a0 || this.X == 1 || coordinatorLayout.w(view3, (int) motionEvent.getX(), (int) motionEvent.getY()) || this.Z == null || (i10 = this.f14201o0) == -1 || Math.abs(i10 - motionEvent.getY()) <= this.Z.z()) {
                return false;
            }
            return true;
        }
        this.f14183a0 = true;
        return false;
    }

    void o0(int i10) {
        View view = (View) this.f14192h0.get();
        if (view != null && !this.f14196k0.isEmpty()) {
            float i02 = i0(i10);
            for (int i11 = 0; i11 < this.f14196k0.size(); i11++) {
                ((g) this.f14196k0.get(i11)).b(view, i02);
            }
        }
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean p(CoordinatorLayout coordinatorLayout, View view, int i10) {
        if (h0.w(coordinatorLayout) && !h0.w(view)) {
            view.setFitsSystemWindows(true);
        }
        if (this.f14192h0 == null) {
            this.f14208s = coordinatorLayout.getResources().getDimensionPixelSize(yg.d.f54124b);
            b1(view);
            h0.L0(view, new com.google.android.material.bottomsheet.c(view));
            this.f14192h0 = new WeakReference(view);
            this.f14198m0 = new jh.e(view);
            oh.g gVar = this.f14211u;
            if (gVar != null) {
                h0.r0(view, gVar);
                oh.g gVar2 = this.f14211u;
                float f10 = this.T;
                if (f10 == -1.0f) {
                    f10 = h0.u(view);
                }
                gVar2.W(f10);
            } else {
                ColorStateList colorStateList = this.f14212v;
                if (colorStateList != null) {
                    h0.s0(view, colorStateList);
                }
            }
            i1();
            if (h0.x(view) == 0) {
                h0.x0(view, 1);
            }
        }
        if (this.Z == null) {
            this.Z = ViewDragHelper.o(coordinatorLayout, this.f14209s0);
        }
        int top = view.getTop();
        coordinatorLayout.E(view, i10);
        this.f14190f0 = coordinatorLayout.getWidth();
        this.f14191g0 = coordinatorLayout.getHeight();
        int height = view.getHeight();
        this.f14189e0 = height;
        int i11 = this.f14191g0;
        int i12 = i11 - height;
        int i13 = this.I;
        if (i12 < i13) {
            if (this.D) {
                int i14 = this.f14214x;
                if (i14 != -1) {
                    i11 = Math.min(i11, i14);
                }
                this.f14189e0 = i11;
            } else {
                int i15 = i11 - i13;
                int i16 = this.f14214x;
                if (i16 != -1) {
                    i15 = Math.min(i15, i16);
                }
                this.f14189e0 = i15;
            }
        }
        this.P = Math.max(0, this.f14191g0 - this.f14189e0);
        f0();
        d0();
        int i17 = this.X;
        if (i17 == 3) {
            h0.Y(view, s0());
        } else if (i17 == 6) {
            h0.Y(view, this.Q);
        } else if (this.U && i17 == 5) {
            h0.Y(view, this.f14191g0);
        } else if (i17 == 4) {
            h0.Y(view, this.S);
        } else if (i17 == 1 || i17 == 2) {
            h0.Y(view, top - view.getTop());
        }
        k1(this.X, false);
        this.f14195j0 = new WeakReference(p0(view));
        for (int i18 = 0; i18 < this.f14196k0.size(); i18++) {
            ((g) this.f14196k0.get(i18)).a(view);
        }
        return true;
    }

    View p0(View view) {
        if (view.getVisibility() != 0) {
            return null;
        }
        if (h0.T(view)) {
            return view;
        }
        if (view instanceof ViewGroup) {
            ViewGroup viewGroup = (ViewGroup) view;
            int childCount = viewGroup.getChildCount();
            for (int i10 = 0; i10 < childCount; i10++) {
                View p02 = p0(viewGroup.getChildAt(i10));
                if (p02 != null) {
                    return p02;
                }
            }
        }
        return null;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean q(CoordinatorLayout coordinatorLayout, View view, int i10, int i11, int i12, int i13) {
        ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) view.getLayoutParams();
        view.measure(r0(i10, coordinatorLayout.getPaddingLeft() + coordinatorLayout.getPaddingRight() + marginLayoutParams.leftMargin + marginLayoutParams.rightMargin + i11, this.f14213w, marginLayoutParams.width), r0(i12, coordinatorLayout.getPaddingTop() + coordinatorLayout.getPaddingBottom() + marginLayoutParams.topMargin + marginLayoutParams.bottomMargin + i13, this.f14214x, marginLayoutParams.height));
        return true;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean s(CoordinatorLayout coordinatorLayout, View view, View view2, float f10, float f11) {
        WeakReference weakReference;
        if (!F0() || (weakReference = this.f14195j0) == null || view2 != weakReference.get() || (this.X == 3 && !super.s(coordinatorLayout, view, view2, f10, f11))) {
            return false;
        }
        return true;
    }

    public int s0() {
        int i10;
        if (this.f14188e) {
            return this.P;
        }
        int i11 = this.O;
        if (this.D) {
            i10 = 0;
        } else {
            i10 = this.I;
        }
        return Math.max(i11, i10);
    }

    public float t0() {
        return this.R;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public void u(CoordinatorLayout coordinatorLayout, View view, View view2, int i10, int i11, int[] iArr, int i12) {
        View view3;
        if (i12 != 1) {
            WeakReference weakReference = this.f14195j0;
            if (weakReference != null) {
                view3 = (View) weakReference.get();
            } else {
                view3 = null;
            }
            if (!F0() || view2 == view3) {
                int top = view.getTop();
                int i13 = top - i11;
                if (i11 > 0) {
                    if (i13 < s0()) {
                        int s02 = top - s0();
                        iArr[1] = s02;
                        h0.Y(view, -s02);
                        Z0(3);
                    } else if (this.W) {
                        iArr[1] = i11;
                        h0.Y(view, -i11);
                        Z0(1);
                    } else {
                        return;
                    }
                } else if (i11 < 0 && !view2.canScrollVertically(-1)) {
                    if (i13 > this.S && !j0()) {
                        int i14 = top - this.S;
                        iArr[1] = i14;
                        h0.Y(view, -i14);
                        Z0(4);
                    } else if (!this.W) {
                        return;
                    } else {
                        iArr[1] = i11;
                        h0.Y(view, -i11);
                        Z0(1);
                    }
                }
                o0(view.getTop());
                this.f14184b0 = i11;
                this.f14185c0 = true;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public oh.g u0() {
        return this.f14211u;
    }

    public int v0() {
        if (this.f14206r) {
            return -1;
        }
        return this.f14204q;
    }

    public int w0() {
        return this.X;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public void x(CoordinatorLayout coordinatorLayout, View view, View view2, int i10, int i11, int i12, int i13, int i14, int[] iArr) {
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class i {

        /* renamed from: a  reason: collision with root package name */
        private int f14233a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f14234b;

        /* renamed from: c  reason: collision with root package name */
        private final Runnable f14235c;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class a implements Runnable {
            a() {
            }

            @Override // java.lang.Runnable
            public void run() {
                i.this.f14234b = false;
                ViewDragHelper viewDragHelper = BottomSheetBehavior.this.Z;
                if (viewDragHelper != null && viewDragHelper.m(true)) {
                    i iVar = i.this;
                    iVar.c(iVar.f14233a);
                    return;
                }
                i iVar2 = i.this;
                BottomSheetBehavior bottomSheetBehavior = BottomSheetBehavior.this;
                if (bottomSheetBehavior.X == 2) {
                    bottomSheetBehavior.Z0(iVar2.f14233a);
                }
            }
        }

        private i() {
            this.f14235c = new a();
        }

        void c(int i10) {
            WeakReference weakReference = BottomSheetBehavior.this.f14192h0;
            if (weakReference != null && weakReference.get() != null) {
                this.f14233a = i10;
                if (!this.f14234b) {
                    h0.f0((View) BottomSheetBehavior.this.f14192h0.get(), this.f14235c);
                    this.f14234b = true;
                }
            }
        }

        /* synthetic */ i(BottomSheetBehavior bottomSheetBehavior, a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class h extends u2.a {
        public static final Parcelable.Creator<h> CREATOR = new a();

        /* renamed from: i  reason: collision with root package name */
        final int f14228i;

        /* renamed from: o  reason: collision with root package name */
        int f14229o;

        /* renamed from: p  reason: collision with root package name */
        boolean f14230p;

        /* renamed from: q  reason: collision with root package name */
        boolean f14231q;

        /* renamed from: r  reason: collision with root package name */
        boolean f14232r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class a implements Parcelable.ClassLoaderCreator {
            a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public h createFromParcel(Parcel parcel) {
                return new h(parcel, (ClassLoader) null);
            }

            @Override // android.os.Parcelable.ClassLoaderCreator
            /* renamed from: b */
            public h createFromParcel(Parcel parcel, ClassLoader classLoader) {
                return new h(parcel, classLoader);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: c */
            public h[] newArray(int i10) {
                return new h[i10];
            }
        }

        public h(Parcel parcel, ClassLoader classLoader) {
            super(parcel, classLoader);
            this.f14228i = parcel.readInt();
            this.f14229o = parcel.readInt();
            this.f14230p = parcel.readInt() == 1;
            this.f14231q = parcel.readInt() == 1;
            this.f14232r = parcel.readInt() == 1;
        }

        @Override // u2.a, android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            super.writeToParcel(parcel, i10);
            parcel.writeInt(this.f14228i);
            parcel.writeInt(this.f14229o);
            parcel.writeInt(this.f14230p ? 1 : 0);
            parcel.writeInt(this.f14231q ? 1 : 0);
            parcel.writeInt(this.f14232r ? 1 : 0);
        }

        public h(Parcelable parcelable, BottomSheetBehavior bottomSheetBehavior) {
            super(parcelable);
            this.f14228i = bottomSheetBehavior.X;
            this.f14229o = bottomSheetBehavior.f14204q;
            this.f14230p = bottomSheetBehavior.f14188e;
            this.f14231q = bottomSheetBehavior.U;
            this.f14232r = bottomSheetBehavior.V;
        }
    }

    public BottomSheetBehavior(@NonNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        int i10;
        this.f14186d = 0;
        this.f14188e = true;
        this.f14193i = false;
        this.f14213w = -1;
        this.f14214x = -1;
        this.M = new i(this, null);
        this.R = 0.5f;
        this.T = -1.0f;
        this.W = true;
        this.X = 4;
        this.Y = 4;
        this.f14187d0 = 0.1f;
        this.f14196k0 = new ArrayList();
        this.f14201o0 = -1;
        this.f14207r0 = new SparseIntArray();
        this.f14209s0 = new e();
        this.f14210t = context.getResources().getDimensionPixelSize(yg.d.Y);
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, yg.k.S);
        if (obtainStyledAttributes.hasValue(yg.k.W)) {
            this.f14212v = lh.c.a(context, obtainStyledAttributes, yg.k.W);
        }
        if (obtainStyledAttributes.hasValue(yg.k.f54409o0)) {
            this.K = k.e(context, attributeSet, yg.b.f54082d, f14182t0).m();
        }
        m0(context);
        n0();
        this.T = obtainStyledAttributes.getDimension(yg.k.V, -1.0f);
        if (obtainStyledAttributes.hasValue(yg.k.T)) {
            S0(obtainStyledAttributes.getDimensionPixelSize(yg.k.T, -1));
        }
        if (obtainStyledAttributes.hasValue(yg.k.U)) {
            R0(obtainStyledAttributes.getDimensionPixelSize(yg.k.U, -1));
        }
        TypedValue peekValue = obtainStyledAttributes.peekValue(yg.k.f54291c0);
        if (peekValue != null && (i10 = peekValue.data) == -1) {
            T0(i10);
        } else {
            T0(obtainStyledAttributes.getDimensionPixelSize(yg.k.f54291c0, -1));
        }
        Q0(obtainStyledAttributes.getBoolean(yg.k.f54281b0, false));
        O0(obtainStyledAttributes.getBoolean(yg.k.f54331g0, false));
        N0(obtainStyledAttributes.getBoolean(yg.k.Z, true));
        X0(obtainStyledAttributes.getBoolean(yg.k.f54321f0, false));
        L0(obtainStyledAttributes.getBoolean(yg.k.X, true));
        V0(obtainStyledAttributes.getInt(yg.k.f54301d0, 0));
        P0(obtainStyledAttributes.getFloat(yg.k.f54271a0, 0.5f));
        TypedValue peekValue2 = obtainStyledAttributes.peekValue(yg.k.Y);
        if (peekValue2 != null && peekValue2.type == 16) {
            M0(peekValue2.data);
        } else {
            M0(obtainStyledAttributes.getDimensionPixelOffset(yg.k.Y, 0));
        }
        W0(obtainStyledAttributes.getInt(yg.k.f54311e0, 500));
        this.A = obtainStyledAttributes.getBoolean(yg.k.f54371k0, false);
        this.B = obtainStyledAttributes.getBoolean(yg.k.f54381l0, false);
        this.C = obtainStyledAttributes.getBoolean(yg.k.f54391m0, false);
        this.D = obtainStyledAttributes.getBoolean(yg.k.f54400n0, true);
        this.E = obtainStyledAttributes.getBoolean(yg.k.f54341h0, false);
        this.F = obtainStyledAttributes.getBoolean(yg.k.f54351i0, false);
        this.G = obtainStyledAttributes.getBoolean(yg.k.f54361j0, false);
        this.J = obtainStyledAttributes.getBoolean(yg.k.f54418p0, true);
        obtainStyledAttributes.recycle();
        this.f14200o = ViewConfiguration.get(context).getScaledMaximumFlingVelocity();
    }
}
