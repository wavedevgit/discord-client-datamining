package pn;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.AnimatorSet;
import android.animation.ValueAnimator;
import android.app.Activity;
import android.content.res.Resources;
import android.graphics.Rect;
import android.os.Build;
import android.util.DisplayMetrics;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.view.WindowMetrics;
import android.view.inputmethod.InputMethodManager;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.w;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import com.facebook.react.uimanager.ThemedReactContext;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import com.swmansion.rnscreens.Screen;
import com.swmansion.rnscreens.ScreenContainer;
import com.swmansion.rnscreens.ScreenContentWrapper;
import com.swmansion.rnscreens.ScreenFooter;
import com.swmansion.rnscreens.r0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import qn.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements androidx.lifecycle.m, w {

    /* renamed from: w */
    public static final a f43392w = new a(null);

    /* renamed from: d */
    private final Screen f43393d;

    /* renamed from: e */
    private boolean f43394e;

    /* renamed from: i */
    private com.swmansion.rnscreens.n f43395i;

    /* renamed from: o */
    private boolean f43396o;

    /* renamed from: p */
    private int f43397p;

    /* renamed from: q */
    private int f43398q;

    /* renamed from: r */
    private int f43399r;

    /* renamed from: s */
    private int f43400s;

    /* renamed from: t */
    private final d f43401t;

    /* renamed from: u */
    private final b f43402u;

    /* renamed from: v */
    private View f43403v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public final class b extends BottomSheetBehavior.g {
        public b() {
            o.this = r1;
        }

        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.g
        public void b(View bottomSheet, float f10) {
            Intrinsics.checkNotNullParameter(bottomSheet, "bottomSheet");
        }

        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.g
        public void c(View bottomSheet, int i10) {
            Intrinsics.checkNotNullParameter(bottomSheet, "bottomSheet");
            if (i10 == 4 && WindowInsetsCompat.C(bottomSheet.getRootWindowInsets()).u(WindowInsetsCompat.p.c())) {
                bottomSheet.requestFocus();
                InputMethodManager B = o.this.B();
                if (B != null) {
                    B.hideSoftInputFromWindow(bottomSheet.getWindowToken(), 0);
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: a */
        private final r0 f43405a;

        /* renamed from: b */
        private final Screen f43406b;

        /* renamed from: c */
        private final CoordinatorLayout f43407c;

        /* renamed from: d */
        private final g f43408d;

        public c(r0 fragment, Screen screen, CoordinatorLayout coordinatorLayout, g dimmingDelegate) {
            Intrinsics.checkNotNullParameter(fragment, "fragment");
            Intrinsics.checkNotNullParameter(screen, "screen");
            Intrinsics.checkNotNullParameter(coordinatorLayout, "coordinatorLayout");
            Intrinsics.checkNotNullParameter(dimmingDelegate, "dimmingDelegate");
            this.f43405a = fragment;
            this.f43406b = screen;
            this.f43407c = coordinatorLayout;
            this.f43408d = dimmingDelegate;
        }

        public final CoordinatorLayout a() {
            return this.f43407c;
        }

        public final g b() {
            return this.f43408d;
        }

        public final r0 c() {
            return this.f43405a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f43405a, cVar.f43405a) && Intrinsics.areEqual(this.f43406b, cVar.f43406b) && Intrinsics.areEqual(this.f43407c, cVar.f43407c) && Intrinsics.areEqual(this.f43408d, cVar.f43408d)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((((this.f43405a.hashCode() * 31) + this.f43406b.hashCode()) * 31) + this.f43407c.hashCode()) * 31) + this.f43408d.hashCode();
        }

        public String toString() {
            r0 r0Var = this.f43405a;
            Screen screen = this.f43406b;
            CoordinatorLayout coordinatorLayout = this.f43407c;
            g gVar = this.f43408d;
            return "SheetAnimationContext(fragment=" + r0Var + ", screen=" + screen + ", coordinatorLayout=" + coordinatorLayout + ", dimmingDelegate=" + gVar + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public final class d extends BottomSheetBehavior.g {
        public d() {
            o.this = r1;
        }

        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.g
        public void b(View bottomSheet, float f10) {
            Intrinsics.checkNotNullParameter(bottomSheet, "bottomSheet");
        }

        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.g
        public void c(View bottomSheet, int i10) {
            Intrinsics.checkNotNullParameter(bottomSheet, "bottomSheet");
            o.this.L(i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class e {

        /* renamed from: a */
        public static final /* synthetic */ int[] f43410a;

        static {
            int[] iArr = new int[Lifecycle.a.values().length];
            try {
                iArr[Lifecycle.a.ON_CREATE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[Lifecycle.a.ON_START.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[Lifecycle.a.ON_RESUME.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[Lifecycle.a.ON_PAUSE.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[Lifecycle.a.ON_DESTROY.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            f43410a = iArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends AnimatorListenerAdapter {
        f() {
            o.this = r1;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animation) {
            Intrinsics.checkNotNullParameter(animation, "animation");
            o.this.f43396o = false;
            o.this.C().onSheetYTranslationChanged$react_native_screens_release();
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animation) {
            Intrinsics.checkNotNullParameter(animation, "animation");
            o.this.f43396o = true;
        }
    }

    public o(Screen screen) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        this.f43393d = screen;
        this.f43395i = com.swmansion.rnscreens.m.f19299a;
        this.f43399r = screen.getSheetInitialDetentIndex();
        this.f43400s = screen.getSheetDetents().k(screen.getSheetInitialDetentIndex());
        d dVar = new d();
        this.f43401t = dVar;
        this.f43402u = new b();
        screen.getFragment();
        Fragment fragment = screen.getFragment();
        Intrinsics.checkNotNull(fragment);
        fragment.getLifecycle().a(this);
        BottomSheetBehavior D = D();
        if (D != null) {
            D.c0(dVar);
            return;
        }
        throw new IllegalStateException("[RNScreens] Sheet delegate accepts screen with initialized sheet behaviour only.");
    }

    public static final void A(o oVar, ValueAnimator it) {
        Intrinsics.checkNotNullParameter(it, "it");
        Object animatedValue = it.getAnimatedValue();
        Intrinsics.checkNotNull(animatedValue, "null cannot be cast to non-null type kotlin.Float");
        oVar.U(((Float) animatedValue).floatValue());
    }

    public final InputMethodManager B() {
        Object systemService = this.f43393d.getReactContext().getSystemService("input_method");
        if (systemService instanceof InputMethodManager) {
            return (InputMethodManager) systemService;
        }
        return null;
    }

    private final BottomSheetBehavior D() {
        return this.f43393d.getSheetBehavior();
    }

    private final r0 E() {
        Fragment fragment = this.f43393d.getFragment();
        Intrinsics.checkNotNull(fragment, "null cannot be cast to non-null type com.swmansion.rnscreens.ScreenStackFragment");
        return (r0) fragment;
    }

    private final void F() {
        M();
    }

    private final void G() {
        O();
    }

    private final void H() {
        com.swmansion.rnscreens.k.f19291d.g(this);
    }

    private final void I() {
        com.swmansion.rnscreens.k.f19291d.b(this);
    }

    private final void J() {
        com.swmansion.rnscreens.k.f19291d.e(N());
    }

    public final void L(int i10) {
        boolean b10 = p.f43412a.b(i10);
        if (b10) {
            this.f43400s = i10;
            this.f43399r = this.f43393d.getSheetDetents().h(i10);
        }
        this.f43393d.onSheetDetentChanged$react_native_screens_release(this.f43399r, b10);
        if (P(i10)) {
            E().a0();
        }
    }

    private final void M() {
        View currentFocus;
        View decorView;
        Activity currentActivity = this.f43393d.getReactContext().getCurrentActivity();
        if (currentActivity != null && (currentFocus = currentActivity.getCurrentFocus()) != null) {
            Window window = currentActivity.getWindow();
            if (window != null && (decorView = window.getDecorView()) != null && Intrinsics.areEqual(co.a.c(decorView), Boolean.TRUE)) {
                this.f43403v = currentFocus;
            }
            this.f43393d.setDescendantFocusability(262144);
            this.f43393d.requestFocus();
            InputMethodManager B = B();
            if (B != null) {
                B.hideSoftInputFromWindow(currentFocus.getWindowToken(), 0);
            }
        }
    }

    private final View N() {
        Activity currentActivity = this.f43393d.getReactContext().getCurrentActivity();
        if (currentActivity != null) {
            View decorView = currentActivity.getWindow().getDecorView();
            Intrinsics.checkNotNullExpressionValue(decorView, "getDecorView(...)");
            return decorView;
        }
        throw new IllegalStateException("[RNScreens] Attempt to access activity on detached context");
    }

    private final void O() {
        View view = this.f43403v;
        if (view != null) {
            view.requestFocus();
            InputMethodManager B = B();
            if (B != null) {
                B.showSoftInput(view, 0);
            }
        }
        this.f43403v = null;
    }

    private final boolean P(int i10) {
        if (i10 == 5) {
            return true;
        }
        return false;
    }

    private final Integer Q() {
        WindowManager windowManager;
        WindowMetrics currentWindowMetrics;
        Rect bounds;
        DisplayMetrics displayMetrics;
        ScreenContainer container = this.f43393d.getContainer();
        if (container != null) {
            return Integer.valueOf(container.getHeight());
        }
        ThemedReactContext reactContext = this.f43393d.getReactContext();
        Resources resources = reactContext.getResources();
        if (resources != null && (displayMetrics = resources.getDisplayMetrics()) != null) {
            return Integer.valueOf(displayMetrics.heightPixels);
        }
        if (Build.VERSION.SDK_INT >= 30) {
            Object systemService = reactContext.getSystemService("window");
            if (systemService instanceof WindowManager) {
                windowManager = (WindowManager) systemService;
            } else {
                windowManager = null;
            }
            if (windowManager != null && (currentWindowMetrics = windowManager.getCurrentWindowMetrics()) != null && (bounds = currentWindowMetrics.getBounds()) != null) {
                return Integer.valueOf(bounds.height());
            }
        }
        return null;
    }

    private final Integer S() {
        Integer Q = Q();
        if (Q != null) {
            return Integer.valueOf(Q.intValue() - this.f43397p);
        }
        return null;
    }

    private final void U(float f10) {
        this.f43393d.setTranslationY(f10 - n(this.f43398q));
    }

    private final void l(AnimatorSet animatorSet, boolean z10, r0 r0Var) {
        e.a aVar;
        qn.i iVar = new qn.i(this.f43393d);
        if (z10) {
            aVar = e.a.f46044d;
        } else {
            aVar = e.a.f46045e;
        }
        animatorSet.addListener(new qn.e(r0Var, iVar, aVar));
        animatorSet.addListener(new f());
    }

    public static /* synthetic */ BottomSheetBehavior q(o oVar, BottomSheetBehavior bottomSheetBehavior, com.swmansion.rnscreens.n nVar, int i10, int i11, Object obj) {
        if ((i11 & 2) != 0) {
            nVar = com.swmansion.rnscreens.m.f19299a;
        }
        if ((i11 & 4) != 0) {
            i10 = oVar.f43399r;
        }
        return oVar.o(bottomSheetBehavior, nVar, i10);
    }

    private final ValueAnimator r(float f10, float f11, final g gVar) {
        ValueAnimator ofFloat = ValueAnimator.ofFloat(f10, f11);
        ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: pn.m
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                o.s(g.this, valueAnimator);
            }
        });
        Intrinsics.checkNotNullExpressionValue(ofFloat, "apply(...)");
        return ofFloat;
    }

    public static final void s(g gVar, ValueAnimator animator) {
        Float f10;
        Intrinsics.checkNotNullParameter(animator, "animator");
        Object animatedValue = animator.getAnimatedValue();
        if (animatedValue instanceof Float) {
            f10 = (Float) animatedValue;
        } else {
            f10 = null;
        }
        if (f10 != null) {
            gVar.d().setAlpha(f10.floatValue());
        }
    }

    private final ValueAnimator v() {
        ValueAnimator ofObject = ValueAnimator.ofObject(new bo.a(new Function1() { // from class: pn.j
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                float w10;
                w10 = o.w(o.this, (Number) obj);
                return Float.valueOf(w10);
            }
        }, new Function1() { // from class: pn.k
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Float x10;
                x10 = o.x((Number) obj);
                return x10;
            }
        }), Float.valueOf(this.f43393d.getHeight()), Float.valueOf(0.0f));
        ofObject.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: pn.l
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                o.y(o.this, valueAnimator);
            }
        });
        Intrinsics.checkNotNullExpressionValue(ofObject, "apply(...)");
        return ofObject;
    }

    public static final float w(o oVar, Number number) {
        return oVar.f43393d.getHeight();
    }

    public static final Float x(Number number) {
        return Float.valueOf(0.0f);
    }

    public static final void y(o oVar, ValueAnimator it) {
        Intrinsics.checkNotNullParameter(it, "it");
        Object animatedValue = it.getAnimatedValue();
        Intrinsics.checkNotNull(animatedValue, "null cannot be cast to non-null type kotlin.Float");
        oVar.U(((Float) animatedValue).floatValue());
    }

    private final ValueAnimator z(CoordinatorLayout coordinatorLayout) {
        ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, (coordinatorLayout.getBottom() - this.f43393d.getTop()) - this.f43393d.getTranslationY());
        ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: pn.n
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                o.A(o.this, valueAnimator);
            }
        });
        Intrinsics.checkNotNullExpressionValue(ofFloat, "apply(...)");
        return ofFloat;
    }

    public final Screen C() {
        return this.f43393d;
    }

    public final void K(WindowInsetsCompat insets) {
        Intrinsics.checkNotNullParameter(insets, "insets");
        this.f43398q = insets.f(WindowInsetsCompat.p.c()).f3307d;
        if (!this.f43396o) {
            U(0.0f);
        }
    }

    public final Integer R() {
        if (this.f43393d.getSheetShouldOverflowTopInset()) {
            return Q();
        }
        return S();
    }

    /* JADX WARN: Code restructure failed: missing block: B:32:0x0029, code lost:
        if (pn.q.a(r1) != false) goto L9;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void T(com.google.android.material.bottomsheet.BottomSheetBehavior r7) {
        /*
            r6 = this;
            java.lang.String r0 = "behavior"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r7, r0)
            java.lang.Integer r0 = r6.R()
            if (r0 == 0) goto L70
            com.swmansion.rnscreens.Screen r1 = r6.f43393d
            boolean r1 = pn.q.b(r1)
            r2 = 1
            r3 = 0
            if (r1 != r2) goto L2e
            com.swmansion.rnscreens.Screen r1 = r6.f43393d
            com.swmansion.rnscreens.ScreenContentWrapper r1 = r1.getContentWrapper()
            if (r1 == 0) goto L2c
            int r2 = r1.getHeight()
            java.lang.Integer r2 = java.lang.Integer.valueOf(r2)
            boolean r1 = pn.q.a(r1)
            if (r1 == 0) goto L2c
            goto L45
        L2c:
            r2 = r3
            goto L45
        L2e:
            if (r1 != 0) goto L6a
            com.swmansion.rnscreens.Screen r1 = r6.f43393d
            com.swmansion.rnscreens.bottomsheet.SheetDetents r1 = r1.getSheetDetents()
            double r1 = r1.g()
            int r4 = r0.intValue()
            double r4 = (double) r4
            double r1 = r1 * r4
            int r1 = (int) r1
            java.lang.Integer r2 = java.lang.Integer.valueOf(r1)
        L45:
            com.swmansion.rnscreens.Screen r1 = r6.f43393d
            com.swmansion.rnscreens.bottomsheet.SheetDetents r1 = r1.getSheetDetents()
            int r1 = r1.d()
            r4 = 3
            if (r1 != r4) goto L66
            com.swmansion.rnscreens.Screen r1 = r6.f43393d
            com.swmansion.rnscreens.bottomsheet.SheetDetents r1 = r1.getSheetDetents()
            int r0 = r0.intValue()
            int r3 = r6.f43397p
            int r0 = r1.b(r0, r3)
            java.lang.Integer r3 = java.lang.Integer.valueOf(r0)
        L66:
            pn.a.b(r7, r2, r3)
            return
        L6a:
            as.p r7 = new as.p
            r7.<init>()
            throw r7
        L70:
            java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
            java.lang.String r0 = "[RNScreens] Failed to find window height during bottom sheet behaviour configuration"
            r7.<init>(r0)
            throw r7
        */
        throw new UnsupportedOperationException("Method not decompiled: pn.o.T(com.google.android.material.bottomsheet.BottomSheetBehavior):void");
    }

    @Override // androidx.core.view.w
    public WindowInsetsCompat a(View v10, WindowInsetsCompat insets) {
        Intrinsics.checkNotNullParameter(v10, "v");
        Intrinsics.checkNotNullParameter(insets, "insets");
        boolean u10 = insets.u(WindowInsetsCompat.p.c());
        Insets f10 = insets.f(WindowInsetsCompat.p.c());
        Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
        Insets f11 = insets.f(WindowInsetsCompat.p.h());
        Intrinsics.checkNotNullExpressionValue(f11, "getInsets(...)");
        Insets f12 = insets.f(WindowInsetsCompat.p.b());
        Intrinsics.checkNotNullExpressionValue(f12, "getInsets(...)");
        this.f43397p = Math.max(f11.f3305b, f12.f3305b);
        int i10 = 0;
        if (u10) {
            this.f43394e = true;
            this.f43395i = new com.swmansion.rnscreens.o(f10.f3307d);
            BottomSheetBehavior D = D();
            if (D != null) {
                q(this, D, this.f43395i, 0, 4, null);
            }
        } else {
            BottomSheetBehavior D2 = D();
            if (D2 != null) {
                if (this.f43394e) {
                    q(this, D2, com.swmansion.rnscreens.l.f19298a, 0, 4, null);
                } else {
                    com.swmansion.rnscreens.n nVar = this.f43395i;
                    com.swmansion.rnscreens.m mVar = com.swmansion.rnscreens.m.f19299a;
                    if (!Intrinsics.areEqual(nVar, mVar)) {
                        q(this, D2, mVar, 0, 4, null);
                    }
                }
            }
            this.f43395i = com.swmansion.rnscreens.m.f19299a;
            this.f43394e = false;
        }
        if (!u10) {
            i10 = f11.f3307d;
        }
        WindowInsetsCompat a10 = new WindowInsetsCompat.a(insets).b(WindowInsetsCompat.p.h(), Insets.c(f11.f3304a, f11.f3305b, f11.f3306c, i10)).a();
        Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
        return a10;
    }

    @Override // androidx.lifecycle.m
    public void i(LifecycleOwner source, Lifecycle.a event) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(event, "event");
        int i10 = e.f43410a[event.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 != 5) {
                            return;
                        }
                        G();
                        return;
                    }
                    H();
                    return;
                }
                I();
                return;
            }
            J();
            return;
        }
        F();
    }

    public final int n(int i10) {
        int i11;
        Integer R = R();
        if (R != null) {
            if (q.b(this.f43393d)) {
                ScreenContentWrapper contentWrapper = this.f43393d.getContentWrapper();
                if (contentWrapper != null) {
                    i11 = contentWrapper.getHeight();
                } else {
                    i11 = 0;
                }
                return Math.min(Math.max(R.intValue() - i11, 0), i10);
            }
            return Math.min(R.intValue() - ((int) (kotlin.ranges.d.k(this.f43393d.getSheetDetents().g(), 0.0d, 1.0d) * R.intValue())), i10);
        }
        throw new IllegalStateException("[RNScreens] Failed to find window height during bottom sheet behaviour configuration");
    }

    public final BottomSheetBehavior o(BottomSheetBehavior behavior, com.swmansion.rnscreens.n keyboardState, int i10) {
        int i11;
        BottomSheetBehavior bottomSheetBehavior;
        BottomSheetBehavior bottomSheetBehavior2;
        int i12;
        Intrinsics.checkNotNullParameter(behavior, "behavior");
        Intrinsics.checkNotNullParameter(keyboardState, "keyboardState");
        Integer R = R();
        if (R != null) {
            behavior.U0(true);
            behavior.O0(true);
            behavior.c0(this.f43401t);
            ScreenFooter footer = this.f43393d.getFooter();
            if (footer != null) {
                footer.r(behavior);
            }
            boolean z10 = false;
            if (keyboardState instanceof com.swmansion.rnscreens.m) {
                int d10 = this.f43393d.getSheetDetents().d();
                if (d10 != 1) {
                    if (d10 != 2) {
                        if (d10 == 3) {
                            return pn.a.f(behavior, Integer.valueOf(this.f43393d.getSheetDetents().k(i10)), Integer.valueOf(this.f43393d.getSheetDetents().c(R.intValue())), Integer.valueOf(this.f43393d.getSheetDetents().i(R.intValue())), Float.valueOf(this.f43393d.getSheetDetents().e()), Integer.valueOf(this.f43393d.getSheetDetents().b(R.intValue(), this.f43397p)));
                        }
                        throw new IllegalStateException("[RNScreens] Invalid detent count " + this.f43393d.getSheetDetents().d() + ". Expected at most 3.");
                    }
                    return pn.a.h(behavior, Integer.valueOf(this.f43393d.getSheetDetents().k(i10)), Integer.valueOf(this.f43393d.getSheetDetents().c(R.intValue())), Integer.valueOf(this.f43393d.getSheetDetents().i(R.intValue())));
                }
                if (q.b(this.f43393d)) {
                    i12 = this.f43393d.getSheetDetents().j(this.f43393d);
                } else {
                    i12 = this.f43393d.getSheetDetents().i(R.intValue());
                }
                pn.a.e(behavior, Integer.valueOf(i12), false, 2, null);
                return behavior;
            } else if (keyboardState instanceof com.swmansion.rnscreens.o) {
                if (((com.swmansion.rnscreens.o) keyboardState).a() != 0) {
                    z10 = true;
                }
                int d11 = this.f43393d.getSheetDetents().d();
                if (d11 != 1) {
                    if (d11 != 2) {
                        if (d11 == 3) {
                            if (z10) {
                                pn.a.g(behavior, 3, null, null, null, null, 30, null);
                                bottomSheetBehavior2 = behavior;
                            } else {
                                bottomSheetBehavior2 = behavior;
                                pn.a.g(bottomSheetBehavior2, null, null, null, null, null, 31, null);
                            }
                            bottomSheetBehavior2.c0(this.f43402u);
                            return bottomSheetBehavior2;
                        }
                        throw new IllegalStateException("[RNScreens] Invalid detent count " + this.f43393d.getSheetDetents().d() + ". Expected at most 3.");
                    }
                    if (z10) {
                        bottomSheetBehavior = behavior;
                        pn.a.i(bottomSheetBehavior, 3, null, null, 6, null);
                    } else {
                        pn.a.i(behavior, null, null, null, 7, null);
                        bottomSheetBehavior = behavior;
                    }
                    bottomSheetBehavior.c0(this.f43402u);
                    return bottomSheetBehavior;
                }
                behavior.c0(this.f43402u);
                return behavior;
            } else if (keyboardState instanceof com.swmansion.rnscreens.l) {
                behavior.J0(this.f43402u);
                int d12 = this.f43393d.getSheetDetents().d();
                if (d12 != 1) {
                    if (d12 != 2) {
                        if (d12 == 3) {
                            return pn.a.g(behavior, null, Integer.valueOf(this.f43393d.getSheetDetents().c(R.intValue())), Integer.valueOf(this.f43393d.getSheetDetents().i(R.intValue())), Float.valueOf(this.f43393d.getSheetDetents().e()), Integer.valueOf(this.f43393d.getSheetDetents().b(R.intValue(), this.f43397p)), 1, null);
                        }
                        throw new IllegalStateException("[RNScreens] Invalid detent count " + this.f43393d.getSheetDetents().d() + ". Expected at most 3.");
                    }
                    return pn.a.i(behavior, null, Integer.valueOf(this.f43393d.getSheetDetents().c(R.intValue())), Integer.valueOf(this.f43393d.getSheetDetents().i(R.intValue())), 1, null);
                }
                if (q.b(this.f43393d)) {
                    i11 = this.f43393d.getSheetDetents().j(this.f43393d);
                } else {
                    i11 = this.f43393d.getSheetDetents().i(R.intValue());
                }
                pn.a.d(behavior, Integer.valueOf(i11), false);
                return behavior;
            } else {
                throw new as.p();
            }
        }
        throw new IllegalStateException("[RNScreens] Failed to find window height during bottom sheet behaviour configuration");
    }

    public final Animator t(c sheetAnimationContext) {
        Intrinsics.checkNotNullParameter(sheetAnimationContext, "sheetAnimationContext");
        AnimatorSet animatorSet = new AnimatorSet();
        g b10 = sheetAnimationContext.b();
        r0 c10 = sheetAnimationContext.c();
        ValueAnimator r10 = r(0.0f, b10.e(), b10);
        AnimatorSet.Builder play = animatorSet.play(v());
        Screen screen = this.f43393d;
        if (!b10.j(screen, screen.getSheetInitialDetentIndex())) {
            play = null;
        }
        if (play != null) {
            play.with(r10);
        }
        l(animatorSet, true, c10);
        return animatorSet;
    }

    public final Animator u(c sheetAnimationContext) {
        Intrinsics.checkNotNullParameter(sheetAnimationContext, "sheetAnimationContext");
        AnimatorSet animatorSet = new AnimatorSet();
        CoordinatorLayout a10 = sheetAnimationContext.a();
        g b10 = sheetAnimationContext.b();
        r0 c10 = sheetAnimationContext.c();
        ValueAnimator r10 = r(b10.d().getAlpha(), 0.0f, b10);
        animatorSet.play(r10).with(z(a10));
        l(animatorSet, false, c10);
        return animatorSet;
    }
}
