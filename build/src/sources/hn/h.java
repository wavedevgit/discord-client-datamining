package hn;

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
    public static final a f27101s = new a(null);

    /* renamed from: d */
    private final Screen f27102d;

    /* renamed from: e */
    private boolean f27103e;

    /* renamed from: i */
    private com.swmansion.rnscreens.m f27104i;

    /* renamed from: o */
    private int f27105o;

    /* renamed from: p */
    private int f27106p;

    /* renamed from: q */
    private final c f27107q;

    /* renamed from: r */
    private final b f27108r;

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
                ((InputMethodManager) h.this.e().getReactContext().getSystemService(InputMethodManager.class)).hideSoftInputFromWindow(bottomSheet.getWindowToken(), 0);
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
        public static final /* synthetic */ int[] f27111a;

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
            f27111a = iArr;
        }
    }

    public h(Screen screen) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        this.f27102d = screen;
        this.f27104i = l.f17898a;
        this.f27105o = screen.getSheetInitialDetentIndex();
        this.f27106p = i.f27112a.c(screen.getSheetInitialDetentIndex(), screen.getSheetDetents().size());
        c cVar = new c();
        this.f27107q = cVar;
        this.f27108r = new b();
        screen.getFragment();
        Fragment fragment = screen.getFragment();
        Intrinsics.checkNotNull(fragment);
        fragment.getLifecycle().a(this);
        BottomSheetBehavior f10 = f();
        if (f10 != null) {
            f10.c0(cVar);
            return;
        }
        throw new IllegalStateException("[RNScreens] Sheet delegate accepts screen with initialized sheet behaviour only.");
    }

    public static /* synthetic */ BottomSheetBehavior d(h hVar, BottomSheetBehavior bottomSheetBehavior, com.swmansion.rnscreens.m mVar, int i10, int i11, Object obj) {
        if ((i11 & 2) != 0) {
            mVar = l.f17898a;
        }
        if ((i11 & 4) != 0) {
            i10 = hVar.f27105o;
        }
        return hVar.c(bottomSheetBehavior, mVar, i10);
    }

    private final BottomSheetBehavior f() {
        return this.f27102d.getSheetBehavior();
    }

    private final n0 i() {
        Fragment fragment = this.f27102d.getFragment();
        Intrinsics.checkNotNull(fragment, "null cannot be cast to non-null type com.swmansion.rnscreens.ScreenStackFragment");
        return (n0) fragment;
    }

    private final void j() {
        com.swmansion.rnscreens.j.f17890d.g(this);
    }

    private final void k() {
        com.swmansion.rnscreens.j.f17890d.b(this);
    }

    private final void l() {
        com.swmansion.rnscreens.j.f17890d.e(o());
    }

    public final void m(int i10) {
        i iVar = i.f27112a;
        boolean b10 = iVar.b(i10);
        if (b10) {
            this.f27106p = i10;
            this.f27105o = iVar.a(i10, this.f27102d.getSheetDetents().size());
        }
        this.f27102d.onSheetDetentChanged$react_native_screens_release(this.f27105o, b10);
        if (p(i10)) {
            i().W();
        }
    }

    private final View o() {
        Activity currentActivity = this.f27102d.getReactContext().getCurrentActivity();
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
        ScreenContainer container = this.f27102d.getContainer();
        if (container != null) {
            return Integer.valueOf(container.getHeight());
        }
        ThemedReactContext reactContext = this.f27102d.getReactContext();
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
            this.f27103e = true;
            this.f27104i = new n(f10.f3166d);
            BottomSheetBehavior f11 = f();
            if (f11 != null) {
                d(this, f11, this.f27104i, 0, 4, null);
            }
            Insets f12 = insets.f(WindowInsetsCompat.p.f());
            Intrinsics.checkNotNullExpressionValue(f12, "getInsets(...)");
            WindowInsetsCompat a10 = new WindowInsetsCompat.a(insets).b(WindowInsetsCompat.p.f(), Insets.c(f12.f3163a, f12.f3164b, f12.f3165c, 0)).a();
            Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
            return a10;
        }
        BottomSheetBehavior f13 = f();
        if (f13 != null) {
            if (this.f27103e) {
                d(this, f13, k.f17896a, 0, 4, null);
            } else {
                com.swmansion.rnscreens.m mVar = this.f27104i;
                l lVar = l.f17898a;
                if (!Intrinsics.areEqual(mVar, lVar)) {
                    d(this, f13, lVar, 0, 4, null);
                }
            }
        }
        this.f27104i = l.f17898a;
        this.f27103e = false;
        Insets f14 = insets.f(WindowInsetsCompat.p.f());
        Intrinsics.checkNotNullExpressionValue(f14, "getInsets(...)");
        WindowInsetsCompat a11 = new WindowInsetsCompat.a(insets).b(WindowInsetsCompat.p.f(), Insets.c(f14.f3163a, f14.f3164b, f14.f3165c, 0)).a();
        Intrinsics.checkNotNullExpressionValue(a11, "build(...)");
        return a11;
    }

    /* JADX WARN: Code restructure failed: missing block: B:86:0x0154, code lost:
        if (hn.j.a(r1) != false) goto L25;
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
        throw new UnsupportedOperationException("Method not decompiled: hn.h.c(com.google.android.material.bottomsheet.BottomSheetBehavior, com.swmansion.rnscreens.m, int):com.google.android.material.bottomsheet.BottomSheetBehavior");
    }

    public final Screen e() {
        return this.f27102d;
    }

    @Override // androidx.lifecycle.m
    public void h(LifecycleOwner source, Lifecycle.a event) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(event, "event");
        int i10 = d.f27111a[event.ordinal()];
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
