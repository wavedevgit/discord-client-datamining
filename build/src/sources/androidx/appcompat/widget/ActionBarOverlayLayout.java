package androidx.appcompat.widget;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.annotation.SuppressLint;
import android.content.Context;
import android.content.res.Configuration;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.util.AttributeSet;
import android.view.Menu;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewPropertyAnimator;
import android.view.Window;
import android.view.WindowInsets;
import android.widget.OverScroller;
import androidx.annotation.NonNull;
import androidx.appcompat.view.menu.j;
import androidx.core.graphics.Insets;
import androidx.core.view.NestedScrollingParentHelper;
import androidx.core.view.WindowInsetsCompat;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
@SuppressLint({"UnknownNullness"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ActionBarOverlayLayout extends ViewGroup implements y, androidx.core.view.t, androidx.core.view.u {
    static final int[] R = {f.a.f22873b, 16842841};
    private static final WindowInsetsCompat S = new WindowInsetsCompat.a().d(Insets.c(0, 1, 0, 1)).a();
    private static final Rect T = new Rect();
    private final Rect A;
    private final Rect B;
    private final Rect C;
    private final Rect D;
    private final Rect E;
    private WindowInsetsCompat F;
    private WindowInsetsCompat G;
    private WindowInsetsCompat H;
    private WindowInsetsCompat I;
    private d J;
    private OverScroller K;
    ViewPropertyAnimator L;
    final AnimatorListenerAdapter M;
    private final Runnable N;
    private final Runnable O;
    private final NestedScrollingParentHelper P;
    private final f Q;

    /* renamed from: d  reason: collision with root package name */
    private int f1408d;

    /* renamed from: e  reason: collision with root package name */
    private int f1409e;

    /* renamed from: i  reason: collision with root package name */
    private ContentFrameLayout f1410i;

    /* renamed from: o  reason: collision with root package name */
    ActionBarContainer f1411o;

    /* renamed from: p  reason: collision with root package name */
    private z f1412p;

    /* renamed from: q  reason: collision with root package name */
    private Drawable f1413q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f1414r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f1415s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f1416t;

    /* renamed from: u  reason: collision with root package name */
    boolean f1417u;

    /* renamed from: v  reason: collision with root package name */
    private int f1418v;

    /* renamed from: w  reason: collision with root package name */
    private int f1419w;

    /* renamed from: x  reason: collision with root package name */
    private final Rect f1420x;

    /* renamed from: y  reason: collision with root package name */
    private final Rect f1421y;

    /* renamed from: z  reason: collision with root package name */
    private final Rect f1422z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            ActionBarOverlayLayout actionBarOverlayLayout = ActionBarOverlayLayout.this;
            actionBarOverlayLayout.L = null;
            actionBarOverlayLayout.f1417u = false;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            ActionBarOverlayLayout actionBarOverlayLayout = ActionBarOverlayLayout.this;
            actionBarOverlayLayout.L = null;
            actionBarOverlayLayout.f1417u = false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b implements Runnable {
        b() {
        }

        @Override // java.lang.Runnable
        public void run() {
            ActionBarOverlayLayout.this.p();
            ActionBarOverlayLayout actionBarOverlayLayout = ActionBarOverlayLayout.this;
            actionBarOverlayLayout.L = actionBarOverlayLayout.f1411o.animate().translationY(0.0f).setListener(ActionBarOverlayLayout.this.M);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c implements Runnable {
        c() {
        }

        @Override // java.lang.Runnable
        public void run() {
            ActionBarOverlayLayout.this.p();
            ActionBarOverlayLayout actionBarOverlayLayout = ActionBarOverlayLayout.this;
            actionBarOverlayLayout.L = actionBarOverlayLayout.f1411o.animate().translationY(-ActionBarOverlayLayout.this.f1411o.getHeight()).setListener(ActionBarOverlayLayout.this.M);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface d {
        void a();

        void b();

        void c(boolean z10);

        void d();

        void e();

        void onWindowVisibilityChanged(int i10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class e extends ViewGroup.MarginLayoutParams {
        public e(Context context, AttributeSet attributeSet) {
            super(context, attributeSet);
        }

        public e(int i10, int i11) {
            super(i10, i11);
        }

        public e(ViewGroup.LayoutParams layoutParams) {
            super(layoutParams);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class f extends View {
        f(Context context) {
            super(context);
            setWillNotDraw(true);
        }

        @Override // android.view.View
        public int getWindowSystemUiVisibility() {
            return 0;
        }
    }

    public ActionBarOverlayLayout(@NonNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f1409e = 0;
        this.f1420x = new Rect();
        this.f1421y = new Rect();
        this.f1422z = new Rect();
        this.A = new Rect();
        this.B = new Rect();
        this.C = new Rect();
        this.D = new Rect();
        this.E = new Rect();
        WindowInsetsCompat windowInsetsCompat = WindowInsetsCompat.f3264b;
        this.F = windowInsetsCompat;
        this.G = windowInsetsCompat;
        this.H = windowInsetsCompat;
        this.I = windowInsetsCompat;
        this.M = new a();
        this.N = new b();
        this.O = new c();
        q(context);
        this.P = new NestedScrollingParentHelper(this);
        f fVar = new f(context);
        this.Q = fVar;
        addView(fVar);
    }

    private void j() {
        p();
        this.O.run();
    }

    /* JADX WARN: Removed duplicated region for block: B:13:0x0021  */
    /* JADX WARN: Removed duplicated region for block: B:17:0x002c  */
    /* JADX WARN: Removed duplicated region for block: B:9:0x0016  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private boolean k(android.view.View r3, android.graphics.Rect r4, boolean r5, boolean r6, boolean r7, boolean r8) {
        /*
            r2 = this;
            android.view.ViewGroup$LayoutParams r3 = r3.getLayoutParams()
            androidx.appcompat.widget.ActionBarOverlayLayout$e r3 = (androidx.appcompat.widget.ActionBarOverlayLayout.e) r3
            r0 = 1
            if (r5 == 0) goto L13
            int r5 = r3.leftMargin
            int r1 = r4.left
            if (r5 == r1) goto L13
            r3.leftMargin = r1
            r5 = r0
            goto L14
        L13:
            r5 = 0
        L14:
            if (r6 == 0) goto L1f
            int r6 = r3.topMargin
            int r1 = r4.top
            if (r6 == r1) goto L1f
            r3.topMargin = r1
            r5 = r0
        L1f:
            if (r8 == 0) goto L2a
            int r6 = r3.rightMargin
            int r8 = r4.right
            if (r6 == r8) goto L2a
            r3.rightMargin = r8
            r5 = r0
        L2a:
            if (r7 == 0) goto L35
            int r6 = r3.bottomMargin
            int r4 = r4.bottom
            if (r6 == r4) goto L35
            r3.bottomMargin = r4
            return r0
        L35:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.appcompat.widget.ActionBarOverlayLayout.k(android.view.View, android.graphics.Rect, boolean, boolean, boolean, boolean):boolean");
    }

    private boolean l() {
        androidx.core.view.h0.f(this.Q, S, this.A);
        return !this.A.equals(T);
    }

    private z o(View view) {
        if (view instanceof z) {
            return (z) view;
        }
        if (view instanceof Toolbar) {
            return ((Toolbar) view).getWrapper();
        }
        throw new IllegalStateException("Can't make a decor toolbar out of " + view.getClass().getSimpleName());
    }

    private void q(Context context) {
        TypedArray obtainStyledAttributes = getContext().getTheme().obtainStyledAttributes(R);
        boolean z10 = false;
        this.f1408d = obtainStyledAttributes.getDimensionPixelSize(0, 0);
        Drawable drawable = obtainStyledAttributes.getDrawable(1);
        this.f1413q = drawable;
        if (drawable == null) {
            z10 = true;
        }
        setWillNotDraw(z10);
        obtainStyledAttributes.recycle();
        this.K = new OverScroller(context);
    }

    private void s() {
        p();
        postDelayed(this.O, 600L);
    }

    private void t() {
        p();
        postDelayed(this.N, 600L);
    }

    private void v() {
        p();
        this.N.run();
    }

    private boolean w(float f10) {
        this.K.fling(0, 0, 0, (int) f10, 0, 0, Integer.MIN_VALUE, Integer.MAX_VALUE);
        if (this.K.getFinalY() > this.f1411o.getHeight()) {
            return true;
        }
        return false;
    }

    @Override // androidx.appcompat.widget.y
    public boolean a() {
        u();
        return this.f1412p.a();
    }

    @Override // androidx.appcompat.widget.y
    public boolean b() {
        u();
        return this.f1412p.b();
    }

    @Override // androidx.appcompat.widget.y
    public boolean c() {
        u();
        return this.f1412p.c();
    }

    @Override // android.view.ViewGroup
    protected boolean checkLayoutParams(ViewGroup.LayoutParams layoutParams) {
        return layoutParams instanceof e;
    }

    @Override // androidx.appcompat.widget.y
    public void d(Menu menu, j.a aVar) {
        u();
        this.f1412p.d(menu, aVar);
    }

    @Override // android.view.View
    public void draw(Canvas canvas) {
        int i10;
        super.draw(canvas);
        if (this.f1413q != null) {
            if (this.f1411o.getVisibility() == 0) {
                i10 = (int) (this.f1411o.getBottom() + this.f1411o.getTranslationY() + 0.5f);
            } else {
                i10 = 0;
            }
            this.f1413q.setBounds(0, i10, getWidth(), this.f1413q.getIntrinsicHeight() + i10);
            this.f1413q.draw(canvas);
        }
    }

    @Override // androidx.appcompat.widget.y
    public boolean e() {
        u();
        return this.f1412p.e();
    }

    @Override // androidx.appcompat.widget.y
    public void f() {
        u();
        this.f1412p.f();
    }

    @Override // android.view.View
    protected boolean fitSystemWindows(Rect rect) {
        return super.fitSystemWindows(rect);
    }

    @Override // androidx.appcompat.widget.y
    public boolean g() {
        u();
        return this.f1412p.g();
    }

    public int getActionBarHideOffset() {
        ActionBarContainer actionBarContainer = this.f1411o;
        if (actionBarContainer != null) {
            return -((int) actionBarContainer.getTranslationY());
        }
        return 0;
    }

    @Override // android.view.ViewGroup
    public int getNestedScrollAxes() {
        return this.P.a();
    }

    public CharSequence getTitle() {
        u();
        return this.f1412p.getTitle();
    }

    @Override // androidx.appcompat.widget.y
    public void h(int i10) {
        u();
        if (i10 != 2) {
            if (i10 != 5) {
                if (i10 != 109) {
                    return;
                }
                setOverlayMode(true);
                return;
            }
            this.f1412p.v();
            return;
        }
        this.f1412p.o();
    }

    @Override // androidx.appcompat.widget.y
    public void i() {
        u();
        this.f1412p.q();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.view.ViewGroup
    /* renamed from: m */
    public e generateDefaultLayoutParams() {
        return new e(-1, -1);
    }

    @Override // android.view.ViewGroup
    /* renamed from: n */
    public e generateLayoutParams(AttributeSet attributeSet) {
        return new e(getContext(), attributeSet);
    }

    @Override // android.view.View
    public WindowInsets onApplyWindowInsets(WindowInsets windowInsets) {
        u();
        WindowInsetsCompat D = WindowInsetsCompat.D(windowInsets, this);
        boolean k10 = k(this.f1411o, new Rect(D.o(), D.q(), D.p(), D.n()), true, true, false, true);
        androidx.core.view.h0.f(this, D, this.f1420x);
        Rect rect = this.f1420x;
        WindowInsetsCompat r10 = D.r(rect.left, rect.top, rect.right, rect.bottom);
        this.F = r10;
        boolean z10 = true;
        if (!this.G.equals(r10)) {
            this.G = this.F;
            k10 = true;
        }
        if (!this.f1421y.equals(this.f1420x)) {
            this.f1421y.set(this.f1420x);
        } else {
            z10 = k10;
        }
        if (z10) {
            requestLayout();
        }
        return D.a().c().b().B();
    }

    @Override // android.view.View
    protected void onConfigurationChanged(Configuration configuration) {
        super.onConfigurationChanged(configuration);
        q(getContext());
        androidx.core.view.h0.k0(this);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        p();
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        int childCount = getChildCount();
        int paddingLeft = getPaddingLeft();
        int paddingTop = getPaddingTop();
        for (int i14 = 0; i14 < childCount; i14++) {
            View childAt = getChildAt(i14);
            if (childAt.getVisibility() != 8) {
                e eVar = (e) childAt.getLayoutParams();
                int measuredWidth = childAt.getMeasuredWidth();
                int measuredHeight = childAt.getMeasuredHeight();
                int i15 = ((ViewGroup.MarginLayoutParams) eVar).leftMargin + paddingLeft;
                int i16 = ((ViewGroup.MarginLayoutParams) eVar).topMargin + paddingTop;
                childAt.layout(i15, i16, measuredWidth + i15, measuredHeight + i16);
            }
        }
    }

    @Override // android.view.View
    protected void onMeasure(int i10, int i11) {
        boolean z10;
        int measuredHeight;
        u();
        measureChildWithMargins(this.f1411o, i10, 0, i11, 0);
        e eVar = (e) this.f1411o.getLayoutParams();
        int max = Math.max(0, this.f1411o.getMeasuredWidth() + ((ViewGroup.MarginLayoutParams) eVar).leftMargin + ((ViewGroup.MarginLayoutParams) eVar).rightMargin);
        int max2 = Math.max(0, this.f1411o.getMeasuredHeight() + ((ViewGroup.MarginLayoutParams) eVar).topMargin + ((ViewGroup.MarginLayoutParams) eVar).bottomMargin);
        int combineMeasuredStates = View.combineMeasuredStates(0, this.f1411o.getMeasuredState());
        if ((androidx.core.view.h0.L(this) & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            measuredHeight = this.f1408d;
            if (this.f1415s && this.f1411o.getTabContainer() != null) {
                measuredHeight += this.f1408d;
            }
        } else {
            measuredHeight = this.f1411o.getVisibility() != 8 ? this.f1411o.getMeasuredHeight() : 0;
        }
        this.f1422z.set(this.f1420x);
        this.H = this.F;
        if (!this.f1414r && !z10 && l()) {
            Rect rect = this.f1422z;
            rect.top += measuredHeight;
            rect.bottom = rect.bottom;
            this.H = this.H.r(0, measuredHeight, 0, 0);
        } else {
            this.H = new WindowInsetsCompat.a(this.H).d(Insets.c(this.H.o(), this.H.q() + measuredHeight, this.H.p(), this.H.n())).a();
        }
        k(this.f1410i, this.f1422z, true, true, true, true);
        if (!this.I.equals(this.H)) {
            WindowInsetsCompat windowInsetsCompat = this.H;
            this.I = windowInsetsCompat;
            androidx.core.view.h0.g(this.f1410i, windowInsetsCompat);
        }
        measureChildWithMargins(this.f1410i, i10, 0, i11, 0);
        e eVar2 = (e) this.f1410i.getLayoutParams();
        int max3 = Math.max(max, this.f1410i.getMeasuredWidth() + ((ViewGroup.MarginLayoutParams) eVar2).leftMargin + ((ViewGroup.MarginLayoutParams) eVar2).rightMargin);
        int max4 = Math.max(max2, this.f1410i.getMeasuredHeight() + ((ViewGroup.MarginLayoutParams) eVar2).topMargin + ((ViewGroup.MarginLayoutParams) eVar2).bottomMargin);
        int combineMeasuredStates2 = View.combineMeasuredStates(combineMeasuredStates, this.f1410i.getMeasuredState());
        setMeasuredDimension(View.resolveSizeAndState(Math.max(max3 + getPaddingLeft() + getPaddingRight(), getSuggestedMinimumWidth()), i10, combineMeasuredStates2), View.resolveSizeAndState(Math.max(max4 + getPaddingTop() + getPaddingBottom(), getSuggestedMinimumHeight()), i11, combineMeasuredStates2 << 16));
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public boolean onNestedFling(View view, float f10, float f11, boolean z10) {
        if (this.f1416t && z10) {
            if (w(f11)) {
                j();
            } else {
                v();
            }
            this.f1417u = true;
            return true;
        }
        return false;
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public boolean onNestedPreFling(View view, float f10, float f11) {
        return false;
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public void onNestedPreScroll(View view, int i10, int i11, int[] iArr) {
    }

    @Override // androidx.core.view.u
    public void onNestedScroll(View view, int i10, int i11, int i12, int i13, int i14, int[] iArr) {
        onNestedScroll(view, i10, i11, i12, i13, i14);
    }

    @Override // androidx.core.view.t
    public void onNestedScrollAccepted(View view, View view2, int i10, int i11) {
        if (i11 == 0) {
            onNestedScrollAccepted(view, view2, i10);
        }
    }

    @Override // androidx.core.view.t
    public boolean onStartNestedScroll(View view, View view2, int i10, int i11) {
        return i11 == 0 && onStartNestedScroll(view, view2, i10);
    }

    @Override // androidx.core.view.t
    public void onStopNestedScroll(View view, int i10) {
        if (i10 == 0) {
            onStopNestedScroll(view);
        }
    }

    @Override // android.view.View
    public void onWindowSystemUiVisibilityChanged(int i10) {
        boolean z10;
        super.onWindowSystemUiVisibilityChanged(i10);
        u();
        int i11 = this.f1419w ^ i10;
        this.f1419w = i10;
        boolean z11 = false;
        if ((i10 & 4) == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            z11 = true;
        }
        d dVar = this.J;
        if (dVar != null) {
            dVar.c(!z11);
            if (!z10 && z11) {
                this.J.d();
            } else {
                this.J.a();
            }
        }
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 && this.J != null) {
            androidx.core.view.h0.k0(this);
        }
    }

    @Override // android.view.View
    protected void onWindowVisibilityChanged(int i10) {
        super.onWindowVisibilityChanged(i10);
        this.f1409e = i10;
        d dVar = this.J;
        if (dVar != null) {
            dVar.onWindowVisibilityChanged(i10);
        }
    }

    void p() {
        removeCallbacks(this.N);
        removeCallbacks(this.O);
        ViewPropertyAnimator viewPropertyAnimator = this.L;
        if (viewPropertyAnimator != null) {
            viewPropertyAnimator.cancel();
        }
    }

    public boolean r() {
        return this.f1414r;
    }

    public void setActionBarHideOffset(int i10) {
        p();
        this.f1411o.setTranslationY(-Math.max(0, Math.min(i10, this.f1411o.getHeight())));
    }

    public void setActionBarVisibilityCallback(d dVar) {
        this.J = dVar;
        if (getWindowToken() != null) {
            this.J.onWindowVisibilityChanged(this.f1409e);
            int i10 = this.f1419w;
            if (i10 != 0) {
                onWindowSystemUiVisibilityChanged(i10);
                androidx.core.view.h0.k0(this);
            }
        }
    }

    public void setHasNonEmbeddedTabs(boolean z10) {
        this.f1415s = z10;
    }

    public void setHideOnContentScrollEnabled(boolean z10) {
        if (z10 != this.f1416t) {
            this.f1416t = z10;
            if (!z10) {
                p();
                setActionBarHideOffset(0);
            }
        }
    }

    public void setIcon(int i10) {
        u();
        this.f1412p.setIcon(i10);
    }

    public void setLogo(int i10) {
        u();
        this.f1412p.s(i10);
    }

    public void setOverlayMode(boolean z10) {
        this.f1414r = z10;
    }

    public void setShowingForActionMode(boolean z10) {
    }

    public void setUiOptions(int i10) {
    }

    @Override // androidx.appcompat.widget.y
    public void setWindowCallback(Window.Callback callback) {
        u();
        this.f1412p.setWindowCallback(callback);
    }

    @Override // androidx.appcompat.widget.y
    public void setWindowTitle(CharSequence charSequence) {
        u();
        this.f1412p.setWindowTitle(charSequence);
    }

    @Override // android.view.ViewGroup
    public boolean shouldDelayChildPressedState() {
        return false;
    }

    void u() {
        if (this.f1410i == null) {
            this.f1410i = (ContentFrameLayout) findViewById(f.f.f22947b);
            this.f1411o = (ActionBarContainer) findViewById(f.f.f22948c);
            this.f1412p = o(findViewById(f.f.f22946a));
        }
    }

    @Override // android.view.ViewGroup
    protected ViewGroup.LayoutParams generateLayoutParams(ViewGroup.LayoutParams layoutParams) {
        return new e(layoutParams);
    }

    @Override // androidx.core.view.t
    public void onNestedPreScroll(View view, int i10, int i11, int[] iArr, int i12) {
        if (i12 == 0) {
            onNestedPreScroll(view, i10, i11, iArr);
        }
    }

    @Override // androidx.core.view.t
    public void onNestedScroll(View view, int i10, int i11, int i12, int i13, int i14) {
        if (i14 == 0) {
            onNestedScroll(view, i10, i11, i12, i13);
        }
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public void onNestedScrollAccepted(View view, View view2, int i10) {
        this.P.b(view, view2, i10);
        this.f1418v = getActionBarHideOffset();
        p();
        d dVar = this.J;
        if (dVar != null) {
            dVar.e();
        }
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public boolean onStartNestedScroll(View view, View view2, int i10) {
        if ((i10 & 2) == 0 || this.f1411o.getVisibility() != 0) {
            return false;
        }
        return this.f1416t;
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public void onStopNestedScroll(View view) {
        if (this.f1416t && !this.f1417u) {
            if (this.f1418v <= this.f1411o.getHeight()) {
                t();
            } else {
                s();
            }
        }
        d dVar = this.J;
        if (dVar != null) {
            dVar.b();
        }
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public void onNestedScroll(View view, int i10, int i11, int i12, int i13) {
        int i14 = this.f1418v + i11;
        this.f1418v = i14;
        setActionBarHideOffset(i14);
    }

    public void setIcon(Drawable drawable) {
        u();
        this.f1412p.setIcon(drawable);
    }
}
