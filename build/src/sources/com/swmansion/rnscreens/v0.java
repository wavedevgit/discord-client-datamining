package com.swmansion.rnscreens;

import android.animation.ArgbEvaluator;
import android.animation.ValueAnimator;
import android.app.Activity;
import android.graphics.Color;
import android.os.Build;
import android.view.View;
import android.view.ViewParent;
import android.view.Window;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import com.facebook.react.bridge.GuardedRunnable;
import com.facebook.react.bridge.JSExceptionHandler;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.swmansion.rnscreens.Screen;
import com.swmansion.rnscreens.v0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class v0 {

    /* renamed from: b  reason: collision with root package name */
    private static boolean f17980b;

    /* renamed from: c  reason: collision with root package name */
    private static boolean f17981c;

    /* renamed from: d  reason: collision with root package name */
    private static boolean f17982d;

    /* renamed from: e  reason: collision with root package name */
    private static Integer f17983e;

    /* renamed from: a  reason: collision with root package name */
    public static final v0 f17979a = new v0();

    /* renamed from: f  reason: collision with root package name */
    private static d f17984f = new d();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f17985a;

        static {
            int[] iArr = new int[Screen.b.values().length];
            try {
                iArr[Screen.b.f17784d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[Screen.b.f17785e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[Screen.b.f17786i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[Screen.b.f17787o.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[Screen.b.f17788p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[Screen.b.f17789q.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[Screen.b.f17790r.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr[Screen.b.f17791s.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr[Screen.b.f17792t.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            f17985a = iArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends GuardedRunnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Activity f17986d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Integer f17987e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ boolean f17988i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Activity activity, Integer num, boolean z10, JSExceptionHandler jSExceptionHandler) {
            super(jSExceptionHandler);
            this.f17986d = activity;
            this.f17987e = num;
            this.f17988i = z10;
            Intrinsics.checkNotNull(jSExceptionHandler);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(Window window, ValueAnimator animator) {
            Intrinsics.checkNotNullParameter(animator, "animator");
            Object animatedValue = animator.getAnimatedValue();
            Intrinsics.checkNotNull(animatedValue, "null cannot be cast to non-null type kotlin.Int");
            window.setStatusBarColor(((Integer) animatedValue).intValue());
        }

        @Override // com.facebook.react.bridge.GuardedRunnable
        public void runGuarded() {
            final Window window = this.f17986d.getWindow();
            ValueAnimator ofObject = ValueAnimator.ofObject(new ArgbEvaluator(), Integer.valueOf(window.getStatusBarColor()), this.f17987e);
            ofObject.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.swmansion.rnscreens.w0
                @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                    v0.b.b(window, valueAnimator);
                }
            });
            if (this.f17988i) {
                ofObject.setDuration(300L).setStartDelay(0L);
            } else {
                ofObject.setDuration(0L).setStartDelay(300L);
            }
            ofObject.start();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends GuardedRunnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Activity f17989d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ boolean f17990e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(Activity activity, boolean z10, JSExceptionHandler jSExceptionHandler) {
            super(jSExceptionHandler);
            this.f17989d = activity;
            this.f17990e = z10;
            Intrinsics.checkNotNull(jSExceptionHandler);
        }

        @Override // com.facebook.react.bridge.GuardedRunnable
        public void runGuarded() {
            View decorView = this.f17989d.getWindow().getDecorView();
            Intrinsics.checkNotNullExpressionValue(decorView, "getDecorView(...)");
            if (this.f17990e) {
                j jVar = j.f17890d;
                jVar.e(decorView);
                jVar.b(v0.f17984f);
            } else {
                j.f17890d.g(v0.f17984f);
            }
            androidx.core.view.h0.k0(decorView);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements androidx.core.view.v {
        d() {
        }

        @Override // androidx.core.view.v
        public WindowInsetsCompat a(View v10, WindowInsetsCompat insets) {
            Intrinsics.checkNotNullParameter(v10, "v");
            Intrinsics.checkNotNullParameter(insets, "insets");
            WindowInsetsCompat Z = androidx.core.view.h0.Z(v10, insets);
            Intrinsics.checkNotNullExpressionValue(Z, "onApplyWindowInsets(...)");
            if (Build.VERSION.SDK_INT >= 30) {
                Insets f10 = Z.f(WindowInsetsCompat.p.g());
                Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
                WindowInsetsCompat a10 = new WindowInsetsCompat.a().b(WindowInsetsCompat.p.g(), Insets.c(f10.f3163a, 0, f10.f3165c, f10.f3166d)).a();
                Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
                return a10;
            }
            WindowInsetsCompat v11 = Z.v(Z.o(), 0, Z.p(), Z.n());
            Intrinsics.checkNotNullExpressionValue(v11, "replaceSystemWindowInsets(...)");
            return v11;
        }
    }

    private v0() {
    }

    private final boolean h(Screen screen, Screen.b bVar) {
        switch (a.f17985a[bVar.ordinal()]) {
            case 1:
                if (screen.getScreenOrientation() == null) {
                    return false;
                }
                return true;
            case 2:
                if (screen.getStatusBarColor() == null) {
                    return false;
                }
                return true;
            case 3:
                if (screen.getStatusBarStyle() == null) {
                    return false;
                }
                return true;
            case 4:
                if (screen.isStatusBarTranslucent() == null) {
                    return false;
                }
                return true;
            case 5:
                if (screen.isStatusBarHidden() == null) {
                    return false;
                }
                return true;
            case 6:
                if (screen.isStatusBarAnimated() == null) {
                    return false;
                }
                return true;
            case 7:
                if (screen.getNavigationBarColor() == null) {
                    return false;
                }
                return true;
            case 8:
                if (screen.isNavigationBarTranslucent() == null) {
                    return false;
                }
                return true;
            case 9:
                if (screen.isNavigationBarHidden() == null) {
                    return false;
                }
                return true;
            default:
                throw new lr.p();
        }
    }

    private final Screen i(Screen screen, Screen.b bVar) {
        ScreenFragmentWrapper fragmentWrapper;
        if (screen != null && (fragmentWrapper = screen.getFragmentWrapper()) != null) {
            for (ScreenContainer screenContainer : fragmentWrapper.f()) {
                Screen topScreen = screenContainer.getTopScreen();
                v0 v0Var = f17979a;
                Screen i10 = v0Var.i(topScreen, bVar);
                if (i10 != null) {
                    return i10;
                }
                if (topScreen != null && v0Var.h(topScreen, bVar)) {
                    return topScreen;
                }
            }
            return null;
        }
        return null;
    }

    private final Screen j(Screen screen, Screen.b bVar) {
        for (ViewParent container = screen.getContainer(); container != null; container = container.getParent()) {
            if (container instanceof Screen) {
                Screen screen2 = (Screen) container;
                if (h(screen2, bVar)) {
                    return screen2;
                }
            }
        }
        return null;
    }

    private final Screen k(Screen screen, Screen.b bVar) {
        Screen i10 = i(screen, bVar);
        if (i10 != null) {
            return i10;
        }
        if (h(screen, bVar)) {
            return screen;
        }
        return j(screen, bVar);
    }

    private final boolean l(int i10) {
        if (1 - ((((Color.red(i10) * 0.299d) + (Color.green(i10) * 0.587d)) + (Color.blue(i10) * 0.114d)) / ((double) SetSpanOperation.SPAN_MAX_PRIORITY)) < 0.5d) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(boolean z10, WindowInsetsControllerCompat windowInsetsControllerCompat) {
        if (z10) {
            windowInsetsControllerCompat.b(WindowInsetsCompat.p.g());
        } else {
            windowInsetsControllerCompat.g(WindowInsetsCompat.p.g());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void p(Window window, int i10) {
        new WindowInsetsControllerCompat(window, window.getDecorView()).d(f17979a.l(i10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void u(Activity activity, String str) {
        View decorView = activity.getWindow().getDecorView();
        Intrinsics.checkNotNullExpressionValue(decorView, "getDecorView(...)");
        new WindowInsetsControllerCompat(activity.getWindow(), decorView).e(Intrinsics.areEqual(str, "dark"));
    }

    public final void e() {
        f17982d = true;
    }

    public final void f() {
        f17980b = true;
    }

    public final void g() {
        f17981c = true;
    }

    public final void m(Screen screen, Activity activity, ReactContext reactContext) {
        Integer num;
        boolean z10;
        Boolean isStatusBarAnimated;
        Intrinsics.checkNotNullParameter(screen, "screen");
        if (activity != null && reactContext != null) {
            if (f17983e == null) {
                f17983e = Integer.valueOf(activity.getWindow().getStatusBarColor());
            }
            Screen k10 = k(screen, Screen.b.f17785e);
            Screen k11 = k(screen, Screen.b.f17789q);
            if (k10 == null || (num = k10.getStatusBarColor()) == null) {
                num = f17983e;
            }
            if (k11 != null && (isStatusBarAnimated = k11.isStatusBarAnimated()) != null) {
                z10 = isStatusBarAnimated.booleanValue();
            } else {
                z10 = false;
            }
            UiThreadUtil.runOnUiThread(new b(activity, num, z10, reactContext.getExceptionHandler()));
        }
    }

    public final void o(Screen screen, Activity activity) {
        final boolean z10;
        Boolean isStatusBarHidden;
        Intrinsics.checkNotNullParameter(screen, "screen");
        if (activity == null) {
            return;
        }
        Screen k10 = k(screen, Screen.b.f17788p);
        if (k10 != null && (isStatusBarHidden = k10.isStatusBarHidden()) != null) {
            z10 = isStatusBarHidden.booleanValue();
        } else {
            z10 = false;
        }
        Window window = activity.getWindow();
        final WindowInsetsControllerCompat windowInsetsControllerCompat = new WindowInsetsControllerCompat(window, window.getDecorView());
        UiThreadUtil.runOnUiThread(new Runnable() { // from class: com.swmansion.rnscreens.s0
            @Override // java.lang.Runnable
            public final void run() {
                v0.n(z10, windowInsetsControllerCompat);
            }
        });
    }

    public final void q(Screen screen, Activity activity) {
        final int navigationBarColor;
        Integer navigationBarColor2;
        Intrinsics.checkNotNullParameter(screen, "screen");
        if (activity == null) {
            return;
        }
        final Window window = activity.getWindow();
        Screen k10 = k(screen, Screen.b.f17790r);
        if (k10 != null && (navigationBarColor2 = k10.getNavigationBarColor()) != null) {
            navigationBarColor = navigationBarColor2.intValue();
        } else {
            navigationBarColor = window.getNavigationBarColor();
        }
        UiThreadUtil.runOnUiThread(new Runnable() { // from class: com.swmansion.rnscreens.u0
            @Override // java.lang.Runnable
            public final void run() {
                v0.p(window, navigationBarColor);
            }
        });
        window.setNavigationBarColor(navigationBarColor);
    }

    public final void r(Screen screen, Activity activity) {
        boolean z10;
        Boolean isNavigationBarHidden;
        Intrinsics.checkNotNullParameter(screen, "screen");
        if (activity == null) {
            return;
        }
        Window window = activity.getWindow();
        Screen k10 = k(screen, Screen.b.f17792t);
        if (k10 != null && (isNavigationBarHidden = k10.isNavigationBarHidden()) != null) {
            z10 = isNavigationBarHidden.booleanValue();
        } else {
            z10 = false;
        }
        if (z10) {
            WindowInsetsControllerCompat windowInsetsControllerCompat = new WindowInsetsControllerCompat(window, window.getDecorView());
            windowInsetsControllerCompat.b(WindowInsetsCompat.p.f());
            windowInsetsControllerCompat.f(2);
            return;
        }
        new WindowInsetsControllerCompat(window, window.getDecorView()).g(WindowInsetsCompat.p.f());
    }

    public final void s(Screen screen, Activity activity) {
        Boolean isNavigationBarTranslucent;
        Intrinsics.checkNotNullParameter(screen, "screen");
        if (activity != null && !nn.b.f41910a.a()) {
            Window window = activity.getWindow();
            Screen k10 = k(screen, Screen.b.f17791s);
            if (k10 != null && (isNavigationBarTranslucent = k10.isNavigationBarTranslucent()) != null) {
                androidx.core.view.w0.c(window, !isNavigationBarTranslucent.booleanValue());
            }
        }
    }

    public final void t(Screen screen, Activity activity) {
        int i10;
        Integer screenOrientation;
        Intrinsics.checkNotNullParameter(screen, "screen");
        if (activity == null) {
            return;
        }
        Screen k10 = k(screen, Screen.b.f17784d);
        if (k10 != null && (screenOrientation = k10.getScreenOrientation()) != null) {
            i10 = screenOrientation.intValue();
        } else {
            i10 = -1;
        }
        activity.setRequestedOrientation(i10);
    }

    public final void v(Screen screen, final Activity activity, ReactContext reactContext) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        if (activity != null && reactContext != null) {
            Screen k10 = k(screen, Screen.b.f17786i);
            final String str = (k10 == null || (str = k10.getStatusBarStyle()) == null) ? "light" : "light";
            UiThreadUtil.runOnUiThread(new Runnable() { // from class: com.swmansion.rnscreens.t0
                @Override // java.lang.Runnable
                public final void run() {
                    v0.u(activity, str);
                }
            });
        }
    }

    public final void w(Screen screen, Activity activity, ReactContext reactContext) {
        boolean z10;
        Boolean isStatusBarTranslucent;
        Intrinsics.checkNotNullParameter(screen, "screen");
        if (activity != null && reactContext != null && !nn.b.f41910a.a()) {
            Screen k10 = k(screen, Screen.b.f17787o);
            if (k10 != null && (isStatusBarTranslucent = k10.isStatusBarTranslucent()) != null) {
                z10 = isStatusBarTranslucent.booleanValue();
            } else {
                z10 = false;
            }
            UiThreadUtil.runOnUiThread(new c(activity, z10, reactContext.getExceptionHandler()));
        }
    }

    public final void x(Screen screen, Activity activity, ReactContext reactContext) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        if (f17980b) {
            t(screen, activity);
        }
        if (f17981c) {
            m(screen, activity, reactContext);
            v(screen, activity, reactContext);
            w(screen, activity, reactContext);
            o(screen, activity);
        }
        if (f17982d) {
            q(screen, activity);
            s(screen, activity);
            r(screen, activity);
        }
    }
}
