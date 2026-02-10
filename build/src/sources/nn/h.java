package nn;

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
    public static final a f38983s = new a(null);

    /* renamed from: d */
    private final Screen f38984d;

    /* renamed from: e */
    private boolean f38985e;

    /* renamed from: i */
    private com.swmansion.rnscreens.m f38986i;

    /* renamed from: o */
    private int f38987o;

    /* renamed from: p */
    private int f38988p;

    /* renamed from: q */
    private final c f38989q;

    /* renamed from: r */
    private final b f38990r;

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
        public static final /* synthetic */ int[] f38993a;

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
            f38993a = iArr;
        }
    }

    public h(Screen screen) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        this.f38984d = screen;
        this.f38986i = l.f18424a;
        this.f38987o = screen.getSheetInitialDetentIndex();
        this.f38988p = i.f38994a.c(screen.getSheetInitialDetentIndex(), screen.getSheetDetents().size());
        c cVar = new c();
        this.f38989q = cVar;
        this.f38990r = new b();
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
            mVar = l.f18424a;
        }
        if ((i11 & 4) != 0) {
            i10 = hVar.f38987o;
        }
        return hVar.c(bottomSheetBehavior, mVar, i10);
    }

    private final BottomSheetBehavior f() {
        return this.f38984d.getSheetBehavior();
    }

    private final n0 g() {
        Fragment fragment = this.f38984d.getFragment();
        Intrinsics.checkNotNull(fragment, "null cannot be cast to non-null type com.swmansion.rnscreens.ScreenStackFragment");
        return (n0) fragment;
    }

    private final void i() {
        com.swmansion.rnscreens.j.f18416d.g(this);
    }

    private final void j() {
        com.swmansion.rnscreens.j.f18416d.b(this);
    }

    private final void l() {
        com.swmansion.rnscreens.j.f18416d.e(o());
    }

    public final void m(int i10) {
        i iVar = i.f38994a;
        boolean b10 = iVar.b(i10);
        if (b10) {
            this.f38988p = i10;
            this.f38987o = iVar.a(i10, this.f38984d.getSheetDetents().size());
        }
        this.f38984d.onSheetDetentChanged$react_native_screens_release(this.f38987o, b10);
        if (p(i10)) {
            g().W();
        }
    }

    private final View o() {
        Activity currentActivity = this.f38984d.getReactContext().getCurrentActivity();
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
        ScreenContainer container = this.f38984d.getContainer();
        if (container != null) {
            return Integer.valueOf(container.getHeight());
        }
        ThemedReactContext reactContext = this.f38984d.getReactContext();
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
            this.f38985e = true;
            this.f38986i = new n(f10.f3304d);
            BottomSheetBehavior f11 = f();
            if (f11 != null) {
                d(this, f11, this.f38986i, 0, 4, null);
            }
            Insets f12 = insets.f(WindowInsetsCompat.p.f());
            Intrinsics.checkNotNullExpressionValue(f12, "getInsets(...)");
            WindowInsetsCompat a10 = new WindowInsetsCompat.a(insets).b(WindowInsetsCompat.p.f(), Insets.c(f12.f3301a, f12.f3302b, f12.f3303c, 0)).a();
            Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
            return a10;
        }
        BottomSheetBehavior f13 = f();
        if (f13 != null) {
            if (this.f38985e) {
                d(this, f13, k.f18422a, 0, 4, null);
            } else {
                com.swmansion.rnscreens.m mVar = this.f38986i;
                l lVar = l.f18424a;
                if (!Intrinsics.areEqual(mVar, lVar)) {
                    d(this, f13, lVar, 0, 4, null);
                }
            }
        }
        this.f38986i = l.f18424a;
        this.f38985e = false;
        Insets f14 = insets.f(WindowInsetsCompat.p.f());
        Intrinsics.checkNotNullExpressionValue(f14, "getInsets(...)");
        WindowInsetsCompat a11 = new WindowInsetsCompat.a(insets).b(WindowInsetsCompat.p.f(), Insets.c(f14.f3301a, f14.f3302b, f14.f3303c, 0)).a();
        Intrinsics.checkNotNullExpressionValue(a11, "build(...)");
        return a11;
    }

    /* JADX WARN: Code restructure failed: missing block: B:86:0x0154, code lost:
        if (nn.j.a(r1) != false) goto L25;
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
        throw new UnsupportedOperationException("Method not decompiled: nn.h.c(com.google.android.material.bottomsheet.BottomSheetBehavior, com.swmansion.rnscreens.m, int):com.google.android.material.bottomsheet.BottomSheetBehavior");
    }

    public final Screen e() {
        return this.f38984d;
    }

    @Override // androidx.lifecycle.m
    public void k(LifecycleOwner source, Lifecycle.a event) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(event, "event");
        int i10 = d.f38993a[event.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    return;
                }
                i();
                return;
            }
            j();
            return;
        }
        l();
    }
}
