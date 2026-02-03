package nm;

import android.app.Activity;
import android.os.Build;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.view.inputmethod.InputMethodManager;
import android.widget.EditText;
import androidx.core.view.d1;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.UiThreadUtil;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: d  reason: collision with root package name */
    public static final a f41905d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final ReactApplicationContext f41906a;

    /* renamed from: b  reason: collision with root package name */
    private final hm.f f41907b;

    /* renamed from: c  reason: collision with root package name */
    private final int f41908c;

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
        this.f41906a = mReactContext;
        this.f41907b = new hm.f();
        this.f41908c = k();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void g(boolean z10, f fVar, final View view, Activity activity, final boolean z11) {
        Object obj;
        if (Build.VERSION.SDK_INT >= 30 && !z10) {
            fVar.f41907b.x(view, new Function1() { // from class: nm.d
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit h10;
                    h10 = f.h(view, z11, (d1) obj2);
                    return h10;
                }
            });
            return;
        }
        InputMethodManager inputMethodManager = null;
        if (activity != null) {
            obj = activity.getSystemService("input_method");
        } else {
            obj = null;
        }
        if (obj instanceof InputMethodManager) {
            inputMethodManager = (InputMethodManager) obj;
        }
        if (inputMethodManager != null) {
            inputMethodManager.hideSoftInputFromWindow(view.getWindowToken(), 0);
        }
        j(z11, view);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h(final View view, final boolean z10, d1 insetsController) {
        Intrinsics.checkNotNullParameter(insetsController, "insetsController");
        insetsController.a(false);
        view.post(new Runnable() { // from class: nm.e
            @Override // java.lang.Runnable
            public final void run() {
                f.i(z10, view);
            }
        });
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void i(boolean z10, View view) {
        j(z10, view);
    }

    private static final void j(boolean z10, View view) {
        if (!z10) {
            view.clearFocus();
        }
    }

    private final int k() {
        Window window;
        WindowManager.LayoutParams attributes;
        Activity currentActivity = this.f41906a.getCurrentActivity();
        if (currentActivity != null && (window = currentActivity.getWindow()) != null && (attributes = window.getAttributes()) != null) {
            return attributes.softInputMode;
        }
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void o() {
        pm.a.f46166a.a();
    }

    private final void q(final int i10) {
        UiThreadUtil.runOnUiThread(new Runnable() { // from class: nm.c
            @Override // java.lang.Runnable
            public final void run() {
                f.r(f.this, i10);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void r(f fVar, int i10) {
        Activity currentActivity;
        Window window;
        if (fVar.k() != i10 && (currentActivity = fVar.f41906a.getCurrentActivity()) != null && (window = currentActivity.getWindow()) != null) {
            window.setSoftInputMode(i10);
        }
    }

    public final void f(final boolean z10, final boolean z11) {
        final Activity currentActivity = this.f41906a.getCurrentActivity();
        final EditText b10 = pm.a.f46166a.b();
        if (b10 != null) {
            UiThreadUtil.runOnUiThread(new Runnable() { // from class: nm.a
                @Override // java.lang.Runnable
                public final void run() {
                    f.g(z11, this, b10, currentActivity, z10);
                }
            });
        }
    }

    public final void m() {
        q(this.f41908c);
    }

    public final void n(String direction) {
        Intrinsics.checkNotNullParameter(direction, "direction");
        if (Intrinsics.areEqual(direction, "current")) {
            UiThreadUtil.runOnUiThread(new Runnable() { // from class: nm.b
                @Override // java.lang.Runnable
                public final void run() {
                    f.o();
                }
            });
            return;
        }
        EditText b10 = pm.a.f46166a.b();
        if (b10 != null) {
            pm.c.f46169a.j(direction, b10);
        }
    }

    public final void p(int i10) {
        q(i10);
    }

    public final void l() {
    }
}
