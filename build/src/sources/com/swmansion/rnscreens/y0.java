package com.swmansion.rnscreens;

import android.app.Activity;
import android.os.Build;
import android.view.View;
import android.view.ViewParent;
import android.view.Window;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.UiThreadUtil;
import com.swmansion.rnscreens.Screen;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y0 {

    /* renamed from: b  reason: collision with root package name */
    private static boolean f19412b;

    /* renamed from: c  reason: collision with root package name */
    private static boolean f19413c;

    /* renamed from: d  reason: collision with root package name */
    private static boolean f19414d;

    /* renamed from: a  reason: collision with root package name */
    public static final y0 f19411a = new y0();

    /* renamed from: e  reason: collision with root package name */
    private static b f19415e = new b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f19416a;

        static {
            int[] iArr = new int[Screen.b.values().length];
            try {
                iArr[Screen.b.f19059d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[Screen.b.f19060e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[Screen.b.f19061i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[Screen.b.f19062o.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[Screen.b.f19063p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            f19416a = iArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements androidx.core.view.w {
        b() {
        }

        @Override // androidx.core.view.w
        public WindowInsetsCompat a(View v10, WindowInsetsCompat insets) {
            Intrinsics.checkNotNullParameter(v10, "v");
            Intrinsics.checkNotNullParameter(insets, "insets");
            WindowInsetsCompat W = androidx.core.view.i0.W(v10, insets);
            Intrinsics.checkNotNullExpressionValue(W, "onApplyWindowInsets(...)");
            if (Build.VERSION.SDK_INT >= 30) {
                Insets f10 = W.f(WindowInsetsCompat.p.g());
                Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
                WindowInsetsCompat a10 = new WindowInsetsCompat.a().b(WindowInsetsCompat.p.g(), Insets.c(f10.f3304a, 0, f10.f3306c, f10.f3307d)).a();
                Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
                return a10;
            }
            WindowInsetsCompat v11 = W.v(W.o(), 0, W.p(), W.n());
            Intrinsics.checkNotNullExpressionValue(v11, "replaceSystemWindowInsets(...)");
            return v11;
        }
    }

    private y0() {
    }

    private final boolean f(Screen screen, Screen.b bVar) {
        int i10 = a.f19416a[bVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 == 5) {
                            if (screen.isNavigationBarHidden() == null) {
                                return false;
                            }
                            return true;
                        }
                        throw new as.p();
                    } else if (screen.isStatusBarAnimated() == null) {
                        return false;
                    } else {
                        return true;
                    }
                } else if (screen.isStatusBarHidden() == null) {
                    return false;
                } else {
                    return true;
                }
            } else if (screen.getStatusBarStyle() == null) {
                return false;
            } else {
                return true;
            }
        } else if (screen.getScreenOrientation() == null) {
            return false;
        } else {
            return true;
        }
    }

    private final Screen g(Screen screen, Screen.b bVar) {
        ScreenFragmentWrapper fragmentWrapper;
        if (screen != null && (fragmentWrapper = screen.getFragmentWrapper()) != null) {
            for (ScreenContainer screenContainer : fragmentWrapper.k()) {
                Screen topScreen = screenContainer.getTopScreen();
                y0 y0Var = f19411a;
                Screen g10 = y0Var.g(topScreen, bVar);
                if (g10 != null) {
                    return g10;
                }
                if (topScreen != null && y0Var.f(topScreen, bVar)) {
                    return topScreen;
                }
            }
            return null;
        }
        return null;
    }

    private final Screen h(Screen screen, Screen.b bVar) {
        for (ViewParent container = screen.getContainer(); container != null; container = container.getParent()) {
            if (container instanceof Screen) {
                Screen screen2 = (Screen) container;
                if (f(screen2, bVar)) {
                    return screen2;
                }
            }
        }
        return null;
    }

    private final Screen i(Screen screen, Screen.b bVar) {
        Screen g10 = g(screen, bVar);
        if (g10 != null) {
            return g10;
        }
        if (f(screen, bVar)) {
            return screen;
        }
        return h(screen, bVar);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(boolean z10, WindowInsetsControllerCompat windowInsetsControllerCompat) {
        if (z10) {
            windowInsetsControllerCompat.b(WindowInsetsCompat.p.g());
        } else {
            windowInsetsControllerCompat.g(WindowInsetsCompat.p.g());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(Activity activity, String str) {
        View decorView = activity.getWindow().getDecorView();
        Intrinsics.checkNotNullExpressionValue(decorView, "getDecorView(...)");
        new WindowInsetsControllerCompat(activity.getWindow(), decorView).e(Intrinsics.areEqual(str, "dark"));
    }

    public final void c() {
        f19414d = true;
    }

    public final void d() {
        f19412b = true;
    }

    public final void e() {
        f19413c = true;
    }

    public final void k(Screen screen, Activity activity) {
        final boolean z10;
        Boolean isStatusBarHidden;
        Intrinsics.checkNotNullParameter(screen, "screen");
        if (activity == null) {
            return;
        }
        Screen i10 = i(screen, Screen.b.f19061i);
        if (i10 != null && (isStatusBarHidden = i10.isStatusBarHidden()) != null) {
            z10 = isStatusBarHidden.booleanValue();
        } else {
            z10 = false;
        }
        Window window = activity.getWindow();
        final WindowInsetsControllerCompat windowInsetsControllerCompat = new WindowInsetsControllerCompat(window, window.getDecorView());
        UiThreadUtil.runOnUiThread(new Runnable() { // from class: com.swmansion.rnscreens.w0
            @Override // java.lang.Runnable
            public final void run() {
                y0.j(z10, windowInsetsControllerCompat);
            }
        });
    }

    public final void l(Screen screen, Activity activity) {
        boolean z10;
        Boolean isNavigationBarHidden;
        Intrinsics.checkNotNullParameter(screen, "screen");
        if (activity == null) {
            return;
        }
        Window window = activity.getWindow();
        Screen i10 = i(screen, Screen.b.f19063p);
        if (i10 != null && (isNavigationBarHidden = i10.isNavigationBarHidden()) != null) {
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

    public final void m(Screen screen, Activity activity) {
        int i10;
        Integer screenOrientation;
        Intrinsics.checkNotNullParameter(screen, "screen");
        if (activity == null) {
            return;
        }
        Screen i11 = i(screen, Screen.b.f19059d);
        if (i11 != null && (screenOrientation = i11.getScreenOrientation()) != null) {
            i10 = screenOrientation.intValue();
        } else {
            i10 = -1;
        }
        activity.setRequestedOrientation(i10);
    }

    public final void o(Screen screen, final Activity activity, ReactContext reactContext) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        if (activity != null && reactContext != null) {
            Screen i10 = i(screen, Screen.b.f19060e);
            final String str = (i10 == null || (str = i10.getStatusBarStyle()) == null) ? "light" : "light";
            UiThreadUtil.runOnUiThread(new Runnable() { // from class: com.swmansion.rnscreens.x0
                @Override // java.lang.Runnable
                public final void run() {
                    y0.n(activity, str);
                }
            });
        }
    }

    public final void p(Screen screen, Activity activity, ReactContext reactContext) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        if (f19412b) {
            m(screen, activity);
        }
        if (f19413c) {
            o(screen, activity, reactContext);
            k(screen, activity);
        }
        if (f19414d) {
            l(screen, activity);
        }
    }
}
