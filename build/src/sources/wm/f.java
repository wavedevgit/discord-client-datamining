package wm;

import android.animation.ArgbEvaluator;
import android.animation.ValueAnimator;
import android.app.Activity;
import android.view.Window;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.UiThreadUtil;
import java.lang.ref.WeakReference;
import java.util.Map;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: e  reason: collision with root package name */
    public static final a f53493e = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final ReactApplicationContext f53494a;

    /* renamed from: b  reason: collision with root package name */
    private h f53495b;

    /* renamed from: c  reason: collision with root package name */
    private WindowInsetsControllerCompat f53496c;

    /* renamed from: d  reason: collision with root package name */
    private WeakReference f53497d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public f(ReactApplicationContext mReactContext) {
        Intrinsics.checkNotNullParameter(mReactContext, "mReactContext");
        this.f53494a = mReactContext;
        this.f53495b = new h(mReactContext);
        this.f53497d = new WeakReference(null);
    }

    private final WindowInsetsControllerCompat g() {
        String str;
        Activity currentActivity = this.f53494a.getCurrentActivity();
        if (this.f53496c == null || !Intrinsics.areEqual(currentActivity, this.f53497d.get())) {
            if (currentActivity == null) {
                sm.a aVar = sm.a.f48740a;
                str = g.f53498a;
                sm.a.f(aVar, str, "StatusBarManagerCompatModule: can not get `WindowInsetsControllerCompat` because current activity is null.", null, 4, null);
                return this.f53496c;
            }
            Window window = currentActivity.getWindow();
            this.f53497d = new WeakReference(currentActivity);
            this.f53496c = new WindowInsetsControllerCompat(window, window.getDecorView());
        }
        return this.f53496c;
    }

    private final boolean h() {
        ym.c r10 = r();
        if (r10 != null) {
            return r10.getActive();
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(Activity activity, boolean z10, int i10) {
        final Window window = activity.getWindow();
        if (z10) {
            ValueAnimator ofObject = ValueAnimator.ofObject(new ArgbEvaluator(), Integer.valueOf(window.getStatusBarColor()), Integer.valueOf(i10));
            ofObject.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: wm.e
                @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                    f.k(window, valueAnimator);
                }
            });
            ofObject.setDuration(300L).setStartDelay(0L);
            ofObject.start();
            return;
        }
        window.setStatusBarColor(i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(Window window, ValueAnimator animator) {
        Intrinsics.checkNotNullParameter(animator, "animator");
        Object animatedValue = animator.getAnimatedValue();
        Intrinsics.checkNotNull(animatedValue, "null cannot be cast to non-null type kotlin.Int");
        window.setStatusBarColor(((Integer) animatedValue).intValue());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void m(boolean z10, f fVar) {
        if (z10) {
            WindowInsetsControllerCompat g10 = fVar.g();
            if (g10 != null) {
                g10.b(WindowInsetsCompat.p.g());
                return;
            }
            return;
        }
        WindowInsetsControllerCompat g11 = fVar.g();
        if (g11 != null) {
            g11.g(WindowInsetsCompat.p.g());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void o(f fVar, String str) {
        WindowInsetsControllerCompat g10 = fVar.g();
        if (g10 != null) {
            g10.e(Intrinsics.areEqual(str, "dark-content"));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void q(f fVar, boolean z10) {
        ym.c r10 = fVar.r();
        if (r10 != null) {
            r10.l(z10);
        }
    }

    private final ym.c r() {
        return ym.e.f56218a.a();
    }

    public final Map f() {
        return this.f53495b.a();
    }

    public final void i(final int i10, final boolean z10) {
        String str;
        if (!h()) {
            this.f53495b.b(i10, z10);
            return;
        }
        final Activity currentActivity = this.f53494a.getCurrentActivity();
        if (currentActivity == null) {
            sm.a aVar = sm.a.f48740a;
            str = g.f53498a;
            sm.a.f(aVar, str, "StatusBarManagerCompatModule: Ignored status bar change, current activity is null.", null, 4, null);
            return;
        }
        UiThreadUtil.runOnUiThread(new Runnable() { // from class: wm.d
            @Override // java.lang.Runnable
            public final void run() {
                f.j(currentActivity, z10, i10);
            }
        });
    }

    public final void l(final boolean z10) {
        UiThreadUtil.runOnUiThread(new Runnable() { // from class: wm.a
            @Override // java.lang.Runnable
            public final void run() {
                f.m(z10, this);
            }
        });
    }

    public final void n(final String style) {
        Intrinsics.checkNotNullParameter(style, "style");
        if (!h()) {
            this.f53495b.c(style);
        } else {
            UiThreadUtil.runOnUiThread(new Runnable() { // from class: wm.b
                @Override // java.lang.Runnable
                public final void run() {
                    f.o(f.this, style);
                }
            });
        }
    }

    public final void p(final boolean z10) {
        if (!h()) {
            this.f53495b.d(z10);
        } else {
            UiThreadUtil.runOnUiThread(new Runnable() { // from class: wm.c
                @Override // java.lang.Runnable
                public final void run() {
                    f.q(f.this, z10);
                }
            });
        }
    }
}
