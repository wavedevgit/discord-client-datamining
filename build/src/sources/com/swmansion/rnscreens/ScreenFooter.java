package com.swmansion.rnscreens;

import android.app.Activity;
import android.view.View;
import android.view.ViewParent;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.x0;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.views.view.ReactViewGroup;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import java.util.List;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ScreenFooter extends ReactViewGroup {

    /* renamed from: u  reason: collision with root package name */
    public static final a f17797u = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final ReactContext f17798d;

    /* renamed from: e  reason: collision with root package name */
    private int f17799e;

    /* renamed from: i  reason: collision with root package name */
    private int f17800i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f17801o;

    /* renamed from: p  reason: collision with root package name */
    private float f17802p;

    /* renamed from: q  reason: collision with root package name */
    private int f17803q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f17804r;

    /* renamed from: s  reason: collision with root package name */
    private final c f17805s;

    /* renamed from: t  reason: collision with root package name */
    private b f17806t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends BottomSheetBehavior.g {
        b() {
        }

        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.g
        public void b(View bottomSheet, float f10) {
            Intrinsics.checkNotNullParameter(bottomSheet, "bottomSheet");
            ScreenFooter.this.f17802p = Math.max(f10, 0.0f);
            if (!ScreenFooter.this.f17801o) {
                ScreenFooter screenFooter = ScreenFooter.this;
                int i10 = screenFooter.f17799e;
                int reactHeight = ScreenFooter.this.getReactHeight();
                ScreenFooter screenFooter2 = ScreenFooter.this;
                screenFooter.n(i10, reactHeight, screenFooter2.u(screenFooter2.f17802p), ScreenFooter.this.f17803q);
            }
        }

        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.g
        public void c(View bottomSheet, int i10) {
            Intrinsics.checkNotNullParameter(bottomSheet, "bottomSheet");
            if (!hn.i.f27112a.b(i10)) {
                return;
            }
            if (i10 == 3 || i10 == 4 || i10 == 6) {
                ScreenFooter screenFooter = ScreenFooter.this;
                screenFooter.n(screenFooter.f17799e, ScreenFooter.this.getReactHeight(), ScreenFooter.this.t(i10), ScreenFooter.this.f17803q);
            }
            ScreenFooter.this.f17800i = i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends x0.b {
        c() {
            super(0);
        }

        @Override // androidx.core.view.x0.b
        public void onEnd(androidx.core.view.x0 animation) {
            Intrinsics.checkNotNullParameter(animation, "animation");
            ScreenFooter.this.f17801o = false;
        }

        @Override // androidx.core.view.x0.b
        public WindowInsetsCompat onProgress(WindowInsetsCompat insets, List runningAnimations) {
            Intrinsics.checkNotNullParameter(insets, "insets");
            Intrinsics.checkNotNullParameter(runningAnimations, "runningAnimations");
            ScreenFooter.this.f17803q = insets.f(WindowInsetsCompat.p.c()).f3166d - insets.f(WindowInsetsCompat.p.f()).f3166d;
            ScreenFooter screenFooter = ScreenFooter.this;
            int i10 = screenFooter.f17799e;
            int reactHeight = ScreenFooter.this.getReactHeight();
            ScreenFooter screenFooter2 = ScreenFooter.this;
            screenFooter.n(i10, reactHeight, screenFooter2.u(screenFooter2.f17802p), ScreenFooter.this.f17803q);
            return insets;
        }

        @Override // androidx.core.view.x0.b
        public x0.a onStart(androidx.core.view.x0 animation, x0.a bounds) {
            Intrinsics.checkNotNullParameter(animation, "animation");
            Intrinsics.checkNotNullParameter(bounds, "bounds");
            ScreenFooter.this.f17801o = true;
            x0.a onStart = super.onStart(animation, bounds);
            Intrinsics.checkNotNullExpressionValue(onStart, "onStart(...)");
            return onStart;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ScreenFooter(ReactContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.f17798d = reactContext;
        this.f17800i = 5;
        c cVar = new c();
        this.f17805s = cVar;
        Activity currentActivity = reactContext.getCurrentActivity();
        if (currentActivity != null) {
            View decorView = currentActivity.getWindow().getDecorView();
            Intrinsics.checkNotNullExpressionValue(decorView, "getDecorView(...)");
            androidx.core.view.h0.L0(decorView, cVar);
            this.f17806t = new b();
            return;
        }
        throw new IllegalStateException("[RNScreens] Context detached from activity while creating ScreenFooter");
    }

    private final boolean getHasReceivedInitialLayoutFromParent() {
        if (this.f17799e > 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int getReactHeight() {
        return getMeasuredHeight();
    }

    private final int getReactWidth() {
        return getMeasuredWidth();
    }

    private final Screen getScreenParent() {
        ViewParent parent = getParent();
        if (parent instanceof Screen) {
            return (Screen) parent;
        }
        return null;
    }

    private final BottomSheetBehavior<Screen> getSheetBehavior() {
        return r().getSheetBehavior();
    }

    public static /* synthetic */ void o(ScreenFooter screenFooter, int i10, int i11, int i12, int i13, int i14, Object obj) {
        if ((i14 & 8) != 0) {
            i13 = 0;
        }
        screenFooter.n(i10, i11, i12, i13);
    }

    private final Screen r() {
        Screen screenParent = getScreenParent();
        if (screenParent != null) {
            return screenParent;
        }
        throw new IllegalArgumentException("Required value was null.");
    }

    private final BottomSheetBehavior s() {
        BottomSheetBehavior<Screen> sheetBehavior = getSheetBehavior();
        if (sheetBehavior != null) {
            return sheetBehavior;
        }
        throw new IllegalArgumentException("Required value was null.");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int t(int i10) {
        BottomSheetBehavior s10 = s();
        if (i10 != 3) {
            if (i10 != 4) {
                if (i10 != 5) {
                    if (i10 == 6) {
                        return (int) (this.f17799e * (1 - s10.t0()));
                    }
                    throw new IllegalArgumentException("[RNScreens] use of stable-state method for unstable state");
                }
                return this.f17799e;
            }
            return this.f17799e - s10.v0();
        }
        return s10.s0();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int u(float f10) {
        Screen screenParent = getScreenParent();
        if (screenParent != null) {
            return screenParent.getTop();
        }
        return (int) ih.a.b(t(4), t(3), f10);
    }

    @NotNull
    public final ReactContext getReactContext() {
        return this.f17798d;
    }

    public final void n(int i10, int i11, int i12, int i13) {
        int max = ((i10 - i11) - i12) - Math.max(i13, 0);
        int reactHeight = getReactHeight();
        setTop(Math.max(max, 0));
        setBottom(getTop() + reactHeight);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        BottomSheetBehavior<Screen> sheetBehavior = getSheetBehavior();
        if (sheetBehavior != null) {
            q(sheetBehavior);
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        BottomSheetBehavior<Screen> sheetBehavior = getSheetBehavior();
        if (sheetBehavior != null) {
            v(sheetBehavior);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        super.onLayout(z10, i10, i11, i12, i13);
        if (!getHasReceivedInitialLayoutFromParent()) {
            return;
        }
        n(this.f17799e, i13 - i11, t(s().w0()), this.f17803q);
    }

    public final void p(boolean z10, int i10, int i11, int i12, int i13, int i14) {
        this.f17799e = i14;
        o(this, i14, getReactHeight(), t(s().w0()), 0, 8, null);
    }

    public final void q(BottomSheetBehavior behavior) {
        Intrinsics.checkNotNullParameter(behavior, "behavior");
        if (!this.f17804r) {
            behavior.c0(this.f17806t);
            this.f17804r = true;
        }
    }

    public final void v(BottomSheetBehavior behavior) {
        Intrinsics.checkNotNullParameter(behavior, "behavior");
        if (this.f17804r) {
            behavior.G0(this.f17806t);
            this.f17804r = false;
        }
    }
}
