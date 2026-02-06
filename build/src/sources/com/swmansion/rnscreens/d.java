package com.swmansion.rnscreens;

import android.app.Activity;
import android.content.Context;
import android.os.Build;
import android.view.Choreographer;
import android.view.View;
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
public class d extends Toolbar {

    /* renamed from: i0  reason: collision with root package name */
    private final ScreenStackHeaderConfig f18220i0;

    /* renamed from: j0  reason: collision with root package name */
    private Insets f18221j0;

    /* renamed from: k0  reason: collision with root package name */
    private boolean f18222k0;

    /* renamed from: l0  reason: collision with root package name */
    private boolean f18223l0;

    /* renamed from: m0  reason: collision with root package name */
    private final Choreographer.FrameCallback f18224m0;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Choreographer.FrameCallback {
        a() {
        }

        @Override // android.view.Choreographer.FrameCallback
        public void doFrame(long j10) {
            d.this.f18223l0 = false;
            d dVar = d.this;
            dVar.measure(View.MeasureSpec.makeMeasureSpec(dVar.getWidth(), Integer.MIN_VALUE), View.MeasureSpec.makeMeasureSpec(d.this.getHeight(), Integer.MIN_VALUE));
            d dVar2 = d.this;
            dVar2.layout(dVar2.getLeft(), d.this.getTop(), d.this.getRight(), d.this.getBottom());
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d(Context context, ScreenStackHeaderConfig config) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(config, "config");
        this.f18220i0 = config;
        Insets NONE = Insets.f3603e;
        Intrinsics.checkNotNullExpressionValue(NONE, "NONE");
        this.f18221j0 = NONE;
        this.f18224m0 = new a();
    }

    private final void T(int i10, int i11, int i12, int i13) {
        U();
        setPadding(i10, i11, i12, i13);
    }

    private final void U() {
        this.f18222k0 = getShouldAvoidDisplayCutout();
    }

    private final boolean getShouldApplyTopInset() {
        return this.f18220i0.i();
    }

    private final boolean getShouldAvoidDisplayCutout() {
        return this.f18220i0.i();
    }

    public final void V() {
        setContentInsetStartWithNavigation(this.f18220i0.getPreferredContentInsetStartWithNavigation());
        J(this.f18220i0.getPreferredContentInsetStart(), this.f18220i0.getPreferredContentInsetEnd());
    }

    @NotNull
    public final ScreenStackHeaderConfig getConfig() {
        return this.f18220i0;
    }

    @Override // android.view.View
    public WindowInsets onApplyWindowInsets(WindowInsets windowInsets) {
        int i10;
        WindowInsets onApplyWindowInsets = super.onApplyWindowInsets(windowInsets);
        WindowInsets rootWindowInsets = getRootWindowInsets();
        Insets b10 = sn.d.b(this, WindowInsetsCompat.p.b(), rootWindowInsets, false, 4, null);
        Insets b11 = sn.d.b(this, WindowInsetsCompat.p.h(), rootWindowInsets, false, 4, null);
        Insets a10 = sn.d.a(this, WindowInsetsCompat.p.h(), rootWindowInsets, true);
        Insets c10 = Insets.c(b10.f3604a + b11.f3604a, 0, b10.f3606c + b11.f3606c, 0);
        Intrinsics.checkNotNullExpressionValue(c10, "of(...)");
        int i11 = b10.f3605b;
        if (getShouldApplyTopInset()) {
            i10 = a10.f3605b;
        } else {
            i10 = 0;
        }
        Insets c11 = Insets.c(0, Math.max(i11, i10), 0, Math.max(b10.f3607d, 0));
        Intrinsics.checkNotNullExpressionValue(c11, "of(...)");
        Insets a11 = Insets.a(c10, c11);
        Intrinsics.checkNotNullExpressionValue(a11, "add(...)");
        if (!Intrinsics.areEqual(this.f18221j0, a11)) {
            this.f18221j0 = a11;
            T(a11.f3604a, a11.f3605b, a11.f3606c, a11.f3607d);
        }
        return onApplyWindowInsets;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.widget.Toolbar, android.view.ViewGroup, android.view.View
    public void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        boolean z11;
        super.onLayout(z10, i10, i11, i12, i13);
        ScreenStackHeaderConfig screenStackHeaderConfig = this.f18220i0;
        if (!z10 && !this.f18222k0) {
            z11 = false;
        } else {
            z11 = true;
        }
        screenStackHeaderConfig.k(this, z11);
        this.f18222k0 = false;
    }

    @Override // android.view.View, android.view.ViewParent
    public void requestLayout() {
        Integer num;
        Window window;
        WindowManager.LayoutParams attributes;
        super.requestLayout();
        Context context = getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.uimanager.ThemedReactContext");
        Activity currentActivity = ((ThemedReactContext) context).getCurrentActivity();
        if (currentActivity != null && (window = currentActivity.getWindow()) != null && (attributes = window.getAttributes()) != null) {
            num = Integer.valueOf(attributes.softInputMode);
        } else {
            num = null;
        }
        if (Build.VERSION.SDK_INT <= 29 && num != null && num.intValue() == 32 && !this.f18223l0 && this.f18224m0 != null) {
            this.f18223l0 = true;
            ReactChoreographer.Companion.getInstance().postFrameCallback(ReactChoreographer.CallbackType.NATIVE_ANIMATED_MODULE, this.f18224m0);
        }
    }
}
