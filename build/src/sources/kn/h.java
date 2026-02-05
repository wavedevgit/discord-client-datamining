package kn;

import android.app.Activity;
import android.content.res.Resources;
import android.graphics.Rect;
import android.os.Build;
import android.util.DisplayMetrics;
import android.view.View;
import android.view.WindowManager;
import android.view.WindowMetrics;
import android.view.inputmethod.InputMethodManager;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.v;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.m;
import com.facebook.react.uimanager.ThemedReactContext;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import com.swmansion.rnscreens.Screen;
import com.swmansion.rnscreens.ScreenContainer;
import com.swmansion.rnscreens.k;
import com.swmansion.rnscreens.l;
import com.swmansion.rnscreens.n;
import com.swmansion.rnscreens.n0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements m, v {

    /* renamed from: s */
    public static final a f31953s = new a(null);

    /* renamed from: d */
    private final Screen f31954d;

    /* renamed from: e */
    private boolean f31955e;

    /* renamed from: i */
    private com.swmansion.rnscreens.m f31956i;

    /* renamed from: o */
    private int f31957o;

    /* renamed from: p */
    private int f31958p;

    /* renamed from: q */
    private final c f31959q;

    /* renamed from: r */
    private final b f31960r;

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
            h.this = r1;
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
                ((InputMethodManager) h.this.f().getReactContext().getSystemService(InputMethodManager.class)).hideSoftInputFromWindow(bottomSheet.getWindowToken(), 0);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public final class c extends BottomSheetBehavior.g {
        public c() {
            h.this = r1;
        }

        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.g
        public void b(View bottomSheet, float f10) {
            Intrinsics.checkNotNullParameter(bottomSheet, "bottomSheet");
        }

        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.g
        public void c(View bottomSheet, int i10) {
            Intrinsics.checkNotNullParameter(bottomSheet, "bottomSheet");
            h.this.m(i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class d {

        /* renamed from: a */
        public static final /* synthetic */ int[] f31963a;

        static {
            int[] iArr = new int[Lifecycle.a.values().length];
            try {
                iArr[Lifecycle.a.ON_START.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[Lifecycle.a.ON_RESUME.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[Lifecycle.a.ON_PAUSE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f31963a = iArr;
        }
    }

    public h(Screen screen) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        this.f31954d = screen;
        this.f31956i = l.f18304a;
        this.f31957o = screen.getSheetInitialDetentIndex();
        this.f31958p = i.f31964a.c(screen.getSheetInitialDetentIndex(), screen.getSheetDetents().size());
        c cVar = new c();
        this.f31959q = cVar;
        this.f31960r = new b();
        screen.getFragment();
        Fragment fragment = screen.getFragment();
        Intrinsics.checkNotNull(fragment);
        fragment.getLifecycle().a(this);
        BottomSheetBehavior g10 = g();
        if (g10 != null) {
            g10.c0(cVar);
            return;
        }
        throw new IllegalStateException("[RNScreens] Sheet delegate accepts screen with initialized sheet behaviour only.");
    }

    public static /* synthetic */ BottomSheetBehavior d(h hVar, BottomSheetBehavior bottomSheetBehavior, com.swmansion.rnscreens.m mVar, int i10, int i11, Object obj) {
        if ((i11 & 2) != 0) {
            mVar = l.f18304a;
        }
        if ((i11 & 4) != 0) {
            i10 = hVar.f31957o;
        }
        return hVar.c(bottomSheetBehavior, mVar, i10);
    }

    private final BottomSheetBehavior g() {
        return this.f31954d.getSheetBehavior();
    }

    private final n0 i() {
        Fragment fragment = this.f31954d.getFragment();
        Intrinsics.checkNotNull(fragment, "null cannot be cast to non-null type com.swmansion.rnscreens.ScreenStackFragment");
        return (n0) fragment;
    }

    private final void j() {
        com.swmansion.rnscreens.j.f18296d.g(this);
    }

    private final void k() {
        com.swmansion.rnscreens.j.f18296d.b(this);
    }

    private final void l() {
        com.swmansion.rnscreens.j.f18296d.e(n());
    }

    public final void m(int i10) {
        i iVar = i.f31964a;
        boolean b10 = iVar.b(i10);
        if (b10) {
            this.f31958p = i10;
            this.f31957o = iVar.a(i10, this.f31954d.getSheetDetents().size());
        }
        this.f31954d.onSheetDetentChanged$react_native_screens_release(this.f31957o, b10);
        if (p(i10)) {
            i().W();
        }
    }

    private final View n() {
        Activity currentActivity = this.f31954d.getReactContext().getCurrentActivity();
        if (currentActivity != null) {
            View decorView = currentActivity.getWindow().getDecorView();
            Intrinsics.checkNotNullExpressionValue(decorView, "getDecorView(...)");
            return decorView;
        }
        throw new IllegalStateException("[RNScreens] Attempt to access activity on detached context");
    }

    private final boolean p(int i10) {
        if (i10 == 5) {
            return true;
        }
        return false;
    }

    private final Integer q() {
        WindowManager windowManager;
        WindowMetrics currentWindowMetrics;
        Rect bounds;
        DisplayMetrics displayMetrics;
        ScreenContainer container = this.f31954d.getContainer();
        if (container != null) {
            return Integer.valueOf(container.getHeight());
        }
        ThemedReactContext reactContext = this.f31954d.getReactContext();
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

    @Override // androidx.core.view.v
    public WindowInsetsCompat a(View v10, WindowInsetsCompat insets) {
        Intrinsics.checkNotNullParameter(v10, "v");
        Intrinsics.checkNotNullParameter(insets, "insets");
        boolean u10 = insets.u(WindowInsetsCompat.p.c());
        Insets f10 = insets.f(WindowInsetsCompat.p.c());
        Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
        if (u10) {
            this.f31955e = true;
            this.f31956i = new n(f10.f3278d);
            BottomSheetBehavior g10 = g();
            if (g10 != null) {
                d(this, g10, this.f31956i, 0, 4, null);
            }
            Insets f11 = insets.f(WindowInsetsCompat.p.f());
            Intrinsics.checkNotNullExpressionValue(f11, "getInsets(...)");
            WindowInsetsCompat a10 = new WindowInsetsCompat.a(insets).b(WindowInsetsCompat.p.f(), Insets.c(f11.f3275a, f11.f3276b, f11.f3277c, 0)).a();
            Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
            return a10;
        }
        BottomSheetBehavior g11 = g();
        if (g11 != null) {
            if (this.f31955e) {
                d(this, g11, k.f18302a, 0, 4, null);
            } else {
                com.swmansion.rnscreens.m mVar = this.f31956i;
                l lVar = l.f18304a;
                if (!Intrinsics.areEqual(mVar, lVar)) {
                    d(this, g11, lVar, 0, 4, null);
                }
            }
        }
        this.f31956i = l.f18304a;
        this.f31955e = false;
        Insets f12 = insets.f(WindowInsetsCompat.p.f());
        Intrinsics.checkNotNullExpressionValue(f12, "getInsets(...)");
        WindowInsetsCompat a11 = new WindowInsetsCompat.a(insets).b(WindowInsetsCompat.p.f(), Insets.c(f12.f3275a, f12.f3276b, f12.f3277c, 0)).a();
        Intrinsics.checkNotNullExpressionValue(a11, "build(...)");
        return a11;
    }

    /* JADX WARN: Code restructure failed: missing block: B:86:0x0154, code lost:
        if (kn.j.a(r1) != false) goto L25;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final com.google.android.material.bottomsheet.BottomSheetBehavior c(com.google.android.material.bottomsheet.BottomSheetBehavior r13, com.swmansion.rnscreens.m r14, int r15) {
        /*
            Method dump skipped, instructions count: 747
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: kn.h.c(com.google.android.material.bottomsheet.BottomSheetBehavior, com.swmansion.rnscreens.m, int):com.google.android.material.bottomsheet.BottomSheetBehavior");
    }

    public final Screen f() {
        return this.f31954d;
    }

    @Override // androidx.lifecycle.m
    public void h(LifecycleOwner source, Lifecycle.a event) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(event, "event");
        int i10 = d.f31963a[event.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    return;
                }
                j();
                return;
            }
            k();
            return;
        }
        l();
    }
}
