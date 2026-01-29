package en;

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
    public static final a f22975s = new a(null);

    /* renamed from: d */
    private final Screen f22976d;

    /* renamed from: e */
    private boolean f22977e;

    /* renamed from: i */
    private com.swmansion.rnscreens.m f22978i;

    /* renamed from: o */
    private int f22979o;

    /* renamed from: p */
    private int f22980p;

    /* renamed from: q */
    private final c f22981q;

    /* renamed from: r */
    private final b f22982r;

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
        public static final /* synthetic */ int[] f22985a;

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
            f22985a = iArr;
        }
    }

    public h(Screen screen) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        this.f22976d = screen;
        this.f22978i = l.f19283a;
        this.f22979o = screen.getSheetInitialDetentIndex();
        this.f22980p = i.f22986a.c(screen.getSheetInitialDetentIndex(), screen.getSheetDetents().size());
        c cVar = new c();
        this.f22981q = cVar;
        this.f22982r = new b();
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
            mVar = l.f19283a;
        }
        if ((i11 & 4) != 0) {
            i10 = hVar.f22979o;
        }
        return hVar.c(bottomSheetBehavior, mVar, i10);
    }

    private final BottomSheetBehavior f() {
        return this.f22976d.getSheetBehavior();
    }

    private final n0 i() {
        Fragment fragment = this.f22976d.getFragment();
        Intrinsics.checkNotNull(fragment, "null cannot be cast to non-null type com.swmansion.rnscreens.ScreenStackFragment");
        return (n0) fragment;
    }

    private final void j() {
        com.swmansion.rnscreens.j.f19275d.g(this);
    }

    private final void k() {
        com.swmansion.rnscreens.j.f19275d.b(this);
    }

    private final void l() {
        com.swmansion.rnscreens.j.f19275d.e(o());
    }

    public final void m(int i10) {
        i iVar = i.f22986a;
        boolean b10 = iVar.b(i10);
        if (b10) {
            this.f22980p = i10;
            this.f22979o = iVar.a(i10, this.f22976d.getSheetDetents().size());
        }
        this.f22976d.onSheetDetentChanged$react_native_screens_release(this.f22979o, b10);
        if (p(i10)) {
            i().W();
        }
    }

    private final View o() {
        Activity currentActivity = this.f22976d.getReactContext().getCurrentActivity();
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
        ScreenContainer container = this.f22976d.getContainer();
        if (container != null) {
            return Integer.valueOf(container.getHeight());
        }
        ThemedReactContext reactContext = this.f22976d.getReactContext();
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
            this.f22977e = true;
            this.f22978i = new n(f10.f3153d);
            BottomSheetBehavior f11 = f();
            if (f11 != null) {
                d(this, f11, this.f22978i, 0, 4, null);
            }
            Insets f12 = insets.f(WindowInsetsCompat.p.f());
            Intrinsics.checkNotNullExpressionValue(f12, "getInsets(...)");
            WindowInsetsCompat a10 = new WindowInsetsCompat.a(insets).b(WindowInsetsCompat.p.f(), Insets.c(f12.f3150a, f12.f3151b, f12.f3152c, 0)).a();
            Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
            return a10;
        }
        BottomSheetBehavior f13 = f();
        if (f13 != null) {
            if (this.f22977e) {
                d(this, f13, k.f19281a, 0, 4, null);
            } else {
                com.swmansion.rnscreens.m mVar = this.f22978i;
                l lVar = l.f19283a;
                if (!Intrinsics.areEqual(mVar, lVar)) {
                    d(this, f13, lVar, 0, 4, null);
                }
            }
        }
        this.f22978i = l.f19283a;
        this.f22977e = false;
        Insets f14 = insets.f(WindowInsetsCompat.p.f());
        Intrinsics.checkNotNullExpressionValue(f14, "getInsets(...)");
        WindowInsetsCompat a11 = new WindowInsetsCompat.a(insets).b(WindowInsetsCompat.p.f(), Insets.c(f14.f3150a, f14.f3151b, f14.f3152c, 0)).a();
        Intrinsics.checkNotNullExpressionValue(a11, "build(...)");
        return a11;
    }

    /* JADX WARN: Code restructure failed: missing block: B:86:0x0154, code lost:
        if (en.j.a(r1) != false) goto L25;
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
        throw new UnsupportedOperationException("Method not decompiled: en.h.c(com.google.android.material.bottomsheet.BottomSheetBehavior, com.swmansion.rnscreens.m, int):com.google.android.material.bottomsheet.BottomSheetBehavior");
    }

    public final Screen e() {
        return this.f22976d;
    }

    @Override // androidx.lifecycle.m
    public void h(LifecycleOwner source, Lifecycle.a event) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(event, "event");
        int i10 = d.f22985a[event.ordinal()];
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
