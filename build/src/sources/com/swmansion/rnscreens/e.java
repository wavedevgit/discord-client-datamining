package com.swmansion.rnscreens;

import android.app.Activity;
import android.content.Context;
import android.os.Build;
import android.view.Choreographer;
import android.view.View;
import android.view.ViewParent;
import android.view.Window;
import android.view.WindowInsets;
import android.view.WindowManager;
import androidx.appcompat.widget.Toolbar;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import com.facebook.react.modules.core.ReactChoreographer;
import com.facebook.react.uimanager.ThemedReactContext;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e extends Toolbar {

    /* renamed from: i0  reason: collision with root package name */
    private final ScreenStackHeaderConfig f19122i0;

    /* renamed from: j0  reason: collision with root package name */
    private final boolean f19123j0;

    /* renamed from: k0  reason: collision with root package name */
    private final boolean f19124k0;

    /* renamed from: l0  reason: collision with root package name */
    private boolean f19125l0;

    /* renamed from: m0  reason: collision with root package name */
    private Insets f19126m0;

    /* renamed from: n0  reason: collision with root package name */
    private boolean f19127n0;

    /* renamed from: o0  reason: collision with root package name */
    private boolean f19128o0;

    /* renamed from: p0  reason: collision with root package name */
    private final Choreographer.FrameCallback f19129p0;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Choreographer.FrameCallback {
        a() {
        }

        @Override // android.view.Choreographer.FrameCallback
        public void doFrame(long j10) {
            e.this.f19128o0 = false;
            e eVar = e.this;
            eVar.measure(View.MeasureSpec.makeMeasureSpec(eVar.getWidth(), Integer.MIN_VALUE), View.MeasureSpec.makeMeasureSpec(e.this.getHeight(), Integer.MIN_VALUE));
            e eVar2 = e.this;
            eVar2.layout(eVar2.getLeft(), e.this.getTop(), e.this.getRight(), e.this.getBottom());
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public e(Context context, ScreenStackHeaderConfig config) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(config, "config");
        this.f19122i0 = config;
        this.f19123j0 = true;
        this.f19124k0 = true;
        Insets NONE = Insets.f3303e;
        Intrinsics.checkNotNullExpressionValue(NONE, "NONE");
        this.f19126m0 = NONE;
        getMenu();
        this.f19129p0 = new a();
    }

    private final void T(int i10, int i11, int i12, int i13) {
        this.f19125l0 = true;
        U();
        setPadding(i10, i11, i12, i13);
    }

    private final void U() {
        this.f19127n0 = this.f19123j0;
    }

    public final void V() {
        setContentInsetStartWithNavigation(this.f19122i0.getPreferredContentInsetStartWithNavigation());
        J(this.f19122i0.getPreferredContentInsetStart(), this.f19122i0.getPreferredContentInsetEnd());
    }

    @NotNull
    public final ScreenStackHeaderConfig getConfig() {
        return this.f19122i0;
    }

    @Override // android.view.View
    public WindowInsets onApplyWindowInsets(WindowInsets windowInsets) {
        int i10;
        WindowInsets onApplyWindowInsets = super.onApplyWindowInsets(windowInsets);
        Insets b10 = co.d.b(this, WindowInsetsCompat.p.b(), onApplyWindowInsets, false, 4, null);
        Insets b11 = co.d.b(this, WindowInsetsCompat.p.h(), onApplyWindowInsets, false, 4, null);
        Insets c10 = Insets.c(b10.f3304a + b11.f3304a, 0, b10.f3306c + b11.f3306c, 0);
        Intrinsics.checkNotNullExpressionValue(c10, "of(...)");
        int i11 = b10.f3305b;
        if (this.f19124k0) {
            i10 = b11.f3305b;
        } else {
            i10 = 0;
        }
        Insets c11 = Insets.c(0, Math.max(i11, i10), 0, Math.max(b10.f3307d, 0));
        Intrinsics.checkNotNullExpressionValue(c11, "of(...)");
        Insets a10 = Insets.a(c10, c11);
        Intrinsics.checkNotNullExpressionValue(a10, "add(...)");
        if (!Intrinsics.areEqual(this.f19126m0, a10)) {
            this.f19126m0 = a10;
            T(a10.f3304a, a10.f3305b, a10.f3306c, a10.f3307d);
        }
        return onApplyWindowInsets;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.widget.Toolbar, android.view.ViewGroup, android.view.View
    public void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        boolean z11;
        super.onLayout(z10, i10, i11, i12, i13);
        ScreenStackHeaderConfig screenStackHeaderConfig = this.f19122i0;
        if (!z10 && !this.f19127n0) {
            z11 = false;
        } else {
            z11 = true;
        }
        screenStackHeaderConfig.k(this, z11);
        this.f19127n0 = false;
    }

    @Override // android.view.View, android.view.ViewParent
    public void requestLayout() {
        com.swmansion.rnscreens.a aVar;
        Window window;
        WindowManager.LayoutParams attributes;
        super.requestLayout();
        ViewParent parent = getParent();
        Integer num = null;
        if (parent instanceof com.swmansion.rnscreens.a) {
            aVar = (com.swmansion.rnscreens.a) parent;
        } else {
            aVar = null;
        }
        if (aVar != null && this.f19125l0 && !aVar.isInLayout()) {
            aVar.H(getPaddingTop());
            this.f19125l0 = false;
        }
        Context context = getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.uimanager.ThemedReactContext");
        Activity currentActivity = ((ThemedReactContext) context).getCurrentActivity();
        if (currentActivity != null && (window = currentActivity.getWindow()) != null && (attributes = window.getAttributes()) != null) {
            num = Integer.valueOf(attributes.softInputMode);
        }
        if (Build.VERSION.SDK_INT <= 29 && num != null && num.intValue() == 32 && !this.f19128o0 && this.f19129p0 != null) {
            this.f19128o0 = true;
            ReactChoreographer.Companion.getInstance().postFrameCallback(ReactChoreographer.CallbackType.NATIVE_ANIMATED_MODULE, this.f19129p0);
        }
    }
}
