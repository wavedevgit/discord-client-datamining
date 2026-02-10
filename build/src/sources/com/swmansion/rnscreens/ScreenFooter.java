package com.swmansion.rnscreens;

import android.app.Activity;
import android.view.View;
import android.view.ViewParent;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.y0;
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
    public static final a f19068u = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final ReactContext f19069d;

    /* renamed from: e  reason: collision with root package name */
    private int f19070e;

    /* renamed from: i  reason: collision with root package name */
    private int f19071i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f19072o;

    /* renamed from: p  reason: collision with root package name */
    private float f19073p;

    /* renamed from: q  reason: collision with root package name */
    private int f19074q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f19075r;

    /* renamed from: s  reason: collision with root package name */
    private final c f19076s;

    /* renamed from: t  reason: collision with root package name */
    private b f19077t;

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
            ScreenFooter.this.f19073p = Math.max(f10, 0.0f);
            if (!ScreenFooter.this.f19072o) {
                ScreenFooter screenFooter = ScreenFooter.this;
                int i10 = screenFooter.f19070e;
                int reactHeight = ScreenFooter.this.getReactHeight();
                ScreenFooter screenFooter2 = ScreenFooter.this;
                screenFooter.o(i10, reactHeight, screenFooter2.v(screenFooter2.f19073p), ScreenFooter.this.f19074q);
            }
        }

        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.g
        public void c(View bottomSheet, int i10) {
            Intrinsics.checkNotNullParameter(bottomSheet, "bottomSheet");
            if (!pn.p.f42843a.b(i10)) {
                return;
            }
            if (i10 == 3 || i10 == 4 || i10 == 6) {
                ScreenFooter screenFooter = ScreenFooter.this;
                screenFooter.o(screenFooter.f19070e, ScreenFooter.this.getReactHeight(), ScreenFooter.this.u(i10), ScreenFooter.this.f19074q);
            }
            ScreenFooter.this.f19071i = i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends y0.b {
        c() {
            super(0);
        }

        @Override // androidx.core.view.y0.b
        public void onEnd(androidx.core.view.y0 animation) {
            Intrinsics.checkNotNullParameter(animation, "animation");
            ScreenFooter.this.f19072o = false;
        }

        @Override // androidx.core.view.y0.b
        public WindowInsetsCompat onProgress(WindowInsetsCompat insets, List runningAnimations) {
            Intrinsics.checkNotNullParameter(insets, "insets");
            Intrinsics.checkNotNullParameter(runningAnimations, "runningAnimations");
            ScreenFooter.this.f19074q = insets.f(WindowInsetsCompat.p.c()).f3307d - insets.f(WindowInsetsCompat.p.f()).f3307d;
            ScreenFooter screenFooter = ScreenFooter.this;
            int i10 = screenFooter.f19070e;
            int reactHeight = ScreenFooter.this.getReactHeight();
            ScreenFooter screenFooter2 = ScreenFooter.this;
            screenFooter.o(i10, reactHeight, screenFooter2.v(screenFooter2.f19073p), ScreenFooter.this.f19074q);
            return insets;
        }

        @Override // androidx.core.view.y0.b
        public y0.a onStart(androidx.core.view.y0 animation, y0.a bounds) {
            Intrinsics.checkNotNullParameter(animation, "animation");
            Intrinsics.checkNotNullParameter(bounds, "bounds");
            ScreenFooter.this.f19072o = true;
            y0.a onStart = super.onStart(animation, bounds);
            Intrinsics.checkNotNullExpressionValue(onStart, "onStart(...)");
            return onStart;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ScreenFooter(ReactContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.f19069d = reactContext;
        this.f19071i = 5;
        c cVar = new c();
        this.f19076s = cVar;
        Activity currentActivity = reactContext.getCurrentActivity();
        if (currentActivity != null) {
            View decorView = currentActivity.getWindow().getDecorView();
            Intrinsics.checkNotNullExpressionValue(decorView, "getDecorView(...)");
            androidx.core.view.i0.E0(decorView, cVar);
            this.f19077t = new b();
            return;
        }
        throw new IllegalStateException("[RNScreens] Context detached from activity while creating ScreenFooter");
    }

    private final boolean getHasReceivedInitialLayoutFromParent() {
        if (this.f19070e > 0) {
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
        return s().getSheetBehavior();
    }

    public static /* synthetic */ void p(ScreenFooter screenFooter, int i10, int i11, int i12, int i13, int i14, Object obj) {
        if ((i14 & 8) != 0) {
            i13 = 0;
        }
        screenFooter.o(i10, i11, i12, i13);
    }

    private final Screen s() {
        Screen screenParent = getScreenParent();
        if (screenParent != null) {
            return screenParent;
        }
        throw new IllegalArgumentException("Required value was null.");
    }

    private final BottomSheetBehavior t() {
        BottomSheetBehavior<Screen> sheetBehavior = getSheetBehavior();
        if (sheetBehavior != null) {
            return sheetBehavior;
        }
        throw new IllegalArgumentException("Required value was null.");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int u(int i10) {
        BottomSheetBehavior t10 = t();
        if (i10 != 3) {
            if (i10 != 4) {
                if (i10 != 5) {
                    if (i10 == 6) {
                        return (int) (this.f19070e * (1 - t10.t0()));
                    }
                    throw new IllegalArgumentException("[RNScreens] use of stable-state method for unstable state");
                }
                return this.f19070e;
            }
            return this.f19070e - t10.w0();
        }
        return t10.s0();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int v(float f10) {
        Screen screenParent = getScreenParent();
        if (screenParent != null) {
            return screenParent.getTop();
        }
        return (int) nh.a.c(u(4), u(3), f10);
    }

    @NotNull
    public final ReactContext getReactContext() {
        return this.f19069d;
    }

    public final void o(int i10, int i11, int i12, int i13) {
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
            r(sheetBehavior);
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        BottomSheetBehavior<Screen> sheetBehavior = getSheetBehavior();
        if (sheetBehavior != null) {
            w(sheetBehavior);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        super.onLayout(z10, i10, i11, i12, i13);
        if (!getHasReceivedInitialLayoutFromParent()) {
            return;
        }
        o(this.f19070e, i13 - i11, u(t().x0()), this.f19074q);
    }

    public final void q(boolean z10, int i10, int i11, int i12, int i13, int i14) {
        this.f19070e = i14;
        p(this, i14, getReactHeight(), u(t().x0()), 0, 8, null);
    }

    public final void r(BottomSheetBehavior behavior) {
        Intrinsics.checkNotNullParameter(behavior, "behavior");
        if (!this.f19075r) {
            behavior.c0(this.f19077t);
            this.f19075r = true;
        }
    }

    public final void w(BottomSheetBehavior behavior) {
        Intrinsics.checkNotNullParameter(behavior, "behavior");
        if (this.f19075r) {
            behavior.J0(this.f19077t);
            this.f19075r = false;
        }
    }
}
