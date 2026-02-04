package com.google.android.material.sidesheet;

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
import android.util.TypedValue;
import android.view.MotionEvent;
import android.view.VelocityTracker;
import android.view.View;
import android.view.ViewConfiguration;
import android.view.ViewGroup;
import android.view.ViewParent;
import androidx.activity.BackEventCompat;
import androidx.annotation.NonNull;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.core.view.accessibility.AccessibilityViewCommand;
import androidx.core.view.h0;
import androidx.customview.widget.ViewDragHelper;
import com.google.android.material.sidesheet.SideSheetBehavior;
import java.lang.ref.WeakReference;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.Set;
import jh.f;
import oh.g;
import oh.k;
import yg.i;
import yg.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class SideSheetBehavior<V extends View> extends CoordinatorLayout.c implements jh.b {
    private static final int K = i.f54243w;
    private static final int L = j.f54255l;
    private int A;
    private int B;
    private WeakReference C;
    private WeakReference D;
    private int E;
    private VelocityTracker F;
    private f G;
    private int H;
    private final Set I;
    private final ViewDragHelper.c J;

    /* renamed from: d  reason: collision with root package name */
    private com.google.android.material.sidesheet.c f14907d;

    /* renamed from: e  reason: collision with root package name */
    private float f14908e;

    /* renamed from: i  reason: collision with root package name */
    private g f14909i;

    /* renamed from: o  reason: collision with root package name */
    private ColorStateList f14910o;

    /* renamed from: p  reason: collision with root package name */
    private k f14911p;

    /* renamed from: q  reason: collision with root package name */
    private final d f14912q;

    /* renamed from: r  reason: collision with root package name */
    private float f14913r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f14914s;

    /* renamed from: t  reason: collision with root package name */
    private int f14915t;

    /* renamed from: u  reason: collision with root package name */
    private int f14916u;

    /* renamed from: v  reason: collision with root package name */
    private ViewDragHelper f14917v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f14918w;

    /* renamed from: x  reason: collision with root package name */
    private float f14919x;

    /* renamed from: y  reason: collision with root package name */
    private int f14920y;

    /* renamed from: z  reason: collision with root package name */
    private int f14921z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends ViewDragHelper.c {
        a() {
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public int a(View view, int i10, int i11) {
            return u1.a.b(i10, SideSheetBehavior.this.f14907d.g(), SideSheetBehavior.this.f14907d.f());
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public int b(View view, int i10, int i11) {
            return view.getTop();
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public int d(View view) {
            return SideSheetBehavior.this.f14920y + SideSheetBehavior.this.k0();
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public void j(int i10) {
            if (i10 == 1 && SideSheetBehavior.this.f14914s) {
                SideSheetBehavior.this.G0(1);
            }
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public void k(View view, int i10, int i11, int i12, int i13) {
            ViewGroup.MarginLayoutParams marginLayoutParams;
            View f02 = SideSheetBehavior.this.f0();
            if (f02 != null && (marginLayoutParams = (ViewGroup.MarginLayoutParams) f02.getLayoutParams()) != null) {
                SideSheetBehavior.this.f14907d.p(marginLayoutParams, view.getLeft(), view.getRight());
                f02.setLayoutParams(marginLayoutParams);
            }
            SideSheetBehavior.this.a0(view, i10);
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public void l(View view, float f10, float f11) {
            int W = SideSheetBehavior.this.W(view, f10, f11);
            SideSheetBehavior sideSheetBehavior = SideSheetBehavior.this;
            sideSheetBehavior.L0(view, W, sideSheetBehavior.K0());
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public boolean m(View view, int i10) {
            if (SideSheetBehavior.this.f14915t == 1 || SideSheetBehavior.this.C == null || SideSheetBehavior.this.C.get() != view) {
                return false;
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class b extends AnimatorListenerAdapter {
        b() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            SideSheetBehavior.this.G0(5);
            if (SideSheetBehavior.this.C != null && SideSheetBehavior.this.C.get() != null) {
                ((View) SideSheetBehavior.this.C.get()).requestLayout();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d {

        /* renamed from: a  reason: collision with root package name */
        private int f14925a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f14926b;

        /* renamed from: c  reason: collision with root package name */
        private final Runnable f14927c = new Runnable() { // from class: com.google.android.material.sidesheet.e
            @Override // java.lang.Runnable
            public final void run() {
                SideSheetBehavior.d.a(SideSheetBehavior.d.this);
            }
        };

        d() {
        }

        public static /* synthetic */ void a(d dVar) {
            dVar.f14926b = false;
            if (SideSheetBehavior.this.f14917v != null && SideSheetBehavior.this.f14917v.m(true)) {
                dVar.b(dVar.f14925a);
            } else if (SideSheetBehavior.this.f14915t == 2) {
                SideSheetBehavior.this.G0(dVar.f14925a);
            }
        }

        void b(int i10) {
            if (SideSheetBehavior.this.C != null && SideSheetBehavior.this.C.get() != null) {
                this.f14925a = i10;
                if (!this.f14926b) {
                    h0.f0((View) SideSheetBehavior.this.C.get(), this.f14927c);
                    this.f14926b = true;
                }
            }
        }
    }

    public SideSheetBehavior() {
        this.f14912q = new d();
        this.f14914s = true;
        this.f14915t = 5;
        this.f14916u = 5;
        this.f14919x = 0.1f;
        this.E = -1;
        this.I = new LinkedHashSet();
        this.J = new a();
    }

    private void A0(View view, Runnable runnable) {
        if (v0(view)) {
            view.post(runnable);
        } else {
            runnable.run();
        }
    }

    private void D0(int i10) {
        com.google.android.material.sidesheet.c cVar = this.f14907d;
        if (cVar == null || cVar.j() != i10) {
            if (i10 == 0) {
                this.f14907d = new com.google.android.material.sidesheet.b(this);
                if (this.f14911p != null && !s0()) {
                    k.b v10 = this.f14911p.v();
                    v10.G(0.0f).w(0.0f);
                    O0(v10.m());
                }
            } else if (i10 == 1) {
                this.f14907d = new com.google.android.material.sidesheet.a(this);
                if (this.f14911p != null && !r0()) {
                    k.b v11 = this.f14911p.v();
                    v11.B(0.0f).s(0.0f);
                    O0(v11.m());
                }
            } else {
                throw new IllegalArgumentException("Invalid sheet edge position value: " + i10 + ". Must be 0 or 1.");
            }
        }
    }

    private void E0(View view, int i10) {
        int i11;
        if (androidx.core.view.j.b(((CoordinatorLayout.f) view.getLayoutParams()).f2863c, i10) == 3) {
            i11 = 1;
        } else {
            i11 = 0;
        }
        D0(i11);
    }

    private boolean H0() {
        if (this.f14917v != null) {
            if (this.f14914s || this.f14915t == 1) {
                return true;
            }
            return false;
        }
        return false;
    }

    public static /* synthetic */ boolean I(SideSheetBehavior sideSheetBehavior, int i10, View view, AccessibilityViewCommand.a aVar) {
        sideSheetBehavior.F0(i10);
        return true;
    }

    public static /* synthetic */ void J(SideSheetBehavior sideSheetBehavior, int i10) {
        View view = (View) sideSheetBehavior.C.get();
        if (view != null) {
            sideSheetBehavior.L0(view, i10, false);
        }
    }

    private boolean J0(View view) {
        if ((view.isShown() || h0.o(view) != null) && this.f14914s) {
            return true;
        }
        return false;
    }

    public static /* synthetic */ void K(SideSheetBehavior sideSheetBehavior, ViewGroup.MarginLayoutParams marginLayoutParams, int i10, View view, ValueAnimator valueAnimator) {
        sideSheetBehavior.f14907d.o(marginLayoutParams, zg.a.c(i10, 0, valueAnimator.getAnimatedFraction()));
        view.requestLayout();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void L0(View view, int i10, boolean z10) {
        if (w0(view, i10, z10)) {
            G0(2);
            this.f14912q.b(i10);
            return;
        }
        G0(i10);
    }

    private void M0() {
        View view;
        WeakReference weakReference = this.C;
        if (weakReference != null && (view = (View) weakReference.get()) != null) {
            h0.h0(view, 262144);
            h0.h0(view, 1048576);
            if (this.f14915t != 5) {
                y0(view, AccessibilityNodeInfoCompat.a.f3332y, 5);
            }
            if (this.f14915t != 3) {
                y0(view, AccessibilityNodeInfoCompat.a.f3330w, 3);
            }
        }
    }

    private void N0() {
        ViewGroup.MarginLayoutParams marginLayoutParams;
        WeakReference weakReference = this.C;
        if (weakReference != null && weakReference.get() != null) {
            View view = (View) this.C.get();
            View f02 = f0();
            if (f02 != null && (marginLayoutParams = (ViewGroup.MarginLayoutParams) f02.getLayoutParams()) != null) {
                this.f14907d.o(marginLayoutParams, (int) ((this.f14920y * view.getScaleX()) + this.B));
                f02.requestLayout();
            }
        }
    }

    private void O0(k kVar) {
        g gVar = this.f14909i;
        if (gVar != null) {
            gVar.setShapeAppearanceModel(kVar);
        }
    }

    private void P0(View view) {
        int i10;
        if (this.f14915t == 5) {
            i10 = 4;
        } else {
            i10 = 0;
        }
        if (view.getVisibility() != i10) {
            view.setVisibility(i10);
        }
    }

    private int U(int i10, View view) {
        int i11 = this.f14915t;
        if (i11 != 1 && i11 != 2) {
            if (i11 != 3) {
                if (i11 == 5) {
                    return this.f14907d.e();
                }
                throw new IllegalStateException("Unexpected value: " + this.f14915t);
            }
            return 0;
        }
        return i10 - this.f14907d.h(view);
    }

    private float V(float f10, float f11) {
        return Math.abs(f10 - f11);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int W(View view, float f10, float f11) {
        if (u0(f10)) {
            return 3;
        }
        if (I0(view, f10)) {
            if (!this.f14907d.m(f10, f11) && !this.f14907d.l(view)) {
                return 3;
            }
            return 5;
        } else if (f10 != 0.0f && com.google.android.material.sidesheet.d.a(f10, f11)) {
            return 5;
        } else {
            int left = view.getLeft();
            if (Math.abs(left - g0()) < Math.abs(left - this.f14907d.e())) {
                return 3;
            }
            return 5;
        }
    }

    private void X() {
        WeakReference weakReference = this.D;
        if (weakReference != null) {
            weakReference.clear();
        }
        this.D = null;
    }

    private AccessibilityViewCommand Y(final int i10) {
        return new AccessibilityViewCommand() { // from class: ph.b
            @Override // androidx.core.view.accessibility.AccessibilityViewCommand
            public final boolean a(View view, AccessibilityViewCommand.a aVar) {
                return SideSheetBehavior.I(SideSheetBehavior.this, i10, view, aVar);
            }
        };
    }

    private void Z(Context context) {
        if (this.f14911p == null) {
            return;
        }
        g gVar = new g(this.f14911p);
        this.f14909i = gVar;
        gVar.N(context);
        ColorStateList colorStateList = this.f14910o;
        if (colorStateList != null) {
            this.f14909i.X(colorStateList);
            return;
        }
        TypedValue typedValue = new TypedValue();
        context.getTheme().resolveAttribute(16842801, typedValue, true);
        this.f14909i.setTint(typedValue.data);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void a0(View view, int i10) {
        if (!this.I.isEmpty()) {
            this.f14907d.b(i10);
            Iterator it = this.I.iterator();
            if (it.hasNext()) {
                android.support.v4.media.session.b.a(it.next());
                throw null;
            }
        }
    }

    private void b0(View view) {
        if (h0.o(view) == null) {
            h0.q0(view, view.getResources().getString(K));
        }
    }

    private int c0(int i10, int i11, int i12, int i13) {
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

    private ValueAnimator.AnimatorUpdateListener e0() {
        final ViewGroup.MarginLayoutParams marginLayoutParams;
        final View f02 = f0();
        if (f02 == null || (marginLayoutParams = (ViewGroup.MarginLayoutParams) f02.getLayoutParams()) == null) {
            return null;
        }
        final int c10 = this.f14907d.c(marginLayoutParams);
        return new ValueAnimator.AnimatorUpdateListener() { // from class: ph.c
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                SideSheetBehavior.K(SideSheetBehavior.this, marginLayoutParams, c10, f02, valueAnimator);
            }
        };
    }

    private int h0() {
        com.google.android.material.sidesheet.c cVar = this.f14907d;
        if (cVar == null || cVar.j() == 0) {
            return 5;
        }
        return 3;
    }

    private CoordinatorLayout.f q0() {
        View view;
        WeakReference weakReference = this.C;
        if (weakReference != null && (view = (View) weakReference.get()) != null && (view.getLayoutParams() instanceof CoordinatorLayout.f)) {
            return (CoordinatorLayout.f) view.getLayoutParams();
        }
        return null;
    }

    private boolean r0() {
        CoordinatorLayout.f q02 = q0();
        if (q02 != null && ((ViewGroup.MarginLayoutParams) q02).leftMargin > 0) {
            return true;
        }
        return false;
    }

    private boolean s0() {
        CoordinatorLayout.f q02 = q0();
        if (q02 != null && ((ViewGroup.MarginLayoutParams) q02).rightMargin > 0) {
            return true;
        }
        return false;
    }

    private boolean t0(MotionEvent motionEvent) {
        if (!H0() || V(this.H, motionEvent.getX()) <= this.f14917v.z()) {
            return false;
        }
        return true;
    }

    private boolean u0(float f10) {
        return this.f14907d.k(f10);
    }

    private boolean v0(View view) {
        ViewParent parent = view.getParent();
        if (parent != null && parent.isLayoutRequested() && h0.R(view)) {
            return true;
        }
        return false;
    }

    private boolean w0(View view, int i10, boolean z10) {
        int l02 = l0(i10);
        ViewDragHelper p02 = p0();
        if (p02 != null) {
            if (z10) {
                if (p02.O(l02, view.getTop())) {
                    return true;
                }
                return false;
            } else if (p02.Q(view, l02, view.getTop())) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    private void x0(CoordinatorLayout coordinatorLayout) {
        int i10;
        View findViewById;
        if (this.D == null && (i10 = this.E) != -1 && (findViewById = coordinatorLayout.findViewById(i10)) != null) {
            this.D = new WeakReference(findViewById);
        }
    }

    private void y0(View view, AccessibilityNodeInfoCompat.a aVar, int i10) {
        h0.j0(view, aVar, null, Y(i10));
    }

    private void z0() {
        VelocityTracker velocityTracker = this.F;
        if (velocityTracker != null) {
            velocityTracker.recycle();
            this.F = null;
        }
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public void B(CoordinatorLayout coordinatorLayout, View view, Parcelable parcelable) {
        c cVar = (c) parcelable;
        if (cVar.a() != null) {
            super.B(coordinatorLayout, view, cVar.a());
        }
        int i10 = cVar.f14924i;
        i10 = (i10 == 1 || i10 == 2) ? 5 : 5;
        this.f14915t = i10;
        this.f14916u = i10;
    }

    public void B0(int i10) {
        this.E = i10;
        X();
        WeakReference weakReference = this.C;
        if (weakReference != null) {
            View view = (View) weakReference.get();
            if (i10 != -1 && h0.S(view)) {
                view.requestLayout();
            }
        }
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public Parcelable C(CoordinatorLayout coordinatorLayout, View view) {
        return new c(super.C(coordinatorLayout, view), this);
    }

    public void C0(boolean z10) {
        this.f14914s = z10;
    }

    public void F0(final int i10) {
        String str;
        if (i10 != 1 && i10 != 2) {
            WeakReference weakReference = this.C;
            if (weakReference != null && weakReference.get() != null) {
                A0((View) this.C.get(), new Runnable() { // from class: ph.a
                    @Override // java.lang.Runnable
                    public final void run() {
                        SideSheetBehavior.J(SideSheetBehavior.this, i10);
                    }
                });
                return;
            } else {
                G0(i10);
                return;
            }
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

    void G0(int i10) {
        View view;
        if (this.f14915t != i10) {
            this.f14915t = i10;
            if (i10 == 3 || i10 == 5) {
                this.f14916u = i10;
            }
            WeakReference weakReference = this.C;
            if (weakReference == null || (view = (View) weakReference.get()) == null) {
                return;
            }
            P0(view);
            Iterator it = this.I.iterator();
            if (!it.hasNext()) {
                M0();
            } else {
                android.support.v4.media.session.b.a(it.next());
                throw null;
            }
        }
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean H(CoordinatorLayout coordinatorLayout, View view, MotionEvent motionEvent) {
        if (!view.isShown()) {
            return false;
        }
        int actionMasked = motionEvent.getActionMasked();
        if (this.f14915t == 1 && actionMasked == 0) {
            return true;
        }
        if (H0()) {
            this.f14917v.F(motionEvent);
        }
        if (actionMasked == 0) {
            z0();
        }
        if (this.F == null) {
            this.F = VelocityTracker.obtain();
        }
        this.F.addMovement(motionEvent);
        if (H0() && actionMasked == 2 && !this.f14918w && t0(motionEvent)) {
            this.f14917v.b(view, motionEvent.getPointerId(motionEvent.getActionIndex()));
        }
        return !this.f14918w;
    }

    boolean I0(View view, float f10) {
        return this.f14907d.n(view, f10);
    }

    public boolean K0() {
        return true;
    }

    @Override // jh.b
    public void a() {
        f fVar = this.G;
        if (fVar == null) {
            return;
        }
        fVar.f();
    }

    @Override // jh.b
    public void b(BackEventCompat backEventCompat) {
        f fVar = this.G;
        if (fVar == null) {
            return;
        }
        fVar.j(backEventCompat);
    }

    @Override // jh.b
    public void c(BackEventCompat backEventCompat) {
        f fVar = this.G;
        if (fVar == null) {
            return;
        }
        fVar.l(backEventCompat, h0());
        N0();
    }

    @Override // jh.b
    public void d() {
        f fVar = this.G;
        if (fVar == null) {
            return;
        }
        BackEventCompat c10 = fVar.c();
        if (c10 != null && Build.VERSION.SDK_INT >= 34) {
            this.G.h(c10, h0(), new b(), e0());
        } else {
            F0(5);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d0() {
        return this.f14920y;
    }

    public View f0() {
        WeakReference weakReference = this.D;
        if (weakReference != null) {
            return (View) weakReference.get();
        }
        return null;
    }

    public int g0() {
        return this.f14907d.d();
    }

    public float i0() {
        return this.f14919x;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float j0() {
        return 0.5f;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public void k(CoordinatorLayout.f fVar) {
        super.k(fVar);
        this.C = null;
        this.f14917v = null;
        this.G = null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int k0() {
        return this.B;
    }

    int l0(int i10) {
        if (i10 != 3) {
            if (i10 == 5) {
                return this.f14907d.e();
            }
            throw new IllegalArgumentException("Invalid state to get outer edge offset: " + i10);
        }
        return g0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int m0() {
        return this.A;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public void n() {
        super.n();
        this.C = null;
        this.f14917v = null;
        this.G = null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int n0() {
        return this.f14921z;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean o(CoordinatorLayout coordinatorLayout, View view, MotionEvent motionEvent) {
        ViewDragHelper viewDragHelper;
        if (!J0(view)) {
            this.f14918w = true;
            return false;
        }
        int actionMasked = motionEvent.getActionMasked();
        if (actionMasked == 0) {
            z0();
        }
        if (this.F == null) {
            this.F = VelocityTracker.obtain();
        }
        this.F.addMovement(motionEvent);
        if (actionMasked != 0) {
            if ((actionMasked == 1 || actionMasked == 3) && this.f14918w) {
                this.f14918w = false;
                return false;
            }
        } else {
            this.H = (int) motionEvent.getX();
        }
        if (!this.f14918w && (viewDragHelper = this.f14917v) != null && viewDragHelper.P(motionEvent)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int o0() {
        return 500;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean p(CoordinatorLayout coordinatorLayout, View view, int i10) {
        int i11;
        if (h0.w(coordinatorLayout) && !h0.w(view)) {
            view.setFitsSystemWindows(true);
        }
        if (this.C == null) {
            this.C = new WeakReference(view);
            this.G = new f(view);
            g gVar = this.f14909i;
            if (gVar != null) {
                h0.r0(view, gVar);
                g gVar2 = this.f14909i;
                float f10 = this.f14913r;
                if (f10 == -1.0f) {
                    f10 = h0.u(view);
                }
                gVar2.W(f10);
            } else {
                ColorStateList colorStateList = this.f14910o;
                if (colorStateList != null) {
                    h0.s0(view, colorStateList);
                }
            }
            P0(view);
            M0();
            if (h0.x(view) == 0) {
                h0.x0(view, 1);
            }
            b0(view);
        }
        E0(view, i10);
        if (this.f14917v == null) {
            this.f14917v = ViewDragHelper.o(coordinatorLayout, this.J);
        }
        int h10 = this.f14907d.h(view);
        coordinatorLayout.E(view, i10);
        this.f14921z = coordinatorLayout.getWidth();
        this.A = this.f14907d.i(coordinatorLayout);
        this.f14920y = view.getWidth();
        ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) view.getLayoutParams();
        if (marginLayoutParams != null) {
            i11 = this.f14907d.a(marginLayoutParams);
        } else {
            i11 = 0;
        }
        this.B = i11;
        h0.X(view, U(h10, view));
        x0(coordinatorLayout);
        for (Object obj : this.I) {
            android.support.v4.media.session.b.a(obj);
        }
        return true;
    }

    ViewDragHelper p0() {
        return this.f14917v;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean q(CoordinatorLayout coordinatorLayout, View view, int i10, int i11, int i12, int i13) {
        ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) view.getLayoutParams();
        view.measure(c0(i10, coordinatorLayout.getPaddingLeft() + coordinatorLayout.getPaddingRight() + marginLayoutParams.leftMargin + marginLayoutParams.rightMargin + i11, -1, marginLayoutParams.width), c0(i12, coordinatorLayout.getPaddingTop() + coordinatorLayout.getPaddingBottom() + marginLayoutParams.topMargin + marginLayoutParams.bottomMargin + i13, -1, marginLayoutParams.height));
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c extends u2.a {
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: i  reason: collision with root package name */
        final int f14924i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class a implements Parcelable.ClassLoaderCreator {
            a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public c createFromParcel(Parcel parcel) {
                return new c(parcel, (ClassLoader) null);
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
            this.f14924i = parcel.readInt();
        }

        @Override // u2.a, android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            super.writeToParcel(parcel, i10);
            parcel.writeInt(this.f14924i);
        }

        public c(Parcelable parcelable, SideSheetBehavior sideSheetBehavior) {
            super(parcelable);
            this.f14924i = sideSheetBehavior.f14915t;
        }
    }

    public SideSheetBehavior(@NonNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f14912q = new d();
        this.f14914s = true;
        this.f14915t = 5;
        this.f14916u = 5;
        this.f14919x = 0.1f;
        this.E = -1;
        this.I = new LinkedHashSet();
        this.J = new a();
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, yg.k.M5);
        if (obtainStyledAttributes.hasValue(yg.k.O5)) {
            this.f14910o = lh.c.a(context, obtainStyledAttributes, yg.k.O5);
        }
        if (obtainStyledAttributes.hasValue(yg.k.R5)) {
            this.f14911p = k.e(context, attributeSet, 0, L).m();
        }
        if (obtainStyledAttributes.hasValue(yg.k.Q5)) {
            B0(obtainStyledAttributes.getResourceId(yg.k.Q5, -1));
        }
        Z(context);
        this.f14913r = obtainStyledAttributes.getDimension(yg.k.N5, -1.0f);
        C0(obtainStyledAttributes.getBoolean(yg.k.P5, true));
        obtainStyledAttributes.recycle();
        this.f14908e = ViewConfiguration.get(context).getScaledMaximumFlingVelocity();
    }
}
