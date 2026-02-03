package nm;

import android.animation.ArgbEvaluator;
import android.animation.ValueAnimator;
import android.app.Activity;
import android.view.View;
import android.view.Window;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.UiThreadUtil;
import java.lang.ref.WeakReference;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: d  reason: collision with root package name */
    public static final a f41873d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final ReactApplicationContext f41874a;

    /* renamed from: b  reason: collision with root package name */
    private WindowInsetsControllerCompat f41875b;

    /* renamed from: c  reason: collision with root package name */
    private WeakReference f41876c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public j(ReactApplicationContext mReactContext) {
        Intrinsics.checkNotNullParameter(mReactContext, "mReactContext");
        this.f41874a = mReactContext;
        this.f41876c = new WeakReference(null);
    }

    private final WindowInsetsControllerCompat f() {
        String str;
        Activity currentActivity = this.f41874a.getCurrentActivity();
        if (this.f41875b == null || !Intrinsics.areEqual(currentActivity, this.f41876c.get())) {
            if (currentActivity == null) {
                km.a aVar = km.a.f33029a;
                str = k.f41877a;
                km.a.f(aVar, str, "StatusBarManagerCompatModule: can not get `WindowInsetsControllerCompat` because current activity is null.", null, 4, null);
                return this.f41875b;
            }
            Window window = currentActivity.getWindow();
            this.f41876c = new WeakReference(currentActivity);
            this.f41875b = new WindowInsetsControllerCompat(window, window.getDecorView());
        }
        return this.f41875b;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h(Activity activity, boolean z10, int i10) {
        final Window window = activity.getWindow();
        if (z10) {
            ValueAnimator ofObject = ValueAnimator.ofObject(new ArgbEvaluator(), Integer.valueOf(window.getStatusBarColor()), Integer.valueOf(i10));
            ofObject.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: nm.i
                @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                    j.i(window, valueAnimator);
                }
            });
            ofObject.setDuration(300L).setStartDelay(0L);
            ofObject.start();
            return;
        }
        window.setStatusBarColor(i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void i(Window window, ValueAnimator animator) {
        Intrinsics.checkNotNullParameter(animator, "animator");
        Object animatedValue = animator.getAnimatedValue();
        Intrinsics.checkNotNull(animatedValue, "null cannot be cast to non-null type kotlin.Int");
        window.setStatusBarColor(((Integer) animatedValue).intValue());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(boolean z10, j jVar) {
        if (z10) {
            WindowInsetsControllerCompat f10 = jVar.f();
            if (f10 != null) {
                f10.b(WindowInsetsCompat.p.g());
                return;
            }
            return;
        }
        WindowInsetsControllerCompat f11 = jVar.f();
        if (f11 != null) {
            f11.g(WindowInsetsCompat.p.g());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void m(j jVar, String str) {
        WindowInsetsControllerCompat f10 = jVar.f();
        if (f10 != null) {
            f10.e(Intrinsics.areEqual(str, "dark-content"));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void o(j jVar, boolean z10) {
        pm.c cVar;
        View c10 = gm.f.c(jVar.f41874a);
        if (c10 != null) {
            cVar = (pm.c) c10.findViewWithTag(pm.c.f46210w.a());
        } else {
            cVar = null;
        }
        if (cVar != null) {
            cVar.i(z10);
        }
    }

    public final void g(final int i10, final boolean z10) {
        String str;
        final Activity currentActivity = this.f41874a.getCurrentActivity();
        if (currentActivity == null) {
            km.a aVar = km.a.f33029a;
            str = k.f41877a;
            km.a.f(aVar, str, "StatusBarManagerCompatModule: Ignored status bar change, current activity is null.", null, 4, null);
            return;
        }
        UiThreadUtil.runOnUiThread(new Runnable() { // from class: nm.g
            @Override // java.lang.Runnable
            public final void run() {
                j.h(currentActivity, z10, i10);
            }
        });
    }

    public final void j(final boolean z10) {
        UiThreadUtil.runOnUiThread(new Runnable() { // from class: nm.f
            @Override // java.lang.Runnable
            public final void run() {
                j.k(z10, this);
            }
        });
    }

    public final void l(final String style) {
        Intrinsics.checkNotNullParameter(style, "style");
        UiThreadUtil.runOnUiThread(new Runnable() { // from class: nm.h
            @Override // java.lang.Runnable
            public final void run() {
                j.m(j.this, style);
            }
        });
    }

    public final void n(final boolean z10) {
        UiThreadUtil.runOnUiThread(new Runnable() { // from class: nm.e
            @Override // java.lang.Runnable
            public final void run() {
                j.o(j.this, z10);
            }
        });
    }
}
