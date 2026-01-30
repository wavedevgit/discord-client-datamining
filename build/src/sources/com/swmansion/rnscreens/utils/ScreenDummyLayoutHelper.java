package com.swmansion.rnscreens.utils;

import android.app.Activity;
import android.content.Context;
import android.util.Log;
import android.view.View;
import android.widget.TextView;
import androidx.appcompat.widget.Toolbar;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import com.facebook.jni.annotations.DoNotStrip;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ViewProps;
import com.google.android.material.appbar.AppBarLayout;
import com.swmansion.rnscreens.ScreenStackHeaderConfig;
import com.swmansion.rnscreens.utils.ScreenDummyLayoutHelper;
import java.lang.ref.WeakReference;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
@DoNotStrip
@Metadata(d1 = {"\u0000z\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\t\b\u0001\u0018\u0000 @2\u00020\u0001:\u0001AB\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u0017\u0010\u0007\u001a\u00020\u00062\u0006\u0010\u0003\u001a\u00020\u0002H\u0002¢\u0006\u0004\b\u0007\u0010\bJ\u0017\u0010\f\u001a\u00020\u000b2\u0006\u0010\n\u001a\u00020\tH\u0002¢\u0006\u0004\b\f\u0010\rJ\u001f\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\u0006\u0010\u0010\u001a\u00020\u0006H\u0003¢\u0006\u0004\b\u0012\u0010\u0013J!\u0010\u0017\u001a\u00020\u00022\u0010\b\u0002\u0010\u0016\u001a\n\u0012\u0004\u0012\u00020\u0015\u0018\u00010\u0014H\u0002¢\u0006\u0004\b\u0017\u0010\u0018J\u000f\u0010\u001a\u001a\u00020\u0019H\u0002¢\u0006\u0004\b\u001a\u0010\u001bJ\u000f\u0010\u001c\u001a\u00020\u000bH\u0016¢\u0006\u0004\b\u001c\u0010\u001dJ\u000f\u0010\u001e\u001a\u00020\u000bH\u0016¢\u0006\u0004\b\u001e\u0010\u001dJ\u000f\u0010\u001f\u001a\u00020\u000bH\u0016¢\u0006\u0004\b\u001f\u0010\u001dR\u0016\u0010#\u001a\u00020 8\u0002@\u0002X\u0082.¢\u0006\u0006\n\u0004\b!\u0010\"R\u0016\u0010'\u001a\u00020$8\u0002@\u0002X\u0082.¢\u0006\u0006\n\u0004\b%\u0010&R\u0016\u0010*\u001a\u00020(8\u0002@\u0002X\u0082.¢\u0006\u0006\n\u0004\b\u001a\u0010)R\u0016\u0010.\u001a\u00020+8\u0002@\u0002X\u0082.¢\u0006\u0006\n\u0004\b,\u0010-R\u0016\u00101\u001a\u00020\u00118\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b/\u00100R\u0016\u00104\u001a\u00020\u000e8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b2\u00103R\u0016\u00108\u001a\u0002058\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b6\u00107R\u001c\u0010<\u001a\b\u0012\u0004\u0012\u00020\u0002098\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b:\u0010;R\u0016\u0010?\u001a\u00020\u00068\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b=\u0010>¨\u0006B"}, d2 = {"Lcom/swmansion/rnscreens/utils/ScreenDummyLayoutHelper;", "Lcom/facebook/react/bridge/LifecycleEventListener;", "Lcom/facebook/react/bridge/ReactApplicationContext;", "reactContext", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "", "g", "(Lcom/facebook/react/bridge/ReactApplicationContext;)Z", "Landroid/content/Context;", "contextWithTheme", "", "f", "(Landroid/content/Context;)V", "", ViewProps.FONT_SIZE, "isTitleEmpty", "", "computeDummyLayout", "(IZ)F", "Lkotlin/Function0;", "", "lazyMessage", "j", "(Lkotlin/jvm/functions/Function0;)Lcom/facebook/react/bridge/ReactApplicationContext;", "Landroid/app/Activity;", "i", "()Landroid/app/Activity;", "onHostResume", "()V", "onHostPause", "onHostDestroy", "Landroidx/coordinatorlayout/widget/CoordinatorLayout;", "d", "Landroidx/coordinatorlayout/widget/CoordinatorLayout;", "coordinatorLayout", "Lcom/google/android/material/appbar/AppBarLayout;", "e", "Lcom/google/android/material/appbar/AppBarLayout;", "appBarLayout", "Landroid/view/View;", "Landroid/view/View;", "dummyContentView", "Landroidx/appcompat/widget/Toolbar;", "o", "Landroidx/appcompat/widget/Toolbar;", "toolbar", "p", "F", "defaultFontSize", "q", "I", "defaultContentInsetStartWithNavigation", "Lcom/swmansion/rnscreens/utils/a;", "r", "Lcom/swmansion/rnscreens/utils/a;", "cache", "Ljava/lang/ref/WeakReference;", "s", "Ljava/lang/ref/WeakReference;", "reactContextRef", "t", "Z", "isLayoutInitialized", "u", "a", "react-native-screens_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nScreenDummyLayoutHelper.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ScreenDummyLayoutHelper.kt\ncom/swmansion/rnscreens/utils/ScreenDummyLayoutHelper\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,286:1\n1#2:287\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ScreenDummyLayoutHelper implements LifecycleEventListener {

    /* renamed from: u  reason: collision with root package name */
    public static final a f19345u = new a(null);

    /* renamed from: v  reason: collision with root package name */
    private static WeakReference f19346v = new WeakReference(null);

    /* renamed from: d  reason: collision with root package name */
    private CoordinatorLayout f19347d;

    /* renamed from: e  reason: collision with root package name */
    private AppBarLayout f19348e;

    /* renamed from: i  reason: collision with root package name */
    private View f19349i;

    /* renamed from: o  reason: collision with root package name */
    private Toolbar f19350o;

    /* renamed from: p  reason: collision with root package name */
    private float f19351p;

    /* renamed from: q  reason: collision with root package name */
    private int f19352q;

    /* renamed from: r  reason: collision with root package name */
    private com.swmansion.rnscreens.utils.a f19353r;

    /* renamed from: s  reason: collision with root package name */
    private WeakReference f19354s;

    /* renamed from: t  reason: collision with root package name */
    private volatile boolean f19355t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @DoNotStrip
        public final ScreenDummyLayoutHelper getInstance() {
            return (ScreenDummyLayoutHelper) ScreenDummyLayoutHelper.f19346v.get();
        }

        private a() {
        }
    }

    public ScreenDummyLayoutHelper(ReactApplicationContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.f19353r = com.swmansion.rnscreens.utils.a.f19356c.a();
        this.f19354s = new WeakReference(reactContext);
        try {
            System.loadLibrary("react_codegen_rnscreens");
        } catch (UnsatisfiedLinkError unused) {
            Log.w("ScreenDummyLayoutHelper", "[RNScreens] Failed to load react_codegen_rnscreens library.");
        }
        f19346v = new WeakReference(this);
        if (!reactContext.hasCurrentActivity() || !g(reactContext)) {
            reactContext.addLifecycleEventListener(this);
        }
    }

    @DoNotStrip
    private final float computeDummyLayout(int i10, boolean z10) {
        float f10;
        if (!this.f19355t && !g(j(new Function0() { // from class: kn.e
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Object e10;
                e10 = ScreenDummyLayoutHelper.e();
                return e10;
            }
        }))) {
            Log.e("ScreenDummyLayoutHelper", "[RNScreens] Failed to late-init layout while computing header height. This is most likely a race-condition-bug in react-native-screens, please file an issue at https://github.com/software-mansion/react-native-screens/issues");
            return 0.0f;
        } else if (this.f19353r.c(new b(i10, z10))) {
            return this.f19353r.b();
        } else {
            View decorView = i().getWindow().getDecorView();
            Intrinsics.checkNotNullExpressionValue(decorView, "getDecorView(...)");
            int width = decorView.getWidth();
            int height = decorView.getHeight();
            int makeMeasureSpec = View.MeasureSpec.makeMeasureSpec(width, 1073741824);
            int makeMeasureSpec2 = View.MeasureSpec.makeMeasureSpec(height, 1073741824);
            AppBarLayout appBarLayout = null;
            if (z10) {
                Toolbar toolbar = this.f19350o;
                if (toolbar == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("toolbar");
                    toolbar = null;
                }
                toolbar.setTitle("");
                Toolbar toolbar2 = this.f19350o;
                if (toolbar2 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("toolbar");
                    toolbar2 = null;
                }
                toolbar2.setContentInsetStartWithNavigation(0);
            } else {
                Toolbar toolbar3 = this.f19350o;
                if (toolbar3 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("toolbar");
                    toolbar3 = null;
                }
                toolbar3.setTitle("FontSize123!#$");
                Toolbar toolbar4 = this.f19350o;
                if (toolbar4 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("toolbar");
                    toolbar4 = null;
                }
                toolbar4.setContentInsetStartWithNavigation(this.f19352q);
            }
            ScreenStackHeaderConfig.a aVar = ScreenStackHeaderConfig.O;
            Toolbar toolbar5 = this.f19350o;
            if (toolbar5 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("toolbar");
                toolbar5 = null;
            }
            TextView a10 = aVar.a(toolbar5);
            if (a10 != null) {
                if (i10 != -1) {
                    f10 = i10;
                } else {
                    f10 = this.f19351p;
                }
                a10.setTextSize(f10);
            }
            CoordinatorLayout coordinatorLayout = this.f19347d;
            if (coordinatorLayout == null) {
                Intrinsics.throwUninitializedPropertyAccessException("coordinatorLayout");
                coordinatorLayout = null;
            }
            coordinatorLayout.measure(makeMeasureSpec, makeMeasureSpec2);
            CoordinatorLayout coordinatorLayout2 = this.f19347d;
            if (coordinatorLayout2 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("coordinatorLayout");
                coordinatorLayout2 = null;
            }
            coordinatorLayout2.layout(0, 0, width, height);
            AppBarLayout appBarLayout2 = this.f19348e;
            if (appBarLayout2 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("appBarLayout");
            } else {
                appBarLayout = appBarLayout2;
            }
            float dIPFromPixel = PixelUtil.toDIPFromPixel(appBarLayout.getHeight());
            this.f19353r = new com.swmansion.rnscreens.utils.a(new b(i10, z10), dIPFromPixel);
            return dIPFromPixel;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Object e() {
        return "[RNScreens] Context was null-ed before dummy layout was initialized";
    }

    private final void f(Context context) {
        this.f19347d = new CoordinatorLayout(context);
        AppBarLayout appBarLayout = new AppBarLayout(context);
        appBarLayout.setLayoutParams(new CoordinatorLayout.f(-1, -2));
        this.f19348e = appBarLayout;
        Toolbar toolbar = new Toolbar(context);
        toolbar.setTitle("FontSize123!#$");
        AppBarLayout.d dVar = new AppBarLayout.d(-1, -2);
        dVar.g(0);
        toolbar.setLayoutParams(dVar);
        this.f19350o = toolbar;
        TextView a10 = ScreenStackHeaderConfig.O.a(toolbar);
        Intrinsics.checkNotNull(a10);
        this.f19351p = a10.getTextSize();
        Toolbar toolbar2 = this.f19350o;
        View view = null;
        if (toolbar2 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("toolbar");
            toolbar2 = null;
        }
        this.f19352q = toolbar2.getContentInsetStartWithNavigation();
        AppBarLayout appBarLayout2 = this.f19348e;
        if (appBarLayout2 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("appBarLayout");
            appBarLayout2 = null;
        }
        Toolbar toolbar3 = this.f19350o;
        if (toolbar3 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("toolbar");
            toolbar3 = null;
        }
        appBarLayout2.addView(toolbar3);
        View view2 = new View(context);
        view2.setLayoutParams(new CoordinatorLayout.f(-1, -1));
        this.f19349i = view2;
        CoordinatorLayout coordinatorLayout = this.f19347d;
        if (coordinatorLayout == null) {
            Intrinsics.throwUninitializedPropertyAccessException("coordinatorLayout");
            coordinatorLayout = null;
        }
        AppBarLayout appBarLayout3 = this.f19348e;
        if (appBarLayout3 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("appBarLayout");
            appBarLayout3 = null;
        }
        coordinatorLayout.addView(appBarLayout3);
        View view3 = this.f19349i;
        if (view3 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("dummyContentView");
        } else {
            view = view3;
        }
        coordinatorLayout.addView(view);
        this.f19355t = true;
    }

    private final boolean g(ReactApplicationContext reactApplicationContext) {
        if (this.f19355t) {
            return true;
        }
        if (!reactApplicationContext.hasCurrentActivity()) {
            return false;
        }
        Activity currentActivity = reactApplicationContext.getCurrentActivity();
        if (currentActivity != null) {
            synchronized (this) {
                if (this.f19355t) {
                    return true;
                }
                f(currentActivity);
                Unit unit = Unit.f33298a;
                return true;
            }
        }
        throw new IllegalArgumentException("[RNScreens] Attempt to use context detached from activity. This could happen only due to race-condition.");
    }

    @DoNotStrip
    public static final ScreenDummyLayoutHelper getInstance() {
        return f19345u.getInstance();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Object h() {
        return "[RNScreens] ReactContext missing in onHostResume! This should not happen.";
    }

    private final Activity i() {
        Activity currentActivity = k(this, null, 1, null).getCurrentActivity();
        if (currentActivity != null) {
            return currentActivity;
        }
        throw new IllegalArgumentException("[RNScreens] Attempt to use context detached from activity");
    }

    private final ReactApplicationContext j(Function0 function0) {
        Object obj = this.f19354s.get();
        if (function0 == null) {
            function0 = new Function0() { // from class: kn.g
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Object l10;
                    l10 = ScreenDummyLayoutHelper.l();
                    return l10;
                }
            };
        }
        if (obj != null) {
            return (ReactApplicationContext) obj;
        }
        throw new IllegalArgumentException(function0.invoke().toString());
    }

    static /* synthetic */ ReactApplicationContext k(ScreenDummyLayoutHelper screenDummyLayoutHelper, Function0 function0, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            function0 = null;
        }
        return screenDummyLayoutHelper.j(function0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Object l() {
        return "[RNScreens] Attempt to require missing react context";
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostDestroy() {
        ReactApplicationContext reactApplicationContext = (ReactApplicationContext) this.f19354s.get();
        if (reactApplicationContext != null) {
            reactApplicationContext.removeLifecycleEventListener(this);
        }
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostPause() {
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostResume() {
        ReactApplicationContext j10 = j(new Function0() { // from class: kn.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Object h10;
                h10 = ScreenDummyLayoutHelper.h();
                return h10;
            }
        });
        if (g(j10)) {
            j10.removeLifecycleEventListener(this);
        } else {
            Log.w("ScreenDummyLayoutHelper", "[RNScreens] Failed to initialise dummy layout in onHostResume.");
        }
    }
}
